import { Component } from '@angular/core';
import { PlaceDriver } from '@placeos/ts-client';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-about',
    template: `
        <section class="mb-4 flex space-x-2">
            <div
                class="rounded p-2 border border-gray-200 dark:border-neutral-500 space-y-2 min-w-[45%] flex-1"
            >
                <div
                    class="flex items-center space-x-2"
                    *ngIf="item.default_uri"
                >
                    <label i18n="@@driverDefaultURILabel">Default URI</label>
                    <div class="value">{{ item.default_uri }}</div>
                </div>
                <div
                    class="flex items-center space-x-2"
                    *ngIf="item.default_port"
                >
                    <label i18n="@@driverDefaultPortLabel">
                        Default Port
                    </label>
                    <div class="value">{{ item.default_port }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@driverDetailsCommit">Repository</label>
                    <div class="value">
                        <a
                            [routerLink]="[
                                '/repositories',
                                item.repository_id,
                                'about'
                            ]"
                            class="underline"
                        >
                            {{ item.repository_id }}</a
                        >
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@driverDetailsModuleName">Module Name</label>
                    <div class="value">{{ item?.module_name }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@driverCreatedAtLabel">Created</label>
                    <div class="value">
                        {{ item.created_at * 1000 | dateFrom }}
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@driverUpdatedAtLabel">Updated</label>
                    <div class="value">
                        {{ item.updated_at * 1000 | dateFrom }}
                    </div>
                </div>
            </div>
            <div
                class="rounded p-2 border border-gray-200 dark:border-neutral-500 space-y-2 min-w-[45%] flex-1 flex flex-col"
            >
                <div class="flex items-center space-x-2">
                    <label i18n="@@driverDetailsCompiled">Compiled</label>
                    <div class="value">
                        {{ (compiled | async) ? 'true' : 'false' }}
                    </div>
                    <mat-spinner
                        diameter="24"
                        *ngIf="!(compiled | async)"
                    ></mat-spinner>
                    <button
                        mat-button
                        *ngIf="compilation_error | async"
                        (click)="viewErrors()"
                    >
                        View Errors
                    </button>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@driverDetailsCommit">Commit</label>
                    <code>{{ item.commit }}</code>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@driverDetailsFileName">File Name</label>
                    <div class="font-mono text-sm truncate" [title]="item.file_name">{{ item.file_name }}</div>
                </div>
                <div class="flex-1"></div>
                <button
                    mat-button
                    (click)="recompileDriver()"
                    i18n="@@driverReloadAction"
                    class="w-full"
                >
                    Recompile Driver
                </button>
            </div>
        </section>
        <hr class="my-4" />
        <header class="font-medium text-lg" i18n="@@settingsLabel">
            Settings
        </header>
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
                height: 100%;
                width: 100%;
            }

            label {
                width: 6rem;
            }
        `,
    ],
})
export class DriverAboutComponent {
    public readonly compiled = this._service.is_compiled;
    public readonly compilation_error = this._service.last_error;

    public readonly recompileDriver = () => this._service.recompileDriver();
    public readonly viewErrors = () => this._service.viewError();

    public get item(): PlaceDriver {
        return (this._service.active_item || {}) as any;
    }

    constructor(private _service: DriverStateService) {}
}
