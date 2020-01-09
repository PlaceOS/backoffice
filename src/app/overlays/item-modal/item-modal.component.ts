import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EngineResource, EngineSystem } from '@acaprojects/ts-composer';
import { FormGroup } from '@angular/forms';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { DialogEvent, EngineServiceLike } from 'src/app/shared/utilities/types.utilities';
import { generateSystemsFormFields, FormDetails } from 'src/app/shared/utilities/data/systems.utilities';

export interface CreateEditModalData {
    /** Service associated with the item being created/edited */
    service: EngineServiceLike;
    /** Item being worked on */
    item: EngineResource<any>;
    /** Form fields for item */
    form: any[];
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
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: EngineResource<any>;
    /** Saved version of the item */
    public result: any;
    /** List of the form fields needed for the item */
    public form: FormGroup;
    /** Whether the item request is being processed */
    public loading: boolean;

    public get name(): string {
        return this.service.name || this.service._name;
    }

    public get item_type(): string {
        if (this.item instanceof EngineSystem) {
            return 'system';
        }
    }

    constructor(
        private _dialog: MatDialogRef<ItemCreateUpdateModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: CreateEditModalData
    ) {
        super();
    }

    /**
     * Generate the form fields for the item being handled
     */
    public generateFormData(): FormGroup {
        let details: FormDetails = null
        if (this.item instanceof EngineSystem) {
            details = generateSystemsFormFields(this.item);
        }
        if (details) {
            details.subscriptions.forEach((sub, index) => this.subscription(`form_field_${index}`, sub));
            return details.form;
        }
        return new FormGroup({});
    }

    /** Service associated with the item */
    public get service() {
        return this._data.service;
    }

    public ngOnInit(): void {
        this.item = this._data.item;
        this.edit = !!this._data.item.id;
        this.form = this.generateFormData();
    }

    /**
     * Save changes and create item if it does not exist
     */
    public submit() {
        this.form.markAllAsTouched();
        if (this.item && this.form.valid) {
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
