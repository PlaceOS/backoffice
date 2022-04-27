import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'ldap-source-form',
    template: `
        <form
            ldap-source
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
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.host">
                    <label
                        for="host"
                        [class.error]="
                            form.controls.host.invalid &&
                            form.controls.host.touched
                        "
                        i18n="@@authSourceHostLabel"
                    >
                        Host<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="host"
                            placeholder="Host"
                            formControlName="host"
                            i18n-placeholder="@@authSourceHostPlaceholder"
                        />
                        <mat-error
                            *ngIf="form.controls.host.invalid"
                            i18n="@@authSourceNameError"
                        >
                            Host is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.port">
                    <label for="port" i18n="@@portLabel">Port:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            type="number"
                            name="port"
                            placeholder="Port number"
                            i18n="@@portPlaceholder"
                            formControlName="port"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.uid">
                    <label for="uid" i18n="@@authSourceUidLabel"
                        >User ID Key:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uid"
                            placeholder="User ID Key"
                            i18n-placeholder="@@authSourceUidPlaceholder"
                            formControlName="uid"
                        />
                    </mat-form-field>
                </div>
                <div class="field type" *ngIf="form.controls.auth_method">
                    <label for="auth-method" i18n="@@authSourceMethodLabel"
                        >Authentication Method:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="auth-method"
                            formControlName="auth_method"
                        >
                            <mat-option
                                *ngFor="let type of auth_methods"
                                [value]="type.id"
                                i18n="@@authSourceMethodOptions"
                            >
                                {type.name, select, Plain { Plain } SSL { SSL }
                                TLS { TLS } other { Other }}
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
                        i18n="@@authSourceBaseLabel"
                    >
                        Base<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="base"
                            placeholder="Base"
                            i18n-placeholder="@@authSourceBasePlaceholder"
                            formControlName="base"
                        />
                        <mat-error
                            *ngIf="form.controls.base.invalid"
                            i18n="@@authSourceBaseError"
                        >
                            Base is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.bind_dn">
                    <label for="bind-dn" i18n="@@authSourceBindDnLabel"
                        >Bind DN:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="bind-dn"
                            placeholder="Bind DN"
                            i18n="@@authSourceBindDnPlaceholder"
                            formControlName="bind_dn"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.password">
                    <label for="password" i18n="@@passwordLabel"
                        >Password:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="password"
                            placeholder="Password"
                            i18n-placeholder="@@passwordPlaceholder"
                            formControlName="password"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.filter">
                    <label for="filter" i18n="@@authSourceFilterLabel"
                        >Filter:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="filter"
                            placeholder="Filter"
                            i18n-placeholder="@@authSourceFilterPlaceholder"
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
    @Input() public form: FormGroup;
    /** List of available authentication schemes */
    public auth_methods: Identity[] = [
        { id: 'plain', name: 'Plain' },
        { id: 'ssl', name: 'SSL' },
        { id: 'tls', name: 'TLS' },
    ];
}
