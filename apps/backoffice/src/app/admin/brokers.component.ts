import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
    addBroker,
    PlaceMQTTBroker,
    queryBrokers,
    removeBroker,
    updateBroker,
} from '@placeos/ts-client';
import { debounceTime, map, shareReplay, switchMap, tap } from 'rxjs/operators';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { openConfirmModal } from 'apps/backoffice/src/app/common/general';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { ItemCreateUpdateModalComponent } from 'apps/backoffice/src/app/overlays/item-modal.component';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-brokers',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">
                    {{ 'ADMIN.BROKERS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button btn matRipple (click)="newBroker()">
                        <div class="flex items-center">
                            <app-icon class="text-2xl">add</app-icon>
                            <div class="text">
                                {{ 'ADMIN.BROKERS_ADD' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[64rem] text-sm"
                    [data]="brokers"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'auth_type',
                            name: 'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate,
                            content: auth_type_template,
                        },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                        },
                        {
                            key: 'host',
                            name: 'ADMIN.BROKERS_FIELD_HOST' | translate,
                            content: mono_template,
                        },
                        {
                            key: 'port',
                            name: 'ADMIN.BROKERS_FIELD_PORT' | translate,
                            content: mono_template,
                            size: '6rem',
                        },
                        {
                            key: 'tls',
                            name: 'ADMIN.BROKERS_FIELD_TLS' | translate,
                            content: tls_template,
                            size: '4rem',
                        },
                        {
                            key: 'filters',
                            name: 'ADMIN.BROKERS_FIELD_FILTERS' | translate,
                            content: filters_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.BROKER_LIST_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #mono_template let-data="data">
            <div class="p-4 font-mono text-sm">{{ data }}</div>
        </ng-template>

        <ng-template #auth_type_template let-data="data">
            <div class="p-4">
                @switch (data) {
                    @case (0) {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_CERT' | translate
                        }}</span>
                    }
                    @case (2) {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_PASS' | translate
                        }}</span>
                    }
                    @default {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_NONE' | translate
                        }}</span>
                    }
                }
            </div>
        </ng-template>
        <ng-template #tls_template let-data="data">
            @if (data) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success"
                >
                    <app-icon class="text-xl text-success-content"
                        >lock</app-icon
                    >
                </div>
            }
            @if (!data) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-error"
                >
                    <app-icon class="text-xl text-error-content">
                        lock_open
                    </app-icon>
                </div>
            }
        </ng-template>
        <ng-template #filters_template let-data="data">
            <div class="p-4">
                @if (data) {
                    <code>{{ data | json }}</code>
                }
                @if (!data) {
                    <span class="text-xs opacity-30">
                        {{ 'ADMIN.BROKERS_FILTERS_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_EDIT' | translate"
                    (click)="editBroker(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_REMOVE' | translate"
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
    standalone: false,
})
export class AdminBrokersComponent extends AsyncHandler implements OnInit {
    private _change = new BehaviorSubject<number>(0);
    public loading = false;

    public readonly brokers = this._change.pipe(
        debounceTime(300),
        switchMap(() => {
            this.loading = true;
            return queryBrokers();
        }),
        map(({ data }) => data),
        tap(() => (this.loading = false)),
        shareReplay(1),
    );

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnInit() {
        this._change.next(Date.now());
    }

    public newBroker(): void {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            data: {
                item: new PlaceMQTTBroker(),
                name: 'ADMIN.BROKERS',
                save: (item) => addBroker(item),
            },
        });
        this.subscription(
            'modal_events',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason !== 'done') return;
                this._change.next(Date.now());
            }),
        );
    }

    public editBroker(item: PlaceMQTTBroker): void {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
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
            }),
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
                this._dialog,
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
                        err.response || err.message || err,
                    )}`,
                );
            notifySuccess(`Successfully deleted broker "${item.name}".`);
            this._change.next(Date.now());
        }
    }
}
