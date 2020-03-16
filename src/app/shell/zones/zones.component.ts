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
    }

    /**
     * Open the modal to create a new system
     */
    protected new() {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new EngineZone(this._service.Zones, {}),
                service: this._service.Zones
            }
        });
        ref.componentInstance.event.subscribe(event => {
            console.log('Event:', event);
            if (event.reason === 'done') {
                this._router.navigate(['/zones', event.metadata.item.id]);
            }
        });
    }

    /**
     * Open the modal to create a new system
     */
    protected edit() {
        if (this.item) {
            this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: this.item,
                    service: this._service.Zones
                }
            });
        }
    }

    protected delete() {
        if (this.item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
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
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting device...';
                        this.item.delete().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted device "${this.item.name}".`
                                );
                                this._router.navigate(['/zones']);
                                this._service.set('BACKOFFICE.removed', this.item.id);
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(`Error deleting device. Error: ${err}`);
                            }
                        );
                    }
                })
            );
        }
    }
}
