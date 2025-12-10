import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { addChipItem, removeChipItem } from '../common/forms';
import { IconComponent } from '../ui/icon.component';

export interface MetadataDetailsModalData {
    form: FormGroup;
    change: WritableSignal<number>;
}

@Component({
    selector: 'app-metadata-details-modal',
    template: `
        <header
            class="border-base-100 bg-base-200 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] items-center justify-between rounded-sm border px-4 py-2"
        >
            <h2 class="text-xl font-medium">Update metadata details</h2>
            <button btn icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="flex w-lg flex-col p-4">
                <label
                    for="property-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    >Name<span required>*</span>:</label
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
                        @for (item of editors; track item) {
                            <mat-chip-row (removed)="removeEditor(item)">
                                <div class="max-w-md truncate">{{ item }}</div>
                                <button
                                    matChipRemove
                                    [attr.aria-label]="'Remove ' + item"
                                >
                                    <icon>cancel</icon>
                                </button>
                            </mat-chip-row>
                        }
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
        }
        <footer
            class="bg-base-200 mx-2 mb-2 flex items-center justify-end space-x-2 rounded-sm p-2"
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
    imports: [
        MatDialogModule,
        MatRippleModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatInputModule,
        IconComponent,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class MetadataDetailsModalComponent implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<MetadataDetailsModalComponent>>(MatDialogRef);
    private _data = inject<MetadataDetailsModalData>(MAT_DIALOG_DATA);

    public form = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        editors: new FormControl<string[]>([]),
        schema: new FormControl(''),
    });
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addEditor = (e: MatChipInputEvent) =>
        addChipItem(this.form.controls.editors as FormControl<string[]>, e);
    public readonly removeEditor = (i: string) =>
        removeChipItem(this.form.controls.editors as FormControl<string[]>, i);

    public get editors() {
        return this.form?.controls.editors.value;
    }

    public ngOnInit(): void {
        this.form.controls.name.setValidators(
            this._data.form.controls.name.validator,
        );
        this.form.patchValue(this._data.form.value);
    }

    public updateDetails() {
        this._data.form.patchValue(this.form.value);
        const { name, description, editors, schema } = this.form.getRawValue();
        this._data.form.patchValue({ name, description, editors, schema });
        this._data.change.set(Date.now());
        this._dialog_ref.close();
    }
}
