import {
  RepositoriesStateService
} from "./chunk-ADHVGLRV.js";
import {
  ItemShellComponent
} from "./chunk-2CBDIAV5.js";
import "./chunk-M5LQWIEU.js";
import "./chunk-SHAMKMYE.js";
import "./chunk-W76WBBAI.js";
import "./chunk-2K6E5HKC.js";
import "./chunk-OF3WDS66.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-ZIGK5MIQ.js";
import "./chunk-PWOOG4OS.js";
import "./chunk-3RQH6HLG.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-4RAQL5SY.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-A45RU5CG.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-WZDBMORL.js";
import "./chunk-3CXGWY3Q.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-QUCOHQEE.js";
import "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-QW2S4DDS.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-IEEA6WQX.js";
import "./chunk-32E64OOS.js";
import "./chunk-QR6TO34C.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
import "./chunk-I2BE2RKH.js";
import "./chunk-BE6PEWTW.js";
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
import {
  Os
} from "./chunk-LCM7Z6QA.js";
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
//# sourceMappingURL=chunk-VC35R7QN.js.map
