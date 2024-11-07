import { Component, Input } from '@angular/core';
import { UntypedFormGroup, Validators } from '@angular/forms';
import { addChipItem, removeChipItem } from '../../common/forms';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { validateEmailList } from '../../triggers/triggers.utilities';
import { notifyWarn } from '../../common/notifications';
import {
    isValidDomain,
    isValidUrl,
    validateURI,
} from '../../common/validation';

@Component({
    selector: 'domain-form',
    template: `
        <form
            domain
            *ngIf="form"
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.name">
                    <label
                        for="domain-name"
                        [class.error]="
                            form.controls.name.invalid &&
                            form.controls.name.touched
                        "
                        i18n="@@nameLabel"
                    >
                        Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="domain-name"
                            placeholder="Domain Name"
                            i18n-placeholder="@@domainNamePlaceholder"
                            formControlName="name"
                            required
                        />
                        <mat-error
                            *ngIf="form.controls.name.invalid"
                            i18n="@@domainNameError"
                        >
                            Domain name is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.domain">
                    <label
                        for="domain"
                        [class.error]="
                            form.controls.domain.invalid &&
                            form.controls.domain.touched
                        "
                        i18n="@@domainLabel"
                    >
                        Domain:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="domain"
                            placeholder="Domain e.g localhost"
                            i18n="@@domainPlaceholder"
                            formControlName="domain"
                        />
                        <mat-error i18n="@@domainError">
                            A valid Domain is required
                        </mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.login_url">
                <label
                    for="login-url"
                    [class.error]="
                        form.controls.login_url.invalid &&
                        form.controls.login_url.touched
                    "
                    i18n="@@loginUrlLabel"
                >
                    Login URL:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="login-url"
                        placeholder="Login URL"
                        i18n="@@loginUrlPlaceholder"
                        formControlName="login_url"
                    />
                    <mat-error
                        *ngIf="form.controls.login_url.invalid"
                        i18n="@@loginUrlError"
                    >
                        A valid Login URL is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.logout_url">
                <label
                    for="logout-url"
                    [class.error]="
                        form.controls.logout_url.invalid &&
                        form.controls.logout_url.touched
                    "
                    i18n="@@logoutUrlLabel"
                >
                    Logout URL:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="logout-url"
                        placeholder="Logout URL"
                        i18n-placeholder="@@logoutUrlPlaceholder"
                        formControlName="logout_url"
                    />
                    <mat-error
                        *ngIf="form.controls.logout_url.invalid"
                        i18n="@@logoutUrlError"
                    >
                        A valid Logout URL is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.description">
                <label for="description" i18n="@@descriptionLabel"
                    >Description:</label
                >
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
                        i18n="@@descriptionPlaceholder"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.email_domains">
                <label
                    [class.error]="
                        form.controls.email_domains.invalid &&
                        form.controls.email_domains.touched
                    "
                    i18n="@@tagsLabel"
                >
                    Email Domains:
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-chip-grid #chipList aria-label="Image List">
                        <mat-chip-row
                            *ngFor="let item of email_domain_list"
                            (removed)="removeEmailDomain(item)"
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
                        placeholder="Tags..."
                        i18n-placeholder
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separators"
                        [matChipInputAddOnBlur]="true"
                        (matChipInputTokenEnd)="addEmailDomain($event)"
                    />
                </mat-form-field>
            </div>
        </form>
    `,
    styles: [
        `
            mat-checkbox {
                margin-top: 2.5em;
                margin-bottom: 1.5em;
            }

            @media screen and (max-width: 640px) {
                mat-checkbox {
                    margin-top: 0;
                }
            }
        `,
    ],
})
export class DomainFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addEmailDomain = (e) => {
        if (!e?.value) return;
        if (!isValidDomain(e.value)) return notifyWarn('Invalid email');
        addChipItem(this.form.controls.email_domains as any, e);
    };
    public readonly removeEmailDomain = (i) =>
        removeChipItem(this.form.controls.email_domains as any, i);

    public get email_domain_list(): string[] {
        return this.form.controls.email_domains.value;
    }
}
