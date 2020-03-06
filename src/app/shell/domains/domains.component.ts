import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineDomain } from '@acaengine/ts-client';

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

@Component({
    selector: 'app-domains',
    templateUrl: './domains.template.html',
    styleUrls: ['./domains.styles.scss']
})
export class DomainsComponent extends BaseRootComponent<EngineDomain> {
    /** Number of triggers for the active system */
    public applications: number;
    /** Number of triggers for the active system */
    public auth_sources: number;
    /** Number of triggers for the active system */
    public user_count: number;

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Domains;
    }

    protected loadValues() {
        let query: any = { offset: 0, limit: 1, owner: this.item.id };
        // Get application count
        this._service.Applications.query(query).then(
            list => (this.applications = this._service.Applications.last_total || list.length || 0)
        );
        query = { offset: 0, limit: 1, authority_id: this.item.id };
        // Get auth source count
        // this._service.AuthSources.query(query).then(
        //     () => (this.auth_sources = this._service.AuthSources.last_total)
        // );
        // Get users count
        this._service.Users.query(query).then(
            list => (this.user_count = this._service.Users.last_total || list.length || 0)
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
                item: new EngineDomain(this._service.Domains, {}),
                service: this._service.Domains
            }
        });
        ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/domains', event.metadata.item.id]);
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
                    service: this._service.Domains
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
                        title: `Delete domain`,
                        content: `<p>Are you sure you want delete this domain?</p><p>The domain will be deleted <strong>immediately.</strong></p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting domain...';
                        this.item.delete().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted domain "${this.item.name}".`
                                );
                                this._router.navigate(['/users']);
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(`Error deleting domain. Error: ${err}`);
                            }
                        );
                    }
                })
            );
        }
    }
}
