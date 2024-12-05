import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';
import { map, shareReplay } from 'rxjs/operators';

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
            <div class="field">
                <label for="domain">Domain</label>
                <mat-form-field appearance="outline" class="h-12">
                    <mat-select
                        name="type"
                        formControlName="authority_id"
                        placeholder="Select Domain..."
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
                        First Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="first-name"
                            placeholder="First name"
                            formControlName="first_name"
                            required
                        />
                        <mat-error>User's name is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.last_name">
                    <label for="system-name"> Last Name<span>*</span>: </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="last-name"
                            placeholder="Last name"
                            formControlName="last_name"
                            required
                        />
                        <mat-error>User's last name is required</mat-error>
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
                    Email<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="useremail"
                        placeholder="Email"
                        formControlName="email"
                        autocomplete="nope"
                    />
                    <mat-error>A valid email is required</mat-error>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.staff_id">
                    <label for="staff-id"> Staff ID: </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="staff-id"
                            placeholder="Staff ID"
                            formControlName="staff_id"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.card_number">
                    <label for="card-number"> Card Number: </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="card-number"
                            placeholder="Card Number"
                            formControlName="card_number"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="flex items-center space-x-4 mb-4">
                <settings-toggle
                    *ngIf="form.controls.support"
                    class="flex-1 max-w-1/2"
                    name="Support"
                    formControlName="support"
                ></settings-toggle>
                <settings-toggle
                    *ngIf="form.controls.sys_admin"
                    class="flex-1 max-w-1/2"
                    name="System Admin"
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
                        Password:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="new-password"
                            autocomplete="new-password"
                            [type]="show_password ? 'text' : 'password'"
                            placeholder="Password"
                            formControlName="password"
                        />
                        <app-icon
                            matSuffix
                            (click)="show_password = !show_password"
                        >
                            visibility
                        </app-icon>
                        <mat-error>A valid password is required</mat-error>
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
                        Confirm Pasword:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [type]="show_confirm ? 'text' : 'password'"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            formControlName="confirm_password"
                            minlength="1"
                        />
                        <app-icon
                            matSuffix
                            (click)="show_confirm = !show_confirm"
                        >
                            visibility
                        </app-icon>
                        <mat-error>Passwords don't match</mat-error>
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
                    User Groups:
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-chip-grid #chipList aria-label="Image List">
                        <mat-chip-row
                            *ngFor="let item of group_list"
                            (removed)="removeGroup(item)"
                        >
                            <div class="truncate max-w-md">{{ item }}</div>
                            <button
                                matChipRemove
                                [attr.aria-label]="'Remove ' + item"
                            >
                                <app-icon>cancel</app-icon>
                            </button>
                        </mat-chip-row>
                    </mat-chip-grid>
                    <input
                        placeholder="User Groups..."
                        i18n-placeholder
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
})
export class UserFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** Whether password should be visible in plaintext */
    public show_password: boolean;
    /** Whether password confirm should be visible in plaintext */
    public show_confirm: boolean;
    /** Loading state */
    public loading: string = '';
    /** List of available domains */
    public readonly domain_list = queryDomains().pipe(
        map(({ data }) => data),
        shareReplay(1)
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
        this.loading = 'Loading domains...';
        if (!this.form.controls.authority_id.value) {
            this.form.controls.authority_id.setValue(this.domain_list[0]?.id);
        }
        this.loading = '';
    }

    public get group_list(): string[] {
        return this.form.controls.groups.value;
    }
}
