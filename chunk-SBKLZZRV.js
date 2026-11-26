import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/common/types.ts
var EXTENSION_SECTIONS = [
  "admin",
  "systems",
  "modules",
  "zones",
  "drivers",
  "repositories",
  "triggers",
  "users",
  "domains"
];
function staticPage(data) {
  return { data, total: data.length, next_offset: null, next: null };
}
async function collectPages(response, pages_max = 1e3) {
  let page = await response;
  const data = [...page.data];
  for (let pages = 1; page.next && page.data.length; pages++) {
    if (pages >= pages_max) {
      throw new Error(
        `The list did not complete within ${pages_max} pages`
      );
    }
    const next = page.next();
    if (!next) throw new Error("The list did not move to the next page");
    page = await next;
    data.push(...page.data);
  }
  return data;
}
function mapPage(page, fn) {
  const next = page.next;
  return __spreadProps(__spreadValues({}, page), {
    data: page.data.map(fn),
    next: next ? () => next()?.then((_) => mapPage(_, fn)) ?? null : null
  });
}

export {
  EXTENSION_SECTIONS,
  staticPage,
  collectPages,
  mapPage
};
//# debugId=9295b652-d830-543d-8823-bc6b94510138
//# sourceMappingURL=chunk-SBKLZZRV.js.map
