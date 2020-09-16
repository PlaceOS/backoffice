import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceTrigger, PlaceSystem, querySystems, apiEndpoint, del } from '@placeos/ts-client';

import { DialogEvent, HashMap } from 'src/app/common/types';

import { BaseClass } from 'src/app/common/base.class';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { map } from 'rxjs/operators';
import { notifyError } from 'src/app/common/notifications';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'trigger-systems',
    templateUrl: './trigger-systems.template.html',
    styleUrls: ['./trigger-systems.styles.scss'],
})
export class TriggerSystemsComponent extends BaseClass {
    /** List of systems associated with the trigger */
    public system_trigger_list: PlaceSystem[] = [];
    /** Map of systems ids to connected status */
    public connected: HashMap<boolean> = {};

    public get item(): PlaceTrigger {
        return this._service.active_item as any;
    }

    constructor(private _dialog: MatDialog, private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadSystemTriggers();
        }))
    }

    public async loadSystemTriggers(offset: number = 0) {
        this.system_trigger_list = await querySystems({
            trigger_id: this.item.id,
            offset,
        } as any)
            .pipe(map((resp) => resp.data))
            .toPromise();
    }

    /**
     * Delete the trigger from system
     */
    public delete(trigger: PlaceTrigger) {
        if (trigger) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Remove trigger`,
                        content: `<p>Are you sure you want remove this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove from the system "${
                            trigger.system_name || ''
                        }"</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe(async (event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Removing trigger...';
                        await this.deleteTrigger(trigger).catch((err) => {
                            ref.componentInstance.loading = null;
                            notifyError(
                                `Error removing trigger. Error: ${JSON.stringify(
                                    err.response || err.message || err
                                )}`
                            );
                            throw err;
                        });
                        this.loadSystemTriggers();
                        ref.close();
                        this.unsub('delete_confirm');
                    }
                })
            );
        }
    }

    /**
     * Remove the trigger from it's associated system
     * @param trigger Trigger to remove
     */
    private deleteTrigger(trigger: PlaceTrigger) {
        return new Promise((resolve, reject) => {
            const url = `${apiEndpoint()}/systems/${trigger.system_id}/triggers/${trigger.id}`;
            del(url).subscribe(
                (_) => null,
                (_) => reject(_),
                () => resolve()
            );
        });
    }
}
