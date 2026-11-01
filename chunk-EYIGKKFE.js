import {
  DomainStateService
} from "./chunk-LMUAQYCI.js";
import "./chunk-GMKRGWIB.js";
import {
  ItemShellComponent
} from "./chunk-HGEJLU6X.js";
import "./chunk-A7R2ZYGB.js";
import "./chunk-TUCNNZVA.js";
import "./chunk-BVCFDKRS.js";
import "./chunk-WD4DK2S2.js";
import "./chunk-TB4Q5IZA.js";
import "./chunk-YBIBK3UQ.js";
import "./chunk-YMHTGTAC.js";
import {
  extensionsForItem
} from "./chunk-TEIQNXLB.js";
import "./chunk-E3RFBRXX.js";
import "./chunk-GAJW4KWA.js";
import "./chunk-V6SHQ5T3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-ZY4OTP32.js";
import "./chunk-2IQYSDB5.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-TU5JPK72.js";
import "./chunk-QBEHGK7J.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-4CN23OQA.js";
import "./chunk-K5IHFRPQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-6QIICYIK.js";
import "./chunk-GR7PR5Q6.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-FK3PXAKX.js";
import "./chunk-FSFNWGQP.js";
import "./chunk-RY3VY3I7.js";
import "./chunk-W2EPZJRF.js";
import "./chunk-PSLPWDNG.js";
import "./chunk-HAWZID7H.js";
import "./chunk-2RUCGFPD.js";
import "./chunk-3SL5US3K.js";
import "./chunk-5BJVRHWW.js";
import "./chunk-VLLM34JN.js";
import "./chunk-55LQ6V7M.js";
import "./chunk-HASFJPLN.js";
import "./chunk-7CC5FNME.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-QRPWL2EI.js";
import "./chunk-AJCRFHSH.js";
import "./chunk-4ZLGHXUI.js";
import {
  i18n
} from "./chunk-XJOCECBM.js";
import "./chunk-J5ZLUQMI.js";
import "./chunk-OTGYPXXQ.js";
import "./chunk-NUJGQXME.js";
import "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import "./chunk-DKYBNEOC.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-HGOGRFKW.js";
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
//# debugId=830fcc4c-dbe0-593c-8016-dccc60a835e0
//# sourceMappingURL=chunk-EYIGKKFE.js.map
