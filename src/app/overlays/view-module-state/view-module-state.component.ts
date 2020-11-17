import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaceModule, PlaceSystem, systemModuleState } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { HashMap } from 'src/app/common/types';
import { notifyError } from 'src/app/common/notifications';

export interface ModuleStateModalData {
    /** System Data to show the details for */
    system: PlaceSystem;
    /** Module to expose the state of */
    module: PlaceModule;
    /** Modules associated with the system */
    devices: PlaceModule[];
}

@Component({
    selector: 'view-module-state-modal',
    templateUrl: './view-module-state.template.html',
    styleUrls: ['./view-module-state.styles.scss'],
})
export class ViewModuleStateModalComponent extends BaseClass implements OnInit {
    /** Current state of the selected module */
    public state: string;
    /** Whether the module state is being loaded */
    public loading: boolean;
    /** Whether the modal is closing */
    public closing: boolean;
    /** Mapping of devices to the module bindings */
    public device_classes: HashMap<string> = {};

    /** System of the selected module */
    public get system(): PlaceSystem {
        return this._data.system;
    }

    /** Module to view the state of */
    public get module(): PlaceModule {
        return this._data.module;
    }

    /** Modules associated with the system */
    public get devices(): PlaceModule[] {
        return this._data.devices || [];
    }

    constructor(
        private _dialog: MatDialogRef<ViewModuleStateModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: ModuleStateModalData
    ) {
        super();
    }

    public ngOnInit() {
        this.generateModuleBindings();
        this.updateState();
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
        const num = !isNaN(+class_parts[class_parts.length - 1])
            ? +class_parts[class_parts.length - 1]
            : 1;
        systemModuleState(
            this.system.id,
            class_parts.slice(0, class_parts.length - 1).join('_'),
            num
        ).subscribe(
            (state) => {
                const pre_state = typeof state === 'string' ? JSON.parse(state) : state;
                Object.keys(pre_state).forEach((key) => {
                    pre_state[key] = JSON.parse(pre_state[key]);
                });
                this.state = JSON.stringify(pre_state, undefined, 4);
                this.loading = false;
            },
            (err) => {
                notifyError(JSON.stringify(err.response || err.message || err));
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
