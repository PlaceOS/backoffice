import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
    EngineSystem,
    EngineZone,
    EngineTrigger,
    TriggerConditions,
    TriggerComparison,
    TriggerTimeCondition
} from '@acaengine/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { Identity, HashMap, DialogEvent } from 'src/app/shared/utilities/types.utilities';

import * as dayjs from 'dayjs';
import { FormGroup } from '@angular/forms';
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
    public is_new: boolean;

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
            const old_values = this.trigger.conditions.comparisons;
            const new_value: TriggerComparison = {
                left: this.form.controls.left.value,
                operator: this.form.controls.operator.value,
                right: this.form.controls.right.value
            };
            this.trigger.storePendingChange('conditions', {
                ...this.trigger.conditions,
                comparisons: old_values.length
                    ? [...old_values, new_value]
                    : [new_value]
            });
        } else {
            const old_values = this.trigger.conditions.time_dependents;
            const new_value: TriggerTimeCondition = {
                type: this.form.controls.time_type.value,
                time: (this.form.controls.time.value / 1000).toFixed(0),
                cron: this.form.controls.cron.value
            };
            new_value.cron ? delete new_value.time : delete new_value.cron;
            this.trigger.storePendingChange('conditions', {
                ...this.trigger.conditions,
                time_dependents: old_values.length
                    ? [...old_values, new_value]
                    : [new_value]
            });
        }
        this.trigger.save().then(
            item => {
                this.event.emit({ reason: 'done', metadata: { trigger: item } });
                this._service.notifySuccess('Successfully added condition to trigger');
                this._dialog.close();
            },
            err => {
                this.trigger.clearPendingChanges();
                this.loading = false;
                this._service.notifyError(`Error adding condition to trigger. Error: ${err.message || err}`);
            }
        );
    }
}
