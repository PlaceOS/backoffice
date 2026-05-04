import {
  MetadataDisplayComponent
} from "./chunk-QMTRXYTJ.js";
import "./chunk-YC253KTG.js";
import "./chunk-3NZVPLFH.js";
import "./chunk-YSNXHG7H.js";
import {
  ActiveItemService
} from "./chunk-LHURGCPM.js";
import "./chunk-J533RESC.js";
import "./chunk-VDOVHCUZ.js";
import "./chunk-2V5TWTO7.js";
import "./chunk-V5QDO25T.js";
import "./chunk-CYNTSSZZ.js";
import "./chunk-YK26JLC5.js";
import "./chunk-QTR32TTA.js";
import "./chunk-FJPPD2QF.js";
import "./chunk-CHPLZLIO.js";
import "./chunk-AGMORATK.js";
import "./chunk-WJA6IVS3.js";
import "./chunk-3PZHMYR6.js";
import "./chunk-2N7FWMGW.js";
import "./chunk-FF4LYOF6.js";
import "./chunk-C2EHSMEV.js";
import "./chunk-HI6ZGSVN.js";
import "./chunk-6X5TKQ26.js";
import "./chunk-QRPF7APM.js";
import "./chunk-HIIV2XZN.js";
import "./chunk-QQS43L4S.js";
import "./chunk-KZF6VR3U.js";
import "./chunk-LYW23EPM.js";
import "./chunk-2I5OKOYD.js";
import "./chunk-6KNO3SVN.js";
import "./chunk-F3TF32RZ.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-66RYWCNF.js";
import "./chunk-A3Z42SO5.js";
import "./chunk-WQLIN7ET.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-6AG37CM5.js";
import "./chunk-JC5YMAMK.js";
import "./chunk-CQWDZ2JU.js";
import "./chunk-ON7XH5SZ.js";
import "./chunk-FC2K5SLV.js";
import "./chunk-I3SKV5XF.js";
import "./chunk-SIL4NKYL.js";
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
} from "./chunk-RH6UOTOJ.js";
import "./chunk-Y5GQFF5E.js";
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
//# sourceMappingURL=chunk-NZDJ5FYO.js.map
