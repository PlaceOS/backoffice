
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { DomainModalComponent } from '../../overlays/domain-modal/domain-modal.component';

export interface IEngineDomain {
    id: string;
    name: string;
    display_name?: string;
    description?: string;
    domain: string;
    login_url: string;
    logout_url: string;
    config?: any;
    internals?: any;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class DomainsService extends BaseService<IEngineDomain> {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'domain';
        this.model.route = '/domains';
        this.subjects.list = new BehaviorSubject<IEngineDomain[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    get endpoint() {
        return `/auth/api${this.model.route}`;
    }

    public load() {
        this.parent.Overlay.setupModal(`${this.model.name}-view`, { cmp: DomainModalComponent });
    }

    protected processItem(raw_item: any) {
        const item: IEngineDomain = {
            id: raw_item.id,
            name: raw_item.name,
            display_name: `${raw_item.name}(${raw_item.dom})`,
            domain: raw_item.dom,
            description: raw_item.description,
            login_url: raw_item.login_url,
            logout_url: raw_item.logout_url,
            config: raw_item.config,
            internals: raw_item.internals,
            created: raw_item.created_at * 1000
        };
        return item;
    }

}
