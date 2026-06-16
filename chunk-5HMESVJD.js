import {
  ActiveItemService,
  DriverFormComponent
} from "./chunk-7RLEODJV.js";
import {
  MatDialog
} from "./chunk-KHVEC2ZJ.js";
import {
  notifyError
} from "./chunk-IQ5P3T5K.js";
import {
  i18n
} from "./chunk-ZZM2ZLWR.js";
import {
  Gi,
  Pc,
  Sc,
  Service,
  bs,
  computed,
  inject,
  kc,
  ls,
  pc,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/repositories/repositories-state.service.ts
var RepositoriesStateService = class _RepositoriesStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _driver_list_error = signal(
    "",
    ...ngDevMode ? [{ debugName: "_driver_list_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _commit_error = signal(
    "",
    ...ngDevMode ? [{ debugName: "_commit_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._loading.asReadonly();
  driver_list_error = this._driver_list_error.asReadonly();
  commit_error = this._commit_error.asReadonly();
  /** Active repository */
  item = computed(
    () => this._state.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _driver_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_driver_list" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item }) => {
      if (!(item instanceof Gi) || item.repo_type === bs.Interface)
        return [];
      this._loading.set(true);
      this._driver_list_error.set("");
      try {
        return await kc(item.id, { limit: 2e3 });
      } catch (err) {
        this._driver_list_error.set(this._errorMessage(err));
        return [];
      } finally {
        this._loading.set(false);
      }
    }
  }));
  /** List of available drivers for repository */
  driver_list = computed(
    () => this._driver_list.value() || [],
    ...ngDevMode ? [{ debugName: "driver_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _commit = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_commit" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item }) => {
      if (!(item instanceof Gi))
        return "HEAD";
      this._commit_error.set("");
      let details = [];
      try {
        details = await Sc(item.id, {
          count: 1
        });
      } catch (err) {
        this._commit_error.set(this._errorMessage(err));
      }
      return details[0]?.commit || "HEAD";
    }
  }));
  /** Get latest commit for the active repository */
  commit = computed(
    () => this._commit.value() || "HEAD",
    ...ngDevMode ? [{ debugName: "commit" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get active_item() {
    return this._state.active_item;
  }
  async pullLatestCommit() {
    const commit = await Pc(this.active_item.id).catch((err) => {
      notifyError(i18n("REPOS.GIT_PULL_ERROR", {
        error: JSON.stringify(err.response || err.message || i18n("REPOS.GIT_PULL_TIMEOUT"))
      }));
    });
    if (!commit)
      return;
    const repo = await pc(this.active_item.id);
    if (repo)
      this._state.replaceItem(repo);
  }
  async newDriver(driver) {
    this._dialog.open(DriverFormComponent, {
      data: {
        item: new ls({
          name: "",
          module_name: "",
          repository_id: this.active_item.id,
          file_name: driver
        })
      }
    });
  }
  _errorMessage(err) {
    if (err instanceof Response)
      return `${err.status} ${err.statusText}`;
    if (err instanceof Error)
      return err.message;
    const error = err;
    return JSON.stringify(error?.response || error?.message || err);
  }
  static \u0275fac = function RepositoriesStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepositoriesStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _RepositoriesStateService, factory: _RepositoriesStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoriesStateService, [{
    type: Service
  }], null, null);
})();

export {
  RepositoriesStateService
};
//# sourceMappingURL=chunk-5HMESVJD.js.map
