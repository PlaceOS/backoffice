
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseAPIService } from './base.service';

export interface IEngineStats {
    id?: string;
    name?: string;
    period: string;
    histogram?: { avg: number, count: number, max: number, min: number, sum: number }[];
    interval?: number;
    start?: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeStatsService extends BaseAPIService<IEngineStats> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'stats';
        this._api_route = '/stats';
    }

    public connections(fields?: any) {
        return this.show('connections', fields);
    }

    public panels(fields?: any) {
        return this.show('panels', fields);
    }

    public offline(fields?: any) {
        return this.show('offline', fields);
    }

    public triggers(fields?: any) {
        return this.show('triggers', fields);
    }

    public ignore_list(fields?: any) {
        return this.show('triggers', fields);
    }

    protected process(raw_item: any) {
        const item: IEngineStats = {
            period: raw_item.period_name,
            interval: raw_item.interval,
            histogram: raw_item.histogram || [],
            start: raw_item.period_start * 1000
        };
        return item;
    }

}
