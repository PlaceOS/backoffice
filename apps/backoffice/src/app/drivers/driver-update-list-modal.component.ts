import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { queryDrivers, updateDriver } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';
import { nextValueFrom } from '../common/general';
import { notifyError, notifySuccess } from '../common/notifications';

@Component({
    selector: 'driver-update-list-modal',
    template: `
        <header class="border-b border-base-200">
            <h2>
                {{ 'DRIVERS.UPDATE' | translate }}
                @if (!loading) {
                    <span>
                        -
                        {{
                            'DRIVERS.UPDATE_COUNT'
                                | translate
                                    : {
                                          count:
                                              (drivers_with_updates | async)
                                                  ?.total || 0,
                                      }
                        }}
                    </span>
                }
            </h2>
            @if (!loading) {
                <button btn icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            }
        </header>
        @if ((drivers_with_updates | async) && !loading) {
            <main class="max-h-[65vh] w-[80vw] max-w-[48rem] overflow-auto">
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
                            <th>{{ 'COMMON.FIELD_NAME' | translate }}</th>
                            <th>{{ 'COMMON.VERSION_CURRENT' | translate }}</th>
                            <th>{{ 'COMMON.VERSION_LATEST' | translate }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if (drivers_with_updates | async; as drivers) {
                            @if (drivers.total > 0) {
                                @for (driver of drivers.data; track driver.id) {
                                    <tr>
                                        <td>
                                            <mat-checkbox
                                                [ngModel]="
                                                    selected_drivers.includes(
                                                        driver.id
                                                    )
                                                "
                                                (ngModelChange)="
                                                    toggleDriver(
                                                        driver.id,
                                                        $event
                                                    )
                                                "
                                            ></mat-checkbox>
                                        </td>
                                        <td>{{ driver.name }}</td>
                                        <td>
                                            <code
                                                [matTooltip]="driver.commit"
                                                >{{
                                                    driver.commit | slice: 0 : 9
                                                }}</code
                                            >
                                        </td>
                                        <td>
                                            <code
                                                [matTooltip]="driver.commit"
                                                >{{
                                                    driver.update_info.commit
                                                        | slice: 0 : 9
                                                }}</code
                                            >
                                        </td>
                                    </tr>
                                }
                            } @else {
                                <tr>
                                    <td colspan="4" class="opacity-30">
                                        {{ 'DRIVERS.NO_UPDATES' | translate }}
                                    </td>
                                </tr>
                            }
                        }
                    </tbody>
                </table>
            </main>
        } @else {
            <div
                class="flex h-48 w-[20rem] flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'DRIVERS.LOADING' | translate }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="flex justify-end space-x-2 border-t border-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    [disabled]="selected_drivers.length <= 0"
                    (click)="updateDrivers()"
                >
                    {{ 'DRIVERS.UPDATE_SELECTED' | translate }} ({{
                        selected_drivers.length
                    }})
                </button>
            </footer>
        }
    `,
    styles: [
        `
            th {
                padding: 0.25rem 0.5rem;
            }
        `,
    ],
    standalone: false,
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
        shareReplay(1),
    );
    public selected_drivers = [];

    public get all_selected() {
        return this.selected_drivers.length === this.driver_count;
    }

    public get some_selected() {
        return this.selected_drivers.length > 0 && !this.all_selected;
    }

    constructor(
        private _dialog_ref: MatDialogRef<DriverUpdateListModalComponent>,
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
            await nextValueFrom(this.drivers_with_updates)
        ).data.map((_) => _.id);
    }

    public async updateDrivers() {
        this.loading = 'Updating drivers...';
        this._dialog_ref.disableClose = true;
        const drivers = await nextValueFrom(this.drivers_with_updates);
        const selected = drivers.data.filter((_) =>
            this.selected_drivers.includes(_.id),
        );
        await Promise.all(
            selected.map((driver) =>
                driver.commit !== driver.update_info.commit
                    ? updateDriver(driver.id, {
                          ...driver,
                          commit: driver.update_info.commit,
                      }).toPromise()
                    : Promise.resolve(),
            ),
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
