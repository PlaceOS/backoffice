
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import * as faker from 'faker';
import * as moment from 'moment';
import { Utils } from '../../utility.class';

export class BaseMockBackend {
    protected state: BehaviorSubject<boolean>;
    protected state_obs: any;
    protected utility: any = Utils;

    constructor(protected model) {
        this.state = new BehaviorSubject(false);
        this.state_obs = this.state.asObservable();
        setTimeout(() => this.init(), 100);
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
            const end = Math.min(data.length, +(fragment.offset) + 20);
            return { results: data.slice(start, end), total: data.length };
        } else {
            return { results: data.slice(0, 20), total: data.length };
        }
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
