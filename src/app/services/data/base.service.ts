
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { Utils } from '../../shared/utility.class';

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

    constructor() {
        this.set('map', {});
        this.init();
    }

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

    public filter(filter: string, fields: string[] = ['id', 'name'], items: any[] = this.list()) {
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
    public query(fields?: any) {
        const query = Utils.generateQueryString(fields);
        let update = true;
        if (fields && !fields.update) {
            for (const f in fields) {
                if (fields.hasOwnProperty(f) && f !== 'offset' && f !== 'limit') {
                    update = false;
                    break;
                }
            }
        }
        const key = `query|${query}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        const item_list = this.processList(resp.results ? resp.results || resp : resp);
                        if (update) {
                            this.updateList(item_list);
                        } else {
                            this.set(`total_${query}`, resp.total || item_list.length);
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
                const control = fields && fields.control;
                if (control) { delete fields.control; }
                const query = Utils.generateQueryString(fields) || (fields ? 'complete=true' : '');
                const url = `${control ? ('/control/api' + this.model.route) : this.endpoint}/${encodeURIComponent(id)}${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        const item = this.processItem(resp, id);
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
                        this.updateList([item]);
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
     * Open modal for new item
     * @param data
     */
    public new() {
        return new Promise((resolve, reject) => {
            this.parent.Overlay.openModal(`${this.model.name}-view`, { data: {} }, (e) => {
                if (e.type === 'Success') {
                    resolve(e.data.id);
                } else {
                    reject();
                }
                e.close();
            });
        });
    }

    /**
     * Open modal for edit item
     * @param data
     */
    public edit(id: string) {
        return new Promise((resolve, reject) => {
            const item = this.item(id);
            if (!item) { return; }
            this.parent.Overlay.openModal(`${this.model.name}-view`, { data: { item } }, (e) => {
                if (e.type === 'Success') {
                    return resolve(e.data.id);
                }
                e.close();
                reject();
            });
        });
    }

    /**
     * Update item with given ID
     * @param id ID of the item
     * @param data New values to replace on the old item
     */
    public update(id: string, data: any, link?: any) {
        return new Promise((resolve, reject) => {
            if (!id) { return reject('Invalid ID given'); }
            this.parent.confirm(this.confirmSettings('update', data), (event) => {
                if (event.type === 'Accept') {
                    this.updateItem(id, data).then((d) => resolve(d), (e) => reject(e));
                } else { reject('User cancelled'); }
                event.close();
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
            const item = this.item(id) || { id, name: id };
            this.parent.confirm(this.confirmSettings('delete', item), (event) => {
                if (event.type === 'Accept') {
                    this.deleteItem(id).then((d) => resolve(d), (e) => reject(e));
                } else {
                    reject('User cancelled');
                }
                event.close();
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

    protected deleteItem(id: string) {
        const key = `delete|${id || moment().seconds(0).unix()}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.endpoint}/${id}`;
                this.http.delete(url).subscribe(
                    (resp: any) => {
                        this.removeListItem(id);
                        resolve();
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
        // Store changes to the list
        this.updateHashMap(item_list);
        this.set('list', item_list);
    }

    protected updateHashMap(list: any[]) {
        const map: any = {};
        for (const item of list) {
            map[item.id] = item;
        }
        this.set('map', map);
    }

    protected processList(input_list: any[]) {
        const output_list: any[] = [];
        for (const key in (input_list || [])) {
            if (input_list.hasOwnProperty(key) && input_list[key]) {
                const out = this.processItem(input_list[key], key);
                if (out) { output_list.push(out); }
            }
        }
        return output_list;
    }

    protected processItem(raw_item: any, id?: string) {
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
    protected confirmSettings(key: string, fields: any = {}) {
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
                settings.message = `Are you sure you wish to delete ${this.model.name} '${fields.name || fields.title || ''}'?`;
                settings.icon = 'delete';
                break;
            case 'update':
                settings.title = `Update ${this.model.name}`;
                settings.message = `Update ${this.model.name} '${fields.name || fields.title || ''}'?`;
                settings.icon = 'cloud_upload';
                break;
            case 'add':
                settings.title = `New ${this.model.name}`;
                settings.message = `Create new ${this.model.name} '${fields.name || fields.title || ''}'?`;
                settings.icon = 'add';
                break;
        }
        return settings;
    }

    protected removeListItem(id: string) {
        // Get current list
        const item_list = this.list();
        // Remove matching item from the list
        for (const item of item_list) {
            if (item.id === id) {
                item_list.splice(item_list.indexOf(item), 1);
                break;
            }
        }
        this.set('list', item_list);
        // Remove matching item from map
        const map = this.get('map');
        if (map[id]) { delete map[id]; }
        this.set('map', map);
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