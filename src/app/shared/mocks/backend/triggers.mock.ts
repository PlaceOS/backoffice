import {
    TriggerComparison,
    TriggerTimeCondition,
    TriggerFunction,
    TriggerMailer,
    TriggerConditionOperator,
    TriggerTimeConditionType
} from '@acaengine/ts-client';

import { BaseMockBackend } from './base.mock';
import { padZero, randomInt } from '../../utilities/general.utilities';

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
                conditions: {
                    comparisons: Array(randomInt(5) + 1)
                        .fill(0)
                        .map(i => generateTriggerComparison()),
                    time_dependents: Array(randomInt(5) + 1)
                        .fill(0)
                        .map(i => generateTriggerTimeDependant())
                },
                actions: {
                    functions: Array(randomInt(5) + 1)
                        .fill(0)
                        .map(i => generateTriggerFunction()),
                    mailers: Array(randomInt(5) + 1)
                        .fill(0)
                        .map(i => generateTriggerMailer())
                },
                created_at: dayjs()
                    .add(-Math.floor(Math.random() * 10000), 'm')
                    .unix()
            });
        }
        this.model.triggers = item_list;
        this.setupBasicHandlers('api/engine/v2/triggers', this.model.triggers, 'trigger');
        this.setupBasicHandlers('api/engine/v2/system-triggers', this.model.triggers, 'trigger');
        this.state.next(true);
    }
}

const OP_MAP = [];
for (const n in TriggerConditionOperator) {
    if (typeof TriggerConditionOperator[n] === 'string') {
        OP_MAP.push({ id: TriggerConditionOperator[n] as any, name: n });
    }
}

export function generateTriggerComparison(): TriggerComparison {
    return {
        left: {
            mod: `${faker.commerce.department()}_${randomInt(9, 1)}`,
            status: `power`,
            keys: []
        },
        operator: OP_MAP[randomInt(OP_MAP.length)].id as any,
        right: randomInt(999_999_999)
    };
}

export function generateTriggerTimeDependant(): TriggerTimeCondition {
    return randomInt(999) % 2 === 0
        ? { type: TriggerTimeConditionType.CRON, cron: `* * * * *` }
        : {
              type: TriggerTimeConditionType.AT,
              time: `${dayjs()
                  .add(randomInt(999_999) + 10, 'm')
                  .unix()}`
          };
}

export function generateTriggerFunction(): TriggerFunction {
    return {
        mod: `${faker.commerce.department()}_${randomInt(9, 1)}`,
        method: `power`,
        args: {}
    };
}

export function generateTriggerMailer(): TriggerMailer {
    return {
        emails: Array(randomInt(15, 1))
            .fill(0)
            .map(
                i =>
                    `${faker.name.firstName().toLowerCase()}.${faker.name.lastName().toLowerCase()}@acaengine.com`
            ),
        content: faker.lorem.paragraph()
    };
}
