
import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';
import { MOCK_SETTINGS } from './settings.mock';

import * as faker from 'faker';
import * as dayjs from 'dayjs';
import * as yaml from 'js-yaml';

export class MockModulesBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('DEVICES', 'Loading mock data for modules...');
        this.loadList();
    }

    private loadList() {
        const item_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 500 + 120) * this.model.scale);
        const systems = this.model.systems || [];
        const drivers = this.model.drivers || [];
        console.log('Control:', window.control);
        if (!window.control.systems) {
            window.control.systems = {};
        }
        for (let i = 0; i < count; i++) {
            const sys = systems.length > 0 ? systems[Math.floor(Math.random() * systems.length)] : { id: 'sys-test', name: 'sys' };
            const driver = drivers.length > 0 ? drivers[Math.floor(Math.random() * drivers.length)] : { id: 'dep-test', name: 'dep' };
            const ip = Math.floor(Math.random() * 999) % 2 === 0 ? this.generateIP() : '';
            const id = `mod-${padZero(i, 4)}`;
            sys.modules.push(id);
            sys.funcs[id] = driver.funcs || {};
            const item = {
                id,
                name: `Test Module ${i + 1}`,
                custom_name: Math.floor(Math.random() * 999) % 2 === 0 ? faker.name.firstName() : '',
                connected: Math.floor(Math.random() * 1234321) % 2 === 0,
                running: Math.floor(Math.random() * 1234321) % 2 === 0,
                control_system_id: sys.id,
                control_system: sys,
                dependency_id: driver.id,
                dependency: driver,
                edge_id: 'edge-0001',
                edge: { id: 'edge-0001' },
                role: sys.modules.length - 1,
                ip, port: ip ? Math.floor(Math.random() * 32_767) + 32_768 : '',
                tls: Math.floor(Math.random() * 1234321) % 2 === 0,
                udp: Math.floor(Math.random() * 1234321) % 2 === 0,
                makebreak: Math.floor(Math.random() * 1234321) % 2 === 0,
                notes: Math.floor(Math.random() * 999) % 2 === 0 ? faker.lorem.sentence() : '',
                uri: '',
                created_at: dayjs().add(-Math.floor(Math.random() * 10000 + 10), 'm').unix(),
                updated_at: dayjs().add(-Math.floor(Math.random() * 2000 + 1), 'm').unix(),
                settings: {
                    settings_string: this.generateSettings()
                }
            };
            if (!window.control.systems[sys.id]) {
                window.control.systems[sys.id] = {};
            }
            const mod = item.custom_name || driver.module_name;
            if (!window.control.systems[sys.id][mod]) {
                window.control.systems[sys.id][mod] = [];
            }
            window.control.systems[sys.id][mod].push({ connected: item.connected })
            item_list.push(item);
        }
        item_list.forEach(mod => MOCK_SETTINGS.push({
            id: `setting-${Math.floor(Math.random() * 999_999_999)}`,
            parent_id: mod.id,
            encryption_level: Math.floor(Math.random() * 4),
            settings_string: mod.settings.settings_string,
            keys: Object.keys(yaml.safeLoad(mod.settings.settings_string)),
            updated_at: dayjs().subtract(Math.floor(Math.random() * 2000), 'm').valueOf()
        }));
        this.model.modules = item_list;
        this.setupBasicHandlers('api/engine/v2/modules', this.model.modules, 'mod');
        this.state.next(true);
    }

    public search(data, fragment) {
        if (fragment.sys_id) {
            data = data.filter((a) => a.control_system_id === fragment.sys_id || (a.systems || []).indexOf(fragment.sys_id) >= 0);
        } else if (fragment.dependency_id) {
            data = data.filter((a) => a.dependency_id === fragment.dependency_id);
        }
        if (fragment.q) {
            const search = fragment.q.toLowerCase();
            data = data.filter((a) => (a.name || '').toLowerCase().indexOf(search) >= 0);
        }
        return super.search(data, fragment);
    }

    public generateSettings(level: number = 1) {
        if (level > 3) { return null; }
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
        return yaml.safeDump(data);
    }

    public generateIP() {
        let address = ['192', '176', '10'][Math.floor(Math.random() * 3)];
        for (let i = 1; i < 4; i++) {
            if (address) { address += '.'; }
            address += Math.floor(Math.random() * 256);
        }
        return address;
    }
}
