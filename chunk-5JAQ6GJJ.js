import {
  MetadataDisplayComponent
} from "./chunk-JMETLNP2.js";
import "./chunk-WDEW5CWC.js";
import "./chunk-4KIRHV6H.js";
import {
  ActiveItemService
} from "./chunk-QLLN5KGJ.js";
import "./chunk-J4WOSFCE.js";
import "./chunk-SU4A27HA.js";
import "./chunk-JAVYI6DR.js";
import "./chunk-ZKOSV5C6.js";
import "./chunk-4SRLAZCZ.js";
import "./chunk-WGQKHF74.js";
import "./chunk-FUSKLN5J.js";
import "./chunk-W4446ZI7.js";
import "./chunk-JBFK7H5E.js";
import "./chunk-LYW23EPM.js";
import "./chunk-D444NJCZ.js";
import "./chunk-WR2EAA36.js";
import "./chunk-L2T7ZGS6.js";
import "./chunk-OHL342VN.js";
import "./chunk-YEYFARTO.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-TDDLCX2F.js";
import "./chunk-GNMPSLDT.js";
import "./chunk-UJ4OAW4C.js";
import "./chunk-GYVRTF64.js";
import "./chunk-GAQFKYD5.js";
import "./chunk-BJ7RDLLP.js";
import "./chunk-QU5HIE6N.js";
import "./chunk-TZTONW54.js";
import "./chunk-EH3SL4TV.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-GROJVO3W.js";
import "./chunk-UG6ZEHPO.js";
import "./chunk-WDR2GARE.js";
import "./chunk-ZF3Z6LCK.js";
import "./chunk-VLW6LVHT.js";
import "./chunk-SU3MJTQD.js";
import "./chunk-PECY6EPM.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-7UVGUB3C.js";
import "./chunk-W37MESDG.js";
import "./chunk-PCFRJ6OJ.js";
import "./chunk-FG3K2BCB.js";
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
} from "./chunk-C25AKIFS.js";
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
//# sourceMappingURL=chunk-5JAQ6GJJ.js.map
