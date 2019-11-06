
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';

import { CUSTOM_FIELD_REGISTER } from 'src/app/shared/globals/custom-field-register';
import { BaseDirective } from 'src/app/shared/globals/base.directive';

@Component({
    selector: 'custom-settings-field',
    templateUrl: './settings-field.component.html',
    styleUrls: ['./settings-field.component.scss']
})
export class CustomSettingsFieldComponent extends BaseDirective implements OnInit {

    constructor(protected _field: ADynamicFormField, protected _group: FormGroup) {
        super();
    }

    public get field(): ADynamicFormField {
        return this._field;
    }
    public get group(): FormGroup {
        return this._group
    }

    ngOnInit(): void { }

    public setValue(value: { [name: string]: any }): void {
        this._field.control.setValue(value);
    }
}

CUSTOM_FIELD_REGISTER.settings = CustomSettingsFieldComponent;
CUSTOM_FIELD_REGISTER.config = CustomSettingsFieldComponent;
