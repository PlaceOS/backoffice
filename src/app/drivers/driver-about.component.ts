import { Clipboard } from '@angular/cdk/clipboard';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { i18n } from '../common/locale.service';
import { notifyInfo } from '../common/notifications';
import { SettingsFormComponent } from '../ui/forms/settings-form.component';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { SafePipe } from '../ui/pipes/safe.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-about',
    template: `
        <div class="p-4">
            <section
                class="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
            >
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="border-base-200 grid gap-2 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'6rem auto'"
                    >
                        @if (item().default_uri) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.DEFAULT_URI' | translate }}
                            </div>
                            <div class="overflow-hidden underline select-all">
                                <a
                                    class="mono block w-full truncate text-sm"
                                    [href]="item().default_uri | safe: 'url'"
                                    target="_blank"
                                    >{{ item().default_uri }}</a
                                >
                            </div>
                        }
                        @if (item().default_port) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                            </div>
                            <div class="mono text-sm select-text">
                                {{ item().default_port }}
                            </div>
                        }
                        <div class="flex items-center text-sm font-medium">
                            {{ 'REPOS.SINGULAR' | translate }}
                        </div>
                        <div>
                            <a
                                [routerLink]="[
                                    '/repositories',
                                    item().repository_id,
                                    'about',
                                ]"
                                class="mono text-sm underline select-text"
                            >
                                {{ item().repository_id }}</a
                            >
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.MODULE_NAME' | translate }}
                        </div>
                        <div class="mono truncate text-sm select-text">
                            {{ item()?.module_name }}
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.CREATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                class="select-text"
                                [matTooltip]="
                                    (item().created_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().created_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item().created_at * 1000 | dateFrom }}
                            </span>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.UPDATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                class="select-text"
                                [matTooltip]="
                                    (item().updated_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().updated_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item().updated_at * 1000 | dateFrom }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="border-base-200 grid gap-2 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'5.5rem auto'"
                    >
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.GIT_COMMIT' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <button matRipple (click)="copyCommit()">
                                <code
                                    class="inline-block max-w-full truncate text-xs select-all"
                                    [matTooltip]="item().commit"
                                >
                                    {{ item().commit }}
                                </code>
                            </button>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.FILENAME' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <div
                                class="mono truncate text-sm select-text"
                                [matTooltip]="item().file_name"
                            >
                                {{ item().file_name }}
                            </div>
                        </div>
                        <div
                            class="mx-auto mt-2 flex items-center justify-between space-x-2"
                        >
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="'COMMON.UPDATE' | translate"
                                (click)="updateDriver()"
                            >
                                <icon>update</icon>
                            </button>
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="'DRIVERS.RECOMPILE' | translate"
                                (click)="recompile()"
                            >
                                <icon>build</icon>
                            </button>
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="'DRIVERS.RELOAD' | translate"
                                (click)="reload()"
                            >
                                <icon>refresh</icon>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            @if (item()?.description) {
                <hr class="text-base-300 my-4" />
                <div class="border-base-200 w-full rounded-sm border">
                    <h3
                        class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown selectable w-full overflow-auto p-4 text-sm"
                        [innerHTML]="item()?.description | markdown | async"
                    ></div>
                </div>
            }
            <hr class="my-4" />
            @if (item().settings) {
                <section>
                    <a-settings-form
                        [merge]="true"
                        [id]="item().id"
                        [settings]="item().settings"
                    />
                </section>
            } @else {
                <div class="flex flex-col items-center justify-center">
                    <mat-spinner class="mb-4" diameter="48" />
                    <p>{{ 'DRIVERS.LOADING_SETTINGS' | translate }}</p>
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
                width: 6rem;
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        SettingsFormComponent,
        MatTooltipModule,
        DateFromPipe,
        MarkdownPipe,
        RouterModule,
        SafePipe,
        MatProgressSpinnerModule,
        AsyncPipe,
        DatePipe,
    ],
})
export class DriverAboutComponent {
    private _service = inject(DriverStateService);
    private _clipboard = inject(Clipboard);

    public readonly updateDriver = () => this._service.updateDriver();
    public readonly recompile = () => this._service.recompileDriver();
    public readonly reload = () => this._service.reloadDriver();
    public readonly viewErrors = () => this._service.viewError();

    public readonly item = this._service.item;
    public copyCommit(): void {
        this._clipboard.copy(this.item()?.commit || '');
        notifyInfo(i18n('COMMON.COMMIT_HASH_COPIED'));
    }
}
