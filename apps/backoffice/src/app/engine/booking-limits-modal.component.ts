import { Component, Inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { post } from '@placeos/ts-client';
import { notifyError, notifySuccess } from '../common/notifications';
import { StaffTenantModalData } from './staff-tenant-modal.component';

@Component({
    selector: 'booking-limits-modal',
    template: ` <header>
            <h3>Edit Tenant Booking Limits</h3>
            <div class="flex-1"></div>
            <button *ngIf="!loading" mat-icon-button mat-dialog-close>
                <app-icon className="backoffice-cross"></app-icon>
            </button>
        </header>
        <main
            [formGroup]="form"
            *ngIf="!loading; else load_state"
            class="overflow-auto w-[512px] max-w-[100vw]"
        >
            <div class="flex flex-col">
                <object-list-field
                    formControlName="booking_limits"
                    [fields]="['type', 'amount']"
                ></object-list-field>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="p-2 border-t border-gray-200 flex justify-center"
        >
            <button mat-button class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main class="flex flex-col p-8 items-center justify-center">
                <mat-spinner class="mb-4" [diameter]="48"></mat-spinner>
                <p>Saving booking limits for Staff API tenant...</p>
            </main>
        </ng-template>`,
    styles: [``],
})
export class BookingLimitsModalComponent {
    public readonly tenant = this._data.tenant;
    public readonly domain = this._data.domain;

    public form: FormGroup = new FormGroup({
        booking_limits: new FormControl([]),
    });

    public loading = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: StaffTenantModalData,
        private _dialog_ref: MatDialogRef<BookingLimitsModalComponent>
    ) {
        const limits = this.tenant?.booking_limits || {};
        this.form.patchValue({
            booking_limits: Object.keys(limits).map((k) => ({
                type: k,
                amount: limits[k],
            })),
        });
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._dialog_ref.disableClose = true;
        this.loading = true;
        const limits: { type: string; amount: string }[] =
            this.form.value.booking_limits || [];
        const booking_limits = {};
        for (const { type, amount } of limits) {
            booking_limits[type] = +amount || 0;
        }
        console.log('Limits:', limits, booking_limits);
        const call = post(
            `/api/staff/v1/tenants/${this.tenant.id}/limits`,
            booking_limits
        );
        const resp = await call.toPromise().catch((_) => null);
        this.loading = false;
        this._dialog_ref.disableClose = false;
        if (!resp) return notifyError('Error adding new tenant.');
        notifySuccess('Successfully added new tenant.');
        this._dialog_ref.close({ ...this.tenant, booking_limits: resp });
    }
}
