import {
  ZonesStateService
} from "./chunk-WORWVFK6.js";
import {
  GroupMembershipComponent
} from "./chunk-YQGX74VV.js";
import "./chunk-VZUYLT5Q.js";
import "./chunk-EBIM5R4C.js";
import "./chunk-IJ7SWPKJ.js";
import "./chunk-YBIBK3UQ.js";
import "./chunk-YMHTGTAC.js";
import "./chunk-JGUOPOO2.js";
import "./chunk-GAJW4KWA.js";
import "./chunk-V6SHQ5T3.js";
import "./chunk-MVL752Q3.js";
import "./chunk-QOKH3LEO.js";
import "./chunk-EHNRWKWT.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-4CN23OQA.js";
import "./chunk-K5IHFRPQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-BQR7GTXP.js";
import "./chunk-GR7PR5Q6.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-FK3PXAKX.js";
import "./chunk-FSFNWGQP.js";
import "./chunk-RY3VY3I7.js";
import "./chunk-W2EPZJRF.js";
import "./chunk-PSLPWDNG.js";
import "./chunk-HAWZID7H.js";
import "./chunk-2RUCGFPD.js";
import "./chunk-2VSGNNLN.js";
import "./chunk-3SL5US3K.js";
import "./chunk-GZ3GGYHY.js";
import "./chunk-VLLM34JN.js";
import "./chunk-3SXDXCO7.js";
import "./chunk-HASFJPLN.js";
import "./chunk-7CC5FNME.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-QRPWL2EI.js";
import "./chunk-AJCRFHSH.js";
import "./chunk-4ZLGHXUI.js";
import "./chunk-XJOCECBM.js";
import "./chunk-J5ZLUQMI.js";
import "./chunk-OTGYPXXQ.js";
import "./chunk-NUJGQXME.js";
import "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import "./chunk-DKYBNEOC.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-HGOGRFKW.js";
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
//# debugId=83a6d34e-8142-5a3e-b895-9b0886544b82
//# sourceMappingURL=chunk-5FJXHXQJ.js.map
