import { PlaceGroup, PlaceUser } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    canAccessSection,
    canUseSupportAction,
    hasSupportSubsystem,
    isSubsystemUser,
    loadSupportAccess,
    querySupportModules,
    querySupportSystems,
    querySupportZones,
    selectSupportGroup,
    selected_support_group_id,
} from '../../app/common/support-access';

const api = vi.hoisted(() => ({
    currentGroups: vi.fn(),
    querySystems: vi.fn(),
    queryZones: vi.fn(),
    queryGroups: vi.fn(),
    queryModules: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await import('@placeos/ts-client/dist/index.es.js')),
    ...api,
}));
const membership = (
    permissions: number,
    subsystem = 'support',
    id = 'group-1',
) => ({
    group: new PlaceGroup({ id, subsystems: [subsystem] }),
    permissions,
});

beforeEach(async () => {
    vi.resetAllMocks();
    localStorage.clear();
    api.queryGroups.mockResolvedValue({ data: [], total: 0, next: null });
    api.currentGroups.mockResolvedValue([]);
    await loadSupportAccess(new PlaceUser());
});

describe('support subsystem access', () => {
    it('uses effective, non-zero support memberships and distinguishes action bits', async () => {
        api.currentGroups.mockResolvedValue([
            membership(0),
            membership(64, 'signage'),
            membership(4),
        ]);
        await loadSupportAccess(new PlaceUser());
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
        await loadSupportAccess(new PlaceUser());
        expect(canUseSupportAction(8)).toBe(true);
        api.currentGroups.mockRejectedValue(new Error('Forbidden'));
        await loadSupportAccess(new PlaceUser());
        expect(hasSupportSubsystem()).toBe(false);
    });

    it.each([{ sys_admin: true }, { support: true }])(
        'preserves JWT access: %o',
        async (role) => {
            api.currentGroups.mockClear();
            await loadSupportAccess(new PlaceUser(role));
            expect(canAccessSection('systems')).toBe(true);
            expect(isSubsystemUser()).toBe(false);
            querySupportSystems({ q: 'room' });
            expect(api.querySystems).toHaveBeenCalledWith({ q: 'room' });
        },
    );

    it('scopes system searches without dropping other filters', async () => {
        api.currentGroups.mockResolvedValue([membership(1)]);
        await loadSupportAccess(new PlaceUser());
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
        await loadSupportAccess(new PlaceUser());
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
            q: 'office',
            group_id: 'group-1',
        });
    });

    it('returns an empty zone list without an unscoped request when there are no readable groups', async () => {
        api.currentGroups.mockResolvedValue([membership(64)]);
        await loadSupportAccess(new PlaceUser());
        expect((await querySupportZones()).data).toEqual([]);
        expect(api.queryZones).not.toHaveBeenCalled();
        api.queryZones.mockResolvedValue({ data: [], total: 0, next: null });
        await querySupportZones({ parent_id: 'zone-1' });
        expect(api.queryZones).toHaveBeenCalledWith({ parent_id: 'zone-1' });
    });
});

describe('selected support group', () => {
    it('updates section visibility and actions when switching groups', async () => {
        api.currentGroups.mockResolvedValue([
            membership(1),
            membership(4, 'support', 'group-2'),
        ]);
        await loadSupportAccess(new PlaceUser());
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
        const user = new PlaceUser({ id: 'user-1', authority_id: 'domain-1' });
        await loadSupportAccess(user);
        selectSupportGroup('group-2');
        await loadSupportAccess(user);
        expect(selected_support_group_id()).toBe('group-2');
        await loadSupportAccess(
            new PlaceUser({ id: 'user-2', authority_id: 'domain-1' }),
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
        await loadSupportAccess(new PlaceUser({ sys_admin: true }));
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
        await loadSupportAccess(new PlaceUser());
        const next = vi
            .fn()
            .mockResolvedValue({
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
            limit: 200,
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

    it('does not show any sections before a user has access', async () => {
        expect(
            ['systems', 'modules', 'zones', 'users', 'admin'].filter(
                canAccessSection,
            ),
        ).toEqual([]);
    });
});
