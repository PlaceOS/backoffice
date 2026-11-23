import {
  humanReadableByteCount
} from "./chunk-Y2QSYZTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/cluster-details/cluster.utilities.ts
var EMPTY_LOAD = {
  hostname: "",
  cpu_count: 0,
  core_cpu: 0,
  total_cpu: 0,
  memory_total: 0,
  memory_usage: 0,
  core_memory: 0
};
function loadDetails(load) {
  const value = load || EMPTY_LOAD;
  return __spreadProps(__spreadValues({}, value), {
    memory_percentage: value.memory_total ? +(value.memory_usage / value.memory_total * 100).toFixed(4) : 0
  });
}
function clusterFromStatus(node) {
  const local = loadDetails(node.load?.local);
  const edges = node.load?.edge || {};
  return __spreadProps(__spreadValues({}, local), {
    id: node.id,
    edge_nodes: Object.keys(edges).map((id) => __spreadProps(__spreadValues({}, loadDetails(edges[id])), {
      id,
      run_count: node.status?.run_count?.edge[id] || null
    }))
  });
}
function processFromStatus(cluster_id, driver) {
  const edge = Object.values(driver.edge || {})[0];
  const status = edge?.status || driver.local?.status;
  const memory_usage = status?.memory_usage || 0;
  return {
    cluster_id,
    id: driver.driver,
    module_instances: status?.module_instances || 0,
    cpu_usage: status?.percentage_cpu || 0,
    memory_usage,
    used_memory: humanReadableByteCount(memory_usage * 1024)
  };
}

export {
  clusterFromStatus,
  processFromStatus
};
//# debugId=2ba8a87c-53b2-5a00-b8e5-03919c29d7bf
//# sourceMappingURL=chunk-CFOBXZGC.js.map
