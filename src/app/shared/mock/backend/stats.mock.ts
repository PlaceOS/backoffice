
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockStatsBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('STATS', 'Loading mock data for stats...');
        this.loadData();
        this.loadList();
    }

    private loadData() {
        this.createHistogram('graph_connections');
        this.createHistogram('graph_offline');
        this.createHistogram('graph_triggers');
    }

    private createHistogram(name: string) {
        const start = moment().add(-(5 * 60), 's');
        this.model[name] = {
            histogram: [],
            interval: 30 * 60,
            period_name: 'day',
            period_start: start.unix()
        };
        const value = Math.floor(Math.random() * 100);
        this.model[name].histogram.push({ avg: value, min: value, max: value, sum: value, count: 1 });
        this.model[name].histogram.push({ avg: value + 2, min: value + 2, max: value + 2, sum: value + 2, count: 1 });
        setInterval(() => {
            const old_value = this.model[name].histogram[this.model[name].histogram.length - 1].max;
            let new_value = old_value + Math.floor(Math.random() * 10) - 5;
            if (new_value < 0) { new_value = 0; }
            this.model[name].histogram.push({ avg: new_value, min: new_value, max: new_value, sum: new_value, count: 1 });
        }, 5 * 60 * 1000);
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
        this.model.states = item_list;
        MOCK_REQ_HANDLER.register('/control/api/stats/:id', this.model.stats, (event) => {
            const period = event.fragment.period || 'day';
            const interval = period === 'hour' ? 5 * 60 : (period === 'week' ? 6 * 60 * 60 : (period === 'month' ? 24 * 60 * 60 : 30 * 60));
            if (event.params.id && this.model[`graph_${event.params.id}`] && this.model[`graph_${event.params.id}`].histogram) {
                const item = JSON.parse(JSON.stringify(this.model[`graph_${event.params.id}`]));
                item.interval = interval;
                item.period_name = period;
                return item;
            }
            return null;
        });
        this.state.next(true);
    }
}
