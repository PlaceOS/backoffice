import { Component, Input, ViewChild, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ENTER, COMMA, SPACE } from '@angular/cdk/keycodes';
import { MatChipList } from '@angular/material/chips';
import { EngineSystem } from '@acaengine/ts-client';

import { Identity } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'trigger-action-form',
    templateUrl: './trigger-action-form.component.html',
    styleUrls: ['./trigger-action-form.component.scss']
})
export class TriggerActionFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Systems used for templating the status variables */
    @Input() public system: EngineSystem;
    /** List of seperators for storing emails */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Variable to hold new email addresses */
    public new_email: string = '';

    @ViewChild('chipList', { static: false }) private chip_list: MatChipList;

    /** List of available trigger action types */
    public action_types: Identity[] = [
        { id: 'function', name: 'Execute Method' },
        { id: 'email', name: 'Send Email' }
    ];

    public get email_list(): string[] {
        return (
            (this.form && this.form.controls.emails ? this.form.controls.emails.value : null) || []
        );
    }

    /**
     * Add the given emails to the list
     * @param email New email
     */
    public addEmail(email: string): void {
        if (!email) { return; }
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
