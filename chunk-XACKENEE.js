import {
  MetadataDisplayComponent
} from "./chunk-UCRL7GXT.js";
import "./chunk-GBRAOH3T.js";
import "./chunk-574YQQIZ.js";
import "./chunk-EER3X7UP.js";
import "./chunk-UVS4UHCY.js";
import {
  ActiveItemService
} from "./chunk-E74E3JF6.js";
import "./chunk-62B5GM77.js";
import "./chunk-ME7N3CRA.js";
import "./chunk-JVOGWECS.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-WAQ4TQSN.js";
import "./chunk-PT5AMIUU.js";
import "./chunk-F45UEFFY.js";
import "./chunk-OKMGGQII.js";
import "./chunk-LMCXBYGC.js";
import "./chunk-NY2WALLY.js";
import "./chunk-QTD6K5LA.js";
import "./chunk-G3IJGLD4.js";
import "./chunk-EIPFTMWR.js";
import "./chunk-EUOPYYFD.js";
import "./chunk-PV3B5VUM.js";
import "./chunk-KSTC3SGQ.js";
import "./chunk-V5PUZAZK.js";
import "./chunk-WVKNYC6X.js";
import "./chunk-IGQAWJ6Y.js";
import "./chunk-TUWOEI35.js";
import "./chunk-AYJXTTVT.js";
import "./chunk-LYZMFOYM.js";
import "./chunk-5RDGWPHM.js";
import "./chunk-WCEMOYFJ.js";
import "./chunk-NZ7ZPGVU.js";
import "./chunk-EZWGQADM.js";
import "./chunk-5OMVQZOP.js";
import "./chunk-PSYHHKS3.js";
import "./chunk-GORY6HKE.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-P3FA5CPP.js";
import "./chunk-Y7HZB3U4.js";
import "./chunk-XX3FQFUN.js";
import "./chunk-5NTI54SQ.js";
import "./chunk-YEGFHODJ.js";
import "./chunk-ZVFWHHSJ.js";
import "./chunk-H4IW3C2Y.js";
import "./chunk-DZQDK6ER.js";
import "./chunk-FVPQ6H6W.js";
import "./chunk-QHKUHZUG.js";
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
} from "./chunk-RDM3X2TD.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zone-metadata.component.ts
function ZoneMetadataComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var ZoneMetadataComponent = class _ZoneMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    const active_item = this._service.active_item;
    return active_item || { id: "" };
  }
  static \u0275fac = function ZoneMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneMetadataComponent, selectors: [["zone-metadata"]], decls: 2, vars: 1, consts: [[1, "p-4"], [3, "item"]], template: function ZoneMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ZoneMetadataComponent_Conditional_1_Template, 1, 1, "metadata-display", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item ? 1 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneMetadataComponent, [{
    type: Component,
    args: [{ selector: "zone-metadata", template: `
        <div class="p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `, imports: [MetadataDisplayComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneMetadataComponent, { className: "ZoneMetadataComponent", filePath: "src/app/zones/zone-metadata.component.ts", lineNumber: 18 });
})();
export {
  ZoneMetadataComponent
};
//# sourceMappingURL=chunk-XACKENEE.js.map
