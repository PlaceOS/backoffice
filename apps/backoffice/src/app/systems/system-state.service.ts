import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addSystemModule,
    addSystemTrigger,
    apiEndpoint,
    listSystemTriggers,
    listSystemZones,
    PlaceModule,
    PlaceSystem,
    PlaceTrigger,
    PlaceZone,
    put,
    queryModules,
    queryTriggers,
    recompileDriver,
    removeSystemModule,
    removeSystemTrigger,
    startModule,
    startSystem,
    stopModule,
    stopSystem,
    systemSettings,
    updateSystem,
    updateTrigger,
    listMetadata,
    showSystem,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
    debounceTime,
    first,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { calculateModuleIndex } from '../common/api';
import { AsyncHandler } from '../common/base.class';
import { PlaceDebugService } from '../common/debug.service';
import { openConfirmModal, unique } from '../common/general';

import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';
import { ConfirmModalData } from '../overlays/confirm-modal.component';
import { ItemCreateUpdateModalComponent } from '../overlays/item-modal/item-modal.component';
import {
    SelectItemModalComponent,
    SelectItemModalData,
} from '../overlays/select-item-modal/select-item-modal.component';
import { ViewResponseModalComponent } from '../overlays/view-response-modal/view-response-modal.component';

@Injectable({
    providedIn: 'root',
})
export class SystemStateService extends AsyncHandler {
    /** Observable of the active item */
    public readonly item = this._state.item;

    private _loading = new BehaviorSubject<HashMap<boolean>>({});
    private _modules = new BehaviorSubject<PlaceModule[]>([]);
    private _change = new BehaviorSubject<number>(0);
    /** Observable for associated settings of the active item */
    public readonly associated_settings = this._state.active_item$.pipe(
        debounceTime(300),
        switchMap((item: PlaceSystem) => {
            if (!item || !(item instanceof PlaceSystem)) return [];
            return systemSettings(item.id);
        })
    );
    /** Observable of the counts of the active item */
    public readonly counts = combineLatest([
        this._state.active_item$,
        this._change,
    ]).pipe(
        debounceTime(300),
        switchMap(async (_) => {
            const [item] = _;
            if (!item || !(item instanceof PlaceSystem)) return {};
            this._loading.next({
                ...this._loading.getValue(),
                settings: true,
            });
            const details = await Promise.all([
                listSystemTriggers(item.id)
                    .pipe(map((d) => d.total))
                    .toPromise()
                    .catch((_) => 0),
                listMetadata(item.id)
                    .pipe(map((d) => d.length))
                    .toPromise()
                    .catch((_) => 0),
            ]);
            const [triggers, metadata] = details;
            this._loading.next({
                ...this._loading.getValue(),
                settings: false,
            });
            return {
                devices: (item as any).modules.length,
                zones: (item as any).zones.length,
                triggers,
                metadata,
            };
        })
    );
    /** Observable for modules associated with system */
    public readonly modules = combineLatest([this.item, this._change]).pipe(
        debounceTime(500),
        switchMap(async ([item]) => {
            if (!item || !(item instanceof PlaceSystem)) return [];
            this._loading.next({
                ...this._loading.getValue(),
                modules: true,
            });
            const modules = await queryModules({
                control_system_id: item.id,
                complete: true,
                limit: 200,
            } as any)
                .pipe(map((i) => i.data))
                .toPromise();
            modules.forEach((_) => ((_ as any).connected = undefined));
            this._loading.next({
                ...this._loading.getValue(),
                modules: false,
            });
            modules.sort((a, b) => {
                const index_a =
                    item.modules.indexOf(a.id) > -1
                        ? item.modules.indexOf(a.id)
                        : 9999;
                const index_b =
                    item.modules.indexOf(b.id) > -1
                        ? item.modules.indexOf(b.id)
                        : 9999;
                return index_a - index_b;
            });
            this._modules.next(modules);
            return modules;
        }),
        shareReplay(1)
    );
    /** Observable for debug state of the active modules */
    public readonly debug_state = combineLatest([
        this.modules,
        this._debug.changed,
    ]).pipe(
        map(([modules]) => {
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
                    `${
                        mod.custom_name || mod.name || 'Blank'
                    }_${calculateModuleIndex(modules, mod)}`
            )
        ),
        shareReplay()
    );
    /** Observable for zones associated with system */
    public readonly zones = this._state.item.pipe(
        switchMap(async (item: PlaceSystem) => {
            if (!item || !(item instanceof PlaceSystem)) return [];
            this._loading.next({
                ...this._loading.getValue(),
                zones: true,
            });
            const zones = await listSystemZones(item.id)
                .pipe(map((i) => i.data))
                .toPromise();
            zones.sort(
                (a, b) => item.zones.indexOf(a.id) - item.zones.indexOf(b.id)
            );
            this._loading.next({
                ...this._loading.getValue(),
                zones: false,
            });
            return zones;
        }),
        shareReplay()
    );
    /** Observable for triggers associated with system */
    public readonly triggers = combineLatest([this.item, this._change]).pipe(
        switchMap(async (_) => {
            const [item] = _;
            if (!item || !(item instanceof PlaceSystem)) return [];
            this._loading.next({
                ...this._loading.getValue(),
                triggers: true,
            });
            const triggers = await listSystemTriggers(item.id)
                .pipe(map((i) => i.data))
                .toPromise();
            this._loading.next({
                ...this._loading.getValue(),
                triggers: false,
            });
            return triggers;
        }),
        shareReplay()
    );
    /** Observable of the active item */
    public readonly loading = this._loading.asObservable();

    public readonly getModules = () => this._modules.getValue();
    /** Observable of the active item */
    public get active_item(): PlaceSystem {
        return this._state.active_item || ({} as any);
    }

    constructor(
        private _state: ActiveItemService,
        private _debug: PlaceDebugService,
        private _dialog: MatDialog
    ) {
        super();
    }

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
                    `Failed to stop system: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
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
            this._debug.bind(
                device,
                `${
                    device.custom_name || device.name || 'Blank'
                }_${calculateModuleIndex(this._modules.getValue(), device)}`
            );
        }
    }

    public async newModule() {
        const mod = await this._state
            .edit(
                new PlaceModule({
                    system: this.active_item,
                    control_system_id: this.active_item.id,
                })
            )
            .catch((_) => null);
        if (!mod) return;
        this.joinModule(mod.id);
    }

    public async editModule(device: PlaceModule) {
        await this._state.edit(device).catch((_) => null);
        this._change.next(Date.now());
    }

    public async selectTrigger() {
        const ref = this._dialog.open<
            SelectItemModalComponent,
            SelectItemModalData
        >(SelectItemModalComponent, {
            data: {
                service_name: 'Triggers',
                query_fn: (_) =>
                    queryTriggers({ q: _ }).pipe(map((resp) => resp.data)),
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'action'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (!details || !details.reason) return ref.close();
        const t = await this.addTrigger(ref.componentInstance.item);
        ref.close();
        this._change.next(Date.now());
        return t;
    }

    public async addTrigger(trigger: PlaceTrigger) {
        const t = await addSystemTrigger(this.active_item.id, {
            control_system_id: this.active_item.id,
            enabled: true,
            important: false,
            trigger_id: trigger.id,
        } as any).toPromise();
        this.timeout('change', () => this._change.next(Date.now()));
        return t;
    }

    public async editTrigger(trigger: PlaceTrigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: trigger,
                    name: 'Trigger',
                    save: (item) => updateTrigger(item.id, item),
                    external_save: true,
                },
            });
            const details = await Promise.race([
                ref.componentInstance.event
                    .pipe(first((_) => _.reason === 'action'))
                    .toPromise(),
                ref.afterClosed().toPromise(),
            ]);
            if (!details || !details.reason) return;
            ref.componentInstance.loading = 'Saving trigger settings...';

            const url = `${apiEndpoint()}/systems/${
                this.active_item.id
            }/triggers/${trigger.id}`;
            const trig = await put(url, details.metadata)
                .toPromise()
                .catch((err) => {
                    notifyError(
                        `Error updating trigger settings. Error: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    );
                    throw err;
                });
            ref.close();
            if (!trig) return trigger;
            notifySuccess(`Successfully updated trigger settings.`);
            this.timeout('change', () => this._change.next(Date.now()));
            return trig;
        }
    }

    public async removeTrigger(trigger: PlaceTrigger) {
        const details = await this.confirm({
            title: `Remove trigger`,
            content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
            icon: { type: 'icon', class: 'backoffice-trash' },
        });
        if (!details || !details.reason) return;
        await removeSystemTrigger(this.active_item.id, trigger.id)
            .toPromise()
            .catch((err) => {
                details.close();
                notifyError(
                    `Error removing trigger ${trigger.id} from system. Error: ${
                        err.statusText || err.message || err
                    }`
                );
                throw err;
            });
        details.close();
        notifySuccess(`Successfully removed trigger from system.`);
        this._change.next(Date.now());
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
        const resp = await updateSystem(this.active_item.id, {
            ...this.active_item,
            modules: list,
        })
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Failed to reorder system modules: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
                return err;
            });
        details.close();
        if (resp instanceof PlaceSystem) {
            notifySuccess(`Successfully reordered system modules.`);
            this._state.replaceItem(resp);
        }
    }

    public async reorderZones(order: string[]) {
        if (order.length !== this.active_item.zones.length) return;
        const details = await this.confirm({
            title: 'Change order?',
            content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
            icon: { type: 'icon', class: 'backoffice-layers' },
        });
        if (!details || !details.reason) return;
        details.loading('Updating zone order...');
        const resp = await updateSystem(this.active_item.id, {
            ...this.active_item,
            zones: order,
        })
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Failed to reorder system zones: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
                return err;
            });
        if (resp instanceof PlaceSystem) {
            notifySuccess(`Successfully reordered system zones.`);
            this._state.replaceItem(resp);
        }
        details.close();
    }

    /**
     * Associate module with the active system
     * @param id ID of the module to associate with the active system
     */
    public async joinModule(id: string) {
        await addSystemModule(this.active_item.id, id)
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error adding module ${id} to system. Error: ${
                        err.statusText || err.message || err
                    }`
                );
            });
        this.timeout('join', async () => {
            const system = await showSystem(this.active_item.id).toPromise();
            if (!system) return;
            this._state.replaceItem(system);
            notifySuccess(`Successfully added module to system.`);
            this._change.next(Date.now());
        });
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
        details.close();
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
     * Add list of zones to the system
     * @param zones List of zones to add
     */
    public async addZones(zone_list: PlaceZone[]) {
        const zones = unique([
            ...this.active_item.zones,
            ...zone_list.map((_) => _.id),
        ]);
        const system = await updateSystem(this.active_item.id, {
            ...this.active_item,
            zones,
        })
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error adding ${
                        zone_list.length
                    } zone(s) to system. Error: ${
                        err.statusText || err.message || err
                    }`
                );
            });
        if (!system) return;
        this._state.replaceItem(system);
        notifySuccess(`Successfully added zone to system.`);
    }

    /**
     * Remove associated module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    public async removeZone(zone: PlaceZone) {
        const details = await this.confirm({
            title: 'Remove zone?',
            content: `<p>Are you sure you want remove zone "${zone.name}" from the system?</p>Configuration will be updated immediately.`,
            icon: { type: 'icon', class: 'backoffice-trash' },
        });
        if (!details || !details.reason) return;
        const zones = this.active_item.zones.filter((z) => z !== zone.id);
        const system = await updateSystem(this.active_item.id, {
            ...this.active_item,
            zones,
        })
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error removing zone ${zone.id} from system. Error: ${
                        err.statusText || err.message || err
                    }`
                );
            });
        details.close();
        if (!system) return;
        this._state.replaceItem(system);
        notifySuccess(`Successfully removed zone from system.`);
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
                        `Failed to ${
                            device.running ? 'stop' : 'start'
                        } module '${device.id}'.\nView Error?`,
                        'View',
                        () => this.viewDetails(err)
                    );
                }
                throw err;
            });
        notifySuccess(
            `Module successfully ${device.running ? 'stopped' : 'started'}`
        );
        (device as any).running = !device.running;
    }

    /** View Results of the execute */
    private viewDetails(content: any) {
        this._dialog.open<ViewResponseModalComponent>(
            ViewResponseModalComponent,
            {
                data: { content },
            }
        );
    }

    private async confirm(data: ConfirmModalData) {
        return openConfirmModal(data, this._dialog);
    }
}
