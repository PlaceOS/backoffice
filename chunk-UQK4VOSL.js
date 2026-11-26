import {
  DebugOutputComponent,
  SidebarMenuComponent
} from "./chunk-HVWDE7GG.js";
import {
  PlaceDebugService
} from "./chunk-6AOLVNRL.js";
import {
  AdminDomainSelectComponent
} from "./chunk-YYC573KB.js";
import {
  refocusIfLost
} from "./chunk-2GN5J46I.js";
import {
  VirtualScrollComponent
} from "./chunk-UKX5GNV3.js";
import {
  ActiveItemService,
  USER_DOMAIN_KEY,
  tagQuery
} from "./chunk-BMBCYN44.js";
import {
  AdminDataService
} from "./chunk-5D2EQCRN.js";
import {
  toSignal
} from "./chunk-FF4ADQI6.js";
import {
  HotkeysService
} from "./chunk-NVIFDAFS.js";
import {
  SpinnerComponent
} from "./chunk-24SP3OZG.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-LL56AHAM.js";
import {
  AsyncHandler
} from "./chunk-44FYJ5G4.js";
import {
  SelectComponent
} from "./chunk-U6VSGXZ4.js";
import {
  OptionComponent
} from "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-ZOC3VF7F.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5APMNGCP.js";
import {
  TranslatePipe
} from "./chunk-LUXSIEQ6.js";
import {
  PlaceDriverRole
} from "./chunk-LD3K5ATK.js";
import {
  IconComponent
} from "./chunk-ZCU5RNS5.js";
import {
  TooltipDirective
} from "./chunk-TX7UOGZW.js";
import {
  Component,
  DestroyRef,
  Injector,
  Input,
  Output,
  ViewChild,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  model,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefer,
  ɵɵdeferOnImmediate,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomTemplate,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

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

// src/app/ui/item-selection.component.ts
var _c0 = ["search_input"];
var _c1 = ["trigger"];
var _c2 = ["*"];
var _c3 = (a0) => ({ name: a0 });
var _c4 = (a0) => ({ count: a0 });
var _c5 = (a0, a1, a2) => ["/", a0, a1, a2];
var _c6 = (a0, a1) => ["/", a0, a1];
function ItemSelectionComponent_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 14);
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ItemSelectionComponent_Conditional_11_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const trigger_r4 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(ctx_r1.closeAndFocus(trigger_r4));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLOSE"));
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    \u0275\u0275property("value", option_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r6, " ");
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-field", 16)(1, "icon", 22);
    \u0275\u0275text(2, " filter_list ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-select", 23);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ItemSelectionComponent_Conditional_11_Conditional_10_Template_app_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selected_filters, $event) || (ctx_r1.selected_filters = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ItemSelectionComponent_Conditional_11_Conditional_10_Template_app_select_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSearch(ctx_r1.search));
    });
    \u0275\u0275repeaterCreate(6, ItemSelectionComponent_Conditional_11_Conditional_10_For_7_Template, 2, 2, "app-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 3, "COMMON.FILTER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selected_filters);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 5, "COMMON.FILTER"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filter_options());
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "admin-domain-select", 28);
    \u0275\u0275listener("changed", function ItemSelectionComponent_Conditional_11_Conditional_11_Conditional_5_Template_admin_domain_select_changed_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setUserDomain($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("key", ctx_r1.user_domain_key);
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 25)(1, "input", 26, 2);
    \u0275\u0275listener("change", function ItemSelectionComponent_Conditional_11_Conditional_11_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r7);
      const deleted_box_r8 = \u0275\u0275reference(2);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setIncludeDeleted(deleted_box_r8.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ItemSelectionComponent_Conditional_11_Conditional_11_Conditional_5_Template, 1, 1, "admin-domain-select", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.include_deleted());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "USERS.INCLUDE_DELETED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.domain_list().length ? 5 : -1);
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function ItemSelectionComponent_Conditional_11_Conditional_16_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.retryList());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "COMMON.LIST_LOAD_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-busy", ctx_r1.loading())("aria-disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "COMMON.RETRY"), " ");
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_16_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "USERS.DELETED"), " ");
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_16_ng_template_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r13.extra, " ");
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275listener("click", function ItemSelectionComponent_Conditional_11_Conditional_16_ng_template_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 34)(2, "p", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ItemSelectionComponent_Conditional_11_Conditional_16_ng_template_3_Conditional_4_Template, 3, 3, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ItemSelectionComponent_Conditional_11_Conditional_16_ng_template_3_Conditional_5_Template, 3, 1, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.item;
    const idx_r14 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-base-content/5", idx_r14 % 2 === 1);
    \u0275\u0275property("routerLink", ctx_r1.subroute() ? \u0275\u0275pureFunction3(6, _c5, ctx_r1.route(), item_r13.id, ctx_r1.subroute()) : \u0275\u0275pureFunction2(10, _c6, ctx_r1.route(), item_r13.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r13.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.route() === "users" && item_r13.deleted ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r13.extra ? 5 : -1);
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "virtual-scroll", 29);
    \u0275\u0275listener("scrolled", function ItemSelectionComponent_Conditional_11_Conditional_16_Template_virtual_scroll_scrolled_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atBottom($event));
    });
    \u0275\u0275conditionalCreate(1, ItemSelectionComponent_Conditional_11_Conditional_16_Conditional_1_Template, 6, 8, "div", 30)(2, ItemSelectionComponent_Conditional_11_Conditional_16_Conditional_2_Template, 3, 3, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ItemSelectionComponent_Conditional_11_Conditional_16_ng_template_3_Template, 6, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_display_r15 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item_size", 72)("items", ctx_r1.items())("item_template", item_display_r15);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.list_failed() ? 1 : 2);
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function ItemSelectionComponent_Conditional_11_Conditional_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retryList());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "COMMON.LIST_LOAD_ERROR"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-busy", ctx_r1.loading())("aria-disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "COMMON.RETRY"), " ");
  }
}
function ItemSelectionComponent_Conditional_11_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r1.search ? "COMMON.SEARCH_EMPTY" : "COMMON.LIST_EMPTY", \u0275\u0275pureFunction1(4, _c3, ctx_r1.title())), " ");
  }
}
function ItemSelectionComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function ItemSelectionComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "icon", 12);
    \u0275\u0275text(4, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 13, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ItemSelectionComponent_Conditional_11_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ItemSelectionComponent_Conditional_11_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ItemSelectionComponent_Conditional_11_Conditional_8_Template, 1, 0, "app-spinner", 14);
    \u0275\u0275conditionalCreate(9, ItemSelectionComponent_Conditional_11_Conditional_9_Template, 4, 3, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ItemSelectionComponent_Conditional_11_Conditional_10_Template, 8, 7, "app-form-field", 16);
    \u0275\u0275conditionalCreate(11, ItemSelectionComponent_Conditional_11_Conditional_11_Template, 6, 5);
    \u0275\u0275elementStart(12, "p", 17);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18);
    \u0275\u0275conditionalCreate(16, ItemSelectionComponent_Conditional_11_Conditional_16_Template, 5, 4)(17, ItemSelectionComponent_Conditional_11_Conditional_17_Template, 7, 8, "div", 19)(18, ItemSelectionComponent_Conditional_11_Conditional_18_Template, 4, 6, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 8, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction1(15, _c3, ctx_r1.title())));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dismissible() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filter_options().length ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.route() === "users" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(14, 11, "COMMON.TOTAL_ITEMS", \u0275\u0275pureFunction1(17, _c4, ctx_r1.total()), ctx_r1.total()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.items().length ? 16 : ctx_r1.list_failed() ? 17 : !ctx_r1.loading() ? 18 : -1);
  }
}
var ItemSelectionComponent = class _ItemSelectionComponent extends AsyncHandler {
  _router = inject(Router);
  _hotkeys = inject(HotkeysService);
  _service = inject(ActiveItemService);
  _route_change = toSignal(this._router.events, {
    initialValue: null
  });
  show = model(
    true,
    ...ngDevMode ? [{ debugName: "show" }] : (
      /* istanbul ignore next */
      []
    )
  );
  title = input(
    void 0,
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  route = input(
    "systems",
    ...ngDevMode ? [{ debugName: "route" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Tag filters for the item list */
  filter_options = input(
    [],
    ...ngDevMode ? [{ debugName: "filter_options" }] : (
      /* istanbul ignore next */
      []
    )
  );
  subroute = signal(
    "",
    ...ngDevMode ? [{ debugName: "subroute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  include_deleted = this._service.include_deleted;
  setIncludeDeleted = (include) => {
    this._resetLoadMore();
    this._service.setIncludeDeleted(include);
  };
  user_domain_key = USER_DOMAIN_KEY;
  domain_list = inject(AdminDataService).domain_list;
  setUserDomain = (domain) => {
    this._resetLoadMore();
    this._service.setUserDomain(domain);
  };
  /** Whether the last page request failed */
  list_failed = this._service.list_failed;
  /** Request the page that failed again */
  retryList() {
    this._retried = true;
    this._service.moreItems();
  }
  _retried = false;
  _injector = inject(Injector);
  /** A retry that loads removes Retry. Then the search box gets the focus. */
  _refocus_after_retry = effect(
    () => {
      if (this.list_failed() || !this._retried)
        return;
      this._retried = false;
      refocusIfLost(this._injector, () => this._input()?.nativeElement);
    },
    ...ngDevMode ? [{ debugName: "_refocus_after_retry" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** A new query starts a new list, so load-more must not wait */
  _resetLoadMore() {
    this.last_total = 0;
    this.last_check = 0;
  }
  last_total = 0;
  last_check = 0;
  search = "";
  selected_filters = [];
  /** List of items for the active route */
  items = computed(
    () => this._processItems(this._service.type, this._service.list()),
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether list of items for the active route are loading */
  loading = this._service.loading_list;
  /** Total number of items in the last request */
  total = this._service.count;
  _manual_open = signal(
    false,
    ...ngDevMode ? [{ debugName: "_manual_open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _input = viewChild(
    "search_input",
    ...ngDevMode ? [{ debugName: "_input" }] : (
      /* istanbul ignore next */
      []
    )
  );
  show_view = computed(
    () => {
      return this.show() || !this._service.active_item;
    },
    ...ngDevMode ? [{ debugName: "show_view" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the picker can close. It cannot while no item is open. */
  dismissible = computed(
    () => !!this._service.active_item$(),
    ...ngDevMode ? [{ debugName: "dismissible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this.subroute.set(this._router.url.split("/")[3] || "");
    });
    effect(() => {
      const loading = this._service.loading();
      const active_item = this._service.active_item$();
      if (!loading && !this._manual_open()) {
        this.show.set(!active_item);
      }
    });
  }
  ngOnInit() {
    this.subscription("hotkey", this._hotkeys.listen(["Alt", "Shift", "KeyK"], () => this.open()));
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
    this._manual_open.set(true);
    this.show.set(true);
    this.timeout("focus", () => this.focusInput());
  }
  close() {
    this._manual_open.set(false);
    this.show.set(false);
  }
  _trigger = viewChild(
    "trigger",
    ...ngDevMode ? [{ debugName: "_trigger" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Escape in the open picker closes it */
  onEscape() {
    if (!this.show_view() || !this.dismissible())
      return;
    this.closeAndFocus(this._trigger().nativeElement);
  }
  /** Close, and give focus back to the button that opens the picker */
  closeAndFocus(trigger) {
    this.close();
    trigger.focus();
  }
  focusInput() {
    this._input()?.nativeElement.focus();
  }
  updateSearch(str) {
    this._resetLoadMore();
    this._service.setSearch(tagQuery(str, this.selected_filters));
  }
  /** Whether to update the list of items */
  get is_stale() {
    const now = Date.now();
    const last_check = this.last_check;
    return this.last_total !== this._service.list_items().length || // A failed page has no new rows. Try it again at once.
    this._service.list_failed() || now - last_check > 60 * 1e3;
  }
  /**
   * Check if user has scrolled to the bottom of the sidebar and emit an event to get next page of items
   */
  async atBottom([_start, end]) {
    this.timeout("load_more", async () => {
      const loading = this.loading();
      const items = this.items();
      if (loading || !this.is_stale)
        return;
      if (end >= items.length) {
        this.last_total = items.length;
        this.last_check = Date.now();
        if (this.last_total < this.total()) {
          this._service.moreItems();
        }
      }
    }, 150);
  }
  /** Add the display name and details of each item of the `type` section */
  _processItems(type, list) {
    for (const item of list) {
      if (type === "modules") {
        const mod = item;
        const detail = mod.role === PlaceDriverRole.Service ? mod.uri : mod.role === PlaceDriverRole.Logic ? mod.control_system_id : mod.ip;
        item.display_name = mod.custom_name || mod.name || "<Unnamed>";
        item.extra = detail;
      } else if (type === "repositories") {
        const repo = item;
        item.display_name = repo.name || "<Unnamed>";
        item.extra = repo.repo_type;
      } else {
        item.display_name = item.display_name || item.custom_name || item.name || "<Unnamed>";
        item.extra = item.id;
      }
    }
    return list;
  }
  static \u0275fac = function ItemSelectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemSelectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemSelectionComponent, selectors: [["item-selection"]], viewQuery: function ItemSelectionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input, _c0, 5)(ctx._trigger, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, hostBindings: function ItemSelectionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function ItemSelectionComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      });
    }
  }, inputs: { show: [1, "show"], title: [1, "title"], route: [1, "route"], filter_options: [1, "filter_options"] }, outputs: { show: "showChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c2, decls: 12, vars: 7, consts: [["trigger", ""], ["search_input", ""], ["deleted_box", ""], ["item_display", ""], [1, "border-base-300", "flex", "w-full", "items-center", "justify-center", "border-b", "p-2"], ["aria-keyshortcuts", "Alt+Shift+K", 1, "border-base-300", "flex", "max-w-[calc(100vw-1rem)]", "flex-1", "items-center", "rounded-lg", "border", "sm:max-w-lg", "sm:flex-auto", 3, "click"], [1, "ml-2", "text-2xl"], [1, "w-1/2", "flex-1", "p-2", "text-left", "text-lg", "opacity-30"], ["aria-hidden", "true", 1, "keycap", "mr-2", "text-xs"], ["aria-hidden", "true", 1, "animate-fade-in", "bg-base-100/80", "absolute", "inset-x-0", "top-full", "h-screen", 3, "click"], [1, "animate-dialog-enter", "bg-base-100", "border-base-300", "absolute", "top-[calc(100%+0.5rem)]", "left-1/2", "flex", "h-[calc(100dvh-12rem)]", "w-lg", "max-w-[calc(100%-1rem)]", "-translate-x-1/2", "flex-col", "space-y-2", "overflow-y-auto", "rounded-sm", "border", "shadow-sm"], [1, "border-base-300", "relative", "flex", "items-center", "border-b"], [1, "pointer-events-none", "absolute", "top-1/2", "left-2", "-translate-y-1/2", "text-2xl"], [1, "flex-1", "border-none", "bg-transparent", "py-4", "pr-4", "pl-10", 3, "ngModelChange", "ngModel", "placeholder"], ["diameter", "24", 1, "mr-2"], ["icon", "", "type", "button", 1, "mr-1"], [1, "no-subscript", "px-2"], [1, "w-full", "px-4", "text-sm", "opacity-60", "text-left"], [1, "border-base-300", "flex", "min-h-48", "flex-1", "flex-col"], ["role", "alert", 1, "flex", "flex-col", "items-center", "gap-2", "p-8"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], ["icon", "", "type", "button", 1, "mr-1", 3, "click"], ["prefix", "", 1, "pointer-events-none", "text-2xl"], ["multiple", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "capitalize", 3, "value"], [1, "flex", "items-center", "gap-2", "px-2"], ["type", "checkbox", "role", "switch", 3, "change", "checked"], ["all", "", "field_class", "no-subscript w-full", 1, "block", "px-2", 3, "key"], ["all", "", "field_class", "no-subscript w-full", 1, "block", "px-2", 3, "changed", "key"], [1, "min-h-0", "flex-1", 3, "scrolled", "item_size", "items", "item_template"], ["role", "alert", 1, "bg-base-200", "flex", "items-center", "justify-center", "gap-2", "p-2", "text-sm"], [1, "bg-base-200", "p-2", "text-center", "text-sm", "opacity-30"], ["btn", "", "ripple", "", 1, "clear", 3, "click"], ["routerLinkActive", "active", 1, "m-2", "block", "max-w-[calc(100vw-2rem)]", "rounded-sm", "p-2", "text-left", 3, "click", "routerLink"], [1, "flex", "min-w-0", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate"], [1, "bg-error", "text-error-content", "shrink-0", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "inline-block", "w-full", "overflow-hidden"], ["extra", "", 1, "mono", "bg-base-content/10", "/5", "mt-1", "max-w-full", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "opacity-60"], ["btn", "", "ripple", "", 3, "click"]], template: function ItemSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 4);
      \u0275\u0275projection(1);
      \u0275\u0275elementStart(2, "button", 5, 0);
      \u0275\u0275listener("click", function ItemSelectionComponent_Template_button_click_2_listener() {
        return ctx.open();
      });
      \u0275\u0275elementStart(4, "icon", 6);
      \u0275\u0275text(5, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 7);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Alt \u21E7 K");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, ItemSelectionComponent_Conditional_11_Template, 19, 19);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 2, "COMMON.VIEW_TYPE", \u0275\u0275pureFunction1(5, _c3, ctx.title())), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.show_view() ? 11 : -1);
    }
  }, dependencies: [
    AdminDomainSelectComponent,
    FormFieldComponent,
    OptionComponent,
    SelectComponent,
    SpinnerComponent,
    IconComponent,
    VirtualScrollComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\na.active[_ngcontent-%COMP%] {\n  background-color: var(--%NS%secondary) !important;\n  color: #fff;\n}\n/*# sourceMappingURL=item-selection.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemSelectionComponent, [{
    type: Component,
    args: [{ selector: "item-selection", host: { "(keydown.escape)": "onEscape()" }, template: `
        <div
            class="border-base-300 flex w-full items-center justify-center border-b p-2"
        >
            <ng-content />
            <button
                #trigger
                (click)="open()"
                aria-keyshortcuts="Alt+Shift+K"
                class="border-base-300 flex max-w-[calc(100vw-1rem)] flex-1 items-center rounded-lg border sm:max-w-lg sm:flex-auto"
            >
                <icon class="ml-2 text-2xl">search</icon>
                <p class="w-1/2 flex-1 p-2 text-left text-lg opacity-30">
                    {{ 'COMMON.VIEW_TYPE' | translate: { name: title() } }}
                </p>
                <span class="keycap mr-2 text-xs" aria-hidden="true"
                    >Alt \u21E7 K</span
                >
            </button>
        </div>
        @if (show_view()) {
            <!-- Below the bar, so the menu button in the bar stays usable.
                 A pointer closes the picker here; the keyboard uses Close or Escape. -->
            <div
                class="animate-fade-in bg-base-100/80 absolute inset-x-0 top-full h-screen"
                aria-hidden="true"
                (click)="close()"
            ></div>
            <!-- It stops above the add buttons of the shell (bottom 7.5rem), which
                 stay usable: with no item open, they are the way to make the
                 first item. On a short screen the panel gets smaller and scrolls,
                 and the results keep their minimum height. -->
            <div
                class="animate-dialog-enter bg-base-100 border-base-300 absolute top-[calc(100%+0.5rem)] left-1/2 flex h-[calc(100dvh-12rem)] w-lg max-w-[calc(100%-1rem)] -translate-x-1/2 flex-col space-y-2 overflow-y-auto rounded-sm border shadow-sm"
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
                        @if (loading()) {
                            <app-spinner diameter="24" class="mr-2" />
                        }
                        <!-- With no item open, the picker is the page and does not close -->
                        @if (dismissible()) {
                            <button
                                icon
                                type="button"
                                class="mr-1"
                                [attr.aria-label]="'COMMON.CLOSE' | translate"
                                (click)="closeAndFocus(trigger)"
                            >
                                <icon>close</icon>
                            </button>
                        }
                    </div>
                    @if (filter_options().length) {
                        <app-form-field class="no-subscript px-2">
                            <icon prefix class="pointer-events-none text-2xl">
                                filter_list
                            </icon>
                            <app-select
                                multiple
                                [attr.aria-label]="'COMMON.FILTER' | translate"
                                [placeholder]="'COMMON.FILTER' | translate"
                                [(ngModel)]="selected_filters"
                                (ngModelChange)="updateSearch(search)"
                            >
                                @for (option of filter_options(); track option) {
                                    <app-option [value]="option" class="capitalize">
                                        {{ option }}
                                    </app-option>
                                }
                            </app-select>
                        </app-form-field>
                    }
                    @if (route() === 'users') {
                        <label class="flex items-center gap-2 px-2">
                            <input
                                #deleted_box
                                type="checkbox"
                                role="switch"
                                [checked]="include_deleted()"
                                (change)="setIncludeDeleted(deleted_box.checked)"
                            />
                            {{ 'USERS.INCLUDE_DELETED' | translate }}
                        </label>
                        <!-- Domains load for admins only -->
                        @if (domain_list().length) {
                            <admin-domain-select
                                class="block px-2"
                                all
                                field_class="no-subscript w-full"
                                [key]="user_domain_key"
                                (changed)="setUserDomain($event)"
                            />
                        }
                    }
                    <p class="w-full px-4 text-sm opacity-60 text-left">
                        {{
                            'COMMON.TOTAL_ITEMS'
                                | translate: { count: total() }:total()
                        }}
                    </p>
                    <div class="border-base-300 flex min-h-48 flex-1 flex-col">
                        @if (items().length) {
                            <virtual-scroll
                                [item_size]="72"
                                [items]="items()"
                                [item_template]="item_display"
                                (scrolled)="atBottom($event)"
                                class="min-h-0 flex-1"
                            >
                                @if (list_failed()) {
                            <div
                                role="alert"
                                class="bg-base-200 flex items-center justify-center gap-2 p-2 text-sm"
                            >
                                {{ 'COMMON.LIST_LOAD_ERROR' | translate }}
                                <button btn ripple class="clear" [attr.aria-busy]="loading()"
                            [attr.aria-disabled]="loading()"
                            (click)="retryList()">
                                    {{ 'COMMON.RETRY' | translate }}
                                </button>
                            </div>
                        } @else {
                            <div
                                class="bg-base-200 p-2 text-center text-sm opacity-30"
                            >
                                {{ 'COMMON.END_OF_LIST' | translate }}
                            </div>
                        }
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
                                    (click)="close()"
                                >
                                    <div class="flex min-w-0 items-center gap-2">
                                        <p class="min-w-0 flex-1 truncate">
                                            {{ item.name }}
                                        </p>
                                        @if (route() === 'users' && item.deleted) {
                                            <span
                                                class="bg-error text-error-content shrink-0 rounded-full px-2 py-0.5 text-xs"
                                            >
                                                {{ 'USERS.DELETED' | translate }}
                                            </span>
                                        }
                                    </div>
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
                        } @else if (list_failed()) {
                            <div
                                role="alert"
                                class="flex flex-col items-center gap-2 p-8"
                            >
                                <p>{{ 'COMMON.LIST_LOAD_ERROR' | translate }}</p>
                                <button btn ripple [attr.aria-busy]="loading()"
                            [attr.aria-disabled]="loading()"
                            (click)="retryList()">
                                    {{ 'COMMON.RETRY' | translate }}
                                </button>
                            </div>
                        } @else if (!loading()) {
                            <!-- The search box shows a spinner while the list loads -->
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
        }
    `, imports: [
      AdminDomainSelectComponent,
      FormFieldComponent,
      OptionComponent,
      SelectComponent,
      SpinnerComponent,
      TranslatePipe,
      IconComponent,
      VirtualScrollComponent,
      RouterModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;15ea998cd7e6eada;/home/runner/work/backoffice/backoffice/src/app/ui/item-selection.component.ts */\n:host {\n  display: block;\n  position: relative;\n}\na:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\na.active {\n  background-color: var(--secondary) !important;\n  color: #fff;\n}\n/*# sourceMappingURL=item-selection.component.css.map */\n"] }]
  }], () => [], { show: [{ type: Input, args: [{ isSignal: true, alias: "show", required: false }] }, { type: Output, args: ["showChange"] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], route: [{ type: Input, args: [{ isSignal: true, alias: "route", required: false }] }], filter_options: [{ type: Input, args: [{ isSignal: true, alias: "filter_options", required: false }] }], _input: [{ type: ViewChild, args: ["search_input", { isSignal: true }] }], _trigger: [{ type: ViewChild, args: ["trigger", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemSelectionComponent, { className: "ItemSelectionComponent", filePath: "src/app/ui/item-selection.component.ts", lineNumber: 295 });
})();

// src/app/ui/item-shell.component.ts
var _c02 = ["*"];
var ItemShellComponent_Defer_6_DepsFn = () => [
  /* @ts-ignore */
  import("./chunk-FYU7PEG7.js").then((m) => m.ItemSidebarComponent),
  TranslatePipe
];
var ItemShellComponent_Conditional_18_Defer_2_DepsFn = () => [
  /* @ts-ignore */
  import("./chunk-AD3SPXS4.js").then((m) => m.ItemTablistComponent),
  /* @ts-ignore */
  import("./chunk-F3PNPK53.js").then((m) => m.ItemDetailsComponent),
  RouterOutlet,
  TranslatePipe
];
function ItemShellComponent_Defer_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-sidebar", 15);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("route", ctx_r1.name())("title", \u0275\u0275pipeBind1(1, 3, ctx_r1.i18n_key() + ".PLURAL"))("filter_options", ctx_r1.filter_options());
  }
}
function ItemShellComponent_DeferLoading_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function ItemShellComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function ItemShellComponent_Conditional_18_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 18);
    \u0275\u0275elementStart(3, "div", 19, 1);
    \u0275\u0275listener("scroll", function ItemShellComponent_Conditional_18_Defer_0_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r3);
      const el_r4 = \u0275\u0275reference(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scroll.set(el_r4.scrollTop));
    });
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", ctx_r1.display_item())("extra_actions", ctx_r1.extra_actions())("type", \u0275\u0275pipeBind1(1, 6, ctx_r1.i18n_key() + ".SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r1.name())("tabs", ctx_r1.tabs())("scrolled", ctx_r1.scroll() > 0);
  }
}
function ItemShellComponent_Conditional_18_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function ItemShellComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domTemplate(0, ItemShellComponent_Conditional_18_Defer_0_Template, 6, 8)(1, ItemShellComponent_Conditional_18_DeferPlaceholder_1_Template, 1, 0);
    \u0275\u0275defer(2, 0, ItemShellComponent_Conditional_18_Defer_2_DepsFn, null, 1);
    \u0275\u0275deferOnImmediate();
  }
}
function ItemShellComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ItemShellComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkAdd());
    });
    \u0275\u0275elementStart(3, "icon", 21);
    \u0275\u0275text(4, "playlist_add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(1, 3, ctx_r1.i18n_key() + ".BULK"))("disabled", !ctx_r1.canCreate());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, ctx_r1.i18n_key() + ".BULK"));
  }
}
function ItemShellComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 13);
  }
}
function ItemShellComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 14);
  }
}
var LARGE_SCREEN = "(min-width: 64rem)";
function mediaQuery(query) {
  const media = window.matchMedia?.(query);
  const matches = signal(
    !!media?.matches,
    ...ngDevMode ? [{ debugName: "matches" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const update = () => matches.set(!!media?.matches);
  media?.addEventListener("change", update);
  inject(DestroyRef).onDestroy(() => media?.removeEventListener("change", update));
  return matches.asReadonly();
}
var ItemShellComponent = class _ItemShellComponent {
  _service = inject(ActiveItemService);
  /** Route and item type, e.g. `systems` */
  name = input.required(
    ...ngDevMode ? [{ debugName: "name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Locale key prefix for the item type, e.g. `SYSTEMS` */
  i18n_key = input.required(
    ...ngDevMode ? [{ debugName: "i18n_key" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tabs = input(
    [],
    ...ngDevMode ? [{ debugName: "tabs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Item for the details header. Defaults to the active item. */
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
  /** Tag filters for the item list */
  filter_options = input(
    [],
    ...ngDevMode ? [{ debugName: "filter_options" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Show the bulk add button */
  bulk = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "bulk" } : (
    /* istanbul ignore next */
    {}
  )), { transform: booleanAttribute }));
  /** Show the debug console */
  debug = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "debug" } : (
    /* istanbul ignore next */
    {}
  )), { transform: booleanAttribute }));
  open_menu = signal(
    false,
    ...ngDevMode ? [{ debugName: "open_menu" }] : (
      /* istanbul ignore next */
      []
    )
  );
  large_screen = mediaQuery(LARGE_SCREEN);
  scroll = signal(
    0,
    ...ngDevMode ? [{ debugName: "scroll" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._service.loading;
  display_item = computed(
    () => this.item() ?? this._service.item(),
    ...ngDevMode ? [{ debugName: "display_item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  debug_position = inject(PlaceDebugService).position;
  canCreate = () => this._service.canMutate(2);
  newItem = () => this._service.create();
  bulkAdd = () => this._service.bulkAdd();
  static \u0275fac = function ItemShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemShellComponent, selectors: [["item-shell"]], inputs: { name: [1, "name"], i18n_key: [1, "i18n_key"], tabs: [1, "tabs"], item: [1, "item"], extra_actions: [1, "extra_actions"], filter_options: [1, "filter_options"], bulk: [1, "bulk"], debug: [1, "debug"] }, ngContentSelectors: _c02, decls: 28, vars: 22, consts: [["picker", ""], ["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], ["id", "main-content", "tabindex", "-1", 1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "outline-none"], [1, "z-20", "lg:hidden", 3, "route", "title", "filter_options"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col", 3, "inert"], ["icon", "", "primary", "", "appTooltipPosition", "right", "ripple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "h-12", "w-12", "lg:-left-9", 3, "click", "appTooltip", "disabled"], [1, "text-3xl"], ["icon", "", "primary", "", "appTooltipPosition", "right", "ripple", "", 1, "absolute", "bottom-16", "left-2", "z-30", "h-10", "w-10", "lg:-left-8", 3, "appTooltip", "disabled"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [1, "hidden", "lg:block", 3, "route", "title", "filter_options"], [1, "border-base-200", "bg-base-100", "hidden", "h-full", "w-[24rem]", "max-w-[25vw]", "min-w-64", "rounded-sm", "shadow-sm", "sm:border-r", "lg:block"], [1, "animate-fade-in", 3, "item", "extra_actions", "type"], [1, "animate-fade-in", "z-10", 3, "base", "tabs", "scrolled"], ["page-transition", "", 1, "animate-fade-in", "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"], ["icon", "", "primary", "", "appTooltipPosition", "right", "ripple", "", 1, "absolute", "bottom-16", "left-2", "z-30", "h-10", "w-10", "lg:-left-8", 3, "click", "appTooltip", "disabled"], [1, "text-2xl"]], template: function ItemShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 2)(1, "sidebar-menu", 3);
      \u0275\u0275twoWayListener("openChange", function ItemShellComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
      \u0275\u0275domTemplate(4, ItemShellComponent_Defer_4_Template, 2, 5)(5, ItemShellComponent_DeferLoading_5_Template, 1, 0);
      \u0275\u0275defer(6, 4, ItemShellComponent_Defer_6_DepsFn, 5);
      \u0275\u0275elementStart(8, "main", 6)(9, "item-selection", 7, 0);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("click", function ItemShellComponent_Template_button_click_12_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(14, "icon");
      \u0275\u0275text(15, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275conditionalCreate(17, ItemShellComponent_Conditional_17_Template, 1, 0, "item-details-skeleton")(18, ItemShellComponent_Conditional_18_Template, 4, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 10);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275listener("click", function ItemShellComponent_Template_button_click_19_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(22, "icon", 11);
      \u0275\u0275text(23, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(24, ItemShellComponent_Conditional_24_Template, 5, 7, "button", 12);
      \u0275\u0275projection(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(26, ItemShellComponent_Conditional_26_Template, 1, 0, "app-debug-output", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, ItemShellComponent_Conditional_27_Template, 1, 0, "app-debug-output", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const picker_r6 = \u0275\u0275reference(10);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(5);
      \u0275\u0275deferWhen(ctx.large_screen());
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name())("title", \u0275\u0275pipeBind1(11, 14, ctx.i18n_key() + ".PLURAL"))("filter_options", ctx.filter_options());
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 16, "COMMON.MENU"));
      \u0275\u0275advance(4);
      \u0275\u0275property("inert", !ctx.large_screen() && picker_r6.show_view());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 17 : ctx.display_item()?.id ? 18 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(20, 18, ctx.i18n_key() + ".NEW"))("disabled", !ctx.canCreate());
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 20, ctx.i18n_key() + ".NEW"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.bulk() ? 24 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.debug() && ctx.debug_position() === "below" ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug() && ctx.debug_position() === "side" ? 27 : -1);
    }
  }, dependencies: [
    TooltipDirective,
    DebugOutputComponent,
    IconComponent,
    ItemDetailsSkeletonComponent,
    ItemSelectionComponent,
    SidebarMenuComponent,
    RouterModule,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(ItemShellComponent, () => [
    /* @ts-ignore */
    import("./chunk-FYU7PEG7.js").then((m) => m.ItemSidebarComponent),
    /* @ts-ignore */
    import("./chunk-AD3SPXS4.js").then((m) => m.ItemTablistComponent),
    /* @ts-ignore */
    import("./chunk-F3PNPK53.js").then((m) => m.ItemDetailsComponent)
  ], (ItemSidebarComponent, ItemTablistComponent, ItemDetailsComponent) => {
    setClassMetadata(ItemShellComponent, [{
      type: Component,
      args: [{
        selector: "item-shell",
        template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <!-- Small screens show the list in item-selection, so do not load this -->
                    @defer (when large_screen()) {
                        <item-sidebar
                            class="hidden lg:block"
                            [route]="name()"
                            [title]="i18n_key() + '.PLURAL' | translate"
                            [filter_options]="filter_options()"
                        />
                    } @loading {
                        <!-- Same size as the sidebar, so the page does not move when it loads -->
                        <div
                            class="border-base-200 bg-base-100 hidden h-full w-[24rem] max-w-[25vw] min-w-64 rounded-sm shadow-sm sm:border-r lg:block"
                        ></div>
                    }
                    <main
                        id="main-content"
                        tabindex="-1"
                        class="relative z-0 flex h-full w-1/2 flex-1 flex-col outline-none"
                    >
                        <item-selection
                            #picker
                            class="z-20 lg:hidden"
                            [route]="name()"
                            [title]="i18n_key() + '.PLURAL' | translate"
                            [filter_options]="filter_options()"
                        >
                            <button
                                btn
                                icon
                                class="mr-2 sm:hidden"
                                (click)="open_menu.set(true)"
                                [attr.aria-label]="'COMMON.MENU' | translate"
                            >
                                <icon>menu</icon>
                            </button>
                        </item-selection>
                        <!-- The open phone picker covers this, so Tab must not reach it -->
                        <div
                            class="flex h-1/2 flex-1 flex-col"
                            [inert]="!large_screen() && picker.show_view()"
                        >
                            @if (loading()) {
                                <item-details-skeleton />
                            } @else if (display_item()?.id) {
                                <!-- Tabs and menus load once an item shows. They fade in over the skeleton. -->
                                @defer (on immediate) {
                                    <item-details
                                        class="animate-fade-in"
                                        [item]="display_item()"
                                        [extra_actions]="extra_actions()"
                                        [type]="
                                            i18n_key() + '.SINGULAR' | translate
                                        "
                                    />
                                    <item-tablist
                                        [base]="name()"
                                        [tabs]="tabs()"
                                        [scrolled]="scroll() > 0"
                                        class="animate-fade-in z-10"
                                    />
                                    <div
                                        #el
                                        page-transition
                                        class="animate-fade-in relative z-0 h-1/2 w-full flex-1 overflow-auto"
                                        (scroll)="scroll.set(el.scrollTop)"
                                    >
                                        <router-outlet />
                                    </div>
                                } @placeholder {
                                    <item-details-skeleton />
                                }
                            }
                        </div>
                        <button
                            icon
                            primary
                            class="absolute bottom-2 left-2 z-30 h-12 w-12 lg:-left-9"
                            [appTooltip]="i18n_key() + '.NEW' | translate"
                            [attr.aria-label]="i18n_key() + '.NEW' | translate"
                            appTooltipPosition="right"
                            ripple
                            [disabled]="!canCreate()"
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        @if (bulk()) {
                            <button
                                icon
                                primary
                                class="absolute bottom-16 left-2 z-30 h-10 w-10 lg:-left-8"
                                [appTooltip]="i18n_key() + '.BULK' | translate"
                                [attr.aria-label]="
                                    i18n_key() + '.BULK' | translate
                                "
                                appTooltipPosition="right"
                                ripple
                                [disabled]="!canCreate()"
                                (click)="bulkAdd()"
                            >
                                <icon class="text-2xl">playlist_add</icon>
                            </button>
                        }
                        <ng-content />
                    </main>
                </div>
                @if (debug() && debug_position() === 'below') {
                    <app-debug-output below />
                }
            </div>
            @if (debug() && debug_position() === 'side') {
                <app-debug-output side class="h-full max-w-120" />
            }
        </div>
    `,
        imports: [
          TooltipDirective,
          DebugOutputComponent,
          IconComponent,
          TranslatePipe,
          ItemTablistComponent,
          ItemDetailsComponent,
          ItemDetailsSkeletonComponent,
          ItemSelectionComponent,
          ItemSidebarComponent,
          SidebarMenuComponent,
          RouterModule
        ]
      }]
    }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }], i18n_key: [{ type: Input, args: [{ isSignal: true, alias: "i18n_key", required: true }] }], tabs: [{ type: Input, args: [{ isSignal: true, alias: "tabs", required: false }] }], item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], extra_actions: [{ type: Input, args: [{ isSignal: true, alias: "extra_actions", required: false }] }], filter_options: [{ type: Input, args: [{ isSignal: true, alias: "filter_options", required: false }] }], bulk: [{ type: Input, args: [{ isSignal: true, alias: "bulk", required: false }] }], debug: [{ type: Input, args: [{ isSignal: true, alias: "debug", required: false }] }] });
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemShellComponent, { className: "ItemShellComponent", filePath: "src/app/ui/item-shell.component.ts", lineNumber: 184 });
})();

export {
  ItemShellComponent
};
//# debugId=8be03e5a-f713-50e5-8408-38f95db8602c
//# sourceMappingURL=chunk-UQK4VOSL.js.map
