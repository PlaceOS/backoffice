import { registerMockEndpoint } from '@placeos/ts-client';
import {
    API,
    createMockStore,
    endpointData,
    generateBasicHandlers,
    notFound,
    now,
} from '../common.mock';

registerMockEndpoint({
    path: `${API}/version`,
    method: 'GET',
    callback: () => ({
        api: 'mock-api',
        build_time: new Date().toISOString(),
        version: 'n/a',
        commit: 'n/a',
    }),
});

registerMockEndpoint({
    path: `${API}/platform`,
    method: 'GET',
    callback: () => ({ version: 'mock', changelog: '' }),
});

/** Custom schemas in the admin section */
generateBasicHandlers(`${API}/schema`, [], { id_prefix: 'schema-' });

// ============ CLUSTERS ============

const CLUSTER_ID = 'core-mock';

/** Backend versions for the admin about section */
registerMockEndpoint({
    path: `${API}/cluster/versions`,
    method: 'GET',
    callback: () => [],
});

/** Driver files whose process was terminated */
const terminated = createMockStore<string[]>('cluster_terminated', []);

/** Running driver processes of the cluster, made from the mock drivers */
function clusterProcesses() {
    const modules = endpointData(`${API}/modules`);
    return endpointData(`${API}/drivers`)
        .filter((driver) => !terminated().includes(driver.file_name))
        .map((driver, idx) => {
            const driver_modules = modules
                .filter((mod) => mod.driver_id === driver.id)
                .map((mod) => mod.id);
            return {
                id: driver.file_name || driver.id,
                modules: driver_modules,
                running: true,
                module_instances: driver_modules.length,
                last_exit_code: 0,
                launch_count: 1,
                launch_time: now() - idx * 3600,
                percentage_cpu: (idx % 5) * 0.4,
                memory_total: 16_000_000,
                memory_usage: 40_000 + idx * 2_000,
            };
        });
}

registerMockEndpoint({
    path: `${API}/cluster`,
    method: 'GET',
    callback: () => [
        {
            id: CLUSTER_ID,
            compiled_drivers: clusterProcesses().map(({ id }) => id),
            available_repositories: endpointData(`${API}/repositories`).map(
                ({ folder_name }) => folder_name,
            ),
            running_drivers: clusterProcesses().length,
            module_instances: endpointData(`${API}/modules`).length,
            unavailable_repositories: [],
            unavailable_drivers: [],
            hostname: 'core.place.tech',
            cpu_count: 4,
            core_cpu: 5.2,
            total_cpu: 12.5,
            memory_total: 16_000_000,
            memory_usage: 8_000_000,
            core_memory: 500_000,
        },
    ],
});

/** Processes of a cluster */
registerMockEndpoint({
    path: `${API}/cluster/:id`,
    method: 'GET',
    callback: (event) =>
        event.route_params.id === CLUSTER_ID
            ? clusterProcesses()
            : notFound('Cluster'),
});

/** Terminate the process of a driver */
registerMockEndpoint({
    path: `${API}/cluster/:id`,
    method: 'DELETE',
    callback: (event) => {
        const driver = event.query_params.driver;
        if (!driver) throw { status: 400, message: 'driver is required' };
        terminated.set([...terminated(), driver]);
        return null;
    },
});

// ============ MQTT RE-SYNC ============

/** Where the last MQTT re-sync got to */
const resync = createMockStore<Record<string, unknown>>('source_resync', {
    state: 'idle',
});

registerMockEndpoint({
    path: `${API}/source/resync`,
    method: 'GET',
    callback: () => resync(),
});

/** Re-sync finishes at once, as the mock has no brokers to publish to */
registerMockEndpoint({
    path: `${API}/source/resync`,
    method: 'POST',
    callback: (event) => {
        const clear = event.query_params.clear === 'true';
        resync.set({
            state: 'complete',
            clear,
            cleared: clear ? 42 : 0,
            started_at: new Date().toISOString(),
            finished_at: new Date().toISOString(),
        });
        return resync();
    },
});
