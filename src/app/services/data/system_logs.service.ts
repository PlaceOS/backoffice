
import { Injectable } from '@angular/core';
import { ComposerService } from '@acaengine/composer';

import { BaseAPIService } from './base.service';
import { IEngineLogEntry } from './logs.service';

@Injectable({
    providedIn: 'root'
})
export class BackofficeSystemLogsService extends BaseAPIService<IEngineLogEntry> {

    constructor(private _composer: ComposerService) {
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
        const item = this.parent.Logs.process(raw_item);
        return item;
    }

}
