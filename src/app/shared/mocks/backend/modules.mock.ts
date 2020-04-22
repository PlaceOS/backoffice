import * as MODULE_DATA from '../data/modules.json';
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
    if (q.control_system_id) {
        console.log('Endpoint data:', endpointData(`${API}/systems`));
        const system = endpointData(`${API}/systems`).find((sys) => sys.id === q.control_system_id);
        console.log('System:', system);
        match =
            match &&
            (item.control_system_id === q.control_system_id ||
                (system && system.modules.includes(item.id)));
    }
    return match;
};

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/modules`, (MODULE_DATA as any).default, FILTER_FN);
