
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
        const nodes = this.model.nodes || [];
        for (let i = 0; i < count; i++) {
            const zone_list = [];
            const id = `sys-${Utils.padZero(i, 4)}`;
            if (zones) {
                const c = Math.floor(Math.random() * 3 + 1);
                for (let j = 0; j < c; j++) {
                    const zone = zones[Math.floor(Math.random() * zones.length)];
                    if (zone_list.indexOf(zone) < 0) {
                        if (!zone.systems) { zone.systems = []; }
                        zone.systems.push(id);
                        zone_list.push(zone.id);
                    }
                }
            }
            item_list.push({
                id,
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
                funcs: {},
                zones: zone_list,
                settings: this.generateSettings(),
                created_at: moment().add(-Math.floor(Math.random() * 10000), 'm').unix()
            });
        }
        this.model.systems = item_list;
        MOCK_REQ_HANDLER.register('/control/api/systems', this.model.systems, (event) => {
            let data = event.data;
            if (event.fragment.module_id) {
                data = event.data.filter((a) => a.modules.indexOf(event.fragment.module_id) >= 0);
            } else if (event.fragment.zone_id) {
                data = event.data.filter((a) => a.zones.indexOf(event.fragment.zone_id) >= 0);
            }
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

        MOCK_REQ_HANDLER.register('/control/api/systems', this.model.systems, (event) => {
            event.body.id = `sys-${Utils.padZero(this.model.systems.length, 4)}`;
            this.model.systems.push(event.body);
            return event.body;
        }, 'POST');

        MOCK_REQ_HANDLER.register('/control/api/systems/:id/:opt', this.model.systems, (event) => {
            if (event && event.params && event.params.id) {
                if (!event.params.opt) {
                    for (const item of event.data) {
                        if (item.id === event.params.id) {
                            return item;
                        }
                    }
                } else if (event.params.opt === 'funcs') {
                    for (const item of event.data) {
                        if (item.id === event.params.id) {
                            return item.funcs[item.modules[+event.fragment.index - 1]];
                        }
                    }
                } else if (event.params.opt === 'state') {
                    return this.generateSettings();
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
