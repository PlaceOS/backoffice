import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';

import { BaseComponent } from '../../../globals/base.component';
import { CUSTOM_FIELD_REGISTER } from '../../../globals/custom-field-register';

export interface IDropdownItem {
    [key: string]: any,
    id: string,
    name: string
}

@Component({
    selector: 'custom-dropdown-field',
    templateUrl: './item-dropdown-field.component.html',
    styleUrls: ['./item-dropdown-field.component.scss']
})
export class CustomDropdownFieldComponent extends BaseComponent implements OnInit {
    /** Index of the active item */
    public index: number;

    constructor(protected _field: ADynamicFormField, protected _group: FormGroup) {
        super();
    }

    public get field(): ADynamicFormField {
        return this._field;
    }
    public get group(): FormGroup {
        return this._group
    }

    public ngOnInit(): void {
        this.subscription('control', this.field.control.valueChanges.subscribe(() => this.update()));
        this.timeout('init', () => this.update());
    }

    /** List of available options on the dropdown */
    public get options(): IDropdownItem[] {
        return (this.field.metadata ? this.field.metadata.options : null) || [];
    }

    /**
     * Set the field value to the item at the given index
     * @param index Index of the newly selected item
     */
    public setValue(index: number) {
        const item = this.options[index];
        if (item) {
            this.field.setValue(item);
        }
    }

    /**
     * Update the selected index based on the current field value
     */
    private update(): void {
        const value = this.field.control.value;
        if (value) {
            this.index = this.options.findIndex(i => i === value || i.id === value.id);
        }
    }
}

CUSTOM_FIELD_REGISTER.dropdown = CustomDropdownFieldComponent;
CUSTOM_FIELD_REGISTER.booking_type = CustomDropdownFieldComponent;
