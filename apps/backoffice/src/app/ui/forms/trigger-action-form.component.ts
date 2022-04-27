import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ENTER, COMMA, SPACE } from '@angular/cdk/keycodes';
import { MatChipList } from '@angular/material/chips';
import { PlaceSystem } from '@placeos/ts-client';

import { Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'trigger-action-form',
    template: `
        <form
            trigger-action
            *ngIf="form"
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.action_type">
                <label for="type">Action Type: </label>
                <mat-form-field appearance="outline">
                    <mat-select name="type" formControlName="action_type">
                        <mat-option
                            *ngFor="let type of action_types"
                            [value]="type.id"
                        >
                            {{ type.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <ng-container [ngSwitch]="form.controls.action_type.value">
                <ng-container *ngSwitchCase="'emails'">
                    <div class="field" *ngIf="form.controls.emails">
                        <label
                            for="description"
                            [class.error]="
                                form.controls.emails.touched &&
                                form.controls.emails.errors
                            "
                            i18n="@@emailAddressesLabel"
                        >
                            Email Addresses<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-chip-list
                                #chipList
                                aria-label="Email addresses"
                            >
                                <mat-chip
                                    *ngFor="let email of email_list"
                                    [selectable]="true"
                                    [removable]="true"
                                    (removed)="removeEmail(email)"
                                >
                                    {{ email }}
                                    <app-icon
                                        matChipRemove
                                        [icon]="{ class: 'backoffice-cross' }"
                                    ></app-icon>
                                </mat-chip>
                                <input
                                    [(ngModel)]="new_email"
                                    [ngModelOptions]="{ standalone: true }"
                                    placeholder="New email..."
                                    i18n-placeholder="@@addEmailPlaceholder"
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addEmail($event.value); new_email = ''
                                    "
                                />
                            </mat-chip-list>
                            <mat-error>{{
                                form.controls.emails.hasError('email')
                                    ? 'Email addresses need to be valid'
                                    : 'An email address is required'
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="field" *ngIf="form.controls.content">
                        <label for="content" i18n="@@emailBodyLabel">
                            Email Body:
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="content"
                                placeholder="Email body contents..."
                                i18n-placeholder="@@emailBodyPlacholder"
                                formControlName="content"
                            ></textarea>
                        </mat-form-field>
                    </div>
                </ng-container>
                <ng-container *ngSwitchDefault>
                    <div class="field" *ngIf="form.controls.method_call">
                        <label for="content" i18n="@@selectExecLabel">
                            Select method to execute:
                        </label>
                        <execute-method-field
                            formControlName="method_call"
                            [system]="system"
                            [can_execute]="false"
                        ></execute-method-field>
                    </div>
                </ng-container>
            </ng-container>
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
export class TriggerActionFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Systems used for templating the status variables */
    @Input() public system: PlaceSystem;
    /** List of seperators for storing emails */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Variable to hold new email addresses */
    public new_email = '';

    @ViewChild('chipList') private chip_list: MatChipList;

    /** List of available trigger action types */
    public action_types: Identity[] = [
        { id: 'function', name: 'Execute Method' },
        { id: 'emails', name: 'Send Email' },
    ];

    public get email_list(): string[] {
        return (
            (this.form && this.form.controls.emails
                ? this.form.controls.emails.value
                : null) || []
        );
    }

    /**
     * Add the given emails to the list
     * @param email New email
     */
    public addEmail(email: string): void {
        if (!email) {
            return;
        }
        const email_list = this.email_list;
        if (email_list.indexOf(email) < 0) {
            email_list.push(email);
        }
        this.form.controls.emails.setValue(email_list);
        this.chip_list.errorState = !this.form.controls.emails.valid;
    }

    /**
     * Remove given email from the list
     * @param email Exisiting email
     */
    public removeEmail(email: string): void {
        const email_list = this.email_list;
        const index = email_list.indexOf(email);
        if (index >= 0) {
            email_list.splice(index, 1);
        }
        this.form.controls.emails.setValue(email_list);
        this.chip_list.errorState = !this.form.controls.emails.valid;
    }
}
