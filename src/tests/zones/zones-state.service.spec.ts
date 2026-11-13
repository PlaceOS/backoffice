import { Dialog } from '@angular/cdk/dialog';
import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { PlaceGroup, PlaceSystem, PlaceZone } from '@placeos/ts-client';
import { of, Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { ZonesStateService } from '../../app/zones/zones-state.service';

const mocks = vi.hoisted(() => ({
    addGroupZone: vi.fn(),
    querySystems: vi.fn(),
    queryZones: vi.fn(),
    queryGroupZones: vi.fn(),
    listZoneTriggers: vi.fn(),
    listMetadata: vi.fn(),
    open: vi.fn(),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    addGroupZone: mocks.addGroupZone,
    querySystems: mocks.querySystems,
    queryZones: mocks.queryZones,
    queryGroupZones: mocks.queryGroupZones,
    listZoneTriggers: mocks.listZoneTriggers,
    listMetadata: mocks.listMetadata,
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
vi.mock('../../app/groups/group-bulk-add-modal.component', () => ({
    GroupBulkAddModalComponent: class {},
}));

describe('zone tabs', () => {
    const zone = new PlaceZone({ id: 'zone-1' });
    const active = signal<PlaceZone | null>(null);
    let navigation: Subject<NavigationEnd>;
    let service: ZonesStateService;

    beforeEach(() => {
        vi.resetAllMocks();
        active.set(null);
        navigation = new Subject();
        const empty = { data: [], total: 0, next: null };
        mocks.addGroupZone.mockResolvedValue({});
        mocks.querySystems.mockResolvedValue(empty);
        mocks.queryZones.mockResolvedValue(empty);
        mocks.queryGroupZones.mockResolvedValue(empty);
        mocks.listZoneTriggers.mockResolvedValue(empty);
        mocks.listMetadata.mockResolvedValue([]);
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                ZonesStateService,
                {
                    provide: ActiveItemService,
                    useValue: { item: active, active_item: zone },
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
            new PlaceSystem({ id: 'sys-1' }),
            new PlaceSystem({ id: 'sys-2' }),
        ];
        mocks.querySystems.mockResolvedValue({
            data: [systems[0]],
            total: 2,
            next: async () => ({ data: [systems[1]], total: 2, next: null }),
        });
        active.set(zone);
        const url = '/zones/zone-1/systems';
        navigation.next(new NavigationEnd(1, url, url));
        await TestBed.inject(ApplicationRef).whenStable();
        expect(mocks.querySystems).toHaveBeenLastCalledWith({
            zone_id: 'zone-1',
            limit: 500,
        });
        expect(service.systems()).toEqual(systems);
        expect(service.counts().systems).toBe(2);
    });

    it('adds each group picked in the bulk modal', async () => {
        mocks.open.mockReturnValue({
            closed: of({
                items: [
                    new PlaceGroup({ id: 'group-1' }),
                    new PlaceGroup({ id: 'group-2' }),
                ],
                permissions: 0,
            }),
        });
        await service.group_members.bulkAdd();
        expect(mocks.addGroupZone).toHaveBeenCalledTimes(2);
        expect(mocks.addGroupZone).toHaveBeenCalledWith({
            group_id: 'group-2',
            zone_id: 'zone-1',
        });
        expect(mocks.notifySuccess).toHaveBeenCalledExactlyOnceWith(
            'ZONES.GROUPS_BULK_SUCCESS:2',
        );
    });
});
