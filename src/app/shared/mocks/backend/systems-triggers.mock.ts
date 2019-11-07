
import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';

import * as faker from 'faker';
import * as dayjs from 'dayjs';

export class MockSystemTriggersBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('SYS_TRIGGRES', 'Loading mock data for system triggers...');
        this.loadList();
    }

    private loadList() {
        const item_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 100 + 25) * this.model.scale);
        const systems = this.model.systems || [];
        const triggers = this.model.triggers || [];
        const zones = this.model.zones || [];
        for (let i = 0; i < count; i++) {
            const id = `sys-${padZero(i, 4)}`;
            const trigger = triggers[Math.floor(Math.random() * triggers.length)];
            const system = systems[Math.floor(Math.random() * systems.length)];
            const zone = Math.floor(Math.random() * 1234565421) % 4 === 0 ? zones[Math.floor(Math.random() * zones.length)] : null;
            item_list.push({
                id,
                binding: id,
                name: trigger.name,
                description: faker.lorem.sentence(),
                trigger_id: trigger.id,
                control_system_id: zone ? null : system.id,
                control_system: zone ? null : system,
                enabled: Math.floor(Math.random() * 1234565421) % 2 === 0,
                conditions: [],
                actions: [],
                important: Math.floor(Math.random() * 1234565421) % 2 === 0,
                override: {},
                trigger_count: Math.floor(Math.random() * 10000),
                triggered: Math.floor(Math.random() * 1234565421) % 2 === 0,
                zone_id: zone ? zone.id : null,
                webhook_secret: `secret_${i + 1}`,
                updated_at: dayjs().add(-Math.floor(Math.random() * 100), 'm').unix(),
                created_at: dayjs().add(-Math.floor(Math.random() * 10000), 'm').unix()
            });
        }
        this.model.system_triggers = item_list;
        this.setupBasicHandlers('api/engine/v1/system_triggers', this.model.system_triggers, 'sys');
        this.state.next(true);
    }

    public search(data, fragment) {
        if (fragment.trigger_id) {
            data = data.filter((a) => a.trigger_id === fragment.trigger_id);
        } else if (fragment.zone_id) {
            data = data.filter((a) => a.zone_id === fragment.zone_id);
        } else if (fragment.sys_id) {
            data = data.filter((a) => a.control_system_id === fragment.sys_id);
        }
        return super.search(data, fragment);
    }
}
