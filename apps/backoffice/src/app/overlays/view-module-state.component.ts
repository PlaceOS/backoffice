import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    PlaceModule,
    PlaceSystem,
    systemModuleState,
} from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';
import { HashMap } from 'apps/backoffice/src/app/common/types';

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
        <div
            class="mx-4 mb-2 mt-4 flex items-center justify-between rounded bg-base-200 px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'MODULES.STATE' | translate }}
            </h3>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </div>
        @if (!loading) {
            <main
                class="flex h-[40rem] max-h-[70vh] w-[80vw] flex-col space-y-2 overflow-auto p-4"
            >
                <div class="mb-2 flex items-center space-x-2">
                    <div
                        class="relative min-w-48 rounded border border-base-300 px-4 py-2"
                    >
                        <div
                            class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 px-2 py-1 text-xs"
                        >
                            {{ 'SYSTEMS.SINGULAR' | translate }}
                        </div>
                        <div class="truncate">
                            {{ system?.display_name || system?.name }}
                        </div>
                        <div class="text-xs opacity-30">{{ system?.id }}</div>
                    </div>
                    <div
                        class="relative min-w-48 rounded border border-base-300 px-4 py-2"
                    >
                        <div
                            class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 px-2 py-1 text-xs"
                        >
                            {{ 'MODULES.SINGULAR' | translate }}
                        </div>
                        <div class="truncate">
                            {{ module?.custom_name || module?.name }}
                        </div>
                        <div class="text-xs opacity-30">
                            {{ device_classes[module?.id] }}
                        </div>
                    </div>
                    <div class="w-px flex-1"></div>
                    <div>
                        <button
                            btn
                            matRipple
                            class="w-40"
                            (click)="updateState()"
                        >
                            {{ 'MODULES.STATE_UPDATE' | translate }}
                        </button>
                    </div>
                </div>
                <div class="pb-4">
                    <settings-form-field
                        [ngModel]="state"
                        [readonly]="true"
                    ></settings-form-field>
                </div>
            </main>
        } @else {
            <main
                class="flex h-[70vh] w-[80vw] flex-col items-center justify-center"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div>
                    {{ 'MODULES.STATE_LOADING' | translate }}
                </div>
            </main>
        }
    `,
    styles: [``],
    standalone: false,
})
export class ViewModuleStateModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog = inject<MatDialogRef<ViewModuleStateModalComponent>>(MatDialogRef);
    private _data = inject<ModuleStateModalData>(MAT_DIALOG_DATA);

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
            num,
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
            },
        );
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog.close();
    }
}
