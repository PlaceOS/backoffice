
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from './base.service';

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

export interface ITestConnection {
    ws: WebSocket;
    stop: () => void;
    post: (msg: string, send: any) => void;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeTestsService extends BaseAPIService<IEngineTest> {

    private _connections: { [key: string]: ITestConnection } = {};

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'test';
        this._api_route = '/tests';
    }

    public deleteItem() { return new Promise((rs, rj) => rj('No show for this service')); }
    public updateItem() { return new Promise<any>((rs, rj) => rj('No show for this service')); }
    public add() { return new Promise<any>((rs, rj) => rj('No show for this service')); }

    /**
     * Connect websocket and run test on the server
     * @param item Test to run
     * @param next Callback for server test events
     */
    public run(item: IEngineTest, next: (d) => void) {
        const key = `websocket_${item.id}`;
        this.stop(item);
        this.http.token.then((t) => {
            const url = `${this.route().replace('http', 'ws')}/${encodeURIComponent(item.id)}/websocket?bearer_token=${t}`;
            this._connections[key].ws = new WebSocket(url);
            this.set(key, []);
            this.listen(key, next);
            this._connections[key].ws.onmessage = (event) => this.post(item, event.data);
            this._connections[key].ws.onerror = (event) => {
                this.post(item, event as any);
                this.stop(item);
            };
        });
        this._connections[key] = {
            ws: null,
            stop: () => this.stop(item),
            post: (msg, send = false) => this.post(item, msg, send)
        };
        return this._connections[key];
    }

    /**
     * Stop test and disconnect websocket
     * @param item Test to stop
     */
    public stop(item: IEngineTest) {
        const key = `websocket_${item.id}`;
        if (this._connections[key]) {
            if (this._connections[key].ws) {
                this._connections[key].ws.close();
            }
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

    protected process(raw_item: any, id?: string) {
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
