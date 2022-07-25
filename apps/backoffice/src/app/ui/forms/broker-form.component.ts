import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { AuthType } from '@placeos/ts-client';

@Component({
    selector: 'broker-form',
    template: `
        <form
            broker
            *ngIf="form"
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="broker-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    i18n="@@nameLabel"
                    >Name<span>*</span>:</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="broker-name"
                        placeholder="Broker Name"
                        i18n-placeholder="@@brokerNamePlaceholder"
                        formControlName="name"
                        required
                    />
                    <mat-error i18n="@@brokerNameError"
                        >Broker name is required</mat-error
                    >
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.description">
                <label for="description" i18n="@@descriptionLabel"
                    >Description:</label
                >
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
                        i18n-placeholder="@@descriptionPlaceholder"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="host"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    i18n="@@hostLabel"
                    >Host<span>*</span>:</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="host"
                        placeholder="Host"
                        i18n-placeholder="@@hostPlaceholder"
                        formControlName="name"
                        required
                    />
                    <mat-error i18n="@@hostError">Host is required</mat-error>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.port">
                    <label
                        for="port-number"
                        [class.error]="
                            form.controls.port.invalid &&
                            form.controls.port.touched
                        "
                        i18n="@@portLabel"
                    >
                        Port Number<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="port-number"
                            type="number"
                            placeholder="Port Number"
                            i18n-placeholder="@@portPlaceholder"
                            formControlName="port"
                        />
                        <mat-error i18n="@@portError">
                            A valid port number between 1 - 65535 is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field checkbox" *ngIf="form.controls.tls">
                    <mat-checkbox
                        name="tls"
                        formControlName="tls"
                        i18n="@@tlsLabel"
                        >TLS</mat-checkbox
                    >
                </div>
            </div>
            <div class="field" *ngIf="form.controls.auth_type">
                <label for="type">Auth Type: </label>
                <mat-form-field appearance="outline">
                    <mat-select name="type" formControlName="auth_type">
                        <mat-option
                            *ngFor="let type of auth_types"
                            [value]="type.id"
                        >
                            {{ type.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <ng-container *ngIf="form.controls.auth_type.value === 2">
                <div class="fieldset">
                    <div class="field" *ngIf="form.controls.name">
                        <label
                            for="host"
                            [class.error]="
                                form.controls.name.invalid &&
                                form.controls.name.touched
                            "
                            i18n="@@usernameLabel"
                            >Username<span>*</span>:</label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="username"
                                placeholder="Username"
                                i18n-placeholder="@@usernamePlaceholder"
                                formControlName="name"
                                required
                            />
                            <mat-error i18n="@@usernameError"
                                >Username is required</mat-error
                            >
                        </mat-form-field>
                    </div>
                    <div class="field" *ngIf="form.controls.password">
                        <label
                            for="new-password"
                            [class.error]="
                                form.controls.password.invalid &&
                                form.controls.password.touched
                            "
                            i18n="@@passwordLabel"
                        >
                            Password:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="new-password"
                                autocomplete="new-password"
                                [type]="show_password ? 'text' : 'password'"
                                placeholder="Password"
                                i18n-placeholder="@@passwordPlaceholder"
                                formControlName="password"
                            />
                            <app-icon
                                matSuffix
                                [icon]="{
                                    class: 'material-icons',
                                    content: 'visibility'
                                }"
                                (mousedown)="show_password = true"
                                (window:mouseup)="show_password = false"
                                (touchstart)="show_password = true"
                                (window:touchend)="show_password = false"
                            ></app-icon>
                            <mat-error i18n="@@passordError"
                                >A valid password is required</mat-error
                            >
                        </mat-form-field>
                    </div>
                </div>
            </ng-container>
            <ng-container *ngIf="form.controls.auth_type.value === 0">
                <div class="field" *ngIf="form.controls.certificate">
                    <label for="cert" i18n="@@certificateLabel"
                        >Certificate:</label
                    >
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="cert"
                            placeholder="Certificate"
                            i18n-placeholder="@@certificatePlaceholder"
                            formControlName="certificate"
                        ></textarea>
                        <mat-error i18n="@@certError"
                            >A valid certificate is required</mat-error
                        >
                    </mat-form-field>
                </div>
            </ng-container>
            <div class="field" *ngIf="form.controls.filters">
                <label for="filters" i18n="@@filtersLabel"> Filters: </label>
                <mat-form-field appearance="outline">
                    <mat-chip-list
                        #chipList
                        name="filters"
                        aria-label="Broker Filters"
                    >
                        <mat-chip
                            *ngFor="let filter of filters"
                            [selectable]="true"
                            [removable]="true"
                            (removed)="removeFilter(filter)"
                        >
                            {{ filter }}
                            <app-icon
                                matChipRemove
                                [icon]="{ class: 'backoffice-cross' }"
                            ></app-icon>
                        </mat-chip>
                        <input
                            placeholder="Broker filters..."
                            i18n-placeholder="@@brokerFiltersPlaceholder"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addFilter($event)"
                        />
                    </mat-chip-list>
                </mat-form-field>
            </div>
        </form>
    `,
    styles: [
        `
            settings-form-field {
                margin-bottom: 1.5em;
            }

            .checkbox {
                align-items: center;
                flex-direction: row;
            }

            mat-checkbox {
                margin: 0.25em;
            }
        `,
    ],
})
export class BrokerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** List of available authentication types */
    public auth_types = [
        { id: AuthType.Certificate, name: 'Certificate' },
        { id: AuthType.NoAuth, name: 'No Authentication' },
        { id: AuthType.UserPassword, name: 'Password' },
    ];
    /** List of separator characters for filters */
    public readonly separators: number[] = [ENTER, COMMA];
    /** Whether to show password field value */
    public show_password: boolean;

    public get filters(): string[] {
        return this.form.controls.filters.value;
    }

    /**
     * Add a filter to the list of filters for the item
     * @param event Input event
     */
    public addFilter(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.filter_list) return;
        const input = event.input;
        const value = event.value;
        const filter_list = this.filters;
        if ((value || '').trim()) {
            filter_list.push(value);
            this.form.controls.filters.setValue(filter_list);
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    /**
     * Remove filter from the list
     * @param existing_filter Filter to remove
     */
    public removeFilter(existing_filter: string): void {
        if (!this.form || !this.form.controls.filter_list) return;
        const filter_list = this.filters;
        const index = filter_list.indexOf(existing_filter);

        if (index >= 0) {
            filter_list.splice(index, 1);
            this.form.controls.filters.setValue(filter_list);
        }
    }
}
