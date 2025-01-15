import { Component, Inject, Type } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
    PlaceSystem,
    PlaceModule,
    PlaceDriver,
    PlaceUser,
    PlaceZone,
} from '@placeos/ts-client';
import { HashMap, Identity } from 'apps/backoffice/src/app/common/types';
import { unique } from 'apps/backoffice/src/app/common/general';
import {
    SYSTEM_TEMPLATE,
    MODULE_TEMPLATE,
    DRIVER_TEMPLATE,
    USER_TEMPLATE,
    ZONE_TEMPLATE,
} from './template-data';
import { PlaceResource } from '@placeos/ts-client/dist/esm/resources/resource';
import { Observable } from 'rxjs';

export interface BulkItemModalData<T = HashMap<any>> {
    constr: Type<T>;
    name: string;
    save: (item: PlaceResource) => Observable<PlaceResource>;
}

@Component({
    selector: 'app-bulk-item-modal',
    template: `
        <div
            class="flex items-center justify-between m-4 rounded bg-base-200 px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.BULK_ADD' | translate: { type: type } }}
            </h3>
            <button btn icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </div>
        <main>
            @switch (flow_step) { @case ('status') {
            <bulk-item-status-list
                [save]="save"
                [list]="item_list"
                (done)="done()"
            ></bulk-item-status-list>
            } @case ('list') {
            <bulk-item-list
                [(list)]="item_list"
                [fields]="available_fields"
                (next)="showStatus()"
                (previous)="flow_step = 'match-fields'"
            ></bulk-item-list
            >} @case ('match-fields') {
            <bulk-item-match-fields
                [list]="data_list"
                [field_list]="available_fields"
                (mapping_done)="handleList($event, true)"
                (previous)="flow_step = ''"
            ></bulk-item-match-fields>
            } @default {
            <bulk-item-csv-upload
                [template]="template"
                (list)="handleList($event)"
            ></bulk-item-csv-upload>
            } }
        </main>
    `,
    styles: [
        `
            .body {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 1em;
            }

            .icon {
                height: 1.2em;
                width: 1.2em;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2em;
            }

            .content {
                width: 16rem;
                text-align: center;
                font-size: 0.8em;
            }

            .info-block {
                margin: 2em 6em;
            }

            mat-dialog-actions button {
                min-width: 8em;
            }
        `,
    ],
})
export class BulkItemModalComponent<T = HashMap<any>> {
    /** Current step in the bulk add flow */
    public flow_step: '' | 'match-fields' | 'list' | 'status' = '';
    /** List of items to bulk add */
    public item_list: T[] = [];
    /** List of raw data to use for bulk add */
    public data_list: HashMap[] = [];
    /** Whether requests are being processed */
    public loading: boolean;
    /** Template data for use */
    public template: HashMap[] = [];

    public available_fields: Identity[] = [];

    public get type(): string {
        return this._data.name;
    }

    public get save() {
        return this._data.save;
    }

    constructor(
        private _dialog_ref: MatDialogRef<BulkItemModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: BulkItemModalData<T>
    ) {
        this.available_fields = this.getAvailableFields();
        this.template = this.generateTemplate();
    }

    /**
     * Handle list data
     * @param data List of data to process
     */
    public handleList(data: HashMap[], is_mapped = false): void {
        if (data.length) {
            if (is_mapped) {
                const Resource = this._data.constr;
                this.item_list = data.map((item) => {
                    const new_item = {};
                    Object.keys(item).forEach((key) => {
                        try {
                            new_item[key] = JSON.parse(item[key]);
                        } catch {
                            new_item[key] = item[key];
                        }
                    });
                    return new Resource(new_item);
                });
                this.flow_step = 'list';
            } else {
                this.data_list = data;
                this.flow_step = 'match-fields';
            }
        }
    }

    public showStatus() {
        this.flow_step = 'status';
    }

    public done() {
        setTimeout(() => this._dialog_ref.close(), 3000);
    }

    private getAvailableFields(): Identity[] {
        const list: readonly string[] = Object.keys(new this._data.constr());
        return unique(
            list.map((i) => ({ id: i, name: i.split('_').join(' ') })),
            'id'
        ).filter((field) => field.id !== 'id' && field.id[0] !== '_');
    }

    private generateTemplate(): HashMap[] {
        switch (this._data.constr as any) {
            case PlaceSystem:
                return [new PlaceSystem(SYSTEM_TEMPLATE).toJSON()];
            case PlaceModule:
                return [new PlaceModule(MODULE_TEMPLATE).toJSON()];
            case PlaceDriver:
                return [new PlaceDriver(DRIVER_TEMPLATE).toJSON()];
            case PlaceUser:
                return [new PlaceUser(USER_TEMPLATE)];
            case PlaceZone:
                return [new PlaceZone(ZONE_TEMPLATE)];
        }
    }
}
