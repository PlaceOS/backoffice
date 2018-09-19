
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

export interface IEngineZone {
    id: string;
    name: string;
    created: number;
    description?: string;
    tags?: string[];
    triggers?: any[];
    trigger_data?: any[];
    settings?: any;
}

@Injectable({
    providedIn: 'root'
})
export class ZonesService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'zone'
        this.model.route = '/zones';
        this.subjects.list = new BehaviorSubject<IEngineZone[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    protected processItem(raw_item: any) {
        const item: IEngineZone = {
            id: raw_item.id,
            name: raw_item.name,
            description: raw_item.description,
            settings: raw_item.settings,
            created: raw_item.created_at * 1000
        };
        return item;
    }

}
