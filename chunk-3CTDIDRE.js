import {
  GroupStateService
} from "./chunk-HACB2IVD.js";
import "./chunk-JMCJG546.js";
import "./chunk-356GP3CJ.js";
import {
  ItemShellComponent
} from "./chunk-SFMBS3UJ.js";
import "./chunk-6AR2RIBR.js";
import "./chunk-V5UO66F7.js";
import "./chunk-STSYKDDV.js";
import "./chunk-AN7HGRJ7.js";
import "./chunk-VGOE3NIH.js";
import "./chunk-ITF5SMNK.js";
import "./chunk-ARU6KMF4.js";
import "./chunk-ASMGLVAU.js";
import "./chunk-6MIMHZ5M.js";
import "./chunk-2TM7KV6N.js";
import "./chunk-HAPTQZQS.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-O73WYJ27.js";
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
//# debugId=1e3309a3-9507-5de0-a398-b15e4e258778
//# sourceMappingURL=chunk-3CTDIDRE.js.map
