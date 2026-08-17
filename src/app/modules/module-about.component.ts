import { Component, inject, signal } from '@angular/core';
import { PlaceModule } from '@placeos/ts-client';

import { DatePipe } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { CustomTooltipComponent } from '../ui/custom-tooltip.component';
import { SettingsFormComponent } from '../ui/forms/settings-form.component';
import { IconComponent } from '../ui/icon.component';
import { ModuleRuntimeErrorsModalComponent } from '../ui/module-runtime-errors-modal.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { ModuleStateService } from './module-state.service';

@Component({
    selector: 'module-about',
    template: `
        <div class="p-4">
            <section class="flex flex-col gap-2">
                <div
                    class="border-base-200 grid flex-1 gap-2 rounded-sm border p-4"
                    [style.gridTemplateColumns]="'4.5rem auto'"
                >
                    @if (item.notes) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'MODULES.NOTES' | translate }}
                        </div>
                        <div class="select-text">{{ item.notes }}</div>
                    }
                    @if (item.ip) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'MODULES.IP_ADDRESS' | translate }}
                        </div>
                        <div class="mono select-text">{{ item.ip }}</div>
                    }
                    @if (item.port > 1) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'MODULES.PORT_NUMBER' | translate }}
                        </div>
                        <div class="mono select-text">{{ item.port }}</div>
                    }
                    @if (item.tls || item.udp) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'MODULES.PROTOCOL' | translate }}
                        </div>
                        <div class="flex items-center">
                            @if (item.tls) {
                                <code
                                    class="bg-success text-base-100 select-text"
                                >
                                    TLS
                                </code>
                            }
                            @if (item.udp) {
                                <code
                                    class="bg-success text-base-100 select-text"
                                >
                                    UDP
                                </code>
                            }
                        </div>
                    }
                    @let driver_value = driver();
                    @if (driver_value) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.SINGULAR' | translate }}
                        </div>
                        <a
                            class="truncate underline select-text"
                            [routerLink]="['/drivers', item.driver_id]"
                        >
                            {{
                                driver_value.name ||
                                    '&lt;' +
                                        ('COMMON.BLANK_NAME' | translate) +
                                        '&gt;'
                            }}
                        </a>
                    }
                    @let system_value = system();
                    @if (system_value) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.SINGULAR' | translate }}
                        </div>
                        <a
                            class="truncate underline select-text"
                            [routerLink]="[
                                '/systems',
                                system_value.id,
                                'modules',
                            ]"
                        >
                            {{ system_value.name }}
                        </a>
                    }
                    @let edge_value = edge();
                    @if (edge_value) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.EDGE' | translate }}
                        </div>
                        <div class="flex items-center">
                            <a
                                class="truncate underline select-text"
                                [routerLink]="['/admin', 'edge', edge_value.id]"
                            >
                                {{ edge_value.name }}
                            </a>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                customTooltip
                                [hover]="true"
                                [backdrop]="false"
                                [content]="edge_desc_template"
                                yPosition="top"
                                xPosition="center"
                            >
                                @if (edge_value.description) {
                                    <icon
                                        class="border-base-200 rounded-full border"
                                        >info</icon
                                    >
                                }
                            </button>
                        </div>
                        <ng-template #edge_desc_template>
                            <div
                                class="border-base-200 bg-base-100 pointer-events-none max-w-[24rem] rounded-sm border p-2 shadow-sm"
                            >
                                <pre
                                    class="bg-base-200 overflow-hidden rounded-xl p-2 text-sm"
                                    >{{ edge_value.description }}</pre
                                >
                            </div>
                        </ng-template>
                    }
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.CREATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            class="select-text"
                            [matTooltip]="
                                (item.created_at * 1000 | date: 'mediumDate') +
                                ', ' +
                                (item.created_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item.created_at * 1000 | dateFrom }}
                        </span>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            class="select-text"
                            [matTooltip]="
                                (item.updated_at * 1000 | date: 'mediumDate') +
                                ', ' +
                                (item.updated_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item.updated_at * 1000 | dateFrom }}
                        </span>
                    </div>
                    @if (item.has_runtime_error) {
                        <button
                            btn
                            matRipple
                            class="col-span-2 flex w-full items-center"
                            (click)="viewErrors()"
                        >
                            {{ 'MODULES.RUNTIME_ERRORS_VIEW' | translate }}
                        </button>
                    }
                </div>
                <div class="border-base-200 flex gap-2 rounded-xl border p-2">
                    <h3 class="flex-1 p-2 text-lg font-medium">
                        {{ 'MODULES.CONTROLS' | translate }}
                    </h3>
                    <button
                        icon
                        default
                        start
                        matRipple
                        [disabled]="!item.running || stopping()"
                        (click)="toggleModuleState()"
                        [matTooltip]="'SYSTEMS.START' | translate"
                    >
                        @if (!stopping()) {
                            <icon>play_arrow</icon>
                        } @else {
                            <mat-spinner diameter="32" />
                        }
                    </button>
                    <button
                        icon
                        default
                        error
                        stop
                        matRipple
                        [disabled]="item.running || stopping()"
                        (click)="toggleModuleState()"
                        [matTooltip]="'SYSTEMS.STOP' | translate"
                    >
                        @if (!stopping()) {
                            <icon>stop</icon>
                        } @else {
                            <mat-spinner diameter="32" />
                        }
                    </button>
                </div>
            </section>
            <hr class="my-4" />
            @let other_settings_value = other_settings();
            @if (item.settings && other_settings_value) {
                <section>
                    <a-settings-form
                        [id]="item.id"
                        [merge]="true"
                        [settings]="item.settings"
                        [merge_settings]="other_settings_value || []"
                    />
                </section>
            } @else {
                <div
                    class="m-auto flex flex-col items-center justify-center p-8"
                >
                    <mat-spinner class="mb-4" diameter="48" />
                    <p>{{ 'MODULES.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            label {
                width: 4rem;
            }
        `,
    ],
    imports: [
        TranslatePipe,
        MatProgressSpinnerModule,
        SettingsFormComponent,
        MatRippleModule,
        MatTooltipModule,
        CustomTooltipComponent,
        IconComponent,
        RouterModule,
        DateFromPipe,
        DatePipe,
    ],
})
export class ModuleAboutComponent {
    private _service = inject(ModuleStateService);
    private _dialog = inject(MatDialog);

    /** Driver for the active item */
    public readonly driver = this._service.driver;
    /** Control System for the active item */
    public readonly system = this._service.system;
    /** Edge node for the active item */
    public readonly edge = this._service.edge;
    /** List of settings for associated modules, drivers and zones */
    public readonly other_settings = this._service.associated_settings;
    /** Whether module is being stopped */
    public readonly stopping = signal(false);

    public get item(): PlaceModule {
        return this._service.active_item as PlaceModule;
    }

    public async toggleModuleState() {
        this.stopping.set(true);
        await this._service.toggleModuleState();
        this.stopping.set(false);
    }

    public viewErrors() {
        this._dialog.open<ModuleRuntimeErrorsModalComponent>(
            ModuleRuntimeErrorsModalComponent,
            { data: this.item.id },
        );
    }
}
