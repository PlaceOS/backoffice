
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockSystemsBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('SYSTEMS', 'Loading mock data for systems...');
        this.loadList();
    }

    private loadList() {
        const item_list = [];
        const count = Math.floor(Math.random() * 100 + 25);
        const zones = this.model.zones || [];
        for (let i = 0; i < count; i++) {
            const zone_list = [];
            if (zones) {
                const count = Math.floor(Math.random() * 3);
                for (let i = 0; i < count; i++) {
                    const zone = zones[Math.floor(Math.random() * zones.length)];
                    if (zone_list.indexOf(zone) < 0) { zone_list.push(zone); }
                }
            }
            item_list.push({
                id: `sys-${Utils.padZero(i, 4)}`,
                edge_id: 'edge-0001',
                name: `Test System ${i + 1}`,
                description: faker.lorem.paragraph(),
                bookable: Math.floor(Math.random() * 1234321) % 3,
                capacity: Math.floor(Math.random() * 64),
                email: `sys-${Utils.padZero(i, 4)}@room.tools`,
                features: ``,
                installed_ui_devices: 0,
                support_url: '',
                modules: [],
                zones: zone_list,
                settings: this.generateSettings(),
                created_at: moment().add(-Math.floor(Math.random() * 10000), 'm').unix()
            });
        }
        this.model.systems = item_list;
        MOCK_REQ_HANDLER.register('/control/api/systems', this.model.systems, (event) => {
            if (event.fragment && event.fragment.offset) {
                const start = Math.min(event.data.length, +(event.fragment.offset));
                const end = Math.min(event.data.length, +(event.fragment.offset) + 20);
                return { results: event.data.slice(start, end), total: event.data.length };
            } else {
                return { results: event.data.slice(0, 20), total: event.data.length };
            }
        });
        MOCK_REQ_HANDLER.register('/control/api/systems/:id', this.model.systems, (event) => {
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
        if (level > 4) { return null; }
        const data: any = {};
        const count = Math.floor(Math.random() * (10 - level) + (5 - level) * 2);
        const types = ['string', 'number', 'boolean', 'object'];
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            switch(type) {
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
}
