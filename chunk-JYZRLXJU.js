import {
  UsersStateService
} from "./chunk-D2OLSKSP.js";
import "./chunk-TWCRMJF7.js";
import "./chunk-IKYXRM55.js";
import {
  ItemShellComponent
} from "./chunk-2CBDIAV5.js";
import "./chunk-M5LQWIEU.js";
import "./chunk-SHAMKMYE.js";
import "./chunk-W76WBBAI.js";
import "./chunk-2K6E5HKC.js";
import "./chunk-OF3WDS66.js";
import "./chunk-WW7UXSTZ.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-ZIGK5MIQ.js";
import "./chunk-PWOOG4OS.js";
import {
  ActiveItemService
} from "./chunk-3RQH6HLG.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-4RAQL5SY.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-H7COFDFL.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-QW2S4DDS.js";
import {
  isSubsystemUser
} from "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-IEEA6WQX.js";
import "./chunk-32E64OOS.js";
import "./chunk-QR6TO34C.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
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
import {
  Dn
} from "./chunk-LCM7Z6QA.js";
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
//# sourceMappingURL=chunk-JYZRLXJU.js.map
