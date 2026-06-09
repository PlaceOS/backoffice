import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    Component,
    computed,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    addBroker,
    AuthType,
    cleanObject,
    PlaceMQTTBroker,
    updateBroker,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { addSignalChipItem, getInvalidSignalFields } from '../common/forms';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
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
                            <label for="type"
                                >{{
                                    'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select [formField]="form.auth_type">
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
                                        for="host"
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
        FormField,
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

    public ngOnInit(): void {
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public async submit(): Promise<void> {
        await submit(this.form, async () => {
            const item = this._data.item;
            this.loading.set(i18n(`${this._name}.SAVING`));
            this._dialog_ref.disableClose = true;
            const item_json = item.toJSON ? item.toJSON() : item;
            const form_item = (
                item.id
                    ? cleanObject({ ...item_json, ...this.formModel() }, [
                          undefined,
                      ])
                    : { ...item_json, ...this.formModel() }
            ) as Identity;
            const result = await (
                form_item.id
                    ? updateBroker(
                          form_item.id as string,
                          form_item as unknown as PlaceMQTTBroker,
                      )
                    : addBroker(form_item as unknown as PlaceMQTTBroker)
            ).catch(async (err) => {
                this.loading.set(null);
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await err.text?.()) || err.message || err,
                        ),
                    }),
                );
                return null;
            });
            if (!result) return;
            this._dialog_ref.disableClose = false;
            this.event.emit({ reason: 'done', metadata: { item: result } });
            notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
            this._dialog_ref.close();
        });
        if (this.form().invalid()) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(this.form).join(', '),
                }),
            );
        }
    }

    /**
     * Add a filter to the list of filters for the item
     * @param event Input event
     */
    public addFilter(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            this.formModel.update((model) => ({
                ...model,
                filters: addSignalChipItem(model.filters, event),
            }));
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
            this.formModel.update((model) => ({
                ...model,
                filters: filter_list,
            }));
        }
    }
}
