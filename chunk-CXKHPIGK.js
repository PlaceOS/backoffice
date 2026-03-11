import {
  MetadataDisplayComponent
} from "./chunk-OKCGZR75.js";
import "./chunk-BOZWZSBC.js";
import "./chunk-M4MAOLPJ.js";
import {
  ActiveItemService
} from "./chunk-M7NLJAHW.js";
import "./chunk-CVTKGGYU.js";
import "./chunk-J533RESC.js";
import "./chunk-RLXVU5XS.js";
import "./chunk-WQDH4FC7.js";
import "./chunk-5HVRL3YW.js";
import "./chunk-DUBO3IVW.js";
import "./chunk-X6YR5W3O.js";
import "./chunk-FVY2HZHZ.js";
import "./chunk-YOTQ4BLS.js";
import "./chunk-42ELPS7F.js";
import "./chunk-DSY7HAXR.js";
import "./chunk-ZMDQYXR3.js";
import "./chunk-DML52F3R.js";
import "./chunk-NFL4XBXL.js";
import "./chunk-W3IBXMGQ.js";
import "./chunk-WBQWWT72.js";
import "./chunk-HNDZUABS.js";
import "./chunk-WBMBQ5VJ.js";
import "./chunk-PLD3S2JC.js";
import "./chunk-UX55AMWK.js";
import "./chunk-HJK3TVOT.js";
import "./chunk-46BPCRJ3.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-OSF25IC4.js";
import "./chunk-BGNISMYA.js";
import "./chunk-KFG47F7M.js";
import "./chunk-6TUHRQL6.js";
import "./chunk-MB6FY2QK.js";
import "./chunk-BUKXKXBA.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-7MGBMVY7.js";
import "./chunk-WUACCZF3.js";
import "./chunk-MLPBELPV.js";
import "./chunk-WOZB2ZJ7.js";
import "./chunk-F4U4NVRY.js";
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
} from "./chunk-E55B7SJP.js";
import "./chunk-WQVS62YG.js";
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
//# sourceMappingURL=chunk-CXKHPIGK.js.map
