
import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../base.component';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DynamicField } from '@acaprojects/ngx-widgets';
import { ICustomField } from '@acaprojects/ngx-widgets/components/form-controls/dynamic-form/custom-field/custom-field.component';

@Component({
    selector: 'custom-settings-field',
    templateUrl: './settings-field.component.html',
    styleUrls: ['./settings-field.component.scss']
})
export class CustomSettingsFieldComponent extends BaseComponent implements ICustomField<{ [name: string]: any }>, OnInit {
    public control: AbstractControl;
    public ref_control: AbstractControl;
    public form: FormGroup;
    public field: DynamicField<{ [name: string]: any }>;

    public model: any = {};

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
    }

    public setValue(value: { [name: string]: any }): void {
        this.control.setValue(value);
    }

    public setValid(state: boolean) {

    }
}
