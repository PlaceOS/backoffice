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
    templateUrl: './bulk-item-modal.component.html',
    styleUrls: ['./bulk-item-modal.component.scss'],
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
    public handleList(data: HashMap[], is_mapped: boolean = false): void {
        if (data.length) {
            if (is_mapped) {
                const Resource = this._data.constr;
                this.item_list = data.map((item) => {
                    const new_item = {};
                    Object.keys(item).forEach((key) => {
                        new_item[key] = item[key];
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
        let list: readonly string[] = Object.keys(new this._data.constr());
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
