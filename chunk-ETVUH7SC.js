import {
  UsersStateService
} from "./chunk-R2RGTF7B.js";
import "./chunk-F6G2Y5FY.js";
import "./chunk-X2O3T64J.js";
import {
  ItemShellComponent
} from "./chunk-HPEN4CDM.js";
import "./chunk-K47LMT5P.js";
import "./chunk-PDTMS6JL.js";
import "./chunk-PVL5NDFP.js";
import "./chunk-MXXQVKJB.js";
import "./chunk-OTQ2ODNX.js";
import "./chunk-GEOS7XT5.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-5TFFP5TN.js";
import "./chunk-5PG3435R.js";
import {
  ActiveItemService
} from "./chunk-YMSUF7BT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-3SEQSBXV.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-2LLCGR7C.js";
import {
  isSubsystemUser
} from "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-LJNKRCR4.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-CKZDCKLD.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-A7VS2VYD.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import "./chunk-G7DGN64C.js";
import {
  i18n
} from "./chunk-JJ65W2TY.js";
import {
  Dn
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
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
//# debugId=d7fff0b0-ee6c-5238-b2f7-520d4b968c4a
//# sourceMappingURL=chunk-ETVUH7SC.js.map
