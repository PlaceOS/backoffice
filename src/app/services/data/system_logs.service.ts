
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from './base.service';
import { IEngineLogEntry } from './logs.service';

@Injectable({
    providedIn: 'root'
})
export class BackofficeSystemLogsService extends BaseAPIService<IEngineLogEntry> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'log';
        this._api_route = '/system_logs';
    }

    protected process(raw_item: any) {
        const item = this.parent.Logs.process(raw_item);
        return item;
    }

}
