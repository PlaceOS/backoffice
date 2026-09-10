import {
  MetadataDisplayComponent
} from "./chunk-PAD2PRXK.js";
import "./chunk-OYSBQ2V2.js";
import "./chunk-BN5RPXPW.js";
import "./chunk-OFEAMJB2.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-GGKMSF3S.js";
import "./chunk-HD77HKEN.js";
import "./chunk-QZWPSKLY.js";
import "./chunk-DE6WUI2H.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-6E3FUNTM.js";
import "./chunk-LGCOJQOV.js";
import "./chunk-5XY3WE42.js";
import "./chunk-UPJHMA72.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-MTASCYQ7.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-DOBZHCJ3.js";
import "./chunk-IXMIR4XK.js";
import "./chunk-PKJVK52W.js";
import "./chunk-Q2OAZ637.js";
import "./chunk-QWPPAGOZ.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-EPIXDTWN.js";
import "./chunk-OKMGGQII.js";
import "./chunk-FSWONNLF.js";
import "./chunk-4FMA4IVG.js";
import "./chunk-HAY6XAXW.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-Q2BV2GZB.js";
import "./chunk-NHXLW3Z3.js";
import "./chunk-WXUWESJ2.js";
import "./chunk-7NXN4G42.js";
import "./chunk-4XBU66YH.js";
import "./chunk-BTIO7C57.js";
import "./chunk-NL7TX5FO.js";
import "./chunk-O5B6FUTE.js";
import "./chunk-JCXXAJP2.js";
import "./chunk-N557G3HM.js";
import "./chunk-ETM3LPJ2.js";
import "./chunk-ISKFUBZN.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-U7MJINT7.js";
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
} from "./chunk-Z45QSLBL.js";
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
//# sourceMappingURL=chunk-VY5RXZ3G.js.map
