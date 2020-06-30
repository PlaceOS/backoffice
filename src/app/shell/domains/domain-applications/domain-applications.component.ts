import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EngineDomain, EngineApplication } from '@placeos/ts-client';
import { MatDialog } from '@angular/material/dialog';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent, HashMap } from 'src/app/shared/utilities/types.utilities';

import * as dayjs from 'dayjs';
import { copyToClipboard } from 'src/app/shared/utilities/general.utilities';

@Component({
    selector: 'domain-applications',
    templateUrl: './domain-applications.template.html',
    styleUrls: ['./domain-applications.styles.scss']
})
export class DomainApplicationsComponent extends BaseDirective implements OnChanges, OnInit {
    /** Active domain */
    @Input() public item: EngineDomain;
    /** List of applications associated with the active domain */
    public application_list: EngineApplication[];

    public show_secret: HashMap<boolean> = {};

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
                this.item = item;
                this.loadApplications();
            })
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadApplications();
        }
    }

    public copySecret(item: EngineApplication) {
        this.show_secret[item.id] = false;
        copyToClipboard(item.secret);
        this._service.notifyInfo('Copied client secret to clipboard');
    }

    public loadApplications(offset: number = 0) {
        if (!this.item) { return; }
        this._service.Applications.query({ owner_id: this.item.id, offset } as any).then(
            list => {
                if (!offset) {
                    this.application_list = [];
                }
                for (const item of list || []) {
                    let found = false;
                    for (const i of this.application_list) {
                        if (i.id === item.id) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        this.application_list.push(item);
                    }
                }
            },
            () => null
        );
    }
    /**
     * Open the modal to create a new system
     */
    public newApplication() {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new EngineApplication(),
                service: this._service.Applications
            }
        });
        this.subscription('item-form', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.application_list = [...this.application_list, event.metadata.item];
                this._service.set('APP_LIST_CHANGE', dayjs().valueOf());
            }
        }));
    }

    /**
     * Open the modal to create a new system
     */
    public editApplication(item: EngineApplication) {
        if (this.item) {
            const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item,
                    service: this._service.Applications
                }
            });
            this.subscription('item-form', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    const index = this.application_list.findIndex(app => app.id === event.metadata.item.id);
                    if (index >= 0) {
                        this.application_list.splice(index, 1, event.metadata.item);
                        this.application_list = [...this.application_list];
                    }
                }
            }));
        }
    }

    public deleteApplication(item: EngineApplication) {
        if (item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete application`,
                        content: `<p>Are you sure you want delete the application ${item.name}?</p><p>Configuration will be <strong>immediately</strong> updated</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting application...';
                        item.delete().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted application "${item.name}".`
                                );
                                this.loadApplications();
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(
                                    `Error deleting application. Error: ${JSON.stringify(err.response || err.message || err)}`
                                );
                            }
                        );
                    }
                })
            );
        }
    }
}
