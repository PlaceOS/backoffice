import {
  MetadataDisplayComponent
} from "./chunk-VI2HJ4EO.js";
import "./chunk-UUSLZMYC.js";
import "./chunk-LKMEU5W4.js";
import "./chunk-4AIICFMR.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-57QKMTZD.js";
import "./chunk-OBAM42M5.js";
import "./chunk-D2W6UT77.js";
import "./chunk-IOA5Y4LX.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-KPQPUHLJ.js";
import "./chunk-FEDW4OWZ.js";
import "./chunk-FTKMWGBF.js";
import "./chunk-FFPP635U.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-VBYM4RWJ.js";
import "./chunk-4SLSRLGE.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-755WGQS7.js";
import "./chunk-MWBSPV7N.js";
import "./chunk-2IMPIBRD.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-N55IKFHF.js";
import "./chunk-X7R6A77R.js";
import "./chunk-EZCJ56LP.js";
import "./chunk-OKMGGQII.js";
import "./chunk-FUE3PX3L.js";
import "./chunk-ZS3WH7LD.js";
import "./chunk-2QGG546G.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-2NTIF4N6.js";
import "./chunk-RYVMR3UL.js";
import "./chunk-MJ3UWWSD.js";
import "./chunk-A5YO7EC5.js";
import "./chunk-CSM2PZV4.js";
import "./chunk-7XOD7ZSE.js";
import "./chunk-TPAAVYET.js";
import "./chunk-CNTREK2Y.js";
import "./chunk-YRHVJ22F.js";
import "./chunk-HEABSJS3.js";
import "./chunk-HM3Y6HJR.js";
import "./chunk-GOSX3HNW.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-AFPWYCQQ.js";
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
} from "./chunk-UAS3QR7R.js";
import "./chunk-DPH5AP7B.js";

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
//# sourceMappingURL=chunk-QNFJEHFL.js.map
