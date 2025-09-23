import { Component, inject } from '@angular/core';
import { PlaceZone } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-children',
    template: `
        <div class="flex items-center">
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
                    [placeholder]="'ZONES.SEARCH' | translate"
                />
            </mat-form-field>
        </div>
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!(loading | async)"
        />
        <simple-table
            class="block min-w-[32rem] text-sm"
            [data]="children"
            [columns]="[
                {
                    key: 'name',
                    name: 'COMMON.FIELD_NAME' | translate,
                    content: name_template,
                },
                {
                    key: 'description',
                    name: 'COMMON.FIELD_DESCRIPTION' | translate,
                    content: description_template,
                },
            ]"
            [sortable]="true"
            [empty_message]="'ZONES.CHILDREN_EMPTY' | translate"
        />
        <ng-template #name_template let-row="row">
            <div class="flex flex-col items-start px-4 py-2 leading-snug">
                <a class="truncate underline" [routerLink]="['/zones', row.id]">
                    {{ row.name }}
                </a>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="w-full select-text overflow-hidden px-4 py-2 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'ZONES.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
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
    imports: [
        TranslatePipe,
        SimpleTableComponent,
        CommonModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        FormsModule,
    ],
})
export class ZoneChildrenComponent {
    private _state = inject(ZonesStateService);

    public readonly filter$ = new BehaviorSubject<string>('');
    /** List of triggers associated with the zone */
    public readonly children = combineLatest([
        this.filter$,
        this._state.children,
    ]).pipe(
        map((details) => {
            const [filter, zones] = details;
            const search = filter.toLowerCase();
            return !filter
                ? zones
                : zones.filter((sys) =>
                      sys.name.toLowerCase().includes(search),
                  );
        }),
    );

    public readonly loading = this._state.loading;

    public get item(): PlaceZone {
        return this._state.active_item as any;
    }
}
