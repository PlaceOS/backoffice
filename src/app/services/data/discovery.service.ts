
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from './base.service';
import { IEngineDriver } from './drivers.service';

@Injectable({
    providedIn: 'root'
})
export class BackofficeDiscoveryService extends BaseAPIService<IEngineDriver> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'driver';
        this._api_route = '/discovery';
    }

    /**
     * Perform reload task on the given driver
     * @param id Module ID
     */
    public scan() {
        return this.show('scan');
    }

    protected process(raw_item: any) {
        const item: IEngineDriver = {
            id: raw_item.id,
            name: raw_item.name,
            class_name: raw_item.class_name,
            module_name: raw_item.module_name,
            role: raw_item.role,
            description: raw_item.description,
            settings: raw_item.settings,
            default: raw_item.default,
            created: raw_item.created_at * 1000
        };
        return item;
    }

}
