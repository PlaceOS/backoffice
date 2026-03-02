import {
  MetadataDisplayComponent
} from "./chunk-2PJKFKVN.js";
import "./chunk-GSAC7KS7.js";
import "./chunk-NWXVHJGI.js";
import {
  ActiveItemService
} from "./chunk-KS7VWNJ3.js";
import "./chunk-M6YSSFSQ.js";
import "./chunk-J533RESC.js";
import "./chunk-ASEDAJX7.js";
import "./chunk-EU6BJWSV.js";
import "./chunk-A6YVYW6Z.js";
import "./chunk-6LZJUWAF.js";
import "./chunk-IPFKAE6I.js";
import "./chunk-XMOSXGSS.js";
import "./chunk-O7M36TBF.js";
import "./chunk-IENVBRDD.js";
import "./chunk-47VQRW47.js";
import "./chunk-MQRKFLAH.js";
import "./chunk-BTQVPL2O.js";
import "./chunk-7NXQDI6Y.js";
import "./chunk-AQ73NF7U.js";
import "./chunk-G3XUWVSE.js";
import "./chunk-WZQIUEN6.js";
import "./chunk-U5GSCUGC.js";
import "./chunk-YYQPF64A.js";
import "./chunk-P2E4DW3S.js";
import "./chunk-G2AYWVE3.js";
import "./chunk-DC2GHC3J.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-F6FT7HSH.js";
import "./chunk-H3F3PJXF.js";
import "./chunk-SD6ATYW5.js";
import "./chunk-W7LQTE35.js";
import "./chunk-XC26D6PK.js";
import "./chunk-TW2VJMUH.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-IWTC3X52.js";
import "./chunk-UQSUXGIZ.js";
import "./chunk-IW5S5EUB.js";
import "./chunk-4ID7G33D.js";
import "./chunk-EXPUHWVW.js";
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
} from "./chunk-IGWUWPZB.js";
import "./chunk-WQHITSMN.js";
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
//# sourceMappingURL=chunk-V353FN3D.js.map
