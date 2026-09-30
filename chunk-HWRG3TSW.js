import {
  allowedEmbedUrl,
  extensionsForItem
} from "./chunk-RR7DBGG7.js";
import {
  ActiveItemService
} from "./chunk-UD43N6U4.js";
import "./chunk-7KCUFGWX.js";
import "./chunk-OSXI5SFG.js";
import "./chunk-KEDPUNGM.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-UIYFRDJA.js";
import "./chunk-ZBWUOXQY.js";
import {
  ActivatedRoute
} from "./chunk-2C722Z46.js";
import "./chunk-FFPP635U.js";
import "./chunk-HT5GXKXQ.js";
import {
  signalFromClient,
  toSignal
} from "./chunk-4LO2VVHA.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-XDFS3U2K.js";
import "./chunk-37SZDQI6.js";
import "./chunk-HR2VPQFG.js";
import "./chunk-7U7LWPYD.js";
import "./chunk-7AGLUCJP.js";
import "./chunk-2QHSPZ4Y.js";
import "./chunk-KJXWRK4F.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-MEGGKQGS.js";
import "./chunk-N54X4TZ6.js";
import "./chunk-P4NPR2MV.js";
import "./chunk-QYUZ2NYF.js";
import "./chunk-BKGOEYCZ.js";
import "./chunk-6V3EPDQC.js";
import "./chunk-35RV2TRF.js";
import "./chunk-G6JZQ6PF.js";
import "./chunk-YZCKBLZP.js";
import {
  i18n
} from "./chunk-LCIU6EZA.js";
import {
  SafePipe
} from "./chunk-XRQ22N5K.js";
import "./chunk-LAM4IRA6.js";
import "./chunk-ZPF4GU4D.js";
import {
  Location
} from "./chunk-QYMVVG4Y.js";
import {
  Component,
  J,
  ViewChild,
  Xe,
  computed,
  effect,
  eo,
  inject,
  oc,
  rc,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵqueryAdvance,
  ɵɵsanitizeResourceUrl,
  ɵɵviewQuerySignal
} from "./chunk-6NXCBA4X.js";
import {
  __spreadValues
} from "./chunk-DPH5AP7B.js";

// src/app/ui/extension-outlet.component.ts
var _c0 = ["frame"];
function ExtensionOutletComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "iframe", 1, 0);
    \u0275\u0275pipe(2, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(2, 1, ctx_r0.url(), "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var RESOURCE_STORE = /* @__PURE__ */ new Map();
var ExtensionOutletComponent = class _ExtensionOutletComponent extends AsyncHandler {
  _route = inject(ActivatedRoute);
  _location = inject(Location);
  _service = inject(ActiveItemService);
  _online = signalFromClient(eo(), false);
  _query_params = toSignal(this._route.queryParamMap, {
    initialValue: void 0
  });
  _embed = computed(
    () => {
      const params = this._query_params();
      return params === void 0 ? void 0 : params.has("embed") ? params.get("embed") : null;
    },
    ...ngDevMode ? [{ debugName: "_embed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Last embed param that passed the extension URL check */
  _verified_embed = "";
  url = signal(
    "",
    ...ngDevMode ? [{ debugName: "url" }] : (
      /* istanbul ignore next */
      []
    )
  );
  app_loaded = signal(
    false,
    ...ngDevMode ? [{ debugName: "app_loaded" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _frame_origin = computed(
    () => this.url() ? new URL(this.url()).origin : "",
    ...ngDevMode ? [{ debugName: "_frame_origin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Handle messages sent by the embedded extension frame only */
  onMessage = (event) => {
    const frame_window = this._frame_el()?.nativeElement?.contentWindow;
    if (!frame_window || event.source !== frame_window)
      return;
    if (event.origin !== this._frame_origin())
      return;
    if (typeof event.data !== "string")
      return;
    let message;
    try {
      message = JSON.parse(event.data);
    } catch {
      return;
    }
    this.handleMessage(message);
  };
  _frame_el = viewChild(
    "frame",
    ...ngDevMode ? [{ debugName: "_frame_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    super();
    effect(() => {
      if (this._online()) {
        this.timeout("init", () => this.app_loaded.set(true));
      }
    });
    effect(() => {
      const embed = this._embed();
      if (embed === void 0) {
        return;
      }
      if (!embed) {
        this._location.back();
        return;
      }
      const item = this._service.item();
      if (!this._online() || !item || embed === this._verified_embed) {
        return;
      }
      const url = allowedEmbedUrl(embed, extensionsForItem(item, this._service.type).map((ext) => ext.query.embed));
      this._verified_embed = url ? embed : "";
      this.url.set(url || "");
    });
    effect((onCleanup) => {
      window.addEventListener("message", this.onMessage);
      onCleanup(() => window.removeEventListener("message", this.onMessage));
    });
  }
  async handleMessage(message) {
    const item = this._service.active_item;
    if (message?.type !== "backoffice" || !item)
      return;
    if (message.action === "update") {
      this.updateItem(item, message);
    } else if (message.action === "metadata" && message.name) {
      this.updateMetadata(item, message);
    } else if (message.action === "load" && message.name) {
      this.loadMetadata(item, message, message.parent);
    } else if (message.action === "resource" && message.name) {
      const url = await this.loadResource(item, message);
      this._postMessage({
        id: message.id,
        type: "backoffice",
        status: "success",
        content: url,
        action: "result"
      });
    }
  }
  async updateItem(item, message) {
    const updated_item = await this._service.actions.save(__spreadValues(__spreadValues({}, item), typeof message.content === "object" ? message.content : {})).catch(() => notifyError(i18n("COMMON.ITEM_ERROR")));
    if (this._frame_el()?.nativeElement) {
      if (updated_item) {
        notifySuccess(i18n("COMMON.ITEM_SAVE"));
      }
      this._postMessage({
        id: message.id,
        type: "backoffice",
        status: updated_item ? "success" : "error"
      });
    }
  }
  async updateMetadata(item, message) {
    await rc(item.id, message.name);
    await oc(item.id, {
      id: item.id,
      name: message.name,
      description: `Metadata from ${this.url()}`,
      details: typeof message.content === "object" ? message.content : {}
    });
    notifySuccess(i18n("COMMON.METADTA_SAVE"));
    this._postMessage({
      id: message.id,
      type: "backoffice",
      status: "success"
    });
  }
  async loadMetadata(item, message, parent = false) {
    const metadata = await rc(parent ? item.parent_id : item.id, message.name);
    if (metadata) {
      this._postMessage({
        id: message.id,
        type: "backoffice",
        content: metadata.details,
        status: "success"
      });
    }
  }
  async loadResource(item, message) {
    const src = message.name;
    if (!src.includes("/api/engine/v2/uploads"))
      return src;
    const as_string = JSON.stringify(item);
    if (!as_string.includes(src))
      return src;
    if (RESOURCE_STORE.has(src))
      return RESOURCE_STORE.get(src);
    const tkn = J();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Xe()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=60;path=/api/;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
    const response = await fetch(src);
    const blob = await response.blob();
    const url = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(blob);
    });
    RESOURCE_STORE.set(src, url);
    return url;
  }
  _postMessage(message) {
    const origin = this._frame_origin();
    if (!origin)
      return;
    this._frame_el()?.nativeElement?.contentWindow?.postMessage(JSON.stringify(message), origin);
  }
  static \u0275fac = function ExtensionOutletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExtensionOutletComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExtensionOutletComponent, selectors: [["app-extension-outlet"]], viewQuery: function ExtensionOutletComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._frame_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["frame", ""], [1, "absolute", "inset-0", "h-full", "w-full", "border-none", 3, "src"]], template: function ExtensionOutletComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ExtensionOutletComponent_Conditional_0_Template, 3, 4, "iframe", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.url() && ctx.app_loaded() ? 0 : -1);
    }
  }, dependencies: [SafePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensionOutletComponent, [{
    type: Component,
    args: [{
      selector: "app-extension-outlet",
      template: `
        @if (url() && app_loaded()) {
            <iframe
                #frame
                class="absolute inset-0 h-full w-full border-none"
                [src]="url() | safe: 'resource'"
            ></iframe>
        }
    `,
      imports: [SafePipe]
    }]
  }], () => [], { _frame_el: [{ type: ViewChild, args: ["frame", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtensionOutletComponent, { className: "ExtensionOutletComponent", filePath: "src/app/ui/extension-outlet.component.ts", lineNumber: 54 });
})();
export {
  ExtensionOutletComponent
};
//# sourceMappingURL=chunk-HWRG3TSW.js.map
