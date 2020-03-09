import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EngineRepository } from '@placeos/ts-client';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { ConfirmModalData, ConfirmModalComponent, CONFIRM_METADATA } from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';

@Component({
    selector: 'app-repositories',
    templateUrl: './repositories.template.html',
    styleUrls: ['./repositories.styles.scss']
})
export class RepositoriesComponent extends BaseRootComponent<EngineRepository> {
    /** Number of drivers in the repository */
    public driver_count: number;

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Repositories;
    }

    protected loadValues() {
        const query: any = { offset: 0 };
        // Get repository count
        this._service.Repositories.listDrivers(this.item.id, query).then(
            (list) => (this.driver_count = list.length)
        );
    }

    /**
     * Open the modal to create a new repository
     */
    protected new() {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new EngineRepository(this._service.Repositories, {}),
                service: this._service.Repositories
            }
        });
        ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this._router.navigate(['/repositories', event.metadata.item.id]);
            }
        });
    }

    /**
     * Open the modal to create edit the active repository
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
                    service: this._service.Repositories
                }
            });
        }
    }

    /**
     * Delete the active repository
     */
    protected delete() {
        if (this.item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete repository`,
                        content: `<p>Are you sure you want delete this repository?</p><p>Deleting this repository will <strong>immediately</strong> remove it from all associated systems and zones</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe(async (event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting repository...';
                        await this.item.delete().catch(err => {
                            ref.componentInstance.loading = null;
                            this._service.notifyError(`Error deleting repository. Error: ${err.message || err}`);
                            throw err;
                        });
                        this._router.navigate(['/repositories']);
                        ref.close();
                        this.unsub('delete_confirm');
                    }
                })
            );
        }
    }
}
