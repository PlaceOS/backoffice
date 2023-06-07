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
                <app-icon
                    matPrefix
                    className="backoffice-magnifying-glass text-xl mr-2"
                ></app-icon>
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
            <ng-container *ngIf="!(loading | async); else load_state">
                <div
                    role="table"
                    class="overflow-x-auto"
                    *ngIf="(triggers | async)?.length; else empty_state"
                >
                    <div table-head>
                        <div flex class="flex-1 p-2" i18n="@@nameLabel">
                            Name
                        </div>
                        <div class="w-28 p-2" i18n="@@descriptionLabel">
                            Added
                        </div>
                        <div class="w-32 p-2"></div>
                    </div>
                    <div table-body class="overflow-y-auto">
                        <div
                            table-row
                            *ngFor="
                                let trigger of triggers | async;
                                let i = index
                            "
                        >
                            <div flex class="flex-1 p-2">
                                <a
                                    class="truncate"
                                    [routerLink]="['/triggers', trigger.id]"
                                    >{{ trigger.name }}</a
                                >
                            </div>
                            <div desc class="w-28 p-2">
                                {{ +trigger.created_at * 1000 | dateFrom }}
                            </div>
                            <div class="w-32 p-2 items-center justify-center">
                                <button
                                    btn
                                    icon
                                    (click)="deleteTrigger(trigger)"
                                >
                                    <app-icon
                                        className="backoffice-trash"
                                    ></app-icon>
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
                <p>No triggers for zone</p>
            </div>
        </ng-template>
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
