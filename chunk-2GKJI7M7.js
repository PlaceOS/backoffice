import {
  allowedEmbedUrl,
  extensionsForItem
} from "./chunk-QSDL3NHE.js";
import {
  ActiveItemService
} from "./chunk-CDX6TZFT.js";
import "./chunk-4RYS6IDU.js";
import "./chunk-RDQ6PHSS.js";
import "./chunk-ATCOB3R7.js";
import "./chunk-64C3YCVH.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import "./chunk-FKQAQZDB.js";
import {
  ActivatedRoute
} from "./chunk-UOJTYLOH.js";
import "./chunk-P3BK5ZDJ.js";
import "./chunk-NNX74YD5.js";
import "./chunk-X2FZB35R.js";
import "./chunk-EQS235EG.js";
import "./chunk-M3XU23PA.js";
import "./chunk-RFU37ATJ.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-PK5A7L3I.js";
import "./chunk-KFBTSNCQ.js";
import "./chunk-V3CYZPSM.js";
import {
  AsyncHandler
} from "./chunk-S7FMIV3Y.js";
import {
  signalFromClient,
  toSignal
} from "./chunk-WZTE63Q5.js";
import "./chunk-GAHHDLCB.js";
import "./chunk-ASNLNZJP.js";
import "./chunk-MXHU44D4.js";
import "./chunk-LOK5XGUU.js";
import {
  i18n
} from "./chunk-II4DDLQO.js";
import "./chunk-AOPYKUKV.js";
import {
  J,
  ac,
  et,
  hc,
  io
} from "./chunk-NMVMT4VD.js";
import {
  SafePipe
} from "./chunk-AWTACVQN.js";
import "./chunk-JIYYYGTQ.js";
import "./chunk-6DV7MASG.js";
import "./chunk-LWFSYFOG.js";
import "./chunk-ZNAEYXEF.js";
import "./chunk-UROHCZFR.js";
import {
  Location
} from "./chunk-4LBKZFUW.js";
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
} from "./chunk-OQOLG7V4.js";
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
var contentFields = (content) => content && typeof content === "object" && !Array.isArray(content) ? content : {};
var ExtensionOutletComponent = class _ExtensionOutletComponent extends AsyncHandler {
  _route = inject(ActivatedRoute);
  _location = inject(Location);
  _service = inject(ActiveItemService);
  _online = signalFromClient(io(), false);
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
  /** Run the requested action and send the result back to the frame */
  async handleMessage(message) {
    const item = this._service.active_item;
    if (message?.type !== "backoffice" || !item)
      return;
    const result = this._runAction(item, message);
    if (!result)
      return;
    try {
      this._reply(message.id, "success", await result || void 0);
    } catch {
      this._reply(message.id, "error");
    }
  }
  /** Start the action of a request. Returns `null` for unknown actions */
  _runAction(item, message) {
    switch (message.action) {
      case "update":
        return this.updateItem(item, message);
      case "metadata":
        return this.updateMetadata(item, message);
      case "load":
        return this.loadMetadata(item, message);
      case "resource":
        return this.loadResource(item, message);
      default:
        return null;
    }
  }
  /** Merge the message content into the active item and save it */
  async updateItem(item, message) {
    const updated_item = await this._service.actions.save(__spreadValues(__spreadValues({}, item), contentFields(message.content))).catch((error) => {
      notifyError(i18n("COMMON.ITEM_ERROR", { error: describeError(error) }));
      throw error;
    });
    this._service.replaceItem(updated_item);
    notifySuccess(i18n("COMMON.ITEM_SAVE"));
  }
  /** Save the message content as metadata on the active item */
  async updateMetadata(item, message) {
    if (!item.id || !message.name)
      throw new Error("Metadata not available");
    await hc(item.id, {
      id: item.id,
      name: message.name,
      description: `Metadata from ${this.url()}`,
      details: message.content && typeof message.content === "object" ? message.content : {}
    });
    notifySuccess(i18n("COMMON.METADATA_SAVE"));
  }
  /** Load metadata from the active item or from its parent */
  async loadMetadata(item, message) {
    const id = message.parent ? item.parent_id : item.id;
    if (!message.name || !id)
      throw new Error("Metadata not available");
    const metadata = await ac(id, message.name);
    return metadata.details;
  }
  /** Resolve a URL that the frame can show without credentials */
  async loadResource(item, message) {
    const src = message.name;
    if (!src)
      throw new Error("Resource URL is required");
    if (!src.includes("/api/engine/v2/uploads"))
      return src;
    if (!JSON.stringify(item).includes(src))
      return src;
    if (RESOURCE_STORE.has(src))
      return RESOURCE_STORE.get(src);
    const tkn = J();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(et()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=60;path=/api/;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
    const response = await fetch(src);
    if (!response.ok)
      throw new Error(`Failed to load ${src}`);
    const blob = await response.blob();
    const url = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
    RESOURCE_STORE.set(src, url);
    return url;
  }
  /** Send the result of a request to the frame */
  _reply(id, status, content) {
    const origin = this._frame_origin();
    if (!origin)
      return;
    const reply = {
      id,
      type: "backoffice",
      action: "result",
      status,
      content
    };
    this._frame_el()?.nativeElement?.contentWindow?.postMessage(JSON.stringify(reply), origin);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtensionOutletComponent, { className: "ExtensionOutletComponent", filePath: "src/app/ui/extension-outlet.component.ts", lineNumber: 62 });
})();
export {
  ExtensionOutletComponent
};
//# debugId=871e2a5a-f2e5-506a-b33e-abef99e68196
//# sourceMappingURL=chunk-2GKJI7M7.js.map
