import { registerMockEndpoint } from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    endpointData,
    generateBasicHandlers,
    generateID,
    notFound,
    now,
    updateItem,
} from '../common.mock';
import { SYSTEMS as SYSTEM_DATA } from '../data/systems';
import { TRIGGER_INSTANCES, expandInstance } from './triggers.mock';

const FILTER_FN = (item: Record<string, unknown>, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            `${item.name || ''}`
                .toLowerCase()
                .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
    }
    if (q.zone_id) {
        match = match && ((item.zones as string[]) || []).includes(q.zone_id);
    }
    if (q.module_id) {
        match =
            match && ((item.modules as string[]) || []).includes(q.module_id);
    }
    return match;
};

/** Systems whose email is in the `in` list. Registered before `systems/:id` */
registerMockEndpoint({
    path: `${API}/systems/with_emails`,
    method: 'GET',
    callback: (event) => {
        const emails = `${event.query_params.in || ''}`
            .toLowerCase()
            .split(',');
        return endpointData(`${API}/systems`).filter((sys) =>
            emails.includes(`${sys.email || ''}`.toLowerCase()),
        );
    },
});

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/systems`, SYSTEM_DATA, {
    filter: FILTER_FN,
    id_prefix: 'sys-',
});

/** Find a system, or fail with a 404 */
export function findSystem(id: string) {
    return (
        endpointData(`${API}/systems`).find((sys) => sys.id === id) ||
        notFound('System')
    );
}

registerMockEndpoint({
    path: `${API}/systems/:id/zones`,
    method: 'GET',
    callback: (event) => {
        const system = findSystem(event.route_params.id);
        return endpointData(`${API}/zones`).filter((zone) =>
            system.zones.includes(zone.id),
        );
    },
});

registerMockEndpoint({
    path: `${API}/systems/:id/modules`,
    method: 'GET',
    callback: (event) => {
        const system = findSystem(event.route_params.id);
        return endpointData(`${API}/modules`).filter((mod) =>
            system.modules.includes(mod.id),
        );
    },
});

/** Add a module to the system */
registerMockEndpoint({
    path: `${API}/systems/:id/module/:module_id`,
    method: 'PUT',
    callback: (event) => {
        const { id, module_id } = event.route_params;
        const system = findSystem(id);
        if (system.modules.includes(module_id)) return system;
        return updateItem(`${API}/systems`, id, {
            modules: [...system.modules, module_id],
        });
    },
});

/** Remove a module from the system */
registerMockEndpoint({
    path: `${API}/systems/:id/module/:module_id`,
    method: 'DELETE',
    callback: (event) => {
        const { id, module_id } = event.route_params;
        const system = findSystem(id);
        return updateItem(`${API}/systems`, id, {
            modules: system.modules.filter((mod: string) => mod !== module_id),
        });
    },
});

// ============ TRIGGERS ============

registerMockEndpoint({
    path: `${API}/systems/:id/triggers`,
    method: 'GET',
    callback: (event) => {
        const { id } = findSystem(event.route_params.id);
        return TRIGGER_INSTANCES()
            .filter(({ control_system_id }) => control_system_id === id)
            .map(expandInstance);
    },
});

registerMockEndpoint({
    path: `${API}/systems/:id/triggers`,
    method: 'POST',
    callback: (event) => {
        const { id } = findSystem(event.route_params.id);
        const instance = {
            enabled: true,
            important: false,
            triggered: false,
            trigger_count: 0,
            exec_enabled: false,
            webhook_secret: generateID(32),
            ...event.body,
            id: `inst-${generateID()}`,
            control_system_id: id,
            created_at: now(),
            updated_at: now(),
        };
        TRIGGER_INSTANCES.set([...TRIGGER_INSTANCES(), instance]);
        return expandInstance(instance);
    },
});

/** Find a trigger of a system, or fail with a 404 */
function findInstance(system_id: string, id: string) {
    return (
        TRIGGER_INSTANCES().find(
            (item) => item.id === id && item.control_system_id === system_id,
        ) || notFound('Trigger')
    );
}

for (const method of ['PUT', 'PATCH'] as const) {
    registerMockEndpoint({
        path: `${API}/systems/:id/triggers/:trigger_id`,
        method,
        callback: (event) => {
            const { id, trigger_id } = event.route_params;
            const old = findInstance(id, trigger_id);
            const { enabled, important, exec_enabled } = {
                ...old,
                ...event.body,
            };
            const instance = {
                ...old,
                enabled,
                important,
                exec_enabled,
                updated_at: now(),
            };
            TRIGGER_INSTANCES.set(
                TRIGGER_INSTANCES().map((item) =>
                    item === old ? instance : item,
                ),
            );
            return expandInstance(instance);
        },
    });
}

registerMockEndpoint({
    path: `${API}/systems/:id/triggers/:trigger_id`,
    method: 'DELETE',
    callback: (event) => {
        const { id, trigger_id } = event.route_params;
        const old = findInstance(id, trigger_id);
        TRIGGER_INSTANCES.set(
            TRIGGER_INSTANCES().filter((item) => item !== old),
        );
        return null;
    },
});

// ============ SETTINGS AND CONTROL ============

/** Settings of the system and of its zones, modules and drivers */
registerMockEndpoint({
    path: `${API}/systems/:id/settings`,
    method: 'GET',
    callback: (event) => {
        const system = findSystem(event.route_params.id);
        const drivers = endpointData(`${API}/modules`)
            .filter((mod) => system.modules.includes(mod.id))
            .map((mod) => mod.driver_id);
        const parents = [
            system.id,
            ...system.zones,
            ...system.modules,
            ...drivers,
        ];
        return endpointData(`${API}/settings`).filter((setting) =>
            parents.includes(setting.parent_id),
        );
    },
});

/** Start or stop every module of the system */
function setRunning(system_id: string, running: boolean) {
    const system = findSystem(system_id);
    for (const id of system.modules) {
        if (endpointData(`${API}/modules`).some((mod) => mod.id === id)) {
            updateItem(`${API}/modules`, id, { running });
        }
    }
    return null;
}

registerMockEndpoint({
    path: `${API}/systems/:id/start`,
    method: 'POST',
    callback: (event) => setRunning(event.route_params.id, true),
});

registerMockEndpoint({
    path: `${API}/systems/:id/stop`,
    method: 'POST',
    callback: (event) => setRunning(event.route_params.id, false),
});
