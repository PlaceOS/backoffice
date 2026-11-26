import {
  GroupMembershipComponent
} from "./chunk-4N33KDSH.js";
import {
  GroupStateService
} from "./chunk-GGMBVR4C.js";
import "./chunk-GWNW3HCP.js";
import "./chunk-X2O3T64J.js";
import "./chunk-GEOS7XT5.js";
import "./chunk-RC5DCWHO.js";
import "./chunk-JAQA72XL.js";
import "./chunk-FY37X726.js";
import "./chunk-2YLAOGGA.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-SAEX3KVK.js";
import "./chunk-VBAORMUC.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-SVCRV2SB.js";
import "./chunk-WCMJAQOC.js";
import "./chunk-ARF53UMV.js";
import "./chunk-AJWP2GTR.js";
import "./chunk-HS2B2TZM.js";
import "./chunk-ZCTRMOS3.js";
import "./chunk-UREEI53I.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-CVX3C457.js";
import "./chunk-SBKLZZRV.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-NVZKN3EI.js";
import "./chunk-I54KCQXM.js";
import "./chunk-YG3VZ5I7.js";
import "./chunk-UONBBRS5.js";
import "./chunk-TXVXL5KT.js";
import "./chunk-OTF7M54K.js";
import "./chunk-R4757DZB.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import "./chunk-VNEJ3CWU.js";
import "./chunk-UA77DMWK.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
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
//# debugId=c485ce34-daea-584d-947d-19828576911c
//# sourceMappingURL=chunk-KSNV325O.js.map
