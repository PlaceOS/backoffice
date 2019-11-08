
import { MockHttpRequestHandlerOptions } from '@acaprojects/ts-composer';
import { BehaviorSubject } from 'rxjs';

import { padZero } from '../../utilities/general.utilities';

function initialiseGlobals() {
    if (!window.control) {
        window.control = {};
    }
    if (!window.control.handlers || !(window.control.handlers instanceof Array)) {
        window.control.handlers = [];
    }
}

export class BaseMockBackend {
    protected state: BehaviorSubject<boolean>;
    protected state_obs: any;

    constructor(protected model) {
        this.state = new BehaviorSubject(false);
        this.state_obs = this.state.asObservable();
        this.init();
    }

    protected listen(next: (state?: boolean) => void) {
        return this.state.subscribe(next);
    }

    protected init() {
        this.load();
    }

    protected load() { }

    get data() {
        return this.model;
    }

    public search(data, fragment) {
        if (fragment.id) {
            data = data.filter((a) => a.id === fragment.id);
        }
        if (fragment.q) {
            data = data.filter((a) => (a.name || '').toLowerCase().indexOf(fragment.q.toLowerCase()) >= 0);
        }
        if (fragment && fragment.offset) {
            const start = Math.min(data.length, +(fragment.offset));
            const end = Math.min(data.length, +(fragment.offset) + (+fragment.limit || 20));
            return { results: data.slice(start, end), total: data.length };
        } else {
            return { results: data.slice(0, +fragment.limit || 20), total: data.length };
        }
    }

    public setupBasicHandlers(base_url: string, list: any[], id_prefix: string) {
        if (!list) { list = []; }
        initialiseGlobals();
        // Mock for index GET
        window.control.handlers.push({
            path: `${base_url}`,
            metadata: list,
            method: 'GET',
            callback: (event) => this.search(list, event.query_params)
        } as MockHttpRequestHandlerOptions);
        // Mock for index POST
        window.control.handlers.push({
            path: `${base_url}`,
            metadata: list,
            method: 'POST',
            callback: (event) => {
                list.push({ id: `${id_prefix}-${padZero(list.length, 4)}`, ...(event.body || {}) });
                console.log(base_url, list[list.length - 1]);
                return list[list.length - 1];
            }
        } as MockHttpRequestHandlerOptions);
        // Mock for show GET
        window.control.handlers.push({
            path: `${base_url}/:id`,
            metadata: list,
            method: 'GET',
            callback: (event) => {
                if (event && event.route_params && event.route_params.id) {
                    return list.find(i => i.id === event.route_params.id)
                }
                return null;
            }
        } as MockHttpRequestHandlerOptions);
        // Mock for show PUT
        window.control.handlers.push({
            path: `${base_url}/:id`,
            metadata: list,
            method: 'PUT',
            callback: (event) => {
                if (event && event.route_params && event.route_params.id) {
                    for (const item of list) {
                        if (item.id === event.route_params.id) {
                            const new_item = { ...item, ...event.body };
                            list.splice(list.indexOf(item), 1, new_item);
                            this.updateOtherEndpoints(list);
                            return new_item;
                        }
                    }
                }
                return null;
            }
        } as MockHttpRequestHandlerOptions);
        return list;
    }

    protected updateOtherEndpoints(list: any[]): void {

    }

    protected request(method, url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function() {
                if ((this as any).status >= 200 && (this as any).status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: (this as any).status,
                        statusText: xhr.statusText,
                    });
                }
            };
            xhr.onerror = function() {
                reject({
                    status: (this as any).status,
                    statusText: xhr.statusText,
                });
            };
            xhr.send();
        });
    }
}
