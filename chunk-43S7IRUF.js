import {
  i18n
} from "./chunk-LM4JNNMG.js";
import {
  Io,
  Jo,
  Sa,
  Ta,
  V,
  _,
  _h,
  dh,
  qo,
  xa,
  yh
} from "./chunk-NMVMT4VD.js";

// src/app/common/cascade-delete.ts
var PAGE_SIZE = 500;
var MAX_ZONES = 5e3;
var MAX_PAGES = 100;
var READ_CONCURRENCY = 8;
var REMOVING_KEY = {
  system: "CASCADE.REMOVING_SYSTEM",
  zone: "CASCADE.REMOVING_ZONE",
  application: "CASCADE.REMOVING_APPLICATION",
  tenant: "CASCADE.REMOVING_TENANT",
  domain: "CASCADE.REMOVING_DOMAIN"
};
var removingLabel = (resource) => i18n(REMOVING_KEY[resource.type], { name: resource.name });
var emptyPlan = () => ({
  scope: [],
  summary: [],
  warnings: [],
  steps: []
});
async function mapLimit(list, limit, fn) {
  const results = new Array(list.length);
  let next_index = 0;
  let failure = null;
  const worker = async () => {
    while (!failure && next_index < list.length) {
      const index = next_index++;
      try {
        results[index] = await fn(list[index]);
      } catch (error) {
        failure ||= { error };
      }
    }
  };
  const size = Math.min(limit, list.length);
  await Promise.all(new Array(size).fill(0).map(() => worker()));
  if (failure) throw failure.error;
  return results;
}
async function collectPages(request) {
  const items = [];
  let page = await request;
  items.push(...page.data);
  let pages = 1;
  while (page.next) {
    if (pages >= MAX_PAGES) {
      throw new Error(
        `Listing did not complete within ${MAX_PAGES} pages of ${PAGE_SIZE}`
      );
    }
    const next_page = page.next();
    if (!next_page) break;
    page = await next_page;
    if (!page.data.length) break;
    items.push(...page.data);
    pages += 1;
  }
  return items;
}
async function zoneSubtreeIds(zone_id) {
  if (!zone_id) return [];
  const found = [zone_id];
  const seen = new Set(found);
  let level = [zone_id];
  while (level.length) {
    if (found.length >= MAX_ZONES) {
      throw new Error(
        `Zone tree beneath ${zone_id} exceeds ${MAX_ZONES} zones`
      );
    }
    const children = await collectPages(
      dh({ parent_id: level.join(","), limit: PAGE_SIZE })
    );
    level = [];
    for (const zone of children) {
      if (!zone?.id || seen.has(zone.id)) continue;
      seen.add(zone.id);
      found.push(zone.id);
      level.push(zone.id);
    }
  }
  return found;
}
async function splitZoneSystems(zone_ids) {
  const subtree = new Set(zone_ids);
  const inside = (system) => {
    const zones = system.zones || [];
    return zones.length > 0 && zones.every((id) => subtree.has(id));
  };
  const found = /* @__PURE__ */ new Map();
  const pages = await mapLimit(
    zone_ids,
    READ_CONCURRENCY,
    (zone_id) => collectPages(Sa({ zone_id, limit: PAGE_SIZE }))
  );
  for (const list of pages) {
    for (const system of list) if (system?.id) found.set(system.id, system);
  }
  const candidates = [];
  const retained = [];
  for (const system of found.values()) {
    (inside(system) ? candidates : retained).push(system);
  }
  const confirmed = await mapLimit(
    candidates,
    READ_CONCURRENCY,
    (system) => xa(system.id).catch(() => null)
  );
  const orphaned = [];
  confirmed.forEach((current) => {
    if (!current) return;
    (inside(current) ? orphaned : retained).push(current);
  });
  return { orphaned, retained };
}
async function planZoneCascade(zone_id, subtree_ids) {
  const plan = emptyPlan();
  const zone_ids = subtree_ids ?? await zoneSubtreeIds(zone_id);
  if (!zone_ids.length) return plan;
  const { orphaned, retained } = await splitZoneSystems(zone_ids);
  const module_count = new Set(
    orphaned.flatMap((system) => [...system.modules || []])
  ).size;
  const child_count = zone_ids.length - 1;
  if (child_count) {
    plan.scope.push(
      i18n("CASCADE.SCOPE_ZONES", { count: child_count }, child_count)
    );
  }
  if (orphaned.length) {
    plan.summary.push(
      i18n(
        "CASCADE.REMOVE_SYSTEMS",
        { count: orphaned.length },
        orphaned.length
      )
    );
    if (module_count) {
      plan.summary.push(
        i18n(
          "CASCADE.REMOVE_MODULES",
          { count: module_count },
          module_count
        )
      );
    }
  }
  if (retained.length) {
    plan.warnings.push(
      i18n(
        "CASCADE.KEEP_SYSTEMS",
        { count: retained.length },
        retained.length
      )
    );
  }
  plan.steps = orphaned.map((system) => ({
    resource: {
      type: "system",
      id: system.id,
      name: system.name
    },
    run: () => Ta(system.id)
  }));
  return plan;
}
async function domainTenants(domain) {
  if (!domain) return [];
  const tenants = await _("/api/staff/v1/tenants");
  return (tenants || []).filter((tenant) => tenant?.domain === domain);
}
function orgZoneId(domain) {
  return `${domain?.config?.org_zone || ""}`;
}
async function planDomainCascade(domain) {
  const plan = emptyPlan();
  const org_zone_id = orgZoneId(domain);
  const [applications, tenants, all_domains] = await Promise.all([
    collectPages(
      qo({ authority_id: domain.id, limit: PAGE_SIZE })
    ),
    domainTenants(domain.domain),
    org_zone_id ? collectPages(Jo({ limit: PAGE_SIZE })) : Promise.resolve([])
  ]);
  if (applications.length) {
    plan.summary.push(
      i18n(
        "CASCADE.REMOVE_APPLICATIONS",
        { count: applications.length },
        applications.length
      )
    );
    plan.steps.push(
      ...applications.map((application) => ({
        resource: {
          type: "application",
          id: `${application.id}`,
          name: application.name
        },
        run: () => Io(application.id)
      }))
    );
  }
  if (tenants.length) {
    plan.summary.push(
      i18n(
        "CASCADE.REMOVE_TENANTS",
        { count: tenants.length },
        tenants.length
      )
    );
    plan.steps.push(
      ...tenants.map((tenant) => ({
        resource: {
          type: "tenant",
          id: `${tenant.id}`,
          name: tenant.name || tenant.domain
        },
        run: () => V(`/api/staff/v1/tenants/${tenant.id}`)
      }))
    );
  }
  if (!org_zone_id) {
    plan.warnings.push(i18n("CASCADE.NO_ORG_ZONE"));
    return plan;
  }
  const org_subtree_ids = await zoneSubtreeIds(org_zone_id);
  const org_subtree = new Set(org_subtree_ids);
  const sharing = all_domains.filter((other) => {
    if (other.id === domain.id) return false;
    const other_zone = orgZoneId(other);
    return !!other_zone && org_subtree.has(other_zone);
  });
  if (sharing.length) {
    plan.warnings.push(
      i18n("CASCADE.ORG_ZONE_SHARED", {
        names: sharing.map((other) => other.name).join(", ")
      })
    );
    return plan;
  }
  const org_zone = await _h(org_zone_id).catch(
    () => null
  );
  if (!org_zone) {
    plan.warnings.push(
      i18n("CASCADE.ORG_ZONE_MISSING", { id: org_zone_id })
    );
    return plan;
  }
  const zone_plan = await planZoneCascade(org_zone_id, org_subtree_ids);
  plan.scope.push(i18n("CASCADE.SCOPE_ORG_ZONE", { name: org_zone.name }));
  plan.summary.push(...zone_plan.summary, i18n("CASCADE.REMOVE_ORG_ZONE"));
  plan.warnings.push(...zone_plan.warnings);
  plan.steps.push(...zone_plan.steps, {
    resource: {
      type: "zone",
      id: org_zone_id,
      name: org_zone.name
    },
    run: () => yh(org_zone_id)
  });
  return plan;
}
var SYSTEM_REMOVAL_CONCURRENCY = 4;
async function runCascade(plan, progress = () => void 0) {
  const outcome = { removed: [], failures: [], skipped: [] };
  const steps = plan.steps;
  const total = steps.length;
  const runStep = async (index) => {
    const step = steps[index];
    if (outcome.failures.length) {
      outcome.skipped.push(step.resource);
      return;
    }
    progress(
      i18n("CASCADE.PROGRESS", {
        step: removingLabel(step.resource),
        index: index + 1,
        total
      })
    );
    try {
      await step.run();
      outcome.removed.push(step.resource);
    } catch (error) {
      outcome.failures.push({ resource: step.resource, error });
    }
  };
  for (let start = 0; start < total; ) {
    let end = start + 1;
    if (steps[start].resource.type === "system") {
      while (end < total && steps[end].resource.type === "system") end++;
    }
    const indexes = Array.from(
      { length: end - start },
      (_2, offset) => start + offset
    );
    await mapLimit(indexes, SYSTEM_REMOVAL_CONCURRENCY, runStep);
    start = end;
  }
  return outcome;
}

export {
  mapLimit,
  planZoneCascade,
  planDomainCascade,
  runCascade
};
//# debugId=0c86f10d-4008-53dd-b101-46b121e21426
//# sourceMappingURL=chunk-43S7IRUF.js.map
