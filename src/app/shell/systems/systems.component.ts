import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineSystem } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { MatDialog } from '@angular/material/dialog';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { ConfirmModalComponent, ConfirmModalData } from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss']
})
export class SystemsComponent extends BaseRootComponent<EngineSystem> {
    /** Number of triggers for the active system */
    public trigger_count: number;
    /** Number of devices for the active system */
    public device_count: number;
    /** Number of zones for the active system */
    public zone_count: number;

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Systems;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, sys_id: this.item.id };
        // Get trigger count
        this._service.SystemTriggers.query(query).then(
            () => (this.trigger_count = this._service.SystemTriggers.last_total)
        );
        // Get device count
        this.device_count = (this.item.modules || []).length;
        // Get zone count
        this.zone_count = (this.item.zones || []).length;
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
                item: new EngineSystem(this._service.Systems, {}),
                service: this._service.Systems
            }
        });
    }

    /**
     * Open the modal to create a new system
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
                    service: this._service.Systems
                }
            });
        }
    }

    protected delete() {
        if (this.item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(ConfirmModalComponent, {
                height: 'auto',
                width: '24em',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    title: `Delete system`,
                    content: `<p>Are you sure you want delete this system?</p><p>Deleting this will <strong>immediately</strong> delete modules that are not in another system</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                }
            });
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event: DialogEvent) => {
                console.log('Here', event);
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Deleting system...';
                    this.item.delete().then(() => {
                        this._service.notifySuccess(`Successfully deleted system "${this.item.name}".`);
                        this._router.navigate(['/systems']);
                        ref.close();
                        this.unsub('delete_confirm');
                    }, (err) => {
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error deleting system. Error: ${err}`);
                    });
                }
            }));
        }
    }
}
