import {
  DriverStateService
} from "./chunk-BMSNJLT3.js";
import {
  ItemShellComponent
} from "./chunk-23OXFBXA.js";
import "./chunk-JN2ZL6BB.js";
import "./chunk-ZMU5WNTV.js";
import "./chunk-RKGB7OTI.js";
import "./chunk-AN7HGRJ7.js";
import "./chunk-VGOE3NIH.js";
import "./chunk-4DTCTIU5.js";
import "./chunk-D6MJKT74.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-5FMATNHV.js";
import "./chunk-EOOX537V.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-YBIQG26C.js";
import "./chunk-UZTO4NFT.js";
import "./chunk-75NRZXVU.js";
import "./chunk-CB4JHNZV.js";
import "./chunk-6O5GBWTJ.js";
import "./chunk-2TM7KV6N.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-DU365UGO.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-TIQYM46E.js";
import "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-2OUHWH7N.js";
import "./chunk-IN2BSCPT.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-JVQGOL5R.js";
import "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import "./chunk-PZ6AYSMX.js";
import "./chunk-C5JU5DGK.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-HFMNSA6D.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-MUP2V42Q.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import {
  MatRippleModule
} from "./chunk-YFWFSNMM.js";
import {
  MatRipple
} from "./chunk-PH6YSF2Z.js";
import {
  TranslatePipe
} from "./chunk-Y2BF2IN5.js";
import {
  i18n
} from "./chunk-LD7JHF4N.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/drivers/drivers.component.ts
function DriversComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DriversComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showUpdateList());
    });
    \u0275\u0275elementStart(2, "icon", 3);
    \u0275\u0275text(3, "update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "DRIVERS.UPDATE"));
  }
}
var DriversComponent = class _DriversComponent {
  _drivers = inject(DriverStateService);
  name = "drivers";
  item = this._drivers.item;
  device_count = this._drivers.modules_total;
  docs = this._drivers.docs;
  extensions = computed(
    () => extensionsForItem(this.item(), this.name),
    ...ngDevMode ? [{ debugName: "extensions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tab_list = computed(
    () => [
      {
        id: "about",
        name: i18n("DRIVERS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      ...this.docs() ? [
        {
          id: "docs",
          name: i18n("DRIVERS.TAB_DOCS"),
          icon: { content: "docs" }
        }
      ] : [],
      {
        id: "modules",
        name: i18n("DRIVERS.TAB_MODULES"),
        count: this.device_count() ?? "?",
        icon: { content: "tablet" }
      },
      {
        id: "history",
        name: i18n("DRIVERS.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      }
    ].concat(this.extensions()),
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  updates_available = this._drivers.updates_available;
  showUpdateList = () => this._drivers.showUpdateList();
  static \u0275fac = function DriversComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriversComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriversComponent, selectors: [["new-drivers-view"]], decls: 2, vars: 2, consts: [["name", "drivers", "i18n_key", "DRIVERS", "debug", "", 3, "tabs"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-1", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-8", 3, "matTooltip"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-1", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-8", 3, "click", "matTooltip"], [1, "text-3xl"]], template: function DriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "item-shell", 0);
      \u0275\u0275conditionalCreate(1, DriversComponent_Conditional_1_Template, 4, 3, "button", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.updates_available() ? 1 : -1);
    }
  }, dependencies: [
    ItemShellComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriversComponent, [{
    type: Component,
    args: [{
      selector: "new-drivers-view",
      template: `
        <item-shell name="drivers" i18n_key="DRIVERS" [tabs]="tab_list()" debug>
            @if (updates_available()) {
                <button
                    class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-1 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm lg:-left-8"
                    [matTooltip]="'DRIVERS.UPDATE' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="showUpdateList()"
                >
                    <icon class="text-3xl">update</icon>
                </button>
            }
        </item-shell>
    `,
      imports: [
        ItemShellComponent,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriversComponent, { className: "DriversComponent", filePath: "src/app/drivers/drivers.component.ts", lineNumber: 37 });
})();
export {
  DriversComponent
};
//# debugId=8ce7f07a-baa6-5087-b5eb-7d2ba4452505
//# sourceMappingURL=chunk-T7PABYE2.js.map
