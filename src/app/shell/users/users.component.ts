import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineUser } from '@placeos/ts-client';

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
    selector: 'app-users',
    templateUrl: './users.template.html',
    styleUrls: ['./users.styles.scss']
})
export class UsersComponent extends BaseRootComponent<EngineUser> {
    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Users as any;
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this._service.title = 'Users';
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
                item: copy ? new EngineUser({ ...this.item, id: '', name: `${this.item.name} (1)` }) : new EngineUser(),
                service: this._service.Users
            }
        });
        this.modal_ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/users', event.metadata.item.id]);
            }
        });
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
                    service: this._service.Users
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
                        title: `Delete user`,
                        content: `<p>Are you sure you want delete this user?</p><p>The user will be removed from the system within 24 hours</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                this.modal_ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        this.modal_ref.componentInstance.loading = 'Deleting user...';
                        this.item.delete().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted user "${this.item.name}".`
                                );
                                this._router.navigate(['/users']);
                                this._service.set('BACKOFFICE.removed', this.item.id);
                                this.modal_ref.close();
                            },
                            err => {
                                this.modal_ref.componentInstance.loading = null;
                                this._service.notifyError(`Error deleting user. Error: ${JSON.stringify(err.response || err.message || err)}`);
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
