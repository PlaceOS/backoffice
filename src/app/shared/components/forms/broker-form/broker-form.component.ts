import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { AuthType } from '@placeos/ts-client';

@Component({
  selector: 'broker-form',
  templateUrl: './broker-form.component.html',
  styleUrls: ['./broker-form.component.scss']
})
export class BrokerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
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
