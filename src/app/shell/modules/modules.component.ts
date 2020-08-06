import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PlaceModule, updateModule, addModule, removeModule, querySystems, lastRequestTotal } from '@placeos/ts-client';

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
    selector: 'app-modules',
    templateUrl: './modules.template.html',
    styleUrls: ['./modules.styles.scss']
})
export class ModulesComponent extends BaseRootComponent<PlaceModule> {
    /** Number of systems for the active device */
    public system_count: number;
    /** Whether the list of devices should show only the disconnected devices */
    public only_disconnected: boolean;

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
        this._service.title = 'Modules';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, module_id: this.item.id };
        // Get system count
        querySystems(query).toPromise().then((list) => {
            this.system_count = lastRequestTotal('systems') || list.length || 0;
        });
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
                item: copy ? new PlaceModule({ ...this.item, id: '', name: `${this.item.name} (1)` }) : new PlaceModule(),
                name: 'Module',
                save: (item) => item.id ? updateModule(item.id, item.toJSON()) : addModule(item.toJSON()),
            }
        });
        this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this._router.navigate(['/modules', event.metadata.item.id]);
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
                    name: 'Module',
                    save: (item) => item.id ? updateModule(item.id, item.toJSON()) : addModule(item.toJSON()),
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
                        title: `Delete module`,
                        content: `<p>Are you sure you want delete this module?</p><p>Deleting this will module <strong>immediately</strong> remove it from any system associated with it</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                this.modal_ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        this.modal_ref.componentInstance.loading = 'Deleting module...';
                        removeModule(this.item.id).toPromise().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted module "${this.item.name}".`
                                );
                                this._router.navigate(['/modules']);
                                this._service.set('BACKOFFICE.removed', this.item.id);
                                this.modal_ref.close();
                            },
                            err => {
                                this.modal_ref.componentInstance.loading = null;
                                this._service.notifyError(`Error deleting module. Error: ${JSON.stringify(err.response || err.message || err)}`);
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
