import {
  currentUser,
  current_user
} from "./chunk-FQQU2C6T.js";
import {
  format,
  normalizeDates,
  startOfDay
} from "./chunk-NRO2XDNU.js";
import {
  waitForSignalValue
} from "./chunk-G5DVCCF5.js";
import {
  AsyncHandler
} from "./chunk-SDGTGI2H.js";
import {
  Title,
  getItemWithKeys,
  log
} from "./chunk-IWUSEH7D.js";
import {
  Service,
  inject,
  isDevMode,
  oc,
  rc,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-M2N6S2L7.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/env/version.ts
var VERSION = {
  "dirty": false,
  "raw": "v2608.1-112-g4ec8db7c",
  "hash": "g4ec8db7c",
  "distance": 112,
  "tag": "v2608.1",
  "semver": null,
  "suffix": "112-g4ec8db7c",
  "semverString": "",
  "stamp": "2610.125",
  "version": "0.0.0",
  "time": 1791263324093
};

// node_modules/date-fns/isSameDay.js
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}

// src/app/common/settings.ts
var general = {
  global_search: true
};
var systems = {
  can_create: true
};
var modules = {
  can_create: true
};
var zones = {
  can_create: true
};
var drivers = {
  can_create: true
};
var users = {
  can_create: true
};
var domains = {
  can_create: true
};
var triggers = {
  can_create: true
};
var repositories = {
  can_create: true
};
var app = {
  title: "Backoffice",
  name: "Backoffice",
  description: "PlaceOS Backoffice made in Angular 9.1+",
  short_name: "Backoffice",
  code: "BACKOFFICE",
  copyright: "Copyright 2018 Place Technology",
  login: {
    forgot: false
  },
  analytics: {
    enabled: false,
    tracking_id: ""
  },
  logo_light: {
    type: "img",
    src: "assets/img/logo.svg",
    background: ""
  },
  topbar: false,
  show_status_when_disconnected: false,
  general,
  domains,
  drivers,
  modules,
  repositories,
  systems,
  triggers,
  users,
  zones
};
var composer = {
  domain: "",
  route: "/backoffice",
  protocol: "",
  use_domain: false,
  local_login: false
};
var DEFAULT_SETTINGS = {
  env: "prod",
  /** Force debug output. See `SettingsService.init()` for other ways to enable it */
  debug: false,
  mock: false,
  composer,
  app
};

// src/app/common/settings.service.ts
var SettingsService = class _SettingsService extends AsyncHandler {
  _title = inject(Title);
  /** Name of the application */
  _app_name = "PlaceOS";
  /** User's personal settings */
  _user_settings = signal(
    {},
    ...ngDevMode ? [{ debugName: "_user_settings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Mapping of named settings signals */
  _signals = {};
  /** Mapping of pending settings */
  _pending_settings = {};
  /** Get signal for key */
  listen(name) {
    if (!this._signals[name]) {
      this._signals[name] = signal(null);
    }
    return this._signals[name].asReadonly();
  }
  /** Update signal value for key */
  post(name, value) {
    if (!this._signals[name]) {
      this._signals[name] = signal(null);
    }
    this._signals[name].set(value);
  }
  /** Read the value for key. Tracks the key even before it is posted. */
  value(name) {
    return this.listen(name)();
  }
  /** Page title */
  get title() {
    return this._title.getTitle();
  }
  set title(value) {
    this._title.setTitle(`${value} | ${this.get("app.name") || this._app_name}`);
  }
  constructor() {
    super();
    const now = /* @__PURE__ */ new Date();
    const time = new Date(VERSION.time);
    const built = isSameDay(now, time) ? `Today at ${format(time, "h:mma")}` : format(time, "do MMM yyyy, h:mma");
    log("CORE", `${VERSION.semver}`, null, "debug", true);
    log("APP", `${VERSION.hash} | Built: ${built}`, null, "debug", true);
    this.init();
  }
  /**
   * Initialise the settings
   */
  async init() {
    this._applyTheme();
    if (this.get("debug") || isDevMode() || localStorage.getItem("BACKOFFICE.debug") === "true") {
      window.debug = true;
    }
    const app2 = this.get("app");
    if (app2?.name) {
      this._app_name = app2.name;
    }
    this._app_name = location.pathname.replace(/[\\/]/g, "").trim() || this._app_name;
    log("Settings", "Successfully loaded settings");
    this._initialised.set(true);
    if (window.debug) {
      if (!window.application)
        window.application = {};
      window.application.settings = this;
    }
    const user = await waitForSignalValue(current_user, (user2) => !!user2).catch(() => null);
    if (!user)
      return;
    const data = await rc(user.id, "settings");
    this._user_settings.set(data.details || {});
    this._initDarkMode();
    this._applyTheme();
    this._setFontSize();
  }
  /** Whether settings service has initialised */
  get app_name() {
    return this._app_name;
  }
  get time_format() {
    return this.get("app.use_24_hour_time") ? "HH:mm" : "h:mm a";
  }
  /**
   * Get a setting
   * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
   */
  get(key) {
    const keys = key.split(".");
    if (keys[0] !== "app") {
      return getItemWithKeys(keys, this._pending_settings) ?? getItemWithKeys(keys, this._user_settings()) ?? getItemWithKeys(keys, DEFAULT_SETTINGS);
    }
    return getItemWithKeys(keys, DEFAULT_SETTINGS);
  }
  saveUserSetting(name, value) {
    this._pending_settings[name] = value;
    if (name === "dark_mode")
      this.setTheme(value ? "dark" : "");
    if (name === "font_size")
      this._setFontSize();
    this.timeout("save_settings", () => this._savePendingChanges(), 5e3);
  }
  overrideCssVariable(key, value, important = false) {
    let element = document.getElementById(`css-var-overrides+${key}`);
    if (!element) {
      element = document.createElement("style");
      element.id = `css-var-overrides+${key}`;
      document.head.appendChild(element);
    }
    element.innerText = `html, body { --${key}: ${value} ${important ? "!important" : ""}}`;
  }
  setTheme(theme) {
    const current_theme = this.get("theme");
    if (current_theme === theme)
      return;
    this.saveUserSetting("theme", theme);
    localStorage.setItem("PLACEOS.theme", theme);
    this._applyTheme();
  }
  /**
   * Save pending settings to the user's metadata.
   * Settings changed while the request is in flight stay pending for the
   * next save. On failure, the unsaved settings go back into the pending list.
   */
  async _savePendingChanges() {
    const user = currentUser();
    if (!user?.id || !Object.keys(this._pending_settings).length)
      return;
    const pending = this._pending_settings;
    this._pending_settings = {};
    const details = __spreadValues(__spreadValues({}, this._user_settings()), pending);
    this._user_settings.set(details);
    try {
      await oc(user.id, {
        name: "settings",
        description: "",
        details
      });
    } catch (err) {
      this._pending_settings = __spreadValues(__spreadValues({}, pending), this._pending_settings);
      log("Settings", "Failed to save user settings", [err], "warn", true);
    }
  }
  _setFontSize() {
    if (!this.get("font_size"))
      return;
    this.overrideCssVariable("font-size", `${this.get("font_size")}px`);
  }
  _applyTheme() {
    const theme = this.get("theme") || localStorage.getItem("PLACEOS.theme");
    const class_list = document.body.classList.value.split(" ");
    for (const item of class_list) {
      if (item.startsWith("theme-")) {
        document.body.classList.remove(item);
      }
    }
    if (theme) {
      document.body.classList.add(`theme-${theme}`);
    } else {
      document.body.classList.remove(`theme-${theme}`);
    }
  }
  _initDarkMode() {
    if (this.get("theme"))
      return;
    const os_dark = window?.matchMedia ? window?.matchMedia("(prefers-color-scheme: dark)")?.matches : false;
    this.setTheme(os_dark ? "dark" : "");
  }
  static \u0275fac = function SettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _SettingsService, factory: _SettingsService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Service
  }], () => [], null);
})();

export {
  isSameDay,
  VERSION,
  SettingsService
};
//# sourceMappingURL=chunk-UFM5XQJE.js.map
