import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-systems',
    template: `
        <div class="flex">
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
                    [placeholder]="'SYSTEMS.SEARCH' | translate"
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
            [data]="systems"
            [columns]="[
                {
                    key: 'name',
                    name: 'COMMON.FIELD_NAME' | translate,
                    content: name_template,
                },
                {
                    key: 'installed_ui_devices',
                    name: 'ZONES.SYSTEMS_FIELD_MODULE_COUNT' | translate,
                    size: '10rem',
                },
                {
                    key: 'created_at',
                    name: 'COMMON.CREATED_AT' | translate,
                    content: added_template,
                    size: '10rem',
                },
            ]"
            [sortable]="true"
            [empty_message]="'ZONES.SYSTEMS_EMPTY' | translate"
        ></simple-table>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col items-start px-4 py-2 leading-snug">
                <a
                    class="truncate underline"
                    [routerLink]="['/systems', row.id]"
                >
                    {{ row.name }}
                </a>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </div>
        </ng-template>
        <ng-template #added_template let-row="row">
            <div class="p-4">
                {{ +row.created_at * 1000 | dateFrom }}
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
    standalone: false
})
export class ZoneSystemsComponent {
    public readonly filter$ = new BehaviorSubject<string>('');
    public readonly loading = this._state.loading;

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
                      sys.name.toLowerCase().includes(search),
                  );
        }),
    );

    constructor(private _state: ZonesStateService) {}
}
