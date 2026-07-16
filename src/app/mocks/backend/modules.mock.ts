import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import { API, endpointData, generateBasicHandlers } from '../common.mock';
import { MODULES as MODULE_DATA } from '../data/modules';

const FILTER_FN = (item: Record<string, unknown>, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            `${item.name || ''} ${item.custom_name || ''}`
                .toLowerCase()
                .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
    }
    if (q.control_system_id) {
        const system = endpointData(`${API}/systems`).find(
            (sys) => sys.id === q.control_system_id,
        );
        match =
            match &&
            (item.control_system_id === q.control_system_id ||
                (system && system.modules.includes(item.id)));
    }
    if (q.driver_id) {
        match = match && item.driver_id === q.driver_id;
    }
    return match;
};

/** Add basic API handlers for modules */
generateBasicHandlers(`${API}/modules`, MODULE_DATA, FILTER_FN);

/** Add handler for starting a module */
registerMockEndpoint({
    path: `${API}/modules/:id/start`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        if (event.route_params.id) {
            const module = endpointData(`${API}/modules`).find(
                (mod) => mod.id === event.route_params.id,
            );
            if (module) {
                module.running = true;
                return module;
            }
        }
        throw { status: 404, message: 'Module not found' };
    },
} as MockHttpRequestHandler);

/** Add handler for stopping a module */
registerMockEndpoint({
    path: `${API}/modules/:id/stop`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        if (event.route_params.id) {
            const module = endpointData(`${API}/modules`).find(
                (mod) => mod.id === event.route_params.id,
            );
            if (module) {
                module.running = false;
                return module;
            }
        }
        throw { status: 404, message: 'Module not found' };
    },
} as MockHttpRequestHandler);

/** Add handler for pinging a module */
registerMockEndpoint({
    path: `${API}/modules/:id/ping`,
    metadata: [],
    method: 'POST',
    callback: (_event) => {
        return { host: 'localhost', pingable: true, warning: null };
    },
} as MockHttpRequestHandler);

/** Add handler for module settings */
registerMockEndpoint({
    path: `${API}/modules/:id/settings`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return [];
    },
} as MockHttpRequestHandler);

/** Add handler for module state */
registerMockEndpoint({
    path: `${API}/modules/:id/state`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return { connected: true, running: true };
    },
} as MockHttpRequestHandler);
