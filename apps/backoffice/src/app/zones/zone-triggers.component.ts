import { Component } from '@angular/core';
import { PlaceZone } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-triggers',
    template: `
        <section class="flex items-center mb-4 space-x-2">
            <button btn style="min-width: 8rem" (click)="selectTrigger()">
                Add Trigger
            </button>
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
                    placeholder="Filter triggers..."
                    class="rounded-none"
                />
            </mat-form-field>
        </section>
        <section>
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!(loading | async)"
            ></mat-progress-bar>
            <simple-table
                class="min-w-[32rem] block text-sm"
                [data]="triggers"
                [columns]="[
                    { key: 'name', name: 'Name', content: name_template },
                    {
                        key: 'added',
                        name: 'Added',
                        content: added_template
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: actions_template,
                        size: '3.5rem',
                        sortable: false
                    }
                ]"
                empty_message="No triggers for selected zone"
            ></simple-table>
            <ng-template #name_template let-row="row">
                <div class="flex flex-col items-start px-4 py-2 leading-snug">
                    <a
                        class="truncate underline"
                        [routerLink]="['/triggers', row.id]"
                    >
                        {{ row.name }}
                    </a>
                    <div class="text-[0.625rem] opacity-30 font-mono">
                        {{ row.id }}
                    </div>
                </div>
            </ng-template>
            <ng-template #added_template let-row="row">
                <div class="p-4">
                    {{ +row.created_at * 1000 | dateFrom }}
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="flex items-center space-x-2 p-2">
                    <button icon matRipple (click)="deleteTrigger(row)">
                        <app-icon class="text-error">delete</app-icon>
                    </button>
                </div>
            </ng-template>
        </section>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class ZoneTriggersComponent {
    public readonly filter$ = new BehaviorSubject<string>('');
    /** List of triggers associated with the zone */
    public readonly triggers = combineLatest([
        this.filter$,
        this._state.triggers,
    ]).pipe(
        map((details) => {
            const [filter, systems] = details;
            const search = filter.toLowerCase();
            return !filter
                ? systems
                : systems.filter((sys) =>
                      sys.name.toLowerCase().includes(search)
                  );
        })
    );

    public readonly loading = this._state.loading;

    public readonly selectTrigger = () => this._state.selectTrigger();
    public readonly deleteTrigger = (t) => this._state.removeTrigger(t);

    public get item(): PlaceZone {
        return this._state.active_item as any;
    }

    constructor(private _state: ZonesStateService) {}
}
