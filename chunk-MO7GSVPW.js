import {
  MetadataDisplayComponent
} from "./chunk-ABK2VAX3.js";
import "./chunk-J7PE3K7Y.js";
import "./chunk-KWTGF7VC.js";
import {
  ActiveItemService
} from "./chunk-DWICWEXP.js";
import "./chunk-T5CBAHJS.js";
import "./chunk-J533RESC.js";
import "./chunk-EPSJ7BWT.js";
import "./chunk-UTQB3OKR.js";
import "./chunk-EJIIP22G.js";
import "./chunk-C7BMCHRG.js";
import "./chunk-OTJUA22E.js";
import "./chunk-XZLJQL74.js";
import "./chunk-UAQR3B5P.js";
import "./chunk-JCVHEY5H.js";
import "./chunk-VPDNCESF.js";
import "./chunk-B3GJUXQI.js";
import "./chunk-G652KOVV.js";
import "./chunk-Z7NA6H3I.js";
import "./chunk-DXEXLE3X.js";
import "./chunk-DPN7JUQC.js";
import "./chunk-LGSLM77D.js";
import "./chunk-6ATATSUD.js";
import "./chunk-HUPL3SA6.js";
import "./chunk-ZN4X52CQ.js";
import "./chunk-WTKFIOF6.js";
import "./chunk-CWAQZKJC.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-H3NFP65B.js";
import "./chunk-ALEPO5ZJ.js";
import "./chunk-VGLA4YGG.js";
import "./chunk-EGRPP66T.js";
import "./chunk-XRZ4NHWV.js";
import "./chunk-OD44YKN7.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-SU4H5GJ6.js";
import "./chunk-RXOUTXM3.js";
import "./chunk-XGWC243Z.js";
import "./chunk-5Y26MRIB.js";
import "./chunk-26CSHF2R.js";
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
} from "./chunk-AJKLM77M.js";
import "./chunk-ESVM3M45.js";
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
//# sourceMappingURL=chunk-MO7GSVPW.js.map
