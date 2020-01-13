import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EngineSystem, EngineModule, HashMap } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ContextMenuComponent } from '../../../shared/components/context-menu/context-menu.component';
import { ApplicationLink } from 'src/app/shared/utilities/settings.interfaces';
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

@Component({
    selector: 'system-devices',
    templateUrl: './system-devices.template.html',
    styleUrls: ['./system-devices.styles.scss']
})
export class SystemDevicesComponent extends BaseDirective implements OnInit, OnChanges {
    /** System to grab the devices for */
    @Input() public item: EngineSystem;
    /** List of modules associated with the system */
    public devices: EngineModule[];
    /** Mapping of devices to the module bindings */
    public device_classes: HashMap<string> = {};
    /** Store for ID of new module to add to system */
    public new_module: string;
    /** Actions available for the context menu */
    public menu_options: ApplicationLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', class: 'backoffice-power-plug' }
        },
        { id: 'state', name: 'View State', icon: { type: 'icon', class: 'backoffice-list' } },
        { id: 'reload', name: 'Reload Device', icon: { type: 'icon', class: 'backoffice-cw' } },
        { id: 'remove', name: 'Remove Device', icon: { type: 'icon', class: 'backoffice-trash' } }
    ];

    /** Service for interacting with modules */
    public get module_service() {
        return this._service.Modules;
    }

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this._service.set('context-menu.items', this.menu_options);
    }

    public ngOnDestroy() {
        this._service.set('context-menu.items', []);
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    /**
     * Load the modules for the active system
     * @param offset Offset to load
     */
    public load(offset: number = 0) {
        this._service.Modules.query({ system_id: this.item.id, offset }).then(
            list => {
                list.sort(
                    (a, b) => this.item.modules.indexOf(a.id) - this.item.modules.indexOf(b.id)
                );
                this.devices = list;
                this.generateDeviceBindings();
                console.log(
                    'Devices:',
                    this.devices,
                    this.devices.map(i => `${i.custom_name || i.driver.module_name}_${i.role + 1}`)
                );
            },
            () => null
        );
    }

    /**
     * Generate the binding modules for each device
     */
    private generateDeviceBindings() {
        const counter: HashMap<number> = {};
        for (const device of this.devices) {
            const name = device.custom_name || device.driver ? device.driver.module_name : '' || 'Blank';
            if (!counter[name]) {
                counter[name] = 0;
            }
            this.device_classes[device.id] = `${name}_${++counter[name]}`;
        }
    }

    /**
     * Handle context menu event
     * @param event Event posted by the context menu
     * @param device Module associated with the context menu event
     */
    public handleContextEvent(event: ApplicationLink, device: EngineModule) {
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
     * @param device Device to toggle the power state
     */
    public power(device: EngineModule) {
        if (device.running) {
            device.stop().then(
                () => {
                    this._service.notifySuccess('Module successfully stopped');
                    this.reload(device);
                },
                err => {
                    if (typeof err === 'string' && err.length < 64) {
                        this._service.notifyError(err);
                    } else {
                        this._service.notifyError(
                            `Failed to stop device '${device.id}'.<br>View Error?`,
                            'View',
                            () => {
                                // console.log('View error:', err);
                            }
                        );
                    }
                }
            );
        } else {
            device.start().then(
                () => {
                    this._service.notifySuccess('Module successfully stopped');
                    this.reload(device);
                },
                err => {
                    if (typeof err === 'string' && err.length < 64) {
                        this._service.notifyError(err);
                    } else {
                        this._service.notifyError(
                            `Failed to stop device '${device.id}'.<br>View Error?`,
                            'View',
                            () => {
                                // console.log('View error:', err);
                            }
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
            { data: { system: this.item, module: device } }
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
                    device.driver.reload().then(
                        result => this._service.notifySuccess('Driver successfully reloaded.'),
                        err => this._service.notifyError(err.message || err)
                    );
                    ref.close();
                    this.unsub('confirm_ref');
                }
            })
        );
    }

    /**
     * Handle drop event for reordering the devices
     * @param event
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
                        const list: string[] = [];
                        for (const item of this.devices) {
                            list.push(item.id);
                        }
                        moveItemInArray(list, event.previousIndex, event.currentIndex);
                        this._service.Systems.update(this.item.id, { modules: list }).then(() => {
                            moveItemInArray(this.devices, event.previousIndex, event.currentIndex);
                            moveItemInArray(
                                this.item.modules,
                                event.previousIndex,
                                event.currentIndex
                            );
                        });
                        ref.close();
                        this.unsub('confirm_ref');
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
                    content: `Remove ${device.dependency_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                }
            }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    ref.close();
                    this.unsub('confirm_ref');
                }
            })
        );
    }

    public newDevice() {
        this._service.Modules.add({
            control_system: this.item
        }).then(
            item => {
                console.log('Item:', item);
                this._service.notifySuccess('Created new device');
                this.joinDevice(item.id);
            },
            () => {
                this._service.notifyError('Error creating new device');
            }
        );
    }

    public addDevice() {
        if (this.new_module) {
            this.joinDevice(this.new_module);
            this.new_module = '';
        }
    }

    public joinDevice(id: string) {
        const mod_list = this.item.modules;
        if (mod_list.indexOf(id) < 0) {
            mod_list.push(id);
        }
        const new_item = { ...this.item, modules: mod_list };
        this._service.Systems.update(this.item.id, new_item).then(
            () => {
                this._service.notifySuccess('Successfully added device to system');
                this.load();
            },
            () => {
                this._service.notifyError('Failed to add module to system');
            }
        );
    }
}
