import * as ZONE_DATA from '../data/zones.json';
import { generateBasicHandlers, API, endpointData } from '../common.mock';
import { HashMap } from '../../utilities/types.utilities';

const FILTER_FN = (item: any, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match = match && (item.name || '').toLowerCase().indexOf((q.q || '').toLowerCase()) >= 0;
    }
    if (q.parent) {
        match = match && item.parent_id === q.parent;
    }
    if (q.control_system_id) {
        const system = endpointData(`${API}/systems`).find((sys) => sys.id === q.control_system_id);
        match = match && system && system.zones.includes(item.id);
    }
    return match;
};

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/zones`, (ZONE_DATA as any).default, FILTER_FN);
