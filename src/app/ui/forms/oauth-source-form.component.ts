import {
    Component,
    OnChanges,
    SimpleChanges,
    WritableSignal,
    input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldTree, FormField } from '@angular/forms/signals';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler } from '../../common/async-handler.class';
import { HashMap, Identity } from '../../common/types';
import { OAuthSourceFormModel } from '../../domains/auth-sources.utilities';
import { ObjectListFieldComponent } from '../custom-fields/object-list-field.component';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'oauth-source-form',
    template: `
        @if (form()) {
            <form oauth-source class="flex flex-col">
                @if (form().name) {
                    <div class="field">
                        <label
                            for="auth-source-name"
                            [class.error]="
                                form().name().invalid() &&
                                form().name().touched()
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                [formField]="form().name"
                            />
                            @if (form().name().invalid()) {
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
                    @if (form().client_id) {
                        <div class="field">
                            <label for="client-id"
                                >{{ 'DOMAINS.CLIENT_ID' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.CLIENT_ID' | translate
                                    "
                                    [formField]="form().client_id"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().client_secret) {
                        <div class="field">
                            <label for="client-secret"
                                >{{ 'DOMAINS.CLIENT_SECRET' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.CLIENT_SECRET' | translate
                                    "
                                    [formField]="form().client_secret"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().site) {
                        <div class="field">
                            <label for="site"
                                >{{ 'DOMAINS.OAUTH_SITE' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SITE_PLACEHOLDER'
                                            | translate
                                    "
                                    [formField]="form().site"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().scope) {
                        <div class="field">
                            <label for="scope"
                                >{{
                                    'DOMAINS.OAUTH_SCOPES' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SCOPES' | translate
                                    "
                                    [formField]="form().scope"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().token_method) {
                        <div class="field type">
                            <label for="token-method"
                                >{{ 'DOMAINS.OAUTH_TOKEN_METHOD' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select [formField]="form().token_method">
                                    @for (type of token_methods; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().auth_scheme) {
                        <div class="field type">
                            <label for="auth-scheme">
                                Authentication Scheme:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select [formField]="form().auth_scheme">
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
                @if (form().token_url) {
                    <div class="field">
                        <label for="token-url"
                            >{{ 'DOMAINS.OAUTH_TOKEN_URL' | translate }}:</label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'DOMAINS.OAUTH_TOKEN_URL' | translate
                                "
                                [formField]="form().token_url"
                            />
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().authorize_url) {
                        <div class="field">
                            <label for="authorize-url"
                                >{{
                                    'DOMAINS.OAUTH_AUTHORISE_URL' | translate
                                }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.OAUTH_AUTHORISE_URL'
                                            | translate
                                    "
                                    [formField]="form().authorize_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().raw_info_url) {
                        <div class="field">
                            <label for="info-url"
                                >{{
                                    'DOMAINS.OAUTH_PROFILE_URL' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.OAUTH_PROFILE_URL' | translate
                                    "
                                    [formField]="form().raw_info_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().info_mappings) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.OAUTH_INFO_MAPPINGS' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="info_mapping_list"
                            (ngModelChange)="
                                updateMappings($event, 'info_mappings')
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['PlaceOS', 'Remote']"
                        />
                    </div>
                }
                @if (form().authorize_params) {
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
                                    'authorize_params',
                                    false,
                                    ['Parameter', 'Value']
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['Parameter', 'Value']"
                        />
                    </div>
                }
                @if (form().ensure_matching) {
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
                                    'ensure_matching',
                                    true,
                                    ['Parameter', 'Value']
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['Parameter', 'Value']"
                        />
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
        FormField,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
})
export class OauthSourceFormComponent
    extends AsyncHandler
    implements OnChanges
{
    /** Signal form fields used for editing the OAuth source */
    public readonly form = input<FieldTree<OAuthSourceFormModel>>(undefined);
    public readonly formModel =
        input<WritableSignal<OAuthSourceFormModel>>(undefined);
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
    public info_mapping_list: Record<string, unknown>[] = [];
    /** List of authorize params pairs */
    public auth_params_list: Record<string, unknown>[] = [];
    /** List of ensure_matching pairs */
    public ensure_matching_list: Record<string, unknown>[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        const form = this.form();
        if (changes.form && form) {
            const model = this.formModel()();
            if (form.info_mappings) {
                const map = model.info_mappings || {};
                this.info_mapping_list = Object.keys(map).map((key) => {
                    return { PlaceOS: key, Remote: map[key] };
                });
            }
            if (form.authorize_params) {
                const map = model.authorize_params || {};
                this.auth_params_list = Object.keys(map).map((key) => {
                    return { Parameter: key, Value: map[key] };
                });
            }
            if (form.ensure_matching) {
                const map = model.ensure_matching || {};
                this.ensure_matching_list = Object.keys(map).map((key) => {
                    const value = map[key];
                    return {
                        Parameter: key,
                        Value: Array.isArray(value) ? value.join(',') : value,
                    };
                });
            }
        }
    }

    public updateMappings(
        mappings: { PlaceOS: string; Remote: string }[],
        key: 'info_mappings' | 'authorize_params' | 'ensure_matching',
        split = false,
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
        this.formModel().update((model) => ({ ...model, [key]: map }));
    }
}
