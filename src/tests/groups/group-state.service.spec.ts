import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceGroup,
    PlaceGroupUser,
    PlaceGroupZone,
    PlaceUser,
} from '@placeos/ts-client';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { GroupStateService } from '../../app/groups/group-state.service';

const mocks = vi.hoisted(() => ({
    addGroupUser: vi.fn(),
    addGroupZone: vi.fn(),
    removeGroupUser: vi.fn(),
    removeGroupZone: vi.fn(),
    updateGroupUser: vi.fn(),
    updateGroupZone: vi.fn(),
    queryGroupUsers: vi.fn(),
    queryGroupZones: vi.fn(),
    confirm: vi.fn(),
    open: vi.fn(),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));
vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));
vi.mock('../../app/common/locale.service', () => ({
    i18n: (key: string, params?: { count?: number }) =>
        params?.count === undefined ? key : `${key}:${params.count}`,
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: mocks.notifyError,
    notifySuccess: mocks.notifySuccess,
}));
vi.mock('../../app/overlays/confirm-modal.component', () => ({
    openConfirmModal: mocks.confirm,
}));
vi.mock('../../app/groups/group-bulk-add-modal.component', () => ({
    GroupBulkAddModalComponent: class {},
}));
vi.mock('../../app/groups/group-permissions-modal.component', () => ({
    GroupPermissionsModalComponent: class {},
}));

describe('group membership actions', () => {
    const group = new PlaceGroup({ id: 'group-1', authority_id: 'domain-1' });
    const user = new PlaceGroupUser({
        group_id: 'group-1',
        user_id: 'user-1',
        permissions: 17,
    });
    const zone = new PlaceGroupZone({
        group_id: 'group-1',
        zone_id: 'zone-1',
        permissions: 5,
        deny: true,
    });
    const active = signal<PlaceGroup | null>(null);
    const close = vi.fn();
    const loading = vi.fn();
    let service: GroupStateService;

    beforeEach(() => {
        vi.resetAllMocks();
        active.set(null);
        mocks.queryGroupUsers.mockResolvedValue({ data: [], total: 0 });
        mocks.queryGroupZones.mockResolvedValue({ data: [], total: 0 });
        mocks.addGroupUser.mockResolvedValue(user);
        mocks.removeGroupUser.mockResolvedValue(undefined);
        mocks.removeGroupZone.mockResolvedValue(undefined);
        mocks.updateGroupUser.mockResolvedValue(user);
        mocks.updateGroupZone.mockResolvedValue(zone);
        mocks.confirm.mockResolvedValue({ reason: 'done', close, loading });
        mocks.open.mockReturnValue({ afterClosed: () => of(undefined) });
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                GroupStateService,
                {
                    provide: ActiveItemService,
                    useValue: { item: active, active_item: group },
                },
                { provide: MatDialog, useValue: { open: mocks.open } },
            ],
        });
        service = TestBed.inject(GroupStateService);
    });

    it('loads memberships in name order and uses IDs when names are unavailable', async () => {
        mocks.queryGroupUsers.mockResolvedValue({
            data: [
                new PlaceGroupUser({
                    user_id: 'z-user',
                    user: new PlaceUser({ name: 'Zoe' }),
                }),
                new PlaceGroupUser({ user_id: 'a-user' }),
            ],
            total: 2,
        });
        active.set(group);
        await TestBed.inject(ApplicationRef).whenStable();
        expect(service.users().map((item) => item.user_id)).toEqual([
            'a-user',
            'z-user',
        ]);
        expect(service.counts()).toEqual({ users: 2, zones: 0 });
        expect(mocks.queryGroupUsers).toHaveBeenCalledWith({
            group_id: 'group-1',
            limit: 1000,
        });
    });

    it('recovers to empty lists after membership queries fail', async () => {
        mocks.queryGroupUsers.mockRejectedValue(new Error('Offline'));
        mocks.queryGroupZones.mockRejectedValue(new Error('Offline'));
        active.set(group);
        await TestBed.inject(ApplicationRef).whenStable();
        expect(service.users()).toEqual([]);
        expect(service.zones()).toEqual([]);
        expect(service.counts()).toEqual({ users: 0, zones: 0 });
        expect(service.loading()).toBe(false);
    });

    it('does not send an add request for an unsaved user', async () => {
        await service.addUser(new PlaceUser());
        expect(mocks.addGroupUser).not.toHaveBeenCalled();
    });

    it('reports a failed add without claiming success', async () => {
        const error = new Error('Forbidden');
        mocks.addGroupUser.mockRejectedValue(error);
        await expect(
            service.addUser(new PlaceUser({ id: 'user-1' })),
        ).rejects.toBe(error);
        expect(mocks.addGroupUser).toHaveBeenCalledExactlyOnceWith({
            group_id: 'group-1',
            user_id: 'user-1',
        });
        expect(mocks.notifyError).toHaveBeenCalledExactlyOnceWith(
            'GROUPS.USER_ADD_ERROR',
        );
        expect(mocks.notifySuccess).not.toHaveBeenCalled();
    });

    it.each(['user', 'zone'] as const)(
        'does not remove a %s when confirmation is cancelled',
        async (kind) => {
            mocks.confirm.mockResolvedValue({ reason: '', close, loading });
            if (kind === 'user') await service.removeUser(user);
            else await service.removeZone(zone);
            expect(mocks.removeGroupUser).not.toHaveBeenCalled();
            expect(mocks.removeGroupZone).not.toHaveBeenCalled();
            expect(loading).not.toHaveBeenCalled();
        },
    );

    it('removes a confirmed user membership with the correct user and group IDs', async () => {
        await service.removeUser(user);
        expect(mocks.removeGroupUser).toHaveBeenCalledExactlyOnceWith(
            'user-1',
            'group-1',
        );
        expect(close).toHaveBeenCalledOnce();
        expect(mocks.notifySuccess).toHaveBeenCalledExactlyOnceWith(
            'GROUPS.USER_REMOVE_SUCCESS',
        );
    });

    it('closes the confirmation and reports a failed zone removal', async () => {
        const error = new Error('Forbidden');
        mocks.removeGroupZone.mockRejectedValue(error);
        await expect(service.removeZone(zone)).rejects.toBe(error);
        expect(mocks.removeGroupZone).toHaveBeenCalledExactlyOnceWith(
            'group-1',
            'zone-1',
        );
        expect(close).toHaveBeenCalledOnce();
        expect(mocks.notifyError).toHaveBeenCalledExactlyOnceWith(
            'GROUPS.ZONE_REMOVE_ERROR',
        );
        expect(mocks.notifySuccess).not.toHaveBeenCalled();
    });

    it('saves zero permissions from the user permissions dialog', async () => {
        mocks.open.mockReturnValue({
            afterClosed: () => of({ permissions: 0 }),
        });
        await service.editUserPermissions(user);
        expect(mocks.updateGroupUser).toHaveBeenCalledExactlyOnceWith(
            'user-1',
            'group-1',
            { permissions: 0 },
        );
    });

    it('saves the deny flag and permissions from the zone permissions dialog', async () => {
        mocks.open.mockReturnValue({
            afterClosed: () => of({ permissions: 16, deny: false }),
        });
        await service.editZonePermissions(zone);
        expect(mocks.updateGroupZone).toHaveBeenCalledExactlyOnceWith(
            'group-1',
            'zone-1',
            { permissions: 16, deny: false },
        );
    });

    it('does not save permissions when either dialog is cancelled', async () => {
        await service.editUserPermissions(user);
        await service.editZonePermissions(zone);
        expect(mocks.updateGroupUser).not.toHaveBeenCalled();
        expect(mocks.updateGroupZone).not.toHaveBeenCalled();
    });

    it('reports both successful and failed bulk additions and clears loading', async () => {
        mocks.open.mockReturnValue({
            afterClosed: () =>
                of({
                    items: [
                        new PlaceUser({ id: 'user-1' }),
                        new PlaceUser({ id: 'user-2' }),
                    ],
                    permissions: 17,
                }),
        });
        mocks.addGroupUser
            .mockResolvedValueOnce(user)
            .mockRejectedValueOnce(new Error('Forbidden'));
        await service.bulkAddUsers();
        expect(mocks.addGroupUser).toHaveBeenCalledTimes(2);
        expect(mocks.addGroupUser).toHaveBeenCalledWith({
            group_id: 'group-1',
            user_id: 'user-2',
            permissions: 17,
        });
        expect(mocks.notifyError).toHaveBeenCalledExactlyOnceWith(
            'GROUPS.USERS_BULK_ERROR:1',
        );
        expect(mocks.notifySuccess).toHaveBeenCalledExactlyOnceWith(
            'GROUPS.USERS_BULK_SUCCESS:1',
        );
        expect(service.loading()).toBe(false);
    });

    it('does not add memberships after a bulk dialog is cancelled', async () => {
        await service.bulkAddUsers();
        await service.bulkAddZones();
        expect(mocks.addGroupUser).not.toHaveBeenCalled();
        expect(mocks.addGroupZone).not.toHaveBeenCalled();
    });
});
