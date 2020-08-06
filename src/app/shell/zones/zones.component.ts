import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PlaceZone, updateZone, addZone, listZoneTriggers, querySystems, queryZones, lastRequestTotal, showMetadata, removeZone, showZone  } from '@placeos/ts-client';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'app-zones',
    templateUrl: './zones.template.html',
    styleUrls: ['./zones.styles.scss']
})
export class ZonesComponent extends BaseRootComponent<PlaceZone> {
    /** Number of systems associated with the active zone */
    public system_count: number;
    /** Number of triggers associated with the active zone */
    public trigger_count: number;
    /** Number of zones associated with the active zone */
    public child_count: number;
    /** Number of metadata properties associated with the active zone */
    public metadata_count: number;

    public readonly name = 'zones';
    /** Function to query domains */
    public readonly query_fn = (q) => queryZones(q);
    /** Function to query domains */
    protected readonly show_fn = (id, q) => showZone(id, q);

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
        this._service.title = 'Zones';
    }

    protected async loadValues() {
        // Get system count
        const query: any = { offset: 0, limit: 1, zone_id: this.item.id };
        let list: any[] = await querySystems(query).toPromise();
        this.system_count = lastRequestTotal('systems')  || list.length || 0;
        // Get trigger count
        const tquery: any = { offset: 0, limit: 1 };
        list = await listZoneTriggers(this.item.id, tquery).toPromise();
        this.trigger_count = list.length || 0;
        // Get child zone count
        const cquery: any = { offset: 0, limit: 1, parent: this.item.id };
        list = await queryZones(cquery).toPromise();
        this.child_count = lastRequestTotal('zones') || list.length || 0;
        // Get metadata
        const map = await showMetadata(this.item.id).toPromise();
        this.metadata_count = Object.keys(map).length;
    }

    /**
     * Open the modal to create a new system
     */
    protected newItem(copy: boolean = false) {
        if (this.modal_ref) { return; }
        this.modal_ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: copy ? new PlaceZone({ ...this.item, id: '', name: `${this.item.name} (1)` }) : new PlaceZone(),
                name: 'Zone',
                save: (item) => addZone(item),
            }
        });
        this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/zones', event.metadata.item.id]);
            }
        }));
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
                    name: 'Zone',
                    save: (item) => updateZone(item.id, item),
                }
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
                        title: `Delete zone`,
                        content: `<p>Are you sure you want delete this zone?</p><p>Deleting this zone will <strong>immediately</strong> remove systems without another zone</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'modal_events',
                this.modal_ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        this.modal_ref.componentInstance.loading = 'Deleting zone...';
                        removeZone(this.item.id).subscribe(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted zone "${this.item.name}".`
                                );
                                this._router.navigate(['/zones']);
                                this._service.set('BACKOFFICE.removed', this.item.id);
                                this.modal_ref.close();
                            },
                            err => {
                                this.modal_ref.componentInstance.loading = null;
                                this._service.notifyError(`Error deleting zone. Error: ${JSON.stringify(err.response || err.message || err)}`);
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
