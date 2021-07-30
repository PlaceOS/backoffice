import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { DriverStateService } from './driver-state.service';
import { HashMap } from '@placeos/ts-client/dist/esm/utilities/types';
import { PlaceModule, PlaceSystem, querySystems } from '@placeos/ts-client';

@Component({
    selector: 'driver-devices',
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
                    placeholder="Filter triggers..."
                    class="rounded-none"
                />
            </mat-form-field>
        </section>
        <section>
            <div
                role="table"
                class="overflow-x-auto"
                *ngIf="(modules | async)?.length; else empty_state"
            >
                <div table-head>
                    <div class="w-12 p-2">State</div>
                    <div flex class="flex-1 p-2" i18n="@@nameLabel">Name</div>
                    <div class="w-24 p-2"></div>
                </div>
                <div table-body class="overflow-y-auto">
                    <div
                        table-row
                        *ngFor="let module of modules | async; let i = index"
                    >
                        <div class="w-12 p-2 flex items-center justify-center">
                            <i
                                *ngIf="module.system"
                                binding
                                [(model)]="module.connected"
                                [sys]="module.system.id"
                                [mod]="module"
                                bind="connected"
                            ></i>
                            <div
                                class="h-2 w-2 rounded-full bg-black"
                                [class.bg-error]="
                                    module.running && !module.connected
                                "
                                [class.bg-success]="
                                    module.running && module.connected
                                "
                            ></div>
                        </div>
                        <div
                            flex
                            class="flex-1 p-2 underline"
                            i18n="@@nameLabel"
                        >
                            <a [routerLink]="['/modules', module.id]">
                                {{ module.custom_name || module.name }}
                            </a>
                        </div>
                        <div class="w-24 p-2">
                            <button
                                mat-icon-button
                                matTooltip="View Systems"
                                [matMenuTriggerFor]="menu"
                                (click)="loadSystems(module)"
                            >
                                <app-icon className="backoffice-eye"></app-icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <div
                                    class="flex items-center justify-center px-2 pb-2 opacity-70 border-b border-gray-200 text-sm"
                                >
                                    {{ systems[module.id]?.length }} System(s)
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
                                    *ngFor="
                                        let system of systems[module.id] || []
                                    "
                                    class="leading-tight"
                                    [routerLink]="['/systems', system.id]"
                                >
                                    <div
                                        class="flex flex-col justify-center px-2 h-full"
                                    >
                                        <div class="text-base">
                                            {{
                                                system.display_name ||
                                                    system.name
                                            }}
                                        </div>
                                        <div class="text-xs opacity-60">
                                            {{ system.id }}
                                        </div>
                                    </div>
                                </a>
                            </mat-menu>
                            <button
                                mat-icon-button
                                (click)="removeModule(module)"
                            >
                                <app-icon
                                    className="backoffice-trash"
                                ></app-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
                padding: 1rem;
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
export class DriverModulesComponent extends BaseClass {
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
