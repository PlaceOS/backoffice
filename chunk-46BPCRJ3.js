import {
  format,
  normalizeDates
} from "./chunk-ZQ2RL7UU.js";
import {
  startOfDay
} from "./chunk-4CBXDUSX.js";
import {
  AsyncHandler
} from "./chunk-KFG47F7M.js";
import {
  Title
} from "./chunk-BUKXKXBA.js";
import {
  Injectable,
  getItemWithKeys,
  inject,
  log,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-E55B7SJP.js";
import {
  BehaviorSubject,
  Ea,
  ao,
  delay,
  first,
  nc,
  rc,
  retry
} from "./chunk-WQVS62YG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/env/version.ts
var VERSION = {
  "dirty": false,
  "raw": "cbe67a1",
  "hash": "cbe67a1",
  "distance": null,
  "tag": null,
  "semver": null,
  "suffix": "cbe67a1",
  "semverString": null,
  "stamp": "2603.249",
  "version": "0.0.0",
  "time": 1773221605476
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
  debug: true,
  mock: false,
  composer,
  app
};

// src/app/common/google-analytics.service.ts
var GoogleAnalyticsService = class _GoogleAnalyticsService {
  title = inject(Title);
  /** Google Analytics API object */
  service;
  /** Application prefix to add to event categories */
  app_prefix;
  /** Whether posting analytics events is enabled */
  enabled = true;
  /** Name of the application */
  app_name = "GA_APP";
  /** Last route posted to the API */
  last_route;
  /** Store for timer ids */
  timers = {};
  init(tracking_id = "") {
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s);
        const dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", tracking_id);
      log("Analytics", "Service", "Injected Google Analytics into page");
    }
    this.service = window.gtag;
  }
  push(obj) {
    window.dataLayer.push(obj);
  }
  /**
   * Initialise Google Analytics
   * @param tracking_id GA Tracking ID
   */
  load(tracking_id) {
    if (!this.enabled) {
      throw new Error("Google Analytics needs to be enabled before being initialised");
    }
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    log("Analytics", "Service", `Setup with tracking ID: ${tracking_id}`);
    this.page("");
  }
  /**
   * Set User ID for the Google Analytics session
   * @param id Identifier of the User
   */
  setUser(id) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`user|${id}`, () => {
        log("Analytics", "Service", `Set user ID: ${id}`);
        this.service("set", "userId", id);
        this.event("authentication", "user-id available");
      }, 100);
    }
  }
  send(type, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`end|${type}`, () => {
        this.push(__spreadProps(__spreadValues({}, value), {
          event: "event"
        }));
      });
    }
  }
  /**
   * Post event to Google Analytics API
   * @param category Event Category
   * @param action Event Action
   * @param label Event Label
   * @param value Event Value
   */
  event(category, action, label, value) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`event|${category}|${action}|${label}|${value}`, () => {
        const l = label ? ", " + label : "";
        log("Analytics", "Service", `Event: ${category}, ${action}${l}${value ? ", " + value : ""}`);
        this.push({
          event: "event",
          category,
          action,
          label
        });
      }, 100);
    }
  }
  /**
   * Post screen change event to Google Analytics API
   * @param name
   * @param app_name
   */
  screen(name, app_name) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (name && this.enabled) {
      this.timeout(`event|${name}|${app_name || this.app_name}`, () => {
        log("Analytics", "Service", `Screen: ${name}${app_name ? ", " + app_name : ""}`);
        this.push({
          event: "screenview",
          appName: app_name || this.app_name,
          screenName: name
        });
      }, 100);
    }
  }
  /**
   * Post routing event to Google Analytics API
   * @param route Activated route
   * @param origin Add origin to routh path
   */
  page(route, origin = false) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.last_route = route || "/";
      this.timeout(`page|${route}`, () => {
        log("Analytics", "Service", `Page: ${route}`);
        this.push({
          event: "pageview",
          url: `${origin ? location.origin : ""}${route}`
        });
      }, 100);
    }
  }
  /**
   * Post timing event to Google Analytics API
   * @param category
   * @param variable
   * @param value
   * @param label
   */
  timing(category, variable, value, label) {
    if (!this.service) {
      throw new Error("Google Analytics hasn't been installed on this page");
    }
    if (this.enabled) {
      this.timeout(`page|${category}|${variable}|${value}|${label}`, () => {
        log("Analytics", "Service", `Timing: ${category}, ${variable}, ${value}${label ? ", " + label : ""}`);
        this.push({
          event: "timing",
          category,
          variable,
          value,
          label
        });
      }, 100);
    }
  }
  /**
   * Creates a timeout for the given name used for preventing duplicate events in quick succession
   * @param name Name of timer
   * @param fn Timer callback
   * @param delay Timer delay
   */
  timeout(name, fn, delay2 = 300) {
    if (this.timers[name]) {
      clearTimeout(this.timers[name]);
      delete this.timers[name];
    }
    this.timers[name] = setTimeout(() => {
      if (fn instanceof Function) {
        fn();
      }
      delete this.timers[name];
    }, delay2);
  }
  static \u0275fac = function GoogleAnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoogleAnalyticsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleAnalyticsService, factory: _GoogleAnalyticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/common/user-state.ts
var EMPTY_USER = new ao();
var _current_user = new BehaviorSubject(null);
var current_user = _current_user.asObservable();
setTimeout(() => {
  try {
    if (jest)
      return;
  } catch {
  }
  Ea("current").pipe(delay(1e3), retry(10)).subscribe((user) => _current_user.next(user));
}, 300);
function currentUser() {
  return _current_user.getValue() || EMPTY_USER;
}

// src/app/common/settings.service.ts
var SettingsService = class _SettingsService extends AsyncHandler {
  _title = inject(Title);
  _analytics = inject(GoogleAnalyticsService, { optional: true });
  /** Name of the application */
  _app_name = "PlaceOS";
  /** List of override settings in order of priority */
  _overrides = new BehaviorSubject([]);
  /** User's personal settings */
  _user_settings = new BehaviorSubject({});
  /** Mapping of behaviour subjects */
  _subjects = {};
  /** Mapping of observables */
  _observables = {};
  /** Mapping of pending settings */
  _pending_settings = {};
  /**
   * @hidden
   */
  set overrides(value) {
    this._overrides.next(value);
    this._applyCssVariables();
  }
  /** Get observable for key */
  listen(name) {
    if (!this._observables[name]) {
      this._subjects[name] = new BehaviorSubject(null);
      this._observables[name] = this._subjects[name].asObservable();
    }
    return this._observables[name];
  }
  /** Update observable value for key */
  post(name, value) {
    if (!this._observables[name]) {
      this._subjects[name] = new BehaviorSubject(null);
      this._observables[name] = this._subjects[name].asObservable();
    }
    this._subjects[name].next(value);
  }
  value(name) {
    return !this._observables[name] ? null : this._subjects[name].getValue();
  }
  /** Page title */
  get title() {
    return this._title.getTitle();
  }
  set title(value) {
    this._title.setTitle(`${value} | ${this.get("app.name") || this._app_name}`);
    const tracking_id = this.get("app.analytics.tracking_id");
    if (!tracking_id)
      return;
    this._analytics?.send("pagename", { title: value });
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
    if (this.get("debug"))
      window.debug = true;
    const app2 = this.get("app");
    if (app2?.name) {
      this._app_name = app2.name;
    }
    this._app_name = location.pathname.replace(/[\\/]/g, "").trim() || this._app_name;
    log("Settings", "Successfully loaded settings");
    this._initialised.next(true);
    if (window.debug) {
      if (!window.application)
        window.application = {};
      window.application.settings = this;
    }
    this.subscription("user_settings", this._user_settings.subscribe((_) => this._applyUserSettings(_)));
    const user = await current_user.pipe(first((_) => !!_)).toPromise();
    const data = await nc(user.id, "settings").toPromise();
    this._user_settings.next(data.details || {});
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
      return getItemWithKeys(keys, this._pending_settings) ?? getItemWithKeys(keys, this._user_settings.getValue()) ?? getItemWithKeys(keys, DEFAULT_SETTINGS);
    }
    const override_settings = [...this._overrides.getValue()];
    for (const override of override_settings) {
      const value = getItemWithKeys(keys.slice(1), override);
      if (value != null) {
        return value;
      }
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
  _applyCssVariables() {
    const variable_map = this.get("app.css_variables") || {};
    let css_string = "body { ";
    for (const key in variable_map) {
      css_string += `--${key}: ${variable_map[key]}; `;
    }
    css_string += "}";
    let element = document.getElementById("css-var-overrides");
    if (!element) {
      element = document.createElement("style");
      element.id = "css-var-overrides";
      document.head.appendChild(element);
    }
    element.innerText = css_string;
  }
  async _savePendingChanges() {
    const user = currentUser();
    if (!user?.id || !Object.keys(this._pending_settings).length)
      return;
    await rc(user.id, {
      name: "settings",
      description: "",
      details: __spreadValues(__spreadValues({}, this._user_settings.getValue()), this._pending_settings)
    }).toPromise();
    this._user_settings.next(__spreadValues(__spreadValues({}, this._user_settings.getValue()), this._pending_settings));
    this._pending_settings = {};
  }
  async _applyUserSettings(settings) {
    if (settings.font_size) {
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
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  isSameDay,
  VERSION,
  currentUser,
  SettingsService
};
//# sourceMappingURL=chunk-46BPCRJ3.js.map
