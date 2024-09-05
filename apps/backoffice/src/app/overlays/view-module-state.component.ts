import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    PlaceModule,
    PlaceSystem,
    systemModuleState,
} from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HashMap } from 'apps/backoffice/src/app/common/types';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';

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
    template: `
        <header class="flex items-center justify-between space-x-2">
            <h3 class="text-xl">Module State</h3>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="w-[80vw] p-4 space-y-2" *ngIf="!loading; else load_state">
            <div class="flex items-center space-x-2 mb-4">
                <div
                    class="relative px-4 py-2 rounded border border-base-300 min-w-48"
                >
                    <div
                        class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded text-xs px-2 py-1"
                    >
                        System
                    </div>
                    <div class="truncate">
                        {{ system?.display_name || system?.name }}
                    </div>
                    <div class="opacity-30 text-xs">{{ system?.id }}</div>
                </div>
                <div
                    class="relative px-4 py-2 rounded border border-base-300 min-w-48"
                >
                    <div
                        class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded text-xs px-2 py-1"
                    >
                        Module
                    </div>
                    <div class="truncate">
                        {{ module?.custom_name || module?.name }}
                    </div>
                    <div class="opacity-30 text-xs">
                        {{ device_classes[module?.id] }}
                    </div>
                </div>
                <div class="flex-1 w-px"></div>
                <div>
                    <button btn matRipple class="w-40" (click)="updateState()">
                        Update state
                    </button>
                </div>
            </div>
            <!-- <div
                class="flex items-center space-x-2 hover:bg-base-200 p-2 rounded"
            >
                <label class="w-16 m-0">System:</label>
                <div class="mono">
                    {{ system?.display_name || system?.name }}
                </div>
            </div>
            <div
                class="flex items-center space-x-2 hover:bg-base-200 p-2 rounded"
            >
                <label class="w-16 m-0">Module:</label>
                <div class="mono">{{ device_classes[module?.id] }}</div>
            </div> -->
            <div class="settings">
                <settings-form-field
                    [ngModel]="state"
                    [readonly]="true"
                ></settings-form-field>
            </div>
        </main>
        <ng-template #load_state>
            <main class="">
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">Loading state...</div>
                </div>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ViewModuleStateModalComponent
    extends AsyncHandler
    implements OnInit
{
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
                const pre_state =
                    (typeof state === 'string' ? JSON.parse(state) : state) ||
                    {};
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
