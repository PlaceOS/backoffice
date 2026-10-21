import { MockHttpRequest, registerMockEndpoint } from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    endpointData,
    generateBasicHandlers,
    loadFromSession,
    saveToSession,
} from '../common.mock';
import { AUTHORITY_ID } from './domains.mock';

const SEED_TIME = '2024-03-01T09:00:00.000Z';

interface MockGroup {
    id: string;
    name: string;
    description: string;
    authority_id: string;
    parent_id?: string;
    subsystems: string[];
    default_permissions: number;
    ad_group_mappings: Record<string, [string, number]>;
    created_at: string;
    updated_at: string;
}

interface MockGroupUser {
    user_id: string;
    group_id: string;
    permissions: number;
    auto_assigned: string;
    created_at: string;
    updated_at: string;
}

interface MockGroupZone {
    group_id: string;
    zone_id: string;
    permissions: number;
    deny: boolean;
    created_at: string;
    updated_at: string;
}

const GROUP_DATA: MockGroup[] = [
    {
        id: 'group-facilities',
        name: 'Facilities',
        description: 'Building and facilities staff',
        authority_id: AUTHORITY_ID,
        subsystems: ['bookings'],
        default_permissions: 1,
        ad_group_mappings: {},
        created_at: SEED_TIME,
        updated_at: SEED_TIME,
    },
    {
        id: 'group-av-technicians',
        name: 'AV Technicians',
        description: 'Maintains the meeting room AV equipment',
        authority_id: AUTHORITY_ID,
        parent_id: 'group-facilities',
        subsystems: ['bookings', 'control'],
        default_permissions: 1 | 16,
        ad_group_mappings: {},
        created_at: SEED_TIME,
        updated_at: SEED_TIME,
    },
    {
        id: 'group-reception',
        name: 'Reception',
        description: 'Front desk and visitor management',
        authority_id: AUTHORITY_ID,
        subsystems: ['visitors'],
        default_permissions: 1,
        ad_group_mappings: {},
        created_at: SEED_TIME,
        updated_at: SEED_TIME,
    },
];

/** User IDs are from `./users.mock` */
const GROUP_USER_SEED: [string, string, number][] = [
    ['user-alex-sorafumo', 'group-facilities', 1 | 4],
    ['user-jeremy-west', 'group-av-technicians', 1 | 16],
    ['current', 'group-reception', 255],
];

/** Zone IDs are from `../data/zones` */
const GROUP_ZONE_SEED: [string, string, number, boolean][] = [
    ['group-facilities', 'zone-Kl0HN~nDwc', 1, false], // Tower 2
    ['group-av-technicians', 'zone-LEHeo501Er', 1 | 16, false], // Level 30
    ['group-av-technicians', 'zone-QjLXbYUxuC', 0, true], // Level 31
];

const GROUP_FILTER_FN = (item: MockGroup, q: HashMap) => {
    if (q.q) {
        const search = `${q.q}`.toLowerCase();
        if (!item.name.toLowerCase().includes(search)) return false;
    }
    if (q.parent_id) {
        // `root` matches groups without a parent, like the API
        const parent_id = item.parent_id || '';
        if (q.parent_id === 'root' ? !!parent_id : q.parent_id !== parent_id)
            return false;
    }
    if (q.authority_id && item.authority_id !== q.authority_id) return false;
    return true;
};

const groups = generateBasicHandlers<MockGroup>(
    `${API}/groups`,
    GROUP_DATA,
    GROUP_FILTER_FN,
);

/** Count of direct children, which the API adds to group details */
function withChildCount(group: MockGroup) {
    const children_count = groups().filter(
        ({ parent_id }) => parent_id === group.id,
    ).length;
    return { ...group, children_count };
}

registerMockEndpoint({
    path: `${API}/groups/:id`,
    metadata: GROUP_DATA,
    method: 'GET',
    callback: (event) => {
        const group = groups().find(({ id }) => id === event.route_params.id);
        if (!group) throw { status: 404, message: 'Not found' };
        return withChildCount(group);
    },
});

/**
 * Registers index, add, show, update and remove handlers for a join table.
 * Rows are keyed by two IDs in the order of the item path,
 * e.g. `group_users/:user_id/:group_id`.
 * Rows persist to the same session key as `generateBasicHandlers`, so e2e
 * tests can seed them with `seedMockData`.
 * @param endpoint API endpoint path
 * @param keys Names of the two ID fields, in path order
 * @param seed Rows used when session storage has none. Called on first use
 * @param create Makes a full row from the POST body
 * @param expand Adds related details to rows in responses
 */
function generateJoinHandlers<T extends object>(
    endpoint: string,
    keys: [keyof T & string, keyof T & string],
    seed: () => T[],
    create: (body: Partial<T>) => T,
    expand: (row: T) => T & Record<string, unknown>,
) {
    const storage_key = endpoint.replace(/\//g, '_').replace(/^_/, '');
    let rows: T[] | null = null;
    const list = () => (rows ??= loadFromSession<T>(storage_key, seed()));
    const save = (next: T[]) => {
        rows = next;
        saveToSession(storage_key, next);
    };
    const matches = (row: T, ids: HashMap<string>) =>
        keys.every((key) => !ids[key] || `${row[key]}` === ids[key]);
    const indexOf = (event: MockHttpRequest) => {
        const index = list().findIndex((row) =>
            keys.every((key) => `${row[key]}` === event.route_params[key]),
        );
        if (index < 0) throw { status: 404, message: 'Not found' };
        return index;
    };
    const item_path = `${endpoint}/:${keys[0]}/:${keys[1]}`;

    registerMockEndpoint({
        path: endpoint,
        method: 'GET',
        callback: (event) =>
            list()
                .filter((row) => matches(row, event.query_params))
                .map(expand),
    });
    registerMockEndpoint({
        path: endpoint,
        method: 'POST',
        callback: (event) => {
            const row = create(event.body);
            const ids = {
                [keys[0]]: `${row[keys[0]]}`,
                [keys[1]]: `${row[keys[1]]}`,
            };
            if (list().some((existing) => matches(existing, ids)))
                throw { status: 409, message: 'Already exists' };
            save([...list(), row]);
            return expand(row);
        },
    });
    registerMockEndpoint({
        path: item_path,
        method: 'GET',
        callback: (event) => expand(list()[indexOf(event)]),
    });
    for (const method of ['PATCH', 'PUT'] as const) {
        registerMockEndpoint({
            path: item_path,
            method,
            callback: (event) => {
                const index = indexOf(event);
                const next = [...list()];
                next[index] = {
                    ...next[index],
                    ...event.body,
                    updated_at: new Date().toISOString(),
                };
                save(next);
                return expand(next[index]);
            },
        });
    }
    registerMockEndpoint({
        path: item_path,
        method: 'DELETE',
        callback: (event) => {
            const index = indexOf(event);
            save(list().filter((_, idx) => idx !== index));
            return null;
        },
    });
}

/** Group details for the user and zone pages */
function findGroup(group_id: string) {
    return groups().find(({ id }) => id === group_id);
}

generateJoinHandlers<MockGroupUser>(
    `${API}/group_users`,
    ['user_id', 'group_id'],
    () =>
        GROUP_USER_SEED.map(([user_id, group_id, permissions]) => ({
            user_id,
            group_id,
            permissions,
            auto_assigned: '',
            created_at: SEED_TIME,
            updated_at: SEED_TIME,
        })),
    (body) => {
        const now = new Date().toISOString();
        return {
            user_id: body.user_id || '',
            group_id: body.group_id || '',
            // Users added without permissions get the group defaults
            permissions:
                body.permissions ??
                findGroup(body.group_id || '')?.default_permissions ??
                0,
            auto_assigned: '',
            created_at: now,
            updated_at: now,
        };
    },
    (row) => ({
        ...row,
        user: endpointData(`${API}/users`).find(({ id }) => id === row.user_id),
        group: findGroup(row.group_id),
    }),
);

generateJoinHandlers<MockGroupZone>(
    `${API}/group_zones`,
    ['group_id', 'zone_id'],
    () =>
        GROUP_ZONE_SEED.map(([group_id, zone_id, permissions, deny]) => ({
            group_id,
            zone_id,
            permissions,
            deny,
            created_at: SEED_TIME,
            updated_at: SEED_TIME,
        })),
    (body) => {
        const now = new Date().toISOString();
        return {
            group_id: body.group_id || '',
            zone_id: body.zone_id || '',
            permissions: body.permissions || 0,
            deny: !!body.deny,
            created_at: now,
            updated_at: now,
        };
    },
    (row) => ({
        ...row,
        zone: endpointData(`${API}/zones`).find(({ id }) => id === row.zone_id),
        group: findGroup(row.group_id),
    }),
);
