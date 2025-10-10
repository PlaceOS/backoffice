import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { addChipItem, removeChipItem } from '../../common/forms';
import { notifyWarn } from '../../common/notifications';
import { isValidDomain } from '../../common/validation';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'domain-form',
    template: `
        @if (form()) {
            <form domain class="flex flex-col" [formGroup]="form()">
                <div class="fieldset">
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="domain-name"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="domain-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    formControlName="name"
                                    required
                                />
                                @if (form().controls.name.invalid) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.NAME_REQUIRED' | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.domain) {
                        <div class="field">
                            <label
                                for="domain"
                                [class.error]="
                                    form().controls.domain.invalid &&
                                    form().controls.domain.touched
                                "
                            >
                                {{ 'DOMAINS.NAME' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="domain"
                                    [placeholder]="
                                        'DOMAINS.NAME_PLACEHOLDER' | translate
                                    "
                                    formControlName="domain"
                                />
                                <mat-error>{{
                                    'DOMAINS.DOMAIN_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.login_url) {
                    <div class="field">
                        <label
                            for="login-url"
                            [class.error]="
                                form().controls.login_url.invalid &&
                                form().controls.login_url.touched
                            "
                        >
                            {{ 'DOMAINS.LOGIN_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="login-url"
                                [placeholder]="'DOMAINS.LOGIN_URL' | translate"
                                formControlName="login_url"
                            />
                            @if (form().controls.login_url.invalid) {
                                <mat-error>
                                    {{
                                        'DOMAINS.LOGIN_URL_REQUIRED' | translate
                                    }}
                                </mat-error>
                            }
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.logout_url) {
                    <div class="field">
                        <label
                            for="logout-url"
                            [class.error]="
                                form().controls.logout_url.invalid &&
                                form().controls.logout_url.touched
                            "
                        >
                            {{ 'DOMAINS.LOGOUT_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="logout-url"
                                [placeholder]="'DOMAINS.LOGOUT_URL' | translate"
                                formControlName="logout_url"
                            />
                            @if (form().controls.logout_url.invalid) {
                                <mat-error>
                                    {{
                                        'DOMAINS.LOGOUT_URL_REQUIRED'
                                            | translate
                                    }}
                                </mat-error>
                            }
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">{{
                            'COMMON.FIELD_DESCRIPTION' | translate
                        }}</label>
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
                @if (form().controls.email_domains) {
                    <div class="field">
                        <label
                            [class.error]="
                                form().controls.email_domains.invalid &&
                                form().controls.email_domains.touched
                            "
                        >
                            {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipList aria-label="Image List">
                                @for (item of email_domain_list; track item) {
                                    <mat-chip-row
                                        (removed)="removeEmailDomain(item)"
                                    >
                                        <div class="max-w-md truncate">
                                            {{ item }}
                                        </div>
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.ITEM_REMOVE'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <icon>cancel</icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                [placeholder]="
                                    'DOMAINS.EMAIL_DOMAINS' | translate
                                "
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addEmailDomain($event)"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        }
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
    imports: [
        MatFormFieldModule,
        MatChipsModule,
        MatInputModule,
        TranslatePipe,
        ReactiveFormsModule,
    ],
})
export class DomainFormComponent {
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addEmailDomain = (e) => {
        if (!e?.value) return;
        if (!isValidDomain(e.value)) return notifyWarn('Invalid email');
        addChipItem(this.form().controls.email_domains as any, e);
    };
    public readonly removeEmailDomain = (i) =>
        removeChipItem(this.form().controls.email_domains as any, i);

    public get email_domain_list(): string[] {
        return this.form().controls.email_domains.value;
    }
}
