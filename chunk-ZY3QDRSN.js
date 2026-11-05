import {
  DomainStateService
} from "./chunk-VX35GKP4.js";
import "./chunk-4NLMCLRX.js";
import {
  ItemShellComponent
} from "./chunk-SFMBS3UJ.js";
import "./chunk-6AR2RIBR.js";
import "./chunk-V5UO66F7.js";
import "./chunk-STSYKDDV.js";
import "./chunk-AN7HGRJ7.js";
import "./chunk-VGOE3NIH.js";
import {
  extensionsForItem
} from "./chunk-TEIQNXLB.js";
import "./chunk-ITF5SMNK.js";
import "./chunk-ARU6KMF4.js";
import "./chunk-7VVYQCGT.js";
import "./chunk-ASMGLVAU.js";
import "./chunk-6MIMHZ5M.js";
import "./chunk-2TM7KV6N.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YTMFDRFC.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-DEUMTF6I.js";
import "./chunk-ORF7MGF5.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-JFP7JBTM.js";
import "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-G5H4NNFS.js";
import "./chunk-Y35KTWST.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-HB6BWUYB.js";
import "./chunk-G3URG5GH.js";
import "./chunk-JVQGOL5R.js";
import "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import "./chunk-PZ6AYSMX.js";
import "./chunk-3YG3QG75.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-W43UPD5R.js";
import "./chunk-GHI5JNAC.js";
import "./chunk-IGJQLGMT.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import "./chunk-YFWFSNMM.js";
import "./chunk-PH6YSF2Z.js";
import "./chunk-33ALCS4C.js";
import {
  i18n
} from "./chunk-DIAVKJYC.js";
import "./chunk-OTGYPXXQ.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import "./chunk-3LASJ6UJ.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-DTROA6L2.js";
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
//# debugId=c01e2c28-5e3c-522c-b0ea-b66dfe87ccac
//# sourceMappingURL=chunk-ZY3QDRSN.js.map
