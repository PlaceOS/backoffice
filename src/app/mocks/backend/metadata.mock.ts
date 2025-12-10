import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import { API } from '../common.mock';

/** In-memory metadata storage */
const METADATA_STORE: HashMap<HashMap<Record<string, unknown>>> = {};

/**
 * Get metadata for a parent
 */
function getMetadata(parent_id: string): Record<string, unknown>[] {
    if (!METADATA_STORE[parent_id]) {
        METADATA_STORE[parent_id] = {};
    }
    return Object.entries(METADATA_STORE[parent_id]).map(([name, data]) => ({
        id: `${parent_id}_${name}`,
        name,
        parent_id,
        details: data.details || {},
        description: data.description || '',
        editors: data.editors || [],
        schema: data.schema || {},
        modified_by_id: 'current',
        created_at: Date.now() / 1000,
        updated_at: Date.now() / 1000,
    }));
}

/**
 * Add or update metadata
 */
function setMetadata(parent_id: string, name: string, data: Record<string, unknown>): Record<string, unknown> {
    if (!METADATA_STORE[parent_id]) {
        METADATA_STORE[parent_id] = {};
    }
    METADATA_STORE[parent_id][name] = data;
    return {
        id: `${parent_id}_${name}`,
        name,
        parent_id,
        details: data.details || {},
        description: data.description || '',
        editors: data.editors || [],
        schema: data.schema || {},
        modified_by_id: 'current',
        created_at: Date.now() / 1000,
        updated_at: Date.now() / 1000,
    };
}

/**
 * Delete metadata
 */
function deleteMetadata(parent_id: string, name: string): void {
    if (METADATA_STORE[parent_id]) {
        delete METADATA_STORE[parent_id][name];
    }
}

// Parent types that support metadata
const PARENT_TYPES = ['systems', 'zones', 'drivers', 'users'];

// Register metadata endpoints for each parent type
PARENT_TYPES.forEach((parent_type) => {
    /** GET metadata list for parent */
    registerMockEndpoint({
        path: `${API}/${parent_type}/:id/metadata`,
        metadata: [],
        method: 'GET',
        callback: (event) => {
            const parent_id = event.route_params.id;
            return getMetadata(parent_id);
        },
    } as MockHttpRequestHandler);

    /** GET specific metadata by name */
    registerMockEndpoint({
        path: `${API}/${parent_type}/:id/metadata/:name`,
        metadata: [],
        method: 'GET',
        callback: (event) => {
            const parent_id = event.route_params.id;
            const name = event.route_params.name;
            const all_metadata = getMetadata(parent_id);
            const metadata = all_metadata.find((m) => m.name === name);
            if (metadata) {
                return metadata;
            }
            throw { status: 404, message: 'Metadata not found' };
        },
    } as MockHttpRequestHandler);

    /** POST create metadata */
    registerMockEndpoint({
        path: `${API}/${parent_type}/:id/metadata`,
        metadata: [],
        method: 'POST',
        callback: (event) => {
            const parent_id = event.route_params.id;
            const data = event.body;
            return setMetadata(parent_id, data.name, data);
        },
    } as MockHttpRequestHandler);

    /** PUT/PATCH update metadata */
    registerMockEndpoint({
        path: `${API}/${parent_type}/:id/metadata/:name`,
        metadata: [],
        method: 'PUT',
        callback: (event) => {
            const parent_id = event.route_params.id;
            const name = event.route_params.name;
            const data = event.body;
            return setMetadata(parent_id, name, data);
        },
    } as MockHttpRequestHandler);

    registerMockEndpoint({
        path: `${API}/${parent_type}/:id/metadata/:name`,
        metadata: [],
        method: 'PATCH',
        callback: (event) => {
            const parent_id = event.route_params.id;
            const name = event.route_params.name;
            const data = event.body;
            return setMetadata(parent_id, name, data);
        },
    } as MockHttpRequestHandler);

    /** DELETE metadata */
    registerMockEndpoint({
        path: `${API}/${parent_type}/:id/metadata/:name`,
        metadata: [],
        method: 'DELETE',
        callback: (event) => {
            const parent_id = event.route_params.id;
            const name = event.route_params.name;
            deleteMetadata(parent_id, name);
            return {};
        },
    } as MockHttpRequestHandler);
});

/** History endpoint for metadata */
registerMockEndpoint({
    path: `${API}/metadata/:id/history`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return [];
    },
} as MockHttpRequestHandler);
