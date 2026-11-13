import { Dialog } from '@angular/cdk/dialog';
import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { PlaceModule, PlaceSystem, PlaceZone } from '@placeos/ts-client';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PlaceDebugService } from '../../app/common/debug.service';
import { ActiveItemService } from '../../app/common/item.service';
import { notifyError } from '../../app/common/notifications';
import { openConfirmModal } from '../../app/overlays/confirm-modal.component';
import { SystemStateService } from '../../app/systems/system-state.service';

const mocks = vi.hoisted(() => ({
    isSubsystemUser: vi.fn(),
    listMetadata: vi.fn(),
    listSystemTriggers: vi.fn(),
    listSystemZones: vi.fn(),
    queryModules: vi.fn(),
    showZone: vi.fn(),
    startModule: vi.fn(),
    stopSystem: vi.fn(),
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
    isSubsystemUser: () => mocks.isSubsystemUser(),
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
    // Lets a late API response finish after the app is stable
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const moduleIds = () => service.modules().map(({ id }) => id);
    const openTab = (tab: string) => {
        router.url = `/systems/sys-1/${tab}`;
        router.events.next(new NavigationEnd(1, router.url, router.url));
    };

    beforeEach(() => {
        vi.resetAllMocks();
        active.set(null);
        router = { url: '/systems/sys-1/about', events: new Subject() };
        mocks.isSubsystemUser.mockReturnValue(false);
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
                { provide: Dialog, useValue: { open: vi.fn() } },
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
        expect(moduleIds()).toEqual(['mod-1']);
    });

    it('orders modules by the system module list', async () => {
        mocks.queryModules.mockResolvedValue({
            data: ['mod-3', 'mod-1', 'mod-2'].map(
                (id) => new PlaceModule({ id }),
            ),
        });
        openTab('modules');
        service.modules();
        active.set(
            new PlaceSystem({
                id: 'sys-1',
                modules: ['mod-1', 'mod-2', 'mod-3'],
            }),
        );
        await stable();

        expect(moduleIds()).toEqual(['mod-1', 'mod-2', 'mod-3']);
    });

    it('ignores a module response for a system that is no longer active', async () => {
        let resolve_old: (response: { data: PlaceModule[] }) => void;
        mocks.queryModules
            .mockReturnValueOnce(
                new Promise((resolve) => (resolve_old = resolve)),
            )
            .mockResolvedValueOnce({
                data: [new PlaceModule({ id: 'mod-2' })],
            });
        openTab('modules');
        service.modules();
        active.set(system);
        TestBed.tick();
        active.set(new PlaceSystem({ id: 'sys-2', modules: ['mod-2'] }));
        await stable();
        resolve_old({ data: [new PlaceModule({ id: 'mod-1' })] });
        await flush();

        expect(mocks.queryModules).toHaveBeenCalledTimes(2);
        expect(moduleIds()).toEqual(['mod-2']);
    });

    it('keeps known connection state when the module list refreshes', async () => {
        openTab('modules');
        service.modules();
        active.set(system);
        await stable();
        const loaded = service.modules()[0] as PlaceModule & {
            connected?: boolean;
        };
        // Bindings set this, and only emit again when it changes
        loaded.connected = true;
        mocks.queryModules.mockResolvedValue({
            data: [new PlaceModule({ id: 'mod-1' })],
        });

        await service.toggleModulePower(loaded);
        await stable();

        expect(service.modules()[0]).not.toBe(loaded);
        expect(service.modules()[0].connected).toBe(true);
    });

    it('shows the readable zones when a subsystem user cannot read one', async () => {
        mocks.isSubsystemUser.mockReturnValue(true);
        mocks.showZone.mockImplementation(async (id: string) => {
            if (id === 'zone-2') throw new Error('Forbidden');
            return new PlaceZone({ id });
        });
        openTab('zones');
        service.zones();
        active.set(
            new PlaceSystem({
                id: 'sys-1',
                zones: ['zone-1', 'zone-2', 'zone-3'],
            }),
        );
        await stable();

        expect(service.zones().map(({ id }) => id)).toEqual([
            'zone-1',
            'zone-3',
        ]);
        expect(mocks.listSystemZones).not.toHaveBeenCalled();
    });

    it('does not stop the system when the user cancels', async () => {
        vi.mocked(openConfirmModal).mockResolvedValue({
            loading: vi.fn(),
            close: vi.fn(),
        });

        await service.stopSystem();

        expect(mocks.stopSystem).not.toHaveBeenCalled();
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

    it('keeps the running state and module list when a power change fails', async () => {
        openTab('modules');
        service.modules();
        active.set(system);
        await stable();
        vi.clearAllMocks();
        mocks.startModule.mockRejectedValue('Module offline');
        const [device] = service.modules();

        await service.toggleModulePower(device);
        await stable();

        expect(device.running).toBe(false);
        expect(notifyError).toHaveBeenCalledWith('Module offline');
        expect(mocks.queryModules).not.toHaveBeenCalled();
    });
});
