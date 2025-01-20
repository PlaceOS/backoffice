import { Component } from '@angular/core';
import { PlaceTrigger } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { copyToClipboard, unique } from '../common/general';
import { notifyInfo } from '../common/notifications';

import { HashMap } from '../common/types';
import { SystemStateService } from './system-state.service';
import { i18n } from '../common/translate';

export interface TriggerInstanceState {
    triggered: boolean;
    trigger_count: number;
    action_errors: number;
    comparison_errors: number;
    conditions: HashMap<boolean>;
}

@Component({
    selector: 'system-triggers',
    template: `
        <section class="flex items-center mb-4 space-x-2">
            <mat-form-field appearance="outline" class="h-12 flex-1">
                <div class="prefix" matPrefix>
                    <app-icon class="text-2xl relative -left-0.5">
                        search
                    </app-icon>
                </div>
                <input
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    matInput
                    [placeholder]="'SYSTEMS.TRIGGER_SEARCH' | translate"
                    class="rounded-none"
                />
            </mat-form-field>
            <button btn matRipple class="w-32" (click)="selectTrigger()">
                {{ 'SYSTEMS.TRIGGER_ADD' | translate }}
            </button>
        </section>
        <section class="max-w-full overflow-auto">
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!(loading | async).triggers"
            ></mat-progress-bar>
            <simple-table
                class="min-w-[42rem] block text-sm"
                [data]="triggers"
                [columns]="[
                    {
                        key: 'status',
                        name: ' ',
                        size: '3rem',
                        content: status_template
                    },
                    {
                        key: 'name',
                        name: 'SYSTEMS.TRIGGER_FIELD_NAME' | translate,
                        content: name_template
                    },
                    {
                        key: 'count',
                        name: 'SYSTEMS.TRIGGER_FIELD_COUNT' | translate,
                        content: count_template
                    },
                    {
                        key: 'errors',
                        name: 'SYSTEMS.TRIGGER_FIELD_ERRORS' | translate,
                        content: errors_template
                    },
                    {
                        key: 'added',
                        name: 'SYSTEMS.TRIGGER_FIELD_ADDED' | translate,
                        content: added_template
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: actions_template,
                        size: '8.75rem',
                        sortable: false
                    }
                ]"
                [empty_message]="'SYSTEMS.TRIGGERS_EMPTY' | translate"
            ></simple-table>
            <ng-template #status_template let-row="row">
                <i
                    hidden
                    binding
                    [sys]="item.id"
                    mod="_TRIGGER__1"
                    [bind]="row.id"
                    [(model)]="trigger_state[row.id]"
                    (modelChange)="updateComparisons(row.id)"
                ></i>
                <div
                    class="h-2 w-2 rounded-full mx-auto"
                    [class.bg-base-content]="!trigger_state[row.id]?.triggered"
                    [class.bg-success]="trigger_state[row.id]?.triggered"
                ></div>
            </ng-template>
            <ng-template #name_template let-row="row">
                <div class="flex flex-col items-start px-4 py-2 leading-snug">
                    <a
                        class="truncate underline"
                        [routerLink]="['/triggers', row.trigger_id]"
                    >
                        {{ row.name }}
                    </a>
                    <div class="text-[0.625rem] opacity-30 font-mono">
                        {{ row.trigger_id }}
                    </div>
                </div>
            </ng-template>
            <ng-template #count_template let-row="row">
                <div class="p-4">
                    {{ trigger_state[row.id]?.trigger_count }}
                </div>
            </ng-template>
            <ng-template #errors_template let-row="row">
                <div class="p-4">
                    {{
                        trigger_state[row.id]?.action_errors +
                            trigger_state[row.id]?.comparison_errors || '0'
                    }}
                </div>
            </ng-template>
            <ng-template #added_template let-row="row">
                <div class="p-4">
                    {{ +row.created_at * 1000 | dateFrom }}
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="flex items-center space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        [matTooltip]="'SYSTEMS.COPY_WEBHOOK' | translate"
                        (click)="copyWebhookURL(row)"
                    >
                        <app-icon>link</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="'SYSTEMS.TRIGGER_EDIT' | translate"
                        (click)="editTrigger(row)"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="'SYSTEMS.TRIGGER_REMOVE' | translate"
                        (click)="deleteTrigger(row)"
                    >
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

            [flex] {
                min-width: 8rem;
            }

            [role='table'] > div {
                width: 100%;
                min-width: 36rem;
            }
        `,
    ],
})
export class SystemTriggersComponent {
    public readonly filter$ = new BehaviorSubject<string>('');

    public readonly loading = this._service.loading;

    public readonly trigger_state: HashMap<TriggerInstanceState> = {};

    public readonly comparisons: HashMap<string> = {};

    public readonly temp_trigger = new BehaviorSubject<PlaceTrigger>(null);

    public readonly triggers = combineLatest([
        this.filter$,
        this._service.triggers,
        this.temp_trigger,
    ]).pipe(
        map(([filter, triggers, temp]) => {
            const search = filter.toLowerCase();
            const list = unique(temp ? [...triggers, temp] : triggers, 'id');
            return filter
                ? list.filter((t) => t.name.toLowerCase().includes(search))
                : list;
        })
    );

    public readonly copyWebhookURL = (t) => {
        copyToClipboard(
            `${location.origin}/api/engine/v2/webhook/${t.id}/notify?secret=${t.webhook_secret}`
        );
        notifyInfo(i18n('SYSTEMS.COPIED_WEBHOOK'));
    };
    public readonly editTrigger = async (t) =>
        this.temp_trigger.next((await this._service.editTrigger(t)) as any);
    public readonly deleteTrigger = (t) => this._service.removeTrigger(t);
    public readonly selectTrigger = async () =>
        this.temp_trigger.next((await this._service.selectTrigger()) || null);

    public get item() {
        return this._service.active_item;
    }

    constructor(private _service: SystemStateService) {}

    public updateComparisons(id: string): void {
        this.comparisons[id] = '';
        if (this.trigger_state[id]) {
            for (const key in this.trigger_state[id].conditions) {
                if (this.trigger_state[id].conditions.hasOwnProperty(key)) {
                    if (this.comparisons[id]) {
                        this.comparisons[id] += '\n';
                    }
                    this.comparisons[
                        id
                    ] += `${key}: ${this.trigger_state[id].conditions[key]}`;
                }
            }
        }
    }
}
