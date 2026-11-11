import { registerMockEndpoint } from '@placeos/ts-client';
import {
    API,
    MockItem,
    createMockStore,
    endpointData,
    generateBasicHandlers,
    nameFilter,
} from '../common.mock';

const SEED_TIME = 1709283600;

const TRIGGER_DATA = [
    {
        id: 'trigger-room-occupied',
        name: 'Room Occupied',
        description: 'Turns the lights on when people are in the room',
        conditions: {
            comparisons: [
                {
                    left: { mod: 'Sensor_1', status: 'people_count', keys: [] },
                    operator: 'greater_than',
                    right: 0,
                },
            ],
            time_dependents: [],
        },
        actions: {
            functions: [
                { mod: 'Lighting_1', method: 'power', args: { state: true } },
            ],
            mailers: [],
        },
        debounce_period: 0,
        important: false,
        enable_webhook: false,
        supported_methods: ['POST'],
        created_at: SEED_TIME,
        updated_at: SEED_TIME,
    },
    {
        id: 'trigger-after-hours',
        name: 'After Hours',
        description: 'Powers off displays every evening',
        conditions: {
            comparisons: [],
            time_dependents: [
                { type: 'cron', cron: '0 19 * * 1-5', timezone: 'UTC' },
            ],
        },
        actions: {
            functions: [
                { mod: 'Display_1', method: 'power', args: { state: false } },
            ],
            mailers: [],
        },
        debounce_period: 0,
        important: true,
        enable_webhook: true,
        supported_methods: ['POST'],
        created_at: SEED_TIME,
        updated_at: SEED_TIME,
    },
];

generateBasicHandlers(`${API}/triggers`, TRIGGER_DATA, {
    filter: nameFilter,
    id_prefix: 'trigger-',
});

/** Trigger added to a system. Has the ID of the trigger and the system */
export interface MockTriggerInstance extends MockItem {
    trigger_id: string;
    control_system_id: string;
}

/** Triggers added to systems */
export const TRIGGER_INSTANCES = createMockStore<MockTriggerInstance[]>(
    'trigger_instances',
    [
        {
            id: 'inst-room-occupied',
            trigger_id: 'trigger-room-occupied',
            control_system_id: 'space-1',
            enabled: true,
            important: false,
            triggered: false,
            trigger_count: 3,
            exec_enabled: true,
            webhook_secret: 'mock-secret',
            created_at: SEED_TIME,
            updated_at: SEED_TIME,
        },
    ],
);

/** Instance with the details of its trigger, like the API returns */
export function expandInstance(instance: MockTriggerInstance) {
    const trigger = endpointData(`${API}/triggers`).find(
        ({ id }) => id === instance.trigger_id,
    );
    return { ...trigger, ...instance };
}

registerMockEndpoint({
    path: `${API}/triggers/:id/instances`,
    method: 'GET',
    callback: (event) =>
        TRIGGER_INSTANCES()
            .filter(({ trigger_id }) => trigger_id === event.route_params.id)
            .map(expandInstance),
});
