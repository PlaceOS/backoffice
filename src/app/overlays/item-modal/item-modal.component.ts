import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { EngineResource } from '@acaprojects/ts-composer';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { DialogEvent, EngineServiceLike } from 'src/app/shared/utilities/types.utilities';

export interface CreateEditModalData {
    /** Service associated with the item being created/edited */
    service: EngineServiceLike;
    /** Item being worked on */
    item: EngineResource<any>;
    /** Form fields for item */
    form: ADynamicFormField[];
    /** Name of the type of item being worked on */
    name: string
}

@Component({
    selector: 'item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.scss']
})
export class ItemCreateUpdateModalComponent extends BaseDirective {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
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

    constructor(
        private _dialog: MatDialogRef<ItemCreateUpdateModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: CreateEditModalData
    ) {
        super();
    }


    /** Service associated with the item */
    public get service() {
        return this._data.service;
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
        this.item = this._data.item;
        this.edit = !!this._data.item.id;
        this.fields = this._data.form;
        this.name = this._data.name;
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
                this.event.emit({ reason: 'done', metadata: { item } });
                this.service.parent.notifySuccess(`Successfully ${this.item.id ? 'updated' : 'added'} ${this.name}`);
                this._dialog.close();
            }, (err) => {
                this.loading = false;
                this.service.parent.notifyError(`Error ${this.item.id ? 'editing' : 'adding new'} ${this.name}: ${err}`);
            })
        }
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog.close();
    }
}
