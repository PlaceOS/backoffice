import { Component, inject } from '@angular/core';

import { HashMap } from '../common/types';

import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from '../ui/controls/progress-bar.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'trigger-systems',
    template: `
        <div class="h-full w-full overflow-auto p-4">
            <app-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.invisible]="!loading()"
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
                        name: 'COMMON.ACTIONS' | translate,
                        hide_name: true,
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
                    [class.bg-base-content]="!row.enabled"
                    [class.bg-success]="row.enabled"
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
                    [appTooltip]="row.zone_id || row.control_system_id"
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
                        default
                        error
                        ripple
                        [appTooltip]="'TRIGGERS.DELETE_INSTANCE' | translate"
                        (click)="deleteTrigger(row)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
        </div>
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
        ProgressBarComponent,
        TooltipDirective,
        IconComponent,
        TranslatePipe,
        SimpleTableComponent,
        RouterModule,
        DateFromPipe,
    ],
})
export class TriggerInstancesComponent {
    private _service = inject(TriggerStateService);

    /** List of systems associated with the trigger */
    public readonly instances = this._service.instances;
    public readonly loading = this._service.loading;
    /** Map of systems ids to connected status */
    public connected: HashMap<boolean> = {};

    public readonly deleteTrigger = (s) =>
        this._service.removeTriggerFromParent(s);
}
