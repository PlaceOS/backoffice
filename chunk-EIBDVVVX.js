import {
  MetadataDisplayComponent
} from "./chunk-YMFKDS4I.js";
import "./chunk-QP5XQJFF.js";
import "./chunk-KHXU2FSF.js";
import "./chunk-GIZPDCBK.js";
import {
  ActiveItemService
} from "./chunk-IW4CZDBJ.js";
import "./chunk-J533RESC.js";
import "./chunk-JK6QMDKK.js";
import "./chunk-5M3JBGAG.js";
import "./chunk-CUWQT2GL.js";
import "./chunk-GMQ5DVTU.js";
import "./chunk-AE4ZXYXF.js";
import "./chunk-OG2MHJQA.js";
import "./chunk-ION2CCEC.js";
import "./chunk-W2PUTAUI.js";
import "./chunk-V3HN5CBY.js";
import "./chunk-4ALOESAF.js";
import "./chunk-Z5FJC4I7.js";
import "./chunk-4QMCQ5KK.js";
import "./chunk-TZHB3H2C.js";
import "./chunk-5YKIVDAT.js";
import "./chunk-SW42XPF4.js";
import "./chunk-4ODMIZ7O.js";
import "./chunk-OXGNLB63.js";
import "./chunk-YIBSFQXI.js";
import "./chunk-3DWKKPWQ.js";
import "./chunk-QB6OEDH5.js";
import "./chunk-LKDLAZB6.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-Y4JFOSQS.js";
import "./chunk-ITU7FLKB.js";
import "./chunk-KNPBCUJZ.js";
import "./chunk-263IF76L.js";
import "./chunk-4IZH7QGG.js";
import "./chunk-QXQNKIRF.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-3GHPTDJZ.js";
import "./chunk-6CBQWDU5.js";
import "./chunk-5UPGSA24.js";
import "./chunk-TALE6FQV.js";
import "./chunk-TEK5TAH3.js";
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
} from "./chunk-QMACIC7N.js";
import "./chunk-T6SXWR5P.js";
import "./chunk-VYXW4D3Z.js";

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
//# sourceMappingURL=chunk-EIBDVVVX.js.map
