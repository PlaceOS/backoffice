import { Component, computed, inject, signal } from '@angular/core';
import {
    PlaceSystem,
    PlaceTrigger,
    TriggerComparison,
    TriggerFunction,
    TriggerMailer,
    TriggerTimeCondition,
    querySystems,
} from '@placeos/ts-client';
import { toSignal } from '../common/signals';

import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler } from '../common/async-handler.class';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { FormatListPipe } from '../ui/pipes/format-list.pipe';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'trigger-about',
    template: `
        <section class="mb-4 flex space-x-2">
            <div
                class="border-base-200 grid w-1/3 flex-1 gap-2 rounded-sm border p-4"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
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
        </section>
        @if (item?.description) {
            <hr class="text-base-300 my-4" />
            <div class="border-base-200 w-full rounded-sm border">
                <h3
                    class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                >
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="item.description | markdown | async"
                ></div>
            </div>
        }
        <hr class="my-4" />
        <div class="flex flex-col">
            <label
                for="driver"
                class="max-w-[50%]"
                [matTooltip]="'TRIGGERS.REFERENCE_SYSTEM_MSG' | translate"
            >
                {{ 'TRIGGERS.REFERENCE_SYSTEM' | translate }}
            </label>
            <item-search-field
                [placeholder]="'SYSTEMS.SEARCH' | translate"
                class="w-full"
                [query_fn]="query_fn"
                [(ngModel)]="template_system"
            ></item-search-field>
        </div>
        <header class="my-4 flex items-center">
            <div class="flex-1 text-lg font-medium">
                {{ 'TRIGGERS.CONDITIONS' | translate }}
            </div>
            <button
                icon
                default
                matRipple
                [disabled]="!template_system()"
                (click)="editCondition()"
                [matTooltip]="'TRIGGERS.CONDITION_ADD' | translate"
                matTooltipPosition="left"
            >
                <icon>add</icon>
            </button>
        </header>
        <section>
            <simple-table
                class="mb-4 block w-full min-w-lg text-sm"
                [data]="comparisons()"
                [columns]="[
                    {
                        key: 'operator',
                        name: 'TRIGGERS.FIELD_VAR_COMPARE' | translate,
                        content: comparison_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: actions_template,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'TRIGGERS.CONDITION_COMPARE_EMPTY' | translate"
            ></simple-table>
            <simple-table
                class="block w-full min-w-lg text-sm"
                [data]="time_dependents()"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_TIME_DEPS' | translate,
                        content: time_dep_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: actions_template,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'TRIGGERS.CONDITION_TIME_EMPTY' | translate"
            ></simple-table>
            <ng-template #time_dep_template let-row="row">
                <div class="mono flex items-center space-x-2 p-4 text-sm">
                    {{ row.type === 'at' ? 'At time' : 'CRON' }}
                    {{ row.type === 'at' ? row.time : row.cron }}
                </div>
            </ng-template>
            <ng-template #comparison_template let-row="row">
                <div class="mono flex items-center space-x-4 p-4 text-xs">
                    <pre>{{ row.left | json }}</pre>
                    <code class="bg-success text-success-content">
                        {{ row.operator }}
                    </code>
                    <pre>{{ row.right | json }}</pre>
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="mx-auto flex items-center space-x-2 p-2">
                    <button
                        icon
                        default
                        matRipple
                        [disabled]="!template_system()"
                        (click)="editCondition(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        error
                        matRipple
                        (click)="removeCondition(row)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
        </section>
        <header class="my-4 flex items-center space-x-2">
            <div class="flex-1 text-lg font-medium">
                {{ 'TRIGGERS.ACTIONS' | translate }}
            </div>
            <button
                icon
                default
                matRipple
                [disabled]="!template_system()"
                (click)="editAction()"
                [matTooltip]="'TRIGGERS.ACTION_ADD' | translate"
                matTooltipPosition="left"
            >
                <icon>add</icon>
            </button>
        </header>
        <section>
            <simple-table
                class="mb-4 block w-full min-w-lg text-sm"
                [data]="functions()"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_ACTION_FN_CALL' | translate,
                        content: function_call_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: fn_actions_template,
                    },
                ]"
                [can_reorder]="true"
                (ondrop)="confirmReorder('function', $event)"
                [empty_message]="'TRIGGERS.ACTION_FN_EMPTY' | translate"
            ></simple-table>
            <simple-table
                class="mb-4 block w-full min-w-lg text-sm"
                [data]="mailers()"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_ACTION_EMAIL' | translate,
                        content: email_call_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: fn_actions_template,
                    },
                ]"
                [can_reorder]="true"
                (ondrop)="confirmReorder('function', $event)"
                [empty_message]="'TRIGGERS.ACTION_EMAIL_EMPTY' | translate"
            ></simple-table>
            <ng-template #function_call_template let-row="row">
                <div class="mono flex space-x-2 p-4 text-xs">
                    <div>
                        <code>{{ row.mod }}</code>
                    </div>
                    <pre>{{ row.method }}({{ row.args | json }})</pre>
                </div>
            </ng-template>
            <ng-template #email_call_template let-row="row">
                <div class="flex items-center space-x-2 p-4">
                    <span [matTooltip]="row.emails | formatList"
                        >{{ row.emails.length }} Address(es)</span
                    >&nbsp; | Body Length: {{ row.content.length }}
                </div>
            </ng-template>
            <ng-template #fn_actions_template let-row="row">
                <div class="mx-auto flex items-center space-x-2 p-2">
                    <button
                        icon
                        default
                        matRipple
                        [disabled]="!template_system()"
                        (click)="editAction(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        error
                        matRipple
                        (click)="removeAction(row)"
                    >
                        <icon>delete</icon>
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
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        FormatListPipe,
        SimpleTableComponent,
        ItemSearchFieldComponent,
        FormsModule,
        DateFromPipe,
        MarkdownPipe,
        AsyncPipe,
        DatePipe,
        JsonPipe,
    ],
})
export class TriggerAboutComponent extends AsyncHandler {
    private _service = inject(TriggerStateService);

    /** System to use for conditions with systen variables and functions */
    public readonly template_system = signal<PlaceSystem | undefined>(
        undefined,
    );
    private readonly _item = toSignal(this._service.item, {
        initialValue: {} as PlaceTrigger,
    });
    public get item(): PlaceTrigger {
        return this._item();
    }
    /** List of variable comparison trigger conditions */
    public readonly comparisons = computed(
        () => this.item.conditions?.comparisons || ([] as TriggerComparison[]),
    );
    /** List of time dependent trigger conditions */
    public readonly time_dependents = computed(
        () =>
            this.item.conditions?.time_dependents ||
            ([] as TriggerTimeCondition[]),
    );
    /** List of function call trigger actions */
    public readonly functions = computed(
        () => this.item.actions?.functions || ([] as TriggerFunction[]),
    );
    /** List of email trigger actions */
    public readonly mailers = computed(
        () => this.item.actions?.mailers || ([] as TriggerMailer[]),
    );
    /** Query function for systems */
    public readonly query_fn = (q: string) =>
        querySystems({ q }).then((resp) => resp.data as PlaceSystem[]);

    public readonly editCondition = (
        c?: TriggerComparison | TriggerTimeCondition,
    ) => this._service.editCondition(c, this.template_system());
    public readonly removeCondition = (
        c: TriggerComparison | TriggerTimeCondition,
    ) => this._service.removeCondition(c);
    public readonly editAction = (a?: TriggerFunction | TriggerMailer) =>
        this._service.editAction(a, this.template_system());
    public readonly removeAction = (a: TriggerFunction | TriggerMailer) =>
        this._service.removeAction(a);

    /**
     * Open confirmation modal for re-ordering action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    public confirmReorder(
        type: 'function' | 'mailer',
        [previous, current]: [number, number],
    ): void {
        if (previous === current) return;
        this._service.reorderAction(type, previous, current);
    }
}
