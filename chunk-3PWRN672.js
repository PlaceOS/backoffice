import {
  MetadataDisplayComponent
} from "./chunk-KLPWLVHY.js";
import "./chunk-7YOPAQU7.js";
import "./chunk-7AZATXEA.js";
import "./chunk-7HRBAFTP.js";
import {
  ActiveItemService
} from "./chunk-ASQIQVXN.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-YKN47ASX.js";
import "./chunk-RYVBUGYR.js";
import "./chunk-OPJ4GK76.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-ATLVPPFH.js";
import "./chunk-V2KTABQV.js";
import "./chunk-CNKSMWEA.js";
import "./chunk-BRIEIAFA.js";
import "./chunk-JVWLK6IW.js";
import "./chunk-4YCYXKWG.js";
import "./chunk-5PVSDZF5.js";
import "./chunk-PQ3GYMIP.js";
import "./chunk-4UFCPSAD.js";
import "./chunk-L7NLRXHN.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-COKN6TJC.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-EBZ2J7XZ.js";
import "./chunk-HZ4CW3MH.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-23LALMM3.js";
import "./chunk-YM2QXH2N.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-QMLF3LMQ.js";
import "./chunk-YKNMYZHI.js";
import "./chunk-7WER3E3M.js";
import "./chunk-VMI4ROST.js";
import "./chunk-KD54PHOX.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-DBSO33GH.js";
import "./chunk-KP7S2BKY.js";
import "./chunk-XJIIZKFA.js";
import "./chunk-GQLTM7WR.js";
import "./chunk-YAA5LSBH.js";
import "./chunk-LVMCBOCB.js";
import "./chunk-2JVXWOZG.js";
import "./chunk-MLQ2ZCKY.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-Z4IGVH3U.js";
import "./chunk-FFJ3WN6R.js";
import "./chunk-5GIP5KW2.js";
import "./chunk-J2PUVZQM.js";
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
} from "./chunk-2GWPJS4J.js";
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
//# sourceMappingURL=chunk-3PWRN672.js.map
