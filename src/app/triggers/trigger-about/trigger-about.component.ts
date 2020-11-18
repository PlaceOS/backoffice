import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
    PlaceTrigger,
    PlaceSystem,
    TriggerComparison,
    TriggerTimeCondition,
    TriggerFunction,
    TriggerMailer,
    updateTrigger,
    querySystems,
} from '@placeos/ts-client';
import { first, map } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import {
    TriggerActionModalComponent,
    TriggerActionModalData,
} from 'src/app/overlays/trigger-action-modal/trigger-action-modal.component';
import {
    TriggerConditionModalComponent,
    TriggerConditionData,
} from 'src/app/overlays/trigger-condition-modal/trigger-condition-modal.component';
import { DialogEvent } from 'src/app/common/types';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { notifyError, notifySuccess } from 'src/app/common/notifications';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'trigger-about',
    templateUrl: './trigger-about.template.html',
    styleUrls: ['./trigger-about.styles.scss'],
})
export class TriggerAboutComponent extends BaseClass {
    /** System to use for conditions with systen variables and functions */
    public template_system: PlaceSystem;
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
    /** Query function for systems */
    public readonly query_fn = (_) => querySystems({ q: _ }).pipe(map((resp) => resp.data));

    public get item(): PlaceTrigger {
        return this._service.active_item as any;
    }

    constructor(private _dialog: MatDialog, private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
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
            })
        );
    }

    /**
     * Add new condition to trigger
     */
    public async editCondition(condition?: TriggerComparison | TriggerTimeCondition) {
        const ref = this._dialog.open<TriggerConditionModalComponent, TriggerConditionData>(
            TriggerConditionModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {
                    trigger: this.item,
                    condition: condition ? JSON.parse(JSON.stringify(condition)) : undefined,
                    system: this.template_system,
                },
            }
        );
        const result = await Promise.race([
            ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (result && result?.metadata?.trigger) {
            this._service.replaceItem(result.metadata.trigger);
        }
    }

    /**
     * Edit existing action on active trigger
     * @param action Action to edit
     */
    public async editAction(action?: TriggerFunction | TriggerMailer) {
        const ref = this._dialog.open<TriggerActionModalComponent, TriggerActionModalData>(
            TriggerActionModalComponent,
            {
                data: {
                    trigger: this.item,
                    action,
                    system: this.template_system,
                },
            }
        );
        const result = await Promise.race([
            ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (result && result?.metadata?.trigger) {
            this._service.replaceItem(result.metadata.trigger);
        }
    }

    public confirmRemoveCondition(condition: TriggerComparison | TriggerTimeCondition) {
        this.confirm_ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: `Remove trigger condition`,
                    content: `<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                },
            }
        );
        this.subscription(
            'delete_confirm',
            this.confirm_ref.componentInstance.event.subscribe(async (event: DialogEvent) => {
                if (event.reason === 'done') {
                    this.confirm_ref.componentInstance.loading = 'Removing trigger condition...';
                    await this.removeCondition(condition).catch((_) => null);
                    this.confirm_ref.close();
                }
            })
        );
    }

    /**
     * Remove a condition from the active trigger
     * @param condition Condition to remove
     */
    public async removeCondition(condition: TriggerComparison | TriggerTimeCondition) {
        const conditions = {
            comparisons: [...this.comparisons],
            time_dependents: [...this.time_dependents],
        };
        if ((condition as TriggerTimeCondition).type) {
            const index = this.time_dependents.findIndex(
                (item) => JSON.stringify(item) === JSON.stringify(condition)
            );
            conditions.time_dependents.splice(index, 1);
        } else {
            const index = this.comparisons.findIndex(
                (item) => JSON.stringify(item) === JSON.stringify(condition)
            );
            conditions.comparisons.splice(index, 1);
        }
        const trigger = await updateTrigger(this.item.id, { ...this.item.toJSON(), conditions })
            .toPromise()
            .catch((err) => {
                notifyError(
                    `Error removing trigger condition. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
                return null;
            });
        if (trigger) {
            this._service.replaceItem(trigger);
            notifySuccess('Successfully removed trigger condition.');
        }
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
                    icon: { type: 'icon', class: 'backoffice-trash' },
                },
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
            mailers: [...this.item.actions.mailers],
        };
        if ((action as TriggerMailer).emails) {
            const index = this.mailers.findIndex(
                (item) => JSON.stringify(item) === JSON.stringify(action)
            );
            actions.mailers.splice(index, 1);
        } else {
            const index = this.functions.findIndex(
                (item) => JSON.stringify(item) === JSON.stringify(action)
            );
            actions.functions.splice(index, 1);
        }
        updateTrigger(this.item.id, { ...this.item.toJSON(), actions }).subscribe(
            () => notifySuccess('Successfully removed trigger action.'),
            (err) =>
                notifyError(
                    `Error removing trigger action. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
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
                    icon: { type: 'icon', class: 'backoffice-trash' },
                },
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
            mailers: type === 'function' ? this.mailers : list,
        };
        updateTrigger(this.item.id, { ...this.item.toJSON(), actions }).subscribe(
            () => notifySuccess(`Successfully re-ordered trigger ${type} action.`),
            (err) =>
                notifyError(
                    `Error re-ordered trigger ${type} action. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                )
        );
    }
}
