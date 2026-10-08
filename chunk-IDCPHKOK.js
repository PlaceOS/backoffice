import {
  allowedEmbedUrl,
  extensionsForItem
} from "./chunk-QATEX2FE.js";
import {
  ActiveItemService
} from "./chunk-E74E3JF6.js";
import "./chunk-62B5GM77.js";
import "./chunk-ME7N3CRA.js";
import "./chunk-WAQ4TQSN.js";
import "./chunk-NY2WALLY.js";
import "./chunk-QTD6K5LA.js";
import "./chunk-G3IJGLD4.js";
import "./chunk-EIPFTMWR.js";
import {
  ActivatedRoute
} from "./chunk-EUOPYYFD.js";
import "./chunk-PV3B5VUM.js";
import "./chunk-KSTC3SGQ.js";
import "./chunk-V5PUZAZK.js";
import "./chunk-WVKNYC6X.js";
import "./chunk-IGQAWJ6Y.js";
import "./chunk-TUWOEI35.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-AYJXTTVT.js";
import "./chunk-LYZMFOYM.js";
import "./chunk-5RDGWPHM.js";
import {
  signalFromClient,
  toSignal
} from "./chunk-WCEMOYFJ.js";
import {
  AsyncHandler
} from "./chunk-NZ7ZPGVU.js";
import "./chunk-EZWGQADM.js";
import {
  i18n
} from "./chunk-5OMVQZOP.js";
import "./chunk-PSYHHKS3.js";
import "./chunk-GORY6HKE.js";
import "./chunk-SXYVSUAR.js";
import {
  J,
  Xe,
  eo,
  oc,
  rc
} from "./chunk-P3FA5CPP.js";
import {
  SafePipe
} from "./chunk-Y7HZB3U4.js";
import "./chunk-XX3FQFUN.js";
import "./chunk-5NTI54SQ.js";
import "./chunk-YEGFHODJ.js";
import "./chunk-ZVFWHHSJ.js";
import "./chunk-H4IW3C2Y.js";
import "./chunk-DZQDK6ER.js";
import "./chunk-FVPQ6H6W.js";
import {
  Location
} from "./chunk-QHKUHZUG.js";
import {
  Component,
  ViewChild,
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
} from "./chunk-RDM3X2TD.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
    notifySuccess(i18n("COMMON.METADATA_SAVE"));
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
//# sourceMappingURL=chunk-IDCPHKOK.js.map
