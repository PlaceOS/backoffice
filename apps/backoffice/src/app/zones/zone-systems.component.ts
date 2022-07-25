import { Component } from '@angular/core';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-systems',
    template: `
        <div class="flex">
            <mat-form-field class="flex-1" appearance="outline">
                <app-icon
                    matPrefix
                    class="text-lg"
                    className="backoffice-magnifying-glass"
                ></app-icon>
                <input
                    matInput
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    name="search-filter"
                    placeholder="Filter Systems"
                />
            </mat-form-field>
        </div>
        <div role="table" *ngIf="(systems | async)?.length; else empty_state">
            <div table-head>
                <div class="flex-1 p-2" i18n="@@systemTableName">Name</div>
                <div class="w-28 p-2" i18n="@@systemTablePanelCount">No. Modules</div>
                <div class="w-32 p-2" i18n="@@systemTableCreated">Created</div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of systems | async">
                    <div class="flex-1 p-2 underline">
                        <a
                            [routerLink]="['/systems', item.id]"
                            [matTooltip]="item.id"
                            matTooltipPosition="right"
                        >
                            {{ item.name }}
                        </a>
                    </div>
                    <div class="w-28 p-2">{{ item.modules.length }}</div>
                    <div class="w-32 p-2">{{ item?.created_at * 1000 | dateFrom }}</div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8">
                <p i18n="@@systemTableEmpty">No systems found</p>
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
})
export class ZoneSystemsComponent {
    public readonly filter$ = new BehaviorSubject<string>('');

    public readonly systems = combineLatest([this.filter$, this._state.systems]).pipe(
        map((details) => {
            const [filter, systems] = details;
            const search = filter.toLowerCase();
            return !filter
                ? systems
                : systems.filter((sys) => sys.name.toLowerCase().includes(search));
        })
    );

    constructor(private _state: ZonesStateService) {}
}
