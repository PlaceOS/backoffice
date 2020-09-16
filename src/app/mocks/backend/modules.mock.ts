import * as MODULE_DATA from '../data/modules.json';
import { generateBasicHandlers, API, endpointData } from '../common.mock';
import { HashMap } from 'src/app/common/types';

const FILTER_FN = (item: any, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match = match && (item.name || '').toLowerCase().indexOf((q.q || '').toLowerCase()) >= 0;
    }
    if (q.control_system_id) {
        const system = endpointData(`${API}/systems`).find((sys) => sys.id === q.control_system_id);
        match =
            match &&
            (item.control_system_id === q.control_system_id ||
                (system && system.modules.includes(item.id)));
    }
    if (q.driver_id) {
        match = match && item.driver_id === q.driver_id;
    }
    return match;
};

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/modules`, (MODULE_DATA as any).default, FILTER_FN);
