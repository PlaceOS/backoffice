import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { generateTriggerActionForm } from 'src/app/shared/utilities/data/triggers.utilities';
import { EngineTrigger, EngineSystem, TriggerMailer, TriggerFunction } from '@placeos/ts-client';
import { FormGroup } from '@angular/forms';

export interface TriggerActionModalData {
    /** Item to add/update the trigger on */
    system: EngineSystem;
    /** Trigger to add/update */
    trigger: EngineTrigger;
    /** Trigger Condition to edit */
    action?: TriggerMailer | TriggerFunction;
}

@Component({
    selector: 'trigger-action-modal',
    templateUrl: './trigger-action-modal.template.html',
    styleUrls: ['./trigger-action-modal.styles.scss']
})
export class TriggerActionModalComponent extends BaseDirective implements OnInit {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger condition */
    public form: FormGroup;

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !!this._data.action;
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
        private _dialog: MatDialogRef<TriggerActionModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: TriggerActionModalData,
        private _service: ApplicationService
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
        this.trigger.save().then(
            item => {
                this.event.emit({ reason: 'done', metadata: { trigger: item } });
                this._service.notifySuccess(`Successfully ${this.is_new ? 'added' : 'updated'} condition to trigger`);
                this._dialog.close();
            },
            err => {
                this.trigger.clearPendingChanges();
                this.loading = false;
                this._service.notifyError(
                    `Error ${this.is_new ? 'adding' : 'updating'} condition to trigger. Error: ${JSON.stringify(err.response || err.message || err)}`
                );
            }
        );
    }

    private updateMailers() {
        const mailers = this.trigger.actions.mailers;
        const new_mailer = {
            emails: this.form.value.emails,
            content: this.form.value.content
        };
        if (this._data.action) {
            const old_mailer = JSON.stringify(this._data.action);
            const index = mailers.findIndex(
                a_mailer => JSON.stringify(a_mailer) === old_mailer
            );
            mailers.splice(index, 1, new_mailer);
        } else {
            mailers.push(new_mailer);
        }
        this.trigger.storePendingChange('actions', { ...this.trigger.actions, mailers });
    }

    private updateFunctions() {
        const functions = this.trigger.actions.functions;
        if (this._data.action) {
            const old_function = JSON.stringify(this._data.action);
            const index = functions.findIndex(fn => JSON.stringify(fn) === old_function);
            functions.splice(index, 1, this.form.value.method_call);
        } else {
            functions.push(this.form.value.method_call);
        }
        this.trigger.storePendingChange('actions', { ...this.trigger.actions, functions });
    }
}
