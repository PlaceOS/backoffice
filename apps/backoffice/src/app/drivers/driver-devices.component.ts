import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { DriverStateService } from './driver-state.service';
import { HashMap } from '@placeos/ts-client/dist/esm/utilities/types';
import { PlaceModule, PlaceSystem, querySystems } from '@placeos/ts-client';

@Component({
    selector: 'driver-devices',
    template: `
        <section class="flex items-center mb-4">
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
                    placeholder="Filter Devices..."
                    class="rounded-none"
                />
            </mat-form-field>
        </section>
        <section>
            <simple-table
                class="min-w-[32rem] block text-sm"
                [data]="modules"
                [columns]="[
                    {
                        key: 'state',
                        name: 'State',
                        content: state_template,
                        size: '4rem',
                        sortable: false
                    },
                    {
                        key: 'name',
                        name: 'Module Name',
                        content: name_template
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: actions_template,
                        size: '6rem',
                        sortable: false
                    }
                ]"
                [sortable]="true"
            ></simple-table>
            <ng-template #state_template let-row="row">
                <i
                    *ngIf="row.system"
                    binding
                    [(model)]="row.connected"
                    [sys]="row.system.id"
                    [mod]="row"
                    bind="connected"
                ></i>
                <div
                    class="h-2 w-2 rounded-full mx-auto"
                    [class.bg-base-content]="!row.running"
                    [class.bg-error]="row.running && !row.connected"
                    [class.bg-success]="row.running && row.connected"
                ></div>
            </ng-template>
            <ng-template #name_template let-row="row">
                <a
                    class="truncate p-4 underline"
                    [routerLink]="['/modules', row.id]"
                >
                    {{ row.name }}
                </a>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="flex items-center space-x-2 p-2 mx-auto">
                    <button
                        icon
                        matRipple
                        matTooltip="View Systems"
                        [matMenuTriggerFor]="menu"
                        (click)="loadSystems(row)"
                    >
                        <app-icon>visibility</app-icon>
                    </button>
                    <button icon matRipple (click)="removeModule(row)">
                        <app-icon class="text-error">delete</app-icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <div
                            class="flex items-center justify-center px-2 pb-2 opacity-70 border-b border-base-200 text-sm"
                        >
                            {{ systems[row.id]?.length }} System(s)
                        </div>
                        <div
                            *ngIf="loading_systems"
                            class="flex items-center space-x-2 p-2 text-sm"
                        >
                            <mat-spinner [diameter]="32"></mat-spinner>
                            <span>Loading systems...</span>
                        </div>
                        <a
                            mat-menu-item
                            *ngFor="let system of systems[row.id] || []"
                            class="leading-tight"
                            [routerLink]="['/systems', system.id]"
                        >
                            <div
                                class="flex flex-col justify-center px-2 h-full"
                            >
                                <div class="text-base">
                                    {{ system.display_name || system.name }}
                                </div>
                                <div class="text-xs opacity-60">
                                    {{ system.id }}
                                </div>
                            </div>
                        </a>
                    </mat-menu>
                </div>
            </ng-template>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Loading modules...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <p>No modules with driver</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            [role='table'] > div {
                width: 100%;
                min-width: 28rem;
            }
        `,
    ],
})
export class DriverModulesComponent extends AsyncHandler {
    public loading_systems = false;
    /** Subject holding the value of the search */
    public readonly filter$ = new BehaviorSubject<string>('');
    /** Whether systems are being loaded */
    public readonly loading = this._service.loading;
    /** Currently active driver */
    public readonly item = this._service.item;
    /** List of systems associated with modules */
    public readonly systems: HashMap<PlaceSystem[]> = {};
    /** Whether systems are being loaded */
    /** List of modules */
    public readonly modules = combineLatest([
        this.filter$,
        this._service.modules,
    ]).pipe(
        map((details) => {
            const [filters, modules] = details;
            const search = filters.toLowerCase();
            return filters
                ? modules.filter(
                      (mod) =>
                          mod.name.toLowerCase().includes(search) ||
                          mod.custom_name.toLowerCase().includes(search)
                  )
                : modules;
        })
    );

    public readonly removeModule = (d) => this._service.removeModule(d);

    constructor(private _service: DriverStateService) {
        super();
    }

    public async loadSystems(mod: PlaceModule) {
        this.loading_systems = true;
        const systems = await querySystems({ module_id: mod.id })
            .pipe(map(({ data }) => data))
            .toPromise();
        this.systems[mod.id] = systems || [];
        this.loading_systems = false;
    }
}
