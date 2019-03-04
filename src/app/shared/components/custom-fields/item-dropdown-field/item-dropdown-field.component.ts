
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { DynamicField } from '@acaprojects/ngx-widgets';
import { ICustomField } from '@acaprojects/ngx-widgets/components/form-controls/dynamic-form/custom-field/custom-field.component';

import { BaseComponent } from '../../base.component';

@Component({
    selector: 'custom-item-dropdown-field',
    templateUrl: './item-dropdown-field.component.html',
    styleUrls: ['./item-dropdown-field.component.scss']
})
export class CustomItemDropdownFieldComponent extends BaseComponent implements ICustomField<string>, OnInit {
    public control: AbstractControl;
    public ref_control: AbstractControl;
    public form: FormGroup;
    public field: DynamicField<string>;

    public model: { [name: string]: any } = {};

    constructor() {
        super();
    }

    ngOnInit(): void { }

    public set(field, form): void {
        this.field = field;
        if (form) {
            this.form = form;
            this.control = this.form.controls[this.field.key];
        }
        if (this.field.metadata) {
            this.model.service = this.field.metadata.service;
        }
    }

    public setValue(value: string): void {
        this.control.setValue(value);
    }

    public setValid(state: boolean) {

    }
}
