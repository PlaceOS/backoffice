import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaceDomain, post, put } from '@placeos/ts-client';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, HashMap } from '../common/types';
import { PlaceTenant } from './staff-api.component';

const FIELD_NAME_MAPPING: HashMap<string> = {
    issuer: 'Service Account Email',
    conference_type: 'Conference Type',
    signing_key: 'Private Key',
    sub: 'Service User',
    client_id: 'Client ID',
    client_secret: 'Client Secret',
    domain: 'Domain',
    scopes: 'Scopes',
    user_agent: 'User Agent',
};

export interface StaffTenantModalData {
    tenant?: PlaceTenant;
    domain?: PlaceDomain;
}

@Component({
    selector: 'staff-tenant-modal',
    template: `
        <header>
            <h3>{{ tenant ? 'Edit' : 'New' }} Tenant</h3>
            <div class="flex-1"></div>
            <button *ngIf="!loading" mat-icon-button mat-dialog-close>
                <app-icon className="backoffice-cross"></app-icon>
            </button>
        </header>
        <main
            [formGroup]="form"
            *ngIf="!loading; else load_state"
            class="overflow-auto"
        >
            <div class="flex items-center flex-wrap space-x-0 sm:space-x-2">
                <div class="flex flex-col flex-1">
                    <label>Name<span>*</span>:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="name"
                            placeholder="Tenant Name"
                        />
                        <mat-error>A tenant name is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col flex-1">
                    <label>Platform<span>*</span>:</label>
                    <mat-form-field appearance="outline">
                        <mat-select formControlName="platform">
                            <mat-option value="google">Google</mat-option>
                            <mat-option value="office365">Office365</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex items-center mb-4">
                <mat-checkbox formControlName="delegated">Delegated</mat-checkbox>
            </div>
            <form *ngIf="credentials" [formGroup]="credentials">
                <div
                    class="flex flex-col"
                    *ngFor="let item of credentials.controls | keyvalue"
                    [class.hidden]="item.value?.disabled"
                >
                    <label class="capitalize"
                        >{{ name_map[item.key] || item.key
                        }}<span *ngIf="item.key !== 'conference_type'">*</span>:</label
                    >
                    <mat-form-field appearance="outline">
                        <ng-container [ngSwitch]="item.key">
                            <input
                                matInput
                                *ngSwitchDefault
                                [formControlName]="item.key"
                                [placeholder]="name_map[item.key] || item.key"
                            />
                            <textarea
                                matInput
                                *ngSwitchCase="'signing_key'"
                                [formControlName]="item.key"
                                [placeholder]="name_map[item.key] || item.key"
                            ></textarea>
                        </ng-container>
                        <mat-error>A {{ item.key }} is required</mat-error>
                    </mat-form-field>
                </div>
            </form>
            <div class="flex flex-col space-y-2">
                <label>Booking Limits</label>
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
                <p>Saving staff API tenant...</p>
            </main>
        </ng-template>
    `,
    styles: [
        `
            main {
                width: 32rem;
                max-width: calc(100vw - 5rem);
                max-height: 65vh;
            }
        `,
    ],
})
export class StaffTenantModalComponent implements OnInit {
    @Output() public readonly event = new EventEmitter<DialogEvent>();

    public readonly tenant = this._data.tenant;
    public readonly domain = this._data.domain;

    public form: FormGroup;

    public loading = false;

    public readonly name_map = FIELD_NAME_MAPPING;

    public get office_form() {
        return new FormGroup({
            tenant: new FormControl(this.tenant?.credentials?.tenant || '', [
                Validators.required,
            ]),
            client_id: new FormControl(
                this.tenant?.credentials?.client_id || '',
                [Validators.required]
            ),
            client_secret: new FormControl(
                this.tenant?.credentials?.client_secret || '',
                [Validators.required]
            ),
            conference_type: new FormControl(
                this.tenant?.credentials?.conference_type || ''
            ),
        });
    }

    public get google_form() {
        return new FormGroup({
            issuer: new FormControl(this.tenant?.credentials?.issue || '', [
                Validators.required,
            ]),
            signing_key: new FormControl(
                this.tenant?.credentials?.signing_key || '',
                [Validators.required]
            ),
            scopes: new FormControl(this.tenant?.credentials?.scopes || '', [
                Validators.required,
            ]),
            domain: new FormControl(
                this.tenant?.credentials?.domain ||
                    this._data.domain?.domain ||
                    '',
                [Validators.required]
            ),
            sub: new FormControl(this.tenant?.credentials?.sub || '', [
                Validators.required,
            ]),
            user_agent: new FormControl(
                this.tenant?.credentials?.user_agent || 'PlaceOS',
                [Validators.required]
            ),
            conference_type: new FormControl(
                this.tenant?.credentials?.conference_type || ''
            ),
        });
    }

    public get credentials(): FormGroup {
        return this.form?.controls.credentials as any;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: StaffTenantModalData,
        private _dialog_ref: MatDialogRef<StaffTenantModalComponent>
    ) {}

    public ngOnInit() {
        const limits = this.tenant?.booking_limits || {};
        this.form = new FormGroup({
            domain: new FormControl(
                this.domain?.domain || this.tenant.domain || 'localhost'
            ),
            name: new FormControl(this.tenant?.name || '', [
                Validators.required,
            ]),
            delegated: new FormControl(this.tenant?.delegated ?? false),
            platform: new FormControl(this.tenant?.platform || 'google', [
                Validators.required,
            ]),
            booking_limits: new FormControl(
                Object.keys(limits).map((k) => ({ type: k, amount: limits[k] }))
            ),
            credentials:
                this.tenant?.platform === 'office365'
                    ? this.office_form
                    : this.google_form,
        });
        const fields = ['tenant', 'client_id', 'client_secrect', 'issuer', 'signing_key', 'scopes', 'sub']
        const handleDelegation = (delegated) => {
            if (delegated) {
                for (const field of fields) {
                    this.form.get('credentials')?.get(field)?.disable();
                    this.form.get('credentials')?.get(field)?.setValidators([]);
                }
            } else {
                for (const field of fields) {
                    this.form.get('credentials')?.get(field)?.enable();
                    this.form.get('credentials')?.get(field)?.setValidators([Validators.required]);
                }
            }
        }
        this.form.controls.platform.valueChanges.subscribe((platform) => {
            this.form.removeControl('credentials');
            this.form.addControl(
                'credentials',
                platform === 'office365' ? this.office_form : this.google_form
            );
            handleDelegation(this.form.value.delegated);
        });
        this.form.controls.delegated.valueChanges.subscribe(handleDelegation);
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._dialog_ref.disableClose = true;
        this.loading = true;
        const limits: { type: string, amount: string }[] = this.form.value.booking_limits || [];
        const booking_limits = limits.reduce(
            (m, { type, amount }) => (m[type] = +amount),
            {}
        );
        const call = this.tenant?.id
            ? put(`/api/staff/v1/tenants/${this.tenant.id}`, {
                  ...(this.tenant || {}),
                  ...this.form.value,
                  booking_limits,
              })
            : post('/api/staff/v1/tenants', {
                  ...(this.tenant || {}),
                  ...this.form.value,
                  booking_limits,
              });
        const tenant = await call.toPromise().catch((_) => null);
        this.loading = false;
        this._dialog_ref.disableClose = false;
        if (!tenant) return notifyError('Error adding new tenant.');
        notifySuccess('Successfully added new tenant.');
        this._dialog_ref.close();
    }
}
