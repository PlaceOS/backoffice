import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EngineSystem, EngineModule, EngineDriverRole, HashMap } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ApplicationActionLink } from 'src/app/shared/utilities/settings.interfaces';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import {
    ViewModuleStateModalComponent,
    ModuleStateModalData
} from 'src/app/overlays/view-module-state/view-module-state.component';
import { EngineDebugService } from 'src/app/services/debug.service';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { ViewResponseModalComponent } from 'src/app/overlays/view-response-modal/view-response-modal.component';

@Component({
    selector: 'system-modules',
    templateUrl: './system-modules.template.html',
    styleUrls: ['./system-modules.styles.scss']
})
export class SystemModulesComponent extends BaseDirective implements OnInit, OnChanges {
    /** System to grab the devices for */
    @Input() public item: EngineSystem;
    /** List of modules associated with the system */
    public devices: EngineModule[];
    /** Mapping of devices to the module bindings */
    public device_classes: HashMap<string> = {};
    /** Whether a device should be listened to */
    public device_listener: HashMap<boolean> = {};
    /** Store for ID of new module to add to system */
    public new_module: string;
    /** Actions available for the context menu */
    public menu_options: ApplicationActionLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', class: 'backoffice-power-plug' }
        },
        { id: 'state', name: 'View State', icon: { type: 'icon', class: 'backoffice-eye' } },
        { id: 'reload', name: 'Reload Module', icon: { type: 'icon', class: 'backoffice-cw' } },
        { id: 'remove', name: 'Remove Module', icon: { type: 'icon', class: 'backoffice-trash' } }
    ];

    public offline_options: ApplicationActionLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', class: 'backoffice-power-plug' }
        },
        { id: 'remove', name: 'Remove Module', icon: { type: 'icon', class: 'backoffice-trash' } }
    ];
    /** Function for excluding modules already within this system */
    public readonly exclude_fn = (item: EngineModule) =>
        item.control_system_id === this.item.id || item.role === EngineDriverRole.Logic;

    /** Service for interacting with modules */
    public get module_service() {
        return this._service.Modules;
    }

    /** Map of modules to whether they are listening for debug messages */
    public get debugged_modules(): HashMap<boolean> {
        return this.devices.reduce((map, device) => {
            map[device.id] = this._debug_service.isListening(device);
            return map;
        }, {});
    }

    constructor(
        private _service: ApplicationService,
        private _dialog: MatDialog,
        private _debug_service: EngineDebugService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
                this.loadModules();
            })
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadModules();
        }
    }

    /**
     * Load the modules for the active system
     * @param offset Offset to load
     */
    public loadModules(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this._service.Modules.query({ control_system_id: this.item.id, complete: true, offset } as any).then(
            list => {
                list.sort(
                    (a, b) => this.item.modules.indexOf(a.id) - this.item.modules.indexOf(b.id)
                );
                this.devices = list;
                this.generateModuleBindings();
            },
            () => null
        );
    }

    /**
     * Handle context menu event
     * @param event Event posted by the context menu
     * @param device Module associated with the context menu event
     */
    public handleContextEvent(event: ApplicationActionLink, device: EngineModule) {
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
            }
        }
    }

    /**
     * Toggle the power state
     * @param device Module to toggle the power state
     */
    public power(device: EngineModule) {
        if (device.connected) {
            device.stop().then(
                () => {
                    this._service.notifySuccess('Module successfully stopped');
                    (device as any).running = false;
                },
                err => {
                    if (typeof err === 'string' && err.length < 64) {
                        this._service.notifyError(err);
                    } else {
                        this._service.notifyError(
                            `Failed to stop device '${device.id}'.\nView Error?`,
                            'View',
                            () => this.viewDetails(err)
                        );
                    }
                }
            );
        } else {
            device.start().then(
                () => {
                    this._service.notifySuccess('Module successfully stopped');
                    (device as any).running = true;
                },
                err => {
                    if (typeof err === 'string' && err.length < 64) {
                        this._service.notifyError(err);
                    } else {
                        this._service.notifyError(
                            `Failed to stop device '${device.id}'.\nView Error?`,
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
    public reload(device: EngineModule) {
        this._service.Modules.show(device.id).then(
            item => {
                for (const k in item) {
                    if (item.hasOwnProperty(k)) {
                        device[k] = item[k];
                    }
                }
            },
            () => null
        );
    }

    public viewState(device: EngineModule) {
        this._dialog.open<ViewModuleStateModalComponent, ModuleStateModalData>(
            ViewModuleStateModalComponent,
            { data: { system: this.item, module: device, devices: this.devices } }
        );
    }

    public reloadModule(device: EngineModule) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Reload module?',
                    content: `New driver code will be loaded and the device settings will be reloaded.`,
                    icon: { type: 'icon', class: 'backoffice-install' }
                }
            }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    (device.driver
                        ? device.driver.reload()
                        : this._service.Drivers.reload(device.driver_id)
                    ).then(
                        _ => this._service.notifySuccess('Driver successfully reloaded.'),
                        err => this._service.notifyError(err.message || err)
                    );
                    ref.close();
                    this.unsub('confirm_ref');
                }
            })
        );
    }

    /** View Results of the execute */
    private viewDetails(content: any) {
        this._dialog.open<ViewResponseModalComponent>(ViewResponseModalComponent, {
            data: { content }
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
                        icon: { type: 'icon', class: 'backoffice-layers' }
                    }
                }
            );
            this.subscription(
                'confirm_ref',
                ref.componentInstance.event.subscribe((e: DialogEvent) => {
                    if (e.reason === 'done') {
                        ref.componentInstance.loading = 'Updating device order...';
                        const list: string[] = [...this.item.modules];
                        moveItemInArray(list, event.previousIndex, event.currentIndex);
                        this.item.storePendingChange('modules', list);
                        this.item.save().then(
                            () => {
                                ref.close();
                                this.unsub('confirm_ref');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(
                                    `Error reording devices. Error: ${err.message || err}`
                                );
                            }
                        );
                    }
                })
            );
        }
    }

    public remove(device: EngineModule) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Remove module?',
                    content: `Remove ${device.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                }
            }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    this.item.removeModule(device.id).then(
                        () => {
                            this._service.notifySuccess('Succefully removed module.');
                            this.devices.splice(this.devices.indexOf(device), 1);
                            ref.close();
                            this.unsub('confirm_ref');
                        },
                        err => {
                            this._service.notifyError(
                                `Error removing module. Error: ${err.message || err}`
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
                item: new EngineModule(this._service.Modules, {
                    control_system_id: this.item.id,
                    control_system: this.item
                }),
                service: this._service.Modules,
                readonly: true
            }
        });
        this.subscription(
            'modal_events',
            ref.componentInstance.event.subscribe(event => {
                if (event.reason === 'done') {
                    this._service.Systems.addModule(this.item.id, event.metadata.item.id).then(
                        () => {
                            this.timeout('reload_module_list', () => this.loadModules(), 1000);
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
        this.item.storePendingChange('modules', mod_list);
        this.item.save().then(
            () => {
                this._service.notifySuccess('Successfully added device to system');
                this.loadModules();
            },
            () => {
                this._service.notifyError('Failed to add module to system');
            }
        );
    }

    /**
     * Toggle debug events for a device
     * @param device Module to listen to debug events for
     */
    public toggleDebugEvents(device: EngineModule) {
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
            const name =
                device.custom_name ||
                device.name ||
                'Blank';
            if (!counter[name]) {
                counter[name] = 0;
            }
            this.device_classes[device.id] = `${name}_${++counter[name]}`;
        }
    }
}
