
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { Utils } from '../../shared/utility.class';
import { SystemModalComponent } from '../../overlays/system-modal/system-modal.component';

import * as moment from 'moment';

export interface IEngineSystem {
    id?: string;
    edge_id?: string;
    name?: string;
    email?: string;
    description?: string;
    capacity?: number;
    feature?: string;
    modules?: string[];
    zones?: string[];
    settings?: any;
    bookable?: boolean;
    support_url?: string;
    installed_ui_devices?: number;
    display?: any;
    created?: number;
}

@Injectable({
    providedIn: 'root'
})
export class EngineSystemsService extends BaseService<IEngineSystem> {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'system';
        this.model.route = '/systems';
    }

    public load() {
        this.parent.Overlay.setupModal(`${this.model.name}-view`, { cmp: SystemModalComponent });
    }

    /**
     * Get function listing for system with the given query params
     * @param id ID of the system
     * @param fields Key, value pairs for query parameters
     * @param tries Retry value. DON'T USE
     */
    public funcs(id: string, fields?: any, tries: number = 0) {
        if (tries > 4) { return new Promise((rs, rj) => rj('Too many tries')); }
        const query = Utils.generateQueryString(fields);
        const key = `funcs|${id}|${query}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}/${id}/funcs${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        resolve(resp);
                        setTimeout(() => this.promises[key] = null, 5 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Execute method of the given module of the system
     * @param id System ID
     * @param details Module and method details
     */
    public execute(id: string, details: any) {
        const key = `exec|${id}|${details}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}/${id}/exec`;
                if (!details || !details.method || !details.module) {
                    return reject(!details ? 'Invalid details passed to execute method' : (!details.method ? 'No method passed to execute' :  'No module passed to execute'));
                }
                const body = {
                    id,
                    index: details.index || 1,
                    method: details.method,
                    module: details.module,
                    args: details.args || []
                };
                this.http.post(url, body).subscribe(
                    (resp: any) => {
                        resolve(resp instanceof Array ? resp[0] : resp);
                        setTimeout(() => this.promises[key] = null, 200);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err instanceof Array ? err[0] : err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Get state of the given system module
     * @param id System ID
     * @param module Module name
     * @param index Module index
     */
    public state(id: string, module: string, index: number) {
        const query = Utils.generateQueryString({ module, index });
        const key = `state|${id}|${query}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}/${id}/state${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        resolve(resp);
                        setTimeout(() => this.promises[key] = null, 5 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Remove module from given system
     * @param id System ID
     * @param module_id Module ID
     */
    public removeModule(id: string, module_id: string) {
        return this.task(id, 'remove', { module_id });
    }

    /**
     * Start all module from given system
     * @param id System ID
     * @param module_id Module ID
     */
    public start(id: string) {
        return this.task(id, 'start');
    }

    /**
     * Stop all module from given system
     * @param id System ID
     * @param module_id Module ID
     */
    public stop(id: string) {
        return this.task(id, 'stop');
    }

    protected processItem(raw_item: any) {
        const item: IEngineSystem = {
            id: raw_item.id,
            edge_id: raw_item.edge_id,
            name: raw_item.name,
            email: raw_item.email,
            description: raw_item.description,
            capacity: raw_item.capacity,
            feature: raw_item.feature,
            modules: raw_item.modules,
            zones: raw_item.zones,
            bookable: raw_item.bookable,
            support_url: raw_item.support_url,
            installed_ui_devices: raw_item.installed_ui_devices,
            settings: raw_item.settings,
            created: raw_item.created_at * 1000
        };
        item.display = {
            created: moment(item.created).fromNow()
        };
        return item;
    }

}
