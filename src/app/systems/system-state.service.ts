import { computed, inject, resource, Service, signal } from '@angular/core';
import {
    Module,
    modules as modules_v7,
    System,
    system_triggers,
    systems,
    SystemTriggersUpdateParams,
    type Trigger,
    type TriggerInstance,
    triggers,
    type Zone,
    zones as zones_v7,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { calculateModuleIndex } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { escapeHtml, moveItemInArray, unique } from '../common/general';
import { openedTabs } from '../common/opened-tabs';
import { loadMetadataBlocks, newItem, toBody } from '../common/placeos';
import {
    isSubsystemUser,
    querySupportSystems as querySystems,
} from '../common/support-access';
import { shortModuleError } from '../modules/modules.utilities';

import { describeError, readError } from '../common/errors';
import { ActiveItem, ActiveItemService } from '../common/item.service';
import { reportLoadError } from '../common/load-error';
import { notifyError, notifySuccess } from '../common/notifications';
import { waitForDialog } from '../common/signals';
import { HashMap, Identity } from '../common/types';
// Modals load on demand to keep them out of the first page load
import { Dialog } from '@angular/cdk/dialog';
import type { ConfirmModalData } from '../overlays/confirm-modal.component';
import type {
    SelectItemModalComponent,
    SelectItemModalData,
} from '../overlays/select-item-modal.component';

/** Load the item picker modal */
async function selectItemModal() {
    const m = await import('../overlays/select-item-modal.component');
    return m.SelectItemModalComponent;
}

@Service()
export class SystemStateService extends AsyncHandler {
    private _state = inject(ActiveItemService);
    private _debug = inject(PlaceDebugService);
    private _dialog = inject(Dialog);

    /** Signal of the active item */
    public readonly item = computed(() => this._state.activeOf('systems'));

    /** Settings of each encryption level of the active system */
    public readonly settings = computed(() => this.item()?.settings);

    private _loading = signal<HashMap<boolean>>({});
    private _modules = signal<Module[]>([]);
    private _last_module_system = '';
    // Each list reloads only after an action that changes it
    private _settings_change = signal(0);
    private _modules_change = signal(0);
    private _triggers_change = signal(0);

    private readonly _system_id = computed(() => {
        return this.item()?.id || undefined;
    });
    // Tab lists load once their tab is opened. The item gives the module and
    // zone counts, and a single row query gives the trigger count.
    private readonly _opened_tabs = openedTabs(this._system_id);
    private readonly _load_modules = computed(() =>
        this._opened_tabs().has('modules'),
    );
    private readonly _load_zones = computed(() =>
        this._opened_tabs().has('zones'),
    );
    private readonly _load_triggers = computed(() =>
        this._opened_tabs().has('triggers'),
    );

    private readonly _associated_settings = resource({
        params: () => ({
            item: this.item(),
            changed: this._settings_change(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { item } = params;
            if (!item) return [];
            // The active item service already loaded the system's own settings
            const own_settings = this.settings() || [];
            return isSubsystemUser()
                ? own_settings.filter((setting) => !!setting?.id)
                : systems
                      .settings({ sys_id: item.id }, { signal: abortSignal })
                      .then(orThrow)
                      .catch(() => []);
        },
    });
    /** Signal for associated settings of the active item */
    public readonly associated_settings = computed(
        () => this._associated_settings.value() || [],
    );

    private readonly _counts = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!item) return {};
            this.setLoading('settings', true);
            try {
                // The metadata tab uses this load again
                const metadata_count = await loadMetadataBlocks(item.id)
                    .then((blocks) => blocks.length)
                    .catch(() => 0);
                return {
                    devices: item.modules.length,
                    zones: item.zones.length,
                    metadata: metadata_count,
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
    }>(() => ({
        ...(this._counts.value() || { devices: 0, zones: 0, metadata: 0 }),
        // Counted from the trigger list so it is only requested once
        triggers: this._triggers.value()?.total || 0,
    }));

    private readonly _module_resource = resource({
        params: () => ({
            item: this.item(),
            changed: this._modules_change(),
            load: this._load_modules(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { item, load } = params;
            if (!item || !load) {
                this._last_module_system = '';
                this._modules.set([]);
                return [] as Module[];
            }
            // ponytail: only clear when switching systems so refreshes keep the old list visible
            if (item.id !== this._last_module_system) this._modules.set([]);
            this._last_module_system = item.id;
            this.setLoading('modules', true);
            try {
                const response = await modules_v7
                    .query(
                        {
                            control_system_id: item.id,
                            limit: 200,
                        },
                        { signal: abortSignal },
                    )
                    .then(orThrowPage)
                    .catch(reportLoadError({ data: [] }));
                // A newer load or another system took over. Leave its state alone.
                if (abortSignal.aborted || this.item()?.id !== item.id) {
                    return [] as Module[];
                }
                // Keep known connection state across refreshes. Bindings only
                // emit on change, so a reset value would never be filled again.
                const known_state = new Map(
                    this._modules().map((mod) => [mod.id, mod.connected]),
                );
                const modules = [...response.data];
                modules.forEach(
                    (_) =>
                        ((_ as Module & { connected?: boolean }).connected =
                            known_state.get(_.id)),
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
                if (!abortSignal.aborted) this.setLoading('modules', false);
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
        params: () => ({ item: this.item(), load: this._load_zones() }),
        loader: async ({ params, abortSignal }) => {
            const { item, load } = params;
            if (!item || !load) return [] as Zone[];
            this.setLoading('zones', true);
            try {
                const response = isSubsystemUser()
                    ? {
                          // A zone the user cannot see must not hide the rest
                          data: (
                              await Promise.all(
                                  item.zones.map((id) =>
                                      zones_v7
                                          .show({ id }, { signal: abortSignal })
                                          .then(orThrow)
                                          .catch(() => null),
                                  ),
                              )
                          ).filter((zone) => !!zone),
                      }
                    : await systems
                          .sysZones(
                              { sys_id: item.id },
                              { signal: abortSignal },
                          )
                          .then(orThrowPage)
                          .catch(reportLoadError({ data: [] }));
                const zones = [...response.data];
                zones.sort(
                    (a, b) =>
                        item.zones.indexOf(a.id) - item.zones.indexOf(b.id),
                );
                return zones;
            } finally {
                if (!abortSignal.aborted) this.setLoading('zones', false);
            }
        },
    });
    /** Signal for zones associated with system */
    public readonly zones = computed(() => this._zones.value() || []);

    private readonly _triggers = resource({
        params: () => ({
            item: this.item(),
            changed: this._triggers_change(),
            full: this._load_triggers(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { item, full } = params;
            const empty = { data: [] as readonly TriggerInstance[], total: 0 };
            if (!item) return empty;
            this.setLoading('triggers', true);
            try {
                const response = await system_triggers
                    .query(
                        { sys_id: item.id, ...(full ? {} : { limit: 1 }) },
                        { signal: abortSignal },
                    )
                    .then(orThrowPage)
                    .catch(full ? reportLoadError(empty) : () => empty);
                return full ? response : { ...empty, total: response.total };
            } finally {
                if (!abortSignal.aborted) this.setLoading('triggers', false);
            }
        },
    });
    /** Signal for triggers associated with system */
    public readonly triggers = computed(
        () => this._triggers.value()?.data || [],
    );

    /** Signal of loading states */
    public readonly loading = this._loading.asReadonly();

    public readonly getModules = () => this._modules();
    /** Active system. An empty object when no system is active */
    public get active_item() {
        return this._state.activeOf('systems') || ({} as ActiveItem<'systems'>);
    }

    /** Save changes to the module or zone lists of the active system. Rejects on an error */
    private _saveSystem(changes: {
        modules?: readonly string[];
        zones?: readonly string[];
    }) {
        const item = this.active_item;
        return systems
            .update({
                sys_id: item.id,
                version: item.version,
                body: toBody(System, { ...item, ...changes }),
            })
            .then(orThrow);
    }

    /**
     * Open confirmation modal for stopping the active system
     */
    public async startSystem() {
        const details = await this.confirm({
            title: 'Start system?',
            content: `Start <strong>${escapeHtml(this.active_item.name)}</strong>?<br>All stopped modules within the system will boot up.`,
            icon: { type: 'icon', class: 'backoffice-controller-play' },
            confirm_text: 'Start system',
        });
        if (details.reason !== 'done') return;
        details.loading('Starting system...');
        const error = await systems
            .start({ sys_id: this.active_item.id })
            .then(orThrow)
            .then(() => null)
            .catch((err) => {
                notifyError(`Failed to start system: ${describeError(err)}`);
                return err;
            });
        if (!error) {
            notifySuccess(`Successfully started system`);
            this.timeout('change', () => this.modulesChanged());
        }
        details.close();
    }

    /**
     * Open confirmation modal for stopping the active system
     */
    public async stopSystem() {
        const details = await this.confirm({
            title: 'Stop system?',
            content: `Stop <strong>${escapeHtml(this.active_item.name)}</strong>?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
            icon: { type: 'icon', class: 'backoffice-controller-stop' },
            confirm_text: 'Stop system',
            destructive: true,
        });
        if (details.reason !== 'done') return;
        details.loading('Stopping system...');
        const error = await systems
            .stop({ sys_id: this.active_item.id })
            .then(orThrow)
            .then(() => null)
            .catch((err) => {
                notifyError(`Failed to stop system: ${describeError(err)}`);
                return err;
            });
        if (!error) {
            notifySuccess(`Successfully stopped system`);
            this.timeout('change', () => this.modulesChanged());
        }
        details.close();
    }

    public toggleModuleDebug(device: Module) {
        if (!device) return;
        if (this._debug.isListening(device)) {
            this._debug.unbind(device);
        } else {
            this._debug.bind(
                device,
                `${
                    device.custom_name || device.name || 'Blank'
                }_${calculateModuleIndex(this._modules(), device)}`,
                this.active_item.id,
            );
        }
    }

    public async newModule() {
        const mod = await this._state
            .edit(
                newItem(Module, {
                    control_system_id: this.active_item.id,
                    control_system: {
                        name: this.active_item.name,
                        zone_data: [],
                    },
                }),
                {},
                'modules',
            )
            .catch((_err) => null);
        if (!mod) return;
        this.joinModule(mod.id);
    }

    public async editModule(device: Module) {
        await this._state.edit(device, {}, 'modules').catch((_err) => null);
        // Module settings also show in the associated settings
        this.modulesChanged();
        this._settings_change.update((count) => count + 1);
    }

    public async addModuleToSystem(device: Module) {
        if (device.control_system_id)
            return notifyError(
                'Logic modules cannot be added to another system',
            );
        const item = this.item();
        const ref = this._dialog.open<
            unknown,
            SelectItemModalData,
            SelectItemModalComponent
        >(await selectItemModal(), {
            data: {
                service_name: 'module to system',
                query_fn: (_, signal) =>
                    querySystems({ q: _ }, { signal }).then((resp) =>
                        resp.data.filter((_) => _.id !== item.id),
                    ),
            },
        });
        const details = await waitForDialog(ref, 'action');
        if (details?.reason !== 'action') return ref.close();
        const system = ref.componentInstance.item as System;
        if (!system) return ref.close();
        await systems
            .addModule({ sys_id: system.id, module_id: device.id })
            .then(orThrow)
            .catch((_e) => {
                ref.close();
                notifyError(
                    `Error adding module to system "${
                        system.display_name || system.name
                    }". Error: ${describeError(_e)}`,
                );
                throw _e;
            });
        this.modulesChanged();
        ref.close();
        notifySuccess(
            `Successfully added module to system "${
                system.display_name || system.name
            }".`,
        );
    }

    public async selectTrigger() {
        const ref = this._dialog.open<
            unknown,
            SelectItemModalData,
            SelectItemModalComponent
        >(await selectItemModal(), {
            data: {
                service_name: 'Triggers',
                query_fn: (_, signal) =>
                    triggers
                        .query({ q: _ }, { signal })
                        .then(orThrowPage)
                        .then((resp) => [...resp.data]),
            },
        });
        const details = await waitForDialog(ref, 'action');
        if (details?.reason !== 'action') return ref.close();
        try {
            return await this.addTrigger(ref.componentInstance.item as Trigger);
        } catch (err) {
            notifyError(
                `Error adding trigger to system. Error: ${describeError(err)}`,
            );
        } finally {
            ref.close();
        }
    }

    public async addTrigger(trigger: Trigger) {
        const t = await system_triggers
            .create({
                sys_id: this.active_item.id,
                body: {
                    control_system_id: this.active_item.id,
                    enabled: true,
                    important: false,
                    trigger_id: trigger.id,
                },
            })
            .then(orThrow);
        this.timeout('change', () => this.triggersChanged());
        return t;
    }

    public async editTrigger(trigger: TriggerInstance) {
        if (this.item() && trigger) {
            const { SystemTriggerFormComponent } = await import(
                './system-trigger-form.component'
            );
            const ref = this._dialog.open(SystemTriggerFormComponent, {
                data: {
                    item: trigger,
                    name: 'Trigger',
                    external_save: true,
                },
            });
            const instance = ref.componentInstance;
            const details = await waitForDialog<object>(ref, 'action');
            if (details?.reason !== 'action') return;
            instance.loading.set('Saving trigger settings...');

            const trig = await system_triggers
                .update({
                    sys_id: this.active_item.id,
                    trig_id: trigger.id,
                    body: toBody(SystemTriggersUpdateParams, details.metadata),
                })
                .then(orThrow)
                .catch((err) => {
                    notifyError(
                        `Error updating trigger settings. Error: ${describeError(err)}`,
                    );
                    return null;
                });
            instance.loading.set('');
            ref.close();
            if (!trig) return trigger;
            notifySuccess(`Successfully updated trigger settings.`);
            this.timeout('change', () => this.triggersChanged());
            return trig;
        }
    }

    public async removeTrigger(trigger: TriggerInstance) {
        const details = await this.confirm({
            title: `Remove trigger`,
            content: `<p>Are you sure you want remove trigger "${escapeHtml(trigger.name)}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
            icon: { type: 'icon', content: 'delete' },
        });
        if (details.reason !== 'done') return;
        details.loading('Removing trigger...');
        try {
            await system_triggers
                .destroy({ sys_id: this.active_item.id, trig_id: trigger.id })
                .then(orThrow);
        } catch (err) {
            return notifyError(
                `Error removing trigger ${trigger.id} from system. Error: ${await readError(
                    err,
                )}`,
            );
        } finally {
            details.close();
        }
        notifySuccess(`Successfully removed trigger from system.`);
        this.triggersChanged();
    }

    public async reorderModules(fst: number, snd: number) {
        const details = await this.confirm({
            title: 'Change order?',
            content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
            icon: { type: 'icon', content: 'layers' },
        });
        if (details.reason !== 'done') return;
        details.loading('Updating module order...');
        const list: string[] = [...this.active_item.modules];
        moveItemInArray(list, fst, snd);
        const resp = await this._saveSystem({ modules: list }).catch((err) => {
            notifyError(
                `Failed to reorder system modules: ${describeError(err)}`,
            );
            return null;
        });
        details.close();
        if (resp) {
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
        if (details.reason !== 'done') return;
        details.loading('Sorting modules by class...');
        let sorted_modules = [];
        if (alphabetical) {
            sorted_modules = [...modules].sort((a, b) => {
                const class_a = (
                    a.custom_name ||
                    a.name ||
                    a.driver?.module_name ||
                    ''
                ).toLowerCase();
                const class_b = (
                    b.custom_name ||
                    b.name ||
                    b.driver?.module_name ||
                    ''
                ).toLowerCase();
                return class_a.localeCompare(class_b);
            });
        } else {
            const processed = new Set<Module>();
            for (const mod_a of modules) {
                if (processed.has(mod_a)) continue;
                const mod_class =
                    mod_a.custom_name ||
                    mod_a.name ||
                    mod_a.driver?.module_name ||
                    '';
                sorted_modules.push(mod_a);
                processed.add(mod_a);
                for (const mod_b of modules) {
                    if (processed.has(mod_b)) continue;
                    const mod_b_class =
                        mod_b.custom_name ||
                        mod_b.name ||
                        mod_b.driver?.module_name ||
                        '';
                    if (mod_class === mod_b_class) {
                        sorted_modules.push(mod_b);
                        processed.add(mod_b);
                    }
                }
            }
        }
        const sorted_ids = sorted_modules.map((m) => m.id);

        const resp = await this._saveSystem({ modules: sorted_ids }).catch(
            (err) => {
                notifyError(
                    `Failed to sort system modules: ${describeError(err)}`,
                );
                return null;
            },
        );
        details.close();
        if (resp) {
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
        if (details.reason !== 'done') return;
        details.loading('Updating zone order...');
        const resp = await this._saveSystem({ zones: order }).catch((err) => {
            notifyError(
                `Failed to reorder system zones: ${describeError(err)}`,
            );
            return null;
        });
        if (resp) {
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
        const added = await systems
            .addModule({ sys_id: this.active_item.id, module_id: id })
            .then(orThrow)
            .catch((err) => {
                notifyError(
                    `Error adding module ${id} to system. Error: ${describeError(
                        err,
                    )}`,
                );
                return null;
            });
        if (!added) return;
        this.timeout('join', async () => {
            const system = await systems
                .show({ sys_id: this.active_item.id })
                .then(orThrow);
            // A new item reloads everything, so only fall back to `changed`
            if (system) this._state.replaceItem(system as unknown as Identity);
            else this.changed();
            notifySuccess(`Successfully added module to system.`);
        });
    }

    /**
     * Remove associated module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    public async removeModule(device: Module) {
        const details = await this.confirm({
            title: 'Remove module?',
            content: `Remove ${device.custom_name || device.name || device.id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
            icon: { type: 'icon', content: 'delete' },
        });
        if (details.reason !== 'done') return;
        details.loading('Removing module...');
        const system = await systems
            .removeModule({ sys_id: this.active_item.id, module_id: device.id })
            .then(orThrow)
            .catch((err) => {
                notifyError(
                    `Error removing module ${device.id} from system. Error: ${describeError(
                        err,
                    )}`,
                );
            });
        details.close();
        if (!system) return;
        this._state.replaceItem(system as unknown as Identity);
        notifySuccess(`Successfully removed module from system.`);
    }

    /**
     * Add list of zones to the system
     * @param zones List of zones to add
     * @returns Whether the zones were added
     */
    public async addZones(zone_list: Zone[]) {
        const zones = unique([
            ...this.active_item.zones,
            ...zone_list.map((_) => _.id),
        ]) as string[];
        const system = await this._saveSystem({ zones }).catch((err) => {
            notifyError(
                `Error adding ${zone_list.length} zone(s) to system. Error: ${describeError(
                    err,
                )}`,
            );
        });
        if (!system) return false;
        this._state.replaceItem(system as unknown as Identity);
        notifySuccess(`Successfully added zone to system.`);
        return true;
    }

    /**
     * Remove associated module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    public async removeZone(zone: Zone) {
        const details = await this.confirm({
            title: 'Remove zone?',
            content: `<p>Are you sure you want remove zone "${escapeHtml(zone.name)}" from the system?</p>Configuration will be updated immediately.`,
            icon: { type: 'icon', content: 'delete' },
        });
        if (details.reason !== 'done') return;
        const zones = this.active_item.zones.filter((z) => z !== zone.id);
        const system = await this._saveSystem({ zones }).catch((err) => {
            notifyError(
                `Error removing zone ${zone.id} from system. Error: ${describeError(
                    err,
                )}`,
            );
        });
        details.close();
        if (!system) return;
        this._state.replaceItem(system as unknown as Identity);
        notifySuccess(`Successfully removed zone from system.`);
    }

    /**
     * Toggle the power state
     * @param device Module to toggle the power state
     */
    public async toggleModulePower(device: Module) {
        const method = device.running ? modules_v7.stop : modules_v7.start;
        try {
            await method({ id: device.id }).then(orThrow);
        } catch (err) {
            const message = shortModuleError(err);
            if (message) return notifyError(message);
            return notifyError(
                `Failed to ${
                    device.running ? 'stop' : 'start'
                } module '${device.id}'.\nView Error?`,
                'View',
                () => this.viewDetails(err),
            );
        }
        notifySuccess(
            `Module successfully ${device.running ? 'stopped' : 'started'}`,
        );
        (device as Module & { running: boolean }).running = !device.running;
        this.modulesChanged();
    }

    /** View Results of the execute */
    private async viewDetails(content: unknown) {
        const { ViewResponseModalComponent } = await import(
            '../overlays/view-response-modal.component'
        );
        this._dialog.open(ViewResponseModalComponent, { data: { content } });
    }

    private async confirm(data: ConfirmModalData) {
        const { openConfirmModal } = await import(
            '../overlays/confirm-modal.component'
        );
        return openConfirmModal(data, this._dialog);
    }

    private setLoading(key: string, value: boolean) {
        this._loading.update((state) => ({ ...state, [key]: value }));
    }

    /** Reload the settings, module and trigger lists of the active system */
    private changed() {
        this._settings_change.update((count) => count + 1);
        this.modulesChanged();
        this.triggersChanged();
    }

    private modulesChanged() {
        this._modules_change.update((count) => count + 1);
    }

    private triggersChanged() {
        this._triggers_change.update((count) => count + 1);
    }
}
