import {
  RepositoriesStateService
} from "./chunk-T2AHGZZE.js";
import {
  ItemShellComponent
} from "./chunk-VR7PBOV5.js";
import "./chunk-IQI4HZ4Z.js";
import "./chunk-TUCNNZVA.js";
import "./chunk-BVCFDKRS.js";
import "./chunk-WD4DK2S2.js";
import "./chunk-TB4Q5IZA.js";
import "./chunk-YBIBK3UQ.js";
import "./chunk-YMHTGTAC.js";
import {
  extensionsForItem
} from "./chunk-TEIQNXLB.js";
import "./chunk-JGUOPOO2.js";
import "./chunk-GAJW4KWA.js";
import "./chunk-V6SHQ5T3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-A2J6MOMU.js";
import "./chunk-ZY4OTP32.js";
import "./chunk-73ZIQ5ZT.js";
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
import {
  Os
} from "./chunk-OTGYPXXQ.js";
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

// src/app/repositories/repositories.component.ts
var RepositoriesComponent = class _RepositoriesComponent {
  _service = inject(RepositoriesStateService);
  name = "repositories";
  item = this._service.item;
  driver_list_loading = this._service.loading;
  driver_list = this._service.driver_list;
  has_changelog = this._service.has_changelog;
  driver_count = computed(
    () => {
      const list = this.driver_list();
      return list ? list.length : -1;
    },
    ...ngDevMode ? [{ debugName: "driver_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  is_driver_repo = computed(
    () => {
      const item = this.item();
      return item?.repo_type === Os.Driver || item?.type === Os.Driver;
    },
    ...ngDevMode ? [{ debugName: "is_driver_repo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  extensions = computed(
    () => extensionsForItem(this.item(), this.name),
    ...ngDevMode ? [{ debugName: "extensions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tab_list = computed(
    () => [
      ...!this.is_driver_repo() ? [
        {
          id: "about",
          name: i18n("REPOS.TAB_ABOUT"),
          icon: { content: "info" }
        },
        ...this.has_changelog() ? [
          {
            id: "changelog",
            name: i18n("COMMON.CHANGELOG"),
            icon: { content: "history" }
          }
        ] : []
      ] : [
        {
          id: "about",
          name: i18n("REPOS.TAB_ABOUT"),
          icon: { content: "info" }
        },
        {
          id: "drivers",
          name: i18n("REPOS.TAB_DRIVERS"),
          count: Math.max(this.driver_count(), 0),
          loading: this.driver_list_loading(),
          icon: { content: "meeting_room" }
        }
      ],
      ...this.extensions()
    ],
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function RepositoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepositoriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoriesComponent, selectors: [["new-repositories-view"]], decls: 1, vars: 1, consts: [["name", "repositories", "i18n_key", "REPOS", 3, "tabs"]], template: function RepositoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "item-shell", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list());
    }
  }, dependencies: [ItemShellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoriesComponent, [{
    type: Component,
    args: [{
      selector: "new-repositories-view",
      template: `
        <item-shell
            name="repositories"
            i18n_key="REPOS"
            [tabs]="tab_list()"
        />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoriesComponent, { className: "RepositoriesComponent", filePath: "src/app/repositories/repositories.component.ts", lineNumber: 20 });
})();
export {
  RepositoriesComponent
};
//# debugId=b033350b-cdc1-5798-85b4-7284648485da
//# sourceMappingURL=chunk-KX6AHJ62.js.map
