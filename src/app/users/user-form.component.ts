import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
    FormControl,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
import {
    PlaceUser,
    addUser,
    cleanObject,
    queryDomains,
    updateUser,
} from '@placeos/ts-client';
import { map, shareReplay } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler } from '../common/async-handler.class';
import { addChipItem, removeChipItem } from '../common/forms';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateUserFormFields } from './users.utilities';

@Component({
    selector: 'user-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form user class="flex flex-col" [formGroup]="form">
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
                                name="type"
                                formControlName="authority_id"
                                [placeholder]="
                                    'ADMIN.SELECT_DOMAIN' | translate
                                "
                            >
                                @for (
                                    domain of domain_list | async;
                                    track domain
                                ) {
                                    <mat-option [value]="domain.id">
                                        {{ domain.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="fieldset">
                        @if (form.controls.first_name) {
                            <div class="field">
                                <label
                                    for="system-name"
                                    [class.error]="
                                        form.controls.first_name.invalid &&
                                        form.controls.first_name.touched
                                    "
                                >
                                    {{ 'USERS.FIRST_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="first-name"
                                        [placeholder]="
                                            'USERS.FIRST_NAME' | translate
                                        "
                                        formControlName="first_name"
                                        required
                                    />
                                    <mat-error>{{
                                        'USERS.FIRST_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.last_name) {
                            <div class="field">
                                <label for="system-name"
                                    >{{ 'USERS.LAST_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="last-name"
                                        [placeholder]="
                                            'USERS.LAST_NAME' | translate
                                        "
                                        formControlName="last_name"
                                        required
                                    />
                                    <mat-error>{{
                                        'USERS.LAST_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.controls.email) {
                        <div class="field">
                            <label
                                for="useremail"
                                [class.error]="
                                    form.controls.email.invalid &&
                                    form.controls.email.touched
                                "
                            >
                                {{ 'COMMON.FIELD_EMAIL' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="useremail"
                                    [placeholder]="
                                        'COMMON.FIELD_EMAIL' | translate
                                    "
                                    formControlName="email"
                                    autocomplete="nope"
                                />
                                <mat-error>{{
                                    'USERS.EMAIL_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.controls.staff_id) {
                            <div class="field">
                                <label for="staff-id"
                                    >{{ 'USERS.STAFF_ID' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="staff-id"
                                        [placeholder]="
                                            'USERS.STAFF_ID' | translate
                                        "
                                        formControlName="staff_id"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.card_number) {
                            <div class="field">
                                <label for="card-number"
                                    >{{ 'USERS.STAFF_CARD' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="card-number"
                                        [placeholder]="
                                            'USERS.STAFF_CARD' | translate
                                        "
                                        formControlName="card_number"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="mb-4 flex items-center space-x-4">
                        @if (form.controls.support) {
                            <settings-toggle
                                class="max-w-1/2 flex-1"
                                [name]="'USERS.ROLE_SUPPORT' | translate"
                                formControlName="support"
                            ></settings-toggle>
                        }
                        @if (form.controls.sys_admin) {
                            <settings-toggle
                                class="max-w-1/2 flex-1"
                                [name]="'USERS.ROLE_ADMIN' | translate"
                                formControlName="sys_admin"
                            ></settings-toggle>
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.controls.staff_id && !hide_password) {
                            <div class="field">
                                <label
                                    for="new-password"
                                    [class.error]="
                                        form.controls.password.invalid &&
                                        form.controls.password.touched
                                    "
                                >
                                    {{ 'COMMON.PASSWORD' | translate }}
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
                                            'COMMON.PASSWORD' | translate
                                        "
                                        formControlName="password"
                                    />
                                    <icon
                                        matSuffix
                                        (click)="show_password = !show_password"
                                    >
                                        visibility
                                    </icon>
                                    <mat-error>{{
                                        'USERS.PASSWORD_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.confirm_password && !hide_password) {
                            <div class="field">
                                <label
                                    for="confirm-password"
                                    [class.error]="
                                        form.controls.confirm_password
                                            .invalid &&
                                        form.controls.confirm_password.touched
                                    "
                                    minlength="1"
                                >
                                    {{ 'USERS.PASSWORD_CONFIRM' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [type]="
                                            show_confirm ? 'text' : 'password'
                                        "
                                        name="confirm-password"
                                        [placeholder]="
                                            'USERS.PASSWORD_CONFIRM' | translate
                                        "
                                        formControlName="confirm_password"
                                        minlength="1"
                                    />
                                    <icon
                                        matSuffix
                                        (click)="show_confirm = !show_confirm"
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
                    @if (form.controls.groups) {
                        <div class="field">
                            <label
                                for="groups"
                                [class.error]="
                                    form.controls.groups.invalid &&
                                    form.controls.groups.touched
                                "
                            >
                                {{ 'USERS.FIELD_GROUPS' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    aria-label="Image List"
                                >
                                    @for (item of group_list; track item) {
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
                    @if (form.controls.image) {
                        <div class="field">
                            <label
                                for="image"
                                [class.error]="
                                    form.controls.image.invalid &&
                                    form.controls.image.touched
                                "
                            >
                                {{ 'USERS.IMAGE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="image"
                                    [placeholder]="'USERS.IMAGE' | translate"
                                    formControlName="image"
                                />
                                <mat-error>{{
                                    'USERS.IMAGE_INVALID' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.locatable) {
                        <settings-toggle
                            formControlName="locatable"
                            [name]="'USERS.LOCATABLE' | translate"
                            class="mb-4"
                        ></settings-toggle>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        CommonModule,
        SettingsToggleComponent,
        ReactiveFormsModule,
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

    public form: UntypedFormGroup;
    public loading: string;
    public heading: string;
    /** Whether password should be visible in plaintext */
    public show_password: boolean;
    /** Whether password confirm should be visible in plaintext */
    public show_confirm: boolean;
    /** List of available domains */
    public readonly domain_list = queryDomains().pipe(
        map(({ data }) => data),
        shareReplay(1),
    );
    /** List of separator characters for groups */
    public readonly separators: number[] = [ENTER, COMMA];

    public get hide_password() {
        return (
            this.form.value.email.toLowerCase().startsWith('lynner') &&
            !localStorage.getItem('PlaceOS.show_password')
        );
    }

    public readonly addGroup = (e: MatChipInputEvent) =>
        addChipItem(this.form.controls.groups as FormControl<string[]>, e);
    public readonly removeGroup = (i: string) =>
        removeChipItem(this.form.controls.groups as FormControl<string[]>, i);

    public get group_list(): string[] {
        return this.form.controls.groups.value;
    }

    public async ngOnInit() {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading = i18n(`${this._name}.${edit ? 'EDIT' : 'NEW'}`);
        this.form = generateUserFormFields(item);
        if (!this.form.controls.authority_id.value) {
            this.form.controls.authority_id.setValue(this.domain_list[0]?.id);
        }
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
                ? cleanObject({ ...item_json, ...this.form.value }, [
                      undefined,
                      null,
                      '',
                  ])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        (form_item.id
            ? updateUser(
                  form_item.id as string,
                  form_item as unknown as PlaceUser,
              )
            : addUser(form_item as unknown as PlaceUser)
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
}
