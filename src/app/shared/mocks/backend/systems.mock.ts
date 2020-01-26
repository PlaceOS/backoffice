
import { MockHttpRequestHandler } from '@acaengine/ts-client';

import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';

import * as faker from 'faker';
import * as dayjs from 'dayjs';
import * as yaml from 'js-yaml';
import { MOCK_SETTINGS } from './settings.mock';

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
                    settings: {
                        settings_string: this.generateSettings()
                    },
                    created_at: dayjs().add(-Math.floor(Math.random() * 10000), 'm').unix()
                };
            });
        this.model.systems.forEach(system => MOCK_SETTINGS.push({
            id: `setting-${Math.floor(Math.random() * 999_999_999)}`,
            parent_id: system.id,
            encryption_level: Math.floor(Math.random() * 4),
            settings_string: system.settings.settings_string,
            keys: Object.keys(yaml.safeLoad(system.settings.settings_string)),
            updated_at: dayjs().subtract(Math.floor(Math.random() * 2000), 'm').valueOf()
        }));
        this.model.systems.forEach(i => this.generateMockSystem(i))
        this.model.systems = this.setupBasicHandlers('api/engine/v2/systems', this.model.systems, 'sys');
        window.control.handlers.push({
            path: 'api/engine/v2/systems/:id/:opt',
            metadata: this.model.systems,
            method: 'GET',
            callback: (event) => {
                if (event && event.route_params && event.route_params.id) {
                    if (!event.route_params.opt) {
                        for (const item of this.model.systems) {
                            if (item.id === event.route_params.id) {
                                return item;
                            }
                        }
                    } else if (event.route_params.opt === 'funcs') {
                        for (const item of this.model.systems) {
                            if (item.id === event.route_params.id) {
                                return item.funcs[item.modules[+event.query_params.index - 1]];
                            }
                        }
                    } else if (event.route_params.opt === 'state') {
                        return yaml.safeLoad(this.generateSettings());
                    }
                }
                return null;
            }
        } as MockHttpRequestHandler);
        this.state.next(true);
    }

    public updateOtherEndpoints(list) {
        this.model.zones.forEach(i => i.systems = []);
        this.model.modules.forEach(i => i.systems = []);
        for (const system of list) {
            for (const zone_id of system.zones) {
                const zone = this.model.zones.find(i => i.id === zone_id);
                if (zone) {
                    zone.systems.push(system.id);
                }
            }
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
        const output = yaml.safeDump(data, { indent: 4 });
        return output;
    }

    private generateMockSystem(data) {
        window.control.systems[data.id] = {
            System: [{
                connected: Math.floor(Math.random() * 999999) % 3 === 0
            }]
        }
    }
}
