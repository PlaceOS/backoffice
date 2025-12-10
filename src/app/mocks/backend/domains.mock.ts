import { HashMap } from '../../common/types';
import { API, generateBasicHandlers } from '../common.mock';

const FILTER_FN = (item: Record<string, any>, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            (item.name || '')
                .toLowerCase()
                .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
    }
    return match;
};

const DOMAIN_DATA = [];

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/domains`, DOMAIN_DATA, FILTER_FN);
