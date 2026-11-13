import {
  SystemStateService
} from "./chunk-QQUBLBBG.js";
import "./chunk-IKYXRM55.js";
import {
  ItemShellComponent
} from "./chunk-YGJAC5TL.js";
import "./chunk-GGPMLICB.js";
import "./chunk-SHAMKMYE.js";
import "./chunk-W76WBBAI.js";
import "./chunk-2K6E5HKC.js";
import "./chunk-OF3WDS66.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
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
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
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

// src/app/systems/systems.component.ts
var SystemsComponent = class _SystemsComponent {
  _service = inject(SystemStateService);
  _item = inject(ActiveItemService);
  item = computed(
    () => this._item.active_item$(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  name = "systems";
  counts = this._service.counts;
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
        name: i18n("SYSTEMS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "modules",
        name: i18n("SYSTEMS.TAB_MODULES"),
        count: this.counts()?.devices ?? "?",
        icon: { content: "tablet" }
      },
      {
        id: "zones",
        name: i18n("SYSTEMS.TAB_ZONES"),
        count: this.counts()?.zones ?? "?",
        icon: { content: "layers" }
      },
      {
        id: "triggers",
        name: i18n("SYSTEMS.TAB_TRIGGERS"),
        count: this.counts()?.triggers ?? "?",
        icon: { content: "timer" }
      },
      {
        id: "metadata",
        name: i18n("SYSTEMS.TAB_METADATA"),
        count: this.counts()?.metadata ?? "?",
        icon: { content: "code_blocks" }
      },
      {
        id: "history",
        name: i18n("SYSTEMS.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      }
    ].concat(this.extensions()).filter((tab) => !isSubsystemUser() || !["history"].includes(tab.id)),
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function SystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemsComponent, selectors: [["new-systems-view"]], decls: 1, vars: 1, consts: [["name", "systems", "i18n_key", "SYSTEMS", "bulk", "", "debug", "", 3, "tabs"]], template: function SystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "item-shell", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list());
    }
  }, dependencies: [ItemShellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemsComponent, [{
    type: Component,
    args: [{
      selector: "new-systems-view",
      template: `
        <item-shell
            name="systems"
            i18n_key="SYSTEMS"
            [tabs]="tab_list()"
            bulk
            debug
        />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemsComponent, { className: "SystemsComponent", filePath: "src/app/systems/systems.component.ts", lineNumber: 24 });
})();
export {
  SystemsComponent
};
//# debugId=1eca5c3b-852a-589e-861b-5af144d5c220
//# sourceMappingURL=chunk-2QMTLS57.js.map
