import {
    Component,
    Output,
    EventEmitter,
    Inject,
    ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    PlaceTrigger,
    PlaceSystem,
    TriggerMailer,
    TriggerFunction,
    updateTrigger,
} from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { DialogEvent, Identity } from 'apps/backoffice/src/app/common/types';
import { generateTriggerActionForm } from 'apps/backoffice/src/app/triggers/triggers.utilities';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatChipGrid } from '@angular/material/chips';
import { i18n } from '../../common/translate';

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
            [loading]="loading"
            (save)="save()"
        >
            <form
                trigger-action
                *ngIf="form"
                class="flex w-[36rem] max-w-[calc(100vw-4rem)] flex-col"
                [formGroup]="form"
            >
                <div class="field" *ngIf="form.controls.action_type">
                    <label for="type">
                        {{ 'TRIGGERS.ACTION_FIELD_TYPE' | translate }}:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select name="type" formControlName="action_type">
                            <mat-option
                                *ngFor="let type of action_types"
                                [value]="type.id"
                            >
                                {{ type.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <ng-container [ngSwitch]="form.controls.action_type.value">
                    <ng-container *ngSwitchCase="'emails'">
                        <div class="field" *ngIf="form.controls.emails">
                            <label
                                for="description"
                                [class.error]="
                                    form.controls.emails.touched &&
                                    form.controls.emails.errors
                                "
                            >
                                {{
                                    'TRIGGERS.ACTION_EMAIL_ADDRESS' | translate
                                }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    [aria-label]="
                                        'TRIGGERS.ACTION_EMAIL_ADDRESS'
                                            | translate
                                    "
                                >
                                    <mat-chip-row
                                        *ngFor="let item of email_list"
                                        (removed)="removeEmail(item)"
                                    >
                                        <div class="max-w-md truncate">
                                            {{ item }}
                                        </div>
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.REMOVE_ITEM'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <app-icon>cancel</app-icon>
                                        </button>
                                    </mat-chip-row>
                                </mat-chip-grid>
                                <input
                                    [(ngModel)]="new_email"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'TRIGGERS.ACTION_EMAIL_ADDRESS_LIST'
                                            | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addEmail($event.value); new_email = ''
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="field" *ngIf="form.controls.content">
                            <label for="content">{{
                                'TRIGGERS.ACTION_EMAIL_BODY' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="content"
                                    placeholder="Email body contents..."
                                    formControlName="content"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                        <div class="field" *ngIf="form.controls.method_call">
                            <label for="content">
                                {{
                                    'TRIGGERS.ACTION_EXECUTE_SELECT' | translate
                                }}
                            </label>
                            <execute-method-field
                                formControlName="method_call"
                                [system]="system"
                                [can_execute]="false"
                            ></execute-method-field>
                        </div>
                    </ng-container>
                </ng-container>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
})
export class TriggerActionModalComponent extends AsyncHandler {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger action */
    public form = generateTriggerActionForm(this._data.action);
    /** Store for changes to actions */
    public actions: any;
    /** List of seperators for storing emails */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Variable to hold new email addresses */
    public new_email = '';

    @ViewChild('chipList') private chip_list: MatChipGrid;

    /** List of available trigger action types */
    public action_types: Identity[] = [];

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
        @Inject(MAT_DIALOG_DATA) private _data: TriggerActionModalData,
    ) {
        super();
    }

    public get email_list(): string[] {
        return (
            (this.form && this.form.controls.emails
                ? this.form.controls.emails.value
                : null) || []
        );
    }

    public ngOnInit() {
        this.action_types = [
            { id: 'function', name: i18n('TRIGGERS.ACTION_EXECUTE') },
            { id: 'emails', name: i18n('TRIGGERS.ACTION_EMAIL') },
        ];
    }

    /**
     * Add the given emails to the list
     * @param email New email
     */
    public addEmail(email: string): void {
        if (!email) {
            return;
        }
        const email_list = this.email_list;
        if (email_list.indexOf(email) < 0) {
            email_list.push(email);
        }
        this.form.controls.emails.setValue(email_list);
        this.chip_list.errorState = !this.form.controls.emails.valid;
    }

    /**
     * Remove given email from the list
     * @param email Exisiting email
     */
    public removeEmail(email: string): void {
        const email_list = this.email_list;
        const index = email_list.indexOf(email);
        if (index >= 0) {
            email_list.splice(index, 1);
        }
        this.form.controls.emails.setValue(email_list);
        this.chip_list.errorState = !this.form.controls.emails.valid;
    }

    public save() {
        this.form.markAllAsTouched();
        if (
            (this.form.controls.action_type.value === 'emails' &&
                !this.form.valid) ||
            (this.form.controls.action_type.value === 'function' &&
                !this.form.value.method_call)
        ) {
            return;
        }
        this.loading = true;
        if (this.form.value.action_type === 'emails') {
            this.updateMailers();
        } else {
            this.updateFunctions();
        }
        updateTrigger(this.trigger.id, {
            ...this.trigger,
            actions: this.actions,
        })
            .toPromise()
            .then(
                (item) => {
                    this.event.emit({
                        reason: 'done',
                        metadata: { trigger: item },
                    });
                    notifySuccess(
                        `Successfully ${
                            this.is_new ? 'added' : 'updated'
                        } condition to trigger`,
                    );
                    this._dialog.close();
                },
                (err) => {
                    this.loading = false;
                    notifyError(
                        `Error ${
                            this.is_new ? 'adding' : 'updating'
                        } condition to trigger. Error: ${JSON.stringify(
                            err.response || err.message || err,
                        )}`,
                    );
                },
            );
    }

    private updateMailers() {
        const mailers = this.trigger.actions.mailers;
        const new_mailer = {
            emails: this.form.value.emails,
            content: this.form.value.content,
        };
        if (this._data.action) {
            const old_mailer = JSON.stringify(this._data.action || {});
            const index = mailers.findIndex(
                (a_mailer) => JSON.stringify(a_mailer) === old_mailer,
            );
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
            const index = functions.findIndex(
                (fn) => JSON.stringify(fn) === old_function,
            );
            functions.splice(index, 1, this.form.value.method_call);
        } else {
            functions.push(this.form.value.method_call);
        }
        this.actions = { ...this.trigger.actions, functions };
    }
}
