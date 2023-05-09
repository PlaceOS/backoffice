import { Component } from '@angular/core';
import { PlaceTrigger } from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';

import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'trigger-systems',
    template: `
        <div role="table" *ngIf="(instances | async)?.length; else empty_state">
            <div table-head>
                <td class="w-12 h-10"></td>
                <td
                    class="flex-1 h-10 flex items-center px-2"
                    i18n="@@systemTableName"
                >
                    Parent ID
                </td>
                <td
                    class="w-32 h-10 flex items-center px-2"
                    i18n="@@systemTableAdded"
                >
                    Added
                </td>
                <td class="w-12 h-10"></td>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of instances | async">
                    <div class="w-12 flex items-center justify-center">
                        <div
                            class="h-2 w-2 rounded-full bg-black"
                            [class.active]="item.bookable"
                        ></div>
                    </div>
                    <div class="flex-1 p-2">
                        <a
                            *ngIf="item.id"
                            class="underline"
                            [routerLink]="
                                item.zone_id
                                    ? ['/zones', item.zone_id]
                                    : ['/systems', item.control_system_id]
                            "
                            [matTooltip]="
                                item.zone_id || item.control_system_id
                            "
                        >
                            {{
                                item.name ||
                                    item.zone_id ||
                                    item.control_system_id
                            }}
                        </a>
                    </div>
                    <div class="w-32 p-2">
                        {{ +item.created_at * 1000 | dateFrom }}
                    </div>
                    <div class="w-12 flex items-center justify-center">
                        <button mat-icon-button (click)="deleteTrigger(item)">
                            <app-icon className="backoffice-trash"></app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8">
                <div class="text" i18n="@@systemTableEmpty">
                    No instances of trigger
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            .active {
                background-color: var(--success) !important;
            }
        `,
    ],
})
export class TriggerInstancesComponent {
    /** List of systems associated with the trigger */
    public readonly instances = this._service.instances;
    /** Map of systems ids to connected status */
    public connected: HashMap<boolean> = {};

    public readonly deleteTrigger = (s) =>
        this._service.removeTriggerFromParent(s);

    public get item(): PlaceTrigger {
        return this._service.active_item as any;
    }

    constructor(private _service: TriggerStateService) {}
}
