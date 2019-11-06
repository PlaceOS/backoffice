import { Component, OnInit } from '@angular/core';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { OverlayItem } from '@acaprojects/ngx-overlays';
import { ApplicationService } from 'src/app/services/app.service';
import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'select-item-modal',
    templateUrl: './select-item-modal.component.html',
    styleUrls: ['./select-item-modal.component.scss']
})
export class SelectItemModalComponent extends BaseDirective implements OnInit {
    /** Name of the item type */
    public name: string;
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: any;
    /** List of the form fields needed for the item */
    public fields: ADynamicFormField[];
    /** Whether the item request is being processed */
    public loading: boolean;

    constructor(private _item: OverlayItem, private _service: ApplicationService) {
        super();
    }

    public get service() {
        return this.service[this._item.data.service_name];
    }

    public ngOnInit(): void {
        if (this.service) {
            this.fields = this.service.getFormFields(this.item, this.edit);
            this.name = this.service.name;
        } else {
            this._item.close();
        }
    }

    public submit() {
        this.loading = true;
        this._item.post('event', 'Submit');
    }
}

OVERLAY_REGISTER.push({ id: 'select-item', config: { content: SelectItemModalComponent, config: 'modal' } });
