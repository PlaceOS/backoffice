import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DefaultUrlSerializer, NavigationEnd, Router } from '@angular/router';
import { Domain, Group, Settings, System, User } from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { Subject } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CascadePlan } from '../../app/common/cascade-delete';
import { HotkeysService } from '../../app/common/hotkeys.service';
import { ActiveItemService } from '../../app/common/item.service';
import { notifyError } from '../../app/common/notifications';
import { newItem } from '../../app/common/placeos';
import { SettingsService } from '../../app/common/settings.service';
import { loadSupportAccess } from '../../app/common/support-access';
import { DialogEvent } from '../../app/common/types';
import type {
    ConfirmModalData,
    ConfirmModalResult,
} from '../../app/overlays/confirm-modal.component';
import { BackofficeUsersService } from '../../app/users/users.service';

const mocks = vi.hoisted(() => ({
    remove: vi.fn(),
    plan: vi.fn(),
    current_groups: vi.fn(),
    query_groups: vi.fn(),
    query_settings: vi.fn(),
    query_users: vi.fn(),
    show_system: vi.fn(),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        groups: {
            ...actual.groups,
            current: mocks.current_groups,
            query: mocks.query_groups,
        },
        settings: { ...actual.settings, query: mocks.query_settings },
    };
});
vi.mock('../../app/common/actions', async () => {
    const { System } =
        await vi.importActual<typeof import('@placeos/ts-client')>(
            '@placeos/ts-client',
        );
    const query = () => Promise.resolve({ data: [], total: 0, next: null });
    return {
        ACTIONS: {
            systems: {
                name: 'SYSTEMS',
                query,
                show: mocks.show_system,
                schema: System,
            },
            users: { name: 'USERS', query: mocks.query_users },
            domains: {
                name: 'DOMAINS',
                query,
                remove: mocks.remove,
                cascade: {
                    label: 'DOMAINS.DELETE_CASCADE',
                    description: 'DOMAINS.DELETE_CASCADE_DESC',
                    resource_type: 'domain',
                    plan: mocks.plan,
                },
            },
        },
    };
});
vi.mock('../../app/users/users.service', () => ({
    BackofficeUsersService: class {},
}));
vi.mock('../../app/common/hotkeys.service', () => ({
    HotkeysService: class {},
}));
vi.mock('../../app/common/settings.service', () => ({
    SettingsService: class {},
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

/** Confirm modal reference with the fields the delete flow writes to */
const confirmRef = () => ({
    componentInstance: {
        event: new Subject<DialogEvent>(),
        loading: signal(''),
        result: signal<ConfirmModalResult | null>(null),
        disableClose: vi.fn(),
        enableClose: vi.fn(),
    },
    close: vi.fn(),
});

const item = newItem(Domain, { id: 'domain-1', name: 'Campus' });
const user = signal<Partial<User>>({ sys_admin: true });
const router_events = new Subject<NavigationEnd>();
const router = {
    url: '/domains/-',
    events: router_events,
    parseUrl: (url: string) => new DefaultUrlSerializer().parse(url),
    navigate: vi.fn(async () => true),
};
let ref = confirmRef();
const dialog = {
    open: vi.fn(
        (_component: unknown, _config: { data: ConfirmModalData }) => ref,
    ),
};
let service: ActiveItemService;

/** Open the list of a section, as a router navigation does */
const openSection = (section: string) => {
    router.url = `/${section}/-`;
    router_events.next(new NavigationEnd(1, router.url, router.url));
};

beforeEach(async () => {
    vi.useFakeTimers();
    vi.clearAllMocks();
    ref = confirmRef();
    user.set({ sys_admin: true });
    router.url = '/domains/-';
    TestBed.configureTestingModule({
        providers: [
            ActiveItemService,
            { provide: Router, useValue: router },
            { provide: Dialog, useValue: dialog },
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
});

afterEach(() => {
    service.ngOnDestroy();
    vi.clearAllTimers();
    vi.useRealTimers();
});

describe('cascade delete', () => {
    /** Cascade step that removes `id`, or fails with `error` */
    const step = (type: 'system' | 'zone', id: string, error?: Error) => ({
        resource: { type, id, name: id },
        run: async () => {
            if (error) throw error;
        },
    });
    const confirm = () =>
        ref.componentInstance.event.next({
            reason: 'done',
            metadata: { options: { cascade: true } },
        });

    beforeEach(() => service.replaceItem(item));

    it('keeps the item and lists removed, failed and skipped resources when a step fails', async () => {
        mocks.plan.mockResolvedValue({
            scope: [],
            summary: [],
            warnings: [],
            steps: [
                step('system', 'sys-1'),
                step('zone', 'zone-1', new Error('In use')),
                step('zone', 'zone-2'),
            ],
        } satisfies CascadePlan);
        await service.delete();
        await dialog.open.mock.calls[0][1].data.options[0].details();
        confirm();
        await vi.advanceTimersByTimeAsync(0);
        expect(mocks.remove).not.toHaveBeenCalled();
        expect(service.active_item).toBe(item);
        expect(ref.componentInstance.result()).toEqual({
            title: 'CASCADE.RECEIPT_PARTIAL_TITLE',
            items: [
                { type: 'CASCADE.TYPE_SYSTEM', id: 'sys-1', name: 'sys-1' },
            ],
            failed: [
                { type: 'CASCADE.TYPE_ZONE', id: 'zone-1', name: 'zone-1' },
            ],
            skipped: [
                { type: 'CASCADE.TYPE_ZONE', id: 'zone-2', name: 'zone-2' },
            ],
            note: 'CASCADE.RECEIPT_PARTIAL_NOTE',
        });
        expect(notifyError).toHaveBeenCalledExactlyOnceWith('CASCADE.FAILED');
    });

    it('removes nothing when the cascade is confirmed before its plan resolves', async () => {
        await service.delete();
        confirm();
        await vi.advanceTimersByTimeAsync(0);
        expect(mocks.remove).not.toHaveBeenCalled();
        expect(service.active_item).toBe(item);
        expect(notifyError).toHaveBeenCalledExactlyOnceWith(
            'CASCADE.PLAN_UNAVAILABLE',
        );
    });
});

describe('edit permissions', () => {
    const support_group = (permissions: number) => ({
        group: newItem(Group, {
            id: 'group-1',
            name: 'Support',
            subsystems: ['support'],
        }),
        permissions,
    });

    // `allowed` is whether each can change systems, then domains
    it.each([
        {
            role: 'admins',
            account: { sys_admin: true },
            groups: [],
            allowed: [true, true],
        },
        {
            role: 'support users',
            account: { support: true },
            groups: [support_group(2)],
            allowed: [false, false],
        },
        {
            role: 'subsystem users',
            account: {},
            groups: [support_group(2)],
            allowed: [true, false],
        },
        {
            role: 'read-only subsystem users',
            account: {},
            groups: [support_group(1)],
            allowed: [false, false],
        },
    ])(
        'limits $role to the sections they can change',
        async ({ account, groups, allowed }) => {
            mocks.current_groups.mockResolvedValue(mockReply(groups));
            mocks.query_groups.mockResolvedValue(mockPage({ data: [] }));
            await loadSupportAccess(newItem(User, account));
            user.set(account);
            const result = ['systems', 'domains'].map((section) => {
                openSection(section);
                return service.canMutate(2);
            });
            expect(result).toEqual(allowed);
        },
    );
});

describe('item list', () => {
    const ann = { id: 'user-1', name: 'Ann' };
    const bea = { id: 'user-2', name: 'Bea' };

    beforeEach(async () => {
        mocks.query_groups.mockResolvedValue(mockPage({ data: [] }));
        await loadSupportAccess(newItem(User, { sys_admin: true }));
    });

    it('keeps the loaded rows and requests a failed page again', async () => {
        const page_two = vi
            .fn()
            .mockRejectedValueOnce(new Error('Offline'))
            .mockResolvedValue({ data: [bea], total: 2, next: null });
        mocks.query_users.mockResolvedValue({
            data: [ann],
            total: 2,
            next: page_two,
        });
        openSection('users');
        await vi.advanceTimersByTimeAsync(20);
        service.moreItems();
        await vi.advanceTimersByTimeAsync(20);
        expect(service.list()).toEqual([ann]);
        service.moreItems();
        await vi.advanceTimersByTimeAsync(20);
        expect(mocks.query_users).toHaveBeenCalledOnce();
        expect(service.list()).toEqual([ann, bea]);
    });

    it('sends one next-page request while one is pending', async () => {
        let resolve: (page: {
            data: User[];
            total: number;
            next: null;
        }) => void;
        const page_two = vi.fn(() => new Promise((done) => (resolve = done)));
        mocks.query_users.mockResolvedValue({
            data: [ann],
            total: 2,
            next: page_two,
        });
        openSection('users');
        await vi.advanceTimersByTimeAsync(20);

        service.moreItems();
        await vi.advanceTimersByTimeAsync(20);
        service.moreItems();
        await vi.advanceTimersByTimeAsync(20);
        expect(page_two).toHaveBeenCalledOnce();

        resolve({ data: [newItem(User, bea)], total: 2, next: null });
        await vi.advanceTimersByTimeAsync(20);
        expect(service.list()).toHaveLength(2);
    });

    it('shows only the users of the chosen domain until the filter clears', async () => {
        mocks.query_users.mockResolvedValue({ data: [], total: 0, next: null });
        openSection('users');
        await vi.advanceTimersByTimeAsync(20);
        service.setUserDomain(newItem(Domain, { id: 'domain-2' }));
        await vi.advanceTimersByTimeAsync(20);
        expect(mocks.query_users).toHaveBeenLastCalledWith(
            '',
            expect.objectContaining({
                include_deleted: false,
                authority_id: 'domain-2',
            }),
        );
        // The "All domains" option has an empty domain
        service.setUserDomain({} as Domain);
        await vi.advanceTimersByTimeAsync(20);
        expect(mocks.query_users).toHaveBeenLastCalledWith(
            '',
            expect.objectContaining({
                include_deleted: false,
                authority_id: undefined,
            }),
        );
    });
    it('keeps a saved user of another domain out of the filtered list and count', async () => {
        mocks.query_users.mockResolvedValue({
            data: [ann],
            total: 1,
            next: null,
        });
        openSection('users');
        service.setUserDomain(newItem(Domain, { id: 'domain-a' }));
        await vi.advanceTimersByTimeAsync(20);
        const other = newItem(User, {
            id: 'user-3',
            name: 'Cy',
            authority_id: 'domain-b',
        });

        service.replaceItem(other);
        expect(service.list()).toEqual([ann]);
        service.removeItem(other);
        expect(service.count()).toBe(1);
    });
});

describe('item settings', () => {
    beforeEach(async () => {
        mocks.query_groups.mockResolvedValue(mockPage({ data: [] }));
        await loadSupportAccess(newItem(User, { sys_admin: true }));
    });

    it('shows a settings error and loads the settings again on retry', async () => {
        mocks.show_system.mockResolvedValue({ id: 'sys-1', name: 'Room' });
        mocks.query_settings.mockRejectedValue(new Error('Offline'));
        router.url = '/systems/sys-1/about';
        router_events.next(new NavigationEnd(1, router.url, router.url));
        await vi.advanceTimersByTimeAsync(20);
        expect(service.item()?.id).toBe('sys-1');
        expect(service.item()?.settings).toBeUndefined();
        expect(service.settings_error()).toBe(true);
        mocks.query_settings.mockResolvedValue(mockPage({ data: [] }));
        await service.retrySettings();
        expect(service.settings_error()).toBe(false);
        expect(service.item()?.id).toBe('sys-1');
        expect(service.item()?.settings).toHaveLength(4);
    });
    /** A settings level of `sys-1` */
    const level = (encryption_level: number, settings_string: string) =>
        newItem(Settings, {
            id: `set-${encryption_level}`,
            parent_id: 'sys-1',
            encryption_level,
            settings_string,
            updated_at: settings_string.length,
        });

    /** Open system `sys-1` and wait for it and its settings to load */
    const openSystem = async () => {
        mocks.show_system.mockResolvedValue({ id: 'sys-1', name: 'Room' });
        router.url = '/systems/sys-1/about';
        router_events.next(new NavigationEnd(1, router.url, router.url));
        await vi.advanceTimersByTimeAsync(20);
    };

    it('drops a settings read that started before a save', async () => {
        mocks.query_settings.mockResolvedValue(
            mockPage({ data: [level(1, 'old: 1')] }),
        );
        await openSystem();
        // A refresh starts, and its read ends after the save
        let resolve: (page: ReturnType<typeof mockPage>) => void;
        mocks.query_settings.mockReturnValue(
            new Promise((done) => (resolve = done)),
        );
        service.replaceItem(newItem(System, { id: 'sys-1', name: 'Room' }));

        const saved = level(1, 'saved: 2');
        service.updateSettings(1, saved);
        resolve(mockPage({ data: [level(1, 'old: 1')] }));
        await vi.advanceTimersByTimeAsync(20);

        expect(service.item()?.settings?.[1]).toBe(saved);
    });

    it('loads every settings level when a save comes before they loaded', async () => {
        mocks.query_settings.mockRejectedValue(new Error('Offline'));
        await openSystem();
        expect(service.item()?.settings).toBeUndefined();

        const saved = level(2, 'saved: 2');
        mocks.query_settings.mockResolvedValue(mockPage({ data: [saved] }));
        service.updateSettings(2, saved);
        await vi.advanceTimersByTimeAsync(20);

        // Four levels, not a sparse list with only the saved level
        const settings = service.item()?.settings;
        expect(settings).toHaveLength(4);
        expect(settings.every((entry) => entry !== undefined)).toBe(true);
        expect(settings[2].settings_string).toBe('saved: 2');
    });

    /** Open system `sys-1`, with its load held until `resolve` runs */
    const openSystemHeld = async () => {
        let resolve: (system: { id: string; name: string }) => void;
        mocks.show_system.mockReturnValue(
            new Promise((done) => (resolve = done)),
        );
        router.url = '/systems/sys-1/about';
        router_events.next(new NavigationEnd(1, router.url, router.url));
        await vi.advanceTimersByTimeAsync(20);
        expect(service.loading()).toBe(true);
        return async () => {
            resolve({ id: 'sys-1', name: 'Room' });
            await vi.advanceTimersByTimeAsync(20);
        };
    };

    it('shows a save that ends while its item loads', async () => {
        mocks.query_settings.mockResolvedValue(
            mockPage({ data: [level(1, 'old: 1')] }),
        );
        const finishLoad = await openSystemHeld();

        const saved = level(1, 'saved: 2');
        service.updateSettings(1, saved);
        await finishLoad();

        expect(service.item()?.id).toBe('sys-1');
        expect(service.item()?.settings?.[1]).toBe(saved);
    });

    it('reads the settings again when a save ends during a failed read', async () => {
        // The first read fails. The read after the save gives it.
        const saved = level(1, 'saved: 2');
        mocks.query_settings
            .mockRejectedValueOnce(new Error('offline'))
            .mockResolvedValue(mockPage({ data: [saved] }));
        const finishLoad = await openSystemHeld();

        service.updateSettings(1, saved);
        await finishLoad();

        expect(service.item()?.settings?.[1].settings_string).toBe('saved: 2');
        expect(service.settings_error()).toBe(false);
    });

    it('does not show a save of another item on the item that loads', async () => {
        mocks.query_settings.mockResolvedValue(
            mockPage({ data: [level(1, 'old: 1')] }),
        );
        const finishLoad = await openSystemHeld();

        const other = newItem(Settings, {
            id: 'set-other',
            parent_id: 'sys-2',
            encryption_level: 1,
            settings_string: 'other: 3',
        });
        service.updateSettings(1, other);
        await finishLoad();

        expect(service.item()?.settings?.[1].settings_string).toBe('old: 1');
    });
});

describe('settings retry', () => {
    /** Settings of `parent_id` with one level that has `settings_string` */
    const page = (parent_id: string, settings_string: string) =>
        mockPage({
            data: [
                newItem(Settings, {
                    id: `set-${parent_id}`,
                    parent_id,
                    encryption_level: 1,
                    settings_string,
                }),
            ],
        });

    /** Settings strings that the next loads give, for each item id */
    let next_settings: Record<string, string>;
    /** Resolves the held settings read, or is `null` when no read is held */
    let releaseHeld: (() => void) | null;
    /** When `true`, the next settings read waits until `releaseHeld` runs */
    let hold_next: boolean;

    beforeEach(async () => {
        mocks.query_groups.mockResolvedValue(mockPage({ data: [] }));
        await loadSupportAccess(newItem(User, { sys_admin: true }));
        next_settings = {};
        releaseHeld = null;
        hold_next = false;
        mocks.show_system.mockImplementation(async (id: string) => ({
            id,
            name: id,
        }));
        mocks.query_settings.mockImplementation(
            ({ parent_id }: { parent_id: string[] }) => {
                const id = parent_id[0];
                if (!(id in next_settings))
                    return Promise.reject(new Error('Offline'));
                const result = page(id, next_settings[id]);
                if (!hold_next) return Promise.resolve(result);
                hold_next = false;
                return new Promise((done) => {
                    releaseHeld = () => done(result);
                });
            },
        );
    });

    /** Open system `id` and wait for it and its settings to load */
    const openSystem = async (id: string) => {
        router.url = `/systems/${id}/about`;
        router_events.next(new NavigationEnd(1, router.url, router.url));
        await vi.advanceTimersByTimeAsync(20);
        expect(service.item()?.id).toBe(id);
    };

    /** Open `sys-1` with failed settings and start a retry that is held */
    const startHeldRetry = async () => {
        await openSystem('sys-1');
        expect(service.settings_error()).toBe(true);
        next_settings['sys-1'] = 'old: 1';
        hold_next = true;
        const retry = service.retrySettings();
        await vi.advanceTimersByTimeAsync(0);
        expect(releaseHeld).not.toBeNull();
        // Wrap it, as `await` on a returned promise waits for it to resolve
        return { retry };
    };

    it('resolves true when the settings of the same item load', async () => {
        const { retry } = await startHeldRetry();
        releaseHeld?.();

        expect(await retry).toBe(true);
        expect(service.settings_error()).toBe(false);
        expect(service.item()?.settings?.[1].settings_string).toBe('old: 1');
    });

    it('resolves false when another item opens while it runs', async () => {
        const { retry } = await startHeldRetry();
        next_settings['sys-2'] = 'other: 2';
        await openSystem('sys-2');
        releaseHeld?.();

        expect(await retry).toBe(false);
        expect(service.item()?.id).toBe('sys-2');
        expect(service.item()?.settings?.[1].settings_string).toBe('other: 2');
    });

    it('does not replace the settings of a new load of the same item', async () => {
        const { retry } = await startHeldRetry();
        next_settings['sys-2'] = 'other: 2';
        await openSystem('sys-2');
        next_settings['sys-1'] = 'new: 3';
        await openSystem('sys-1');
        expect(service.item()?.settings?.[1].settings_string).toBe('new: 3');
        releaseHeld?.();

        expect(await retry).toBe(false);
        expect(service.item()?.settings?.[1].settings_string).toBe('new: 3');
    });
});
