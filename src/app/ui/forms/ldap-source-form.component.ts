import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Identity } from '../../common/types';
import { LDAPSourceFormModel } from '../../domains/auth-sources.utilities';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'ldap-source-form',
    template: `
        @if (form()) {
            <form ldap-source class="flex flex-col" >
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
                    @if (form().host) {
                        <div class="field">
                            <label
                                for="host"
                                [class.error]="
                                    form().host().invalid() &&
                                    form().host().touched()
                                "
                            >
                                {{ 'DOMAINS.LDAP_HOST' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_HOST' | translate
                                    "
                                    [formField]="form().host"
                                />
                                @if (form().host().invalid()) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.LDAP_HOST_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().port) {
                        <div class="field">
                            <label for="port"
                                >{{ 'DOMAINS.LDAP_PORT' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    type="number"
                                    [placeholder]="
                                        'DOMAINS.LDAP_PORT' | translate
                                    "
                                    [formField]="form().port"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().uid) {
                        <div class="field">
                            <label for="uid"
                                >{{
                                    'DOMAINS.LDAP_USER_ID' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_USER_ID' | translate
                                    "
                                    [formField]="form().uid"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().auth_method) {
                        <div class="field type">
                            <label for="auth-method">
                                {{ 'DOMAINS.LDAP_AUTH_METHOD' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [formField]="form().auth_method"
                                >
                                    @for (type of auth_methods; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().base) {
                        <div class="field">
                            <label
                                for="base"
                                [class.error]="
                                    form().base().invalid() &&
                                    form().base().touched()
                                "
                            >
                                {{ 'DOMAINS.LDAP_BASE' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_BASE' | translate
                                    "
                                    [formField]="form().base"
                                />
                                @if (form().base().invalid()) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.LDAP_BASE_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().bind_dn) {
                        <div class="field">
                            <label for="bind-dn"
                                >{{
                                    'DOMAINS.LDAP_BIND_DN' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_BIND_DN' | translate
                                    "
                                    [formField]="form().bind_dn"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().password) {
                        <div class="field">
                            <label for="password"
                                >{{ 'COMMON.PASSWORD' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.PASSWORD' | translate
                                    "
                                    [formField]="form().password"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().filter) {
                        <div class="field">
                            <label for="filter"
                                >{{ 'DOMAINS.LDAP_FILTER' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_FILTER' | translate
                                    "
                                    [formField]="form().filter"
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
        `,
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormField,
        TranslatePipe,
    ],
})
export class LdapSourceFormComponent {
    /** Signal form fields used for editing the LDAP source */
    public readonly form = input<FieldTree<LDAPSourceFormModel>>(undefined);
    /** List of available authentication schemes */
    public auth_methods: Identity[] = [
        { id: 'plain', name: 'Plain' },
        { id: 'ssl', name: 'SSL' },
        { id: 'tls', name: 'TLS' },
    ];
}
