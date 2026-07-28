import { beforeEach, describe, expect, it, vi } from 'vitest';

// `i18n` is stubbed so assertions can read the key and its arguments rather
// than a rendered English sentence.
vi.mock('../../app/common/locale.service', () => ({
    i18n: (key: string, args: Record<string, unknown> = {}) =>
        Object.keys(args).length ? `${key}:${JSON.stringify(args)}` : key,
}));

vi.mock('@placeos/ts-client', () => ({
    PlaceApplication: class {},
    PlaceDomain: class {},
    PlaceSystem: class {},
    PlaceZone: class {},
    del: vi.fn(() => Promise.resolve()),
    get: vi.fn(() => Promise.resolve([])),
    queryApplications: vi.fn(() => Promise.resolve({ data: [], total: 0 })),
    queryDomains: vi.fn(() => Promise.resolve({ data: [], total: 0 })),
    querySystems: vi.fn(() => Promise.resolve({ data: [], total: 0 })),
    queryZones: vi.fn(() => Promise.resolve({ data: [], total: 0 })),
    removeApplication: vi.fn(() => Promise.resolve()),
    removeSystem: vi.fn(() => Promise.resolve()),
    removeZone: vi.fn(() => Promise.resolve()),
    showSystem: vi.fn(() => Promise.resolve(null)),
    showZone: vi.fn(() => Promise.resolve(null)),
}));

import {
    del,
    get,
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
import {
    planDomainCascade,
    planZoneCascade,
    runCascade,
    splitZoneSystems,
    zoneSubtreeIds,
} from '../../app/common/cascade-delete';

type Query = ReturnType<typeof vi.fn>;

const page = (data: unknown[], next: unknown = null) =>
    Promise.resolve({ data, total: data.length, next: next ? () => next : null });

/** Zones keyed by their `parent_id`, matching the API's comma separated filter */
const zonesByParent = (tree: Record<string, { id: string }[]>) =>
    (params: { parent_id?: string }) => {
        const parents = (params?.parent_id || '').split(',').filter((_) => !!_);
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
    return (params: { zone_id?: string }) =>
        page(map[params?.zone_id || ''] || []);
};

const system = (id: string, zones: string[], modules: string[] = []) => ({
    id,
    name: id,
    zones,
    modules,
});

describe('cascade-delete', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        (queryZones as Query).mockImplementation(() => page([]));
        (querySystems as Query).mockImplementation(() => page([]));
        (queryApplications as Query).mockImplementation(() => page([]));
        (queryDomains as Query).mockImplementation(() => page([]));
        (get as Query).mockImplementation(() => Promise.resolve([]));
        // Removal candidates are re-read from the database; by default the
        // authoritative copy matches what the index returned.
        (showSystem as Query).mockImplementation((id: string) =>
            Promise.resolve(
                [...system_index.values()].find((_) => _.id === id) || null,
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
            (queryZones as Query).mockImplementation(
                zonesByParent({
                    'zone-a': [{ id: 'zone-b' }, { id: 'zone-c' }],
                    'zone-b': [{ id: 'zone-d' }],
                }),
            );
            expect(await zoneSubtreeIds('zone-a')).toEqual([
                'zone-a',
                'zone-b',
                'zone-c',
                'zone-d',
            ]);
        });

        it('queries a whole level in a single request', async () => {
            (queryZones as Query).mockImplementation(
                zonesByParent({
                    'zone-a': [{ id: 'zone-b' }, { id: 'zone-c' }],
                }),
            );
            await zoneSubtreeIds('zone-a');
            // one request for zone-a's children, one for `zone-b,zone-c`
            expect((queryZones as Query).mock.calls.length).toBe(2);
            expect((queryZones as Query).mock.calls[1][0].parent_id).toBe(
                'zone-b,zone-c',
            );
        });

        it('terminates when a zone is its own ancestor', async () => {
            (queryZones as Query).mockImplementation(
                zonesByParent({
                    'zone-a': [{ id: 'zone-b' }],
                    'zone-b': [{ id: 'zone-a' }],
                }),
            );
            expect(await zoneSubtreeIds('zone-a')).toEqual([
                'zone-a',
                'zone-b',
            ]);
        });

        it('follows pagination', async () => {
            (queryZones as Query).mockImplementation(() =>
                page([{ id: 'zone-b' }], page([{ id: 'zone-c' }])),
            );
            const ids = await zoneSubtreeIds('zone-a');
            expect(ids).toContain('zone-b');
            expect(ids).toContain('zone-c');
        });
    });

    describe('splitZoneSystems', () => {
        it('orphans a system whose every zone is inside the subtree', async () => {
            (querySystems as Query).mockImplementation(
                systemsByZone({
                    'zone-a': [system('sys-1', ['zone-a', 'zone-b'])],
                }),
            );
            const split = await splitZoneSystems(['zone-a', 'zone-b']);
            expect(split.orphaned.map((_) => _.id)).toEqual(['sys-1']);
            expect(split.retained).toEqual([]);
        });

        it('retains a system that also lives outside the subtree', async () => {
            (querySystems as Query).mockImplementation(
                systemsByZone({
                    'zone-a': [system('sys-1', ['zone-a', 'zone-elsewhere'])],
                }),
            );
            const split = await splitZoneSystems(['zone-a']);
            expect(split.orphaned).toEqual([]);
            expect(split.retained.map((_) => _.id)).toEqual(['sys-1']);
        });

        it('deduplicates a system found through several zones', async () => {
            const shared = system('sys-1', ['zone-a', 'zone-b']);
            (querySystems as Query).mockImplementation(
                systemsByZone({ 'zone-a': [shared], 'zone-b': [shared] }),
            );
            const split = await splitZoneSystems(['zone-a', 'zone-b']);
            expect(split.orphaned.length).toBe(1);
        });

        it('keeps a system the database says has moved outside the subtree', async () => {
            (querySystems as Query).mockImplementation(
                systemsByZone({ 'zone-a': [system('sys-1', ['zone-a'])] }),
            );
            // The index is stale — the database has it in another zone too.
            (showSystem as Query).mockImplementation(() =>
                Promise.resolve(system('sys-1', ['zone-a', 'zone-elsewhere'])),
            );
            const split = await splitZoneSystems(['zone-a']);
            expect(split.orphaned).toEqual([]);
            expect(split.retained.map((_) => _.id)).toEqual(['sys-1']);
        });

        it('skips a system that has already been deleted', async () => {
            (querySystems as Query).mockImplementation(
                systemsByZone({ 'zone-a': [system('sys-1', ['zone-a'])] }),
            );
            (showSystem as Query).mockImplementation(() =>
                Promise.reject(new Error('404')),
            );
            const split = await splitZoneSystems(['zone-a']);
            expect(split.orphaned).toEqual([]);
            expect(split.retained).toEqual([]);
        });

        it('treats a failed lookup as no systems rather than failing', async () => {
            (querySystems as Query).mockImplementation(() =>
                Promise.reject(new Error('nope')),
            );
            const split = await splitZoneSystems(['zone-a']);
            expect(split.orphaned).toEqual([]);
            expect(split.retained).toEqual([]);
        });
    });

    describe('planZoneCascade', () => {
        it('is empty for a zone with no systems', async () => {
            const plan = await planZoneCascade('zone-a');
            expect(plan.steps).toEqual([]);
        });

        it('only removes systems that would be left without a zone', async () => {
            (queryZones as Query).mockImplementation(
                zonesByParent({ 'zone-a': [{ id: 'zone-b' }] }),
            );
            (querySystems as Query).mockImplementation(
                systemsByZone({
                    'zone-a': [system('sys-inside', ['zone-a'], ['mod-1'])],
                    'zone-b': [
                        system('sys-straddle', ['zone-b', 'zone-other']),
                    ],
                }),
            );
            const plan = await planZoneCascade('zone-a');

            expect(plan.steps.length).toBe(1);
            await plan.steps[0].run();
            expect(removeSystem).toHaveBeenCalledExactlyOnceWith('sys-inside');

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
            (querySystems as Query).mockImplementation(
                systemsByZone({
                    'zone-a': [
                        system('sys-1', ['zone-a'], ['mod-1', 'mod-2']),
                        system('sys-2', ['zone-a'], ['mod-2']),
                    ],
                }),
            );
            const plan = await planZoneCascade('zone-a');
            expect(plan.summary).toContain(
                'CASCADE.REMOVE_MODULES:{"count":2}',
            );
        });

        it('never removes the zone itself', async () => {
            (querySystems as Query).mockImplementation(
                systemsByZone({ 'zone-a': [system('sys-1', ['zone-a'])] }),
            );
            const plan = await planZoneCascade('zone-a');
            await Promise.all(plan.steps.map((step) => step.run()));
            expect(removeZone).not.toHaveBeenCalled();
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
            (queryApplications as Query).mockImplementation(() =>
                page([{ id: '7', name: 'Workplace' }]),
            );
            const plan = await planDomainCascade(domain());
            expect(plan.summary).toContain(
                'CASCADE.REMOVE_APPLICATIONS:{"count":1}',
            );
            await plan.steps[0].run();
            expect(removeApplication).toHaveBeenCalledExactlyOnceWith('7');
        });

        it('removes only the staff API tenants matching the domain name', async () => {
            (get as Query).mockImplementation(() =>
                Promise.resolve([
                    { id: '1', name: 'Acme', domain: 'acme.example.com' },
                    { id: '2', name: 'Other', domain: 'other.example.com' },
                ]),
            );
            const plan = await planDomainCascade(domain());
            expect(plan.summary).toContain(
                'CASCADE.REMOVE_TENANTS:{"count":1}',
            );
            await plan.steps[0].run();
            expect(del).toHaveBeenCalledExactlyOnceWith(
                '/api/staff/v1/tenants/1',
            );
        });

        it('warns and touches no zones when the domain has no org_zone', async () => {
            const plan = await planDomainCascade(domain());
            expect(plan.warnings).toContain('CASCADE.NO_ORG_ZONE');
            expect(queryZones).not.toHaveBeenCalled();
            expect(plan.steps).toEqual([]);
        });

        it('leaves the org zone alone when another domain shares it', async () => {
            (queryDomains as Query).mockImplementation(() =>
                page([
                    domain({ org_zone: 'zone-org' }),
                    {
                        id: 'authority-2',
                        name: 'Beta',
                        domain: 'beta.example.com',
                        config: { org_zone: 'zone-org' },
                    },
                ]),
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
            expect(showZone).not.toHaveBeenCalled();
        });

        it('warns when the configured org zone no longer exists', async () => {
            (queryDomains as Query).mockImplementation(() =>
                page([domain({ org_zone: 'zone-org' })]),
            );
            (showZone as Query).mockImplementation(() =>
                Promise.reject(new Error('404')),
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
            (queryDomains as Query).mockImplementation(() =>
                page([domain({ org_zone: 'zone-org' })]),
            );
            (showZone as Query).mockImplementation(() =>
                Promise.resolve({ id: 'zone-org', name: 'ORG Acme' }),
            );
            (queryZones as Query).mockImplementation(
                zonesByParent({ 'zone-org': [{ id: 'zone-level' }] }),
            );
            (querySystems as Query).mockImplementation(
                systemsByZone({
                    'zone-level': [system('sys-1', ['zone-level'])],
                }),
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
            await plan.steps[0].run();
            expect(removeSystem).toHaveBeenCalledExactlyOnceWith('sys-1');
            await plan.steps[1].run();
            expect(removeZone).toHaveBeenCalledExactlyOnceWith('zone-org');
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
                        label: 'first',
                        run: async () => {
                            order.push('first');
                        },
                    },
                    {
                        label: 'second',
                        run: async () => {
                            order.push('second');
                        },
                    },
                ],
            };
            const outcome = await runCascade(plan, (m) => messages.push(m));
            expect(order).toEqual(['first', 'second']);
            expect(outcome.removed).toBe(2);
            expect(outcome.failures).toEqual([]);
            expect(messages[0]).toContain('"index":1');
            expect(messages[0]).toContain('"total":2');
        });

        it('continues past a failing step and reports it', async () => {
            const plan = {
                scope: [],
                summary: [],
                warnings: [],
                steps: [
                    {
                        label: 'broken',
                        run: () => Promise.reject(new Error('boom')),
                    },
                    { label: 'ok', run: () => Promise.resolve() },
                ],
            };
            const outcome = await runCascade(plan);
            expect(outcome.removed).toBe(1);
            expect(outcome.failures.length).toBe(1);
            expect(outcome.failures[0].label).toBe('broken');
        });
    });
});
