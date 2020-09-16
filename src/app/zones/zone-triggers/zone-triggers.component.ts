import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceZone,
    PlaceTrigger,
    updateZone,
    listZoneTriggers,
    queryTriggers,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import {
    SelectItemModalComponent,
    SelectItemModalData,
} from 'src/app/overlays/select-item-modal/select-item-modal.component';
import { BaseClass } from 'src/app/common/base.class';
import { unique } from 'src/app/common/general';
import { DialogEvent } from 'src/app/common/types';
import { notifySuccess, notifyError } from 'src/app/common/notifications';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'zone-triggers',
    templateUrl: './zone-triggers.template.html',
    styleUrls: ['./zone-triggers.styles.scss'],
})
export class ZoneTriggersComponent extends BaseClass {
    /** List of triggers associated with the zone */
    public triggers: PlaceTrigger[] = [];
    /** Filter string for zone list */
    public search_str: string;

    public get item(): PlaceZone {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadZoneTriggers();
        }))
    }

    public loadZoneTriggers(offset: number = 0) {
        listZoneTriggers(this.item.id)
            .pipe(map((resp) => resp.data))
            .subscribe(
                (list) => {
                    this.triggers = list;
                },
                () => null
            );
    }

    /**
     * Remove a trigger from the active system
     * @param trigger Trigger to remove
     */
    public deleteTrigger(trigger: PlaceTrigger) {
        if (this.item && trigger) {
            const index = this.item.triggers.indexOf(trigger.id);
            if (index < 0) {
                return;
            }
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
                        const triggers = [...this.item.triggers];
                        triggers.splice(index, 1);
                        updateZone(this.item.id, { ...this.item, triggers }).subscribe(
                            () => notifySuccess('Sucessfully removed trigger'),
                            (err) =>
                                notifyError(
                                    `Error removing trigger. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
                                )
                        );
                        ref.close();
                        this.unsub('delete_confirm');
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
                    query_fn: (_) => queryTriggers({ q: _ }).pipe(map((resp) => resp.data)),
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
    private addTrigger(trigger: PlaceTrigger): void {
        const triggers = unique(this.item.triggers.concat(trigger.id));
        updateZone(this.item.id, { ...this.item, triggers }).subscribe(
            () => notifySuccess('Sucessfully added trigger'),
            (err) =>
                notifyError(
                    `Error adding trigger. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                )
        );
    }
}
