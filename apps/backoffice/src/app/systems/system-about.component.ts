import { Component } from '@angular/core';
import { PlaceSystem } from '@placeos/ts-client';
import { marked } from 'marked';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'system-about',
    template: `
        <section
            class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
        >
            <div class="flex-1">
                <div
                    class="inline-grid w-full gap-2 rounded border border-base-200 p-4"
                    [style.gridTemplateColumns]="'7.5rem auto'"
                >
                    <ng-container *ngIf="item?.support_url">
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.SUPPORT_URL' | translate }}
                        </div>
                        <a
                            class="select-all truncate underline"
                            [href]="item?.support_url"
                            target="_blank"
                        >
                            {{ item?.support_url }}
                        </a>
                    </ng-container>
                    <ng-container *ngIf="item?.email">
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.BOOKABLE' | translate }}
                        </div>
                        <div>
                            {{
                                (item?.bookable
                                    ? 'COMMON.TRUE'
                                    : 'COMMON.FALSE'
                                ) | translate
                            }}
                        </div>
                    </ng-container>
                    <ng-container *ngIf="item?.email">
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.PUBLIC' | translate }}
                        </div>
                        <div>
                            {{
                                (item?.public ? 'COMMON.TRUE' : 'COMMON.FALSE')
                                    | translate
                            }}
                        </div>
                    </ng-container>
                    <ng-container *ngIf="item?.code">
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.CODE' | translate }}
                        </div>
                        <div>{{ item?.code }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.email">
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.EMAIL' | translate }}
                        </div>
                        <a
                            class="select-all truncate underline"
                            [href]="'mailto:' + item?.email"
                            target="_blank"
                            >{{ item?.email }}</a
                        >
                    </ng-container>
                    <ng-container *ngIf="item?.capacity">
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.CAPACITY' | translate }}
                        </div>
                        <div>{{ item?.capacity }}</div>
                    </ng-container>
                    @if (item?.map_id) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.MAP_ID' | translate }}
                        </div>
                        <div class="value mono">{{ item?.map_id }}</div>
                    }
                    @if (item?.installed_ui_devices) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                        </div>
                        <div>{{ item?.installed_ui_devices }}</div>
                    }
                    @if (item?.timezone) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.TIMEZONE' | translate }}
                        </div>
                        <div>{{ item?.timezone }}</div>
                    }
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
            </div>
            <div
                class="inline-flex flex-1 flex-col rounded border border-base-200 sm:w-1/3"
            >
                <h3
                    class="w-full rounded bg-base-200 px-4 py-3 text-lg font-medium"
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
        <hr class="my-4 text-base-300" />
        <section *ngIf="item?.settings && other_settings; else load_state">
            <a-settings-form
                [id]="item?.id"
                [merge]="true"
                [settings]="item?.settings"
                [merge_settings]="(other_settings | async) || []"
            ></a-settings-form>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center p-8">
                <mat-spinner class="mb-4" [diameter]="32"></mat-spinner>
                <p>{{ 'SYSTEMS.LOADING_SETTINGS' | translate }}</p>
            </div>
        </ng-template>
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
    standalone: false,
})
export class SystemAboutComponent {
    /** List of settings for associated modules, drivers and zones */
    public readonly other_settings = this._service.associated_settings;

    public readonly start = () => this._service.startSystem();
    public readonly stop = () => this._service.stopSystem();

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    /** HTML string for rendering the description */
    public get description(): string {
        return marked(this.item.description || '', { async: false }) as string;
    }

    constructor(private _service: SystemStateService) {}
}
