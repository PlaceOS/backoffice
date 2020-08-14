import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceTrigger,
    updateTrigger,
    addTrigger,
    querySystems,
    lastRequestTotal,
    removeTrigger,
    queryTriggers,
    showTrigger,
} from '@placeos/ts-client';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import {
    ConfirmModalData,
    ConfirmModalComponent,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';

@Component({
    selector: 'app-triggers',
    templateUrl: './triggers.template.html',
    styleUrls: ['./triggers.styles.scss'],
})
export class TriggersComponent extends BaseRootComponent<PlaceTrigger> implements OnInit {
    /** Number of system triggers */
    public system_count: number;

    public readonly name = 'triggers';
    /** Function to save systems */
    public readonly save_fn = (item: any) => item.id ? updateTrigger(item.id, item) : addTrigger(item);
    /** Function to query domains */
    public readonly query_fn = (q) => queryTriggers(q);
    /** Function to query domains */
    protected readonly show_fn = (id, q) => showTrigger(id, q);

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this._service.title = 'Triggers';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, trigger_id: this.item.id };
        // Get trigger count
        querySystems(query).subscribe(
            (list) => (this.system_count = lastRequestTotal('systems') || list.length || 0)
        );
    }

    /**
     * Open the modal to create a new trigger
     */
    protected newItem(copy: boolean = false) {
        if (this.modal_ref) {
            return;
        }
        this.modal_ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: copy
                    ? new PlaceTrigger({ ...this.item, id: '', name: `${this.item.name} (1)` })
                    : new PlaceTrigger(),
                name: 'Trigger',
                save: this.save_fn,
            },
        });
        this.subscription(
            'modal_events',
            this.modal_ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this._router.navigate(['/triggers', event.metadata.item.id]);
                }
            })
        );
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
                    name: 'Trigger',
                    save: this.save_fn,
                },
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
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'modal_events',
                this.modal_ref.componentInstance.event.subscribe(async (event: DialogEvent) => {
                    if (event.reason === 'done') {
                        this.modal_ref.componentInstance.loading = 'Deleting trigger...';
                        await removeTrigger(this.item.id)
                            .toPromise()
                            .catch((err) => {
                                this.modal_ref.componentInstance.loading = null;
                                this._service.notifyError(
                                    `Error deleting trigger. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
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
