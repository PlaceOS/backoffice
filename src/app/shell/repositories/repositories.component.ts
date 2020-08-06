import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PlaceRepository, PlaceRepositoryType, updateRepository, addRepository, removeRepository, listRepositoryDrivers, queryRepositories, showRepository } from '@placeos/ts-client';

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
    selector: 'app-repositories',
    templateUrl: './repositories.template.html',
    styleUrls: ['./repositories.styles.scss']
})
export class RepositoriesComponent extends BaseRootComponent<PlaceRepository> {
    /** Number of drivers in the repository */
    public driver_count: number;

    public readonly name = 'repositories';
    /** Function to query domains */
    public readonly query_fn = (q) => queryRepositories(q);
    /** Function to query domains */
    protected readonly show_fn = (id, q) => showRepository(id, q);

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
        this._service.title = 'Repositories';
    }

    protected loadValues() {
        const query: any = { offset: 0 };
        if (this.item.type === PlaceRepositoryType.Driver) {
            // Get driver count for repository
            listRepositoryDrivers(this.item.id, query).subscribe(
                list => (this.driver_count = list.length)
            );
        } else {
            this.driver_count = -1;
        }
    }

    /**
     * Open the modal to create a new repository
     */
    protected newItem(copy: boolean = false) {
        if (this.modal_ref) { return; }
        this.modal_ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: copy ? new PlaceRepository({ ...this.item, id: '', name: `${this.item.name} (1)` }) : new PlaceRepository(),
                name: 'Repository',
                save: (item) => item.id ? updateRepository(item.id, item.toJSON()) : addRepository(item.toJSON()),
            }
        });
        this.subscription('modal_event', this.modal_ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/repositories', event.metadata.item.id]);
            }
        }));
        this.modal_ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
            this.modal_ref = null;
        });
    }

    /**
     * Open the modal to create edit the active repository
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
                    name: 'Repository',
                    save: (item) => item.id ? updateRepository(item.id, item.toJSON()) : addRepository(item.toJSON()),
                }
            });
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }

    /**
     * Delete the active repository
     */
    protected deleteItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
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
                'modal_events',
                this.modal_ref.componentInstance.event.subscribe(async (event: DialogEvent) => {
                    if (event.reason === 'done') {
                        this.modal_ref.componentInstance.loading = 'Deleting repository...';
                        await removeRepository(this.item.id).toPromise().catch(err => {
                            this.modal_ref.componentInstance.loading = null;
                            this._service.notifyError(
                                `Error deleting repository. Error: ${JSON.stringify(err.response || err.message || err)}`
                            );
                            throw err;
                        });
                        this._service.set('BACKOFFICE.removed', this.item.id);
                        this._router.navigate(['/repositories']);
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
