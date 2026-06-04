import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    addBroker,
    PlaceMQTTBroker,
    queryBrokers,
    removeBroker,
    updateBroker,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncHandler } from '../common/async-handler.class';
import { notifyError, notifySuccess } from '../common/notifications';
import { FormModalComponent } from '../common/types';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { BrokerFormComponent } from './broker-form.component';

@Component({
    selector: 'app-brokers',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.BROKERS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button btn matRipple (click)="newBroker()">
                        <div class="flex items-center">
                            <icon class="text-2xl">add</icon>
                            <div class="text">
                                {{ 'ADMIN.BROKERS_ADD' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="brokers()"
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
                    class="bg-success mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-success-content text-xl">lock</icon>
                </div>
            }
            @if (!data) {
                <div
                    class="bg-error mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-error-content text-xl"> lock_open </icon>
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
                    default
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_EDIT' | translate"
                    (click)="editBroker(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_REMOVE' | translate"
                    (click)="deleteBroker(row)"
                >
                    <icon>delete</icon>
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
    imports: [
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        SimpleTableComponent,
        MatProgressBarModule,
        CommonModule,
    ],
})
export class AdminBrokersComponent extends AsyncHandler implements OnInit {
    private _dialog = inject(MatDialog);

    public readonly loading = signal(false);

    public readonly brokers = signal<PlaceMQTTBroker[]>([]);

    public ngOnInit() {
        this.loadBrokers();
    }

    public newBroker(): void {
        const ref = this._dialog.open(BrokerFormComponent, {
            data: {
                item: new PlaceMQTTBroker(),
                name: 'ADMIN.BROKERS',
                save: (item) => addBroker(item),
            },
        });
        this.subscription(
            'modal_events',
            (
                ref.componentInstance as unknown as FormModalComponent
            ).event.subscribe((event) => {
                if (event.reason !== 'done') return;
                this.loadBrokers();
            }),
        );
    }

    public editBroker(item: PlaceMQTTBroker): void {
        const ref = this._dialog.open(BrokerFormComponent, {
            data: {
                item,
                name: 'ADMIN.BROKERS',
                save: (item) => updateBroker(item.id, item),
            },
        });
        this.subscription(
            'modal_events',
            (
                ref.componentInstance as unknown as FormModalComponent
            ).event.subscribe((event) => {
                if (event.reason !== 'done') return;
                this.loadBrokers();
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
            this.loadBrokers();
        }
    }

    public async loadBrokers() {
        this.loading.set(true);
        const brokers = await lastValueFrom(
            queryBrokers().pipe(map((r) => r.data)),
        );
        this.brokers.set(brokers);
        this.loading.set(false);
    }
}
