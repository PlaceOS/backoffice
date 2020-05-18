import { Component, Inject, Type } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
    EngineResource,
    SYSTEM_MUTABLE_FIELDS,
    EngineSystem,
    MODULE_MUTABLE_FIELDS,
    EngineModule,
    DRIVER_MUTABLE_FIELDS,
    EngineDriver,
    USER_MUTABLE_FIELDS,
    EngineUser,
    ZONE_MUTABLE_FIELDS,
    EngineZone,
} from '@placeos/ts-client';
import { HashMap, EngineServiceLike, Identity } from 'src/app/shared/utilities/types.utilities';
import { unique } from 'src/app/shared/utilities/general.utilities';

export interface BulkItemModalData<T = EngineResource<any>> {
    constr: Type<T>;
    service: EngineServiceLike;
}

@Component({
    selector: 'app-bulk-item-modal',
    templateUrl: './bulk-item-modal.component.html',
    styleUrls: ['./bulk-item-modal.component.scss'],
})
export class BulkItemModalComponent<T = EngineResource<any>> {
    /** Current step in the bulk add flow */
    public flow_step: '' | 'match-fields' | 'list' | 'status' = '';
    /** List of items to bulk add */
    public item_list: T[] = [];
    /** List of raw data to use for bulk add */
    public data_list: HashMap[] = [];
    /** Whether requests are being processed */
    public loading: boolean;

    public available_fields: Identity[] = [];

    public get type(): string {
        return this._data.service._name;
    }

    public get _available_fields(): Identity[] {
        let list: readonly string[] = [];
        switch (this._data.constr as any) {
            case EngineSystem:
                list = SYSTEM_MUTABLE_FIELDS;
                break;
            case EngineModule:
                list = MODULE_MUTABLE_FIELDS;
                break;
            case EngineDriver:
                list = DRIVER_MUTABLE_FIELDS;
                break;
            case EngineUser:
                list = USER_MUTABLE_FIELDS;
                break;
            case EngineZone:
                list = ZONE_MUTABLE_FIELDS;
                break;
        }
        return unique(
            list.map((i) => ({ id: i, name: i.split('_').join(' ') })),
            'id'
        );
    }

    constructor(
        private _dialog_ref: MatDialogRef<BulkItemModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: BulkItemModalData<T>
    ) {
        this.available_fields = this._available_fields;
    }

    /**
     * Handle list data
     * @param data List of data to process
     */
    public handleList(data: HashMap[], is_mapped: boolean = false): void {
        console.log('Handle List:', data);
        if (data.length) {
            if (is_mapped) {
                const Resource = this._data.constr;
                this.item_list = data.map((item) => new Resource(this._data.service, item));
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
        this._dialog_ref.close();
    }
}
