import { registerMockEndpoint } from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    endpointData,
    generateBasicHandlers,
    notFound,
    updateItem,
} from '../common.mock';
import { MODULES as MODULE_DATA } from '../data/modules';

const FILTER_FN = (item: Record<string, unknown>, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            `${item.name || ''} ${item.custom_name || ''}`
                .toLowerCase()
                .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
    }
    if (q.control_system_id) {
        const system = endpointData(`${API}/systems`).find(
            (sys) => sys.id === q.control_system_id,
        );
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

/** Add basic API handlers for modules */
generateBasicHandlers(`${API}/modules`, MODULE_DATA, {
    filter: FILTER_FN,
    id_prefix: 'mod-',
});

registerMockEndpoint({
    path: `${API}/modules/:id/start`,
    method: 'POST',
    callback: (event) =>
        updateItem(`${API}/modules`, event.route_params.id, { running: true }),
});

registerMockEndpoint({
    path: `${API}/modules/:id/stop`,
    method: 'POST',
    callback: (event) =>
        updateItem(`${API}/modules`, event.route_params.id, { running: false }),
});

/** Load the module on the cluster */
registerMockEndpoint({
    path: `${API}/modules/:id/load`,
    method: 'POST',
    callback: (event) =>
        updateItem(`${API}/modules`, event.route_params.id, { running: true }),
});

registerMockEndpoint({
    path: `${API}/modules/:id/ping`,
    method: 'POST',
    callback: () => ({ host: 'localhost', pingable: true, warning: null }),
});

registerMockEndpoint({
    path: `${API}/modules/:id/settings`,
    method: 'GET',
    callback: (event) =>
        endpointData(`${API}/settings`).filter(
            (setting) => setting.parent_id === event.route_params.id,
        ),
});

registerMockEndpoint({
    path: `${API}/modules/:id/state`,
    method: 'GET',
    callback: (event) => {
        const module = findModule(event.route_params.id);
        return {
            connected: module.connected ?? true,
            running: !!module.running,
        };
    },
});

/** Runtime errors of the module. Modules with `has_runtime_error` have one */
registerMockEndpoint({
    path: `${API}/modules/:id/error`,
    method: 'GET',
    callback: (event) =>
        findModule(event.route_params.id).has_runtime_error
            ? [
                  JSON.stringify({
                      message: 'Connection refused',
                      backtrace: ['mock.cr:1'],
                  }),
              ]
            : [],
});

/** Find a module, or fail with a 404 */
function findModule(id: string) {
    return (
        endpointData(`${API}/modules`).find((mod) => mod.id === id) ||
        notFound('Module')
    );
}
