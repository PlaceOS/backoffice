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

import { AsyncHandler } from 'apps/backoffice/src/app/common/base.class';
import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'trigger-about',
    template: `
        <section class="space-y-2">
            <div class="flex items-center space-x-2" *ngIf="item?.created_at">
                <label i18n="@@triggerCreatedAtLabel">Created:</label>
                <div class="value">{{ item.created_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.updated_at">
                <label i18n="@triggerUpdatedAtLabel">Updated:</label>
                <div class="value">{{ item.updated_at * 1000 | dateFrom }}</div>
            </div>
        </section>
        <hr class="my-4" />
        <div class="flex items-center space-x-2">
            <label
                for="driver"
                class="whitespace-nowrap"
                matTooltip="System to use for available status variables and function calls"
                i18n="@@triggerTemplateSystemLabel"
                >Template System:
            </label>
            <item-search-field
                class="h-12"
                name="system"
                [query_fn]="query_fn"
                [(ngModel)]="template_system"
            ></item-search-field>
        </div>
        <header class="flex items-center my-4">
            <button
                btn
                icon
                [disabled]="!template_system"
                (click)="editCondition()"
            >
                <app-icon className="backoffice-plus"></app-icon>
            </button>
            <div class="font-medium text-lg" i18n="@@triggerConditionsHeader">
                Conditions
            </div>
        </header>
        <section
            role="table"
            *ngIf="
                comparisons.length || time_dependents.length;
                else no_conditions
            "
        >
            <div
                table-head
                i18n="@@triggerComparisonLabel"
                *ngIf="comparisons.length"
            >
                <div class="flex-1 p-2">Variable Comparison Condtions</div>
            </div>
            <div table-body>
                <div table-row *ngFor="let comparison of comparisons">
                    <div class="w-12"></div>
                    <div class="flex-1 p-2">
                        {{ comparison.left | json }} {{ comparison.operator }}
                        {{ comparison.right | json }}
                    </div>
                    <div class="w-24 flex items-center justify-center">
                        <button
                            btn
                            icon
                            [disabled]="!template_system"
                            (click)="editCondition(comparison)"
                        >
                            <app-icon
                                [icon]="{ class: 'backoffice-edit' }"
                            ></app-icon>
                        </button>
                        <button btn icon (click)="removeCondition(comparison)">
                            <app-icon
                                [icon]="{ class: 'backoffice-trash' }"
                            ></app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div
                table-head
                i18n="@@triggerTimeLabel"
                *ngIf="time_dependents.length"
            >
                <div class="flex-1 p-2">Time Dependent Conditions</div>
            </div>
            <div table-body>
                <div table-row *ngFor="let time of time_dependents">
                    <div class="w-12"></div>
                    <div class="flex-1 p-2">
                        {{ time.type === 'at' ? 'At time' : 'CRON' }}
                        {{ time.type === 'at' ? time.time : time.cron }}
                    </div>
                    <div class="w-24 flex items-center justify-center">
                        <button
                            btn
                            icon
                            [disabled]="!template_system"
                            (click)="editCondition(time)"
                        >
                            btn icon
                            <app-icon className="backoffice-edit"></app-icon>
                        </button>
                        <button btn icon (click)="removeCondition(time)">
                            <app-icon className="backoffice-trash"></app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <header class="flex items-center space-x-2 my-4">
            <button
                icon
                btn
                icon
                [disabled]="!template_system"
                (click)="editAction()"
            >
                <app-icon className="backoffice-plus"></app-icon>
            </button>
            <div class="font-medium text-lg" i18n="@@triggerActionsHeader">
                Actions
            </div>
        </header>
        <section
            role="table"
            *ngIf="functions.length || mailers.length; else no_actions"
        >
            <div
                table-head
                i18n="@@triggerFunctionsLabel"
                *ngIf="functions.length"
            >
                <div class="flex-1 p-2">Function Call Actions</div>
            </div>
            <div
                table-body
                cdkDropList
                (cdkDropListDropped)="confirmReorder('function', $event)"
            >
                <div table-row *ngFor="let action of functions" cdkDrag>
                    <div
                        class="w-12 flex items-center justify-center"
                        cdkDragHandle
                    >
                        <app-icon
                            [icon]="{ class: 'backoffice-select-arrows' }"
                        ></app-icon>
                    </div>
                    <div class="flex-1 p-2">
                        {{ action.mod }}, {{ action.method }}({{
                            action.args | json
                        }})
                    </div>
                    <div class="w-24 flex items-center justify-center">
                        <button
                            icon
                            btn
                            icon
                            [disabled]="!template_system"
                            (click)="editAction(action)"
                        >
                            <app-icon
                                [icon]="{ class: 'backoffice-edit' }"
                            ></app-icon>
                        </button>
                        <button btn icon (click)="removeAction(action)">
                            <app-icon
                                [icon]="{ class: 'backoffice-trash' }"
                            ></app-icon>
                        </button>
                    </div>
                    <div
                        class="p-4 border-4 border-dashed border-black bg-gray-300"
                        *cdkDragPlaceholder
                    ></div>
                </div>
            </div>
            <div table-head i18n="@@triggerEmailsLabel" *ngIf="mailers.length">
                <div class="flex-1 p-2">Email Actions</div>
            </div>
            <div
                table-body
                cdkDropList
                (cdkDropListDropped)="confirmReorder('mailer', $event)"
            >
                <div table-row *ngFor="let action of mailers" cdkDrag>
                    <div
                        class="w-12 flex items-center justify-center"
                        cdkDragHandle
                    >
                        <app-icon
                            [icon]="{ class: 'backoffice-select-arrows' }"
                        ></app-icon>
                    </div>
                    <div class="flex-1 p-2">
                        <span
                            [matTooltip]="action.emails | formatList"
                            i18n="@@emailCountDisplay"
                            >{{ action.emails.length }} { action.emails.length,
                            plural, =1 { Address } other { Addresses } }</span
                        >&nbsp; | Body Length: {{ action.content.length }}
                    </div>
                    <div class="w-24 flex items-center justify-center">
                        <button
                            icon
                            btn
                            icon
                            [disabled]="!template_system"
                            (click)="editAction(action)"
                        >
                            <app-icon
                                [icon]="{ class: 'backoffice-edit' }"
                            ></app-icon>
                        </button>
                        <button btn icon (click)="removeAction(action)">
                            <app-icon
                                [icon]="{ class: 'backoffice-trash' }"
                            ></app-icon>
                        </button>
                    </div>
                    <div
                        class="p-4 border-4 border-dashed border-black bg-gray-300"
                        *cdkDragPlaceholder
                    ></div>
                </div>
            </div>
        </section>
        <ng-template #no_conditions>
            <div
                class="flex flex-col items-center p-8"
                i18n="@@triggerConditionsEmpty"
            >
                No condtions for trigger
            </div>
        </ng-template>
        <ng-template #no_actions>
            <div
                class="flex flex-col items-center p-8"
                i18n="@@triggerActionsEmpty"
            >
                No actions for trigger
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
                if (this.item && this.item.conditions) {
                    this.comparisons = this.item.conditions.comparisons || [];
                    this.time_dependents =
                        this.item.conditions.time_dependents || [];
                    this.functions = this.item.actions.functions || [];
                    this.mailers = this.item.actions.mailers || [];
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
        event: CdkDragDrop<any[]>
    ): void {
        if (event && event.previousIndex !== event.currentIndex) {
            this._service.reorderAction(
                type,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
