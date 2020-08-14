
import { Injectable } from '@angular/core';

import { BaseAPIService } from './base.service';
import { IPlaceLogEntry } from './logs.service';

@Injectable({
    providedIn: 'root'
})
export class BackofficeSystemLogsService extends BaseAPIService<IPlaceLogEntry> {

    constructor() {
        super(undefined);
        const sub = this._composer.initialised.subscribe((state) => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
        this._name = 'log';
        this._api_route = '/system_logs';
    }

    protected process(raw_item: any) {
        return this.parent.Logs.process(raw_item);
    }

}
