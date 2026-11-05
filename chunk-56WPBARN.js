import {
  TriggerStateService
} from "./chunk-PH4DJAAI.js";
import "./chunk-PNFKZOBK.js";
import "./chunk-EEJEO3TJ.js";
import {
  ItemShellComponent
} from "./chunk-SFMBS3UJ.js";
import "./chunk-6AR2RIBR.js";
import "./chunk-V5UO66F7.js";
import "./chunk-STSYKDDV.js";
import "./chunk-AN7HGRJ7.js";
import "./chunk-VGOE3NIH.js";
import "./chunk-EE2MXUDL.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-V7WRL6UT.js";
import "./chunk-EOOX537V.js";
import {
  extensionsForItem
} from "./chunk-TEIQNXLB.js";
import "./chunk-3ULMGGKF.js";
import "./chunk-NTUP2G5H.js";
import "./chunk-ITF5SMNK.js";
import "./chunk-ARU6KMF4.js";
import "./chunk-7VVYQCGT.js";
import {
  ActiveItemService
} from "./chunk-ASMGLVAU.js";
import "./chunk-6MIMHZ5M.js";
import "./chunk-2TM7KV6N.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YTMFDRFC.js";
import "./chunk-6SNHHJXA.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-ORF7MGF5.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-JFP7JBTM.js";
import "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-G5H4NNFS.js";
import "./chunk-Y35KTWST.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-HB6BWUYB.js";
import "./chunk-G3URG5GH.js";
import "./chunk-JVQGOL5R.js";
import "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import "./chunk-PZ6AYSMX.js";
import "./chunk-3YG3QG75.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-W43UPD5R.js";
import "./chunk-GHI5JNAC.js";
import "./chunk-IGJQLGMT.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import "./chunk-YFWFSNMM.js";
import "./chunk-PH6YSF2Z.js";
import "./chunk-33ALCS4C.js";
import {
  i18n
} from "./chunk-DIAVKJYC.js";
import "./chunk-OTGYPXXQ.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/triggers/triggers.component.ts
var TriggersComponent = class _TriggersComponent {
  _service = inject(ActiveItemService);
  _state = inject(TriggerStateService);
  name = "triggers";
  instance_count = computed(
    () => this._state.instances().length,
    ...ngDevMode ? [{ debugName: "instance_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = this._service.item;
  tab_list = computed(
    () => [
      {
        id: "about",
        name: i18n("TRIGGERS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "instances",
        name: i18n("TRIGGERS.TAB_INSTANCES"),
        count: this.instance_count(),
        icon: { content: "meeting_room" }
      },
      ...extensionsForItem(this.item(), this.name)
    ],
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function TriggersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TriggersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggersComponent, selectors: [["new-triggers-view"]], decls: 1, vars: 1, consts: [["name", "triggers", "i18n_key", "TRIGGERS", "debug", "", 3, "tabs"]], template: function TriggersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "item-shell", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list());
    }
  }, dependencies: [ItemShellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggersComponent, [{
    type: Component,
    args: [{
      selector: "new-triggers-view",
      template: `
        <item-shell
            name="triggers"
            i18n_key="TRIGGERS"
            [tabs]="tab_list()"
            debug
        />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggersComponent, { className: "TriggersComponent", filePath: "src/app/triggers/triggers.component.ts", lineNumber: 20 });
})();
export {
  TriggersComponent
};
//# debugId=f875063e-dd25-54cd-8b7b-acd92325a582
//# sourceMappingURL=chunk-56WPBARN.js.map
