import { Component, Input, SimpleChanges, OnChanges, OnInit, SimpleChange } from '@angular/core';
import {
    EngineTrigger,
    EngineSystem,
    EngineSystemsService,
    TriggerComparison,
    TriggerTimeCondition,
    TriggerFunction,
    TriggerMailer
} from '@placeos/ts-client';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'trigger-about',
    templateUrl: './trigger-about.template.html',
    styleUrls: ['./trigger-about.styles.scss']
})
export class TriggerAboutComponent extends BaseDirective implements OnChanges, OnInit {
    /** Active trigger */
    @Input() public item: EngineTrigger;
    /** System to use for conditions with systen variables and functions */
    public template_system: EngineSystem;
    /** List of variable comparison trigger conditions */
    public comparisons: TriggerComparison[] = [];
    /** List of time dependent trigger conditions */
    public time_dependents: TriggerTimeCondition[] = [];
    /** List of function call trigger actions */
    public functions: TriggerFunction[] = [];
    /** List of email trigger actions */
    public mailers: TriggerMailer[] = [];
    /** Reference for confirmation modal */
    private confirm_ref: MatDialogRef<ConfirmModalComponent>;

    /** Service for handling system endpoint requests */
    public get system_service(): EngineSystemsService {
        return this._service.Systems;
    }

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
                this.item = item;
                this.ngOnChanges({ item: new SimpleChange(null, this.item, false) });
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item) {
            if (this.item && this.item.conditions) {
                this.comparisons = this.item.conditions.comparisons || [];
                this.time_dependents = this.item.conditions.time_dependents || [];
                this.functions = this.item.actions.functions || [];
                this.mailers = this.item.actions.mailers || [];
            }
            if (this.confirm_ref) {
                this.confirm_ref.close();
                this.confirm_ref = null;
                this.unsub('delete_confirm');
            }
        }
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
                    condition: JSON.parse(JSON.stringify(condition)),
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
        this.confirm_ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
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
            this.confirm_ref.componentInstance.event.subscribe((event: DialogEvent) => {
                if (event.reason === 'done') {
                    this.confirm_ref.componentInstance.loading = 'Removing trigger condition...';
                    this.removeCondition(condition);
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
                this._service.notifyError(
                    `Error removing trigger condition. Error: ${JSON.stringify(err.response || err.message || err)}`
                )
        );
    }

    /**
     * Open confirmation modal for removing an action
     * @param action Action to remove
     */
    public confirmRemoveAction(action: TriggerFunction | TriggerMailer) {
        this.confirm_ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
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
            this.confirm_ref.componentInstance.event.subscribe((event: DialogEvent) => {
                if (event.reason === 'done') {
                    this.confirm_ref.componentInstance.loading = 'Removing trigger action...';
                    this.removeAction(action);
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
                this._service.notifyError(
                    `Error removing trigger action. Error: ${JSON.stringify(err.response || err.message || err)}`
                )
        );
    }

    /**
     * Open confirmation modal for re-ordering action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    public confirmReorder(type: 'function' | 'mailer', event: CdkDragDrop<any[]>): void {
        this.confirm_ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: `Reoreder trigger ${type} action`,
                    content: `<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                }
            }
        );
        this.subscription(
            'delete_confirm',
            this.confirm_ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    this.confirm_ref.componentInstance.loading = `Reordering trigger ${type} action...`;
                    this.reorderAction(type, event);
                }
            })
        );
    }

    /**
     * Re-order action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    private reorderAction(type: 'function' | 'mailer', event: CdkDragDrop<any[]>): void {
        const list: any[] = [...(type === 'function' ? this.functions : this.mailers)];
        moveItemInArray(list, event.previousIndex, event.currentIndex);
        const actions = {
            functions: type === 'function' ? list : this.functions,
            mailers: type === 'function' ? this.mailers : list
        };
        this.item.storePendingChange('actions', actions);
        this.item.save().then(
            () => this._service.notifySuccess(`Successfully re-ordered trigger ${type} action.`),
            err =>
                this._service.notifyError(
                    `Error re-ordered trigger ${type} action. Error: ${JSON.stringify(err.response || err.message || err)}`
                )
        );
    }
}
