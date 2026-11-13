import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DefaultUrlSerializer, NavigationEnd, Router } from '@angular/router';
import { PlaceDomain, PlaceGroup, PlaceUser } from '@placeos/ts-client';
import { Subject } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CascadePlan } from '../../app/common/cascade-delete';
import { HotkeysService } from '../../app/common/hotkeys.service';
import { ActiveItemService } from '../../app/common/item.service';
import { notifyError } from '../../app/common/notifications';
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
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    currentGroups: mocks.current_groups,
    queryGroups: mocks.query_groups,
}));
vi.mock('../../app/common/actions', () => {
    const query = () => Promise.resolve({ data: [], total: 0, next: null });
    return {
        ACTIONS: {
            systems: { name: 'SYSTEMS', query },
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

const item = new PlaceDomain({ id: 'domain-1', name: 'Campus' });
const user = signal<Partial<PlaceUser>>({ sys_admin: true });
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
        group: new PlaceGroup({
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
            mocks.current_groups.mockResolvedValue(groups);
            mocks.query_groups.mockResolvedValue({
                data: [],
                total: 0,
                next: null,
            });
            await loadSupportAccess(new PlaceUser(account));
            user.set(account);
            const result = ['systems', 'domains'].map((section) => {
                openSection(section);
                return service.canMutate(2);
            });
            expect(result).toEqual(allowed);
        },
    );
});
