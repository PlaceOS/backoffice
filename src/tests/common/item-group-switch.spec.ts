import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { afterEach, expect, it, vi } from 'vitest';
import { HotkeysService } from '../../app/common/hotkeys.service';
import { ActiveItemService } from '../../app/common/item.service';
import { SettingsService } from '../../app/common/settings.service';
import { BackofficeUsersService } from '../../app/users/users.service';

const mocks = vi.hoisted(() => ({
    query: vi.fn(),
    show: vi.fn(),
    group: 'group-1',
}));
vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);
vi.mock('../../app/common/actions', () => ({
    ACTIONS: { systems: { query: mocks.query, show: mocks.show } },
}));
vi.mock('../../app/common/support-access', () => ({
    hasSupportRole: () => false,
    hasSupportSubsystem: () => true,
    canAccessSection: () => true,
    selected_support_group_id: () => mocks.group,
    selectSupportGroup: (id: string) => {
        mocks.group = id;
        return true;
    },
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
vi.mock('../../app/common/notifications', () => ({ notifyError: vi.fn() }));

afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
});

it('clears the active resource and ignores old list and detail responses after switching groups', async () => {
    vi.useFakeTimers();
    const old_list = Promise.withResolvers<{
        data: { id: string; name: string }[];
        total: number;
        next: null;
    }>();
    const old_item = Promise.withResolvers<{ id: string; name: string }>();
    mocks.query
        .mockReturnValueOnce(old_list.promise)
        .mockResolvedValue({
            data: [{ id: 'sys-new', name: 'New room' }],
            total: 1,
            next: null,
        });
    mocks.show.mockReturnValue(old_item.promise);
    const events = new Subject<NavigationEnd>();
    const router = {
        url: '/systems/-',
        events,
        navigate: vi.fn(async () => {
            router.url = '/systems/-';
            events.next(new NavigationEnd(1, router.url, router.url));
            return true;
        }),
    };
    const user = signal({ sys_admin: false, support: false });
    TestBed.configureTestingModule({
        providers: [
            ActiveItemService,
            { provide: Router, useValue: router },
            { provide: MatDialog, useValue: {} },
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
    const service = TestBed.inject(ActiveItemService);
    await vi.advanceTimersByTimeAsync(350);
    const loading_item = service.setItem('sys-old');
    await vi.advanceTimersByTimeAsync(1);
    service.switchGroup('group-2');
    expect(service.active_item).toBeNull();
    await vi.advanceTimersByTimeAsync(20);
    expect(service.list()).toEqual([{ id: 'sys-new', name: 'New room' }]);
    old_list.resolve({
        data: [{ id: 'sys-old', name: 'Old room' }],
        total: 99,
        next: null,
    });
    old_item.resolve({ id: 'sys-old', name: 'Old room' });
    await loading_item;
    await vi.advanceTimersByTimeAsync(1);
    expect(service.list()).toEqual([{ id: 'sys-new', name: 'New room' }]);
    expect(service.count()).toBe(1);
    expect(service.active_item).toBeNull();
    service.ngOnDestroy();
});
