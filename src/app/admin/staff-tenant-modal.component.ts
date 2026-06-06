import {
    Component,
    computed,
    inject,
    model,
    output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    email,
    form,
    FormField,
    required,
    submit,
} from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { cleanObject, PlaceDomain, post, put } from '@placeos/ts-client';
import { getInvalidSignalFields } from '../common/forms';
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

const GOOGLE_CREDENTIALS = [
    'issuer',
    'signing_key',
    'scopes',
    'domain',
    'sub',
    'user_agent',
    'conference_type',
];

const OFFICE_CREDENTIALS = [
    'tenant',
    'client_id',
    'client_secret',
    'conference_type',
];

interface StaffTenantFormModel {
    id: string;
    domain: string;
    name: string;
    email_domain: string;
    delegated: boolean;
    platform: 'google' | 'office365';
    service_account: string;
    booking_limits: { type: string; amount: string | number }[];
    early_checkin: number;
    credentials: HashMap;
    outlook_config: HashMap;
}

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
            [loading]="loading()"
            (save)="save()"
        >
            <form class="mb-16">
                <div class="flex flex-wrap items-center space-x-0 sm:space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="tenant-name">
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                id="tenant-name"
                                matInput
                                [formField]="form.name"
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
                        <label for="tenant-platform">
                            {{ 'ADMIN.TENANTS_PLATFORM' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                id="tenant-platform"
                                [formField]="form.platform"
                            >
                                <mat-option value="google">Google</mat-option>
                                <mat-option value="office365">
                                    Office365
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="tenant-email-domain">
                        {{ 'ADMIN.TENANTS_EMAIL_DOMAIN' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            id="tenant-email-domain"
                            matInput
                            [formField]="form.email_domain"
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
                    <label for="tenant-early-checkin">{{
                        'ADMIN.TENANTS_EARLY_CHECKIN' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            id="tenant-early-checkin"
                            [formField]="form.early_checkin"
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
                    formModel().platform !== 'google' && !formModel().delegated
                ) {
                    <div
                        class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label for="tenant-service-account">
                                {{
                                    'ADMIN.TENANTS_SERVICE_ACCOUNT' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    id="tenant-service-account"
                                    matInput
                                    [formField]="form.service_account"
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
                        [label]="'ADMIN.TENANTS_DELEGATED' | translate"
                        class="w-1/2"
                        [formField]="form.delegated"
                    />
                </div>
                @for (item of credential_fields(); track item.key) {
                    <div class="flex flex-col" [class.hidden]="item.disabled">
                        <label
                            class="capitalize"
                            [for]="'credential-' + item.key"
                        >
                            {{ name_map[item.key] || item.key }}
                            @if (item.required) {
                                <span>*</span>
                            }
                        </label>
                        <mat-form-field appearance="outline">
                            @switch (item.key) {
                                @default {
                                    <input
                                        [id]="'credential-' + item.key"
                                        matInput
                                        [ngModel]="
                                            formModel().credentials[item.key] ||
                                            ''
                                        "
                                        (ngModelChange)="
                                            updateCredential(item.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="
                                            name_map[item.key] || item.key
                                        "
                                    />
                                }
                                @case ('signing_key') {
                                    <textarea
                                        [id]="'credential-' + item.key"
                                        matInput
                                        [ngModel]="
                                            formModel().credentials[item.key] ||
                                            ''
                                        "
                                        (ngModelChange)="
                                            updateCredential(item.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="
                                            name_map[item.key] || item.key
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
                @if (formModel().platform === 'office365') {
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            [label]="'ADMIN.TENANTS_CONFIG_OUTLOOK' | translate"
                            class="w-1/2"
                            [(ngModel)]="show_outlook"
                            [ngModelOptions]="{ standalone: true }"
                        />
                    </div>
                }
                @if (show_outlook() && formModel().platform === 'office365') {
                    <div
                        class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                    >
                        @for (item of outlook_fields; track item) {
                            <div class="flex flex-1 flex-col">
                                <label [for]="'outlook-' + item">
                                    {{ outlookName(item) | translate }}
                                    @if (item === 'app_id') {
                                        <span>*</span>
                                    }
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        [id]="'outlook-' + item"
                                        matInput
                                        [ngModel]="
                                            formModel().outlook_config[item] ||
                                            ''
                                        "
                                        (ngModelChange)="
                                            updateOutlookConfig(item, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="
                                            outlookName(item) | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                }
                <div class="flex flex-col space-y-2">
                    <span class="label">{{
                        'ADMIN.TENANTS_BOOKING_LIMITS' | translate
                    }}</span>
                    <object-list-field
                        [ngModel]="formModel().booking_limits"
                        (ngModelChange)="updateBookingLimits($event)"
                        [ngModelOptions]="{ standalone: true }"
                        [fields]="['type', 'amount']"
                    />
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
        FullscreenModalShellComponent,
        ObjectListFieldComponent,
        FormField,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        SettingsToggleComponent,
        MatSelectModule,
    ],
})
export class StaffTenantModalComponent {
    private _data = inject<StaffTenantModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<StaffTenantModalComponent>>(MatDialogRef);

    public readonly event = output<DialogEvent>();

    public readonly tenant = this._data.tenant;
    public readonly domain = this._data.domain;
    public readonly loading = signal('');
    public readonly show_outlook = model(false);
    public readonly name_map = FIELD_NAME_MAPPING;
    public readonly outlook_fields = [
        'app_id',
        'app_domain',
        'app_resource',
        'source_location',
        'base_path',
    ];

    public readonly formModel = signal(this.generateFormModel());
    public readonly form = form(this.formModel, (path) => {
        required(path.name);
        required(path.platform);
        email(path.service_account);
    });

    public readonly credential_fields = computed(() => {
        const model = this.formModel();
        const required = !model.id && !model.delegated;
        return this.credentialKeys().map((key) => ({
            key,
            required: required && key !== 'conference_type',
            disabled: model.delegated && key !== 'conference_type',
        }));
    });

    public outlookName(field: string) {
        switch (field) {
            case 'app_id':
                return 'ADMIN.TENANTS_APP_ID';
            case 'app_domain':
                return 'ADMIN.TENANTS_APP_DOMAIN';
            case 'app_resource':
                return 'ADMIN.TENANTS_APP_RESOURCE';
            case 'source_location':
                return 'ADMIN.TENANTS_SOURCE_LOCATION';
            default:
                return 'ADMIN.TENANTS_BASE_PATH';
        }
    }

    public updateCredential(key: string, value: string) {
        this.formModel.update((model) => ({
            ...model,
            credentials: { ...model.credentials, [key]: value },
        }));
    }

    public updateOutlookConfig(key: string, value: string) {
        this.formModel.update((model) => ({
            ...model,
            outlook_config: { ...model.outlook_config, [key]: value },
        }));
    }

    public updateBookingLimits(
        booking_limits: { type: string; amount: string | number }[],
    ) {
        this.formModel.update((model) => ({ ...model, booking_limits }));
    }

    public async save() {
        await submit(this.form, async () => undefined);
        const invalid_credentials = this.credential_fields()
            .filter((field) => field.required)
            .filter((field) => !this.formModel().credentials[field.key])
            .map((field) => field.key);
        if (this.form().invalid() || invalid_credentials.length) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: [
                        ...getInvalidSignalFields(this.form),
                        ...invalid_credentials,
                    ].join(', '),
                }),
            );
        }
        this._dialog_ref.disableClose = true;
        this.loading.set('Saving staff API tenant...');
        const model = this.formModel();
        const limits = model.booking_limits || [];
        const booking_limits = limits.reduce((m, { type, amount }) => {
            m[type] = +amount;
            return m;
        }, {});
        const value: Record<string, unknown> = {
            ...model,
            credentials: this.activeCredentials(model),
            booking_limits,
        };
        if (!(value.credentials as HashMap).conference_type) {
            delete (value.credentials as HashMap).conference_type;
        }
        if (!this.show_outlook()) {
            delete value.outlook_config;
        } else {
            for (const key in value.outlook_config as HashMap) {
                if ((value.outlook_config as HashMap)[key] == null) {
                    delete (value.outlook_config as HashMap)[key];
                }
            }
        }
        for (const key in value.credentials as HashMap) {
            if ((value.credentials as HashMap)[key] == null) {
                delete (value.credentials as HashMap)[key];
            }
        }
        if (!Object.keys(value.credentials as HashMap).length) {
            delete value.credentials;
        }
        const data = cleanObject(
            {
                ...(this.tenant || {}),
                ...value,
            },
            ['', null, undefined],
        );
        const call = this.tenant?.id
            ? put(`/api/staff/v1/tenants/${this.tenant.id}`, data)
            : post('/api/staff/v1/tenants', data);
        const tenant = await call.catch((__) => null);
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        if (!tenant) return notifyError(i18n('ADMIN.TENANATS_SAVE_ERROR'));
        notifySuccess(i18n('ADMIN.TENANATS_SAVE_SUCCESS'));
        this._dialog_ref.close();
    }

    private credentialKeys(model = this.formModel()) {
        return model.platform === 'office365'
            ? OFFICE_CREDENTIALS
            : GOOGLE_CREDENTIALS;
    }

    private activeCredentials(model: StaffTenantFormModel): HashMap {
        const credentials: HashMap = {};
        const conference_type = model.credentials.conference_type;
        if (conference_type) {
            credentials.conference_type = conference_type;
        }
        if (model.delegated) {
            return credentials;
        }
        for (const key of this.credentialKeys(model)) {
            if (key === 'conference_type') continue;
            credentials[key] = model.credentials[key];
        }
        return credentials;
    }

    private generateFormModel(): StaffTenantFormModel {
        const limits = this.tenant?.booking_limits || {};
        const credentials = this.tenant?.credentials || {};
        return {
            id: this.tenant?.id || '',
            domain: this.tenant?.domain || this.domain?.domain || 'localhost',
            name: this.tenant?.name || '',
            email_domain: this.tenant?.email_domain || '',
            delegated: this.tenant?.delegated ?? false,
            platform:
                this.tenant?.platform === 'office365' ? 'office365' : 'google',
            service_account: this.tenant?.service_account || '',
            booking_limits: Object.keys(limits).map((k) => ({
                type: k,
                amount: limits[k],
            })),
            early_checkin: this.tenant?.early_checkin || 60 * 60,
            credentials: {
                user_agent: 'PlaceOS',
                ...credentials,
            },
            outlook_config: {
                ...(((this.tenant || {}) as { outlook_config?: HashMap })
                    .outlook_config || {}),
            },
        };
    }
}
