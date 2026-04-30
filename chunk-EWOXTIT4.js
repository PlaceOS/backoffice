import {
  MetadataDisplayComponent
} from "./chunk-WNZOOUXC.js";
import "./chunk-ZBXSBFIL.js";
import "./chunk-PAQXHCJU.js";
import "./chunk-DWSZDWML.js";
import {
  ActiveItemService
} from "./chunk-UDSKDGCE.js";
import "./chunk-J533RESC.js";
import "./chunk-ZESKXN34.js";
import "./chunk-WTSMWMEH.js";
import "./chunk-QSM2HYZM.js";
import "./chunk-NSZUGMRQ.js";
import "./chunk-65YCUWTA.js";
import "./chunk-TMFUAOSM.js";
import "./chunk-R4ULVRT7.js";
import "./chunk-LBOLXNAY.js";
import "./chunk-T3VFWMDL.js";
import "./chunk-CH6AC5JK.js";
import "./chunk-DG4KKZJB.js";
import "./chunk-CY6DZULQ.js";
import "./chunk-QFGT67J5.js";
import "./chunk-DB5RZWNY.js";
import "./chunk-36ED4WEZ.js";
import "./chunk-AFJ62GS5.js";
import "./chunk-SVC5EKFU.js";
import "./chunk-OPMQRCS2.js";
import "./chunk-BG5PQSIH.js";
import "./chunk-SXGBD5F4.js";
import "./chunk-XUKCG7FB.js";
import "./chunk-6F3APAN7.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-WYZMOGKS.js";
import "./chunk-IIC2LFQ4.js";
import "./chunk-TMGGVPDU.js";
import "./chunk-3EJGUVMF.js";
import "./chunk-3FCCFJYT.js";
import "./chunk-3DO6IWTY.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-YGDI5MWD.js";
import "./chunk-3LCTPUMP.js";
import "./chunk-EEGN4FTB.js";
import "./chunk-H7RDNF4E.js";
import "./chunk-VLPEX5MV.js";
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
} from "./chunk-66BB223G.js";
import "./chunk-HLVK2QTB.js";
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
//# sourceMappingURL=chunk-EWOXTIT4.js.map
