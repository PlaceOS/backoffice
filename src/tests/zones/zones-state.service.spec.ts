import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { PlaceGroup, PlaceZone } from '@placeos/ts-client';
import { of, Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { ZonesStateService } from '../../app/zones/zones-state.service';

const mocks = vi.hoisted(() => ({
    addGroupZone: vi.fn(),
    open: vi.fn(),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    addGroupZone: mocks.addGroupZone,
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

describe('zone group bulk add', () => {
    const zone = new PlaceZone({ id: 'zone-1' });
    let service: ZonesStateService;

    beforeEach(() => {
        vi.resetAllMocks();
        mocks.addGroupZone.mockResolvedValue({});
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                ZonesStateService,
                {
                    provide: ActiveItemService,
                    useValue: { item: signal(null), active_item: zone },
                },
                { provide: MatDialog, useValue: { open: mocks.open } },
                {
                    provide: Router,
                    useValue: {
                        url: '/zones/zone-1/about',
                        events: new Subject<NavigationEnd>(),
                    },
                },
            ],
        });
        service = TestBed.inject(ZonesStateService);
    });

    it('adds each group picked in the bulk modal', async () => {
        mocks.open.mockReturnValue({
            afterClosed: () =>
                of({
                    items: [
                        new PlaceGroup({ id: 'group-1' }),
                        new PlaceGroup({ id: 'group-2' }),
                    ],
                    permissions: 0,
                }),
        });
        await service.bulkAddGroups();
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
