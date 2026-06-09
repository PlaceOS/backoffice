import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    computed,
    effect,
    inject,
    resource,
    signal,
} from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import {
    PlaceUser,
    addUser,
    cleanObject,
    queryDomains,
    updateUser,
} from '@placeos/ts-client';

import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler } from '../common/async-handler.class';
import {
    addSignalChipItem,
    getInvalidSignalFields,
    removeSignalChipItem,
} from '../common/forms';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateUserFormModel, userFormSchema } from './users.utilities';

@Component({
    selector: 'user-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form user class="flex flex-col">
                    <!--  fake fields are a workaround for chrome/opera autofill getting the wrong fields -->
                    <input
                        id="email"
                        style="display: none"
                        type="text"
                        name="fakeusernameremembered"
                    />
                    <input
                        id="password"
                        style="display: none"
                        type="password"
                        name="fakepasswordremembered"
                    />
                    <div class="field">
                        <label for="domain">{{
                            'DOMAINS.SINGULAR' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="h-12">
                            <mat-select
                                [formField]="form.authority_id"
                                [placeholder]="
                                    'ADMIN.SELECT_DOMAIN' | translate
                                "
                            >
                                @for (domain of domain_list(); track domain) {
                                    <mat-option [value]="domain.id">
                                        {{ domain.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="fieldset">
                        @if (form.first_name) {
                            <div class="field">
                                <label
                                    for="system-name"
                                    [class.error]="
                                        form.first_name().invalid() &&
                                        form.first_name().touched()
                                    "
                                >
                                    {{ 'USERS.FIRST_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'USERS.FIRST_NAME' | translate
                                        "
                                        [formField]="form.first_name"
                                    />
                                    <mat-error>{{
                                        'USERS.FIRST_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.last_name) {
                            <div class="field">
                                <label for="system-name"
                                    >{{ 'USERS.LAST_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'USERS.LAST_NAME' | translate
                                        "
                                        [formField]="form.last_name"
                                    />
                                    <mat-error>{{
                                        'USERS.LAST_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.email) {
                        <div class="field">
                            <label
                                for="useremail"
                                [class.error]="
                                    form.email().invalid() &&
                                    form.email().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_EMAIL' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_EMAIL' | translate
                                    "
                                    [formField]="form.email"
                                    autocomplete="nope"
                                />
                                <mat-error>{{
                                    'USERS.EMAIL_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.staff_id) {
                            <div class="field">
                                <label for="staff-id"
                                    >{{ 'USERS.STAFF_ID' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'USERS.STAFF_ID' | translate
                                        "
                                        [formField]="form.staff_id"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.card_number) {
                            <div class="field">
                                <label for="card-number"
                                    >{{ 'USERS.STAFF_CARD' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'USERS.STAFF_CARD' | translate
                                        "
                                        [formField]="form.card_number"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="mb-4 flex items-center space-x-4">
                        @if (form.support) {
                            <settings-toggle
                                class="max-w-1/2 flex-1"
                                [label]="'USERS.ROLE_SUPPORT' | translate"
                                [formField]="form.support"
                            />
                        }
                        @if (form.sys_admin) {
                            <settings-toggle
                                class="max-w-1/2 flex-1"
                                [label]="'USERS.ROLE_ADMIN' | translate"
                                [formField]="form.sys_admin"
                            />
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.staff_id && !hide_password()) {
                            <div class="field">
                                <label
                                    for="new-password"
                                    [class.error]="
                                        form.password().invalid() &&
                                        form.password().touched()
                                    "
                                >
                                    {{ 'COMMON.PASSWORD' | translate }}
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
                                            'COMMON.PASSWORD' | translate
                                        "
                                        [formField]="form.password"
                                    />
                                    <icon
                                        matSuffix
                                        (click)="
                                            show_password.set(!show_password())
                                        "
                                    >
                                        visibility
                                    </icon>
                                    <mat-error>{{
                                        'USERS.PASSWORD_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.confirm_password && !hide_password()) {
                            <div class="field">
                                <label
                                    for="confirm-password"
                                    [class.error]="
                                        form.confirm_password().invalid() &&
                                        form.confirm_password().touched()
                                    "
                                >
                                    {{ 'USERS.PASSWORD_CONFIRM' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [type]="
                                            show_confirm() ? 'text' : 'password'
                                        "
                                        [placeholder]="
                                            'USERS.PASSWORD_CONFIRM' | translate
                                        "
                                        [formField]="form.confirm_password"
                                    />
                                    <icon
                                        matSuffix
                                        (click)="
                                            show_confirm.set(!show_confirm())
                                        "
                                    >
                                        visibility
                                    </icon>
                                    <mat-error>{{
                                        'USERS.PASSWORDS_MATCH' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.groups) {
                        <div class="field">
                            <label
                                for="groups"
                                [class.error]="
                                    form.groups().invalid() &&
                                    form.groups().touched()
                                "
                            >
                                {{ 'USERS.FIELD_GROUPS' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    aria-label="Image List"
                                >
                                    @for (item of group_list(); track item) {
                                        <mat-chip-row
                                            (removed)="removeGroup(item)"
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'COMMON.ITEM_REMOVE'
                                                        | translate
                                                            : { item: item }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                </mat-chip-grid>
                                <input
                                    [placeholder]="
                                        'USERS.FIELD_GROUPS' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addGroup($event)"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.image) {
                        <div class="field">
                            <label
                                for="image"
                                [class.error]="
                                    form.image().invalid() &&
                                    form.image().touched()
                                "
                            >
                                {{ 'USERS.IMAGE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'USERS.IMAGE' | translate"
                                    [formField]="form.image"
                                />
                                <mat-error>{{
                                    'USERS.IMAGE_INVALID' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.locatable) {
                        <settings-toggle
                            [formField]="form.locatable"
                            [label]="'USERS.LOCATABLE' | translate"
                            class="mb-4"
                        />
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        SettingsToggleComponent,
        FormField,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        IconComponent,
        MatSelectModule,
        FullscreenModalShellComponent,
    ],
})
export class UserFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref = inject<MatDialogRef<UserFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceUser; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'USERS';
    private _hotkey = inject(HotkeysService);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(generateUserFormModel(this._data.item));
    public readonly form = form(
        this.formModel,
        userFormSchema(this._data.item),
    );
    public readonly loading = signal<string | null>(null);
    public heading = i18n(
        `${this._name}.${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );
    /** Whether password should be visible in plaintext */
    public readonly show_password = signal(false);
    /** Whether password confirm should be visible in plaintext */
    public readonly show_confirm = signal(false);
    /** List of available domains */
    private readonly _domain_list = resource({
        loader: async () => (await queryDomains()).data,
    });
    public readonly domain_list = computed(
        () => this._domain_list.value() || [],
    );
    /** List of separator characters for groups */
    public readonly separators: number[] = [ENTER, COMMA];
    private _email = computed(() => this.formModel().email || '');
    public group_list = computed(() => this.formModel().groups || []);

    public readonly hide_password = computed(
        () =>
            this._email().toLowerCase().startsWith('lynner') &&
            !localStorage.getItem('PlaceOS.show_password'),
    );

    public readonly addGroup = (e: MatChipInputEvent) =>
        this.formModel.update((value) => ({
            ...value,
            groups: addSignalChipItem(value.groups, e),
        }));
    public readonly removeGroup = (i: string) =>
        this.formModel.update((value) => ({
            ...value,
            groups: removeSignalChipItem(value.groups, i),
        }));

    constructor() {
        super();
        effect(() => {
            const domains = this.domain_list();
            if (!this.formModel().authority_id && domains[0]) {
                this.formModel.update((value) => ({
                    ...value,
                    authority_id: domains[0].id,
                }));
            }
        });
    }

    public async ngOnInit() {
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
                          null,
                          '',
                      ])
                    : { ...item_json, ...this.formModel() }
            ) as Identity;
            try {
                const _item = await (form_item.id
                    ? updateUser(
                          form_item.id as string,
                          form_item as unknown as PlaceUser,
                      )
                    : addUser(form_item as unknown as PlaceUser));
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                this._dialog_ref.close();
            } catch (err) {
                this.loading.set(null);
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await (err as Response).text?.()) ||
                                (err as Error).message ||
                                err,
                        ),
                    }),
                );
            }
        });
        if (this.form().invalid()) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(this.form).join(', '),
                }),
            );
        }
    }
}
