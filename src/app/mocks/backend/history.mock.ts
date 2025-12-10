import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';
import { API, generateID } from '../common.mock';

/**
 * Generate mock history entries
 */
function generateHistory(parent_id: string, count = 5): any[] {
    const actions = ['create', 'update', 'delete'];
    const users = ['admin@place.tech', 'user@place.tech', 'system'];

    return Array(count)
        .fill(0)
        .map((_, i) => ({
            id: `history-${generateID()}`,
            parent_id,
            action: actions[Math.floor(Math.random() * actions.length)],
            user_id: `user-${i}`,
            user_email: users[Math.floor(Math.random() * users.length)],
            changes: {
                name: { from: 'Old Name', to: 'New Name' },
            },
            created_at: Date.now() / 1000 - i * 86400, // One day apart
        }));
}

// Parent types that support history
const PARENT_TYPES = [
    'systems',
    'zones',
    'drivers',
    'modules',
    'users',
    'triggers',
    'repositories',
];

// Register history endpoints for each parent type
PARENT_TYPES.forEach((parent_type) => {
    /** GET history for parent */
    registerMockEndpoint({
        path: `${API}/${parent_type}/:id/history`,
        metadata: [],
        method: 'GET',
        callback: (event) => {
            const parent_id = event.route_params.id;
            const limit = parseInt(event.query_params?.limit) || 10;
            return generateHistory(parent_id, limit);
        },
    } as MockHttpRequestHandler);
});

// Settings history
registerMockEndpoint({
    path: `${API}/settings/:id/history`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const parent_id = event.route_params.id;
        return generateHistory(parent_id, 5).map((h) => ({
            ...h,
            settings_string: '{}',
        }));
    },
} as MockHttpRequestHandler);
