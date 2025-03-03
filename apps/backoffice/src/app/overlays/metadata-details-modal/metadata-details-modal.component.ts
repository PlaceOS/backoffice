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
    template: `
        <header class="flex items-center justify-between space-x-4 p-2">
            <div class="px-2 py-2 text-lg font-medium">
                Update metadata details
            </div>
            <button btn icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            *ngIf="form"
            [formGroup]="form"
            class="flex w-[32rem] flex-col p-4"
        >
            <label
                for="property-name"
                [class.error]="
                    form.controls.name.invalid && form.controls.name.touched
                "
                >Name<span class="text-pending">*</span>:</label
            >
            <mat-form-field appearance="outline">
                <input
                    matInput
                    name="property-name"
                    placeholder="Property Name"
                    formControlName="name"
                    required
                />
                <mat-error>{{
                    form.controls.name?.errors?.name
                        ? 'Property name must be unique'
                        : 'Property name is required'
                }}</mat-error>
            </mat-form-field>
            <label for="description">Description:</label>
            <mat-form-field appearance="outline">
                <textarea
                    matInput
                    name="description"
                    placeholder="Description"
                    formControlName="description"
                ></textarea>
            </mat-form-field>
            <label for="system-email">Editors:</label>
            <mat-form-field appearance="outline" class="w-full">
                <mat-chip-grid #chipList aria-label="Image List">
                    <mat-chip-row
                        *ngFor="let item of editors"
                        (removed)="removeEditor(item)"
                    >
                        <div class="max-w-md truncate">{{ item }}</div>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                        >
                            <app-icon>cancel</app-icon>
                        </button>
                    </mat-chip-row>
                </mat-chip-grid>
                <input
                    placeholder="Editors..."
                    [matChipInputFor]="chipList"
                    [matChipInputSeparatorKeyCodes]="separators"
                    [matChipInputAddOnBlur]="true"
                    (matChipInputTokenEnd)="addEditor($event)"
                />
            </mat-form-field>
            <label for="schema">Schema:</label>
            <mat-form-field appearance="outline">
                <input
                    matInput
                    name="schema"
                    placeholder="Schema"
                    formControlName="schema"
                />
            </mat-form-field>
        </main>
        <footer
            class="flex items-center justify-end space-x-2 border-t border-base-200 px-4 py-2"
        >
            <button
                btn
                matRipple
                class="w-40"
                [disabled]="!form?.controls.name.valid"
                (click)="updateDetails()"
            >
                Apply Locally
            </button>
        </footer>
    `,
    styles: [``],
})
export class MetadataDetailsModalComponent implements OnInit {
    public form = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        editors: new FormControl(''),
        schema: new FormControl(''),
    });
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
        @Inject(MAT_DIALOG_DATA) private _data: MetadataDetailsModalData,
    ) {}

    public ngOnInit(): void {
        this.form.controls.name.setValidators(
            this._data.form.controls.name.validator,
        );
        this.form.patchValue(this._data.form.value);
    }

    public updateDetails() {
        this._data.form.patchValue(this.form.value);
        this._data.form.controls.name.setValue(this.form.controls.name.value);
        this._data.form.controls.description.setValue(
            this.form.controls.description.value,
        );
        this._data.form.controls.editors.setValue(
            this.form.controls.editors.value,
        );
        this._data.form.controls.schema.setValue(
            this.form.controls.schema.value,
        );
        this._dialog_ref.close();
    }
}
