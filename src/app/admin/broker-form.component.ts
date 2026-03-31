import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    Signal,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AuthType,
    PlaceMQTTBroker,
    addBroker,
    cleanObject,
    updateBroker,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { getInvalidFields, unique } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateBrokerFormFields } from './brokers.utilities';

@Component({
    selector: 'broker-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form broker class="flex flex-col" [formGroup]="form">
                    @if (form.controls.name) {
                        <div class="field">
                            <label
                                for="broker-name"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="broker-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    formControlName="name"
                                    required
                                />
                                <mat-error>{{
                                    'ADMIN.BROKERS_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.description) {
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
                    @if (form.controls.name) {
                        <div class="field">
                            <label
                                for="host"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
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
                        @if (form.controls.port) {
                            <div class="field">
                                <label
                                    for="port-number"
                                    [class.error]="
                                        form.controls.port.invalid &&
                                        form.controls.port.touched
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
                                            'ADMIN.BROKERS_FIELD_PORT'
                                                | translate
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
                        @if (form.controls.tls) {
                            <div class="field">
                                <settings-toggle
                                    class="mt-8 w-full"
                                    [name]="'COMMON.TLS' | translate"
                                    formControlName="tls"
                                ></settings-toggle>
                            </div>
                        }
                    </div>
                    @if (form.controls.auth_type) {
                        <div class="field">
                            <label for="type"
                                >{{
                                    'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="type"
                                    formControlName="auth_type"
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
                            @if (form.controls.name) {
                                <div class="field">
                                    <label
                                        for="host"
                                        [class.error]="
                                            form.controls.name.invalid &&
                                            form.controls.name.touched
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
                                            name="username"
                                            [placeholder]="
                                                'ADMIN.BROKERS_USERNAME'
                                                    | translate
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
                            @if (form.controls.password) {
                                <div class="field">
                                    <label
                                        for="new-password"
                                        [class.error]="
                                            form.controls.password.invalid &&
                                            form.controls.password.touched
                                        "
                                    >
                                        {{
                                            'ADMIN.BROKERS_PASSWORD' | translate
                                        }}
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            name="new-password"
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
                                            formControlName="password"
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
                        @if (form.controls.certificate) {
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
                                        'ADMIN.BROKERS_CERT_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    }
                    @if (form.controls.filters) {
                        <div class="field">
                            <label for="filters">
                                {{ 'ADMIN.BROKERS_FIELD_FILTERS' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipGrid
                                    aria-label="Enter fruits"
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
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'COMMON.REMOVE_ITEM'
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
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        SettingsToggleComponent,
        FullscreenModalShellComponent,
    ],
})
export class BrokerFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<BrokerFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceMQTTBroker; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'ADMIN.BROKERS';
    private _hotkey = inject(HotkeysService);

    @Output() public event = new EventEmitter<DialogEvent>();

    public form: UntypedFormGroup = generateBrokerFormFields(this._data.item);
    public loading: string;
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
    public auth_type: Signal<number> = toSignal(
        this.form.controls.auth_type.valueChanges,
        {
            initialValue: this.form.controls.auth_type.value,
        },
    );
    public filters: Signal<string[]> = toSignal(
        this.form.controls.filters.valueChanges,
        {
            initialValue: this.form.controls.filters.value || [],
        },
    );

    public ngOnInit(): void {
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public submit(): void {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const item = this._data.item;
        this.loading = i18n(`${this._name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        (form_item.id
            ? updateBroker(
                  form_item.id as string,
                  form_item as unknown as PlaceMQTTBroker,
              )
            : addBroker(form_item as unknown as PlaceMQTTBroker)
        ).subscribe(
            (_item) => {
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                this._dialog_ref.close();
            },
            async (err) => {
                this.loading = null;
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await err.text?.()) || err.message || err,
                        ),
                    }),
                );
            },
        );
    }

    /**
     * Add a filter to the list of filters for the item
     * @param event Input event
     */
    public addFilter(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            const filter_list = this.filters();
            this.form.patchValue({
                filters: unique([...filter_list, value]),
            });
        }
        event.chipInput?.clear();
    }

    /**
     * Remove filter from the list
     * @param existing_filter Filter to remove
     */
    public removeFilter(existing_filter: string): void {
        if (!this.filters().length) return;
        const filter_list = [...this.filters()];
        const index = filter_list.indexOf(existing_filter);

        if (index >= 0) {
            filter_list.splice(index, 1);
            this.form.controls.filters.setValue(filter_list);
        }
    }
}
