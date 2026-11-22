import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import {
    type System,
    Trigger,
    TriggerConditions,
    TriggerConditionsComparison,
    TriggerConditionsTimeDependent,
    triggers,
} from '@placeos/ts-client';
import { orThrow, TriggerTimeConditionType } from '@placeos/ts-client/compat';
import { describeError } from '../../common/errors';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { toBody } from '../../common/placeos';
import { DialogEvent, Identity } from '../../common/types';
import {
    applyTriggerConditionFormSchema,
    generateTriggerConditionFormModel,
    triggerConditions,
} from '../../triggers/triggers.utilities';
import { FormFieldComponent } from '../controls/form-field.component';
import { OptionComponent } from '../controls/option.component';
import { SelectComponent } from '../controls/select.component';
import { FullscreenModalShellComponent } from '../fullscreen-modal-shell.component';
import { TranslatePipe } from '../translate.pipe';
import { TriggerConditionComparisonFormComponent } from './trigger-condition-form/comparison-form.component';
import { TriggerConditionTimeFormComponent } from './trigger-condition-form/time-form.component';

export interface TriggerConditionData {
    /** Item to add/update the trigger on */
    system: System;
    /** Trigger to add/update */
    trigger: Trigger;
    /** Trigger Condition to edit */
    condition?: TriggerConditionsComparison | TriggerConditionsTimeDependent;
}

@Component({
    selector: 'trigger-condition-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (is_new ? 'TRIGGERS.CONDITION_NEW' : 'TRIGGERS.CONDITION_EDIT')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            @if (form) {
                <form
                    trigger-condition
                    class="flex flex-col"
                    (submit)="$event.preventDefault()"
                >
                    @if (form.condition_type) {
                        <div class="field">
                            <label for="type">
                                {{
                                    'TRIGGERS.CONDITION_FIELD_TYPE' | translate
                                }}
                            </label>
                            <app-form-field>
                                <app-select [formField]="form.condition_type">
                                    @for (type of condition_types; track type) {
                                        <app-option [value]="type.id">
                                            {{
                                                (type.id === 'compare'
                                                    ? 'TRIGGERS.CONDITION_COMPARE'
                                                    : 'TRIGGERS.CONDITION_TIME'
                                                ) | translate
                                            }}
                                        </app-option>
                                    }
                                </app-select>
                            </app-form-field>
                        </div>
                    }
                    @if (formModel().condition_type === 'compare') {
                        <trigger-condition-comparison-form
                            [form]="form"
                            [formModel]="formModel"
                            [system]="system"
                        />
                    } @else {
                        <trigger-condition-time-form
                            [form]="form"
                            [formModel]="formModel"
                        />
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        FullscreenModalShellComponent,
        TriggerConditionComparisonFormComponent,
        TriggerConditionTimeFormComponent,
        FormField,
        TranslatePipe,
    ],
})
export class TriggerConditionModalComponent {
    private _dialog =
        inject<DialogRef<unknown, TriggerConditionModalComponent>>(DialogRef);
    private _data = inject<TriggerConditionData>(DIALOG_DATA);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public readonly loading = signal('');
    /** Form fields for trigger condition */
    public readonly formModel = signal(
        generateTriggerConditionFormModel(this._data.condition),
    );
    public readonly form = form(
        this.formModel,
        applyTriggerConditionFormSchema,
    );
    /** Store for updated conditions */
    public conditions: TriggerConditions;

    /** Types of trigger conditions */
    public condition_types: Identity[] = [
        { id: 'compare', name: 'Compare values' },
        { id: 'time', name: 'Particular time' },
    ];

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !this._data.condition;
    }

    /** Template system to use for status variable bindings */
    public get system(): System {
        return this._data.system;
    }

    /** Template system to use for status variable bindings */
    public get trigger(): Trigger {
        return this._data.trigger;
    }

    public async save() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) return;
        this.loading.set('Saving trigger condition...');
        void (this.formModel().condition_type === 'compare'
            ? this.updateComparisons()
            : this.updateTimeDependents());

        const item = await triggers
            .update({
                id: this.trigger.id,
                body: {
                    ...toBody(Trigger, this.trigger),
                    conditions: this.conditions,
                },
            })
            .then(orThrow)
            .catch((err) =>
                notifyError(
                    i18n('TRIGGERS.CONDITION_SAVE_ERROR', {
                        error: describeError(err),
                    }),
                ),
            );
        if (item) {
            this.event.emit({
                reason: 'done',
                metadata: { trigger: item },
            });
            notifySuccess(i18n('TRIGGERS.CONDITION_SAVE_SUCCESS'));
            this._dialog.close();
        }
        this.loading.set('');
    }

    /**
     * Update the comparison list by replace an exisiting item or add a new item
     */
    private updateComparisons() {
        const old_values = triggerConditions(this.trigger).comparisons;
        const new_value: TriggerConditionsComparison = {
            left:
                typeof this.formModel().left === 'string'
                    ? JSON.parse(this.formModel().left as string)
                    : this.formModel().left,
            operator: this.formModel().operator,
            right:
                typeof this.formModel().right === 'string'
                    ? JSON.parse(this.formModel().right as string)
                    : this.formModel().right,
        };
        if (this._data.condition) {
            const old_value = JSON.stringify(this._data.condition);
            const index = old_values.findIndex(
                (cmp) => JSON.stringify(cmp) === old_value,
            );
            if (index >= 0) {
                old_values.splice(index, 1, new_value);
            }
        } else {
            old_values.push(new_value);
        }
        const updated_conditions = {
            ...triggerConditions(this.trigger),
            comparisons: old_values,
        };
        this.conditions = updated_conditions;
    }

    /**
     * Update the time dependent list by replace an exisiting item or add a new item
     */
    private updateTimeDependents() {
        const old_values = triggerConditions(this.trigger).time_dependents;
        const new_value = {
            type: this.formModel().time_type,
            time: +(this.formModel().time / 1000).toFixed(0),
            cron: this.formModel().cron,
            timezone: this.formModel().timezone,
        };
        if (new_value.type === TriggerTimeConditionType.CRON) {
            delete new_value.time;
        } else {
            delete new_value.cron;
            delete new_value.timezone;
        }
        void (new_value.cron ? delete new_value.time : delete new_value.cron);
        if (this._data.condition) {
            const old_value = JSON.stringify(this._data.condition);
            const index = old_values.findIndex(
                (time) => JSON.stringify(time) === old_value,
            );
            if (index >= 0) {
                old_values.splice(
                    index,
                    1,
                    new_value as TriggerConditionsTimeDependent,
                );
            }
        } else {
            old_values.push(new_value as TriggerConditionsTimeDependent);
        }
        const updated_conditions = {
            ...triggerConditions(this.trigger),
            time_dependents: old_values,
        };
        this.conditions = updated_conditions;
    }
}
