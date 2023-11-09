import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HashMap } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'saml-source-form',
    template: `
        <form
            saml-source
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            *ngIf="form"
            [formGroup]="form"
        >
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.name">
                    <label
                        for="auth-source-name"
                        [class.error]="
                            form.controls.name.invalid &&
                            form.controls.name.touched
                        "
                        i18n="@@authSourceNameLabel"
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
                <div class="field" *ngIf="form.controls.issuer">
                    <label
                        for="issuer"
                        [class.error]="
                            form.controls.issuer.invalid &&
                            form.controls.issuer.touched
                        "
                        i18n="@@authSourceIssuerLabel"
                    >
                        Issuer<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="issuer"
                            placeholder="Issuer"
                            i18n-placeholder="@@authSourceIssuerPlaceholder"
                            formControlName="issuer"
                            required
                        />
                        <mat-error
                            *ngIf="form.controls.issuer.invalid"
                            i18n="@@authSourceIssuerError"
                        >
                            Issuer is required
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
                        i18n="@@authSourceIdpTargetLabel"
                    >
                        IdP Target URL<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="idp-target"
                            placeholder="IdP Target URL"
                            i18n-placeholder="@@authSourceIdpTargetPlaceholder"
                            formControlName="idp_sso_target_url"
                            required
                        />
                        <mat-error
                            *ngIf="form.controls.idp_sso_target_url.invalid"
                            i18n="@@authSourceIdpTargetError"
                        >
                            IdP Target URL is required
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
                        i18n="@@authSourceNameIdFormatLabel"
                    >
                        Name Identifier Format:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name-identifier-format"
                            placeholder="Name Identifier Format"
                            i18n-placeholder="
                                @@authSourceNameIdFormatPlaceholder"
                            formControlName="name_identifier_format"
                            required
                        />
                        <mat-error
                            *ngIf="form.controls.name_identifier_format.invalid"
                            i18n="@@authSourceNameIdFormatError"
                        >
                            Name Identifier Format is required
                        </mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.request_attributes">
                <label
                    for="request-attributes"
                    [class.error]="
                        form.controls.request_attributes.invalid &&
                        form.controls.request_attributes.touched
                    "
                    i18n="@@authSourceRequestAttrLabel"
                >
                    Request Attributes:
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
                    i18n="@@authSourceRequestAttrError"
                >
                    Request Attributes are required
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
                        i18n="@@authSourceAssertionUrlLabel"
                    >
                        Assertion URL<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="assertion-url"
                            placeholder="Assertion URL"
                            i18n-placeholder="
                                @@authSourceAssetionUrlPlaceholder"
                            formControlName="assertion_consumer_service_url"
                            required
                        />
                        <mat-error
                            *ngIf="
                                form.controls.assertion_consumer_service_url
                                    .invalid
                            "
                            i18n="@@authSourceAssetionUrlError"
                        >
                            Assertion URL is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.idp_cert_fingerprint">
                    <label
                        for="cert-fingerprint"
                        i18n="@@authSourceCertPrintLabel"
                        >Certificate Fingerprint:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="cert-fingerprint"
                            placeholder="Certificate Fingerprint"
                            i18n-placeholder="@@authSourceCertPrintPlaceholder"
                            formControlName="idp_cert_fingerprint"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.idp_cert">
                <label for="cert" i18n="@@authSourceCertLabel"
                    >Full Certificate:</label
                >
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="cert"
                        placeholder="Full Certificate"
                        i18n-placeholder="@@authSourceCertPlaceholder"
                        formControlName="idp_cert"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.uid_attribute">
                    <label for="uid-attribute" i18n="@@authSourceUidAttrLabel"
                        >UID Attribute:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uid-attribute"
                            placeholder="UID Attribute"
                            i18n-placeholder="@@authSourceUidAttrPlaceholder"
                            formControlName="uid_attribute"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.attribute_service_name">
                    <label
                        for="attribute-service-name"
                        i18n="@@authSourceAttrServiceLabel"
                        >Attribute Service Name:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="attribute-service-name"
                            placeholder="Attribute Service Name"
                            i18n-placeholder="
                                @@authSourceAttrServicePlaceholder"
                            formControlName="attribute_service_name"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.attribute_statements">
                <label for="client-secret" i18n="@@authSourceAttrStmtLabel"
                    >Attribute Statements:</label
                >
                <object-list-field
                    [(ngModel)]="attribute_statement_mappings"
                    (ngModelChange)="updateAttributeStatements($event)"
                    [ngModelOptions]="{ standalone: true }"
                    [fields]="['name', 'mappings']"
                ></object-list-field>
            </div>
            <div
                class="field"
                *ngIf="form.controls.idp_sso_target_url_runtime_params"
            >
                <label for="client-secret" i18n="@@authSourceIdpSsoRuntimeLabel"
                    >IdP SSO Runtime Params:</label
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
                    <label for="slo-target" i18n="@@authSourceIdpSloUriLabel"
                        >IdP SLO Target URL:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="slo-target"
                            placeholder="IdP SLO Target URL"
                            i18n-placeholder="@@authSourceIdpSloUriPlaceholder"
                            formControlName="idp_slo_target_url"
                        />
                    </mat-form-field>
                </div>
                <div
                    class="field"
                    *ngIf="form.controls.slo_default_relay_state"
                >
                    <label for="slo-relay" i18n="@@authSourceSloRelayLabel"
                        >SLO Default Relay State:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="slo-relay"
                            placeholder="SLO Default Relay State"
                            i18n-placeholder="@@authSourceSloRelayPlaceholder"
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
                    }
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
        mappings: { name: string; mappings: string }[]
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
            200
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
                    map
                );
            },
            200
        );
    }
}
