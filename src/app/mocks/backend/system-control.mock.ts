/**
 * Module control of systems: function lists, execute, state and the
 * websocket bindings. Import this file last. Its `systems/:id/:module`
 * paths match any name, so they must come after the fixed paths such as
 * `systems/:id/zones`.
 */
import {
    MockHttpRequest,
    mockSystem,
    registerMockEndpoint,
    registerSystem,
} from '@placeos/ts-client';
import {
    API,
    MockItem,
    createMockStore,
    listenToHandlerChanges,
    notFound,
} from '../common.mock';
import { findSystem } from './systems.mock';
import { TRIGGER_INSTANCES } from './triggers.mock';

/** Functions of every mock module. Each sets the status of the same name */
const FUNCTIONS = {
    power: { arity: 1, params: { state: ['Bool'] }, order: ['state'] },
    volume: { arity: 1, params: { level: ['Int32', 50] }, order: ['level'] },
    mute: { arity: 1, params: { state: ['Bool', true] }, order: ['state'] },
};

/** Status variables of a module */
type State = Record<string, unknown>;

/** Status that functions changed, keyed by `system_id|Class_index` */
const changed_state = createMockStore<Record<string, State>>(
    'module_state',
    {},
);

interface SystemModule {
    /** Binding name, e.g. `Display_1` */
    key: string;
    name: string;
    index: number;
    module: MockItem;
}

/** Modules of a system, named like `calculateModuleIndex` in the app */
function systemModules(system: MockItem): SystemModule[] {
    const modules = listenToHandlerChanges(`${API}/modules`)?.() || [];
    const counts: Record<string, number> = {};
    return ((system.modules as string[]) || []).flatMap((id) => {
        const module = modules.find((mod) => mod.id === id);
        if (!module) return [];
        const name = `${module.custom_name || module.name || 'Blank'}`;
        const index = (counts[name] = (counts[name] || 0) + 1);
        return [{ key: `${name}_${index}`, name, index, module }];
    });
}

/** Find a module of a system from a binding name, e.g. `Display_1` */
function findModule(event: MockHttpRequest) {
    const system = findSystem(event.route_params.id);
    const key = decodeURIComponent(event.route_params.module);
    const found = systemModules(system).find((mod) => mod.key === key);
    return found ? { system, found } : notFound('Module');
}

/** Current status of a system module */
function stateOf(system_id: string, { key, module }: SystemModule): State {
    return {
        connected: module.connected ?? true,
        running: module.running ?? false,
        power: false,
        volume: 50,
        mute: false,
        ...changed_state()[`${system_id}|${key}`],
    };
}

/** Run a module function. Its status changes to the first argument */
function execute(
    system_id: string,
    mod: SystemModule,
    method: string,
    args: unknown[],
) {
    if (!(method in FUNCTIONS)) return notFound('Function');
    const value = args[0] ?? null;
    const id = `${system_id}|${mod.key}`;
    changed_state.set({
        ...changed_state(),
        [id]: { ...changed_state()[id], [method]: value },
    });
    // Show the change on open websocket bindings
    const binding = mockSystem(system_id)?.[mod.name]?.[mod.index - 1];
    if (binding) binding[method] = value;
    return value;
}

/** Register the websocket mock of every system, so bindings get values */
function registerRealtime() {
    const systems = listenToHandlerChanges(`${API}/systems`)?.() || [];
    for (const system of systems) {
        const classes: Record<string, State[]> = {};
        for (const mod of systemModules(system)) {
            const methods = Object.fromEntries(
                Object.keys(FUNCTIONS).map((name) => [
                    name,
                    (...args: unknown[]) => execute(system.id, mod, name, args),
                ]),
            );
            (classes[mod.name] ||= []).push({
                ...stateOf(system.id, mod),
                ...methods,
            });
        }
        // State of each trigger of the system, keyed by trigger instance ID
        const triggers = TRIGGER_INSTANCES().filter(
            ({ control_system_id }) => control_system_id === system.id,
        );
        classes['_TRIGGER_'] = [
            Object.fromEntries(
                triggers.map((trigger) => [
                    trigger.id,
                    {
                        triggered: !!trigger.triggered,
                        trigger_count: trigger.trigger_count || 0,
                        action_errors: 0,
                        comparison_errors: 0,
                        conditions: {},
                    },
                ]),
            ),
        ];
        registerSystem(system.id, classes);
    }
}
listenToHandlerChanges(`${API}/systems`)?.subscribe(registerRealtime);
listenToHandlerChanges(`${API}/modules`)?.subscribe(registerRealtime);
TRIGGER_INSTANCES.subscribe(registerRealtime);

registerMockEndpoint({
    path: `${API}/systems/:id/functions/:module`,
    method: 'GET',
    callback: (event) => {
        findModule(event);
        return FUNCTIONS;
    },
});

registerMockEndpoint({
    path: `${API}/systems/:id/:module`,
    method: 'GET',
    callback: (event) => {
        const { system, found } = findModule(event);
        return stateOf(system.id, found);
    },
});

registerMockEndpoint({
    path: `${API}/systems/:id/:module/:method`,
    method: 'POST',
    callback: (event) => {
        const { system, found } = findModule(event);
        const args = Array.isArray(event.body)
            ? event.body
            : Object.values(event.body || {});
        return execute(system.id, found, event.route_params.method, args);
    },
});
