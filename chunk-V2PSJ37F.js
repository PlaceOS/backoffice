import {
  MetadataDisplayComponent
} from "./chunk-VBHR4CFG.js";
import "./chunk-74EQXVRO.js";
import "./chunk-MX272X5O.js";
import "./chunk-RQSNRZDW.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-QHSAO57R.js";
import "./chunk-34TYXCD2.js";
import "./chunk-XYVV7MWV.js";
import "./chunk-XBHEJBLP.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-WRLTJCLW.js";
import "./chunk-FTY3EIHT.js";
import "./chunk-DVQI66VA.js";
import "./chunk-UBLR53FR.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-XUITKHVI.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-ORKO4FIK.js";
import "./chunk-UVVPQNTD.js";
import "./chunk-6IWBYUDE.js";
import "./chunk-WG3AXU23.js";
import "./chunk-6HM5H6UH.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-2W6BZ6LN.js";
import "./chunk-OKMGGQII.js";
import "./chunk-PTZ46HPL.js";
import "./chunk-2PEJLWYX.js";
import "./chunk-DT2ZHKF4.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-BYWH3GLU.js";
import "./chunk-ABONVDIB.js";
import "./chunk-SVKHUIUH.js";
import "./chunk-QRHAUA7K.js";
import "./chunk-3GQLVTAP.js";
import "./chunk-U4DS3ATP.js";
import "./chunk-A5D2ZFG3.js";
import "./chunk-EITG46SC.js";
import "./chunk-EFIMJKOP.js";
import "./chunk-32YXDKI3.js";
import "./chunk-KWINWSBN.js";
import "./chunk-UV7WJQ5D.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-7XKIGCHY.js";
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
} from "./chunk-DYV6NXUQ.js";
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
//# sourceMappingURL=chunk-V2PSJ37F.js.map
