
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

export interface IEngineDriver {
    id: string;
    name: string;
    class_name: string;
    module_name: string;
    role: string;
    created: number;
    description?: string;
    default?: number;
    settings?: any;
}

@Injectable({
    providedIn: 'root'
})
export class DriversService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'driver'
        this.model.route = '/dependencies';
        this.subjects.list = new BehaviorSubject<IEngineDriver[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    /**
     * Perform reload task on the given driver
     * @param id Module ID
     */
    public reload(id: string) {
        return this.task(id, 'reload');
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
