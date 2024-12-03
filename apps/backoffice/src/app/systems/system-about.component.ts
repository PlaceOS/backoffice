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
                            Support URL:
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
                            Bookable Room:
                        </div>
                        <div>{{ item?.bookable ? 'Yes' : 'No' }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.email">
                        <div class="text-sm font-medium flex items-center">
                            Publicly Available:
                        </div>
                        <div>{{ item?.public ? 'Yes' : 'No' }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.code">
                        <div class="text-sm font-medium flex items-center">
                            Code:
                        </div>
                        <div>{{ item?.code }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.email">
                        <div class="text-sm font-medium flex items-center">
                            Email:
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
                            Capacity:
                        </div>
                        <div>{{ item?.capacity }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.map_id">
                        <div class="text-sm font-medium flex items-center">
                            Map ID:
                        </div>
                        <div class="value mono">{{ item?.map_id }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.installed_ui_devices">
                        <div class="text-sm font-medium flex items-center">
                            Installed Touch Panels:
                        </div>
                        <div>{{ item?.installed_ui_devices }}</div>
                    </ng-container>
                    <ng-container *ngIf="item?.timezone">
                        <div class="text-sm font-medium flex items-center">
                            Timezone:
                        </div>
                        <div>{{ item?.timezone }}</div>
                    </ng-container>
                    <div class="text-sm font-medium flex items-center">
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
                    <div class="text-sm font-medium flex items-center">
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
            </div>
            <div
                class="rounded p-4 border border-base-200  space-y-4 w-1/3 flex-1 inline-flex flex-col"
            >
                <h3 class="w-full text-center font-medium mono uppercase">
                    System Controls
                </h3>
                <button btn start class="w-full" (click)="start()">
                    Start System
                </button>
                <button btn stop class="w-full" (click)="stop()">
                    Stop System
                </button>
            </div>
        </section>
        <hr class="my-4" />
        <header class="font-medium text-lg">Settings</header>
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
                <p>Loading system settings...</p>
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
