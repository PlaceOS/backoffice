import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { ModuleStateService } from './module-state.service';

@Component({
    selector: 'module-systems',
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
                    placeholder="Filter systems..."
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
                <div class="flex flex-col items-start px-4 py-2 leading-snug">
                    <a
                        class="truncate underline"
                        [routerLink]="['/systems', row.id]"
                    >
                        {{ row.name }}
                    </a>
                    <div class="text-[0.625rem] opacity-30 font-mono">
                        {{ row.id }}
                    </div>
                </div>
            </ng-template>
            <ng-template #added_template let-row="row">
                <div class="p-4">
                    {{ +row.created_at * 1000 | dateFrom }}
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
