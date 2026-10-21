import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { PlaceModule, PlaceSystem } from '@placeos/ts-client';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PlaceDebugService } from '../../app/common/debug.service';
import { ActiveItemService } from '../../app/common/item.service';
import { SystemStateService } from '../../app/systems/system-state.service';

const mocks = vi.hoisted(() => ({
    listMetadata: vi.fn(),
    listSystemTriggers: vi.fn(),
    listSystemZones: vi.fn(),
    queryModules: vi.fn(),
    startModule: vi.fn(),
    systemSettings: vi.fn(),
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
vi.mock('../../app/common/debug.service', () => ({
    PlaceDebugService: class {},
}));
vi.mock('../../app/common/support-access', () => ({
    isSubsystemUser: () => false,
    querySupportSystems: vi.fn(),
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));
vi.mock('../../app/overlays/confirm-modal.component', () => ({
    openConfirmModal: vi.fn(),
}));
vi.mock('../../app/overlays/select-item-modal.component', () => ({
    SelectItemModalComponent: class {},
}));
vi.mock('../../app/overlays/view-response-modal.component', () => ({
    ViewResponseModalComponent: class {},
}));
vi.mock('../../app/systems/system-trigger-form.component', () => ({
    SystemTriggerFormComponent: class {},
}));

describe('SystemStateService', () => {
    const system = new PlaceSystem({
        id: 'sys-1',
        modules: ['mod-1'],
        zones: ['zone-1'],
    });
    const active = signal<PlaceSystem | null>(null);
    let router: { url: string; events: Subject<NavigationEnd> };
    let service: SystemStateService;

    const stable = () => TestBed.inject(ApplicationRef).whenStable();
    const openTab = (tab: string) => {
        router.url = `/systems/sys-1/${tab}`;
        router.events.next(new NavigationEnd(1, router.url, router.url));
    };

    beforeEach(() => {
        vi.resetAllMocks();
        active.set(null);
        router = { url: '/systems/sys-1/about', events: new Subject() };
        mocks.listMetadata.mockResolvedValue([]);
        mocks.listSystemTriggers.mockResolvedValue({ data: [], total: 3 });
        mocks.listSystemZones.mockResolvedValue({ data: [] });
        mocks.queryModules.mockResolvedValue({
            data: [new PlaceModule({ id: 'mod-1' })],
        });
        mocks.startModule.mockResolvedValue(undefined);
        mocks.systemSettings.mockResolvedValue([]);
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                SystemStateService,
                {
                    provide: ActiveItemService,
                    useValue: { item: active, active_item: system },
                },
                { provide: PlaceDebugService, useValue: {} },
                { provide: MatDialog, useValue: { open: vi.fn() } },
                { provide: Router, useValue: router },
            ],
        });
        service = TestBed.inject(SystemStateService);
    });

    it('loads tab lists only once their tab is opened', async () => {
        service.counts();
        service.modules();
        service.zones();
        active.set(system);
        await stable();

        expect(mocks.queryModules).not.toHaveBeenCalled();
        expect(mocks.listSystemZones).not.toHaveBeenCalled();
        expect(mocks.listSystemTriggers).toHaveBeenCalledWith('sys-1', {
            limit: 1,
        });
        expect(service.counts().triggers).toBe(3);

        openTab('modules');
        await stable();

        expect(mocks.queryModules).toHaveBeenCalledTimes(1);
        expect(service.modules().map(({ id }) => id)).toEqual(['mod-1']);
    });

    it('reloads only the module list after a module power change', async () => {
        openTab('modules');
        service.counts();
        service.modules();
        service.associated_settings();
        active.set(system);
        await stable();
        vi.clearAllMocks();

        await service.toggleModulePower(service.modules()[0]);
        await stable();

        expect(mocks.queryModules).toHaveBeenCalledTimes(1);
        expect(mocks.listSystemTriggers).not.toHaveBeenCalled();
        expect(mocks.systemSettings).not.toHaveBeenCalled();
        expect(mocks.listMetadata).not.toHaveBeenCalled();
    });
});
