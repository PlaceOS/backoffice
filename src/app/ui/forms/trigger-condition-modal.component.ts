import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    PlaceSystem,
    PlaceTrigger,
    TriggerComparison,
    TriggerConditions,
    TriggerTimeCondition,
    TriggerTimeConditionType,
    updateTrigger,
} from '@placeos/ts-client';
import { AsyncHandler } from '../../common/async-handler.class';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { DialogEvent, Identity } from '../../common/types';
import {
    applyTriggerConditionFormSchema,
    generateTriggerConditionFormModel,
} from '../../triggers/triggers.utilities';
import { FullscreenModalShellComponent } from '../fullscreen-modal-shell.component';
import { TranslatePipe } from '../translate.pipe';
import { TriggerConditionComparisonFormComponent } from './trigger-condition-form/comparison-form.component';
import { TriggerConditionTimeFormComponent } from './trigger-condition-form/time-form.component';

export interface TriggerConditionData {
    /** Item to add/update the trigger on */
    system: PlaceSystem;
    /** Trigger to add/update */
    trigger: PlaceTrigger;
    /** Trigger Condition to edit */
    condition?: TriggerComparison | TriggerTimeCondition;
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
                >
                    @if (form.condition_type) {
                        <div class="field">
                            <label for="type">
                                {{
                                    'TRIGGERS.CONDITION_FIELD_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [formField]="form.condition_type"
                                >
                                    @for (type of condition_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{
                                                (type.id === 'compare'
                                                    ? 'TRIGGERS.CONDITION_COMPARE'
                                                    : 'TRIGGERS.CONDITION_TIME'
                                                ) | translate
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (formModel().condition_type === 'compare') {
                        <trigger-condition-comparison-form
                            [form]="form"
                            [formModel]="formModel"
                            [system]="system"
                        ></trigger-condition-comparison-form>
                    } @else {
                        <trigger-condition-time-form
                            [form]="form"
                            [formModel]="formModel"
                        ></trigger-condition-time-form>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        TriggerConditionComparisonFormComponent,
        TriggerConditionTimeFormComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormField,
        TranslatePipe,
    ],
})
export class TriggerConditionModalComponent extends AsyncHandler {
    private _dialog =
        inject<MatDialogRef<TriggerConditionModalComponent>>(MatDialogRef);
    private _data = inject<TriggerConditionData>(MAT_DIALOG_DATA);

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
    public get system(): PlaceSystem {
        return this._data.system;
    }

    /** Template system to use for status variable bindings */
    public get trigger(): PlaceTrigger {
        return this._data.trigger;
    }

    public async save() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) return;
        this.loading.set('Saving trigger condition...');
        void (this.formModel().condition_type === 'compare'
            ? this.updateComparisons()
            : this.updateTimeDependents());

        const item = await updateTrigger(this.trigger.id, {
            ...this.trigger,
            conditions: this.conditions,
        }).catch((err) =>
            notifyError(
                i18n('TRIGGERS.CONDITION_SAVE_ERROR', {
                    error: JSON.stringify(err.response || err.message || err),
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
        const old_values = [...this.trigger.conditions.comparisons];
        const new_value: TriggerComparison = {
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
            ...this.trigger.conditions,
            comparisons: old_values,
        };
        this.conditions = updated_conditions;
    }

    /**
     * Update the time dependent list by replace an exisiting item or add a new item
     */
    private updateTimeDependents() {
        const old_values = [...(this.trigger.conditions.time_dependents || [])];
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
                old_values.splice(index, 1, new_value as TriggerTimeCondition);
            }
        } else {
            old_values.push(new_value as TriggerTimeCondition);
        }
        const updated_conditions = {
            ...this.trigger.conditions,
            time_dependents: old_values,
        };
        this.conditions = updated_conditions;
    }
}
