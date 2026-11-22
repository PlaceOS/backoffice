import { Dialog } from '@angular/cdk/dialog';
import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import {
    metadata,
    Module,
    modules,
    System,
    system_triggers,
    systems,
    Zone,
    zones,
} from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PlaceDebugService } from '../../app/common/debug.service';
import { ActiveItemService } from '../../app/common/item.service';
import { notifyError } from '../../app/common/notifications';
import { newItem } from '../../app/common/placeos';
import { openConfirmModal } from '../../app/overlays/confirm-modal.component';
import { SystemStateService } from '../../app/systems/system-state.service';

const mocks = vi.hoisted(() => ({
    isSubsystemUser: vi.fn(),
}));
vi.mock('@placeos/ts-client', { spy: true });

/** Module list page for `modules.query` */
const modulePage = (ids: string[]) =>
    mockPage({
        data: ids.map((id) => newItem(Module, { id, running: false })),
    });
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
    const system = newItem(System, {
        id: 'sys-1',
        modules: ['mod-1'],
        zones: ['zone-1'],
    });
    const active = signal<System | null>(null);
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
        vi.mocked(metadata.show).mockResolvedValue(mockReply({}));
        vi.mocked(system_triggers.query).mockResolvedValue(
            mockPage({ data: [], total: 3 }),
        );
        vi.mocked(systems.sysZones).mockResolvedValue(mockPage({ data: [] }));
        vi.mocked(modules.query).mockResolvedValue(modulePage(['mod-1']));
        vi.mocked(modules.start).mockResolvedValue(mockReply(''));
        vi.mocked(systems.settings).mockResolvedValue(mockReply([]));
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                SystemStateService,
                {
                    provide: ActiveItemService,
                    useValue: {
                        item: active,
                        activeOf: () => active(),
                        active_item: system,
                    },
                },
                { provide: PlaceDebugService, useValue: {} },
                { provide: Dialog, useValue: { open: vi.fn() } },
                { provide: Router, useValue: router },
            ],
        });
        service = TestBed.inject(SystemStateService);
    });

    it('debugs a shared module through the open system', () => {
        const debug = TestBed.inject(PlaceDebugService);
        const bind = vi.fn();
        Object.assign(debug, { isListening: () => false, bind });
        // A shared module has no `control_system_id`
        const shared = newItem(Module, { id: 'mod-shared', name: 'Display' });

        service.toggleModuleDebug(shared);

        expect(bind).toHaveBeenCalledWith(shared, 'Display_1', 'sys-1');
    });

    it('loads tab lists only once their tab is opened', async () => {
        service.counts();
        service.modules();
        service.zones();
        active.set(system);
        await stable();

        expect(modules.query).not.toHaveBeenCalled();
        expect(systems.sysZones).not.toHaveBeenCalled();
        expect(system_triggers.query).toHaveBeenCalledWith({
            sys_id: 'sys-1',
            limit: 1,
        });
        expect(service.counts().triggers).toBe(3);

        openTab('modules');
        await stable();

        expect(modules.query).toHaveBeenCalledTimes(1);
        expect(moduleIds()).toEqual(['mod-1']);
    });

    it('orders modules by the system module list', async () => {
        vi.mocked(modules.query).mockResolvedValue(
            modulePage(['mod-3', 'mod-1', 'mod-2']),
        );
        openTab('modules');
        service.modules();
        active.set(
            newItem(System, {
                id: 'sys-1',
                modules: ['mod-1', 'mod-2', 'mod-3'],
            }),
        );
        await stable();

        expect(moduleIds()).toEqual(['mod-1', 'mod-2', 'mod-3']);
    });

    it('ignores a module response for a system that is no longer active', async () => {
        let resolve_old: (ids: string[]) => void;
        vi.mocked(modules.query)
            .mockReturnValueOnce(
                new Promise(
                    (resolve) =>
                        (resolve_old = (ids) => resolve(modulePage(ids))),
                ),
            )
            .mockResolvedValueOnce(modulePage(['mod-2']));
        openTab('modules');
        service.modules();
        active.set(system);
        TestBed.tick();
        active.set(newItem(System, { id: 'sys-2', modules: ['mod-2'] }));
        await stable();
        resolve_old(['mod-1']);
        await flush();

        expect(modules.query).toHaveBeenCalledTimes(2);
        expect(moduleIds()).toEqual(['mod-2']);
    });

    it('keeps known connection state when the module list refreshes', async () => {
        openTab('modules');
        service.modules();
        active.set(system);
        await stable();
        const loaded = service.modules()[0] as Module & {
            connected?: boolean;
        };
        // Bindings set this, and only emit again when it changes
        loaded.connected = true;
        vi.mocked(modules.query).mockResolvedValue(modulePage(['mod-1']));

        await service.toggleModulePower(loaded);
        await stable();

        expect(service.modules()[0]).not.toBe(loaded);
        expect(service.modules()[0].connected).toBe(true);
    });

    it('shows the readable zones when a subsystem user cannot read one', async () => {
        mocks.isSubsystemUser.mockReturnValue(true);
        vi.mocked(zones.show).mockImplementation(async ({ id }) =>
            id === 'zone-2'
                ? {
                      ok: false,
                      error: {
                          kind: 'http',
                          status: 403,
                          message: null,
                          body: null,
                          text: null,
                      },
                  }
                : mockReply(newItem(Zone, { id })),
        );
        openTab('zones');
        service.zones();
        active.set(
            newItem(System, {
                id: 'sys-1',
                zones: ['zone-1', 'zone-2', 'zone-3'],
            }),
        );
        await stable();

        expect(service.zones().map(({ id }) => id)).toEqual([
            'zone-1',
            'zone-3',
        ]);
        expect(systems.sysZones).not.toHaveBeenCalled();
    });

    it('does not stop the system when the user cancels', async () => {
        vi.mocked(openConfirmModal).mockResolvedValue({
            loading: vi.fn(),
            close: vi.fn(),
        });

        await service.stopSystem();

        expect(systems.stop).not.toHaveBeenCalled();
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

        expect(modules.query).toHaveBeenCalledTimes(1);
        expect(system_triggers.query).not.toHaveBeenCalled();
        expect(systems.settings).not.toHaveBeenCalled();
        expect(metadata.show).not.toHaveBeenCalled();
    });

    it('keeps the running state and module list when a power change fails', async () => {
        openTab('modules');
        service.modules();
        active.set(system);
        await stable();
        vi.clearAllMocks();
        vi.mocked(modules.start).mockResolvedValue({
            ok: false,
            error: {
                kind: 'http',
                status: 500,
                message: 'Module offline',
                body: { error: 'Module offline' },
                text: null,
            },
        });
        const [device] = service.modules();

        await service.toggleModulePower(device);
        await stable();

        expect(device.running).toBe(false);
        expect(notifyError).toHaveBeenCalledWith('Module offline');
        expect(modules.query).not.toHaveBeenCalled();
    });
});
