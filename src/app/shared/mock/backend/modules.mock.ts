
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockModulesBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('DRIVERS', 'Loading mock data for dependencies...');
        this.loadList();
    }

    private loadList() {
        const item_list = [];
        const count = Math.floor(Math.random() * 60 + 20);
        const systems = this.model.systems || [];
        for (let i = 0; i < count; i++) {
            const sys = systems.length > 0 ? systems[Math.floor(Math.random() * systems.length)] : { id: 'sys-test' };
            const ip = Math.floor(Math.random() * 999) % 2 ? this.generateIP() : '';
            item_list.push({
                id: `mod-${Utils.padZero(i, 4)}`,
                name: `Test Device ${i + 1}`,
                custom_name: Math.floor(Math.random() * 999) % 2 ? faker.name.firstName() : '',
                connected: Math.floor(Math.random() * 1234321) % 2,
                running: Math.floor(Math.random() * 1234321) % 2,
                control_system_id: sys.id,
                control_system: sys,
                edge_id: 'edge-0001',
                edge: { id: 'edge-0001' },
                ip, port: ip ? Math.floor(Math.random() * 32_767) + 32_768 : '',
                tls: Math.floor(Math.random() * 1234321) % 2,
                udp: Math.floor(Math.random() * 1234321) % 2,
                makebreak: Math.floor(Math.random() * 1234321) % 2,
                notes: Math.floor(Math.random() * 999) % 2 ? faker.lorem.sentence() : '',
                uri: '',
                created_at: moment().add(-Math.floor(Math.random() * 10000 + 10), 'm').unix(),
                updated_at: moment().add(-Math.floor(Math.random() * 2000 + 1), 'm').unix(),
                settings: this.generateSettings()
            });
        }
        this.model.modules = item_list;
        MOCK_REQ_HANDLER.register('/control/api/modules', this.model.modules, (event) => {
            if (!event.data) { event.data = []; }
            if (event.fragment && event.fragment.offset) {
                const start = Math.min(event.data.length, +(event.fragment.offset));
                const end = Math.min(event.data.length, +(event.fragment.offset) + 20);
                return { results: event.data.slice(start, end), total: event.data.length };
            } else {
                return { results: event.data.slice(0, 20), total: event.data.length };
            }
        });
        MOCK_REQ_HANDLER.register('/control/api/modules/:id', this.model.modules, (event) => {
            if (event && event.params && event.params.id) {
                for (const item of event.data) {
                    if (item.id === event.params.id) {
                        return item;
                    }
                }
            }
            return null;
        });
        this.state.next(true);
    }

    public generateSettings(level: number = 1) {
        if (level > 3) { return null; }
        const data: any = {};
        const count = Math.floor(Math.random() * (6 - level) + (4 - level) * 2);
        const types = ['string', 'number', 'boolean', 'object'];
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            switch (type) {
                case 'string':
                    data[`field_level_${level}_${i}`] = faker.lorem.sentence();
                    break;
                case 'number':
                    data[`field_level_${level}_${i}`] = Math.floor(Math.random() * 9999);
                    break;
                case 'boolean':
                    data[`field_level_${level}_${i}`] = Math.floor(Math.random() * 9999) % 2 === 0;
                    break;
                case 'object':
                    data[`field_level_${level}_${i}`] = this.generateSettings(level + 1);
                    break;
            }
        }
        return data;
    }

    public generateIP() {
        let address = ['192', '176', '10'][Math.floor(Math.random() * 3)];
        for (let i = 1; i < 4; i++) {
            if (address) { address += '.'; }
            address += Math.floor(Math.random() * 256);
        }
    }
}
