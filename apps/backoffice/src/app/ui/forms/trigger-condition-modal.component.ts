import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    PlaceSystem,
    PlaceTrigger,
    TriggerComparison,
    TriggerTimeCondition,
    TriggerTimeConditionType,
    updateTrigger,
} from '@placeos/ts-client';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { DialogEvent, Identity } from 'apps/backoffice/src/app/common/types';
import { generateTriggerConditionForm } from 'apps/backoffice/src/app/triggers/triggers.utilities';
import { i18n } from '../../common/translate';

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
            [loading]="loading"
            (save)="save()"
        >
            <form
                trigger-condition
                class="flex flex-col"
                *ngIf="form"
                [formGroup]="form"
            >
                <div class="field" *ngIf="form.controls.condition_type">
                    <label for="type">
                        {{ 'TRIGGERS.CONDITION_FIELD_TYPE' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="type"
                            formControlName="condition_type"
                        >
                            <mat-option
                                *ngFor="let type of condition_types"
                                [value]="type.id"
                            >
                                {{
                                    (type.id === 'compare'
                                        ? 'TRIGGERS.CONDITION_COMPARE'
                                        : 'TRIGGERS.CONDITION_TIME'
                                    ) | translate
                                }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <ng-container
                    *ngIf="
                        form.controls.condition_type.value === 'compare';
                        else time_form
                    "
                >
                    <trigger-condition-comparison-form
                        [form]="form"
                        [system]="system"
                    ></trigger-condition-comparison-form>
                </ng-container>
            </form>
            <ng-template #time_form>
                <trigger-condition-time-form
                    [form]="form"
                ></trigger-condition-time-form>
            </ng-template>
        </fullscreen-modal-shell>
    `,
    styles: [``],
})
export class TriggerConditionModalComponent extends AsyncHandler {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger condition */
    public form = generateTriggerConditionForm(this._data.condition);
    /** Store for updated conditions */
    public conditions: any;

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

    constructor(
        private _dialog: MatDialogRef<TriggerConditionModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: TriggerConditionData,
    ) {
        super();
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this.loading = true;
        this.form.controls.condition_type.value === 'compare'
            ? this.updateComparisons()
            : this.updateTimeDependents();

        const item = await updateTrigger(this.trigger.id, {
            ...this.trigger,
            conditions: this.conditions,
        })
            .toPromise()
            .catch((err) =>
                notifyError(
                    i18n('TRIGGERS.CONDITION_SAVE_ERROR', {
                        error: JSON.stringify(
                            err.response || err.message || err,
                        ),
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
        this.loading = false;
    }

    /**
     * Update the comparison list by replace an exisiting item or add a new item
     */
    private updateComparisons() {
        const old_values = [...this.trigger.conditions.comparisons];
        const new_value: TriggerComparison = {
            left:
                typeof this.form.controls.left.value === 'string'
                    ? JSON.parse(this.form.controls.left.value)
                    : this.form.controls.left.value,
            operator: this.form.controls.operator.value,
            right:
                typeof this.form.controls.right.value === 'string'
                    ? JSON.parse(this.form.controls.right.value)
                    : this.form.controls.right.value,
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
            type: this.form.controls.time_type.value,
            time: +(this.form.controls.time.value / 1000).toFixed(0),
            cron: this.form.get('cron').value,
            timezone: this.form.get('timezone')?.value,
        };
        if (new_value.type === TriggerTimeConditionType.CRON) {
            delete new_value.time;
        } else {
            delete new_value.cron;
            delete new_value.timezone;
        }
        new_value.cron ? delete new_value.time : delete new_value.cron;
        if (this._data.condition) {
            const old_value = JSON.stringify(this._data.condition);
            const index = old_values.findIndex(
                (time) => JSON.stringify(time) === old_value,
            );
            if (index >= 0) {
                old_values.splice(index, 1, new_value as any);
            }
        } else {
            old_values.push(new_value as any);
        }
        const updated_conditions = {
            ...this.trigger.conditions,
            time_dependents: old_values,
        };
        this.conditions = updated_conditions;
    }
}
