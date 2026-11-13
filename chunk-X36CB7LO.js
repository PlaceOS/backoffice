import {
  DriverStateService
} from "./chunk-H4ZCM33P.js";
import {
  ItemShellComponent
} from "./chunk-4NDWMNPR.js";
import "./chunk-B4IC243H.js";
import "./chunk-SHAMKMYE.js";
import "./chunk-W76WBBAI.js";
import "./chunk-2K6E5HKC.js";
import "./chunk-OF3WDS66.js";
import "./chunk-QS2LYKPS.js";
import "./chunk-TOGJODWH.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-YKTQN25X.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-EOOX537V.js";
import "./chunk-ZIGK5MIQ.js";
import "./chunk-AYMF2EQA.js";
import "./chunk-OVCELRPG.js";
import "./chunk-GYIE66SW.js";
import "./chunk-DO2Q7VNO.js";
import "./chunk-4RAQL5SY.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-M5B4HMCQ.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-IYFCSDMQ.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-M7QWVZ5D.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-GEDUPXB2.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-G2A4D7CX.js";
import "./chunk-32E64OOS.js";
import "./chunk-ZLRMIFQU.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-TUKKKEUM.js";
import {
  i18n
} from "./chunk-RWWXPWHW.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import {
  TooltipDirective
} from "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
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
} from "./chunk-OGAUD6Z3.js";
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
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(1, 1, "DRIVERS.UPDATE"));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriversComponent, selectors: [["new-drivers-view"]], decls: 2, vars: 2, consts: [["name", "drivers", "i18n_key", "DRIVERS", "debug", "", 3, "tabs"], ["icon", "", "primary", "", "appTooltipPosition", "right", "ripple", "", 1, "absolute", "bottom-16", "left-1", "z-30", "h-10", "w-10", "lg:-left-8", 3, "appTooltip"], ["icon", "", "primary", "", "appTooltipPosition", "right", "ripple", "", 1, "absolute", "bottom-16", "left-1", "z-30", "h-10", "w-10", "lg:-left-8", 3, "click", "appTooltip"], [1, "text-3xl"]], template: function DriversComponent_Template(rf, ctx) {
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
    TooltipDirective,
    ItemShellComponent,
    IconComponent,
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
                    icon
                    primary
                    class="absolute bottom-16 left-1 z-30 h-10 w-10 lg:-left-8"
                    [appTooltip]="'DRIVERS.UPDATE' | translate"
                    appTooltipPosition="right"
                    ripple
                    (click)="showUpdateList()"
                >
                    <icon class="text-3xl">update</icon>
                </button>
            }
        </item-shell>
    `,
      imports: [
        TooltipDirective,
        ItemShellComponent,
        IconComponent,
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
//# debugId=39d9bd89-f451-56e1-a30e-f50b1f27fdce
//# sourceMappingURL=chunk-X36CB7LO.js.map
