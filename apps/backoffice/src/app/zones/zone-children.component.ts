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
                <div class="prefix" matPrefix>
                    <app-icon class="relative -left-0.5 text-2xl">
                        search
                    </app-icon>
                </div>
                <input
                    matInput
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    name="search-filter"
                    [placeholder]="'ZONES.SEARCH' | translate"
                />
            </mat-form-field>
        </div>
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!(loading | async)"
        ></mat-progress-bar>
        <simple-table
            class="block min-w-[32rem] text-sm"
            [data]="children"
            [columns]="[
                {
                    key: 'name',
                    name: 'COMMON.FIELD_NAME' | translate,
                    content: name_template,
                },
                {
                    key: 'description',
                    name: 'COMMON.FIELD_DESCRIPTION' | translate,
                    content: description_template,
                },
            ]"
            [sortable]="true"
            [empty_message]="'ZONES.CHILDREN_EMPTY' | translate"
        ></simple-table>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col items-start px-4 py-2 leading-snug">
                <a class="truncate underline" [routerLink]="['/zones', row.id]">
                    {{ row.name }}
                </a>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="w-full select-text overflow-hidden px-4 py-2 text-xs">
                {{ data }}
                <span class="opacity-30" *ngIf="!data">
                    {{ 'ZONES.DESCRIPTION_EMPTY' | translate }}
                </span>
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
                      sys.name.toLowerCase().includes(search),
                  );
        }),
    );

    public readonly loading = this._state.loading;

    public get item(): PlaceZone {
        return this._state.active_item as any;
    }

    constructor(private _state: ZonesStateService) {}
}
