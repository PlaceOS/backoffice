import {
  DomainStateService
} from "./chunk-E4UFA2SP.js";
import "./chunk-YSDTASBD.js";
import {
  ItemShellComponent
} from "./chunk-2CBDIAV5.js";
import "./chunk-M5LQWIEU.js";
import "./chunk-SHAMKMYE.js";
import "./chunk-W76WBBAI.js";
import "./chunk-2K6E5HKC.js";
import "./chunk-OF3WDS66.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-ZIGK5MIQ.js";
import "./chunk-PWOOG4OS.js";
import "./chunk-JNEMVL3M.js";
import "./chunk-3RQH6HLG.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-4RAQL5SY.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-URQNJTMD.js";
import "./chunk-3CXGWY3Q.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-QUCOHQEE.js";
import "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-QW2S4DDS.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-IEEA6WQX.js";
import "./chunk-32E64OOS.js";
import "./chunk-QR6TO34C.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
import "./chunk-I2BE2RKH.js";
import "./chunk-BE6PEWTW.js";
import "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import "./chunk-HBFI5TAK.js";
import {
  i18n
} from "./chunk-RQOHFMTH.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import "./chunk-X2L3FRYF.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-OGAUD6Z3.js";
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
//# debugId=2850d922-b74f-5408-afac-7826a6fa0c3c
//# sourceMappingURL=chunk-3I5QHD76.js.map
