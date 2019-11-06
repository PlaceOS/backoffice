import { Component, OnInit } from '@angular/core';
import { OverlayItem } from '@acaprojects/ngx-overlays';
import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { HashMap } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.scss']
})
export class ItemCreateUpdateModalComponent extends BaseDirective {
    /** Name of the item type */
    public name: string;
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: any;
    /** Saved version of the item */
    public result: any;
    /** List of the form fields needed for the item */
    public fields: ADynamicFormField[];
    /** Whether the item request is being processed */
    public loading: boolean;

    constructor(private _item: OverlayItem, private _service: ApplicationService) {
        super();
    }

    /** Service associated with the item */
    public get service(): any {
        return this._item.data.service;
    }

    /** Current state of the form fields */
    public get form(): HashMap {
        return this.fields.reduce((a, v) => { a[v.key] = v.getValue(); return a; }, {});
    }

    public ngOnInit(): void {

        if (this.service) {
            this.item = this._item.data.item;
            this.edit = this._item.data.edit;
            this.fields = this.service.getFormFields(this.item, this.edit);
            this.name = this.service.name;
        } else {
            this.item.close();
        }
    }

    public submit() {
        this.loading = true;
        if (!this.item || !this.item.id) {
            this.service.add(this.form).then((item) => {
                this.result = item;
                this.loading = false;
                this._item.post('event', 'Success');
            }, (err) => {
                this.loading = false;
                this._service.notifyError(`Error adding new ${this.name}: ${err}`);
            });
        } else {
            this.service.update(this.item.id, this.form).then((item) => {
                this.result = item;
                this.loading = false;
                this._item.post('event', 'Success');
            }, (err) => {
                this.loading = false;
                this._service.notifyError(`Error adding new ${this.name}: ${err}`);
            });
        }
    }
}

OVERLAY_REGISTER.push({ id: 'edit-item', config: { content: ItemCreateUpdateModalComponent, config: 'modal' } });
