import {
  DomainStateService
} from "./chunk-RFLXBBAA.js";
import "./chunk-7ZZ3EY6Y.js";
import {
  ItemShellComponent
} from "./chunk-6FXDHGHV.js";
import "./chunk-ZHI4R6SQ.js";
import "./chunk-IRX5FMJU.js";
import "./chunk-KAUA5IH5.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-RM3S4XI2.js";
import {
  extensionsForItem
} from "./chunk-KANY6BUC.js";
import "./chunk-E44WLG22.js";
import "./chunk-ZYBBENNP.js";
import "./chunk-TCTQ55E5.js";
import "./chunk-WP6GA2P2.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YE7D3DMG.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-FI42JI5H.js";
import "./chunk-Q2NQGI6L.js";
import "./chunk-NK7WPEHP.js";
import "./chunk-623HKPUU.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-SVCRV2SB.js";
import "./chunk-QSH5WNGI.js";
import "./chunk-ARF53UMV.js";
import "./chunk-AJWP2GTR.js";
import "./chunk-YCY3FSLN.js";
import "./chunk-AO4TRNGE.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-6TJHSNQM.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-BYTLFIPL.js";
import "./chunk-I54KCQXM.js";
import "./chunk-7W4JXVK4.js";
import "./chunk-UONBBRS5.js";
import "./chunk-TXVXL5KT.js";
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
import "./chunk-VNEJ3CWU.js";
import {
  i18n
} from "./chunk-UA77DMWK.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
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
//# sourceMappingURL=chunk-RBBUTI7M.js.map
