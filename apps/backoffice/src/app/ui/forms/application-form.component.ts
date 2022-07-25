import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'application-form',
    template: `
        <form
            application
            *ngIf="form"
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.name">
                    <label
                        for="application-name"
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
                            name="application-name"
                            placeholder="Application Name"
                            i18n-placeholder="@@appNamePlaceholder"
                            formControlName="name"
                            required
                        />
                        <mat-error i18n="@@appNameError">
                            Application name is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.scopes">
                    <label for="scopes" i18n="@@scopesLabel">Scopes:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="scopes"
                            placeholder="Access Scopes"
                            i18n-placeholder="@@scopePlaceholder"
                            formControlName="scopes"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.skip_authorization">
                <mat-checkbox
                    class="m-1"
                    name="skip-authorization"
                    formControlName="skip_authorization"
                    i18n="@@skipAuthLabel"
                >
                    Skip Authorization
                </mat-checkbox>
            </div>
            <div class="field" *ngIf="form.controls.redirect_uri">
                <label for="redirect-uri" i18n="@@redirectLabel">
                    Login URL:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="redirect-uri"
                        placeholder="Redirect URI e.g. http://localhost:4200/oauth-resp.html"
                        i18n-placeholder="@@redirectPlaceholder"
                        formControlName="redirect_uri"
                    />
                    <mat-error>A valid URL is required</mat-error>
                </mat-form-field>
            </div>
        </form>
    `,
    styles: [
        `
            settings-form-field {
                margin-bottom: 1.5em;
            }
        `,
    ],
})
export class ApplicationFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
}
