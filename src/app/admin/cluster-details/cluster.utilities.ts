import type {
    ClusterDriver,
    ClusterDriverStatus,
    ClusterNodeStatus,
    SystemLoad,
} from '@placeos/ts-client';
import { humanReadableByteCount } from '../../common/general';

/** Number of modules and drivers that a node runs */
export interface PlaceClusterRunCounts {
    modules: number;
    drivers: number;
}

/** Load of one host of a cluster. Memory values are in KB */
export interface PlaceClusterLoad {
    hostname: string;
    cpu_count: number;
    core_cpu: number;
    total_cpu: number;
    memory_total: number;
    memory_usage: number;
    core_memory: number;
    /** Percentage of memory used */
    memory_percentage: number;
}

/** A core node of the cluster, with its edge nodes. The 6.x `PlaceCluster` */
export interface PlaceCluster extends PlaceClusterLoad {
    id: string;
    edge_nodes: (PlaceClusterLoad & {
        id: string;
        run_count: PlaceClusterRunCounts | null;
    })[];
}

/** A driver process of a cluster node. The 6.x `PlaceProcess` */
export interface PlaceProcess {
    cluster_id: string;
    /** Path of the driver */
    id: string;
    module_instances: number;
    cpu_usage: number;
    /** KB */
    memory_usage: number;
    /** Display string for the memory usage */
    used_memory: string;
}

const EMPTY_LOAD: SystemLoad = {
    hostname: '',
    cpu_count: 0,
    core_cpu: 0,
    total_cpu: 0,
    memory_total: 0,
    memory_usage: 0,
    core_memory: 0,
};

function loadDetails(load: SystemLoad | null): PlaceClusterLoad {
    const value = load || EMPTY_LOAD;
    return {
        ...value,
        memory_percentage: value.memory_total
            ? +((value.memory_usage / value.memory_total) * 100).toFixed(4)
            : 0,
    };
}

/** The cluster details of a node status, as 6.x gave them */
export function clusterFromStatus(node: ClusterNodeStatus): PlaceCluster {
    const local = loadDetails(node.load?.local);
    const edges = node.load?.edge || {};
    return {
        ...local,
        id: node.id,
        edge_nodes: Object.keys(edges).map((id) => ({
            ...loadDetails(edges[id]),
            id,
            run_count: node.status?.run_count?.edge[id] || null,
        })),
    };
}

/** The process of a driver of a cluster node, as 6.x gave it */
export function processFromStatus(
    cluster_id: string,
    driver: ClusterDriverStatus,
): PlaceProcess {
    // A driver runs on the core node or on one edge node
    const edge: ClusterDriver | undefined = Object.values(driver.edge || {})[0];
    const status = edge?.status || driver.local?.status;
    const memory_usage = status?.memory_usage || 0;
    return {
        cluster_id,
        id: driver.driver,
        module_instances: status?.module_instances || 0,
        cpu_usage: status?.percentage_cpu || 0,
        memory_usage,
        used_memory: humanReadableByteCount(memory_usage * 1024),
    };
}
