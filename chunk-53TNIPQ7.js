import {
  MetadataDisplayComponent
} from "./chunk-TC2UCJTQ.js";
import "./chunk-PKIZNU4C.js";
import "./chunk-DL5XPCGA.js";
import "./chunk-IKIWGTVD.js";
import {
  ActiveItemService
} from "./chunk-TECLMIDH.js";
import "./chunk-NCHOUSDK.js";
import "./chunk-J533RESC.js";
import "./chunk-VVGC3NQA.js";
import "./chunk-7WWQ44LU.js";
import "./chunk-2CWN74E4.js";
import "./chunk-AXMNVT7F.js";
import "./chunk-7OB6FJ2M.js";
import "./chunk-PT4KYZGR.js";
import "./chunk-N3RK3SQP.js";
import "./chunk-CV4QBZZQ.js";
import "./chunk-3ZGYNA5K.js";
import "./chunk-LQAAVYTX.js";
import "./chunk-6YWCY4TK.js";
import "./chunk-66T35HGZ.js";
import "./chunk-FER544D2.js";
import "./chunk-L2CRC5RG.js";
import "./chunk-XUMTNDD2.js";
import "./chunk-T2PCLWZE.js";
import "./chunk-FPHVMVXG.js";
import "./chunk-JZ2ZXUEO.js";
import "./chunk-6IYZYYYP.js";
import "./chunk-IY6KPSRN.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-UL7CFJZH.js";
import "./chunk-KGMC3A36.js";
import "./chunk-VYX73VEA.js";
import "./chunk-WJDC4EPB.js";
import "./chunk-ER7JJLQK.js";
import "./chunk-AOWJCFYI.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-QVI2MHB7.js";
import "./chunk-YZDOHSFY.js";
import "./chunk-K2WSJKKY.js";
import "./chunk-KI62W3N4.js";
import "./chunk-XOEGZSB3.js";
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
} from "./chunk-765B2HHX.js";
import "./chunk-KGCDKKAY.js";
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
//# sourceMappingURL=chunk-53TNIPQ7.js.map
