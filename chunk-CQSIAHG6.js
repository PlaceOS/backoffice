import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-OEMHCWD4.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LL5BPSQ6.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-VH6NLWUW.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-RAEUAH5O.js";
import {
  AsyncHandler
} from "./chunk-OU4ZSGGA.js";
import {
  MatOption
} from "./chunk-RHXWHY3G.js";
import {
  IconComponent
} from "./chunk-2OXMVWQR.js";
import {
  DefaultValueAccessor,
  DomSanitizer,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgTemplateOutlet
} from "./chunk-VARF64W7.js";
import {
  Component,
  Input,
  Output,
  Pipe,
  Tt,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  ks,
  model,
  resource,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-QSXZQV2A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/ui/pipes/sanitise.pipe.ts
var SecurityContext;
(function(SecurityContext2) {
  SecurityContext2[SecurityContext2["NONE"] = 0] = "NONE";
  SecurityContext2[SecurityContext2["HTML"] = 1] = "HTML";
  SecurityContext2[SecurityContext2["STYLE"] = 2] = "STYLE";
  SecurityContext2[SecurityContext2["SCRIPT"] = 3] = "SCRIPT";
  SecurityContext2[SecurityContext2["URL"] = 4] = "URL";
  SecurityContext2[SecurityContext2["RESOURCE_URL"] = 5] = "RESOURCE_URL";
})(SecurityContext || (SecurityContext = {}));
var SanitizePipe = class _SanitizePipe {
  sanitizer = inject(DomSanitizer);
  transform(value, type = "html") {
    switch (type) {
      case "resource":
        return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, value);
      case "url":
        return this.sanitizer.sanitize(SecurityContext.URL, value);
      case "script":
        return this.sanitizer.sanitize(SecurityContext.SCRIPT, value);
      case "style":
        return this.sanitizer.sanitize(SecurityContext.STYLE, value);
      default:
        return this.sanitizer.sanitize(SecurityContext.HTML, value);
    }
  }
  static \u0275fac = function SanitizePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SanitizePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "sanitize", type: _SanitizePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SanitizePipe, [{
    type: Pipe,
    args: [{
      name: "sanitize"
    }]
  }], null, null);
})();

// src/app/ui/custom-fields/item-search-field.component.ts
var _c0 = ["input"];
var _c1 = (a0) => ({ option: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item?.id;
function ItemSearchFieldComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function ItemSearchFieldComponent_Conditional_8_Conditional_0_For_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ItemSearchFieldComponent_Conditional_8_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ItemSearchFieldComponent_Conditional_8_Conditional_0_For_2_Template_button_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.search_str.set(option_r3.name || "" + option_r3.id);
      return \u0275\u0275resetView(ctx_r3.setValue(option_r3));
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275template(2, ItemSearchFieldComponent_Conditional_8_Conditional_0_For_2_ng_container_2_Template, 1, 0, "ng-container", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const item_option_r5 = \u0275\u0275reference(14);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", item_option_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, option_r3));
  }
}
function ItemSearchFieldComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ItemSearchFieldComponent_Conditional_8_Conditional_0_For_2_Template, 3, 4, "button", 13, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.item_list());
  }
}
function ItemSearchFieldComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.search_str()?.length ? "No matching " + (ctx_r3.label() || "item") + " for search string" : "No " + (ctx_r3.label() || "items") + " available to search", " ");
  }
}
function ItemSearchFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ItemSearchFieldComponent_Conditional_8_Conditional_0_Template, 3, 0, "div", 11)(1, ItemSearchFieldComponent_Conditional_8_Conditional_1_Template, 3, 1, "div", 12);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.item_list()?.length ? 0 : 1);
  }
}
function ItemSearchFieldComponent_For_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ItemSearchFieldComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275listener("click", function ItemSearchFieldComponent_For_12_Template_mat_option_click_0_listener() {
      const option_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.search_str.set(option_r7.name || "" + option_r7.id);
      return \u0275\u0275resetView(ctx_r3.setValue(option_r7));
    });
    \u0275\u0275template(1, ItemSearchFieldComponent_For_12_ng_container_1_Template, 1, 0, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275nextContext();
    const item_option_r5 = \u0275\u0275reference(14);
    \u0275\u0275property("value", option_r7.name || option_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", item_option_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, option_r7));
  }
}
function ItemSearchFieldComponent_ng_template_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = \u0275\u0275nextContext().option;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r8.notes);
  }
}
function ItemSearchFieldComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275conditionalCreate(3, ItemSearchFieldComponent_ng_template_13_Conditional_3_Template, 2, 1, "code", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.option;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 4, ctx_r3.item_name()[option_r8.id]), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(option_r8.notes ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", option_r8.id, " ", option_r8.extra ? " - " + option_r8.extra : "", " ");
  }
}
var ItemSearchFieldComponent = class _ItemSearchFieldComponent extends AsyncHandler {
  _changed = signal(
    0,
    ...ngDevMode ? [{ debugName: "_changed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _debounced_search = signal(
    "",
    ...ngDevMode ? [{ debugName: "_debounced_search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Name of the items being query'd */
  label = input(
    void 0,
    ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Placeholder to display on the form input */
  placeholder = input(
    void 0,
    ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Limit available options to these */
  options = input(
    void 0,
    ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the form field should be disabled */
  disabled = input(
    false,
    ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cva_disabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "cva_disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  is_disabled = computed(
    () => this.disabled() || this.cva_disabled(),
    ...ngDevMode ? [{ debugName: "is_disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  display_list = input(
    false,
    ...ngDevMode ? [{ debugName: "display_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  clear_on_select = input(
    false,
    ...ngDevMode ? [{ debugName: "clear_on_select" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Function for filtering out options */
  exclude = input(
    (v, search) => (v.name || "").toLowerCase().indexOf(search) < 0 && (v.driver?.name || "").toLowerCase().indexOf(search) < 0 && (v.email || "").toLowerCase().indexOf(search) < 0 && (v.notes || "").toLowerCase().indexOf(search) < 0 && (v.description || "").toLowerCase().indexOf(search) < 0,
    ...ngDevMode ? [{ debugName: "exclude" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Minimum number of characters needed to start a server query */
  minLength = input(
    0,
    ...ngDevMode ? [{ debugName: "minLength" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether item list is loading */
  loading = model(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Service used for searching items */
  query_fn = input(
    () => Promise.resolve([]),
    ...ngDevMode ? [{ debugName: "query_fn" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Currently selected item */
  active_item = signal(
    null,
    ...ngDevMode ? [{ debugName: "active_item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Current display value of the search input field  */
  search_str = signal(
    "",
    ...ngDevMode ? [{ debugName: "search_str" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _items = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_items" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      changed: this._changed(),
      query: this._debounced_search(),
      options: this.options(),
      min_length: this.minLength()
    }),
    loader: async ({ params }) => {
      const { query, options, min_length } = params;
      const trimmed_query = query.trim();
      this.loading.set(true);
      try {
        const list = options && options.length > 0 ? options : !min_length || trimmed_query.length >= min_length ? await this.query_fn()(trimmed_query).catch(() => []) : [];
        const search = trimmed_query.toLowerCase();
        return list.filter((item) => this.exclude() ? !this.exclude()(item, search) : true);
      } finally {
        this.loading.set(false);
      }
    }
  }));
  /** Item list to display */
  item_list = computed(
    () => this._items.value() || [],
    ...ngDevMode ? [{ debugName: "item_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  _input_el = viewChild(
    "input",
    ...ngDevMode ? [{ debugName: "_input_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get items() {
    const options = this.options();
    return options?.length ? options : this.item_list();
  }
  /** Map of item names to their IDs */
  item_name = signal(
    {},
    ...ngDevMode ? [{ debugName: "item_name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    super();
    effect(() => {
      const query = this.search_str();
      this.timeout("search", () => this._debounced_search.set(query), 400);
    });
    effect(() => {
      this.item_list();
      this._updateNameMap();
    });
  }
  ngOnInit() {
    this.timeout("init", () => this.resetSearchString());
  }
  ngOnChanges(changes) {
    if (changes.service)
      this.search_str.set("");
    if (changes.options)
      this._changed.set(Date.now());
  }
  /**
   * Reset the search string back to the name of the active item
   */
  resetSearchString() {
    this.timeout("value", () => {
      if (this.clear_on_select()) {
        this.active_item.set(null);
        this.search_str.set("");
      } else if (this.active_item()) {
        this.search_str.set((this.active_item().name || this.search_str()).trim());
      }
      if (this._input_el()?.nativeElement)
        this._input_el().nativeElement.value = this.search_str() || "";
    }, 50);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.is_disabled())
      return;
    this.active_item.set(new_value);
    if (this._onChange) {
      this._onChange(new_value);
    }
    this.markTouched();
    this.resetSearchString();
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_item.set(value);
    this.resetSearchString();
  }
  /**
   * Registers a callback function that is called when the
   * control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Registers a callback function is called by the forms API
   * on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  setDisabledState(disabled) {
    this.cva_disabled.set(disabled);
  }
  markTouched() {
    this._onTouch?.(this.active_item());
  }
  _updateNameMap() {
    const map = {};
    const list = this.items || [];
    for (const item of list) {
      if (item instanceof ks) {
        const detail = item.role === Tt.Service ? item.uri : item.role === Tt.Logic ? item.control_system_id : item.ip;
        map[item.id] = `${item.name || "<Unnamed>"} <span class="small">${detail}<span>`;
      } else {
        map[item.id] = item.custom_name || item.name || "<Unnamed>";
      }
    }
    this.item_name.set(map);
  }
  static \u0275fac = function ItemSearchFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemSearchFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemSearchFieldComponent, selectors: [["item-search-field"]], viewQuery: function ItemSearchFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { label: [1, "label"], placeholder: [1, "placeholder"], options: [1, "options"], disabled: [1, "disabled"], display_list: [1, "display_list"], clear_on_select: [1, "clear_on_select"], exclude: [1, "exclude"], minLength: [1, "minLength"], loading: [1, "loading"], query_fn: [1, "query_fn"] }, outputs: { loading: "loadingChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ItemSearchFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 15, vars: 9, consts: [["input", ""], ["auto", "matAutocomplete"], ["item_option", ""], ["form-field", "", 1, "item-search-field", "flex", "max-h-full", "flex-col"], ["appearance", "outline"], ["matInput", "", "name", "item-search", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled", "placeholder", "matAutocomplete", "matAutocompleteDisabled"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matSuffix", "", 1, "suffix"], [1, "leading-tight", 3, "value"], ["diameter", "16"], [1, "h-[50vh]", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "min-h-48", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], ["matRipple", "", 1, "hover:bg-base-200", "w-full", "rounded-sm", "px-4", "py-2", "text-left"], ["matRipple", "", 1, "hover:bg-base-200", "w-full", "rounded-sm", "px-4", "py-2", "text-left", 3, "click"], [1, "leading-tight"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "text-sm"], [1, "leading-tight", 3, "click", "value"], [1, "flex", "h-5", "items-center", "justify-between"], ["name", "", 3, "innerHTML"], [1, "truncate", "text-xs!"], [1, "text-xs", "opacity-60"]], template: function ItemSearchFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "mat-form-field", 4)(2, "input", 5, 0);
      \u0275\u0275twoWayListener("ngModelChange", function ItemSearchFieldComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("focus", function ItemSearchFieldComponent_Template_input_focus_2_listener() {
        return ctx.search_str.set("");
      })("blur", function ItemSearchFieldComponent_Template_input_blur_2_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.markTouched();
        return \u0275\u0275resetView(ctx.resetSearchString());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(4, "div", 6)(5, "icon", 7);
      \u0275\u0275text(6, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, ItemSearchFieldComponent_Conditional_7_Template, 2, 0, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ItemSearchFieldComponent_Conditional_8_Template, 2, 1);
      \u0275\u0275elementStart(9, "mat-autocomplete", null, 1);
      \u0275\u0275repeaterCreate(11, ItemSearchFieldComponent_For_12_Template, 2, 5, "mat-option", 9, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ItemSearchFieldComponent_ng_template_13_Template, 6, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const auto_r9 = \u0275\u0275reference(10);
      \u0275\u0275classProp("disabled", ctx.is_disabled());
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
      \u0275\u0275property("disabled", ctx.is_disabled())("placeholder", ctx.placeholder() ? ctx.placeholder() : "Search" + (ctx.label() ? " for " + ctx.label() : "") + "...")("matAutocomplete", auto_r9)("matAutocompleteDisabled", ctx.display_list());
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.display_list() ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.item_list());
    }
  }, dependencies: [
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatSuffix,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    NgTemplateOutlet,
    SanitizePipe
  ], styles: ["\n[_nghost-%COMP%], \nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.35);\n}\n.name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 1.1em;\n  line-height: 1em;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  opacity: 0.65;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=item-search-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "item-search-field", template: `
        <div
            class="item-search-field flex max-h-full flex-col"
            form-field
            [class.disabled]="is_disabled()"
        >
            <mat-form-field appearance="outline">
                <input
                    matInput
                    name="item-search"
                    #input
                    [(ngModel)]="search_str"
                    [disabled]="is_disabled()"
                    [placeholder]="
                        placeholder()
                            ? placeholder()
                            : 'Search' +
                              (label() ? ' for ' + label() : '') +
                              '...'
                    "
                    [matAutocomplete]="auto"
                    [matAutocompleteDisabled]="display_list()"
                    (focus)="search_str.set('')"
                    (blur)="markTouched(); resetSearchString()"
                />
                <div class="prefix" matPrefix>
                    <icon class="relative -left-0.5 text-2xl">search</icon>
                </div>
                @if (loading()) {
                    <div class="suffix" matSuffix>
                        <mat-spinner diameter="16" />
                    </div>
                }
            </mat-form-field>
            @if (display_list()) {
                @if (item_list()?.length) {
                    <div class="h-[50vh] flex-1 space-y-2 overflow-auto">
                        @for (option of item_list(); track option?.id) {
                            <button
                                matRipple
                                (click)="
                                    search_str.set(
                                        option.name || '' + option.id
                                    );
                                    setValue(option)
                                "
                                class="hover:bg-base-200 w-full rounded-sm px-4 py-2 text-left"
                            >
                                <div class="leading-tight">
                                    <ng-container
                                        *ngTemplateOutlet="
                                            item_option;
                                            context: { option: option }
                                        "
                                    />
                                </div>
                            </button>
                        }
                    </div>
                } @else {
                    <div
                        class="flex min-h-48 flex-col items-center justify-center p-8 opacity-30"
                    >
                        <p class="text-sm">
                            {{
                                search_str()?.length
                                    ? 'No matching ' +
                                      (label() || 'item') +
                                      ' for search string'
                                    : 'No ' +
                                      (label() || 'items') +
                                      ' available to search'
                            }}
                        </p>
                    </div>
                }
            }
            <mat-autocomplete #auto="matAutocomplete">
                @for (option of item_list(); track option.id) {
                    <mat-option
                        [value]="option.name || option.id"
                        (click)="
                            search_str.set(option.name || '' + option.id);
                            setValue(option)
                        "
                        class="leading-tight"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                item_option;
                                context: { option: option }
                            "
                        />
                    </mat-option>
                }
            </mat-autocomplete>
            <ng-template #item_option let-option="option">
                <div class="flex h-5 items-center justify-between">
                    <div
                        name
                        [innerHTML]="item_name()[option.id] | sanitize"
                    ></div>
                    @if (option.notes) {
                        <code class="truncate text-xs!">{{
                            option.notes
                        }}</code>
                    }
                </div>
                <div class="text-xs opacity-60">
                    {{ option.id }}
                    {{ option.extra ? ' - ' + option.extra : '' }}
                </div>
            </ng-template>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ItemSearchFieldComponent),
        multi: true
      }
    ], imports: [
      MatAutocompleteModule,
      SanitizePipe,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatProgressSpinnerModule,
      IconComponent,
      NgTemplateOutlet
    ], styles: ["/* angular:styles/component:css;c9abedfedede68850d67d4a13d94632f6b77b2600b74803d4fff85b115f0b56c;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/item-search-field.component.ts */\n:host,\nmat-form-field {\n  width: 100%;\n}\n.disabled {\n  color: rgba(0, 0, 0, 0.35);\n}\n.name {\n  display: flex;\n  align-items: center;\n  height: 1.1em;\n  line-height: 1em;\n}\n.email {\n  font-size: 0.6em;\n  opacity: 0.65;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=item-search-field.component.css.map */\n"] }]
  }], () => [], { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], display_list: [{ type: Input, args: [{ isSignal: true, alias: "display_list", required: false }] }], clear_on_select: [{ type: Input, args: [{ isSignal: true, alias: "clear_on_select", required: false }] }], exclude: [{ type: Input, args: [{ isSignal: true, alias: "exclude", required: false }] }], minLength: [{ type: Input, args: [{ isSignal: true, alias: "minLength", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }, { type: Output, args: ["loadingChange"] }], query_fn: [{ type: Input, args: [{ isSignal: true, alias: "query_fn", required: false }] }], _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemSearchFieldComponent, { className: "ItemSearchFieldComponent", filePath: "src/app/ui/custom-fields/item-search-field.component.ts", lineNumber: 204 });
})();

export {
  SanitizePipe,
  ItemSearchFieldComponent
};
//# sourceMappingURL=chunk-CQSIAHG6.js.map
