import {
  ZonesStateService
} from "./chunk-USC6FOAH.js";
import "./chunk-3MVPJ5KO.js";
import "./chunk-F6G2Y5FY.js";
import "./chunk-X2O3T64J.js";
import {
  ItemShellComponent
} from "./chunk-3YXML2LU.js";
import "./chunk-YQHYHJWI.js";
import "./chunk-PDTMS6JL.js";
import "./chunk-PVL5NDFP.js";
import "./chunk-MXXQVKJB.js";
import "./chunk-OTQ2ODNX.js";
import "./chunk-GEOS7XT5.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-5TFFP5TN.js";
import "./chunk-5PG3435R.js";
import "./chunk-QJT4A7RT.js";
import {
  ActiveItemService
} from "./chunk-6JCD3XP2.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-3SEQSBXV.js";
import "./chunk-NSPWPCTJ.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import {
  BackofficeUsersService
} from "./chunk-DS54MEBD.js";
import {
  isSubsystemUser
} from "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-AOBLWXUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-RYLWZIJP.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-A7VS2VYD.js";
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
  fh
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
  resource,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/zones/zones.component.ts
var ZonesComponent = class _ZonesComponent {
  _service = inject(ZonesStateService);
  _item = inject(ActiveItemService);
  _users = inject(BackofficeUsersService);
  item = computed(
    () => this._item.active_item$(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  name = "zones";
  counts = this._service.counts;
  tab_list = computed(
    () => {
      const details = this.counts();
      const is_admin = !!this._users.user()?.sys_admin;
      return [
        {
          id: "about",
          name: i18n("ZONES.TAB_ABOUT"),
          icon: { content: "info" }
        },
        {
          id: "systems",
          name: i18n("ZONES.TAB_SYSTEMS"),
          count: details.systems ?? "?",
          icon: { content: "meeting_room" }
        },
        {
          id: "triggers",
          name: i18n("ZONES.TAB_TRIGGERS"),
          count: details.triggers ?? "?",
          icon: { content: "timer" }
        },
        {
          id: "metadata",
          name: i18n("ZONES.TAB_METADATA"),
          count: details.metadata ?? "?",
          icon: { content: "code_blocks" }
        },
        {
          id: "groups",
          name: i18n("ZONES.TAB_GROUPS"),
          count: details.groups ?? "?",
          icon: { content: "groups" }
        },
        {
          id: "children",
          name: i18n("ZONES.TAB_CHILDREN"),
          count: details.children ?? "?",
          icon: { content: "account_tree" }
        },
        {
          id: "history",
          name: i18n("ZONES.TAB_SETTINGS_HISTORY"),
          icon: { content: "schedule" }
        }
      ].concat(extensionsForItem(this.item(), this.name)).filter((tab) => !isSubsystemUser() || !["history", "triggers", "groups"].includes(tab.id)).filter((tab) => is_admin || !["history", "groups"].includes(tab.id));
    },
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _zone_tags = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zone_tags" } : (
    /* istanbul ignore next */
    {}
  )), { loader: async () => fh().catch(() => []) }));
  zone_tags = computed(
    () => this._zone_tags.value() || [],
    ...ngDevMode ? [{ debugName: "zone_tags" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function ZonesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZonesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZonesComponent, selectors: [["new-zones-view"]], decls: 1, vars: 2, consts: [["name", "zones", "i18n_key", "ZONES", "bulk", "", "debug", "", 3, "tabs", "filter_options"]], template: function ZonesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "item-shell", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("tabs", ctx.tab_list())("filter_options", ctx.zone_tags());
    }
  }, dependencies: [ItemShellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonesComponent, [{
    type: Component,
    args: [{
      selector: "new-zones-view",
      template: `
        <item-shell
            name="zones"
            i18n_key="ZONES"
            [tabs]="tab_list()"
            [filter_options]="zone_tags()"
            bulk
            debug
        />
    `,
      imports: [ItemShellComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZonesComponent, { className: "ZonesComponent", filePath: "src/app/zones/zones.component.ts", lineNumber: 26 });
})();
export {
  ZonesComponent
};
//# debugId=09129f3c-7656-5fea-90f4-83acf9200cfe
//# sourceMappingURL=chunk-KBZXZEA5.js.map
