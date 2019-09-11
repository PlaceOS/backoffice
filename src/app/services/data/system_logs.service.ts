
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseService } from './base.service';
import { IEngineSystem } from './systems.service';
import { IUser } from './users.service';

import * as moment from 'moment';
import { IEngineLogEntry } from './logs.service';

@Injectable({
    providedIn: 'root'
})
export class SystemLogsService extends BaseService<IEngineLogEntry> {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'log';
        this.model.route = '/system_logs';
    }

    protected processItem(raw_item: any) {
        const item = this.parent.Logs.processItem(raw_item);
        return item;
    }

}
