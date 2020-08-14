
import { Injectable } from '@angular/core';

import { BaseAPIService } from './base.service';

export interface IPlaceStats {
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
export class BackofficeStatsService extends BaseAPIService<IPlaceStats> {

    constructor() {
        super(undefined);
        const sub = this._composer.initialised.subscribe((state) => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
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
        const item: IPlaceStats = {
            period: raw_item.period_name,
            interval: raw_item.interval,
            histogram: raw_item.histogram || [],
            start: raw_item.period_start * 1000
        };
        return item;
    }

}
