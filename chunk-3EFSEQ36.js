import {
  MetadataDisplayComponent
} from "./chunk-KSSNYIKV.js";
import "./chunk-AXPL3AID.js";
import "./chunk-J76CTUDL.js";
import {
  ActiveItemService
} from "./chunk-FDI5QXW2.js";
import "./chunk-5IGCJCU7.js";
import "./chunk-J533RESC.js";
import "./chunk-TLAPUNA6.js";
import "./chunk-AZEH7OPH.js";
import "./chunk-DUZVXEAA.js";
import "./chunk-K3OIGDXB.js";
import "./chunk-CAVMLDNL.js";
import "./chunk-62JZIUWG.js";
import "./chunk-DUMKBQ47.js";
import "./chunk-H6D6RNZ5.js";
import "./chunk-2UE6DVRM.js";
import "./chunk-Y4UIOVDN.js";
import "./chunk-AX7CZQ4V.js";
import "./chunk-AB2DELE4.js";
import "./chunk-L4LNMNAU.js";
import "./chunk-BFQZUVQ3.js";
import "./chunk-KACAXRUK.js";
import "./chunk-R3CS2OQD.js";
import "./chunk-457I3P7O.js";
import "./chunk-REQ7BP4U.js";
import "./chunk-QNJSC2X3.js";
import "./chunk-YOAPN2AS.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-6DCZX4UE.js";
import "./chunk-UPZUGYHP.js";
import "./chunk-HZ7P5O2S.js";
import "./chunk-WJHMIHHS.js";
import "./chunk-RYIKAYVN.js";
import "./chunk-USSSLHL5.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-F2GG244F.js";
import "./chunk-ZXSXDT5W.js";
import "./chunk-JGQFOLKM.js";
import "./chunk-XCUSELP4.js";
import "./chunk-WRCAB6XW.js";
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
} from "./chunk-HV66NOZY.js";
import "./chunk-K7VBXBIC.js";
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
//# sourceMappingURL=chunk-3EFSEQ36.js.map
