import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-AN7HGRJ7.js";
import {
  ActiveItemService
} from "./chunk-3GPSZOKI.js";
import "./chunk-6O5GBWTJ.js";
import "./chunk-PNWJF2I5.js";
import {
  Clipboard
} from "./chunk-BZ6PXTOX.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-TQ4VP2CT.js";
import "./chunk-IN2BSCPT.js";
import "./chunk-2HWH2YE2.js";
import {
  notifyInfo
} from "./chunk-XTVPLVG6.js";
import "./chunk-PADBWY7W.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-MHAN4HKV.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import {
  MatRippleModule
} from "./chunk-YFWFSNMM.js";
import {
  MatRipple
} from "./chunk-PH6YSF2Z.js";
import {
  TranslatePipe
} from "./chunk-Y2BF2IN5.js";
import {
  i18n
} from "./chunk-LD7JHF4N.js";
import {
  Nt
} from "./chunk-LCM7Z6QA.js";
import {
  downloadFile,
  jsonToCsv
} from "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/ui/item-details.component.ts
var _c0 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.label;
function ItemDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.driver_type, " ");
  }
}
function ItemDetailsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.domain, " ");
  }
}
function ItemDetailsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r2, " ");
  }
}
function ItemDetailsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-success!", ctx_r0.item()?.running)("text-success-content!", ctx_r0.item()?.running);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, ctx_r0.item()?.running ? "COMMON.ONLINE" : "COMMON.OFFLINE"), " ");
  }
}
function ItemDetailsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.item()?.edge_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.EDGE"), " ");
  }
}
function ItemDetailsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon");
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.SECURE"), " ");
  }
}
function ItemDetailsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ItemDetailsComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editItem());
    });
    \u0275\u0275elementStart(1, "icon", 16);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7, "E");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "COMMON.EDIT_TYPE", \u0275\u0275pureFunction1(4, _c0, ctx_r0.type())), " ");
  }
}
function ItemDetailsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ItemDetailsComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newFromItem());
    });
    \u0275\u0275elementStart(1, "icon", 16);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "COMMON.CREATE_FROM_TYPE", \u0275\u0275pureFunction1(4, _c0, ctx_r0.type())), " ");
  }
}
function ItemDetailsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ItemDetailsComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.duplicateItem());
    });
    \u0275\u0275elementStart(1, "icon", 16);
    \u0275\u0275text(2, "call_split");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "COMMON.DUPLICATE_TYPE", \u0275\u0275pureFunction1(4, _c0, ctx_r0.type())), " ");
  }
}
function ItemDetailsComponent_For_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.keycap);
  }
}
function ItemDetailsComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ItemDetailsComponent_For_30_Template_button_click_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(item_r7.action());
    });
    \u0275\u0275elementStart(1, "icon", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ItemDetailsComponent_For_30_Conditional_6_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("text-error", item_r7.destructive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, item_r7.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r7.keycap ? 6 : -1);
  }
}
function ItemDetailsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ItemDetailsComponent_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteItem());
    });
    \u0275\u0275elementStart(1, "icon", 21);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7, "\u2326");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "COMMON.DELETE_TYPE", \u0275\u0275pureFunction1(4, _c0, ctx_r0.type())), " ");
  }
}
var ItemDetailsComponent = class _ItemDetailsComponent {
  _service = inject(ActiveItemService);
  _clipboard = inject(Clipboard);
  type = input(
    "system",
    ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = input(
    void 0,
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  extra_actions = input(
    [],
    ...ngDevMode ? [{ debugName: "extra_actions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canMutate = (permission) => this._service.canMutate(permission);
  canCopy = (duplicate = false) => this._service.canCopy(duplicate);
  copyID = () => {
    this._clipboard.copy(this.item()?.id || "");
    notifyInfo(i18n("COMMON.COPIED_ID"));
  };
  /** Open modal to edit the active item */
  editItem = () => this._service.edit();
  /** Delete the active item */
  deleteItem = () => this._service.delete();
  /** Duplicate the active item */
  duplicateItem = () => this._service.duplicate();
  /** Create a new item using the current as a template */
  newFromItem = () => this._service.create(void 0, true);
  get domain() {
    return this.item()?.domain || "";
  }
  get tags() {
    return this.item()?.tags || [];
  }
  get driver_type() {
    const item = this.item();
    if (typeof item?.role !== "number")
      return "";
    switch (item?.role) {
      case Nt.Device:
        return i18n("DRIVERS.DEVICE");
      case Nt.SSH:
        return i18n("DRIVERS.SSH");
      case Nt.Service:
        return i18n("DRIVERS.SERVICE");
      case Nt.Websocket:
        return i18n("DRIVERS.WEBSOCKET");
    }
    return i18n("DRIVERS.LOGIC");
  }
  /**
   * Export the active item as a CSV
   */
  exportAsTSV() {
    const item = this.item()?.toJSON();
    const filename = `${(item?.name).toLowerCase().split(" ").join("_")}.${this.type()}.tsv`;
    const ignore_keys = ["module_list", "settings", "_type", "version"];
    const csv_data = jsonToCsv([item], Object.keys(item).filter((key) => ignore_keys.indexOf(key) < 0), "	");
    downloadFile(filename, csv_data);
  }
  static \u0275fac = function ItemDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailsComponent, selectors: [["item-details"]], inputs: { type: [1, "type"], item: [1, "item"], extra_actions: [1, "extra_actions"] }, decls: 32, vars: 21, consts: [["action_menu", "matMenu"], [1, "flex", "items-center", "justify-between", "px-4", "py-2"], [1, "flex", "flex-col", "space-y-2"], ["name", "", 1, "text-2xl", "select-text"], [1, "flex", "items-center", "space-x-2"], [1, "mono", "text-xs", "opacity-60", 3, "click"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "mono", "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs", "uppercase"], [1, "bg-error", "text-error-content", "rounded-xl", "px-2", "py-1", "text-xs", 3, "bg-success!", "text-success-content!"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs", 3, "matTooltip"], [1, "bg-success", "text-success-content", "flex", "items-center", "space-x-2", "rounded-xl", "px-2", "py-1", "text-xs"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], [1, "min-w-88"], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "text-2xl"], [1, "bg-error", "text-error-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "text"], [1, "flex-1"], [1, "keycap"], [1, "text-error", "text-2xl"]], template: function ItemDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function ItemDetailsComponent_Template_button_click_5_listener() {
        return ctx.copyID();
      });
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, ItemDetailsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(8, ItemDetailsComponent_Conditional_8_Template, 2, 1, "div", 7);
      \u0275\u0275repeaterCreate(9, ItemDetailsComponent_For_10_Template, 2, 1, "div", 8, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275conditionalCreate(11, ItemDetailsComponent_Conditional_11_Template, 3, 7, "div", 9);
      \u0275\u0275conditionalCreate(12, ItemDetailsComponent_Conditional_12_Template, 3, 4, "div", 10);
      \u0275\u0275conditionalCreate(13, ItemDetailsComponent_Conditional_13_Template, 6, 3, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementStart(16, "icon");
      \u0275\u0275text(17, "more_vert");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "mat-menu", 13, 0);
      \u0275\u0275conditionalCreate(20, ItemDetailsComponent_Conditional_20_Template, 8, 6, "button", 14);
      \u0275\u0275conditionalCreate(21, ItemDetailsComponent_Conditional_21_Template, 6, 6, "button", 14);
      \u0275\u0275conditionalCreate(22, ItemDetailsComponent_Conditional_22_Template, 6, 6, "button", 14);
      \u0275\u0275elementStart(23, "button", 15);
      \u0275\u0275listener("click", function ItemDetailsComponent_Template_button_click_23_listener() {
        return ctx.exportAsTSV();
      });
      \u0275\u0275elementStart(24, "icon", 16);
      \u0275\u0275text(25, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div");
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(29, ItemDetailsComponent_For_30_Template, 7, 7, "button", 14, _forTrack0);
      \u0275\u0275conditionalCreate(31, ItemDetailsComponent_Conditional_31_Template, 8, 6, "button", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const action_menu_r9 = \u0275\u0275reference(19);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item()?.display_name || ctx.item()?.custom_name || ctx.item()?.name || "<Unnamed>", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item()?.id, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.driver_type ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.domain ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.tags);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item()?.running !== null && ctx.item()?.running !== void 0 ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.edge_id ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.tls ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", action_menu_r9);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 14, "COMMON.MORE_ACTIONS"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.canMutate(4) ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canCopy() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canCopy(true) ? 22 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 16, "COMMON.EXPORT_TYPE_AS_TSV", \u0275\u0275pureFunction1(19, _c0, ctx.type())), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.extra_actions());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.canMutate(8) ? 31 : -1);
    }
  }, dependencies: [
    IconComponent,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemDetailsComponent, [{
    type: Component,
    args: [{ selector: "item-details", template: `
        <div class="flex items-center justify-between px-4 py-2">
            <div class="flex flex-col space-y-2">
                <div name class="text-2xl select-text">
                    {{
                        item()?.display_name ||
                            item()?.custom_name ||
                            item()?.name ||
                            '&lt;Unnamed&gt;'
                    }}
                </div>
                <div class="flex items-center space-x-2">
                    <button class="mono text-xs opacity-60" (click)="copyID()">
                        {{ item()?.id }}
                    </button>
                    @if (driver_type) {
                        <div
                            class="bg-info text-info-content rounded-xl px-2 py-1 text-xs"
                        >
                            {{ driver_type }}
                        </div>
                    }
                    @if (domain) {
                        <div
                            class="mono bg-info text-info-content rounded-xl px-2 py-1 text-xs"
                        >
                            {{ domain }}
                        </div>
                    }
                    @for (tag of tags; track $index) {
                        <div
                            class="bg-info text-info-content rounded-xl px-2 py-1 text-xs uppercase"
                        >
                            {{ tag }}
                        </div>
                    }
                    @if (
                        item()?.running !== null &&
                        item()?.running !== undefined
                    ) {
                        <div
                            class="bg-error text-error-content rounded-xl px-2 py-1 text-xs"
                            [class.bg-success!]="item()?.running"
                            [class.text-success-content!]="item()?.running"
                        >
                            {{
                                (item()?.running
                                    ? 'COMMON.ONLINE'
                                    : 'COMMON.OFFLINE'
                                ) | translate
                            }}
                        </div>
                    }
                    @if (item()?.edge_id) {
                        <div
                            class="bg-info text-info-content rounded-xl px-2 py-1 text-xs"
                            [matTooltip]="item()?.edge_id"
                        >
                            {{ 'COMMON.EDGE' | translate }}
                        </div>
                    }
                    @if (item()?.tls) {
                        <div
                            class="bg-success text-success-content flex items-center space-x-2 rounded-xl px-2 py-1 text-xs"
                        >
                            <icon>lock</icon>
                            <div class="text">
                                {{ 'COMMON.SECURE' | translate }}
                            </div>
                        </div>
                    }
                </div>
            </div>
            <button
                icon
                default
                matRipple
                [matMenuTriggerFor]="action_menu"
                [attr.aria-label]="'COMMON.MORE_ACTIONS' | translate"
            >
                <icon>more_vert</icon>
            </button>
        </div>
        <mat-menu #action_menu="matMenu" class="min-w-88">
            @if (canMutate(4)) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="editItem()"
                >
                    <icon class="text-2xl">edit</icon>
                    <div class="flex-1">
                        {{ 'COMMON.EDIT_TYPE' | translate: { name: type() } }}
                    </div>
                    <span class="keycap">E</span>
                </button>
            }
            @if (canCopy()) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="newFromItem()"
                >
                    <icon class="text-2xl">add</icon>
                    <div>
                        {{
                            'COMMON.CREATE_FROM_TYPE'
                                | translate: { name: type() }
                        }}
                    </div>
                </button>
            }
            @if (canCopy(true)) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="duplicateItem()"
                >
                    <icon class="text-2xl">call_split</icon>
                    <div>
                        {{
                            'COMMON.DUPLICATE_TYPE'
                                | translate: { name: type() }
                        }}
                    </div>
                </button>
            }
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                (click)="exportAsTSV()"
            >
                <icon class="text-2xl">download</icon>
                <div>
                    {{
                        'COMMON.EXPORT_TYPE_AS_TSV'
                            | translate: { name: type() }
                    }}
                </div>
            </button>
            @for (item of extra_actions(); track item.label) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="item.action()"
                >
                    <icon
                        class="text-2xl"
                        [class.text-error]="item.destructive"
                        >{{ item.icon }}</icon
                    >
                    <div class="flex-1">
                        {{ item.label | translate }}
                    </div>
                    @if (item.keycap) {
                        <span class="keycap">{{ item.keycap }}</span>
                    }
                </button>
            }
            @if (canMutate(8)) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="deleteItem()"
                >
                    <icon class="text-error text-2xl">delete</icon>
                    <div class="flex-1">
                        {{ 'COMMON.DELETE_TYPE' | translate: { name: type() } }}
                    </div>
                    <span class="keycap">\u2326</span>
                </button>
            }
        </mat-menu>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatMenuModule,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], extra_actions: [{ type: Input, args: [{ isSignal: true, alias: "extra_actions", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemDetailsComponent, { className: "ItemDetailsComponent", filePath: "src/app/ui/item-details.component.ts", lineNumber: 222 });
})();
export {
  ItemDetailsComponent
};
//# debugId=a6e27210-d3c8-53f7-ad91-24440197b90a
//# sourceMappingURL=chunk-BWNM3WHA.js.map
