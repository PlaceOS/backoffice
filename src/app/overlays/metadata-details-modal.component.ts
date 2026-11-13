import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    form,
    FormField,
    required,
    submit,
    validate,
} from '@angular/forms/signals';
import { ChipListComponent } from '../ui/controls/chip-list.component';
import { DialogCloseDirective } from '../ui/controls/dialog';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { DialogTitleDirective } from '../ui/dialog-title.directive';
import { IconComponent } from '../ui/icon.component';
import type { MetadataFormModel } from '../ui/metadata-display.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface MetadataDetailsModalData {
    value: MetadataFormModel;
    existing_names: string[];
    /** Called with the new details. The caller tracks its own changes. */
    update: (value: MetadataFormModel) => void;
}

@Component({
    selector: 'app-metadata-details-modal',
    template: `
        <header
            class="border-base-100 bg-base-200 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] items-center justify-between rounded-sm border px-4 py-2"
        >
            <h2 appDialogTitle class="text-xl font-medium">
                Update metadata details
            </h2>
            <button
                btn
                icon
                appDialogClose
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
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
                <app-form-field>
                    <input
                        id="property-name"
                        placeholder="Property Name"
                        [formField]="form.name"
                    />
                    <div error>
                        {{
                        form.name().errors().find((error) => error.kind === 'name')
                            ? 'Property name must be unique'
                            : 'Property name is required'
                        }}
                    </div>
                </app-form-field>
                <label for="description">Description:</label>
                <app-form-field>
                    <textarea
                        id="description"
                        placeholder="Description"
                        [formField]="form.description"
                    ></textarea>
                </app-form-field>
                <label for="editors">Editors:</label>
                <app-form-field class="w-full">
                    <app-chip-list
                        inputId="editors"
                        aria-label="Editors"
                        placeholder="Editors..."
                        [separators]="['Enter', ',', ' ']"
                        [formField]="form.editors"
                    />
                </app-form-field>
                <label for="schema">Schema:</label>
                <app-form-field>
                    <input
                        id="schema"
                        placeholder="Schema"
                        [formField]="form.schema"
                    />
                </app-form-field>
            </main>
        }
        <footer
            class="bg-base-200 mx-2 mb-2 flex items-center justify-end space-x-2 rounded-sm p-2"
        >
            <button
                btn
                ripple
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
        DialogCloseDirective,
        FormFieldComponent,
        DialogTitleDirective,
        TranslatePipe,
        FormField,
        ChipListComponent,
        IconComponent,
        FormsModule,
    ],
})
export class MetadataDetailsModalComponent implements OnInit {
    private _dialog_ref =
        inject<DialogRef<unknown, MetadataDetailsModalComponent>>(DialogRef);
    private _data = inject<MetadataDetailsModalData>(DIALOG_DATA);

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
        this._dialog_ref.close();
    }
}
