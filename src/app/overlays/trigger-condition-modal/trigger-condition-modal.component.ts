import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

import {
    EngineSystem,
    EngineTrigger,
    TriggerComparison,
    TriggerTimeCondition
} from '@placeos/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

import { generateTriggerConditionForm } from 'src/app/shared/utilities/data/triggers.utilities';

export interface TriggerConditionData {
    /** Item to add/update the trigger on */
    system: EngineSystem;
    /** Trigger to add/update */
    trigger: EngineTrigger;
    /** Trigger Condition to edit */
    condition?: TriggerComparison | TriggerTimeCondition;
}

@Component({
    selector: 'trigger-condition-modal',
    templateUrl: './trigger-condition-modal.template.html',
    styleUrls: ['./trigger-condition-modal.styles.scss']
})
export class TriggerConditionModalComponent extends BaseDirective implements OnInit {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger condition */
    public form: FormGroup;

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !!this._data.condition;
    }

    /** Template system to use for status variable bindings */
    public get system(): EngineSystem {
        return this._data.system;
    }

    /** Template system to use for status variable bindings */
    public get trigger(): EngineTrigger {
        return this._data.trigger;
    }

    constructor(
        private _dialog: MatDialogRef<TriggerConditionModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: TriggerConditionData,
        private _service: ApplicationService
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
        this.trigger.save().then(
            item => {
                this.event.emit({ reason: 'done', metadata: { trigger: item } });
                this._service.notifySuccess(`Successfully ${this.is_new ? 'added' : 'updated'} condition to trigger`);
                this._dialog.close();
            },
            err => {
                this.trigger.clearPendingChanges();
                this.loading = false;
                this._service.notifyError(`Error ${this.is_new ? 'adding' : 'updating'} condition to trigger. Error: ${JSON.stringify(err.response || err.message || err)}`);
            }
        );
    }

    /**
     * Update the comparison list by replace an exisiting item or add a new item
     */
    private updateComparisons() {
        const old_values = [...this.trigger.conditions.comparisons];
        const new_value: TriggerComparison = {
            left: this.form.controls.left.value,
            operator: this.form.controls.operator.value,
            right: this.form.controls.right.value
        };
        if (this._data.condition) {
            const old_value = JSON.stringify(this._data.condition);
            const index = old_values.findIndex(cmp => JSON.stringify(cmp) === old_value);
            if (index >= 0) {
                old_values.splice(index, 1, new_value);
            }
        } else {
            old_values.push(new_value);
        }
        const updated_conditions = {
            ...this.trigger.conditions,
            comparisons: old_values
        };
        this.trigger.storePendingChange('conditions', updated_conditions);
    }


    /**
     * Update the time dependent list by replace an exisiting item or add a new item
     */
    private updateTimeDependents() {
        const old_values = [...this.trigger.conditions.time_dependents] || [];
        const new_value = {
            type: this.form.controls.time_type.value,
            time: +(this.form.controls.time.value / 1000).toFixed(0),
            cron: this.form.controls.cron.value
        };
        new_value.cron ? delete new_value.time : delete new_value.cron;
        if (this._data.condition) {
            const old_value = JSON.stringify(this._data.condition);
            const index = old_values.findIndex(time => JSON.stringify(time) === old_value);
            if (index >= 0) {
                old_values.splice(index, 1, new_value);
            }
        } else {
            old_values.push(new_value);
        }
        const updated_conditions = {
            ...this.trigger.conditions,
            time_dependents: old_values
        };
        this.trigger.storePendingChange('conditions', updated_conditions);
    }
}
