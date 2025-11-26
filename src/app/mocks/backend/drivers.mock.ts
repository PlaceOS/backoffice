import { HashMap } from '../../common/types';
import { API, generateBasicHandlers } from '../common.mock';
import { DRIVERS as DRIVER_DATA } from '../data/drivers';

import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';

const FILTER_FN = (item: any, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            (item.name || '')
                .toLowerCase()
                .indexOf((q.q || '').toLowerCase()) >= 0;
    }
    return match;
};

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/drivers`, DRIVER_DATA, FILTER_FN);

registerMockEndpoint({
    path: `${API}/drivers/:id/compiled`,
    metadata: DRIVER_DATA,
    method: 'GET',
    callback: (event) => true,
} as MockHttpRequestHandler);
