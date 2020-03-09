import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HashMap, EngineModule, EngineSystem } from '@placeos/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';

export interface ModuleStateModalData {
    /** System Data to show the details for */
    system: EngineSystem;
    /** Module to expose the state of */
    module: EngineModule;
    /** Devices associated with the system */
    devices: EngineModule[];
}

@Component({
    selector: 'view-module-state-modal',
    templateUrl: './view-module-state.template.html',
    styleUrls: ['./view-module-state.styles.scss']
})
export class ViewModuleStateModalComponent extends BaseDirective implements OnInit {
    /** Current state of the selected module */
    public state: string;
    /** Whether the module state is being loaded */
    public loading: boolean;
    /** Whether the modal is closing */
    public closing: boolean;
    /** Mapping of devices to the module bindings */
    public device_classes: HashMap<string> = {};

    /** System of the selected module */
    public get system(): EngineSystem {
        return this._data.system;
    }

    /** Module to view the state of */
    public get module(): EngineModule {
        return this._data.module;
    }

    /** Devices associated with the system */
    public get devices(): EngineModule[] {
        return this._data.devices || [];
    }

    constructor(
        private _dialog: MatDialogRef<ViewModuleStateModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: ModuleStateModalData,
        private _service: ApplicationService
    ) {
        super();
    }

    public ngOnInit() {
        this.generateDeviceBindings();
        this.updateState();
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

    /** Update the state of the module */
    public updateState() {
        if (!this.system || !this.module) {
            return;
        }
        const class_name = this.device_classes[this.module.id];
        if (!class_name) {
            return;
        }
        this.loading = true;
        const class_parts = class_name.split('_');
        this._service.Systems.state(this.system.id, class_parts[0], +class_parts[1]).then(
            state => {
                console.log('State:', state);
                this.state =
                    typeof state === 'string' ? state : JSON.stringify(state, undefined, 4);
                this.loading = false;
            },
            err => {
                this._service.notifyError(err.message || err);
                this.loading = false;
            }
        );
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog.close();
    }
}
