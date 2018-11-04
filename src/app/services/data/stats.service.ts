
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

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
export class StatsService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'stats';
        this.model.route = '/stats';
        this.subjects.list = new BehaviorSubject<IEngineStats[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    public load() {

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

    protected processItem(raw_item: any) {
        console.log('Raw Item:', raw_item);
        const item: IEngineStats = {
            period: raw_item.period_name,
            interval: raw_item.interval,
            histogram: raw_item.histogram || [],
            start: raw_item.period_start * 1000
        };
        return item;
    }

}
