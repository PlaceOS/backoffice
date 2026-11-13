import {
  UsersStateService
} from "./chunk-3XTJU3ZX.js";
import {
  GroupMembershipComponent
} from "./chunk-OYMXJ2C5.js";
import "./chunk-F6G2Y5FY.js";
import "./chunk-X2O3T64J.js";
import "./chunk-GEOS7XT5.js";
import "./chunk-JX3DYPLV.js";
import "./chunk-L7KA5OCT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-3SEQSBXV.js";
import "./chunk-NSPWPCTJ.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-REIDPTXZ.js";
import "./chunk-DHD7TIH6.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-3P3QAPUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-52RBTZMB.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-A7VS2VYD.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import "./chunk-G7DGN64C.js";
import "./chunk-JJ65W2TY.js";
import "./chunk-LCM7Z6QA.js";
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-6G3VFYSX.js";
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
//# sourceMappingURL=chunk-NIOQRK2G.js.map
