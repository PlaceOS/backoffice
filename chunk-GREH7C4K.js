import {
  MetadataDisplayComponent
} from "./chunk-LWONEYW6.js";
import "./chunk-EGA3DIXW.js";
import "./chunk-DTDVAUDI.js";
import "./chunk-AQ5JKP7M.js";
import {
  ActiveItemService
} from "./chunk-XLTJ4T7V.js";
import "./chunk-J533RESC.js";
import "./chunk-XOD6WJGY.js";
import "./chunk-AIHAF754.js";
import "./chunk-ND6UXKI3.js";
import "./chunk-OWJOYUIE.js";
import "./chunk-BFHNQYWR.js";
import "./chunk-RKP6PC35.js";
import "./chunk-IF34OMLM.js";
import "./chunk-JIQ6FGOU.js";
import "./chunk-WHWJVSMC.js";
import "./chunk-E3PNC77F.js";
import "./chunk-YBTJMEJ7.js";
import "./chunk-44XOPICB.js";
import "./chunk-4NCGIIWF.js";
import "./chunk-TOOU46W3.js";
import "./chunk-V3YN7DYB.js";
import "./chunk-DCE2RQNA.js";
import "./chunk-3JWNFX4R.js";
import "./chunk-VJXF7KZU.js";
import "./chunk-7C6AG3JT.js";
import "./chunk-LT47WTVV.js";
import "./chunk-RCORFESO.js";
import "./chunk-DOZGI6ZZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-HSU73SXZ.js";
import "./chunk-NYRBL7ZZ.js";
import "./chunk-WOXAUFUX.js";
import "./chunk-57N53QWS.js";
import "./chunk-NCFVLWM3.js";
import "./chunk-BYMT2HZ7.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-5FUDJCQW.js";
import "./chunk-VR6A7KSI.js";
import "./chunk-WUSBQZCM.js";
import "./chunk-CAQMKDI5.js";
import "./chunk-2XVJ4BI6.js";
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
} from "./chunk-BCGHR3SD.js";
import "./chunk-XPRAFMHR.js";
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
    const active_item = this._service.active_item;
    return active_item || { id: "" };
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
//# sourceMappingURL=chunk-GREH7C4K.js.map
