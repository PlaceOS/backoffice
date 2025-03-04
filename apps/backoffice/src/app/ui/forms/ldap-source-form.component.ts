import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'ldap-source-form',
    template: `
        <form ldap-source *ngIf="form" class="flex flex-col" [formGroup]="form">
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="auth-source-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
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
                        {{ 'DOMAINS.AUTHENTICATION_NAME_REQUIRE' | translate }}
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.host">
                    <label
                        for="host"
                        [class.error]="
                            form.controls.host.invalid &&
                            form.controls.host.touched
                        "
                    >
                        {{ 'DOMAINS.LDAP_HOST' | translate }}<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="host"
                            [placeholder]="'DOMAINS.LDAP_HOST' | translate"
                            formControlName="host"
                        />
                        <mat-error *ngIf="form.controls.host.invalid">
                            {{ 'DOMAINS.LDAP_HOST_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.port">
                    <label for="port"
                        >{{ 'DOMAINS.LDAP_PORT' | translate }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            type="number"
                            name="port"
                            [placeholder]="'DOMAINS.LDAP_PORT' | translate"
                            formControlName="port"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.uid">
                    <label for="uid"
                        >{{ 'DOMAINS.LDAP_USER_ID' | translate }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uid"
                            [placeholder]="'DOMAINS.LDAP_USER_ID' | translate"
                            formControlName="uid"
                        />
                    </mat-form-field>
                </div>
                <div class="field type" *ngIf="form.controls.auth_method">
                    <label for="auth-method">
                        {{ 'DOMAINS.LDAP_AUTH_METHOD' | translate }}:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="auth-method"
                            formControlName="auth_method"
                        >
                            <mat-option
                                *ngFor="let type of auth_methods"
                                [value]="type.id"
                            >
                                {type.name, select,
                                    Plain {Plain}
                                    SSL {SSL}
                                    TLS {TLS}
                                    other {Other}
                                }
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.base">
                    <label
                        for="base"
                        [class.error]="
                            form.controls.base.invalid &&
                            form.controls.base.touched
                        "
                    >
                        {{ 'DOMAINS.LDAP_BASE' | translate }}<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="base"
                            [placeholder]="'DOMAINS.LDAP_BASE' | translate"
                            formControlName="base"
                        />
                        <mat-error *ngIf="form.controls.base.invalid">
                            {{ 'DOMAINS.LDAP_BASE_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.bind_dn">
                    <label for="bind-dn"
                        >{{ 'DOMAINS.LDAP_BIND_DN' | translate }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="bind-dn"
                            [placeholder]="'DOMAINS.LDAP_BIND_DN' | translate"
                            formControlName="bind_dn"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.password">
                    <label for="password"
                        >{{ 'COMMON.PASSWORD' | translate }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="password"
                            [placeholder]="'COMMON.PASSWORD' | translate"
                            formControlName="password"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.filter">
                    <label for="filter"
                        >{{ 'DOMAINS.LDAP_FILTER' | translate }}:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="filter"
                            [placeholder]="'DOMAINS.LDAP_FILTER' | translate"
                            formControlName="filter"
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
        `,
    ],
})
export class LdapSourceFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** List of available authentication schemes */
    public auth_methods: Identity[] = [
        { id: 'plain', name: 'Plain' },
        { id: 'ssl', name: 'SSL' },
        { id: 'tls', name: 'TLS' },
    ];
}
