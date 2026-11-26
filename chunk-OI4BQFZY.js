import {
  TriggerStateService
} from "./chunk-K7EHYOY3.js";
import "./chunk-MNCIKJ64.js";
import {
  ItemShellComponent
} from "./chunk-UQK4VOSL.js";
import "./chunk-HVWDE7GG.js";
import "./chunk-HLWAUBYA.js";
import "./chunk-6AOLVNRL.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-ITKHUZ5Z.js";
import "./chunk-J7H74YPM.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-PCGLPD4F.js";
import {
  extensionsForItem
} from "./chunk-TMDVCVBY.js";
import "./chunk-EOOX537V.js";
import "./chunk-HAVYYU4L.js";
import "./chunk-NTUP2G5H.js";
import "./chunk-OEOOGVS4.js";
import "./chunk-YYC573KB.js";
import "./chunk-VWC2VZMX.js";
import "./chunk-2GN5J46I.js";
import "./chunk-GVPYT7HY.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import {
  ActiveItemService
} from "./chunk-BMBCYN44.js";
import "./chunk-5D2EQCRN.js";
import "./chunk-Y4WKCRF4.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-CZ3A2OHY.js";
import "./chunk-ZRL2MCOS.js";
import "./chunk-JBQNBPPI.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-NVIFDAFS.js";
import "./chunk-6PURSEHW.js";
import "./chunk-ARF53UMV.js";
import "./chunk-24SP3OZG.js";
import "./chunk-HS2B2TZM.js";
import "./chunk-PESDTUFQ.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-RN3AWFUF.js";
import "./chunk-SBKLZZRV.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-NGPG5OWB.js";
import "./chunk-IDLJ3PCR.js";
import "./chunk-RMI5N2H2.js";
import "./chunk-44FYJ5G4.js";
import "./chunk-V3DC4H2S.js";
import "./chunk-OTF7M54K.js";
import "./chunk-HCAPZU5B.js";
import "./chunk-U6VSGXZ4.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-ZOC3VF7F.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-ODMV6TQA.js";
import "./chunk-762ECDWF.js";
import "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-TX7UOGZW.js";
import "./chunk-GB3VUBDQ.js";
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
//# debugId=40b1f91f-b3dd-5b4b-bdab-14f8cbb58087
//# sourceMappingURL=chunk-OI4BQFZY.js.map
