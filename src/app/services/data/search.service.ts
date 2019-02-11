
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { SystemModalComponent } from '../../overlays/system-modal/system-modal.component';

import * as moment from 'moment';

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
        this.subjects.list = new BehaviorSubject<IEngineSearchResult[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    public load() {
        this.parent.Overlay.setupModal(`${this.model.name}-view`, { cmp: SystemModalComponent });
    }

    public deleteItem() { }
    public updateItem() { }
    public add() { }
    public show() { }

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
