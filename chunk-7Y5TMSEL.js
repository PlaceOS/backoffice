import {
  MetadataDisplayComponent
} from "./chunk-ZTA4NBLQ.js";
import "./chunk-O3SLARLH.js";
import "./chunk-IMTAHP7P.js";
import "./chunk-KECYNMKQ.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-7CVANT4E.js";
import "./chunk-N5R77J2W.js";
import "./chunk-D367STPK.js";
import "./chunk-E5FZHOKO.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-DXRTGQCR.js";
import "./chunk-HPIQ3AJX.js";
import "./chunk-LJXSC5VJ.js";
import "./chunk-6J2BB3LX.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-GPDIMQMT.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-SPOLLM5K.js";
import "./chunk-KCV6DKPB.js";
import "./chunk-QY7UL25Z.js";
import "./chunk-XSKTF7KU.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-5PJOSRFF.js";
import "./chunk-OKMGGQII.js";
import "./chunk-CW7GKMUR.js";
import "./chunk-2FYP6MEV.js";
import "./chunk-YBDRHXOO.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-Z6WA4HOG.js";
import "./chunk-U5ZUV3H6.js";
import "./chunk-NTN47BNT.js";
import "./chunk-YNW2ZIUP.js";
import "./chunk-6DVV2SYU.js";
import "./chunk-JDJQ2EA5.js";
import "./chunk-6Y4R77JI.js";
import "./chunk-DJWSVGV7.js";
import "./chunk-4DVVD434.js";
import "./chunk-4WEZYQJI.js";
import "./chunk-KMXZ3OKY.js";
import "./chunk-J4U3M3PW.js";
import "./chunk-BZNLRQXM.js";
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
//# sourceMappingURL=chunk-7Y5TMSEL.js.map
