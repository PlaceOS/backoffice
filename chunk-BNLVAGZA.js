import {
  SystemStateService
} from "./chunk-DWCRGYRI.js";
import "./chunk-X2O3T64J.js";
import {
  ItemShellComponent
} from "./chunk-OPVYZOIK.js";
import "./chunk-UYNPLEF4.js";
import "./chunk-PDTMS6JL.js";
import "./chunk-PVL5NDFP.js";
import "./chunk-MXXQVKJB.js";
import "./chunk-OTQ2ODNX.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-5TFFP5TN.js";
import "./chunk-5PG3435R.js";
import "./chunk-QJT4A7RT.js";
import {
  ActiveItemService
} from "./chunk-L7KA5OCT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-REIDPTXZ.js";
import {
  isSubsystemUser
} from "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-3P3QAPUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-52RBTZMB.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
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
//# sourceMappingURL=chunk-BNLVAGZA.js.map
