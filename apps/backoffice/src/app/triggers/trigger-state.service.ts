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
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { first, shareReplay, switchMap, tap } from 'rxjs/operators';
import { openConfirmModal } from '../common/general';

import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent } from '../common/types';
import {
    TriggerActionModalComponent,
    TriggerActionModalData,
} from '../ui/forms/trigger-action-modal.component';
import {
    TriggerConditionData,
    TriggerConditionModalComponent,
} from '../ui/forms/trigger-condition-modal.component';
import { i18n } from '../common/translate';

@Injectable({
    providedIn: 'root',
})
export class TriggerStateService {
    private _change = new BehaviorSubject(0);
    private _loading = new BehaviorSubject<boolean>(false);
    public readonly item: Observable<PlaceTrigger> = this._service.item as any;

    public readonly loading = this._loading.asObservable();

    public readonly instances: Observable<PlaceTrigger[]> = combineLatest([
        this.item,
        this._change,
    ]).pipe(
        switchMap(([item]) => {
            this._loading.next(true);
            if (!(item instanceof PlaceTrigger)) return of([]);
            return listTriggerInstances(item.id);
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1),
    );

    public get active_item(): PlaceTrigger {
        return this._service.active_item as any;
    }

    constructor(
        private _service: ActiveItemService,
        private _dialog: MatDialog,
    ) {}

    /**
     * Add new condition to trigger
     */
    public async editCondition(
        condition: TriggerComparison | TriggerTimeCondition = null,
        template: PlaceSystem,
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
        template: PlaceSystem,
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
        snd: number,
    ): Promise<void> {
        const details = await openConfirmModal(
            {
                title: i18n('TRIGGERS.REORDER_CONFIRM_TITLE', { type }),
                content: i18n('TRIGGERS.REORDER_CONFIRM_MSG'),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
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
        details.loading(i18n('TRIGGERS.REORDER_CONFIRM_LOADING'));
        const resp = await updateTrigger(this.active_item.id, {
            ...this.active_item.toJSON(),
            actions,
        })
            .toPromise()
            .catch((_) => _);
        if (!(resp instanceof PlaceTrigger))
            return notifyError(
                i18n('TRIGGERS.REORDER_CONFIRM_ERROR', {
                    error: JSON.stringify(
                        resp.response || resp.message || resp,
                    ),
                }),
            );
        this._service.replaceItem(resp);
        notifySuccess(i18n('TRIGGERS.REORDER_CONFIRM_SUCCESS'));
    }

    public async removeCondition(
        condition: TriggerComparison | TriggerTimeCondition,
    ) {
        const details = await openConfirmModal(
            {
                title: i18n('TRIGGERS.REMOVE_CONDITION_TITLE'),
                content: i18n('TRIGGERS.REMOVE_CONDITION_MSG'),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details?.reason) return;
        details.loading(i18n('TRIGGERS.REMOVE_CONDITION_LOADING'));
        const item = this.active_item;
        const conditions = {
            comparisons: [...item.conditions.comparisons],
            time_dependents: [...item.conditions.time_dependents],
        };
        const list = (condition as TriggerTimeCondition).type
            ? conditions.time_dependents
            : conditions.comparisons;
        const index = list.findIndex(
            (i) => JSON.stringify(i) === JSON.stringify(condition),
        );
        list.splice(index, 1);
        const resp = await updateTrigger(item.id, {
            ...item.toJSON(),
            conditions,
        })
            .toPromise()
            .catch((err) => err);
        details.close();
        if (!(resp instanceof PlaceTrigger)) {
            return notifyError(
                i18n('TRIGGERS.REMOVE_CONDITION_ERROR', {
                    error: JSON.stringify(
                        resp.response || resp.message || resp,
                    ),
                }),
            );
        }
        this._service.replaceItem(resp);
        notifySuccess(i18n('TRIGGERS.REMOVE_CONDITION_SUCCESS'));
    }

    public async removeAction(action: TriggerFunction | TriggerMailer) {
        const details = await openConfirmModal(
            {
                title: i18n('TRIGGERS.REMOVE_ACTION_TITLE'),
                content: i18n('TRIGGERS.REMOVE_ACTION_MSG'),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details?.reason) return;
        details.loading(i18n('TRIGGERS.REMOVE_ACTION_LOADING'));
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
                i18n('TRIGGERS.REMOVE_ACTION_ERROR', {
                    error: JSON.stringify(
                        resp.response || resp.message || resp,
                    ),
                }),
            );
        }
        this._service.replaceItem(resp);
        notifySuccess(i18n('TRIGGERS.REMOVE_ACTION_SUCCESS'));
    }

    public async removeTriggerFromParent(instance: PlaceTrigger) {
        const type = (
            instance.zone_id ? i18n('ZONES.SINGULAR') : i18n('SYSTEMS.SINGULAR')
        ).toLowerCase();
        const details = await openConfirmModal(
            {
                title: i18n('TRIGGERS.REMOVE_INSTANCE_TITLE', { type }),
                content: i18n('TRIGGERS.REMOVE_INSTANCE_MSG', {
                    type,
                    name: instance.name,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details?.reason) return;
        details.loading(i18n('TRIGGERS.REMOVE_INSTANCE_LOADING', { type }));
        const method =
            type === 'zone' ? removeSystemTrigger : removeSystemTrigger;
        let err: any = await method(
            instance.control_system_id,
            instance?.id || this.active_item.id,
        )
            .toPromise()
            .catch((_) => ({ error: _ }));
        details.close();
        if (err?.error) {
            err = err.error;
            return notifyError(
                i18n('TRIGGERS.REMOVE_INSTANCE_ERROR', {
                    type,
                    error: err.responseText || err.message || err,
                }),
            );
        }
        this._change.next(Date.now());
        notifySuccess(i18n('TRIGGERS.REMOVE_INSTANCE_SUCCESS', { type }));
    }
}
