import { Component } from '@angular/core';
import { PlaceZone } from '@placeos/ts-client';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-children',
    template: `
        <div class="flex items-center">
            <mat-form-field class="flex-1" appearance="outline">
                <app-icon
                    class="text-lg"
                    matPrefix
                    className="backoffice-magnifying-glass"
                ></app-icon>
                <input
                    matInput
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    name="search-filter"
                    placeholder="Filter Zones"
                    i18n-placeholder="@@zoneChildrenTableFilter"
                />
            </mat-form-field>
        </div>
        <div
            role="table"
            *ngIf="(children | async)?.length > 0; else empty_state"
        >
            <simple-table
                class="min-w-[32rem] block text-sm"
                [data]="children"
                [columns]="[
                    { key: 'name', name: 'Name', content: name_template },
                    {
                        key: 'description',
                        name: 'Description',
                    }
                ]"
                [sortable]="true"
            ></simple-table>
            <ng-template #name_template let-row="row">
                <a
                    class="truncate p-4 underline"
                    [routerLink]="['/zones', row.id]"
                >
                    {{ row.name }}
                </a>
            </ng-template>
        </div>
        <ng-template #empty_state>
            <div
                class="flex flex-col items-center p-8"
                i18n="@@zoneChildrenTableEmpty"
            >
                No child zones found
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
export class ZoneChildrenComponent {
    public readonly filter$ = new BehaviorSubject<string>('');
    /** List of triggers associated with the zone */
    public readonly children = combineLatest([
        this.filter$,
        this._state.children,
    ]).pipe(
        map((details) => {
            const [filter, zones] = details;
            const search = filter.toLowerCase();
            return !filter
                ? zones
                : zones.filter((sys) =>
                      sys.name.toLowerCase().includes(search)
                  );
        })
    );

    public readonly loading = this._state.loading;

    public get item(): PlaceZone {
        return this._state.active_item as any;
    }

    constructor(private _state: ZonesStateService) {}
}
