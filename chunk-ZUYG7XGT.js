import {
  UsersStateService
} from "./chunk-5AI5DYST.js";
import "./chunk-TGEJ3MVF.js";
import "./chunk-X2O3T64J.js";
import {
  ItemShellComponent
} from "./chunk-2VQAQVBR.js";
import "./chunk-HD5K7ND4.js";
import "./chunk-YNPQ35O2.js";
import "./chunk-6W2LNG7G.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-RM3S4XI2.js";
import "./chunk-GEOS7XT5.js";
import {
  extensionsForItem
} from "./chunk-YZIXXT3V.js";
import "./chunk-A4WTKFZD.js";
import "./chunk-72THTKNP.js";
import {
  ActiveItemService
} from "./chunk-OQETGTKA.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-RBIASCYG.js";
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
import {
  isSubsystemUser
} from "./chunk-X3HUV4CQ.js";
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

// src/app/users/users.component.ts
var UsersComponent = class _UsersComponent {
  _service = inject(ActiveItemService);
  _state = inject(UsersStateService);
  name = "users";
  item = this._service.item;
  counts = this._state.counts;
  userActions() {
    const item = this._service.activeOf("users");
    return [
      ...item?.deleted && this._service.canMutate(4) ? [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/users/users.component.ts", lineNumber: 22 });
})();
export {
  UsersComponent
};
//# debugId=f883a6cd-19c8-55b0-918b-5e4128337966
//# sourceMappingURL=chunk-ZUYG7XGT.js.map
