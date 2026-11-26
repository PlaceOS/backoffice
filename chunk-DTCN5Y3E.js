import {
  DriverStateService
} from "./chunk-YRWFCOA3.js";
import "./chunk-X2O3T64J.js";
import {
  ItemShellComponent
} from "./chunk-UQK4VOSL.js";
import "./chunk-HVWDE7GG.js";
import "./chunk-HLWAUBYA.js";
import "./chunk-6AOLVNRL.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-ITKHUZ5Z.js";
import "./chunk-J7H74YPM.js";
import "./chunk-KT7PB7AL.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-PCGLPD4F.js";
import {
  extensionsForItem
} from "./chunk-TMDVCVBY.js";
import "./chunk-EOOX537V.js";
import "./chunk-OEOOGVS4.js";
import "./chunk-YYC573KB.js";
import "./chunk-VWC2VZMX.js";
import "./chunk-2GN5J46I.js";
import "./chunk-GVPYT7HY.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-BMBCYN44.js";
import "./chunk-5D2EQCRN.js";
import "./chunk-CZ3A2OHY.js";
import "./chunk-ZRL2MCOS.js";
import "./chunk-JBQNBPPI.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-NVIFDAFS.js";
import "./chunk-6PURSEHW.js";
import "./chunk-ARF53UMV.js";
import "./chunk-24SP3OZG.js";
import "./chunk-HS2B2TZM.js";
import "./chunk-PESDTUFQ.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-RN3AWFUF.js";
import "./chunk-SBKLZZRV.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-NGPG5OWB.js";
import "./chunk-IDLJ3PCR.js";
import "./chunk-RMI5N2H2.js";
import "./chunk-44FYJ5G4.js";
import "./chunk-V3DC4H2S.js";
import "./chunk-OTF7M54K.js";
import "./chunk-U6VSGXZ4.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-ZOC3VF7F.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-ODMV6TQA.js";
import "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import {
  IconComponent
} from "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-TX7UOGZW.js";
import "./chunk-GB3VUBDQ.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
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
} from "./chunk-6G3VFYSX.js";
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
//# debugId=90dd1144-9e82-5256-b979-031ab8a77b7b
//# sourceMappingURL=chunk-DTCN5Y3E.js.map
