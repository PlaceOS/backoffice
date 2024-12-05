import { Component, Input, SimpleChanges } from '@angular/core';
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
                    Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="auth-source-name"
                        placeholder="Auth Source Name"
                        formControlName="name"
                        required
                    />
                    <mat-error *ngIf="form.controls.name.invalid">
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
                    >
                        Host<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="host"
                            placeholder="Host"
                            formControlName="host"
                        />
                        <mat-error *ngIf="form.controls.host.invalid">
                            Host is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.port">
                    <label for="port">Port:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            type="number"
                            name="port"
                            placeholder="Port number"
                            formControlName="port"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.uid">
                    <label for="uid">User ID Key:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uid"
                            placeholder="User ID Key"
                            formControlName="uid"
                        />
                    </mat-form-field>
                </div>
                <div class="field type" *ngIf="form.controls.auth_method">
                    <label for="auth-method">Authentication Method: </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="auth-method"
                            formControlName="auth_method"
                        >
                            <mat-option
                                *ngFor="let type of auth_methods"
                                [value]="type.id"
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
                    >
                        Base<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="base"
                            placeholder="Base"
                            formControlName="base"
                        />
                        <mat-error *ngIf="form.controls.base.invalid">
                            Base is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.bind_dn">
                    <label for="bind-dn">Bind DN:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="bind-dn"
                            placeholder="Bind DN"
                            formControlName="bind_dn"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.password">
                    <label for="password">Password:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="password"
                            placeholder="Password"
                            formControlName="password"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.filter">
                    <label for="filter">Filter:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="filter"
                            placeholder="Filter"
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
