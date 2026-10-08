import {
  log
} from "./chunk-SXYVSUAR.js";
import {
  rc
} from "./chunk-P3FA5CPP.js";
import {
  Pipe,
  Service,
  inject,
  setClassMetadata,
  ɵɵdefinePipe,
  ɵɵdefineService
} from "./chunk-RDM3X2TD.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/common/locale.service.ts
var _service;
function setTranslationService(service) {
  _service = service;
}
function i18n(key, args = {}, plural = 0) {
  if (!_service)
    return key;
  return _service.get(key, args, plural);
}
function localeFromUrl(search, hash) {
  const hash_query = hash.includes("?") ? hash.slice(hash.indexOf("?")) : "";
  return new URLSearchParams(hash_query).get("lang") || new URLSearchParams(search).get("lang") || null;
}
function removeNesting(value, path = "") {
  let out_object = {};
  for (const key in value) {
    const out_key = path ? [path, key].join(".") : key;
    if (value[key] instanceof Object) {
      out_object = __spreadValues(__spreadValues({}, out_object), removeNesting(value[key], out_key));
    } else {
      out_object[out_key] = `${value[key]}`;
    }
  }
  return out_object;
}
function removeLocalStorageKeysWithSubstring(substring) {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && key.includes(substring)) {
      localStorage.removeItem(key);
    }
  }
}
var STORE_KEY = "APP.locale";
var LocaleService = class _LocaleService {
  _default_locale = "en-AU";
  _current_locale = this._default_locale;
  _current_locale_short = this._current_locale.split("-")[0];
  _cache_time = 7 * 24 * 60 * 60 * 1e3;
  _load_promises = {};
  _default_mappings = {};
  /**
   * Resolves when the fallback translations have loaded.
   * They load lazily to keep them out of the initial bundle.
   */
  ready = import("./chunk-DMNPV4UH.js").then(({ default: data }) => {
    this._default_mappings = removeNesting(data);
  });
  _locale_mappings = {};
  locale_folder = "assets/locale";
  zone_id;
  constructor() {
    this._current_locale = localStorage.getItem(`${STORE_KEY}`) || this._default_locale;
    if (this._current_locale !== this._default_locale) {
      const existing = JSON.parse(localStorage.getItem(`${STORE_KEY}.${this._current_locale}`) || "{}");
      if (existing.expiry && existing.expiry > Date.now()) {
        this._locale_mappings[this._current_locale] = existing.mappings;
      }
    }
  }
  init() {
    this.setLocale(localStorage.getItem(`${STORE_KEY}`) || this._default_locale);
    if (window.debug) {
      window.clearLocaleDataStore = () => {
        removeLocalStorageKeysWithSubstring(STORE_KEY);
        location.reload();
      };
      window.i18n = i18n;
    }
  }
  get(key, args = {}, plural = 0) {
    let key_value = key;
    let value = key;
    const map = this._locale_mappings[this._current_locale] || {};
    const map_short = this._locale_mappings[this._current_locale_short] || {};
    const map_default = this._default_mappings || {};
    if (plural) {
      key_value = `${key}_${plural}`;
      value = map[key_value] || map_short[key_value] || map_default[key_value] || key;
      if (value === key) {
        key_value = `${key}_N`;
        value = map[key_value] || map_short[key_value] || map_default[key_value] || key;
      }
      if (value === key) {
        value = map[key] || map_short[key] || map_default[key] || key;
      }
    } else {
      value = map[key_value] || map_short[key_value] || map_default[key_value] || key;
    }
    for (const id in args) {
      value = value.replace(`{{ ${id} }}`, `${args[id]}`).replace(`{{ ${id} }}`, `${args[id]}`);
    }
    return value || "";
  }
  get default_locale() {
    return this._default_locale;
  }
  get locale() {
    return this._current_locale;
  }
  getLocaleShort() {
    return this._current_locale_short;
  }
  /**
   * Set the active locale.
   * Resolves when the locale mappings have loaded.
   */
  setLocale(locale) {
    this._current_locale = locale;
    this._current_locale_short = this._current_locale.split("-")[0];
    if (!this._locale_mappings[locale] && !this._load_promises[locale]) {
      this._load_promises[locale] = this._loadLocale(locale);
    }
    localStorage.setItem(`${STORE_KEY}`, locale);
    log("LOCALE", `Locale set to "${locale}"`);
    return this._load_promises[locale] || Promise.resolve();
  }
  async _loadLocale(locale) {
    const existing = JSON.parse(localStorage.getItem(`${STORE_KEY}.${locale}`) || "{}");
    if (!existing.expiry || existing.expiry < Date.now()) {
      localStorage.removeItem(`${STORE_KEY}.${locale}`);
      const resp = await fetch(`${this.locale_folder}/${locale}.json`);
      if (!resp.ok) {
        delete this._load_promises[locale];
        return console.error(`Failed to loaded locale file for "${locale}".`, resp);
      }
      const locale_data = await resp.json();
      const locale_override_data = this.zone_id ? await rc(this.zone_id, `locale_${locale}`) : { details: {} };
      const base_locale_values = removeNesting(locale_data);
      const override_locale_values = removeNesting(locale_override_data.details);
      this._locale_mappings[locale] = __spreadValues(__spreadValues({}, base_locale_values), override_locale_values);
      if (!window.debug) {
        const store = {
          expiry: Date.now() + this._cache_time,
          locale,
          mappings: this._locale_mappings[locale]
        };
        localStorage.setItem(`${STORE_KEY}.${locale}`, JSON.stringify(store));
      }
    } else {
      this._locale_mappings[locale] = existing.mappings;
    }
    delete this._load_promises[locale];
  }
  static \u0275fac = function LocaleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocaleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _LocaleService, factory: _LocaleService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocaleService, [{
    type: Service
  }], () => [], null);
})();

// src/app/ui/translate.pipe.ts
var TranslatePipe = class _TranslatePipe {
  _locale = inject(LocaleService);
  transform(value, args = {}, plural) {
    return this._locale.get(value, args, plural);
  }
  static \u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "translate", type: _TranslatePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "translate"
    }]
  }], null, null);
})();

export {
  setTranslationService,
  i18n,
  localeFromUrl,
  LocaleService,
  TranslatePipe
};
//# sourceMappingURL=chunk-5OMVQZOP.js.map
