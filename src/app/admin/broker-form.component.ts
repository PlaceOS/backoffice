import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    Component,
    computed,
    EventEmitter,
    inject,
    Output,
    signal,
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    addBroker,
    AuthType,
    PlaceMQTTBroker,
    updateBroker,
} from '@placeos/ts-client';
import {
    addSignalChipItem,
    mergeFormItem,
    onSaveHotkey,
    removeSignalChipItem,
    submitFormDialog,
} from '../common/forms';
import { i18n } from '../common/locale.service';
import { DialogEvent } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    applyBrokerFormSchema,
    generateBrokerFormModel,
} from './brokers.utilities';

@Component({
    selector: 'broker-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form broker class="flex flex-col">
                    @if (form.name) {
                        <div class="field">
                            <label
                                for="broker-name"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="broker-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    [formField]="form.name"
                                />
                                <mat-error>{{
                                    'ADMIN.BROKERS_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">
                                {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    id="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.host) {
                        <div class="field">
                            <label
                                for="host"
                                [class.error]="
                                    form.host().invalid() &&
                                    form.host().touched()
                                "
                            >
                                {{ 'ADMIN.BROKERS_FIELD_HOST' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="host"
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_HOST' | translate
                                    "
                                    [formField]="form.host"
                                />
                                <mat-error>{{
                                    'ADMIN.BROKERS_HOST_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.port) {
                            <div class="field">
                                <label
                                    for="port-number"
                                    [class.error]="
                                        form.port().invalid() &&
                                        form.port().touched()
                                    "
                                >
                                    {{ 'ADMIN.BROKERS_FIELD_PORT' | translate }}
                                    <span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="port-number"
                                        type="number"
                                        [placeholder]="
                                            'ADMIN.BROKERS_FIELD_PORT'
                                                | translate
                                        "
                                        [formField]="form.port"
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
                        @if (form.tls) {
                            <div class="field">
                                <settings-toggle
                                    class="mt-8 w-full"
                                    [label]="'COMMON.TLS' | translate"
                                    [formField]="form.tls"
                                />
                            </div>
                        }
                    </div>
                    @if (form.auth_type) {
                        <div class="field">
                            <label
                                for="broker-auth-type"
                                id="broker-auth-type-label"
                                >{{
                                    'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    id="broker-auth-type"
                                    aria-labelledby="broker-auth-type-label"
                                    [formField]="form.auth_type"
                                >
                                    @for (type of auth_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (auth_type() === 2) {
                        <div class="fieldset">
                            @if (form.username) {
                                <div class="field">
                                    <label
                                        for="username"
                                        [class.error]="
                                            form.username().invalid() &&
                                            form.username().touched()
                                        "
                                    >
                                        {{
                                            'ADMIN.BROKERS_USERNAME' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            id="username"
                                            [placeholder]="
                                                'ADMIN.BROKERS_USERNAME'
                                                    | translate
                                            "
                                            [formField]="form.username"
                                        />
                                        <mat-error>{{
                                            'ADMIN.BROKERS_USERNAME_REQUIRED'
                                                | translate
                                        }}</mat-error>
                                    </mat-form-field>
                                </div>
                            }
                            @if (form.password) {
                                <div class="field">
                                    <label
                                        for="new-password"
                                        [class.error]="
                                            form.password().invalid() &&
                                            form.password().touched()
                                        "
                                    >
                                        {{
                                            'ADMIN.BROKERS_PASSWORD' | translate
                                        }}
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            id="new-password"
                                            autocomplete="new-password"
                                            [type]="
                                                show_password()
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            [placeholder]="
                                                'ADMIN.BROKERS_PASSWORD'
                                                    | translate
                                            "
                                            [formField]="form.password"
                                        />
                                        <icon
                                            matSuffix
                                            (mousedown)="
                                                show_password.set(true)
                                            "
                                            (window:mouseup)="
                                                show_password.set(false)
                                            "
                                            (touchstart)="
                                                show_password.set(true)
                                            "
                                            (window:touchend)="
                                                show_password.set(false)
                                            "
                                        >
                                            visibility
                                        </icon>
                                        <mat-error>{{
                                            'ADMIN.BROKERS_PASSWORD_REQUIRED'
                                                | translate
                                        }}</mat-error>
                                    </mat-form-field>
                                </div>
                            }
                        </div>
                    }
                    @if (auth_type() === 0) {
                        @if (form.certificate) {
                            <div class="field">
                                <label for="cert">
                                    {{ 'ADMIN.BROKERS_CERT' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <textarea
                                        matInput
                                        id="cert"
                                        [placeholder]="
                                            'ADMIN.BROKERS_CERT' | translate
                                        "
                                        [formField]="form.certificate"
                                    ></textarea>
                                    <mat-error>{{
                                        'ADMIN.BROKERS_CERT_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    }
                    @if (form.filters) {
                        <div class="field">
                            <label for="filters">
                                {{ 'ADMIN.BROKERS_FIELD_FILTERS' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipGrid
                                    [attr.aria-label]="
                                        'ADMIN.BROKERS_FIELD_FILTERS'
                                            | translate
                                    "
                                >
                                    @for (filter of filters(); track filter) {
                                        <mat-chip-row
                                            (removed)="removeFilter(filter)"
                                            [aria-description]="
                                                'Press enter to edit ' + filter
                                            "
                                        >
                                            {{ filter }}
                                            <button
                                                type="button"
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'COMMON.ITEM_REMOVE'
                                                        | translate
                                                            : {
                                                                  item: filter,
                                                              }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                    <input
                                        id="filters"
                                        [placeholder]="
                                            'ADMIN.BROKERS_FIELD_FILTERS'
                                                | translate
                                        "
                                        [matChipInputFor]="chipGrid"
                                        [matChipInputSeparatorKeyCodes]="
                                            separators
                                        "
                                        [matChipInputAddOnBlur]="true"
                                        (matChipInputTokenEnd)="
                                            addFilter($event)
                                        "
                                    />
                                </mat-chip-grid>
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
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
        FormField,
        MatInputModule,
        MatSelectModule,
        SettingsToggleComponent,
        FullscreenModalShellComponent,
    ],
})
export class BrokerFormComponent {
    private _dialog_ref =
        inject<MatDialogRef<BrokerFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceMQTTBroker; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'ADMIN.BROKERS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateBrokerFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applyBrokerFormSchema);
    public readonly loading = signal<string | null>(null);
    public heading = i18n(
        `${this._name}_${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );
    /** List of available authentication types */
    public auth_types = [
        {
            id: AuthType.Certificate,
            name: i18n('ADMIN.BROKERS_AUTH_TYPE_CERT'),
        },
        {
            id: AuthType.NoAuth,
            name: i18n('ADMIN.BROKERS_AUTH_TYPE_NONE'),
        },
        {
            id: AuthType.UserPassword,
            name: i18n('ADMIN.BROKERS_AUTH_TYPE_PASS'),
        },
    ];
    /** List of separator characters for filters */
    public readonly separators = [ENTER, COMMA] as const;
    /** Whether to show password field value */
    public readonly show_password = signal(false);
    public readonly auth_type = computed(() => this.formModel().auth_type);
    public readonly filters = computed(() => this.formModel().filters || []);

    constructor() {
        onSaveHotkey(() => this.submit());
    }

    public async submit(): Promise<void> {
        await submitFormDialog(
            this.form,
            {
                loading: this.loading,
                event: this.event,
                close: () => this._dialog_ref.close(),
            },
            `${this._name}_`,
            () => {
                const form_item = mergeFormItem(
                    this._data.item,
                    this.formModel(),
                ) as unknown as PlaceMQTTBroker;
                return form_item.id
                    ? updateBroker(form_item.id, form_item)
                    : addBroker(form_item);
            },
        );
    }

    /**
     * Add a filter to the list of filters for the item
     * @param event Input event
     */
    public addFilter(event: MatChipInputEvent): void {
        this.formModel.update((model) => ({
            ...model,
            filters: addSignalChipItem(model.filters, event),
        }));
    }

    public removeFilter(existing_filter: string): void {
        this.formModel.update((model) => ({
            ...model,
            filters: removeSignalChipItem(model.filters, existing_filter),
        }));
    }
}
