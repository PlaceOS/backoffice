import {
  ItemShellComponent
} from "./chunk-SFMBS3UJ.js";
import "./chunk-6AR2RIBR.js";
import "./chunk-V5UO66F7.js";
import "./chunk-STSYKDDV.js";
import "./chunk-AN7HGRJ7.js";
import "./chunk-VGOE3NIH.js";
import {
  ModuleStateService
} from "./chunk-43K327HU.js";
import "./chunk-EE2MXUDL.js";
import "./chunk-V7WRL6UT.js";
import "./chunk-EOOX537V.js";
import {
  extensionsForItem
} from "./chunk-TEIQNXLB.js";
import "./chunk-ITF5SMNK.js";
import "./chunk-ARU6KMF4.js";
import "./chunk-7VVYQCGT.js";
import {
  ActiveItemService
} from "./chunk-ASMGLVAU.js";
import "./chunk-6MIMHZ5M.js";
import "./chunk-2TM7KV6N.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-ORF7MGF5.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-JFP7JBTM.js";
import "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-G5H4NNFS.js";
import {
  isSubsystemUser
} from "./chunk-Y35KTWST.js";
import "./chunk-2HWH2YE2.js";
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
//# debugId=94a00d23-8bf3-5c35-b70d-367b4694372a
//# sourceMappingURL=chunk-3F7HSKMT.js.map
