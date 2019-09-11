
import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';

import * as dayjs from 'dayjs';

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
        const count = Math.ceil(Math.floor(Math.random() * 4 + 2) * this.model.scale);
        for (let i = 0; i < count; i++) {
            const id = `edge-${padZero(i, 4)}`;
            item_list.push({
                id,
                created_at: dayjs().add(Math.floor(Math.random() * 1200 + 5), 'm').unix(),
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
        this.setupBasicHandlers('/control/api/nodes', this.model.nodes, 'edge');
        this.state.next(true);
    }
}
