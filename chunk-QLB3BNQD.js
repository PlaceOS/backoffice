import {
  MetadataDisplayComponent
} from "./chunk-VEW5TZ3K.js";
import "./chunk-JMV5CV4V.js";
import "./chunk-7TF5KI3D.js";
import "./chunk-2LER4KCA.js";
import {
  ActiveItemService
} from "./chunk-XVDUMVAS.js";
import "./chunk-6YWHFTJW.js";
import "./chunk-J533RESC.js";
import "./chunk-TDW2O7RD.js";
import "./chunk-5BG3YZTE.js";
import "./chunk-CF2NOKQL.js";
import "./chunk-PWRYQANA.js";
import "./chunk-LKDC73R2.js";
import "./chunk-7EJ7RRKH.js";
import "./chunk-DEBKIR2F.js";
import "./chunk-TCRHK3RQ.js";
import "./chunk-SBQHH5ML.js";
import "./chunk-3Y76NEPO.js";
import "./chunk-DBRJN53P.js";
import "./chunk-NUMJGP7T.js";
import "./chunk-CHOWPPXT.js";
import "./chunk-OBFARVMX.js";
import "./chunk-SRZCMQ2C.js";
import "./chunk-T75ATYKF.js";
import "./chunk-R6RPLYR6.js";
import "./chunk-IBTMU5M7.js";
import "./chunk-XYLE6LQ3.js";
import "./chunk-4ZNIL4XG.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-AJRLGM6Z.js";
import "./chunk-VDR6DK2T.js";
import "./chunk-CQRL7HOU.js";
import "./chunk-3LPUPHPC.js";
import "./chunk-TOSTYMFB.js";
import "./chunk-YZKNJW3K.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-QKYZGNAS.js";
import "./chunk-UP4YCCPE.js";
import "./chunk-NEVMX5EB.js";
import "./chunk-A4WILNGJ.js";
import "./chunk-32K5DQRY.js";
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
} from "./chunk-T2LRLIH5.js";
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
//# sourceMappingURL=chunk-QLB3BNQD.js.map
