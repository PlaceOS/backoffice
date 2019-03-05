
import { CommsService } from '@acaprojects/ngx-composer';
import { IDynamicFieldOptions } from '@acaprojects/ngx-widgets';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Utils } from '../../shared/utility.class';
import { AppService } from '../app.service';

import * as moment from 'moment';

const FORBIDDEN: string[] = ['model', 'observers', 'subjects'];

export interface IBaseObject {
    id?: string;
    name?: string;
    email?: string;
    [name: string]: any;
}

export class BaseService<T> {
    public parent: AppService = null;
    protected model: { [name: string]: any } = {};
    protected subjects: { [name: string]: BehaviorSubject<any> } = {};
    protected observers: { [name: string]: Observable<any> } = {};
    protected promises: { [name: string]: Promise<any> } = {};
    protected subs: {
        timers: { [name: string]: number },
        intervals: { [name: string]: number },
        obs: { [name: string]: (Subscription | (() => void)) }
    } = {
        timers: {},     // Store for timers
        intervals: {},  // Store for intervals
        obs: {}         // Store for observables
    };

    protected http: CommsService;

    constructor() {
        this.set('map', {});
        this.set<T[]>('list', []);
        this.init();
    }

    public init(): void {
        if (!this.parent || !this.parent.Settings.setup || (this.parent.Settings.get('mock') && !(window as any).backend.is_loaded)) {
            setTimeout(() => this.init(), 500);
            return;
        }
        this.load();
    }

    protected load() { }

    get endpoint() {
        return this.parent ? `${this.parent.api_endpoint}${this.model.route}` : `/control/api${this.model.route}`;
    }

    public get name(): string {
        return this.model.singular;
    }

    public list(): T[] {
        return this.get('list') || [];
    }

    public filter(filter: string, fields: string[] = ['id', 'name'], items: T[] = this.list()): T[] {
        return Utils.filter(filter, items, fields);
    }

    public clearList(): void {
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
    public item(id: string): T {
        const list = this.list();
        for (const i of list) {
            const item = i as IBaseObject;
            if (item.id === id || item.name === id || item.email === id) {
                return item as T;
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
    public query(fields?: { [name: string]: any }): Promise<T[]> {
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
                            this.set('total', resp.total || item_list.length);
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
    public show(id: string, fields?: { [name: string]: any }): Promise<T> {
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
    public add(data: T): Promise<T> {
        const key = `add|${moment().seconds(0).unix()}`;
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
    public create(prefill?: { [name: string]: any }): Promise<T> {
        return new Promise((resolve, reject) => {
            this.parent.Overlay.openModal(`item-view`, { data: { service: this, item: prefill } }, (e) => {
                if (e.type === 'Success') {
                    resolve(e.data.result);
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
            this.parent.Overlay.openModal(`item-view`, { data: { service: this, edit: true, item } }, (e) => {
                if (e.type === 'Success') {
                    return resolve(e.data.result);
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
    public update(id: string, data: T, link?: any): Promise<T> {
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

    public updateItem(id: string, data: T): Promise<T> {
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
                    resolve();
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
                        resolve(id);
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
    public task(id: string, task: string, fields?: { [name: string]: any }) {
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
                        this.parent.Analytics.event((this.model.name || '').toUpperCase(), `${this.model.name}_task_${task}`);
                        resolve(resp || {});
                        setTimeout(() => this.promises[key] = null, 200);
                    }, (err) => {
                        this.promises[key] = null;
                        this.parent.Analytics.event((this.model.name || '').toUpperCase(), `${this.model.name}_task_${task}_failed`);
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
    protected updateList(input_list: T[]): void {
        // Get current list
        const item_list = this.list();
        // Add any new items to the list
        for (const input of input_list) {
            let found = false;
            for (const i of item_list) {
                const item = i as IBaseObject;
                if (item.id === (input as IBaseObject).id) {
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

    protected updateHashMap(list: T[]): void {
        const map: any = {};
        for (const item of list) {
            map[(item as IBaseObject).id] = item;
        }
        this.set('map', map);
    }

    protected processList(input_list: any[]): T[] {
        const output_list: T[] = [];
        for (const key in (input_list || [])) {
            if (input_list.hasOwnProperty(key) && input_list[key]) {
                const out = this.processItem(input_list[key], key);
                if (out) { output_list.push(out); }
            }
        }
        return output_list;
    }

    protected processItem(raw_item: any, id?: string): T {
        return raw_item;
    }

    protected format(data: T) {
        const formatted_data = data;
        return formatted_data;
    }

    /**
     * Set the value of the given property
     * @param name Name of the property
     * @param value New value to assign to the property
     */
    protected set<U>(name: string, value: U) {
        if (this.subjects[name]) {
            this.subjects[name].next(value);
        } else {
            // Create new variable to store property's value
            this.subjects[name] = new BehaviorSubject<U>(value);
            this.observers[name] = this.subjects[name].asObservable();
            // Create raw getter and setter for property
            if (!(this[name] instanceof Function)) {
                Object.defineProperty(this, name, {
                    get: (): U => this.get(name),
                    set: (v: U) => this.set<U>(name, v)
                });
            }
        }
    }

    /**
     * Generate settings for confirm modal
     * @param key
     * @param fields
     */
    protected confirmSettings(key: string, fields: { [name: string]: any } = {}) {
        const settings = {
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

    protected removeListItem(id: string): void {
        // Get current list
        const item_list = this.list();
        // Remove matching item from the list
        for (const i of item_list) {
            const item = i as IBaseObject;
            if (item.id === id) {
                item_list.splice(item_list.indexOf(i), 1);
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
        this.subs.timers[name] = <any>setTimeout(() => fn(), delay);
    }

    public clearTimer(name: string): void {
        if (this.subs.timers[name]) {
            clearTimeout(this.subs.timers[name]);
            this.subs.timers[name] = null;
        }
    }

    public interval(name: string, fn: () => void, delay: number = 300) {
        this.clearInterval(name);
        if (!(fn instanceof Function)) { return; }
        this.subs.intervals[name] = <any>setInterval(() => fn(), delay);
    }

    public clearInterval(name: string): void {
        if (this.subs.intervals[name]) {
            clearInterval(this.subs.intervals[name]);
            this.subs.intervals[name] = null;
        }
    }

    public getFormFields(item: T, edit: boolean = false): IDynamicFieldOptions<any>[] {
        return [];
    }

    public updateFields(fields: IDynamicFieldOptions<any>[], item: T) {
        for (const i of fields) {
            if (i.key && item[i.key]) {
                console.log('Key:', i.key);
                i.value = item[i.key];
                if (item[i.key] && i.key === 'control_system') {
                    i.format = (v) => item[i.key].name;
                } else if (item[i.key] && i.key === 'edge') {
                    i.format = (v) => item[i.key].name;
                }
                if (i.format) {
                    console.log('Format', i.key, i.format(i.value));
                }
            } else if (i.control_type === 'group') {
                this.updateFields(i.children, item);
            }
        }
    }
}
