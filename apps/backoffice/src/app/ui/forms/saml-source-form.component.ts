import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HashMap } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'saml-source-form',
    template: `
        <form saml-source class="flex flex-col" *ngIf="form" [formGroup]="form">
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.name">
                    <label
                        for="auth-source-name"
                        [class.error]="
                            form.controls.name.invalid &&
                            form.controls.name.touched
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
                        <mat-error *ngIf="form.controls.name.invalid">
                            {{
                                'DOMAINS.AUTHENTICATION_NAME_REQUIRE'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.issuer">
                    <label
                        for="issuer"
                        [class.error]="
                            form.controls.issuer.invalid &&
                            form.controls.issuer.touched
                        "
                    >
                        {{ 'DOMAINS.SAML_ISSUER' | translate }}<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="issuer"
                            [placeholder]="'DOMAINS.SAML_ISSUER' | translate"
                            formControlName="issuer"
                            required
                        />
                        <mat-error *ngIf="form.controls.issuer.invalid">
                            {{ 'DOMAINS.SAML_ISSUER_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.idp_sso_target_url">
                    <label
                        for="idp-target"
                        [class.error]="
                            form.controls.idp_sso_target_url.invalid &&
                            form.controls.idp_sso_target_url.touched
                        "
                    >
                        {{ 'DOMAINS.SAML_IDP_TARGET_URL' | translate
                        }}<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="idp-target"
                            [placeholder]="
                                'DOMAINS.SAML_IDP_TARGET_URL' | translate
                            "
                            formControlName="idp_sso_target_url"
                            required
                        />
                        <mat-error
                            *ngIf="form.controls.idp_sso_target_url.invalid"
                        >
                            {{
                                'DOMAINS.SAML_IDP_TARGET_URL_REQUIRED'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.name_identifier_format">
                    <label
                        for="name-identifier-format"
                        [class.error]="
                            form.controls.name_identifier_format.invalid &&
                            form.controls.name_identifier_format.touched
                        "
                    >
                        {{ 'DOMAINS.SAML_NAME_ID_FORMAT' | translate }}:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name-identifier-format"
                            [placeholder]="
                                'DOMAINS.SAML_NAME_ID_FORMAT' | translate
                            "
                            formControlName="name_identifier_format"
                            required
                        />
                        <mat-error
                            *ngIf="form.controls.name_identifier_format.invalid"
                        >
                            {{
                                'DOMAINS.SAML_NAME_ID_FORMAT_REQUIRED'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="field mb-4" *ngIf="form.controls.request_attributes">
                <label
                    for="request-attributes"
                    [class.error]="
                        form.controls.request_attributes.invalid &&
                        form.controls.request_attributes.touched
                    "
                >
                    {{ 'DOMAINS.SAML_REQUEST_ATTRIBUTES' | translate }}:
                </label>
                <object-list-field
                    formControlName="request_attributes"
                    [fields]="['name', 'name_format', 'friendly_name']"
                ></object-list-field>
                <div
                    class="error-message"
                    *ngIf="
                        form.controls.request_attributes.invalid &&
                        form.controls.request_attributes.touched
                    "
                >
                    {{ 'DOMAINS.SAML_REQUEST_ATTRIBUTES_REQUIRED' | translate }}
                </div>
            </div>
            <div class="fieldset">
                <div
                    class="field"
                    *ngIf="form.controls.assertion_consumer_service_url"
                >
                    <label
                        for="assertion-url"
                        [class.error]="
                            form.controls.assertion_consumer_service_url
                                .invalid &&
                            form.controls.assertion_consumer_service_url.touched
                        "
                    >
                        {{ 'DOMAINS.SAML_ASSERTION_URL' | translate
                        }}<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="assertion-url"
                            [placeholder]="
                                'DOMAINS.SAML_ASSERTION_URL' | translate
                            "
                            formControlName="assertion_consumer_service_url"
                            required
                        />
                        <mat-error
                            *ngIf="
                                form.controls.assertion_consumer_service_url
                                    .invalid
                            "
                        >
                            {{
                                'DOMAINS.SAML_ASSERTION_URL_REQUIRED'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.idp_cert_fingerprint">
                    <label for="cert-fingerprint"
                        >{{
                            'DOMAINS.SAML_CERT_FINGERPRINT' | translate
                        }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="cert-fingerprint"
                            [placeholder]="
                                'DOMAINS.SAML_CERT_FINGERPRINT' | translate
                            "
                            formControlName="idp_cert_fingerprint"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.idp_cert">
                <label for="cert"
                    >{{ 'DOMAINS.SAML_CERT_FULL' | translate }}:</label
                >
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="cert"
                        [placeholder]="'DOMAINS.SAML_CERT_FULL' | translate"
                        formControlName="idp_cert"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.uid_attribute">
                    <label for="uid-attribute"
                        >{{ 'DOMAINS.SAML_UID_ATTRIBUTE' | translate }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uid-attribute"
                            [placeholder]="
                                'DOMAINS.SAML_UID_ATTRIBUTE' | translate
                            "
                            formControlName="uid_attribute"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.attribute_service_name">
                    <label for="attribute-service-name"
                        >{{
                            'DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME' | translate
                        }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="attribute-service-name"
                            [placeholder]="
                                'DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME'
                                    | translate
                            "
                            formControlName="attribute_service_name"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="field mb-4" *ngIf="form.controls.attribute_statements">
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
                ></object-list-field>
            </div>
            <div
                class="field mb-4"
                *ngIf="form.controls.idp_sso_target_url_runtime_params"
            >
                <label for="client-secret"
                    >{{
                        'DOMAINS.SAML_IDP_SSO_RUNTIME_PARAMS' | translate
                    }}:</label
                >
                <object-list-field
                    [(ngModel)]="runtime_param_list"
                    (ngModelChange)="updateRuntimeParams($event)"
                    [ngModelOptions]="{ standalone: true }"
                    [fields]="['name', 'mapping']"
                ></object-list-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.idp_slo_target_url">
                    <label for="slo-target"
                        >{{
                            'DOMAINS.SAML_IDP_SLO_TARGET_URL' | translate
                        }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="slo-target"
                            [placeholder]="
                                'DOMAINS.SAML_IDP_SLO_TARGET_URL' | translate
                            "
                            formControlName="idp_slo_target_url"
                        />
                    </mat-form-field>
                </div>
                <div
                    class="field"
                    *ngIf="form.controls.slo_default_relay_state"
                >
                    <label for="slo-relay"
                        >{{
                            'DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE' | translate
                        }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="slo-relay"
                            [placeholder]="
                                'DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE'
                                    | translate
                            "
                            formControlName="slo_default_relay_state"
                        />
                    </mat-form-field>
                </div>
            </div>
        </form>
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
    standalone: false
})
export class SamlSourceFormComponent extends AsyncHandler implements OnChanges {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;

    /** List of attribute statement pairs */
    public attribute_statement_mappings: any[] = [];
    /** List of runtime param pairs */
    public runtime_param_list: any[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form && this.form) {
            if (this.form.controls.attribute_statements) {
                const map = this.form.controls.attribute_statements.value || {};
                this.attribute_statement_mappings = Object.keys(map).map(
                    (key) => {
                        return { name: key, mappings: map[key].join(',') };
                    },
                );
            }
            if (this.form.controls.idp_sso_target_url_runtime_params) {
                const map =
                    this.form.controls.idp_sso_target_url_runtime_params
                        .value || {};
                this.runtime_param_list = Object.keys(map).map((key) => {
                    return { name: key, mappings: map[key] };
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
                const map: HashMap = {};
                for (const pair of mappings) {
                    if (pair.name && pair.mappings) {
                        map[pair.name] = (pair.mappings || '').split(',');
                    }
                }
                this.form.controls.attribute_statements.setValue(map);
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
                this.form.controls.idp_sso_target_url_runtime_params.setValue(
                    map,
                );
            },
            200,
        );
    }
}
