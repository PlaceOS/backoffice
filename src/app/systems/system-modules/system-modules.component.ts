import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceSystem,
    PlaceModule,
    PlaceDriverRole,
    updateModule,
    addModule,
    updateSystem,
    removeSystemModule,
    addSystemModule,
    loadModule,
    recompileDriver,
    showModule,
    startModule,
    stopModule,
    queryModules,
} from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { AppLink } from 'src/app/common/types';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent, HashMap } from 'src/app/common/types';
import {
    ViewModuleStateModalComponent,
    ModuleStateModalData,
} from 'src/app/overlays/view-module-state/view-module-state.component';
import { PlaceDebugService } from 'src/app/common/debug.service';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { ViewResponseModalComponent } from 'src/app/overlays/view-response-modal/view-response-modal.component';
import { map } from 'rxjs/operators';
import { notifySuccess, notifyError } from 'src/app/common/notifications';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'system-modules',
    templateUrl: './system-modules.template.html',
    styleUrls: ['./system-modules.styles.scss'],
})
export class SystemModulesComponent extends BaseClass {
    /** List of modules associated with the system */
    public devices: PlaceModule[];
    /** Mapping of devices to the module bindings */
    public device_classes: HashMap<string> = {};
    /** Whether a device should be listened to */
    public device_listener: HashMap<boolean> = {};
    /** Store for ID of new module to add to system */
    public new_module: string;
    /** Whether to show exec block */
    public hide_exec: boolean;
    /** Whether to refresh the list of active modules in the exec options */
    public refresh_modules: boolean;

    public loading: boolean = false;
    /** Actions available for the context menu */
    public menu_options: AppLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', class: 'backoffice-power-plug' },
        },
        { id: 'state', name: 'View State', icon: { type: 'icon', class: 'backoffice-eye' } },
        { id: 'reload', name: 'Recompile Driver', icon: { type: 'icon', class: 'backoffice-cw' } },
        { id: 'edit', name: 'Edit Module', icon: { type: 'icon', class: 'backoffice-edit' } },
        { id: 'remove', name: 'Remove Module', icon: { type: 'icon', class: 'backoffice-trash' } },
        {
            id: 'load',
            name: 'Load Module',
            icon: { type: 'icon', class: 'backoffice-arrow-with-circle-up' },
        },
    ];

    public offline_options: AppLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', class: 'backoffice-power-plug' },
        },
        { id: 'edit', name: 'Edit Module', icon: { type: 'icon', class: 'backoffice-edit' } },
        { id: 'remove', name: 'Remove Module', icon: { type: 'icon', class: 'backoffice-trash' } },
        {
            id: 'load',
            name: 'Load Module',
            icon: { type: 'icon', class: 'backoffice-arrow-with-circle-up' },
        },
    ];
    /** Query method for modules */
    public readonly query_fn = (_: string) => queryModules({ q: _ }).pipe(map(_ => _.data));
    /** Function for excluding modules already within this system */
    public readonly exclude_fn = (item: PlaceModule) =>
        item.control_system_id === this.item.id || item.role === PlaceDriverRole.Logic;

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    /** Map of modules to whether they are listening for debug messages */
    public get debugged_modules(): HashMap<boolean> {
        return this.devices.reduce((map, device) => {
            map[device.id] = this._debug_service.isListening(device);
            return map;
        }, {});
    }

    constructor(
        private _service: ActiveItemService,
        private _dialog: MatDialog,
        private _debug_service: PlaceDebugService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.loading = true;
        this.subscription('item', this._service.item.subscribe(_ => this.loadModules()));
    }

    /**
     * Load the modules for the active system
     * @param offset Offset to load
     */
    public async loadModules(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this.loading = true;
        const module_list = await queryModules({
            control_system_id: this.item.id,
            complete: true,
            offset,
        } as any)
            .pipe(map((resp) => resp.data))
            .toPromise();
        if (module_list) {
            module_list.sort(
                (a, b) => this.item.modules.indexOf(a.id) - this.item.modules.indexOf(b.id)
            );
            this.devices = module_list;
            this.generateModuleBindings();
        }
        this.loading = false;
    }

    /**
     * Handle context menu event
     * @param event Event posted by the context menu
     * @param device Module associated with the context menu event
     */
    public handleContextEvent(event: AppLink, device: PlaceModule) {
        if (event) {
            switch (event.id) {
                case 'power':
                    this.power(device);
                    break;
                case 'state':
                    this.viewState(device);
                    break;
                case 'reload':
                    this.reloadModule(device);
                    break;
                case 'remove':
                    this.remove(device);
                    break;
                case 'load':
                    this.loadModule(device);
                    break;
                case 'edit':
                    this.editModule(device);
                    break;
            }
        }
    }

    /**
     * Toggle the power state
     * @param device Module to toggle the power state
     */
    public power(device: PlaceModule) {
        this.hide_exec = true;
        if (device.running) {
            stopModule(device.id)
                .toPromise()
                .then(
                    () => {
                        this.hide_exec = false;
                        notifySuccess('Module successfully stopped');
                        (device as any).running = false;
                        this.refresh_modules = !this.refresh_modules;
                    },
                    (err) => {
                        this.hide_exec = false;
                        if (typeof err === 'string' && err.length < 64) {
                            notifyError(err);
                        } else {
                            notifyError(
                                `Failed to stop module '${device.id}'.\nView Error?`,
                                'View',
                                () => this.viewDetails(err)
                            );
                        }
                    }
                );
        } else {
            startModule(device.id)
                .toPromise()
                .then(
                    () => {
                        this.hide_exec = false;
                        notifySuccess('Module successfully started');
                        (device as any).running = true;
                        this.refresh_modules = !this.refresh_modules;
                    },
                    (err) => {
                        this.hide_exec = false;
                        if (typeof err === 'string' && err.length < 64) {
                            notifyError(err);
                        } else {
                            notifyError(
                                `Failed to start module '${device.id}'.\nView Error?`,
                                'View',
                                () => this.viewDetails(err)
                            );
                        }
                    }
                );
        }
    }

    /**
     * Update the state of the module
     * @param device Module to reload
     */
    public reload(device: PlaceModule) {
        showModule(device.id)
            .toPromise()
            .then(
                (item) => {
                    for (const k in item) {
                        if (item.hasOwnProperty(k)) {
                            device[k] = item[k];
                        }
                    }
                },
                () => null
            );
    }

    public viewState(device: PlaceModule) {
        this._dialog.open<ViewModuleStateModalComponent, ModuleStateModalData>(
            ViewModuleStateModalComponent,
            { data: { system: this.item, module: device, devices: this.devices } }
        );
    }

    public reloadModule(device: PlaceModule) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Recompile module?',
                    content: `New driver code will be loaded and the device settings will be reloaded.`,
                    icon: { type: 'icon', class: 'backoffice-install' },
                },
            }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    recompileDriver(device.driver?.id || device.driver_id)
                        .toPromise()
                        .then(
                            (_) => notifySuccess('Driver successfully recompiled.'),
                            (err) =>
                                notifyError(
                                    JSON.stringify(err.response || err.message || err)
                                )
                        );
                    ref.close();
                    this.unsub('confirm_ref');
                }
            })
        );
    }

    public loadModule(device: PlaceModule) {
        loadModule(device.id)
            .toPromise()
            .then(
                () =>
                    notifySuccess(
                        `Successfully loaded module "${device.name || device.id}"`
                    ),
                (err) =>
                    notifyError(
                        `Error loading module. Error: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    )
            );
    }

    public editModule(device: PlaceModule) {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: device,
                name: 'Module',
                save: (item) => updateModule(item.id, item),
            },
        });
        this.subscription(
            'edit_module',
            ref.componentInstance.event.subscribe((event: DialogEvent) => {
                if (event.reason === 'done' && event.metadata) {
                    this.devices.splice(
                        this.devices.findIndex((d) => d.id === device.id),
                        1,
                        event.metadata.item
                    );
                    this.generateModuleBindings();
                }
            })
        );
        ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
        });
    }

    /** View Results of the execute */
    private viewDetails(content: any) {
        this._dialog.open<ViewResponseModalComponent>(ViewResponseModalComponent, {
            data: { content },
        });
    }

    /**
     * Handle drop event for reordering the devices
     * @param event Drag drop details
     */
    public drop(event: CdkDragDrop<any[]>) {
        if (event && event.previousIndex !== event.currentIndex) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: 'Change order?',
                        content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
                        icon: { type: 'icon', class: 'backoffice-layers' },
                    },
                }
            );
            this.subscription(
                'confirm_ref',
                ref.componentInstance.event.subscribe((e: DialogEvent) => {
                    if (e.reason === 'done') {
                        this.hide_exec = true;
                        ref.componentInstance.loading = 'Updating module order...';
                        const list: string[] = [...this.item.modules];
                        moveItemInArray(list, event.previousIndex, event.currentIndex);
                        updateSystem(this.item.id, { ...this.item.toJSON(), modules: list })
                            .toPromise()
                            .then(
                                () => {
                                    this.hide_exec = false;
                                    ref.close();
                                    this.unsub('confirm_ref');
                                },
                                (err) => {
                                    this.hide_exec = false;
                                    ref.componentInstance.loading = null;
                                    notifyError(
                                        `Error reording modules. Error: ${JSON.stringify(
                                            err.response || err.message || err
                                        )}`
                                    );
                                }
                            );
                    }
                })
            );
        }
    }

    public remove(device: PlaceModule) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Remove module?',
                    content: `Remove ${device.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                },
            }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    this.hide_exec = true;
                    removeSystemModule(this.item.id, device.id)
                        .toPromise()
                        .then(
                            (item) => {
                                this.hide_exec = false;
                                if (item instanceof PlaceSystem) {
                                    this._service.replaceItem(item);
                                }
                                notifySuccess('Succefully removed module.');
                                this.devices.splice(this.devices.indexOf(device), 1);
                                ref.close();
                                this.unsub('confirm_ref');
                            },
                            (err) => {
                                this.hide_exec = false;
                                notifyError(
                                    `Error removing module. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
                                );
                                ref.close();
                                this.unsub('confirm_ref');
                            }
                        );
                }
            })
        );
    }

    public newModule() {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new PlaceModule({
                    control_system_id: this.item.id,
                    control_system: this.item,
                }),
                name: 'Module',
                save: (item) => addModule(item),
                readonly: true,
            },
        });
        this.subscription(
            'modal_events',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.hide_exec = true;
                    addSystemModule(this.item.id, event.metadata.item.id)
                        .toPromise()
                        .then(
                            (item) => {
                                this.hide_exec = false;
                                this._service.replaceItem(item);
                                this.timeout('reload_module_list', () => this.loadModules(), 1000);
                            },
                            (err) => {
                                this.hide_exec = false;
                            }
                        );
                }
            })
        );
        ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
        });
    }

    public addModule() {
        if (this.new_module) {
            this.joinModule(this.new_module);
            this.new_module = '';
        }
    }

    public joinModule(id: string) {
        const mod_list = [...this.item.modules];
        if (mod_list.indexOf(id) < 0) {
            mod_list.push(id);
        }
        this.hide_exec = true;
        addSystemModule(this.item.id, id)
            .toPromise()
            .then(
                (item) => {
                    this.hide_exec = false;
                    this._service.replaceItem(item);
                    notifySuccess('Successfully added device to system');
                    this.loadModules();
                },
                () => {
                    this.hide_exec = false;
                    notifyError('Failed to add module to system');
                }
            );
    }

    /**
     * Toggle debug events for a device
     * @param device Module to listen to debug events for
     */
    public toggleDebugEvents(device: PlaceModule) {
        if (!device) {
            return;
        }
        if (this._debug_service.isListening(device)) {
            this._debug_service.unbind(device);
        } else {
            this._debug_service.bind(device, this.device_classes[device.id]);
        }
    }

    /**
     * Generate the binding modules for each device
     */
    private generateModuleBindings() {
        const counter: HashMap<number> = {};
        for (const device of this.devices) {
            const name = device.custom_name || device.name || 'Blank';
            if (!counter[name]) {
                counter[name] = 0;
            }
            this.device_classes[device.id] = `${name}_${++counter[name]}`;
        }
    }
}
