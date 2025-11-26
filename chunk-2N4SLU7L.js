import {
  ActiveItemService
} from "./chunk-QLLN5KGJ.js";
import "./chunk-J4WOSFCE.js";
import "./chunk-SU4A27HA.js";
import "./chunk-JAVYI6DR.js";
import "./chunk-ZKOSV5C6.js";
import "./chunk-4SRLAZCZ.js";
import "./chunk-WGQKHF74.js";
import "./chunk-FUSKLN5J.js";
import "./chunk-W4446ZI7.js";
import "./chunk-JBFK7H5E.js";
import "./chunk-LYW23EPM.js";
import {
  ActivatedRoute
} from "./chunk-D444NJCZ.js";
import "./chunk-WR2EAA36.js";
import "./chunk-L2T7ZGS6.js";
import "./chunk-OHL342VN.js";
import "./chunk-YEYFARTO.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-TDDLCX2F.js";
import "./chunk-GNMPSLDT.js";
import "./chunk-UJ4OAW4C.js";
import "./chunk-GYVRTF64.js";
import "./chunk-GAQFKYD5.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-BJ7RDLLP.js";
import "./chunk-QU5HIE6N.js";
import "./chunk-TZTONW54.js";
import "./chunk-EH3SL4TV.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-GROJVO3W.js";
import "./chunk-UG6ZEHPO.js";
import "./chunk-WDR2GARE.js";
import "./chunk-ZF3Z6LCK.js";
import "./chunk-VLW6LVHT.js";
import "./chunk-SU3MJTQD.js";
import "./chunk-PECY6EPM.js";
import "./chunk-W3GXKXZC.js";
import {
  AsyncHandler
} from "./chunk-7UVGUB3C.js";
import {
  SafePipe
} from "./chunk-W37MESDG.js";
import "./chunk-PCFRJ6OJ.js";
import {
  i18n
} from "./chunk-FG3K2BCB.js";
import {
  $s,
  Component,
  Location,
  Pt,
  Pu,
  Tu,
  ViewChild,
  Y,
  first,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵqueryAdvance,
  ɵɵsanitizeResourceUrl,
  ɵɵviewQuerySignal
} from "./chunk-C25AKIFS.js";
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
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(2, 1, ctx_r0.url, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var RESOURCE_STORE = /* @__PURE__ */ new Map();
var ExtensionOutletComponent = class _ExtensionOutletComponent extends AsyncHandler {
  _route = inject(ActivatedRoute);
  _location = inject(Location);
  _service = inject(ActiveItemService);
  url = "";
  app_loaded = false;
  onMessage = (m) => {
    if (typeof m.data !== "string")
      return;
    this.handleMessage(JSON.parse(m.data));
  };
  _frame_el = viewChild("frame", ...ngDevMode ? [{ debugName: "_frame_el" }] : []);
  ngOnInit() {
    $s().pipe(first((_) => _)).subscribe(() => this.timeout("init", () => this.app_loaded = true));
    this._route.queryParamMap.subscribe((params) => {
      if (params.has("embed"))
        this.url = params.get("embed");
      else
        this._location.back();
    });
    window.addEventListener("message", this.onMessage);
    this.subscription("message", () => window.removeEventListener("message", this.onMessage));
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
            content: url
          });
        }
      }
    });
  }
  async updateItem(item, message) {
    const updated_item = await this._service.actions.save(__spreadValues(__spreadValues({}, item), message.content)).toPromise().catch((e) => notifyError(i18n("COMMON.ITEM_ERROR")));
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
    const exists = await Pu(item.id, message.name).toPromise();
    await Tu(item.id, {
      id: item.id,
      name: message.name,
      description: `Metadata from ${this.url}`,
      details: message.content || {}
    }).toPromise();
    notifySuccess(i18n("COMMON.METADTA_SAVE"));
    this._postMessage({
      id: message.id,
      type: "backoffice",
      status: "success"
    });
  }
  async loadMetadata(item, message, parent = false) {
    const metadata = await Pu(parent ? item.parent_id : item.id, message.name).toPromise();
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
    const tkn = Y();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Pt()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=60;path=/api/;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
    const response = await fetch(src);
    const blob = await response.blob();
    const url = await new Promise((resolve) => {
      var a = new FileReader();
      a.onload = (e) => resolve(e.target.result);
      a.readAsDataURL(blob);
    });
    RESOURCE_STORE.set(src, url);
    return url;
  }
  _postMessage(message) {
    this._frame_el()?.nativeElement?.contentWindow?.postMessage(JSON.stringify(message), "*");
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExtensionOutletComponent_BaseFactory;
    return function ExtensionOutletComponent_Factory(__ngFactoryType__) {
      return (\u0275ExtensionOutletComponent_BaseFactory || (\u0275ExtensionOutletComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExtensionOutletComponent)))(__ngFactoryType__ || _ExtensionOutletComponent);
    };
  })();
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
      \u0275\u0275conditional(ctx.url && ctx.app_loaded ? 0 : -1);
    }
  }, dependencies: [SafePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensionOutletComponent, [{
    type: Component,
    args: [{
      selector: "app-extension-outlet",
      template: `
        @if (url && app_loaded) {
            <iframe
                #frame
                class="absolute inset-0 h-full w-full border-none"
                [src]="url | safe: 'resource'"
            ></iframe>
        }
    `,
      imports: [SafePipe]
    }]
  }], null, { _frame_el: [{ type: ViewChild, args: ["frame", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtensionOutletComponent, { className: "ExtensionOutletComponent", filePath: "src/app/ui/extension-outlet.component.ts", lineNumber: 43 });
})();
export {
  ExtensionOutletComponent
};
//# sourceMappingURL=chunk-2N4SLU7L.js.map
