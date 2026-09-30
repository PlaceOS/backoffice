// src/app/common/hierarchy.ts
var MAX_HIERARCHY_DEPTH = 32;
async function isInSubtree(id, root_id, parentOf) {
  let current = id;
  for (let depth = 0; current && depth < MAX_HIERARCHY_DEPTH; depth++) {
    if (current === root_id)
      return true;
    current = await parentOf(current);
  }
  return false;
}
function subtreeFilter(load) {
  const parents = /* @__PURE__ */ new Map();
  const parentOf = (id) => {
    if (!parents.has(id)) {
      parents.set(id, load(id).then((item) => item?.parent_id || "", () => ""));
    }
    return parents.get(id);
  };
  return async (items, root_id) => {
    if (!root_id)
      return items;
    for (const item of items) {
      parents.set(item.id, Promise.resolve(item.parent_id || ""));
    }
    const hidden = await Promise.all(items.map((item) => isInSubtree(item.id, root_id, parentOf)));
    return items.filter((_, index) => !hidden[index]);
  };
}

export {
  subtreeFilter
};
//# sourceMappingURL=chunk-ZEZ65MC2.js.map
