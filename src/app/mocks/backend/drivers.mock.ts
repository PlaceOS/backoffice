import { HashMap } from '../../common/types';
import { API, endpointData, generateBasicHandlers } from '../common.mock';
import { DRIVERS as DRIVER_DATA } from '../data/drivers';

import {
    type MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client/compat';

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
    if (q.repository_id) {
        match = match && item.repository_id === q.repository_id;
    }
    return match;
};

/** Add basic API handlers for drivers */
generateBasicHandlers(`${API}/drivers`, DRIVER_DATA, {
    filter: FILTER_FN,
    id_prefix: 'driver-',
});

/** Check if driver is compiled */
registerMockEndpoint({
    path: `${API}/drivers/:id/compiled`,
    metadata: DRIVER_DATA,
    method: 'GET',
    callback: (_event) => true,
} as MockHttpRequestHandler);

/** Recompile driver */
registerMockEndpoint({
    path: `${API}/drivers/:id/recompile`,
    metadata: [],
    method: 'POST',
    // The API sends plain text, not JSON
    headers: { 'content-type': 'text/plain' },
    callback: (event) => {
        const driver = endpointData(`${API}/drivers`).find(
            (d) => d.id === event.route_params.id,
        );
        // The API sends the output of the build as text
        if (driver) return 'Compilation successful';
        throw { status: 404, message: 'Driver not found' };
    },
});

/** Reload driver */
registerMockEndpoint({
    path: `${API}/drivers/:id/reload`,
    metadata: [],
    method: 'POST',
    // The API sends plain text, not JSON
    headers: { 'content-type': 'text/plain' },
    callback: (event) => {
        const driver = endpointData(`${API}/drivers`).find(
            (d) => d.id === event.route_params.id,
        );
        // The API sends the result of the reload as text
        if (driver) return 'Reloaded';
        throw { status: 404, message: 'Driver not found' };
    },
});

/** Get driver README */
registerMockEndpoint({
    path: `${API}/drivers/:id/readme`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return '# Mock Driver\n\nThis is a mock driver README for testing purposes.\n\n## Features\n\n- Feature 1\n- Feature 2\n\n## Usage\n\nRefer to the driver documentation.';
    },
} as MockHttpRequestHandler);

/** Get driver settings */
registerMockEndpoint({
    path: `${API}/drivers/:id/settings`,
    metadata: [],
    method: 'GET',
    callback: (_event) => {
        return [];
    },
} as MockHttpRequestHandler);
