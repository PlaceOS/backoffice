import {
  GroupMembershipComponent
} from "./chunk-A7SZZAYW.js";
import {
  GroupStateService
} from "./chunk-VUSGOTO3.js";
import "./chunk-IPDXMZHX.js";
import "./chunk-X2O3T64J.js";
import "./chunk-GEOS7XT5.js";
import "./chunk-HBCMOLOV.js";
import "./chunk-2BCT425G.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-MPKGO6TN.js";
import "./chunk-UPKBS5KV.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-LDVT7G23.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-PSIHSUYG.js";
import "./chunk-DHD7TIH6.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-I43MPPCS.js";
import "./chunk-HOSHIUIS.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-VVHZ7GAL.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-R4757DZB.js";
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
import "./chunk-4FRKWO6Y.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-D65IW4Y5.js";
import "./chunk-GB3VUBDQ.js";
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

// src/app/groups/group-zones.component.ts
var GroupZonesComponent = class _GroupZonesComponent {
  _service = inject(GroupStateService);
  members = this._service.zone_members;
  loading = this._service.loading;
  static \u0275fac = function GroupZonesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupZonesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupZonesComponent, selectors: [["group-zones"]], decls: 1, vars: 2, consts: [[3, "members", "loading"]], template: function GroupZonesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "group-membership", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("members", ctx.members)("loading", ctx.loading());
    }
  }, dependencies: [GroupMembershipComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupZonesComponent, [{
    type: Component,
    args: [{
      selector: "group-zones",
      template: `
        <group-membership [members]="members" [loading]="loading()" />
    `,
      imports: [GroupMembershipComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupZonesComponent, { className: "GroupZonesComponent", filePath: "src/app/groups/group-zones.component.ts", lineNumber: 12 });
})();
export {
  GroupZonesComponent
};
//# debugId=f22f13ce-5f2e-5361-b481-1cea659094b7
//# sourceMappingURL=chunk-KJ26EV3T.js.map
