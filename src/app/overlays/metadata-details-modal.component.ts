import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required, submit, validate } from '@angular/forms/signals';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { addSignalChipItem, removeSignalChipItem } from '../common/forms';
import { IconComponent } from '../ui/icon.component';
import type { MetadataFormModel } from '../ui/metadata-display.component';

export interface MetadataDetailsModalData {
    value: MetadataFormModel;
    existing_names: string[];
    update: (value: MetadataFormModel) => void;
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
            <main class="flex w-lg flex-col p-4">
                <label
                    for="property-name"
                    [class.error]="
                        form.name().invalid() && form.name().touched()
                    "
                    >Name<span required>*</span>:</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        placeholder="Property Name"
                        [formField]="form.name"
                    />
                    <mat-error>{{
                        form.name().errors().find((error) => error.kind === 'name')
                            ? 'Property name must be unique'
                            : 'Property name is required'
                    }}</mat-error>
                </mat-form-field>
                <label for="description">Description:</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        placeholder="Description"
                        [formField]="form.description"
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
                        placeholder="Schema"
                        [formField]="form.schema"
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
                [disabled]="form.name().invalid()"
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
        FormField,
        MatChipsModule,
        MatInputModule,
        IconComponent,
        MatInputModule,
        FormsModule,
    ],
})
export class MetadataDetailsModalComponent implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<MetadataDetailsModalComponent>>(MatDialogRef);
    private _data = inject<MetadataDetailsModalData>(MAT_DIALOG_DATA);

    public readonly formModel = signal({
        name: '',
        description: '',
        editors: [] as string[],
        schema: '',
    });
    public readonly form = form(this.formModel, (path) => {
        required(path.name);
        validate(path.name, ({ value }) =>
            this._data.existing_names.includes(value())
                ? { kind: 'name', message: 'Property name must be unique' }
                : undefined,
        );
    });
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addEditor = (e: MatChipInputEvent) =>
        this.formModel.update((model) => ({
            ...model,
            editors: addSignalChipItem(model.editors, e),
        }));
    public readonly removeEditor = (i: string) =>
        this.formModel.update((model) => ({
            ...model,
            editors: removeSignalChipItem(model.editors, i),
        }));

    public get editors() {
        return this.formModel().editors;
    }

    public ngOnInit(): void {
        this.formModel.set({
            name: this._data.value.name || '',
            description: this._data.value.description || '',
            editors: this._data.value.editors || [],
            schema: this._data.value.schema || '',
        });
    }

    public async updateDetails() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) return;
        this._data.update({ ...this._data.value, ...this.formModel() });
        this._data.change.set(Date.now());
        this._dialog_ref.close();
    }
}
