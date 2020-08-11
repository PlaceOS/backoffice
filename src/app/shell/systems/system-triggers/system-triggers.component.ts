import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceSystem, PlaceTrigger, listSystemTriggers, updateTrigger, apiEndpoint, put, del, addSystemTrigger, queryTriggers } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import {
    SelectItemModalComponent,
    SelectItemModalData,
} from 'src/app/overlays/select-item-modal/select-item-modal.component';
import { DialogEvent, HashMap } from 'src/app/shared/utilities/types.utilities';
import {
    CONFIRM_METADATA,
    ConfirmModalComponent,
    ConfirmModalData,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { copyToClipboard } from 'src/app/shared/utilities/general.utilities';

export interface TriggerInstanceState {
    triggered: boolean;
    trigger_count: number;
    action_errors: number;
    comparison_errors: number;
    conditions: HashMap<boolean>;
}

@Component({
    selector: 'system-triggers',
    templateUrl: './system-triggers.template.html',
    styleUrls: ['./system-triggers.styles.scss'],
})
export class SystemTriggersComponent extends BaseDirective implements OnChanges, OnInit {
    /** Active System */
    @Input() public item: PlaceSystem;
    /** List of triggers associated with the active system */
    public trigger_list: PlaceTrigger[] = [];
    /** List of triggers associated with the active system */
    public filtered_triggers: PlaceTrigger[] = [];
    /** Filter string for listing of triggers */
    public search_str: string;
    /** Mapping of trigger instances to their current state */
    public trigger_state: HashMap<TriggerInstanceState> = {};
    /** Mapping of trigger instances to their condition state list */
    public comparisons: HashMap<string> = {};

    constructor(
        private _service: ApplicationService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe((item) => {
                this.item = item;
                this.loadSystemTriggers();
            })
        );
    }

    public ngOnChanges(changes: any): void {
        if (changes.item) {
            this.loadSystemTriggers();
        }
    }

    public loadSystemTriggers(offset: number = 0): void {
        if (!this.item) {
            return;
        }
        listSystemTriggers(this.item.id).subscribe(
            (list) => {
                this.trigger_list = list;
                this.filter(this.search_str);
            },
            () => null
        );
    }

    public filter(search: string = ''): void {
        const s = search.toLowerCase();
        this.filtered_triggers = this.trigger_list.filter((item) =>
            item.name.toLowerCase().includes(s)
        );
    }

    public updateComparisons(id: string): void {
        this.comparisons[id] = '';
        if (this.trigger_state[id]) {
            for (const key in this.trigger_state[id].conditions) {
                if (this.trigger_state[id].conditions.hasOwnProperty(key)) {
                    if (this.comparisons[id]) {
                        this.comparisons[id] += '\n';
                    }
                    this.comparisons[id] += `${key}: ${this.trigger_state[id].conditions[key]}`;
                }
            }
        }
    }

    /** Copy the generated webhook URL for the given trigger */
    public copyWebhookURL(trigger: PlaceTrigger) {
        copyToClipboard(
            `${location.origin}/api/engine/v2/webhook/${trigger.id}/notify?secret=${trigger.webhook_secret}`
        );
    }

    /**
     * Open the modal to create a new system
     */
    public editTrigger(trigger: PlaceTrigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: trigger,
                    name: 'Trigger',
                    save: (item) => updateTrigger(item.id, item),
                    external_save: true,
                },
            });
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'action') {
                        ref.componentInstance.loading = 'Saving trigger settings...';
                        const url = `${apiEndpoint()}/systems/${this.item.id}/triggers/${trigger.id}`;
                        put(url, trigger.toJSON()).subscribe(
                            () => null,
                            (err) => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(
                                    `Error updating trigger settings. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
                                );
                            },
                            () => {
                                this._service.notifySuccess(
                                    `Successfully updated trigger settings.`
                                );
                                ref.close();
                                this.unsub('delete_confirm');
                            }
                        );
                    }
                })
            );
        }
    }

    /**
     * Remove a trigger from the active system
     * @param trigger Trigger to remove
     */
    public deleteTrigger(trigger: PlaceTrigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Remove trigger`,
                        content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Removing trigger...';
                        const url = `${apiEndpoint()}/systems/${this.item.id}/triggers/${trigger.id}`;
                        del(url).subscribe(
                            () => null,
                            (err) => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(
                                    `Error removing trigger. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
                                );
                                this.trigger_list.splice(
                                    this.trigger_list.findIndex((item) => this.item.id === item.id),
                                    1
                                );
                                this.filter(this.search_str);
                            },
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted trigger "${this.item.name}".`
                                );
                                ref.close();
                                this.unsub('delete_confirm');
                            }
                        );
                    }
                })
            );
        }
    }

    /**
     * Open modal to select a trigger to add
     */
    public selectTriggerToAdd(): void {
        const ref = this._dialog.open<SelectItemModalComponent, SelectItemModalData>(
            SelectItemModalComponent,
            {
                height: 'auto',
                width: 'auto',
                data: {
                    service_name: 'Triggers',
                    query_fn: (_) => queryTriggers({ q: _ })
                },
            }
        );
        this.subscription(
            'dialog_events',
            ref.componentInstance.event.subscribe((event: DialogEvent) => {
                const item = ref.componentInstance.item;
                if (event.reason === 'action' && item) {
                    this.addTrigger(item);
                    ref.close();
                }
            })
        );
        ref.afterClosed().subscribe(() => this.unsub('dialog_events'));
    }

    /**
     * Add the selected trigger to the active system
     * @param trigger Trigger to add to system
     */
    private async addTrigger(trigger: PlaceTrigger): Promise<void> {
        const item = await addSystemTrigger(this.item.id, {
            control_system_id: this.item.id,
            enabled: true,
            important: false,
            trigger_id: trigger.id,
        }).toPromise();
        this.trigger_list.push(item);
        this.filter(this.search_str);
    }
}
