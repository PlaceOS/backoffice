
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { Utils } from '../../shared/utility.class';
import { BehaviorSubject } from 'rxjs';

export interface IEngineDriver {
    id: string;
    name: string;
    class_name: string;
    module_name: string;
    role: string;
    created: number;
    description?: string;
    default?: any;
    settings?: any;
}

@Injectable({
    providedIn: 'root'
})
export class DriversService {
    public parent: any = null;

    private model: any = {};
    private subjects: any = {};
    private observers: any = {};
    private promises: any = {};
    private timers: any = {};

    constructor(private http: CommsService) {
        this.subjects.list = new BehaviorSubject<IEngineDriver[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    /**
     * Get value of service property
     * @param name Name of the property. Possible values list
     */
    public get(name: string) {
        return this.subjects[name] ? this.subjects[name].getValue() : null;
    }

    /**
     * Listen for changes to service property
     * @param name Name of the property. Possible values bookings, new_booking, and update_booking
     * @param next Callback for changes to property
     */
    public listen(name: string, next: (value: any) => void) {
        return this.subjects[name] ? this.observers[name].subscribe(next) : null;
    }

    /**
     * Get observable for property
     * @param name Name of the property. Possible values bookings, new_booking, and update_booking
     */
    public observer(name: string) {
        return this.subjects[name] ? this.observers[name] : null;
    }

    /**
     * Get list of items
     */
    public list() {
        return this.get('list');
    }

    /**
     * Search for zones
     * @param fields Key, value pairs for query parameters
     * @param tries Retry value. DON'T USE
     */
    public query(fields?: any, tries: number = 0) {
        if (tries > 4) { return new Promise((rs, rj) => rj('Too many tries')); }
        const query = Utils.generateQueryString(fields);
        let update = true;
        for (const f in fields) {
            if (fields.hasOwnProperty(f) && f !== 'offset' && f !== 'limit') {
                update = false;
                break;
            }
        }
        const key = `query|${query}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.parent.api_endpoint}/dependencies${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        const item_list = this.processList(resp.results);
                        if (update) { this.updateList(item_list); }
                        resolve(item_list);
                        setTimeout(() => this.promises[key] = null, 5 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    public show(id: string, complete: boolean = true) {
        const key = `show|${id}|${complete}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const query = complete ? 'complete=true' : '';
                const url = `${this.parent.api_endpoint}/dependencies/${id}${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        const item = this.processItem(resp);
                        resolve(item);
                        setTimeout(() => this.promises[key] = null, 5 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    public clearList() {
        this.subjects.list.next([]);
    }

    /**
     * Adds new items and updates existing items in the item list store
     * @param input_list List of new/updated items
     */
    private updateList(input_list: IEngineDriver[]) {
            // Get current list
        const item_list = this.list();
            // Add any new items to the list
        for (const input of input_list) {
            let found = false;
            for (const item of item_list) {
                if (item.id === input.id) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                item_list.push(input);
            }
        }
            // Sort list
        item_list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
            // Store changes to the list
        this.subjects.list.next(item_list);
    }

    private processList(input_list: any[]) {
        const output_list: IEngineDriver[] = [];
        for (const item of input_list) {
            const out = this.processItem(item);
            if (out) { output_list.push(out); }
        }
        output_list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        return output_list;
    }

    private processItem(raw_item: any) {
        const item: IEngineDriver = {
            id: raw_item.id,
            name: raw_item.name,
            class_name: raw_item.class_name,
            module_name: raw_item.module_name,
            role: raw_item.role,
            description: raw_item.description,
            settings: raw_item.settings,
            created: raw_item.created_at * 1000
        };
        return item;
    }

}
