import {
  allowedEmbedUrl,
  extensionsForItem
} from "./chunk-YZIXXT3V.js";
import {
  ActiveItemService
} from "./chunk-OQETGTKA.js";
import "./chunk-L53BB3NN.js";
import "./chunk-SYZRTR66.js";
import "./chunk-WKU6NAJG.js";
import {
  toSignal
} from "./chunk-FF4ADQI6.js";
import "./chunk-SVCRV2SB.js";
import {
  describeError
} from "./chunk-N7V3DZSR.js";
import "./chunk-ZFBS3JV6.js";
import "./chunk-KP6LUFKO.js";
import "./chunk-X3HUV4CQ.js";
import "./chunk-TVHKFUKR.js";
import {
  ActivatedRoute
} from "./chunk-LL56AHAM.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-V2X4XHND.js";
import "./chunk-ZSOHIYWN.js";
import "./chunk-LPAJZMY2.js";
import "./chunk-HTRYSRC2.js";
import {
  AsyncHandler
} from "./chunk-UONBBRS5.js";
import {
  online,
  setAuthCookie
} from "./chunk-PXU3R4CZ.js";
import "./chunk-OTF7M54K.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-762ECDWF.js";
import {
  i18n
} from "./chunk-MSK6KGG6.js";
import {
  metadata_exports
} from "./chunk-K7DUQFI6.js";
import {
  orThrow
} from "./chunk-4MDDUS4W.js";
import {
  parseMetadataDetails
} from "./chunk-Y2QSYZTA.js";
import {
  SafePipe
} from "./chunk-QY7ZA5QE.js";
import "./chunk-QNK6X2WC.js";
import {
  Location
} from "./chunk-BRT76G6A.js";
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
} from "./chunk-6G3VFYSX.js";
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
  _online = online;
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
    await metadata_exports.update({
      id: item.id,
      body: {
        name: message.name,
        description: `Metadata from ${this.url()}`,
        details: message.content && typeof message.content === "object" ? message.content : {}
      }
    }).then(orThrow);
    notifySuccess(i18n("COMMON.METADATA_SAVE"));
  }
  /** Load metadata from the active item or from its parent */
  async loadMetadata(item, message) {
    const id = message.parent ? item.parent_id : item.id;
    if (!message.name || !id)
      throw new Error("Metadata not available");
    const metadata = await metadata_exports.show({ id, name: message.name }).then(orThrow).then((data) => data[message.name]);
    return parseMetadataDetails(metadata?.details ?? null);
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
    if (!await setAuthCookie("/api/"))
      throw new Error("Not signed in");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtensionOutletComponent, { className: "ExtensionOutletComponent", filePath: "src/app/ui/extension-outlet.component.ts", lineNumber: 59 });
})();
export {
  ExtensionOutletComponent
};
//# debugId=1e6c3a9b-d8e4-5662-8a66-143157844f71
//# sourceMappingURL=chunk-CLGPF5UI.js.map
