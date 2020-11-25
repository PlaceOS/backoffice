import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-devices',
    template: `
        <section class="flex items-center mb-4">
            <mat-form-field appearance="outline" class="h-12 flex-1">
                <app-icon matPrefix className="backoffice-magnifying-glass text-xl mr-2"></app-icon>
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
                    <div class="w-48 p-2" i18n="@@triggerCountLabel">System</div>
                    <div class="w-12 p-2"></div>
                </div>
                <div table-body class="overflow-y-auto">
                    <div table-row *ngFor="let module of modules | async; let i = index">
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
                                class="h-2 w-2 rounded-full"
                                [class.bg-black]="!module.connected"
                                [class.bg-success]="module.connected"
                            ></div>
                        </div>
                        <div flex class="flex-1 p-2" i18n="@@nameLabel">
                            {{ module.custom_name || module.name }}
                        </div>
                        <div class="w-48 p-2" i18n="@@triggerCountLabel">
                            {{ module.system?.name || '~No System~' }}
                        </div>
                        <div class="w-12 p-2">
                            <button mat-icon-button (click)="removeModule(module)">
                                <app-icon className="backoffice-trash"></app-icon>
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
    /** Subject holding the value of the search */
    public readonly filter$ = new BehaviorSubject<string>('');
    /** Whether systems are being loaded */
    public readonly loading = this._service.loading;
    /** Currently active driver */
    public readonly item = this._service.item;
    /** List of modules */
    public readonly modules = combineLatest([this.filter$, this._service.modules]).pipe(
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
}
