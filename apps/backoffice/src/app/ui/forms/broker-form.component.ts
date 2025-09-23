import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthType } from '@placeos/ts-client';
import { unique } from '../../common/general';
import { i18n } from '../../common/locale.service';
import { IconComponent } from '../icon.component';
import { SettingsToggleComponent } from '../settings-toggle.component';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'broker-form',
    template: `
        @if (form()) {
            <form broker class="flex flex-col" [formGroup]="form()">
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="broker-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="broker-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            <mat-error>{{
                                'ADMIN.BROKERS_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="host"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'ADMIN.BROKERS_FIELD_HOST' | translate
                            }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="host"
                                [placeholder]="
                                    'ADMIN.BROKERS_FIELD_HOST' | translate
                                "
                                formControlName="host"
                                required
                            />
                            <mat-error>{{
                                'ADMIN.BROKERS_HOST_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.port) {
                        <div class="field">
                            <label
                                for="port-number"
                                [class.error]="
                                    form().controls.port.invalid &&
                                    form().controls.port.touched
                                "
                            >
                                {{ 'ADMIN.BROKERS_FIELD_PORT' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="port-number"
                                    type="number"
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_PORT' | translate
                                    "
                                    formControlName="port"
                                />
                                <mat-error>
                                    {{
                                        'ADMIN.BROKERS_PORT_REQUIRED'
                                            | translate
                                    }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.tls) {
                        <div class="field">
                            <settings-toggle
                                class="mt-8 w-full"
                                [name]="'COMMON.TLS' | translate"
                                formControlName="tls"
                            ></settings-toggle>
                        </div>
                    }
                </div>
                @if (form().controls.auth_type) {
                    <div class="field">
                        <label for="type"
                            >{{ 'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select name="type" formControlName="auth_type">
                                @for (type of auth_types; track type) {
                                    <mat-option [value]="type.id">
                                        {{ type.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.auth_type.value === 2) {
                    <div class="fieldset">
                        @if (form().controls.name) {
                            <div class="field">
                                <label
                                    for="host"
                                    [class.error]="
                                        form().controls.name.invalid &&
                                        form().controls.name.touched
                                    "
                                >
                                    {{ 'ADMIN.BROKERS_USERNAME' | translate }}
                                    <span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="username"
                                        [placeholder]="
                                            'ADMIN.BROKERS_USERNAME' | translate
                                        "
                                        formControlName="username"
                                        required
                                    />
                                    <mat-error>{{
                                        'ADMIN.BROKERS_USERNAME_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form().controls.password) {
                            <div class="field">
                                <label
                                    for="new-password"
                                    [class.error]="
                                        form().controls.password.invalid &&
                                        form().controls.password.touched
                                    "
                                >
                                    {{ 'ADMIN.BROKERS_PASSWORD' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="new-password"
                                        autocomplete="new-password"
                                        [type]="
                                            show_password ? 'text' : 'password'
                                        "
                                        [placeholder]="
                                            'ADMIN.BROKERS_PASSWORD' | translate
                                        "
                                        formControlName="password"
                                    />
                                    <app-icon
                                        matSuffix
                                        (mousedown)="show_password = true"
                                        (window:mouseup)="show_password = false"
                                        (touchstart)="show_password = true"
                                        (window:touchend)="
                                            show_password = false
                                        "
                                    >
                                        visibility
                                    </app-icon>
                                    <mat-error>{{
                                        'ADMIN.BROKERS_PASSWORD_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                }
                @if (form().controls.auth_type.value === 0) {
                    @if (form().controls.certificate) {
                        <div class="field">
                            <label for="cert">
                                {{ 'ADMIN.BROKERS_CERT' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="cert"
                                    [placeholder]="
                                        'ADMIN.BROKERS_CERT' | translate
                                    "
                                    formControlName="certificate"
                                ></textarea>
                                <mat-error>{{
                                    'ADMIN.BROKERS_CERT_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                }
                @if (form().controls.filters) {
                    <div class="field">
                        <label for="filters">
                            {{ 'ADMIN.BROKERS_FIELD_FILTERS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipGrid aria-label="Enter fruits">
                                @for (filter of filters; track filter) {
                                    <mat-chip-row
                                        (removed)="removeFilter(filter)"
                                        [aria-description]="
                                            'Press enter to edit ' + filter
                                        "
                                    >
                                        {{ filter }}
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.REMOVE_ITEM'
                                                    | translate
                                                        : { item: filter }
                                            "
                                        >
                                            <app-icon>cancel</app-icon>
                                        </button>
                                    </mat-chip-row>
                                }
                                <input
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_FILTERS'
                                            | translate
                                    "
                                    [matChipInputFor]="chipGrid"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addFilter($event)"
                                />
                            </mat-chip-grid>
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `,
    styles: [
        `
            settings-form-field {
                margin-bottom: 1.5em;
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        MatChipsModule,
        IconComponent,
        TranslatePipe,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        SettingsToggleComponent,
    ],
})
export class BrokerFormComponent {
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
    /** List of available authentication types */
    public auth_types = [];
    /** List of separator characters for filters */
    public readonly separators = [ENTER, COMMA] as const;
    /** Whether to show password field value */
    public show_password: boolean;

    public get filters(): string[] {
        return this.form().controls.filters.value;
    }

    public ngOnInit() {
        this.auth_types = [
            {
                id: AuthType.Certificate,
                name: i18n('ADMIN.BROKERS_AUTH_TYPE_CERT'),
            },
            { id: AuthType.NoAuth, name: i18n('ADMIN.BROKERS_AUTH_TYPE_NONE') },
            {
                id: AuthType.UserPassword,
                name: i18n('ADMIN.BROKERS_AUTH_TYPE_PASS'),
            },
        ];
    }

    /**
     * Add a filter to the list of filters for the item
     * @param event Input event
     */
    public addFilter(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            const filter_list = this.filters;
            this.form().patchValue({
                filters: unique([...filter_list, value]),
            });
        }
        event.chipInput!.clear();
    }

    /**
     * Remove filter from the list
     * @param existing_filter Filter to remove
     */
    public removeFilter(existing_filter: string): void {
        if (!this.filters?.length) return;
        const filter_list = this.filters;
        const index = filter_list.indexOf(existing_filter);

        if (index >= 0) {
            filter_list.splice(index, 1);
            this.form().controls.filters.setValue(filter_list);
        }
    }
}
