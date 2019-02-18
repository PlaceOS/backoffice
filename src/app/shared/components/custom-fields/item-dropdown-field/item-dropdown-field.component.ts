
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
        this.load();
    }

    public setValue(value: string): void {
        this.control.setValue(value);
    }

    public setValid(state: boolean) {

    }

    public load(query: string = '') {
        if (this.model.service) {
            if (this.model.loading) {
                this.clearTimer('loading');
                return this.timeout('loading', () => {
                    this.subs.timers.loading = null;
                    this.load(query);
                });
            }
            this.model.loading = true;
            this.model.service.query({ q: query, offset: '0' }).then((list) => {
                this.model.items = list;
                this.model.loading = false;
            }, () => this.model.loading = false);
        }
    }
}
