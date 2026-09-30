import {
  MetadataDisplayComponent
} from "./chunk-P3TXWDBF.js";
import "./chunk-AJZRN6ZU.js";
import "./chunk-CNDKDSJP.js";
import "./chunk-VVOZ6GK6.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-OCX3MX3N.js";
import "./chunk-EVOAWPGI.js";
import "./chunk-QOV5AADT.js";
import "./chunk-3D43EOHJ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-KVQ45LGL.js";
import "./chunk-ZQOGPWQ4.js";
import "./chunk-2C722Z46.js";
import "./chunk-G27ITG57.js";
import "./chunk-T65YNYD6.js";
import "./chunk-NJ5D3OKI.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-XDFS3U2K.js";
import "./chunk-7ASR6EUL.js";
import "./chunk-F34GYKGE.js";
import "./chunk-AHOW6IEF.js";
import "./chunk-6XUWFA3U.js";
import "./chunk-B6WUENCG.js";
import "./chunk-7AGLUCJP.js";
import "./chunk-OKMGGQII.js";
import "./chunk-IKL3NBUR.js";
import "./chunk-BIF7G7TH.js";
import "./chunk-KJXWRK4F.js";
import "./chunk-G3IJGLD4.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-B77ZBLFJ.js";
import "./chunk-NSY6RGIG.js";
import "./chunk-P4NPR2MV.js";
import "./chunk-HAVIORKV.js";
import "./chunk-BKGOEYCZ.js";
import "./chunk-6V3EPDQC.js";
import "./chunk-35RV2TRF.js";
import "./chunk-G6JZQ6PF.js";
import "./chunk-YZCKBLZP.js";
import "./chunk-Q56IG7JO.js";
import "./chunk-XRQ22N5K.js";
import "./chunk-LAM4IRA6.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-QYMVVG4Y.js";
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
} from "./chunk-6NXCBA4X.js";
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
//# sourceMappingURL=chunk-SY36TRAF.js.map
