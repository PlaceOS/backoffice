import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { PlaceTrigger, addTrigger, updateTrigger } from '@placeos/ts-client';
import { mergeFormItem, onSaveHotkey, submitFormDialog } from '../common/forms';
import { i18n } from '../common/locale.service';
import { DialogEvent } from '../common/types';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { OptionComponent } from '../ui/controls/option.component';
import { SelectComponent } from '../ui/controls/select.component';
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
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    id="trigger-name"
                                    [formField]="form.name"
                                />
                                <div error>Trigger name is required</div>
                            </app-form-field>
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">{{
                                'COMMON.FIELD_DESCRIPTION' | translate
                            }}</label>
                            <app-form-field>
                                <textarea
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    id="description"
                                    [formField]="form.description"
                                ></textarea>
                            </app-form-field>
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
                                <app-form-field class="no-subscript">
                                    <app-select
                                        multiple
                                        id="methods"
                                        aria-labelledby="methods-label"
                                        [formField]="form.supported_methods"
                                    >
                                        <app-option value="GET">GET</app-option>
                                        <app-option value="POST"
                                            >POST</app-option
                                        >
                                        <app-option value="PUT">PUT</app-option>
                                        <app-option value="PATCH"
                                            >PATCH</app-option
                                        >
                                        <app-option value="DELETE"
                                            >DELETE</app-option
                                        >
                                    </app-select>
                                </app-form-field>
                            </div>
                        }
                    </div>
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        FormField,
        CounterComponent,
        SettingsToggleComponent,
        TranslatePipe,
        FullscreenModalShellComponent,
    ],
})
export class TriggerFormComponent implements OnInit {
    private _dialog_ref =
        inject<DialogRef<unknown, TriggerFormComponent>>(DialogRef);
    private _data = inject<{ item: PlaceTrigger; readonly?: string }>(
        DIALOG_DATA,
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
