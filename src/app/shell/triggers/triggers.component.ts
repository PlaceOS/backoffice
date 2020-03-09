import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EngineTrigger } from '@placeos/ts-client';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { ConfirmModalData, ConfirmModalComponent, CONFIRM_METADATA } from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';

@Component({
    selector: 'app-triggers',
    templateUrl: './triggers.template.html',
    styleUrls: ['./triggers.styles.scss']
})
export class TriggersComponent extends BaseRootComponent<EngineTrigger> {
    /** Number of system triggers */
    public system_count: number;

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Triggers;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, trigger_id: this.item.id };
        const q = `total_${toQueryString(query)}`;
        // Get trigger count
        this._service.SystemTriggers.query(query).then(
            (list) => (this.system_count = this._service.SystemTriggers.last_total || list.length || 0)
        );
    }

    /**
     * Open the modal to create a new trigger
     */
    protected new() {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new EngineTrigger(this._service.Triggers, {}),
                service: this._service.Triggers
            }
        });
        ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this._router.navigate(['/triggers', event.metadata.item.id]);
            }
        });
    }

    /**
     * Open the modal to create edit the active trigger
     */
    protected edit() {
        if (this.item) {
            const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: this.item,
                    service: this._service.Triggers
                }
            });
        }
    }

    /**
     * Delete the active trigger
     */
    protected delete() {
        if (this.item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete trigger`,
                        content: `<p>Are you sure you want delete this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove it from all associated systems and zones</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe(async (event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting trigger...';
                        await this.item.delete().catch(err => {
                            ref.componentInstance.loading = null;
                            this._service.notifyError(`Error deleting trigger. Error: ${err.message || err}`);
                            throw err;
                        });
                        this._router.navigate(['/triggers']);
                        ref.close();
                        this.unsub('delete_confirm');
                    }
                })
            );
        }
    }
}
