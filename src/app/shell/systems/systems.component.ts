import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    PlaceSystem,
    updateSystem,
    addSystem,
    removeSystem,
    listSystemTriggers,
    showMetadata,
    querySystems,
    showSystem,
} from '@placeos/ts-client';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { MatDialog } from '@angular/material/dialog';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss'],
})
export class SystemsComponent extends BaseRootComponent<PlaceSystem> {
    /** Number of triggers for the active system */
    public trigger_count: number;
    /** Number of devices for the active system */
    public device_count: number;
    /** Number of zones for the active system */
    public zone_count: number;
    /** Number of metadata fields for the active system */
    public metadata_count: number = 0;

    public readonly name = 'systems';
    /** Function to save systems */
    public readonly save_fn = (item: any) =>
        item.id ? updateSystem(item.id, item) : addSystem(item);
    /** Function to query systems */
    public readonly query_fn = (q) => querySystems(q);
    /** Function to query systems */
    protected readonly show_fn = (id, q) => showSystem(id, q);

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
        this._service.title = 'Systems';
    }

    protected async loadValues() {
        const query: any = { offset: 0, limit: 1, sys_id: this.item.id };
        // Get trigger count
        this.trigger_count = (await listSystemTriggers(this.item.id).toPromise()).total;
        // Get device count
        this.device_count = (this.item.modules || []).length;
        // Get zone count
        this.zone_count = (this.item.zones || []).length;
        // Get metadata
        const map = await showMetadata(this.item.id).toPromise();
        this.metadata_count = map.length;
    }

    /**
     * Open the modal to create a new system
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
                    ? new PlaceSystem({ ...this.item, id: '', name: `${this.item.name} (1)` })
                    : new PlaceSystem(),
                name: 'System',
                save: this.save_fn,
            },
        });
        this.subscription(
            'modal_events',
            this.modal_ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this._router.navigate(['/systems', event.metadata.item.id]);
                }
            })
        );
        this.modal_ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
            this.modal_ref = null;
        });
    }

    /**
     * Open the modal to create a new system
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
                    name: 'System',
                    save: this.save_fn,
                },
            });
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }

    protected deleteItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete system`,
                        content: `<p>Are you sure you want delete this system?</p><p>Deleting this will <strong>immediately</strong> delete modules that are not in another system</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'modal_events',
                this.modal_ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        this.modal_ref.componentInstance.loading = 'Deleting system...';
                        removeSystem(this.item.id).subscribe(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted system "${this.item.name}".`
                                );
                                this._service.set('BACKOFFICE.removed', this.item.id);
                                this._router.navigate(['/systems']);
                                this.modal_ref.close();
                            },
                            (err) => {
                                this.modal_ref.componentInstance.loading = null;
                                this._service.notifyError(
                                    `Error deleting system. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
                                );
                            }
                        );
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
