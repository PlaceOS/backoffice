
import { CommsService } from "@acaprojects/ngx-composer";
import { BehaviorSubject } from "rxjs";

import { Utils } from "../../shared/utility.class";

import * as moment from 'moment';

const FORBIDDEN: string[] = ['model', 'observers', 'subjects'];

export class BaseService {
    public parent: any = null;
    protected model: any = {};
    protected subjects: any = {};
    protected observers: any = {};
    protected promises: any = {};
    protected subs: any = {
        timers: {},     // Store for timers
        intervals: {},  // Store for intervals
        obs: {}         // Store for observables
    };

    protected http: CommsService;

    constructor() { }

    public init() {
        if (!this.parent || !this.parent.Settings.setup || (this.parent.Settings.get('mock') && !(window as any).backend.is_loaded)) {
            return setTimeout(() => this.init(), 500);
        }
        this.load();
    }

    protected load() { }

    get endpoint() {
        return this.parent ? `${this.parent.api_endpoint}${this.model.route}` : `/control/api${this.model.route}`;
    }

    public list() {
        return this.get('list') || [];
    }

    public filter(filter: string, items: any[] = this.list(), fields: string[] = ['id', 'name']) {
        return Utils.filter(filter, items, fields);
    }

    public clearList() {
        this.set('list', []);
    }

    /**
     * Listen to changes of given property
     * @param name Name of the property
     * @param next Callback for changes to properties value
     */
    public listen(name: string, next: (data: any) => void) {
        if (this.subjects[name]) {
            return this.observers[name].subscribe(next);
        } else {
                // Create new variable to store property's value
            this.subjects[name] = new BehaviorSubject<any>(this[name] instanceof Function ? null : this[name]);
            this.observers[name] = this.subjects[name].asObservable();
                // Create raw getter and setter for property
            if (!(this[name] instanceof Function)) {
                Object.defineProperty(this, name, {
                    get: () => this.get(name),
                    set: (v: any) => this.set(name, v)
                });
            }
            return this.observers[name].subscribe(next);
        }
    }

    /**
     * Get the current value of the given property
     * @param name Name of the property
     */
    public get(name: string) {
        return this.subjects[name] ? this.subjects[name].getValue() : null;
    }

    /**
     * Get item from list with the specific ID
     * @param id ID to search for
     */
    public item(id: string) {
        const list = this.list();
        for (const item of list) {
            if (item.id === id || item.name === id || item.email === id) {
                return item;
            }
        }
        return null;
    }

    /**
     * Get observable for property
     * @param name Name of the property. Possible values bookings, new_booking, and update_booking
     */
    public observer(name: string) {
        return this.subjects[name] ? this.observers[name] : null;
    }

    /**
     * Get item listing
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
        if (update && this.get('total') === this.list().length) {
            return new Promise((rs) => rs([]));
        }
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        const item_list = this.processList(resp.results || resp);
                        if (update) {
                            this.updateList(item_list);
                            this.set('total', resp.total || this.list().length);
                        } else {
                            this.set(`total_${query}`, resp.total || item_list.length || 0);
                        }
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
    /**
     * Get item with the given ID
     * @param id ID to get the data for
     * @param fields Key, value pairs for query parameters
     */
    public show(id: string, fields?: any) {
        const key = `show|${id}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const query = Utils.generateQueryString(fields) || (fields ? 'complete=true' : '');
                const url = `${this.endpoint}/${id}${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        const item = this.processItem(resp);
                        resolve(item);
                        setTimeout(() => this.promises[key] = null, 2 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Add new item with the given parameters
     * @param data
     */
    public add(data: any) {
        const key = `add|${data.id || moment().seconds(0).unix()}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const formatted_data = this.format(data);
                const url = `${this.endpoint}`;
                this.http.post(url, formatted_data).subscribe(
                    (resp: any) => {
                        const item = this.processItem(resp);
                        resolve(item);
                        this.parent.Analytics.event((this.model.name || '').toUpperCase(), `created_${this.model.name}`);
                        setTimeout(() => this.promises[key] = null, 2 * 1000);
                    }, (err) => {
                        this.parent.Analytics.event((this.model.name || '').toUpperCase(), `create_${this.model.name}_fail`);
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Alias for add method
     * @param data
     */
    public new(data: any) {
        return this.add(data);
    }

    /**
     * Update item with given ID
     * @param id ID of the item
     * @param data New values to replace on the old item
     */
    public update(id: string, data: any, link?: any) {
        return new Promise((resolve, reject) => {
            if (!id) { return reject('Invalid ID given'); }
            data.link = link;
            this.parent.confirm(this.confirmSettings('update', data), (event) => {
                if (event.type === 'Accept') {
                    this.updateItem(id, data).then((d) => resolve(d), (e) => reject(e));
                } else {
                    event.close();
                    reject('User cancelled');
                }
            });
        });
    }

    public updateItem(id: string, data: any) {
        if (!id) { return new Promise((rs, rj) => rj('Invalid ID given')); }
        const key = `update|${id || moment().seconds(0).unix()}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const formatted_data = this.format(data);
                const url = `${this.endpoint}/${id}`;
                this.http.put(url, formatted_data).subscribe(
                    (resp: any) => {
                        const item = this.processItem(resp);
                        resolve(item);
                        this.parent.Analytics.event((this.model.name || '').toUpperCase(), `updated_${this.model.name}`);
                        setTimeout(() => this.promises[key] = null, 2 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        this.parent.Analytics.event((this.model.name || '').toUpperCase(), `update_${this.model.name}_fail`);
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Remove item with the given ID
     * @param id ID of the item
     */
    public remove(id: string, link?: any) {
        return new Promise((resolve, reject) => {
            if (!id) { return reject('Invalid ID given'); }
            const item = this.item(id) || {};
            item.link = link;
            this.parent.confirm(this.confirmSettings(id, item), (event) => {
                if (event.type === 'Accept') {
                    this.deleteItem(id).then((d) => resolve(d), (e) => reject(e));
                } else {
                    event.close();
                    reject('User cancelled');
                }
            });
        });
    }

    /**
     * Alias for the remove method
     * @param id
     */
    public delete(id: string) {
        return this.remove(id);
    }

    /**
     * Execute task on the the given module
     * @param id Module ID
     * @param task Name of the task to execute
     */
    public task(id: string, task: string, fields?: any) {
        const key = `task|${id}|${task}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}/${id}/${task}`;
                const body: any = {
                    id,
                    _task: task
                };
                if (fields) {
                    for (const k in fields) {
                        if (fields.hasOwnProperty(k)) {
                            body[k] = fields[k];
                        }
                    }
                }
                this.http.post(url, body).subscribe(
                    (resp: any) => {
                        resolve(resp || {});
                        setTimeout(() => this.promises[key] = null, 200);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err instanceof Array ? err[0] : err);
                    });
            });
        }
        return this.promises[key];
    }

    protected deleteItem(id: string) {
        const key = `delete|${id || moment().seconds(0).unix()}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}/${id}`;
                this.http.delete(url).subscribe(
                    (resp: any) => {
                        const item = this.processItem(resp);
                        resolve(item);
                        this.parent.Analytics.event((this.model.name || '').toUpperCase(), `removed_${this.model.name}`);
                        setTimeout(() => this.promises[key] = null, 2 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        this.parent.Analytics.event((this.model.name || '').toUpperCase(), `remove_${this.model.name}_fail`);
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Adds new items and updates existing items in the item list store
     * @param input_list List of new/updated items
     */
    protected updateList(input_list: any[]) {
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
        // item_list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
            // Store changes to the list
        this.set('list', item_list);
    }

    protected processList(input_list: any[]) {
        const output_list: any[] = [];
        for (const item of (input_list || [])) {
            const out = this.processItem(item);
            if (out) { output_list.push(out); }
        }
        // output_list.sort((a, b) => (a.name || a.id || '').localeCompare(b.name || b.id || ''));
        return output_list;
    }

    protected processItem(raw_item: any) {
        return raw_item;
    }

    protected format(data: any) {
        const formatted_data = data;
        return formatted_data;
    }

    /**
     * Set the value of the given property
     * @param name Name of the property
     * @param value New value to assign to the property
     */
    protected set(name: string, value: any) {
        if (this.subjects[name]) {
            this.subjects[name].next(value);
        } else {
                // Create new variable to store property's value
            this.subjects[name] = new BehaviorSubject<any>(value);
            this.observers[name] = this.subjects[name].asObservable();
                // Create raw getter and setter for property
            if (!(this[name] instanceof Function)) {
                Object.defineProperty(this, name, {
                    get: () => this.get(name),
                    set: (v: any) => this.set(name, v)
                });
            }
        }
    }

    /**
     * Generate settings for confirm modal
     * @param key
     * @param fields
     */
    protected confirmSettings(key: string, fields?: any) {
        const settings: any = {
            title: '',
            message: '',
            icon: '',
            link: fields.link,
            accept: 'Ok',
            cancel: true
        };
        switch (key) {
            case 'delete':
                settings.title = `Delete ${this.model.name}`;
                settings.message = `Are you sure you wish to delete ${this.model.name} '${fields.name ? fields.name : ''}'?`;
                settings.icon = 'delete';
                break;
            case 'update':
                settings.title = `Update ${this.model.name}`;
                settings.message = `Update ${this.model.name} '${fields.name ? fields.name : ''}'?`;
                settings.icon = 'cloud_upload';
                break;
            case 'add':
                settings.title = `New ${this.model.name}`;
                settings.message = `Create new ${this.model.name} '${fields.name ? fields.name : ''}'?`;
                settings.icon = 'add';
                break;
        }
        return settings;
    }

    public timeout(name: string, fn: () => void, delay: number = 300) {
        this.clearTimer(name);
        if (!(fn instanceof Function)) { return; }
        this.subs.timers[name] = setTimeout(() => fn(), delay);
    }

    public clearTimer(name: string) {
        if (this.subs.timers[name]) {
            clearTimeout(this.subs.timers[name]);
            this.subs.timers[name] = null;
        }
    }

    public interval(name: string, fn: () => void, delay: number = 300) {
        this.clearInterval(name);
        if (!(fn instanceof Function)) { return; }
        this.subs.intervals[name] = setInterval(() => fn(), delay);
    }

    public clearInterval(name: string) {
        if (this.subs.intervals[name]) {
            clearInterval(this.subs.intervals[name]);
            this.subs.intervals[name] = null;
        }
    }
}
