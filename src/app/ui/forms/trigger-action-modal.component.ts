import {
    Component,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
    WritableSignal,
} from '@angular/core';
import {
    PlaceSystem,
    PlaceTrigger,
    TriggerActions,
    TriggerFunction,
    TriggerMailer,
    updateTrigger,
} from '@placeos/ts-client';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { form, FormField, submit } from '@angular/forms/signals';
import { describeError } from '../../common/errors';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { DialogEvent, Identity } from '../../common/types';
import {
    applyTriggerActionFormSchema,
    generateTriggerActionFormModel,
} from '../../triggers/triggers.utilities';
import { ChipListComponent } from '../controls/chip-list.component';
import { FormFieldComponent } from '../controls/form-field.component';
import { OptionComponent } from '../controls/option.component';
import { SelectComponent } from '../controls/select.component';
import { ExecuteMethodFieldComponent } from '../custom-fields/system-exec/execute-method-field.component';
import { FullscreenModalShellComponent } from '../fullscreen-modal-shell.component';
import { TranslatePipe } from '../translate.pipe';

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
    template: `
        <fullscreen-modal-shell
            [heading]="
                (is_new ? 'TRIGGERS.ACTION_NEW' : 'TRIGGERS.ACTION_EDIT')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            @if (form) {
                <form
                    trigger-action
                    class="flex w-full max-w-[calc(100vw-2rem)] flex-col"
                >
                    @if (form.action_type) {
                        <div class="field">
                            <label for="type">
                                {{ 'TRIGGERS.ACTION_FIELD_TYPE' | translate }}:
                            </label>
                            <app-form-field>
                                <app-select [formField]="form.action_type">
                                    @for (type of action_types(); track type) {
                                        <app-option [value]="type.id">
                                            {{ type.name }}
                                        </app-option>
                                    }
                                </app-select>
                            </app-form-field>
                        </div>
                    }
                    @switch (formModel().action_type) {
                        @case ('emails') {
                            @if (form.emails) {
                                <div class="field">
                                    <label
                                        for="emails"
                                        [class.error]="
                                            form.emails().touched() &&
                                            form.emails().invalid()
                                        "
                                    >
                                        {{
                                            'TRIGGERS.ACTION_EMAIL_ADDRESS'
                                                | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <app-form-field class="w-full">
                                        <app-chip-list
                                            inputId="emails"
                                            [attr.aria-label]="
                                                'TRIGGERS.ACTION_EMAIL_ADDRESS'
                                                    | translate
                                            "
                                            [placeholder]="
                                                'TRIGGERS.ACTION_EMAIL_ADDRESS_LIST'
                                                    | translate
                                            "
                                            [separators]="['Enter', ',', ' ']"
                                            [formField]="form.emails"
                                        />
                                    </app-form-field>
                                </div>
                            }
                            @if (form.content) {
                                <div class="field">
                                    <label for="content">{{
                                        'TRIGGERS.ACTION_EMAIL_BODY' | translate
                                    }}</label>
                                    <app-form-field>
                                        <textarea
                                            placeholder="Email body contents..."
                                            [formField]="form.content"
                                        ></textarea>
                                    </app-form-field>
                                </div>
                            }
                        }
                        @default {
                            @if (form.method_call) {
                                <div class="field">
                                    <label for="content">
                                        {{
                                            'TRIGGERS.ACTION_EXECUTE_SELECT'
                                                | translate
                                        }}
                                    </label>
                                    <execute-method-field
                                        [formField]="form.method_call"
                                        [system]="system"
                                        [can_execute]="false"
                                    />
                                </div>
                            }
                        }
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
        FormField,
        ChipListComponent,
        FullscreenModalShellComponent,
        ExecuteMethodFieldComponent,
        TranslatePipe,
    ],
})
export class TriggerActionModalComponent implements OnInit {
    private _dialog =
        inject<DialogRef<unknown, TriggerActionModalComponent>>(DialogRef);
    private _data = inject<TriggerActionModalData>(DIALOG_DATA);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public readonly loading = signal('');
    /** Form fields for trigger action */
    public readonly formModel = signal(
        generateTriggerActionFormModel(this._data.action),
    );
    public readonly form = form(this.formModel, applyTriggerActionFormSchema);
    /** List of available trigger action types */
    public readonly action_types: WritableSignal<Identity[]> = signal([]);

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !this._data.action;
    }

    /** Template system to use for status variable bindings */
    public get system(): PlaceSystem {
        return this._data.system;
    }

    /** Template system to use for status variable bindings */
    public get trigger(): PlaceTrigger {
        return this._data.trigger;
    }

    public ngOnInit() {
        this.action_types.set([
            { id: 'function', name: i18n('TRIGGERS.ACTION_EXECUTE') },
            { id: 'emails', name: i18n('TRIGGERS.ACTION_EMAIL') },
        ]);
    }

    public async save() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) {
            return;
        }
        const actions =
            this.formModel().action_type === 'emails'
                ? this.updateMailers()
                : this.updateFunctions();
        if (!actions) {
            return notifyError(
                'Error updating trigger action. The action was changed or removed elsewhere.',
            );
        }
        this.loading.set('Save trigger action...');
        await updateTrigger(this.trigger.id, {
            ...this.trigger,
            actions,
        }).then(
            (item) => {
                this.event.emit({
                    reason: 'done',
                    metadata: { trigger: item },
                });
                notifySuccess(
                    `Successfully ${
                        this.is_new ? 'added' : 'updated'
                    } action to trigger`,
                );
                this._dialog.close();
            },
            (err) => {
                this.loading.set('');
                notifyError(
                    `Error ${
                        this.is_new ? 'adding' : 'updating'
                    } action to trigger. Error: ${describeError(err)}`,
                );
            },
        );
    }

    /**
     * Copy of the trigger actions with the mailer added or replaced.
     * `null` if the edited mailer is no longer on the trigger.
     */
    private updateMailers(): TriggerActions | null {
        const mailers = [...(this.trigger.actions.mailers || [])];
        const new_mailer = {
            emails: this.formModel().emails,
            content: this.formModel().content,
        };
        if (this._data.action) {
            const old_mailer = JSON.stringify(this._data.action);
            const index = mailers.findIndex(
                (a_mailer) => JSON.stringify(a_mailer) === old_mailer,
            );
            if (index < 0) return null;
            mailers.splice(index, 1, new_mailer);
        } else {
            mailers.push(new_mailer);
        }
        return { ...this.trigger.actions, mailers };
    }

    /**
     * Copy of the trigger actions with the function added or replaced.
     * `null` if the edited function is no longer on the trigger.
     */
    private updateFunctions(): TriggerActions | null {
        const functions = [...(this.trigger.actions.functions || [])];
        if (this._data.action) {
            const old_function = JSON.stringify(this._data.action);
            const index = functions.findIndex(
                (fn) => JSON.stringify(fn) === old_function,
            );
            if (index < 0) return null;
            functions.splice(index, 1, this.formModel().method_call);
        } else {
            functions.push(this.formModel().method_call);
        }
        return { ...this.trigger.actions, functions };
    }
}
