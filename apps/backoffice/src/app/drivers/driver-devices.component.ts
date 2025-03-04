import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlaceModule, PlaceSystem, querySystems } from '@placeos/ts-client';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-devices',
    template: `
        <section class="mb-4 flex items-center">
            <mat-form-field appearance="outline" class="h-12 flex-1">
                <div class="prefix" matPrefix>
                    <app-icon class="relative -left-0.5 text-2xl">
                        search
                    </app-icon>
                </div>
                <input
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    matInput
                    [placeholder]="'MODULES.SEARCH' | translate"
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
                class="block min-w-[32rem] text-sm"
                [data]="modules"
                [columns]="[
                    {
                        key: 'state',
                        name: 'MODULES.FIELD_STATE' | translate,
                        content: state_template,
                        size: '4rem',
                        sortable: false,
                    },
                    {
                        key: 'name',
                        name: 'DRIVERS.MODULE_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: actions_template,
                        size: '6rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'DRIVERS.MODULES_EMPTY' | translate"
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
                    class="mx-auto h-2 w-2 rounded-full"
                    [class.bg-base-content]="!row.running"
                    [class.bg-error]="row.running && !row.connected"
                    [class.bg-success]="row.running && row.connected"
                ></div>
            </ng-template>
            <ng-template #name_template let-row="row">
                <div class="flex flex-col items-start px-4 py-2 leading-snug">
                    <a
                        class="truncate underline"
                        [routerLink]="['/modules', row.id]"
                    >
                        {{ row.name }}
                    </a>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.id }}
                    </div>
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="mx-auto flex items-center space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        [matTooltip]="'DRIVERS.VIEW_SYSTEMS' | translate"
                        [matMenuTriggerFor]="menu"
                        (click)="loadSystems(row)"
                    >
                        <app-icon>visibility</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="'MODULES.DELETE' | translate"
                        (click)="removeModule(row)"
                    >
                        <app-icon class="text-error">delete</app-icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <div
                            class="flex items-center justify-center border-b border-base-200 px-2 pb-2 text-sm opacity-70"
                        >
                            {{
                                'DRIVERS.SYSTEM_COUNT'
                                    | translate
                                        : { count: systems[row.id]?.length }
                            }}
                        </div>
                        <div
                            *ngIf="loading_systems"
                            class="flex items-center space-x-2 p-2 text-sm"
                        >
                            <mat-spinner [diameter]="32"></mat-spinner>
                            <span>{{
                                'DRIVERS.LOADING_SYSTEMS' | translate
                            }}</span>
                        </div>
                        <a
                            mat-menu-item
                            *ngFor="let system of systems[row.id] || []"
                            class="leading-tight"
                            [routerLink]="['/systems', system.id]"
                        >
                            <div
                                class="flex h-full flex-col justify-center px-2"
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
    public readonly systems: Record<string, PlaceSystem[]> = {};
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
                          mod.custom_name.toLowerCase().includes(search),
                  )
                : modules;
        }),
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
