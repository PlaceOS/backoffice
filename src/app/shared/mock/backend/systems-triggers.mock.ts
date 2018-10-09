
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

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
        const count = Math.floor(Math.random() * 100 + 25);
        const systems = this.model.systems || [];
        const triggers = this.model.triggers || [];
        const zones = this.model.zones || [];
        for (let i = 0; i < count; i++) {
            const id = `sys-${Utils.padZero(i, 4)}`;
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
                updated_at: moment().add(-Math.floor(Math.random() * 100), 'm').unix(),
                created_at: moment().add(-Math.floor(Math.random() * 10000), 'm').unix()
            });
        }
        this.model.system_triggers = item_list;
        MOCK_REQ_HANDLER.register('/control/api/system_triggers', this.model.system_triggers, (event) => {
            let data = event.data;
            if (event.fragment.trigger_id) {
                data = event.data.filter((a) => a.trigger_id === event.fragment.trigger_id);
            } else if (event.fragment.zone_id) {
                data = event.data.filter((a) => a.zone_id === event.fragment.zone_id);
            } else if (event.fragment.sys_id) {
                data = event.data.filter((a) => a.control_system_id === event.fragment.sys_id);
            }
            if (event.fragment && event.fragment.offset) {
                const start = Math.min(data.length, +(event.fragment.offset));
                const end = Math.min(data.length, +(event.fragment.offset) + 20);
                return { results: data.slice(start, end), total: data.length };
            } else {
                return { results: data.slice(0, 20), total: data.length };
            }
        });
        this.state.next(true);
    }
}
