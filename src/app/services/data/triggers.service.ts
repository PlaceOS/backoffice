
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

export interface IEngineTrigger {
    id: string;
    name: string;
    description?: string;
    conditions: string[][];
    actions: string[];
    important?: boolean;
    debounce_period?: number;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class TriggersService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'trigger'
        this.model.route = '/triggers';
        this.subjects.list = new BehaviorSubject<IEngineTrigger[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    protected processItem(raw_item: any) {
        const item: IEngineTrigger = {
            id: raw_item.id,
            name: raw_item.name,
            description: raw_item.description,
            conditions: raw_item.conditions,
            actions: raw_item.actions,
            debounce_period: raw_item.debounce_period,
            important: raw_item.important,
            created: raw_item.created_at * 1000
        };
        return item;
    }

}
