import { Group, User } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import {
    canAccessSection,
    canUseSupportAction,
    clearSupportModuleCache,
    hasSupportRole,
    hasSupportSubsystem,
    isSubsystemUser,
    loadSupportAccess,
    querySupportModules,
    querySupportSystems,
    querySupportZones,
    selectSupportGroup,
    selected_support_group_id,
    support_groups,
} from '../../app/common/support-access';

const api = vi.hoisted(() => ({
    currentGroups: vi.fn(),
    querySystems: vi.fn(),
    queryZones: vi.fn(),
    queryGroups: vi.fn(),
    queryModules: vi.fn(),
}));
// The doubles give 6.x values. `mockReply` and `mockPage` make the 7.x results of them
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    const { mockPage, mockReply } = await import('@placeos/ts-client/compat');
    // A double without a value gives an empty list
    const reply =
        (fn: (input: unknown) => Promise<unknown> | undefined) =>
        async (input: unknown) =>
            mockReply((await fn(input)) ?? []);
    const page =
        (fn: (input: unknown) => Promise<{ data: unknown }> | undefined) =>
        async (input: unknown) =>
            mockPage((await fn(input)) ?? { data: [] });
    return {
        ...actual,
        groups: {
            ...actual.groups,
            current: reply(api.currentGroups),
            query: page(api.queryGroups),
        },
        systems: { ...actual.systems, query: page(api.querySystems) },
        zones: { ...actual.zones, query: page(api.queryZones) },
        modules: { ...actual.modules, query: page(api.queryModules) },
    };
});
const membership = (
    permissions: number,
    subsystem = 'support',
    id = 'group-1',
) => ({
    group: newItem(Group, { id, name: id, subsystems: [subsystem] }),
    permissions,
});

beforeEach(async () => {
    vi.resetAllMocks();
    localStorage.clear();
    api.queryGroups.mockResolvedValue({ data: [], total: 0, next: null });
    api.currentGroups.mockResolvedValue([]);
    await loadSupportAccess(newItem(User));
});

describe('support subsystem access', () => {
    it('uses effective, non-zero support memberships and distinguishes action bits', async () => {
        api.currentGroups.mockResolvedValue([
            membership(0),
            membership(64, 'signage'),
            membership(4),
        ]);
        await loadSupportAccess(newItem(User));
        expect(api.currentGroups).toHaveBeenLastCalledWith({
            subsystem: 'support',
        });
        expect(hasSupportSubsystem()).toBe(true);
        expect(canUseSupportAction(4)).toBe(true);
        expect(canUseSupportAction(8)).toBe(false);
        expect(isSubsystemUser()).toBe(true);
    });

    it('accepts Manage for actions and clears access if membership loading fails', async () => {
        api.currentGroups.mockResolvedValue([membership(64)]);
        await loadSupportAccess(newItem(User));
        expect(canUseSupportAction(8)).toBe(true);
        api.currentGroups.mockRejectedValue(new Error('Unavailable'));
        // The caller retries a failure, so it is not an empty group list
        await expect(loadSupportAccess(newItem(User))).rejects.toThrow(
            'Unavailable',
        );
        expect(hasSupportSubsystem()).toBe(false);
    });

    it.each([{ sys_admin: true }, { support: true }])(
        'preserves JWT access: %o',
        async (role) => {
            api.currentGroups.mockClear();
            await loadSupportAccess(newItem(User, role));
            expect(canAccessSection('systems')).toBe(true);
            expect(isSubsystemUser()).toBe(false);
            querySupportSystems({ q: 'room' });
            expect(api.querySystems).toHaveBeenCalledWith({ q: 'room' });
        },
    );

    it('scopes system searches without dropping other filters', async () => {
        api.currentGroups.mockResolvedValue([membership(1)]);
        await loadSupportAccess(newItem(User));
        querySupportSystems({ q: 'room', module_id: 'mod-1', limit: 1 });
        expect(api.querySystems).toHaveBeenCalledWith({
            q: 'room',
            module_id: 'mod-1',
            limit: 1,
            subsystem: 'support',
            group_id: 'group-1',
        });
    });

    it('collects only the selected group anchors across pages', async () => {
        api.currentGroups.mockResolvedValue([
            membership(1),
            membership(65, 'support', 'group-2'),
            membership(64, 'support', 'group-3'),
        ]);
        await loadSupportAccess(newItem(User));
        const zone = { id: 'zone-1', name: 'First' };
        const second = { id: 'zone-2', name: 'Second' };
        const next = vi
            .fn()
            .mockResolvedValue({ data: [second], total: 2, next: null });
        api.queryZones
            .mockResolvedValueOnce({ data: [zone], total: 2, next })
            .mockResolvedValueOnce({ data: [zone], total: 1, next: null });
        const result = await querySupportZones({ q: 'office' });
        expect(result.data).toEqual([zone, second]);
        expect(result.total).toBe(2);
        expect(next).toHaveBeenCalledOnce();
        expect(api.queryZones).toHaveBeenCalledTimes(1);
        expect(api.queryZones).toHaveBeenCalledWith({
            limit: 1000,
            q: 'office',
            group_id: 'group-1',
        });
    });

    it('keeps the latest user access when an earlier admin group list arrives late', async () => {
        let resolveAdminGroups: (page: {
            data: Group[];
            total: number;
            next: null;
        }) => void;
        api.queryGroups.mockReturnValueOnce(
            new Promise((resolve) => (resolveAdminGroups = resolve)),
        );
        await loadSupportAccess(
            newItem(User, { id: 'admin', sys_admin: true }),
        );
        api.currentGroups.mockResolvedValue([
            membership(1, 'support', 'group-2'),
        ]);
        await loadSupportAccess(newItem(User, { id: 'user-2' }));
        resolveAdminGroups({
            data: [membership(1).group],
            total: 1,
            next: null,
        });
        await new Promise((resolve) => setTimeout(resolve));
        expect(hasSupportRole()).toBe(false);
        expect(support_groups().map(({ group }) => group.id)).toEqual([
            'group-2',
        ]);
        expect(selected_support_group_id()).toBe('group-2');
    });

    it('returns an empty zone list without an unscoped request when there are no readable groups', async () => {
        api.currentGroups.mockResolvedValue([membership(64)]);
        await loadSupportAccess(newItem(User));
        expect((await querySupportZones()).data).toEqual([]);
        expect(api.queryZones).not.toHaveBeenCalled();
        api.queryZones.mockResolvedValue({ data: [], total: 0, next: null });
        await querySupportZones({ parent_id: ['zone-1'] });
        expect(api.queryZones).toHaveBeenCalledWith({ parent_id: ['zone-1'] });
    });
});

describe('selected support group', () => {
    it('updates section visibility and actions when switching groups', async () => {
        api.currentGroups.mockResolvedValue([
            membership(1),
            membership(4, 'support', 'group-2'),
        ]);
        await loadSupportAccess(newItem(User));
        expect(canAccessSection('modules')).toBe(true);
        expect(canAccessSection('repositories')).toBe(false);
        expect(canAccessSection('drivers')).toBe(false);
        expect(canAccessSection('alerts')).toBe(false);
        expect(selectSupportGroup('group-2')).toBe(true);
        expect(canAccessSection('modules')).toBe(false);
        expect(canAccessSection('zones')).toBe(false);
        expect(canAccessSection('users')).toBe(true);
        expect(canUseSupportAction(4)).toBe(true);
        expect(canUseSupportAction(8)).toBe(false);
        expect((await querySupportSystems()).data).toEqual([]);
        expect(api.querySystems).not.toHaveBeenCalled();
        expect(selectSupportGroup('unavailable')).toBe(false);
        expect(selectSupportGroup('')).toBe(false);
        expect(selected_support_group_id()).toBe('group-2');
    });

    it('remembers selection for the user and falls back when membership is removed', async () => {
        api.currentGroups.mockResolvedValue([
            membership(1),
            membership(1, 'support', 'group-2'),
        ]);
        const user = newItem(User, { id: 'user-1', authority_id: 'domain-1' });
        await loadSupportAccess(user);
        selectSupportGroup('group-2');
        await loadSupportAccess(user);
        expect(selected_support_group_id()).toBe('group-2');
        await loadSupportAccess(
            newItem(User, { id: 'user-2', authority_id: 'domain-1' }),
        );
        expect(selected_support_group_id()).toBe('group-1');
        api.currentGroups.mockResolvedValue([membership(1)]);
        await loadSupportAccess(user);
        expect(selected_support_group_id()).toBe('group-1');
    });

    it('lets admins browse support groups and return to all groups', async () => {
        api.queryGroups.mockResolvedValue({
            data: [membership(1).group],
            total: 1,
            next: null,
        });
        await loadSupportAccess(newItem(User, { sys_admin: true }));
        // Admins are published at once and their groups arrive after
        expect(canAccessSection('admin')).toBe(true);
        await vi.waitFor(() => expect(support_groups()).toHaveLength(1));
        expect(selected_support_group_id()).toBe('');
        selectSupportGroup('group-1');
        querySupportSystems({ q: 'room' });
        expect(api.querySystems).toHaveBeenLastCalledWith({
            q: 'room',
            group_id: 'group-1',
        });
        expect(canAccessSection('admin')).toBe(true);
        expect(selectSupportGroup('')).toBe(true);
        querySupportSystems({ q: 'room' });
        expect(api.querySystems).toHaveBeenLastCalledWith({ q: 'room' });
    });

    it('lists modules through group systems and removes shared duplicates', async () => {
        api.currentGroups.mockResolvedValue([membership(1)]);
        await loadSupportAccess(newItem(User));
        const next = vi.fn().mockResolvedValue({
            data: [{ id: 'sys-2' }],
            total: 2,
            next: null,
        });
        api.querySystems.mockResolvedValue({
            data: [{ id: 'sys-1' }],
            total: 2,
            next,
        });
        api.queryModules
            .mockResolvedValueOnce({
                data: [{ id: 'mod-1', name: 'Screen' }],
                total: 1,
                next: null,
            })
            .mockResolvedValueOnce({
                data: [
                    { id: 'mod-1', name: 'Screen' },
                    { id: 'mod-2', name: 'Light' },
                ],
                total: 2,
                next: null,
            });
        const result = await querySupportModules({ q: 'screen' });
        expect(result.data.map(({ id }) => id)).toEqual(['mod-1']);
        expect(api.querySystems).toHaveBeenCalledWith({
            limit: 1000,
            subsystem: 'support',
            group_id: 'group-1',
        });
        expect(api.queryModules).toHaveBeenCalledWith({
            control_system_id: 'sys-1',
        });
        expect(api.queryModules).toHaveBeenCalledWith({
            control_system_id: 'sys-2',
        });
    });

    it('lists modules from readable systems when another system has no read grant', async () => {
        api.currentGroups.mockResolvedValue([membership(1)]);
        await loadSupportAccess(newItem(User));
        api.querySystems.mockResolvedValue({
            data: [{ id: 'sys-1' }, { id: 'sys-2' }],
            total: 2,
            next: null,
        });
        api.queryModules.mockImplementation(
            async ({ control_system_id }: { control_system_id: string }) => {
                if (control_system_id === 'sys-1') {
                    throw Object.assign(new Error('Forbidden'), {
                        status: 403,
                    });
                }
                return {
                    data: [{ id: 'mod-2', name: 'Light' }],
                    total: 1,
                    next: null,
                };
            },
        );
        const result = await querySupportModules({});
        expect(result.data.map(({ id }) => id)).toEqual(['mod-2']);
    });

    it('walks the group systems once for every search on the same group', async () => {
        api.currentGroups.mockResolvedValue([membership(1)]);
        await loadSupportAccess(newItem(User));
        api.querySystems.mockResolvedValue({
            data: [{ id: 'sys-1' }],
            total: 1,
            next: null,
        });
        api.queryModules.mockResolvedValue({
            data: [
                { id: 'mod-1', name: 'Screen' },
                { id: 'mod-2', name: 'Light' },
            ],
            total: 2,
            next: null,
        });
        const all = await querySupportModules({});
        const lights = await querySupportModules({ q: 'light' });
        expect(all.data).toHaveLength(2);
        expect(lights.data.map(({ id }) => id)).toEqual(['mod-2']);
        expect(api.querySystems).toHaveBeenCalledOnce();
        expect(api.queryModules).toHaveBeenCalledOnce();
        clearSupportModuleCache();
        await querySupportModules({});
        expect(api.queryModules).toHaveBeenCalledTimes(2);
    });

    it('walks the group systems again after the module set expires', async () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        try {
            api.currentGroups.mockResolvedValue([membership(1)]);
            await loadSupportAccess(newItem(User));
            api.querySystems.mockResolvedValue({
                data: [{ id: 'sys-1' }],
                total: 1,
                next: null,
            });
            await querySupportModules({});
            vi.setSystemTime(Date.now() + 59_000);
            await querySupportModules({});
            expect(api.querySystems).toHaveBeenCalledOnce();
            vi.setSystemTime(Date.now() + 1_000);
            await querySupportModules({});
            expect(api.querySystems).toHaveBeenCalledTimes(2);
        } finally {
            vi.useRealTimers();
        }
    });

    it('loads the modules of a group again after its walk was left for another group', async () => {
        api.currentGroups.mockResolvedValue([
            membership(1, 'support', 'group-1'),
            membership(1, 'support', 'group-2'),
        ]);
        await loadSupportAccess(newItem(User));
        selectSupportGroup('group-1');
        const systems = { data: [{ id: 'sys-1' }], total: 1, next: null };
        // The systems of group-1 stay pending until the test releases them
        let release: (page: typeof systems) => void;
        api.querySystems.mockReturnValueOnce(
            new Promise((resolve) => (release = resolve)),
        );
        api.querySystems.mockResolvedValue(systems);
        api.queryModules.mockResolvedValue({
            data: [{ id: 'mod-1', name: 'Screen' }],
            total: 1,
            next: null,
        });

        const abandoned = querySupportModules({});
        selectSupportGroup('group-2');
        release(systems);
        await abandoned;
        selectSupportGroup('group-1');
        const result = await querySupportModules({});

        // The walk that stopped early did not keep an empty list for group-1
        expect(result.data.map(({ id }) => id)).toEqual(['mod-1']);
    });

    it('does not show any sections before a user has access', async () => {
        expect(
            ['systems', 'modules', 'zones', 'users', 'admin'].filter(
                canAccessSection,
            ),
        ).toEqual([]);
    });
});
