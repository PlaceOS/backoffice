import {
  ZonesStateService
} from "./chunk-NSEJFBCC.js";
import {
  GroupMembershipComponent
} from "./chunk-7F7HLEXN.js";
import "./chunk-IQOV3HAH.js";
import "./chunk-Y72IETCD.js";
import "./chunk-X2O3T64J.js";
import "./chunk-GEOS7XT5.js";
import "./chunk-RC5DCWHO.js";
import "./chunk-TCTQ55E5.js";
import "./chunk-WP6GA2P2.js";
import "./chunk-FY37X726.js";
import "./chunk-DHNC5ZME.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-NK7WPEHP.js";
import "./chunk-623HKPUU.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-SVCRV2SB.js";
import "./chunk-QSH5WNGI.js";
import "./chunk-ARF53UMV.js";
import "./chunk-AJWP2GTR.js";
import "./chunk-YCY3FSLN.js";
import "./chunk-AO4TRNGE.js";
import "./chunk-UREEI53I.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-6TJHSNQM.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-BYTLFIPL.js";
import "./chunk-I54KCQXM.js";
import "./chunk-7W4JXVK4.js";
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

// src/app/zones/zone-groups.component.ts
var ZoneGroupsComponent = class _ZoneGroupsComponent {
  _service = inject(ZonesStateService);
  members = this._service.group_members;
  loading = this._service.loading;
  static \u0275fac = function ZoneGroupsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneGroupsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneGroupsComponent, selectors: [["zone-groups"]], decls: 1, vars: 2, consts: [[3, "members", "loading"]], template: function ZoneGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "group-membership", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("members", ctx.members)("loading", ctx.loading());
    }
  }, dependencies: [GroupMembershipComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneGroupsComponent, [{
    type: Component,
    args: [{
      selector: "zone-groups",
      template: `
        <group-membership [members]="members" [loading]="loading()" />
    `,
      imports: [GroupMembershipComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneGroupsComponent, { className: "ZoneGroupsComponent", filePath: "src/app/zones/zone-groups.component.ts", lineNumber: 12 });
})();
export {
  ZoneGroupsComponent
};
//# debugId=cff11587-8e57-5f36-9d98-f3b2903a54a2
//# sourceMappingURL=chunk-S2R3UNMX.js.map
