import {
  MetadataDisplayComponent
} from "./chunk-NHXNHOJG.js";
import "./chunk-EP5D62ZN.js";
import "./chunk-SISHP353.js";
import "./chunk-LCNPGW63.js";
import "./chunk-FTR6ETPD.js";
import {
  ActiveItemService
} from "./chunk-CDX6TZFT.js";
import "./chunk-4RYS6IDU.js";
import "./chunk-RDQ6PHSS.js";
import "./chunk-QNPMDD4A.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YS23W2SA.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-DC3YQFAN.js";
import "./chunk-ATCOB3R7.js";
import "./chunk-64C3YCVH.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-FKQAQZDB.js";
import "./chunk-UOJTYLOH.js";
import "./chunk-P3BK5ZDJ.js";
import "./chunk-NNX74YD5.js";
import "./chunk-X2FZB35R.js";
import "./chunk-EQS235EG.js";
import "./chunk-M3XU23PA.js";
import "./chunk-RFU37ATJ.js";
import "./chunk-PK5A7L3I.js";
import "./chunk-KFBTSNCQ.js";
import "./chunk-V3CYZPSM.js";
import "./chunk-S7FMIV3Y.js";
import "./chunk-WZTE63Q5.js";
import "./chunk-GAHHDLCB.js";
import "./chunk-ASNLNZJP.js";
import "./chunk-MXHU44D4.js";
import "./chunk-LOK5XGUU.js";
import "./chunk-II4DDLQO.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-NMVMT4VD.js";
import "./chunk-AWTACVQN.js";
import "./chunk-JIYYYGTQ.js";
import "./chunk-6DV7MASG.js";
import "./chunk-LWFSYFOG.js";
import "./chunk-ZNAEYXEF.js";
import "./chunk-UROHCZFR.js";
import "./chunk-4LBKZFUW.js";
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
} from "./chunk-OQOLG7V4.js";
import "./chunk-RQBZITXC.js";

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
//# debugId=d33692ab-7e6a-5e86-8389-19cfd255a582
//# sourceMappingURL=chunk-3PUS5V2G.js.map
