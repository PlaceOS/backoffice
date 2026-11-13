import {
    Component,
    OnChanges,
    SimpleChanges,
    WritableSignal,
    input,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldTree, FormField } from '@angular/forms/signals';

import { HashMap, Identity } from '../../common/types';
import { OAuthSourceFormModel } from '../../domains/auth-sources.utilities';
import { FormFieldComponent } from '../controls/form-field.component';
import { OptionComponent } from '../controls/option.component';
import { SelectComponent } from '../controls/select.component';
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
                        <app-form-field>
                            <input
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                [formField]="form().name"
                            />
                            @if (form().name().invalid()) {
                                <div error>
                                    {{
                                        'DOMAINS.AUTHENTICATION_NAME_REQUIRED'
                                            | translate
                                    }}
                                </div>
                            }
                        </app-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().client_id) {
                        <div class="field">
                            <label for="client-id"
                                >{{ 'DOMAINS.CLIENT_ID' | translate }}:</label
                            >
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'DOMAINS.CLIENT_ID' | translate
                                    "
                                    [formField]="form().client_id"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form().client_secret) {
                        <div class="field">
                            <label for="client-secret"
                                >{{ 'DOMAINS.CLIENT_SECRET' | translate }}:
                            </label>
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'DOMAINS.CLIENT_SECRET' | translate
                                    "
                                    [formField]="form().client_secret"
                                />
                            </app-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().site) {
                        <div class="field">
                            <label for="site"
                                >{{ 'DOMAINS.OAUTH_SITE' | translate }}:</label
                            >
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SITE_PLACEHOLDER'
                                            | translate
                                    "
                                    [formField]="form().site"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form().scope) {
                        <div class="field">
                            <label for="scope"
                                >{{
                                    'DOMAINS.OAUTH_SCOPES' | translate
                                }}:</label
                            >
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SCOPES' | translate
                                    "
                                    [formField]="form().scope"
                                />
                            </app-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().token_method) {
                        <div class="field type">
                            <label for="token-method"
                                >{{ 'DOMAINS.OAUTH_TOKEN_METHOD' | translate }}:
                            </label>
                            <app-form-field>
                                <app-select [formField]="form().token_method">
                                    @for (type of token_methods; track type) {
                                        <app-option [value]="type.id">
                                            {{ type.name }}
                                        </app-option>
                                    }
                                </app-select>
                            </app-form-field>
                        </div>
                    }
                    @if (form().auth_scheme) {
                        <div class="field type">
                            <label for="auth-scheme">
                                Authentication Scheme:
                            </label>
                            <app-form-field>
                                <app-select [formField]="form().auth_scheme">
                                    @for (type of auth_schemes; track type) {
                                        <app-option [value]="type.id">
                                            {{
                                                (type.id === 'request_body'
                                                    ? 'DOMAINS.OAUTH_SCHEME_BODY'
                                                    : 'DOMAINS.OAUTH_SCHEME_BASIC'
                                                ) | translate
                                            }}
                                        </app-option>
                                    }
                                </app-select>
                            </app-form-field>
                        </div>
                    }
                </div>
                @if (form().token_url) {
                    <div class="field">
                        <label for="token-url"
                            >{{ 'DOMAINS.OAUTH_TOKEN_URL' | translate }}:</label
                        >
                        <app-form-field>
                            <input
                                [placeholder]="
                                    'DOMAINS.OAUTH_TOKEN_URL' | translate
                                "
                                [formField]="form().token_url"
                            />
                        </app-form-field>
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
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'DOMAINS.OAUTH_AUTHORISE_URL'
                                            | translate
                                    "
                                    [formField]="form().authorize_url"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form().raw_info_url) {
                        <div class="field">
                            <label for="info-url"
                                >{{
                                    'DOMAINS.OAUTH_PROFILE_URL' | translate
                                }}:</label
                            >
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'DOMAINS.OAUTH_PROFILE_URL' | translate
                                    "
                                    [formField]="form().raw_info_url"
                                />
                            </app-form-field>
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
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        ObjectListFieldComponent,
        FormsModule,
        TranslatePipe,
        FormField,
    ],
})
export class OauthSourceFormComponent implements OnChanges {
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
    public readonly info_mapping_list: WritableSignal<
        Record<string, unknown>[]
    > = signal([]);
    /** List of authorize params pairs */
    public readonly auth_params_list: WritableSignal<
        Record<string, unknown>[]
    > = signal([]);
    /** List of ensure_matching pairs */
    public readonly ensure_matching_list: WritableSignal<
        Record<string, unknown>[]
    > = signal([]);

    public ngOnChanges(changes: SimpleChanges): void {
        const form = this.form();
        if (changes.form && form) {
            const model = this.formModel()();
            if (form.info_mappings) {
                const map = model.info_mappings || {};
                this.info_mapping_list.set(
                    Object.keys(map).map((key) => {
                        return { PlaceOS: key, Remote: map[key] };
                    }),
                );
            }
            if (form.authorize_params) {
                const map = model.authorize_params || {};
                this.auth_params_list.set(
                    Object.keys(map).map((key) => {
                        return { Parameter: key, Value: map[key] };
                    }),
                );
            }
            if (form.ensure_matching) {
                const map = model.ensure_matching || {};
                this.ensure_matching_list.set(
                    Object.keys(map).map((key) => {
                        const value = map[key];
                        return {
                            Parameter: key,
                            Value: Array.isArray(value)
                                ? value.join(',')
                                : value,
                        };
                    }),
                );
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
