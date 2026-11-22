import { computed, inject, resource, Service, signal } from '@angular/core';
import {
    type System,
    system_triggers,
    Trigger,
    TriggerActionsEmail,
    TriggerActionsFunction,
    TriggerConditionsComparison,
    TriggerConditionsTimeDependent,
    type TriggerInstance,
    triggers,
    zones,
} from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';

import { Dialog } from '@angular/cdk/dialog';
import { ACTIONS } from '../common/actions';
import { describeError } from '../common/errors';
import { escapeHtml, moveItemInArray } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { reportLoadError } from '../common/load-error';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { waitForDialog } from '../common/signals';
import { DialogEvent, Identity } from '../common/types';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import {
    TriggerActionModalComponent,
    TriggerActionModalData,
} from '../ui/forms/trigger-action-modal.component';
import {
    TriggerConditionData,
    TriggerConditionModalComponent,
} from '../ui/forms/trigger-condition-modal.component';
import {
    type TriggerActionLists,
    triggerActions,
    triggerConditions,
} from './triggers.utilities';

@Service()
export class TriggerStateService {
    private _service = inject(ActiveItemService);
    private _dialog = inject(Dialog);

    private _change = signal(0);
    public readonly item = computed(() => this._service.activeOf('triggers'));

    public readonly loading = computed(() => this._instances.isLoading());

    private readonly _instances = resource({
        params: () => ({ item: this.item(), changed: this._change() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!item) return [] as readonly TriggerInstance[];
            return triggers
                .instances({ id: item.id })
                .then(orThrow)
                .catch(reportLoadError([] as readonly TriggerInstance[]));
        },
    });

    public readonly instances = computed(() => this._instances.value() || []);

    public get active_item() {
        return this._service.activeOf('triggers');
    }

    /**
     * Add new condition to trigger
     */
    public async editCondition(
        condition:
            | TriggerConditionsComparison
            | TriggerConditionsTimeDependent = null,
        template: System,
    ) {
        if (!template) return;
        const ref = this._dialog.open<
            unknown,
            TriggerConditionData,
            TriggerConditionModalComponent
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
        const result: DialogEvent<{ trigger: Trigger }> | null =
            (await waitForDialog(ref, 'done')) as DialogEvent<{
                trigger: Trigger;
            }> | null;
        if (!result?.reason || !result.metadata?.trigger) return;
        this._service.replaceItem(
            result.metadata.trigger as unknown as Identity,
        );
    }

    /**
     * Edit existing action on active trigger
     * @param action Action to edit
     */
    public async editAction(
        action: TriggerActionsFunction | TriggerActionsEmail = null,
        template: System,
    ) {
        if (!template) return;
        const ref = this._dialog.open<
            unknown,
            TriggerActionModalData,
            TriggerActionModalComponent
        >(TriggerActionModalComponent, {
            data: {
                trigger: this.active_item,
                action,
                system: template,
            },
        });
        const result: DialogEvent<{ trigger: Trigger }> | null =
            (await waitForDialog(ref, 'done')) as DialogEvent<{
                trigger: Trigger;
            }> | null;
        if (!result?.reason || !result.metadata?.trigger) return;
        this._service.replaceItem(
            result.metadata.trigger as unknown as Identity,
        );
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
                icon: { type: 'icon', content: 'reorder' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        const actions: TriggerActionLists = triggerActions(this.active_item);
        if (type === 'function') {
            moveItemInArray(actions.functions, fst, snd);
        } else {
            moveItemInArray(actions.mailers, fst, snd);
        }
        details.loading(i18n('TRIGGERS.REORDER_CONFIRM_LOADING'));
        const resp = await ACTIONS.triggers
            .save({ ...this.active_item, actions })
            .catch((_) => _);
        details.close();
        if (!resp?.id) {
            return notifyError(
                i18n('TRIGGERS.REORDER_CONFIRM_ERROR', {
                    error: describeError(resp),
                }),
            );
        }
        this._service.replaceItem(resp as unknown as Identity);
        notifySuccess(i18n('TRIGGERS.REORDER_CONFIRM_SUCCESS'));
    }

    public async removeCondition(
        condition: TriggerConditionsComparison | TriggerConditionsTimeDependent,
    ) {
        const details = await openConfirmModal(
            {
                title: i18n('TRIGGERS.REMOVE_CONDITION_TITLE'),
                content: i18n('TRIGGERS.REMOVE_CONDITION_MSG'),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('TRIGGERS.REMOVE_CONDITION_LOADING'));
        const item = this.active_item;
        const conditions = triggerConditions(item);
        const list: unknown[] = (condition as TriggerConditionsTimeDependent)
            .type
            ? conditions.time_dependents
            : conditions.comparisons;
        const index = list.findIndex(
            (i) => JSON.stringify(i) === JSON.stringify(condition),
        );
        if (index < 0) {
            details.close();
            return notifyError(
                i18n('TRIGGERS.REMOVE_CONDITION_ERROR', {
                    error: 'Condition not found on trigger',
                }),
            );
        }
        list.splice(index, 1);
        const resp = await ACTIONS.triggers
            .save({ ...item, conditions })
            .catch((err) => err);
        details.close();
        if (!resp?.id) {
            return notifyError(
                i18n('TRIGGERS.REMOVE_CONDITION_ERROR', {
                    error: describeError(resp),
                }),
            );
        }
        this._service.replaceItem(resp as unknown as Identity);
        notifySuccess(i18n('TRIGGERS.REMOVE_CONDITION_SUCCESS'));
    }

    public async removeAction(
        action: TriggerActionsFunction | TriggerActionsEmail,
    ) {
        const details = await openConfirmModal(
            {
                title: i18n('TRIGGERS.REMOVE_ACTION_TITLE'),
                content: i18n('TRIGGERS.REMOVE_ACTION_MSG'),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('TRIGGERS.REMOVE_ACTION_LOADING'));
        const item = this.active_item;
        const actions = triggerActions(item);
        const index = (
            (action as TriggerActionsEmail).emails
                ? actions.mailers
                : actions.functions
        ).findIndex((i) => JSON.stringify(i) === JSON.stringify(action));
        if (index < 0) {
            details.close();
            return notifyError(
                i18n('TRIGGERS.REMOVE_ACTION_ERROR', {
                    error: 'Action not found on trigger',
                }),
            );
        }
        ((action as TriggerActionsEmail).emails
            ? actions.mailers
            : actions.functions
        ).splice(index, 1);
        const resp = await ACTIONS.triggers
            .save({ ...item, actions })
            .catch((err) => err);
        details.close();
        if (!resp?.id) {
            return notifyError(
                i18n('TRIGGERS.REMOVE_ACTION_ERROR', {
                    error: describeError(resp),
                }),
            );
        }
        this._service.replaceItem(resp as unknown as Identity);
        notifySuccess(i18n('TRIGGERS.REMOVE_ACTION_SUCCESS'));
    }

    public async removeTriggerFromParent(instance: TriggerInstance) {
        const type = (
            instance.zone_id ? i18n('ZONES.SINGULAR') : i18n('SYSTEMS.SINGULAR')
        ).toLowerCase();
        const details = await openConfirmModal(
            {
                title: i18n('TRIGGERS.REMOVE_INSTANCE_TITLE', { type }),
                content: i18n('TRIGGERS.REMOVE_INSTANCE_MSG', {
                    type,
                    // Instances have no name, so match the id the list shows
                    name: escapeHtml(
                        instance.name ||
                            instance.zone_id ||
                            instance.control_system_id,
                    ),
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('TRIGGERS.REMOVE_INSTANCE_LOADING', { type }));
        // Zone instances come from the zone's trigger list, so remove it there
        const remove = instance.zone_id
            ? async () => {
                  const zone = await zones
                      .show({ id: instance.zone_id })
                      .then(orThrow);
                  // Send only the trigger list, so that other changes to the zone stay
                  await zones
                      .update({
                          id: zone.id,
                          body: {
                              triggers: (zone.triggers || []).filter(
                                  (id) => id !== this.active_item.id,
                              ),
                          },
                      })
                      .then(orThrow);
              }
            : () =>
                  system_triggers
                      .destroy({
                          sys_id: instance.control_system_id,
                          trig_id: instance?.id || this.active_item.id,
                      })
                      .then(orThrow);
        let err: unknown = await remove().catch((_) => ({ error: _ }));
        details.close();
        if ((err as Record<string, unknown>)?.error) {
            err = (err as Record<string, unknown>).error;
            return notifyError(
                i18n('TRIGGERS.REMOVE_INSTANCE_ERROR', {
                    type,
                    error: describeError(err),
                }),
            );
        }
        this._change.set(Date.now());
        notifySuccess(i18n('TRIGGERS.REMOVE_INSTANCE_SUCCESS', { type }));
    }
}
