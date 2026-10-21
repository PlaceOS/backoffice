import { registerMockEndpoint } from '@placeos/ts-client';
import { API, generateBasicHandlers } from '../common.mock';

registerMockEndpoint({
    path: `${API}/version`,
    method: 'GET',
    callback: () => ({
        api: 'mock-api',
        build_time: new Date().toISOString(),
        version: 'n/a',
        commit: 'n/a',
    }),
});

registerMockEndpoint({
    path: `${API}/clusters`,
    method: 'GET',
    callback: () => [],
});

/** Backend versions for the admin about section */
registerMockEndpoint({
    path: `${API}/cluster/versions`,
    method: 'GET',
    callback: () => [],
});

registerMockEndpoint({
    path: `${API}/platform`,
    method: 'GET',
    callback: () => ({ version: 'mock', changelog: '' }),
});

/** Custom schemas in the admin section */
generateBasicHandlers(`${API}/schema`, []);
