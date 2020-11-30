import { Component } from '@angular/core';
import { PlaceDriver } from '@placeos/ts-client';

import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-about',
    template: `
        <section class="mb-4 space-y-2">
            <div class="flex items-center space-x-2" *ngIf="item.default_uri">
                <label i18n="@@driverDefaultURILabel">Default URI:</label>
                <div class="value">{{ item.default_uri }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item.default_port">
                <label i18n="@@driverDefaultPortLabel">Default Port Number:</label>
                <div class="value">{{ item.default_port }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@driverDetailsCompiled">Compiled:</label>
                <div class="value">{{ compiled || 'false' }}</div>
                <mat-spinner diameter="24" *ngIf="!compiled"></mat-spinner>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@driverDetailsCommit">Commit:</label>
                <div class="value">{{ item.commit }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@driverDetailsFileName">File Name:</label>
                <div class="value">{{ item.file_name }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@driverDetailsModuleName">Module Name:</label>
                <div class="value">{{ item?.module_name }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@driverCreatedAtLabel">Created:</label>
                <div class="value">{{ item.created_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@driverUpdatedAtLabel">Updated:</label>
                <div class="value">{{ item.updated_at * 1000 | dateFrom }}</div>
            </div>
        </section>
        <section>
            <button mat-button (click)="recompileDriver()" i18n="@@driverReloadAction">
                Recompile Driver
            </button>
        </section>
        <hr class="my-4" />
        <header class="font-medium text-lg" i18n="@@settingsLabel">Settings</header>
        <section *ngIf="item.settings; else load_state">
            <a-settings-form
                [merge]="true"
                [id]="item.id"
                [settings]="item.settings"
            ></a-settings-form>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center">
                <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                <p i18n="@@driverLoadingLabel">Loading driver settings...</p>
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
export class DriverAboutComponent {
    /** Whether driver has a compiled binary on the server */
    public compiled: boolean;

    public readonly is_compiled = this._service.is_compiled;

    public readonly recompileDriver = () => this._service.recompileDriver();

    public get item(): PlaceDriver {
        return (this._service.active_item || {}) as any;
    }

    constructor(private _service: DriverStateService) {}
}
