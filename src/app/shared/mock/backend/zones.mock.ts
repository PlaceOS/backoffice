
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockZonesBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('ZONES', 'Loading mock data for zones...');
        this.loadZones();
    }

    private loadZones() {
        const zone_list = [];
        const count = Math.floor(Math.random() * 50 + 25);
        for (let i = 0; i < count; i++) {
            zone_list.push({
                id: `zone-${Utils.padZero(i, 4)}`,
                name: `Test Zone ${i + 1}`,
                description: faker.lorem.paragraph(),
                tags: `test zone`,
                created_at: moment().add(-Math.floor(Math.random() * 10000), 'm').unix(),
                triggers: [],
                trigger_data: [],
                settings: this.generateSettings()
            });
        }
        this.model.zones = zone_list;
        MOCK_REQ_HANDLER.register('/control/api/zones', this.model.zones, (event) => {
            let data = event.data
            if (event.fragment.sys_id) {
                data = event.data.filter((a) => (a.systems || []).indexOf(event.fragment.sys_id) >= 0);
            }
            if (event.fragment && event.fragment.offset) {
                const start = Math.min(data.length, +(event.fragment.offset));
                const end = Math.min(data.length, +(event.fragment.offset) + 20);
                return { results: data.slice(start, end), total: data.length };
            } else {
                return { results: data.slice(0, 20), total: data.length };
            }
        });
        MOCK_REQ_HANDLER.register('/control/api/zones/:id', this.model.zones, (event) => {
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
