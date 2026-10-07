import { computed, signal } from '@angular/core';
import {
    currentReach,
    PlaceOrganisation,
    PlaceReach,
    PlaceUser,
    queryOrganisations,
    QueryResponse,
} from '@placeos/ts-client';

/** Load every page of a query. Throws after 1000 extra pages. */
async function collectPages<T>(response: QueryResponse<T>) {
    let page = await response;
    const data = [...page.data];
    for (let i = 0; page.next && i < 1000; i++) {
        page = await page.next();
        data.push(...page.data);
    }
    if (page.next) throw new Error('Too many resource pages');
    return data;
}

let storage_key = '';
const selected_id = signal('');
const _reach = signal<PlaceReach | null>(null);
const _organisations = signal<PlaceOrganisation[]>([]);

/** The caller's reach as the API resolved it; null when the API has no organisations yet */
export const reach = _reach.asReadonly();
/** Organisations the caller may pick between */
export const organisations = _organisations.asReadonly();
export const selected_organisation_id = selected_id.asReadonly();

/** Cluster staff see every organisation. An API without organisations behaves the same way. */
export const isClusterReach = computed(
    () => !_reach() || _reach().reach === 'cluster',
);
export const isPartnerReach = computed(() => _reach()?.reach === 'partner');
export const tenancyEnforced = computed(() => !!_reach()?.enforcing);
export const current_organisation = computed(
    () => _reach()?.organisation || null,
);
export const current_partner = computed(() => _reach()?.partner || null);
export const selected_organisation = computed(
    () => _organisations().find(({ id }) => id === selected_id()) || null,
);
/** A picker is useful once there is more than one organisation to choose from */
export const hasOrganisationPicker = computed(
    () => !!_reach() && _organisations().length > 1,
);

/** Cluster-only screens. Everything else is scoped by the API. */
const CLUSTER_SECTIONS = [
    'repositories',
    'database',
    'clusters',
    'interfaces',
    'brokers',
    'extensions',
    'schemas',
    'build-jobs',
];

export function canAccessClusterSection(section: string) {
    return !CLUSTER_SECTIONS.includes(section) || isClusterReach();
}

/** Select an organisation for every list, or `''` for all organisations in reach */
export function selectOrganisation(id: string) {
    if (id && !_organisations().some((item) => item.id === id)) return false;
    selected_id.set(id);
    try {
        localStorage.setItem(storage_key, id);
    } catch {
        /* Storage is optional. */
    }
    return true;
}

/** Query parameters that narrow a list to the selected organisation */
export function organisationQueryParams(): { organisation_id?: string } {
    return selected_id() ? { organisation_id: selected_id() } : {};
}

export function organisationName(id: string) {
    return _organisations().find((item) => item.id === id)?.name || '';
}

/** Load the caller's reach and the organisations they may pick between */
export async function loadOrganisationAccess(user: PlaceUser) {
    _reach.set(null);
    _organisations.set([]);
    selected_id.set('');
    storage_key = `BACKOFFICE.organisation.${user.authority_id}.${user.id}`;
    const reach = await currentReach().catch(() => null);
    if (!reach) return;
    const list = reach.organisations
        ? reach.organisations
        : await collectPages(queryOrganisations({ limit: 200 })).catch(
              () => [] as PlaceOrganisation[],
          );
    list.sort((a, b) => a.name.localeCompare(b.name));
    _reach.set(reach);
    _organisations.set(list);
    let saved = '';
    try {
        saved = localStorage.getItem(storage_key) || '';
    } catch {
        /* Storage is optional. */
    }
    selected_id.set(list.some(({ id }) => id === saved) ? saved : '');
}
