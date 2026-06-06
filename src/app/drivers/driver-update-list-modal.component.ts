import { SlicePipe } from '@angular/common';
import { Component, computed, inject, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { queryDrivers, updateDriver } from '@placeos/ts-client';
import { notifyError, notifySuccess } from '../common/notifications';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'driver-update-list-modal',
    template: `
        <header
            class="border-base-100 bg-base-200 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] justify-between rounded-sm border px-4 py-2"
        >
            <h2 class="flex items-center space-x-4 text-xl font-medium">
                <div>{{ 'DRIVERS.UPDATE' | translate }}</div>
                @if (!loading()) {
                    <code class="mono bg-base-300 rounded-sm px-2 py-1 text-xs">
                        {{
                            'DRIVERS.UPDATE_COUNT'
                                | translate
                                    : {
                                          count:
                                              drivers_with_updates().total || 0,
                                      }
                        }}
                    </code>
                }
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (drivers_with_updates() && !loading()) {
            <main class="max-h-[65vh] w-[80vw] max-w-3xl overflow-y-auto">
                <table class="mx-2 w-[calc(100%-1rem)] rounded-sm">
                    <thead class="sticky top-0 z-10 text-left">
                        <tr class="bg-base-300!">
                            <th>
                                <mat-checkbox
                                    [checked]="all_selected()"
                                    [indeterminate]="some_selected()"
                                    (change)="toggleAll($event.checked)"
                                ></mat-checkbox>
                            </th>
                            <th>{{ 'COMMON.FIELD_NAME' | translate }}</th>
                            <th>{{ 'COMMON.VERSION_CURRENT' | translate }}</th>
                            <th>{{ 'COMMON.VERSION_LATEST' | translate }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if (drivers_with_updates(); as drivers) {
                            @if (drivers.total > 0) {
                                @for (driver of drivers.data; track driver.id) {
                                    <tr>
                                        <td>
                                            <mat-checkbox
                                                [ngModel]="
                                                    selected_drivers().includes(
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
                                                [matTooltip]="
                                                    driver.update_info.commit
                                                "
                                                >{{
                                                    driver.update_info.commit
                                                        | slice: 0 : 9
                                                }}</code
                                            >
                                            <div class="text-xs opacity-60">
                                                {{
                                                    driver.update_info.date
                                                        | dateFrom
                                                }}
                                            </div>
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
        @if (!loading()) {
            <footer
                class="border-base-100 bg-base-200 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] justify-end space-x-2 rounded-sm border p-2"
            >
                <button
                    btn
                    matRipple
                    [disabled]="selected_drivers().length <= 0"
                    (click)="updateDrivers()"
                >
                    {{ 'DRIVERS.UPDATE_SELECTED' | translate }} ({{
                        selected_drivers().length
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
    imports: [
        MatDialogModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatTooltipModule,
        FormsModule,
        DateFromPipe,
        SlicePipe,
    ],
})
export class DriverUpdateListModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<DriverUpdateListModalComponent>>(MatDialogRef);

    public readonly loading = signal('Loading drivers...');
    private readonly _change = signal(0);
    private readonly _drivers_with_updates = resource({
        params: () => this._change(),
        loader: async () => {
            this.loading.set('Loading drivers...');
            const response = await queryDrivers({
                update_available: true,
                limit: 1000,
            }).catch(() => ({ data: [], total: 0 }));
            response.data = response.data.filter(
                (_) => _.commit !== _.update_info.commit,
            );
            response.data = response.data.sort((a, b) =>
                a.name.localeCompare(b.name),
            );
            this.selected_drivers.set(response.data.map((d) => d.id));
            this.loading.set('');
            return response;
        },
    });
    public readonly drivers_with_updates = computed(
        () => this._drivers_with_updates.value() || { data: [], total: 0 },
    );
    public readonly selected_drivers = signal<string[]>([]);

    public readonly all_selected = computed(
        () =>
            this.selected_drivers().length ===
            this.drivers_with_updates().total,
    );

    public readonly some_selected = computed(
        () => this.selected_drivers().length > 0 && !this.all_selected(),
    );

    public toggleDriver(id: string, state: boolean) {
        const selected = this.selected_drivers().filter((_) => _ !== id);
        if (state) selected.push(id);
        this.selected_drivers.set(selected);
    }

    public toggleAll(state: boolean) {
        if (!state) {
            this.selected_drivers.set([]);
            return;
        }
        this.selected_drivers.set(
            this.drivers_with_updates().data.map((_) => _.id),
        );
    }

    public async updateDrivers() {
        this.loading.set('Updating drivers...');
        this._dialog_ref.disableClose = true;
        const drivers = this.drivers_with_updates();
        const selected = drivers.data.filter((_) =>
            this.selected_drivers().includes(_.id),
        );
        await Promise.all(
            selected.map((driver) =>
                driver.commit !== driver.update_info.commit
                    ? updateDriver(driver.id, {
                          ...driver,
                          commit: driver.update_info.commit,
                      })
                    : Promise.resolve(),
            ),
        ).catch((_) => {
            notifyError('Error updating drivers', _);
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        });
        notifySuccess(`Successfully updated ${selected.length} drivers`);
        this.loading.set('');
        if (this.all_selected()) this._dialog_ref.close();
        else this._change.set(Date.now());
    }
}
