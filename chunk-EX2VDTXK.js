import {
  GroupStateService
} from "./chunk-CBESW54W.js";
import "./chunk-UMAYOC7F.js";
import "./chunk-X2O3T64J.js";
import {
  ItemShellComponent
} from "./chunk-UQK4VOSL.js";
import "./chunk-HVWDE7GG.js";
import "./chunk-HLWAUBYA.js";
import "./chunk-6AOLVNRL.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-ITKHUZ5Z.js";
import "./chunk-R4FMIWHE.js";
import "./chunk-OEOOGVS4.js";
import "./chunk-YYC573KB.js";
import "./chunk-VWC2VZMX.js";
import "./chunk-2GN5J46I.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-BMBCYN44.js";
import "./chunk-5D2EQCRN.js";
import "./chunk-HWNMSPX7.js";
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
import "./chunk-HCAPZU5B.js";
import "./chunk-U6VSGXZ4.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-ZOC3VF7F.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-ODMV6TQA.js";
import "./chunk-762ECDWF.js";
import "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-TX7UOGZW.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/groups/groups.component.ts
var GroupsComponent = class _GroupsComponent {
  _service = inject(GroupStateService);
  item = this._service.item;
  display_item = computed(
    () => {
      const item = this.item();
      if (!item)
        return null;
      return __spreadProps(__spreadValues({}, item), { toJSON: () => __spreadValues({}, item) });
    },
    ...ngDevMode ? [{ debugName: "display_item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  counts = this._service.counts;
  tab_list = computed(
    () => {
      const count = this.counts();
      return [
        {
          id: "about",
          name: i18n("GROUPS.TAB_ABOUT"),
          icon: { content: "info" }
        },
        {
          id: "users",
          name: i18n("GROUPS.TAB_USERS"),
          count: count.users || 0,
          icon: { content: "group" }
        },
        {
          id: "zones",
          name: i18n("GROUPS.TAB_ZONES"),
          count: count.zones || 0,
          icon: { content: "meeting_room" }
        }
      ];
    },
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function GroupsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupsComponent, selectors: [["new-groups-view"]], decls: 1, vars: 2, consts: [["name", "groups", "i18n_key", "GROUPS", 3, "tabs", "item"]], template: function GroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "item-shell", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list())("item", ctx.display_item());
    }
  }, dependencies: [ItemShellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupsComponent, [{
    type: Component,
    args: [{
      selector: "new-groups-view",
      template: `
        <item-shell
            name="groups"
            i18n_key="GROUPS"
            [tabs]="tab_list()"
            [item]="display_item()"
        />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupsComponent, { className: "GroupsComponent", filePath: "src/app/groups/groups.component.ts", lineNumber: 19 });
})();
export {
  GroupsComponent
};
//# debugId=00416c9e-721a-59e2-8f50-4ed1e58515ef
//# sourceMappingURL=chunk-EX2VDTXK.js.map
