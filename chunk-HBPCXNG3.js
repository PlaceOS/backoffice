import {
  UsersStateService
} from "./chunk-D2OLSKSP.js";
import {
  GroupMembershipComponent
} from "./chunk-O4BT2A5H.js";
import "./chunk-TWCRMJF7.js";
import "./chunk-IKYXRM55.js";
import "./chunk-WW7UXSTZ.js";
import "./chunk-MBA33NAB.js";
import "./chunk-3RQH6HLG.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-H7COFDFL.js";
import "./chunk-WZDBMORL.js";
import "./chunk-3CXGWY3Q.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-QW2S4DDS.js";
import "./chunk-XFWRCLJY.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-IEEA6WQX.js";
import "./chunk-32E64OOS.js";
import "./chunk-QR6TO34C.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
import "./chunk-BE6PEWTW.js";
import "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import "./chunk-HBFI5TAK.js";
import "./chunk-RQOHFMTH.js";
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/users/user-groups.component.ts
var UserGroupsComponent = class _UserGroupsComponent {
  _service = inject(UsersStateService);
  members = this._service.group_members;
  loading = this._service.loading;
  static \u0275fac = function UserGroupsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserGroupsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserGroupsComponent, selectors: [["user-groups"]], decls: 1, vars: 2, consts: [[3, "members", "loading"]], template: function UserGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "group-membership", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("members", ctx.members)("loading", ctx.loading());
    }
  }, dependencies: [GroupMembershipComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupsComponent, [{
    type: Component,
    args: [{
      selector: "user-groups",
      template: `
        <group-membership [members]="members" [loading]="loading()" />
    `,
      imports: [GroupMembershipComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserGroupsComponent, { className: "UserGroupsComponent", filePath: "src/app/users/user-groups.component.ts", lineNumber: 12 });
})();
export {
  UserGroupsComponent
};
//# debugId=121c8ad6-8a45-5265-9156-9be30a79681d
//# sourceMappingURL=chunk-HBPCXNG3.js.map
