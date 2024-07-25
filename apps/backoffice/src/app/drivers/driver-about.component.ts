import { Component } from '@angular/core';
import { PlaceDriver } from '@placeos/ts-client';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-about',
    template: `
        <section class="mb-4 flex space-x-2">
            <div
                class="rounded p-4 border border-base-200 w-1/3 flex-1 inline-grid gap-2"
                [style.gridTemplateColumns]="'6rem auto'"
            >
                <ng-container *ngIf="item.default_uri">
                    <div
                        class="text-sm font-medium flex items-center"
                        i18n="@@driverDefaultURILabel"
                    >
                        Default URI
                    </div>
                    <div class="underline select-all overflow-hidden">
                        <a
                            class="truncate w-full block mono text-sm"
                            [href]="item.default_uri | safe: 'url'"
                            target="_blank"
                            >{{ item.default_uri }}</a
                        >
                    </div>
                </ng-container>
                <ng-container *ngIf="item.default_port">
                    <div
                        class="text-sm font-medium flex items-center"
                        i18n="@@driverDefaultPortLabel"
                    >
                        Default Port
                    </div>
                    <div class="mono text-sm">{{ item.default_port }}</div>
                </ng-container>
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@driverDetailsCommit"
                >
                    Repository
                </div>
                <div>
                    <a
                        [routerLink]="[
                            '/repositories',
                            item.repository_id,
                            'about'
                        ]"
                        class="underline mono text-sm"
                    >
                        {{ item.repository_id }}</a
                    >
                </div>
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@driverDetailsModuleName"
                >
                    Module Name
                </div>
                <div class="mono text-sm truncate">{{ item?.module_name }}</div>
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@repoCreatedAtLabel"
                >
                    Created:
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
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@repoUpdatedAtLabel"
                >
                    Updated:
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
            </div>
            <div
                class="rounded p-4 border border-base-200 flex-1 w-1/3 inline-grid gap-2"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@driverDetailsCompiled"
                >
                    Compiled
                </div>
                <div class="flex items-center">
                    <div>
                        {{ (compiled | async) ? 'Yes' : 'No' }}
                    </div>
                    <mat-spinner
                        diameter="24"
                        *ngIf="!(compiled | async)"
                    ></mat-spinner>
                    <button
                        btn
                        *ngIf="compilation_error | async"
                        (click)="viewErrors()"
                    >
                        View Errors
                    </button>
                </div>
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@driverDetailsCommit"
                >
                    Commit
                </div>
                <div class="flex items-center overflow-hidden">
                    <code
                        class="text-xs truncate inline-block max-w-full"
                        [matTooltip]="item.commit"
                    >
                        {{ item.commit }}
                    </code>
                </div>
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@driverDetailsFileName"
                >
                    File Name
                </div>
                <div class="flex items-center overflow-hidden">
                    <div
                        class="mono text-sm truncate"
                        [matTooltip]="item.file_name"
                    >
                        {{ item.file_name }}
                    </div>
                </div>
                <button
                    btn
                    (click)="updateDriver()"
                    i18n="@@driverReloadAction"
                    class="col-span-2"
                    *ngIf="
                        item.update_available &&
                        item.commit !== item.update_info.commit
                    "
                >
                    Update Driver
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
    public readonly updateDriver = () => this._service.updateDriver();
    public readonly viewErrors = () => this._service.viewError();

    public get item(): PlaceDriver {
        return (this._service.active_item || {}) as any;
    }

    constructor(private _service: DriverStateService) {}
}
