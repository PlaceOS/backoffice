
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

export interface IEngineApplication {
    id: string;
    uid: string;
    name: string;
    owner_id?: string;
    redirect_uri?: string;
    scopes: string;
    secret: string;
    skip_authorization: boolean;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class ApplicationService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'application';
        this.model.route = '/applications';
        this.subjects.list = new BehaviorSubject<IEngineApplication[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    get endpoint() {
        return `/auth/api${this.model.route}`;
    }

    protected processItem(raw_item: any) {
        const item: IEngineApplication = {
            id: raw_item.id,
            uid: raw_item.uid,
            name: raw_item.name,
            owner_id: raw_item.owner_id,
            redirect_uri: raw_item.redirect_uri,
            scopes: raw_item.scopes,
            secret: raw_item.secret,
            skip_authorization: raw_item.skip_authorization,
            created: raw_item.created_at * 1000
        };
        return item;
    }

}
