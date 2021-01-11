import { registerMockEndpoint } from "@placeos/ts-client";
import { API } from '../common.mock';



registerMockEndpoint({
    path: `${API}/version`,
    method: 'GET',
    callback: () => ({
        api: 'mock-api',
        build_time: new Date().toISOString(),
        version: 'n/a',
        commit: 'n/a'
    })
});

registerMockEndpoint({
    path: `${API}/clusters`,
    method: 'GET',
    callback: () => []
});
