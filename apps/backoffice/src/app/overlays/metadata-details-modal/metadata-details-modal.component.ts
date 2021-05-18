import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import {
    addChipItem,
    removeChipItem,
} from 'apps/backoffice/src/app/common/forms';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';

export interface MetadataDetailsModalData {
    form: FormGroup;
}

@Component({
    selector: 'app-metadata-details-modal',
    templateUrl: './metadata-details-modal.component.html',
    styleUrls: ['./metadata-details-modal.component.scss'],
})
export class MetadataDetailsModalComponent implements OnInit {
    public form: FormGroup;
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addEditor = (e) =>
        addChipItem(this.form.controls.editors as any, e);
    public readonly removeEditor = (i) =>
        removeChipItem(this.form.controls.editors as any, i);

    public get editors() {
        return this.form?.controls.editors.value;
    }

    constructor(
        private _dialog_ref: MatDialogRef<MetadataDetailsModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: MetadataDetailsModalData
    ) {}

    public ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(
                this._data.form.controls.name.value,
                this._data.form.controls.name.validator
            ),
            description: new FormControl(
                this._data.form.controls.description.value
            ),
            editors: new FormControl(this._data.form.controls.editors.value),
            schema: new FormControl(this._data.form.controls.schema.value),
        });
    }

    public updateDetails() {
        this._data.form.controls.name.setValue(this.form.controls.name.value);
        this._data.form.controls.description.setValue(
            this.form.controls.description.value
        );
        this._data.form.controls.editors.setValue(
            this.form.controls.editors.value
        );
        this._data.form.controls.schema.setValue(
            this.form.controls.schema.value
        );
        this._dialog_ref.close();
    }
}
