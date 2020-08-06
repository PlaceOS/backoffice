import { Component, Inject, Type } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
    PlaceSystem,
    PlaceModule,
    PlaceDriver,
    PlaceUser,
    PlaceZone,
} from '@placeos/ts-client';
import { HashMap, PlaceServiceLike, Identity } from 'src/app/shared/utilities/types.utilities';
import { unique } from 'src/app/shared/utilities/general.utilities';
import {
    SYSTEM_TEMPLATE,
    MODULE_TEMPLATE,
    DRIVER_TEMPLATE,
    USER_TEMPLATE,
    ZONE_TEMPLATE,
} from './template-data';

export interface BulkItemModalData<T = HashMap<any>> {
    constr: Type<T>;
    service: PlaceServiceLike;
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
        return this._data.service._name;
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
                console.log('To list:', data);
                const Resource = this._data.constr;
                this.item_list = data.map((item) => new Resource(item));
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
        );
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
