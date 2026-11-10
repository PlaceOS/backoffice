import { registerMockEndpoint } from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    DOMAIN,
    STAFF_API,
    endpointData,
    generateBasicHandlers,
    nameFilter,
    updateItem,
} from '../common.mock';

// ============ TENANTS ============

const TENANT_DATA = [
    {
        id: 'tenant-default',
        name: 'Default Tenant',
        domain: DOMAIN,
        platform: 'google',
        credentials: '{}',
        booking_limits: {},
        early_checkin: 30,
        secret_expiry: null,
        created_at: 1709283600,
        updated_at: 1709283600,
    },
];

/** Matches `q` against the name and `domain` against the tenant */
const TENANT_FILTER = (item: Record<string, unknown>, q: HashMap) =>
    nameFilter(item, q) && (!q.domain || item.domain === q.domain);

generateBasicHandlers(`${STAFF_API}/tenants`, TENANT_DATA, {
    filter: TENANT_FILTER,
    id_prefix: 'tenant-',
});

/** Find a tenant, or fail with a 404 */
function findTenant(id: string) {
    const tenant = endpointData(`${STAFF_API}/tenants`).find(
        (item) => item.id === id,
    );
    if (!tenant) throw { status: 404, message: 'Tenant not found' };
    return tenant;
}

registerMockEndpoint({
    path: `${STAFF_API}/tenants/:id/limits`,
    method: 'GET',
    callback: (event) => findTenant(event.route_params.id).booking_limits || {},
});

registerMockEndpoint({
    path: `${STAFF_API}/tenants/:id/limits`,
    method: 'PUT',
    callback: (event) =>
        updateItem(
            `${STAFF_API}/tenants`,
            findTenant(event.route_params.id).id,
            {
                booking_limits: event.body,
            },
        ).booking_limits,
});

// ============ DIRECTORY ============

/** Groups in the directory of the tenant */
const DIRECTORY_GROUPS = [
    'All Staff',
    'Facilities',
    'IT Support',
    'Reception',
    'Executive Assistants',
].map((name) => ({
    id: `directory-group-${name.toLowerCase().replace(/\W+/g, '-')}`,
    name,
    email: `${name.toLowerCase().replace(/\W+/g, '.')}@${DOMAIN}`,
    description: `${name} directory group`,
}));

registerMockEndpoint({
    path: `${STAFF_API}/groups`,
    method: 'GET',
    callback: (event) =>
        DIRECTORY_GROUPS.filter((group) =>
            nameFilter(group, event.query_params),
        ),
});

/** Rooms in the calendar of the tenant, for the resource import page */
const ROOM_RESOURCES = [
    ['2.30.08 - Activity Space', 'room-2.30.08', 12],
    ['Board Room', 'room-board', 20],
    ['Focus Room 1', 'room-focus-1', 2],
    ['Focus Room 2', 'room-focus-2', 2],
].map(([name, user, capacity]) => ({
    id: `resource-${user}`,
    displayName: name,
    emailAddress: `${user}@${DOMAIN}`,
    capacity,
    bookingType: 'standard',
    isWheelChairAccessible: true,
    nickname: name,
    phone: '',
    tags: [],
}));

registerMockEndpoint({
    path: `${STAFF_API}/place`,
    method: 'GET',
    callback: () => ROOM_RESOURCES,
});

// ============ CURRENT USER ============

registerMockEndpoint({
    path: `${STAFF_API}/users/current`,
    method: 'GET',
    callback: () => ({
        id: 'current',
        name: 'Place Admin',
        email: 'admin@place.tech',
        sys_admin: true,
        support: true,
        groups: [],
    }),
});
