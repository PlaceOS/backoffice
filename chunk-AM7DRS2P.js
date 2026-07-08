import {
  MetadataDisplayComponent
} from "./chunk-XGARXZO6.js";
import "./chunk-WY6SX2BG.js";
import "./chunk-R2E32WVU.js";
import "./chunk-A4YRUZMS.js";
import {
  ActiveItemService
} from "./chunk-7KMMGGPX.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-GILXWXRU.js";
import "./chunk-4SAVGYEQ.js";
import "./chunk-OEMHCWD4.js";
import "./chunk-4X4PTSQA.js";
import "./chunk-VRNJC5BQ.js";
import "./chunk-GDZ4KU6N.js";
import "./chunk-IYBVLYEV.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-SCU2ZHTT.js";
import "./chunk-UVXXRHB2.js";
import "./chunk-WD33FJZ2.js";
import "./chunk-V64DN2T3.js";
import "./chunk-LL5BPSQ6.js";
import "./chunk-WAZQJR33.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-6AAMXG3P.js";
import "./chunk-RG3TS5UW.js";
import "./chunk-NOZWPHCR.js";
import "./chunk-P45XEGRE.js";
import "./chunk-VH6NLWUW.js";
import "./chunk-RAEUAH5O.js";
import "./chunk-NFDUIW5Q.js";
import "./chunk-FCNXEIL3.js";
import "./chunk-JHONGK5J.js";
import "./chunk-HLJBC2QQ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-AQMMFGML.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-BTCSHLQ6.js";
import "./chunk-Y4WYMPD6.js";
import "./chunk-5QDDRDNC.js";
import "./chunk-OU4ZSGGA.js";
import "./chunk-RHXWHY3G.js";
import "./chunk-IYFQDTHB.js";
import "./chunk-ZCVCPEH7.js";
import "./chunk-2OXMVWQR.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-MXRJFREE.js";
import "./chunk-M7TMFMYW.js";
import "./chunk-VARF64W7.js";
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
} from "./chunk-QSXZQV2A.js";
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
//# sourceMappingURL=chunk-AM7DRS2P.js.map
