
import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';

import * as faker from 'faker';
import * as dayjs from 'dayjs';

export class MockDiscoveryBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('DISCOVERY', 'Loading mock data for discovering drivers...');
        this.loadDrivers();
    }

    private loadDrivers() {
        const driver_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 10 + 5) * this.model.scale);
        for (let i = 0; i < count; i++) {
            const department = faker.commerce.department();
            driver_list.push({
                id: `dep-${padZero(i, 4)}`,
                name: `Test ${department} ${i + 1}`,
                class_name: `::Aca::${department}Test`,
                module_name: department,
                description: faker.lorem.paragraph(),
                default: null,
                ignore_connected: Math.floor(Math.random() * 324662871) % 2 === 0,
                role: 'logic',
                created_at: dayjs().add(-Math.floor(Math.random() * 10000), 'm').unix(),
                settings: this.generateSettings()
            });
        }
        this.model.discovery = driver_list;
        this.setupBasicHandlers('/control/api/discovery', this.model.discovery, 'dep');
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
