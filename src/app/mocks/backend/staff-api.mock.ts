import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    DOMAIN,
    generateID,
    loadFromSession,
    saveToSession,
} from '../common.mock';

const STAFF_API = '/api/staff/v1';

/** Default tenant data */
const DEFAULT_TENANTS = [
    {
        id: 'tenant-default',
        name: 'Default Tenant',
        domain: DOMAIN,
        platform: 'google',
        credentials: '{}',
        booking_limits: {},
        early_checkin: 30,
        secret_expiry: null,
        created_at: Date.now() / 1000,
        updated_at: Date.now() / 1000,
    },
];

/** In-memory storage with session persistence */
const TENANTS: any[] = loadFromSession('tenants', DEFAULT_TENANTS);

const createFilter = (items: any[]) => (q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return items;
    }
    return items.filter((item) => {
        let match = true;
        if (q.domain) {
            match = match && item.domain === q.domain;
        }
        if (q.q) {
            match =
                match &&
                (item.name || '')
                    .toLowerCase()
                    .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
        }
        return match;
    });
};

// ============ TENANTS ============

/** GET tenants list */
registerMockEndpoint({
    path: `${STAFF_API}/tenants`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(TENANTS)(event.query_params),
} as MockHttpRequestHandler);

/** GET tenant by ID */
registerMockEndpoint({
    path: `${STAFF_API}/tenants/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const tenant = TENANTS.find((t) => t.id === event.route_params.id);
        if (tenant) return tenant;
        throw { status: 404, message: 'Tenant not found' };
    },
} as MockHttpRequestHandler);

/** POST create tenant */
registerMockEndpoint({
    path: `${STAFF_API}/tenants`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const tenant = {
            id: `tenant-${generateID()}`,
            ...event.body,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        TENANTS.push(tenant);
        saveToSession('tenants', TENANTS);
        return tenant;
    },
} as MockHttpRequestHandler);

/** PUT/PATCH update tenant */
registerMockEndpoint({
    path: `${STAFF_API}/tenants/:id`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = TENANTS.findIndex((t) => t.id === event.route_params.id);
        if (index >= 0) {
            TENANTS[index] = {
                ...TENANTS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('tenants', TENANTS);
            return TENANTS[index];
        }
        throw { status: 404, message: 'Tenant not found' };
    },
} as MockHttpRequestHandler);

registerMockEndpoint({
    path: `${STAFF_API}/tenants/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = TENANTS.findIndex((t) => t.id === event.route_params.id);
        if (index >= 0) {
            TENANTS[index] = {
                ...TENANTS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('tenants', TENANTS);
            return TENANTS[index];
        }
        throw { status: 404, message: 'Tenant not found' };
    },
} as MockHttpRequestHandler);

/** DELETE tenant */
registerMockEndpoint({
    path: `${STAFF_API}/tenants/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = TENANTS.findIndex((t) => t.id === event.route_params.id);
        if (index >= 0) {
            TENANTS.splice(index, 1);
            saveToSession('tenants', TENANTS);
            return {};
        }
        throw { status: 404, message: 'Tenant not found' };
    },
} as MockHttpRequestHandler);

/** GET tenant booking limits */
registerMockEndpoint({
    path: `${STAFF_API}/tenants/:id/limits`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const tenant = TENANTS.find((t) => t.id === event.route_params.id);
        if (tenant) return tenant.booking_limits || {};
        throw { status: 404, message: 'Tenant not found' };
    },
} as MockHttpRequestHandler);

/** PUT update tenant booking limits */
registerMockEndpoint({
    path: `${STAFF_API}/tenants/:id/limits`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = TENANTS.findIndex((t) => t.id === event.route_params.id);
        if (index >= 0) {
            TENANTS[index].booking_limits = event.body;
            saveToSession('tenants', TENANTS);
            return TENANTS[index].booking_limits;
        }
        throw { status: 404, message: 'Tenant not found' };
    },
} as MockHttpRequestHandler);

// ============ CURRENT USER ============

/** GET current user */
registerMockEndpoint({
    path: `${STAFF_API}/users/current`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return {
            id: 'current',
            name: 'Place Admin',
            email: 'admin@place.tech',
            sys_admin: true,
            support: true,
            groups: [],
        };
    },
} as MockHttpRequestHandler);
