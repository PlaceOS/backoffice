import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlaceUser, removeUser, reviveUser } from '@placeos/ts-client';
import { Subject } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { HotkeysService } from '../../app/common/hotkeys.service';
import { ActiveItemService } from '../../app/common/item.service';
import { notifyError } from '../../app/common/notifications';
import { SettingsService } from '../../app/common/settings.service';
import { DialogEvent } from '../../app/common/types';
import { openConfirmModal } from '../../app/overlays/confirm-modal.component';
import { UsersStateService } from '../../app/users/users-state.service';
import { BackofficeUsersService } from '../../app/users/users.service';

const mocks = vi.hoisted(() => ({ remove: vi.fn(), query: vi.fn() }));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual('@placeos/ts-client/dist/index.es.js')),
    removeUser: vi.fn(),
    reviveUser: vi.fn(),
}));
vi.mock('../../app/common/actions', () => ({
    ACTIONS: {
        users: { name: 'USERS', remove: mocks.remove, query: mocks.query },
    },
}));
vi.mock('../../app/common/support-access', () => ({
    hasSupportRole: () => false,
    hasSupportSubsystem: () => false,
    isSubsystemUser: () => false,
}));
vi.mock('../../app/users/users.service', () => ({
    BackofficeUsersService: class {},
}));
vi.mock('../../app/common/hotkeys.service', () => ({
    HotkeysService: class {},
}));
vi.mock('../../app/common/settings.service', () => ({
    SettingsService: class {},
}));
vi.mock('../../app/common/general', () => ({ log: vi.fn() }));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('../../app/overlays/confirm-modal.component', async () => ({
    ...(await vi.importActual('../../app/overlays/confirm-modal.component')),
    openConfirmModal: vi.fn(),
}));

const item = new PlaceUser({ id: 'user-1', name: 'Alex', deleted: true });
const user = signal({ sys_admin: true });
const event = new Subject<DialogEvent>();
const dialog = { open: vi.fn() };
const close = vi.fn();
const loading = vi.fn();
let service: ActiveItemService;

beforeEach(async () => {
    vi.useFakeTimers();
    vi.clearAllMocks();
    user.set({ sys_admin: true });
    mocks.query.mockResolvedValue({ data: [item], total: 1 });
    mocks.remove.mockResolvedValue(undefined);
    vi.mocked(removeUser).mockResolvedValue(undefined);
    vi.mocked(reviveUser).mockResolvedValue(item);
    vi.mocked(openConfirmModal).mockResolvedValue({
        reason: 'done',
        close,
        loading,
    });
    dialog.open.mockReturnValue({
        componentInstance: { event, loading: signal('') },
        close,
    });
    TestBed.configureTestingModule({
        providers: [
            ActiveItemService,
            UsersStateService,
            {
                provide: Router,
                useValue: {
                    url: '/users/-',
                    events: new Subject(),
                    navigate: vi.fn(),
                },
            },
            { provide: MatDialog, useValue: dialog },
            { provide: SettingsService, useValue: {} },
            {
                provide: HotkeysService,
                useValue: { listen: () => () => undefined },
            },
            {
                provide: BackofficeUsersService,
                useValue: { user, current: user },
            },
        ],
    });
    service = TestBed.inject(ActiveItemService);
    await vi.advanceTimersByTimeAsync(350);
    service.replaceItem(item);
});

afterEach(() => {
    TestBed.resetTestingModule();
    vi.clearAllTimers();
    vi.useRealTimers();
});

describe('user deletion', () => {
    it.each([false, true])(
        'requires confirmation and passes force removal only when requested: %s',
        async (force) => {
            await service.delete(force);
            expect(removeUser).not.toHaveBeenCalled();
            expect(mocks.remove).not.toHaveBeenCalled();
            event.next({ reason: 'done' });
            await vi.advanceTimersByTimeAsync(0);
            if (force) {
                expect(removeUser).toHaveBeenCalledExactlyOnceWith(item.id, {
                    force_removal: true,
                });
                expect(mocks.remove).not.toHaveBeenCalled();
            } else {
                expect(mocks.remove).toHaveBeenCalledExactlyOnceWith(item);
                expect(removeUser).not.toHaveBeenCalled();
            }
            expect(service.active_item).toBeNull();
            expect(service.list()).not.toContain(item);
        },
    );

    it('blocks force deletion without delete permission', async () => {
        user.set({ sys_admin: false });
        await service.delete(true);
        expect(dialog.open).not.toHaveBeenCalled();
        expect(removeUser).not.toHaveBeenCalled();
    });
});

describe('user restoration', () => {
    it('restores the selected user after confirmation', async () => {
        await TestBed.inject(UsersStateService).revive();
        expect(reviveUser).toHaveBeenCalledExactlyOnceWith(item.id);
        expect(service.active_item).toMatchObject({
            id: item.id,
            deleted: false,
        });
        expect(service.list()).toContain(service.active_item);
        expect(close).toHaveBeenCalledOnce();
        await TestBed.inject(UsersStateService).revive();
        expect(reviveUser).toHaveBeenCalledOnce();
    });

    it('does not offer restoration for an active user', async () => {
        service.replaceItem(new PlaceUser({ ...item, deleted: false }));
        await TestBed.inject(UsersStateService).revive();
        expect(openConfirmModal).not.toHaveBeenCalled();
        expect(reviveUser).not.toHaveBeenCalled();
    });

    it('does not restore after cancellation', async () => {
        vi.mocked(openConfirmModal).mockResolvedValue({
            reason: '',
            close,
            loading,
        });
        await TestBed.inject(UsersStateService).revive();
        expect(reviveUser).not.toHaveBeenCalled();
    });

    it('reports failure and closes the loading dialog', async () => {
        vi.mocked(reviveUser).mockRejectedValue(new Error('Unavailable'));
        await TestBed.inject(UsersStateService).revive();
        expect(notifyError).toHaveBeenCalledOnce();
        expect(close).toHaveBeenCalledOnce();
        expect(service.active_item).toBe(item);
    });

    it('blocks restoration without update permission', async () => {
        user.set({ sys_admin: false });
        await TestBed.inject(UsersStateService).revive();
        expect(openConfirmModal).not.toHaveBeenCalled();
        expect(reviveUser).not.toHaveBeenCalled();
    });
});
