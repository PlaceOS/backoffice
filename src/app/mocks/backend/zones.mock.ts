import { HashMap } from '../../common/types';
import { API, endpointData, generateBasicHandlers } from '../common.mock';
import { ZONES as ZONE_DATA } from '../data/zones';

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
    if (q.parent) {
        match = match && item.parent_id === q.parent;
    }
    if (q.control_system_id) {
        const system = endpointData(`${API}/systems`).find(
            (sys) => sys.id === q.control_system_id,
        );
        match = match && system && system.zones.includes(item.id);
    }
    return match;
};

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/zones`, ZONE_DATA, FILTER_FN);
