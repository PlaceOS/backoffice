import { Component, inject, OnInit, signal } from '@angular/core';
import { PlaceTrigger } from '@placeos/ts-client';

import { HashMap } from '../common/types';

import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AsyncHandler } from '../common/async-handler.class';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'trigger-systems',
    template: `
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!loading()"
        />
        <simple-table
            class="block min-w-lg text-sm"
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
        />
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
                    <icon class="text-error">delete</icon>
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
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        SimpleTableComponent,
        MatProgressBarModule,
        RouterModule,
        MatTooltipModule,
        DateFromPipe,
    ],
})
export class TriggerInstancesComponent extends AsyncHandler implements OnInit {
    private _service = inject(TriggerStateService);

    /** List of systems associated with the trigger */
    public readonly instances = this._service.instances;
    public readonly loading = signal(false);
    /** Map of systems ids to connected status */
    public connected: HashMap<boolean> = {};

    public readonly deleteTrigger = (s) =>
        this._service.removeTriggerFromParent(s);

    public ngOnInit() {
        this.subscription(
            'loading',
            this._service.loading.subscribe((l) => this.loading.set(l)),
        );
    }

    public get item(): PlaceTrigger {
        return this._service.active_item as any;
    }
}
