
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';

import * as faker from 'faker';
import * as dayjs from 'dayjs';

export class MockSystemsBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('SYSTEMS', 'Loading mock data for systems...');
        this.loadList();
    }

    private loadList() {
        const count = Math.ceil(Math.floor(Math.random() * 100 + 25) * this.model.scale);
        const zones = this.model.zones || [];
        const nodes = this.model.nodes || [];
        let i = 0;
        this.model.systems = Array(count)
            .fill(1)
            .map(_ => {
                const zone_list = [];
                const id = `sys-${padZero(i++, 4)}`;
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
                return {
                    id,
                    edge_id: 'edge-0001',
                    name: `Test System ${i}`,
                    description: faker.lorem.paragraph(),
                    bookable: Math.floor(Math.random() * 1234321) % 3,
                    capacity: Math.floor(Math.random() * 64),
                    email: `sys-${padZero(i, 4)}@room.tools`,
                    features: ``, installed_ui_devices: 0, support_url: '', modules: [], funcs: {},
                    zones: zone_list,
                    settings: this.generateSettings(),
                    created_at: dayjs().add(-Math.floor(Math.random() * 10000), 'm').unix()
                };
            });
        this.model.systems = this.setupBasicHandlers('/control/api/systems', this.model.systems, 'sys');
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

    public updateOtherEndpoints(list) {
        this.model.zones.forEach(i => i.systems = []);
        this.model.modules.forEach(i => i.systems = []);
        console.log('List:', list);
        for (const system of list) {
            for (const zone_id of system.zones) {
                const zone = this.model.zones.find(i => i.id === zone_id);
                if (zone) {
                    zone.systems.push(system.id);
                }
            }
            console.log('Mod list:', system.id, system.modules);
            for (const mod_id of system.modules) {
                const mod = this.model.modules.find(i => i.id === mod_id);
                if (mod) {
                    mod.systems.push(system.id);
                }
            }
        }
        console.log('Zones:', this.model.modules);
    }

    public search(data, fragment) {
        if (fragment.module_id) {
            data = data.filter((a) => a.modules.indexOf(fragment.module_id) >= 0);
        } else if (fragment.zone_id) {
            data = data.filter((a) => a.zones.indexOf(fragment.zone_id) >= 0);
        }
        return super.search(data, fragment);
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
