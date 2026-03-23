import {
  MetadataDisplayComponent
} from "./chunk-YZWCYTB4.js";
import "./chunk-NMBNJ43X.js";
import "./chunk-7ME23J5C.js";
import "./chunk-6EHVNR7O.js";
import {
  ActiveItemService
} from "./chunk-Q2C3BWCT.js";
import "./chunk-WNV7VXCM.js";
import "./chunk-J533RESC.js";
import "./chunk-2KLLQA6B.js";
import "./chunk-SJ4TAYXF.js";
import "./chunk-XD5CB7O6.js";
import "./chunk-UOZPOTVN.js";
import "./chunk-WPSAWQIL.js";
import "./chunk-PEDHCWHF.js";
import "./chunk-D4HPNIPT.js";
import "./chunk-FRNUDWTV.js";
import "./chunk-P7ABAMPF.js";
import "./chunk-JMUJRYCK.js";
import "./chunk-XODD7BCV.js";
import "./chunk-RJA7VK6V.js";
import "./chunk-PRL2UEXY.js";
import "./chunk-TDOACRHX.js";
import "./chunk-DNJ5OGXJ.js";
import "./chunk-LZJ3O446.js";
import "./chunk-JVZQGINH.js";
import "./chunk-XKH7K3EZ.js";
import "./chunk-CTGUN24P.js";
import "./chunk-V2YQHNT3.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-IN5YGCBE.js";
import "./chunk-RFI67JC7.js";
import "./chunk-KMWOHLBD.js";
import "./chunk-AFCWNDGX.js";
import "./chunk-VGPPQ2QX.js";
import "./chunk-6RFGFMVU.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-2FVYYETS.js";
import "./chunk-763UXDJC.js";
import "./chunk-VBR6PWOK.js";
import "./chunk-HOFUYBS5.js";
import "./chunk-ODP5LKCS.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty
} from "./chunk-CMCD56FG.js";
import "./chunk-IXMJWBEL.js";
import "./chunk-KWSTWQNB.js";

// src/app/systems/system-metadata.component.ts
function SystemMetadataComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var SystemMetadataComponent = class _SystemMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function SystemMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemMetadataComponent, selectors: [["system-metadata"]], decls: 2, vars: 1, consts: [[1, "p-4"], [3, "item"]], template: function SystemMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, SystemMetadataComponent_Conditional_1_Template, 1, 1, "metadata-display", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item ? 1 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemMetadataComponent, [{
    type: Component,
    args: [{ selector: "system-metadata", template: `
        <div class="p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `, imports: [MetadataDisplayComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemMetadataComponent, { className: "SystemMetadataComponent", filePath: "src/app/systems/system-metadata.component.ts", lineNumber: 18 });
})();
export {
  SystemMetadataComponent
};
//# sourceMappingURL=chunk-ZR5SICZR.js.map
