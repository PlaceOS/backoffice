import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
    PlaceTrigger,
    PlaceSystem,
    TriggerComparison,
    TriggerTimeCondition,
    TriggerFunction,
    TriggerMailer,
    querySystems,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'trigger-about',
    template: `
        <section class="flex space-x-2 mb-4">
            <div
                class="rounded p-4 border border-base-200 w-1/3 flex-1 grid gap-2"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div class="text-sm font-medium flex items-center">
                    {{ 'COMMON.CREATED_AT' | translate }}
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
                    {{ 'COMMON.UPDATED_AT' | translate }}
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
        </section>
        <hr class="my-4" />
        <div class="flex flex-col">
            <label
                for="driver"
                matTooltip="System to use for available status variables and function calls"
                >{{ 'TRIGGERS.REFERENCE_SYSTEM' | translate }}
            </label>
            <item-search-field
                [placeholder]="'SYSTEMS.SEARCH' | translate"
                class="w-full"
                [query_fn]="query_fn"
                [(ngModel)]="template_system"
            ></item-search-field>
        </div>
        <header class="flex items-center my-4">
            <div class="font-medium text-lg flex-1">
                {{ 'TRIGGERS.CONDITIONS' | translate }}
            </div>
            <button
                btn
                matRipple
                class="w-48"
                [disabled]="!template_system"
                (click)="editCondition()"
            >
                <app-icon class="text-2xl">add</app-icon>
                <div class="mr-4 ml-2">
                    {{ 'TRIGGERS.CONDITION_ADD' | translate }}
                </div>
            </button>
        </header>
        <section>
            <simple-table
                class="w-full min-w-[32rem] block text-sm mb-4"
                [data]="comparisons || []"
                [columns]="[
                    {
                        key: 'operator',
                        name: 'TRIGGERS.FIELD_VAR_COMPARE' | translate,
                        content: comparison_template
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: actions_template
                    }
                ]"
                [sortable]="true"
                [empty_message]="'TRIGGERS.CONDITION_COMPARE_EMPTY' | translate"
            ></simple-table>
            <simple-table
                class="w-full min-w-[32rem] block text-sm"
                [data]="time_dependents || []"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_TIME_DEPS' | translate,
                        content: time_dep_template
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: actions_template
                    }
                ]"
                [sortable]="true"
                [empty_message]="'TRIGGERS.CONDITION_TIME_EMPTY' | translate"
            ></simple-table>
            <ng-template #time_dep_template let-row="row">
                <div class="flex items-center space-x-2 p-4 mono text-sm">
                    {{ row.type === 'at' ? 'At time' : 'CRON' }}
                    {{ row.type === 'at' ? row.time : row.cron }}
                </div>
            </ng-template>
            <ng-template #comparison_template let-row="row">
                <div class="flex items-center space-x-4 p-4 mono text-xs">
                    <pre>{{ row.left | json }}</pre>
                    <code class="bg-success text-success-content">
                        {{ row.operator }}
                    </code>
                    <pre>{{ row.right | json }}</pre>
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="flex items-center space-x-2 p-2 mx-auto">
                    <button
                        icon
                        matRipple
                        [disabled]="!template_system"
                        (click)="editCondition(row)"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button icon matRipple (click)="removeCondition(row)">
                        <app-icon class="text-error">delete</app-icon>
                    </button>
                </div>
            </ng-template>
        </section>
        <header class="flex items-center space-x-2 my-4">
            <div class="font-medium text-lg flex-1">
                {{ 'TRIGGERS.ACTIONS' | translate }}
            </div>
            <button
                btn
                matRipple
                class="w-48"
                [disabled]="!template_system"
                (click)="editAction()"
            >
                <app-icon class="text-2xl">add</app-icon>
                <div class="mr-4 ml-2">
                    {{ 'TRIGGERS.ACTION_ADD' | translate }}
                </div>
            </button>
        </header>
        <section>
            <simple-table
                class="w-full min-w-[32rem] block text-sm mb-4"
                [data]="functions || []"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_ACTION_FN_CALL' | translate,
                        content: function_call_template
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: fn_actions_template
                    }
                ]"
                [can_reorder]="true"
                (ondrop)="confirmReorder('function', $event)"
                [empty_message]="'TRIGGERS.ACTION_FN_EMPTY' | translate"
            ></simple-table>
            <simple-table
                class="w-full min-w-[32rem] block text-sm mb-4"
                [data]="mailers || []"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_ACTION_EMAIL' | translate,
                        content: email_call_template
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: fn_actions_template
                    }
                ]"
                [can_reorder]="true"
                (ondrop)="confirmReorder('function', $event)"
                [empty_message]="'TRIGGERS.ACTION_EMAIL_EMPTY' | translate"
            ></simple-table>
            <ng-template #function_call_template let-row="row">
                <div class="flex space-x-2 p-4 mono text-xs">
                    <div>
                        <code>{{ row.mod }}</code>
                    </div>
                    <pre>{{ row.method }}({{ row.args | json }})</pre>
                </div>
            </ng-template>
            <ng-template #email_call_template let-row="row">
                <div class="flex items-center space-x-2 p-4">
                    <span [matTooltip]="row.emails | formatList"
                        >{{ row.emails.length }} { row.emails.length, plural, =1
                        { Address } other { Addresses } }</span
                    >&nbsp; | Body Length: {{ row.content.length }}
                </div>
            </ng-template>
            <ng-template #fn_actions_template let-row="row">
                <div class="flex items-center space-x-2 p-2 mx-auto">
                    <button
                        icon
                        matRipple
                        [disabled]="!template_system"
                        (click)="editAction(row)"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button icon matRipple (click)="removeAction(row)">
                        <app-icon class="text-error">delete</app-icon>
                    </button>
                </div>
            </ng-template>
        </section>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class TriggerAboutComponent extends AsyncHandler {
    /** System to use for conditions with systen variables and functions */
    public template_system: PlaceSystem;
    /** List of variable comparison trigger conditions */
    public comparisons: TriggerComparison[] = [];
    /** List of time dependent trigger conditions */
    public time_dependents: TriggerTimeCondition[] = [];
    /** List of function call trigger actions */
    public functions: TriggerFunction[] = [];
    /** List of email trigger actions */
    public mailers: TriggerMailer[] = [];
    /** Query function for systems */
    public readonly query_fn = (_) =>
        querySystems({ q: _ }).pipe(map((resp) => resp.data));

    public readonly editCondition = (c?) =>
        this._service.editCondition(c, this.template_system);
    public readonly removeCondition = (c) => this._service.removeCondition(c);
    public readonly editAction = (a?) =>
        this._service.editAction(a, this.template_system);
    public readonly removeAction = (a) => this._service.removeAction(a);

    public get item(): PlaceTrigger {
        return this._service.active_item as any;
    }

    constructor(private _service: TriggerStateService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                if (item) {
                    this.comparisons = item.conditions?.comparisons || [];
                    this.time_dependents =
                        item.conditions?.time_dependents || [];
                    this.functions = item.actions?.functions || [];
                    this.mailers = item.actions?.mailers || [];
                }
            })
        );
    }
    /**
     * Open confirmation modal for re-ordering action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    public confirmReorder(
        type: 'function' | 'mailer',
        [previous, current]: [number, number]
    ): void {
        if (previous === current) return;
        this._service.reorderAction(type, previous, current);
    }
}
