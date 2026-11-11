import {
  UsersStateService
} from "./chunk-YT3SU3MW.js";
import "./chunk-BVPOYKDM.js";
import "./chunk-356GP3CJ.js";
import {
  ItemShellComponent
} from "./chunk-HXTFCX4O.js";
import "./chunk-QCH337WJ.js";
import "./chunk-ZMU5WNTV.js";
import "./chunk-RKGB7OTI.js";
import "./chunk-AN7HGRJ7.js";
import "./chunk-VGOE3NIH.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-YBIQG26C.js";
import "./chunk-UZTO4NFT.js";
import {
  ActiveItemService
} from "./chunk-3GPSZOKI.js";
import "./chunk-6O5GBWTJ.js";
import "./chunk-2TM7KV6N.js";
import "./chunk-HAPTQZQS.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-VGVLFPXY.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-TIQYM46E.js";
import "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-TQ4VP2CT.js";
import {
  isSubsystemUser
} from "./chunk-IN2BSCPT.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-HB6BWUYB.js";
import "./chunk-JVQGOL5R.js";
import "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import "./chunk-PZ6AYSMX.js";
import "./chunk-C5JU5DGK.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-PADBWY7W.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-MHAN4HKV.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import "./chunk-YFWFSNMM.js";
import "./chunk-PH6YSF2Z.js";
import "./chunk-Y2BF2IN5.js";
import {
  i18n
} from "./chunk-LD7JHF4N.js";
import {
  Dn
} from "./chunk-LCM7Z6QA.js";
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

// src/app/users/users.component.ts
var UsersComponent = class _UsersComponent {
  _service = inject(ActiveItemService);
  _state = inject(UsersStateService);
  name = "users";
  item = this._service.item;
  counts = this._state.counts;
  userActions() {
    const item = this.item();
    return [
      ...item instanceof Dn && item.deleted && this._service.canMutate(4) ? [
        {
          label: "USERS.REVIVE",
          icon: "restore_from_trash",
          action: () => this._state.revive()
        }
      ] : [],
      ...this._service.canMutate(8) ? [
        {
          label: "USERS.FORCE_DELETE",
          icon: "delete_forever",
          destructive: true,
          action: () => this._service.delete(true)
        }
      ] : []
    ];
  }
  tab_list = computed(
    () => [
      {
        id: "about",
        name: i18n("USERS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "metadata",
        name: i18n("USERS.TAB_METADATA"),
        icon: { content: "code_blocks" }
      },
      {
        id: "groups",
        name: i18n("USERS.TAB_GROUPS"),
        icon: { content: "groups" },
        count: this.counts()?.groups || 0
      },
      {
        id: "history",
        name: i18n("USERS.TAB_HISTORY"),
        icon: { content: "history" }
      },
      ...extensionsForItem(this.item(), this.name)
    ].filter((tab) => !isSubsystemUser() || !["groups", "history"].includes(tab.id)),
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["new-users-view"]], decls: 1, vars: 2, consts: [["name", "users", "i18n_key", "USERS", "bulk", "", 3, "tabs", "extra_actions"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "item-shell", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list())("extra_actions", ctx.userActions());
    }
  }, dependencies: [ItemShellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{
      selector: "new-users-view",
      template: `
        <item-shell
            name="users"
            i18n_key="USERS"
            [tabs]="tab_list()"
            [extra_actions]="userActions()"
            bulk
        />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/users/users.component.ts", lineNumber: 23 });
})();
export {
  UsersComponent
};
//# debugId=25df9c18-6172-5a67-a79d-3460b01808bb
//# sourceMappingURL=chunk-ZWJUVHBP.js.map
