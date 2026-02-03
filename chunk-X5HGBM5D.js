import {
  MetadataDisplayComponent
} from "./chunk-AVLY7CZ3.js";
import "./chunk-ZU4VV3N6.js";
import "./chunk-YTMHDJJX.js";
import {
  ActiveItemService
} from "./chunk-7EJTFSOD.js";
import "./chunk-E5O3W4UK.js";
import "./chunk-J533RESC.js";
import "./chunk-I5AL5V7J.js";
import "./chunk-GFQZBYS2.js";
import "./chunk-OVISDOSS.js";
import "./chunk-5CIGDIXS.js";
import "./chunk-3RDWH2PM.js";
import "./chunk-SMGQCLO4.js";
import "./chunk-D26PSXGA.js";
import "./chunk-HVEA2SCZ.js";
import "./chunk-AYXNAT23.js";
import "./chunk-FW5T3MMG.js";
import "./chunk-25QEM4SL.js";
import "./chunk-WWOKREKZ.js";
import "./chunk-MQK2WLOX.js";
import "./chunk-6S56CTCM.js";
import "./chunk-DEYB5LIM.js";
import "./chunk-AEQCFEN3.js";
import "./chunk-F2SIRQ7I.js";
import "./chunk-VG6RDBFT.js";
import "./chunk-2ONPKJHJ.js";
import "./chunk-A4NYRBQ5.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-MNFEZLRO.js";
import "./chunk-XSCAXKGH.js";
import "./chunk-3LEBC5GS.js";
import "./chunk-3DOKPZ3J.js";
import "./chunk-WIN2774F.js";
import "./chunk-MMIWWJ2B.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-H5MOLNWN.js";
import "./chunk-PJJZ73WC.js";
import "./chunk-WSRCHTK7.js";
import "./chunk-DT6XLHSE.js";
import "./chunk-KZU5VDTQ.js";
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
} from "./chunk-TUZQ7R7Y.js";
import "./chunk-74QWELJT.js";
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
//# sourceMappingURL=chunk-X5HGBM5D.js.map
