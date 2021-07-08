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
                <app-icon class="text-lg" matPrefix className="backoffice-magnifying-glass"></app-icon>
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
        <div role="table" *ngIf="(children | async)?.length > 0; else empty_state">
            <div table-head>
                <div class="flex-1 p-2" i18n="@@zoneChildrenTableName">Name</div>
                <div class="w-3/5 p-2" i18n="@@descriptionLabel">Description</div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of children | async">
                    <div class="flex-1 p-2 underline">
                        <a
                            [routerLink]="['/zone', item.id]"
                            routerLinkActive="router-link-active"
                            [matTooltip]="item.id"
                        >
                            {{ item.name }} (<span class="id">{{ item.id }}</span
                            >)
                        </a>
                    </div>
                    <div class="w-3/5 p-2">{{ item.description }}</div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8" i18n="@@zoneChildrenTableEmpty">
                No child zones found
            </div>
        </ng-template>
    `,
    styles: [`
        :host {
            padding: 1rem;
            width: 100%;
            height: 100%;
        }
    `],
})
export class ZoneChildrenComponent {
    public readonly filter$ = new BehaviorSubject<string>('');
    /** List of triggers associated with the zone */
    public readonly children = combineLatest([this.filter$, this._state.children]).pipe(
        map((details) => {
            const [filter, zones] = details;
            const search = filter.toLowerCase();
            return !filter ? zones : zones.filter((sys) => sys.name.toLowerCase().includes(search));
        })
    );

    public readonly loading = this._state.loading;

    public get item(): PlaceZone {
        return this._state.active_item as any;
    }

    constructor(private _state: ZonesStateService) {}
}
