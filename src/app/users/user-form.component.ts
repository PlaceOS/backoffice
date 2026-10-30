import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    Output,
    computed,
    effect,
    inject,
    resource,
    signal,
} from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import {
    PlaceUser,
    addUser,
    authority,
    queryDomains,
    updateUser,
} from '@placeos/ts-client';
import { isSubsystemUser } from '../common/support-access';

import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
                        <label for="user-domain" id="user-domain-label">{{
                            'DOMAINS.SINGULAR' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="h-12">
                            <mat-select
                                id="user-domain"
                                aria-labelledby="user-domain-label"
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
                                    for="first-name"
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
                                        id="first-name"
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
                                <label for="last-name"
                                    >{{ 'USERS.LAST_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="last-name"
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
                                    id="useremail"
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
                                        id="staff-id"
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
                                        id="card-number"
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
                        @if (form.support && !isSubsystemUser()) {
                            <settings-toggle
                                class="max-w-1/2 flex-1"
                                [label]="'USERS.ROLE_SUPPORT' | translate"
                                [formField]="form.support"
                            />
                        }
                        @if (form.sys_admin && !isSubsystemUser()) {
                            <settings-toggle
                                class="max-w-1/2 flex-1"
                                [label]="'USERS.ROLE_ADMIN' | translate"
                                [formField]="form.sys_admin"
                            />
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.staff_id) {
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
                                        id="new-password"
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
                                    <button
                                        icon
                                        matSuffix
                                        type="button"
                                        [attr.aria-label]="
                                            'COMMON.PASSWORD_TOGGLE' | translate
                                        "
                                        [attr.aria-pressed]="show_password()"
                                        (click)="
                                            show_password.set(!show_password());
                                            $event.stopPropagation()
                                        "
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                    <mat-error>{{
                                        'USERS.PASSWORD_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.confirm_password) {
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
                                        id="confirm-password"
                                        [type]="
                                            show_confirm() ? 'text' : 'password'
                                        "
                                        [placeholder]="
                                            'USERS.PASSWORD_CONFIRM' | translate
                                        "
                                        [formField]="form.confirm_password"
                                    />
                                    <button
                                        icon
                                        matSuffix
                                        type="button"
                                        [attr.aria-label]="
                                            'COMMON.PASSWORD_TOGGLE' | translate
                                        "
                                        [attr.aria-pressed]="show_confirm()"
                                        (click)="
                                            show_confirm.set(!show_confirm());
                                            $event.stopPropagation()
                                        "
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                    <mat-error>{{
                                        'USERS.PASSWORDS_MATCH' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.groups && !isSubsystemUser()) {
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
                                    [attr.aria-label]="
                                        'USERS.FIELD_GROUPS' | translate
                                    "
                                >
                                    @for (item of group_list(); track item) {
                                        <mat-chip-row
                                            (removed)="removeGroup(item)"
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                type="button"
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
                                    id="groups"
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
                                    id="image"
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
export class UserFormComponent {
    public readonly isSubsystemUser = isSubsystemUser;
    private _dialog_ref = inject<MatDialogRef<UserFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceUser; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'USERS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(generateUserFormModel(this._data.item));
    public readonly form = form(
        this.formModel,
        userFormSchema(this._data.item, isSubsystemUser()),
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
        loader: async () =>
            isSubsystemUser()
                ? [authority()].filter(Boolean)
                : (await queryDomains()).data,
    });
    public readonly domain_list = computed(
        () => this._domain_list.value() || [],
    );
    /** List of separator characters for groups */
    public readonly separators: number[] = [ENTER, COMMA];
    public group_list = computed(() => this.formModel().groups || []);

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
        onSaveHotkey(() => this.submit());
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

    public async submit(): Promise<void> {
        await submitFormDialog(
            this.form,
            {
                loading: this.loading,
                event: this.event,
                close: () => this._dialog_ref.close(),
            },
            `${this._name}.`,
            () => {
                const form_item = mergeFormItem(
                    this._data.item,
                    this.formModel(),
                    [undefined, null, ''],
                );
                if (isSubsystemUser()) {
                    for (const key of [
                        'sys_admin',
                        'support',
                        'groups',
                        'login_name',
                    ])
                        delete form_item[key];
                    form_item.authority_id = authority()?.id;
                }
                const user = form_item as unknown as PlaceUser;
                return user.id ? updateUser(user.id, user) : addUser(user);
            },
        );
    }
}
