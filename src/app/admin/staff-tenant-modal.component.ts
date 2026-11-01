import { Component, computed, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    email,
    form,
    FormField,
    required,
    submit,
    validate,
} from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { cleanObject, PlaceDomain, post, put } from '@placeos/ts-client';
import { getInvalidSignalFields } from '../common/forms';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';
import { ObjectListFieldComponent } from '../ui/custom-fields/object-list-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { PlaceTenant } from './staff-api.component';
import {
    formatMinutes,
    joinDuration,
    MAX_TENANT_LIMIT,
    splitMinutes,
} from './staff-api.utilities';

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
    booking_range: { type: string; days: string | number }[];
    booking_period: BookingPeriodRow[];
    early_checkin: number;
    credentials: HashMap;
    outlook_config: HashMap;
}

interface BookingPeriodRow {
    type: string;
    days: string | number;
    hours: number;
    minutes: number;
}

const HOUR_OPTIONS = Array.from({ length: 24 }, (_, hour) => hour);
const MINUTE_OPTIONS = Array.from({ length: 12 }, (_, step) => step * 5);

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
                                    'ADMIN.TENANTS_ITEM_REQUIRED'
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
                <div class="mt-6 flex flex-col space-y-2">
                    <span class="label">{{
                        'ADMIN.TENANTS_BOOKING_RANGE' | translate
                    }}</span>
                    <p class="text-sm opacity-60">
                        {{ 'ADMIN.TENANTS_BOOKING_RANGE_HINT' | translate }}
                    </p>
                    <object-list-field
                        [ngModel]="formModel().booking_range"
                        (ngModelChange)="updateBookingRange($event)"
                        [ngModelOptions]="{ standalone: true }"
                        [fields]="['type', 'days']"
                    />
                    @if (form.booking_range().invalid()) {
                        <p class="text-error text-sm">
                            {{
                                'ADMIN.TENANTS_BOOKING_RANGE_ERROR' | translate
                            }}
                        </p>
                    }
                </div>
                <div class="mt-6 flex flex-col space-y-2" booking-period>
                    <span class="label">{{
                        'ADMIN.TENANTS_BOOKING_PERIOD' | translate
                    }}</span>
                    <p class="text-sm opacity-60">
                        {{ 'ADMIN.TENANTS_BOOKING_PERIOD_HINT' | translate }}
                    </p>
                    @for (
                        item of formModel().booking_period;
                        track $index;
                        let index = $index
                    ) {
                        <div class="flex items-center space-x-2" period-row>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript min-w-0 flex-2"
                            >
                                <input
                                    matInput
                                    [attr.aria-label]="
                                        'ADMIN.TENANTS_BOOKING_TYPE' | translate
                                    "
                                    [placeholder]="
                                        'ADMIN.TENANTS_BOOKING_TYPE' | translate
                                    "
                                    [ngModel]="item.type"
                                    (ngModelChange)="
                                        updateBookingPeriod(
                                            index,
                                            'type',
                                            $event
                                        )
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript min-w-0 flex-1"
                            >
                                <input
                                    matInput
                                    type="number"
                                    min="0"
                                    step="1"
                                    [attr.aria-label]="
                                        'ADMIN.TENANTS_DAYS' | translate
                                    "
                                    [ngModel]="item.days"
                                    (ngModelChange)="
                                        updateBookingPeriod(
                                            index,
                                            'days',
                                            $event
                                        )
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                                <span matTextSuffix>{{
                                    'ADMIN.TENANTS_DAYS' | translate
                                }}</span>
                            </mat-form-field>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript min-w-0 flex-1"
                            >
                                <mat-select
                                    [aria-label]="
                                        'ADMIN.TENANTS_HOURS_LABEL' | translate
                                    "
                                    [ngModel]="item.hours"
                                    (ngModelChange)="
                                        updateBookingPeriod(
                                            index,
                                            'hours',
                                            $event
                                        )
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    @for (hour of hour_options; track hour) {
                                        <mat-option [value]="hour">
                                            {{
                                                'ADMIN.TENANTS_DURATION_HOURS'
                                                    | translate
                                                        : { count: hour }
                                                        : hour
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript min-w-0 flex-1"
                            >
                                <mat-select
                                    [aria-label]="
                                        'ADMIN.TENANTS_MINUTES_LABEL'
                                            | translate
                                    "
                                    [ngModel]="item.minutes"
                                    (ngModelChange)="
                                        updateBookingPeriod(
                                            index,
                                            'minutes',
                                            $event
                                        )
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    @for (
                                        minute of minuteOptions(item.minutes);
                                        track minute
                                    ) {
                                        <mat-option [value]="minute">
                                            {{
                                                'ADMIN.TENANTS_DURATION_MINUTES'
                                                    | translate
                                                        : { count: minute }
                                                        : minute
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                            <button
                                type="button"
                                icon
                                matRipple
                                class="border-error text-error h-12 w-12 shrink-0 rounded-sm border"
                                [attr.aria-label]="'COMMON.DELETE' | translate"
                                (click)="removeBookingPeriod(index)"
                            >
                                <icon>delete</icon>
                            </button>
                        </div>
                        <p class="-mt-1 text-xs opacity-60" period-total>
                            {{ formatPeriod(item) }}
                        </p>
                    }
                    <button
                        btn
                        type="button"
                        class="w-full"
                        (click)="addBookingPeriod()"
                    >
                        <div class="flex items-center">
                            <icon class="text-2xl">add</icon>
                            <div class="text">
                                {{ 'COMMON.NEW_ITEM' | translate }}
                            </div>
                        </div>
                    </button>
                    @if (form.booking_period().invalid()) {
                        <p class="text-error text-sm">
                            {{
                                'ADMIN.TENANTS_BOOKING_PERIOD_ERROR' | translate
                            }}
                        </p>
                    }
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
        IconComponent,
        MatRippleModule,
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

    public readonly tenant = this._data.tenant;
    public readonly domain = this._data.domain;
    public readonly loading = signal('');
    // The backend stores a cleared config as `{ app_id: '' }`, so check app_id
    public readonly show_outlook = model(
        !!((this.tenant || {}) as { outlook_config?: HashMap }).outlook_config
            ?.app_id,
    );
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
        validate(path.booking_range, ({ value }) => {
            const ranges = value();
            const types = ranges.map(({ type }) => type?.trim());
            return ranges.some(
                ({ days }, index) =>
                    !types[index] ||
                    days == null ||
                    `${days}`.trim() === '' ||
                    !Number.isInteger(+days) ||
                    +days < 0 ||
                    +days > MAX_TENANT_LIMIT,
            ) || new Set(types).size !== types.length
                ? { kind: 'booking_range' }
                : undefined;
        });
        validate(path.booking_period, ({ value }) => {
            const periods = value();
            const types = periods.map(({ type }) => type?.trim());
            return periods.some(({ days }, index) => {
                const total = joinDuration({ ...periods[index], days: +days });
                return (
                    !types[index] ||
                    `${days ?? ''}`.trim() === '' ||
                    !Number.isInteger(+days) ||
                    +days < 0 ||
                    total <= 0 ||
                    total > MAX_TENANT_LIMIT
                );
            }) || new Set(types).size !== types.length
                ? { kind: 'booking_period' }
                : undefined;
        });
    });

    public readonly hour_options = HOUR_OPTIONS;

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

    public updateBookingRange(
        booking_range: StaffTenantFormModel['booking_range'],
    ) {
        this.formModel.update((model) => ({
            ...model,
            booking_range: [...booking_range],
        }));
    }

    /** Minute choices, keeping a stored value that isn't a multiple of 5 */
    public minuteOptions(current: number) {
        return MINUTE_OPTIONS.includes(current)
            ? MINUTE_OPTIONS
            : [...MINUTE_OPTIONS, current].sort((a, b) => a - b);
    }

    public formatPeriod(period: BookingPeriodRow) {
        return formatMinutes(joinDuration({ ...period, days: +period.days }));
    }

    public addBookingPeriod() {
        this.updateBookingPeriods((periods) => [
            ...periods,
            { type: '', days: 0, hours: 1, minutes: 0 },
        ]);
    }

    public removeBookingPeriod(index: number) {
        this.updateBookingPeriods((periods) =>
            periods.filter((_, item_index) => item_index !== index),
        );
    }

    public updateBookingPeriod<K extends keyof BookingPeriodRow>(
        index: number,
        field: K,
        value: BookingPeriodRow[K],
    ) {
        this.updateBookingPeriods((periods) =>
            periods.map((item, item_index) =>
                item_index === index ? { ...item, [field]: value } : item,
            ),
        );
    }

    private updateBookingPeriods(
        change: (periods: BookingPeriodRow[]) => BookingPeriodRow[],
    ) {
        this.formModel.update((model) => ({
            ...model,
            booking_period: change(model.booking_period),
        }));
    }

    public async save() {
        await submit(this.form, async () => undefined);
        const invalid_credentials = this.credential_fields()
            .filter((field) => field.required)
            .filter((field) => !this.formModel().credentials[field.key])
            .map((field) => FIELD_NAME_MAPPING[field.key] || field.key);
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
            booking_range: Object.fromEntries(
                model.booking_range.map(({ type, days }) => [
                    type.trim(),
                    +days,
                ]),
            ),
            booking_period: Object.fromEntries(
                model.booking_period.map((period) => [
                    period.type.trim(),
                    joinDuration({ ...period, days: +period.days }),
                ]),
            ),
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
        // staff-api ignores null, so send an empty config to clear it.
        // It is stored as `{ app_id: '' }`, which reads as off.
        if (!this.show_outlook()) data.outlook_config = {};
        const call = this.tenant?.id
            ? put(`/api/staff/v1/tenants/${this.tenant.id}`, data)
            : post('/api/staff/v1/tenants', data);
        const tenant = await call.catch((__) => null);
        this.loading.set('');
        if (!tenant) return notifyError(i18n('ADMIN.TENANTS_SAVE_ERROR'));
        notifySuccess(i18n('ADMIN.TENANTS_SAVE_SUCCESS'));
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
            booking_range: Object.entries(this.tenant?.booking_range || {}).map(
                ([type, days]) => ({ type, days }),
            ),
            booking_period: Object.entries(
                this.tenant?.booking_period || {},
            ).map(([type, minutes]) => ({ type, ...splitMinutes(minutes) })),
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
