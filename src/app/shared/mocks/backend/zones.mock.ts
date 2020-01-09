
import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';
import { MOCK_SETTINGS } from './settings.mock';

import * as faker from 'faker';
import * as dayjs from 'dayjs';
import * as yaml from 'js-yaml';

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
        const count = Math.ceil(Math.floor(Math.random() * 10 + 5) * this.model.scale);
        for (let i = 0; i < count; i++) {
            zone_list.push({
                id: `zone-${padZero(i, 4)}`,
                name: `Test Zone ${i + 1}`,
                description: faker.lorem.paragraph(),
                tags: `test zone`,
                created_at: dayjs().add(-Math.floor(Math.random() * 10000), 'm').unix(),
                triggers: [],
                trigger_data: [],
                settings: {
                    settings_string: this.generateSettings()
                }
            });
        }
        zone_list.forEach(zone => MOCK_SETTINGS.push({
            id: `setting-${Math.floor(Math.random() * 999_999_999)}`,
            parent_id: zone.id,
            encryption_level: Math.floor(Math.random() * 4),
            settings_string: zone.settings.settings_string,
            keys: Object.keys(yaml.safeLoad(zone.settings.settings_string)),
            updated_at: dayjs().subtract(Math.floor(Math.random() * 2000), 'm').valueOf()
        }));
        this.model.zones = zone_list;
        this.setupBasicHandlers('api/engine/v2/zones', this.model.zones, 'zone');
        this.state.next(true);
    }

    public search(data, fragment) {
        if (fragment.sys_id) {
            data = data.filter((a) => (a.systems || []).indexOf(fragment.sys_id) >= 0);
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
        return yaml.safeDump(data);
    }
}
