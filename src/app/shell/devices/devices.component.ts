import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EngineModule } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { ConfirmModalComponent, ConfirmModalData } from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.template.html',
    styleUrls: ['./devices.styles.scss']
})
export class DevicesComponent extends BaseRootComponent<EngineModule> {
    /** Number of systems for the active device */
    public system_count: number;

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Modules;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, module_id: this.item.id };
        // Get system count
        this._service.Systems.query(query).then(() => {
            this.system_count = this._service.Systems.last_total;
        });
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
                item: new EngineModule(this._service.Modules, {}),
                service: this._service.Modules
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
                    title: `Delete device`,
                    content: `<p>Are you sure you want delete this deice?</p><p>Deleting this will <strong>immediately</strong> remove this device from any system it is associated with</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                }
            });
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event: DialogEvent) => {
                console.log('Here', event);
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Deleting device...';
                    this.item.delete().then(() => {
                        this._service.notifySuccess(`Successfully deleted device "${this.item.name}".`);
                        this._router.navigate(['/modules']);
                        ref.close();
                        this.unsub('delete_confirm');
                    }, (err) => {
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error deleting device. Error: ${err}`);
                    });
                }
            }));
        }
    }
}
