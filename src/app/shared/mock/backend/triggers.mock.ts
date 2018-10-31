
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

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
        const count = Math.floor(Math.random() * 10 + 5);
        for (let i = 0; i < count; i++) {
            item_list.push({
                id: `trigger-${Utils.padZero(i, 4)}`,
                name: `Test Trigger ${i + 1}`,
                description: faker.lorem.paragraph(),
                important: Math.floor(Math.random() * 124631) % 5,
                debounce_period: 0,
                conditions: [],
                action: [],
                created_at: moment().add(-Math.floor(Math.random() * 10000), 'm').unix()
            });
        }
        this.model.triggers = item_list;
        MOCK_REQ_HANDLER.register('/control/api/triggers', this.model.triggers, (event) => {
            return this.search(event.data, event.fragment);
        });
        MOCK_REQ_HANDLER.register('/control/api/triggers/:id', this.model.triggers, (event) => {
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
}
