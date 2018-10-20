
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockNodesBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('NODES', 'Loading mock data for nodes...');
        this.loadList();
    }

    private loadList() {
        const item_list = [];
        const count = Math.floor(Math.random() * 0 + 1);
        for (let i = 0; i < count; i++) {
            const id = `edge-${Utils.padZero(i, 4)}`;
            item_list.push({
                id,
                created_at: moment().add(Math.floor(Math.random() * 1200 + 5), 'm').unix(),
                name: `Test Node ${i + 1}`,
                admins: [],
                description: null,
                failover: true,
                failover_active: false,
                failover_time: 0,
                host_origin: 'http://127.0.0.1',
                master_id: null,
                online: true,
                password: '',
                server_port: 17400,
                settings: {},
                startup_time: 0,
                timeout: 20000,
                window_length: null,
                window_start: null
            });
        }
        this.model.nodes = item_list;
        MOCK_REQ_HANDLER.register('/control/api/nodes', this.model.nodes, (event) => {
            let data = event.data;
            if (event.fragment.q) {
                data = data.filter((a) => (a.name || '').indexOf(event.fragment.q) >= 0);
            }
            if (event.fragment && event.fragment.offset) {
                const start = Math.min(data.length, +(event.fragment.offset));
                const end = Math.min(data.length, +(event.fragment.offset) + 20);
                return { results: data.slice(start, end), total: data.length };
            } else {
                return { results: data.slice(0, 20), total: data.length };
            }
        });
        MOCK_REQ_HANDLER.register('/control/api/nodes/:id', this.model.nodes, (event) => {
            if (event && event.params && event.params.id) {
                if (!event.params.opt) {
                    for (const item of event.data) {
                        if (item.id === event.params.id) {
                            return item;
                        }
                    }
                }
            }
            return null;
        });
        this.state.next(true);
    }
}
