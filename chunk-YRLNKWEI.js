import {
  ZonesStateService
} from "./chunk-E5HSACFB.js";
import "./chunk-5WFQZ5T5.js";
import "./chunk-TGEJ3MVF.js";
import "./chunk-X2O3T64J.js";
import {
  ItemShellComponent
} from "./chunk-JF7CYGQC.js";
import "./chunk-55T7H3NR.js";
import "./chunk-YNPQ35O2.js";
import "./chunk-6W2LNG7G.js";
import "./chunk-SDIAXYGA.js";
import "./chunk-RM3S4XI2.js";
import "./chunk-GEOS7XT5.js";
import {
  extensionsForItem
} from "./chunk-YZIXXT3V.js";
import "./chunk-A4WTKFZD.js";
import "./chunk-72THTKNP.js";
import "./chunk-6S6AGDRG.js";
import "./chunk-YMOLTP5M.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-RBIASCYG.js";
import "./chunk-OTR7JKZA.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-L53BB3NN.js";
import "./chunk-SYZRTR66.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-SVCRV2SB.js";
import "./chunk-23KR5P22.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WI4F7QUZ.js";
import "./chunk-N7V3DZSR.js";
import {
  BackofficeUsersService
} from "./chunk-OXU3CTMC.js";
import "./chunk-KP6LUFKO.js";
import {
  isSubsystemUser
} from "./chunk-X3HUV4CQ.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-V2X4XHND.js";
import "./chunk-S6ATYSOE.js";
import "./chunk-LPAJZMY2.js";
import "./chunk-UY6DH2NQ.js";
import "./chunk-UONBBRS5.js";
import "./chunk-PXU3R4CZ.js";
import "./chunk-OTF7M54K.js";
import "./chunk-R4757DZB.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import "./chunk-KPU65NDH.js";
import {
  i18n
} from "./chunk-MSK6KGG6.js";
import {
  zones_exports
} from "./chunk-K7DUQFI6.js";
import {
  orThrow
} from "./chunk-4MDDUS4W.js";
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
  _users = inject(BackofficeUsersService);
  item = this._service.item;
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
  )), { loader: async () => zones_exports.tags({}).then(orThrow).catch(() => []) }));
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
//# debugId=2731d792-f111-5134-b45d-0c941fe419a5
//# sourceMappingURL=chunk-YRLNKWEI.js.map
