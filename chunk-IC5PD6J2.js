import {
  MetadataDisplayComponent
} from "./chunk-GE6I5UQA.js";
import "./chunk-O3SLARLH.js";
import "./chunk-4ZHAC7P7.js";
import "./chunk-O72N6QC4.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-XRQAV2QN.js";
import "./chunk-7PHMPXWI.js";
import "./chunk-4F54YQCA.js";
import "./chunk-Z3QSN2DD.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-FLULJ253.js";
import "./chunk-HPIQ3AJX.js";
import "./chunk-LJXSC5VJ.js";
import "./chunk-6J2BB3LX.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-GPDIMQMT.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-SPOLLM5K.js";
import "./chunk-2UYSZT5N.js";
import "./chunk-KFZ5XOEB.js";
import "./chunk-MAM7KZJG.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-ND6UINCH.js";
import "./chunk-OKMGGQII.js";
import "./chunk-CW7GKMUR.js";
import "./chunk-2FYP6MEV.js";
import "./chunk-KNGYWE3U.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-Z6WA4HOG.js";
import "./chunk-IMYOUAZQ.js";
import "./chunk-AOLD3S2D.js";
import "./chunk-YNW2ZIUP.js";
import "./chunk-P5OVUE75.js";
import "./chunk-E5TTP6RX.js";
import "./chunk-KCZID3OB.js";
import "./chunk-DQVW3JTC.js";
import "./chunk-HFFZMFOU.js";
import "./chunk-4WEZYQJI.js";
import "./chunk-KMXZ3OKY.js";
import "./chunk-UB346ZBO.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-2YYGQVEM.js";
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
} from "./chunk-4QIQTM3T.js";
import "./chunk-KWSTWQNB.js";

// src/app/zones/zone-metadata.component.ts
function ZoneMetadataComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var ZoneMetadataComponent = class _ZoneMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    const active_item = this._service.active_item;
    return active_item || { id: "" };
  }
  static \u0275fac = function ZoneMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneMetadataComponent, selectors: [["zone-metadata"]], decls: 2, vars: 1, consts: [[1, "p-4"], [3, "item"]], template: function ZoneMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ZoneMetadataComponent_Conditional_1_Template, 1, 1, "metadata-display", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item ? 1 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneMetadataComponent, [{
    type: Component,
    args: [{ selector: "zone-metadata", template: `
        <div class="p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `, imports: [MetadataDisplayComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneMetadataComponent, { className: "ZoneMetadataComponent", filePath: "src/app/zones/zone-metadata.component.ts", lineNumber: 18 });
})();
export {
  ZoneMetadataComponent
};
//# sourceMappingURL=chunk-IC5PD6J2.js.map
