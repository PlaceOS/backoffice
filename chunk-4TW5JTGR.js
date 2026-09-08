import {
  MetadataDisplayComponent
} from "./chunk-UVA3QA25.js";
import "./chunk-7YOPAQU7.js";
import "./chunk-HFVGZQWU.js";
import "./chunk-PPSBIOLW.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-MGOMI3PH.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-YKN47ASX.js";
import "./chunk-CMPUMPCI.js";
import "./chunk-Z25RHTDR.js";
import "./chunk-KFZU3KXK.js";
import "./chunk-OKMGGQII.js";
import "./chunk-KFAYJNYM.js";
import "./chunk-B6SYLV67.js";
import "./chunk-GHXY7UPK.js";
import "./chunk-NPLBDM5X.js";
import "./chunk-6REKYOZH.js";
import "./chunk-5PVSDZF5.js";
import "./chunk-OBUVMY2G.js";
import "./chunk-FNIHXBH6.js";
import "./chunk-Z4VDKL5H.js";
import "./chunk-J2NWBVJP.js";
import "./chunk-AU73AJPX.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-W5JX6GNG.js";
import "./chunk-HZ4CW3MH.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-WMROMWRC.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-KP7S2BKY.js";
import "./chunk-GQLTM7WR.js";
import "./chunk-OFY27JJN.js";
import "./chunk-PMCUKEQN.js";
import "./chunk-GUSS6FMS.js";
import "./chunk-CUH55UDS.js";
import "./chunk-PGRXJPQH.js";
import "./chunk-VJYIRZE2.js";
import "./chunk-JY3XOBCB.js";
import "./chunk-MX73KXEQ.js";
import "./chunk-OW7EMPYT.js";
import "./chunk-ABJA4RZJ.js";
import "./chunk-OKWIMCQ5.js";
import "./chunk-4GUXUQHZ.js";
import "./chunk-VRTCIQRQ.js";
import "./chunk-YAIVIMYH.js";
import "./chunk-FFJ3WN6R.js";
import "./chunk-2ZXXLDC2.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-G24R4OYM.js";
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
} from "./chunk-2GWPJS4J.js";
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
//# sourceMappingURL=chunk-4TW5JTGR.js.map
