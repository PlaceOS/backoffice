
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

export interface IEngineAuthSource {
    id: string;
    uid: string;
    authority_id?: string;
    name: string;
    display_name?: string;
    auth_method?: string;
    base?: string;
    type: string;
    password?: string;
    host?: string;
    port?: number;
    filter: string;
    bind_dn?: string;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class AuthSourcesService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'authentication source';
        this.model.route = '/authsources';
        this.subjects.list = new BehaviorSubject<IEngineAuthSource[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    get endpoint() {
        return `/auth/api${this.model.route}`;
    }

    protected processItem(raw_item: any) {
        const item: IEngineAuthSource = {
            id: raw_item.id,
            uid: raw_item.uid,
            authority_id: raw_item.authority_id,
            name: raw_item.name,
            auth_method: raw_item.auth_method,
            base: raw_item.base,
            type: raw_item.type,
            password: raw_item.password,
            host: raw_item.host,
            port: raw_item.port,
            filter: raw_item.filter,
            bind_dn: raw_item.bind_dn,
            created: raw_item.created_at * 1000
        };
        return item;
    }

}
