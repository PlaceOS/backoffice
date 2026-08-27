import {
  ActiveItemService
} from "./chunk-O6567X2C.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-RKY23HSE.js";
import "./chunk-7NDCHFOB.js";
import "./chunk-XVFVAW3Y.js";
import "./chunk-PCFI5QOQ.js";
import "./chunk-WWY5WMTY.js";
import "./chunk-JAMMTH5K.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-LNIYAS5O.js";
import "./chunk-7JIOXWGJ.js";
import "./chunk-7GTI4RRT.js";
import "./chunk-BVAQ3KBJ.js";
import "./chunk-V3LOQHMH.js";
import "./chunk-I55NGSFI.js";
import "./chunk-MVHEPUBI.js";
import "./chunk-XAS7GUY2.js";
import {
  ActivatedRoute
} from "./chunk-SEO2LXOK.js";
import "./chunk-AHMBEMXE.js";
import "./chunk-6QZVPNC3.js";
import "./chunk-2SRIA4UK.js";
import "./chunk-X6EP7JXK.js";
import "./chunk-RYWQOUT3.js";
import "./chunk-N7YQCQZM.js";
import "./chunk-EZ3GOVVZ.js";
import "./chunk-5BQSWH4X.js";
import "./chunk-JKE4D5KH.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-TH36Z5QV.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-J6BBXARK.js";
import {
  signalFromClient,
  toSignal
} from "./chunk-EVUO4PXU.js";
import "./chunk-RMYYKPNF.js";
import {
  AsyncHandler
} from "./chunk-ALQ3QZS6.js";
import "./chunk-TPBAO5IV.js";
import "./chunk-HQA27L6T.js";
import {
  i18n
} from "./chunk-ERVNLYZR.js";
import {
  SafePipe
} from "./chunk-4HEIKSFD.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-YTRY35Y7.js";
import "./chunk-43FRBZB3.js";
import {
  Location
} from "./chunk-3LH3QF7A.js";
import {
  Component,
  Kr,
  Ve,
  ViewChild,
  Vu,
  X,
  Xu,
  computed,
  effect,
  inject,
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
} from "./chunk-LPT3PWXX.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
  _online = signalFromClient(Kr(), false);
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
  onMessage = (m) => {
    if (typeof m.data !== "string")
      return;
    this.handleMessage(JSON.parse(m.data));
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
      if (embed) {
        this.url.set(embed);
      } else {
        this._location.back();
      }
    });
    effect((onCleanup) => {
      window.addEventListener("message", this.onMessage);
      onCleanup(() => window.removeEventListener("message", this.onMessage));
    });
  }
  async handleMessage(message) {
    if (!this._frame_el()?.nativeElement) {
      return this.timeout("not_ready", () => this.handleMessage(message));
    }
    this.timeout(`on_message:${message.action}`, async () => {
      const item = this._service.active_item;
      if (message.type === "backoffice" && item) {
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
    });
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
    await Vu(item.id, message.name);
    await Xu(item.id, {
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
    const metadata = await Vu(parent ? item.parent_id : item.id, message.name);
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
    const tkn = X();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Ve()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=60;path=/api/;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
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
    this._frame_el()?.nativeElement?.contentWindow?.postMessage(JSON.stringify(message), "*");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtensionOutletComponent, { className: "ExtensionOutletComponent", filePath: "src/app/ui/extension-outlet.component.ts", lineNumber: 53 });
})();
export {
  ExtensionOutletComponent
};
//# sourceMappingURL=chunk-RHGQILNO.js.map
