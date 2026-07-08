import { moveItemInArray } from '@angular/cdk/drag-drop';
import { computed, inject, resource, Service, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addSystemModule,
    addSystemTrigger,
    apiEndpoint,
    listMetadata,
    listSystemTriggers,
    listSystemZones,
    PlaceModule,
    PlaceSystem,
    PlaceTrigger,
    PlaceZone,
    put,
    queryModules,
    querySystems,
    queryTriggers,
    removeSystemModule,
    removeSystemTrigger,
    showSystem,
    startModule,
    startSystem,
    stopModule,
    stopSystem,
    systemSettings,
    updateSystem,
    updateTrigger,
} from '@placeos/ts-client';
import { calculateModuleIndex } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { unique } from '../common/general';

import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { waitForEvent } from '../common/signals';
import {
    DialogEvent,
    FormModalComponent,
    HashMap,
    Identity,
} from '../common/types';
import {
    ConfirmModalData,
    openConfirmModal,
} from '../overlays/confirm-modal.component';
import {
    SelectItemModalComponent,
    SelectItemModalData,
} from '../overlays/select-item-modal.component';
import { ViewResponseModalComponent } from '../overlays/view-response-modal.component';
import { SystemTriggerFormComponent } from './system-trigger-form.component';

@Service()
export class SystemStateService extends AsyncHandler {
    private _state = inject(ActiveItemService);
    private _debug = inject(PlaceDebugService);
    private _dialog = inject(MatDialog);

    /** Signal of the active item */
    public readonly item = computed(
        () => this._state.item() as unknown as PlaceSystem,
    );

    private _loading = signal<HashMap<boolean>>({});
    private _modules = signal<PlaceModule[]>([]);
    private _last_module_system = '';
    private _change = signal(0);

    private readonly _associated_settings = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceSystem)) return [];
            return systemSettings(item.id).catch(() => []);
        },
    });
    /** Signal for associated settings of the active item */
    public readonly associated_settings = computed(
        () => this._associated_settings.value() || [],
    );

    private readonly _counts = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceSystem)) return {};
            this.setLoading('settings', true);
            try {
                const [triggers, metadata] = await Promise.all([
                    listSystemTriggers(item.id)
                        .then((response) => response.total)
                        .catch(() => 0),
                    listMetadata(item.id)
                        .then((response) => response.length)
                        .catch(() => 0),
                ]);
                return {
                    devices: item.modules.length,
                    zones: item.zones.length,
                    triggers,
                    metadata,
                };
            } finally {
                this.setLoading('settings', false);
            }
        },
    });
    /** Signal of the counts of the active item */
    public readonly counts = computed<{
        devices?: number;
        zones?: number;
        triggers?: number;
        metadata?: number;
    }>(
        () =>
            this._counts.value() || {
                devices: 0,
                zones: 0,
                triggers: 0,
                metadata: 0,
            },
    );

    private readonly _module_resource = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceSystem)) {
                this._last_module_system = '';
                this._modules.set([]);
                return [] as PlaceModule[];
            }
            // ponytail: only clear when switching systems so refreshes keep the old list visible
            if (item.id !== this._last_module_system) this._modules.set([]);
            this._last_module_system = item.id;
            this.setLoading('modules', true);
            try {
                const response = await queryModules({
                    control_system_id: item.id,
                    complete: true,
                    limit: 200,
                } as Record<string, unknown>).catch(() => ({ data: [] }));
                const modules = [...response.data];
                modules.forEach(
                    (_) =>
                        ((
                            _ as PlaceModule & { connected?: boolean }
                        ).connected = undefined),
                );
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
                this._modules.set(modules);
                return modules;
            } finally {
                this.setLoading('modules', false);
            }
        },
    });
    /** Signal for modules associated with system */
    public readonly modules = computed(() => {
        this._module_resource.value(); // keep resource live; _modules holds the last loaded list
        return this._modules();
    });

    /** Signal for debug state of the active modules */
    public readonly debug_state = computed(() => {
        this._debug.changed();
        return this.modules().reduce((mapping, device) => {
            mapping[device.id] = this._debug.isListening(device);
            return mapping;
        }, {});
    });

    /** Signal for module bindings */
    public readonly module_bindings = computed(() =>
        this.modules().map(
            (mod) =>
                `${
                    mod.custom_name || mod.name || 'Blank'
                }_${calculateModuleIndex(this.modules(), mod)}`,
        ),
    );

    private readonly _zones = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceSystem)) return [] as PlaceZone[];
            this.setLoading('zones', true);
            try {
                const response = await listSystemZones(item.id).catch(() => ({
                    data: [],
                }));
                const zones = [...response.data];
                zones.sort(
                    (a, b) =>
                        item.zones.indexOf(a.id) - item.zones.indexOf(b.id),
                );
                return zones;
            } finally {
                this.setLoading('zones', false);
            }
        },
    });
    /** Signal for zones associated with system */
    public readonly zones = computed(() => this._zones.value() || []);

    private readonly _triggers = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceSystem)) return [] as PlaceTrigger[];
            this.setLoading('triggers', true);
            try {
                const response = await listSystemTriggers(item.id).catch(
                    () => ({
                        data: [],
                    }),
                );
                return response.data;
            } finally {
                this.setLoading('triggers', false);
            }
        },
    });
    /** Signal for triggers associated with system */
    public readonly triggers = computed(() => this._triggers.value() || []);

    /** Signal of loading states */
    public readonly loading = this._loading.asReadonly();

    public readonly getModules = () => this._modules();
    /** Active system */
    public get active_item(): PlaceSystem {
        return (this._state.active_item || {}) as PlaceSystem;
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
        if (!details?.reason) return;
        details.loading('Starting system...');
        const error = await startSystem(this.active_item.id)
            .then(() => null)
            .catch((err) => {
                notifyError(
                    `Failed to start system: ${JSON.stringify(
                        err.response || err.message || err,
                    )}`,
                );
                return err;
            });
        if (!error) {
            notifySuccess(`Successfully started system`);
            this.timeout('change', () => this.changed());
        }
        details.close();
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
        if (!details?.reason) return;
        details.loading('Stopping system...');
        const error = await stopSystem(this.active_item.id)
            .then(() => null)
            .catch((err) => {
                notifyError(
                    `Failed to stop system: ${JSON.stringify(
                        err.response || err.message || err,
                    )}`,
                );
                return err;
            });
        if (!error) {
            notifySuccess(`Successfully stopped system`);
            this.timeout('change', () => this.changed());
        }
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
                }_${calculateModuleIndex(this._modules(), device)}`,
            );
        }
    }

    public async newModule() {
        const mod = await this._state
            .edit(
                new PlaceModule({
                    system: this.active_item,
                    control_system_id: this.active_item.id,
                }),
            )
            .catch((_err) => null);
        if (!mod) return;
        this.joinModule(mod.id);
    }

    public async editModule(device: PlaceModule) {
        await this._state.edit(device).catch((_err) => null);
        this.changed();
    }

    public async addModuleToSystem(device: PlaceModule) {
        if (device.control_system_id)
            return notifyError(
                'Logic modules cannot be added to another system',
            );
        const item = this.item();
        const ref = this._dialog.open<
            SelectItemModalComponent,
            SelectItemModalData
        >(SelectItemModalComponent, {
            data: {
                service_name: 'module to system',
                query_fn: (_) =>
                    querySystems({ q: _ }).then((resp) =>
                        resp.data.filter((_) => _.id !== item.id),
                    ),
            },
        });
        const details = await Promise.race([
            waitForEvent(
                ref.componentInstance.event,
                (_: DialogEvent) => _.reason === 'action',
            ),
            waitForEvent(ref.afterClosed()),
        ]);
        if (!details?.reason) return ref.close();
        const system = ref.componentInstance.item as PlaceSystem;
        if (!system) return ref.close();
        await addSystemModule(system.id, device.id).catch((_e) => {
            ref.close();
            notifyError(
                `Error adding module to system "${
                    (system as PlaceSystem & { display_name?: string })
                        .display_name || system.name
                }". Error: ${JSON.stringify(_e.response || _e.message || _e)}`,
            );
            throw _e;
        });
        this.changed();
        ref.close();
        notifySuccess(
            `Successfully added module to system "${
                (system as PlaceSystem & { display_name?: string })
                    .display_name || system.name
            }".`,
        );
    }

    public async selectTrigger() {
        const ref = this._dialog.open<
            SelectItemModalComponent,
            SelectItemModalData
        >(SelectItemModalComponent, {
            data: {
                service_name: 'Triggers',
                query_fn: (_) =>
                    queryTriggers({ q: _ }).then((resp) => resp.data),
            },
        });
        const details = await Promise.race([
            waitForEvent(
                ref.componentInstance.event,
                (_: DialogEvent) => _.reason === 'action',
            ),
            waitForEvent(ref.afterClosed()),
        ]);
        if (!details?.reason) return ref.close();
        const t = await this.addTrigger(
            ref.componentInstance.item as PlaceTrigger,
        );
        ref.close();
        this.changed();
        return t;
    }

    public async addTrigger(trigger: PlaceTrigger) {
        const t = await addSystemTrigger(this.active_item.id, {
            control_system_id: this.active_item.id,
            enabled: true,
            important: false,
            trigger_id: trigger.id,
        } as Record<string, unknown>);
        this.timeout('change', () => this.changed());
        return t;
    }

    public async editTrigger(trigger: PlaceTrigger) {
        if (this.item() && trigger) {
            const ref = this._dialog.open(SystemTriggerFormComponent, {
                data: {
                    item: trigger,
                    name: 'Trigger',
                    save: (item) => updateTrigger(item.id, item),
                    external_save: true,
                },
            });
            const instance =
                ref.componentInstance as unknown as FormModalComponent;
            const details = await Promise.race([
                waitForEvent(
                    instance.event,
                    (_: DialogEvent) => _.reason === 'action',
                ),
                waitForEvent(ref.afterClosed()),
            ]);
            if (!details?.reason) return;
            instance.loading = 'Saving trigger settings...';

            const url = `${apiEndpoint()}/systems/${
                this.active_item.id
            }/triggers/${trigger.id}`;
            const trig = await put(url, details.metadata).catch((err) => {
                notifyError(
                    `Error updating trigger settings. Error: ${JSON.stringify(
                        err.response || err.message || err,
                    )}`,
                );
                throw err;
            });
            ref.close();
            if (!trig) return trigger;
            notifySuccess(`Successfully updated trigger settings.`);
            this.timeout('change', () => this.changed());
            return trig;
        }
    }

    public async removeTrigger(trigger: PlaceTrigger) {
        const details = await this.confirm({
            title: `Remove trigger`,
            content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
            icon: { type: 'icon', content: 'delete' },
        });
        if (!details?.reason) return;
        await removeSystemTrigger(this.active_item.id, trigger.id).catch(
            (err) => {
                details.close();
                notifyError(
                    `Error removing trigger ${trigger.id} from system. Error: ${
                        err.statusText || err.message || err
                    }`,
                );
                throw err;
            },
        );
        details.close();
        notifySuccess(`Successfully removed trigger from system.`);
        this.changed();
    }

    public async reorderModules(fst: number, snd: number) {
        const details = await this.confirm({
            title: 'Change order?',
            content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
            icon: { type: 'icon', content: 'layers' },
        });
        if (!details?.reason) return;
        details.loading('Updating module order...');
        const list: string[] = [...this.active_item.modules];
        moveItemInArray(list, fst, snd);
        const resp = await updateSystem(this.active_item.id, {
            ...this.active_item,
            modules: list,
        }).catch((err) => {
            notifyError(
                `Failed to reorder system modules: ${JSON.stringify(
                    err.response || err.message || err,
                )}`,
            );
            return err;
        });
        details.close();
        if (resp instanceof PlaceSystem) {
            notifySuccess(`Successfully reordered system modules.`);
            if (resp) this._state.replaceItem(resp as unknown as Identity);
        }
    }

    public async sortModulesByType(alphabetical = false) {
        const modules = this._modules();
        if (modules.length < 2) return;

        const details = await this.confirm({
            title: 'Sort modules by class?',
            content: `Are you sure you want to sort modules by class?<br>Modules with the same class name will be grouped together.`,
            icon: { type: 'icon', content: 'sort' },
        });
        if (!details?.reason) return;
        details.loading('Sorting modules by class...');
        let sorted_modules = [];
        if (alphabetical) {
            sorted_modules = [...modules].sort((a, b) => {
                const class_a = (
                    a.custom_name ||
                    a.name ||
                    a.driver?.class_name ||
                    ''
                ).toLowerCase();
                const class_b = (
                    b.custom_name ||
                    b.name ||
                    b.driver?.class_name ||
                    ''
                ).toLowerCase();
                return class_a.localeCompare(class_b);
            });
        } else {
            const processed = new Set<PlaceModule>();
            for (const mod_a of modules) {
                if (processed.has(mod_a)) continue;
                const mod_class =
                    mod_a.custom_name ||
                    mod_a.name ||
                    mod_a.driver?.class_name ||
                    '';
                sorted_modules.push(mod_a);
                processed.add(mod_a);
                for (const mod_b of modules) {
                    if (processed.has(mod_b)) continue;
                    const mod_b_class =
                        mod_b.custom_name ||
                        mod_b.name ||
                        mod_b.driver?.class_name ||
                        '';
                    if (mod_class === mod_b_class) {
                        sorted_modules.push(mod_b);
                        processed.add(mod_b);
                    }
                }
            }
        }
        const sorted_ids = sorted_modules.map((m) => m.id);

        const resp = await updateSystem(this.active_item.id, {
            ...this.active_item,
            modules: sorted_ids,
        }).catch((err) => {
            notifyError(
                `Failed to sort system modules: ${JSON.stringify(
                    err.response || err.message || err,
                )}`,
            );
            return err;
        });
        details.close();
        if (resp instanceof PlaceSystem) {
            notifySuccess(`Successfully sorted system modules by class.`);
            if (resp) this._state.replaceItem(resp as unknown as Identity);
        }
    }

    public async reorderZones(order: string[]) {
        if (order.length !== this.active_item.zones.length) return;
        const details = await this.confirm({
            title: 'Change order?',
            content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
            icon: { type: 'icon', content: 'layers' },
        });
        if (!details?.reason) return;
        details.loading('Updating zone order...');
        const resp = await updateSystem(this.active_item.id, {
            ...this.active_item,
            zones: order,
        }).catch((err) => {
            notifyError(
                `Failed to reorder system zones: ${JSON.stringify(
                    err.response || err.message || err,
                )}`,
            );
            return err;
        });
        if (resp instanceof PlaceSystem) {
            notifySuccess(`Successfully reordered system zones.`);
            if (resp) this._state.replaceItem(resp as unknown as Identity);
        }
        details.close();
    }

    /**
     * Associate module with the active system
     * @param id ID of the module to associate with the active system
     */
    public async joinModule(id: string) {
        await addSystemModule(this.active_item.id, id).catch((err) => {
            notifyError(
                `Error adding module ${id} to system. Error: ${
                    err.statusText || err.message || err
                }`,
            );
        });
        this.timeout('join', async () => {
            const system = await showSystem(this.active_item.id);
            if (system) this._state.replaceItem(system as unknown as Identity);
            notifySuccess(`Successfully added module to system.`);
            this.changed();
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
            icon: { type: 'icon', content: 'delete' },
        });
        if (!details?.reason) return;
        const system = await removeSystemModule(
            this.active_item.id,
            device.id,
        ).catch((err) => {
            notifyError(
                `Error removing module ${device.id} from system. Error: ${
                    err.statusText || err.message || err
                }`,
            );
        });
        details.close();
        if (system) this._state.replaceItem(system as unknown as Identity);
        notifySuccess(`Successfully removed module from system.`);
    }

    /**
     * Add list of zones to the system
     * @param zones List of zones to add
     */
    public async addZones(zone_list: PlaceZone[]) {
        const zones = unique([
            ...this.active_item.zones,
            ...zone_list.map((_) => _.id),
        ]) as string[];
        const system = await updateSystem(this.active_item.id, {
            ...this.active_item,
            zones,
        }).catch((err) => {
            notifyError(
                `Error adding ${zone_list.length} zone(s) to system. Error: ${
                    err.statusText || err.message || err
                }`,
            );
        });
        if (system) this._state.replaceItem(system as unknown as Identity);
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
            icon: { type: 'icon', content: 'delete' },
        });
        if (!details?.reason) return;
        const zones = this.active_item.zones.filter((z) => z !== zone.id);
        const system = await updateSystem(this.active_item.id, {
            ...this.active_item,
            zones,
        }).catch((err) => {
            notifyError(
                `Error removing zone ${zone.id} from system. Error: ${
                    err.statusText || err.message || err
                }`,
            );
        });
        details.close();
        if (system) this._state.replaceItem(system as unknown as Identity);
        notifySuccess(`Successfully removed zone from system.`);
    }

    /**
     * Toggle the power state
     * @param device Module to toggle the power state
     */
    public async toggleModulePower(device: PlaceModule) {
        const method = device.running ? stopModule : startModule;
        await method(device.id).catch((err) => {
            if (typeof err === 'string' && err.length < 64) {
                notifyError(err);
            } else {
                notifyError(
                    `Failed to ${
                        device.running ? 'stop' : 'start'
                    } module '${device.id}'.\nView Error?`,
                    'View',
                    () => this.viewDetails(err),
                );
            }
            throw err;
        });
        notifySuccess(
            `Module successfully ${device.running ? 'stopped' : 'started'}`,
        );
        (device as PlaceModule & { running: boolean }).running =
            !device.running;
        this.changed();
    }

    /** View Results of the execute */
    private viewDetails(content: unknown) {
        this._dialog.open<ViewResponseModalComponent>(
            ViewResponseModalComponent,
            {
                data: { content },
            },
        );
    }

    private async confirm(data: ConfirmModalData) {
        return openConfirmModal(data, this._dialog);
    }

    private setLoading(key: string, value: boolean) {
        this._loading.update((state) => ({ ...state, [key]: value }));
    }

    private changed() {
        this._change.set(Date.now());
    }
}
