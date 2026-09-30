import {
  MetadataDisplayComponent
} from "./chunk-OQXN2RCM.js";
import "./chunk-AJZRN6ZU.js";
import "./chunk-UPYR6HHU.js";
import "./chunk-UCTEXKGA.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-IXHMRHEG.js";
import "./chunk-QS34PAM5.js";
import "./chunk-QOV5AADT.js";
import "./chunk-VFOKN4KS.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-XWMT7M74.js";
import "./chunk-ZBWUOXQY.js";
import "./chunk-2C722Z46.js";
import "./chunk-G27ITG57.js";
import "./chunk-4LO2VVHA.js";
import "./chunk-6AORHIBP.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-XDFS3U2K.js";
import "./chunk-7ASR6EUL.js";
import "./chunk-F34GYKGE.js";
import "./chunk-AHOW6IEF.js";
import "./chunk-6XUWFA3U.js";
import "./chunk-B6WUENCG.js";
import "./chunk-7AGLUCJP.js";
import "./chunk-OKMGGQII.js";
import "./chunk-IKL3NBUR.js";
import "./chunk-BIF7G7TH.js";
import "./chunk-KJXWRK4F.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-MEGGKQGS.js";
import "./chunk-NSY6RGIG.js";
import "./chunk-P4NPR2MV.js";
import "./chunk-HAVIORKV.js";
import "./chunk-BKGOEYCZ.js";
import "./chunk-6V3EPDQC.js";
import "./chunk-35RV2TRF.js";
import "./chunk-G6JZQ6PF.js";
import "./chunk-YZCKBLZP.js";
import "./chunk-ZN5VMKUO.js";
import "./chunk-XRQ22N5K.js";
import "./chunk-LAM4IRA6.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-QYMVVG4Y.js";
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
} from "./chunk-6NXCBA4X.js";
import "./chunk-DPH5AP7B.js";

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
//# sourceMappingURL=chunk-S7YXJLMA.js.map
