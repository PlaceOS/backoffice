import { Component, inject, signal } from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { post } from '@placeos/ts-client';
import { notifyError, notifySuccess } from '../common/notifications';
import { ObjectListFieldComponent } from '../ui/custom-fields/object-list-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { StaffTenantModalData } from './staff-tenant-modal.component';

@Component({
    selector: 'booking-limits-modal',
    template: `
        <fullscreen-modal-shell
            heading="Edit Tenant Booking Limits
        "
            [loading]="
                loading() ? 'Saving booking limits for Staff API tenant...' : ''
            "
            (save)="save()"
        >
            <div class="flex flex-col">
                <object-list-field
                    [formField]="form.booking_limits"
                    [fields]="['type', 'amount']"
                />
            </div>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        ObjectListFieldComponent,
        FormField,
    ],
})
export class BookingLimitsModalComponent {
    private _data: StaffTenantModalData = inject(MAT_DIALOG_DATA);
    private _dialog_ref: MatDialogRef<BookingLimitsModalComponent> = inject(
        MatDialogRef<BookingLimitsModalComponent>,
    );

    public readonly tenant = this._data.tenant;
    public readonly domain = this._data.domain;

    public readonly formModel = signal({
        booking_limits: [] as { type: string; amount: string }[],
    });
    public readonly form = form(this.formModel);

    public readonly loading = signal(false);

    constructor() {
        const limits = this.tenant?.booking_limits || {};
        this.formModel.set({
            booking_limits: Object.keys(limits).map((k) => ({
                type: k,
                amount: `${limits[k]}`,
            })),
        });
    }

    public async save() {
        await submit(this.form, async () => {
            this._dialog_ref.disableClose = true;
            this.loading.set(true);
            const limits = this.formModel().booking_limits || [];
            const booking_limits = {};
            for (const { type, amount } of limits) {
                booking_limits[type] = +amount || 0;
            }
            const call = post(
                `/api/staff/v1/tenants/${this.tenant.id}/limits`,
                booking_limits,
            );
            const resp = await call.catch(() => null);
            this.loading.set(false);
            this._dialog_ref.disableClose = false;
            if (!resp) return notifyError('Error adding new tenant.');
            notifySuccess('Successfully added new tenant.');
            this._dialog_ref.close({ ...this.tenant, booking_limits: resp });
        });
    }
}
