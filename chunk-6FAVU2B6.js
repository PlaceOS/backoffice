import {
  ZonesStateService
} from "./chunk-MISOUZDG.js";
import {
  GroupMembershipComponent
} from "./chunk-P37FN6TR.js";
import "./chunk-5WFQZ5T5.js";
import "./chunk-TGEJ3MVF.js";
import "./chunk-X2O3T64J.js";
import "./chunk-GEOS7XT5.js";
import "./chunk-6KSONSHN.js";
import "./chunk-6S6AGDRG.js";
import "./chunk-OQETGTKA.js";
import "./chunk-RBIASCYG.js";
import "./chunk-OTR7JKZA.js";
import "./chunk-R5EDKAWG.js";
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
import "./chunk-UXYPWEUF.js";
import "./chunk-KP6LUFKO.js";
import "./chunk-X3HUV4CQ.js";
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
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import "./chunk-KPU65NDH.js";
import "./chunk-MSK6KGG6.js";
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
//# sourceMappingURL=chunk-6FAVU2B6.js.map
