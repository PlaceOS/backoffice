import {
  DomainStateService
} from "./chunk-E5SPZ3MM.js";
import "./chunk-IGVVSBBN.js";
import {
  ItemShellComponent
} from "./chunk-2VQAQVBR.js";
import "./chunk-HD5K7ND4.js";
import "./chunk-YNPQ35O2.js";
import "./chunk-6W2LNG7G.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-RM3S4XI2.js";
import {
  extensionsForItem
} from "./chunk-YZIXXT3V.js";
import "./chunk-A4WTKFZD.js";
import "./chunk-72THTKNP.js";
import "./chunk-6S6AGDRG.js";
import "./chunk-OQETGTKA.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-RVECXXC5.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-MNQC7PXT.js";
import "./chunk-RSZG7SBF.js";
import "./chunk-L53BB3NN.js";
import "./chunk-SYZRTR66.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-SVCRV2SB.js";
import "./chunk-23KR5P22.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WI4F7QUZ.js";
import "./chunk-N7V3DZSR.js";
import "./chunk-ZFBS3JV6.js";
import "./chunk-KP6LUFKO.js";
import "./chunk-X3HUV4CQ.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-ZSOHIYWN.js";
import "./chunk-LPAJZMY2.js";
import "./chunk-HTRYSRC2.js";
import "./chunk-UONBBRS5.js";
import "./chunk-PXU3R4CZ.js";
import "./chunk-OTF7M54K.js";
import "./chunk-R4757DZB.js";
import "./chunk-NVRGEP5J.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import "./chunk-KPU65NDH.js";
import {
  i18n
} from "./chunk-MSK6KGG6.js";
import "./chunk-K7DUQFI6.js";
import "./chunk-4MDDUS4W.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-4FRKWO6Y.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-D65IW4Y5.js";
import "./chunk-GB3VUBDQ.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/domains/domains.component.ts
var DomainsComponent = class _DomainsComponent {
  _service = inject(DomainStateService);
  name = "domains";
  counts = this._service.counts;
  item = this._service.item;
  extra_actions = [
    {
      label: "DOMAINS.AZURE_INTEGRATION",
      icon: "integration_instructions",
      action: () => this._service.performAzureIntegration()
    }
  ];
  tab_list = computed(
    () => {
      const count = this.counts();
      return [
        {
          id: "about",
          name: i18n("DOMAINS.TAB_ABOUT"),
          icon: { content: "info" }
        },
        {
          id: "applications",
          name: i18n("DOMAINS.TAB_APPLICATIONS"),
          count: count.applications || 0,
          icon: { content: "login" }
        },
        {
          id: "authentication",
          name: i18n("DOMAINS.TAB_AUTHENTICATION"),
          count: count.auth_sources || 0,
          icon: { content: "lock_open" }
        },
        {
          id: "users",
          name: i18n("DOMAINS.TAB_USERS"),
          count: count.users || 0,
          icon: { content: "group" }
        },
        ...extensionsForItem(this.item(), this.name)
      ];
    },
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function DomainsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainsComponent, selectors: [["new-domains-view"]], decls: 1, vars: 2, consts: [["name", "domains", "i18n_key", "DOMAINS", 3, "tabs", "extra_actions"]], template: function DomainsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "item-shell", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list())("extra_actions", ctx.extra_actions);
    }
  }, dependencies: [ItemShellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainsComponent, [{
    type: Component,
    args: [{
      selector: "new-domains-view",
      template: `
        <item-shell
            name="domains"
            i18n_key="DOMAINS"
            [tabs]="tab_list()"
            [extra_actions]="extra_actions"
        />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainsComponent, { className: "DomainsComponent", filePath: "src/app/domains/domains.component.ts", lineNumber: 19 });
})();
export {
  DomainsComponent
};
//# debugId=f01a69e7-0253-5988-aa5d-78a5190e1c6e
//# sourceMappingURL=chunk-Y2JZVKZ3.js.map
