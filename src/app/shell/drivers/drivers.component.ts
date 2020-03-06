import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EngineDriver } from '@acaengine/ts-client';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.template.html',
    styleUrls: ['./drivers.styles.scss']
})
export class DriversComponent extends BaseRootComponent<EngineDriver> {
    /** Number of devices for the active system */
    public device_count: number;

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Drivers;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, dependency_id: this.item.id };
        this._service.Modules.query(query).then(list => {
            this.device_count = this._service.Modules.last_total || list.length || 0;
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
                item: new EngineDriver(this._service.Drivers, { name: '', module_name: '' }),
                service: this._service.Drivers
            }
        });
        ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/drivers', event.metadata.item.id]);
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
                    service: this._service.Drivers
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
                        title: `Delete driver`,
                        content: `<p>Are you sure you want delete this driver?</p><p>All devices that rely on this driver will be <strong>immediately</strong> removed.</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting driver...';
                        this.item.delete().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted driver "${this.item.name}".`
                                );
                                this._router.navigate(['/drivers']);
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(`Error deleting driver. Error: ${err}`);
                            }
                        );
                    }
                })
            );
        }
    }
}
