import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { cleanObject, PlaceDomain, post, put } from '@placeos/ts-client';
import { getInvalidFields } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, HashMap } from '../common/types';
import { ObjectListFieldComponent } from '../ui/custom-fields/object-list-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
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
                <div class="flex flex-wrap items-center space-x-0 sm:space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label>
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
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
                    <div class="flex flex-1 flex-col">
                        <label>
                            {{ 'ADMIN.TENANTS_PLATFORM' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select formControlName="platform">
                                <mat-option value="google">Google</mat-option>
                                <mat-option value="office365">
                                    Office365
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-1 flex-col">
                    <label>
                        {{ 'ADMIN.TENANTS_EMAIL_DOMAIN' | translate }}
                    </label>
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
                                {{
                                    'ADMIN.TENANTS_MINUTES'
                                        | translate: { minute: 15 }
                                }}
                            </mat-option>
                            <mat-option [value]="30 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES'
                                        | translate: { minute: 30 }
                                }}
                            </mat-option>
                            <mat-option [value]="45 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES'
                                        | translate: { minute: 45 }
                                }}
                            </mat-option>
                            <mat-option [value]="60 * 60">
                                {{
                                    'ADMIN.TENANTS_HOURS'
                                        | translate: { hour: 1 }
                                }}
                            </mat-option>
                            <mat-option [value]="1.5 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES_HOURS'
                                        | translate: { minute: 30, hour: 1 }
                                }}
                            </mat-option>
                            <mat-option [value]="2 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_HOURS'
                                        | translate: { hour: 2 }
                                }}
                            </mat-option>
                            <mat-option [value]="2.5 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES_HOURS'
                                        | translate: { minute: 30, hour: 2 }
                                }}
                            </mat-option>
                            <mat-option [value]="3 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_HOURS'
                                        | translate: { hour: 3 }
                                }}
                            </mat-option>
                            <mat-option [value]="3.5 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES_HOURS'
                                        | translate: { minute: 30, hour: 3 }
                                }}
                            </mat-option>
                            <mat-option [value]="4 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_HOURS'
                                        | translate: { hour: 4 }
                                }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                @if (
                    form.value.platform !== 'google' && !form.value.delegated
                ) {
                    <div
                        class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label>
                                {{
                                    'ADMIN.TENANTS_SERVICE_ACCOUNT' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="service_account"
                                    [placeholder]="
                                        'ADMIN.TENANTS_SERVICE_ACCOUNT'
                                            | translate
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
                }
                <div class="mb-6 flex items-center">
                    <settings-toggle
                        [name]="'ADMIN.TENANTS_DELEGATED' | translate"
                        class="w-1/2"
                        formControlName="delegated"
                    >
                    </settings-toggle>
                </div>
                @if (credentials) {
                    <form [formGroup]="credentials">
                        @for (
                            item of credentials.controls | keyvalue;
                            track item
                        ) {
                            <div
                                class="flex flex-col"
                                [class.hidden]="item.value?.disabled"
                            >
                                <label class="capitalize">
                                    {{ name_map[item.key] || item.key }}
                                    @if (
                                        item.key !== 'conference_type' &&
                                        !form.value.id
                                    ) {
                                        <span>*</span>
                                    }
                                </label>
                                <mat-form-field appearance="outline">
                                    @switch (item.key) {
                                        @default {
                                            <input
                                                matInput
                                                [formControlName]="item.key"
                                                [placeholder]="
                                                    name_map[item.key] ||
                                                    item.key
                                                "
                                            />
                                        }
                                        @case ('signing_key') {
                                            <textarea
                                                matInput
                                                [formControlName]="item.key"
                                                [placeholder]="
                                                    name_map[item.key] ||
                                                    item.key
                                                "
                                            ></textarea>
                                        }
                                    }
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANT_ITEM_REQUIRED'
                                                | translate: { name: item.key }
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </form>
                }
                @if (form.value.platform === 'office365') {
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            [name]="'ADMIN.TENANTS_CONFIG_OUTLOOK' | translate"
                            class="w-1/2"
                            [(ngModel)]="show_outlook"
                            [ngModelOptions]="{ standalone: true }"
                        >
                        </settings-toggle>
                    </div>
                }
                @if (show_outlook && form.get('outlook_config')) {
                    <form formGroupName="outlook_config">
                        <div
                            class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                        >
                            <div class="flex flex-1 flex-col">
                                <label>
                                    {{ 'ADMIN.TENANTS_APP_ID' | translate }}
                                    <span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="app_id"
                                        [placeholder]="
                                            'ADMIN.TENANTS_APP_ID' | translate
                                        "
                                    />
                                    <mat-error>{{
                                        'ADMIN.TENANTS_APP_ID_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-1 flex-col">
                                <label>{{
                                    'ADMIN.TENANTS_APP_DOMAIN' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="app_domain"
                                        [placeholder]="
                                            'ADMIN.TENANTS_APP_DOMAIN'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANTS_APP_DOMAIN_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                        >
                            <div class="flex flex-1 flex-col">
                                <label>
                                    {{
                                        'ADMIN.TENANTS_APP_RESOURCE' | translate
                                    }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="app_resource"
                                        [placeholder]="
                                            'ADMIN.TENANTS_APP_RESOURCE'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANTS_APP_RESOURCE_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-1 flex-col">
                                <label>
                                    {{
                                        'ADMIN.TENANTS_SOURCE_LOCATION'
                                            | translate
                                    }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="source_location"
                                        [placeholder]="
                                            'ADMIN.TENANTS_SOURCE_LOCATION'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANTS_SOURCE_LOCATION_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center space-x-0 sm:space-x-4"
                        >
                            <div class="flex flex-1 flex-col">
                                <label>
                                    {{ 'ADMIN.TENANTS_BASE_PATH' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="base_path"
                                        [placeholder]="
                                            'ADMIN.TENANTS_BASE_PATH'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANTS_BASE_PATH_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                        </div>
                    </form>
                }
                <div class="flex flex-col space-y-2">
                    <label>{{
                        'ADMIN.TENANTS_BOOKING_LIMITS' | translate
                    }}</label>
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
    imports: [
        CommonModule,
        FullscreenModalShellComponent,
        ObjectListFieldComponent,
        ReactiveFormsModule,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        SettingsToggleComponent,
        MatSelectModule,
    ],
})
export class StaffTenantModalComponent implements OnInit {
    private _data = inject<StaffTenantModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<StaffTenantModalComponent>>(MatDialogRef);

    public readonly event = output<DialogEvent>();

    public readonly tenant = this._data.tenant;
    public readonly domain = this._data.domain;

    public show_outlook = false;

    public form = new FormGroup({
        id: new FormControl(this.tenant?.id || ''),
        domain: new FormControl(
            this.domain?.domain || this.tenant?.domain || 'localhost',
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
                platform === 'office365' ? this.office_form : this.google_form,
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
                    }),
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
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
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
            ['', null, undefined],
        );
        const call = this.tenant?.id
            ? put(`/api/staff/v1/tenants/${this.tenant.id}`, data)
            : post('/api/staff/v1/tenants', data);
        const tenant = await call.toPromise().catch((_) => null);
        this.loading = false;
        this._dialog_ref.disableClose = false;
        if (!tenant) return notifyError(i18n('ADMIN.TENANATS_SAVE_ERROR'));
        notifySuccess(i18n('ADMIN.TENANATS_SAVE_SUCCESS'));
        this._dialog_ref.close();
    }
}
