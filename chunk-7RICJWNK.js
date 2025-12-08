import {
  MetadataDisplayComponent
} from "./chunk-ADOZT3XM.js";
import "./chunk-DFQAAG7G.js";
import "./chunk-J7EPUUAN.js";
import {
  ActiveItemService
} from "./chunk-5OZMWC5V.js";
import "./chunk-UCBZDRWT.js";
import "./chunk-3LWTF2PE.js";
import "./chunk-IMFNC5LD.js";
import "./chunk-W3G23CBG.js";
import "./chunk-VKAFJ4MK.js";
import "./chunk-4K2ZV7BP.js";
import "./chunk-QU4UI3CX.js";
import "./chunk-54EBFT32.js";
import "./chunk-TY7WPPBB.js";
import "./chunk-XUNDLFMD.js";
import "./chunk-WNITRNVL.js";
import "./chunk-455FOZWA.js";
import "./chunk-RFIJAS3V.js";
import "./chunk-NGLYGBSE.js";
import "./chunk-563VOQEB.js";
import "./chunk-C5EPULW7.js";
import "./chunk-JVJWK7OL.js";
import "./chunk-U4CQSA3Q.js";
import "./chunk-OCEHEAUM.js";
import "./chunk-EPKFBMI6.js";
import "./chunk-QQTCTN2T.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-IWX2OQVL.js";
import "./chunk-QVTLGZEG.js";
import "./chunk-5X4EUYHA.js";
import "./chunk-3TSVSCMW.js";
import "./chunk-GX3YM4OA.js";
import "./chunk-HWY7SC7O.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-JNHGG7IP.js";
import "./chunk-GIPOOO6B.js";
import "./chunk-KSJPNMKV.js";
import "./chunk-Z76VKXD6.js";
import "./chunk-ZGUCA4AJ.js";
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
} from "./chunk-3J5ZMTAK.js";
import "./chunk-VYXW4D3Z.js";

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
//# sourceMappingURL=chunk-7RICJWNK.js.map
