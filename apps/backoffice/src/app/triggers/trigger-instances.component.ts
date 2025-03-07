import { Component } from '@angular/core';
import { PlaceTrigger } from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';

import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'trigger-systems',
    template: `
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!(loading | async)"
        ></mat-progress-bar>
        <simple-table
            class="block min-w-[32rem] text-sm"
            [data]="instances"
            [columns]="[
                {
                    key: 'state',
                    name: 'TRIGGERS.FIELD_STATE' | translate,
                    content: state_template,
                    size: '4rem',
                    sortable: false,
                },
                {
                    key: 'name',
                    name: 'TRIGGERS.FIELD_INSTANCE_NAME' | translate,
                    content: name_template,
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '3.5rem',
                    sortable: false,
                },
            ]"
            [sortable]="true"
            [empty_message]="'TRIGGERS.INSTANCES_EMPTY' | translate"
        ></simple-table>
        <ng-template #state_template let-row="row">
            <div
                class="mx-auto h-2 w-2 rounded-full"
                [class.bg-base-content]="!row.bookable"
                [class.bg-success]="row.bookable"
            ></div>
        </ng-template>
        <ng-template #name_template let-row="row">
            <a
                class="p-4 underline"
                [routerLink]="
                    row.zone_id
                        ? ['/zones', row.zone_id]
                        : ['/systems', row.control_system_id]
                "
                [matTooltip]="row.zone_id || row.control_system_id"
            >
                {{ row.name || row.zone_id || row.control_system_id }}
            </a>
        </ng-template>
        <ng-template #added_template let-row="row">
            <div class="p-4">
                {{ +row.created_at * 1000 | dateFrom }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'TRIGGERS.DELETE_INSTANCE' | translate"
                    (click)="deleteTrigger(item)"
                >
                    <app-icon class="text-error">delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false
})
export class TriggerInstancesComponent {
    /** List of systems associated with the trigger */
    public readonly instances = this._service.instances;
    public readonly loading = this._service.loading;
    /** Map of systems ids to connected status */
    public connected: HashMap<boolean> = {};

    public readonly deleteTrigger = (s) =>
        this._service.removeTriggerFromParent(s);

    public get item(): PlaceTrigger {
        return this._service.active_item as any;
    }

    constructor(private _service: TriggerStateService) {}
}
