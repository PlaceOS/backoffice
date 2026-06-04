import {
  VirtualScrollComponent
} from "./chunk-65MR5QM6.js";
import {
  isBefore
} from "./chunk-YK43QAQQ.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-EK2IIETP.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-TF4JCVMS.js";
import {
  ActiveItemService
} from "./chunk-ZJJKOGSE.js";
import {
  Clipboard
} from "./chunk-TG7MI555.js";
import {
  HotkeysService
} from "./chunk-UHEQKETH.js";
import {
  toSignal
} from "./chunk-KMTGRH5S.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DTCPP7I4.js";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-SH4SZQVY.js";
import {
  MatSelect,
  MatSelectModule,
  SelectionModel
} from "./chunk-4ZFVXULA.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-DKBIML2S.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-AVP547Y3.js";
import {
  BackofficeUsersService
} from "./chunk-SUN6RQVP.js";
import {
  SettingsService
} from "./chunk-P7JOU2IV.js";
import {
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-5P6RE4SY.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-IZKGHFEC.js";
import {
  isDataSource
} from "./chunk-OKKLVLNZ.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-YQWUAWSB.js";
import {
  IconComponent
} from "./chunk-ZHEO2T5Y.js";
import {
  Directionality,
  MatRipple,
  TREE_KEY_MANAGER,
  coerceObservable
} from "./chunk-3WFHRON7.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DefaultValueAccessor,
  Directive,
  ElementRef,
  EventEmitter,
  FormsModule,
  InjectionToken,
  Input,
  IterableDiffers,
  NgControlStatus,
  NgModel,
  NgModule,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  downloadFile,
  effect,
  inject,
  input,
  jsonToCsv,
  model,
  nextValueFrom,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-46M7K5TF.js";
import {
  BehaviorSubject,
  EMPTY,
  Ht,
  Subject,
  Vc,
  catchError,
  combineLatest,
  concat,
  concatMap,
  di,
  distinctUntilChanged,
  isObservable,
  lastValueFrom,
  map,
  of,
  pi,
  qo,
  reduce,
  rn,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-55CIHLAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
      case Ht.Device:
        return i18n("DRIVERS.DEVICE");
      case Ht.SSH:
        return i18n("DRIVERS.SSH");
      case Ht.Service:
        return i18n("DRIVERS.SERVICE");
      case Ht.Websocket:
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailsComponent, selectors: [["item-details"]], inputs: { type: [1, "type"], item: [1, "item"], can_edit: [1, "can_edit"], extra_actions: [1, "extra_actions"] }, outputs: { create: "create", edit: "edit", delete: "delete" }, decls: 41, vars: 28, consts: [["action_menu", "matMenu"], [1, "flex", "items-center", "justify-between", "px-4", "py-2"], [1, "flex", "flex-col", "space-y-2"], ["name", "", 1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], [1, "mono", "text-xs", "opacity-60", 3, "click"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "mono", "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs", "uppercase"], [1, "bg-error", "text-error-content", "rounded-xl", "px-2", "py-1", "text-xs", 3, "bg-success!", "text-success-content!"], [1, "bg-info", "text-info-content", "rounded-xl", "px-2", "py-1", "text-xs", 3, "matTooltip"], [1, "bg-success", "text-success-content", "flex", "items-center", "space-x-2", "rounded-xl", "px-2", "py-1", "text-xs"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], [1, "min-w-88"], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", "disabled", "true", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "text-2xl"], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "bg-error", "text-error-content", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "text"], [1, "flex-1"], [1, "keycap"], [1, "text-error", "text-2xl"]], template: function ItemDetailsComponent_Template(rf, ctx) {
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
            <button icon default matRipple [matMenuTriggerFor]="action_menu">
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
      if (item instanceof di) {
        const detail = item.role === Ht.Service ? item.uri : item.role === Ht.Logic ? item.control_system_id : item.ip;
        item.display_name = item.custom_name || item.name || "<Unnamed>";
        item.extra = detail;
      } else if (item instanceof qo) {
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

// node_modules/@angular/cdk/fesm2022/tree.mjs
var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
var CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
  viewContainer = inject(ViewContainerRef);
  _node = inject(CDK_TREE_NODE_OUTLET_NODE, {
    optional: true
  });
  constructor() {
  }
  static \u0275fac = function CdkTreeNodeOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeOutlet,
    selectors: [["", "cdkTreeNodeOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeOutlet]"
    }]
  }], () => [], null);
})();
var CdkTreeNodeOutletContext = class {
  /** Data for the node. */
  $implicit;
  /** Depth of the node. */
  level;
  /** Index location of the node. */
  index;
  /** Length of the number of total dataNodes. */
  count;
  constructor(data) {
    this.$implicit = data;
  }
};
var CdkTreeNodeDef = class _CdkTreeNodeDef {
  /** @docs-private */
  template = inject(TemplateRef);
  /**
   * Function that should return true if this node template should be used for the provided node
   * data and index. If left undefined, this node will be considered the default node template to
   * use when no other when functions return true for the data.
   * For every node, there must be at least one when function that passes or an undefined to
   * default.
   */
  when;
  constructor() {
  }
  static \u0275fac = function CdkTreeNodeDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeDef,
    selectors: [["", "cdkTreeNodeDef", ""]],
    inputs: {
      when: [0, "cdkTreeNodeDefWhen", "when"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "cdkTreeNodeDefWhen"
      }]
    }]
  }], () => [], null);
})();
function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
  return Error(`Could not find a tree control, levelAccessor, or childrenAccessor for the tree.`);
}
function getMultipleTreeControlsError() {
  return Error(`More than one of tree control, levelAccessor, or childrenAccessor were provided.`);
}
var CdkTree = class _CdkTree {
  _differs = inject(IterableDiffers);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality);
  /** Subject that emits when the component has been destroyed. */
  _onDestroy = new Subject();
  /** Differ used to find the changes in the data provided by the data source. */
  _dataDiffer;
  /** Stores the node definition that does not have a when predicate. */
  _defaultNodeDef;
  /** Data subscription */
  _dataSubscription;
  /** Level of nodes */
  _levels = /* @__PURE__ */ new Map();
  /** The immediate parents for a node. This is `null` if there is no parent. */
  _parents = /* @__PURE__ */ new Map();
  /**
   * Nodes grouped into each set, which is a list of nodes displayed together in the DOM.
   *
   * Lookup key is the parent of a set. Root nodes have key of null.
   *
   * Values is a 'set' of tree nodes. Each tree node maps to a treeitem element. Sets are in the
   * order that it is rendered. Each set maps directly to aria-posinset and aria-setsize attributes.
   */
  _ariaSets = /* @__PURE__ */ new Map();
  /**
   * Provides a stream containing the latest data array to render. Influenced by the tree's
   * stream of view window (what dataNodes are currently on screen).
   * Data source can be an observable of data array, or a data array to render.
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  _dataSource;
  /**
   * The tree controller
   *
   * @deprecated Use one of `levelAccessor` or `childrenAccessor` instead. To be removed in a
   * future version.
   * @breaking-change 21.0.0
   */
  treeControl;
  /**
   * Given a data node, determines what tree level the node is at.
   *
   * One of levelAccessor or childrenAccessor must be specified, not both.
   * This is enforced at run-time.
   */
  levelAccessor;
  /**
   * Given a data node, determines what the children of that node are.
   *
   * One of levelAccessor or childrenAccessor must be specified, not both.
   * This is enforced at run-time.
   */
  childrenAccessor;
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize node operations by identifying a node based on its data
   * relative to the function to know if a node should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  trackBy;
  /**
   * Given a data node, determines the key by which we determine whether or not this node is expanded.
   */
  expansionKey;
  // Outlets within the tree's template where the dataNodes will be inserted.
  _nodeOutlet;
  /** The tree node template for the tree */
  _nodeDefs;
  // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
  //     Remove the MAX_VALUE in viewChange
  /**
   * Stream containing the latest information on what rows are being displayed on screen.
   * Can be used by the data source to as a heuristic of what data should be provided.
   */
  viewChange = new BehaviorSubject({
    start: 0,
    end: Number.MAX_VALUE
  });
  /** Keep track of which nodes are expanded. */
  _expansionModel;
  /**
   * Maintain a synchronous cache of flattened data nodes. This will only be
   * populated after initial render, and in certain cases, will be delayed due to
   * relying on Observable `getChildren` calls.
   */
  _flattenedNodes = new BehaviorSubject([]);
  /** The automatically determined node type for the tree. */
  _nodeType = new BehaviorSubject(null);
  /** The mapping between data and the node that is rendered. */
  _nodes = new BehaviorSubject(/* @__PURE__ */ new Map());
  /**
   * Synchronous cache of nodes for the `TreeKeyManager`. This is separate
   * from `_flattenedNodes` so they can be independently updated at different
   * times.
   */
  _keyManagerNodes = new BehaviorSubject([]);
  _keyManagerFactory = inject(TREE_KEY_MANAGER);
  /** The key manager for this tree. Handles focus and activation based on user keyboard input. */
  _keyManager;
  _viewInit = false;
  constructor() {
  }
  ngAfterContentInit() {
    this._initializeKeyManager();
  }
  ngAfterContentChecked() {
    this._updateDefaultNodeDefinition();
    this._subscribeToDataChanges();
  }
  ngOnDestroy() {
    this._nodeOutlet.viewContainer.clear();
    this._nodes.complete();
    this._keyManagerNodes.complete();
    this._nodeType.complete();
    this._flattenedNodes.complete();
    this.viewChange.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    this._keyManager?.destroy();
  }
  ngOnInit() {
    this._checkTreeControlUsage();
    this._initializeDataDiffer();
  }
  ngAfterViewInit() {
    this._viewInit = true;
  }
  _updateDefaultNodeDefinition() {
    const defaultNodeDefs = this._nodeDefs.filter((def) => !def.when);
    if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMultipleDefaultNodeDefsError();
    }
    this._defaultNodeDef = defaultNodeDefs[0];
  }
  /**
   * Sets the node type for the tree, if it hasn't been set yet.
   *
   * This will be called by the first node that's rendered in order for the tree
   * to determine what data transformations are required.
   */
  _setNodeTypeIfUnset(newType) {
    const currentType = this._nodeType.value;
    if (currentType === null) {
      this._nodeType.next(newType);
    } else if ((typeof ngDevMode === "undefined" || ngDevMode) && currentType !== newType) {
      console.warn(`Tree is using conflicting node types which can cause unexpected behavior. Please use tree nodes of the same type (e.g. only flat or only nested). Current node type: "${currentType}", new node type "${newType}".`);
    }
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the node outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    if (!dataSource) {
      this._nodeOutlet.viewContainer.clear();
    }
    this._dataSource = dataSource;
    if (this._nodeDefs) {
      this._subscribeToDataChanges();
    }
  }
  _getExpansionModel() {
    if (!this.treeControl) {
      this._expansionModel ??= new SelectionModel(true);
      return this._expansionModel;
    }
    return this.treeControl.expansionModel;
  }
  /** Set up a subscription for the data provided by the data source. */
  _subscribeToDataChanges() {
    if (this._dataSubscription) {
      return;
    }
    let dataStream;
    if (isDataSource(this._dataSource)) {
      dataStream = this._dataSource.connect(this);
    } else if (isObservable(this._dataSource)) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = of(this._dataSource);
    }
    if (!dataStream) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        throw getTreeNoValidDataSourceError();
      }
      return;
    }
    this._dataSubscription = this._getRenderData(dataStream).pipe(takeUntil(this._onDestroy)).subscribe((renderingData) => {
      this._renderDataChanges(renderingData);
    });
  }
  /** Given an Observable containing a stream of the raw data, returns an Observable containing the RenderingData */
  _getRenderData(dataStream) {
    const expansionModel = this._getExpansionModel();
    return combineLatest([
      dataStream,
      this._nodeType,
      // We don't use the expansion data directly, however we add it here to essentially
      // trigger data rendering when expansion changes occur.
      expansionModel.changed.pipe(startWith(null), tap((expansionChanges) => {
        this._emitExpansionChanges(expansionChanges);
      }))
    ]).pipe(switchMap(([data, nodeType]) => {
      if (nodeType === null) {
        return of({
          renderNodes: data,
          flattenedNodes: null,
          nodeType
        });
      }
      return this._computeRenderingData(data, nodeType).pipe(map((convertedData) => __spreadProps(__spreadValues({}, convertedData), {
        nodeType
      })));
    }));
  }
  _renderDataChanges(data) {
    if (data.nodeType === null) {
      this.renderNodeChanges(data.renderNodes);
      return;
    }
    this._updateCachedData(data.flattenedNodes);
    this.renderNodeChanges(data.renderNodes);
    this._updateKeyManagerItems(data.flattenedNodes);
  }
  _emitExpansionChanges(expansionChanges) {
    if (!expansionChanges) {
      return;
    }
    const nodes = this._nodes.value;
    for (const added of expansionChanges.added) {
      const node = nodes.get(added);
      node?._emitExpansionState(true);
    }
    for (const removed of expansionChanges.removed) {
      const node = nodes.get(removed);
      node?._emitExpansionState(false);
    }
  }
  _initializeKeyManager() {
    const items = combineLatest([this._keyManagerNodes, this._nodes]).pipe(map(([keyManagerNodes, renderNodes]) => keyManagerNodes.reduce((items2, data) => {
      const node = renderNodes.get(this._getExpansionKey(data));
      if (node) {
        items2.push(node);
      }
      return items2;
    }, [])));
    const keyManagerOptions = {
      trackBy: (node) => this._getExpansionKey(node.data),
      skipPredicate: (node) => !!node.isDisabled,
      typeAheadDebounceInterval: true,
      horizontalOrientation: this._dir.value
    };
    this._keyManager = this._keyManagerFactory(items, keyManagerOptions);
  }
  _initializeDataDiffer() {
    const trackBy = this.trackBy ?? ((_index, item) => this._getExpansionKey(item));
    this._dataDiffer = this._differs.find([]).create(trackBy);
  }
  _checkTreeControlUsage() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      let numTreeControls = 0;
      if (this.treeControl) {
        numTreeControls++;
      }
      if (this.levelAccessor) {
        numTreeControls++;
      }
      if (this.childrenAccessor) {
        numTreeControls++;
      }
      if (!numTreeControls) {
        throw getTreeControlMissingError();
      } else if (numTreeControls > 1) {
        throw getMultipleTreeControlsError();
      }
    }
  }
  /** Check for changes made in the data and render each change (node added/removed/moved). */
  renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);
    if (!changes && !this._viewInit) {
      return;
    }
    changes?.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });
    changes?.forEachIdentityChange((record) => {
      const newData = record.item;
      if (record.currentIndex != void 0) {
        const view = viewContainer.get(record.currentIndex);
        view.context.$implicit = newData;
      }
    });
    if (parentData) {
      this._changeDetectorRef.markForCheck();
    } else {
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Finds the matching node definition that should be used for this node data. If there is only
   * one node definition, it is returned. Otherwise, find the node definition that has a when
   * predicate that returns true with the data. If none return true, return the default node
   * definition.
   */
  _getNodeDef(data, i) {
    if (this._nodeDefs.length === 1) {
      return this._nodeDefs.first;
    }
    const nodeDef = this._nodeDefs.find((def) => def.when && def.when(i, data)) || this._defaultNodeDef;
    if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMissingMatchingNodeDefError();
    }
    return nodeDef;
  }
  /**
   * Create the embedded view for the data node template and place it in the correct index location
   * within the data node view container.
   */
  insertNode(nodeData, index, viewContainer, parentData) {
    const levelAccessor = this._getLevelAccessor();
    const node = this._getNodeDef(nodeData, index);
    const key = this._getExpansionKey(nodeData);
    const context = new CdkTreeNodeOutletContext(nodeData);
    context.index = index;
    parentData ??= this._parents.get(key) ?? void 0;
    if (levelAccessor) {
      context.level = levelAccessor(nodeData);
    } else if (parentData !== void 0 && this._levels.has(this._getExpansionKey(parentData))) {
      context.level = this._levels.get(this._getExpansionKey(parentData)) + 1;
    } else {
      context.level = 0;
    }
    this._levels.set(key, context.level);
    const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index);
    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }
  /** Whether the data node is expanded or collapsed. Returns true if it's expanded. */
  isExpanded(dataNode) {
    return !!(this.treeControl?.isExpanded(dataNode) || this._expansionModel?.isSelected(this._getExpansionKey(dataNode)));
  }
  /** If the data node is currently expanded, collapse it. Otherwise, expand it. */
  toggle(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggle(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.toggle(this._getExpansionKey(dataNode));
    }
  }
  /** Expand the data node. If it is already expanded, does nothing. */
  expand(dataNode) {
    if (this.treeControl) {
      this.treeControl.expand(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.select(this._getExpansionKey(dataNode));
    }
  }
  /** Collapse the data node. If it is already collapsed, does nothing. */
  collapse(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapse(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.deselect(this._getExpansionKey(dataNode));
    }
  }
  /**
   * If the data node is currently expanded, collapse it and all its descendants.
   * Otherwise, expand it and all its descendants.
   */
  toggleDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggleDescendants(dataNode);
    } else if (this._expansionModel) {
      if (this.isExpanded(dataNode)) {
        this.collapseDescendants(dataNode);
      } else {
        this.expandDescendants(dataNode);
      }
    }
  }
  /**
   * Expand the data node and all its descendants. If they are already expanded, does nothing.
   */
  expandDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.expandDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.select(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
        expansionModel.select(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  /** Collapse the data node and all its descendants. If it is already collapsed, does nothing. */
  collapseDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapseDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.deselect(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
        expansionModel.deselect(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  /** Expands all data nodes in the tree. */
  expandAll() {
    if (this.treeControl) {
      this.treeControl.expandAll();
    } else if (this._expansionModel) {
      this._forEachExpansionKey((keys) => this._expansionModel?.select(...keys));
    }
  }
  /** Collapse all data nodes in the tree. */
  collapseAll() {
    if (this.treeControl) {
      this.treeControl.collapseAll();
    } else if (this._expansionModel) {
      this._forEachExpansionKey((keys) => this._expansionModel?.deselect(...keys));
    }
  }
  /** Level accessor, used for compatibility between the old Tree and new Tree */
  _getLevelAccessor() {
    return this.treeControl?.getLevel?.bind(this.treeControl) ?? this.levelAccessor;
  }
  /** Children accessor, used for compatibility between the old Tree and new Tree */
  _getChildrenAccessor() {
    return this.treeControl?.getChildren?.bind(this.treeControl) ?? this.childrenAccessor;
  }
  /**
   * Gets the direct children of a node; used for compatibility between the old tree and the
   * new tree.
   */
  _getDirectChildren(dataNode) {
    const levelAccessor = this._getLevelAccessor();
    const expansionModel = this._expansionModel ?? this.treeControl?.expansionModel;
    if (!expansionModel) {
      return of([]);
    }
    const key = this._getExpansionKey(dataNode);
    const isExpanded = expansionModel.changed.pipe(switchMap((changes) => {
      if (changes.added.includes(key)) {
        return of(true);
      } else if (changes.removed.includes(key)) {
        return of(false);
      }
      return EMPTY;
    }), startWith(this.isExpanded(dataNode)));
    if (levelAccessor) {
      return combineLatest([isExpanded, this._flattenedNodes]).pipe(map(([expanded, flattenedNodes]) => {
        if (!expanded) {
          return [];
        }
        return this._findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, 1);
      }));
    }
    const childrenAccessor = this._getChildrenAccessor();
    if (childrenAccessor) {
      return coerceObservable(childrenAccessor(dataNode) ?? []);
    }
    throw getTreeControlMissingError();
  }
  /**
   * Given the list of flattened nodes, the level accessor, and the level range within
   * which to consider children, finds the children for a given node.
   *
   * For example, for direct children, `levelDelta` would be 1. For all descendants,
   * `levelDelta` would be Infinity.
   */
  _findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, levelDelta) {
    const key = this._getExpansionKey(dataNode);
    const startIndex = flattenedNodes.findIndex((node) => this._getExpansionKey(node) === key);
    const dataNodeLevel = levelAccessor(dataNode);
    const expectedLevel = dataNodeLevel + levelDelta;
    const results = [];
    for (let i = startIndex + 1; i < flattenedNodes.length; i++) {
      const currentLevel = levelAccessor(flattenedNodes[i]);
      if (currentLevel <= dataNodeLevel) {
        break;
      }
      if (currentLevel <= expectedLevel) {
        results.push(flattenedNodes[i]);
      }
    }
    return results;
  }
  /**
   * Adds the specified node component to the tree's internal registry.
   *
   * This primarily facilitates keyboard navigation.
   */
  _registerNode(node) {
    this._nodes.value.set(this._getExpansionKey(node.data), node);
    this._nodes.next(this._nodes.value);
  }
  /** Removes the specified node component from the tree's internal registry. */
  _unregisterNode(node) {
    this._nodes.value.delete(this._getExpansionKey(node.data));
    this._nodes.next(this._nodes.value);
  }
  /**
   * For the given node, determine the level where this node appears in the tree.
   *
   * This is intended to be used for `aria-level` but is 0-indexed.
   */
  _getLevel(node) {
    return this._levels.get(this._getExpansionKey(node));
  }
  /**
   * For the given node, determine the size of the parent's child set.
   *
   * This is intended to be used for `aria-setsize`.
   */
  _getSetSize(dataNode) {
    const set = this._getAriaSet(dataNode);
    return set.length;
  }
  /**
   * For the given node, determine the index (starting from 1) of the node in its parent's child set.
   *
   * This is intended to be used for `aria-posinset`.
   */
  _getPositionInSet(dataNode) {
    const set = this._getAriaSet(dataNode);
    const key = this._getExpansionKey(dataNode);
    return set.findIndex((node) => this._getExpansionKey(node) === key) + 1;
  }
  /** Given a CdkTreeNode, gets the node that renders that node's parent's data. */
  _getNodeParent(node) {
    const parent = this._parents.get(this._getExpansionKey(node.data));
    return parent && this._nodes.value.get(this._getExpansionKey(parent));
  }
  /** Given a CdkTreeNode, gets the nodes that renders that node's child data. */
  _getNodeChildren(node) {
    return this._getDirectChildren(node.data).pipe(map((children) => children.reduce((nodes, child) => {
      const value = this._nodes.value.get(this._getExpansionKey(child));
      if (value) {
        nodes.push(value);
      }
      return nodes;
    }, [])));
  }
  /** `keydown` event handler; this just passes the event to the `TreeKeyManager`. */
  _sendKeydownToKeyManager(event) {
    if (event.target === this._elementRef.nativeElement) {
      this._keyManager.onKeydown(event);
    } else {
      const nodes = this._nodes.getValue();
      for (const [, node] of nodes) {
        if (event.target === node._elementRef.nativeElement) {
          this._keyManager.onKeydown(event);
          break;
        }
      }
    }
  }
  /** Gets all nested descendants of a given node. */
  _getDescendants(dataNode) {
    if (this.treeControl) {
      return of(this.treeControl.getDescendants(dataNode));
    }
    if (this.levelAccessor) {
      const results = this._findChildrenByLevel(this.levelAccessor, this._flattenedNodes.value, dataNode, Infinity);
      return of(results);
    }
    if (this.childrenAccessor) {
      return this._getAllChildrenRecursively(dataNode).pipe(reduce((allChildren, nextChildren) => {
        allChildren.push(...nextChildren);
        return allChildren;
      }, []));
    }
    throw getTreeControlMissingError();
  }
  /**
   * Gets all children and sub-children of the provided node.
   *
   * This will emit multiple times, in the order that the children will appear
   * in the tree, and can be combined with a `reduce` operator.
   */
  _getAllChildrenRecursively(dataNode) {
    if (!this.childrenAccessor) {
      return of([]);
    }
    return coerceObservable(this.childrenAccessor(dataNode)).pipe(take(1), switchMap((children) => {
      for (const child of children) {
        this._parents.set(this._getExpansionKey(child), dataNode);
      }
      return of(...children).pipe(concatMap((child) => concat(of([child]), this._getAllChildrenRecursively(child))));
    }));
  }
  _getExpansionKey(dataNode) {
    return this.expansionKey?.(dataNode) ?? dataNode;
  }
  _getAriaSet(node) {
    const key = this._getExpansionKey(node);
    const parent = this._parents.get(key);
    const parentKey = parent ? this._getExpansionKey(parent) : null;
    const set = this._ariaSets.get(parentKey);
    return set ?? [node];
  }
  /**
   * Finds the parent for the given node. If this is a root node, this
   * returns null. If we're unable to determine the parent, for example,
   * if we don't have cached node data, this returns undefined.
   */
  _findParentForNode(node, index, cachedNodes) {
    if (!cachedNodes.length) {
      return null;
    }
    const currentLevel = this._levels.get(this._getExpansionKey(node)) ?? 0;
    for (let parentIndex = index - 1; parentIndex >= 0; parentIndex--) {
      const parentNode = cachedNodes[parentIndex];
      const parentLevel = this._levels.get(this._getExpansionKey(parentNode)) ?? 0;
      if (parentLevel < currentLevel) {
        return parentNode;
      }
    }
    return null;
  }
  /**
   * Given a set of root nodes and the current node level, flattens any nested
   * nodes into a single array.
   *
   * If any nodes are not expanded, then their children will not be added into the array.
   * This will still traverse all nested children in order to build up our internal data
   * models, but will not include them in the returned array.
   */
  _flattenNestedNodesWithExpansion(nodes, level = 0) {
    const childrenAccessor = this._getChildrenAccessor();
    if (!childrenAccessor) {
      return of([...nodes]);
    }
    return of(...nodes).pipe(concatMap((node) => {
      const parentKey = this._getExpansionKey(node);
      if (!this._parents.has(parentKey)) {
        this._parents.set(parentKey, null);
      }
      this._levels.set(parentKey, level);
      const children = coerceObservable(childrenAccessor(node));
      return concat(of([node]), children.pipe(take(1), tap((childNodes) => {
        this._ariaSets.set(parentKey, [...childNodes ?? []]);
        for (const child of childNodes ?? []) {
          const childKey = this._getExpansionKey(child);
          this._parents.set(childKey, node);
          this._levels.set(childKey, level + 1);
        }
      }), switchMap((childNodes) => {
        if (!childNodes) {
          return of([]);
        }
        return this._flattenNestedNodesWithExpansion(childNodes, level + 1).pipe(map((nestedNodes) => this.isExpanded(node) ? nestedNodes : []));
      })));
    }), reduce((results, children) => {
      results.push(...children);
      return results;
    }, []));
  }
  /**
   * Converts children for certain tree configurations.
   *
   * This also computes parent, level, and group data.
   */
  _computeRenderingData(nodes, nodeType) {
    if (this.childrenAccessor && nodeType === "flat") {
      this._clearPreviousCache();
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
        renderNodes: flattenedNodes,
        flattenedNodes
      })));
    } else if (this.levelAccessor && nodeType === "nested") {
      const levelAccessor = this.levelAccessor;
      return of(nodes.filter((node) => levelAccessor(node) === 0)).pipe(map((rootNodes) => ({
        renderNodes: rootNodes,
        flattenedNodes: nodes
      })), tap(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else if (nodeType === "flat") {
      return of({
        renderNodes: nodes,
        flattenedNodes: nodes
      }).pipe(tap(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else {
      this._clearPreviousCache();
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
        renderNodes: nodes,
        flattenedNodes
      })));
    }
  }
  _updateCachedData(flattenedNodes) {
    this._flattenedNodes.next(flattenedNodes);
  }
  _updateKeyManagerItems(flattenedNodes) {
    this._keyManagerNodes.next(flattenedNodes);
  }
  /** Traverse the flattened node data and compute parents, levels, and group data. */
  _calculateParents(flattenedNodes) {
    const levelAccessor = this._getLevelAccessor();
    if (!levelAccessor) {
      return;
    }
    this._clearPreviousCache();
    for (let index = 0; index < flattenedNodes.length; index++) {
      const dataNode = flattenedNodes[index];
      const key = this._getExpansionKey(dataNode);
      this._levels.set(key, levelAccessor(dataNode));
      const parent = this._findParentForNode(dataNode, index, flattenedNodes);
      this._parents.set(key, parent);
      const parentKey = parent ? this._getExpansionKey(parent) : null;
      const group = this._ariaSets.get(parentKey) ?? [];
      group.splice(index, 0, dataNode);
      this._ariaSets.set(parentKey, group);
    }
  }
  /** Invokes a callback with all node expansion keys. */
  _forEachExpansionKey(callback) {
    const toToggle = [];
    const observables = [];
    this._nodes.value.forEach((node) => {
      toToggle.push(this._getExpansionKey(node.data));
      observables.push(this._getDescendants(node.data));
    });
    if (observables.length > 0) {
      combineLatest(observables).pipe(take(1), takeUntil(this._onDestroy)).subscribe((results) => {
        results.forEach((inner) => inner.forEach((r) => toToggle.push(this._getExpansionKey(r))));
        callback(toToggle);
      });
    } else {
      callback(toToggle);
    }
  }
  /** Clears the maps we use to store parents, level & aria-sets in. */
  _clearPreviousCache() {
    this._parents.clear();
    this._levels.clear();
    this._ariaSets.clear();
  }
  static \u0275fac = function CdkTree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTree)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTree,
    selectors: [["cdk-tree"]],
    contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkTreeNodeDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeDefs = _t);
      }
    },
    viewQuery: function CdkTree_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkTreeNodeOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeOutlet = _t.first);
      }
    },
    hostAttrs: ["role", "tree", 1, "cdk-tree"],
    hostBindings: function CdkTree_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function CdkTree_keydown_HostBindingHandler($event) {
          return ctx._sendKeydownToKeyManager($event);
        });
      }
    },
    inputs: {
      dataSource: "dataSource",
      treeControl: "treeControl",
      levelAccessor: "levelAccessor",
      childrenAccessor: "childrenAccessor",
      trackBy: "trackBy",
      expansionKey: "expansionKey"
    },
    exportAs: ["cdkTree"],
    decls: 1,
    vars: 0,
    consts: [["cdkTreeNodeOutlet", ""]],
    template: function CdkTree_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkTreeNodeOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTree, [{
    type: Component,
    args: [{
      selector: "cdk-tree",
      exportAs: "cdkTree",
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        "class": "cdk-tree",
        "role": "tree",
        "(keydown)": "_sendKeydownToKeyManager($event)"
      },
      encapsulation: ViewEncapsulation.None,
      // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
      // The view for `CdkTree` consists entirely of templates declared in other views. As they are
      // declared elsewhere, they are checked when their declaration points are checked.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkTreeNodeOutlet]
    }]
  }], () => [], {
    dataSource: [{
      type: Input
    }],
    treeControl: [{
      type: Input
    }],
    levelAccessor: [{
      type: Input
    }],
    childrenAccessor: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    expansionKey: [{
      type: Input
    }],
    _nodeOutlet: [{
      type: ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: ContentChildren,
      args: [CdkTreeNodeDef, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var CdkTreeNode = class _CdkTreeNode {
  _elementRef = inject(ElementRef);
  _tree = inject(CdkTree);
  _tabindex = -1;
  _type = "flat";
  /**
   * The role of the tree node.
   *
   * @deprecated This will be ignored; the tree will automatically determine the appropriate role
   * for tree node. This input will be removed in a future version.
   * @breaking-change 21.0.0
   */
  get role() {
    return "treeitem";
  }
  set role(_role) {
  }
  /**
   * Whether or not this node is expandable.
   *
   * If not using `FlatTreeControl`, or if `isExpandable` is not provided to
   * `NestedTreeControl`, this should be provided for correct node a11y.
   */
  get isExpandable() {
    return this._isExpandable();
  }
  set isExpandable(isExpandable) {
    this._inputIsExpandable = isExpandable;
    if (this.data && !this._isExpandable || !this._inputIsExpandable) {
      return;
    }
    if (this._inputIsExpanded) {
      this.expand();
    } else if (this._inputIsExpanded === false) {
      this.collapse();
    }
  }
  get isExpanded() {
    return this._tree.isExpanded(this._data);
  }
  set isExpanded(isExpanded) {
    this._inputIsExpanded = isExpanded;
    if (isExpanded) {
      this.expand();
    } else {
      this.collapse();
    }
  }
  /**
   * Whether or not this node is disabled. If it's disabled, then the user won't be able to focus
   * or activate this node.
   */
  isDisabled;
  /**
   * The text used to locate this item during typeahead. If not specified, the `textContent` will
   * will be used.
   */
  typeaheadLabel;
  getLabel() {
    return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
  }
  /** This emits when the node has been programatically activated or activated by keyboard. */
  activation = new EventEmitter();
  /** This emits when the node's expansion status has been changed. */
  expandedChange = new EventEmitter();
  /**
   * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
   * in `CdkTree` and set the data to it.
   */
  static mostRecentTreeNode = null;
  /** Subject that emits when the component has been destroyed. */
  _destroyed = new Subject();
  /** Emits when the node's data has changed. */
  _dataChanges = new Subject();
  _inputIsExpandable = false;
  _inputIsExpanded = void 0;
  /**
   * Flag used to determine whether or not we should be focusing the actual element based on
   * some user interaction (click or focus). On click, we don't forcibly focus the element
   * since the click could trigger some other component that wants to grab its own focus
   * (e.g. menu, dialog).
   */
  _shouldFocus = true;
  _parentNodeAriaLevel;
  /** The tree node's data. */
  get data() {
    return this._data;
  }
  set data(value) {
    if (value !== this._data) {
      this._data = value;
      this._dataChanges.next();
    }
  }
  _data;
  /* If leaf node, return true to not assign aria-expanded attribute */
  get isLeafNode() {
    if (this._tree.treeControl?.isExpandable !== void 0 && !this._tree.treeControl.isExpandable(this._data)) {
      return true;
    } else if (this._tree.treeControl?.isExpandable === void 0 && this._tree.treeControl?.getDescendants(this._data).length === 0) {
      return true;
    }
    return false;
  }
  get level() {
    return this._tree._getLevel(this._data) ?? this._parentNodeAriaLevel;
  }
  /** Determines if the tree node is expandable. */
  _isExpandable() {
    if (this._tree.treeControl) {
      if (this.isLeafNode) {
        return false;
      }
      return true;
    }
    return this._inputIsExpandable;
  }
  /**
   * Determines the value for `aria-expanded`.
   *
   * For non-expandable nodes, this is `null`.
   */
  _getAriaExpanded() {
    if (!this._isExpandable()) {
      return null;
    }
    return String(this.isExpanded);
  }
  /**
   * Determines the size of this node's parent's child set.
   *
   * This is intended to be used for `aria-setsize`.
   */
  _getSetSize() {
    return this._tree._getSetSize(this._data);
  }
  /**
   * Determines the index (starting from 1) of this node in its parent's child set.
   *
   * This is intended to be used for `aria-posinset`.
   */
  _getPositionInSet() {
    return this._tree._getPositionInSet(this._data);
  }
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    _CdkTreeNode.mostRecentTreeNode = this;
  }
  ngOnInit() {
    this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
    this._tree._getExpansionModel().changed.pipe(map(() => this.isExpanded), distinctUntilChanged(), takeUntil(this._destroyed)).pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    this._tree._setNodeTypeIfUnset(this._type);
    this._tree._registerNode(this);
  }
  ngOnDestroy() {
    if (_CdkTreeNode.mostRecentTreeNode === this) {
      _CdkTreeNode.mostRecentTreeNode = null;
    }
    this._dataChanges.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  getParent() {
    return this._tree._getNodeParent(this) ?? null;
  }
  getChildren() {
    return this._tree._getNodeChildren(this);
  }
  /** Focuses this data node. Implemented for TreeKeyManagerItem. */
  focus() {
    this._tabindex = 0;
    if (this._shouldFocus) {
      this._elementRef.nativeElement.focus();
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Defocus this data node. */
  unfocus() {
    this._tabindex = -1;
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an activation event. Implemented for TreeKeyManagerItem. */
  activate() {
    if (this.isDisabled) {
      return;
    }
    this.activation.next(this._data);
  }
  /** Collapses this data node. Implemented for TreeKeyManagerItem. */
  collapse() {
    if (this.isExpandable) {
      this._tree.collapse(this._data);
    }
  }
  /** Expands this data node. Implemented for TreeKeyManagerItem. */
  expand() {
    if (this.isExpandable) {
      this._tree.expand(this._data);
    }
  }
  /** Makes the node focusable. Implemented for TreeKeyManagerItem. */
  makeFocusable() {
    this._tabindex = 0;
    this._changeDetectorRef.markForCheck();
  }
  _focusItem() {
    if (this.isDisabled) {
      return;
    }
    this._tree._keyManager.focusItem(this);
  }
  _setActiveItem() {
    if (this.isDisabled) {
      return;
    }
    this._shouldFocus = false;
    this._tree._keyManager.focusItem(this);
    this._shouldFocus = true;
  }
  _emitExpansionState(expanded) {
    this.expandedChange.emit(expanded);
  }
  static \u0275fac = function CdkTreeNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNode)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNode,
    selectors: [["cdk-tree-node"]],
    hostAttrs: ["role", "treeitem", 1, "cdk-tree-node"],
    hostVars: 5,
    hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkTreeNode_click_HostBindingHandler() {
          return ctx._setActiveItem();
        })("focus", function CdkTreeNode_focus_HostBindingHandler() {
          return ctx._focusItem();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabIndex", ctx._tabindex);
        \u0275\u0275attribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
      }
    },
    inputs: {
      role: "role",
      isExpandable: [2, "isExpandable", "isExpandable", booleanAttribute],
      isExpanded: "isExpanded",
      isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
      typeaheadLabel: [0, "cdkTreeNodeTypeaheadLabel", "typeaheadLabel"]
    },
    outputs: {
      activation: "activation",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkTreeNode"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-tree-node",
      exportAs: "cdkTreeNode",
      host: {
        "class": "cdk-tree-node",
        "[attr.aria-expanded]": "_getAriaExpanded()",
        "[attr.aria-level]": "level + 1",
        "[attr.aria-posinset]": "_getPositionInSet()",
        "[attr.aria-setsize]": "_getSetSize()",
        "[tabindex]": "_tabindex",
        "role": "treeitem",
        "(click)": "_setActiveItem()",
        "(focus)": "_focusItem()"
      }
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    isExpandable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isExpanded: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    typeaheadLabel: [{
      type: Input,
      args: ["cdkTreeNodeTypeaheadLabel"]
    }],
    activation: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }]
  });
})();
function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;
  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }
  if (!parent) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw Error("Incorrect tree structure containing detached node.");
    } else {
      return -1;
    }
  } else if (parent.classList.contains("cdk-nested-tree-node")) {
    return numberAttribute(parent.getAttribute("aria-level"));
  } else {
    return 0;
  }
}
function isNodeElement(element) {
  const classList = element.classList;
  return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
  _type = "nested";
  _differs = inject(IterableDiffers);
  /** Differ used to find the changes in the data provided by the data source. */
  _dataDiffer;
  /** The children data dataNodes of current node. They will be placed in `CdkTreeNodeOutlet`. */
  _children;
  /** The children node placeholder. */
  nodeOutlet;
  constructor() {
    super();
  }
  ngAfterContentInit() {
    this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
    this._tree._getDirectChildren(this.data).pipe(takeUntil(this._destroyed)).subscribe((result) => this.updateChildrenNodes(result));
    this.nodeOutlet.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this.updateChildrenNodes());
  }
  ngOnDestroy() {
    this._clear();
    super.ngOnDestroy();
  }
  /** Add children dataNodes to the NodeOutlet */
  updateChildrenNodes(children) {
    const outlet = this._getNodeOutlet();
    if (children) {
      this._children = children;
    }
    if (outlet && this._children) {
      const viewContainer = outlet.viewContainer;
      this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
    } else {
      this._dataDiffer.diff([]);
    }
  }
  /** Clear the children dataNodes. */
  _clear() {
    const outlet = this._getNodeOutlet();
    if (outlet) {
      outlet.viewContainer.clear();
      this._dataDiffer.diff([]);
    }
  }
  /** Gets the outlet for the current node. */
  _getNodeOutlet() {
    const outlets = this.nodeOutlet;
    return outlets && outlets.find((outlet) => !outlet._node || outlet._node === this);
  }
  static \u0275fac = function CdkNestedTreeNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkNestedTreeNode)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkNestedTreeNode,
    selectors: [["cdk-nested-tree-node"]],
    contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkTreeNodeOutlet, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nodeOutlet = _t);
      }
    },
    hostAttrs: [1, "cdk-nested-tree-node"],
    exportAs: ["cdkNestedTreeNode"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNode,
      useExisting: _CdkNestedTreeNode
    }, {
      provide: CDK_TREE_NODE_OUTLET_NODE,
      useExisting: _CdkNestedTreeNode
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-nested-tree-node",
      exportAs: "cdkNestedTreeNode",
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }],
      host: {
        "class": "cdk-nested-tree-node"
      }
    }]
  }], () => [], {
    nodeOutlet: [{
      type: ContentChildren,
      args: [CdkTreeNodeOutlet, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var cssUnitPattern = /([A-Za-z%]+)$/;
var CdkTreeNodePadding = class _CdkTreeNodePadding {
  _treeNode = inject(CdkTreeNode);
  _tree = inject(CdkTree);
  _element = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  /** Current padding value applied to the element. Used to avoid unnecessarily hitting the DOM. */
  _currentPadding;
  /** Subject that emits when the component has been destroyed. */
  _destroyed = new Subject();
  /** CSS units used for the indentation value. */
  indentUnits = "px";
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  _level;
  /**
   * The indent for each level. Can be a number or a CSS string.
   * Default number 40px from material design menu sub-menu spec.
   */
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  _indent = 40;
  constructor() {
    this._setPadding();
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
    this._treeNode._dataChanges.subscribe(() => this._setPadding());
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
  _paddingIndent() {
    const nodeLevel = (this._treeNode.data && this._tree._getLevel(this._treeNode.data)) ?? null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
  }
  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();
    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
      const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
      element.style[paddingProp] = padding || "";
      element.style[resetProp] = "";
      this._currentPadding = padding;
    }
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setLevelInput(value) {
    this._level = isNaN(value) ? null : value;
    this._setPadding();
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setIndentInput(indent) {
    let value = indent;
    let units = "px";
    if (typeof indent === "string") {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }
    this.indentUnits = units;
    this._indent = numberAttribute(value);
    this._setPadding();
  }
  static \u0275fac = function CdkTreeNodePadding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodePadding)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodePadding,
    selectors: [["", "cdkTreeNodePadding", ""]],
    inputs: {
      level: [2, "cdkTreeNodePadding", "level", numberAttribute],
      indent: [0, "cdkTreeNodePaddingIndent", "indent"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodePadding]"
    }]
  }], () => [], {
    level: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["cdkTreeNodePaddingIndent"]
    }]
  });
})();
var CdkTreeNodeToggle = class _CdkTreeNodeToggle {
  _tree = inject(CdkTree);
  _treeNode = inject(CdkTreeNode);
  /** Whether expand/collapse the node recursively. */
  recursive = false;
  constructor() {
  }
  // Toggle the expanded or collapsed state of this node.
  //
  // Focus this node with expanding or collapsing it. This ensures that the active node will always
  // be visible when expanding and collapsing.
  _toggle() {
    this.recursive ? this._tree.toggleDescendants(this._treeNode.data) : this._tree.toggle(this._treeNode.data);
    this._tree._keyManager.focusItem(this._treeNode);
  }
  static \u0275fac = function CdkTreeNodeToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeToggle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeToggle,
    selectors: [["", "cdkTreeNodeToggle", ""]],
    hostAttrs: ["tabindex", "-1"],
    hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
          ctx._toggle();
          return $event.stopPropagation();
        })("keydown.Enter", function CdkTreeNodeToggle_keydown_Enter_HostBindingHandler($event) {
          ctx._toggle();
          return $event.preventDefault();
        })("keydown.Space", function CdkTreeNodeToggle_keydown_Space_HostBindingHandler($event) {
          ctx._toggle();
          return $event.preventDefault();
        });
      }
    },
    inputs: {
      recursive: [2, "cdkTreeNodeToggleRecursive", "recursive", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeToggle]",
      host: {
        "(click)": "_toggle(); $event.stopPropagation();",
        "(keydown.Enter)": "_toggle(); $event.preventDefault();",
        "(keydown.Space)": "_toggle(); $event.preventDefault();",
        "tabindex": "-1"
      }
    }]
  }], () => [], {
    recursive: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];
var CdkTreeModule = class _CdkTreeModule {
  static \u0275fac = function CdkTreeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkTreeModule,
    imports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
    exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeModule, [{
    type: NgModule,
    args: [{
      imports: EXPORTED_DECLARATIONS,
      exports: EXPORTED_DECLARATIONS
    }]
  }], null, null);
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
function ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const node_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.toggleGroup(node_r7.group.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "icon", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", (ctx_r2.isGroupExpanded(node_r7.group.id) ? "Collapse group " : "Expand group ") + ctx_r2.displayName(node_r7.group));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isGroupExpanded(node_r7.group.id) ? "expand_more" : "chevron_right", " ");
  }
}
function ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
}
function ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.childCount(node_r7.group), " ");
  }
}
function ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r7.group.description, " ");
  }
}
function ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cdk-tree-node", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275conditionalCreate(2, ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_2_Template, 3, 2, "button", 23)(3, ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_3_Template, 1, 0, "div", 24);
    \u0275\u0275elementStart(4, "a", 25);
    \u0275\u0275listener("click", function ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.show.set(false));
    });
    \u0275\u0275elementStart(5, "div", 26)(6, "p", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_8_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Conditional_9_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.selected_id() === node_r7.group.id);
    \u0275\u0275property("cdkTreeNodePadding", node_r7.depth)("cdkTreeNodePaddingIndent", 8);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 0.25 * node_r7.depth + "rem")("opacity", 0.1 * node_r7.depth);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.childCount(node_r7.group) > 0 ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r2.subroute() ? \u0275\u0275pureFunction3(13, _c32, ctx_r2.route(), node_r7.group.id, ctx_r2.subroute()) : \u0275\u0275pureFunction2(17, _c42, ctx_r2.route(), node_r7.group.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.displayName(node_r7.group), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.childCount(node_r7.group) > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r7.group.description ? 9 : -1);
  }
}
function ItemSidebarComponent_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "cdk-tree", 18);
    \u0275\u0275template(2, ItemSidebarComponent_Conditional_17_Conditional_0_cdk_tree_node_2_Template, 10, 20, "cdk-tree-node", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.group_tree_items())("levelAccessor", ctx_r2.groupLevelAccessor)("trackBy", ctx_r2.trackByGroupNode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.END_OF_LIST"), " ");
  }
}
function ItemSidebarComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "COMMON.LIST_EMPTY", \u0275\u0275pureFunction1(4, _c12, ctx_r2.title())), " ");
  }
}
function ItemSidebarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ItemSidebarComponent_Conditional_17_Conditional_0_Template, 6, 6, "div", 17)(1, ItemSidebarComponent_Conditional_17_Conditional_1_Template, 4, 6, "div", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.group_tree_items().length ? 0 : 1);
  }
}
function ItemSidebarComponent_Conditional_19_ng_template_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.extra, " ");
  }
}
function ItemSidebarComponent_Conditional_19_ng_template_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 37);
    \u0275\u0275text(1, " new_releases ");
    \u0275\u0275elementEnd();
  }
}
function ItemSidebarComponent_Conditional_19_ng_template_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, " brightness_alert ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().item;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, item_r10.zone_issues === "system" ? "SYSTEMS.MISCONFIGURED" : "ZONES.MISCONFIGURED"));
  }
}
function ItemSidebarComponent_Conditional_19_ng_template_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, " error ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "MODULES.ERROR"));
  }
}
function ItemSidebarComponent_Conditional_19_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ItemSidebarComponent_Conditional_19_ng_template_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show.set(false));
    });
    \u0275\u0275elementStart(2, "p", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275conditionalCreate(5, ItemSidebarComponent_Conditional_19_ng_template_5_Conditional_5_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ItemSidebarComponent_Conditional_19_ng_template_5_Conditional_6_Template, 2, 0, "icon", 37);
    \u0275\u0275conditionalCreate(7, ItemSidebarComponent_Conditional_19_ng_template_5_Conditional_7_Template, 4, 3, "div", 38);
    \u0275\u0275conditionalCreate(8, ItemSidebarComponent_Conditional_19_ng_template_5_Conditional_8_Template, 4, 3, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    const idx_r11 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-base-200", idx_r11 % 2 === 1);
    \u0275\u0275property("routerLink", ctx_r2.subroute() ? \u0275\u0275pureFunction3(11, _c32, ctx_r2.route(), item_r10.id, ctx_r2.subroute()) : \u0275\u0275pureFunction2(15, _c42, ctx_r2.route(), item_r10.id))("matTooltip", item_r10.update_available && item_r10.commit !== item_r10.update_info.commit ? \u0275\u0275pipeBind1(1, 9, "COMMON.UPDATE_AVAILABLE") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r10.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r10.extra ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r10.update_available && item_r10.commit !== item_r10.update_info.commit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r10.zone_issues ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r10.has_runtime_error ? 8 : -1);
  }
}
function ItemSidebarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "virtual-scroll", 32);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("scrolled", function ItemSidebarComponent_Conditional_19_Template_virtual_scroll_scrolled_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.atBottom($event));
    });
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ItemSidebarComponent_Conditional_19_ng_template_5_Template, 9, 18, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_display_r12 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_size", 72)("items", \u0275\u0275pipeBind1(1, 4, ctx_r2.items))("item_template", item_display_r12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "COMMON.END_OF_LIST"), " ");
  }
}
function ItemSidebarComponent_Conditional_20_Template(rf, ctx) {
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
  group_hierarchy = signal([], ...ngDevMode ? [{ debugName: "group_hierarchy" }] : []);
  expanded_groups = signal({}, ...ngDevMode ? [{ debugName: "expanded_groups" }] : []);
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
  selected_id = computed(() => {
    this._route_change();
    return this._router.url.split("/")[2] || "";
  }, ...ngDevMode ? [{ debugName: "selected_id" }] : []);
  group_children_lookup = computed(() => {
    const lookup = {};
    for (const group of this.group_hierarchy()) {
      if (!group.parent_id)
        continue;
      lookup[group.parent_id] ||= [];
      lookup[group.parent_id].push(group);
    }
    return lookup;
  }, ...ngDevMode ? [{ debugName: "group_children_lookup" }] : []);
  group_child_count_lookup = computed(() => {
    const lookup = {};
    for (const group of this.group_hierarchy()) {
      if (!group.parent_id)
        continue;
      lookup[group.parent_id] = (lookup[group.parent_id] || 0) + 1;
    }
    return lookup;
  }, ...ngDevMode ? [{ debugName: "group_child_count_lookup" }] : []);
  group_tree_items = computed(() => {
    const groups = this.group_hierarchy();
    const children = this.group_children_lookup();
    const roots = groups.filter(({ parent_id }) => !parent_id);
    const items = [];
    const addGroup = (group, depth) => {
      items.push({ group, depth });
      if (!this.isGroupExpanded(group.id))
        return;
      for (const child of children[group.id] || [])
        addGroup(child, depth + 1);
    };
    for (const group of roots)
      addGroup(group, 0);
    return items;
  }, ...ngDevMode ? [{ debugName: "group_tree_items" }] : []);
  groupLevelAccessor = (node) => node.depth;
  trackByGroupNode = (_, node) => node.group.id;
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this.subroute.set(this._router.url.split("/")[3] || "");
      if (this.route() === "groups")
        void this.loadGroupHierarchy();
    });
    effect(() => {
      const selected_id = this.selected_id();
      this.group_hierarchy();
      if (this.route() !== "groups" || !selected_id)
        return;
      this.expandGroupPath(selected_id);
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
  displayName(item) {
    return item.display_name || item.name || "<Unnamed>";
  }
  childCount(group) {
    return this.group_child_count_lookup()[group.id] || group.children_count || 0;
  }
  isGroupExpanded(group_id) {
    return !!this.expanded_groups()[group_id];
  }
  toggleGroup(group_id) {
    this.expanded_groups.update((state) => __spreadProps(__spreadValues({}, state), {
      [group_id]: !state[group_id]
    }));
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
      if (item instanceof di) {
        const name = item.system?.display_name || item.system?.name;
        const detail = item.role === Ht.Service ? item.uri : item.role === Ht.Logic ? name ? `${name} | ${item.control_system_id} ` : item.control_system_id : item.ip;
        item.display_name = item.custom_name || item.name || "<Unnamed>";
        item.extra = detail;
      } else if (item instanceof qo) {
        item.display_name = item.name || "<Unnamed>";
        item.extra = item.repo_type;
      } else if (item instanceof pi) {
        item.display_name = item.display_name || item.name || "<Unnamed>";
        item.zone_issues = (item.email || item.map_id) && item.zones.length < 3 ? "system" : "";
      } else if (item instanceof rn) {
        item.display_name = item.display_name || item.name || "<Unnamed>";
        item.zone_issues = (item.tags.includes("level") || item.tags.includes("building") || item.tags.includes("region")) && !item.parent_id ? "zone" : "";
      } else {
        item.display_name = item.display_name || item.custom_name || item.name || "<Unnamed>";
        item.extra = item.id;
      }
    }
    return list;
  }
  async loadGroupHierarchy() {
    const response = await lastValueFrom(Vc({
      limit: 2500,
      fields: [
        "id",
        "name",
        "description",
        "authority_id",
        "parent_id",
        "children_count"
      ].join(",")
    }).pipe(catchError(() => of({ data: [] }))));
    const groups = response.data.sort((a, b) => this.displayName(a).localeCompare(this.displayName(b)));
    this.group_hierarchy.set(groups);
  }
  expandGroupPath(group_id) {
    const path = [];
    let group = this.findGroup(group_id);
    while (group?.parent_id) {
      path.unshift(group.parent_id);
      group = this.findGroup(group.parent_id);
    }
    if (!path.length)
      return;
    const state = this.expanded_groups();
    let changed = false;
    const next_state = __spreadValues({}, state);
    for (const id of path) {
      if (next_state[id])
        continue;
      next_state[id] = true;
      changed = true;
    }
    if (changed)
      this.expanded_groups.set(next_state);
  }
  findGroup(group_id) {
    return this.group_hierarchy().find(({ id }) => id === group_id);
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
  }, inputs: { title: [1, "title"], route: [1, "route"], filter_options: [1, "filter_options"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 23, consts: [["search_input", ""], ["item_display", ""], [1, "border-base-200", "bg-base-100", "flex", "h-full", "w-[24rem]", "max-w-[25vw]", "min-w-64", "flex-col", "space-y-2", "overflow-hidden", "rounded-sm", "shadow-sm", "sm:border-r", 3, "click"], [1, "flex", "items-center", "space-x-2", "px-1", "pt-1"], [1, "border-base-300", "relative", "flex", "flex-1", "items-center", "rounded-lg", "border", "shadow-sm"], [1, "pointer-events-none", "absolute", "top-1/2", "left-1", "-translate-y-1/2", "text-2xl"], [1, "w-full", "flex-1", "rounded-lg", "border-none", "bg-transparent", "py-2.5", "pr-4", "pl-9", 3, "ngModelChange", "ngModel", "placeholder"], ["diameter", "24", 1, "absolute", "top-1/2", "right-2", "mr-2", "-translate-y-1/2"], [1, "relative", "flex", "overflow-hidden"], [1, "w-full", "px-2", "text-sm", "opacity-60"], [1, "border-base-200", "flex", "h-1/2", "flex-1", "flex-col", "border-t"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], ["icon", "", "matRipple", ""], [1, "text-2xl"], ["appearance", "outline", 1, "no-subscript", "absolute", "top-1/2", "-right-2", "-translate-y-1/2", "opacity-0"], ["multiple", "", 3, "ngModelChange", "ngModel"], [1, "capitalize", 3, "value"], [1, "h-full", "overflow-auto"], [1, "group-tree", 3, "dataSource", "levelAccessor", "trackBy"], ["cdkTreeNodePadding", "", "class", "border-base-200 bg-base-100 hover:bg-base-200 relative flex min-h-16 items-center gap-2 border-b pr-2 transition-colors", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "active", 4, "cdkTreeNodeDef"], [1, "bg-base-200", "p-2", "text-center", "text-sm", "opacity-30"], ["cdkTreeNodePadding", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "relative", "flex", "min-h-16", "items-center", "gap-2", "border-b", "pr-2", "transition-colors", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent"], [1, "bg-base-content", "absolute", "inset-y-1", "left-1", "rounded-sm"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors"], [1, "min-w-8"], [1, "flex", "min-w-0", "flex-1", "flex-col", "justify-center", "rounded-md", "py-3", "text-left", "no-underline", 3, "click", "routerLink"], [1, "flex", "min-w-0", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-medium"], [1, "bg-base-200/70", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "mt-0.5", "w-full", "truncate", "text-xs", "opacity-70"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click"], [1, "text-xl"], [3, "scrolled", "item_size", "items", "item_template"], ["routerLinkActive", "active", 1, "border-base-100", "hover:border-info", "relative", "m-1", "flex", "h-16", "w-92", "max-w-[calc(100%-0.5rem)]", "flex-col", "justify-center", "rounded-sm", "border", "px-2", "py-1", 3, "click", "routerLink", "matTooltip"], [1, "w-full", "truncate"], [1, "flex", "w-full"], ["extra", "", 1, "mono", "border-base-300", "mt-1", "max-w-full", "truncate", "rounded-sm", "border", "p-1", "text-[0.625rem]", "opacity-60"], [1, "text-info", "absolute", "-top-1", "-right-1", "rotate-12", "text-2xl"], [1, "bg-warning", "text-warning-content", "absolute", "-top-1", "-right-1", "flex", "h-8", "w-8", "rotate-12", "items-center", "justify-center", "rounded-full", "text-2xl", 3, "matTooltip"], [1, "bg-error", "text-error-content", "absolute", "-top-1", "-right-1", "flex", "h-8", "w-8", "rotate-12", "items-center", "justify-center", "rounded-full", "text-2xl", 3, "matTooltip"]], template: function ItemSidebarComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(17, ItemSidebarComponent_Conditional_17_Template, 2, 1);
      \u0275\u0275pipe(18, "async");
      \u0275\u0275conditionalBranchCreate(19, ItemSidebarComponent_Conditional_19_Template, 7, 8)(20, ItemSidebarComponent_Conditional_20_Template, 4, 6, "div", 11);
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
      const t_r13 = \u0275\u0275pipeBind1(13, 11, ctx.total);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(15, 13, "COMMON.TOTAL_ITEMS", \u0275\u0275pureFunction1(21, _c22, t_r13), t_r13), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.route() === "groups" && !ctx.search.trim() ? 17 : ((tmp_7_0 = \u0275\u0275pipeBind1(18, 17, ctx.items)) == null ? null : tmp_7_0.length) ? 19 : 20);
    }
  }, dependencies: [
    CommonModule,
    CdkTreeModule,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    CdkTree,
    CdkTreeNode,
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
    MatRippleModule,
    MatRipple,
    AsyncPipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\nscroll-item[_ngcontent-%COMP%]:nth-child(2n)    > a[_ngcontent-%COMP%] {\n  background-color: var(--base-200);\n}\n.active[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n  color: var(--secondary-content);\n}\n.group-tree[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=item-sidebar.component.css.map */"] });
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
                @if (route() === 'groups' && !search.trim()) {
                    @if (group_tree_items().length) {
                        <div class="h-full overflow-auto">
                            <cdk-tree
                                class="group-tree"
                                [dataSource]="group_tree_items()"
                                [levelAccessor]="groupLevelAccessor"
                                [trackBy]="trackByGroupNode"
                            >
                                <cdk-tree-node
                                    *cdkTreeNodeDef="let node"
                                    cdkTreeNodePadding
                                    [cdkTreeNodePadding]="node.depth"
                                    [cdkTreeNodePaddingIndent]="8"
                                    class="border-base-200 bg-base-100 hover:bg-base-200 relative flex min-h-16 items-center gap-2 border-b pr-2 transition-colors"
                                    [class.active]="
                                        selected_id() === node.group.id
                                    "
                                >
                                    <div
                                        class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                                        [style.width]="
                                            0.25 * node.depth + 'rem'
                                        "
                                        [style.opacity]="0.1 * node.depth"
                                    ></div>
                                    @if (childCount(node.group) > 0) {
                                        <button
                                            type="button"
                                            class="hover:bg-base-content/20 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                            [attr.aria-label]="
                                                (isGroupExpanded(node.group.id)
                                                    ? 'Collapse group '
                                                    : 'Expand group ') +
                                                displayName(node.group)
                                            "
                                            (click)="
                                                toggleGroup(node.group.id);
                                                $event.stopPropagation()
                                            "
                                        >
                                            <icon class="text-xl">
                                                {{
                                                    isGroupExpanded(
                                                        node.group.id
                                                    )
                                                        ? 'expand_more'
                                                        : 'chevron_right'
                                                }}
                                            </icon>
                                        </button>
                                    } @else {
                                        <div class="min-w-8"></div>
                                    }
                                    <a
                                        class="flex min-w-0 flex-1 flex-col justify-center rounded-md py-3 text-left no-underline"
                                        [routerLink]="
                                            subroute()
                                                ? [
                                                      '/',
                                                      route(),
                                                      node.group.id,
                                                      subroute(),
                                                  ]
                                                : ['/', route(), node.group.id]
                                        "
                                        (click)="show.set(false)"
                                    >
                                        <div
                                            class="flex min-w-0 items-center gap-2"
                                        >
                                            <p
                                                class="min-w-0 flex-1 truncate font-medium"
                                            >
                                                {{ displayName(node.group) }}
                                            </p>
                                            @if (childCount(node.group) > 0) {
                                                <span
                                                    class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                                >
                                                    {{ childCount(node.group) }}
                                                </span>
                                            }
                                        </div>
                                        @if (node.group.description) {
                                            <p
                                                class="mt-0.5 w-full truncate text-xs opacity-70"
                                            >
                                                {{ node.group.description }}
                                            </p>
                                        }
                                    </a>
                                </cdk-tree-node>
                            </cdk-tree>
                            <div
                                class="bg-base-200 p-2 text-center text-sm opacity-30"
                            >
                                {{ 'COMMON.END_OF_LIST' | translate }}
                            </div>
                        </div>
                    } @else {
                        <div
                            class="flex flex-col items-center justify-center p-8 opacity-30"
                        >
                            <p>
                                {{
                                    'COMMON.LIST_EMPTY'
                                        | translate: { name: title() }
                                }}
                            </p>
                        </div>
                    }
                } @else if ((items | async)?.length) {
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
      CdkTreeModule,
      TranslatePipe,
      MatTooltipModule,
      IconComponent,
      RouterModule,
      FormsModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      VirtualScrollComponent,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;f64dcb7020768117612a1d36057623d435a8b2c53ece603353a9ba5f8bd6101b;/home/runner/work/backoffice/backoffice/src/app/ui/item-sidebar.component.ts */\n:host {\n  height: 100%;\n}\nscroll-item:nth-child(2n) > a {\n  background-color: var(--base-200);\n}\n.active {\n  background-color: var(--secondary) !important;\n  color: var(--secondary-content);\n}\n.group-tree {\n  background: transparent;\n}\n/*# sourceMappingURL=item-sidebar.component.css.map */\n"] }]
  }], () => [], { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], route: [{ type: Input, args: [{ isSignal: true, alias: "route", required: false }] }], filter_options: [{ type: Input, args: [{ isSignal: true, alias: "filter_options", required: false }] }], _input: [{ type: ViewChild, args: ["search_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemSidebarComponent, { className: "ItemSidebarComponent", filePath: "src/app/ui/item-sidebar.component.ts", lineNumber: 357 });
})();

// src/app/ui/item-tablist.component.ts
var _c04 = () => ({});
var _forTrack02 = ($index, $item) => $item.id;
function ItemTablistComponent_For_4_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function ItemTablistComponent_For_4_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", link_r1.count || "0", " ");
  }
}
function ItemTablistComponent_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, ItemTablistComponent_For_4_Conditional_6_Conditional_1_Template, 1, 0, "span", 10)(2, ItemTablistComponent_For_4_Conditional_6_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isRouteLoading(link_r1.id) ? 1 : 2);
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
    \u0275\u0275conditionalCreate(6, ItemTablistComponent_For_4_Conditional_6_Template, 3, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const rla_r3 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/" + ctx_r1.base() + "/" + ctx_r1.item_id() + "/" + link_r1.id)("queryParams", link_r1.query || \u0275\u0275pureFunction0(6, _c04))("active", rla_r3.isActive);
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
  loading_route = signal("", ...ngDevMode ? [{ debugName: "loading_route" }] : []);
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this._updateID();
    });
  }
  ngOnInit() {
    this.subscription("route_load", this._router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading_route.set(event.route.path || "");
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loading_route.set("");
      }
      if (event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading_route.set("");
      }
    }));
    this.subscription("right", this._hotkey.listen(["ArrowRight"], () => this._changeTab(1)));
    this.subscription("left", this._hotkey.listen(["ArrowLeft"], () => this._changeTab(-1)));
  }
  isRouteLoading(tab_id) {
    return this.loading_route().split("/")[0] === tab_id.split("/")[0];
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemTablistComponent, selectors: [["item-tablist"]], inputs: { base: [1, "base"], item_id: [1, "item_id"], tabs: [1, "tabs"], scrolled: [1, "scrolled"] }, outputs: { item_id: "item_idChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [["tabPanel", ""], ["rla", "routerLinkActive"], [1, "border-base-300", "h-12", "w-full", "border-b"], [1, "h-14", "w-full", "overflow-hidden"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", "routerLinkActive", "", 1, "tab", 3, "routerLink", "queryParams", "active"], [1, "hidden"], [1, "text-xl", 3, "icon"], [1, "name"], [1, "mono", "bg-base-200", "flex", "h-5", "min-w-5", "items-center", "justify-center", "rounded-full", "px-1.5", "text-[0.625rem]"], ["role", "status", "aria-label", "Loading tab", 1, "h-3", "w-3", "animate-spin", "rounded-full", "border-2", "border-current/30", "border-t-current"]], template: function ItemTablistComponent_Template(rf, ctx) {
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
                                    @if (isRouteLoading(link.id)) {
                                        <span
                                            role="status"
                                            aria-label="Loading tab"
                                            class="h-3 w-3 animate-spin rounded-full border-2 border-current/30 border-t-current"
                                        ></span>
                                    } @else {
                                        {{ link.count || '0' }}
                                    }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemTablistComponent, { className: "ItemTablistComponent", filePath: "src/app/ui/item-tablist.component.ts", lineNumber: 85 });
})();

export {
  ItemDetailsSkeletonComponent,
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
};
//# sourceMappingURL=chunk-FMH7X4VQ.js.map
