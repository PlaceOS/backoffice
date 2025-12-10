import { Component, inject, OnInit } from '@angular/core';
import { PlaceRepository } from '@placeos/ts-client';

import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AsyncHandler } from '../common/async-handler.class';
import { IconComponent } from '../ui/icon.component';
import { DriverFormatPipe } from '../ui/pipes/driver-format.pipe';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'repository-drivers',
    template: `
        <h3 class="mb-2 text-lg font-medium">
            {{ 'REPOS.AVAILABLE_DRIVERS' | translate }}
        </h3>
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!loading"
        />
        <simple-table
            class="block min-w-lg text-sm"
            [data]="driver_list"
            [columns]="[
                {
                    key: 'name',
                    name: 'COMMON.FIELD_NAME' | translate,
                    content: name_template,
                },
                {
                    key: 'actions',
                    name: ' ',
                    size: '3.25rem',
                    sortable: false,
                    content: actions_template,
                },
            ]"
            [sortable]="true"
            [empty_message]="'REPOS.DRIVER_LIST_EMPTY' | translate"
        />
        <div class="h-8 w-full"></div>
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
                    [matTooltip]="'DRIVERS.NEW' | translate"
                    matTooltipPosition="left"
                    (click)="newDriver(item)"
                >
                    <icon>add</icon>
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
    imports: [
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        DriverFormatPipe,
        SimpleTableComponent,
        MatProgressBarModule,
        MatRippleModule,
    ],
})
export class RepositoryDriversComponent extends AsyncHandler implements OnInit {
    private _service = inject(RepositoriesStateService);
    private _router = inject(Router);

    /** Whether driver list is loading */
    public loading: boolean;
    /** List of drivers available in the repository */
    public readonly driver_list = this._service.driver_list;

    public get item(): PlaceRepository {
        return this._service.active_item as PlaceRepository;
    }

    public readonly newDriver = (d) => this._service.newDriver(d);

    public ngOnInit() {
        this.timeout(
            'has_drivers',
            () => this._router.navigate(['/repositories', this.item.id]),
            3000,
        );
        this.subscription(
            'has_drivers',
            this.driver_list.subscribe((_) => {
                if (_?.length) this.clearTimeout('has_drivers');
            }),
        );
    }
}
