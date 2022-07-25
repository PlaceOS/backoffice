import { Component } from '@angular/core';
import { PlaceRepository } from '@placeos/ts-client';

import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'repository-drivers',
    template: `
        <h3 class="font-medium text-lg mb-2" i18n="@@repoDriverHeader">Available Drivers</h3>
        <ng-container *ngIf="!loading; else load_state">
            <div
                role="table"
                class="overflow-x-auto"
                *ngIf="(driver_list | async)?.length; else empty_state"
            >
                <div table-head>
                    <td class="flex-1 p-2" i18n="@@driverListname">Name</td>
                    <td class="w-12 p-2 h-10"></td>
                </div>
                <div body class="overflow-y-auto">
                    <div table-row *ngFor="let item of driver_list | async">
                        <div class="flex-1 p-2" [innerHTML]="item | driverFormat"></div>
                        <div class="w-12 flex justify-center">
                            <button mat-icon-button (click)="newDriver(item)">
                                <app-icon className="backoffice-plus"></app-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ng-container>
        <ng-template #empty_state>
            <div class="flex flex-col p-8 items-center justify-center">
                <p i18n="@@driverListEmpty">No drivers for repository</p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div class="flex flex-col p-8 items-center justify-center">
                <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                <p i18n="@@driverListLoading">Loading driver list...</p>
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
export class RepositoryDriversComponent {
    /** Whether driver list is loading */
    public loading: boolean;
    /** List of drivers available in the repository */
    public readonly driver_list = this._service.driver_list;

    public get item(): PlaceRepository {
        return this._service.active_item as any;
    }

    public readonly newDriver = (d) => this._service.newDriver(d);

    constructor(private _service: RepositoriesStateService) { }
}
