
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { IEngineSystem } from './systems.service';

import * as moment from 'moment';

export interface IEngineLogEntry {
    id: string;
    name: string;
    notes?: string;
    suspected?: boolean;
    persisted?: boolean;
    installed_device?: boolean;
    ip?: string;
    user_id?: string;
    system_id?: string;
    systems?: IEngineSystem[];
    display?: any;
    created: number;
    last_checked: number;
    ended: number;
}

@Injectable({
    providedIn: 'root'
})
export class LogsService extends BaseService<IEngineLogEntry> {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'log';
        this.model.route = '/logs';
        this.subjects.list = new BehaviorSubject<IEngineLogEntry[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    protected processItem(raw_item: any) {
        const item: IEngineLogEntry = {
            id: raw_item.id,
            name: raw_item.name,
            notes: raw_item.notes,
            suspected: raw_item.suspected,
            persisted: raw_item.persisted,
            installed_device: raw_item.installed_device,
            ip: raw_item.ip,
            user_id: raw_item.user_id,
            system_id: raw_item.system_id,
            systems: raw_item.systems,
            display: {
                started: moment(raw_item.created_at * 1000).fromNow(),
                ended: moment(raw_item.ended_at * 1000).format('MMM d, YYYY - hh:mm A')
            },
            created: raw_item.created_at * 1000,
            last_checked: raw_item.last_checked * 1000,
            ended: raw_item.ended_at * 1000
        };
        return item;
    }

}
