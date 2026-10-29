import {
  ViewResponseModalComponent
} from "./chunk-Z7OQOPMY.js";
import {
  reportLoadError
} from "./chunk-LVQJ6JUX.js";
import {
  ActiveItemService
} from "./chunk-ACXRHHDC.js";
import {
  querySupportSystems
} from "./chunk-F2UXRHVQ.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-LKZDNNIZ.js";
import {
  MatDialog
} from "./chunk-4K4B4UVA.js";
import {
  Es,
  kc,
  pu,
  qc,
  su,
  vc,
  xa
} from "./chunk-3QDC3AOP.js";
import {
  Service,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-HGOGRFKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/modules/module-state.service.ts
var ModuleStateService = class _ModuleStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._loading.asReadonly();
  /** Active module */
  item = computed(
    () => this._state.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _associated_settings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_associated_settings" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item }) => {
      if (!(item instanceof Es))
        return [];
      return qc(item.id).catch(() => []);
    }
  }));
  /** Signal for associated settings of the active item */
  associated_settings = computed(
    () => this._associated_settings.value() || [],
    ...ngDevMode ? [{ debugName: "associated_settings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _driver = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_driver" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item }) => {
      if (!(item instanceof Es))
        return null;
      return su(item.driver_id).catch(() => null);
    }
  }));
  /** Driver associated with the active module */
  driver = computed(
    () => this._driver.value() || null,
    ...ngDevMode ? [{ debugName: "driver" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _system = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_system" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item }) => {
      if (!(item instanceof Es) || !item.system_id)
        return null;
      return xa(item.system_id).catch(() => null);
    }
  }));
  /** System associated with the active module */
  system = computed(
    () => this._system.value() || null,
    ...ngDevMode ? [{ debugName: "system" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _edge = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_edge" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item }) => {
      if (!(item instanceof Es) || !item.edge_id)
        return null;
      return pu(item.edge_id).catch(() => null);
    }
  }));
  edge = computed(
    () => this._edge.value() || null,
    ...ngDevMode ? [{ debugName: "edge" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _system_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_system_list" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item }) => {
      if (!(item instanceof Es))
        return { data: [], total: 0 };
      this._loading.set(true);
      try {
        const response = await querySupportSystems({
          module_id: item.id
        }).catch(reportLoadError({ data: [], total: 0 }));
        return { data: response.data, total: response.total };
      } finally {
        this._loading.set(false);
      }
    }
  }));
  /** Systems associated with the active module */
  system_list = computed(
    () => this._system_list.value()?.data || [],
    ...ngDevMode ? [{ debugName: "system_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Total systems of the active module, or `undefined` while loading */
  system_total = computed(
    () => this._system_list.isLoading() ? void 0 : this._system_list.value()?.total,
    ...ngDevMode ? [{ debugName: "system_total" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get active_item() {
    return this._state.active_item;
  }
  async toggleModuleState() {
    const item = this.active_item;
    const running = item.running;
    const method = running ? kc : vc;
    const error = await method(item.id).then(() => null).catch((err) => err);
    if (error) {
      if (typeof error === "string" && error.length < 64) {
        notifyError(error);
      } else {
        notifyError(`Failed to ${running ? "stop" : "start"} device '${item.id}'.
View Error?`, "View", () => this.viewDetails(error));
      }
      return;
    }
    notifySuccess(`Module successfully ${running ? "stopped" : "started"}`);
    item.running = !running;
  }
  /** View Results of the execute */
  viewDetails(content) {
    this._dialog.open(ViewResponseModalComponent, {
      data: { content }
    });
  }
  static \u0275fac = function ModuleStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _ModuleStateService, factory: _ModuleStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleStateService, [{
    type: Service
  }], null, null);
})();

export {
  ModuleStateService
};
//# debugId=d9709ae6-3c46-5a73-98a1-ed7dfbda3366
//# sourceMappingURL=chunk-D3EX3E7N.js.map
