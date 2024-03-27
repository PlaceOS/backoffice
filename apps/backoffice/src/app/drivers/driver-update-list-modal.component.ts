import { Component } from '@angular/core';
import { queryDrivers, updateDriver } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import {
    catchError,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { notifyError, notifySuccess } from '../common/notifications';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'driver-update-list-modal',
    template: `
        <header class="border-b border-base-200">
            <h2>
                Update Drivers
                <span *ngIf="!loading">
                    - {{ (drivers_with_updates | async)?.total || 0 }}
                    updates available
                </span>
            </h2>
            <button btn icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            *ngIf="(drivers_with_updates | async) && !loading; else load_state"
            class="w-[80vw] max-w-[48rem] max-h-[65vh] overflow-auto"
        >
            <table>
                <thead class="text-left">
                    <tr>
                        <th>
                            <mat-checkbox
                                [checked]="all_selected"
                                [indeterminate]="some_selected"
                                (change)="toggleAll($event.checked)"
                            ></mat-checkbox>
                        </th>
                        <th>Name</th>
                        <th>Current Version</th>
                        <th>Latest Version</th>
                    </tr>
                </thead>
                <tbody>
                    <ng-container
                        *ngIf="drivers_with_updates | async as drivers"
                    >
                        <ng-container
                            *ngIf="drivers.total > 0; else empty_state"
                        >
                            <tr *ngFor="let driver of drivers.data">
                                <td>
                                    <mat-checkbox
                                        [ngModel]="
                                            selected_drivers.includes(driver.id)
                                        "
                                        (ngModelChange)="
                                            toggleDriver(driver.id, $event)
                                        "
                                    ></mat-checkbox>
                                </td>
                                <td>{{ driver.name }}</td>
                                <td>
                                    <code [matTooltip]="driver.commit">{{
                                        driver.commit | slice: 0:9
                                    }}</code>
                                </td>
                                <td>
                                    <code [matTooltip]="driver.commit">{{
                                        driver.update_info.commit | slice: 0:9
                                    }}</code>
                                </td>
                            </tr>
                        </ng-container>
                    </ng-container>
                    <ng-template #empty_state>
                        <tr>
                            <td colspan="4">No drivers require updating.</td>
                        </tr>
                    </ng-template>
                </tbody>
            </table>
        </main>
        <footer
            *ngIf="!loading"
            class="border-t border-base-200 p-2 flex justify-end space-x-2"
        >
            <button
                btn
                matRipple
                [disabled]="selected_drivers.length <= 0"
                (click)="updateDrivers()"
            >
                Update Selected Drivers ({{ selected_drivers.length }})
            </button>
        </footer>
        <ng-template #load_state>
            <div
                class="w-[20rem] h-48 flex flex-col space-y-2 items-center justify-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading || 'Loading drivers...' }}</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            th {
                padding: 0.25rem 0.5rem;
            }
        `,
    ],
})
export class DriverUpdateListModalComponent {
    public loading = 'Loading drivers...';
    public driver_count = 0;
    private readonly _change = new BehaviorSubject(0);
    public drivers_with_updates = this._change.pipe(
        switchMap(() => {
            this.loading = 'Loading drivers...';
            return queryDrivers({
                update_available: true,
                limit: 1000,
            }).pipe(catchError(() => of({ data: [], total: 0 })));
        }),
        map((_) => {
            _.data = _.data.filter((_) => _.commit !== _.update_info.commit);
            _.data = _.data.sort((a, b) => a.name.localeCompare(b.name));
            this.selected_drivers = _.data.map((d) => d.id);
            this.driver_count = _.total;
            this.loading = '';
            return _;
        }),
        shareReplay(1)
    );
    public selected_drivers = [];

    public get all_selected() {
        return this.selected_drivers.length === this.driver_count;
    }

    public get some_selected() {
        return this.selected_drivers.length > 0 && !this.all_selected;
    }

    constructor(
        private _dialog_ref: MatDialogRef<DriverUpdateListModalComponent>
    ) {}

    public toggleDriver(id: string, state: boolean) {
        this.selected_drivers = this.selected_drivers.filter((_) => _ !== id);
        if (state) this.selected_drivers.push(id);
    }

    public async toggleAll(state: boolean) {
        console.log('Toggle all:', state);
        if (!state) {
            this.selected_drivers = [];
            return;
        }
        this.selected_drivers = (
            await this.drivers_with_updates.pipe(take(1)).toPromise()
        ).data.map((_) => _.id);
    }

    public async updateDrivers() {
        this.loading = 'Updating drivers...';
        this._dialog_ref.disableClose = true;
        const drivers = await this.drivers_with_updates
            .pipe(take(1))
            .toPromise();
        const selected = drivers.data.filter((_) =>
            this.selected_drivers.includes(_.id)
        );
        await Promise.all(
            selected.map((driver) =>
                driver.commit !== driver.update_info.commit
                    ? updateDriver(driver.id, {
                          ...driver,
                          commit: driver.update_info.commit,
                      }).toPromise()
                    : Promise.resolve()
            )
        ).catch((_) => {
            notifyError('Error updating drivers', _);
            this.loading = '';
            this._dialog_ref.disableClose = false;
        });
        notifySuccess(`Successfully updated ${selected.length} drivers`);
        this.loading = '';
        if (this.all_selected) this._dialog_ref.close();
        else this._change.next(Date.now());
    }
}
