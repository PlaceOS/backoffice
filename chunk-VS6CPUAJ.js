import {
  format
} from "./chunk-3BS46UIW.js";
import {
  AsyncHandler
} from "./chunk-5P6RE4SY.js";
import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-46M7K5TF.js";
import {
  BehaviorSubject,
  Ii,
  gp,
  yp
} from "./chunk-55CIHLAT.js";

// src/app/common/debug.service.ts
var TERMINAL_COLOURS = {
  debug: "\x1B[34m",
  verbose: "\x1B[34m",
  info: "\x1B[32m",
  warning: "\x1B[33m",
  warn: "\x1B[33m",
  error: "\x1B[31m",
  fatal: "\x1B[31m"
};
var PlaceDebugService = class _PlaceDebugService extends AsyncHandler {
  _changed = new BehaviorSubject(0);
  /** List of the current state of events */
  /** Mapping of module IDs to display names */
  _module_names = {};
  /** List of modules listening to debug events */
  bound_modules = signal([], ...ngDevMode ? [{ debugName: "bound_modules" }] : []);
  module_count = computed(() => this.bound_modules().length, ...ngDevMode ? [{ debugName: "module_count" }] : []);
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : []);
  event_count = computed(() => this.events().length, ...ngDevMode ? [{ debugName: "event_count" }] : []);
  /** Whether debug console is enabled */
  enabled = signal(false, ...ngDevMode ? [{ debugName: "enabled" }] : []);
  /** Whether debug console is showing */
  is_shown = signal(true, ...ngDevMode ? [{ debugName: "is_shown" }] : []);
  position = signal("below", ...ngDevMode ? [{ debugName: "position" }] : []);
  /** Whether there are modules listening for debug messages */
  is_listening = computed(() => this.enabled() && this.bound_modules().length > 0, ...ngDevMode ? [{ debugName: "is_listening" }] : []);
  /** Get terminal display strings for all events (one string per event) */
  terminal_lines = computed(() => {
    return this.events().map((event) => `${TERMINAL_COLOURS[event.level?.toLowerCase()] || TERMINAL_COLOURS.debug}${format(Date.now(), "h:mm a")}, ${this._module_names[event.mod_id] || event.mod_id || "<UNKNOWN>"}, [${event.level.toUpperCase()}]\x1B[0m ${event.message.split("\n").reverse().join("\n")}`);
  }, ...ngDevMode ? [{ debugName: "terminal_lines" }] : []);
  changed = this._changed.asObservable();
  get modules() {
    return this.bound_modules();
  }
  get module_names() {
    return this._module_names;
  }
  constructor() {
    super();
    Ii.subscribe((event) => {
      if (this.bound_modules().find((mod) => mod.id === event.mod_id)) {
        let event_list = [...this.events(), event];
        if (event_list.length > 2e3) {
          const [_first, ...events] = event_list;
          event_list = events;
        }
        this.events.set(event_list);
      }
    });
  }
  /** Clear existing events */
  clearEvents() {
    this.events.set([]);
  }
  /**
   * Whether module is listening for debug events
   */
  isListening(module) {
    return !!this.bound_modules().find((mod) => mod.id === module.id);
  }
  /**
   * Start listening to debug events for the given module
   * @param module Module to start listening to
   * @param module_name Display name for the module
   */
  bind(module, module_name) {
    if (module) {
      const parts = module_name.split("_");
      const index = +parts.splice(parts.length - 1, 1);
      const options = {
        sys: module.system_id,
        mod: module.id,
        index,
        name: "debug"
      };
      this.enabled.set(true);
      yp(options).then(() => {
        this.subscription(`debug_${module.id}`, () => gp(options));
        this.bound_modules.update((l) => [...l, module]);
        this._module_names[module.id] = module_name;
        this._changed.next(Date.now());
      });
    }
  }
  /**
   * Stop listening to debug events for module
   * @param module Module to stop listening to
   */
  unbind(module) {
    if (module) {
      this.unsub(`debug_${module.id}`);
      this.bound_modules.update((l) => l.filter((mod) => mod.id !== module.id));
      this._changed.next(Date.now());
    }
  }
  unbindAll() {
    for (const mod of this.bound_modules()) {
      this.unbind(mod);
    }
    this.bound_modules.set([]);
  }
  static \u0275fac = function PlaceDebugService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceDebugService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceDebugService, factory: _PlaceDebugService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceDebugService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  PlaceDebugService
};
//# sourceMappingURL=chunk-VS6CPUAJ.js.map
