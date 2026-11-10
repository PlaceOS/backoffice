import {
  ZonesStateService
} from "./chunk-VMMTSXD5.js";
import {
  GroupMembershipComponent
} from "./chunk-IHRXQ2BP.js";
import "./chunk-KCJN5F26.js";
import "./chunk-BVPOYKDM.js";
import "./chunk-356GP3CJ.js";
import "./chunk-P3JIVHGO.js";
import "./chunk-75NRZXVU.js";
import "./chunk-CB4JHNZV.js";
import "./chunk-6O5GBWTJ.js";
import "./chunk-HAPTQZQS.js";
import "./chunk-VGVLFPXY.js";
import "./chunk-EKQU7VBO.js";
import "./chunk-6SNHHJXA.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-TIQYM46E.js";
import "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-2OUHWH7N.js";
import "./chunk-IN2BSCPT.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-HB6BWUYB.js";
import "./chunk-G3URG5GH.js";
import "./chunk-JVQGOL5R.js";
import "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import "./chunk-PZ6AYSMX.js";
import "./chunk-C5JU5DGK.js";
import "./chunk-T674EZ22.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-HFMNSA6D.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-MUP2V42Q.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import "./chunk-YFWFSNMM.js";
import "./chunk-PH6YSF2Z.js";
import "./chunk-Y2BF2IN5.js";
import "./chunk-LD7JHF4N.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-DTROA6L2.js";
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
//# debugId=b4b8add6-8744-5bba-b712-6016889e0eff
//# sourceMappingURL=chunk-YR2ZO7EE.js.map
