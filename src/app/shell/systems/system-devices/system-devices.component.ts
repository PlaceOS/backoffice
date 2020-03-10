import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EngineSystem, EngineModule, HashMap } from '@placeos/ts-client';
import { first } from 'rxjs/operators';
import { ComposerService } from '@placeos/composer';

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

import * as dayjs from 'dayjs';

const TERMINAL_COLOURS = {
    debug: '\u001b[34m',
    info: '\u001b[32m',
    warn: '\u001b[33m',
    error: '\u001b[31m',
    fatal: '\u001b[31m'
};

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
    /** Whether a device should be listened to */
    public device_listener: HashMap<boolean> = {};
    /** List of debug logs for selected devices */
    public device_logs: string = '';
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
        { id: 'reload', name: 'Reload Device', icon: { type: 'icon', class: 'backoffice-cw' } },
        { id: 'remove', name: 'Remove Device', icon: { type: 'icon', class: 'backoffice-trash' } }
    ];

    /** Service for interacting with modules */
    public get module_service() {
        return this._service.Modules;
    }

    /** Whether the application is listening for debug messages from the server */
    public get is_listening(): boolean {
        for (const id in this.device_listener) {
            if (this.device_listener.hasOwnProperty(id) && this.device_listener[id]) {
                return true;
            }
        }
        return false;
    }

    constructor(
        private _service: ApplicationService,
        private _dialog: MatDialog,
        private _composer: ComposerService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
                this.loadDevices();
            })
        );
        this.device_logs = '';
        this._service.initialised.pipe(first(is_inited => is_inited)).subscribe(() => {
            this.subscription(
                'debug_events',
                this._composer.realtime.debug_events.subscribe(event => {
                    if (this.item.modules.find(id => id === event.module)) {
                        this.device_logs += `\n\n${TERMINAL_COLOURS[event.level]}${dayjs().format(
                            'h:mm A'
                        )}, ${event.module}, [${event.level.toUpperCase()}]\u001b[0m ${
                            event.message
                        }`;
                    }
                })
            );
        });
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadDevices();
        }
    }

    /**
     * Load the modules for the active system
     * @param offset Offset to load
     */
    public loadDevices(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this._service.Modules.query({ system_id: this.item.id, offset }).then(
            list => {
                list.sort(
                    (a, b) => this.item.modules.indexOf(a.id) - this.item.modules.indexOf(b.id)
                );
                this.devices = list;
                this.generateDeviceBindings();
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
                            `Failed to stop device '${device.id}'.\nView Error?`,
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
                            `Failed to stop device '${device.id}'.\nView Error?`,
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
                        : this._service.Drivers.reload(device.dependency_id)
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
        const mod_list = [...this.item.modules];
        if (mod_list.indexOf(id) < 0) {
            mod_list.push(id);
        }
        this.item.storePendingChange('modules', mod_list);
        this.item.save().then(
            () => {
                this._service.notifySuccess('Successfully added device to system');
                this.loadDevices();
            },
            () => {
                this._service.notifyError('Failed to add module to system');
            }
        );
    }

    /**
     * Toggle debug events for a device
     * @param device Device to listen to debug events for
     */
    public toggleDebugEvents(device: EngineModule) {
        if (!device) {
            return;
        }
        console.log('Toggle Device:', device, this.device_listener[device.id]);
        if (this.device_listener[device.id]) {
            this.subscription(`debug_${device.id}`, device.debug());
        } else {
            this.unsub(`debug_${device.id}`);
        }
    }

    /**
     * Generate the binding modules for each device
     */
    private generateDeviceBindings() {
        const counter: HashMap<number> = {};
        for (const device of this.devices) {
            const name =
                device.custom_name || (device.driver ? device.driver.module_name : '') || 'Blank';
            if (!counter[name]) {
                counter[name] = 0;
            }
            this.device_classes[device.id] = `${name}_${++counter[name]}`;
        }
    }
}
