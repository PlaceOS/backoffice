import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import {
    addChipItem,
    removeChipItem,
} from 'apps/backoffice/src/app/common/forms';

@Component({
    selector: 'user-form',
    template: `
        <form
            user
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            *ngIf="form"
            [formGroup]="form"
        >
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
            <div class="field mb-4">
                <label for="domain">Domain</label>
                <mat-form-field appearance="outline" class="h-12">
                    <mat-select
                        name="type"
                        formControlName="authority_id"
                        placeholder="Select Domain..."
                    >
                        <mat-option
                            *ngFor="let domain of domain_list"
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
                        i18n="@@firstNameLabel"
                    >
                        First Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="first-name"
                            placeholder="First name"
                            i18n-placeholder="@@firstNamePlaceholder"
                            formControlName="first_name"
                            required
                        />
                        <mat-error i18n="@@userNameError"
                            >User's name is required</mat-error
                        >
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.last_name">
                    <label for="system-name" i18n="@@lastNameLabel">
                        Last Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="last-name"
                            placeholder="Last name"
                            i18n-placeholder="@@lastNamePlaceholder"
                            formControlName="last_name"
                            required
                        />
                        <mat-error i18n="@@userLastNameError"
                            >User's last name is required</mat-error
                        >
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
                    i18n="@@emailLabel"
                >
                    Email<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="useremail"
                        placeholder="Email"
                        i18n-placeholder="@@emailPlaceholder"
                        formControlName="email"
                        autocomplete="nope"
                    />
                    <mat-error i18n="@@emailError"
                        >A valid email is required</mat-error
                    >
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.staff_id">
                <label for="staff-id" i18n="@@staffIdLabel"> Staff ID: </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="staff-id"
                        placeholder="Staff ID"
                        i18n-placeholder="@@staffIdPlaceholder"
                        formControlName="staff_id"
                    />
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.card_number">
                <label for="card-number" i18n="@@cardNumberLabel">
                    Card Number:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="card-number"
                        placeholder="Card Number"
                        i18n-placeholder="@@cardNumberPlaceholder"
                        formControlName="card_number"
                    />
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.support">
                <mat-checkbox
                    name="support"
                    formControlName="support"
                    i18n="@@supportLabel"
                    >Support</mat-checkbox
                >
            </div>
            <div class="field" *ngIf="form.controls.sys_admin">
                <mat-checkbox
                    name="sys_admin"
                    formControlName="sys_admin"
                    i18n="@@adminLabel"
                    >System Admin</mat-checkbox
                >
            </div>
            <div class="field" *ngIf="form.controls.staff_id">
                <label
                    for="new-password"
                    [class.error]="
                        form.controls.password.invalid &&
                        form.controls.password.touched
                    "
                    i18n="@@passwordLabel"
                >
                    Password:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="new-password"
                        autocomplete="new-password"
                        [type]="show_password ? 'text' : 'password'"
                        placeholder="Password"
                        i18n-placeholder="@@passwordPlaceholder"
                        formControlName="password"
                    />
                    <app-icon
                        matSuffix
                        [icon]="{
                            class: 'material-icons',
                            content: 'visibility'
                        }"
                        (click)="show_password = !show_password"
                    ></app-icon>
                    <mat-error i18n="@@passordError"
                        >A valid password is required</mat-error
                    >
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.confirm_password">
                <label
                    for="confirm-password"
                    [class.error]="
                        form.controls.confirm_password.invalid &&
                        form.controls.confirm_password.touched
                    "
                    minlength="1"
                    i18n="@@checkPasswordLabel"
                >
                    Confirm Pasword:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [type]="show_confirm ? 'text' : 'password'"
                        name="confirm-password"
                        placeholder="Confirm Password"
                        i18n-placeholder="@@checkPasswordPlaceholder"
                        formControlName="confirm_password"
                        minlength="1"
                    />
                    <app-icon
                        matSuffix
                        [icon]="{
                            class: 'material-icons',
                            content: 'visibility'
                        }"
                        (click)="show_confirm = !show_confirm"
                    ></app-icon>
                    <mat-error i18n="@@checkPasswordError"
                        >Passwords don't match</mat-error
                    >
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.groups">
                <label for="user-groups" i18n="@@groupssLabel">
                    User Groups:
                </label>
                <mat-form-field appearance="outline">
                    <mat-chip-list #chipList aria-label="Zone Tags">
                        <mat-chip
                            *ngFor="let group of group_list"
                            [selectable]="true"
                            [removable]="true"
                            (removed)="removeGroup(group)"
                        >
                            {{ group }}
                            <app-icon
                                matChipRemove
                                [icon]="{ class: 'backoffice-cross' }"
                            ></app-icon>
                        </mat-chip>
                        <input
                            placeholder="User groups..."
                            i18n-placeholder="@@userGroupsPlaceholder"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addGroup($event)"
                        />
                    </mat-chip-list>
                </mat-form-field>
            </div>
        </form>
    `,
    styles: [``],
})
export class UserFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Whether password should be visible in plaintext */
    public show_password: boolean;
    /** Whether password confirm should be visible in plaintext */
    public show_confirm: boolean;
    /** Loading state */
    public loading: string = '';
    /** List of available domains */
    public domain_list: PlaceDomain[];
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA];

    public readonly addGroup = (e) =>
        addChipItem(this.form.controls.groups as any, e);
    public readonly removeGroup = (i) =>
        removeChipItem(this.form.controls.groups as any, i);

    public async ngOnInit() {
        this.loading = 'Loading domains...';
        this.domain_list = await queryDomains()
            .pipe(map((r) => r.data))
            .toPromise();
        if (!this.form.controls.authority_id.value) {
            this.form.controls.authority_id.setValue(this.domain_list[0]?.id);
        }
        this.loading = '';
    }

    public get group_list(): string[] {
        return this.form.controls.groups.value;
    }
}
