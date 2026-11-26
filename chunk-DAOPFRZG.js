import {
  DriverFormComponent
} from "./chunk-7DLUNGCG.js";
import {
  ActiveItemService
} from "./chunk-BMBCYN44.js";
import {
  describeError
} from "./chunk-HS2B2TZM.js";
import {
  notifyError
} from "./chunk-V2X4XHND.js";
import {
  newItem
} from "./chunk-V3DC4H2S.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import {
  Driver,
  repositories_exports
} from "./chunk-PRQVSGD2.js";
import {
  PlaceRepositoryType,
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

// src/app/repositories/repositories-state.service.ts
var RepositoriesStateService = class _RepositoriesStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(Dialog);
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
    () => this._state.activeOf("repositories"),
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
    loader: async ({ params: item, abortSignal }) => {
      if (!item || item.repo_type === PlaceRepositoryType.Interface)
        return [];
      this._loading.set(true);
      this._driver_list_error.set("");
      try {
        return await repositories_exports.drivers({ id: item.id }, { signal: abortSignal }).then(orThrow);
      } catch (err) {
        if (!abortSignal.aborted)
          this._driver_list_error.set(describeError(err));
        return [];
      } finally {
        if (!abortSignal.aborted)
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
  _changelog = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_changelog" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => {
      const item = this.item();
      if (!item || item.repo_type !== PlaceRepositoryType.Interface || !item.folder_name) {
        return void 0;
      }
      return item.folder_name.replace(/^\/+|\/+$/g, "") || void 0;
    },
    loader: async ({ params: folder_name, abortSignal }) => {
      try {
        const response = await fetch(`/${folder_name}/CHANGELOG.md`, {
          cache: "no-cache",
          signal: abortSignal
        });
        return response.ok ? await response.text() : null;
      } catch {
        return null;
      }
    }
  }));
  /** Changelog loaded from the folder that serves the active interface. */
  changelog = computed(
    () => this._changelog.value() || "",
    ...ngDevMode ? [{ debugName: "changelog" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the active interface has a loadable CHANGELOG.md file. */
  has_changelog = computed(
    () => {
      const changelog = this._changelog.value();
      return changelog !== void 0 && changelog !== null;
    },
    ...ngDevMode ? [{ debugName: "has_changelog" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changelog_loading = this._changelog.isLoading;
  _commit = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_commit" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item, abortSignal }) => {
      if (!item)
        return "HEAD";
      this._commit_error.set("");
      let details = [];
      try {
        details = await repositories_exports.commits({ id: item.id, limit: 1 }, { signal: abortSignal }).then(orThrow);
      } catch (err) {
        if (!abortSignal.aborted)
          this._commit_error.set(describeError(err));
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
    return this._state.activeOf("repositories");
  }
  async pullLatestCommit() {
    const commit = await repositories_exports.pull({ id: this.active_item.id }).then(orThrow).catch((err) => {
      notifyError(i18n("REPOS.GIT_PULL_ERROR", {
        error: err ? describeError(err) : i18n("REPOS.GIT_PULL_TIMEOUT")
      }));
    });
    if (!commit)
      return;
    const repo = await repositories_exports.show({ id: this.active_item.id }).then(orThrow);
    if (repo)
      this._state.replaceItem(repo);
  }
  async newDriver(driver) {
    this._dialog.open(DriverFormComponent, {
      data: {
        item: newItem(Driver, {
          name: "",
          module_name: "",
          repository_id: this.active_item.id,
          file_name: driver
        })
      }
    });
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
//# debugId=2d5894df-4225-5294-bb48-6c4f18102d88
//# sourceMappingURL=chunk-DAOPFRZG.js.map
