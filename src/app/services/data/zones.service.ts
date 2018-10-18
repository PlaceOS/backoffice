
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { Utils } from '../../shared/utility.class';

export interface IEngineZone {
    id: string;
    name: string;
    created: number;
    description?: string;
    tags?: string;
    tag_list?: string[];
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
        this.model.name = 'zone';
        this.model.route = '/zones';
        this.subjects.list = new BehaviorSubject<IEngineZone[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    protected processItem(raw_item: any) {
        const item: IEngineZone = {
            id: raw_item.id,
            name: raw_item.name,
            tags: raw_item.tags,
            description: raw_item.description,
            triggers: raw_item.triggers,
            trigger_data: raw_item.trigger_data,
            settings: raw_item.settings,
            created: raw_item.created_at * 1000
        };
        item.tag_list = (item.tags || '').split(' ');
        return item;
    }

}
