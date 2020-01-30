import { Component, Input, OnChanges } from '@angular/core';
import { EngineZone, EngineTrigger } from '@acaengine/ts-client';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { unique } from 'src/app/shared/utilities/general.utilities';
import { MatDialog } from '@angular/material/dialog';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import {
    SelectItemModalComponent,
    SelectItemModalData
} from 'src/app/overlays/select-item-modal/select-item-modal.component';

@Component({
    selector: 'zone-triggers',
    templateUrl: './zone-triggers.template.html',
    styleUrls: ['./zone-triggers.styles.scss']
})
export class ZoneTriggersComponent extends BaseDirective implements OnChanges {
    @Input() public item: EngineZone;

    public model: any = {};
    /** Filter string for zone list */
    public search_str: string;

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        this._service.SystemTriggers.query({ zone_id: this.item.id, offset } as any).then(
            list => {
                this.model.triggers = list;
            },
            () => null
        );
    }

    /**
     * Remove a trigger from the active system
     * @param trigger Trigger to remove
     */
    public deleteTrigger(trigger: EngineTrigger) {
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
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Removing trigger...';
                        const triggers = [...this.item.triggers];
                        triggers.splice(index, 1);
                        this.item.storePendingChange('triggers', triggers);
                        this.item.save().then(
                            () => this._service.notifySuccess('Sucessfully removed trigger'),
                            err =>
                                this._service.notifyError(
                                    `Error removing trigger. Error: ${err.message || err}`
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
                    service_name: 'Triggers'
                }
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
    private addTrigger(trigger: EngineTrigger): void {
        const triggers = unique(this.item.triggers.concat(trigger.id));
        console.log('Triggers:', triggers, this.item.triggers);
        this.item.storePendingChange('triggers', triggers);
        this.item.save().then(
            () => this._service.notifySuccess('Sucessfully added trigger'),
            err => this._service.notifyError(`Error adding trigger. Error: ${err.message || err}`)
        );
    }
}
