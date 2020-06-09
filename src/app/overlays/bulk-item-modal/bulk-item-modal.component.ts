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
    EngineZone
} from '@placeos/ts-client';
import { HashMap, EngineServiceLike, Identity } from 'src/app/shared/utilities/types.utilities';
import { unique } from 'src/app/shared/utilities/general.utilities';
import { SYSTEM_TEMPLATE, MODULE_TEMPLATE, DRIVER_TEMPLATE, USER_TEMPLATE, ZONE_TEMPLATE } from './template-data';

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

    private generateTemplate(): HashMap[] {
        switch (this._data.constr as any) {
            case EngineSystem:
                return [new EngineSystem(SYSTEM_TEMPLATE).toJSON()];
            case EngineModule:
                return [new EngineModule(MODULE_TEMPLATE).toJSON()];
            case EngineDriver:
                return [new EngineDriver(DRIVER_TEMPLATE).toJSON()];
            case EngineUser:
                return [new EngineUser(USER_TEMPLATE)];
            case EngineZone:
                return [new EngineZone(ZONE_TEMPLATE)];
        }
    }
}
