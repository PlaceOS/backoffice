import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    generateID,
    loadFromSession,
    saveToSession,
} from '../common.mock';

/** In-memory storage with session persistence */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const API_KEYS: Record<string, any>[] = loadFromSession('api_keys', []);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BROKERS: Record<string, any>[] = loadFromSession('brokers', []);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EDGES: Record<string, any>[] = loadFromSession('edges', []);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const APPLICATIONS: Record<string, any>[] = loadFromSession('applications', []);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UPLOADS: Record<string, any>[] = loadFromSession('uploads', []);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const STORAGE_PROVIDERS: Record<string, any>[] = loadFromSession(
    'storage_providers',
    [],
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createFilter = (items: Record<string, any>[]) => (q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return items;
    }
    return items.filter((item) => {
        let match = true;
        if (q.authority_id) {
            match = match && item.authority_id === q.authority_id;
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

// ============ API KEYS ============

/** GET API keys list */
registerMockEndpoint({
    path: `${API}/api_keys`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(API_KEYS)(event.query_params),
} as MockHttpRequestHandler);

/** GET API key by ID */
registerMockEndpoint({
    path: `${API}/api_keys/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const key = API_KEYS.find((k) => k.id === event.route_params.id);
        if (key) return key;
        throw { status: 404, message: 'API key not found' };
    },
} as MockHttpRequestHandler);

/** POST create API key */
registerMockEndpoint({
    path: `${API}/api_keys`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const key = {
            id: `api_key-${generateID()}`,
            ...event.body,
            x_api_key: `sk_${generateID(32)}`,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        API_KEYS.push(key);
        saveToSession('api_keys', API_KEYS);
        return key;
    },
} as MockHttpRequestHandler);

/** PATCH update API key */
registerMockEndpoint({
    path: `${API}/api_keys/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = API_KEYS.findIndex(
            (k) => k.id === event.route_params.id,
        );
        if (index >= 0) {
            const updated_key = {
                ...API_KEYS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            API_KEYS[index] = updated_key;
            saveToSession('api_keys', API_KEYS);
            return updated_key;
        }
        throw { status: 404, message: 'API key not found' };
    },
} as MockHttpRequestHandler);

/** DELETE API key */
registerMockEndpoint({
    path: `${API}/api_keys/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = API_KEYS.findIndex((k) => k.id === event.route_params.id);
        if (index >= 0) {
            API_KEYS.splice(index, 1);
            saveToSession('api_keys', API_KEYS);
            return {};
        }
        throw { status: 404, message: 'API key not found' };
    },
} as MockHttpRequestHandler);

// ============ BROKERS ============

/** GET brokers list */
registerMockEndpoint({
    path: `${API}/brokers`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(BROKERS)(event.query_params),
} as MockHttpRequestHandler);

/** GET broker by ID */
registerMockEndpoint({
    path: `${API}/brokers/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const broker = BROKERS.find((b) => b.id === event.route_params.id);
        if (broker) return broker;
        throw { status: 404, message: 'Broker not found' };
    },
} as MockHttpRequestHandler);

/** POST create broker */
registerMockEndpoint({
    path: `${API}/brokers`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const broker = {
            id: `broker-${generateID()}`,
            ...event.body,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        BROKERS.push(broker);
        saveToSession('brokers', BROKERS);
        return broker;
    },
} as MockHttpRequestHandler);

/** PUT/PATCH update broker */
registerMockEndpoint({
    path: `${API}/brokers/:id`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = BROKERS.findIndex((b) => b.id === event.route_params.id);
        if (index >= 0) {
            BROKERS[index] = {
                ...BROKERS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('brokers', BROKERS);
            return BROKERS[index];
        }
        throw { status: 404, message: 'Broker not found' };
    },
} as MockHttpRequestHandler);

registerMockEndpoint({
    path: `${API}/brokers/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = BROKERS.findIndex((b) => b.id === event.route_params.id);
        if (index >= 0) {
            BROKERS[index] = {
                ...BROKERS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('brokers', BROKERS);
            return BROKERS[index];
        }
        throw { status: 404, message: 'Broker not found' };
    },
} as MockHttpRequestHandler);

/** DELETE broker */
registerMockEndpoint({
    path: `${API}/brokers/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = BROKERS.findIndex((b) => b.id === event.route_params.id);
        if (index >= 0) {
            BROKERS.splice(index, 1);
            saveToSession('brokers', BROKERS);
            return {};
        }
        throw { status: 404, message: 'Broker not found' };
    },
} as MockHttpRequestHandler);

// ============ EDGES ============

/** GET edges list */
registerMockEndpoint({
    path: `${API}/edges`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(EDGES)(event.query_params),
} as MockHttpRequestHandler);

/** GET edge by ID */
registerMockEndpoint({
    path: `${API}/edges/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const edge = EDGES.find((e) => e.id === event.route_params.id);
        if (edge) return edge;
        throw { status: 404, message: 'Edge not found' };
    },
} as MockHttpRequestHandler);

/** POST create edge */
registerMockEndpoint({
    path: `${API}/edges`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const edge = {
            id: `edge-${generateID()}`,
            ...event.body,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        EDGES.push(edge);
        saveToSession('edges', EDGES);
        return edge;
    },
} as MockHttpRequestHandler);

/** PUT/PATCH update edge */
registerMockEndpoint({
    path: `${API}/edges/:id`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = EDGES.findIndex((e) => e.id === event.route_params.id);
        if (index >= 0) {
            EDGES[index] = {
                ...EDGES[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('edges', EDGES);
            return EDGES[index];
        }
        throw { status: 404, message: 'Edge not found' };
    },
} as MockHttpRequestHandler);

registerMockEndpoint({
    path: `${API}/edges/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = EDGES.findIndex((e) => e.id === event.route_params.id);
        if (index >= 0) {
            EDGES[index] = {
                ...EDGES[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('edges', EDGES);
            return EDGES[index];
        }
        throw { status: 404, message: 'Edge not found' };
    },
} as MockHttpRequestHandler);

/** DELETE edge */
registerMockEndpoint({
    path: `${API}/edges/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = EDGES.findIndex((e) => e.id === event.route_params.id);
        if (index >= 0) {
            EDGES.splice(index, 1);
            saveToSession('edges', EDGES);
            return {};
        }
        throw { status: 404, message: 'Edge not found' };
    },
} as MockHttpRequestHandler);

/** Edge token */
registerMockEndpoint({
    path: `${API}/edges/:id/token`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return { token: `edge_token_${generateID(32)}` };
    },
} as MockHttpRequestHandler);

// ============ APPLICATIONS (OAuth/OIDC) ============

/** GET applications list */
registerMockEndpoint({
    path: `${API}/doorkeeper/applications`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(APPLICATIONS)(event.query_params),
} as MockHttpRequestHandler);

/** GET application by ID */
registerMockEndpoint({
    path: `${API}/doorkeeper/applications/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const app = APPLICATIONS.find((a) => a.id === event.route_params.id);
        if (app) return app;
        throw { status: 404, message: 'Application not found' };
    },
} as MockHttpRequestHandler);

/** POST create application */
registerMockEndpoint({
    path: `${API}/doorkeeper/applications`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const app = {
            id: `app-${generateID()}`,
            uid: generateID(32),
            secret: generateID(64),
            ...event.body,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        APPLICATIONS.push(app);
        saveToSession('applications', APPLICATIONS);
        return app;
    },
} as MockHttpRequestHandler);

/** PUT/PATCH update application */
registerMockEndpoint({
    path: `${API}/doorkeeper/applications/:id`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = APPLICATIONS.findIndex(
            (a) => a.id === event.route_params.id,
        );
        if (index >= 0) {
            APPLICATIONS[index] = {
                ...APPLICATIONS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('applications', APPLICATIONS);
            return APPLICATIONS[index];
        }
        throw { status: 404, message: 'Application not found' };
    },
} as MockHttpRequestHandler);

registerMockEndpoint({
    path: `${API}/doorkeeper/applications/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = APPLICATIONS.findIndex(
            (a) => a.id === event.route_params.id,
        );
        if (index >= 0) {
            APPLICATIONS[index] = {
                ...APPLICATIONS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('applications', APPLICATIONS);
            return APPLICATIONS[index];
        }
        throw { status: 404, message: 'Application not found' };
    },
} as MockHttpRequestHandler);

/** DELETE application */
registerMockEndpoint({
    path: `${API}/doorkeeper/applications/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = APPLICATIONS.findIndex(
            (a) => a.id === event.route_params.id,
        );
        if (index >= 0) {
            APPLICATIONS.splice(index, 1);
            saveToSession('applications', APPLICATIONS);
            return {};
        }
        throw { status: 404, message: 'Application not found' };
    },
} as MockHttpRequestHandler);

// ============ UPLOADS ============

/** GET uploads list */
registerMockEndpoint({
    path: `${API}/uploads`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(UPLOADS)(event.query_params),
} as MockHttpRequestHandler);

/** GET upload by ID */
registerMockEndpoint({
    path: `${API}/uploads/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const upload = UPLOADS.find((u) => u.id === event.route_params.id);
        if (upload) return upload;
        throw { status: 404, message: 'Upload not found' };
    },
} as MockHttpRequestHandler);

/** POST create upload */
registerMockEndpoint({
    path: `${API}/uploads`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const upload = {
            id: `upload-${generateID()}`,
            ...event.body,
            file_path: `/uploads/${generateID()}.bin`,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        UPLOADS.push(upload);
        saveToSession('uploads', UPLOADS);
        return upload;
    },
} as MockHttpRequestHandler);

/** DELETE upload */
registerMockEndpoint({
    path: `${API}/uploads/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = UPLOADS.findIndex((u) => u.id === event.route_params.id);
        if (index >= 0) {
            UPLOADS.splice(index, 1);
            saveToSession('uploads', UPLOADS);
            return {};
        }
        throw { status: 404, message: 'Upload not found' };
    },
} as MockHttpRequestHandler);

// ============ STORAGE PROVIDERS ============

/** GET storage providers list */
registerMockEndpoint({
    path: `${API}/storages`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(STORAGE_PROVIDERS)(event.query_params),
} as MockHttpRequestHandler);

/** GET storage provider by ID */
registerMockEndpoint({
    path: `${API}/storages/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const provider = STORAGE_PROVIDERS.find(
            (p) => p.id === event.route_params.id,
        );
        if (provider) return provider;
        throw { status: 404, message: 'Storage provider not found' };
    },
} as MockHttpRequestHandler);

/** POST create storage provider */
registerMockEndpoint({
    path: `${API}/storages`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const provider = {
            id: `storage-${generateID()}`,
            ...event.body,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        STORAGE_PROVIDERS.push(provider);
        saveToSession('storage_providers', STORAGE_PROVIDERS);
        return provider;
    },
} as MockHttpRequestHandler);

/** PUT/PATCH update storage provider */
registerMockEndpoint({
    path: `${API}/storages/:id`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = STORAGE_PROVIDERS.findIndex(
            (p) => p.id === event.route_params.id,
        );
        if (index >= 0) {
            STORAGE_PROVIDERS[index] = {
                ...STORAGE_PROVIDERS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('storage_providers', STORAGE_PROVIDERS);
            return STORAGE_PROVIDERS[index];
        }
        throw { status: 404, message: 'Storage provider not found' };
    },
} as MockHttpRequestHandler);

registerMockEndpoint({
    path: `${API}/storages/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = STORAGE_PROVIDERS.findIndex(
            (p) => p.id === event.route_params.id,
        );
        if (index >= 0) {
            STORAGE_PROVIDERS[index] = {
                ...STORAGE_PROVIDERS[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('storage_providers', STORAGE_PROVIDERS);
            return STORAGE_PROVIDERS[index];
        }
        throw { status: 404, message: 'Storage provider not found' };
    },
} as MockHttpRequestHandler);

/** DELETE storage provider */
registerMockEndpoint({
    path: `${API}/storages/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = STORAGE_PROVIDERS.findIndex(
            (p) => p.id === event.route_params.id,
        );
        if (index >= 0) {
            STORAGE_PROVIDERS.splice(index, 1);
            saveToSession('storage_providers', STORAGE_PROVIDERS);
            return {};
        }
        throw { status: 404, message: 'Storage provider not found' };
    },
} as MockHttpRequestHandler);

// ============ CLUSTER / SYSTEM INFO ============

/** GET cluster details */
registerMockEndpoint({
    path: `${API}/cluster/details`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return {
            compiled_drivers: ['driver-1', 'driver-2'],
            available_repositories: ['repo-1'],
            running_drivers: 5,
            module_instances: 10,
            unavailable_repositories: [],
            unavailable_drivers: [],
        };
    },
} as MockHttpRequestHandler);

/** GET processes */
registerMockEndpoint({
    path: `${API}/cluster/processes`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return [];
    },
} as MockHttpRequestHandler);

/** GET core load */
registerMockEndpoint({
    path: `${API}/cluster/core_load`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return {
            local: {
                hostname: 'localhost',
                cpu_count: 4,
                core_cpu: 5.2,
                total_cpu: 12.5,
                memory_total: 16000000000,
                memory_usage: 8000000000,
                core_memory: 500000000,
            },
        };
    },
} as MockHttpRequestHandler);
