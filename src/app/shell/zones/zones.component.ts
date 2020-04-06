import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EngineZone } from '@placeos/ts-client';

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
export class ZonesComponent extends BaseRootComponent<EngineZone> {
    /** Number of systems associated with the active zone */
    public system_count: number;
    /** Number of triggers associated with the active zone */
    public trigger_count: number;
    /** Number of zones associated with the active zone */
    public child_count: number;
    /** Number of metadata properties associated with the active zone */
    public metadata_count: number;

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Zones;
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this._service.title = 'Zones';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, zone_id: this.item.id };
        // Get system count
        this._service.Systems.query(query).then(
            list => (this.system_count = this._service.Systems.last_total || list.length || 0)
        );
        const tquery: any = { offset: 0, limit: 1, zone_id: this.item.id };
        // Get trigger count
        this._service.Triggers.query(tquery).then(
            list =>
                (this.trigger_count = this._service.Triggers.last_total || list.length || 0)
        );
        const cquery: any = { offset: 0, limit: 1, parent: this.item.id };
        // Get child zone count
        this._service.Zones.query(cquery).then(
            list =>
                (this.child_count = this._service.Zones.last_total || list.length || 0)
        );
        // Get metadata
        this._service.Zones.listMetadata(this.item.id).then(
            map => this.metadata_count = Object.keys(map).length
        );
    }

    /**
     * Open the modal to create a new system
     */
    protected newItem() {
        if (this.modal_ref) { return; }
        this.modal_ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new EngineZone(this._service.Zones, {}),
                service: this._service.Zones
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
                    service: this._service.Zones
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
                        this.item.delete().then(
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
                                this._service.notifyError(`Error deleting zone. Error: ${err}`);
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
