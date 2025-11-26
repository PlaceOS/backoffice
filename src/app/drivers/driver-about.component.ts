import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceDriver } from '@placeos/ts-client';
import { marked } from 'marked';
import { AsyncHandler } from '../common/async-handler.class';
import { i18n } from '../common/locale.service';
import { notifyInfo } from '../common/notifications';
import { SettingsFormComponent } from '../ui/forms/settings-form.component';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SafePipe } from '../ui/pipes/safe.pipe';
import { SanitizePipe } from '../ui/pipes/sanitise.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-about',
    template: `
        <div class="p-4">
            <section
                class="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
            >
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="grid gap-2 rounded-sm border border-base-200 p-4"
                        [style.gridTemplateColumns]="'6rem auto'"
                    >
                        @if (item().default_uri) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.DEFAULT_URI' | translate }}
                            </div>
                            <div class="select-all overflow-hidden underline">
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
                            <div class="mono text-sm">
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
                                class="mono text-sm underline"
                            >
                                {{ item().repository_id }}</a
                            >
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.MODULE_NAME' | translate }}
                        </div>
                        <div class="mono truncate text-sm">
                            {{ item()?.module_name }}
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.CREATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
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
                        class="grid gap-4 rounded-sm border border-base-200 p-4"
                        [style.gridTemplateColumns]="'5.5rem auto'"
                    >
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.GIT_COMMIT' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <button matRipple (click)="copyCommit()">
                                <code
                                    class="inline-block max-w-full select-all truncate text-xs"
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
                                class="mono truncate text-sm"
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
                                matRipple
                                [matTooltip]="'COMMON.UPDATE' | translate"
                                (click)="updateDriver()"
                                class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                            >
                                <icon class="text-2xl">update</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="'DRIVERS.RECOMPILE' | translate"
                                (click)="recompile()"
                                class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                            >
                                <icon class="text-2xl">build</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="'DRIVERS.RELOAD' | translate"
                                (click)="reload()"
                                class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                            >
                                <icon class="text-2xl">refresh</icon>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            @if (item()?.description) {
                <hr class="my-4 text-base-300" />
                <div class="w-full rounded-sm border border-base-200">
                    <h3
                        class="w-full rounded-sm bg-base-200 p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown w-full overflow-auto p-4 text-sm"
                        [innerHTML]="description() | sanitize"
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
                    ></a-settings-form>
                </section>
            } @else {
                <div class="flex flex-col items-center justify-center">
                    <mat-spinner class="mb-4" diameter="48"></mat-spinner>
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
        SanitizePipe,
        MatTooltipModule,
        CommonModule,
        DateFromPipe,
        RouterModule,
        SafePipe,
        MatProgressSpinnerModule,
    ],
})
export class DriverAboutComponent extends AsyncHandler implements OnInit {
    private _service = inject(DriverStateService);
    private _clipboard = inject(Clipboard);

    public readonly updateDriver = () => this._service.updateDriver();
    public readonly recompile = () => this._service.recompileDriver();
    public readonly reload = () => this._service.reloadDriver();
    public readonly viewErrors = () => this._service.viewError();

    public readonly item = signal<PlaceDriver | undefined>(undefined);
    /** HTML string for rendering the description */
    public readonly description = computed(() =>
        marked(this.item().description || '', { async: false }),
    );

    public ngOnInit() {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => this.item.set(item as any)),
        );
    }

    public copyCommit(): void {
        this._clipboard.copy(this.item().commit);
        notifyInfo(i18n('COMMON.COMMIT_HASH_COPIED'));
    }
}
