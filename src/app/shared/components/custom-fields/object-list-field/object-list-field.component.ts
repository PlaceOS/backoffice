import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { HashMap } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'object-list-field',
    templateUrl: './object-list-field.component.html',
    styleUrls: ['./object-list-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ObjectListFieldComponent),
            multi: true
        }
    ]
})
export class ObjectListFieldComponent extends BaseDirective implements ControlValueAccessor {
    /** List of fields that can be populated for each object */
    @Input() public fields: string[];
    /** List of objects */
    public active_list: HashMap[] = [];

    /** Form control on change handler */
    private _onChange: (_: HashMap[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: HashMap[]) => void;

    /** Add a new item the the active list */
    public addRow() {
        if (!this.active_list) {
            this.active_list = [];
        }
        this.active_list.push({});
        this.setValue(this.active_list);
    }

    /**
     * Remove item from the active list
     * @param item Item to remove
     */
    public removeRow(item: HashMap) {
        const index = this.active_list.indexOf(item);
        if (index >= 0) {
            this.active_list.splice(index, 1);
        }
        this.setValue(this.active_list);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: HashMap[]): void {
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: HashMap[]) {
        this.active_list = value;
    }

    /**
     * Registers a callback function that is called when the
     * control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: HashMap[]) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms
     * API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: HashMap[]) => void): void {
        this._onTouch = fn;
    }
}
