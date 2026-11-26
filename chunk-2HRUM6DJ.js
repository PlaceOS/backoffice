import {
  ViewResponseModalComponent
} from "./chunk-LS7B5NNB.js";
import {
  reportLoadError
} from "./chunk-TCTQ55E5.js";
import {
  ActiveItemService
} from "./chunk-6WSNTN76.js";
import {
  shortModuleError
} from "./chunk-NK7WPEHP.js";
import {
  querySupportSystems
} from "./chunk-6TJHSNQM.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-V2X4XHND.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  drivers_exports,
  edges_exports,
  modules_exports,
  systems_exports
} from "./chunk-PRQVSGD2.js";
import {
  orThrow
} from "./chunk-LD3K5ATK.js";
import {
  Service,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/modules/module-state.service.ts
var ModuleStateService = class _ModuleStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(Dialog);
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
    () => this._state.activeOf("modules"),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Settings of each encryption level of the active module */
  settings = computed(
    () => this.item()?.settings,
    ...ngDevMode ? [{ debugName: "settings" }] : (
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
      if (!item)
        return [];
      return modules_exports.settings({ id: item.id }).then(orThrow).catch(() => []);
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
      if (!item)
        return null;
      return drivers_exports.show({ id: item.driver_id }).then(orThrow).catch(() => null);
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
      if (!item?.control_system_id)
        return null;
      return systems_exports.show({ sys_id: item.control_system_id }).then(orThrow).catch(() => null);
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
      if (!item?.edge_id)
        return null;
      return edges_exports.show({ id: item.edge_id }).then(orThrow).catch(() => null);
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
      if (!item)
        return { data: [], total: 0 };
      this._loading.set(true);
      try {
        const response = await querySupportSystems({
          module_id: item.id
        }).catch(reportLoadError({
          data: [],
          total: 0
        }));
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
    return this._state.activeOf("modules");
  }
  async toggleModuleState() {
    const item = this.active_item;
    const running = item.running;
    const method = running ? modules_exports.stop : modules_exports.start;
    const error = await method({ id: item.id }).then(orThrow).then(() => null).catch((err) => err);
    if (error) {
      const message = shortModuleError(error);
      if (message) {
        notifyError(message);
      } else {
        notifyError(`Failed to ${running ? "stop" : "start"} device '${item.id}'.
View Error?`, "View", () => this.viewDetails(error));
      }
      return;
    }
    notifySuccess(`Module successfully ${running ? "stopped" : "started"}`);
    const current = this.active_item;
    if (current?.id === item.id) {
      this._state.replaceItem(__spreadProps(__spreadValues({}, current), { running: !running }));
    }
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
//# debugId=080ef65b-b3d7-5ae1-8633-6dd2012498b3
//# sourceMappingURL=chunk-2HRUM6DJ.js.map
