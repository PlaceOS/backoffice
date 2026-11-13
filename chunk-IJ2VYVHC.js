import {
  TriggerStateService
} from "./chunk-ZFVCYZY5.js";
import "./chunk-O6XDHI5V.js";
import {
  ItemShellComponent
} from "./chunk-3YXML2LU.js";
import "./chunk-YQHYHJWI.js";
import "./chunk-PDTMS6JL.js";
import "./chunk-PVL5NDFP.js";
import "./chunk-MXXQVKJB.js";
import "./chunk-OTQ2ODNX.js";
import "./chunk-6VCI6ET7.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-G4LF4JH7.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-EOOX537V.js";
import "./chunk-GKLY2P6H.js";
import "./chunk-NTUP2G5H.js";
import "./chunk-5TFFP5TN.js";
import "./chunk-5PG3435R.js";
import "./chunk-QJT4A7RT.js";
import {
  ActiveItemService
} from "./chunk-6JCD3XP2.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-REL7BG6R.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-DS54MEBD.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-AOBLWXUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-RYLWZIJP.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-A7VS2VYD.js";
import "./chunk-XLCDDNWX.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import "./chunk-G7DGN64C.js";
import {
  i18n
} from "./chunk-JJ65W2TY.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-6G3VFYSX.js";
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
//# debugId=c2eb16b7-d944-59d9-a175-04a9d000e761
//# sourceMappingURL=chunk-IJ2VYVHC.js.map
