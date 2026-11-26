import {
  RepositoriesStateService
} from "./chunk-DAOPFRZG.js";
import {
  ItemShellComponent
} from "./chunk-UQK4VOSL.js";
import "./chunk-HVWDE7GG.js";
import "./chunk-HLWAUBYA.js";
import "./chunk-6AOLVNRL.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-ITKHUZ5Z.js";
import {
  extensionsForItem
} from "./chunk-TMDVCVBY.js";
import "./chunk-OEOOGVS4.js";
import "./chunk-YYC573KB.js";
import "./chunk-VWC2VZMX.js";
import "./chunk-2GN5J46I.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-7DLUNGCG.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-BMBCYN44.js";
import "./chunk-5D2EQCRN.js";
import "./chunk-CEDCYECL.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-V4RQEEEC.js";
import "./chunk-CZ3A2OHY.js";
import "./chunk-ZRL2MCOS.js";
import "./chunk-JBQNBPPI.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-NVIFDAFS.js";
import "./chunk-6PURSEHW.js";
import "./chunk-ARF53UMV.js";
import "./chunk-24SP3OZG.js";
import "./chunk-HS2B2TZM.js";
import "./chunk-PESDTUFQ.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-RN3AWFUF.js";
import "./chunk-SBKLZZRV.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-NGPG5OWB.js";
import "./chunk-IDLJ3PCR.js";
import "./chunk-RMI5N2H2.js";
import "./chunk-44FYJ5G4.js";
import "./chunk-V3DC4H2S.js";
import "./chunk-OTF7M54K.js";
import "./chunk-HCAPZU5B.js";
import "./chunk-U6VSGXZ4.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-ZOC3VF7F.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-ODMV6TQA.js";
import "./chunk-762ECDWF.js";
import "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import "./chunk-PRQVSGD2.js";
import {
  PlaceRepositoryType
} from "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-TX7UOGZW.js";
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
//# debugId=93301c7e-5e7a-5331-972e-e2c1040bde79
//# sourceMappingURL=chunk-7P72BB4D.js.map
