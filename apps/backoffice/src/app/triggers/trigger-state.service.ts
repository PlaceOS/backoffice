import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceSystem,
    PlaceTrigger,
    listTriggerInstances,
    removeSystemTrigger,
    TriggerComparison,
    TriggerFunction,
    TriggerMailer,
    TriggerTimeCondition,
    updateTrigger,
} from '@placeos/ts-client';
import { Observable, of } from 'rxjs';
import { first, shareReplay, switchMap } from 'rxjs/operators';
import { openConfirmModal } from '../common/general';

import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent } from '../common/types';
import {
    TriggerActionModalComponent,
    TriggerActionModalData,
} from '../overlays/trigger-action-modal/trigger-action-modal.component';
import {
    TriggerConditionData,
    TriggerConditionModalComponent,
} from '../overlays/trigger-condition-modal/trigger-condition-modal.component';

@Injectable({
    providedIn: 'root',
})
export class TriggerStateService {
    public readonly item: Observable<PlaceTrigger> = this._service.item as any;

    public readonly instances: Observable<PlaceTrigger[]> = this.item.pipe(
        switchMap((item) => {
            if (!(item instanceof PlaceTrigger)) return of([]);
            return listTriggerInstances(item.id);
        }),
        shareReplay(1)
    );

    public get active_item(): PlaceTrigger {
        return this._service.active_item as any;
    }

    constructor(
        private _service: ActiveItemService,
        private _dialog: MatDialog
    ) {}

    /**
     * Add new condition to trigger
     */
    public async editCondition(
        condition: TriggerComparison | TriggerTimeCondition = null,
        template: PlaceSystem
    ) {
        if (!template) return;
        const ref = this._dialog.open<
            TriggerConditionModalComponent,
            TriggerConditionData
        >(TriggerConditionModalComponent, {
            width: 'auto',
            height: 'auto',
            data: {
                trigger: this.active_item,
                condition: condition
                    ? JSON.parse(JSON.stringify(condition))
                    : undefined,
                system: template,
            },
        });
        const result: DialogEvent | null = (await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ])) as any;
        if (!result?.reason) return;
        this._service.replaceItem(result.metadata.trigger);
    }

    /**
     * Edit existing action on active trigger
     * @param action Action to edit
     */
    public async editAction(
        action: TriggerFunction | TriggerMailer = null,
        template: PlaceSystem
    ) {
        if (!template) return;
        const ref = this._dialog.open<
            TriggerActionModalComponent,
            TriggerActionModalData
        >(TriggerActionModalComponent, {
            data: {
                trigger: this.active_item,
                action,
                system: template,
            },
        });
        const result: DialogEvent | null = (await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ])) as any;
        if (!result?.reason) return;
        this._service.replaceItem(result.metadata.trigger);
    }

    /**
     * Re-order action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    public async reorderAction(
        type: 'function' | 'mailer',
        fst: number,
        snd: number
    ): Promise<void> {
        const details = await openConfirmModal(
            {
                title: `Reoreder trigger ${type} action`,
                content: `Are you sure you want remove this trigger condition?<br>All systems using this trigger will be updated <strong>immediately</strong>.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
        );
        if (!details) return;
        const list: any[] = [
            ...(type === 'function'
                ? this.active_item.actions.functions
                : this.active_item.actions.mailers),
        ];
        moveItemInArray(list, fst, snd);
        const actions = {
            functions:
                type === 'function' ? list : this.active_item.actions.functions,
            mailers:
                type === 'function' ? this.active_item.actions.mailers : list,
        };
        details.loading('Re-ordering triggger actions...');
        const resp = await updateTrigger(this.active_item.id, {
            ...this.active_item.toJSON(),
            actions,
        })
            .toPromise()
            .catch((_) => _);
        if (!(resp instanceof PlaceTrigger))
            return notifyError(
                `Error re-ordered trigger ${type} action. Error: ${JSON.stringify(
                    resp.response || resp.message || resp
                )}`
            );
        this._service.replaceItem(resp);
        notifySuccess(`Successfully re-ordered trigger ${type} action.`);
    }

    public async removeCondition(
        condition: TriggerComparison | TriggerTimeCondition
    ) {
        const details = await openConfirmModal(
            {
                title: `Remove trigger condition`,
                content: `Are you sure you want remove this trigger condition?<br>All systems using this trigger will be updated <strong>immediately</strong>.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
        );
        if (!details?.reason) return;
        details.loading('Removing trigger condition...');
        const item = this.active_item;
        const conditions = {
            comparisons: [...item.conditions.comparisons],
            time_dependents: [...item.conditions.time_dependents],
        };
        const index = (
            (condition as TriggerTimeCondition).type
                ? item.conditions.time_dependents
                : item.conditions.comparisons
        ).findIndex((i) => JSON.stringify(i) === JSON.stringify(condition));
        conditions.time_dependents.splice(index, 1);
        ((condition as TriggerTimeCondition).type
            ? conditions.time_dependents
            : conditions.comparisons
        ).splice(index, 1);
        const resp = await updateTrigger(item.id, {
            ...item.toJSON(),
            conditions,
        })
            .toPromise()
            .catch((err) => err);
        details.close();
        if (!(resp instanceof PlaceTrigger)) {
            return notifyError(
                `Error removing trigger condition. Error: ${JSON.stringify(
                    resp.response || resp.message || resp
                )}`
            );
        }
        this._service.replaceItem(resp);
        notifySuccess('Successfully removed trigger condition.');
    }

    public async removeAction(action: TriggerFunction | TriggerMailer) {
        const details = await openConfirmModal(
            {
                title: `Remove trigger action`,
                content: `Are you sure you want remove this trigger action?<br>All systems using this trigger will be updated <strong>immediately</strong>.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
        );
        if (!details?.reason) return;
        details.loading('Removing trigger action...');
        const item = this.active_item;
        const actions = {
            functions: [...item.actions.functions],
            mailers: [...item.actions.mailers],
        };
        const index = (
            (action as TriggerMailer).emails
                ? item.actions.mailers
                : item.actions.functions
        ).findIndex((i) => JSON.stringify(i) === JSON.stringify(action));
        ((action as TriggerMailer).emails
            ? actions.mailers
            : actions.functions
        ).splice(index, 1);
        const resp = await updateTrigger(item.id, { ...item.toJSON(), actions })
            .toPromise()
            .catch((err) => err);
        details.close();
        if (!(resp instanceof PlaceTrigger)) {
            return notifyError(
                `Error removing trigger action. Error: ${JSON.stringify(
                    resp.response || resp.message || resp
                )}`
            );
        }
        this._service.replaceItem(resp);
        notifySuccess('Successfully removed trigger action.');
    }

    public async removeTriggerFromParent(instance: PlaceTrigger) {
        const type = instance.zone_id ? 'zone' : 'system';
        const details = await openConfirmModal(
            {
                title: `Remove trigger from ${type}`,
                content: `Are you sure you want remove this trigger from ${instance.name}?<br>The ${type} will be updated <strong>immediately</strong>.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
        );
        if (!details?.reason) return;
        details.loading(`Removing trigger from ${type}...`);
        const method =
            type === 'zone' ? removeSystemTrigger : removeSystemTrigger;
        const err = await method(
            instance.control_system_id,
            instance?.id || this.active_item.id
        )
            .toPromise()
            .catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing trigger from ${type}. Error: ${
                    err.responseText || err.message || err
                }`
            );
        notifySuccess(`Successfully removed trigger from ${type}.`);
    }
}
