import {
  RepositoriesStateService
} from "./chunk-6Y6NKJ6R.js";
import {
  ItemShellComponent
} from "./chunk-HPEN4CDM.js";
import "./chunk-K47LMT5P.js";
import "./chunk-PDTMS6JL.js";
import "./chunk-PVL5NDFP.js";
import "./chunk-MXXQVKJB.js";
import "./chunk-OTQ2ODNX.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-5TFFP5TN.js";
import "./chunk-5PG3435R.js";
import "./chunk-YMSUF7BT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-DWR7STNS.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-NSPWPCTJ.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-NA6URCKI.js";
import "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-2LLCGR7C.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-LJNKRCR4.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-CKZDCKLD.js";
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
import {
  Os
} from "./chunk-LCM7Z6QA.js";
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
        <item-shell name="repositories" i18n_key="REPOS" [tabs]="tab_list()" />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoriesComponent, { className: "RepositoriesComponent", filePath: "src/app/repositories/repositories.component.ts", lineNumber: 16 });
})();
export {
  RepositoriesComponent
};
//# debugId=22b1dcdb-8b5c-5545-87ef-aff87398d7db
//# sourceMappingURL=chunk-4SQWJIYY.js.map
