import {
  loadSupportAccess
} from "./chunk-XTDO4IU7.js";
import {
  SettingsService
} from "./chunk-TMJOAQZL.js";
import {
  current_user,
  setCurrentUser
} from "./chunk-PIRFEBZC.js";
import {
  AsyncHandler
} from "./chunk-JMHMEOZG.js";
import {
  ao,
  eh,
  io,
  nh
} from "./chunk-3QDC3AOP.js";
import {
  Service,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-TCVU4336.js";

// src/app/users/users.service.ts
var MAX_LOAD_ATTEMPTS = 12;
var BackofficeUsersService = class _BackofficeUsersService extends AsyncHandler {
  _settings = inject(SettingsService);
  /** Name for a single user */
  singular = "user";
  /** Signal with the currently available list of users */
  listing = signal(
    [],
    ...ngDevMode ? [{ debugName: "listing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Active User */
  user = current_user;
  /** Active User */
  current = () => this.user();
  /** Active User */
  currentSignal = () => this.user;
  /** State of loading the user */
  state = signal(
    "",
    ...ngDevMode ? [{ debugName: "state" }] : (
      /* istanbul ignore next */
      []
    )
  );
  can_create = false;
  can_edit = true;
  /** Whether dark mode is enabled */
  get dark_mode() {
    const os_dark = window?.matchMedia ? window?.matchMedia("(prefers-color-scheme: dark)")?.matches : false;
    const theme = localStorage.getItem("BACKOFFICE.theme") ?? (this.user() || {}).ui_theme;
    return theme && theme === "dark" || !theme && os_dark;
  }
  set dark_mode(state) {
    if (state) {
      localStorage.setItem("BACKOFFICE.theme", "dark");
      this._settings.post("dark_mode", state);
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("BACKOFFICE.theme", "light");
      document.body.classList.remove("dark-mode");
    }
  }
  /** Default method for filtering the available list */
  _filter_fn = (_) => true;
  constructor() {
    super();
    const unsubscribe = io().subscribe((online) => {
      if (online)
        this.load();
    });
    this.subscription("online", unsubscribe);
  }
  /**
   * Get the available list of zones
   * @param predicate Function to filter the zone list on
   */
  list(predicate = this._filter_fn) {
    return (this.listing() || []).filter(predicate);
  }
  async query(query_params) {
    return (await eh(query_params)).data;
  }
  /**
   * Load the signed-in user and their support access. Retries with backoff
   * while the user is not available, and gives up after
   * `MAX_LOAD_ATTEMPTS` until the next reconnect calls it again.
   */
  load(attempt = 0) {
    return new Promise((resolve) => {
      this.state.set("loading");
      const retry = () => {
        if (attempt + 1 >= MAX_LOAD_ATTEMPTS) {
          this.state.set("error");
          return resolve();
        }
        this.timeout("load", () => this.load(attempt + 1).then(() => resolve()), Math.min(600 * 2 ** attempt, 30 * 1e3));
      };
      nh().then(async (user) => {
        if (!user)
          return retry();
        await loadSupportAccess(user);
        setCurrentUser(user);
        this.state.set("success");
        this._initialised.set(true);
        const _current_theme = this.dark_mode;
        resolve();
      }).catch(retry);
    });
  }
  /**
   * Login with given credentials
   * @param fields Key value pairs of post parameters
   */
  login(_fields = {}) {
  }
  /**
   * Logout from the application
   */
  logout() {
    ao();
  }
  static \u0275fac = function BackofficeUsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BackofficeUsersService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _BackofficeUsersService, factory: _BackofficeUsersService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackofficeUsersService, [{
    type: Service
  }], () => [], null);
})();

export {
  BackofficeUsersService
};
//# debugId=e53f7ee8-f112-5d9d-8acc-41f4b199a3a5
//# sourceMappingURL=chunk-R4WUVX7X.js.map
