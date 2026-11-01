import {
  GroupStateService
} from "./chunk-FSMUBXVC.js";
import "./chunk-EBIM5R4C.js";
import "./chunk-IJ7SWPKJ.js";
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
import "./chunk-E3RFBRXX.js";
import "./chunk-GAJW4KWA.js";
import "./chunk-V6SHQ5T3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-MVL752Q3.js";
import "./chunk-ZY4OTP32.js";
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
//# debugId=8dbb56a2-8f91-5a87-bbc7-acbef407a0be
//# sourceMappingURL=chunk-YEXTSV7K.js.map
