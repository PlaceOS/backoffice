import {
  MetadataDisplayComponent
} from "./chunk-OT7HWI7B.js";
import "./chunk-Y45MCQIV.js";
import "./chunk-TXDWXKP7.js";
import {
  ActiveItemService
} from "./chunk-JXZP3GQH.js";
import "./chunk-ZQDZ4P3A.js";
import "./chunk-J533RESC.js";
import "./chunk-NSNXXASA.js";
import "./chunk-UM3WNNMW.js";
import "./chunk-LGPP2H5A.js";
import "./chunk-IQ3ZWEXJ.js";
import "./chunk-LIMU3SEN.js";
import "./chunk-UCNDKOJV.js";
import "./chunk-DV6VICSN.js";
import "./chunk-4GAF3GQG.js";
import "./chunk-PZ66W5KC.js";
import "./chunk-TM4V3C5C.js";
import "./chunk-5XCHDAM3.js";
import "./chunk-KWUQFCBO.js";
import "./chunk-PUYRIMA6.js";
import "./chunk-HLPJDMLG.js";
import "./chunk-JGKWW7VX.js";
import "./chunk-2N4WVO5O.js";
import "./chunk-BFILZFNY.js";
import "./chunk-GWVX43QP.js";
import "./chunk-H47EQNV4.js";
import "./chunk-F7BLX4NP.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-WF6YZHUO.js";
import "./chunk-BKRK4NUB.js";
import "./chunk-RAVBIGYQ.js";
import "./chunk-2WXWFTBN.js";
import "./chunk-POU26KIO.js";
import "./chunk-X6AVAIR4.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-ZDWHOOB3.js";
import "./chunk-VDOGH5QV.js";
import "./chunk-GUX2IT3J.js";
import "./chunk-2VKYFPZX.js";
import "./chunk-47BQ5GYC.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty
} from "./chunk-HTG7JMGL.js";
import "./chunk-72HWXKQ6.js";
import "./chunk-VYXW4D3Z.js";

// src/app/users/user-metadata.component.ts
function UserMetadataComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var UserMetadataComponent = class _UserMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function UserMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMetadataComponent, selectors: [["user-metadata"]], decls: 1, vars: 1, consts: [[3, "item"]], template: function UserMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserMetadataComponent_Conditional_0_Template, 1, 1, "metadata-display", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.item ? 0 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMetadataComponent, [{
    type: Component,
    args: [{ selector: "user-metadata", template: `
        @if (item) {
            <metadata-display [item]="item" />
        }
    `, imports: [MetadataDisplayComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMetadataComponent, { className: "UserMetadataComponent", filePath: "src/app/users/user-metadata.component.ts", lineNumber: 16 });
})();
export {
  UserMetadataComponent
};
//# sourceMappingURL=chunk-FDVAIVOZ.js.map
