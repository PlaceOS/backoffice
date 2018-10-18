
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

import * as moment from 'moment';

export interface IEngineEdgeNode {
    id: string;
    master_id?: string;
    name: string;
    online: boolean;
    description?: string;
    admins?: string[];
    host_origin?: string;
    failover?: boolean;
    failover_active?: boolean;
    failover_time?: number;
    password?: string;
    server_port?: number;
    settings?: any;
    startup_time?: number;
    timeout?: number;
    window_length?: number;
    window_start?: number;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class NodesService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'edge';
        this.model.route = '/nodes';
        this.subjects.list = new BehaviorSubject<IEngineEdgeNode[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    protected processItem(raw_item: any) {
        const item: IEngineEdgeNode = {
            id: raw_item.id,
            master_id: raw_item.master_id,
            name: raw_item.name,
            description: raw_item.description,
            online: raw_item.online,
            admins: raw_item.admins,
            host_origin: raw_item.host_origin,
            failover: raw_item.failover,
            failover_active: raw_item.failover_active,
            failover_time: raw_item.failover_time,
            password: raw_item.password,
            server_port: raw_item.server_port,
            settings: raw_item.settings,
            startup_time: raw_item.startup_time,
            timeout: raw_item.timeout,
            window_length: raw_item.window_length,
            window_start: raw_item.window_start,
            created: raw_item.created_at * 1000,
        };
        return item;
    }

}
