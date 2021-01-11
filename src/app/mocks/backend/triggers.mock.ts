
import { generateBasicHandlers, API } from '../common.mock';
import { HashMap } from 'src/app/common/types';

const FILTER_FN = (item: any, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match = match && (item.name || '').toLowerCase().indexOf((q.q || '').toLowerCase()) >= 0;
    }
    return match;
};

const TRIGGER_DATA = [];

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/triggers`, TRIGGER_DATA, FILTER_FN);

