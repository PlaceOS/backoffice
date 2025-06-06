import { Component } from '@angular/core';
import { PlaceDriver } from '@placeos/ts-client';
import { marked } from 'marked';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-about',
    template: `
        <section
            class="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
        >
            <div
                class="inline-grid flex-1 gap-2 rounded border border-base-200 p-4 sm:w-1/3"
                [style.gridTemplateColumns]="'6rem auto'"
            >
                <ng-container *ngIf="item.default_uri">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'DRIVERS.DEFAULT_URI' | translate }}
                    </div>
                    <div class="select-all overflow-hidden underline">
                        <a
                            class="mono block w-full truncate text-sm"
                            [href]="item.default_uri | safe: 'url'"
                            target="_blank"
                            >{{ item.default_uri }}</a
                        >
                    </div>
                </ng-container>
                <ng-container *ngIf="item.default_port">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                    </div>
                    <div class="mono text-sm">{{ item.default_port }}</div>
                </ng-container>
                <div class="flex items-center text-sm font-medium">
                    {{ 'REPOS.SINGULAR' | translate }}
                </div>
                <div>
                    <a
                        [routerLink]="[
                            '/repositories',
                            item.repository_id,
                            'about',
                        ]"
                        class="mono text-sm underline"
                    >
                        {{ item.repository_id }}</a
                    >
                </div>
                <div class="flex items-center text-sm font-medium">
                    {{ 'DRIVERS.MODULE_NAME' | translate }}
                </div>
                <div class="mono truncate text-sm">{{ item?.module_name }}</div>
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.CREATED_AT' | translate }}
                </div>
                <div class="flex items-center">
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
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.UPDATED_AT' | translate }}
                </div>
                <div class="flex items-center">
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
                class="inline-grid flex-1 gap-2 rounded border border-base-200 p-4 sm:w-1/3"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div class="flex items-center text-sm font-medium">
                    {{ 'DRIVERS.COMPILED' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    @let is_compiled = compiled | async;
                    <div
                        class="rounded-2xl px-2 py-1 text-xs shadow"
                        [class.bg-success]="is_compiled"
                        [class.text-success-content]="is_compiled"
                        [class.bg-error]="!is_compiled"
                        [class.text-error-content]="!is_compiled"
                    >
                        {{
                            (is_compiled ? 'COMMON.TRUE' : 'COMMON.FALSE')
                                | translate
                        }}
                    </div>
                    <mat-spinner
                        diameter="24"
                        *ngIf="!is_compiled"
                    ></mat-spinner>
                    <button
                        btn
                        *ngIf="compilation_error | async"
                        (click)="viewErrors()"
                    >
                        {{ 'DRIVERS.VIEW_ERRORS' | translate }}
                    </button>
                </div>
                <div class="flex items-center text-sm font-medium">Commit</div>
                <div class="flex items-center overflow-hidden">
                    <code
                        class="inline-block max-w-full truncate text-xs"
                        [matTooltip]="item.commit"
                    >
                        {{ item.commit }}
                    </code>
                </div>
                <div class="flex items-center text-sm font-medium">
                    {{ 'DRIVERS.FILENAME' | translate }}
                </div>
                <div class="flex items-center overflow-hidden">
                    <div
                        class="mono truncate text-sm"
                        [matTooltip]="item.file_name"
                    >
                        {{ item.file_name }}
                    </div>
                </div>
                <div
                    class="mx-auto mt-2 flex items-center justify-between space-x-2"
                >
                    <button
                        icon
                        matRipple
                        [matTooltip]="'COMMON.UPDATE' | translate"
                        (click)="updateDriver()"
                        class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    >
                        <icon class="text-2xl">update</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="'DRIVERS.RECOMPILE' | translate"
                        (click)="recompile()"
                        class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    >
                        <icon class="text-2xl">build</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="'DRIVERS.RELOAD' | translate"
                        (click)="reload()"
                        class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    >
                        <icon class="text-2xl">refresh</icon>
                    </button>
                </div>
            </div>
        </section>
        @if (item?.description) {
            <hr class="my-4 text-base-300" />
            <div class="w-full rounded border border-base-200">
                <h3 class="w-full rounded bg-base-200 p-4 text-lg font-medium">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description | sanitize"
                ></div>
            </div>
        }
        <hr class="my-4" />
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
                <p>{{ 'DRIVERS.LOADING_SETTINGS' | translate }}</p>
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
    standalone: false,
})
export class DriverAboutComponent {
    public readonly compiled = this._service.is_compiled;
    public readonly compilation_error = this._service.last_error;

    public readonly updateDriver = () => this._service.updateDriver();
    public readonly recompile = () => this._service.recompileDriver();
    public readonly reload = () => this._service.reloadDriver();
    public readonly viewErrors = () => this._service.viewError();

    public get item(): PlaceDriver {
        return (this._service.active_item || {}) as any;
    }

    /** HTML string for rendering the description */
    public get description(): string {
        return marked(this.item.description || '', { async: false }) as string;
    }

    constructor(private _service: DriverStateService) {}
}
