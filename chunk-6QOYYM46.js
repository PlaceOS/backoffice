import {
  MetadataDisplayComponent
} from "./chunk-B5BDGJU4.js";
import "./chunk-XGUVANTT.js";
import "./chunk-YZU3SQA7.js";
import "./chunk-LBA4CEEC.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-NRGAP4VU.js";
import "./chunk-TUGYSRNX.js";
import "./chunk-7KQO4KVV.js";
import "./chunk-3VH5IDBT.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-X3MWAFCJ.js";
import "./chunk-4BL3WELN.js";
import "./chunk-O7OQ7JEW.js";
import "./chunk-TEN3ABAY.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-F2NRQ63K.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-JNUXXJ2D.js";
import "./chunk-277XJOAN.js";
import "./chunk-LMUB4LUK.js";
import "./chunk-CRKGZJW7.js";
import "./chunk-PYVYLSER.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-VMQJNUAC.js";
import "./chunk-OKMGGQII.js";
import "./chunk-WUJNSD3X.js";
import "./chunk-75OXH2NR.js";
import "./chunk-I4CNNZYL.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-OOF3366H.js";
import "./chunk-QUUJ3KQH.js";
import "./chunk-OWI6HWFD.js";
import "./chunk-TUQY4L4B.js";
import "./chunk-I3KJAEKD.js";
import "./chunk-NM2N7PYU.js";
import "./chunk-CPS55MBW.js";
import "./chunk-NALZHFC6.js";
import "./chunk-X4BFBT7Y.js";
import "./chunk-4EBHF2Z4.js";
import "./chunk-LNMJVTUY.js";
import "./chunk-L2M3MNUF.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-2S4OQ6TV.js";
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
} from "./chunk-YPXZNU3N.js";
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
//# sourceMappingURL=chunk-6QOYYM46.js.map
