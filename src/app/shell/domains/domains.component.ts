import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceDomain, updateDomain, addDomain, removeDomain, queryApplications, queryUsers, lastRequestTotal, queryDomains, showDomain } from '@placeos/ts-client';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { MatDialog } from '@angular/material/dialog';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import * as dayjs from 'dayjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-domains',
    templateUrl: './domains.template.html',
    styleUrls: ['./domains.styles.scss']
})
export class DomainsComponent extends BaseRootComponent<PlaceDomain> {
    /** Number of triggers for the active system */
    public applications: number;
    /** Number of triggers for the active system */
    public auth_sources: number;
    /** Number of triggers for the active system */
    public user_count: number;

    public readonly name = 'domains';
    /** Function to save domains */
    public readonly save_fn = (item: any) => item.id ? updateDomain(item.id, item) : addDomain(item);
    /** Function to query domains */
    public readonly query_fn = (q) => queryDomains(q);
    /** Function to query domains */
    protected readonly show_fn = (id, q) => showDomain(id, q);

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
        this._service.set('APP_LIST_CHANGE', dayjs().valueOf());
        this.subscription('changes',
        this._service.listen('APP_LIST_CHANGE').subscribe(() => {
            this.loadValues();
        }))
        this._service.title = 'Domains';
    }

    protected async loadValues() {
        if(!this.item){ return; }
        let query: any = { offset: 0, limit: 1, owner: this.item.id };
        // Get application count
        this.applications = (await queryApplications(query).toPromise()).total;
        query = { offset: 0, limit: 1, authority_id: this.item.id };
        // Get auth source count
        // this._service.AuthSources.query(query).then(
        //     () => (this.auth_sources = this._service.AuthSources.last_total)
        // );
        // Get users count
        this.user_count = (await queryUsers(query).toPromise()).total
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
                item: copy ? new PlaceDomain({ ...this.item, id: '', name: `${this.item.name} (1)` }) : new PlaceDomain(),
                name: 'Domain',
                save: this.save_fn,
            }
        });
        this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/domains', event.metadata.item.id]);
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
                    name: 'Broker',
                    save:  this.save_fn,
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
                        title: `Delete domain`,
                        content: `<p>Are you sure you want delete this domain?</p><p>The domain will be deleted <strong>immediately.</strong></p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                this.modal_ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        this.modal_ref.componentInstance.loading = 'Deleting domain...';
                        removeDomain(this.item.id).subscribe(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted domain "${this.item.name}".`
                                );
                                this._router.navigate(['/users']);
                                this._service.set('BACKOFFICE.removed', this.item.id);
                                this.modal_ref.close();
                            },
                            err => {
                                this.modal_ref.componentInstance.loading = null;
                                this._service.notifyError(`Error deleting domain. Error: ${JSON.stringify(err.response || err.message || err)}`);
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
