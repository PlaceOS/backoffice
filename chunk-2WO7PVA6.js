import {
  SettingsService
} from "./chunk-G2A4D7CX.js";
import "./chunk-32E64OOS.js";
import "./chunk-ZLRMIFQU.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import {
  TranslatePipe
} from "./chunk-TUKKKEUM.js";
import "./chunk-RWWXPWHW.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/ui/global-banner.component.ts
function GlobalBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function GlobalBannerComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-info", ctx_r1.banner.type === "info" || !ctx_r1.banner.type)("text-info-content", ctx_r1.banner.type === "info" || !ctx_r1.banner.type)("bg-warning", ctx_r1.banner.type === "warn")("text-warning-content", ctx_r1.banner.type === "warn")("bg-error", ctx_r1.banner.type === "error")("text-error-content", ctx_r1.banner.type === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.banner?.content);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 14, "COMMON.CLOSE"));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalBannerComponent, selectors: [["global-banner"]], decls: 1, vars: 1, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "p-4", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], [1, "flex", "w-full", "items-center", "space-x-4", "p-4"], [1, "flex-1"], ["icon", "", "ripple", "", 3, "click"]], template: function GlobalBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, GlobalBannerComponent_Conditional_0_Template, 7, 16, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.has_viewed ? 0 : -1);
    }
  }, dependencies: [IconComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=global-banner.component.css.map */"] });
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
                <button
                    icon
                    ripple
                    (click)="close()"
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon>close</icon>
                </button>
            </div>
        }
    `, imports: [TranslatePipe, IconComponent], styles: ["/* angular:styles/component:css;7299fc77dd390033;/home/runner/work/backoffice/backoffice/src/app/ui/global-banner.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=global-banner.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalBannerComponent, { className: "GlobalBannerComponent", filePath: "src/app/ui/global-banner.component.ts", lineNumber: 49 });
})();
export {
  GlobalBannerComponent
};
//# debugId=88bc7af0-86e6-5c9e-9292-d1ee58465579
//# sourceMappingURL=chunk-2WO7PVA6.js.map
