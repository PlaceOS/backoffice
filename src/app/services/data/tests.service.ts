
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { SystemModalComponent } from '../../overlays/system-modal/system-modal.component';

import * as moment from 'moment';

export interface IEngineTest {
    id: string;
    name: string;
    url: string;
    module_name?: string;
    module_class?: string;
    role?: string;
    settings?: any;
    documentation?: string[];
}

@Injectable({
    providedIn: 'root'
})
export class TestsService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'search';
        this.model.route = '/search';
        this.subjects.list = new BehaviorSubject<IEngineTest[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    public load() {
        this.parent.Overlay.setupModal(`${this.model.name}-view`, { cmp: SystemModalComponent });
    }

    public deleteItem() { }
    public updateItem() { }
    public add() { }

    protected processItem(raw_item: any) {
        let item: IEngineTest = null;
        if (typeof raw_item === 'string') {
            const route = raw_item.split('/modules/')[1];
            item = {
                id: raw_item,
                name: route.split('/').join(' → '),
                url: raw_item
            };
        } else {
            item = {
                id: raw_item.id,
                name: raw_item.name || raw_item.details.name,
                url: raw_item.path,
                module_class: raw_item.klass,
                module_name: raw_item.module_name || raw_item.details.module_name,
                settings: raw_item.settings || raw_item.details.settings,
                role: raw_item.role || raw_item.details.role,
                documentation: raw_item.documentation
            };
        }
        return item;
    }

}
