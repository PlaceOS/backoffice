import { Component, computed, inject, model } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-systems',
    template: `
        <div class="p-4">
            <div class="flex">
                <mat-form-field class="flex-1" appearance="outline">
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        matInput
                        [(ngModel)]="filter"
                        name="search-filter"
                        [placeholder]="'SYSTEMS.SEARCH' | translate"
                    />
                </mat-form-field>
            </div>
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!loading()"
            />
            <simple-table
                class="block min-w-lg text-sm"
                [data]="systems()"
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
            />
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
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [
        DateFromPipe,
        RouterModule,
        SimpleTableComponent,
        TranslatePipe,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        IconComponent,
    ],
})
export class ZoneSystemsComponent {
    private _state = inject(ZonesStateService);

    public readonly filter = model('');
    public readonly loading = this._state.loading;
    private readonly _systems = this._state.systems;

    public readonly systems = computed(() => {
        const filter = this.filter().toLowerCase();
        const systems = this._systems();
        return !filter
            ? systems
            : systems.filter((sys) => sys.name.toLowerCase().includes(filter));
    });
}
