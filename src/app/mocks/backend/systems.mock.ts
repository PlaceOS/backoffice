import { HashMap } from '../../common/types';
import { API, endpointData, generateBasicHandlers } from '../common.mock';
import { SYSTEMS as SYSTEM_DATA } from '../data/systems';

import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';

const FILTER_FN = (item: Record<string, unknown>, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            `${item.name || ''}`
                .toLowerCase()
                .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
    }
    if (q.zone_id) {
        match = match && ((item.zones as string[]) || []).includes(q.zone_id);
    }
    if (q.module_id) {
        match =
            match && ((item.modules as string[]) || []).includes(q.module_id);
    }
    return match;
};

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/systems`, SYSTEM_DATA, FILTER_FN);

/** Add handlers for getting system's zones */
registerMockEndpoint({
    path: `${API}/systems/:id/zones`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        if (event.route_params.id) {
            const system = endpointData(`${API}/systems`).find(
                (sys) => sys.id === event.route_params.id,
            );
            if (system) {
                const zones = endpointData(`${API}/zones`);
                return zones.filter((item) => system.zones.includes(item.id));
            }
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);

/** Add handlers for getting system's modules */
registerMockEndpoint({
    path: `${API}/systems/:id/modules`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        if (event.route_params.id) {
            const system = endpointData(`${API}/systems`).find(
                (sys) => sys.id === event.route_params.id,
            );
            if (system) {
                const modules = endpointData(`${API}/modules`);
                return modules.filter((item) =>
                    system.modules.includes(item.id),
                );
            }
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);

/** Add handlers for getting system's triggers */
registerMockEndpoint({
    path: `${API}/systems/:id/triggers`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        if (_event.route_params.id) {
            return [];
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);

/** Add handlers for getting system's inherited settings */
registerMockEndpoint({
    path: `${API}/systems/:id/settings`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        if (event.route_params.id) {
            const settings = endpointData(`${API}/settings`).filter(
                (sys) => sys.id === event.route_params.id,
            );
            return settings.reduce((map, item) => ({
                ...map,
                ...JSON.parse(item.settings_string),
            }));
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);

/** Add handler for starting a system */
registerMockEndpoint({
    path: `${API}/systems/:id/start`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        if (event.route_params.id) {
            const system = endpointData(`${API}/systems`).find(
                (sys) => sys.id === event.route_params.id,
            );
            if (system) {
                system.running = true;
                return system;
            }
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);

/** Add handler for stopping a system */
registerMockEndpoint({
    path: `${API}/systems/:id/stop`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        if (event.route_params.id) {
            const system = endpointData(`${API}/systems`).find(
                (sys) => sys.id === event.route_params.id,
            );
            if (system) {
                system.running = false;
                return system;
            }
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);

/** Add handler for executing module methods on system */
registerMockEndpoint({
    path: `${API}/systems/:id/exec/:module/:index/:method`,
    metadata: [],
    method: 'POST',
    callback: (_event) => {
        return { result: 'ok' };
    },
} as MockHttpRequestHandler);

/** Add handler for system functions list */
registerMockEndpoint({
    path: `${API}/systems/:id/funcs/:module/:index`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return {
            functions: {
                power: { arity: 1, params: ['state'] },
                volume: { arity: 1, params: ['level'] },
                mute: { arity: 1, params: ['state'] },
            },
        };
    },
} as MockHttpRequestHandler);

/** Add handler for counting systems */
registerMockEndpoint({
    path: `${API}/systems/count`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return { count: endpointData(`${API}/systems`).length };
    },
} as MockHttpRequestHandler);
