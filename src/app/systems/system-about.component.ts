import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsFormComponent } from '../ui/forms/settings-form.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'system-about',
    template: `
        <div class="p-4">
            <section
                class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
            >
                <div class="flex-1">
                    <div
                        class="border-base-200 grid w-full gap-2 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'7.5rem auto'"
                    >
                        @if (item()?.support_url) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.SUPPORT_URL' | translate }}
                            </div>
                            <a
                                class="truncate underline select-all"
                                [href]="
                                    $safeNavigationMigration(
                                        item()?.support_url
                                    )
                                "
                                target="_blank"
                            >
                                {{ item()?.support_url }}
                            </a>
                        }
                        @if (item()?.email) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.BOOKABLE' | translate }}
                            </div>
                            <div>
                                {{
                                    (item()?.bookable
                                        ? 'COMMON.TRUE'
                                        : 'COMMON.FALSE'
                                    ) | translate
                                }}
                            </div>
                        }
                        @if (item()?.signage) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.SIGNAGE' | translate }}
                            </div>
                            <div>
                                {{ 'COMMON.TRUE' | translate }}
                            </div>
                        }
                        @if (item()?.email) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.PUBLIC' | translate }}
                            </div>
                            <div>
                                {{
                                    (item()?.public
                                        ? 'COMMON.TRUE'
                                        : 'COMMON.FALSE'
                                    ) | translate
                                }}
                            </div>
                        }
                        @if (item()?.code) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.CODE' | translate }}
                            </div>
                            <div>{{ item()?.code }}</div>
                        }
                        @if (item()?.security_groups?.length) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.SECURITY_GROUPS' | translate }}
                            </div>
                            <div class="flex flex-wrap gap-1">
                                @for (
                                    group of item()?.security_groups;
                                    track group
                                ) {
                                    <span
                                        class="bg-base-200 rounded px-2 py-1 text-xs font-medium"
                                    >
                                        {{ group }}
                                    </span>
                                }
                            </div>
                        }
                        @if (item()?.email) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.EMAIL' | translate }}
                            </div>
                            <a
                                class="truncate underline select-all"
                                [href]="
                                    'mailto:' +
                                    $safeNavigationMigration(item()?.email)
                                "
                                target="_blank"
                                >{{ item()?.email }}</a
                            >
                        }
                        @if (item()?.capacity) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.CAPACITY' | translate }}
                            </div>
                            <div>{{ item()?.capacity }}</div>
                        }
                        @if (item()?.map_id) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.MAP_ID' | translate }}
                            </div>
                            <div class="value mono">{{ item()?.map_id }}</div>
                        }
                        @if (item()?.installed_ui_devices) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                            </div>
                            <div>{{ item()?.installed_ui_devices }}</div>
                        }
                        @if (item()?.timezone) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </div>
                            <div>{{ item()?.timezone }}</div>
                        }
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
                <div class="flex-1">
                    <div
                        class="border-base-200 flex flex-col rounded-sm border"
                    >
                        <h3
                            class="bg-base-200 w-full rounded-sm px-4 py-3 text-lg font-medium"
                        >
                            {{ 'SYSTEMS.CONTROLS' | translate }}
                        </h3>
                        <div class="flex flex-wrap items-center p-1">
                            <button
                                btn
                                start
                                matRipple
                                class="m-1 min-w-36 flex-1"
                                (click)="start()"
                            >
                                {{ 'SYSTEMS.START' | translate }}
                            </button>
                            <button
                                btn
                                stop
                                matRipple
                                class="inverse error m-1 min-w-36 flex-1"
                                (click)="stop()"
                            >
                                {{ 'SYSTEMS.STOP' | translate }}
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
                        class="markdown w-full overflow-auto p-4 text-sm"
                        [innerHTML]="
                            $safeNavigationMigration(item()?.description)
                                | markdown
                                | async
                        "
                    ></div>
                </div>
            }
            <hr class="text-base-300 my-4" />
            @let other_settings_value = other_settings();
            @if (item()?.settings && other_settings_value) {
                <section>
                    <a-settings-form
                        [id]="$safeNavigationMigration(item()?.id)"
                        [merge]="true"
                        [settings]="$safeNavigationMigration(item()?.settings)"
                        [merge_settings]="other_settings_value || []"
                    ></a-settings-form>
                </section>
            } @else {
                <div class="flex flex-col items-center justify-center p-8">
                    <mat-spinner class="mb-4" [diameter]="32"></mat-spinner>
                    <p>{{ 'SYSTEMS.LOADING_SETTINGS' | translate }}</p>
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

            button {
                min-width: 8rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        DateFromPipe,
        MarkdownPipe,
        MatProgressSpinnerModule,
        SettingsFormComponent,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class SystemAboutComponent {
    private _service = inject(SystemStateService);

    /** List of settings for associated modules, drivers and zones */
    public readonly other_settings = this._service.associated_settings;

    public readonly start = () => this._service.startSystem();
    public readonly stop = () => this._service.stopSystem();

    public readonly item = this._service.item;
}
