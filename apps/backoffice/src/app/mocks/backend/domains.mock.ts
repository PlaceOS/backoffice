import { HashMap } from 'apps/backoffice/src/app/common/types';
import { API, generateBasicHandlers } from '../common.mock';

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

const DOMAIN_DATA = [];

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/domains`, DOMAIN_DATA, FILTER_FN);
