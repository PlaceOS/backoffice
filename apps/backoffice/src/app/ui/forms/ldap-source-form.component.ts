import { Component, input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'ldap-source-form',
    template: `
        @if (form()) {
            <form ldap-source class="flex flex-col" [formGroup]="form()">
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
                    @if (form().controls.host) {
                        <div class="field">
                            <label
                                for="host"
                                [class.error]="
                                    form().controls.host.invalid &&
                                    form().controls.host.touched
                                "
                            >
                                {{ 'DOMAINS.LDAP_HOST' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="host"
                                    [placeholder]="
                                        'DOMAINS.LDAP_HOST' | translate
                                    "
                                    formControlName="host"
                                />
                                @if (form().controls.host.invalid) {
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
                    @if (form().controls.port) {
                        <div class="field">
                            <label for="port"
                                >{{ 'DOMAINS.LDAP_PORT' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    type="number"
                                    name="port"
                                    [placeholder]="
                                        'DOMAINS.LDAP_PORT' | translate
                                    "
                                    formControlName="port"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.uid) {
                        <div class="field">
                            <label for="uid"
                                >{{
                                    'DOMAINS.LDAP_USER_ID' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="uid"
                                    [placeholder]="
                                        'DOMAINS.LDAP_USER_ID' | translate
                                    "
                                    formControlName="uid"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.auth_method) {
                        <div class="field type">
                            <label for="auth-method">
                                {{ 'DOMAINS.LDAP_AUTH_METHOD' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="auth-method"
                                    formControlName="auth_method"
                                >
                                    @for (type of auth_methods; track type) {
                                        <mat-option [value]="type.id">
                                            {type.name, select,
                                                Plain {Plain}
                                                SSL {SSL}
                                                TLS {TLS}
                                                other {Other}
                                            }
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.base) {
                        <div class="field">
                            <label
                                for="base"
                                [class.error]="
                                    form().controls.base.invalid &&
                                    form().controls.base.touched
                                "
                            >
                                {{ 'DOMAINS.LDAP_BASE' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="base"
                                    [placeholder]="
                                        'DOMAINS.LDAP_BASE' | translate
                                    "
                                    formControlName="base"
                                />
                                @if (form().controls.base.invalid) {
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
                    @if (form().controls.bind_dn) {
                        <div class="field">
                            <label for="bind-dn"
                                >{{
                                    'DOMAINS.LDAP_BIND_DN' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="bind-dn"
                                    [placeholder]="
                                        'DOMAINS.LDAP_BIND_DN' | translate
                                    "
                                    formControlName="bind_dn"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.password) {
                        <div class="field">
                            <label for="password"
                                >{{ 'COMMON.PASSWORD' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="password"
                                    [placeholder]="
                                        'COMMON.PASSWORD' | translate
                                    "
                                    formControlName="password"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.filter) {
                        <div class="field">
                            <label for="filter"
                                >{{ 'DOMAINS.LDAP_FILTER' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="filter"
                                    [placeholder]="
                                        'DOMAINS.LDAP_FILTER' | translate
                                    "
                                    formControlName="filter"
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
        ReactiveFormsModule,
        TranslatePipe,
    ],
})
export class LdapSourceFormComponent {
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
    /** List of available authentication schemes */
    public auth_methods: Identity[] = [
        { id: 'plain', name: 'Plain' },
        { id: 'ssl', name: 'SSL' },
        { id: 'tls', name: 'TLS' },
    ];
}
