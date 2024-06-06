import { Component } from '@angular/core';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-systems',
    template: `
        <div class="flex">
            <mat-form-field class="flex-1" appearance="outline">
                <app-icon
                    matPrefix
                    class="text-lg"
                    className="backoffice-magnifying-glass"
                ></app-icon>
                <input
                    matInput
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    name="search-filter"
                    placeholder="Filter Systems"
                />
            </mat-form-field>
        </div>
        <div role="table" *ngIf="(systems | async)?.length; else empty_state">
            <simple-table
                class="min-w-[32rem] block text-sm"
                [data]="systems"
                [columns]="[
                    { key: 'name', name: 'Name', content: name_template },
                    {
                        key: 'installed_ui_devices',
                        name: 'No. Modules',
                        size: '10rem'
                    },
                    {
                        key: 'created_at',
                        name: 'Created',
                        content: added_template,
                        size: '10rem'
                    }
                ]"
                [sortable]="true"
            ></simple-table>
            <ng-template #name_template let-row="row">
                <a
                    class="truncate p-4 underline"
                    [routerLink]="['/systems', row.id]"
                >
                    {{ row.name }}
                </a>
            </ng-template>
            <ng-template #added_template let-row="row">
                <div class="p-4">
                    {{ +row.created_at * 1000 | dateFrom }}
                </div>
            </ng-template>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8">
                <p i18n="@@systemTableEmpty">No systems found</p>
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
export class ZoneSystemsComponent {
    public readonly filter$ = new BehaviorSubject<string>('');

    public readonly systems = combineLatest([
        this.filter$,
        this._state.systems,
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

    constructor(private _state: ZonesStateService) {}
}
