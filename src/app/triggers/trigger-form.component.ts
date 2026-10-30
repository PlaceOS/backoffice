import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PlaceTrigger, addTrigger, updateTrigger } from '@placeos/ts-client';
import { mergeFormItem, onSaveHotkey, submitFormDialog } from '../common/forms';
import { i18n } from '../common/locale.service';
import { DialogEvent } from '../common/types';
import { CounterComponent } from '../ui/counter.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    applyTriggerFormSchema,
    generateTriggerFormModel,
} from './triggers.utilities';

@Component({
    selector: 'trigger-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form
                    trigger
                    class="flex w-xl max-w-[calc(100vw-4rem)] flex-col"
                >
                    @if (form.name) {
                        <div class="field">
                            <label
                                for="trigger-name"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    id="trigger-name"
                                    [formField]="form.name"
                                />
                                <mat-error>Trigger name is required</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">{{
                                'COMMON.FIELD_DESCRIPTION' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    id="description"
                                    [formField]="form.description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.enable_webhook) {
                        <div class="field mb-4 w-[calc(50%-0.75rem)]">
                            <settings-toggle
                                [label]="'TRIGGERS.ENABLE_WEBHOOK' | translate"
                                [formField]="form.enable_webhook"
                            />
                        </div>
                    }
                    <div class="flex items-center space-x-4">
                        @if (
                            formModel().enable_webhook && form.debounce_period
                        ) {
                            <div class="field">
                                <label
                                    for="debounce-period"
                                    id="debounce-period-label"
                                    [class.error]="
                                        form.name().invalid() &&
                                        form.name().touched()
                                    "
                                >
                                    {{ 'TRIGGERS.DEBOUNCE_PERIOD' | translate }}
                                </label>
                                <a-counter
                                    id="debounce-period"
                                    role="group"
                                    aria-labelledby="debounce-period-label"
                                    [formField]="form.debounce_period"
                                    [min]="0"
                                    [step]="100"
                                    [max]="24 * 60 * 60"
                                    [render_fn]="render_debounce"
                                />
                            </div>
                        }
                        @if (
                            formModel().enable_webhook && form.supported_methods
                        ) {
                            <div class="field">
                                <label for="methods" id="methods-label">
                                    {{
                                        'TRIGGERS.SUPPORTED_METHODS' | translate
                                    }}
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <mat-select
                                        multiple
                                        id="methods"
                                        aria-labelledby="methods-label"
                                        [formField]="form.supported_methods"
                                    >
                                        <mat-option value="GET">GET</mat-option>
                                        <mat-option value="POST"
                                            >POST</mat-option
                                        >
                                        <mat-option value="PUT">PUT</mat-option>
                                        <mat-option value="PATCH"
                                            >PATCH</mat-option
                                        >
                                        <mat-option value="DELETE"
                                            >DELETE</mat-option
                                        >
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        FormField,
        CounterComponent,
        SettingsToggleComponent,
        MatInputModule,
        TranslatePipe,
        FullscreenModalShellComponent,
    ],
})
export class TriggerFormComponent implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<TriggerFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceTrigger; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'TRIGGERS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateTriggerFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applyTriggerFormSchema);
    public readonly loading = signal<string | null>(null);
    public readonly heading = signal('');

    public readonly render_debounce = (v: number) => `${v} ms`;

    constructor() {
        onSaveHotkey(() => this.submit());
    }

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading.set(i18n(`${this._name}.${edit ? 'EDIT' : 'NEW'}`));
    }

    public async submit(): Promise<void> {
        await submitFormDialog(
            this.form,
            {
                loading: this.loading,
                event: this.event,
                close: () => this._dialog_ref.close(),
            },
            `${this._name}.`,
            () => {
                const form_item = mergeFormItem(
                    this._data.item,
                    this.formModel(),
                ) as unknown as PlaceTrigger;
                return form_item.id
                    ? updateTrigger(form_item.id, form_item)
                    : addTrigger(form_item);
            },
        );
    }
}
