import {
  toSignal
} from "./chunk-R3V5YJKZ.js";
import {
  NavigationEnd,
  Router
} from "./chunk-WDXKFFYO.js";
import {
  computed,
  filter,
  inject,
  linkedSignal,
  map
} from "./chunk-HGOGRFKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/common/opened-tabs.ts
function openedTabs(id) {
  const router = inject(Router);
  const url = toSignal(router.events.pipe(filter((event) => event instanceof NavigationEnd), map((event) => event.urlAfterRedirects)), { initialValue: router.url });
  const tab = computed(
    () => url().split(/[?#]/)[0].split("/")[3],
    ...ngDevMode ? [{ debugName: "tab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const opened = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "opened" } : (
    /* istanbul ignore next */
    {}
  )), {
    source: () => ({ id: id(), tab: tab() }),
    computation: (source, previous) => ({
      id: source.id,
      tabs: /* @__PURE__ */ new Set([
        ...previous && previous.value.id === source.id ? previous.value.tabs : [],
        source.tab
      ])
    })
  }));
  return computed(() => opened().tabs);
}

export {
  openedTabs
};
//# debugId=88abbc29-8521-5f59-a7bd-3f8fbc0162ae
//# sourceMappingURL=chunk-IJ7SWPKJ.js.map
