import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
    PlaceMQTTBroker,
    updateBroker,
    addBroker,
    queryBrokers,
    removeBroker,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { ItemCreateUpdateModalComponent } from 'apps/backoffice/src/app/overlays/item-modal/item-modal.component';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import {
    notifySuccess,
    notifyError,
} from 'apps/backoffice/src/app/common/notifications';
import { openConfirmModal } from 'apps/backoffice/src/app/common/general';

@Component({
    selector: 'app-brokers',
    template: `
        <button btn class="my-4" (click)="newBroker()">
            <div class="flex items-center">
                <app-icon className="backoffice-plus"></app-icon>
                <div class="text">Add Broker</div>
            </div>
        </button>
        <div class="overflow-auto">
            <div
                role="table"
                *ngIf="brokers && brokers.length; else load_state"
                class="min-w-[52rem]"
            >
                <div table-head>
                    <div class="w-32 p-2">Name</div>
                    <div class="w-24 p-2">Auth Type</div>
                    <div class="flex-1 p-2">Description</div>
                    <div class="w-32 p-2 truncate">Host</div>
                    <div class="w-16 p-2">Port</div>
                    <div class="w-16 p-2">TLS</div>
                    <div class="w-32 p-2">Filters</div>
                    <div class="w-24 p-2"></div>
                </div>
                <div table-body>
                    <div table-row *ngFor="let item of brokers">
                        <div class="w-32 p-2">{{ item.name }}</div>
                        <div class="w-24 p-2">
                            { item.auth_type, select, 0 { Certificate }, 2 {
                            User Password }, other { No Auth }}
                        </div>
                        <div class="flex-1 p-2">{{ item.description }}</div>
                        <div class="w-32 p-2 truncate">{{ item.host }}</div>
                        <div class="w-16 p-2">{{ item.port }}</div>
                        <div class="w-16 p-2">
                            { item.tls, select, true { Yes }, false { No } }
                        </div>
                        <div class="w-32 p-2">{{ item.filters | json }}</div>
                        <div class="w-24 p-2 flex items-center">
                            <button btn icon (click)="editBroker(item)">
                                <app-icon
                                    [icon]="{ class: 'backoffice-edit' }"
                                ></app-icon>
                            </button>
                            <button btn icon (click)="deleteBroker(item)">
                                <app-icon
                                    [icon]="{ class: 'backoffice-trash' }"
                                ></app-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div class="flex flex-col items-center">
                <p>No Brokers</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
            }
        `,
    ],
})
export class AdminBrokersComponent extends AsyncHandler implements OnInit {
    public brokers: PlaceMQTTBroker[] = [];

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnInit() {
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

    public async deleteBroker(item: PlaceMQTTBroker): Promise<void> {
        if (item) {
            const details = await openConfirmModal(
                {
                    title: `Delete MQTT Broker`,
                    content: `<p>Are you sure you want delete this boker?</p><p>The broker will be deleted <strong>immediately.</strong></p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                },
                this._dialog
            );
            if (!details) return;
            details.loading('Deleting broker...');
            const err = await removeBroker(item.id)
                .toPromise()
                .catch((_) => _);
            details.close();
            if (err)
                return notifyError(
                    `Error deleting broker. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
            notifySuccess(`Successfully deleted broker "${item.name}".`);
            this.loadBrokers();
        }
    }

    private async loadBrokers() {
        const brokers = await queryBrokers()
            .pipe(map((resp) => resp.data))
            .toPromise();
        this.brokers = brokers;
    }
}
