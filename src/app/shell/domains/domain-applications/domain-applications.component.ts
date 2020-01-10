import { Component, Input, OnChanges } from '@angular/core';
import { EngineDomain, EngineApplication } from '@acaprojects/ts-composer';
import { MatDialog } from '@angular/material/dialog';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import {
    ConfirmModalComponent,
    ConfirmModalData
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'domain-applications',
    templateUrl: './domain-applications.template.html',
    styleUrls: ['./domain-applications.styles.scss']
})
export class DomainApplicationsComponent extends BaseDirective implements OnChanges {
    /** Active domain */
    @Input() public item: EngineDomain;
    /** List of applications associated with the active domain */
    public application_list: EngineApplication[];

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadApplications();
        }
    }

    public loadApplications(offset: number = 0) {
        this._service.Applications.query({ owner: this.item.id, offset } as any).then(
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
    protected newApplication() {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new EngineApplication(this._service.Applications, {}),
                service: this._service.Applications
            }
        });
    }

    /**
     * Open the modal to create a new system
     */
    protected editApplication(item: EngineApplication) {
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
        }
    }

    protected deleteApplication(item: EngineApplication) {
        if (item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    height: 'auto',
                    width: '24em',
                    maxHeight: 'calc(100vh - 2em)',
                    maxWidth: 'calc(100vw - 2em)',
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
                                    `Error deleting application. Error: ${err}`
                                );
                            }
                        );
                    }
                })
            );
        }
    }
}
