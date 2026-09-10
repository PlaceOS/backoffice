import {
  MetadataDisplayComponent
} from "./chunk-WMOKRIGK.js";
import "./chunk-OYSBQ2V2.js";
import "./chunk-RXMAQZNJ.js";
import "./chunk-VAAOU5VR.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-KMZGDTZV.js";
import "./chunk-Z4SO7IFI.js";
import "./chunk-QZWPSKLY.js";
import "./chunk-XUJXHGNG.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-7OTQDNNI.js";
import "./chunk-LGCOJQOV.js";
import "./chunk-5XY3WE42.js";
import "./chunk-UPJHMA72.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-HEUQQYXH.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-DOBZHCJ3.js";
import "./chunk-IXMIR4XK.js";
import "./chunk-PKJVK52W.js";
import "./chunk-Q2OAZ637.js";
import "./chunk-QWPPAGOZ.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-EPIXDTWN.js";
import "./chunk-OKMGGQII.js";
import "./chunk-FSWONNLF.js";
import "./chunk-4FMA4IVG.js";
import "./chunk-HAY6XAXW.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-Q2BV2GZB.js";
import "./chunk-NHXLW3Z3.js";
import "./chunk-WXUWESJ2.js";
import "./chunk-7NXN4G42.js";
import "./chunk-4XBU66YH.js";
import "./chunk-BTIO7C57.js";
import "./chunk-NL7TX5FO.js";
import "./chunk-O5B6FUTE.js";
import "./chunk-JCXXAJP2.js";
import "./chunk-B2GZKN45.js";
import "./chunk-ETM3LPJ2.js";
import "./chunk-ISKFUBZN.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-U7MJINT7.js";
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
} from "./chunk-Z45QSLBL.js";
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
//# sourceMappingURL=chunk-7PVORG4F.js.map
