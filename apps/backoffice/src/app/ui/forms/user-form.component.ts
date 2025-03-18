import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { queryDomains } from '@placeos/ts-client';
import { map, shareReplay } from 'rxjs/operators';

import {
    addChipItem,
    removeChipItem,
} from 'apps/backoffice/src/app/common/forms';
import { i18n } from '../../common/translate';

@Component({
    selector: 'user-form',
    template: `
        <form user class="flex flex-col" *ngIf="form" [formGroup]="form">
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
                <label for="domain">{{ 'DOMAINS.SINGULAR' | translate }}</label>
                <mat-form-field appearance="outline" class="h-12">
                    <mat-select
                        name="type"
                        formControlName="authority_id"
                        [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                    >
                        <mat-option
                            *ngFor="let domain of domain_list | async"
                            [value]="domain.id"
                        >
                            {{ domain.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.first_name">
                    <label
                        for="system-name"
                        [class.error]="
                            form.controls.first_name.invalid &&
                            form.controls.first_name.touched
                        "
                    >
                        {{ 'USERS.FIRST_NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="first-name"
                            [placeholder]="'USERS.FIRST_NAME' | translate"
                            formControlName="first_name"
                            required
                        />
                        <mat-error>{{
                            'USERS.FIRST_NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.last_name">
                    <label for="system-name"
                        >{{ 'USERS.LAST_NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="last-name"
                            [placeholder]="'USERS.LAST_NAME' | translate"
                            formControlName="last_name"
                            required
                        />
                        <mat-error>{{
                            'USERS.LAST_NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.email">
                <label
                    for="useremail"
                    [class.error]="
                        form.controls.email.invalid &&
                        form.controls.email.touched
                    "
                >
                    {{ 'COMMON.FIELD_EMAIL' | translate }}<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="useremail"
                        [placeholder]="'COMMON.FIELD_EMAIL' | translate"
                        formControlName="email"
                        autocomplete="nope"
                    />
                    <mat-error>{{
                        'USERS.EMAIL_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.staff_id">
                    <label for="staff-id"
                        >{{ 'USERS.STAFF_ID' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="staff-id"
                            [placeholder]="'USERS.STAFF_ID' | translate"
                            formControlName="staff_id"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.card_number">
                    <label for="card-number"
                        >{{ 'USERS.STAFF_CARD' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="card-number"
                            [placeholder]="'USERS.STAFF_CARD' | translate"
                            formControlName="card_number"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="mb-4 flex items-center space-x-4">
                <settings-toggle
                    *ngIf="form.controls.support"
                    class="max-w-1/2 flex-1"
                    [name]="'USERS.ROLE_SUPPORT' | translate"
                    formControlName="support"
                ></settings-toggle>
                <settings-toggle
                    *ngIf="form.controls.sys_admin"
                    class="max-w-1/2 flex-1"
                    [name]="'USERS.ROLE_ADMIN' | translate"
                    formControlName="sys_admin"
                ></settings-toggle>
            </div>
            <div class="fieldset">
                <div
                    class="field"
                    *ngIf="form.controls.staff_id && !hide_password"
                >
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
                            [type]="show_password ? 'text' : 'password'"
                            [placeholder]="'COMMON.PASSWORD' | translate"
                            formControlName="password"
                        />
                        <app-icon
                            matSuffix
                            (click)="show_password = !show_password"
                        >
                            visibility
                        </app-icon>
                        <mat-error>{{
                            'USERS.PASSWORD_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div
                    class="field"
                    *ngIf="form.controls.confirm_password && !hide_password"
                >
                    <label
                        for="confirm-password"
                        [class.error]="
                            form.controls.confirm_password.invalid &&
                            form.controls.confirm_password.touched
                        "
                        minlength="1"
                    >
                        {{ 'USERS.PASSWORD_CONFIRM' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [type]="show_confirm ? 'text' : 'password'"
                            name="confirm-password"
                            [placeholder]="'USERS.PASSWORD_CONFIRM' | translate"
                            formControlName="confirm_password"
                            minlength="1"
                        />
                        <app-icon
                            matSuffix
                            (click)="show_confirm = !show_confirm"
                        >
                            visibility
                        </app-icon>
                        <mat-error>{{
                            'USERS.PASSWORDS_MATCH' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.groups">
                <label
                    [class.error]="
                        form.controls.groups.invalid &&
                        form.controls.groups.touched
                    "
                >
                    {{ 'USERS.FIELD_GROUPS' | translate }}
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-chip-grid #chipList aria-label="Image List">
                        <mat-chip-row
                            *ngFor="let item of group_list"
                            (removed)="removeGroup(item)"
                        >
                            <div class="max-w-md truncate">{{ item }}</div>
                            <button
                                matChipRemove
                                [attr.aria-label]="
                                    'COMMON.ITEM_REMOVE'
                                        | translate: { item: item }
                                "
                            >
                                <app-icon>cancel</app-icon>
                            </button>
                        </mat-chip-row>
                    </mat-chip-grid>
                    <input
                        [placeholder]="'USERS.FIELD_GROUPS' | translate"
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separators"
                        [matChipInputAddOnBlur]="true"
                        (matChipInputTokenEnd)="addGroup($event)"
                    />
                </mat-form-field>
            </div>
        </form>
    `,
    styles: [``],
    standalone: false,
})
export class UserFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** Whether password should be visible in plaintext */
    public show_password: boolean;
    /** Whether password confirm should be visible in plaintext */
    public show_confirm: boolean;
    /** Loading state */
    public loading = '';
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

    public readonly addGroup = (e) =>
        addChipItem(this.form.controls.groups as any, e);
    public readonly removeGroup = (i) =>
        removeChipItem(this.form.controls.groups as any, i);

    public async ngOnInit() {
        this.loading = i18n('DOMAINS.LOADING');
        if (!this.form.controls.authority_id.value) {
            this.form.controls.authority_id.setValue(this.domain_list[0]?.id);
        }
        this.loading = '';
    }

    public get group_list(): string[] {
        return this.form.controls.groups.value;
    }
}
