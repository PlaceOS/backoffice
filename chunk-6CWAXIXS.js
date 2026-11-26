import {
  UsersStateService
} from "./chunk-JHKIRJGR.js";
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
import {
  extensionsForItem
} from "./chunk-TMDVCVBY.js";
import "./chunk-OEOOGVS4.js";
import "./chunk-YYC573KB.js";
import "./chunk-VWC2VZMX.js";
import "./chunk-2GN5J46I.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import {
  ActiveItemService
} from "./chunk-BMBCYN44.js";
import {
  AdminDataService
} from "./chunk-5D2EQCRN.js";
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
import {
  BackofficeUsersService
} from "./chunk-PESDTUFQ.js";
import "./chunk-ZUAP4Y6Q.js";
import {
  isSubsystemUser
} from "./chunk-RN3AWFUF.js";
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
  effect,
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
  constructor() {
    const admin_data = inject(AdminDataService);
    const user = inject(BackofficeUsersService);
    effect(() => {
      if (user.current()?.sys_admin)
        void admin_data.loadDomains();
    });
  }
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
      ...extensionsForItem(this.item(), this.name)
    ].filter((tab) => !isSubsystemUser() || tab.id !== "groups"),
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/users/users.component.ts", lineNumber: 24 });
})();
export {
  UsersComponent
};
//# debugId=d9e8f4ef-bcd9-579b-ad0e-6ee76b0a3893
//# sourceMappingURL=chunk-6CWAXIXS.js.map
