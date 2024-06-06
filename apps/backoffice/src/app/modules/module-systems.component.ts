import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

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
            <simple-table
                class="min-w-[32rem] block text-sm"
                [data]="system_list"
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
