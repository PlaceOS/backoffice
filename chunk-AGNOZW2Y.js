import {
  TriggerStateService
} from "./chunk-MS37BZQ4.js";
import "./chunk-PNFKZOBK.js";
import "./chunk-KO4C3S7W.js";
import "./chunk-OTZBJWIE.js";
import {
  ItemShellComponent
} from "./chunk-HGEJLU6X.js";
import "./chunk-A7R2ZYGB.js";
import "./chunk-TUCNNZVA.js";
import "./chunk-BVCFDKRS.js";
import "./chunk-WD4DK2S2.js";
import "./chunk-TB4Q5IZA.js";
import "./chunk-YBIBK3UQ.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-2LGRMIHB.js";
import "./chunk-OUXIFBOV.js";
import "./chunk-YMHTGTAC.js";
import {
  extensionsForItem
} from "./chunk-TEIQNXLB.js";
import "./chunk-FTR6ETPD.js";
import {
  ActiveItemService
} from "./chunk-E3RFBRXX.js";
import "./chunk-GAJW4KWA.js";
import "./chunk-V6SHQ5T3.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-NTUP2G5H.js";
import "./chunk-ZY4OTP32.js";
import "./chunk-2IQYSDB5.js";
import "./chunk-EHNRWKWT.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-QBEHGK7J.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-4CN23OQA.js";
import "./chunk-K5IHFRPQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-6QIICYIK.js";
import "./chunk-GR7PR5Q6.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-FK3PXAKX.js";
import "./chunk-FSFNWGQP.js";
import "./chunk-RY3VY3I7.js";
import "./chunk-W2EPZJRF.js";
import "./chunk-PSLPWDNG.js";
import "./chunk-HAWZID7H.js";
import "./chunk-2RUCGFPD.js";
import "./chunk-3SL5US3K.js";
import "./chunk-5BJVRHWW.js";
import "./chunk-VLLM34JN.js";
import "./chunk-55LQ6V7M.js";
import "./chunk-HASFJPLN.js";
import "./chunk-7CC5FNME.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-QRPWL2EI.js";
import "./chunk-AJCRFHSH.js";
import "./chunk-4ZLGHXUI.js";
import {
  i18n
} from "./chunk-XJOCECBM.js";
import "./chunk-J5ZLUQMI.js";
import "./chunk-OTGYPXXQ.js";
import "./chunk-NUJGQXME.js";
import "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import "./chunk-DKYBNEOC.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-HGOGRFKW.js";
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
//# debugId=3cc0ad74-7210-5698-bbbc-9f85c725296a
//# sourceMappingURL=chunk-AGNOZW2Y.js.map
