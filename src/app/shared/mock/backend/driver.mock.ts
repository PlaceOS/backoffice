
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

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
            const funcs = {};
            const fcount = Math.floor(Math.random() * 10 + 2);
            for (let k = 0; k < fcount; k++) {
                const acount = Math.floor(Math.random() * 5);
                const optional = Math.floor(Math.random() * acount);
                const args = [];
                for (let j = 0; j < acount; j++) {
                    const arg = [];
                    arg.push(acount - j <= optional ? 'opt' : 'req');
                    arg.push(`arg${j + 1}`);
                    args.push(arg);
                }
                funcs[`exec${k}`] = {
                    arity: optional ? -(acount - (optional)) - 1 : acount,
                    args
                };
            }
            driver_list.push({
                id: `dep-${Utils.padZero(i, 4)}`,
                name: `Test Driver ${i + 1}`,
                class_name: `::Aca::${department}Test`,
                module_name: department,
                description: faker.lorem.paragraph(),
                default: null,
                ignore_connected: Math.floor(Math.random() * 324662871) % 2 === 0,
                role: 'logic',
                created_at: moment().add(-Math.floor(Math.random() * 10000), 'm').unix(),
                settings: this.generateSettings(),
                funcs
            });
        }
        this.model.drivers = driver_list;
        MOCK_REQ_HANDLER.register('/control/api/dependencies', this.model.drivers, (event) => {
            return this.search(event.data, event.fragment);
        });
        MOCK_REQ_HANDLER.register('/control/api/dependencies/:id', this.model.drivers, (event) => {
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
}
