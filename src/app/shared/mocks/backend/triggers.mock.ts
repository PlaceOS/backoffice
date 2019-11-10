
import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';

import * as faker from 'faker';
import * as dayjs from 'dayjs';

export class MockTriggersBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('TRIGGERS', 'Loading mock data for triggers...');
        this.loadList();
    }

    private loadList() {
        const item_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 10 + 5) * this.model.scale);
        for (let i = 0; i < count; i++) {
            item_list.push({
                id: `trigger-${padZero(i, 4)}`,
                name: `Test Trigger ${i + 1}`,
                description: faker.lorem.paragraph(),
                important: Math.floor(Math.random() * 124631) % 5,
                debounce_period: 0,
                conditions: [],
                action: [],
                created_at: dayjs().add(-Math.floor(Math.random() * 10000), 'm').unix()
            });
        }
        this.model.triggers = item_list;
        this.setupBasicHandlers('api/engine/v2/triggers', this.model.triggers, 'trigger');
        this.setupBasicHandlers('api/engine/v2/system-triggers', this.model.triggers, 'trigger');
        this.state.next(true);
    }
}
