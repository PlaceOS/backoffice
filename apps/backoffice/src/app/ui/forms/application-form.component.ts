import { Component, SimpleChanges, input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AsyncHandler } from '../../common/async-handler.class';

import { Md5 } from 'ts-md5';

@Component({
    selector: 'application-form',
    template: `
        @if (form()) {
            <form application class="flex flex-col" [formGroup]="form()">
                <div class="fieldset">
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="application-name"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="application-name"
                                    placeholder="Application Name"
                                    formControlName="name"
                                    required
                                />
                                <mat-error>{{
                                    'DOMAINS.APP_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.scopes) {
                        <div class="field">
                            <label for="scopes"
                                >{{ 'DOMAINS.APP_SCOPES' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="scopes"
                                    [placeholder]="
                                        'DOMAINS.APP_SCOPES' | translate
                                    "
                                    formControlName="scopes"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.redirect_uri) {
                    <div class="field">
                        <label for="redirect-uri"
                            >{{ 'DOMAINS.APP_REDIRECT_URL' | translate }}:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="redirect-uri"
                                placeholder="Redirect URI e.g. http://localhost:4200/oauth-resp.html"
                                formControlName="redirect_uri"
                            />
                            <mat-error>{{
                                'DOMAINS.APP_REDIRECT_URL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset mb-4">
                    <settings-toggle
                        class="flex-1"
                        [name]="'DOMAINS.APP_SKIP' | translate"
                        formControlName="skip_authorization"
                    ></settings-toggle>
                    <settings-toggle
                        class="flex-1"
                        [name]="'DOMAINS.APP_PRESERVE_ID' | translate"
                        formControlName="preserve_client_id"
                    ></settings-toggle>
                </div>
                @if (form().controls.redirect_uri) {
                    <div class="field">
                        <label for="client-id"
                            >{{ 'DOMAINS.APP_CLIENT_ID' | translate }}:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="client-id"
                                [placeholder]="
                                    'DOMAINS.APP_CLIENT_PLACEHOLDER' | translate
                                "
                                [disabled]="true"
                                [ngModel]="client_id | async"
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `,
    styles: [
        `
            settings-form-field {
                margin-bottom: 1.5em;
            }
        `,
    ],
    standalone: false,
})
export class ApplicationFormComponent extends AsyncHandler {
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);

    public default_redirect_uri: string;

    public readonly client_id = new BehaviorSubject('');

    public ngOnChanges(changes: SimpleChanges) {
        const form = this.form();
        if (changes.form && form) {
            const { id, client_id, redirect_uri } = form.value;
            this.default_redirect_uri = redirect_uri || '';
            this.client_id.next(
                client_id || redirect_uri
                    ? Md5.hashStr(redirect_uri || '')
                    : '',
            );
            this.subscription(
                'form.redirect_uri',
                form
                    .get('redirect_uri')
                    .valueChanges.subscribe((value: string) => {
                        const formValue = this.form();
                        if (formValue.value.preserve_client_id) return;
                        this.client_id.next(value ? Md5.hashStr(value) : '');
                        formValue.patchValue(
                            { redirect_uri: value?.trim() },
                            { emitEvent: false },
                        );
                    }),
            );
            this.subscription(
                'form.preserve_client_id',
                form
                    .get('preserve_client_id')
                    .valueChanges.subscribe((preserve: boolean) => {
                        const value = this.form().value.redirect_uri;
                        const uri = preserve
                            ? this.default_redirect_uri
                            : value;
                        this.client_id.next(uri ? Md5.hashStr(uri) : '');
                    }),
            );
        }
    }
}
