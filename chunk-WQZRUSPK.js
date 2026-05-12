import {
  MetadataDisplayComponent
} from "./chunk-EZ6I625U.js";
import "./chunk-BRRQL4FE.js";
import "./chunk-L6TKSACQ.js";
import "./chunk-4ZHJSPDQ.js";
import {
  ActiveItemService
} from "./chunk-OAWSGTUF.js";
import "./chunk-J533RESC.js";
import "./chunk-YTLPGLGM.js";
import "./chunk-34ODANO2.js";
import "./chunk-RB2UY45D.js";
import "./chunk-E623OSGK.js";
import "./chunk-VK5UWEUQ.js";
import "./chunk-EGHGC3TW.js";
import "./chunk-2F4GBHID.js";
import "./chunk-UUEELBDU.js";
import "./chunk-ESAUSKTX.js";
import "./chunk-2CEGFXJM.js";
import "./chunk-NJCBGYYZ.js";
import "./chunk-YOYAXT2N.js";
import "./chunk-4VVZIYIL.js";
import "./chunk-YWMKQIZF.js";
import "./chunk-WERYLKHT.js";
import "./chunk-2DAO6TZL.js";
import "./chunk-PTV22NR2.js";
import "./chunk-53YUD5GD.js";
import "./chunk-TR5YLCJD.js";
import "./chunk-EAFGUPDC.js";
import "./chunk-6QIS3ULK.js";
import "./chunk-QVFKIGAC.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-LU7L7WA4.js";
import "./chunk-HTRPVLZU.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-2JVXCORR.js";
import "./chunk-KPCJPWPY.js";
import "./chunk-GSLV6Z53.js";
import "./chunk-6EJMXVZR.js";
import "./chunk-7Y3SYYGI.js";
import "./chunk-TQHEFPKA.js";
import "./chunk-PH5CZKYC.js";
import "./chunk-EVFMGPO2.js";
import "./chunk-TRQYP6G6.js";
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
} from "./chunk-6NLD6HWW.js";
import "./chunk-QVNOCU2N.js";
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
//# sourceMappingURL=chunk-WQZRUSPK.js.map
