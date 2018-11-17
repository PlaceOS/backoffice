
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { SystemModalComponent } from '../../overlays/system-modal/system-modal.component';

import * as moment from 'moment';

export interface IEngineTest {
    id: string;
    name: string;
    url: string;
    module_name?: string;
    module_class?: string;
    role?: string;
    settings?: any;
    documentation?: string[];
}

@Injectable({
    providedIn: 'root'
})
export class TestsService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'test';
        this.model.route = '/tests';
        this.subjects.list = new BehaviorSubject<IEngineTest[]>([]);
        this.observers.list = this.subjects.list.asObservable();
    }

    public load() {
        this.parent.Overlay.setupModal(`${this.model.name}-view`, { cmp: SystemModalComponent });
    }

    public deleteItem() { }
    public updateItem() { }
    public add() { }

    /**
     * Connect websocket and run test on the server
     * @param item Test to run
     * @param next Callback for server test events
     */
    public run(item: IEngineTest, next: (d) => void) {
        const key = `websocket_${item.id}`;
        this.stop(item);
        this.http.token.then((t) => {
            const url = `${this.endpoint.replace('http', 'ws')}/${encodeURIComponent(item.id)}/websocket?bearer_token=${t}`;
            this.model[key].ws = new WebSocket(url);
            this.set(key, []);
            this.listen(key, next);
            this.model[key].ws.onmessage = (event) => this.post(item, event.data);
            this.model[key].ws.onerror = (event) => {
                this.post(item, event);
                this.stop(item);
            };
        });
        this.model[key] = {
            ws: null,
            stop: () => this.stop(item),
            post: (msg, send = false) => this.post(item, msg, send)
        };
        return this.model[key];
    }

    /**
     * Stop test and disconnect websocket
     * @param item Test to stop
     */
    public stop(item: IEngineTest) {
        const key = `websocket_${item.id}`;
        if (this.model[key]) {
            if (this.model[key].ws) {
                this.model[key].ws.close();
            }
            this.subjects[key].complete();
            this.subjects[key] = null;
        }
    }

    /**
     * Post message to server regarding the test
     * @param item Test to send message about
     * @param message Message to send
     * @param send Send message to server
     */
    private post(item: IEngineTest, message: string, send: boolean = false) {
        const key = `websocket_${item.id}`;
        const list = this.get(key) || [];
        list.push(message);
        this.set(key, list);
    }

    protected processItem(raw_item: any, id?: string) {
        let item: IEngineTest = null;
        if (typeof raw_item === 'string') {
            const route = raw_item.split('/modules/')[1];
            item = {
                id: raw_item,
                name: route.split('/').join(' → '),
                url: raw_item
            };
        } else {
            item = {
                id: raw_item.id || id,
                name: raw_item.name || raw_item.details.name,
                url: raw_item.path,
                module_class: raw_item.klass,
                module_name: raw_item.module_name || raw_item.details.module_name,
                settings: raw_item.settings || raw_item.details.settings,
                role: raw_item.role || raw_item.details.role,
                documentation: raw_item.documentation
            };
        }
        return item;
    }

}
