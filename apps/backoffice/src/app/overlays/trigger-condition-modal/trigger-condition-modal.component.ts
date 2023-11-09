import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
import { DialogEvent } from 'apps/backoffice/src/app/common/types';
import { generateTriggerConditionForm } from 'apps/backoffice/src/app/triggers/triggers.utilities';

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
        <header>
            <h3>{{ is_new ? 'Edit' : 'New' }} Trigger Condition</h3>
            <button btn icon mat-dialog-close>
                <app-icon
                    [icon]="{ type: 'icon', class: 'backoffice-cross' }"
                ></app-icon>
            </button>
        </header>
        <main
            class="max-h-[65vh] overflow-auto p-4"
            *ngIf="!loading; else load_state"
        >
            <trigger-condition-form
                [form]="form"
                [system]="system"
            ></trigger-condition-form>
        </main>
        <footer
            class="border-t border-base-200 flex items-center justify-end space-x-2 p-4"
            *ngIf="!loading"
        >
            <button btn class="w-32 inverse" mat-dialog-close>Cancel</button>
            <button btn class="w-32" type="submit" (click)="save()">
                {{ is_new ? 'Save' : 'Add' }}
            </button>
        </footer>
        <ng-template #load_state>
            <main>
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">Processing request...</div>
                </div>
            </main>
        </ng-template>
    `,
    styleUrls: ['./trigger-condition-modal.styles.scss'],
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
        updateTrigger(this.trigger.id, {
            ...this.trigger,
            conditions: this.conditions,
        }).subscribe(
            (item) => {
                this.event.emit({
                    reason: 'done',
                    metadata: { trigger: item },
                });
                notifySuccess(
                    `Successfully ${
                        this.is_new ? 'added' : 'updated'
                    } condition to trigger`
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
            const index = old_values.findIndex(
                (cmp) => JSON.stringify(cmp) === old_value
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
        const old_values = [...this.trigger.conditions.time_dependents] || [];
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
                (time) => JSON.stringify(time) === old_value
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
