
import * as SYSTEM_DATA from '../data/systems.json';
import { generateBasicHandlers, API, endpointData } from '../common.mock';
import { HashMap } from '../../utilities/types.utilities';

import { MockHttpRequestHandler, registerMockEndpoint } from '@placeos/ts-client';

const FILTER_FN = (item: any, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match = match && (item.name || '').toLowerCase().indexOf((q.q || '').toLowerCase()) >= 0;
    }
    if (q.zone_id) {
        match = match && (item.zones || []).includes(q.zone_id);
    }
    if (q.module_id) {
        match = match && (item.modules || []).includes(q.module_id);
    }
    return match;
};

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/systems`, (SYSTEM_DATA as any).default, FILTER_FN);

/** Add handlers for getting system's zones */
registerMockEndpoint({
    path: `${API}/systems/:id/zones`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        if (event.route_params.id) {
            const system = endpointData(`${API}/systems`).find(sys => sys.id === event.route_params.id);
            if (system) {
                const zones = endpointData(`${API}/zones`);
                return zones.filter(
                    (item) => system.zones.includes(item.id)
                );
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
            const system = endpointData(`${API}/systems`).find(sys => sys.id === event.route_params.id);
            if (system){
                const modules = endpointData(`${API}/modules`);
                return modules.filter(
                    (item) => system.modules.includes(item.id)
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
    callback: (event) => {
        if (event.route_params.id) {
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
            const settings = endpointData(`${API}/settings`).filter(sys => sys.id === event.route_params.id);
            return settings.reduce((map, item) => ({ ...map, ...JSON.parse(item.settings_string) }))
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);
