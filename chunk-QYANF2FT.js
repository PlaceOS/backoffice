import {
  MetadataDisplayComponent
} from "./chunk-GL7RQEJY.js";
import "./chunk-IEBWVFDF.js";
import "./chunk-LPC62SZ2.js";
import "./chunk-7EGBO6EN.js";
import {
  ActiveItemService
} from "./chunk-FXCPWLWU.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-Q3UICFYO.js";
import "./chunk-BG6DM7UA.js";
import "./chunk-XN7TDCZJ.js";
import "./chunk-TY5J7Y43.js";
import "./chunk-DINJ4675.js";
import "./chunk-KQ433EDT.js";
import "./chunk-YXSE7SMW.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-E6MC4KZ6.js";
import "./chunk-XDJFKACP.js";
import "./chunk-RZD44Q3D.js";
import "./chunk-WMLGKGFL.js";
import "./chunk-AAY5HCL4.js";
import "./chunk-FVTJ3S3I.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-L5HLIWN4.js";
import "./chunk-SFCXA6TE.js";
import "./chunk-V757WW5H.js";
import "./chunk-OC5WJUHE.js";
import "./chunk-5YWFPL3L.js";
import "./chunk-TDC2CY3F.js";
import "./chunk-HBODAAE2.js";
import "./chunk-JO5O5QDI.js";
import "./chunk-PINYTQM5.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-HZCZ56FU.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-Z74W2BVW.js";
import "./chunk-HS5WHROJ.js";
import "./chunk-TGGC4M5W.js";
import "./chunk-QRBYATLU.js";
import "./chunk-GO4IQIUT.js";
import "./chunk-WDJT2D2X.js";
import "./chunk-EXWZU6UK.js";
import "./chunk-NIIXPABD.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import "./chunk-ZTDTALUV.js";
import "./chunk-3RIK6YIR.js";
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
} from "./chunk-N6UZRJAT.js";
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
//# sourceMappingURL=chunk-QYANF2FT.js.map
