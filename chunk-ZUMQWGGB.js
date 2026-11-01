import {
  ItemShellComponent
} from "./chunk-HGEJLU6X.js";
import "./chunk-A7R2ZYGB.js";
import "./chunk-TUCNNZVA.js";
import "./chunk-BVCFDKRS.js";
import "./chunk-WD4DK2S2.js";
import "./chunk-TB4Q5IZA.js";
import "./chunk-YBIBK3UQ.js";
import {
  ModuleStateService
} from "./chunk-B4FUSIIZ.js";
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
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-ZY4OTP32.js";
import "./chunk-QBEHGK7J.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-4CN23OQA.js";
import "./chunk-K5IHFRPQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-6QIICYIK.js";
import {
  isSubsystemUser
} from "./chunk-GR7PR5Q6.js";
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

// src/app/modules/modules.component.ts
var ModulesComponent = class _ModulesComponent {
  _service = inject(ActiveItemService);
  _module_state = inject(ModuleStateService);
  name = "modules";
  item = computed(
    () => this._service.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Number of systems for the active device */
  system_count = this._module_state.system_total;
  extensions = computed(
    () => extensionsForItem(this.item(), this.name),
    ...ngDevMode ? [{ debugName: "extensions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tab_list = computed(
    () => [
      {
        id: "about",
        name: i18n("MODULES.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "systems",
        name: i18n("MODULES.TAB_SYSTEMS"),
        count: this.system_count(),
        icon: { content: "meeting_room" }
      },
      {
        id: "history",
        name: i18n("MODULES.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      },
      ...this.extensions()
    ].filter((tab) => !isSubsystemUser() || !["history"].includes(tab.id)),
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function ModulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModulesComponent, selectors: [["new-modules-view"]], decls: 1, vars: 1, consts: [["name", "modules", "i18n_key", "MODULES", "debug", "", 3, "tabs"]], template: function ModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "item-shell", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list());
    }
  }, dependencies: [ItemShellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModulesComponent, [{
    type: Component,
    args: [{
      selector: "new-modules-view",
      template: `
        <item-shell
            name="modules"
            i18n_key="MODULES"
            [tabs]="tab_list()"
            debug
        />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModulesComponent, { className: "ModulesComponent", filePath: "src/app/modules/modules.component.ts", lineNumber: 22 });
})();
export {
  ModulesComponent
};
//# debugId=0ea2c9d1-efe0-51e3-9732-5b82ca3b07b3
//# sourceMappingURL=chunk-ZUMQWGGB.js.map
