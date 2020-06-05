import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EngineTrigger } from '@placeos/ts-client';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import {
    ConfirmModalData,
    ConfirmModalComponent,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';

@Component({
    selector: 'app-triggers',
    templateUrl: './triggers.template.html',
    styleUrls: ['./triggers.styles.scss']
})
export class TriggersComponent extends BaseRootComponent<EngineTrigger> implements OnInit {
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

    public ngOnInit(): void {
        super.ngOnInit();
        this._service.title = 'Triggers';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, trigger_id: this.item.id };
        // Get trigger count
        this._service.Systems.query(query).then(
            list =>
                (this.system_count = this._service.Systems.last_total || list.length || 0)
        );
    }

    /**
     * Open the modal to create a new trigger
     */
    protected newItem() {
        if (this.modal_ref) { return; }
        this.modal_ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new EngineTrigger(),
                service: this._service.Triggers
            }
        });
        this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/triggers', event.metadata.item.id]);
            }
        }));
        this.modal_ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
            this.modal_ref = null;
        });
    }

    /**
     * Open the modal to create edit the active trigger
     */
    protected editItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: this.item,
                    service: this._service.Triggers
                }
            });
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }

    /**
     * Delete the active trigger
     */
    protected deleteItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
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
                'modal_events',
                this.modal_ref.componentInstance.event.subscribe(async (event: DialogEvent) => {
                    if (event.reason === 'done') {
                        this.modal_ref.componentInstance.loading = 'Deleting trigger...';
                        await this.item.delete().catch(err => {
                            this.modal_ref.componentInstance.loading = null;
                            this._service.notifyError(
                                `Error deleting trigger. Error: ${JSON.stringify(err.response || err.message || err)}`
                            );
                            throw err;
                        });
                        this._router.navigate(['/triggers']);
                        this._service.set('BACKOFFICE.removed', this.item.id);
                        this.modal_ref.close();
                    }
                })
            );
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }
}
