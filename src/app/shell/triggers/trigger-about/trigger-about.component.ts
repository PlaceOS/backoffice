import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
    EngineTrigger,
    EngineSystem,
    EngineSystemsService,
    TriggerComparison,
    TriggerTimeCondition,
    TriggerFunction,
    TriggerMailer
} from '@acaengine/ts-client';
import { MatDialog } from '@angular/material/dialog';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import {
    TriggerActionModalComponent,
    TriggerActionModalData
} from 'src/app/overlays/trigger-action-modal/trigger-action-modal.component';
import {
    TriggerConditionModalComponent,
    TriggerConditionData
} from 'src/app/overlays/trigger-condition-modal/trigger-condition-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';

@Component({
    selector: 'trigger-about',
    templateUrl: './trigger-about.template.html',
    styleUrls: ['./trigger-about.styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggerAboutComponent extends BaseDirective {
    /** Active trigger */
    @Input() public item: EngineTrigger;
    /** System to use for conditions with systen variables and functions */
    public template_system: EngineSystem;

    /** Service for handling system endpoint requests */
    public get system_service(): EngineSystemsService {
        return this._service.Systems;
    }

    public get comparisons(): any[] {
        return (this.item.conditions || ({} as any)).comparisons || [];
    }

    public get time_dependents(): any[] {
        return (this.item.conditions || ({} as any)).time_dependents || [];
    }

    public get functions(): any[] {
        return (this.item.actions || ({} as any)).functions || [];
    }

    public get mailers(): any[] {
        return (this.item.actions || ({} as any)).mailers || [];
    }

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    /**
     * Add new condition to trigger
     */
    public addCondition() {
        this._dialog.open<TriggerConditionModalComponent, TriggerConditionData>(
            TriggerConditionModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {
                    trigger: this.item,
                    system: this.template_system
                }
            }
        );
    }

    /**
     * Add new condition to trigger
     */
    public editCondition(condition: TriggerComparison | TriggerTimeCondition) {
        this._dialog.open<TriggerConditionModalComponent, TriggerConditionData>(
            TriggerConditionModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {
                    trigger: this.item,
                    condition,
                    system: this.template_system
                }
            }
        );
    }

    /**
     * Add new action to active trigger
     */
    public addAction() {
        this._dialog.open<TriggerActionModalComponent, TriggerActionModalData>(
            TriggerActionModalComponent,
            {
                data: {
                    trigger: this.item,
                    system: this.template_system
                }
            }
        );
    }

    /**
     * Edit existing action on active trigger
     * @param action Action to edit
     */
    public editAction(action: TriggerFunction | TriggerMailer) {
        this._dialog.open<TriggerActionModalComponent, TriggerActionModalData>(
            TriggerActionModalComponent,
            {
                data: {
                    trigger: this.item,
                    action,
                    system: this.template_system
                }
            }
        );
    }

    public confirmRemoveCondition(condition: TriggerComparison | TriggerTimeCondition) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: `Remove trigger condition`,
                    content: `<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                }
            }
        );
        this.subscription(
            'delete_confirm',
            ref.componentInstance.event.subscribe((event: DialogEvent) => {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Removing trigger condition...';
                    this.removeCondition(condition);
                    ref.close();
                    this.unsub('delete_confirm');
                }
            })
        );
    }

    /**
     * Remove a condition from the active trigger
     * @param condition Condition to remove
     */
    public removeCondition(condition: TriggerComparison | TriggerTimeCondition) {
        const conditions = {
            comparisons: [...this.comparisons],
            time_dependents: [...this.time_dependents]
        };
        if ((condition as TriggerTimeCondition).type) {
            const index = this.time_dependents.findIndex(
                item => JSON.stringify(item) === JSON.stringify(condition)
            );
            conditions.time_dependents.splice(index, 1);
        } else {
            const index = this.comparisons.findIndex(
                item => JSON.stringify(item) === JSON.stringify(condition)
            );
            conditions.comparisons.splice(index, 1);
        }
        this.item.storePendingChange('conditions', conditions);
        this.item.save().then(
            () => this._service.notifySuccess('Successfully removed trigger condition.'),
            err =>
                this._service.notifySuccess(
                    `Error removing trigger condition. Error: ${err.message || err}`
                )
        );
    }

    /**
     * Open confirmation modal for removing an action
     * @param action Action to remove
     */
    public confirmRemoveAction(action: TriggerFunction | TriggerMailer) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: `Remove trigger action`,
                    content: `<p>Are you sure you want remove this trigger action?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                }
            }
        );
        this.subscription(
            'delete_confirm',
            ref.componentInstance.event.subscribe((event: DialogEvent) => {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Removing trigger action...';
                    this.removeAction(action);
                    ref.close();
                    this.unsub('delete_confirm');
                }
            })
        );
    }

    /**
     * Remove an action from the active trigger
     * @param action Action to remove
     */
    public removeAction(action: TriggerFunction | TriggerMailer) {
        const actions = {
            functions: [...this.item.actions.functions],
            mailers: [...this.item.actions.mailers]
        };
        if ((action as TriggerMailer).emails) {
            const index = this.mailers.findIndex(
                item => JSON.stringify(item) === JSON.stringify(action)
            );
            actions.mailers.splice(index, 1);
        } else {
            const index = this.functions.findIndex(
                item => JSON.stringify(item) === JSON.stringify(action)
            );
            actions.functions.splice(index, 1);
        }
        this.item.storePendingChange('actions', actions);
        this.item.save().then(
            () => this._service.notifySuccess('Successfully removed trigger action.'),
            err =>
                this._service.notifySuccess(
                    `Error removing trigger action. Error: ${err.message || err}`
                )
        );
    }
}
