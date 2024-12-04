import { Component } from '@angular/core';
import { PlaceSystem } from '@placeos/ts-client';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'system-about',
    template: `
        <section class="flex space-x-2 mb-4">
            <div class="flex-1">
                <div
                    class="rounded p-4 border border-base-200 w-full inline-grid gap-2"
                    [style.gridTemplateColumns]="'7.5rem auto'"
                >
                    <ng-container *ngIf="item?.support_url">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'SYSTEMS.SUPPORT_URL' | translate }}:
                        </div>
                        <a
                            class="underline select-all truncate"
                            [href]="item?.support_url"
                            target="_blank"
                        >
                            {{ item?.support_url }}
                        </a>
                    </ng-container>
                    <ng-container *ngIf="item?.email">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'SYSTEMS.BOOKABLE' | translate }}:
                        </div>
                        <div>{{ item?.bookable ? 'Yes' : 'No' }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.email">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'SYSTEMS.PUBLIC' | translate }}:
                        </div>
                        <div>{{ item?.public ? 'Yes' : 'No' }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.code">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'SYSTEMS.CODE' | translate }}:
                        </div>
                        <div>{{ item?.code }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.email">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'SYSTEMS.EMAIL' | translate }}:
                        </div>
                        <a
                            class="underline select-all truncate"
                            [href]="'mailto:' + item?.email"
                            target="_blank"
                            >{{ item?.email }}</a
                        >
                    </ng-container>
                    <ng-container *ngIf="item?.capacity">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'SYSTEMS.CAPACITY' | translate }}:
                        </div>
                        <div>{{ item?.capacity }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.map_id">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'SYSTEMS.MAP_ID' | translate }}:
                        </div>
                        <div class="value mono">{{ item?.map_id }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.installed_ui_devices">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'SYSTEMS.PANEL_COUNT' | translate }}:
                        </div>
                        <div>{{ item?.installed_ui_devices }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.timezone">
                        <div class="text-sm font-medium flex items-center">
                            {{ 'COMMON.TIMEZONE' | translate }}:
                        </div>
                        <div>{{ item?.timezone }}</div>
                    </ng-container>
                    <div class="text-sm font-medium flex items-center">
                        {{ 'COMMON.CREATED_AT' | translate }}:
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
                        {{ 'COMMON.UPDATED_AT' | translate }}:
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
            </div>
            <div
                class="rounded p-4 border border-base-200  space-y-4 w-1/3 flex-1 inline-flex flex-col"
            >
                <h3 class="w-full text-center font-medium mono uppercase">
                    {{ 'SYSTEMS.CONTROLS' | translate }}
                </h3>
                <div class="flex items-center space-x-4">
                    <button
                        btn
                        matRipple
                        start
                        class="flex-1"
                        (click)="start()"
                    >
                        {{ 'SYSTEMS.START' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        stop
                        class="flex-1 inverse error"
                        (click)="stop()"
                    >
                        {{ 'SYSTEMS.STOP' | translate }}
                    </button>
                </div>
            </div>
        </section>
        <hr class="my-4" />
        <header class="font-medium text-lg">
            {{ 'COMMON.SETTINGS' | translate }}
        </header>
        <section *ngIf="item?.settings && other_settings; else load_state">
            <a-settings-form
                [id]="item?.id"
                [merge]="true"
                [settings]="item?.settings"
                [merge_settings]="(other_settings | async) || []"
            ></a-settings-form>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col p-8 items-center justify-center">
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
})
export class SystemAboutComponent {
    /** List of settings for associated modules, drivers and zones */
    public readonly other_settings = this._service.associated_settings;

    public readonly start = () => this._service.startSystem();
    public readonly stop = () => this._service.stopSystem();

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(private _service: SystemStateService) {}
}
