import {
  AuthorisedUserGuard
} from "./chunk-7XKVQ2GT.js";
import {
  AuthorisedAdminGuard
} from "./chunk-XE5EIFSD.js";
import {
  BackofficeUsersService
} from "./chunk-EIPFTMWR.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
  provideRouter,
  withHashLocation,
  withNavigationErrorHandler
} from "./chunk-EUOPYYFD.js";
import "./chunk-PV3B5VUM.js";
import {
  MatProgressBar
} from "./chunk-TFAOXLJB.js";
import {
  setNotifyOutlet
} from "./chunk-AYJXTTVT.js";
import {
  SettingsService
} from "./chunk-LYZMFOYM.js";
import {
  currentUser
} from "./chunk-5RDGWPHM.js";
import {
  signalFromClient,
  waitForSignalValue
} from "./chunk-WCEMOYFJ.js";
import {
  AsyncHandler
} from "./chunk-NZ7ZPGVU.js";
import {
  LocaleService,
  TranslatePipe,
  localeFromUrl,
  setTranslationService
} from "./chunk-5OMVQZOP.js";
import {
  detectIE,
  log
} from "./chunk-SXYVSUAR.js";
import {
  En,
  J,
  Mt,
  Rn,
  Xr,
  eo,
  f,
  to
} from "./chunk-P3FA5CPP.js";
import "./chunk-FVPQ6H6W.js";
import {
  bootstrapApplication
} from "./chunk-QHKUHZUG.js";
import {
  ApplicationRef,
  Component,
  DestroyRef,
  Injectable,
  InjectionToken,
  Injector,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  RuntimeError,
  Subject,
  computed,
  filter,
  formatRuntimeError,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  switchMap,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RDM3X2TD.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
/**
 * @license Angular v22.0.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  messages;
  notificationClicks;
  notificationCloses;
  pushSubscriptionChanges;
  subscription;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  versionUpdates;
  unrecoverable;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory() {
  const opts = inject(SwRegistrationOptions);
  const injector = inject(Injector);
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  enabled;
  updateViaCache;
  type;
  scope;
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// src/app/common/application.ts
var _timer;
var _last_chunk_load_reload_key = "";
var CHUNK_LOAD_RELOAD_KEY = "BACKOFFICE.chunk_load_reload";
var updateAvailable = signal(
  false,
  ...ngDevMode ? [{ debugName: "updateAvailable" }] : (
    /* istanbul ignore next */
    []
  )
);
function setupCache(cache, interval = 5 * 60 * 1e3) {
  if (cache.isEnabled) {
    if (_timer)
      clearInterval(_timer);
    _timer = setInterval(() => {
      log("CACHE", `Checking for updates...`);
      checkForUpdate(cache).catch((error) => log("CACHE", "Update check failed", [error], "warn", true));
    }, interval);
  }
}
function isChunkLoadError(error) {
  const checked = /* @__PURE__ */ new Set();
  const stack = [error];
  while (stack.length) {
    const current = stack.shift();
    if (!current || checked.has(current))
      continue;
    checked.add(current);
    if (typeof current === "string" && isChunkLoadErrorMessage(current)) {
      return true;
    }
    if (current instanceof Error) {
      if (isChunkLoadErrorMessage(current.name))
        return true;
      if (isChunkLoadErrorMessage(current.message))
        return true;
    }
    if (typeof current === "object") {
      const record = current;
      stack.push(record["ngOriginalError"]);
      stack.push(record["error"]);
      stack.push(record["cause"]);
      stack.push(record["message"]);
      stack.push(record["name"]);
    }
  }
  return false;
}
function reloadApplicationOnChunkLoadError(error, reload = () => location.reload()) {
  if (!isChunkLoadError(error))
    return false;
  const reload_key = getChunkLoadReloadKey(error);
  if (getLastChunkLoadReloadKey() === reload_key) {
    return true;
  }
  setLastChunkLoadReloadKey(reload_key);
  log("ROUTER", "Lazy route chunk failed to load. Reloading application...");
  reload();
  return true;
}
async function checkForUpdate(cache) {
  if (cache.isEnabled && await cache.checkForUpdate()) {
    log("CACHE", `Newer application version is available.`);
    updateAvailable.set(true);
  }
}
function isChunkLoadErrorMessage(message) {
  return /ChunkLoadError|Loading chunk [\w-]+ failed|Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i.test(message);
}
function getChunkLoadReloadKey(error) {
  const message = extractErrorMessage(error);
  return `${location.pathname}${location.search}${location.hash}:${message}`;
}
function extractErrorMessage(error) {
  if (!error)
    return "unknown";
  if (typeof error === "string")
    return error;
  if (error instanceof Error)
    return `${error.name}:${error.message}`;
  if (typeof error === "object") {
    const record = error;
    return extractErrorMessage(record["ngOriginalError"] || record["error"] || record["cause"] || record["message"] || record["name"]);
  }
  return String(error);
}
function getLastChunkLoadReloadKey() {
  try {
    return sessionStorage.getItem(CHUNK_LOAD_RELOAD_KEY) || _last_chunk_load_reload_key;
  } catch {
    return _last_chunk_load_reload_key;
  }
}
function setLastChunkLoadReloadKey(key) {
  _last_chunk_load_reload_key = key;
  try {
    sessionStorage.setItem(CHUNK_LOAD_RELOAD_KEY, key);
  } catch {
  }
}

// src/app/common/placeos.ts
var LOADING_MESSAGE = signal(
  "Loading...",
  ...ngDevMode ? [{ debugName: "LOADING_MESSAGE" }] : (
    /* istanbul ignore next */
    []
  )
);
function getLoadingMessage() {
  return LOADING_MESSAGE;
}
function setLoadingMessage(message) {
  LOADING_MESSAGE.set(message);
}
async function setupPlace(settings) {
  const protocol = settings.protocol || location.protocol;
  const host = settings.domain || location.hostname;
  const port = settings.port || location.port;
  const url = settings.use_domain ? `${protocol}//${host}:${port}` : location.origin;
  const route = host.includes("localhost") && port === "4200" ? "" : settings.route || "";
  const mock = settings.mock || location.href.includes("mock=true") || localStorage.getItem("BACKOFFICE.mock") === "true";
  const config = {
    auth_type: "auth_code",
    scope: "public",
    host: `${host}${port ? ":" + port : ""}`,
    auth_uri: `${url}/auth/oauth/authorize`,
    token_uri: `${url}/auth/oauth/token`,
    redirect_uri: `${location.origin}${route}/oauth-resp.html`,
    handle_login: !settings.local_login,
    token_header: true,
    use_iframe: true,
    ignore_api_key: settings.ignore_api_key,
    mock
  };
  if (localStorage) {
    localStorage.setItem("BACKOFFICE.mock", `${!!mock && !location.href.includes("mock=false")}`);
  }
  return to(config);
}

// src/app/ui/global-loading.component.ts
function GlobalLoadingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "mat-progress-bar", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.message());
  }
}
var GlobalLoadingComponent = class _GlobalLoadingComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  online = signal(
    true,
    ...ngDevMode ? [{ debugName: "online" }] : (
      /* istanbul ignore next */
      []
    )
  );
  message = getLoadingMessage();
  async ngOnInit() {
    this.loading.set(true);
    await waitForSignalValue(this._settings.initialised, (_) => _).catch(() => null);
    this.online.set(Xr());
    this.interval("has_token", () => {
      this.online.set(Xr());
      if (!Mt() || !J())
        return;
      this.loading.set(false);
      this.online.set(Xr());
      this.clearInterval("has_token");
    }, 1e3);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GlobalLoadingComponent_BaseFactory;
    return function GlobalLoadingComponent_Factory(__ngFactoryType__) {
      return (\u0275GlobalLoadingComponent_BaseFactory || (\u0275GlobalLoadingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GlobalLoadingComponent)))(__ngFactoryType__ || _GlobalLoadingComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalLoadingComponent, selectors: [["global-loading"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["loader", "", 1, "bg-base-300", "pointer-events-auto", "fixed", "inset-0", "z-9998", "flex", "items-center", "justify-center"], [1, "border-base-300", "bg-base-100", "absolute", "bottom-5", "left-1/2", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "-translate-x-1/2", "rounded-lg", "border", "p-2", "text-center", "text-xs", "shadow"], [1, "text-center", "font-mono"], [1, "border-base-300", "absolute", "bottom-2", "left-1/2", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "-translate-x-1/2", "overflow-hidden", "rounded-full", "border", "shadow"], ["mode", "indeterminate", 1, "scale-150", "rounded"]], template: function GlobalLoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, GlobalLoadingComponent_Conditional_0_Template, 6, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
    }
  }, dependencies: [MatProgressBar], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: none;\n}\n[loader][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalLoadingComponent, [{
    type: Component,
    args: [{ selector: "global-loading", template: `
        @if (loading()) {
            <div
                loader
                class="bg-base-300 pointer-events-auto fixed inset-0 z-9998 flex items-center justify-center"
            >
                <div
                    class="border-base-300 bg-base-100 absolute bottom-5 left-1/2 w-[24rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg border p-2 text-center text-xs shadow"
                >
                    <p class="text-center font-mono">{{ message() }}</p>
                </div>
                <div
                    class="border-base-300 absolute bottom-2 left-1/2 w-[24rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-full border shadow"
                >
                    <mat-progress-bar
                        mode="indeterminate"
                        class="scale-150 rounded"
                    />
                </div>
            </div>
        }
    `, imports: [MatProgressBar], styles: ["/* angular:styles/component:css;ac091864e9a72045d72142542da9389793ffc7a75787e2bf22145bec368d4ec3;/home/runner/work/backoffice/backoffice/src/app/ui/global-loading.component.ts */\n:host {\n  pointer-events: none;\n}\n[loader] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=global-loading.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalLoadingComponent, { className: "GlobalLoadingComponent", filePath: "src/app/ui/global-loading.component.ts", lineNumber: 51 });
})();

// src/app/app.ts
var AppComponent_Conditional_1_Defer_1_DepsFn = () => [
  /* @ts-ignore */
  import("./chunk-3OOPX2PR.js").then((m) => m.GlobalBannerComponent)
];
var AppComponent_Conditional_1_Conditional_5_Defer_1_DepsFn = () => [
  /* @ts-ignore */
  import("./chunk-PF734KPP.js").then((m) => m.UploadListComponent)
];
var AppComponent_Conditional_5_Defer_1_DepsFn = () => [
  /* @ts-ignore */
  import("./chunk-M3GDX7XZ.js").then((m) => m.IconComponent),
  /* @ts-ignore */
  import("./chunk-OKTF62KK.js").then((m) => m.MatTooltip)
];
function AppComponent_Conditional_1_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "global-banner");
  }
}
function AppComponent_Conditional_1_Conditional_5_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-upload-list");
  }
}
function AppComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domTemplate(0, AppComponent_Conditional_1_Conditional_5_Defer_0_Template, 1, 0);
    \u0275\u0275defer(1, 0, AppComponent_Conditional_1_Conditional_5_Defer_1_DepsFn);
    \u0275\u0275deferOnIdle();
  }
}
function AppComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domTemplate(0, AppComponent_Conditional_1_Defer_0_Template, 1, 0);
    \u0275\u0275defer(1, 0, AppComponent_Conditional_1_Defer_1_DepsFn);
    \u0275\u0275deferOnIdle();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AppComponent_Conditional_1_Conditional_5_Template, 3, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.simple() ? 5 : -1);
  }
}
function AppComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4);
    \u0275\u0275element(2, "mat-progress-bar", 5);
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " Unable to reach server... Some features may not work. ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_5_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275text(4, " Update available ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, " Refresh to load the latest Backoffice version. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function AppComponent_Conditional_5_Defer_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.refreshApplication());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "refresh");
    \u0275\u0275elementEnd()()()();
  }
}
function AppComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domTemplate(0, AppComponent_Conditional_5_Defer_0_Template, 10, 0);
    \u0275\u0275defer(1, 0, AppComponent_Conditional_5_Defer_1_DepsFn);
    \u0275\u0275deferOnIdle();
  }
}
var LOCALE_TIMEOUT_MS = 5e3;
function browserOnline() {
  const state = signal(
    navigator.onLine,
    ...ngDevMode ? [{ debugName: "state" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const update = () => state.set(navigator.onLine);
  window.addEventListener("online", update);
  window.addEventListener("offline", update);
  inject(DestroyRef).onDestroy(() => {
    window.removeEventListener("online", update);
    window.removeEventListener("offline", update);
  });
  return state.asReadonly();
}
var AppComponent = class _AppComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  _users = inject(BackofficeUsersService);
  _cache = inject(SwUpdate);
  _injector = inject(Injector);
  _router = inject(Router);
  _route = inject(ActivatedRoute);
  _locale = inject(LocaleService, { optional: true });
  /** Whether the application is loading */
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether to hide the upload list, e.g. on MQTT routes */
  simple = signal(
    false,
    ...ngDevMode ? [{ debugName: "simple" }] : (
      /* istanbul ignore next */
      []
    )
  );
  update_available = updateAvailable;
  _client_online = signalFromClient(eo());
  _browser_online = browserOnline();
  /** Whether PlaceOS is reachable. ts-client only flags auth failures, so also track the network. */
  online = computed(
    () => this._client_online() && this._browser_online(),
    ...ngDevMode ? [{ debugName: "online" }] : (
      /* istanbul ignore next */
      []
    )
  );
  refreshApplication() {
    location.reload();
  }
  async ngOnInit() {
    setLoadingMessage("Initialising application...");
    if (detectIE() && detectIE() < 12) {
      location.href = `${location.origin}${location.pathname}assets/not-supported.html`;
      return;
    }
    this._route.queryParamMap.subscribe((params) => {
      if (params.has("lang")) {
        const locale = params.get("lang");
        this._locale?.setLocale(locale);
        localStorage.setItem("BACKOFFICE.locale", locale);
      }
    });
    setNotifyOutlet(import("./chunk-3QYJMLOH.js").then(({ MatSnackBar }) => this._injector.get(MatSnackBar)));
    setTranslationService(this._locale);
    this.loading.set(true);
    setLoadingMessage("Loading application settings...");
    const settings_ready = await waitForSignalValue(this._settings.initialised, (_) => _).catch(() => false);
    if (!settings_ready)
      return this.onInitError();
    const settings = this._settings.get("composer") || {};
    settings.mock = !!this._settings.get("mock");
    settings.ignore_api_key = true;
    setLoadingMessage("Authenticating user...");
    await setupPlace(settings).catch(() => this.onInitError());
    setupCache(this._cache);
    const user_ready = await waitForSignalValue(this._users.initialised, (_) => _, 50, 30 * 1e3).catch(() => false);
    if (!user_ready)
      return this.onInitError();
    setLoadingMessage("Initialising locales...");
    await this._initLocale();
    this.loading.set(false);
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.simple.set(this._router.url.includes("mqtt"));
      }
    });
    setLoadingMessage("Checking staff tenants...");
    this._checkTenants().catch((error) => log("Init", "Failed to check staff tenants", [error], "warn"));
  }
  onInitError() {
    if (Rn())
      return;
    log("Init", "Failed to initialise user. Restarting application...");
    En();
    location.reload();
  }
  /** Show one banner for staff tenants with expiring secrets */
  async _checkTenants() {
    if (!currentUser()?.sys_admin)
      return;
    const [tenants, { tenantExpiryBanner }] = await Promise.all([
      f("/api/staff/v1/tenants").catch(() => []),
      import("./chunk-WVIIVOIV.js")
    ]);
    const banner = tenantExpiryBanner(Array.isArray(tenants) ? tenants : []);
    if (banner)
      this._settings.post("banner", banner);
  }
  /**
   * Set the locale from the URL `lang` param, storage or the browser languages.
   * Resolves when the fallback and locale translations load, or after a timeout.
   */
  async _initLocale() {
    let load;
    try {
      const url_locale = localeFromUrl(location.search, location.hash);
      if (url_locale) {
        localStorage.setItem("BACKOFFICE.locale", url_locale);
      }
      let locale = localStorage.getItem("BACKOFFICE.locale");
      const locales = this._settings.get("app.locales") || [{ id: "en", name: "English" }];
      if (locale) {
        load = this._locale?.setLocale(locale);
      } else {
        const list = navigator.languages || [];
        for (const lang of list) {
          locale = locales.find((_) => _.id === lang)?.id;
          if (!locale)
            locale = locales.find((_) => lang.includes(_.id))?.id;
          if (locale) {
            load = this._locale?.setLocale(lang);
            localStorage.setItem("BACKOFFICE.locale", lang);
            break;
          }
        }
      }
    } catch {
    }
    await Promise.race([
      Promise.all([this._locale?.ready, load]).catch(() => void 0),
      new Promise((resolve) => setTimeout(resolve, LOCALE_TIMEOUT_MS))
    ]);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AppComponent_BaseFactory;
    return function AppComponent_Factory(__ngFactoryType__) {
      return (\u0275AppComponent_BaseFactory || (\u0275AppComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AppComponent)))(__ngFactoryType__ || _AppComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["placeos-root"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "flex", "h-full", "w-full", "flex-col", "overflow-hidden"], ["loader", "", 1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center"], [1, "bg-error", "text-error-content", "fixed", "bottom-2", "left-1/2", "z-9999", "-translate-x-1/2", "rounded-3xl", "px-4", "py-2", "text-xs", "shadow-sm"], [1, "relative", "h-1/2", "w-full", "flex-1"], [1, "border-base-300", "absolute", "bottom-2", "left-1/2", "w-[24rem]", "-translate-x-1/2", "overflow-hidden", "rounded-full", "border", "shadow"], ["mode", "indeterminate", 1, "scale-150", "rounded"], ["role", "status", "aria-live", "polite", 1, "border-info/30", "bg-base-100", "text-base-content", "fixed", "right-3", "bottom-3", "z-100", "w-88", "max-w-[calc(100vw-2rem)]", "rounded-md", "border", "p-3", "shadow-lg"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-medium"], [1, "mt-0.5", "text-xs", "opacity-70"], ["icon", "", "default", "", "type", "button", "matTooltip", "Refresh", "matTooltipPosition", "left", 3, "click"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, AppComponent_Conditional_1_Template, 6, 1)(2, AppComponent_Conditional_2_Template, 3, 0, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "global-loading");
      \u0275\u0275conditionalCreate(4, AppComponent_Conditional_4_Template, 2, 0, "div", 2);
      \u0275\u0275conditionalCreate(5, AppComponent_Conditional_5_Template, 3, 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 1 : 2);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.online() && !ctx.loading() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.update_available() && !ctx.loading() ? 5 : -1);
    }
  }, dependencies: [
    RouterOutlet,
    MatProgressBar,
    GlobalLoadingComponent
  ], styles: ["\n[loader][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(AppComponent, () => [
    /* @ts-ignore */
    import("./chunk-3OOPX2PR.js").then((m) => m.GlobalBannerComponent),
    /* @ts-ignore */
    import("./chunk-PF734KPP.js").then((m) => m.UploadListComponent),
    /* @ts-ignore */
    import("./chunk-M3GDX7XZ.js").then((m) => m.IconComponent),
    /* @ts-ignore */
    import("./chunk-OKTF62KK.js").then((m) => m.MatTooltip)
  ], (GlobalBannerComponent, UploadListComponent, IconComponent, MatTooltip) => {
    setClassMetadata(AppComponent, [{
      type: Component,
      args: [{ selector: "placeos-root", template: `
        <div class="flex h-full w-full flex-col overflow-hidden">
            @if (!loading()) {
                @defer (on idle) {
                    <global-banner />
                }
                <div class="relative h-1/2 w-full flex-1">
                    <router-outlet />
                </div>
                @if (!simple()) {
                    @defer (on idle) {
                        <app-upload-list />
                    }
                }
            } @else {
                <div
                    loader
                    class="absolute inset-0 z-50 flex items-center justify-center"
                >
                    <div
                        class="border-base-300 absolute bottom-2 left-1/2 w-[24rem] -translate-x-1/2 overflow-hidden rounded-full border shadow"
                    >
                        <mat-progress-bar
                            mode="indeterminate"
                            class="scale-150 rounded"
                        />
                    </div>
                </div>
            }
        </div>
        <global-loading />
        @if (!online() && !loading()) {
            <div
                class="bg-error text-error-content fixed bottom-2 left-1/2 z-9999 -translate-x-1/2 rounded-3xl px-4 py-2 text-xs shadow-sm"
            >
                Unable to reach server... Some features may not work.
            </div>
        }
        @if (update_available() && !loading()) {
            <!-- Deferred so the tooltip and overlay code stay out of the initial bundle -->
            @defer {
                <section
                    role="status"
                    aria-live="polite"
                    class="border-info/30 bg-base-100 text-base-content fixed right-3 bottom-3 z-100 w-88 max-w-[calc(100vw-2rem)] rounded-md border p-3 shadow-lg"
                >
                    <div class="flex items-center gap-2">
                        <div class="min-w-0 flex-1">
                            <div class="text-sm font-medium">
                                Update available
                            </div>
                            <p class="mt-0.5 text-xs opacity-70">
                                Refresh to load the latest Backoffice version.
                            </p>
                        </div>
                        <button
                            icon
                            default
                            type="button"
                            (click)="refreshApplication()"
                            matTooltip="Refresh"
                            matTooltipPosition="left"
                        >
                            <icon>refresh</icon>
                        </button>
                    </div>
                </section>
            }
        }
    `, imports: [
        GlobalBannerComponent,
        RouterOutlet,
        UploadListComponent,
        MatProgressBar,
        GlobalLoadingComponent,
        IconComponent,
        MatTooltip
      ], styles: ["/* angular:styles/component:css;014ea54e3a0c35073e918aea542f90943f3e6d306dafcf1bef51d87ebded5ceb;/home/runner/work/backoffice/backoffice/src/app/app.ts */\n[loader] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
    }], null, null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 151 });
})();

// src/app/ui/unauthorised.component.ts
var UnauthorisedComponent = class _UnauthorisedComponent {
  static \u0275fac = function UnauthorisedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorisedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorisedComponent, selectors: [["app-unauthorised"]], decls: 13, vars: 9, consts: [["unauthorised", "", 1, "absolute", "inset-0"], [1, "border-base-300", "bg-base-100", "text-base-content", "mx-auto", "my-4", "w-104", "max-w-[calc(100%-1rem)]", "rounded-xl", "border", "p-4", "text-center", "shadow-lg"], [1, "text-4xl"], [1, "py-4"]], template: function UnauthorisedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "403");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h3");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 3);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p");
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "COMMON.FORBIDDEN"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "COMMON.INVALID_PAGE_PERMISSIONS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "COMMON.CONTACT_ADMIN"), " ");
    }
  }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[unauthorised][_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=unauthorised.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorisedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorised", template: `
        <div unauthorised class="absolute inset-0">
            <div
                class="border-base-300 bg-base-100 text-base-content mx-auto my-4 w-104 max-w-[calc(100%-1rem)] rounded-xl border p-4 text-center shadow-lg"
            >
                <h1 class="text-4xl">403</h1>
                <h3>{{ 'COMMON.FORBIDDEN' | translate }}</h3>
                <p class="py-4">
                    {{ 'COMMON.INVALID_PAGE_PERMISSIONS' | translate }}
                </p>
                <p>
                    {{ 'COMMON.CONTACT_ADMIN' | translate }}
                </p>
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;9e56e45d1ecd17d612bec636f553ceddd9b98cd2552edbd57d59534065beeefe;/home/runner/work/backoffice/backoffice/src/app/ui/unauthorised.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[unauthorised] {\n  background-image:\n    linear-gradient(\n      to right,\n      #c62828 0%,\n      #ef5350 100%);\n}\n/*# sourceMappingURL=unauthorised.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorisedComponent, { className: "UnauthorisedComponent", filePath: "src/app/ui/unauthorised.component.ts", lineNumber: 41 });
})();

// src/app/app.routes.ts
var appRoutes = [
  { path: "unauthorised", component: UnauthorisedComponent },
  {
    path: "modules",
    canActivate: [AuthorisedUserGuard],
    loadChildren: () => import("./chunk-IKKFB7C3.js").then((m) => m.ROUTES)
  },
  {
    path: "domains",
    canActivate: [AuthorisedAdminGuard],
    loadChildren: () => import("./chunk-YVHI2Z3V.js").then((m) => m.ROUTES)
  },
  {
    path: "drivers",
    data: { role_only: true },
    canActivate: [AuthorisedUserGuard],
    loadChildren: () => import("./chunk-4DMJYQTR.js").then((m) => m.ROUTES)
  },
  {
    path: "groups",
    canActivate: [AuthorisedAdminGuard],
    loadChildren: () => import("./chunk-3DGSE2XR.js").then((m) => m.ROUTES)
  },
  {
    path: "systems",
    canActivate: [AuthorisedUserGuard],
    loadChildren: () => import("./chunk-IHWJO4SL.js").then((m) => m.ROUTES)
  },
  {
    path: "repositories",
    canActivate: [AuthorisedAdminGuard],
    loadChildren: () => import("./chunk-J4QDJZH5.js").then((m) => m.ROUTES)
  },
  {
    path: "triggers",
    data: { role_only: true },
    canActivate: [AuthorisedUserGuard],
    loadChildren: () => import("./chunk-RHD5W67D.js").then((m) => m.ROUTES)
  },
  {
    path: "users",
    data: { allow_subsystem: true },
    canActivate: [AuthorisedAdminGuard],
    loadChildren: () => import("./chunk-VM3KNVHC.js").then((m) => m.ROUTES)
  },
  {
    path: "zones",
    canActivate: [AuthorisedUserGuard],
    loadChildren: () => import("./chunk-TGQJTHJ4.js").then((m) => m.ROUTES)
  },
  {
    path: "admin",
    canActivate: [AuthorisedAdminGuard],
    loadChildren: () => import("./chunk-M4PN7CJW.js").then((m) => m.ROUTES)
  },
  { path: "**", redirectTo: "systems" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(appRoutes, withHashLocation(), withNavigationErrorHandler((event) => reloadApplicationOnChunkLoadError(event.error))),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode()
      // Disable in development, enable in production
    })
  ]
};

// src/main.ts
var is_mock = location.href.includes("mock=true") || localStorage.getItem("BACKOFFICE.mock") === "true";
var bootstrap = async () => {
  if (is_mock) {
    await import("./chunk-HNQUCSDD.js");
  }
  bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
};
bootstrap();
//# sourceMappingURL=main.js.map
