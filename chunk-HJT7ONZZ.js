import {
  MetadataDisplayComponent
} from "./chunk-AFZZVYD7.js";
import "./chunk-5IWU6JGB.js";
import "./chunk-BH7V63NO.js";
import {
  ActiveItemService
} from "./chunk-XBMB5PK2.js";
import "./chunk-KVAZG2CB.js";
import "./chunk-SU4A27HA.js";
import "./chunk-JAVYI6DR.js";
import "./chunk-ZKOSV5C6.js";
import "./chunk-4SRLAZCZ.js";
import "./chunk-WGQKHF74.js";
import "./chunk-FUSKLN5J.js";
import "./chunk-W4446ZI7.js";
import "./chunk-UB5TGMZA.js";
import "./chunk-LYW23EPM.js";
import "./chunk-D444NJCZ.js";
import "./chunk-VWFQ2G7G.js";
import "./chunk-LD7UQSHX.js";
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
import "./chunk-KGM4YXXK.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty
} from "./chunk-C25AKIFS.js";
import "./chunk-KWSTWQNB.js";

// src/app/users/user-metadata.component.ts
function UserMetadataComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var UserMetadataComponent = class _UserMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function UserMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMetadataComponent, selectors: [["user-metadata"]], decls: 1, vars: 1, consts: [[3, "item"]], template: function UserMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserMetadataComponent_Conditional_0_Template, 1, 1, "metadata-display", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.item ? 0 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMetadataComponent, [{
    type: Component,
    args: [{ selector: "user-metadata", template: `
        @if (item) {
            <metadata-display [item]="item" />
        }
    `, imports: [MetadataDisplayComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMetadataComponent, { className: "UserMetadataComponent", filePath: "src/app/users/user-metadata.component.ts", lineNumber: 16 });
})();
export {
  UserMetadataComponent
};
//# sourceMappingURL=chunk-HJT7ONZZ.js.map
