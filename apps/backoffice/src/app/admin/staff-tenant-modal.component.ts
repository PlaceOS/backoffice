import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { cleanObject, PlaceDomain, post, put } from '@placeos/ts-client';
import { getInvalidFields } from '../common/general';
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
        <fullscreen-modal-shell
            [heading]="
                (tenant ? 'ADMIN.TENANTS_EDIT' : 'ADMIN.TENANTS_NEW')
                    | translate
            "
            [loading]="loading"
            (save)="save()"
        >
            <form [formGroup]="form" class="mb-16">
                <div class="flex items-center flex-wrap space-x-0 sm:space-x-2">
                    <div class="flex flex-col flex-1">
                        <label
                            >{{ 'COMMON.FIELD_NAME' | translate
                            }}<span>*</span>:</label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="name"
                                [placeholder]="
                                    'ADMIN.TENANTS_FIELD_NAME' | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.TENANTS_NAME_ERROR' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col flex-1">
                        <label
                            >{{ 'ADMIN.TENANTS_PLATFORM' | translate
                            }}<span>*</span>:</label
                        >
                        <mat-form-field appearance="outline">
                            <mat-select formControlName="platform">
                                <mat-option value="google">Google</mat-option>
                                <mat-option value="office365"
                                    >Office365</mat-option
                                >
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-col flex-1">
                    <label
                        >{{ 'ADMIN.TENANTS_EMAIL_DOMAIN' | translate }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="email_domain"
                            [placeholder]="
                                'ADMIN.TENANTS_EMAIL_PLACEHOLDER' | translate
                            "
                        />
                        <mat-error>{{
                            'ADMIN.TENANTS_EMAIL_ERROR' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label>{{
                        'ADMIN.TENANTS_EARLY_CHECKIN' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="early_checkin"
                            formControlName="early_checkin"
                            placeholder="Select time"
                        >
                            <mat-option [value]="15 * 60">
                                15 minutes
                            </mat-option>
                            <mat-option [value]="30 * 60">
                                30 minutes
                            </mat-option>
                            <mat-option [value]="45 * 60">
                                45 minutes
                            </mat-option>
                            <mat-option [value]="60 * 60"> 1 hour </mat-option>
                            <mat-option [value]="1.5 * 60 * 60">
                                1 hour 30 minutes
                            </mat-option>
                            <mat-option [value]="2 * 60 * 60">
                                2 hours
                            </mat-option>
                            <mat-option [value]="2.5 * 60 * 60">
                                2 hours 30 minutes
                            </mat-option>
                            <mat-option [value]="3 * 60 * 60">
                                3 hours
                            </mat-option>
                            <mat-option [value]="3.5 * 60 * 60">
                                3 hours 30 minutes
                            </mat-option>
                            <mat-option [value]="4 * 60 * 60">
                                4 hours
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div
                    class="flex items-center flex-wrap space-x-0 sm:space-x-2"
                    *ngIf="
                        form.value.platform !== 'google' &&
                        !form.value.delegated
                    "
                >
                    <div class="flex flex-col flex-1">
                        <label
                            >{{
                                'ADMIN.TENANTS_SERVICE_ACCOUNT' | translate
                            }}:</label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="service_account"
                                [placeholder]="
                                    'ADMIN.TENANTS_SERVICE_ACCOUNT' | translate
                                "
                            />
                            <mat-error>
                                {{
                                    'ADMIN.TENANTS_SERVICE_ACCOUNT_ERROR'
                                        | translate
                                }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex items-center mb-6">
                    <settings-toggle
                        [name]="'ADMIN.TENANTS_DELEGATED' | translate"
                        class="w-1/2"
                        formControlName="delegated"
                    >
                    </settings-toggle>
                </div>
                <form *ngIf="credentials" [formGroup]="credentials">
                    <ng-container
                        *ngFor="let item of credentials.controls | keyvalue"
                    >
                        <div
                            class="flex flex-col"
                            [class.hidden]="item.value?.disabled"
                        >
                            <label class="capitalize">
                                {{ name_map[item.key] || item.key }}
                                <span
                                    *ngIf="
                                        item.key !== 'conference_type' &&
                                        !form.value.id
                                    "
                                    >*</span
                                >:
                            </label>
                            <mat-form-field appearance="outline">
                                <ng-container [ngSwitch]="item.key">
                                    <input
                                        matInput
                                        *ngSwitchDefault
                                        [formControlName]="item.key"
                                        [placeholder]="
                                            name_map[item.key] || item.key
                                        "
                                    />
                                    <textarea
                                        matInput
                                        *ngSwitchCase="'signing_key'"
                                        [formControlName]="item.key"
                                        [placeholder]="
                                            name_map[item.key] || item.key
                                        "
                                    ></textarea>
                                </ng-container>
                                <mat-error>
                                    {{
                                        'ADMIN.TENANT_ITEM_REQUIRED'
                                            | translate: { name: item.key }
                                    }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    </ng-container>
                </form>
                <div
                    class="flex items-center mb-4"
                    *ngIf="form.value.platform === 'office365'"
                >
                    <settings-toggle
                        [name]="'ADMIN.TENANTS_CONFIG_OUTLOOK' | translate"
                        class="w-1/2"
                        [(ngModel)]="show_outlook"
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                </div>
                <form
                    *ngIf="show_outlook && form.get('outlook_config')"
                    formGroupName="outlook_config"
                >
                    <div
                        class="flex items-center flex-wrap space-x-0 sm:space-x-2"
                    >
                        <div class="flex flex-col flex-1">
                            <label>Outlook App ID<span>*</span>:</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="app_id"
                                    placeholder="Application ID"
                                />
                                <mat-error>{{
                                    'ADMIN.TENANTS_APP_ID_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col flex-1">
                            <label>Outlook App Domain:</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="app_domain"
                                    placeholder="Application Domain"
                                />
                                <mat-error>
                                    An application domain is required
                                </mat-error>
                            </mat-form-field>
                        </div>
                    </div>
                    <div
                        class="flex items-center flex-wrap space-x-0 sm:space-x-2"
                    >
                        <div class="flex flex-col flex-1">
                            <label>Outlook App Resource:</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="app_resource"
                                    placeholder="Application ID"
                                />
                                <mat-error>
                                    An application resource is required
                                </mat-error>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col flex-1">
                            <label>Outlook Source Location:</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="source_location"
                                    placeholder="Source Location"
                                />
                                <mat-error
                                    >A source location is required</mat-error
                                >
                            </mat-form-field>
                        </div>
                    </div>
                    <div
                        class="flex items-center flex-wrap space-x-0 sm:space-x-4"
                    >
                        <div class="flex flex-col flex-1">
                            <label>Outlook Base Path:</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="base_path"
                                    placeholder="outlook"
                                />
                                <mat-error>
                                    Base path to the application root folder is
                                    required
                                </mat-error>
                            </mat-form-field>
                        </div>
                    </div>
                </form>
                <div class="flex flex-col space-y-2">
                    <label>Booking Limits</label>
                    <object-list-field
                        formControlName="booking_limits"
                        [fields]="['type', 'amount']"
                    ></object-list-field>
                </div>
            </form>
        </fullscreen-modal-shell>
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

    public show_outlook = false;

    public form = new FormGroup({
        id: new FormControl(this.tenant?.id || ''),
        domain: new FormControl(
            this.domain?.domain || this.tenant?.domain || 'localhost'
        ),
        name: new FormControl(this.tenant?.name || '', [Validators.required]),
        email_domain: new FormControl(this.tenant?.email_domain || ''),
        delegated: new FormControl(this.tenant?.delegated ?? false),
        platform: new FormControl(this.tenant?.platform || 'google', [
            Validators.required,
        ]),
        service_account: new FormControl(this.tenant?.service_account, [
            Validators.email,
        ]),
        booking_limits: new FormControl([]),
        early_checkin: new FormControl(this.tenant?.early_checkin || 60 * 60),
        credentials:
            this.tenant?.platform === 'office365'
                ? this.office_form
                : this.google_form,
    });

    public loading = false;

    public readonly name_map = FIELD_NAME_MAPPING;

    public get office_form() {
        return new FormGroup({
            tenant: new FormControl('', [Validators.required]),
            client_id: new FormControl('', [Validators.required]),
            client_secret: new FormControl('', [Validators.required]),
            conference_type: new FormControl(''),
        });
    }

    public get google_form() {
        return new FormGroup({
            issuer: new FormControl('', [Validators.required]),
            signing_key: new FormControl('', [Validators.required]),
            scopes: new FormControl('', [Validators.required]),
            domain: new FormControl('', [Validators.required]),
            sub: new FormControl('', [Validators.required]),
            user_agent: new FormControl('PlaceOS', [Validators.required]),
            conference_type: new FormControl(''),
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
        const fields = [
            'tenant',
            'client_id',
            'client_secret',
            'issuer',
            'signing_key',
            'scopes',
            'sub',
            'domain',
            'user_agent',
        ];
        const handleDelegation = (delegated) => {
            if (delegated) {
                for (const field of fields) {
                    this.form.get('credentials')?.get(field)?.disable();
                    this.form.get('credentials')?.get(field)?.setValidators([]);
                }
            } else {
                const id = this.form.value.id;
                for (const field of fields) {
                    this.form.get('credentials')?.get(field)?.enable();
                    this.form
                        .get('credentials')
                        ?.get(field)
                        ?.setValidators(id ? [] : [Validators.required]);
                }
            }
            this.form.updateValueAndValidity();
        };
        this.form.controls.platform.valueChanges.subscribe((platform) => {
            const credentials = this.form.value.credentials;
            this.form.removeControl('credentials');
            this.form.addControl(
                'credentials',
                platform === 'office365' ? this.office_form : this.google_form
            );
            if (platform === 'office365') {
                (this.form as any).addControl(
                    'outlook_config',
                    new FormGroup({
                        app_id: new FormControl(''),
                        app_domain: new FormControl(''),
                        app_resource: new FormControl(''),
                        source_location: new FormControl(''),
                        base_path: new FormControl(''),
                    })
                );
            } else {
                (this.form as any).removeControl('outlook_config');
            }
            handleDelegation(this.form.value.delegated);
            this.form.patchValue({ credentials });
        });
        handleDelegation(this.form.value.delegated);
        this.form.controls.delegated.valueChanges.subscribe(handleDelegation);
        this.form.patchValue({
            ...(this.tenant || {}),
            domain: this.tenant?.domain || this._data.domain?.domain,
            booking_limits: Object.keys(limits).map((k) => ({
                type: k,
                amount: limits[k],
            })),
        });
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form)}]`
            );
        }
        this._dialog_ref.disableClose = true;
        this.loading = true;
        const limits: { type: string; amount: string }[] =
            this.form.value.booking_limits || [];
        const booking_limits = limits.reduce((m, { type, amount }) => {
            m[type] = +amount;
            return m;
        }, {});
        const value = this.form.value;
        if (!value.credentials.conference_type)
            delete value.credentials.conference_type;
        if (!this.show_outlook) {
            delete (value as any).outlook_config;
        } else {
            for (const key in (value as any).outlook_config) {
                if ((value as any).outlook_config[key] == null) {
                    delete (value as any).outlook_config[key];
                }
            }
        }
        for (const key in (value as any).credentials) {
            if ((value as any).credentials[key] == null) {
                delete (value as any).credentials[key];
            }
        }
        if (!Object.keys(value.credentials).length) {
            delete value.credentials;
        }
        const data = cleanObject(
            {
                ...(this.tenant || {}),
                ...value,
                booking_limits,
            },
            ['', null, undefined]
        );
        const call = this.tenant?.id
            ? put(`/api/staff/v1/tenants/${this.tenant.id}`, data)
            : post('/api/staff/v1/tenants', data);
        const tenant = await call.toPromise().catch((_) => null);
        this.loading = false;
        this._dialog_ref.disableClose = false;
        if (!tenant) return notifyError('Error adding new tenant.');
        notifySuccess('Successfully added new tenant.');
        this._dialog_ref.close();
    }
}
