import {
  MetadataDisplayComponent
} from "./chunk-RIWMKVMJ.js";
import "./chunk-3KKYOQCW.js";
import "./chunk-5AFMW6BV.js";
import "./chunk-DPNOMRH6.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-UYNBILCM.js";
import "./chunk-FNGKICPV.js";
import "./chunk-QE5EL3I7.js";
import "./chunk-2F73QLMV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-DSTTN5ZK.js";
import "./chunk-RWTEO4RZ.js";
import "./chunk-P7CK6ZAK.js";
import "./chunk-5UGYVUD7.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-YHETBOHW.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-ICMUH7CS.js";
import "./chunk-AEOQIZ7S.js";
import "./chunk-QNBYRJPA.js";
import "./chunk-ZVA3MBDA.js";
import "./chunk-WWPSGIKJ.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-Y4RHCQUA.js";
import "./chunk-OKMGGQII.js";
import "./chunk-7FPREW7N.js";
import "./chunk-K24E2XTI.js";
import "./chunk-YKOCQK62.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-X5UG4F5Q.js";
import "./chunk-SKNOFWP2.js";
import "./chunk-5N345UJD.js";
import "./chunk-6243K52G.js";
import "./chunk-LWX5YMXI.js";
import "./chunk-PQZCDGI7.js";
import "./chunk-VI7FKBDZ.js";
import "./chunk-2S4IWILW.js";
import "./chunk-UNTZZVDE.js";
import "./chunk-7XGDNWGW.js";
import "./chunk-H5NZMZKT.js";
import "./chunk-NHIR2SXG.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-ODRM6BWH.js";
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
} from "./chunk-62T6XHVB.js";
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
//# sourceMappingURL=chunk-6NPNE7A2.js.map
