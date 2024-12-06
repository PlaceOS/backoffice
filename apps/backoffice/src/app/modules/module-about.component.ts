import { Component } from '@angular/core';
import { PlaceModule } from '@placeos/ts-client';

import { ModuleStateService } from './module-state.service';
import { ModuleRuntimeErrorsModalComponent } from '../ui/module-runtime-errors.modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'module-about',
    template: `
        <section class="space-x-2 flex">
            <div
                class="rounded p-4 border border-base-200 w-1/3 flex-1 inline-grid gap-2"
                [style.gridTemplateColumns]="'4.5rem auto'"
            >
                <ng-container *ngIf="item.notes">
                    <div class="text-sm font-medium flex items-center">
                        {{ 'MODULES.NOTES' | translate }}
                    </div>
                    <div>{{ item.notes }}</div>
                </ng-container>
                <ng-container *ngIf="item.ip">
                    <div class="text-sm font-medium flex items-center">
                        {{ 'MODULES.IP_ADDRESS' | translate }}
                    </div>
                    <div class="mono">{{ item.ip }}</div>
                </ng-container>
                <ng-container *ngIf="item.port > 1">
                    <div class="text-sm font-medium flex items-center">
                        {{ 'MODULES.PORT_NUMBER' | translate }}
                    </div>
                    <div class="mono">{{ item.port }}</div>
                </ng-container>
                <ng-container *ngIf="item.tls || item.udp">
                    <div class="text-sm font-medium flex items-center">
                        {{ 'MODULES.Protocol' | translate }}
                    </div>
                    <div class="flex items-center">
                        <code *ngIf="item.tls" class="bg-success text-base-100">
                            TLS
                        </code>
                        <code *ngIf="item.udp" class="bg-success text-base-100">
                            UDP
                        </code>
                    </div>
                </ng-container>
                <ng-container *ngIf="driver | async">
                    <div class="text-sm font-medium flex items-center">
                        {{ 'DRIVERS.SINGULAR' | translate }}
                    </div>
                    <a
                        class="underline truncate"
                        [routerLink]="['/drivers', item.driver_id]"
                    >
                        {{
                            (driver | async).name ||
                                '&lt;' +
                                    ('COMMON.BLANK_NAME' | translate) +
                                    '&gt;'
                        }}
                    </a>
                </ng-container>
                <ng-container *ngIf="system | async">
                    <div class="text-sm font-medium flex items-center">
                        {{ 'SYSTEMS.SINGULAR' | translate }}
                    </div>
                    <a
                        class="underline truncate"
                        [routerLink]="[
                            '/systems',
                            (system | async).id,
                            'modules'
                        ]"
                    >
                        {{ (system | async).name }}
                    </a>
                </ng-container>
                <ng-container *ngIf="edge | async">
                    <div class="text-sm font-medium flex items-center">
                        {{ 'COMMON.EDGE' | translate }}
                    </div>
                    <div class="flex items-center">
                        <a
                            class="underline truncate"
                            [routerLink]="['/admin', 'edge', (edge | async).id]"
                        >
                            {{ (edge | async).name }}
                        </a>
                        <div class="flex-1 w-px"></div>
                        <button
                            icon
                            customTooltip
                            [hover]="true"
                            [backdrop]="false"
                            [content]="edge_desc_template"
                            yPosition="top"
                            xPosition="center"
                        >
                            <app-icon
                                *ngIf="(edge | async).description"
                                class="border border-base-200  rounded-full"
                                >info</app-icon
                            >
                        </button>
                    </div>
                    <ng-template #edge_desc_template>
                        <div
                            class="bg-base-100 p-2 rounded max-w-[24rem] pointer-events-none border border-base-200 shadow"
                        >
                            <pre
                                class="text-sm overflow-hidden bg-base-200 p-2 rounded-xl"
                                >{{ (edge | async).description }}</pre
                            >
                        </div>
                    </ng-template>
                </ng-container>
                <div class="text-sm font-medium flex items-center">
                    {{ 'COMMON.CREATED_AT' | translate }}
                </div>
                <div class=" flex items-center">
                    <span
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
                <div class="text-sm font-medium flex items-center">
                    {{ 'COMMON.UPDATED_AT' | translate }}
                </div>
                <div class=" flex items-center">
                    <span
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
                <button
                    btn
                    matRipple
                    class="flex items-center col-span-2 w-full"
                    *ngIf="item.has_runtime_error"
                    (click)="viewErrors()"
                >
                    {{ 'MODULES.RUNTIME_ERRORS_VIEW' | translate }}
                </button>
            </div>
            <div
                class="rounded p-4 border border-base-200 space-y-4 w-1/3 flex-1 flex flex-col"
            >
                <h3 class="w-full text-center mono uppercase">
                    Module Controls
                </h3>
                <div class="flex items-center space-x-4">
                    <button
                        btn
                        class="flex-1"
                        [disabled]="item.running || stopping"
                        (click)="toggleModuleState()"
                    >
                        <div class="text" *ngIf="!stopping">
                            {{ 'MODULES.START' | translate }}
                        </div>
                        <mat-spinner
                            diameter="32"
                            *ngIf="stopping"
                        ></mat-spinner>
                    </button>
                    <button
                        btn
                        class="flex-1 inverse error"
                        [disabled]="!item.running || stopping"
                        (click)="toggleModuleState()"
                    >
                        <div class="text" *ngIf="!stopping">
                            {{ 'MODULES.STOP' | translate }}
                        </div>
                        <mat-spinner
                            diameter="32"
                            *ngIf="stopping"
                        ></mat-spinner>
                    </button>
                </div>
            </div>
        </section>
        <hr class="my-4" />
        <header class="font-medium text-lg">
            {{ 'COMMON.SETTINGS' | translate }}
        </header>
        <section
            *ngIf="item.settings && (other_settings | async); else load_state"
        >
            <a-settings-form
                [id]="item.id"
                [merge]="true"
                [settings]="item.settings"
                [merge_settings]="(other_settings | async) || []"
            ></a-settings-form>
        </section>
        <ng-template #load_state>
            <div class="p-8 flex flex-col items-center justify-center m-auto">
                <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                <p>{{ 'MODULES.LOADING_SETTINGS' | translate }}</p>
            </div>
        </ng-template>
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
})
export class ModuleAboutComponent {
    /** Driver for the active item */
    public readonly driver = this._service.driver;
    /** Control System for the active item */
    public readonly system = this._service.system;
    /** Edge node for the active item */
    public readonly edge = this._service.edge;
    /** List of settings for associated modules, drivers and zones */
    public readonly other_settings = this._service.associated_settings;
    /** Whether module is being stopped */
    public stopping: boolean;

    public get item(): PlaceModule {
        return this._service.active_item as any;
    }

    constructor(
        private _service: ModuleStateService,
        private _dialog: MatDialog
    ) {}

    public async toggleModuleState() {
        this.stopping = true;
        await this._service.toggleModuleState();
        this.stopping = false;
    }

    public viewErrors() {
        this._dialog.open<ModuleRuntimeErrorsModalComponent>(
            ModuleRuntimeErrorsModalComponent,
            { data: this.item.id }
        );
    }
}
