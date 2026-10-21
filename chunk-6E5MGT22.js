import {
  MetadataDisplayComponent
} from "./chunk-JFNTAUJF.js";
import "./chunk-LC2TDMBC.js";
import "./chunk-J4NMPQQL.js";
import "./chunk-GKFMONUV.js";
import "./chunk-FTR6ETPD.js";
import {
  ActiveItemService
} from "./chunk-HFNTE4RU.js";
import "./chunk-2IAW3STZ.js";
import "./chunk-XTSZYT73.js";
import "./chunk-ELADOTTP.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-5FUTLUB6.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-DC3YQFAN.js";
import "./chunk-57T7HDE5.js";
import "./chunk-CHWIWBVC.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-3MADANAK.js";
import "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-LLRNJ6M2.js";
import "./chunk-PCXSBO64.js";
import "./chunk-R3LFGYBE.js";
import "./chunk-VDHJ5GEA.js";
import "./chunk-3KN73EXG.js";
import "./chunk-PK5A7L3I.js";
import "./chunk-3ZSLWILO.js";
import "./chunk-PIRFEBZC.js";
import "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import "./chunk-ZQLZS64A.js";
import "./chunk-27URU2VR.js";
import "./chunk-TIDB3WEY.js";
import "./chunk-YGX4BAWE.js";
import "./chunk-5AOS3OUL.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-LNM3OQLE.js";
import "./chunk-GHTXYZBC.js";
import "./chunk-PQUI6ASX.js";
import "./chunk-OEQM55HS.js";
import "./chunk-5JSUWHJB.js";
import "./chunk-QAR3ZGTS.js";
import "./chunk-33GRF44L.js";
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
} from "./chunk-TCVU4336.js";
import "./chunk-RQBZITXC.js";

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
//# debugId=8492bebb-6af3-535a-b45e-ba5da6805448
//# sourceMappingURL=chunk-6E5MGT22.js.map
