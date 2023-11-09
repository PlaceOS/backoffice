import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormGroup, AbstractControl } from '@angular/forms';

import { Identity, HashMap } from 'apps/backoffice/src/app/common/types';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';

@Component({
    selector: 'oauth-source-form',
    template: `
        <form
            oauth-source
            *ngIf="form"
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="auth-source-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    i18n="@@nameLabel"
                >
                    Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="auth-source-name"
                        placeholder="Auth Source Name"
                        i18n-placeholder="@@authSourceNamePlaceholder"
                        formControlName="name"
                        required
                    />
                    <mat-error
                        *ngIf="form.controls.name.invalid"
                        i18n="@@authSourceNameError"
                    >
                        Auth source name is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.client_id">
                    <label for="client-id" i18n="@@authSourceClientIdLabel"
                        >Client ID:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="client-id"
                            placeholder="Client ID"
                            i18n-placeholder="@@authSourceClientIdPlaceholder"
                            formControlName="client_id"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.client_secret">
                    <label
                        for="client-secret"
                        i18n="@@authSourceClientSecretLabel"
                    >
                        Client Secret:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="client-secret"
                            placeholder="Client Secret"
                            i18n-placeholder="
                                @@authSourceClientSecretPlaceholder"
                            formControlName="client_secret"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.site">
                    <label for="site" i18n="@@authSourceSiteLabel">Site:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="site"
                            placeholder="URL of the SSO provider"
                            i18n-placeholder="@@authSourceSitePlaceholder"
                            formControlName="site"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.scope">
                    <label for="scope" i18n="@@scopeLabel">Scope:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="scope"
                            placeholder="Scope"
                            i18n-placeholder="@@scopePlaceholder"
                            formControlName="scope"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field type" *ngIf="form.controls.token_method">
                    <label
                        for="token-method"
                        i18n="@@authSourceTokenMethodLabel"
                        >Token Method:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="token-method"
                            formControlName="token_method"
                        >
                            <mat-option
                                *ngFor="let type of token_methods"
                                [value]="type.id"
                            >
                                {{ type.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="field type" *ngIf="form.controls.auth_scheme">
                    <label for="auth-scheme" i18n="@@authSourceSchemeLabel">
                        Authentication Scheme:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="auth-scheme"
                            formControlName="auth_scheme"
                        >
                            <mat-option
                                *ngFor="let type of auth_schemes"
                                [value]="type.id"
                            >
                                { type.id, select, request_body { Request Body }
                                basic_auth { Basic Auth } }
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.token_url">
                <label for="token-url" i18n="@@authSourceTokenUrlLabel"
                    >Token URL:</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="token-url"
                        placeholder="Token URL"
                        i18n-placeholder="@@authSourceTokenUrlPlaceholder"
                        formControlName="token_url"
                    />
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.authorize_url">
                    <label
                        for="authorize-url"
                        i18n="@@authSourceAuthorizeUrlLabel"
                    >
                        Authorize URL:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="authorize-url"
                            placeholder="Authorize URL"
                            i18n-placeholder="
                                @@authSourceAuthorizeUrlPlaceholder"
                            formControlName="authorize_url"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.raw_info_url">
                    <label for="info-url" i18n="@@authSourceProfileUrlLabel"
                        >User Profile URL:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="raw_info_url"
                            placeholder="User Profile URL"
                            i18n-placeholder="@@authSourceProfileUrlPlaceholder"
                            formControlName="raw_info_url"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.info_mappings">
                <label for="client-secret" i18n="@@authSourceMappingsLabel"
                    >Info Mappings:</label
                >
                <object-list-field
                    [(ngModel)]="info_mapping_list"
                    (ngModelChange)="
                        updateMappings($event, form.controls.info_mappings)
                    "
                    [ngModelOptions]="{ standalone: true }"
                    [fields]="['PlaceOS', 'Remote']"
                ></object-list-field>
            </div>
            <div class="field" *ngIf="form.controls.authorize_params">
                <label for="client-secret" i18n="@@authSourceAuthParamsLabel"
                    >Authorize Params:</label
                >
                <object-list-field
                    [(ngModel)]="auth_params_list"
                    (ngModelChange)="
                        updateMappings(
                            $event,
                            form.controls.authorize_params,
                            false,
                            ['Parameter', 'Value']
                        )
                    "
                    [ngModelOptions]="{ standalone: true }"
                    [fields]="['Parameter', 'Value']"
                ></object-list-field>
            </div>
            <div class="field" *ngIf="form.controls.ensure_matching">
                <label
                    for="client-secret"
                    i18n="@@authSourceEnsureMatchingLabel"
                    >Ensure Matching:</label
                >
                <object-list-field
                    [(ngModel)]="ensure_matching_list"
                    (ngModelChange)="
                        updateMappings(
                            $event,
                            form.controls.ensure_matching,
                            true,
                            ['Parameter', 'Value']
                        )
                    "
                    [ngModelOptions]="{ standalone: true }"
                    [fields]="['Parameter', 'Value']"
                ></object-list-field>
            </div>
        </form>
    `,
    styles: [
        `
            :host {
                max-width: 100%;
            }
        `,
    ],
})
export class OauthSourceFormComponent
    extends AsyncHandler
    implements OnChanges
{
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** List of available token request methods */
    public token_methods: Identity[] = [
        { id: 'get', name: 'GET' },
        { id: 'post', name: 'POST' },
        { id: 'put', name: 'PUT' },
    ];
    /** List of available authentication schemes */
    public auth_schemes: Identity[] = [
        { id: 'request_body', name: 'Request Body' },
        { id: 'basic_auth', name: 'Basic Auth' },
    ];
    /** List of info mapping pairs */
    public info_mapping_list: any[] = [];
    /** List of authorize params pairs */
    public auth_params_list: any[] = [];
    /** List of ensure_matching pairs */
    public ensure_matching_list: any[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form && this.form) {
            if (this.form.controls.info_mappings) {
                const map = this.form.controls.info_mappings.value || {};
                this.info_mapping_list = Object.keys(map).map((key) => {
                    return { PlaceOS: key, Remote: map[key] };
                });
            }
            if (this.form.controls.authorize_params) {
                const map = this.form.controls.authorize_params.value || {};
                this.auth_params_list = Object.keys(map).map((key) => {
                    return { Parameter: key, Value: map[key] };
                });
            }
            if (this.form.controls.ensure_matching) {
                const map = this.form.controls.ensure_matching.value || {};
                this.ensure_matching_list = Object.keys(map).map((key) => {
                    return {
                        Parameter: key,
                        Value: (map[key] || []).join(','),
                    };
                });
            }
        }
    }

    public updateMappings(
        mappings: { PlaceOS: string; Remote: string }[],
        control: AbstractControl,
        split: boolean = false,
        fields: [string, string] = ['PlaceOS', 'Remote']
    ) {
        const map: HashMap = {};
        for (const pair of mappings) {
            if (pair[fields[0]] && pair[fields[1]]) {
                map[pair[fields[0]]] = !split
                    ? pair[fields[1]]
                    : (pair[fields[1]] || '').split(',');
            }
        }
        control.setValue(map);
    }
}
