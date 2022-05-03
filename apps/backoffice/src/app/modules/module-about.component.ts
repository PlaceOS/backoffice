import { Component } from '@angular/core';
import { PlaceModule } from '@placeos/ts-client';

import { ModuleStateService } from './module-state.service';

@Component({
    selector: 'module-about',
    template: `
        <section class="space-y-2">
            <div class="flex items-center space-x-2" *ngIf="item.notes">
                <label i18n="@moduleNotesLabel">Notes:</label>
                <div class="value">{{ item.notes }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item.ip">
                <label i18n="@moduleIPLabel">IP:</label>
                <div class="value">{{ item.ip }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item.port">
                <label i18n="@modulePortLabel">Port:</label>
                <div class="value">{{ item.port }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@moduleTLSLabel">TLS:</label>
                <div class="value">{{ item.tls }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@moduleUDPLabel">UDP:</label>
                <div class="value">{{ item.udp }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item.created_at">
                <label i18n="@@moduleCreatedAtLabel">Created:</label>
                <div class="value">{{ item.created_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item.updated_at">
                <label i18n="@moduleUpdatedAtLabel">Updated:</label>
                <div class="value">{{ item.updated_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="driver | async">
                <label i18n="@moduleUpdatedAtLabel">Driver:</label>
                <a class="underline" [routerLink]="['/drivers', item.driver_id]">
                    {{ (driver | async).name || '&lt;Unnamed&gt;' }}
                </a>
            </div>
            <div class="flex items-center space-x-2" *ngIf="system | async">
                <label i18n="@moduleUpdatedAtLabel">Logic for system:</label>
                <a class="underline" [routerLink]="['/systems', (system | async).id, 'modules']">
                    {{ (system | async).name }}
                </a>
            </div>
        </section>
        <hr class="my-4" />
        <section>
            <button mat-button class="w-32" [disabled]="stopping" (click)="toggleModuleState()">
                <div class="text" *ngIf="!stopping" i18n="@@moduleStateToggle">
                    { item.running, select, true { Stop Module } false { Start Module } }
                </div>
                <mat-spinner diameter="32" *ngIf="stopping"></mat-spinner>
            </button>
        </section>
        <hr class="my-4" />
        <header class="font-medium text-lg" i18n="@@settingsLabel">Settings</header>
        <section *ngIf="item.settings && (other_settings | async); else load_state">
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
                <p i18n="@@moduleDetailsLoading">Loading module settings...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class ModuleAboutComponent {
    /** Driver for the active item */
    public readonly driver = this._service.driver;
    /** Control System for the active item */
    public readonly system = this._service.system;
    /** List of settings for associated modules, drivers and zones */
    public readonly other_settings = this._service.associated_settings;
    /** Whether module is being stopped */
    public stopping: boolean;

    public get item(): PlaceModule {
        return this._service.active_item as any;
    }

    constructor(private _service: ModuleStateService) {}

    public async toggleModuleState() {
        this.stopping = true;
        await this._service.toggleModuleState();
        this.stopping = false;
    }
}
