import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PlaceMQTTBroker, updateBroker, addBroker, queryBrokers, removeBroker } from '@placeos/ts-client';

import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'app-brokers',
    templateUrl: './brokers.component.html',
    styleUrls: ['./brokers.component.scss'],
})
export class AdminBrokersComponent extends BaseDirective implements OnInit {
    public brokers: PlaceMQTTBroker[] = [];

    constructor(
        private _service: ApplicationService,
        private _dialog: MatDialog
    ) {
        super();
    }

    ngOnInit() {
        this.loadBrokers();
    }

    public newBroker(): void {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new PlaceMQTTBroker(),
                name: 'Broker',
                save: (item) => addBroker(item),
            },
        });
        this.subscription(
            'modal_events',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.loadBrokers();
                }
            })
        );
    }

    public editBroker(item: PlaceMQTTBroker): void {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item,
                name: 'Broker',
                save: (item) => updateBroker(item.id, item),
            },
        });
        this.subscription(
            'modal_events',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.loadBrokers();
                }
            })
        );
    }

    public deleteBroker(item: PlaceMQTTBroker): void {
        if (item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete MQTT Broker`,
                        content: `<p>Are you sure you want delete this boker?</p><p>The broker will be deleted <strong>immediately.</strong></p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting broker...';
                        removeBroker(item.id).subscribe(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted broker "${item.name}".`
                                );
                                this.loadBrokers();
                                ref.close();
                            },
                            (err) => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(
                                    `Error deleting broker. Error: ${JSON.stringify(
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

    private async loadBrokers() {
        const brokers = await queryBrokers().toPromise();
        this.brokers = brokers;
    }
}
