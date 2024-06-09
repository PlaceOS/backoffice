import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
    PlaceMQTTBroker,
    updateBroker,
    addBroker,
    queryBrokers,
    removeBroker,
} from '@placeos/ts-client';
import { debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';

import { ItemCreateUpdateModalComponent } from 'apps/backoffice/src/app/overlays/item-modal/item-modal.component';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import {
    notifySuccess,
    notifyError,
} from 'apps/backoffice/src/app/common/notifications';
import { openConfirmModal } from 'apps/backoffice/src/app/common/general';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-brokers',
    template: `
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
                <div class="text-2xl">MQTT Brokers</div>
                <div class="flex items-center space-x-2">
                    <button btn matRipple (click)="newBroker()">
                        <div class="flex items-center">
                            <app-icon>add</app-icon>
                            <div class="text">Add Broker</div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <simple-table
                    class="min-w-[64rem] block text-sm"
                    [data]="brokers"
                    [columns]="[
                        { key: 'name', name: 'Name' },
                        {
                            key: 'auth_type',
                            name: 'Auth Type',
                            content: auth_type_template
                        },
                        { key: 'description', name: 'Description' },
                        { key: 'host', name: 'Host', content: mono_template },
                        {
                            key: 'port',
                            name: 'Port',
                            content: mono_template,
                            size: '6rem'
                        },
                        {
                            key: 'tls',
                            name: 'TLS',
                            content: tls_template,
                            size: '4rem'
                        },
                        {
                            key: 'filters',
                            name: 'Filters',
                            content: filters_template
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            content: actions_template,
                            sortable: false
                        }
                    ]"
                    [sortable]="true"
                    empty_message="No MQTT Brokers"
                ></simple-table>
            </div>
        </div>
        <ng-template #mono_template let-data="data">
            <div class="p-4 font-mono text-sm">{{ data }}</div>
        </ng-template>

        <ng-template #auth_type_template let-data="data">
            <div class="p-4" [ngSwitch]="data">
                <span *ngSwitchCase="0">Certificate</span>
                <span *ngSwitchCase="2">User Password</span>
                <span *ngSwitchDefault>No Auth</span>
            </div>
        </ng-template>
        <ng-template #tls_template let-data="data">
            <div
                *ngIf="data"
                class="h-8 w-8 bg-success rounded flex items-center justify-center mx-auto"
            >
                <app-icon class="text-xl text-success-content">lock</app-icon>
            </div>
            <div
                *ngIf="!data"
                class="h-8 w-8 bg-error rounded flex items-center justify-center mx-auto"
            >
                <app-icon class="text-xl text-error-content">
                    lock_open
                </app-icon>
            </div>
        </ng-template>
        <ng-template #filters_template let-data="data">
            <div class="p-4">
                <code *ngIf="data">{{ data | json }}</code>
                <span class="text-xs opacity-30" *ngIf="!data">
                    No Filters
                </span>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button icon matRipple (click)="editBroker(row)">
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    (click)="deleteBroker(row)"
                >
                    <app-icon>delete</app-icon>
                </button>
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
    private _change = new BehaviorSubject<number>(0);

    public readonly brokers = this._change.pipe(
        debounceTime(300),
        switchMap(() => queryBrokers()),
        map(({ data }) => data),
        shareReplay(1)
    );

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnInit() {
        this._change.next(Date.now());
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
                if (event.reason !== 'done') return;
                this._change.next(Date.now());
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
                if (event.reason !== 'done') return;
                this._change.next(Date.now());
            })
        );
    }

    public async deleteBroker(item: PlaceMQTTBroker): Promise<void> {
        if (item) {
            const details = await openConfirmModal(
                {
                    title: `Delete MQTT Broker`,
                    content: `<p>Are you sure you want delete this boker?</p><p>The broker will be deleted <strong>immediately.</strong></p>`,
                    icon: { type: 'icon', content: 'delete' },
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
            this._change.next(Date.now());
        }
    }
}
