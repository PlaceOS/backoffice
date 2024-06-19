import { Component } from '@angular/core';
import { PlaceRepository } from '@placeos/ts-client';

import { RepositoriesStateService } from './repositories-state.service';
import { Router } from '@angular/router';
import { AsyncHandler } from '../common/async-handler.class';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'repository-drivers',
    template: `
        <h3 class="font-medium text-lg mb-2" i18n="@@repoDriverHeader">
            Available Drivers
        </h3>
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!loading"
        ></mat-progress-bar>
        <simple-table
            class="min-w-[32rem] block text-sm"
            [data]="driver_list"
            [columns]="[
                {
                    key: 'name',
                    name: 'Name',
                    content: name_template,
                },
                { key: 'actions', name: ' ', size: '3.25rem', sortable: false, content: actions_template }
            ]"
            [sortable]="true"
            empty_message="No drivers for repository"
        ></simple-table>
        <div class="w-full h-8"></div>
        <ng-template #name_template let-row="row">
            <div
                class="flex items-center px-4 py-2 font-mono text-sm"
                [innerHTML]="row | driverFormat"
            ></div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    matTooltip="New Driver"
                    matTooltipPosition="left"
                    (click)="newDriver(item)"
                >
                    <app-icon>add</app-icon>
                </button>
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
export class RepositoryDriversComponent extends AsyncHandler {
    /** Whether driver list is loading */
    public loading: boolean;
    /** List of drivers available in the repository */
    public readonly driver_list = this._service.driver_list;

    public get item(): PlaceRepository {
        return this._service.active_item as any;
    }

    public readonly newDriver = (d) => this._service.newDriver(d);

    constructor(
        private _service: RepositoriesStateService,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.timeout(
            'has_drivers',
            () => this._router.navigate(['/repositories', this.item.id]),
            3000
        );
        this.subscription(
            'has_drivers',
            this.driver_list.subscribe((_) => {
                if (_?.length) this.clearTimeout('has_drivers');
            })
        );
    }
}
