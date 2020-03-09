
import { BehaviorSubject, Observable, Subscription, Subscriber, Subject } from 'rxjs';
import { EngineHttpClient } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import { BaseClass } from '../../shared/globals/base.class';
import { ApplicationService } from '../app.service';
import { HashMap } from '../../shared/utilities/types.utilities';
import { toQueryString } from '../../shared/utilities/api.utilities';

export interface IEngineResponse {
    results: HashMap[];
    total: number
}

export class BaseAPIService<T extends {}> extends BaseClass {
    /** Application service */
    public parent: ApplicationService;
    /** Display name of the service */
    protected _name: string;
    /** Name of a single item from the service */
    protected _singular: string;
    /** API Route of the service */
    protected _api_route: string;
    /** Map of state variables for Service */
    protected _subjects: { [key: string]: BehaviorSubject<any> | Subject<any> } = {};
    /** Map of observables for state variables */
    protected _observers: { [key: string]: Observable<any> } = {};
    /** Map of poll subscribers for API endpoints */
    protected _subscribers: { [key: string]: Subscriber<any> } = {};
    /** Map of promises for Service */
    protected _promises: { [key: string]: Promise<any> } = {};
    /** Comparison function for service items */
    protected _compare: (a: T, b: T) => boolean = (a, b) => a === b || (a as any).id === (b as any).id;
    /** Default filter function for list method */
    protected _list_filter: (a: T) => boolean = (a) => !!a;
    /** List of available items */
    readonly listing = new BehaviorSubject<T[]>([]);

    constructor(protected http: EngineHttpClient) {
        super();
        this._name = 'base';
        this._singular = 'base';
        this._api_route = 'base';
        this.set('list', []);
    }

    /**
     * Initailise service
     */
    public init() {
        if (!this.parent) {
            return this.timeout('init', () => this.init());
        }
        this.parent.initialised.pipe(first(_ => _)).subscribe(() => {
            this.load().then(_ => this._initialised.next(true));
        });
    }

    /**
     * Get API route for the service
     * @param engine Whether endpoint is using the application API or engine API
     */
    public route(engine: boolean = false) {
        const endpoint = this.parent ? (engine ? this.parent.engine_endpoint : this.parent.endpoint) : '/api';
        return `${endpoint}${this._api_route}`;
    }
    /** API Route of the service */
    public get api_route() {
        return this._api_route;
    }

    /**
     * Get a service related setting from the settings service
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    public setting(key: string) {
        return this.parent ? this.parent.setting(`app.${this._name.toLowerCase()}.${key}`) : null;
    }

    /**
     * Get the current value of the named property
     * @param name Property name
     */
    public get<U = any>(name: string): U {
        return this._subjects[name] && this._subjects[name] instanceof BehaviorSubject
            ? (this._subjects[name] as BehaviorSubject<U>).getValue()
            : null;
    }


    /**
     * Listen to value change of the named property
     * @param name Property name
     * @param next Callback for value changes
     */
    public listen<U = any>(name: string, next: (_: U) => void): Subscription {
        return this._observers[name] ? this._observers[name].subscribe(next) : null;
    }

    /**
     * Update the value of the named property
     * @param name Property name
     * @param value New value
     */
    protected set<U = any>(name: string, value: U): void {
        if (!this._subjects[name]) {
            this._subjects[name] = new BehaviorSubject<U>(value);
            this._observers[name] = this._subjects[name].asObservable();
        } else {
            this._subjects[name].next(value);
        }
    }

    /**
     * Get list of loaded items
     * @param filterFn Function for filtering the list
     */
    public list(filterFn: (a: T) => boolean = this._list_filter): T[] {
        const list = this.get('list') || [];
        return list.reduce((a, i) => { if (filterFn(i)) { a.push(i); } return a; }, []);
    }

    /**
     * Get item with the given id from the loaded items
     * @param id ID of the item
     */
    public item(id: string): T {
        const list = this.get('list') || [];
        return list.find(i => i.id === id || i.email === id);
    }

    /**
     * Query the index of the API route associated with this service
     * @param query_params Map of query paramaters to add to the request URL
     */
    public query(query_params: HashMap = { update_list: true }): Promise<T[] | HashMap[]> {
        let engine = false;
        let cache = 1000;
        if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
            cache = query_params.cache || 1000;
            delete query_params.cache;
        }
        const query = toQueryString(query_params);
        const key = `query|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route(engine)}${query ? '?' + query : ''}`;
                let result: T[] | HashMap[] = [];
                this.http.get(url).subscribe(
                    (d: IEngineResponse | HashMap[]) => {
                        result = d && d instanceof Array
                            ? d.map(i => this.process(i))
                            : (d && !(d instanceof Array) && d.results
                                ? d.results as HashMap[]
                                : []);
                    }, e => {
                        reject(e);
                        this._promises.new_item = null;
                    },
                    () => {
                        if ((!query || (query_params && query_params.update_list)) && result.length > 0 && result[0] instanceof Object) {
                            this.set('list', this.updateList(this.get('list'), result as T[]));
                            this.listing.next(this.get('list') || []);
                        }
                        resolve(result);
                        this.timeout(key, () => (this._promises[key] = null), cache);
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Query the API route for a sepecific item
     * @param id ID of the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    public show(id: string, query_params: HashMap = {}): Promise<T> {
        let engine = false;
        if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
        }
        const query = toQueryString(query_params);
        const key = `show|${id}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<T>((resolve, reject) => {
                const url = `${this.route(engine)}${query ? '?' + query : ''}`;
                let result: T = null;
                this.http.get(url).subscribe(
                    d => result = this.process(d),
                    e => {
                        reject(e);
                        this._promises[key] = null;
                    },
                    () => {
                        resolve(result);
                        this.timeout(key, () => (this._promises[key] = null), 1000);
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Open modal for new item
     * @param data
     */
    public openNewModal(prefill?: { [name: string]: any }): Promise<T> {
        return new Promise((resolve, reject) => {
            // this.parent.Overlay.open('edit-item', { data: { service: this, item: prefill } }, (e) => {
            //     if (e.type === 'finish') {
            //         resolve(e.data.item as T);
            //     } else {
            //         reject();
            //     }
            // });
        });
    }

    /**
     * Make post request for a new item to the service
     * @param form_data Data to post to the server
     * @param query_params Map of query paramaters to add to the request URL
     */
    public add(form_data: HashMap, query_params: HashMap = {}): Promise<T> {
        if (!this._promises.new_item) {
            this._promises.new_item = new Promise<T>((resolve, reject) => {
                const query = toQueryString(query_params);
                const url = `${this.route(query_params.engine)}${query ? '?' + query : ''}`;
                let result: T = null;
                this.http.post(url, form_data).subscribe(
                    d => (result = this.process(d)),
                    e => {
                        reject(e);
                        this.analyticsEvent(`create-${this._name.toLowerCase()}-failed`);
                        this._promises.new_item = null;
                    },
                    () => {
                        resolve(result);
                        this.set('list', this.updateList(this.get('list'), [result]));
                        this.analyticsEvent(`create-${this._name.toLowerCase()}-success`);
                        this._promises.new_item = null;
                    }
                );
            });
        }
        return this._promises.new_item;
    }

    /**
     * Perform API task for the given item ID
     * @param id ID of the item
     * @param task_name Name of the task
     * @param form_data Map of data to pass to the API
     */
    public task<U = any>(id: string, task_name: string, form_data: HashMap = {}): Promise<U> {
        const query = toQueryString(form_data);
        const key = `task|${id}|${task_name}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<U>((resolve, reject) => {
                const post_data = { ...form_data, id, _task: task_name };
                const url = `${this.route(form_data.engine)}/${id}/${task_name}`;
                let result = null;
                this.http.post(url, post_data).subscribe(
                    d => result = d,
                    e => {
                        reject(e);
                        this.analyticsEvent(`${this._name.toLowerCase()}-task-${task_name}-failed`, id);
                        this._promises[key] = null;
                    },
                    () => {
                        resolve(result as U);
                        this.analyticsEvent(`${this._name.toLowerCase()}-task-${task_name}-success`, id);
                        this.timeout(key, () => this._promises[key] = null, 1000);
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Setup a poller for an API endpoint
     * @param id Show request ID. Leave blank to poll on the query endpoint
     * @param query_params Map of query paramaters to add to the polled URL
     * @param delay Delay between each poll event
     */
    public poll(id?: string, query_params: HashMap = {}, delay: number = 5000): Observable<T | T[]> {
        const key = `poll|${id || ''}|${toQueryString(query_params) || ''}`;
        this.stopPoll(id, query_params);
        this._subjects[key] = new Subject<T | T[]>();
        this._observers[key] = this._subjects[key].asObservable();
        const sub = this._subjects[key];
        const query = { ...(query_params || {}), _poll: true };
        if (id) {
            this.show(id, query).then((d) => sub.next(d), e => sub.error(e));
            this.interval(key, () => {
                this.show(id, query).then((d) => sub.next(d), e => sub.error(e));
            }, delay);
        } else {
            this.query(query).then((d) => sub.next(d), e => sub.error(e));
            this.interval(key, () => {
                this.query(query).then((d) => sub.next(d), e => sub.error(e));
            }, delay);
        }
        return this._observers[key];
    }

    /**
     * Destroy poller
     * @param id
     * @param query_params
     */
    public stopPoll(id?: string, query_params: HashMap = {}) {
        const key = `poll|${id || ''}|${toQueryString(query_params) || ''}`;
        if (this._subjects[key]) {
            this._subjects[key].complete();
            this._subjects[key] = null;
            this._observers[key] = null;
        }
    }

    /**
     * Make put request for changes to the item with the given id
     * @param id ID of the item being updated
     * @param form_data New values for the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    public update(id: string, form_data: HashMap, query_params: HashMap = {}): Promise<T> {
        const key = `update|${id}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<T>((resolve, reject) => {
                const query = toQueryString(query_params);
                const url = `${this.route(query_params.engine)}/${id}${query ? '?' + query : ''}`;
                let result: T = null;
                this.http.put(url, form_data).subscribe(
                    d => (result = this.process(d)),
                    e => {
                        reject(e);
                        this.analyticsEvent(`update-${this._name.toLowerCase()}-failed`, id);
                        this._promises[key] = null;
                    },
                    () => {
                        resolve(result);
                        this.set('list', this.updateList(this.removeItem(this.get('list'), { id } as any), [result]));
                        this.analyticsEvent(`update-${this._name.toLowerCase()}-success`, id);
                        this._promises[key] = null;
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Make delete request for the given item
     * @param id ID of item
     */
    public delete(id: string): Promise<void> {
        const key = `delete|${id}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<void>((resolve, reject) => {
                const url = `${this.route()}/${id}`;
                this.http.delete(url).subscribe(
                    _ => null,
                    e => reject(e),
                    () => {
                        this.set('list', this.removeItem(this.get('list'), ({ id } as any)));
                        resolve();
                    }
                );
            });
        }
        return this._promises[key];
    }

    /**
     * Add new API item from another service or API class
     * @param id ID of the item/or service adding the new item
     * @param data Raw API data for the new item
     * @param type Adder type
     */
    public addFrom(id: string, data: HashMap, type: 'class' | 'service' | 'other' = 'other'): string {
        const new_item = this.process(data);
        this.set('list', this.updateList(this.get('list'), [new_item]));
        return (new_item as any).id;
    }

    /**
     * Remove items with the given IDs from the list
     * @param id ID of the item/or service remove the list of items
     * @param remove_ids List of item IDs to remove
     * @param type Remover type
     */
    public removeFrom(id: string, remove_ids: string[], type: 'class' | 'service' | 'other' = 'other') {

    }

    /**
     * Load initial data for the service
     */
    protected load(): Promise<void> {
        return new Promise<void>((resolve) => {
            resolve();
        });
    }

    /**
     * Post analytics event for this service
     * @param action Name of the action to post
     */
    protected analyticsEvent(action: string, label?: string) {
        if (this.parent && this.parent.Analytics) {
            this.parent.Analytics.event(this._name, `${this.parent.name.toLowerCase()}-${action}`, label);
        }
    }

    /**
     * Convert raw API data into a valid API Object
     * @param raw_item Raw API data
     */
    protected process(raw_item: HashMap): T {
        return raw_item as T;
    }

    /**
     * Update recorded list of items
     * @param old_list Old list of items
     * @param list List of updated items
     * @param compareFn Function to compare items to remove duplicates
     */
    protected updateList(old_list: T[], list: T[], compareFn: (a: T, b: T) => boolean = this._compare): T[] {
        if (!list || list.length === 0) { return old_list; }
        const new_list: T[] = [];
        const mixed_list = [...list, ...old_list];
        if (!compareFn) { compareFn = this._compare; }
        for (const item of mixed_list) {
            const found = new_list.find(i => compareFn(i, item));
            if (!found) {
                new_list.push(item);
            }
        }
        return new_list;
    }

    /**
     * Remove the given item from the given list
     * @param list List of items
     * @param item Item to remove
     * @param compareFn Function to compare items
     */
    protected removeItem(list: T[], item: T, compareFn?: (a: T, b: T) => boolean) {
        const new_list = [];
        if (!compareFn) { compareFn = this._compare; }
        list.forEach(i => compareFn(item, i) ? null : new_list.push(i));
        return new_list;
    }
}
