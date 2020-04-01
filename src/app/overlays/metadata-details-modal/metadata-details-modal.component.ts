import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

export interface MetadataDetailsModalData {
    form: FormGroup;
}

@Component({
    selector: 'app-metadata-details-modal',
    templateUrl: './metadata-details-modal.component.html',
    styleUrls: ['./metadata-details-modal.component.scss']
})
export class MetadataDetailsModalComponent implements OnInit {
    public form: FormGroup;

    constructor(
        private _dialog_ref: MatDialogRef<MetadataDetailsModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: MetadataDetailsModalData
    ) {}

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(
                this._data.form.controls.name.value,
                this._data.form.controls.name.validator
            ),
            description: new FormControl(this._data.form.controls.description.value)
        });
    }

    public updateDetails() {
        this._data.form.controls.name.setValue(this.form.controls.name.value);
        this._data.form.controls.description.setValue(this.form.controls.description.value);
        this._dialog_ref.close();
    }
}
