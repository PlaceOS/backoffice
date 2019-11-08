import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { OverlayItem } from '@acaprojects/ngx-overlays';
import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { EngineResource } from '@acaprojects/ts-composer';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { HashMap } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.scss'],
    animations: [
        trigger('show', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(100%) scale(0)' }),
                animate(200, style({ opacity: 1, transform: 'translateX(0%) scale(1)' }))
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'translateX(0%) scale(1)' }),
                animate(200, style({ opacity: 0, transform: 'translateX(-100%) scale(0)' }))
            ])
        ])
    ]
})
export class ItemCreateUpdateModalComponent extends BaseDirective {
    /** Name of the item type */
    public name: string;
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: EngineResource<any>;
    /** Saved version of the item */
    public result: any;
    /** List of the form fields needed for the item */
    public fields: ADynamicFormField[];
    /** Whether the item request is being processed */
    public loading: boolean;
    /** Whether modal is closing */
    public closing: boolean;

    constructor(private _item: OverlayItem, private _service: ApplicationService) {
        super();
    }

    /** Service associated with the item */
    public get service(): any {
        return this._item.data.service;
    }

    public get is_valid(): boolean {
        this.fields.forEach(i => i.control.markAsDirty());
        return this.fields.reduce((a, v) => {
            console.log('Valid:', v.key, (v.isValid() || !v.required));
            const valid = v.children && v.children.length > 0
                ? v.children.reduce((r, i) => {
                    console.log('Valid:',i.key, (i.isValid() || !i.required));
                    return r && (i.isValid() || !i.required)
                }, true)
                : (v.isValid() || !v.required);
            return a && valid;
        }, true);
    }

    public ngOnInit(): void {
        this.item = this._item.data.item;
        this.edit = this._item.data.item.id;
        this.fields = this._item.data.form;
        this.name = this._item.data.name;
    }

    /**
     * Save changes and create item if it does not exist
     */
    public submit() {
        if (this.item && this.is_valid) {
            this.loading = true;
            this.item.save().then((item) => {
                this.result = item;
                this.loading = false;
                this._item.post('finish', item);
                this._service.notifySuccess(`Successfully ${this.item.id ? 'updated' : 'added'} ${this.name}`);
                this._item.close();
            }, (err) => {
                this.loading = false;
                this._service.notifyError(`Error ${this.item.id ? 'editing' : 'adding new'} ${this.name}: ${err}`);
            })
        }
    }

    /**
     * Close the modal
     */
    public close() {
        this.closing = true;
        this.timeout('close', () => this._item.close());

    }
}

OVERLAY_REGISTER.push({ id: 'edit-item', config: { content: ItemCreateUpdateModalComponent, config: 'modal' } });
