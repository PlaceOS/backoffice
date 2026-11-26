import { beforeEach, describe, expect, it, vi } from 'vitest';

// `i18n` is stubbed so assertions can read the key and its arguments rather
// than a rendered English sentence.
vi.mock('../../app/common/locale.service', () => ({
    i18n: (key: string, args: Record<string, unknown> = {}) =>
        Object.keys(args).length ? `${key}:${JSON.stringify(args)}` : key,
}));

vi.mock('@placeos/ts-client/staff', () => ({
    tenants: { query: vi.fn(), destroy: vi.fn() },
}));

// Keep the schemas, which `newItem` reads
vi.mock('@placeos/ts-client', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    oauth_applications: {
        query: vi.fn(
            fromV1Mock(
                () => Promise.resolve({ data: [], total: 0 }),
                ['...'],
                'page',
            ),
        ),
        destroy: vi.fn(fromV1Mock(() => Promise.resolve(), ['id'])),
    },
    domains: {
        query: vi.fn(
            fromV1Mock(
                () => Promise.resolve({ data: [], total: 0 }),
                ['...'],
                'page',
            ),
        ),
    },
    systems: {
        query: vi.fn(
            fromV1Mock(
                () => Promise.resolve({ data: [], total: 0 }),
                ['...'],
                'page',
            ),
        ),
        destroy: vi.fn(fromV1Mock(() => Promise.resolve(), ['sys_id'])),
        show: vi.fn(fromV1Mock(() => Promise.resolve(null), ['sys_id', '...'])),
    },
    zones: {
        query: vi.fn(
            fromV1Mock(
                () => Promise.resolve({ data: [], total: 0 }),
                ['...'],
                'page',
            ),
        ),
        destroy: vi.fn(fromV1Mock(() => Promise.resolve(), ['id'])),
        show: vi.fn(fromV1Mock(() => Promise.resolve(null), ['id', '...'])),
    },
}));

import {
    domains,
    oauth_applications,
    systems as systems_v7,
    zones as zones_v7,
} from '@placeos/ts-client';
import { CallFailed, mockReply } from '@placeos/ts-client/compat';
import { tenants } from '@placeos/ts-client/staff';
import {
    planDomainCascade,
    planZoneCascade,
    runCascade,
    splitZoneSystems,
    zoneSubtreeIds,
} from '../../app/common/cascade-delete';
const { fromV1Mock } = await vi.hoisted(
    () => import('@placeos/ts-client/compat'),
);

type Query = ReturnType<typeof vi.fn>;

const page = (data: unknown[], next: unknown = null) =>
    Promise.resolve({
        data,
        total: data.length,
        next: next ? () => next : null,
    });

/** Zones keyed by their `parent_id`. The filter takes many parents */
const zonesByParent =
    (tree: Record<string, { id: string }[]>) =>
    (params: { parent_id?: readonly string[] }) => {
        const parents = (params?.parent_id || []).filter((_) => !!_);
        return page(parents.flatMap((parent) => tree[parent] || []));
    };

/**
 * Systems keyed by the zone they belong to. Also records them so the mocked
 * `showSystem` (the authoritative re-read) can serve the same data.
 */
const system_index = new Map<string, { id: string; zones: string[] }>();
const systemsByZone = (map: Record<string, unknown[]>) => {
    system_index.clear();
    for (const list of Object.values(map)) {
        for (const item of list as { id: string; zones: string[] }[]) {
            system_index.set(item.id, item);
        }
    }
    return (params: { zone_id?: readonly string[] }) =>
        page(map[params?.zone_id?.[0] || ''] || []);
};

const system = (id: string, zones: string[], modules: string[] = []) => ({
    id,
    name: id,
    zones,
    modules,
});

/** The error that `orThrow` gives for an HTTP status */
const httpFailure = (status: number) =>
    new CallFailed({
        kind: 'http',
        status,
        message: null,
        body: null,
        text: null,
    });

describe('cascade-delete', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        (zones_v7.query as Query).mockImplementation(
            fromV1Mock(() => page([]), ['...'], 'page'),
        );
        (systems_v7.query as Query).mockImplementation(
            fromV1Mock(() => page([]), ['...'], 'page'),
        );
        (oauth_applications.query as Query).mockImplementation(
            fromV1Mock(() => page([]), ['...'], 'page'),
        );
        (domains.query as Query).mockImplementation(
            fromV1Mock(() => page([]), ['...'], 'page'),
        );
        (tenants.query as Query).mockImplementation(() =>
            Promise.resolve(mockReply([])),
        );
        (tenants.destroy as Query).mockResolvedValue(mockReply(''));
        // Removal candidates are re-read from the database; by default the
        // authoritative copy matches what the index returned.
        (systems_v7.show as Query).mockImplementation(
            fromV1Mock(
                (id: string) =>
                    Promise.resolve(
                        [...system_index.values()].find((_) => _.id === id) ||
                            null,
                    ),
                ['sys_id', '...'],
            ),
        );
    });

    describe('zoneSubtreeIds', () => {
        it('returns just the zone when it has no children', async () => {
            expect(await zoneSubtreeIds('zone-a')).toEqual(['zone-a']);
        });

        it('returns an empty list for a missing id', async () => {
            expect(await zoneSubtreeIds('')).toEqual([]);
        });

        it('walks the whole tree breadth first', async () => {
            (zones_v7.query as Query).mockImplementation(
                fromV1Mock(
                    zonesByParent({
                        'zone-a': [{ id: 'zone-b' }, { id: 'zone-c' }],
                        'zone-b': [{ id: 'zone-d' }],
                    }),
                    ['...'],
                    'page',
                ),
            );
            expect(await zoneSubtreeIds('zone-a')).toEqual([
                'zone-a',
                'zone-b',
                'zone-c',
                'zone-d',
            ]);
        });

        it('queries a whole level in a single request', async () => {
            (zones_v7.query as Query).mockImplementation(
                fromV1Mock(
                    zonesByParent({
                        'zone-a': [{ id: 'zone-b' }, { id: 'zone-c' }],
                    }),
                    ['...'],
                    'page',
                ),
            );
            await zoneSubtreeIds('zone-a');
            // one request for zone-a's children, one for `zone-b,zone-c`
            expect((zones_v7.query as Query).mock.calls.length).toBe(2);
            expect(
                (zones_v7.query as Query).mock.calls[1][0].parent_id,
            ).toEqual(['zone-b', 'zone-c']);
        });

        it('terminates when a zone is its own ancestor', async () => {
            (zones_v7.query as Query).mockImplementation(
                fromV1Mock(
                    zonesByParent({
                        'zone-a': [{ id: 'zone-b' }],
                        'zone-b': [{ id: 'zone-a' }],
                    }),
                    ['...'],
                    'page',
                ),
            );
            expect(await zoneSubtreeIds('zone-a')).toEqual([
                'zone-a',
                'zone-b',
            ]);
        });

        it('fails rather than returning a tree it could only walk part of', async () => {
            // A truncated subtree understates both what gets deleted and
            // whether another domain shares it, so it must not look complete.
            let next = 0;
            (zones_v7.query as Query).mockImplementation(
                fromV1Mock(
                    () => page([{ id: `zone-${next++}` }]),
                    ['...'],
                    'page',
                ),
            );
            await expect(zoneSubtreeIds('zone-root')).rejects.toThrow(
                /exceeds/,
            );
        });

        it('follows pagination', async () => {
            (zones_v7.query as Query).mockImplementation(
                fromV1Mock(
                    () => page([{ id: 'zone-b' }], page([{ id: 'zone-c' }])),
                    ['...'],
                    'page',
                ),
            );
            const ids = await zoneSubtreeIds('zone-a');
            expect(ids).toContain('zone-b');
            expect(ids).toContain('zone-c');
        });
    });

    describe('splitZoneSystems', () => {
        it('orphans a system whose every zone is inside the subtree', async () => {
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({
                        'zone-a': [system('sys-1', ['zone-a', 'zone-b'])],
                    }),
                    ['...'],
                    'page',
                ),
            );
            const split = await splitZoneSystems(['zone-a', 'zone-b']);
            expect(split.orphaned.map((_) => _.id)).toEqual(['sys-1']);
            expect(split.retained).toEqual([]);
        });

        it('does not orphan a system that has no zones at all', async () => {
            // `[].every()` is true, so an empty `zones` array would otherwise
            // read as "entirely inside this subtree". A system whose zones
            // were just cleared, still listed here by the lagging search
            // index, has no relationship to the zone being deleted.
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({ 'zone-a': [system('sys-detached', [])] }),
                    ['...'],
                    'page',
                ),
            );
            const split = await splitZoneSystems(['zone-a']);
            expect(split.orphaned).toEqual([]);
            expect(split.retained.map((_) => _.id)).toEqual(['sys-detached']);
        });

        it('retains a system that also lives outside the subtree', async () => {
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({
                        'zone-a': [
                            system('sys-1', ['zone-a', 'zone-elsewhere']),
                        ],
                    }),
                    ['...'],
                    'page',
                ),
            );
            const split = await splitZoneSystems(['zone-a']);
            expect(split.orphaned).toEqual([]);
            expect(split.retained.map((_) => _.id)).toEqual(['sys-1']);
        });

        it('deduplicates a system found through several zones', async () => {
            const shared = system('sys-1', ['zone-a', 'zone-b']);
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({ 'zone-a': [shared], 'zone-b': [shared] }),
                    ['...'],
                    'page',
                ),
            );
            const split = await splitZoneSystems(['zone-a', 'zone-b']);
            expect(split.orphaned.length).toBe(1);
        });

        it('keeps a system the database says has moved outside the subtree', async () => {
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({ 'zone-a': [system('sys-1', ['zone-a'])] }),
                    ['...'],
                    'page',
                ),
            );
            // The index is stale — the database has it in another zone too.
            (systems_v7.show as Query).mockImplementation(
                fromV1Mock(
                    () =>
                        Promise.resolve(
                            system('sys-1', ['zone-a', 'zone-elsewhere']),
                        ),
                    ['sys_id', '...'],
                ),
            );
            const split = await splitZoneSystems(['zone-a']);
            expect(split.orphaned).toEqual([]);
            expect(split.retained.map((_) => _.id)).toEqual(['sys-1']);
        });

        it('skips a system that has already been deleted', async () => {
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({ 'zone-a': [system('sys-1', ['zone-a'])] }),
                    ['...'],
                    'page',
                ),
            );
            (systems_v7.show as Query).mockImplementation(
                fromV1Mock(
                    () => Promise.reject(httpFailure(404)),
                    ['sys_id', '...'],
                ),
            );
            const split = await splitZoneSystems(['zone-a']);
            expect(split.orphaned).toEqual([]);
            expect(split.retained).toEqual([]);
        });

        it('fails when a system cannot be checked', async () => {
            // A 500 is not a deleted system. Leaving it out of the plan
            // would leave it without a zone.
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({ 'zone-a': [system('sys-1', ['zone-a'])] }),
                    ['...'],
                    'page',
                ),
            );
            (systems_v7.show as Query).mockImplementation(
                fromV1Mock(
                    () => Promise.reject(httpFailure(500)),
                    ['sys_id', '...'],
                ),
            );
            await expect(splitZoneSystems(['zone-a'])).rejects.toThrow();
        });

        it('fails rather than reporting a zone as having no systems', async () => {
            // Reporting no systems would let the zone be deleted with its
            // systems still inside it, which is the outcome this whole flow
            // exists to prevent.
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    () => Promise.reject(new Error('nope')),
                    ['...'],
                    'page',
                ),
            );
            await expect(splitZoneSystems(['zone-a'])).rejects.toThrow('nope');
        });
    });

    describe('planZoneCascade', () => {
        it('is empty for a zone with no systems', async () => {
            const plan = await planZoneCascade('zone-a');
            expect(plan.steps).toEqual([]);
        });

        it('only removes systems that would be left without a zone', async () => {
            (zones_v7.query as Query).mockImplementation(
                fromV1Mock(
                    zonesByParent({ 'zone-a': [{ id: 'zone-b' }] }),
                    ['...'],
                    'page',
                ),
            );
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({
                        'zone-a': [system('sys-inside', ['zone-a'], ['mod-1'])],
                        'zone-b': [
                            system('sys-straddle', ['zone-b', 'zone-other']),
                        ],
                    }),
                    ['...'],
                    'page',
                ),
            );
            const plan = await planZoneCascade('zone-a');

            expect(plan.steps.length).toBe(1);
            expect(plan.steps[0].resource).toEqual({
                type: 'system',
                id: 'sys-inside',
                name: 'sys-inside',
            });
            await plan.steps[0].run();
            expect(systems_v7.destroy).toHaveBeenCalledExactlyOnceWith({
                sys_id: 'sys-inside',
            });

            expect(plan.summary).toContain(
                'CASCADE.REMOVE_SYSTEMS:{"count":1}',
            );
            expect(plan.summary).toContain(
                'CASCADE.REMOVE_MODULES:{"count":1}',
            );
            expect(plan.warnings).toContain('CASCADE.KEEP_SYSTEMS:{"count":1}');
            expect(plan.scope).toContain('CASCADE.SCOPE_ZONES:{"count":1}');
        });

        it('counts each module once across the removed systems', async () => {
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({
                        'zone-a': [
                            system('sys-1', ['zone-a'], ['mod-1', 'mod-2']),
                            system('sys-2', ['zone-a'], ['mod-2']),
                        ],
                    }),
                    ['...'],
                    'page',
                ),
            );
            const plan = await planZoneCascade('zone-a');
            expect(plan.summary).toContain(
                'CASCADE.REMOVE_MODULES:{"count":2}',
            );
        });

        it('never removes the zone itself', async () => {
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({ 'zone-a': [system('sys-1', ['zone-a'])] }),
                    ['...'],
                    'page',
                ),
            );
            const plan = await planZoneCascade('zone-a');
            await Promise.all(plan.steps.map((step) => step.run()));
            expect(zones_v7.destroy).not.toHaveBeenCalled();
        });
    });

    describe('planDomainCascade', () => {
        const domain = (config: Record<string, string> = {}) =>
            ({
                id: 'authority-1',
                name: 'Acme',
                domain: 'acme.example.com',
                config,
            }) as never;

        it('removes the domain OAuth applications', async () => {
            (oauth_applications.query as Query).mockImplementation(
                fromV1Mock(
                    () => page([{ id: 7, name: 'Workplace' }]),
                    ['...'],
                    'page',
                ),
            );
            const plan = await planDomainCascade(domain());
            expect(plan.summary).toContain(
                'CASCADE.REMOVE_APPLICATIONS:{"count":1}',
            );
            expect(plan.steps[0].resource).toEqual({
                type: 'application',
                id: '7',
                name: 'Workplace',
            });
            await plan.steps[0].run();
            expect(oauth_applications.destroy).toHaveBeenCalledExactlyOnceWith({
                id: 7,
            });
        });

        it('removes only the staff API tenants matching the domain name', async () => {
            (tenants.query as Query).mockImplementation(() =>
                Promise.resolve(
                    mockReply([
                        { id: 1, name: 'Acme', domain: 'acme.example.com' },
                        { id: 2, name: 'Other', domain: 'other.example.com' },
                    ]),
                ),
            );
            const plan = await planDomainCascade(domain());
            expect(plan.summary).toContain(
                'CASCADE.REMOVE_TENANTS:{"count":1}',
            );
            expect(plan.steps[0].resource).toEqual({
                type: 'tenant',
                id: '1',
                name: 'Acme',
            });
            await plan.steps[0].run();
            expect(tenants.destroy).toHaveBeenCalledExactlyOnceWith({ id: 1 });
        });

        it('warns and touches no zones when the domain has no org_zone', async () => {
            const plan = await planDomainCascade(domain());
            expect(plan.warnings).toContain('CASCADE.NO_ORG_ZONE');
            expect(zones_v7.query).not.toHaveBeenCalled();
            expect(plan.steps).toEqual([]);
        });

        it('leaves the org zone alone when another domain shares it', async () => {
            (domains.query as Query).mockImplementation(
                fromV1Mock(
                    () =>
                        page([
                            domain({ org_zone: 'zone-org' }),
                            {
                                id: 'authority-2',
                                name: 'Beta',
                                domain: 'beta.example.com',
                                config: { org_zone: 'zone-org' },
                            },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            const plan = await planDomainCascade(
                domain({ org_zone: 'zone-org' }),
            );
            expect(
                plan.warnings.some((line) =>
                    line.startsWith('CASCADE.ORG_ZONE_SHARED'),
                ),
            ).toBe(true);
            expect(plan.warnings[0]).toContain('Beta');
            expect(plan.steps).toEqual([]);
            expect(zones_v7.show).not.toHaveBeenCalled();
        });

        it('fails rather than planning an org zone it could not check ownership of', async () => {
            // The check above is the only thing standing between this flow and
            // deleting another domain's zone tree. If the domain list is
            // unavailable, "no other domain shares it" is not something we
            // know — so no plan may be produced at all.
            (domains.query as Query).mockImplementation(
                fromV1Mock(
                    () => Promise.reject(new Error('gateway')),
                    ['...'],
                    'page',
                ),
            );
            await expect(
                planDomainCascade(domain({ org_zone: 'zone-org' })),
            ).rejects.toThrow('gateway');
            expect(zones_v7.destroy).not.toHaveBeenCalled();
        });

        it('fails rather than planning an ownership check it could only read part of', async () => {
            // A list that stops early is indistinguishable from a short one,
            // and a sharing domain could be sitting on any unread page.
            let served = 0;
            // A 6.x page whose `next` always gives one more page
            const endlessPage = (): Promise<unknown> =>
                Promise.resolve({
                    data: [domain({ org_zone: 'zone-other' })],
                    total: 100000,
                    next: () => {
                        served += 1;
                        return endlessPage();
                    },
                });
            (domains.query as Query).mockImplementation(
                fromV1Mock(endlessPage, ['...'], 'page'),
            );
            await expect(
                planDomainCascade(domain({ org_zone: 'zone-org' })),
            ).rejects.toThrow(/did not complete/);
            expect(served).toBeGreaterThan(1);
            expect(zones_v7.destroy).not.toHaveBeenCalled();
        });

        it('fails rather than reporting a domain as having no applications', async () => {
            (oauth_applications.query as Query).mockImplementation(
                fromV1Mock(
                    () => Promise.reject(new Error('gateway')),
                    ['...'],
                    'page',
                ),
            );
            await expect(planDomainCascade(domain())).rejects.toThrow(
                'gateway',
            );
        });

        it('fails rather than reporting a domain as having no staff API tenants', async () => {
            // The tenant listing crosses a service boundary, so it fails for
            // reasons unrelated to the domain having no tenant. Reporting none
            // deletes the domain and leaves the tenant holding its encrypted
            // calendar credentials.
            (tenants.query as Query).mockImplementation(() =>
                Promise.reject(new Error('502 Bad Gateway')),
            );
            await expect(planDomainCascade(domain())).rejects.toThrow('502');
            expect(tenants.destroy).not.toHaveBeenCalled();
        });

        it('leaves the org zone alone when another domain points inside its subtree', async () => {
            // Deleting the org zone destroys everything beneath it, so a
            // domain whose own org zone is a CHILD of this one is just as
            // affected as one pointing at the same id.
            (zones_v7.query as Query).mockImplementation(
                fromV1Mock(
                    zonesByParent({ 'zone-org': [{ id: 'zone-bldg2' }] }),
                    ['...'],
                    'page',
                ),
            );
            (domains.query as Query).mockImplementation(
                fromV1Mock(
                    () =>
                        page([
                            domain({ org_zone: 'zone-org' }),
                            {
                                id: 'authority-2',
                                name: 'Beta',
                                domain: 'beta.example.com',
                                config: { org_zone: 'zone-bldg2' },
                            },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            const plan = await planDomainCascade(
                domain({ org_zone: 'zone-org' }),
            );
            expect(
                plan.warnings.some((line) =>
                    line.startsWith('CASCADE.ORG_ZONE_SHARED'),
                ),
            ).toBe(true);
            expect(plan.warnings[0]).toContain('Beta');
            expect(plan.steps).toEqual([]);
        });

        it('warns when the configured org zone no longer exists', async () => {
            (domains.query as Query).mockImplementation(
                fromV1Mock(
                    () => page([domain({ org_zone: 'zone-org' })]),
                    ['...'],
                    'page',
                ),
            );
            (zones_v7.show as Query).mockImplementation(
                fromV1Mock(
                    () => Promise.reject(new Error('404')),
                    ['id', '...'],
                ),
            );
            const plan = await planDomainCascade(
                domain({ org_zone: 'zone-org' }),
            );
            expect(plan.warnings).toContain(
                'CASCADE.ORG_ZONE_MISSING:{"id":"zone-org"}',
            );
            expect(plan.steps).toEqual([]);
        });

        it('removes the org zone tree when no other domain uses it', async () => {
            (domains.query as Query).mockImplementation(
                fromV1Mock(
                    () => page([domain({ org_zone: 'zone-org' })]),
                    ['...'],
                    'page',
                ),
            );
            (zones_v7.show as Query).mockImplementation(
                fromV1Mock(
                    () => Promise.resolve({ id: 'zone-org', name: 'ORG Acme' }),
                    ['id', '...'],
                ),
            );
            (zones_v7.query as Query).mockImplementation(
                fromV1Mock(
                    zonesByParent({ 'zone-org': [{ id: 'zone-level' }] }),
                    ['...'],
                    'page',
                ),
            );
            (systems_v7.query as Query).mockImplementation(
                fromV1Mock(
                    systemsByZone({
                        'zone-level': [system('sys-1', ['zone-level'])],
                    }),
                    ['...'],
                    'page',
                ),
            );

            const plan = await planDomainCascade(
                domain({ org_zone: 'zone-org' }),
            );

            expect(plan.summary).toContain('CASCADE.REMOVE_ORG_ZONE');
            // one scope line, not the org zone's plus the zone plan's own
            expect(plan.scope).toEqual([
                'CASCADE.SCOPE_ORG_ZONE:{"name":"ORG Acme"}',
            ]);
            expect(plan.steps.length).toBe(2);
            // systems must go before the zone they belong to
            expect(plan.steps.map((_) => _.resource.type)).toEqual([
                'system',
                'zone',
            ]);
            expect(plan.steps[1].resource).toEqual({
                type: 'zone',
                id: 'zone-org',
                name: 'ORG Acme',
            });
            await plan.steps[0].run();
            expect(systems_v7.destroy).toHaveBeenCalledExactlyOnceWith({
                sys_id: 'sys-1',
            });
            await plan.steps[1].run();
            expect(zones_v7.destroy).toHaveBeenCalledExactlyOnceWith({
                id: 'zone-org',
            });
        });
    });

    describe('runCascade', () => {
        it('runs every step in order and reports progress', async () => {
            const order: string[] = [];
            const messages: string[] = [];
            const plan = {
                scope: [],
                summary: [],
                warnings: [],
                steps: [
                    {
                        resource: {
                            type: 'system' as const,
                            id: 'sys-1',
                            name: 'first',
                        },
                        run: async () => {
                            order.push('first');
                        },
                    },
                    {
                        resource: {
                            type: 'zone' as const,
                            id: 'zone-1',
                            name: 'second',
                        },
                        run: async () => {
                            order.push('second');
                        },
                    },
                ],
            };
            const outcome = await runCascade(plan, (m) => messages.push(m));
            expect(order).toEqual(['first', 'second']);
            // the receipt needs the id and name of everything that went
            expect(outcome.removed).toEqual([
                { type: 'system', id: 'sys-1', name: 'first' },
                { type: 'zone', id: 'zone-1', name: 'second' },
            ]);
            expect(outcome.failures).toEqual([]);
            expect(messages[0]).toContain('"index":1');
            expect(messages[0]).toContain('"total":2');
        });

        it('removes systems a few at a time and the zone after them all', async () => {
            let running = 0;
            let peak = 0;
            const order: string[] = [];
            const system = (id: string) => ({
                resource: { type: 'system' as const, id, name: id },
                run: async () => {
                    running++;
                    peak = Math.max(peak, running);
                    await new Promise((resolve) => setTimeout(resolve, 1));
                    running--;
                    order.push(id);
                },
            });
            const plan = {
                scope: [],
                summary: [],
                warnings: [],
                steps: [
                    ...['s1', 's2', 's3', 's4', 's5', 's6'].map(system),
                    {
                        resource: {
                            type: 'zone' as const,
                            id: 'zone-1',
                            name: 'zone',
                        },
                        run: async () => {
                            order.push('zone');
                        },
                    },
                ],
            };
            const outcome = await runCascade(plan);
            expect(peak).toBe(4);
            expect(order).toHaveLength(7);
            expect(order[6]).toBe('zone');
            expect(outcome.removed).toHaveLength(7);
        });

        it('stops at the first failure and skips the rest', async () => {
            // Steps are ordered by dependency — a domain plan puts the org zone
            // after the systems inside it — so carrying on past a failure would
            // delete a zone out from under a system that is still there.
            const later = vi.fn(() => Promise.resolve());
            const plan = {
                scope: [],
                summary: [],
                warnings: [],
                steps: [
                    {
                        resource: {
                            type: 'system' as const,
                            id: 'sys-broken',
                            name: 'broken',
                        },
                        run: () => Promise.reject(new Error('boom')),
                    },
                    {
                        resource: {
                            type: 'zone' as const,
                            id: 'zone-after',
                            name: 'after',
                        },
                        run: later,
                    },
                ],
            };
            const outcome = await runCascade(plan);
            expect(later).not.toHaveBeenCalled();
            expect(outcome.removed).toEqual([]);
            expect(outcome.failures.length).toBe(1);
            expect(outcome.failures[0].resource.id).toBe('sys-broken');
            expect(outcome.skipped.map((_) => _.id)).toEqual(['zone-after']);
        });

        it('lets running system removals finish after one fails and starts no more', async () => {
            const removals = new Map<
                string,
                { resolve: () => void; reject: (error: Error) => void }
            >();
            const systems = ['s1', 's2', 's3', 's4', 's5'].map((id) => ({
                resource: { type: 'system' as const, id, name: id },
                run: vi.fn(
                    () =>
                        new Promise<void>((resolve, reject) =>
                            removals.set(id, { resolve, reject }),
                        ),
                ),
            }));
            const zone = {
                resource: { type: 'zone' as const, id: 'zone-1', name: 'zone' },
                run: vi.fn(() => Promise.resolve()),
            };
            const running = runCascade({
                scope: [],
                summary: [],
                warnings: [],
                steps: [...systems, zone],
            });
            expect([...removals.keys()]).toEqual(['s1', 's2', 's3', 's4']);
            removals.get('s1').reject(new Error('In use'));
            await new Promise((resolve) => setTimeout(resolve));
            expect(systems[4].run).not.toHaveBeenCalled();
            for (const id of ['s2', 's3', 's4']) removals.get(id).resolve();
            const outcome = await running;
            expect(zone.run).not.toHaveBeenCalled();
            expect(outcome.removed.map((_) => _.id)).toEqual([
                's2',
                's3',
                's4',
            ]);
            expect(outcome.failures.map((_) => _.resource.id)).toEqual(['s1']);
            expect(outcome.skipped.map((_) => _.id)).toEqual(['s5', 'zone-1']);
        });
    });
});
