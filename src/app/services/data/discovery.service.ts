
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { IEngineDriver } from './drivers.service';

@Injectable({
    providedIn: 'root'
})
export class DiscoveryService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'driver';
        this.model.route = '/discovery';
        this.subjects.list = new BehaviorSubject<IEngineDriver[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    /**
     * Perform reload task on the given driver
     * @param id Module ID
     */
    public scan() {
        return this.show('scan');
    }

    protected processItem(raw_item: any) {
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
