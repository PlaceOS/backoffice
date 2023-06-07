import { Component, Input, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AsyncHandler } from '../../common/base.class';

import { Md5 } from 'ts-md5';

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
            <div class="field" *ngIf="form.controls.redirect_uri">
                <label for="client-id" i18n="@@clientIDLabel">
                    Client ID:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="client-id"
                        placeholder="MD5 Hash of the Redirect URI"
                        i18n-placeholder="@@clientIDPlaceholder"
                        [disabled]="true"
                        [ngModel]="client_id | async"
                        [ngModelOptions]="{ standalone: true }"
                    />
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
export class ApplicationFormComponent extends AsyncHandler {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;

    public readonly client_id = new BehaviorSubject('');

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.form && this.form) {
            const { client_id, redirect_uri } = this.form.value;
            this.client_id.next(
                client_id || redirect_uri ? Md5.hashStr(redirect_uri || '') : ''
            );
            if (client_id) return;
            this.subscription(
                'form.redirect_uri',
                this.form
                    .get('redirect_uri')
                    .valueChanges.subscribe((value: string) => {
                        this.client_id.next(value ? Md5.hashStr(value) : '');
                        this.form.patchValue(
                            { redirect_uri: value?.trim() },
                            { emitEvent: false }
                        );
                    })
            );
        }
    }
}
