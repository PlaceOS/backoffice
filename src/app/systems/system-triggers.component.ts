import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { copyToClipboard } from '../common/general';
import { notifyInfo } from '../common/notifications';

import { HashMap } from '../common/types';
import { SystemStateService } from './system-state.service';

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
            <button mat-button style="min-width: 8rem" (click)="selectTrigger()">Add Trigger</button>
            <mat-form-field appearance="outline" class="h-12 flex-1">
                <app-icon matPrefix className="backoffice-magnifying-glass text-xl mr-2"></app-icon>
                <input
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    matInput
                    placeholder="Filter triggers..."
                    class="rounded-none"
                />
            </mat-form-field>
        </section>
        <section>
            <ng-container *ngIf="!(loading | async).triggers; else load_state">
                <div
                    role="table"
                    class="overflow-x-auto"
                    *ngIf="(triggers | async)?.length; else empty_state"
                >
                    <div table-head>
                        <div class="w-12 p-2"></div>
                        <div flex class="flex-1 p-2" i18n="@@nameLabel">Name</div>
                        <div class="w-16 p-2" i18n="@@triggerCountLabel">Count</div>
                        <div class="w-16 p-2" i18n="@@triggerErrorsLabel">Errors</div>
                        <div class="w-28 p-2" i18n="@@descriptionLabel">Added</div>
                        <div class="w-32 p-2"></div>
                    </div>
                    <div table-body class="overflow-y-auto">
                        <div table-row *ngFor="let trigger of triggers | async; let i = index">
                            <i
                                hidden
                                binding
                                [sys]="item.id"
                                mod="_TRIGGER__1"
                                [bind]="trigger.id"
                                [(model)]="trigger_state[trigger.id]"
                                (modelChange)="updateComparisons(trigger.id)"
                            ></i>
                            <div class="w-12 flex items-center justify-center h-full p-2">
                                <div
                                    class="h-2 w-2 rounded-full"
                                    [class.bg-black]="!trigger_state[trigger.id]?.triggered"
                                    [class.bg-success]="trigger_state[trigger.id]?.triggered"
                                ></div>
                            </div>
                            <div flex class="flex-1 p-2">
                                <a class="truncate" [routerLink]="['/triggers', trigger.id]">{{
                                    trigger.name
                                }}</a>
                            </div>
                            <div desc class="w-16 p-2">
                                {{ trigger_state[trigger.id]?.trigger_count }}
                            </div>
                            <div desc class="w-16 p-2">
                                {{
                                    trigger_state[trigger.id]?.action_errors +
                                        trigger_state[trigger.id]?.comparison_errors || '0'
                                }}
                            </div>
                            <div desc class="w-28 p-2">
                                {{ +trigger.created_at * 1000 | dateFrom }}
                            </div>
                            <div class="w-32 p-2 items-center justify-center">
                                <button mat-icon-button (click)="copyWebhookURL(trigger)">
                                    <app-icon className="backoffice-link"></app-icon>
                                </button>
                                <button mat-icon-button (click)="editTrigger(trigger)">
                                    <app-icon className="backoffice-edit"></app-icon>
                                </button>
                                <button mat-icon-button (click)="deleteTrigger(trigger)">
                                    <app-icon className="backoffice-trash"></app-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ng-container>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Loading triggers...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <p>No triggers for system</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                padding: 1rem;
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

    public readonly triggers = combineLatest([this.filter$, this._service.triggers]).pipe(
        map((details) => {
            const [filter, triggers] = details;
            const search = filter.toLowerCase();
            return filter
                ? triggers.filter((t) => t.name.toLowerCase().includes(search))
                : triggers;
        })
    );

    public readonly copyWebhookURL = (t) => {
        copyToClipboard(
            `${location.origin}/api/engine/v2/webhook/${t.id}/notify?secret=${t.webhook_secret}`
        );
        notifyInfo('Webhook link copied to clipboard');
    };
    public readonly editTrigger = (t) => this._service.editTrigger(t);
    public readonly deleteTrigger = (t) => this._service.removeTrigger(t);
    public readonly selectTrigger = () => this._service.selectTrigger();

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
                    this.comparisons[id] += `${key}: ${this.trigger_state[id].conditions[key]}`;
                }
            }
        }
    }
}
