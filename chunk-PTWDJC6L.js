import {
  MetadataDisplayComponent
} from "./chunk-2PJKFKVN.js";
import "./chunk-GSAC7KS7.js";
import "./chunk-NWXVHJGI.js";
import {
  ActiveItemService
} from "./chunk-KS7VWNJ3.js";
import "./chunk-M6YSSFSQ.js";
import "./chunk-J533RESC.js";
import "./chunk-ASEDAJX7.js";
import "./chunk-EU6BJWSV.js";
import "./chunk-A6YVYW6Z.js";
import "./chunk-6LZJUWAF.js";
import "./chunk-IPFKAE6I.js";
import "./chunk-XMOSXGSS.js";
import "./chunk-O7M36TBF.js";
import "./chunk-IENVBRDD.js";
import "./chunk-47VQRW47.js";
import "./chunk-MQRKFLAH.js";
import "./chunk-BTQVPL2O.js";
import "./chunk-7NXQDI6Y.js";
import "./chunk-AQ73NF7U.js";
import "./chunk-G3XUWVSE.js";
import "./chunk-WZQIUEN6.js";
import "./chunk-U5GSCUGC.js";
import "./chunk-YYQPF64A.js";
import "./chunk-P2E4DW3S.js";
import "./chunk-G2AYWVE3.js";
import "./chunk-DC2GHC3J.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-F6FT7HSH.js";
import "./chunk-H3F3PJXF.js";
import "./chunk-SD6ATYW5.js";
import "./chunk-W7LQTE35.js";
import "./chunk-XC26D6PK.js";
import "./chunk-TW2VJMUH.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-IWTC3X52.js";
import "./chunk-UQSUXGIZ.js";
import "./chunk-IW5S5EUB.js";
import "./chunk-4ID7G33D.js";
import "./chunk-EXPUHWVW.js";
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
} from "./chunk-IGWUWPZB.js";
import "./chunk-WQHITSMN.js";
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
    const active_item = this._service.active_item;
    return active_item || { id: "" };
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
//# sourceMappingURL=chunk-PTWDJC6L.js.map
