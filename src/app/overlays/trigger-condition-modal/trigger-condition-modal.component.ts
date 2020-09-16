import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

import {
    PlaceSystem,
    PlaceTrigger,
    TriggerComparison,
    TriggerTimeCondition,
    updateTrigger,
} from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

import { generateTriggerConditionForm } from 'src/app/shared/utilities/data/triggers.utilities';
import { notifyError, notifySuccess } from 'src/app/common/notifications';

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
    templateUrl: './trigger-condition-modal.template.html',
    styleUrls: ['./trigger-condition-modal.styles.scss'],
})
export class TriggerConditionModalComponent extends BaseClass implements OnInit {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger condition */
    public form: FormGroup;
    /** Store for updated conditions */
    public conditions: any;

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !!this._data.condition;
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
        @Inject(MAT_DIALOG_DATA) private _data: TriggerConditionData
    ) {
        super();
    }

    public ngOnInit() {
        this.form = generateTriggerConditionForm(this._data.condition).form;
    }

    public save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        if (this.form.controls.condition_type.value === 'compare') {
            this.updateComparisons();
        } else {
            this.updateTimeDependents();
        }
        updateTrigger(this.trigger.id, { ...this.trigger, conditions: this.conditions }).subscribe(
            (item) => {
                this.event.emit({ reason: 'done', metadata: { trigger: item } });
                notifySuccess(
                    `Successfully ${this.is_new ? 'added' : 'updated'} condition to trigger`
                );
                this._dialog.close();
            },
            (err) => {
                this.loading = false;
                notifyError(
                    `Error ${
                        this.is_new ? 'adding' : 'updating'
                    } condition to trigger. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
            }
        );
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
            const index = old_values.findIndex((cmp) => JSON.stringify(cmp) === old_value);
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
        const old_values = [...this.trigger.conditions.time_dependents] || [];
        const new_value = {
            type: this.form.controls.time_type.value,
            time: +(this.form.controls.time.value / 1000).toFixed(0),
            cron: this.form.controls.cron.value,
        };
        new_value.cron ? delete new_value.time : delete new_value.cron;
        if (this._data.condition) {
            const old_value = JSON.stringify(this._data.condition);
            const index = old_values.findIndex((time) => JSON.stringify(time) === old_value);
            if (index >= 0) {
                old_values.splice(index, 1, new_value);
            }
        } else {
            old_values.push(new_value);
        }
        const updated_conditions = {
            ...this.trigger.conditions,
            time_dependents: old_values,
        };
        this.conditions = updated_conditions;
    }
}
