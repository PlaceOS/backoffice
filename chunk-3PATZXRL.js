import {
  MetadataDisplayComponent
} from "./chunk-EPJX2LQ4.js";
import "./chunk-3G4QC355.js";
import "./chunk-AH64ABG3.js";
import "./chunk-XUBVIQGQ.js";
import {
  ActiveItemService
} from "./chunk-DDBSWEIC.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-RKY23HSE.js";
import "./chunk-7NDCHFOB.js";
import "./chunk-XVFVAW3Y.js";
import "./chunk-PCFI5QOQ.js";
import "./chunk-WWY5WMTY.js";
import "./chunk-JAMMTH5K.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-LNIYAS5O.js";
import "./chunk-7JIOXWGJ.js";
import "./chunk-7GTI4RRT.js";
import "./chunk-BVAQ3KBJ.js";
import "./chunk-V3LOQHMH.js";
import "./chunk-I55NGSFI.js";
import "./chunk-MVHEPUBI.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-SEO2LXOK.js";
import "./chunk-AHMBEMXE.js";
import "./chunk-6QZVPNC3.js";
import "./chunk-2SRIA4UK.js";
import "./chunk-X6EP7JXK.js";
import "./chunk-RYWQOUT3.js";
import "./chunk-N7YQCQZM.js";
import "./chunk-ZEKBCAP7.js";
import "./chunk-EQNAGVPB.js";
import "./chunk-JKE4D5KH.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-TH36Z5QV.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-J6BBXARK.js";
import "./chunk-EVUO4PXU.js";
import "./chunk-RMYYKPNF.js";
import "./chunk-ALQ3QZS6.js";
import "./chunk-TPBAO5IV.js";
import "./chunk-HQA27L6T.js";
import "./chunk-ERVNLYZR.js";
import "./chunk-4HEIKSFD.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-YTRY35Y7.js";
import "./chunk-43FRBZB3.js";
import "./chunk-3LH3QF7A.js";
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
} from "./chunk-LPT3PWXX.js";
import "./chunk-KWSTWQNB.js";

// src/app/users/user-metadata.component.ts
function UserMetadataComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var UserMetadataComponent = class _UserMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    const active_item = this._service.active_item;
    return active_item || { id: "" };
  }
  static \u0275fac = function UserMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMetadataComponent, selectors: [["user-metadata"]], decls: 2, vars: 1, consts: [[1, "h-full", "w-full", "p-4"], [3, "item"]], template: function UserMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, UserMetadataComponent_Conditional_1_Template, 1, 1, "metadata-display", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item ? 1 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMetadataComponent, [{
    type: Component,
    args: [{ selector: "user-metadata", template: `
        <div class="h-full w-full p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `, imports: [MetadataDisplayComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMetadataComponent, { className: "UserMetadataComponent", filePath: "src/app/users/user-metadata.component.ts", lineNumber: 18 });
})();
export {
  UserMetadataComponent
};
//# sourceMappingURL=chunk-3PATZXRL.js.map
