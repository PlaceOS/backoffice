import {
  VirtualScrollComponent
} from "./chunk-LMZIY3XD.js";
import {
  isBefore
} from "./chunk-YK43QAQQ.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-O3RWSJZV.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-3NEIYYF3.js";
import {
  ActiveItemService
} from "./chunk-SJS3NMKI.js";
import {
  Clipboard
} from "./chunk-YKMVGLTV.js";
import {
  HotkeysService
} from "./chunk-ZCAI424E.js";
import {
  toSignal
} from "./chunk-7QVEE5VR.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4ARITZTR.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-3MFQ72CW.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-QGR553JM.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-6VJ3RG5O.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PPQFSXFA.js";
import {
  BackofficeUsersService
} from "./chunk-ED6OHA3X.js";
import {
  SettingsService
} from "./chunk-AXKZKMNR.js";
import {
  AsyncHandler
} from "./chunk-GMSIBCGC.js";
import {
  IconComponent
} from "./chunk-RBXYCJUU.js";
import {
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-2BWZF4LD.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-BSW7AGOT.js";
import {
  MatRipple
} from "./chunk-MSVGRD3P.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  Input,
  NgControlStatus,
  NgModel,
  Output,
  ViewChild,
  computed,
  downloadFile,
  effect,
  inject,
  input,
  jsonToCsv,
  model,
  nextValueFrom,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-H6LO5TZR.js";
import {
  Dn,
  Gr,
  Mt,
  Qr,
  map,
  startWith,
  uo
} from "./chunk-BKO4HWAT.js";

// src/app/ui/item-details-skeleton.component.ts
var ItemDetailsSkeletonComponent = class _ItemDetailsSkeletonComponent {
  static \u0275fac = function ItemDetailsSkeletonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemDetailsSkeletonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailsSkeletonComponent, selectors: [["item-details-skeleton"]], decls: 19, vars: 0, consts: [[1, "flex", "animate-pulse", "flex-col"], [1, "flex", "items-center", "justify-between", "px-4", "py-2"], [1, "flex", "flex-col", "space-y-2"], [1, "bg-base-300", "h-8", "w-48", "rounded-sm"], [1, "flex", "items-center", "space-x-2"], [1, "bg-base-300", "h-4", "w-32", "rounded-sm"], [1, "bg-base-300", "h-6", "w-16", "rounded-xl"], [1, "bg-base-300", "h-10", "w-10", "rounded-sm"], [1, "border-base-300", "h-12", "w-full", "border-b"], [1, "flex", "h-full", "items-center", "space-x-4", "px-4"], [1, "bg-base-300", "h-8", "w-24", "rounded-sm"], [1, "bg-base-300", "h-8", "w-28", "rounded-sm"], [1, "bg-base-300", "h-8", "w-20", "rounded-sm"], [1, "space-y-4", "p-4"], [1, "bg-base-300", "h-4", "w-3/4", "rounded-sm"], [1, "bg-base-300", "h-4", "w-1/2", "rounded-sm"], [1, "bg-base-300", "h-4", "w-2/3", "rounded-sm"], [1, "bg-base-300", "mt-6", "h-32", "w-full", "rounded-sm"]], template: function ItemDetailsSkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElement(3, "div", 3);
      \u0275\u0275domElementStart(4, "div", 4);
      \u0275\u0275domElement(5, "div", 5)(6, "div", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(7, "div", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 8)(9, "div", 9);
      \u0275\u0275domElement(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 10);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "div", 13);
      \u0275\u0275domElement(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17);
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemDetailsSkeletonComponent, [{
    type: Component,
    args: [{ selector: "item-details-skeleton", template: `
        <div class="flex animate-pulse flex-col">
            <!-- Item details skeleton -->
            <div class="flex items-center justify-between px-4 py-2">
                <div class="flex flex-col space-y-2">
                    <div class="bg-base-300 h-8 w-48 rounded-sm"></div>
                    <div class="flex items-center space-x-2">
                        <div class="bg-base-300 h-4 w-32 rounded-sm"></div>
                        <div class="bg-base-300 h-6 w-16 rounded-xl"></div>
                    </div>
                </div>
                <div class="bg-base-300 h-10 w-10 rounded-sm"></div>
            </div>

            <!-- Tab list skeleton -->
            <div class="border-base-300 h-12 w-full border-b">
                <div class="flex h-full items-center space-x-4 px-4">
                    <div class="bg-base-300 h-8 w-24 rounded-sm"></div>
                    <div class="bg-base-300 h-8 w-28 rounded-sm"></div>
                    <div class="bg-base-300 h-8 w-20 rounded-sm"></div>
                    <div class="bg-base-300 h-8 w-24 rounded-sm"></div>
                </div>
            </div>

            <!-- Content area skeleton -->
            <div class="space-y-4 p-4">
                <div class="bg-base-300 h-4 w-3/4 rounded-sm"></div>
                <div class="bg-base-300 h-4 w-1/2 rounded-sm"></div>
                <div class="bg-base-300 h-4 w-2/3 rounded-sm"></div>
                <div class="bg-base-300 mt-6 h-32 w-full rounded-sm"></div>
            </div>
        </div>
    ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemDetailsSkeletonComponent, { className: "ItemDetailsSkeletonComponent", filePath: "src/app/ui/item-details-skeleton.component.ts", lineNumber: 40 });
})();

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
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.driver_type, " ");
  }
}
function ItemDetailsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.domain, " ");
  }
}
function ItemDetailsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function ItemDetailsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-success!", (tmp_2_0 = ctx_r1.item()) == null ? null : tmp_2_0.running)("text-success-content!", (tmp_3_0 = ctx_r1.item()) == null ? null : tmp_3_0.running);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, ((tmp_4_0 = ctx_r1.item()) == null ? null : tmp_4_0.running) ? "COMMON.ONLINE" : "COMMON.OFFLINE"), " ");
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
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", (tmp_2_0 = ctx_r1.item()) == null ? null : tmp_2_0.edge_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.EDGE"), " ");
  }
}
function ItemDetailsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon");
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.SECURE"), " ");
  }
}
function ItemDetailsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ItemDetailsComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.edit.emit();
      return \u0275\u0275resetView(ctx_r1.editItem());
    });
    \u0275\u0275elementStart(1, "icon", 16);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7, "E");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "COMMON.EDIT_TYPE", \u0275\u0275pureFunction1(4, _c0, ctx_r1.type())), " ");
  }
}
function ItemDetailsComponent_For_39_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.keycap);
  }
}
function ItemDetailsComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ItemDetailsComponent_For_39_Template_button_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(item_r6.action());
    });
    \u0275\u0275elementStart(1, "icon", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ItemDetailsComponent_For_39_Conditional_6_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, item_r6.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r6.keycap ? 6 : -1);
  }
}
function ItemDetailsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ItemDetailsComponent_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.delete.emit();
      return \u0275\u0275resetView(ctx_r1.deleteItem());
    });
    \u0275\u0275elementStart(1, "icon", 22);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7, "\u2326");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "COMMON.DELETE_TYPE", \u0275\u0275pureFunction1(4, _c0, ctx_r1.type())), " ");
  }
}
var ItemDetailsComponent = class _ItemDetailsComponent {
  _service = inject(ActiveItemService);
  _users = inject(BackofficeUsersService);
  _clipboard = inject(Clipboard);
  type = input("system", ...ngDevMode ? [{ debugName: "type" }] : []);
  item = input(void 0, ...ngDevMode ? [{ debugName: "item" }] : []);
  can_edit = input(false, ...ngDevMode ? [{ debugName: "can_edit" }] : []);
  extra_actions = input([], ...ngDevMode ? [{ debugName: "extra_actions" }] : []);
  create = output();
  edit = output();
  delete = output();
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
  get is_admin() {
    return this._users.current().sys_admin;
  }
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
      case Mt.Device:
        return i18n("DRIVERS.DEVICE");
      case Mt.SSH:
        return i18n("DRIVERS.SSH");
      case Mt.Service:
        return i18n("DRIVERS.SERVICE");
      case Mt.Websocket:
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailsComponent, selectors: [["item-details"]], inputs: { type: [1, "type"], item: [1, "item"], can_edit: [1, "can_edit"], extra_actions: [1, "extra_actions"] }, outputs: { create: "create", edit: "edit", delete: "delete" }, decls: 41, vars: 28, consts: [["action_menu", "matMenu"], [1, "flex", "items-center", "justify-between", "px-4", "py-2"], [1, "flex", "flex-col", "space-y-2"], ["name", "", 1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], [1, "mono", "text-xs", "opacity-60", 3, "click"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "mono", "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs", "uppercase"], [1, "bg-error", "text-error-content", "rounded-xl", "px-2", "py-1", "text-xs", 3, "bg-success!", "text-success-content!"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs", 3, "matTooltip"], [1, "bg-success", "text-success-content", "flex", "items-center", "space-x-2", "rounded-xl", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], [1, "min-w-88"], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", "disabled", "true", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "text-2xl"], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "bg-error", "text-error-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "text"], [1, "flex-1"], [1, "keycap"], [1, "text-error", "text-2xl"]], template: function ItemDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function ItemDetailsComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.copyID());
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
      \u0275\u0275elementStart(14, "button", 12)(15, "icon");
      \u0275\u0275text(16, "more_vert");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "mat-menu", 13, 0);
      \u0275\u0275conditionalCreate(19, ItemDetailsComponent_Conditional_19_Template, 8, 6, "button", 14);
      \u0275\u0275elementStart(20, "button", 15);
      \u0275\u0275listener("click", function ItemDetailsComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.create.emit(false);
        return \u0275\u0275resetView(ctx.newFromItem());
      });
      \u0275\u0275elementStart(21, "icon", 16);
      \u0275\u0275text(22, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div");
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 15);
      \u0275\u0275listener("click", function ItemDetailsComponent_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.create.emit(true);
        return \u0275\u0275resetView(ctx.duplicateItem());
      });
      \u0275\u0275elementStart(27, "icon", 16);
      \u0275\u0275text(28, "call_split");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "button", 17);
      \u0275\u0275listener("click", function ItemDetailsComponent_Template_button_click_32_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportAsTSV());
      });
      \u0275\u0275elementStart(33, "icon", 16);
      \u0275\u0275text(34, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(38, ItemDetailsComponent_For_39_Template, 7, 5, "button", 14, _forTrack0);
      \u0275\u0275conditionalCreate(40, ItemDetailsComponent_Conditional_40_Template, 8, 6, "button", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      const action_menu_r8 = \u0275\u0275reference(18);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx.item()) == null ? null : tmp_1_0.display_name) || ((tmp_1_0 = ctx.item()) == null ? null : tmp_1_0.custom_name) || ((tmp_1_0 = ctx.item()) == null ? null : tmp_1_0.name) || "<Unnamed>", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx.item()) == null ? null : tmp_2_0.id, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.driver_type ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.domain ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.tags);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_6_0 = ctx.item()) == null ? null : tmp_6_0.running) !== null && ((tmp_6_0 = ctx.item()) == null ? null : tmp_6_0.running) !== void 0 ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.item()) == null ? null : tmp_7_0.edge_id) ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_8_0 = ctx.item()) == null ? null : tmp_8_0.tls) ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", action_menu_r8);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.can_edit() ? 19 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 13, "COMMON.CREATE_FROM_TYPE", \u0275\u0275pureFunction1(22, _c0, ctx.type())), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 16, "COMMON.DUPLICATE_TYPE", \u0275\u0275pureFunction1(24, _c0, ctx.type())), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 19, "COMMON.EXPORT_TYPE_AS_TSV", \u0275\u0275pureFunction1(26, _c0, ctx.type())), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.extra_actions());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.can_edit() ? 40 : -1);
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
                <div name class="text-2xl">
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
            <button icon matRipple [matMenuTriggerFor]="action_menu">
                <icon>more_vert</icon>
            </button>
        </div>
        <mat-menu #action_menu="matMenu" class="min-w-88">
            @if (can_edit()) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="edit.emit(); editItem()"
                >
                    <icon class="text-2xl">edit</icon>
                    <div class="flex-1">
                        {{ 'COMMON.EDIT_TYPE' | translate: { name: type() } }}
                    </div>
                    <span class="keycap">E</span>
                </button>
            }
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                disabled="true"
                (click)="create.emit(false); newFromItem()"
            >
                <icon class="text-2xl">add</icon>
                <div>
                    {{
                        'COMMON.CREATE_FROM_TYPE' | translate: { name: type() }
                    }}
                </div>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                disabled="true"
                (click)="create.emit(true); duplicateItem()"
            >
                <icon class="text-2xl">call_split</icon>
                <div>
                    {{ 'COMMON.DUPLICATE_TYPE' | translate: { name: type() } }}
                </div>
            </button>
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
                    <icon class="text-2xl">{{ item.icon }}</icon>
                    <div class="flex-1">
                        {{ item.label | translate }}
                    </div>
                    @if (item.keycap) {
                        <span class="keycap">{{ item.keycap }}</span>
                    }
                </button>
            }
            @if (can_edit()) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="delete.emit(); deleteItem()"
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
  }], null, { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], can_edit: [{ type: Input, args: [{ isSignal: true, alias: "can_edit", required: false }] }], extra_actions: [{ type: Input, args: [{ isSignal: true, alias: "extra_actions", required: false }] }], create: [{ type: Output, args: ["create"] }], edit: [{ type: Output, args: ["edit"] }], delete: [{ type: Output, args: ["delete"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemDetailsComponent, { className: "ItemDetailsComponent", filePath: "src/app/ui/item-details.component.ts", lineNumber: 198 });
})();

// src/app/ui/item-selection.component.ts
var _c02 = ["search_input"];
var _c1 = ["*"];
var _c2 = (a0) => ({ name: a0 });
var _c3 = (a0) => ({ count: a0 });
var _c4 = (a0, a1, a2) => ["/", a0, a1, a2];
var _c5 = (a0, a1) => ["/", a0, a1];
function ItemSelectionComponent_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function ItemSelectionComponent_Conditional_10_Conditional_16_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.extra, " ");
  }
}
function ItemSelectionComponent_Conditional_10_Conditional_16_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275listener("click", function ItemSelectionComponent_Conditional_10_Conditional_16_ng_template_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ItemSelectionComponent_Conditional_10_Conditional_16_ng_template_5_Conditional_3_Template, 3, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    const idx_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-base-content/5", idx_r6 % 2 === 1);
    \u0275\u0275property("routerLink", ctx_r1.subroute() ? \u0275\u0275pureFunction3(5, _c4, ctx_r1.route(), item_r5.id, ctx_r1.subroute()) : \u0275\u0275pureFunction2(9, _c5, ctx_r1.route(), item_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.extra ? 3 : -1);
  }
}
function ItemSelectionComponent_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "virtual-scroll", 17);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("scrolled", function ItemSelectionComponent_Conditional_10_Conditional_16_Template_virtual_scroll_scrolled_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atBottom($event));
    });
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ItemSelectionComponent_Conditional_10_Conditional_16_ng_template_5_Template, 4, 12, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_display_r7 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item_size", 72)("items", \u0275\u0275pipeBind1(1, 4, ctx_r1.items))("item_template", item_display_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "COMMON.END_OF_LIST"), " ");
  }
}
function ItemSelectionComponent_Conditional_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r1.search ? "COMMON.SEARCH_EMPTY" : "COMMON.LIST_EMPTY", \u0275\u0275pureFunction1(4, _c2, ctx_r1.title())), " ");
  }
}
function ItemSelectionComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ItemSelectionComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(1, "button", 9);
    \u0275\u0275listener("click", function ItemSelectionComponent_Conditional_10_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 10)(3, "icon", 11);
    \u0275\u0275text(4, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 12, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ItemSelectionComponent_Conditional_10_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ItemSelectionComponent_Conditional_10_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ItemSelectionComponent_Conditional_10_Conditional_8_Template, 1, 0, "mat-spinner", 13);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 14);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15);
    \u0275\u0275conditionalCreate(16, ItemSelectionComponent_Conditional_10_Conditional_16_Template, 7, 8);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275conditionalBranchCreate(18, ItemSelectionComponent_Conditional_10_Conditional_18_Template, 4, 6, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 5, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction1(20, _c2, ctx_r1.title())));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 8, ctx_r1.loading) ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(14, 14, "COMMON.TOTAL_ITEMS", \u0275\u0275pureFunction1(22, _c3, \u0275\u0275pipeBind1(12, 10, ctx_r1.total)), \u0275\u0275pipeBind1(13, 12, ctx_r1.total)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_6_0 = \u0275\u0275pipeBind1(17, 18, ctx_r1.items)) == null ? null : tmp_6_0.length) ? 16 : 18);
  }
}
var ItemSelectionComponent = class _ItemSelectionComponent extends AsyncHandler {
  _users = inject(BackofficeUsersService);
  _router = inject(Router);
  _settings = inject(SettingsService);
  _hotkeys = inject(HotkeysService);
  _service = inject(ActiveItemService);
  _route_change = toSignal(this._router.events.pipe(startWith(null)), { initialValue: null });
  show = model(true, ...ngDevMode ? [{ debugName: "show" }] : []);
  title = input(void 0, ...ngDevMode ? [{ debugName: "title" }] : []);
  route = input("systems", ...ngDevMode ? [{ debugName: "route" }] : []);
  subroute = signal("", ...ngDevMode ? [{ debugName: "subroute" }] : []);
  last_total = 0;
  last_check = 0;
  search = "";
  /** List of items for the active route */
  items = this._service.list;
  /** Whether list of items for the active route are loading */
  loading = this._service.loading_list;
  /** Total number of items in the last request */
  total = this._service.count;
  _input = viewChild("search_input", ...ngDevMode ? [{ debugName: "_input" }] : []);
  show_view = computed(() => {
    return this.show() || !this._service.active_item;
  }, ...ngDevMode ? [{ debugName: "show_view" }] : []);
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this.subroute.set(this._router.url.split("/")[3] || "");
    });
  }
  ngOnInit() {
    this.subscription("loading", this._service.loading.subscribe(() => this.show.set(!this._service.active_item)));
    this.subscription("list", this._service.list.subscribe((l) => this._processItems(l)));
    this.subscription("hotkey", this._hotkeys.listen(["KeyK"], () => this.open()));
  }
  ngOnChanges(changes) {
    if (changes.show && this.show()) {
      this.focusInput();
    }
  }
  ngAfterViewInit() {
    this.focusInput();
    this.atBottom([0, 0]);
  }
  open() {
    this.show.set(true);
    this.timeout("focus", () => this.focusInput());
  }
  focusInput() {
    this._input()?.nativeElement.focus();
  }
  updateSearch(str) {
    this._service.setSearch(str);
  }
  /** Whether to update the list of items */
  get is_stale() {
    const now = Date.now();
    const last_check = this.last_check;
    return this.last_total !== this._service.list_items().length || isBefore(now, last_check + 60 * 1e3);
  }
  /**
   * Check if user has scrolled to the bottom of the sidebar and emit an event to get next page of items
   */
  async atBottom([_start, end]) {
    this.timeout("load_more", async () => {
      const loading = await nextValueFrom(this.loading);
      const items = await nextValueFrom(this.items);
      if (loading || !this.is_stale)
        return;
      if (end >= items.length) {
        this.last_total = items.length;
        this.last_check = Date.now();
        if (this.last_total !== this._service.total) {
          this._service.moreItems();
        }
      }
    }, 150);
  }
  _processItems(list) {
    for (const item of list) {
      if (item instanceof Gr) {
        const detail = item.role === Mt.Service ? item.uri : item.role === Mt.Logic ? item.control_system_id : item.ip;
        item.display_name = item.custom_name || item.name || "<Unnamed>";
        item.extra = detail;
      } else if (item instanceof uo) {
        item.display_name = item.name || "<Unnamed>";
        item.extra = item.repo_type;
      } else {
        item.display_name = item.display_name || item.custom_name || item.name || "<Unnamed>";
        item.extra = item.id;
      }
    }
  }
  static \u0275fac = function ItemSelectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemSelectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemSelectionComponent, selectors: [["item-selection"]], viewQuery: function ItemSelectionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { show: [1, "show"], title: [1, "title"], route: [1, "route"] }, outputs: { show: "showChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c1, decls: 11, vars: 7, consts: [["search_input", ""], ["item_display", ""], [1, "border-base-300", "flex", "w-full", "items-center", "justify-center", "border-b", "p-2"], [1, "border-base-300", "flex", "max-w-[calc(100vw-1rem)]", "flex-1", "items-center", "rounded-lg", "border", "sm:max-w-lg", "sm:flex-auto", 3, "click"], [1, "ml-2", "text-2xl"], [1, "w-1/2", "flex-1", "p-2", "text-left", "text-lg", "opacity-30"], [1, "keycap", "mr-2", "text-xs"], [1, "bg-base-100/80", "absolute", "inset-0"], [1, "bg-base-100/80", "absolute", "inset-0", 3, "click"], [1, "bg-base-100", "border-base-300", "absolute", "top-2", "left-1/2", "flex", "w-lg", "max-w-[calc(100vw-1rem)]", "-translate-x-1/2", "flex-col", "space-y-2", "overflow-hidden", "rounded-sm", "border", "shadow-sm", 3, "click"], [1, "border-base-300", "relative", "flex", "items-center", "border-b"], [1, "pointer-events-none", "absolute", "top-1/2", "left-2", "-translate-y-1/2", "text-2xl"], [1, "flex-1", "border-none", "bg-transparent", "py-4", "pr-4", "pl-10", 3, "ngModelChange", "ngModel", "placeholder"], ["diameter", "24", 1, "absolute", "top-1/2", "right-2", "mr-2", "-translate-y-1/2"], [1, "w-full", "px-4", "text-sm", "opacity-60", "text-left"], [1, "border-base-300", "flex", "h-1/2", "flex-1", "flex-col"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], [1, "h-[768px]", "max-h-[75vh]", 3, "scrolled", "item_size", "items", "item_template"], [1, "bg-base-200", "p-2", "text-center", "text-sm", "opacity-30"], ["routerLinkActive", "active", 1, "m-2", "block", "max-w-[calc(100vw-2rem)]", "rounded-sm", "p-2", "text-left", 3, "click", "routerLink"], [1, "flex-1", "truncate"], [1, "inline-block", "w-full", "overflow-hidden"], ["extra", "", 1, "mono", "bg-base-content/10", "/5", "mt-1", "max-w-full", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "opacity-60"]], template: function ItemSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275projection(1);
      \u0275\u0275elementStart(2, "button", 3);
      \u0275\u0275listener("click", function ItemSelectionComponent_Template_button_click_2_listener() {
        return ctx.open();
      });
      \u0275\u0275elementStart(3, "icon", 4);
      \u0275\u0275text(4, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "K");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, ItemSelectionComponent_Conditional_10_Template, 19, 24, "button", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 2, "COMMON.VIEW_TYPE", \u0275\u0275pureFunction1(5, _c2, ctx.title())), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.show_view() ? 10 : -1);
    }
  }, dependencies: [
    CommonModule,
    IconComponent,
    VirtualScrollComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    AsyncPipe,
    TranslatePipe
  ], styles: ["\n\na[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\na.active[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n  color: #fff;\n}\n/*# sourceMappingURL=item-selection.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemSelectionComponent, [{
    type: Component,
    args: [{ selector: "item-selection", template: `
        <div
            class="border-base-300 flex w-full items-center justify-center border-b p-2"
        >
            <ng-content></ng-content>
            <button
                (click)="open()"
                class="border-base-300 flex max-w-[calc(100vw-1rem)] flex-1 items-center rounded-lg border sm:max-w-lg sm:flex-auto"
            >
                <icon class="ml-2 text-2xl">search</icon>
                <p class="w-1/2 flex-1 p-2 text-left text-lg opacity-30">
                    {{ 'COMMON.VIEW_TYPE' | translate: { name: title() } }}
                </p>
                <span class="keycap mr-2 text-xs">K</span>
            </button>
        </div>
        @if (show_view()) {
            <button
                class="bg-base-100/80 absolute inset-0"
                (click)="show.set(false)"
            >
                <button
                    class="bg-base-100 border-base-300 absolute top-2 left-1/2 flex w-lg max-w-[calc(100vw-1rem)] -translate-x-1/2 flex-col space-y-2 overflow-hidden rounded-sm border shadow-sm"
                    (click)="$event.stopPropagation()"
                >
                    <div
                        class="border-base-300 relative flex items-center border-b"
                    >
                        <icon
                            class="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 text-2xl"
                        >
                            search
                        </icon>
                        <input
                            #search_input
                            class="flex-1 border-none bg-transparent py-4 pr-4 pl-10"
                            [(ngModel)]="search"
                            (ngModelChange)="updateSearch($event)"
                            [placeholder]="
                                'COMMON.SEARCH_FOR'
                                    | translate: { name: title() }
                            "
                        />
                        @if (loading | async) {
                            <mat-spinner
                                diameter="24"
                                class="absolute top-1/2 right-2 mr-2 -translate-y-1/2"
                            ></mat-spinner>
                        }
                    </div>
                    <p class="w-full px-4 text-sm opacity-60 text-left">
                        {{
                            'COMMON.TOTAL_ITEMS'
                                | translate: { count: (total | async) }:(total | async)
                        }}
                    </p>
                    <div class="border-base-300 flex h-1/2 flex-1 flex-col">
                        @if ((items | async)?.length) {
                            <virtual-scroll
                                [item_size]="72"
                                [items]="items | async"
                                [item_template]="item_display"
                                (scrolled)="atBottom($event)"
                                class="h-[768px] max-h-[75vh]"
                            >
                                <div
                                    class="bg-base-200 p-2 text-center text-sm opacity-30"
                                >
                                    {{ 'COMMON.END_OF_LIST' | translate }}
                                </div>
                            </virtual-scroll>
                            <ng-template
                                #item_display
                                let-item="item"
                                let-idx="index"
                            >
                                <a
                                    [routerLink]="
                                        subroute()
                                            ? [
                                                  '/',
                                                  route(),
                                                  item.id,
                                                  subroute(),
                                              ]
                                            : ['/', route(), item.id]
                                    "
                                    routerLinkActive="active"
                                    [class.bg-base-content/5]="idx % 2 === 1"
                                    class="m-2 block max-w-[calc(100vw-2rem)] rounded-sm p-2 text-left"
                                    (click)="show.set(false)"
                                >
                                    <p class="flex-1 truncate">
                                        {{ item.name }}
                                    </p>
                                    @if (item.extra) {
                                        <div
                                            class="inline-block w-full overflow-hidden"
                                        >
                                            <span
                                                extra
                                                class="mono bg-base-content/10 /5 mt-1 max-w-full truncate rounded-sm px-2 py-1 text-xs opacity-60"
                                            >
                                                {{ item.extra }}
                                            </span>
                                        </div>
                                    }
                                </a>
                            </ng-template>
                        } @else {
                            <div
                                class="flex flex-col items-center justify-center p-8 opacity-30"
                            >
                                <p>
                                    {{
                                        (search
                                            ? 'COMMON.SEARCH_EMPTY'
                                            : 'COMMON.LIST_EMPTY'
                                        ) | translate: { name: title() }
                                    }}
                                </p>
                            </div>
                        }
                    </div>
                </button>
            </button>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      VirtualScrollComponent,
      RouterModule,
      MatProgressSpinnerModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;e3643f724d78890d9e8a8d2c5d21b70882137883e8c92f1be8319a76c070ef8a;/home/runner/work/backoffice/backoffice/src/app/ui/item-selection.component.ts */\na:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\na.active {\n  background-color: var(--secondary) !important;\n  color: #fff;\n}\n/*# sourceMappingURL=item-selection.component.css.map */\n"] }]
  }], () => [], { show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }, { type: Output, args: ["showChange"] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], route: [{ type: Input, args: [{ isSignal: true, alias: "route", required: false }] }], _input: [{ type: ViewChild, args: ["search_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemSelectionComponent, { className: "ItemSelectionComponent", filePath: "src/app/ui/item-selection.component.ts", lineNumber: 190 });
})();

// src/app/ui/item-sidebar.component.ts
var _c03 = ["search_input"];
var _c12 = (a0) => ({ name: a0 });
var _c22 = (a0) => ({ count: a0 });
var _c32 = (a0, a1, a2) => ["/", a0, a1, a2];
var _c42 = (a0, a1) => ["/", a0, a1];
function ItemSidebarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
}
function ItemSidebarComponent_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4);
  }
}
function ItemSidebarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 12)(2, "icon", 13);
    \u0275\u0275text(3, "filter_list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ItemSidebarComponent_Conditional_10_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selected_filters, $event) || (ctx_r2.selected_filters = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ItemSidebarComponent_Conditional_10_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateSearch(ctx_r2.search));
    });
    \u0275\u0275repeaterCreate(6, ItemSidebarComponent_Conditional_10_For_7_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("border", ctx_r2.selected_filters.length)("border-info", ctx_r2.selected_filters.length)("text-info", ctx_r2.selected_filters.length);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selected_filters);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filter_options());
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.extra, " ");
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, " new_releases ");
    \u0275\u0275elementEnd();
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, " brightness_alert ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().item;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, item_r7.zone_issues === "system" ? "SYSTEMS.MISCONFIGURED" : "ZONES.MISCONFIGURED"));
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, " error ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "MODULES.ERROR"));
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ItemSidebarComponent_Conditional_17_ng_template_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show.set(false));
    });
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275conditionalCreate(5, ItemSidebarComponent_Conditional_17_ng_template_5_Conditional_5_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ItemSidebarComponent_Conditional_17_ng_template_5_Conditional_6_Template, 2, 0, "icon", 23);
    \u0275\u0275conditionalCreate(7, ItemSidebarComponent_Conditional_17_ng_template_5_Conditional_7_Template, 4, 3, "div", 24);
    \u0275\u0275conditionalCreate(8, ItemSidebarComponent_Conditional_17_ng_template_5_Conditional_8_Template, 4, 3, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    const idx_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-base-200", idx_r8 % 2 === 1);
    \u0275\u0275property("routerLink", ctx_r2.subroute() ? \u0275\u0275pureFunction3(11, _c32, ctx_r2.route(), item_r7.id, ctx_r2.subroute()) : \u0275\u0275pureFunction2(15, _c42, ctx_r2.route(), item_r7.id))("matTooltip", item_r7.update_available && item_r7.commit !== item_r7.update_info.commit ? \u0275\u0275pipeBind1(1, 9, "COMMON.UPDATE_AVAILABLE") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r7.extra ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.update_available && item_r7.commit !== item_r7.update_info.commit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.zone_issues ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.has_runtime_error ? 8 : -1);
  }
}
function ItemSidebarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "virtual-scroll", 17);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("scrolled", function ItemSidebarComponent_Conditional_17_Template_virtual_scroll_scrolled_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.atBottom($event));
    });
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ItemSidebarComponent_Conditional_17_ng_template_5_Template, 9, 18, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_display_r9 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_size", 72)("items", \u0275\u0275pipeBind1(1, 4, ctx_r2.items))("item_template", item_display_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "COMMON.END_OF_LIST"), " ");
  }
}
function ItemSidebarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r2.search ? "COMMON.SEARCH_EMPTY" : "COMMON.LIST_EMPTY", \u0275\u0275pureFunction1(4, _c12, ctx_r2.title())), " ");
  }
}
var ItemSidebarComponent = class _ItemSidebarComponent extends AsyncHandler {
  _router = inject(Router);
  _service = inject(ActiveItemService);
  _route_change = toSignal(this._router.events.pipe(startWith(null)), { initialValue: null });
  title = input("Systems", ...ngDevMode ? [{ debugName: "title" }] : []);
  route = input("systems", ...ngDevMode ? [{ debugName: "route" }] : []);
  filter_options = input([], ...ngDevMode ? [{ debugName: "filter_options" }] : []);
  show = signal(true, ...ngDevMode ? [{ debugName: "show" }] : []);
  last_total = 0;
  last_check = 0;
  search = "";
  selected_filters = [];
  /** List of items for the active route */
  items = this._service.list.pipe(map((l) => this._processItems(l)));
  /** Whether list of items for the active route are loading */
  loading = this._service.loading_list;
  /** Total number of items in the last request */
  total = this._service.count;
  _input = viewChild("search_input", ...ngDevMode ? [{ debugName: "_input" }] : []);
  subroute = signal("", ...ngDevMode ? [{ debugName: "subroute" }] : []);
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this.subroute.set(this._router.url.split("/")[3] || "");
    });
  }
  ngAfterViewInit() {
    this.focusInput();
    this.atBottom([0, 0]);
  }
  focusInput() {
    this._input()?.nativeElement.focus();
  }
  updateSearch(str) {
    let search_str = "";
    if (this.selected_filters.length) {
      search_str += `tags:(${this.selected_filters.map((_) => `+${_.trim()}`).join(" AND ").trim()})`;
    }
    if (str) {
      if (search_str.length > 0) {
        search_str += ` AND (+${str.trim()})`;
      } else
        search_str += str.trim();
    }
    this._service.setSearch(search_str);
  }
  trackByFn(item, index) {
    return item.id || index;
  }
  /** Whether to update the list of items */
  get is_stale() {
    const now = Date.now();
    const last_check = this.last_check;
    return this.last_total !== this._service.list_items().length || isBefore(now, last_check + 60 * 1e3);
  }
  async atBottom([_start, end]) {
    this.timeout("load_more", async () => {
      const loading = await nextValueFrom(this.loading);
      const items = await nextValueFrom(this.items);
      if (loading || !this.is_stale)
        return;
      if (end >= items.length) {
        this.last_total = items.length;
        this.last_check = Date.now();
        const serviceTotal = await nextValueFrom(this.total);
        if (this.last_total < serviceTotal) {
          this._service.moreItems();
        }
      }
    }, 150);
  }
  _processItems(list) {
    for (const item of list) {
      if (item instanceof Gr) {
        const name = item.system?.display_name || item.system?.name;
        const detail = item.role === Mt.Service ? item.uri : item.role === Mt.Logic ? name ? `${name} | ${item.control_system_id} ` : item.control_system_id : item.ip;
        item.display_name = item.custom_name || item.name || "<Unnamed>";
        item.extra = detail;
      } else if (item instanceof uo) {
        item.display_name = item.name || "<Unnamed>";
        item.extra = item.repo_type;
      } else if (item instanceof Qr) {
        item.display_name = item.display_name || item.name || "<Unnamed>";
        item.zone_issues = (item.email || item.map_id) && item.zones.length < 3 ? "system" : "";
      } else if (item instanceof Dn) {
        item.display_name = item.display_name || item.name || "<Unnamed>";
        item.zone_issues = (item.tags.includes("level") || item.tags.includes("building") || item.tags.includes("region")) && !item.parent_id ? "zone" : "";
      } else {
        item.display_name = item.display_name || item.custom_name || item.name || "<Unnamed>";
        item.extra = item.id;
      }
    }
    return list;
  }
  static \u0275fac = function ItemSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemSidebarComponent, selectors: [["item-sidebar"]], viewQuery: function ItemSidebarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { title: [1, "title"], route: [1, "route"], filter_options: [1, "filter_options"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 23, consts: [["search_input", ""], ["item_display", ""], [1, "border-base-200", "bg-base-100", "flex", "h-full", "w-[24rem]", "max-w-[25vw]", "min-w-64", "flex-col", "space-y-2", "overflow-hidden", "rounded-sm", "shadow-sm", "sm:border-r", 3, "click"], [1, "flex", "items-center", "space-x-2", "px-1", "pt-1"], [1, "border-base-300", "relative", "flex", "flex-1", "items-center", "rounded-lg", "border", "shadow-sm"], [1, "pointer-events-none", "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-2xl"], [1, "w-full", "flex-1", "rounded-lg", "border-none", "bg-transparent", "py-2.5", "pr-4", "pl-9", 3, "ngModelChange", "ngModel", "placeholder"], ["diameter", "24", 1, "absolute", "top-1/2", "right-2", "mr-2", "-translate-y-1/2"], [1, "relative", "flex", "overflow-hidden"], [1, "w-full", "px-2", "text-sm", "opacity-60"], [1, "border-base-200", "flex", "h-1/2", "flex-1", "flex-col", "border-t"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], ["icon", "", "matRipple", ""], [1, "text-2xl"], ["appearance", "outline", 1, "no-subscript", "absolute", "top-1/2", "-right-2", "-translate-y-1/2", "opacity-0"], ["multiple", "", 3, "ngModelChange", "ngModel"], [1, "capitalize", 3, "value"], [3, "scrolled", "item_size", "items", "item_template"], [1, "bg-base-200", "p-2", "text-center", "text-sm", "opacity-30"], ["routerLinkActive", "active", 1, "border-base-100", "hover:border-info", "relative", "m-1", "flex", "h-16", "w-92", "max-w-[calc(100%-0.5rem)]", "flex-col", "justify-center", "rounded-sm", "border", "px-2", "py-1", 3, "click", "routerLink", "matTooltip"], [1, "w-full", "truncate"], [1, "flex", "w-full"], ["extra", "", 1, "mono", "border-base-300", "mt-1", "max-w-full", "truncate", "rounded-sm", "border", "p-1", "text-[0.625rem]", "opacity-60"], [1, "text-info", "absolute", "-top-1", "-right-1", "rotate-12", "text-2xl"], [1, "bg-warning", "text-warning-content", "absolute", "-top-1", "-right-1", "flex", "h-8", "w-8", "rotate-12", "items-center", "justify-center", "rounded-full", "text-2xl", 3, "matTooltip"], [1, "bg-error", "text-error-content", "absolute", "-top-1", "-right-1", "flex", "h-8", "w-8", "rotate-12", "items-center", "justify-center", "rounded-full", "text-2xl", 3, "matTooltip"]], template: function ItemSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function ItemSidebarComponent_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "icon", 5);
      \u0275\u0275text(4, " search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 6, 0);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ItemSidebarComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ItemSidebarComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateSearch($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ItemSidebarComponent_Conditional_8_Template, 1, 0, "mat-spinner", 7);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ItemSidebarComponent_Conditional_10_Template, 8, 7, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275declareLet(12);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275conditionalCreate(17, ItemSidebarComponent_Conditional_17_Template, 7, 8);
      \u0275\u0275pipe(18, "async");
      \u0275\u0275conditionalBranchCreate(19, ItemSidebarComponent_Conditional_19_Template, 4, 6, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_7_0;
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 6, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction1(19, _c12, ctx.title())));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 9, ctx.loading) ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_4_0 = ctx.filter_options()) == null ? null : tmp_4_0.length) ? 10 : -1);
      const t_r10 = \u0275\u0275pipeBind1(13, 11, ctx.total);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(15, 13, "COMMON.TOTAL_ITEMS", \u0275\u0275pureFunction1(21, _c22, t_r10), t_r10), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(((tmp_7_0 = \u0275\u0275pipeBind1(18, 17, ctx.items)) == null ? null : tmp_7_0.length) ? 17 : 19);
    }
  }, dependencies: [
    CommonModule,
    MatTooltipModule,
    MatTooltip,
    IconComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    VirtualScrollComponent,
    AsyncPipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\nscroll-item[_ngcontent-%COMP%]:nth-child(2n)    > a[_ngcontent-%COMP%] {\n  background-color: var(--base-200);\n}\na.active[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n  color: var(--secondary-content);\n}\n/*# sourceMappingURL=item-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemSidebarComponent, [{
    type: Component,
    args: [{ selector: "item-sidebar", template: `
        <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
        <div
            class="border-base-200 bg-base-100 flex h-full w-[24rem] max-w-[25vw] min-w-64 flex-col space-y-2 overflow-hidden rounded-sm shadow-sm sm:border-r"
            (click)="$event.stopPropagation()"
        >
            <div class="flex items-center space-x-2 px-1 pt-1">
                <div
                    class="border-base-300 relative flex flex-1 items-center rounded-lg border shadow-sm"
                >
                    <icon
                        class="pointer-events-none absolute top-1/2 left-1 -translate-y-1/2 text-2xl"
                    >
                        search
                    </icon>
                    <input
                        #search_input
                        class="w-full flex-1 rounded-lg border-none bg-transparent py-2.5 pr-4 pl-9"
                        [(ngModel)]="search"
                        (ngModelChange)="updateSearch($event)"
                        [placeholder]="
                            'COMMON.SEARCH_FOR' | translate: { name: title() }
                        "
                    />
                    @if (loading | async) {
                        <mat-spinner
                            diameter="24"
                            class="absolute top-1/2 right-2 mr-2 -translate-y-1/2"
                        ></mat-spinner>
                    }
                </div>
                @if (filter_options()?.length) {
                    <div class="relative flex overflow-hidden">
                        <button
                            icon
                            matRipple
                            [class.border]="selected_filters.length"
                            [class.border-info]="selected_filters.length"
                            [class.text-info]="selected_filters.length"
                        >
                            <icon class="text-2xl">filter_list</icon>
                        </button>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript absolute top-1/2 -right-2 -translate-y-1/2 opacity-0"
                        >
                            <mat-select
                                multiple
                                [(ngModel)]="selected_filters"
                                (ngModelChange)="updateSearch(search)"
                            >
                                @for (
                                    option of filter_options();
                                    track option
                                ) {
                                    <mat-option
                                        [value]="option"
                                        class="capitalize"
                                        >{{ option }}</mat-option
                                    >
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </div>
            <p class="w-full px-2 text-sm opacity-60">
                @let t = total | async;
                {{ 'COMMON.TOTAL_ITEMS' | translate: { count: t } : t }}
            </p>
            <div class="border-base-200 flex h-1/2 flex-1 flex-col border-t">
                @if ((items | async)?.length) {
                    <virtual-scroll
                        [item_size]="72"
                        [items]="items | async"
                        [item_template]="item_display"
                        (scrolled)="atBottom($event)"
                    >
                        <div
                            class="bg-base-200 p-2 text-center text-sm opacity-30"
                        >
                            {{ 'COMMON.END_OF_LIST' | translate }}
                        </div>
                    </virtual-scroll>
                    <ng-template #item_display let-item="item" let-idx="index">
                        <a
                            [routerLink]="
                                subroute()
                                    ? ['/', route(), item.id, subroute()]
                                    : ['/', route(), item.id]
                            "
                            routerLinkActive="active"
                            [matTooltip]="
                                item.update_available &&
                                item.commit !== item.update_info.commit
                                    ? ('COMMON.UPDATE_AVAILABLE' | translate)
                                    : ''
                            "
                            [class.bg-base-200]="idx % 2 === 1"
                            class="border-base-100 hover:border-info relative m-1 flex h-16 w-92 max-w-[calc(100%-0.5rem)] flex-col justify-center rounded-sm border px-2 py-1"
                            (click)="show.set(false)"
                        >
                            <p class="w-full truncate">
                                {{ item.name }}
                            </p>
                            <div class="flex w-full">
                                @if (item.extra) {
                                    <div
                                        extra
                                        class="mono border-base-300 mt-1 max-w-full truncate rounded-sm border p-1 text-[0.625rem] opacity-60"
                                    >
                                        {{ item.extra }}
                                    </div>
                                }
                            </div>
                            @if (
                                item.update_available &&
                                item.commit !== item.update_info.commit
                            ) {
                                <icon
                                    class="text-info absolute -top-1 -right-1 rotate-12 text-2xl"
                                >
                                    new_releases
                                </icon>
                            }
                            @if (item.zone_issues) {
                                <div
                                    class="bg-warning text-warning-content absolute -top-1 -right-1 flex h-8 w-8 rotate-12 items-center justify-center rounded-full text-2xl"
                                    [matTooltip]="
                                        (item.zone_issues === 'system'
                                            ? 'SYSTEMS.MISCONFIGURED'
                                            : 'ZONES.MISCONFIGURED'
                                        ) | translate
                                    "
                                >
                                    <icon> brightness_alert </icon>
                                </div>
                            }
                            @if (item.has_runtime_error) {
                                <div
                                    class="bg-error text-error-content absolute -top-1 -right-1 flex h-8 w-8 rotate-12 items-center justify-center rounded-full text-2xl"
                                    [matTooltip]="'MODULES.ERROR' | translate"
                                >
                                    <icon> error </icon>
                                </div>
                            }
                        </a>
                    </ng-template>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center p-8 opacity-30"
                    >
                        <p>
                            {{
                                (search
                                    ? 'COMMON.SEARCH_EMPTY'
                                    : 'COMMON.LIST_EMPTY'
                                ) | translate: { name: title() }
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatTooltipModule,
      IconComponent,
      RouterModule,
      FormsModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      VirtualScrollComponent
    ], styles: ["/* angular:styles/component:css;612834c1828a2f2552c88283bf5ecd8a26395d562afbe5e24c677f61fcc74c67;/home/runner/work/backoffice/backoffice/src/app/ui/item-sidebar.component.ts */\n:host {\n  height: 100%;\n}\nscroll-item:nth-child(2n) > a {\n  background-color: var(--base-200);\n}\na.active {\n  background-color: var(--secondary) !important;\n  color: var(--secondary-content);\n}\n/*# sourceMappingURL=item-sidebar.component.css.map */\n"] }]
  }], () => [], { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], route: [{ type: Input, args: [{ isSignal: true, alias: "route", required: false }] }], filter_options: [{ type: Input, args: [{ isSignal: true, alias: "filter_options", required: false }] }], _input: [{ type: ViewChild, args: ["search_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemSidebarComponent, { className: "ItemSidebarComponent", filePath: "src/app/ui/item-sidebar.component.ts", lineNumber: 229 });
})();

// src/app/ui/item-tablist.component.ts
var _c04 = () => ({});
var _forTrack02 = ($index, $item) => $item.id;
function ItemTablistComponent_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r1.count || "0", " ");
  }
}
function ItemTablistComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5, 1);
    \u0275\u0275element(2, "icon", 7);
    \u0275\u0275text(3, "\xA0 ");
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ItemTablistComponent_For_4_Conditional_6_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const rla_r2 = \u0275\u0275reference(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/" + ctx_r2.base() + "/" + ctx_r2.item_id() + "/" + link_r1.id)("queryParams", link_r1.query || \u0275\u0275pureFunction0(6, _c04))("active", rla_r2.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", link_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", link_r1.name, "\xA0");
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.count || link_r1.count === 0 ? 6 : -1);
  }
}
var ItemTablistComponent = class _ItemTablistComponent extends AsyncHandler {
  _router = inject(Router);
  _hotkey = inject(HotkeysService);
  _route_change = toSignal(this._router.events.pipe(startWith(null)), { initialValue: null });
  base = input("systems", ...ngDevMode ? [{ debugName: "base" }] : []);
  item_id = model("-", ...ngDevMode ? [{ debugName: "item_id" }] : []);
  tabs = input([], ...ngDevMode ? [{ debugName: "tabs" }] : []);
  scrolled = input(false, ...ngDevMode ? [{ debugName: "scrolled" }] : []);
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this._updateID();
    });
  }
  ngOnInit() {
    this.subscription("right", this._hotkey.listen(["ArrowRight"], () => this._changeTab(1)));
    this.subscription("left", this._hotkey.listen(["ArrowLeft"], () => this._changeTab(-1)));
  }
  _changeTab(direction) {
    this.timeout("change_tab", () => {
      const index = this.tabs().findIndex((tab) => this._router.url?.indexOf(tab.id) >= 0);
      if (index < 0 || !this.tabs()[index + direction])
        return;
      this._router.navigate([
        `/${this.base()}`,
        this.item_id(),
        this.tabs()[index + direction].id
      ]);
    }, 100);
  }
  _updateID() {
    const parts = this._router.url?.replace(/^\//, "").split("/") || [
      "1",
      ""
    ];
    this.item_id.set(parts[1]);
  }
  static \u0275fac = function ItemTablistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemTablistComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemTablistComponent, selectors: [["item-tablist"]], inputs: { base: [1, "base"], item_id: [1, "item_id"], tabs: [1, "tabs"], scrolled: [1, "scrolled"] }, outputs: { item_id: "item_idChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [["tabPanel", ""], ["rla", "routerLinkActive"], [1, "border-base-300", "h-12", "w-full", "border-b"], [1, "h-14", "w-full", "overflow-hidden"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", "routerLinkActive", "", 1, "tab", 3, "routerLink", "queryParams", "active"], [1, "hidden"], [1, "text-xl", 3, "icon"], [1, "name"], [1, "mono", "bg-base-200", "flex", "h-5", "min-w-5", "items-center", "justify-center", "rounded-full", "px-1.5", "text-[0.625rem]"]], template: function ItemTablistComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nav", 4);
      \u0275\u0275repeaterCreate(3, ItemTablistComponent_For_4_Template, 7, 7, "a", 5, _forTrack02);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(5, "mat-tab-nav-panel", 6, 0);
    }
    if (rf & 2) {
      const tabPanel_r4 = \u0275\u0275reference(6);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("shadow", ctx.scrolled());
      \u0275\u0275property("tabPanel", tabPanel_r4);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.tabs());
    }
  }, dependencies: [MatTabsModule, MatTabNav, MatTabNavPanel, MatTabLink, IconComponent, RouterModule, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTablistComponent, [{
    type: Component,
    args: [{ selector: "item-tablist", template: `
        <div class="border-base-300 h-12 w-full border-b">
            <div class="h-14 w-full overflow-hidden">
                <nav
                    mat-tab-nav-bar
                    [class.shadow]="scrolled()"
                    [tabPanel]="tabPanel"
                >
                    @for (link of tabs(); track link.id) {
                        <a
                            class="tab"
                            mat-tab-link
                            [routerLink]="
                                '/' + base() + '/' + item_id() + '/' + link.id
                            "
                            [queryParams]="link.query || {}"
                            routerLinkActive
                            #rla="routerLinkActive"
                            [active]="rla.isActive"
                        >
                            <icon class="text-xl" [icon]="link.icon"></icon
                            >&nbsp;
                            <div class="name">{{ link.name }}&nbsp;</div>
                            @if (link.count || link.count === 0) {
                                <div
                                    class="mono bg-base-200 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[0.625rem]"
                                >
                                    {{ link.count || '0' }}
                                </div>
                            }
                        </a>
                    }
                </nav>
            </div>
        </div>
        <mat-tab-nav-panel #tabPanel class="hidden" />
    `, imports: [MatTabsModule, IconComponent, RouterModule] }]
  }], () => [], { base: [{ type: Input, args: [{ isSignal: true, alias: "base", required: false }] }], item_id: [{ type: Input, args: [{ isSignal: true, alias: "item_id", required: false }] }, { type: Output, args: ["item_idChange"] }], tabs: [{ type: Input, args: [{ isSignal: true, alias: "tabs", required: false }] }], scrolled: [{ type: Input, args: [{ isSignal: true, alias: "scrolled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemTablistComponent, { className: "ItemTablistComponent", filePath: "src/app/ui/item-tablist.component.ts", lineNumber: 61 });
})();

export {
  ItemDetailsSkeletonComponent,
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
};
//# sourceMappingURL=chunk-JIA62QHB.js.map
