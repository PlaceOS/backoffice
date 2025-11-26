import { Component, OnChanges, SimpleChanges, input } from '@angular/core';
import {
    AbstractControl,
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler } from '../../common/async-handler.class';
import { HashMap, Identity } from '../../common/types';
import { ObjectListFieldComponent } from '../custom-fields/object-list-field.component';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'oauth-source-form',
    template: `
        @if (form()) {
            <form oauth-source class="flex flex-col" [formGroup]="form()">
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="auth-source-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="auth-source-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            @if (form().controls.name.invalid) {
                                <mat-error>
                                    {{
                                        'DOMAINS.AUTHENTICATION_NAME_REQUIRE'
                                            | translate
                                    }}
                                </mat-error>
                            }
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.client_id) {
                        <div class="field">
                            <label for="client-id"
                                >{{ 'DOMAINS.CLIENT_ID' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="client-id"
                                    [placeholder]="
                                        'DOMAINS.CLIENT_ID' | translate
                                    "
                                    formControlName="client_id"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.client_secret) {
                        <div class="field">
                            <label for="client-secret"
                                >{{ 'DOMAINS.CLIENT_SECRET' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="client-secret"
                                    [placeholder]="
                                        'DOMAINS.CLIENT_SECRET' | translate
                                    "
                                    formControlName="client_secret"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.site) {
                        <div class="field">
                            <label for="site"
                                >{{ 'DOMAINS.OAUTH_SITE' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="site"
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SITE_PLACEHOLDER'
                                            | translate
                                    "
                                    formControlName="site"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.scope) {
                        <div class="field">
                            <label for="scope"
                                >{{
                                    'DOMAINS.OAUTH_SCOPES' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="scope"
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SCOPES' | translate
                                    "
                                    formControlName="scope"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.token_method) {
                        <div class="field type">
                            <label for="token-method"
                                >{{ 'DOMAINS.OAUTH_TOKEN_METHOD' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="token-method"
                                    formControlName="token_method"
                                >
                                    @for (type of token_methods; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.auth_scheme) {
                        <div class="field type">
                            <label for="auth-scheme">
                                Authentication Scheme:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="auth-scheme"
                                    formControlName="auth_scheme"
                                >
                                    @for (type of auth_schemes; track type) {
                                        <mat-option [value]="type.id">
                                            {{
                                                (type.id === 'request_body'
                                                    ? 'DOMAINS.OAUTH_SCHEME_BODY'
                                                    : 'DOMAINS.OAUTH_SCHEME_BASIC'
                                                ) | translate
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.token_url) {
                    <div class="field">
                        <label for="token-url"
                            >{{ 'DOMAINS.OAUTH_TOKEN_URL' | translate }}:</label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="token-url"
                                [placeholder]="
                                    'DOMAINS.OAUTH_TOKEN_URL' | translate
                                "
                                formControlName="token_url"
                            />
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.authorize_url) {
                        <div class="field">
                            <label for="authorize-url"
                                >{{
                                    'DOMAINS.OAUTH_AUTHORISE_URL' | translate
                                }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="authorize-url"
                                    [placeholder]="
                                        'DOMAINS.OAUTH_AUTHORISE_URL'
                                            | translate
                                    "
                                    formControlName="authorize_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.raw_info_url) {
                        <div class="field">
                            <label for="info-url"
                                >{{
                                    'DOMAINS.OAUTH_PROFILE_URL' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="raw_info_url"
                                    [placeholder]="
                                        'DOMAINS.OAUTH_PROFILE_URL' | translate
                                    "
                                    formControlName="raw_info_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.info_mappings) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.OAUTH_INFO_MAPPINGS' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="info_mapping_list"
                            (ngModelChange)="
                                updateMappings(
                                    $event,
                                    form().controls.info_mappings
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['PlaceOS', 'Remote']"
                        ></object-list-field>
                    </div>
                }
                @if (form().controls.authorize_params) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.OAUTH_AUTHORISE_PARAMS' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="auth_params_list"
                            (ngModelChange)="
                                updateMappings(
                                    $event,
                                    form().controls.authorize_params,
                                    false,
                                    ['Parameter', 'Value']
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['Parameter', 'Value']"
                        ></object-list-field>
                    </div>
                }
                @if (form().controls.ensure_matching) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.OAUTH_ENSURE_MATCHING' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="ensure_matching_list"
                            (ngModelChange)="
                                updateMappings(
                                    $event,
                                    form().controls.ensure_matching,
                                    true,
                                    ['Parameter', 'Value']
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['Parameter', 'Value']"
                        ></object-list-field>
                    </div>
                }
            </form>
        }
    `,
    styles: [
        `
            :host {
                max-width: 100%;
            }
        `,
    ],
    imports: [
        ObjectListFieldComponent,
        FormsModule,
        TranslatePipe,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
})
export class OauthSourceFormComponent
    extends AsyncHandler
    implements OnChanges
{
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
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
        const form = this.form();
        if (changes.form && form) {
            if (form.controls.info_mappings) {
                const map = form.controls.info_mappings.value || {};
                this.info_mapping_list = Object.keys(map).map((key) => {
                    return { PlaceOS: key, Remote: map[key] };
                });
            }
            if (form.controls.authorize_params) {
                const map = form.controls.authorize_params.value || {};
                this.auth_params_list = Object.keys(map).map((key) => {
                    return { Parameter: key, Value: map[key] };
                });
            }
            if (form.controls.ensure_matching) {
                const map = form.controls.ensure_matching.value || {};
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
        fields: [string, string] = ['PlaceOS', 'Remote'],
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
