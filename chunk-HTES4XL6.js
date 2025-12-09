import {
  MetadataDisplayComponent
} from "./chunk-MUIGBY44.js";
import "./chunk-Q4CSVYIP.js";
import "./chunk-L2XDH6D4.js";
import {
  ActiveItemService
} from "./chunk-GBS56EXV.js";
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
import "./chunk-ZDBP7OUD.js";
import "./chunk-QMI3AHNO.js";
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
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty
} from "./chunk-HTG7JMGL.js";
import "./chunk-72HWXKQ6.js";
import "./chunk-VYXW4D3Z.js";

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
//# sourceMappingURL=chunk-HTES4XL6.js.map
