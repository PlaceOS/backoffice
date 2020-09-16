import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
    PlaceDomain,
    PlaceApplication,
    updateApplication,
    addApplication,
    removeApplication,
    queryApplications,
    queryLDAPSources,
    queryOAuthSources,
    querySAMLSources,
} from '@placeos/ts-client';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent, HashMap } from 'src/app/shared/utilities/types.utilities';
import { copyToClipboard } from 'src/app/shared/utilities/general.utilities';
import { notifyError, notifySuccess, notifyInfo } from 'src/app/common/notifications';

import * as dayjs from 'dayjs';

@Component({
    selector: 'domain-applications',
    templateUrl: './domain-applications.template.html',
    styleUrls: ['./domain-applications.styles.scss'],
})
export class DomainApplicationsComponent extends BaseClass implements OnChanges {
    /** Active domain */
    @Input() public item: PlaceDomain;
    /** List of applications associated with the active domain */
    public application_list: PlaceApplication[];

    public show_secret: HashMap<boolean> = {};

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadApplications();
        }
    }

    public copySecret(item: PlaceApplication) {
        this.show_secret[item.id] = false;
        copyToClipboard(item.secret);
        notifyInfo('Copied client secret to clipboard');
    }

    public async loadApplications(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this.application_list = await queryApplications()
            .pipe(map((resp) => resp.data))
            .toPromise();
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
                item: new PlaceApplication({ owner_id: this.item.id }),
                name: 'Application',
                save: (item) => addApplication(item),
            },
        });
        this.subscription(
            'item-form',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.application_list = [...this.application_list, event.metadata.item];
                }
            })
        );
    }

    /**
     * Open the modal to create a new system
     */
    public editApplication(item: PlaceApplication) {
        if (this.item) {
            const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item,
                    name: 'Application',
                    save: (item) => updateApplication(item.id, item),
                },
            });
            this.subscription(
                'item-form',
                ref.componentInstance.event.subscribe((event) => {
                    if (event.reason === 'done') {
                        const index = this.application_list.findIndex(
                            (app) => app.id === event.metadata.item.id
                        );
                        if (index >= 0) {
                            this.application_list.splice(index, 1, event.metadata.item);
                            this.application_list = [...this.application_list];
                        }
                    }
                })
            );
        }
    }

    public deleteApplication(item: PlaceApplication) {
        if (item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete application`,
                        content: `<p>Are you sure you want delete the application ${item.name}?</p><p>Configuration will be <strong>immediately</strong> updated</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting application...';
                        removeApplication(item.id).subscribe(
                            () => {
                                notifySuccess(`Successfully deleted application "${item.name}".`);
                                this.loadApplications();
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            (err) => {
                                ref.componentInstance.loading = null;
                                notifyError(
                                    `Error deleting application. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
                                );
                            }
                        );
                    }
                })
            );
        }
    }
}
