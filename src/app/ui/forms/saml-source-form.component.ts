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
import { AsyncHandler } from '../../common/async-handler.class';
import { HashMap } from '../../common/types';
import { SAMLSourceFormModel } from '../../domains/auth-sources.utilities';
import { ObjectListFieldComponent } from '../custom-fields/object-list-field.component';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'saml-source-form',
    template: `
        @if (form()) {
            <form saml-source class="flex flex-col">
                <div class="fieldset">
                    @if (form().name) {
                        <div class="field">
                            <label
                                for="auth-source-name"
                                [class.error]="
                                    form().name().invalid() &&
                                    form().name().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
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
                    @if (form().issuer) {
                        <div class="field">
                            <label
                                for="issuer"
                                [class.error]="
                                    form().issuer().invalid() &&
                                    form().issuer().touched()
                                "
                            >
                                {{ 'DOMAINS.SAML_ISSUER' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_ISSUER' | translate
                                    "
                                    [formField]="form().issuer"
                                />
                                @if (form().issuer().invalid()) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.SAML_ISSUER_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().idp_sso_target_url) {
                        <div class="field">
                            <label
                                for="idp-target"
                                [class.error]="
                                    form().idp_sso_target_url().invalid() &&
                                    form().idp_sso_target_url().touched()
                                "
                            >
                                {{ 'DOMAINS.SAML_IDP_TARGET_URL' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_IDP_TARGET_URL'
                                            | translate
                                    "
                                    [formField]="form().idp_sso_target_url"
                                />
                                @if (form().idp_sso_target_url().invalid()) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.SAML_IDP_TARGET_URL_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().name_identifier_format) {
                        <div class="field">
                            <label
                                for="name-identifier-format"
                                [class.error]="
                                    form().name_identifier_format().invalid() &&
                                    form().name_identifier_format().touched()
                                "
                            >
                                {{ 'DOMAINS.SAML_NAME_ID_FORMAT' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_NAME_ID_FORMAT'
                                            | translate
                                    "
                                    [formField]="form().name_identifier_format"
                                />
                                @if (
                                    form().name_identifier_format().invalid()
                                ) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.SAML_NAME_ID_FORMAT_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().request_attributes) {
                    <div class="field mb-4">
                        <label
                            for="request-attributes"
                            [class.error]="
                                form().request_attributes().invalid() &&
                                form().request_attributes().touched()
                            "
                        >
                            {{ 'DOMAINS.SAML_REQUEST_ATTRIBUTES' | translate }}:
                        </label>
                        <object-list-field
                            [formField]="form().request_attributes"
                            [fields]="['name', 'name_format', 'friendly_name']"
                        />
                        @if (
                            form().request_attributes().invalid() &&
                            form().request_attributes().touched()
                        ) {
                            <div class="error-message">
                                {{
                                    'DOMAINS.SAML_REQUEST_ATTRIBUTES_REQUIRED'
                                        | translate
                                }}
                            </div>
                        }
                    </div>
                }
                <div class="fieldset">
                    @if (form().assertion_consumer_service_url) {
                        <div class="field">
                            <label
                                for="assertion-url"
                                [class.error]="
                                    form()
                                        .assertion_consumer_service_url()
                                        .invalid() &&
                                    form()
                                        .assertion_consumer_service_url()
                                        .touched()
                                "
                            >
                                {{ 'DOMAINS.SAML_ASSERTION_URL' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_ASSERTION_URL' | translate
                                    "
                                    [formField]="
                                        form().assertion_consumer_service_url
                                    "
                                />
                                @if (
                                    form()
                                        .assertion_consumer_service_url()
                                        .invalid()
                                ) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.SAML_ASSERTION_URL_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().idp_cert_fingerprint) {
                        <div class="field">
                            <label for="cert-fingerprint"
                                >{{
                                    'DOMAINS.SAML_CERT_FINGERPRINT' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_CERT_FINGERPRINT'
                                            | translate
                                    "
                                    [formField]="form().idp_cert_fingerprint"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().idp_cert) {
                    <div class="field">
                        <label for="cert"
                            >{{ 'DOMAINS.SAML_CERT_FULL' | translate }}:</label
                        >
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                [placeholder]="
                                    'DOMAINS.SAML_CERT_FULL' | translate
                                "
                                [formField]="form().idp_cert"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().uid_attribute) {
                        <div class="field">
                            <label for="uid-attribute"
                                >{{
                                    'DOMAINS.SAML_UID_ATTRIBUTE' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_UID_ATTRIBUTE' | translate
                                    "
                                    [formField]="form().uid_attribute"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().attribute_service_name) {
                        <div class="field">
                            <label for="attribute-service-name"
                                >{{
                                    'DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME'
                                        | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME'
                                            | translate
                                    "
                                    [formField]="form().attribute_service_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().attribute_statements) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.SAML_ATTRIBUTE_STATEMENTS' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="attribute_statement_mappings"
                            (ngModelChange)="updateAttributeStatements($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['name', 'mappings']"
                        />
                    </div>
                }
                @if (form().idp_sso_target_url_runtime_params) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.SAML_IDP_SSO_RUNTIME_PARAMS'
                                    | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="runtime_param_list"
                            (ngModelChange)="updateRuntimeParams($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['name', 'mapping']"
                        />
                    </div>
                }
                <div class="fieldset">
                    @if (form().idp_slo_target_url) {
                        <div class="field">
                            <label for="slo-target"
                                >{{
                                    'DOMAINS.SAML_IDP_SLO_TARGET_URL'
                                        | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_IDP_SLO_TARGET_URL'
                                            | translate
                                    "
                                    [formField]="form().idp_slo_target_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().slo_default_relay_state) {
                        <div class="field">
                            <label for="slo-relay"
                                >{{
                                    'DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE'
                                        | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE'
                                            | translate
                                    "
                                    [formField]="form().slo_default_relay_state"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
            </form>
        }
    `,
    styles: [
        `
            :host {
                max-width: 100%;
            }

            .error-message {
                color: var(--error);
                font-size: 0.75em;
                font-weight: 400;
                padding: 0.5em;
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        FormField,
        TranslatePipe,
        FormsModule,
        ObjectListFieldComponent,
        MatInputModule,
    ],
})
export class SamlSourceFormComponent extends AsyncHandler implements OnChanges {
    /** Signal form fields used for editing the SAML source */
    public readonly form = input<FieldTree<SAMLSourceFormModel>>(undefined);
    public readonly formModel =
        input<WritableSignal<SAMLSourceFormModel>>(undefined);

    /** List of attribute statement pairs */
    public attribute_statement_mappings: Record<string, unknown>[] = [];
    /** List of runtime param pairs */
    public runtime_param_list: Record<string, unknown>[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        const form = this.form();
        if (changes.form && form) {
            const model = this.formModel()();
            if (form.attribute_statements) {
                const map = model.attribute_statements || {};
                this.attribute_statement_mappings = Object.keys(map).map(
                    (key) => {
                        return { name: key, mappings: map[key].join(',') };
                    },
                );
            }
            if (form.idp_sso_target_url_runtime_params) {
                const map = model.idp_sso_target_url_runtime_params || {};
                this.runtime_param_list = Object.keys(map).map((key) => {
                    return { name: key, mapping: map[key] };
                });
            }
        }
    }

    /**
     * Update the form control value for attribute statements
     * @param mappings Mapping listing
     */
    public updateAttributeStatements(
        mappings: { name: string; mappings: string }[],
    ) {
        this.timeout(
            'mappings',
            () => {
                const map: HashMap<string[]> = {};
                for (const pair of mappings) {
                    if (pair.name && pair.mappings) {
                        map[pair.name] = (pair.mappings || '').split(',');
                    }
                }
                this.formModel().update((model) => ({
                    ...model,
                    attribute_statements: map,
                }));
            },
            200,
        );
    }

    /**
     * Update the form control value for runtime parameters
     * @param mappings Mapping listing
     */
    public updateRuntimeParams(mappings: { name: string; mapping: string }[]) {
        this.timeout(
            'mappings',
            () => {
                const map: HashMap = {};
                for (const pair of mappings) {
                    if (pair.name && pair.mapping) {
                        map[pair.name] = pair.mapping;
                    }
                }
                this.formModel().update((model) => ({
                    ...model,
                    idp_sso_target_url_runtime_params: map,
                }));
            },
            200,
        );
    }
}
