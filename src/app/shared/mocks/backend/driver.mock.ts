
import { EngineModuleFunction, HashMap, MockHttpRequestHandler } from '@acaengine/ts-client';

import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';
import { MOCK_SETTINGS } from './settings.mock';

import * as faker from 'faker';
import * as dayjs from 'dayjs';
import * as yaml from 'js-yaml';

export class MockDriversBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('DRIVERS', 'Loading mock data for dependencies...');
        this.loadDrivers();
    }

    private loadDrivers() {
        const driver_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 10 + 5) * this.model.scale);
        for (let i = 0; i < count; i++) {
            const department = faker.commerce.department();
            const funcs: HashMap<EngineModuleFunction> = {};
            const fcount = Math.floor(Math.random() * 10 + 2);
            for (let k = 0; k < fcount; k++) {
                const acount = Math.floor(Math.random() * 5);
                const optional = Math.floor(Math.random() * acount);
                const params: any[] = [];
                for (let j = 0; j < acount; j++) {
                    const arg = [];
                    arg.push(acount - j <= optional ? 'opt' : 'req');
                    arg.push(`arg${j + 1}`);
                    params.push(arg);
                }
                funcs[`exec${k}`] = {
                    arity: optional ? -(acount - (optional)) - 1 : acount,
                    params
                };
            }
            driver_list.push({
                id: `dep-${padZero(i, 4)}`,
                name: `Test Driver ${i + 1}`,
                class_name: `::Aca::${department}Test`,
                module_name: department,
                description: faker.lorem.paragraph(),
                default: null,
                ignore_connected: Math.floor(Math.random() * 324662871) % 2 === 0,
                role: 'logic',
                created_at: dayjs().add(-Math.floor(Math.random() * 10000), 'm').unix(),
                settings: this.generateSettings(),
                funcs
            });
        }
        driver_list.forEach(driver => MOCK_SETTINGS.push({
            id: `setting-${Math.floor(Math.random() * 999_999_999)}`,
            parent_id: driver.id,
            encryption_level: Math.floor(Math.random() * 4),
            settings_string: driver.settings.settings_string,
            keys: Object.keys(yaml.safeLoad(driver.settings.settings_string)),
            updated_at: dayjs().subtract(Math.floor(Math.random() * 2000), 'm').valueOf()
        }));
        this.model.drivers = driver_list;
        this.setupBasicHandlers('api/engine/v2/drivers', this.model.drivers, 'dep');
        window.control.handlers.push({
            path: 'api/engine/v2/drivers/:id/reload',
            method: 'POST',
            callback: _ => ({})
        } as MockHttpRequestHandler);
        this.state.next(true);
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
}
