import {
    del,
    get,
    PlaceDomain,
    PlaceSystem,
    PlaceZone,
    QueryResponse,
    queryApplications,
    queryDomains,
    querySystems,
    queryZones,
    removeApplication,
    removeSystem,
    removeZone,
    showSystem,
    showZone,
} from '@placeos/ts-client';
import type { PlaceTenant } from '../admin/staff-api.component';
import { i18n } from './locale.service';

/**
 * Resolution and execution of "delete the things associated with this item".
 *
 * PlaceOS already cascades most relationships server side — deleting a zone
 * takes its child zones, trigger instances, metadata, settings and group links;
 * deleting a system takes any module used by only that system. The one
 * relationship that is *not* cascaded is `sys.zones`, a text array, so a system
 * whose only zones are deleted is left orphaned with `zones: []`. Everything
 * here exists to close that gap, plus the handful of authority-scoped records
 * that have no foreign key back to `authority`.
 *
 * See tasks/PPT-1203 for the full relationship audit.
 */

/** Page size used when walking collections. Server caps a page at 10000. */
const PAGE_SIZE = 500;
/** Ceiling on zones walked in one subtree, guards against a cyclic `parent_id`. */
const MAX_ZONES = 5000;
/** Ceiling on pages followed for a single query. */
const MAX_PAGES = 100;
/** Concurrent requests issued while resolving a plan. */
const READ_CONCURRENCY = 8;

/** Kinds of resource a cascade can remove directly. */
export type CascadeResourceType =
    | 'system'
    | 'zone'
    | 'application'
    | 'tenant'
    | 'domain';

/** A resource a cascade removed, or is about to. */
export interface CascadeResource {
    type: CascadeResourceType;
    id: string;
    name: string;
}

/** i18n key for the progress message of each resource type */
const REMOVING_KEY: Record<CascadeResourceType, string> = {
    system: 'CASCADE.REMOVING_SYSTEM',
    zone: 'CASCADE.REMOVING_ZONE',
    application: 'CASCADE.REMOVING_APPLICATION',
    tenant: 'CASCADE.REMOVING_TENANT',
    domain: 'CASCADE.REMOVING_DOMAIN',
};

/** Progress message shown while `resource` is being removed. */
export const removingLabel = (resource: CascadeResource) =>
    i18n(REMOVING_KEY[resource.type], { name: resource.name });

/** A single removal performed as part of a cascade. */
export interface CascadeStep {
    /** What the step removes, reported back once it has run */
    resource: CascadeResource;
    /** Performs the removal. Rejects on failure. */
    run: () => Promise<unknown>;
}

/** What a cascade would do, resolved before the user confirms it. */
export interface CascadePlan {
    /** Lines describing the scope the cascade was resolved over */
    scope: string[];
    /** Lines describing what the cascade will remove */
    summary: string[];
    /** Lines describing what the cascade deliberately leaves alone */
    warnings: string[];
    /** Removals, in the order they must happen */
    steps: CascadeStep[];
}

/** Result of executing a `CascadePlan`. */
export interface CascadeOutcome {
    /** Resources that were removed, in the order they went */
    removed: CascadeResource[];
    /** Steps that threw, kept so the caller can report them */
    failures: { resource: CascadeResource; error: unknown }[];
    /** Steps never attempted because an earlier one failed */
    skipped: CascadeResource[];
}

const emptyPlan = (): CascadePlan => ({
    scope: [],
    summary: [],
    warnings: [],
    steps: [],
});

/** Runs `fn` over `list` with at most `limit` requests in flight. */
async function mapLimit<T, R>(
    list: T[],
    limit: number,
    fn: (item: T) => Promise<R>,
): Promise<R[]> {
    const results: R[] = new Array(list.length);
    let next_index = 0;
    const worker = async () => {
        while (next_index < list.length) {
            const index = next_index++;
            results[index] = await fn(list[index]);
        }
    };
    const size = Math.min(limit, list.length);
    await Promise.all(new Array(size).fill(0).map(() => worker()));
    return results;
}

/** Collects every page of a paginated query. */
async function collectPages<T>(request: QueryResponse<T>): Promise<T[]> {
    const items: T[] = [];
    let page = await request;
    items.push(...page.data);
    let pages = 1;
    while (page.next) {
        // A truncated list would be indistinguishable from a complete one, and
        // every caller uses this to decide what a delete will take with it. So
        // running out of pages has to be an error rather than a short answer.
        if (pages >= MAX_PAGES) {
            throw new Error(
                `Listing did not complete within ${MAX_PAGES} pages of ${PAGE_SIZE}`,
            );
        }
        const next_page = page.next();
        if (!next_page) break;
        page = await next_page;
        if (!page.data.length) break;
        items.push(...page.data);
        pages += 1;
    }
    return items;
}

/**
 * IDs of `zone_id` and every zone beneath it, walked breadth first. `parent_id`
 * accepts a comma separated list so this costs one request per level of the
 * tree rather than one per zone.
 */
export async function zoneSubtreeIds(zone_id: string): Promise<string[]> {
    if (!zone_id) return [];
    const found = [zone_id];
    const seen = new Set(found);
    let level = [zone_id];
    while (level.length && found.length < MAX_ZONES) {
        const children = await collectPages(
            queryZones({ parent_id: level.join(','), limit: PAGE_SIZE }),
        );
        level = [];
        for (const zone of children) {
            if (!zone?.id || seen.has(zone.id)) continue;
            seen.add(zone.id);
            found.push(zone.id);
            level.push(zone.id);
        }
    }
    return found;
}

/** Systems in a zone subtree, split by whether they survive its removal. */
export interface ZoneSystemSplit {
    /** Systems whose every zone is inside the subtree — these would be orphaned */
    orphaned: PlaceSystem[];
    /** Systems that also belong to a zone outside the subtree — these are kept */
    retained: PlaceSystem[];
}

/**
 * Resolves the systems attached to a zone subtree.
 *
 * `GET /systems?zone_id=` ANDs its zone list server side, so "in any of these
 * zones" needs one query per zone, deduplicated by system id.
 *
 * The index is Elasticsearch backed and can lag the database. Since a stale
 * `zones` array here would mean deleting a system that still belongs
 * somewhere, every removal candidate is re-read through `showSystem` (which
 * reads the database) and re-checked before it makes the list.
 */
export async function splitZoneSystems(
    zone_ids: string[],
): Promise<ZoneSystemSplit> {
    const subtree = new Set(zone_ids);
    const inside = (system: PlaceSystem) =>
        (system.zones || []).every((id) => subtree.has(id));

    const found = new Map<string, PlaceSystem>();
    // Not caught, for the same reason as the domain listings: a zone whose
    // systems cannot be listed would contribute nothing to the plan, and the
    // zone would then be deleted with those systems still inside it.
    const pages = await mapLimit(zone_ids, READ_CONCURRENCY, (zone_id) =>
        collectPages(querySystems({ zone_id, limit: PAGE_SIZE })),
    );
    for (const list of pages) {
        for (const system of list) if (system?.id) found.set(system.id, system);
    }

    const candidates: PlaceSystem[] = [];
    const retained: PlaceSystem[] = [];
    for (const system of found.values()) {
        (inside(system) ? candidates : retained).push(system);
    }

    const confirmed = await mapLimit(candidates, READ_CONCURRENCY, (system) =>
        showSystem(system.id).catch(() => null),
    );
    const orphaned: PlaceSystem[] = [];
    confirmed.forEach((current) => {
        // A system that has since been deleted, or that has picked up a zone
        // outside the subtree, is left alone.
        if (!current) return;
        (inside(current) ? orphaned : retained).push(current);
    });
    return { orphaned, retained };
}

/**
 * Resolves the removals needed so that deleting `zone_id` does not leave
 * orphaned systems behind. Does **not** include removal of the zone itself —
 * for a zone delete that is the caller's existing `remove` action, and for a
 * domain delete `planDomainCascade` appends it.
 */
export async function planZoneCascade(zone_id: string): Promise<CascadePlan> {
    const plan = emptyPlan();
    const zone_ids = await zoneSubtreeIds(zone_id);
    if (!zone_ids.length) return plan;
    const { orphaned, retained } = await splitZoneSystems(zone_ids);
    const module_count = new Set(
        orphaned.flatMap((system) => [...(system.modules || [])]),
    ).size;

    const child_count = zone_ids.length - 1;
    if (child_count) {
        plan.scope.push(
            i18n('CASCADE.SCOPE_ZONES', { count: child_count }, child_count),
        );
    }
    if (orphaned.length) {
        plan.summary.push(
            i18n(
                'CASCADE.REMOVE_SYSTEMS',
                { count: orphaned.length },
                orphaned.length,
            ),
        );
        if (module_count) {
            plan.summary.push(
                i18n(
                    'CASCADE.REMOVE_MODULES',
                    { count: module_count },
                    module_count,
                ),
            );
        }
    }
    if (retained.length) {
        plan.warnings.push(
            i18n(
                'CASCADE.KEEP_SYSTEMS',
                { count: retained.length },
                retained.length,
            ),
        );
    }
    plan.steps = orphaned.map((system) => ({
        resource: {
            type: 'system' as const,
            id: system.id,
            name: system.name,
        },
        run: () => removeSystem(system.id),
    }));
    return plan;
}

/** Tenants configured in the staff API against `domain`. */
async function domainTenants(domain: string): Promise<PlaceTenant[]> {
    if (!domain) return [];
    const tenants = (await get('/api/staff/v1/tenants').catch(
        () => [],
    )) as PlaceTenant[];
    return (tenants || []).filter((tenant) => tenant?.domain === domain);
}

/** The `org_zone` a domain points at, if it declares one. */
function orgZoneId(domain: PlaceDomain): string {
    return `${domain?.config?.org_zone || ''}`;
}

/**
 * Resolves the removals associated with a domain.
 *
 * Users, auth sources, groups, playlists, signage plugins, shorteners, pending
 * mail, asset categories and alert dashboards already cascade when the domain
 * is deleted (model callbacks and DB foreign keys), so they are not listed
 * here. What does not cascade — and so is handled here — is OAuth applications
 * (`oauth_applications.owner_id` has no foreign key) and the staff API tenant
 * (a separate service, linked only by matching domain name).
 *
 * Zones are only reachable through the `authority.config.org_zone` convention.
 * That convention is not exclusive — multiple domains can and do point at the
 * same org zone — so the zone tree is only included when no other domain
 * references it.
 */
export async function planDomainCascade(
    domain: PlaceDomain,
): Promise<CascadePlan> {
    const plan = emptyPlan();
    const org_zone_id = orgZoneId(domain);
    // None of these are caught. A failed or truncated listing used to read as
    // "nothing found", which is the dangerous direction: an unavailable
    // ownership list makes a shared org zone look unshared, and this function
    // would then plan to delete another domain's zone tree. Letting the
    // rejection through means the caller cannot offer a cascade it has not
    // been able to size.
    const [applications, tenants, all_domains] = await Promise.all([
        collectPages(
            queryApplications({ authority_id: domain.id, limit: PAGE_SIZE }),
        ),
        domainTenants(domain.domain),
        org_zone_id
            ? collectPages(queryDomains({ limit: PAGE_SIZE }))
            : Promise.resolve([] as PlaceDomain[]),
    ]);

    if (applications.length) {
        plan.summary.push(
            i18n(
                'CASCADE.REMOVE_APPLICATIONS',
                { count: applications.length },
                applications.length,
            ),
        );
        plan.steps.push(
            ...applications.map((application) => ({
                resource: {
                    type: 'application' as const,
                    id: `${application.id}`,
                    name: application.name,
                },
                run: () => removeApplication(application.id),
            })),
        );
    }

    if (tenants.length) {
        plan.summary.push(
            i18n(
                'CASCADE.REMOVE_TENANTS',
                { count: tenants.length },
                tenants.length,
            ),
        );
        plan.steps.push(
            ...tenants.map((tenant) => ({
                resource: {
                    type: 'tenant' as const,
                    id: `${tenant.id}`,
                    name: tenant.name || tenant.domain,
                },
                run: () => del(`/api/staff/v1/tenants/${tenant.id}`),
            })),
        );
    }

    if (!org_zone_id) {
        plan.warnings.push(i18n('CASCADE.NO_ORG_ZONE'));
        return plan;
    }

    const sharing = all_domains.filter(
        (other) => other.id !== domain.id && orgZoneId(other) === org_zone_id,
    );
    if (sharing.length) {
        plan.warnings.push(
            i18n('CASCADE.ORG_ZONE_SHARED', {
                names: sharing.map((other) => other.name).join(', '),
            }),
        );
        return plan;
    }

    const org_zone: PlaceZone | null = await showZone(org_zone_id).catch(
        () => null,
    );
    if (!org_zone) {
        plan.warnings.push(
            i18n('CASCADE.ORG_ZONE_MISSING', { id: org_zone_id }),
        );
        return plan;
    }

    const zone_plan = await planZoneCascade(org_zone_id);
    // The org zone line already says "and everything beneath it", so the zone
    // plan's own scope line would just repeat it.
    plan.scope.push(i18n('CASCADE.SCOPE_ORG_ZONE', { name: org_zone.name }));
    plan.summary.push(...zone_plan.summary, i18n('CASCADE.REMOVE_ORG_ZONE'));
    plan.warnings.push(...zone_plan.warnings);
    plan.steps.push(...zone_plan.steps, {
        resource: {
            type: 'zone' as const,
            id: org_zone_id,
            name: org_zone.name,
        },
        run: () => removeZone(org_zone_id),
    });
    return plan;
}

/**
 * Executes a plan's steps in order. Steps run sequentially — each system
 * removal cascades work on the server, and sequential execution gives honest
 * progress and lets a partial failure be reported precisely.
 *
 * The run stops at the first failure. Steps are ordered so that later ones
 * depend on earlier ones having gone: `planDomainCascade` appends the org zone
 * after the systems inside it, so carrying on past a failed system removal
 * would delete the zone out from under it. Everything after the failure is
 * reported as skipped rather than attempted.
 */
export async function runCascade(
    plan: CascadePlan,
    progress: (message: string) => void = () => undefined,
): Promise<CascadeOutcome> {
    const outcome: CascadeOutcome = { removed: [], failures: [], skipped: [] };
    const total = plan.steps.length;
    for (const [index, step] of plan.steps.entries()) {
        if (outcome.failures.length) {
            outcome.skipped.push(step.resource);
            continue;
        }
        progress(
            i18n('CASCADE.PROGRESS', {
                step: removingLabel(step.resource),
                index: index + 1,
                total,
            }),
        );
        try {
            await step.run();
            outcome.removed.push(step.resource);
        } catch (error) {
            outcome.failures.push({ resource: step.resource, error });
        }
    }
    return outcome;
}
