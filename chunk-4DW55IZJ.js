import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JFTEBBHC.js";
import {
  BehaviorSubject
} from "./chunk-55CIHLAT.js";

// src/app/common/async-handler.class.ts
var AsyncHandler = class _AsyncHandler {
  /** Store for named timers */
  _timers = {};
  /** Store for named intervals */
  _intervals = {};
  /** Store for named subscription unsub callbacks */
  _subscriptions = {};
  /** Subject which stores the initialised state of the object */
  _initialised = new BehaviorSubject(false);
  /** Observable of the initialised state of the object */
  initialised = this._initialised.asObservable();
  /** Whether the object has been initialised */
  get is_initialised() {
    return this._initialised.getValue();
  }
  ngOnDestroy() {
    this.destroy();
  }
  destroy() {
    for (const key in this._timers) {
      if (key in this._timers)
        this.clearTimeout(key);
    }
    for (const key in this._intervals) {
      if (key in this._intervals)
        this.clearInterval(key);
    }
    for (const key in this._subscriptions) {
      if (key in this._subscriptions)
        this.unsub(key);
    }
  }
  /**
   * Creates a named timer
   * @param name Name of the timer
   * @param fn Callback function for the timer
   * @param delay Callback delay
   */
  timeout(name, fn, delay = 300) {
    if (name && fn && fn instanceof Function) {
      this.clearTimeout(name);
      this._timers[name] = setTimeout(() => {
        fn();
        this._timers[name] = null;
      }, delay);
    } else {
      throw new Error(name ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback");
    }
  }
  /**
   * Clears the named timer
   * @param name Timer name
   */
  clearTimeout(name) {
    if (this._timers[name]) {
      clearTimeout(this._timers[name]);
      this._timers[name] = null;
    }
  }
  /**
   * Creates a named interval
   * @param name Name of the interval
   * @param fn Callback function for the interval
   * @param delay Callback delay
   */
  interval(name, fn, delay = 300) {
    if (name && fn && fn instanceof Function) {
      this.clearInterval(name);
      this._intervals[name] = setInterval(() => fn(), delay);
    } else {
      throw new Error(name ? "Cannot create named interval without a name" : "Cannot create a interval without a callback");
    }
  }
  /**
   * Clears the named interval
   * @param name Timer name
   */
  clearInterval(name) {
    if (this._intervals[name]) {
      clearInterval(this._intervals[name]);
      this._intervals[name] = null;
    }
  }
  /**
   * Store named subscription
   * @param name Name of the subscription
   * @param unsub Unsubscribe callback or Subscription object
   */
  subscription(name, unsub) {
    this.unsub(name);
    this._subscriptions[name] = unsub;
  }
  /**
   * Call unsubscribe callback with the given name
   * @param name
   */
  unsub(name) {
    if (!(name in this._subscriptions) || !this._subscriptions[name]) {
      return;
    }
    if ("unsubscribe" in this._subscriptions[name]) {
      this._subscriptions[name].unsubscribe();
    } else {
      this._subscriptions[name]();
    }
    this._subscriptions[name] = null;
  }
  static \u0275fac = function AsyncHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AsyncHandler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AsyncHandler, factory: _AsyncHandler.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AsyncHandler
};
//# sourceMappingURL=chunk-4DW55IZJ.js.map
