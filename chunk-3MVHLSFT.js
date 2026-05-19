import {
  MetadataDisplayComponent
} from "./chunk-I4364FCH.js";
import "./chunk-JSR2V5ZQ.js";
import "./chunk-GLA5BW4F.js";
import "./chunk-5P2ET3NG.js";
import {
  ActiveItemService
} from "./chunk-L6DTZFL3.js";
import "./chunk-J533RESC.js";
import "./chunk-CIQTGPIC.js";
import "./chunk-PZ6FH7HJ.js";
import "./chunk-JAZWWDYQ.js";
import "./chunk-SUZCL24N.js";
import "./chunk-Q4IHQBE5.js";
import "./chunk-IYY5PYJ5.js";
import "./chunk-DVZ7MXOG.js";
import "./chunk-JRBSDEVI.js";
import "./chunk-IICJGF2V.js";
import "./chunk-IR63I7QW.js";
import "./chunk-LZSVYB2G.js";
import "./chunk-TBIE4X4V.js";
import "./chunk-DSMAAENN.js";
import "./chunk-BR2SEM6U.js";
import "./chunk-XKUCQ7BL.js";
import "./chunk-SLDYTPK2.js";
import "./chunk-QOHO4EXP.js";
import "./chunk-V6YJ4Z7A.js";
import "./chunk-JHZ5UPYR.js";
import "./chunk-V7K2HRQN.js";
import "./chunk-UENR5XJJ.js";
import "./chunk-Y5MGOXOO.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-VRK5F3OU.js";
import "./chunk-2MAE3OEL.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-4DW55IZJ.js";
import "./chunk-NNJNMYZB.js";
import "./chunk-P4ZFFXRB.js";
import "./chunk-RDKMWAC6.js";
import "./chunk-OJQGLQXV.js";
import "./chunk-SMEGFJCA.js";
import "./chunk-SFSVGVOC.js";
import "./chunk-TKVVIBDD.js";
import "./chunk-X3IV36B5.js";
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
} from "./chunk-JFTEBBHC.js";
import "./chunk-55CIHLAT.js";
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
//# sourceMappingURL=chunk-3MVHLSFT.js.map
