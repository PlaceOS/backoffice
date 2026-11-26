import { Dialog } from '@angular/cdk/dialog';
import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { Group, System, Trigger, Zone } from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { of, Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { newItem } from '../../app/common/placeos';
import { ZonesStateService } from '../../app/zones/zones-state.service';

const mocks = vi.hoisted(() => ({
    addGroupZone: vi.fn(),
    querySystems: vi.fn(),
    queryZones: vi.fn(),
    queryGroupZones: vi.fn(),
    listZoneTriggers: vi.fn(),
    listMetadata: vi.fn(),
    updateZone: vi.fn(),
    open: vi.fn(),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        systems: { ...actual.systems, query: mocks.querySystems },
        zones: {
            ...actual.zones,
            query: mocks.queryZones,
            triggerInstances: mocks.listZoneTriggers,
            update: mocks.updateZone,
        },
        groups_zones: {
            ...actual.groups_zones,
            query: mocks.queryGroupZones,
            create: mocks.addGroupZone,
        },
        metadata: { ...actual.metadata, show: mocks.listMetadata },
    };
});
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
vi.mock('../../app/groups/group-bulk-add-modal.component', () => ({
    GroupBulkAddModalComponent: class {},
}));

describe('zone tabs', () => {
    const zone = newItem(Zone, { id: 'zone-1' });
    const active = signal<Zone | null>(null);
    let navigation: Subject<NavigationEnd>;
    let service: ZonesStateService;

    beforeEach(() => {
        vi.resetAllMocks();
        active.set(null);
        navigation = new Subject();
        const empty = mockPage({ data: [], total: 0 });
        mocks.addGroupZone.mockResolvedValue(mockReply({}));
        mocks.querySystems.mockResolvedValue(empty);
        mocks.queryZones.mockResolvedValue(empty);
        mocks.queryGroupZones.mockResolvedValue(empty);
        mocks.listZoneTriggers.mockResolvedValue(mockReply([]));
        mocks.listMetadata.mockResolvedValue(mockReply({}));
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                ZonesStateService,
                {
                    provide: ActiveItemService,
                    useValue: {
                        activeOf: (type: string) =>
                            type === 'zones' ? active() : null,
                    },
                },
                { provide: Dialog, useValue: { open: mocks.open } },
                {
                    provide: Router,
                    useValue: {
                        url: '/zones/zone-1/about',
                        events: navigation,
                    },
                },
            ],
        });
        service = TestBed.inject(ZonesStateService);
    });

    it('loads every page of systems when the systems tab opens', async () => {
        const systems = [
            newItem(System, { id: 'sys-1' }),
            newItem(System, { id: 'sys-2' }),
        ];
        mocks.querySystems.mockResolvedValue(
            mockPage({
                data: [systems[0]],
                total: 2,
                next: async () => ({
                    data: [systems[1]],
                    total: 2,
                    next: null,
                }),
            }),
        );
        active.set(zone);
        const url = '/zones/zone-1/systems';
        navigation.next(new NavigationEnd(1, url, url));
        await TestBed.inject(ApplicationRef).whenStable();
        expect(mocks.querySystems).toHaveBeenLastCalledWith(
            {
                zone_id: ['zone-1'],
                limit: 500,
            },
            { signal: expect.any(AbortSignal) },
        );
        expect(service.systems()).toEqual(systems);
        expect(service.counts().systems).toBe(2);
    });

    it('sends only the trigger list when it adds a trigger', async () => {
        mocks.updateZone.mockResolvedValue(mockReply(zone));
        active.set(
            newItem(Zone, { id: 'zone-1', name: 'Old', triggers: ['t-1'] }),
        );
        await service.addTrigger(newItem(Trigger, { id: 't-2' }));
        expect(mocks.updateZone).toHaveBeenCalledExactlyOnceWith({
            id: 'zone-1',
            body: { triggers: ['t-1', 't-2'] },
        });
    });

    it('adds each group picked in the bulk modal', async () => {
        mocks.open.mockReturnValue({
            closed: of({
                items: [
                    newItem(Group, { id: 'group-1' }),
                    newItem(Group, { id: 'group-2' }),
                ],
                permissions: 0,
            }),
        });
        active.set(zone);
        await service.group_members.bulkAdd();
        expect(mocks.addGroupZone).toHaveBeenCalledTimes(2);
        expect(mocks.addGroupZone).toHaveBeenCalledWith({
            body: { group_id: 'group-2', zone_id: 'zone-1' },
        });
        expect(mocks.notifySuccess).toHaveBeenCalledExactlyOnceWith(
            'ZONES.GROUPS_BULK_SUCCESS:2',
        );
    });
});
