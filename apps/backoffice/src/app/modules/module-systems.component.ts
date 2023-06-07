import { Component, OnInit } from '@angular/core';
import { PlaceModule, PlaceSystem, querySystems } from '@placeos/ts-client';
import { Subject, Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    catchError,
    map,
} from 'rxjs/operators';

import { AsyncHandler } from 'apps/backoffice/src/app/common/base.class';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';
import { ModuleStateService } from './module-state.service';

@Component({
    selector: 'module-systems',
    template: `
        <section class="flex items-center mb-4">
            <mat-form-field appearance="outline" class="h-12 flex-1">
                <app-icon
                    matPrefix
                    className="backoffice-magnifying-glass text-xl mr-2"
                ></app-icon>
                <input
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    matInput
                    placeholder="Filter systems..."
                    class="rounded-none"
                />
            </mat-form-field>
        </section>
        <section *ngIf="!(loading | async); else load_state">
            <div
                role="table"
                class="overflow-x-auto"
                *ngIf="(system_list | async)?.length; else empty_state"
            >
                <div table-head>
                    <div flex class="flex-1 p-2" i18n="@@nameLabel">Name</div>
                    <div class="w-48 p-2" i18n="@@systemLabel">No. Modules</div>
                    <div class="w-36 p-2" i18n="@@createdLabel">Created</div>
                </div>
                <div table-body class="overflow-y-auto">
                    <div
                        table-row
                        *ngFor="
                            let system of system_list | async;
                            let i = index
                        "
                    >
                        <div flex class="flex-1 p-2 underline">
                            <a [routerLink]="['/systems', system.id]">{{
                                system.name
                            }}</a>
                        </div>
                        <div class="w-48 p-2">
                            {{ system.installed_ui_devices || '0' }}
                        </div>
                        <div class="w-36 p-2">
                            {{ system.created_at * 1000 | dateFrom }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Loading systems...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <p>No systems with module</p>
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
export class ModuleSystemsComponent {
    /** Subject holding the value of the search */
    public readonly filter$ = new BehaviorSubject<string>('');
    /** Whether systems are being loaded */
    public readonly loading = this._service.loading;

    public readonly system_list = combineLatest([
        this.filter$,
        this._service.system_list,
    ]).pipe(
        map((details) => {
            const [filter, systems] = details;
            const search = filter.toLowerCase();
            return filter
                ? systems.filter((sys) =>
                      sys.name.toLowerCase().includes(search)
                  )
                : systems;
        })
    );

    constructor(private _service: ModuleStateService) {}
}
