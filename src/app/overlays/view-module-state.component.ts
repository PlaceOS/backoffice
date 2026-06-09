import { Component, OnInit, inject, signal } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    PlaceModule,
    PlaceSystem,
    systemModuleState,
} from '@placeos/ts-client';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler } from '../common/async-handler.class';
import { notifyError } from '../common/notifications';
import { HashMap } from '../common/types';
import { SettingsFieldComponent } from '../ui/custom-fields/settings-field.component';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';

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
            class="bg-base-200 mx-4 mt-4 mb-2 flex items-center justify-between rounded-sm px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'MODULES.STATE' | translate }}
            </h3>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </div>
        @if (!loading()) {
            <main
                class="flex h-[calc(100vh-6rem)] w-[80vw] flex-col space-y-2 overflow-auto p-4"
            >
                <div class="mb-2 flex items-center space-x-2">
                    <div
                        class="border-base-300 relative min-w-48 rounded-sm border px-4 py-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 text-xs"
                        >
                            {{ 'SYSTEMS.SINGULAR' | translate }}
                        </div>
                        <div class="truncate">
                            {{ system?.display_name || system?.name }}
                        </div>
                        <div class="text-xs opacity-30">{{ system?.id }}</div>
                    </div>
                    <div
                        class="border-base-300 relative min-w-48 rounded-sm border px-4 py-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 text-xs"
                        >
                            {{ 'MODULES.SINGULAR' | translate }}
                        </div>
                        <div class="truncate">
                            {{ module?.custom_name || module?.name }}
                        </div>
                        <div class="text-xs opacity-30">
                            {{ device_classes()[module?.id] }}
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
                <div class="flex min-h-0 flex-1">
                    <settings-form-field
                        class="min-h-0 flex-1"
                        [ngModel]="state()"
                        [readonly]="true"
                        [fill]="true"
                    />
                </div>
            </main>
        } @else {
            <main
                class="flex h-[calc(100vh-6rem)] w-[80vw] flex-col items-center justify-center"
            >
                <mat-spinner diameter="32" />
                <div>
                    {{ 'MODULES.STATE_LOADING' | translate }}
                </div>
            </main>
        }
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        SettingsFieldComponent,
        FormsModule,
        MatRippleModule,
        IconComponent,
    ],
})
export class ViewModuleStateModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog =
        inject<MatDialogRef<ViewModuleStateModalComponent>>(MatDialogRef);
    private _data = inject<ModuleStateModalData>(MAT_DIALOG_DATA);

    /** Current state of the selected module */
    public readonly state = signal<string | null>(null);
    /** Whether the module state is being loaded */
    public loading = signal(false);
    /** Whether the modal is closing */
    public closing = signal(false);
    /** Mapping of devices to the module bindings */
    public readonly device_classes = signal<HashMap<string>>({});

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
            this.device_classes.update((classes) => ({
                ...classes,
                [device.id]: `${name}_${++counter[name]}`,
            }));
        }
    }

    /** Update the state of the module */
    public async updateState() {
        if (!this.system || !this.module) {
            return;
        }
        const class_name = this.device_classes()[this.module.id];
        if (!class_name) {
            return;
        }
        this.loading.set(true);
        const class_parts = class_name.split('_');
        const num = !isNaN(+class_parts[class_parts.length - 1])
            ? +class_parts[class_parts.length - 1]
            : 1;
        try {
            const state = await systemModuleState(
                this.system.id,
                class_parts.slice(0, class_parts.length - 1).join('_'),
                num,
            );
            const pre_state =
                (typeof state === 'string' ? JSON.parse(state) : state) || {};
            Object.keys(pre_state).forEach((key) => {
                pre_state[key] = JSON.parse(pre_state[key]);
            });
            this.state.set(JSON.stringify(pre_state, undefined, 4));
        } catch (err) {
            notifyError(JSON.stringify(err.response || err.message || err));
        } finally {
            this.loading.set(false);
        }
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog.close();
    }
}
