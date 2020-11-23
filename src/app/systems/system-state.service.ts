import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addSystemModule,
    listSystemTriggers,
    listSystemZones,
    PlaceModule,
    PlaceSystem,
    queryModules,
    recompileDriver,
    removeSystemModule,
    showMetadata,
    startModule,
    startSystem,
    stopModule,
    stopSystem,
    systemSettings,
    updateSystem,
} from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { filter, first, map, shareReplay, switchMap } from 'rxjs/operators';
import { calculateModuleIndex } from '../common/api';
import { PlaceDebugService } from '../common/debug.service';

import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from '../overlays/confirm-modal/confirm-modal.component';
import { ViewResponseModalComponent } from '../overlays/view-response-modal/view-response-modal.component';

@Injectable({
    providedIn: 'root',
})
export class SystemStateService {
    private _loading = new BehaviorSubject<'settings' | 'modules' | 'zones' | 'triggers' | null>(
        null
    );
    private _modules = new BehaviorSubject<PlaceModule[]>([]);
    /** Observable of the counts of the active item */
    public counts = this._state.item.pipe(
        filter((item) => !!item && item instanceof PlaceSystem),
        switchMap(async (item: PlaceSystem) => {
            const details = await Promise.all([
                listSystemTriggers(item.id)
                    .pipe(map((d) => d.total))
                    .toPromise(),
                showMetadata(item.id).toPromise(),
            ]);
            const [triggers, metadata] = details;
            return {
                devices: item.modules.length,
                zones: item.zones.length,
                triggers,
                metadata: metadata.length,
            };
        }),
        shareReplay()
    );
    /** Observable for associated settings of the active item */
    public readonly associated_settings = this._state.item.pipe(
        filter((item) => !!item && item instanceof PlaceSystem),
        switchMap((item) => systemSettings(item.id)),
        shareReplay()
    );
    /** Observable for modules associated with system */
    public readonly modules = this._state.item.pipe(
        filter((item) => !!item && item instanceof PlaceSystem),
        switchMap(async (item: PlaceSystem) => {
            this._loading.next('modules');
            const modules = await queryModules({
                control_system_id: item.id,
                complete: true,
                limit: 200,
            } as any)
                .pipe(map((i) => i.data))
                .toPromise();
            console.log('Modules:', modules);
            this._loading.next(null);
            this._modules.next(modules);
            return modules;
        }),
        shareReplay()
    );
    /** Observable for debug state of the active modules */
    public readonly debug_state = this.modules.pipe(
        map((modules) => {
            return modules.reduce((mapping, device) => {
                mapping[device.id] = this._debug.isListening(device);
                return mapping;
            }, {});
        })
    );
    /** Observable for module bindings */
    public readonly module_bindings = this.modules.pipe(
        map((modules) =>
            modules.map(
                (mod) =>
                    `${mod.custom_name || mod.name || 'Blank'}_${calculateModuleIndex(
                        modules,
                        mod
                    )}`
            )
        )
    );
    /** Observable for zones associated with system */
    public readonly zones = this._state.item.pipe(
        filter((item) => !!item && item instanceof PlaceSystem),
        switchMap(async (item: PlaceSystem) => {
            this._loading.next('zones');
            const zones = await listSystemZones(item.id)
                .pipe(map((i) => i.data))
                .toPromise();
            this._loading.next(null);
            return zones;
        }),
        shareReplay()
    );
    /** Observable for triggers associated with system */
    public readonly triggers = this._state.item.pipe(
        filter((item) => !!item && item instanceof PlaceSystem),
        switchMap(async (item: PlaceSystem) => {
            this._loading.next('triggers');
            const triggers = await listSystemTriggers(item.id)
                .pipe(map((i) => i.data))
                .toPromise();
            this._loading.next(null);
            return triggers;
        }),
        shareReplay()
    );
    /** Observable of the active item */
    public readonly item = this._state.item;
    /** Observable of the active item */
    public readonly loading = this._loading.asObservable();

    public readonly getModules = () => this._modules.getValue();
    /** Observable of the active item */
    public get active_item(): PlaceSystem {
        return this._state.active_item as any;
    }

    constructor(
        private _state: ActiveItemService,
        private _debug: PlaceDebugService,
        private _dialog: MatDialog
    ) {}

    /**
     * Open confirmation modal for stopping the active system
     */
    public async startSystem() {
        const details = await this.confirm({
            title: 'Start system?',
            content: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
            icon: { type: 'icon', class: 'backoffice-controller-play' },
        });
        if (details && details.reason) {
            details.loading('Starting system...');
            const resp = await startSystem(this.active_item.id)
                .toPromise()
                .catch((err) => {
                    notifyError(
                        `Failed to start system: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    );
                    return err;
                });
            if (!resp) notifySuccess(`Successfully started system`);
            details.close();
        }
    }

    /**
     * Open confirmation modal for stopping the active system
     */
    public async stopSystem() {
        const details = await this.confirm({
            title: 'Stop system?',
            content: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
            icon: { type: 'icon', class: 'backoffice-controller-stop' },
        });
        if (!details || !details.reason) return;
        details.loading('Stopping system...');
        const resp = await stopSystem(this.active_item.id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Failed to stop system: ${JSON.stringify(err.response || err.message || err)}`
                );
                return err;
            });
        if (!resp) notifySuccess(`Successfully stopped system`);
        details.close();
    }

    public toggleModuleDebug(device: PlaceModule) {
        if (!device) return;
        if (this._debug.isListening(device)) {
            this._debug.unbind(device);
        } else {
            this._debug.bind(device, `${device.custom_name || device.name || 'Blank'}_${calculateModuleIndex(
                this._modules.getValue(),
                device
            )}`);
        }
    }

    public async newModule() {
        const module = await this._state.create(new PlaceModule()).catch((_) => null);
        if (!module) return;
        this.joinModule(module.id);
    }

    public editModule(device: PlaceModule) {
        this._state.edit(device).catch((_) => null);
    }

    public async reorderModules(fst: number, snd: number) {
        const details = await this.confirm({
            title: 'Change order?',
            content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
            icon: { type: 'icon', class: 'backoffice-layers' },
        });
        if (!details || !details.reason) return;
        details.loading('Updating module order...');
        const list: string[] = [...this.active_item.modules];
        moveItemInArray(list, fst, snd);
        const resp = await updateSystem(this.active_item.id, { ...this.active_item, modules: list })
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Failed to reorder system modules: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
                return err;
            });
        if (!resp) notifySuccess(`Successfully reordered system modules.`);
        details.close();
    }

    /**
     * Associate module with the active system
     * @param id ID of the module to associate with the active system
     */
    public async joinModule(id: string) {
        const system = await addSystemModule(this.active_item.id, id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error adding module ${id} to system. Error: ${
                        err.statusText || err.message || err
                    }`
                );
            });
        if (!system) return;
        this._state.replaceItem(system);
        notifySuccess(`Successfully added module to system.`);
    }

    /**
     * Remove associated module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    public async removeModule(device: PlaceModule) {
        const details = await this.confirm({
            title: 'Remove module?',
            content: `Remove ${device.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
            icon: { type: 'icon', class: 'backoffice-trash' },
        });
        if (!details || !details.reason) return;
        const system = await removeSystemModule(this.active_item.id, device.id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error removing module ${device.id} from system. Error: ${
                        err.statusText || err.message || err
                    }`
                );
            });
        if (!system) return;
        this._state.replaceItem(system);
        notifySuccess(`Successfully removed module from system.`);
    }

    /**
     * Reload module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    public async reloadModule(device: PlaceModule) {
        const details = await this.confirm({
            title: 'Recompile module?',
            content: `New driver code will be loaded and the device settings will be reloaded.`,
            icon: { type: 'icon', class: 'backoffice-install' },
        });
        if (!details || !details.reason) return;
        details.loading('Recompiling and reloading driver...');
        await recompileDriver(device.driver?.id || device.driver_id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error removing module ${device.id} from system. Error: ${
                        err.statusText || err.message || err
                    }`
                );
                throw err;
            });
        notifySuccess(`Successfully removed module from system.`);
        details.close();
    }

    /**
     * Toggle the power state
     * @param device Module to toggle the power state
     */
    public async toggleModulePower(device: PlaceModule) {
        const method = device.running ? stopModule : startModule;
        await method(device.id)
            .toPromise()
            .catch((err) => {
                if (typeof err === 'string' && err.length < 64) {
                    notifyError(err);
                } else {
                    notifyError(
                        `Failed to ${device.running ? 'stop' : 'start'} module '${
                            device.id
                        }'.\nView Error?`,
                        'View',
                        () => this.viewDetails(err)
                    );
                }
                throw err;
            });
        notifySuccess(`Module successfully ${device.running ? 'stopped' : 'started'}`);
        (device as any).running = !device.running;
    }

    /** View Results of the execute */
    private viewDetails(content: any) {
        this._dialog.open<ViewResponseModalComponent>(ViewResponseModalComponent, {
            data: { content },
        });
    }

    private async confirm(data: ConfirmModalData) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data,
            }
        );
        return {
            ...(await Promise.race([
                ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).toPromise(),
                ref.afterClosed().toPromise(),
            ])),
            loading: (s) => (ref.componentInstance.loading = s),
            close: () => ref.close(),
        };
    }
}
