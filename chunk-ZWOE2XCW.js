import {
  ItemShellComponent
} from "./chunk-YGJAC5TL.js";
import "./chunk-GGPMLICB.js";
import "./chunk-SHAMKMYE.js";
import "./chunk-W76WBBAI.js";
import "./chunk-2K6E5HKC.js";
import "./chunk-OF3WDS66.js";
import {
  ModuleStateService
} from "./chunk-TKK2KLNV.js";
import "./chunk-6Y22HZSB.js";
import "./chunk-NYNBDMIE.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-EOOX537V.js";
import "./chunk-ZIGK5MIQ.js";
import "./chunk-PWOOG4OS.js";
import "./chunk-JNEMVL3M.js";
import {
  ActiveItemService
} from "./chunk-5VEIPREF.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-4RAQL5SY.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-RPCO7W3D.js";
import {
  isSubsystemUser
} from "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-SHWF4MFV.js";
import "./chunk-32E64OOS.js";
import "./chunk-GR5HLJ6A.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import "./chunk-HBFI5TAK.js";
import {
  i18n
} from "./chunk-RQOHFMTH.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-OGAUD6Z3.js";
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
//# sourceMappingURL=chunk-ZWOE2XCW.js.map
