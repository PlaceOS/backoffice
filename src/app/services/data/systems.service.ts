
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { Utils } from '../../shared/utility.class';

export interface IEngineSystem {
    id: string;
    edge_id: string;
    name: string;
    email?: string;
    description?: string;
    capacity?: number;
    feature?: string;
    modules?: string[];
    zones?: string[];
    settings: any;
    bookable?: boolean;
    support_url?: string;
    installed_ui_devices?: number;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class EngineSystemsService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'system'
        this.model.route = '/systems';
        this.subjects.list = new BehaviorSubject<IEngineSystem[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    /**
     * Get function listing for system with the given query params
     * @param id ID of the system
     * @param fields Key, value pairs for query parameters
     * @param tries Retry value. DON'T USE
     */
    public funcs(id: string, fields?: any, tries: number = 0) {
        if (tries > 4) { return new Promise((rs, rj) => rj('Too many tries')); }
        const query = Utils.generateQueryString(fields);
        const key = `funcs|${query}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}/${id}/funcs${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        resolve(resp);
                        setTimeout(() => this.promises[key] = null, 5 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    protected processItem(raw_item: any) {
        const item: IEngineSystem = {
            id: raw_item.id,
            edge_id: raw_item.edge_id,
            name: raw_item.name,
            email: raw_item.email,
            description: raw_item.description,
            capacity: raw_item.capacity,
            feature: raw_item.feature,
            modules: raw_item.modules,
            zones: raw_item.zones,
            bookable: raw_item.bookable,
            support_url: raw_item.support_url,
            installed_ui_devices: raw_item.installed_ui_devices,
            settings: raw_item.settings,
            created: raw_item.created_at * 1000
        };
        return item;
    }

}
