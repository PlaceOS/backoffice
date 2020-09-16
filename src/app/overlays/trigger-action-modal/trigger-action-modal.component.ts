import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    PlaceTrigger,
    PlaceSystem,
    TriggerMailer,
    TriggerFunction,
    updateTrigger,
} from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { DialogEvent } from 'src/app/common/types';
import { generateTriggerActionForm } from 'src/app/shared/utilities/data/triggers.utilities';
import { notifyError, notifySuccess } from 'src/app/common/notifications';

export interface TriggerActionModalData {
    /** Item to add/update the trigger on */
    system: PlaceSystem;
    /** Trigger to add/update */
    trigger: PlaceTrigger;
    /** Trigger Condition to edit */
    action?: TriggerMailer | TriggerFunction;
}

@Component({
    selector: 'trigger-action-modal',
    templateUrl: './trigger-action-modal.template.html',
    styleUrls: ['./trigger-action-modal.styles.scss'],
})
export class TriggerActionModalComponent extends BaseClass implements OnInit {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger action */
    public form: FormGroup;
    /** Store for changes to actions */
    public actions: any;

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !!this._data.action;
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
        private _dialog: MatDialogRef<TriggerActionModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: TriggerActionModalData
    ) {
        super();
    }

    public ngOnInit() {
        this.form = generateTriggerActionForm(this._data.action).form;
    }

    public save() {
        this.form.markAllAsTouched();
        if (
            (this.form.controls.action_type.value === 'emails' && !this.form.valid) ||
            (this.form.controls.action_type.value === 'function' && !this.form.value.method_call)
        ) {
            return;
        }
        this.loading = true;
        if (this.form.controls.action_type.value === 'emails') {
            this.updateMailers();
        } else {
            this.updateFunctions();
        }
        updateTrigger(this.trigger.id, { ...this.trigger, actions: this.actions })
            .toPromise()
            .then(
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

    private updateMailers() {
        const mailers = this.trigger.actions.mailers;
        const new_mailer = {
            emails: this.form.value.emails,
            content: this.form.value.content,
        };
        if (this._data.action) {
            const old_mailer = JSON.stringify(this._data.action);
            const index = mailers.findIndex((a_mailer) => JSON.stringify(a_mailer) === old_mailer);
            mailers.splice(index, 1, new_mailer);
        } else {
            mailers.push(new_mailer);
        }
        this.actions = { ...this.trigger.actions, mailers };
    }

    private updateFunctions() {
        const functions = this.trigger.actions.functions;
        if (this._data.action) {
            const old_function = JSON.stringify(this._data.action);
            const index = functions.findIndex((fn) => JSON.stringify(fn) === old_function);
            functions.splice(index, 1, this.form.value.method_call);
        } else {
            functions.push(this.form.value.method_call);
        }
        this.actions = { ...this.trigger.actions, functions };
    }
}
