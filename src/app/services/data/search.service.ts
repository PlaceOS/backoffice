
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

import * as moment from 'moment';
import { reject } from 'q';

export interface IEngineSearchResult {
    id: string;
    name: string;
    type: string;
    created: number;
    display?: any;
}

@Injectable({
    providedIn: 'root'
})
export class EngineSearchService extends BaseService<IEngineSearchResult> {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'search';
        this.model.route = '/search';
    }

    public deleteItem() { return new Promise((rs, rj) => rj('No show for this service')); }
    public updateItem() { return new Promise<any>((rs, rj) => rj('No show for this service')); }
    public add() { return new Promise<any>((rs, rj) => rj('No show for this service')); }
    public show() { return new Promise<any>((rs, rj) => rj('No show for this service')); }

    protected processItem(raw_item: any) {
        const item: IEngineSearchResult = {
            id: raw_item.id,
            name: raw_item.name,
            type: raw_item.type,
            created: raw_item.created_at * 1000
        };
        item.display = {
            created: moment(item.created).fromNow()
        };
        return item;
    }

}
