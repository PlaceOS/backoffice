import {
  SettingsService
} from "./chunk-D7A7S3DF.js";
import "./chunk-3ONUAWGE.js";
import "./chunk-GPHMWQA5.js";
import "./chunk-E2Z2L4DB.js";
import "./chunk-NTBPKOUQ.js";
import "./chunk-2OZGU35U.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-P3FA5CPP.js";
import {
  IconComponent
} from "./chunk-4DJN4BL5.js";
import "./chunk-BSFQAEYP.js";
import {
  MatRipple
} from "./chunk-KGK5S2XS.js";
import "./chunk-BOUIQ3F6.js";
import "./chunk-2VXJJPLQ.js";
import "./chunk-7ONBXR6Y.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YCZTZCQV.js";
import "./chunk-RQBZITXC.js";

// src/app/ui/global-banner.component.ts
function GlobalBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3);
    \u0275\u0275listener("click", function GlobalBannerComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-info", ctx_r1.banner.type === "info" || !ctx_r1.banner.type)("text-info-content", ctx_r1.banner.type === "info" || !ctx_r1.banner.type)("bg-warning", ctx_r1.banner.type === "warn")("text-warning-content", ctx_r1.banner.type === "warn")("bg-error", ctx_r1.banner.type === "error")("text-error-content", ctx_r1.banner.type === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.banner?.content);
  }
}
var GlobalBannerComponent = class _GlobalBannerComponent {
  _settings = inject(SettingsService);
  get has_viewed() {
    return !this.banner?.content || localStorage.getItem("PLACE.last_banner") === this.banner.id;
  }
  get banner() {
    return this._settings.value("banner");
  }
  close() {
    localStorage.setItem("PLACE.last_banner", this.banner?.id || "");
  }
  static \u0275fac = function GlobalBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalBannerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalBannerComponent, selectors: [["global-banner"]], decls: 1, vars: 1, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "p-4", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], [1, "flex", "w-full", "items-center", "space-x-4", "p-4"], [1, "flex-1"], ["icon", "", "matRipple", "", 3, "click"]], template: function GlobalBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, GlobalBannerComponent_Conditional_0_Template, 6, 13, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.has_viewed ? 0 : -1);
    }
  }, dependencies: [IconComponent, MatRipple], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=global-banner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalBannerComponent, [{
    type: Component,
    args: [{ selector: "global-banner", template: `
        @if (!has_viewed) {
            <div
                class="flex w-full items-center space-x-4 p-4"
                [class.bg-info]="banner.type === 'info' || !banner.type"
                [class.text-info-content]="
                    banner.type === 'info' || !banner.type
                "
                [class.bg-warning]="banner.type === 'warn'"
                [class.text-warning-content]="banner.type === 'warn'"
                [class.bg-error]="banner.type === 'error'"
                [class.text-error-content]="banner.type === 'error'"
            >
                <div class="flex-1">{{ banner?.content }}</div>
                <button icon matRipple (click)="close()">
                    <icon>close</icon>
                </button>
            </div>
        }
    `, imports: [IconComponent, MatRipple], styles: ["/* angular:styles/component:css;90c7ea3359a529ac871b05907f35a5977bf5db6008218c40ad219ab280ccfa5d;/home/runner/work/backoffice/backoffice/src/app/ui/global-banner.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=global-banner.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalBannerComponent, { className: "GlobalBannerComponent", filePath: "src/app/ui/global-banner.component.ts", lineNumber: 44 });
})();
export {
  GlobalBannerComponent
};
//# debugId=c4026020-2a84-544b-b169-174ca212374c
//# sourceMappingURL=chunk-6WR53ETL.js.map
