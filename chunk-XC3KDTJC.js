import {
  GroupMembershipComponent
} from "./chunk-FM25GOXM.js";
import {
  GroupStateService
} from "./chunk-2TA5IE2M.js";
import "./chunk-62CPTYZ4.js";
import "./chunk-IKYXRM55.js";
import "./chunk-WW7UXSTZ.js";
import "./chunk-4FK7LTIP.js";
import "./chunk-GYIE66SW.js";
import "./chunk-DO2Q7VNO.js";
import "./chunk-6S433BIM.js";
import "./chunk-MXWUELBM.js";
import "./chunk-3CXGWY3Q.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-IYFCSDMQ.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-M7QWVZ5D.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-GEDUPXB2.js";
import "./chunk-IXI2HALU.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-G2A4D7CX.js";
import "./chunk-32E64OOS.js";
import "./chunk-ZLRMIFQU.js";
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
import "./chunk-TUKKKEUM.js";
import "./chunk-RWWXPWHW.js";
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
//# debugId=24b185c1-70da-5863-bceb-3b5e6ad07a6b
//# sourceMappingURL=chunk-XC3KDTJC.js.map
