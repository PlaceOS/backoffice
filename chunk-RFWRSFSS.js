import {
  ViewResponseModalComponent
} from "./chunk-6G6XO6PF.js";
import {
  ActiveItemService
} from "./chunk-2X4DVVIC.js";
import {
  MatDialog
} from "./chunk-AQMMFGML.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  Bo,
  No,
  Service,
  Vu,
  Xc,
  Xu,
  computed,
  inject,
  ks,
  resource,
  sc,
  setClassMetadata,
  signal,
  ta,
  ɵɵdefineService
} from "./chunk-QSXZQV2A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
      if (!(item instanceof ks))
        return [];
      return sc(item.id).catch(() => []);
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
      if (!(item instanceof ks))
        return null;
      return No(item.driver_id).catch(() => null);
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
      if (!(item instanceof ks) || !item.system_id)
        return null;
      return ta(item.system_id).catch(() => null);
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
      if (!(item instanceof ks) || !item.edge_id)
        return null;
      return Bo(item.edge_id).catch(() => null);
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
      if (!(item instanceof ks))
        return [];
      this._loading.set(true);
      try {
        const response = await Xc({
          module_id: item.id
        }).catch(() => ({ data: [] }));
        return response.data;
      } finally {
        this._loading.set(false);
      }
    }
  }));
  /** Systems associated with the active module */
  system_list = computed(
    () => this._system_list.value() || [],
    ...ngDevMode ? [{ debugName: "system_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get active_item() {
    return this._state.active_item;
  }
  async toggleModuleState() {
    const method = this.active_item.running ? Xu : Vu;
    const error = await method(this.active_item.id).then(() => null).catch((err) => err);
    if (error) {
      if (typeof error === "string" && error.length < 64) {
        notifyError(error);
      } else {
        notifyError(`Failed to ${this.active_item.running ? "stop" : "start"} device '${this.active_item.id}'.
View Error?`, "View", () => this.viewDetails(error));
      }
      return;
    }
    notifySuccess(`Module successfully ${this.active_item.running ? "stopped" : "started"}`);
    this.active_item.running = !this.active_item.running;
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
//# sourceMappingURL=chunk-RFWRSFSS.js.map
