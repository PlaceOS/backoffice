import {
  SystemStateService
} from "./chunk-UMAOPJW2.js";
import "./chunk-VZUYLT5Q.js";
import "./chunk-IJ7SWPKJ.js";
import "./chunk-OTZBJWIE.js";
import {
  ItemShellComponent
} from "./chunk-VR7PBOV5.js";
import "./chunk-IQI4HZ4Z.js";
import "./chunk-TUCNNZVA.js";
import "./chunk-BVCFDKRS.js";
import "./chunk-WD4DK2S2.js";
import "./chunk-TB4Q5IZA.js";
import "./chunk-YBIBK3UQ.js";
import "./chunk-JPVH57OF.js";
import "./chunk-EIMCBAYP.js";
import "./chunk-YMHTGTAC.js";
import {
  extensionsForItem
} from "./chunk-TEIQNXLB.js";
import "./chunk-EOOX537V.js";
import {
  ActiveItemService
} from "./chunk-JGUOPOO2.js";
import "./chunk-GAJW4KWA.js";
import "./chunk-V6SHQ5T3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-ZY4OTP32.js";
import "./chunk-QOKH3LEO.js";
import "./chunk-EHNRWKWT.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-TU5JPK72.js";
import "./chunk-QBEHGK7J.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-4CN23OQA.js";
import "./chunk-K5IHFRPQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-BQR7GTXP.js";
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
import "./chunk-GZ3GGYHY.js";
import "./chunk-VLLM34JN.js";
import "./chunk-3SXDXCO7.js";
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
//# debugId=4612f6bb-2f87-581f-9af2-4760a7682ccc
//# sourceMappingURL=chunk-Z2FIRLEU.js.map
