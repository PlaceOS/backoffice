import {
  RepositoriesStateService
} from "./chunk-M5R2HOWY.js";
import {
  ItemShellComponent
} from "./chunk-NTF2TOYS.js";
import "./chunk-IWEQGNV3.js";
import "./chunk-IRX5FMJU.js";
import "./chunk-KAUA5IH5.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-RM3S4XI2.js";
import {
  extensionsForItem
} from "./chunk-KANY6BUC.js";
import "./chunk-E44WLG22.js";
import "./chunk-ZYBBENNP.js";
import "./chunk-6WSNTN76.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-BMOGGMVL.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-DHNC5ZME.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-FI42JI5H.js";
import "./chunk-Q2NQGI6L.js";
import "./chunk-NK7WPEHP.js";
import "./chunk-623HKPUU.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-SVCRV2SB.js";
import "./chunk-QSH5WNGI.js";
import "./chunk-ARF53UMV.js";
import "./chunk-AJWP2GTR.js";
import "./chunk-YCY3FSLN.js";
import "./chunk-XMC3ZZ3M.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-6TJHSNQM.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-DRPOBNEO.js";
import "./chunk-I54KCQXM.js";
import "./chunk-PZ3HFH4N.js";
import "./chunk-UONBBRS5.js";
import "./chunk-TXVXL5KT.js";
import "./chunk-OTF7M54K.js";
import "./chunk-R4757DZB.js";
import "./chunk-NVRGEP5J.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import "./chunk-VNEJ3CWU.js";
import {
  i18n
} from "./chunk-UA77DMWK.js";
import "./chunk-PRQVSGD2.js";
import {
  PlaceRepositoryType
} from "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-4FRKWO6Y.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-D65IW4Y5.js";
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
      return item?.repo_type === PlaceRepositoryType.Driver;
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
//# debugId=bbcd251d-1f46-5dcc-afe3-b6690578e365
//# sourceMappingURL=chunk-PQ26JFQW.js.map
