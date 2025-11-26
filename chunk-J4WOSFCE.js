import {
  HotkeysService
} from "./chunk-SU4A27HA.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  addChipItem,
  removeChipItem
} from "./chunk-JAVYI6DR.js";
import {
  AuthenticatedImageDirective
} from "./chunk-ZKOSV5C6.js";
import {
  Clipboard
} from "./chunk-4SRLAZCZ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-WGQKHF74.js";
import {
  UploadsService
} from "./chunk-WR2EAA36.js";
import {
  SettingsToggleComponent
} from "./chunk-OHL342VN.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-YEYFARTO.js";
import {
  h
} from "./chunk-W3LP6CHX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TDDLCX2F.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-GNMPSLDT.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-UJ4OAW4C.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-GYVRTF64.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarn
} from "./chunk-BJ7RDLLP.js";
import {
  format
} from "./chunk-ZQ2RL7UU.js";
import {
  TranslatePipe
} from "./chunk-GROJVO3W.js";
import {
  DateFromPipe
} from "./chunk-UG6ZEHPO.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-ZF3Z6LCK.js";
import {
  IconComponent
} from "./chunk-VLW6LVHT.js";
import {
  COMMA,
  ENTER,
  MatRipple,
  SPACE
} from "./chunk-PECY6EPM.js";
import {
  millisecondsInMinute,
  toDate
} from "./chunk-W3GXKXZC.js";
import {
  AsyncHandler
} from "./chunk-7UVGUB3C.js";
import {
  DomSanitizer
} from "./chunk-PCFRJ6OJ.js";
import {
  i18n
} from "./chunk-FG3K2BCB.js";
import {
  $c,
  $t,
  AsyncPipe,
  BehaviorSubject,
  Co,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  Do,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Gu,
  Input,
  Ir,
  Jo,
  Ki,
  MinLengthValidator,
  Mo,
  Mr,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgTemplateOutlet,
  NumberValueAccessor,
  Output,
  Pipe,
  Re,
  ReactiveFormsModule,
  RequiredValidator,
  Rr,
  Sc,
  Se,
  SlicePipe,
  Subject,
  Te,
  Tr,
  UntypedFormGroup,
  Uo,
  UpperCasePipe,
  Validators,
  ViewChild,
  Vo,
  Wo,
  Xu,
  ac,
  catchError,
  cc,
  combineLatest,
  computed,
  cu,
  debounceTime,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  fc,
  filter,
  flatten,
  forwardRef,
  getInvalidFields,
  ic,
  inject,
  input,
  lastValueFrom,
  lc,
  map,
  merge,
  model,
  nextValueFrom,
  oc,
  of,
  output,
  ra,
  ru,
  sc,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  ta,
  tap,
  timer,
  uc,
  unique,
  viewChild,
  vn,
  yu,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
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
} from "./chunk-C25AKIFS.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/common/validation.ts
var validateIpAddress = (ctrl) => ctrl?.value ? /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/g.test(ctrl.value || "") || /^(?!:\/\/)(?=.{1,255}$)((.{1,63}\.){1,127}(?![0-9]*$)[a-z0-9-]+\.?)$/gi.test(ctrl.value) ? null : { pattern: true } : null;
var validateURI = (ctrl) => {
  if (!ctrl.value) {
    return null;
  } else {
    return /\w+:(\/?\/?)[^\s]+?/gim.test(ctrl.value) ? null : { pattern: true };
  }
};
var isValidUrl = (url) => {
  if (!url)
    return true;
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
};
var isValidDomain = (str2) => {
  const domainRegex = /^(?!\-)(?:[a-zA-Z0-9\-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}$/;
  return domainRegex.test(str2);
};
var validateURL = (ctrl) => isValidUrl(ctrl?.value) ? null : { url: "invalid" };
function validateJSONString(control) {
  if (!control || !control.value) {
    return null;
  }
  try {
    const json2 = JSON.parse(control.value);
  } catch (e) {
    return { json: true };
  }
  return null;
}

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
  transform(value, type2 = "html") {
    switch (type2) {
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
var _forTrack1 = ($index, $item) => $item == null ? null : $item.id;
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
      ctx_r3.search$.next(option_r3.name || "" + option_r3.id);
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
    \u0275\u0275textInterpolate1(" ", (ctx_r3.search_str == null ? null : ctx_r3.search_str.length) ? "No matching " + (ctx_r3.name() || "item") + " for search string" : "No " + (ctx_r3.name() || "items") + " available to search", " ");
  }
}
function ItemSearchFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ItemSearchFieldComponent_Conditional_8_Conditional_0_Template, 3, 0, "div", 11)(1, ItemSearchFieldComponent_Conditional_8_Conditional_1_Template, 3, 1, "div", 12);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r3.item_list()) == null ? null : tmp_4_0.length) ? 0 : 1);
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
      ctx_r3.search$.next(option_r7.name || "" + option_r7.id);
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
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 4, ctx_r3.item_name[option_r8.id]), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(option_r8.notes ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", option_r8.id, " ", option_r8.extra ? " - " + option_r8.extra : "", " ");
  }
}
var ItemSearchFieldComponent = class _ItemSearchFieldComponent extends AsyncHandler {
  _changed = new BehaviorSubject(0);
  /** Name of the items being query'd */
  name = input(void 0, ...ngDevMode ? [{ debugName: "name" }] : []);
  /** Placeholder to display on the form input */
  placeholder = input(void 0, ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  /** Limit available options to these */
  options = input(void 0, ...ngDevMode ? [{ debugName: "options" }] : []);
  /** Whether the form field should be disabled */
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  display_list = input(false, ...ngDevMode ? [{ debugName: "display_list" }] : []);
  clear_on_select = input(false, ...ngDevMode ? [{ debugName: "clear_on_select" }] : []);
  /** Function for filtering out options */
  exclude = input((v, search) => (v.name || "").toLowerCase().indexOf(search) < 0 && (v.driver?.name || "").toLowerCase().indexOf(search) < 0 && (v.email || "").toLowerCase().indexOf(search) < 0 && (v.notes || "").toLowerCase().indexOf(search) < 0 && (v.description || "").toLowerCase().indexOf(search) < 0, ...ngDevMode ? [{ debugName: "exclude" }] : []);
  /** Minimum number of characters needed to start a server query */
  min_length = input(0, ...ngDevMode ? [{ debugName: "min_length", alias: "minLength" }] : [{ alias: "minLength" }]);
  /** Whether item list is loading */
  loading = model(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Service used for searching items */
  query_fn = input(() => of([]), ...ngDevMode ? [{ debugName: "query_fn" }] : []);
  /** Currently selected item */
  active_item = signal(null, ...ngDevMode ? [{ debugName: "active_item" }] : []);
  /** Item list to display */
  item_list = signal([], ...ngDevMode ? [{ debugName: "item_list" }] : []);
  /** Current display value of the search input field  */
  search_str = signal("", ...ngDevMode ? [{ debugName: "search_str" }] : []);
  /** List of items from an API search */
  search_results$;
  /** Subject holding the value of the search */
  search$ = new Subject();
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  _input_el = viewChild("input", ...ngDevMode ? [{ debugName: "_input_el" }] : []);
  get items() {
    const options = this.options();
    return options?.length ? options : this.item_list();
  }
  /** Map of item names to their IDs */
  item_name = {};
  ngOnInit() {
    this.search_results$ = combineLatest([
      this.search$.pipe(distinctUntilChanged()),
      this._changed
    ]).pipe(debounceTime(400), switchMap(([query]) => {
      this.loading.set(true);
      const options = this.options();
      const min_length = this.min_length();
      return options && options.length > 0 ? of(options) : !min_length || query.length >= min_length ? this.query_fn()(query) : of([]);
    }), catchError((_) => of([])), map((list) => {
      this.loading.set(false);
      return list.filter((item) => this.exclude() ? !this.exclude()(item, this.search_str().toLowerCase()) : true);
    }));
    this.subscription("search_results", this.search_results$.subscribe((list) => {
      this.item_list.set(list);
      this._updateNameMap();
    }));
    this.timeout("init", () => {
      this.search$.next("");
    });
  }
  ngOnChanges(changes) {
    if (changes.service)
      this.search$.next("");
    if (changes.options)
      this._changed.next(Date.now());
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
        this.search_str.set(this.active_item().name || this.search_str());
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
    this.active_item.set(new_value);
    if (this._onChange) {
      this._onChange(new_value);
    }
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
  _updateNameMap() {
    const map3 = {};
    const list = this.items || [];
    for (const item of list) {
      if (item instanceof Mr) {
        const detail = item.role === $t.Service ? item.uri : item.role === $t.Logic ? item.control_system_id : item.ip;
        map3[item.id] = `${item.name || "<Unnamed>"} <span class="small">${detail}<span>`;
      } else {
        map3[item.id] = item.custom_name || item.name || "<Unnamed>";
      }
    }
    this.item_name = map3;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ItemSearchFieldComponent_BaseFactory;
    return function ItemSearchFieldComponent_Factory(__ngFactoryType__) {
      return (\u0275ItemSearchFieldComponent_BaseFactory || (\u0275ItemSearchFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ItemSearchFieldComponent)))(__ngFactoryType__ || _ItemSearchFieldComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemSearchFieldComponent, selectors: [["item-search-field"]], viewQuery: function ItemSearchFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { name: [1, "name"], placeholder: [1, "placeholder"], options: [1, "options"], disabled: [1, "disabled"], display_list: [1, "display_list"], clear_on_select: [1, "clear_on_select"], exclude: [1, "exclude"], min_length: [1, "minLength", "min_length"], loading: [1, "loading"], query_fn: [1, "query_fn"] }, outputs: { loading: "loadingChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ItemSearchFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 15, vars: 9, consts: [["input", ""], ["auto", "matAutocomplete"], ["item_option", ""], ["form-field", "", 1, "item-search-field", "flex", "max-h-full", "flex-col"], ["appearance", "outline"], ["matInput", "", "name", "item-search", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled", "placeholder", "matAutocomplete", "matAutocompleteDisabled"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matSuffix", "", 1, "suffix"], [1, "leading-tight", 3, "value"], ["diameter", "16"], [1, "h-[50vh]", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "min-h-48", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], ["matRipple", "", 1, "w-full", "rounded-sm", "px-4", "py-2", "text-left", "hover:bg-base-200"], ["matRipple", "", 1, "w-full", "rounded-sm", "px-4", "py-2", "text-left", "hover:bg-base-200", 3, "click"], [1, "leading-tight"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "text-sm"], [1, "leading-tight", 3, "click", "value"], [1, "flex", "h-5", "items-center", "justify-between"], ["name", "", 3, "innerHTML"], [1, "truncate", "text-xs!"], [1, "text-xs", "opacity-60"]], template: function ItemSearchFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "mat-form-field", 4)(2, "input", 5, 0);
      \u0275\u0275twoWayListener("ngModelChange", function ItemSearchFieldComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ItemSearchFieldComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.search$.next($event));
      })("focus", function ItemSearchFieldComponent_Template_input_focus_2_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.search_str.set("");
        return \u0275\u0275resetView(ctx.search$.next(" "));
      })("blur", function ItemSearchFieldComponent_Template_input_blur_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetSearchString());
      });
      \u0275\u0275elementEnd();
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
      \u0275\u0275classProp("disabled", ctx.disabled());
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
      \u0275\u0275property("disabled", ctx.disabled())("placeholder", ctx.placeholder() ? ctx.placeholder() : "Search" + (ctx.name() ? " for " + ctx.name() : "") + "...")("matAutocomplete", auto_r9)("matAutocompleteDisabled", ctx.display_list());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.display_list() ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.item_list());
    }
  }, dependencies: [
    CommonModule,
    NgTemplateOutlet,
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
    SanitizePipe
  ], styles: ["\n\n[_nghost-%COMP%], \nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.35);\n}\n.name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 1.1em;\n  line-height: 1em;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  opacity: 0.65;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=item-search-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "item-search-field", template: `
        <div
            class="item-search-field flex max-h-full flex-col"
            form-field
            [class.disabled]="disabled()"
        >
            <mat-form-field appearance="outline">
                <input
                    matInput
                    name="item-search"
                    #input
                    [(ngModel)]="search_str"
                    (ngModelChange)="search$.next($event)"
                    [disabled]="disabled()"
                    [placeholder]="
                        placeholder()
                            ? placeholder()
                            : 'Search' +
                              (name() ? ' for ' + name() : '') +
                              '...'
                    "
                    [matAutocomplete]="auto"
                    [matAutocompleteDisabled]="display_list()"
                    (focus)="search_str.set(''); search$.next(' ')"
                    (blur)="resetSearchString()"
                />
                <div class="prefix" matPrefix>
                    <icon class="relative -left-0.5 text-2xl">search</icon>
                </div>
                @if (loading()) {
                    <div class="suffix" matSuffix>
                        <mat-spinner diameter="16"></mat-spinner>
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
                                    search$.next(option.name || '' + option.id);
                                    setValue(option)
                                "
                                class="w-full rounded-sm px-4 py-2 text-left hover:bg-base-200"
                            >
                                <div class="leading-tight">
                                    <ng-container
                                        *ngTemplateOutlet="
                                            item_option;
                                            context: { option: option }
                                        "
                                    ></ng-container>
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
                                search_str?.length
                                    ? 'No matching ' +
                                      (name() || 'item') +
                                      ' for search string'
                                    : 'No ' +
                                      (name() || 'items') +
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
                            search$.next(option.name || '' + option.id);
                            setValue(option)
                        "
                        class="leading-tight"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                item_option;
                                context: { option: option }
                            "
                        ></ng-container>
                    </mat-option>
                }
            </mat-autocomplete>
            <ng-template #item_option let-option="option">
                <div class="flex h-5 items-center justify-between">
                    <div
                        name
                        [innerHTML]="item_name[option.id] | sanitize"
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
      CommonModule,
      MatAutocompleteModule,
      SanitizePipe,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatProgressSpinnerModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;c9abedfedede68850d67d4a13d94632f6b77b2600b74803d4fff85b115f0b56c;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/item-search-field.component.ts */\n:host,\nmat-form-field {\n  width: 100%;\n}\n.disabled {\n  color: rgba(0, 0, 0, 0.35);\n}\n.name {\n  display: flex;\n  align-items: center;\n  height: 1.1em;\n  line-height: 1em;\n}\n.email {\n  font-size: 0.6em;\n  opacity: 0.65;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=item-search-field.component.css.map */\n"] }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], display_list: [{ type: Input, args: [{ isSignal: true, alias: "display_list", required: false }] }], clear_on_select: [{ type: Input, args: [{ isSignal: true, alias: "clear_on_select", required: false }] }], exclude: [{ type: Input, args: [{ isSignal: true, alias: "exclude", required: false }] }], min_length: [{ type: Input, args: [{ isSignal: true, alias: "minLength", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }, { type: Output, args: ["loadingChange"] }], query_fn: [{ type: Input, args: [{ isSignal: true, alias: "query_fn", required: false }] }], _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemSearchFieldComponent, { className: "ItemSearchFieldComponent", filePath: "src/app/ui/custom-fields/item-search-field.component.ts", lineNumber: 198 });
})();

// src/app/admin/brokers.utilities.ts
function generateBrokerFormFields(broker) {
  const auth_type = broker.auth_type ?? Do.NoAuth;
  const fields = {
    name: new FormControl(broker.name || "", [Validators.required]),
    description: new FormControl(broker.description),
    auth_type: new FormControl(auth_type),
    host: new FormControl(broker.host, [Validators.required]),
    port: new FormControl(broker.port, [Validators.required]),
    tls: new FormControl(!!broker.tls),
    username: new FormControl(broker.username, auth_type === Do.UserPassword ? [Validators.required] : []),
    password: new FormControl(broker.password, auth_type === Do.UserPassword ? [Validators.required] : []),
    certificate: new FormControl(broker.certificate, auth_type === Do.Certificate ? [Validators.required] : []),
    filters: new FormControl(broker.filters)
  };
  fields.auth_type.valueChanges.subscribe((type2) => {
    switch (type2) {
      case Do.Certificate:
        fields.username.setValidators([]);
        fields.password.setValidators([]);
        fields.certificate.setValidators([Validators.required]);
      case Do.UserPassword:
        fields.username.setValidators([Validators.required]);
        fields.password.setValidators([Validators.required]);
        fields.certificate.setValidators([]);
      default:
        fields.username.setValidators([]);
        fields.password.setValidators([]);
        fields.certificate.setValidators([]);
    }
    fields.username.updateValueAndValidity();
    fields.password.updateValueAndValidity();
    fields.certificate.updateValueAndValidity();
  });
  return new FormGroup(fields);
}

// src/app/domains/applications.utilities.ts
function generateApplicationFormFields(app) {
  const fields = {
    name: new FormControl(app?.name || "", [Validators.required]),
    scopes: new FormControl(app?.scopes || ""),
    skip_authorization: new FormControl(!!app?.skip_authorization),
    redirect_uri: new FormControl(app?.redirect_uri || "", validateURL),
    client_id: new FormControl(app?.uid || ""),
    preserve_client_id: new FormControl(false)
  };
  return new FormGroup(fields);
}

// src/app/domains/domains.utilities.ts
function generateDomainFormFields(domain) {
  const fields = {
    name: new FormControl(domain?.name || "", [Validators.required]),
    domain: new FormControl(domain?.domain || "", [
      Validators.required,
      Validators.pattern(/^([a-zA-Z0-9._-])+$/)
    ]),
    login_url: new FormControl(domain?.login_url || ""),
    logout_url: new FormControl(domain?.logout_url || ""),
    config: new FormControl(domain?.config || ""),
    internals: new FormControl(domain?.internals || ""),
    description: new FormControl(domain?.description || ""),
    email_domains: new FormControl(domain?.email_domains || [])
  };
  return new FormGroup(fields);
}

// src/app/drivers/drivers.utilities.ts
function generateDriverFormFields(driver) {
  const fields = {
    id: new FormControl(driver?.id || ""),
    repository_id: new FormControl(driver?.repository_id),
    file_name: new FormControl(driver?.file_name),
    commit: new FormControl(driver?.commit),
    name: new FormControl(driver?.name || "", [Validators.required]),
    role: new FormControl(driver?.role || $t.Logic),
    module_name: new FormControl(driver?.module_name || "", [
      Validators.required
    ]),
    default_uri: new FormControl(driver?.default_uri || "", [validateURI]),
    default_port: new FormControl(driver?.default_port || 1, [
      Validators.min(1),
      Validators.max(65535)
    ]),
    class_name: new FormControl(driver?.class_name || ""),
    description: new FormControl(driver?.description || ""),
    ignore_connected: new FormControl(driver?.ignore_connected || false),
    settings: new FormControl("")
  };
  fields.module_name.valueChanges.subscribe((value) => {
    fields.module_name.setValue(value?.replace(/ /g, "_"), {
      emitEvent: false
    });
  });
  if (driver.id) {
    delete fields.class_name;
    delete fields.role;
  }
  return new FormGroup(fields);
}

// src/app/modules/modules.utilities.ts
function generateModuleFormFields(mod) {
  const fields = {
    id: new FormControl(mod?.id || ""),
    ip: new FormControl(mod?.ip || "", [validateIpAddress]),
    port: new FormControl(mod?.port || null, [
      Validators.min(1),
      Validators.max(65535)
    ]),
    tls: new FormControl(mod?.tls || false),
    udp: new FormControl(mod?.udp || false),
    makebreak: new FormControl(mod?.makebreak || false),
    ignore_connected: new FormControl(mod?.ignore_connected || false),
    uri: new FormControl(mod?.uri || "", [validateURI]),
    notes: new FormControl(mod?.notes || ""),
    name: new FormControl(mod?.name || ""),
    custom_name: new FormControl(mod?.custom_name || ""),
    system: new FormControl(mod?.system),
    control_system_id: new FormControl(mod?.control_system_id),
    role: new FormControl(mod?.role || $t.Logic),
    driver: new FormControl(null),
    driver_id: new FormControl(mod?.driver_id, [Validators.required]),
    edge: new FormControl(null),
    edge_id: new FormControl(mod?.edge_id || null)
  };
  const system = mod?.system || fields.system.value || null;
  fields.custom_name.valueChanges.subscribe((value) => {
    fields.custom_name.setValue(value?.replace(/ /g, "_"), {
      emitEvent: false
    });
  });
  if (!mod?.id) {
    fields.system.valueChanges.subscribe((value) => {
      fields.control_system_id.setValue(value?.id);
    });
    fields.edge.valueChanges.subscribe((value) => {
      fields.edge_id.setValue(value?.id || null);
    });
    fields.driver.valueChanges.subscribe((value) => {
      fields.driver_id.setValue(value.id);
      fields.name.setValue(value.name || value.module_name);
      fields.uri.setValue(value.default_uri);
      fields.port.setValue(value.default_port || 1);
      fields.role.setValue(value.role || $t.Logic);
      resetModuleFormValidators(fields);
      switch (value.role) {
        case $t.Service:
        case $t.Websocket:
          fields.uri.setValidators([
            Validators.required,
            validateURI
          ]);
          fields.udp.setValue(false);
          fields.system.setValue(null);
          break;
        case $t.Device:
        case $t.SSH:
          fields.ip.setValidators([
            validateIpAddress,
            Validators.required
          ]);
          fields.port.setValidators([
            Validators.min(1),
            Validators.max(65535),
            Validators.required
          ]);
          fields.system.setValue(null);
          break;
        case $t.Logic:
          fields.system.setValidators([Validators.required]);
          fields.system.setValue(system);
          break;
      }
    });
  } else {
    delete fields.system;
    delete fields.driver;
  }
  return new FormGroup(fields);
}
function resetModuleFormValidators(fields) {
  fields.ip.setValidators([validateIpAddress]);
  fields.port.setValidators([Validators.min(1), Validators.max(65535)]);
  fields.uri.setValidators([validateURI]);
  fields.system.setValidators([]);
  fields.driver.setValidators([Validators.required]);
}

// src/app/repositories/repositories.utilities.ts
function generateRepositoryFormFields(repository) {
  const fields = {
    id: new FormControl(repository?.id || ""),
    commit_hash: new FormControl(repository?.commit_hash || "HEAD"),
    branch: new FormControl(repository?.branch || "", [
      Validators.required
    ]),
    name: new FormControl(repository?.name || "", [Validators.required]),
    folder_name: new FormControl(repository?.folder_name || "", [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_+\-\(\)\.]*$/)
    ]),
    description: new FormControl(repository?.description || ""),
    uri: new FormControl(repository?.uri || "", [Validators.required]),
    repo_type: new FormControl(repository?.repo_type || Rr.Driver),
    root_path: new FormControl(repository?.root_path),
    username: new FormControl(repository?.username),
    password: new FormControl(repository?.password)
  };
  if (repository?.id) {
    delete fields.folder_name;
  }
  if (fields.branch) {
    fields.branch.valueChanges.subscribe((name) => {
      if (!name)
        fields.commit_hash.disable();
      else
        fields.commit_hash.enable();
    });
  }
  return new FormGroup(fields);
}

// node_modules/js-yaml/dist/js-yaml.mjs
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];
  return [sequence];
}
function extend(target, source) {
  var index, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = "", cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};
function formatError(exception2, compact) {
  var where = "", message = exception2.reason || "(unknown reason)";
  if (!exception2.mark) return message;
  if (exception2.mark.name) {
    where += 'in "' + exception2.mark.name + '" ';
  }
  where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
  if (!compact && exception2.mark.snippet) {
    where += "\n\n" + exception2.mark.snippet;
  }
  return message + " " + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = "";
  var tail = "";
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = " ...";
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
    pos: position - lineStart + head.length
    // relative position
  };
}
function padStart(string, max) {
  return common.repeat(" ", max - string.length) + string;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer) return null;
  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent !== "number") options.indent = 1;
  if (typeof options.linesBefore !== "number") options.linesBefore = 3;
  if (typeof options.linesAfter !== "number") options.linesAfter = 2;
  var re = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;
  while (match = re.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
  var result = "", i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
  }
  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  }
  return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map3) {
  var result = {};
  if (map3 !== null) {
    Object.keys(map3).forEach(function(style) {
      map3[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.options = options;
  this.tag = tag;
  this.kind = options["kind"] || null;
  this.resolve = options["resolve"] || function() {
    return true;
  };
  this.construct = options["construct"] || function(data) {
    return data;
  };
  this.instanceOf = options["instanceOf"] || null;
  this.predicate = options["predicate"] || null;
  this.represent = options["represent"] || null;
  this.representName = options["representName"] || null;
  this.defaultStyle = options["defaultStyle"] || null;
  this.multi = options["multi"] || false;
  this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;
function compileList(schema2, name) {
  var result = [];
  schema2[name].forEach(function(currentType) {
    var newIndex = result.length;
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, index, length;
  function collectType(type2) {
    if (type2.multi) {
      result.multi[type2.kind].push(type2);
      result.multi["fallback"].push(type2);
    } else {
      result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
  }
  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  }
  implicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    if (type$1.loadKind && type$1.loadKind !== "scalar") {
      throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
    if (type$1.multi) {
      throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }
  });
  explicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, "implicit");
  result.compiledExplicit = compileList(result, "explicit");
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data) {
    return data !== null ? data : "";
  }
});
var seq = new type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data) {
    return data !== null ? data : [];
  }
});
var map2 = new type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data) {
    return data !== null ? data : {};
  }
});
var failsafe = new schema({
  explicit: [
    str,
    seq,
    map2
  ]
});
function resolveYamlNull(data) {
  if (data === null) return true;
  var max = data.length;
  return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
  if (data === null) return false;
  var max = data.length;
  return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
  return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
  return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object) {
      return object ? "true" : "false";
    },
    uppercase: function(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase: function(object) {
      return object ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
  if (data === null) return false;
  var max = data.length, index = 0, hasDigits = false, ch;
  if (!max) return false;
  ch = data[index];
  if (ch === "-" || ch === "+") {
    ch = data[++index];
  }
  if (ch === "0") {
    if (index + 1 === max) return true;
    ch = data[++index];
    if (ch === "b") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_") continue;
        if (ch !== "0" && ch !== "1") return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_") continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "o") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_") continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
  }
  if (ch === "_") return false;
  for (; index < max; index++) {
    ch = data[index];
    if (ch === "_") continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_") return false;
  return true;
}
function constructYamlInteger(data) {
  var value = data, sign = 1, ch;
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-") sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0") return 0;
  if (ch === "0") {
    if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
    if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
    if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
  }
  return sign * parseInt(value, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
}
var int = new type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(data) {
  if (data === null) return false;
  if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data[data.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value, sign;
  value = data.replace(/_/g, "").toLowerCase();
  sign = value[0] === "-" ? -1 : 1;
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === ".nan") {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  var res;
  if (isNaN(object)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common.isNegativeZero(object)) {
    return "-0.0";
  }
  res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}
function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null) throw new Error("Date resolve error");
  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 6e4;
    if (match[9] === "-") delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta) date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
  return data === "<<" || data === null;
}
var merge2 = new type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
  if (data === null) return false;
  var code, idx, bitlen = 0, max = data.length, map3 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    code = map3.indexOf(data.charAt(idx));
    if (code > 64) continue;
    if (code < 0) return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  var idx, tailbits, input2 = data.replace(/[\r\n=]/g, ""), max = input2.length, map3 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map3.indexOf(input2.charAt(idx));
  }
  tailbits = max % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = "", bits = 0, idx, tail, max = object.length, map3 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map3[bits >> 18 & 63];
      result += map3[bits >> 12 & 63];
      result += map3[bits >> 6 & 63];
      result += map3[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  tail = max % 3;
  if (tail === 0) {
    result += map3[bits >> 18 & 63];
    result += map3[bits >> 12 & 63];
    result += map3[bits >> 6 & 63];
    result += map3[bits & 63];
  } else if (tail === 2) {
    result += map3[bits >> 10 & 63];
    result += map3[bits >> 4 & 63];
    result += map3[bits << 2 & 63];
    result += map3[64];
  } else if (tail === 1) {
    result += map3[bits >> 2 & 63];
    result += map3[bits << 4 & 63];
    result += map3[64];
    result += map3[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
  if (data === null) return true;
  var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]") return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }
    if (!pairHasKey) return false;
    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
  if (data === null) return true;
  var index, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    if (_toString$1.call(pair) !== "[object Object]") return false;
    keys = Object.keys(pair);
    if (keys.length !== 1) return false;
    result[index] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null) return [];
  var index, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  if (data === null) return true;
  var key, object = data;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set = new type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [
    timestamp,
    merge2
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc2;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc2 = c | 32;
  if (97 <= lc2 && lc2 <= 102) {
    return lc2 - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    (c - 65536 >> 10) + 55296,
    (c - 65536 & 1023) + 56320
  );
}
function setProperty(object, key, value) {
  if (key === "__proto__") {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value
    });
  } else {
    object[key] = value;
  }
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
var i;
function State$1(input2, options) {
  this.input = input2;
  this.filename = options["filename"] || null;
  this.schema = options["schema"] || _default;
  this.onWarning = options["onWarning"] || null;
  this.legacy = options["legacy"] || false;
  this.json = options["json"] || false;
  this.listener = options["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input2.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
function generateError(state, message) {
  var mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1),
    // omit trailing \0
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message, mark);
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match, major, minor;
    if (state.version !== null) {
      throwError(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError(state, "YAML directive accepts exactly one argument");
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state, "ill-formed argument of the YAML directive");
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, "tag prefix is malformed: " + prefix);
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, "the stream contains non-printable characters");
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;
  if (!common.isObject(source)) {
    throwError(state, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty$1.call(destination, key)) {
      setProperty(destination, key, source[key]);
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
        keyNode[index] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, "duplicated mapping key");
    }
    setProperty(_result, keyNode, valueNode);
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    throwError(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 9 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position, ch;
  ch = state.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += " ";
  } else if (count > 1) {
    state.result += common.repeat("\n", count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a single quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a double quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, "missed comma between flow collection entries");
    } else if (ch === 44) {
      throwError(state, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += common.repeat("\n", emptyLines);
      }
    } else {
      state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "sequence";
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state.position += 1;
      ch = following;
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;
      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "mapping";
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33) return false;
  if (state.tag !== null) {
    throwError(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, "tag name cannot contain such characters: " + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, "tag name is malformed: " + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 38) return false;
  if (state.anchor !== null) {
    throwError(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an anchor node must contain at least one character");
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 42) return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an alias node must contain at least one character");
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
  if (state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError(state, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }
  } else if (state.tag === "?") {
    if (state.result !== null && state.kind !== "scalar") {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type2 = state.implicitTypes[typeIndex];
      if (type2.resolve(state.result)) {
        state.result = type2.construct(state.result);
        state.tag = type2.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== "!") {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
      type2 = state.typeMap[state.kind || "fallback"][state.tag];
    } else {
      type2 = null;
      typeList = state.typeMap.multi[state.kind || "fallback"];
      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type2 = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type2) {
      throwError(state, "unknown tag !<" + state.tag + ">");
    }
    if (state.result !== null && type2.kind !== state.kind) {
      throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
    }
    if (!type2.resolve(state.result, state.tag)) {
      throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
    } else {
      state.result = type2.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }
  if (state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = /* @__PURE__ */ Object.create(null);
  state.anchorMap = /* @__PURE__ */ Object.create(null);
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch)) break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0) readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError(state, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input2, options) {
  input2 = String(input2);
  options = options || {};
  if (input2.length !== 0) {
    if (input2.charCodeAt(input2.length - 1) !== 10 && input2.charCodeAt(input2.length - 1) !== 13) {
      input2 += "\n";
    }
    if (input2.charCodeAt(0) === 65279) {
      input2 = input2.slice(1);
    }
  }
  var state = new State$1(input2, options);
  var nullpos = input2.indexOf("\0");
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, "null byte is not allowed in input");
  }
  state.input += "\0";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll$1(input2, iterator, options) {
  if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
    options = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input2, options);
  if (typeof iterator !== "function") {
    return documents;
  }
  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}
function load$1(input2, options) {
  var documents = loadDocuments(input2, options);
  if (documents.length === 0) {
    return void 0;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 65279;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema2, map3) {
  var result, keys, index, length, tag, style, type2;
  if (map3 === null) return {};
  result = {};
  keys = Object.keys(map3);
  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map3[tag]);
    if (tag.slice(0, 2) === "!!") {
      tag = "tag:yaml.org,2002:" + tag.slice(2);
    }
    type2 = schema2.compiledTypeMap["fallback"][tag];
    if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
      style = type2.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string, handle, length;
  string = character.toString(16).toUpperCase();
  if (character <= 255) {
    handle = "x";
    length = 2;
  } else if (character <= 65535) {
    handle = "u";
    length = 4;
  } else if (character <= 4294967295) {
    handle = "U";
    length = 8;
  } else {
    throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
  }
  return "\\" + handle + common.repeat("0", length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1;
var QUOTING_TYPE_DOUBLE = 2;
function State(options) {
  this.schema = options["schema"] || _default;
  this.indent = Math.max(1, options["indent"] || 2);
  this.noArrayIndent = options["noArrayIndent"] || false;
  this.skipInvalid = options["skipInvalid"] || false;
  this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
  this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
  this.sortKeys = options["sortKeys"] || false;
  this.lineWidth = options["lineWidth"] || 80;
  this.noRefs = options["noRefs"] || false;
  this.noCompatMode = options["noCompatMode"] || false;
  this.condenseFlow = options["condenseFlow"] || false;
  this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes = options["forceQuotes"] || false;
  this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = "";
  this.duplicates = [];
  this.usedDuplicates = null;
}
function indentString(string, spaces) {
  var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
  while (position < length) {
    next = string.indexOf("\n", position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }
    if (line.length && line !== "\n") result += ind;
    result += line;
  }
  return result;
}
function generateNextLine(state, level) {
  return "\n" + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str2) {
  var index, length, type2;
  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type2 = state.implicitTypes[index];
    if (type2.resolve(str2)) {
      return true;
    }
  }
  return false;
}
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}
function isPrintable(c) {
  return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
}
function isNsCharOrWhitespace(c) {
  return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    (inblock ? (
      // c = flow-in
      cIsNsCharOrWhitespace
    ) : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar
  );
}
function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
function isPlainSafeLast(c) {
  return !isWhitespace(c) && c !== CHAR_COLON;
}
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
  if (singleLineOnly || forceQuotes) {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
          i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
  }
  if (!hasLineBreak && !hasFoldableLine) {
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function() {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
      }
    }
    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
    var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string2) {
      return testImplicitResolving(state, string2);
    }
    switch (chooseScalarStyle(
      string,
      singleLineOnly,
      state.indent,
      lineWidth,
      testAmbiguity,
      state.quotingType,
      state.forceQuotes && !iskey,
      inblock
    )) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception("impossible error: invalid scalar style");
    }
  })();
}
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
  var clip = string[string.length - 1] === "\n";
  var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
  var chomp = keep ? "+" : clip ? "" : "-";
  return indentIndicator + chomp + "\n";
}
function dropEndingNewline(string) {
  return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
}
function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;
  var result = (function() {
    var nextLF = string.indexOf("\n");
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  })();
  var prevMoreIndented = string[0] === "\n" || string[0] === " ";
  var moreIndented;
  var match;
  while (match = lineRe.exec(string)) {
    var prefix = match[1], line = match[2];
    moreIndented = line[0] === " ";
    result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }
  return result;
}
function foldLine(line, width) {
  if (line === "" || line[0] === " ") return line;
  var breakRe = / [^ ]/g;
  var match;
  var start = 0, end, curr = 0, next = 0;
  var result = "";
  while (match = breakRe.exec(line)) {
    next = match.index;
    if (next - start > width) {
      end = curr > start ? curr : next;
      result += "\n" + line.slice(start, end);
      start = end + 1;
    }
    curr = next;
  }
  result += "\n";
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }
  return result.slice(1);
}
function escapeString(string) {
  var result = "";
  var char = 0;
  var escapeSeq;
  for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];
    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 65536) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }
  return result;
}
function writeFlowSequence(state, level, object) {
  var _result = "", _tag = state.tag, index, length, value;
  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }
    if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
      if (_result !== "") _result += "," + (!state.condenseFlow ? " " : "");
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object, compact) {
  var _result = "", _tag = state.tag, index, length, value;
  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }
    if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
      if (!compact || _result !== "") {
        _result += generateNextLine(state, level);
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += "-";
      } else {
        _result += "- ";
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || "[]";
}
function writeFlowMapping(state, level, object) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (_result !== "") pairBuffer += ", ";
    if (state.condenseFlow) pairBuffer += '"';
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }
    if (state.dump.length > 1024) pairBuffer += "? ";
    pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object, compact) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === "function") {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new exception("sortKeys must be a boolean or a function");
  }
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (!compact || _result !== "") {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }
    explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += "?";
      } else {
        pairBuffer += "? ";
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }
    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ":";
    } else {
      pairBuffer += ": ";
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || "{}";
}
function detectType(state, object, explicit) {
  var _result, typeList, index, length, type2, style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index = 0, length = typeList.length; index < length; index += 1) {
    type2 = typeList[index];
    if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
      if (explicit) {
        if (type2.multi && type2.representName) {
          state.tag = type2.representName(object);
        } else {
          state.tag = type2.tag;
        }
      } else {
        state.tag = "?";
      }
      if (type2.represent) {
        style = state.styleMap[type2.tag] || type2.defaultStyle;
        if (_toString.call(type2.represent) === "[object Function]") {
          _result = type2.represent(object, style);
        } else if (_hasOwnProperty.call(type2.represent, style)) {
          _result = type2.represent[style](object, style);
        } else {
          throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;
  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }
  var type2 = _toString.call(state.dump);
  var inblock = block;
  var tagStr;
  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }
  var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }
  if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = "*ref_" + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type2 === "[object Object]") {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object Array]") {
      if (block && state.dump.length !== 0) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object String]") {
      if (state.tag !== "?") {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type2 === "[object Undefined]") {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception("unacceptable kind of an object to dump " + type2);
    }
    if (state.tag !== null && state.tag !== "?") {
      tagStr = encodeURI(
        state.tag[0] === "!" ? state.tag.slice(1) : state.tag
      ).replace(/!/g, "%21");
      if (state.tag[0] === "!") {
        tagStr = "!" + tagStr;
      } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
        tagStr = "!!" + tagStr.slice(18);
      } else {
        tagStr = "!<" + tagStr + ">";
      }
      state.dump = tagStr + " " + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object, state) {
  var objects = [], duplicatesIndexes = [], index, length;
  inspectNode(object, objects, duplicatesIndexes);
  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index, length;
  if (object !== null && typeof object === "object") {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);
      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump$1(input2, options) {
  options = options || {};
  var state = new State(options);
  if (!state.noRefs) getDuplicateReferences(input2, state);
  var value = input2;
  if (state.replacer) {
    value = state.replacer.call({ "": value }, "", value);
  }
  if (writeNode(state, 0, value, true, true)) return state.dump + "\n";
  return "";
}
var dump_1 = dump$1;
var dumper = {
  dump: dump_1
};
function renamed(from, to) {
  return function() {
    throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
  };
}
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var safeLoad = renamed("safeLoad", "load");
var safeLoadAll = renamed("safeLoadAll", "loadAll");
var safeDump = renamed("safeDump", "dump");

// src/app/systems/systems.utilities.ts
function validateYAML(control) {
  const value = control.value || "";
  let message = "";
  try {
    load(value, { strict: true });
  } catch (e) {
    message = e.message;
  }
  return message ? { yaml: message } : null;
}
function generateSystemsFormFields(system) {
  const fields = {
    name: new FormControl(system.name || "", [Validators.required]),
    display_name: new FormControl(system.display_name || ""),
    email: new FormControl(system.email || "", [Validators.email]),
    code: new FormControl(system.code || ""),
    support_url: new FormControl(system.support_url || "", [validateURL]),
    timetable_url: new FormControl(system.timetable_url || "", [
      validateURL
    ]),
    camera_url: new FormControl(system.camera_url || "", [validateURL]),
    camera_snapshot_url: new FormControl(system.camera_snapshot_url || "", [
      validateURL
    ]),
    room_booking_url: new FormControl(system.room_booking_url || "", [
      validateURL
    ]),
    installed_ui_devices: new FormControl(system.installed_ui_devices || 0, [Validators.pattern("[0-9]*")]),
    features: new FormControl((typeof system.features === "string" ? system.features.split(" ") : system.features) || []),
    capacity: new FormControl(system.capacity || 0, [
      Validators.pattern("[0-9]*")
    ]),
    bookable: new FormControl(system.bookable || false),
    signage: new FormControl(system.signage || false),
    public: new FormControl(system.public || false),
    description: new FormControl(system.description || ""),
    images: new FormControl(system.images || []),
    map_id: new FormControl(system.map_id || ""),
    timezone: new FormControl(system.timezone || ""),
    zone: new FormControl(null, [Validators.required]),
    zones: new FormControl(system.zones, [Validators.required])
  };
  if (!system.id) {
    fields.zone.valueChanges.subscribe((value) => fields.zones.setValue([value.id]));
  } else
    delete fields.zone;
  return new FormGroup(fields);
}

// src/app/triggers/triggers.utilities.ts
function generateTriggerFormFields(trigger) {
  const fields = {
    name: new FormControl(trigger?.name || "", [Validators.required]),
    description: new FormControl(trigger?.description || ""),
    enable_webhook: new FormControl(trigger?.enable_webhook || false),
    supported_methods: new FormControl(trigger?.supported_methods || []),
    debounce_period: new FormControl(Math.max(0, trigger?.debounce_period || 0))
  };
  return new FormGroup(fields);
}
function generateTriggerSettingsFormFields(trigger) {
  const fields = {
    name: new FormControl(trigger?.name || ""),
    playlists: new FormControl(trigger?.playlists || []),
    triggered: new FormControl(+trigger?.activated_count > 0),
    exec_enabled: new FormControl(!!trigger?.exec_enabled),
    enabled: new FormControl(!!trigger?.enabled),
    important: new FormControl(!!trigger?.important)
  };
  return new FormGroup(fields);
}
function validateCompare(control) {
  const form = control.parent;
  if (form && form instanceof FormGroup && form.controls.condition_type && form.controls.condition_type.value === "compare") {
    if (control.value instanceof Object) {
      const value = control.value;
      return !value.mod ? { module: true } : !value.status ? { status: true } : null;
    } else {
      return validateJSONString(control);
    }
  }
  return null;
}
function generateTriggerConditionForm(condition = {}) {
  const type2 = condition.type ? "time" : "compare";
  const left = typeof condition.left === "object" ? __spreadValues({}, condition.left) : condition.left;
  const right = typeof condition.right === "object" ? __spreadValues({}, condition.right) : condition.right;
  const fields = {
    condition_type: new FormControl(type2),
    left: new FormControl(__spreadValues({}, left || {}), [validateCompare]),
    operator: new FormControl(condition.operator || Vo.EQ),
    right: new FormControl(right || void 0, [validateCompare]),
    time_type: new FormControl(condition.type || "at"),
    time: new FormControl((+condition.time || 0) * 1e3 || Date.now()),
    cron: new FormControl(condition.cron || void 0),
    timezone: new FormControl(condition.timezone || "")
  };
  return new FormGroup(fields);
}
function validateEmailList(control) {
  if (control.value && control.value instanceof Array) {
    const value = control.value;
    return value.reduce((valid, email) => valid && !Validators.email({ value: email }), true) ? null : { email: true };
  }
  return null;
}
function generateTriggerActionForm(action = {}) {
  const type2 = action && action?.emails ? "emails" : "function";
  const fields = {
    action_type: new FormControl(type2),
    emails: new FormControl(action?.emails || [], [
      Validators.min(1),
      Validators.required,
      validateEmailList
    ]),
    content: new FormControl(action?.content || "", [
      Validators.required
    ]),
    method_call: new FormControl(action || null, [])
  };
  return new FormGroup(fields);
}

// src/app/ui/forms/application-form.component.ts
var _c02 = () => ({ standalone: true });
function ApplicationFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 7);
    \u0275\u0275element(8, "input", 8);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "DOMAINS.APP_NAME_REQUIRED"));
  }
}
function ApplicationFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 10);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.APP_SCOPES"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.APP_SCOPES"));
  }
}
function ApplicationFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275elementStart(6, "mat-error");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.APP_REDIRECT_URL"), ": ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "DOMAINS.APP_REDIRECT_URL_REQUIRED"));
  }
}
function ApplicationFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 14);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 5, "DOMAINS.APP_CLIENT_ID"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "DOMAINS.APP_CLIENT_PLACEHOLDER"))("disabled", true)("ngModel", \u0275\u0275pipeBind1(7, 9, ctx_r0.client_id))("ngModelOptions", \u0275\u0275pureFunction0(11, _c02));
  }
}
function ApplicationFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ApplicationFormComponent_Conditional_0_Conditional_2_Template, 12, 8, "div", 2);
    \u0275\u0275conditionalCreate(3, ApplicationFormComponent_Conditional_0_Conditional_3_Template, 7, 6, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ApplicationFormComponent_Conditional_0_Conditional_4_Template, 9, 6, "div", 2);
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275element(6, "settings-toggle", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275element(8, "settings-toggle", 5);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ApplicationFormComponent_Conditional_0_Conditional_10_Template, 8, 12, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.scopes ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.redirect_uri ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(7, 7, "DOMAINS.APP_SKIP"));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(9, 9, "DOMAINS.APP_PRESERVE_ID"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.redirect_uri ? 10 : -1);
  }
}
var ApplicationFormComponent = class _ApplicationFormComponent extends AsyncHandler {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  default_redirect_uri;
  client_id = new BehaviorSubject("");
  ngOnChanges(changes) {
    const form = this.form();
    if (changes.form && form) {
      const { id, client_id, redirect_uri } = form.value;
      this.default_redirect_uri = redirect_uri || "";
      this.client_id.next(client_id || redirect_uri ? h.hashStr(redirect_uri || "") : "");
      this.subscription("form.redirect_uri", form.get("redirect_uri").valueChanges.subscribe((value) => {
        const formValue = this.form();
        if (formValue.value.preserve_client_id)
          return;
        this.client_id.next(value ? h.hashStr(value) : "");
        formValue.patchValue({ redirect_uri: value?.trim() }, { emitEvent: false });
      }));
      this.subscription("form.preserve_client_id", form.get("preserve_client_id").valueChanges.subscribe((preserve) => {
        const value = this.form().value.redirect_uri;
        const uri = preserve ? this.default_redirect_uri : value;
        this.client_id.next(uri ? h.hashStr(uri) : "");
      }));
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ApplicationFormComponent_BaseFactory;
    return function ApplicationFormComponent_Factory(__ngFactoryType__) {
      return (\u0275ApplicationFormComponent_BaseFactory || (\u0275ApplicationFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ApplicationFormComponent)))(__ngFactoryType__ || _ApplicationFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationFormComponent, selectors: [["application-form"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["application", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "fieldset"], [1, "field"], [1, "fieldset", "mb-4"], ["formControlName", "skip_authorization", 1, "flex-1", 3, "name"], ["formControlName", "preserve_client_id", 1, "flex-1", 3, "name"], ["for", "application-name"], ["appearance", "outline"], ["matInput", "", "name", "application-name", "placeholder", "Application Name", "formControlName", "name", "required", ""], ["for", "scopes"], ["matInput", "", "name", "scopes", "formControlName", "scopes", 3, "placeholder"], ["for", "redirect-uri"], ["matInput", "", "name", "redirect-uri", "placeholder", "Redirect URI e.g. http://localhost:4200/oauth-resp.html", "formControlName", "redirect_uri"], ["for", "client-id"], ["matInput", "", "name", "client-id", 3, "placeholder", "disabled", "ngModel", "ngModelOptions"]], template: function ApplicationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ApplicationFormComponent_Conditional_0_Template, 11, 11, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    NgModel,
    CommonModule,
    SettingsToggleComponent,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatInputModule,
    MatInput,
    AsyncPipe,
    TranslatePipe
  ], styles: ["\n\nsettings-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=application-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationFormComponent, [{
    type: Component,
    args: [{ selector: "application-form", template: `
        @if (form()) {
            <form application class="flex flex-col" [formGroup]="form()">
                <div class="fieldset">
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="application-name"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="application-name"
                                    placeholder="Application Name"
                                    formControlName="name"
                                    required
                                />
                                <mat-error>{{
                                    'DOMAINS.APP_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.scopes) {
                        <div class="field">
                            <label for="scopes"
                                >{{ 'DOMAINS.APP_SCOPES' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="scopes"
                                    [placeholder]="
                                        'DOMAINS.APP_SCOPES' | translate
                                    "
                                    formControlName="scopes"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.redirect_uri) {
                    <div class="field">
                        <label for="redirect-uri"
                            >{{ 'DOMAINS.APP_REDIRECT_URL' | translate }}:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="redirect-uri"
                                placeholder="Redirect URI e.g. http://localhost:4200/oauth-resp.html"
                                formControlName="redirect_uri"
                            />
                            <mat-error>{{
                                'DOMAINS.APP_REDIRECT_URL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset mb-4">
                    <settings-toggle
                        class="flex-1"
                        [name]="'DOMAINS.APP_SKIP' | translate"
                        formControlName="skip_authorization"
                    ></settings-toggle>
                    <settings-toggle
                        class="flex-1"
                        [name]="'DOMAINS.APP_PRESERVE_ID' | translate"
                        formControlName="preserve_client_id"
                    ></settings-toggle>
                </div>
                @if (form().controls.redirect_uri) {
                    <div class="field">
                        <label for="client-id"
                            >{{ 'DOMAINS.APP_CLIENT_ID' | translate }}:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="client-id"
                                [placeholder]="
                                    'DOMAINS.APP_CLIENT_PLACEHOLDER' | translate
                                "
                                [disabled]="true"
                                [ngModel]="client_id | async"
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `, imports: [
      MatFormFieldModule,
      FormsModule,
      CommonModule,
      TranslatePipe,
      SettingsToggleComponent,
      ReactiveFormsModule,
      MatInputModule
    ], styles: ["/* angular:styles/component:css;0ad2801bf20fdba1813d81d82012ea077876a6eec759fec0061750263a0c4155;/home/runner/work/backoffice/backoffice/src/app/ui/forms/application-form.component.ts */\nsettings-form-field {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=application-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationFormComponent, { className: "ApplicationFormComponent", filePath: "src/app/ui/forms/application-form.component.ts", lineNumber: 136 });
})();

// src/app/ui/forms/broker-form.component.ts
var _c03 = (a0) => ({ item: a0 });
function BrokerFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "ADMIN.BROKERS_NAME_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "textarea", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.FIELD_DESCRIPTION"));
  }
}
function BrokerFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 10);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ADMIN.BROKERS_FIELD_HOST"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "ADMIN.BROKERS_FIELD_HOST"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "ADMIN.BROKERS_HOST_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 12);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.port.invalid && ctx_r0.form().controls.port.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ADMIN.BROKERS_FIELD_PORT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "ADMIN.BROKERS_FIELD_PORT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "ADMIN.BROKERS_PORT_REQUIRED"), " ");
  }
}
function BrokerFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "settings-toggle", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "COMMON.TLS"));
  }
}
function BrokerFormComponent_Conditional_0_Conditional_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
function BrokerFormComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5)(5, "mat-select", 15);
    \u0275\u0275repeaterCreate(6, BrokerFormComponent_Conditional_0_Conditional_7_For_7_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "ADMIN.BROKERS_FIELD_AUTH_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.auth_types);
  }
}
function BrokerFormComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 17);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ADMIN.BROKERS_USERNAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "ADMIN.BROKERS_USERNAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "ADMIN.BROKERS_USERNAME_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon", 20);
    \u0275\u0275listener("mousedown", function BrokerFormComponent_Conditional_0_Conditional_8_Conditional_2_Template_icon_mousedown_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.show_password = true);
    })("mouseup", function BrokerFormComponent_Conditional_0_Conditional_8_Conditional_2_Template_icon_mouseup_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.show_password = false);
    }, \u0275\u0275resolveWindow)("touchstart", function BrokerFormComponent_Conditional_0_Conditional_8_Conditional_2_Template_icon_touchstart_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.show_password = true);
    })("touchend", function BrokerFormComponent_Conditional_0_Conditional_8_Conditional_2_Template_icon_touchend_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.show_password = false);
    }, \u0275\u0275resolveWindow);
    \u0275\u0275text(8, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.password.invalid && ctx_r0.form().controls.password.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "ADMIN.BROKERS_PASSWORD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.show_password ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 8, "ADMIN.BROKERS_PASSWORD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_PASSWORD_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_0_Conditional_8_Conditional_1_Template, 12, 11, "div", 2);
    \u0275\u0275conditionalCreate(2, BrokerFormComponent_Conditional_0_Conditional_8_Conditional_2_Template, 12, 12, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.password ? 2 : -1);
  }
}
function BrokerFormComponent_Conditional_0_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "textarea", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "ADMIN.BROKERS_CERT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "ADMIN.BROKERS_CERT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "ADMIN.BROKERS_CERT_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BrokerFormComponent_Conditional_0_Conditional_9_Conditional_0_Template, 10, 9, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.form().controls.certificate ? 0 : -1);
  }
}
function BrokerFormComponent_Conditional_0_Conditional_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 28);
    \u0275\u0275listener("removed", function BrokerFormComponent_Conditional_0_Conditional_10_For_8_Template_mat_chip_row_removed_0_listener() {
      const filter_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeFilter(filter_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const filter_r6 = ctx.$implicit;
    \u0275\u0275ariaProperty("aria-description", "Press enter to edit " + filter_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", filter_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 3, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(6, _c03, filter_r6)));
  }
}
function BrokerFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 24)(5, "mat-chip-grid", 25, 0);
    \u0275\u0275repeaterCreate(7, BrokerFormComponent_Conditional_0_Conditional_10_For_8_Template, 6, 8, "mat-chip-row", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(9, "input", 27);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function BrokerFormComponent_Conditional_0_Conditional_10_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addFilter($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipGrid_r7 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ADMIN.BROKERS_FIELD_FILTERS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.filters);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 7, "ADMIN.BROKERS_FIELD_FILTERS"))("matChipInputFor", chipGrid_r7)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function BrokerFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_0_Conditional_1_Template, 12, 11, "div", 2);
    \u0275\u0275conditionalCreate(2, BrokerFormComponent_Conditional_0_Conditional_2_Template, 7, 6, "div", 2);
    \u0275\u0275conditionalCreate(3, BrokerFormComponent_Conditional_0_Conditional_3_Template, 12, 11, "div", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275conditionalCreate(5, BrokerFormComponent_Conditional_0_Conditional_5_Template, 12, 11, "div", 2);
    \u0275\u0275conditionalCreate(6, BrokerFormComponent_Conditional_0_Conditional_6_Template, 3, 3, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BrokerFormComponent_Conditional_0_Conditional_7_Template, 8, 3, "div", 2);
    \u0275\u0275conditionalCreate(8, BrokerFormComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 3);
    \u0275\u0275conditionalCreate(9, BrokerFormComponent_Conditional_0_Conditional_9_Template, 1, 1);
    \u0275\u0275conditionalCreate(10, BrokerFormComponent_Conditional_0_Conditional_10_Template, 11, 9, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.description ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.port ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.tls ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.auth_type ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.auth_type.value === 2 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.auth_type.value === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.filters ? 10 : -1);
  }
}
var BrokerFormComponent = class _BrokerFormComponent {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** List of available authentication types */
  auth_types = [];
  /** List of separator characters for filters */
  separators = [ENTER, COMMA];
  /** Whether to show password field value */
  show_password;
  get filters() {
    return this.form().controls.filters.value;
  }
  ngOnInit() {
    this.auth_types = [
      {
        id: Do.Certificate,
        name: i18n("ADMIN.BROKERS_AUTH_TYPE_CERT")
      },
      { id: Do.NoAuth, name: i18n("ADMIN.BROKERS_AUTH_TYPE_NONE") },
      {
        id: Do.UserPassword,
        name: i18n("ADMIN.BROKERS_AUTH_TYPE_PASS")
      }
    ];
  }
  /**
   * Add a filter to the list of filters for the item
   * @param event Input event
   */
  addFilter(event) {
    const value = (event.value || "").trim();
    if (value) {
      const filter_list = this.filters;
      this.form().patchValue({
        filters: unique([...filter_list, value])
      });
    }
    event.chipInput.clear();
  }
  /**
   * Remove filter from the list
   * @param existing_filter Filter to remove
   */
  removeFilter(existing_filter) {
    if (!this.filters?.length)
      return;
    const filter_list = this.filters;
    const index = filter_list.indexOf(existing_filter);
    if (index >= 0) {
      filter_list.splice(index, 1);
      this.form().controls.filters.setValue(filter_list);
    }
  }
  static \u0275fac = function BrokerFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrokerFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrokerFormComponent, selectors: [["broker-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["chipGrid", ""], ["broker", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "field"], [1, "fieldset"], ["for", "broker-name"], ["appearance", "outline"], ["matInput", "", "name", "broker-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "host"], ["matInput", "", "name", "host", "formControlName", "host", "required", "", 3, "placeholder"], ["for", "port-number"], ["matInput", "", "name", "port-number", "type", "number", "formControlName", "port", 3, "placeholder"], ["formControlName", "tls", 1, "mt-8", "w-full", 3, "name"], ["for", "type"], ["name", "type", "formControlName", "auth_type"], [3, "value"], ["matInput", "", "name", "username", "formControlName", "username", "required", "", 3, "placeholder"], ["for", "new-password"], ["matInput", "", "name", "new-password", "autocomplete", "new-password", "formControlName", "password", 3, "type", "placeholder"], ["matSuffix", "", 3, "mousedown", "mouseup", "touchstart", "touchend"], ["for", "cert"], ["matInput", "", "name", "cert", "formControlName", "certificate", 3, "placeholder"], ["for", "filters"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Enter fruits"], [3, "aria-description"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "aria-description"], ["matChipRemove", ""]], template: function BrokerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BrokerFormComponent_Conditional_0_Template, 11, 10, "form", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSuffix,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    IconComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    SettingsToggleComponent,
    TranslatePipe
  ], styles: ["\n\nsettings-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=broker-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrokerFormComponent, [{
    type: Component,
    args: [{ selector: "broker-form", template: `
        @if (form()) {
            <form broker class="flex flex-col" [formGroup]="form()">
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="broker-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="broker-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            <mat-error>{{
                                'ADMIN.BROKERS_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="host"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'ADMIN.BROKERS_FIELD_HOST' | translate
                            }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="host"
                                [placeholder]="
                                    'ADMIN.BROKERS_FIELD_HOST' | translate
                                "
                                formControlName="host"
                                required
                            />
                            <mat-error>{{
                                'ADMIN.BROKERS_HOST_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.port) {
                        <div class="field">
                            <label
                                for="port-number"
                                [class.error]="
                                    form().controls.port.invalid &&
                                    form().controls.port.touched
                                "
                            >
                                {{ 'ADMIN.BROKERS_FIELD_PORT' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="port-number"
                                    type="number"
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_PORT' | translate
                                    "
                                    formControlName="port"
                                />
                                <mat-error>
                                    {{
                                        'ADMIN.BROKERS_PORT_REQUIRED'
                                            | translate
                                    }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.tls) {
                        <div class="field">
                            <settings-toggle
                                class="mt-8 w-full"
                                [name]="'COMMON.TLS' | translate"
                                formControlName="tls"
                            ></settings-toggle>
                        </div>
                    }
                </div>
                @if (form().controls.auth_type) {
                    <div class="field">
                        <label for="type"
                            >{{ 'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select name="type" formControlName="auth_type">
                                @for (type of auth_types; track type) {
                                    <mat-option [value]="type.id">
                                        {{ type.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.auth_type.value === 2) {
                    <div class="fieldset">
                        @if (form().controls.name) {
                            <div class="field">
                                <label
                                    for="host"
                                    [class.error]="
                                        form().controls.name.invalid &&
                                        form().controls.name.touched
                                    "
                                >
                                    {{ 'ADMIN.BROKERS_USERNAME' | translate }}
                                    <span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="username"
                                        [placeholder]="
                                            'ADMIN.BROKERS_USERNAME' | translate
                                        "
                                        formControlName="username"
                                        required
                                    />
                                    <mat-error>{{
                                        'ADMIN.BROKERS_USERNAME_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form().controls.password) {
                            <div class="field">
                                <label
                                    for="new-password"
                                    [class.error]="
                                        form().controls.password.invalid &&
                                        form().controls.password.touched
                                    "
                                >
                                    {{ 'ADMIN.BROKERS_PASSWORD' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="new-password"
                                        autocomplete="new-password"
                                        [type]="
                                            show_password ? 'text' : 'password'
                                        "
                                        [placeholder]="
                                            'ADMIN.BROKERS_PASSWORD' | translate
                                        "
                                        formControlName="password"
                                    />
                                    <icon
                                        matSuffix
                                        (mousedown)="show_password = true"
                                        (window:mouseup)="show_password = false"
                                        (touchstart)="show_password = true"
                                        (window:touchend)="
                                            show_password = false
                                        "
                                    >
                                        visibility
                                    </icon>
                                    <mat-error>{{
                                        'ADMIN.BROKERS_PASSWORD_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                }
                @if (form().controls.auth_type.value === 0) {
                    @if (form().controls.certificate) {
                        <div class="field">
                            <label for="cert">
                                {{ 'ADMIN.BROKERS_CERT' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="cert"
                                    [placeholder]="
                                        'ADMIN.BROKERS_CERT' | translate
                                    "
                                    formControlName="certificate"
                                ></textarea>
                                <mat-error>{{
                                    'ADMIN.BROKERS_CERT_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                }
                @if (form().controls.filters) {
                    <div class="field">
                        <label for="filters">
                            {{ 'ADMIN.BROKERS_FIELD_FILTERS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipGrid aria-label="Enter fruits">
                                @for (filter of filters; track filter) {
                                    <mat-chip-row
                                        (removed)="removeFilter(filter)"
                                        [aria-description]="
                                            'Press enter to edit ' + filter
                                        "
                                    >
                                        {{ filter }}
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.REMOVE_ITEM'
                                                    | translate
                                                        : { item: filter }
                                            "
                                        >
                                            <icon>cancel</icon>
                                        </button>
                                    </mat-chip-row>
                                }
                                <input
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_FILTERS'
                                            | translate
                                    "
                                    [matChipInputFor]="chipGrid"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addFilter($event)"
                                />
                            </mat-chip-grid>
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `, imports: [
      MatFormFieldModule,
      MatChipsModule,
      IconComponent,
      TranslatePipe,
      ReactiveFormsModule,
      MatInputModule,
      MatSelectModule,
      SettingsToggleComponent
    ], styles: ["/* angular:styles/component:css;0ad2801bf20fdba1813d81d82012ea077876a6eec759fec0061750263a0c4155;/home/runner/work/backoffice/backoffice/src/app/ui/forms/broker-form.component.ts */\nsettings-form-field {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=broker-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrokerFormComponent, { className: "BrokerFormComponent", filePath: "src/app/ui/forms/broker-form.component.ts", lineNumber: 308 });
})();

// src/app/ui/forms/domain-form.component.ts
var _c04 = (a0) => ({ item: a0 });
function DomainFormComponent_Conditional_0_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.NAME_REQUIRED"), " ");
  }
}
function DomainFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275conditionalCreate(9, DomainFormComponent_Conditional_0_Conditional_2_Conditional_9_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name.invalid ? 9 : -1);
  }
}
function DomainFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.domain.invalid && ctx_r0.form().controls.domain.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "DOMAINS.NAME_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "DOMAINS.DOMAIN_REQUIRED"));
  }
}
function DomainFormComponent_Conditional_0_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.LOGIN_URL_REQUIRED"), " ");
  }
}
function DomainFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 10);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_0_Conditional_4_Conditional_7_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.login_url.invalid && ctx_r0.form().controls.login_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.LOGIN_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "DOMAINS.LOGIN_URL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.login_url.invalid ? 7 : -1);
  }
}
function DomainFormComponent_Conditional_0_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.LOGOUT_URL_REQUIRED"), " ");
  }
}
function DomainFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_0_Conditional_5_Conditional_7_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.logout_url.invalid && ctx_r0.form().controls.logout_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.LOGOUT_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "DOMAINS.LOGOUT_URL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.logout_url.invalid ? 7 : -1);
  }
}
function DomainFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "textarea", 14);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.FIELD_DESCRIPTION"));
  }
}
function DomainFormComponent_Conditional_0_Conditional_7_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 18);
    \u0275\u0275listener("removed", function DomainFormComponent_Conditional_0_Conditional_7_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeEmailDomain(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.ITEM_REMOVE", \u0275\u0275pureFunction1(5, _c04, item_r4)));
  }
}
function DomainFormComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15)(5, "mat-chip-grid", 16, 0);
    \u0275\u0275repeaterCreate(7, DomainFormComponent_Conditional_0_Conditional_7_For_8_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 17);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function DomainFormComponent_Conditional_0_Conditional_7_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addEmailDomain($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.email_domains.invalid && ctx_r0.form().controls.email_domains.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "DOMAINS.EMAIL_DOMAINS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.email_domain_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "DOMAINS.EMAIL_DOMAINS"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function DomainFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, DomainFormComponent_Conditional_0_Conditional_2_Template, 10, 9, "div", 3);
    \u0275\u0275conditionalCreate(3, DomainFormComponent_Conditional_0_Conditional_3_Template, 10, 11, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DomainFormComponent_Conditional_0_Conditional_4_Template, 8, 9, "div", 3);
    \u0275\u0275conditionalCreate(5, DomainFormComponent_Conditional_0_Conditional_5_Template, 8, 9, "div", 3);
    \u0275\u0275conditionalCreate(6, DomainFormComponent_Conditional_0_Conditional_6_Template, 7, 6, "div", 3);
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_0_Conditional_7_Template, 11, 11, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.domain ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.login_url ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.logout_url ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.description ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.email_domains ? 7 : -1);
  }
}
var DomainFormComponent = class _DomainFormComponent {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  addEmailDomain = (e) => {
    if (!e?.value)
      return;
    if (!isValidDomain(e.value))
      return notifyWarn("Invalid email");
    addChipItem(this.form().controls.email_domains, e);
  };
  removeEmailDomain = (i) => removeChipItem(this.form().controls.email_domains, i);
  get email_domain_list() {
    return this.form().controls.email_domains.value;
  }
  static \u0275fac = function DomainFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainFormComponent, selectors: [["domain-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["chipList", ""], ["domain", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "fieldset"], [1, "field"], ["for", "domain-name"], ["appearance", "outline"], ["matInput", "", "name", "domain-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "domain"], ["matInput", "", "name", "domain", "formControlName", "domain", 3, "placeholder"], ["for", "login-url"], ["matInput", "", "name", "login-url", "formControlName", "login_url", 3, "placeholder"], ["for", "logout-url"], ["matInput", "", "name", "logout-url", "formControlName", "logout_url", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Image List"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function DomainFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DomainFormComponent_Conditional_0_Template, 8, 7, "form", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatInputModule,
    MatInput,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    IconComponent,
    TranslatePipe
  ], styles: ["\n\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=domain-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainFormComponent, [{
    type: Component,
    args: [{ selector: "domain-form", template: `
        @if (form()) {
            <form domain class="flex flex-col" [formGroup]="form()">
                <div class="fieldset">
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="domain-name"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="domain-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    formControlName="name"
                                    required
                                />
                                @if (form().controls.name.invalid) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.NAME_REQUIRED' | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.domain) {
                        <div class="field">
                            <label
                                for="domain"
                                [class.error]="
                                    form().controls.domain.invalid &&
                                    form().controls.domain.touched
                                "
                            >
                                {{ 'DOMAINS.NAME' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="domain"
                                    [placeholder]="
                                        'DOMAINS.NAME_PLACEHOLDER' | translate
                                    "
                                    formControlName="domain"
                                />
                                <mat-error>{{
                                    'DOMAINS.DOMAIN_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.login_url) {
                    <div class="field">
                        <label
                            for="login-url"
                            [class.error]="
                                form().controls.login_url.invalid &&
                                form().controls.login_url.touched
                            "
                        >
                            {{ 'DOMAINS.LOGIN_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="login-url"
                                [placeholder]="'DOMAINS.LOGIN_URL' | translate"
                                formControlName="login_url"
                            />
                            @if (form().controls.login_url.invalid) {
                                <mat-error>
                                    {{
                                        'DOMAINS.LOGIN_URL_REQUIRED' | translate
                                    }}
                                </mat-error>
                            }
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.logout_url) {
                    <div class="field">
                        <label
                            for="logout-url"
                            [class.error]="
                                form().controls.logout_url.invalid &&
                                form().controls.logout_url.touched
                            "
                        >
                            {{ 'DOMAINS.LOGOUT_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="logout-url"
                                [placeholder]="'DOMAINS.LOGOUT_URL' | translate"
                                formControlName="logout_url"
                            />
                            @if (form().controls.logout_url.invalid) {
                                <mat-error>
                                    {{
                                        'DOMAINS.LOGOUT_URL_REQUIRED'
                                            | translate
                                    }}
                                </mat-error>
                            }
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">{{
                            'COMMON.FIELD_DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.email_domains) {
                    <div class="field">
                        <label
                            [class.error]="
                                form().controls.email_domains.invalid &&
                                form().controls.email_domains.touched
                            "
                        >
                            {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipList aria-label="Image List">
                                @for (item of email_domain_list; track item) {
                                    <mat-chip-row
                                        (removed)="removeEmailDomain(item)"
                                    >
                                        <div class="max-w-md truncate">
                                            {{ item }}
                                        </div>
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.ITEM_REMOVE'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <icon>cancel</icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                [placeholder]="
                                    'DOMAINS.EMAIL_DOMAINS' | translate
                                "
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addEmailDomain($event)"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `, imports: [
      MatFormFieldModule,
      MatChipsModule,
      MatInputModule,
      TranslatePipe,
      ReactiveFormsModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;04b7a7094a437298576db2a062c3593f3d6712155227875ebf15729043ce208e;/home/runner/work/backoffice/backoffice/src/app/ui/forms/domain-form.component.ts */\nmat-checkbox {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=domain-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainFormComponent, { className: "DomainFormComponent", filePath: "src/app/ui/forms/domain-form.component.ts", lineNumber: 221 });
})();

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// node_modules/date-fns/subMinutes.js
function subMinutes(date, amount, options) {
  return addMinutes(date, -amount, options);
}

// src/app/ui/forms/driver-form.component.ts
function DriverFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "item-search-field", 3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("ngModelChange", function DriverFormComponent_Conditional_0_Conditional_6_Template_item_search_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.driver.next($event);
      return \u0275\u0275resetView(ctx_r1.commit.next(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "DRIVERS.BASE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 7, "DRIVERS.SEARCH"))("options", \u0275\u0275pipeBind1(5, 9, ctx_r1.driver_list))("loading", ctx_r1.loading_type().includes("drivers"))("ngModel", ctx_r1.driver.getValue());
  }
}
function DriverFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "item-search-field", 3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("ngModelChange", function DriverFormComponent_Conditional_0_Template_item_search_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.repo.next($event);
      ctx_r1.driver.next(null);
      return \u0275\u0275resetView(ctx_r1.commit.next(null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DriverFormComponent_Conditional_0_Conditional_6_Template, 6, 11);
    \u0275\u0275pipe(7, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "REPOS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 8, "REPOS.SEARCH"))("options", \u0275\u0275pipeBind1(5, 10, ctx_r1.repo_list))("loading", ctx_r1.loading_type().includes("repository"))("ngModel", ctx_r1.repo.getValue());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(7, 12, ctx_r1.repo) ? 6 : -1);
  }
}
function DriverFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "item-search-field", 3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("ngModelChange", function DriverFormComponent_Conditional_1_Template_item_search_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.commit.next($event);
      return \u0275\u0275resetView(ctx_r1.applyDriverCommit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "DRIVERS.COMMIT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 7, "DRIVERS.COMMIT_SEARCH"))("options", \u0275\u0275pipeBind1(5, 9, ctx_r1.commit_list))("loading", ctx_r1.loading_type().includes("commits"))("ngModel", ctx_r1.commit.getValue());
  }
}
function DriverFormComponent_Conditional_3_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275property("value", type_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, type_r5.name), " ");
  }
}
function DriverFormComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 8)(5, "mat-select", 24);
    \u0275\u0275repeaterCreate(6, DriverFormComponent_Conditional_3_Conditional_13_For_7_Template, 3, 4, "mat-option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "DRIVERS.ROLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.role_types);
  }
}
function DriverFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 8);
    \u0275\u0275element(7, "input", 9);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275conditionalCreate(13, DriverFormComponent_Conditional_3_Conditional_13_Template, 8, 3, "div", 11);
    \u0275\u0275elementStart(14, "div", 11)(15, "label", 12);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span", 7);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 8);
    \u0275\u0275element(21, "input", 13);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "label", 14);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 8);
    \u0275\u0275element(30, "textarea", 15);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 16);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 8);
    \u0275\u0275element(36, "input", 17);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 18)(39, "div", 11)(40, "label", 19);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 8);
    \u0275\u0275element(44, "input", 20);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementStart(46, "mat-error");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 11);
    \u0275\u0275element(50, "div", 21)(51, "settings-toggle", 22);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form());
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("name"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 22, "COMMON.FIELD_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 24, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 26, "DRIVERS.NAME_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.is_editing() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("module_name"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 28, "DRIVERS.MODULE_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 30, "DRIVERS.MODULE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 32, "DRIVERS.MODULE_NAME_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 34, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(31, 36, "COMMON.FIELD_DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 38, "DRIVERS.DEFAULT_URI"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 40, "DRIVERS.DEFAULT_URI"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("default_port"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 42, "DRIVERS.DEFAULT_PORT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 44, "DRIVERS.DEFAULT_PORT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 46, "MODULES.PORT_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(52, 48, "MODULES.IGNORE_CONNECTED"));
  }
}
function DriverFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r1.loading()));
  }
}
var DriverFormComponent = class _DriverFormComponent extends AsyncHandler {
  _date_pipe = new DatePipe("en");
  /** Group of form fields used for creating the system */
  form = input(new FormGroup({}), ...ngDevMode ? [{ debugName: "form" }] : []);
  is_editing = computed(() => !!this.form().value.id, ...ngDevMode ? [{ debugName: "is_editing" }] : []);
  waiting = output();
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  loading_type = signal([], ...ngDevMode ? [{ debugName: "loading_type" }] : []);
  role_types = [
    { id: $t.SSH, name: "DRIVERS.SSH" },
    { id: $t.Device, name: "DRIVERS.DEVICE" },
    { id: $t.Service, name: "DRIVERS.SERVICE" },
    { id: $t.Websocket, name: "DRIVERS.WEBSOCKET" },
    { id: $t.Logic, name: "DRIVERS.LOGIC" }
  ];
  repo = new BehaviorSubject(null);
  driver = new BehaviorSubject(null);
  commit = new BehaviorSubject(null);
  repo_list = Gu({ limit: 1e3 }).pipe(map(({ data }) => data.filter((repo) => repo.type === Rr.Driver)), shareReplay(1));
  driver_list = this.repo.pipe(filter((item) => !!item?.id), distinctUntilKeyChanged("id"), tap(() => this.loading_type.update((types) => [...types, "drivers"])), switchMap(({ id }) => uc(id, { limit: 1e3 }).pipe(catchError(() => of([])))), map((list) => list.map((_) => ({
    id: _,
    name: _.replace(/\//g, " > ")
  }))), tap(() => this.loading_type.update((types) => types.filter((_) => _ !== "drivers"))), shareReplay(1));
  commit_list = combineLatest([this.repo, this.driver]).pipe(filter(([repo, driver]) => !!repo?.id && !!driver?.id), distinctUntilChanged(([prev_repo, prev_driver], [curr_repo, curr_driver]) => prev_repo?.id === curr_repo?.id && prev_driver?.id === curr_driver?.id), tap(() => this.loading_type.update((types) => [...types, "commits"])), switchMap(([{ id }, driver]) => cc(id, { driver: driver.id, limit: 1e3 }).pipe(catchError(() => of([])))), map((list) => list.map((item) => ({
    id: item.commit,
    name: `${item.subject}`,
    extra: isAfter(item.date, subMinutes(item.date, 1)) ? this._date_pipe.transform(item.date.valueOf()) : format(item.date, "dd MMM yyyy")
  }))), tap(() => this.loading_type.update((types) => types.filter((_) => _ !== "commits"))), shareReplay(1));
  ngOnChanges(changes) {
    if (changes.form && this.form()) {
      this._loadDetailsFromForm();
    }
  }
  fieldInvalid(field) {
    return this.form().controls[field].invalid && this.form().controls[field].touched;
  }
  async applyDriverCommit(commit) {
    const old_commit = this.commit.getValue();
    this.form().patchValue({ commit: commit.id });
    this.commit.next(commit);
    const repo = this.repo.getValue();
    const driver = this.driver.getValue();
    if (!driver.id)
      return;
    this.loading.set("DRIVERS.DETAILS_LOADING");
    this.waiting.emit(true);
    this.form().patchValue({
      repository_id: repo.id,
      file_name: driver.id
    });
    this.subscription("driver_details", fc(repo.id, {
      driver: `${driver.id}`,
      commit: `${commit.id}`
    }).pipe(catchError(() => of(null))).subscribe((details) => {
      if (!details) {
        this.form().patchValue({ commit: old_commit.id });
        this.commit.next(old_commit);
        this.loading.set("");
        this.waiting.emit(false);
        notifyError(`Failed to get driver details for commit "${commit.id}"`);
        return;
      }
      if (this.form().value.id) {
        this.loading.set("");
        this.waiting.emit(false);
        return;
      }
      this._applyDriverDetails(details);
    }));
  }
  _applyDriverDetails(details) {
    if (details == null) {
      this.loading.set("");
      this.waiting.emit(false);
      return;
    }
    const driver = this.driver.getValue();
    let settings = details.default_settings || "";
    try {
      JSON.parse(details.default_settings);
      const doc = load(details.default_settings);
      settings = dump(doc);
    } catch (error) {
      console.error("Error parsing settings:", error, driver.default_settings);
    }
    const port_number = details.tcp_port || details.udp_port || null;
    this.form().patchValue({
      name: details.descriptive_name || "",
      module_name: details.generic_name || "",
      class_name: driver.id || "",
      settings,
      default_port: port_number,
      default_uri: details.uri_base || "",
      role: port_number ? port_number === 22 ? $t.SSH : $t.Device : details.uri_base ? details.uri_base.startsWith("ws") ? $t.Websocket : $t.Service : $t.Logic,
      description: details.description || ""
    });
    this.waiting.emit(false);
    this.loading.set("");
  }
  async _loadDetailsFromForm() {
    const { id, commit, file_name, repository_id } = this.form().value;
    if (!id)
      return;
    this.loading.set("DRIVERS.DETAILS_LOADING");
    const repo = await lastValueFrom(Xu(repository_id));
    const driver = {
      id: file_name,
      name: file_name.replace(/\//g, " > ")
    };
    this.repo.next(repo);
    this.driver.next(driver);
    const commit_list = await nextValueFrom(this.commit_list);
    const active_commit = commit_list.find((c) => c.id === commit);
    if (active_commit)
      this.commit.next(active_commit);
    this.loading.set("");
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DriverFormComponent_BaseFactory;
    return function DriverFormComponent_Factory(__ngFactoryType__) {
      return (\u0275DriverFormComponent_BaseFactory || (\u0275DriverFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DriverFormComponent)))(__ngFactoryType__ || _DriverFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverFormComponent, selectors: [["driver-form"]], inputs: { form: [1, "form"] }, outputs: { waiting: "waiting" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 6, vars: 8, consts: [[1, "flex", "flex-col", 3, "formGroup"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "bg-base-200", "px-8", "py-16"], ["for", "repos"], [3, "ngModelChange", "placeholder", "options", "loading", "ngModel"], ["for", "driver"], ["for", "commit"], ["for", "driver-name"], ["required", ""], ["appearance", "outline"], ["matInput", "", "name", "driver-name", "formControlName", "name", "required", "", 3, "placeholder"], [1, "flex", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "module-name"], ["matInput", "", "name", "module-name", "formControlName", "module_name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "default-uri"], ["matInput", "", "name", "default-uri", "formControlName", "default_uri", 3, "placeholder"], [1, "flex", "items-center", "space-x-4"], ["for", "default-port"], ["matInput", "", "name", "default-port", "type", "number", "formControlName", "default_port", 3, "placeholder"], [1, "h-1", "w-full"], ["formControlName", "ignore_connected", 1, "w-full", 3, "name"], ["for", "role"], ["name", "role", "formControlName", "role"], [3, "value"], [3, "diameter"]], template: function DriverFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DriverFormComponent_Conditional_0_Template, 8, 14);
      \u0275\u0275conditionalCreate(1, DriverFormComponent_Conditional_1_Template, 6, 11);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275conditionalCreate(3, DriverFormComponent_Conditional_3_Template, 53, 50, "div", 0);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275conditionalCreate(5, DriverFormComponent_Conditional_5_Template, 5, 4, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.is_editing() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 4, ctx.driver) ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 6, ctx.commit) && !ctx.loading() && ctx.form().controls.id ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 5 : -1);
    }
  }, dependencies: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    SettingsToggleComponent,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    MatSelectModule,
    MatSelect,
    MatOption,
    ItemSearchFieldComponent,
    FormsModule,
    NgModel,
    AsyncPipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverFormComponent, [{
    type: Component,
    args: [{ selector: "driver-form", template: `
        @if (!is_editing()) {
            <label for="repos">{{ 'REPOS.SINGULAR' | translate }}</label>
            <item-search-field
                [placeholder]="'REPOS.SEARCH' | translate"
                [options]="repo_list | async"
                [loading]="loading_type().includes('repository')"
                [ngModel]="repo.getValue()"
                (ngModelChange)="
                    repo.next($event); driver.next(null); commit.next(null)
                "
            />
            @if (repo | async) {
                <label for="driver">{{ 'DRIVERS.BASE' | translate }}</label>
                <item-search-field
                    [placeholder]="'DRIVERS.SEARCH' | translate"
                    [options]="driver_list | async"
                    [loading]="loading_type().includes('drivers')"
                    [ngModel]="driver.getValue()"
                    (ngModelChange)="driver.next($event); commit.next(null)"
                />
            }
        }
        @if (driver | async) {
            <label for="commit">{{ 'DRIVERS.COMMIT' | translate }}</label>
            <item-search-field
                [placeholder]="'DRIVERS.COMMIT_SEARCH' | translate"
                [options]="commit_list | async"
                [loading]="loading_type().includes('commits')"
                [ngModel]="commit.getValue()"
                (ngModelChange)="commit.next($event); applyDriverCommit($event)"
            />
        }
        @if ((commit | async) && !loading() && form().controls.id) {
            <div class="flex flex-col" [formGroup]="form()">
                <label for="driver-name" [class.error]="fieldInvalid('name')">
                    {{ 'COMMON.FIELD_NAME' | translate }}
                    <span required>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="driver-name"
                        [placeholder]="'COMMON.FIELD_NAME' | translate"
                        formControlName="name"
                        required
                    />
                    <mat-error>
                        {{ 'DRIVERS.NAME_REQUIRED' | translate }}
                    </mat-error>
                </mat-form-field>
                <div class="flex space-x-4">
                    @if (!is_editing()) {
                        <div class="flex flex-1 flex-col">
                            <label for="role">
                                {{ 'DRIVERS.ROLE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select name="role" formControlName="role">
                                    @for (type of role_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name | translate }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    <div class="flex flex-1 flex-col">
                        <label
                            for="module-name"
                            [class.error]="fieldInvalid('module_name')"
                        >
                            {{ 'DRIVERS.MODULE_NAME' | translate }}
                            <span required>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="module-name"
                                [placeholder]="
                                    'DRIVERS.MODULE_NAME' | translate
                                "
                                formControlName="module_name"
                                required
                            />
                            <mat-error>
                                {{ 'DRIVERS.MODULE_NAME_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <label for="description">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        [placeholder]="'COMMON.FIELD_DESCRIPTION' | translate"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
                <label for="default-uri">{{
                    'DRIVERS.DEFAULT_URI' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="default-uri"
                        [placeholder]="'DRIVERS.DEFAULT_URI' | translate"
                        formControlName="default_uri"
                    />
                </mat-form-field>
                <div class="flex items-center space-x-4">
                    <div class="flex flex-1 flex-col">
                        <label
                            for="default-port"
                            [class.error]="fieldInvalid('default_port')"
                        >
                            {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="default-port"
                                type="number"
                                [placeholder]="
                                    'DRIVERS.DEFAULT_PORT' | translate
                                "
                                formControlName="default_port"
                            />
                            <mat-error>
                                {{ 'MODULES.PORT_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <div class="h-1 w-full"></div>
                        <settings-toggle
                            class="w-full"
                            [name]="'MODULES.IGNORE_CONNECTED' | translate"
                            formControlName="ignore_connected"
                        ></settings-toggle>
                    </div>
                </div>
            </div>
        }
        <!-- Form fields go here -->
        @if (loading()) {
            <div
                class="flex w-full flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 px-8 py-16"
            >
                <mat-spinner [diameter]="32" />
                <p>{{ loading() | translate }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatSelectModule,
      ItemSearchFieldComponent,
      FormsModule
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], waiting: [{ type: Output, args: ["waiting"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverFormComponent, { className: "DriverFormComponent", filePath: "src/app/ui/forms/driver-form.component.ts", lineNumber: 227 });
})();

// src/app/ui/forms/module-form.component.ts
function ModuleFormComponent_Conditional_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.DRIVER_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "item-search-field", 3);
    \u0275\u0275conditionalCreate(7, ModuleFormComponent_Conditional_0_Conditional_1_Conditional_7_Template, 3, 3, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.driver.invalid && ctx_r0.form().controls.driver.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DRIVERS.SINGULAR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("query_fn", ctx_r0.driver_query_fn);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.driver.invalid && ctx_r0.form().controls.driver.touched ? 7 : -1);
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.SYSTEM_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-search-field", 13);
    \u0275\u0275conditionalCreate(1, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Conditional_5_Conditional_1_Template, 3, 3, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("query_fn", ctx_r0.system_query_fn);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.system.invalid && ctx_r0.form().controls.system.touched ? 1 : -1);
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r0.form().controls.system.value) == null ? null : tmp_4_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r0.form().controls.system.value) == null ? null : tmp_5_0.id);
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Conditional_5_Template, 2, 2)(6, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Conditional_6_Template, 4, 2, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.system.invalid && ctx_r0.form().controls.system.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "MODULES.CONTROL_SYSTEM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.role === "logic" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.readonly() ? 5 : 6);
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15);
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.uri.invalid && ctx_r0.form().controls.uri.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "MODULES.URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "MODULES.URI"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "MODULES.URI_REQUIRED"));
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " * ");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.IP_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_3_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 15);
    \u0275\u0275element(6, "input", 18);
    \u0275\u0275conditionalCreate(7, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_3_Conditional_7_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.ip.invalid && ctx_r0.form().controls.ip.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "MODULES.FIELD_IP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.role === "ssh" || ctx_r0.role === "device" ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.form().controls.ip.invalid ? 7 : -1);
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " * ");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.PORT_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_4_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 15);
    \u0275\u0275element(6, "input", 20);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275conditionalCreate(8, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_4_Conditional_8_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.port.invalid && ctx_r0.form().controls.port.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "MODULES.PORT_NUMBER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.role === "ssh" || ctx_r0.role === "device" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "MODULES.PORT_NUMBER"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.port.invalid ? 8 : -1);
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 7);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 1, "COMMON.TLS"));
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 1, "COMMON.UDP"));
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 9);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 1, "MODULES.MAKEBREAK"));
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 10);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 1, "MODULES.IGNORE_CONNECTED"));
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "textarea", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.NOTES"));
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "MODULES.CUSTOM_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "MODULES.CUSTOM_NAME"));
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "item-search-field", 25);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.EDGE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 5, "COMMON.EDGE_SEARCH"))("query_fn", ctx_r0.edge_query_fn);
  }
}
function ModuleFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_0_Template, 7, 7, "div", 1);
    \u0275\u0275conditionalCreate(1, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_1_Template, 12, 11, "div", 1);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275conditionalCreate(3, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_3_Template, 8, 7, "div", 1);
    \u0275\u0275conditionalCreate(4, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_4_Template, 9, 10, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275conditionalCreate(6, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_6_Template, 2, 3, "settings-toggle", 7);
    \u0275\u0275conditionalCreate(7, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_7_Template, 2, 3, "settings-toggle", 8);
    \u0275\u0275conditionalCreate(8, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_8_Template, 2, 3, "settings-toggle", 9);
    \u0275\u0275conditionalCreate(9, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_9_Template, 2, 3, "settings-toggle", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_10_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(11, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_11_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(12, ModuleFormComponent_Conditional_0_Conditional_2_Conditional_12_Template, 6, 7, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.form().controls.system && ctx_r0.role === "logic" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.uri && (ctx_r0.role === "service" || ctx_r0.role === "websocket") ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.ip && !(ctx_r0.role === "service" || ctx_r0.role === "websocket") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.port && !(ctx_r0.role === "service" || ctx_r0.role === "websocket") ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.tls && !(ctx_r0.role === "service" || ctx_r0.role === "websocket") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.udp && !(ctx_r0.role === "service" || ctx_r0.role === "websocket") ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.makebreak && ctx_r0.role !== "logic" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.ignore_connected && ctx_r0.role !== "logic" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.notes ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.custom_name ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.edge && !ctx_r0.form().controls.id.value ? 12 : -1);
  }
}
function ModuleFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, ModuleFormComponent_Conditional_0_Conditional_1_Template, 8, 7, "div", 1);
    \u0275\u0275conditionalCreate(2, ModuleFormComponent_Conditional_0_Conditional_2_Template, 13, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.driver && !ctx_r0.form().controls.id.value ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.form().controls.driver || ctx_r0.form().controls.driver.value ? 2 : -1);
  }
}
var ModuleFormComponent = class _ModuleFormComponent extends AsyncHandler {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** Whether system is readonly */
  readonly = input(void 0, ...ngDevMode ? [{ debugName: "readonly" }] : []);
  driver_query_fn = (_) => cu({ q: _ }).pipe(map((resp) => resp.data));
  system_query_fn = (_) => $c({ q: _ }).pipe(map((resp) => resp.data));
  edge_query_fn = (_) => yu({ q: _ }).pipe(map((resp) => resp.data));
  /** Role of the selected driver */
  get role() {
    const form = this.form();
    const role = form.controls.driver?.value.role || form.controls.role.value;
    switch (role) {
      case $t.SSH:
        return "ssh";
      case $t.Device:
        return "device";
      case $t.Service:
        return "service";
      case $t.Websocket:
        return "websocket";
    }
    return "logic";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ModuleFormComponent_BaseFactory;
    return function ModuleFormComponent_Factory(__ngFactoryType__) {
      return (\u0275ModuleFormComponent_BaseFactory || (\u0275ModuleFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ModuleFormComponent)))(__ngFactoryType__ || _ModuleFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleFormComponent, selectors: [["module-form"]], inputs: { form: [1, "form"], readonly: [1, "readonly"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["module", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "field"], ["for", "driver"], ["name", "driver", "formControlName", "driver", 3, "query_fn"], [1, "error"], [1, "fieldset"], [1, "-mx-2", "mb-4", "flex", "flex-wrap", "items-center"], ["formControlName", "tls", 1, "max-w-1/2", "m-2", "min-w-[40%]", "flex-1", 3, "name"], ["formControlName", "udp", 1, "max-w-1/2", "m-2", "min-w-[40%]", "flex-1", 3, "name"], ["formControlName", "makebreak", 1, "max-w-1/2", "m-2", "min-w-[40%]", "flex-1", 3, "name"], ["formControlName", "ignore_connected", 1, "max-w-1/2", "m-2", "min-w-[40%]", "flex-1", 3, "name"], ["for", "system"], [1, "value"], ["name", "system", "formControlName", "system", 3, "query_fn"], ["for", "uri"], ["appearance", "outline"], ["matInput", "", "name", "uri", "formControlName", "uri", 3, "placeholder"], ["for", "ip"], ["matInput", "", "name", "ip", "placeholder", "IP Address", "formControlName", "ip"], ["for", "port-number"], ["matInput", "", "name", "port-number", "type", "number", "formControlName", "port", 3, "placeholder"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["for", "custom-name"], ["matInput", "", "name", "custom-name", "formControlName", "custom_name", 3, "placeholder"], ["formControlName", "edge", 3, "placeholder", "query_fn"]], template: function ModuleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ModuleFormComponent_Conditional_0_Template, 3, 3, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    ItemSearchFieldComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    SettingsToggleComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleFormComponent, [{
    type: Component,
    args: [{ selector: "module-form", template: `
        @if (form()) {
            <form module class="flex flex-col" [formGroup]="form()">
                @if (form().controls.driver && !form().controls.id.value) {
                    <div class="field">
                        <label
                            for="driver"
                            [class.error]="
                                form().controls.driver.invalid &&
                                form().controls.driver.touched
                            "
                        >
                            {{ 'DRIVERS.SINGULAR' | translate }}<span>*</span>
                        </label>
                        <item-search-field
                            name="driver"
                            [query_fn]="driver_query_fn"
                            formControlName="driver"
                        ></item-search-field>
                        @if (
                            form().controls.driver.invalid &&
                            form().controls.driver.touched
                        ) {
                            <div class="error">
                                {{ 'MODULES.DRIVER_REQUIRED' | translate }}
                            </div>
                        }
                    </div>
                }
                @if (!form().controls.driver || form().controls.driver.value) {
                    @if (form().controls.system && role === 'logic') {
                        <div class="field">
                            <label
                                for="system"
                                [class.error]="
                                    form().controls.system.invalid &&
                                    form().controls.system.touched
                                "
                            >
                                {{ 'MODULES.CONTROL_SYSTEM' | translate }}
                                @if (role === 'logic') {
                                    <span>*</span>
                                }
                            </label>
                            @if (!readonly()) {
                                <item-search-field
                                    name="system"
                                    [query_fn]="system_query_fn"
                                    formControlName="system"
                                ></item-search-field>
                                @if (
                                    form().controls.system.invalid &&
                                    form().controls.system.touched
                                ) {
                                    <div class="error">
                                        {{
                                            'MODULES.SYSTEM_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                }
                            } @else {
                                <div class="value">
                                    {{ form().controls.system.value?.name }}
                                    <span>{{
                                        form().controls.system.value?.id
                                    }}</span>
                                </div>
                            }
                        </div>
                    }
                    @if (
                        form().controls.uri &&
                        (role === 'service' || role === 'websocket')
                    ) {
                        <div class="field">
                            <label
                                for="uri"
                                [class.error]="
                                    form().controls.uri.invalid &&
                                    form().controls.uri.touched
                                "
                            >
                                {{ 'MODULES.URI' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="uri"
                                    [placeholder]="'MODULES.URI' | translate"
                                    formControlName="uri"
                                />
                                <mat-error>{{
                                    'MODULES.URI_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (
                            form().controls.ip &&
                            !(role === 'service' || role === 'websocket')
                        ) {
                            <div class="field">
                                <label
                                    for="ip"
                                    [class.error]="
                                        form().controls.ip.invalid &&
                                        form().controls.ip.touched
                                    "
                                >
                                    {{ 'MODULES.FIELD_IP' | translate }}
                                    @if (role === 'ssh' || role === 'device') {
                                        <span> * </span>
                                    }
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="ip"
                                        placeholder="IP Address"
                                        formControlName="ip"
                                    />
                                    @if (form().controls.ip.invalid) {
                                        <mat-error>
                                            {{
                                                'MODULES.IP_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                        @if (
                            form().controls.port &&
                            !(role === 'service' || role === 'websocket')
                        ) {
                            <div class="field">
                                <label
                                    for="port-number"
                                    [class.error]="
                                        form().controls.port.invalid &&
                                        form().controls.port.touched
                                    "
                                >
                                    {{ 'MODULES.PORT_NUMBER' | translate }}
                                    @if (role === 'ssh' || role === 'device') {
                                        <span> * </span>
                                    }
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="port-number"
                                        type="number"
                                        [placeholder]="
                                            'MODULES.PORT_NUMBER' | translate
                                        "
                                        formControlName="port"
                                    />
                                    @if (form().controls.port.invalid) {
                                        <mat-error>
                                            {{
                                                'MODULES.PORT_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="-mx-2 mb-4 flex flex-wrap items-center">
                        @if (
                            form().controls.tls &&
                            !(role === 'service' || role === 'websocket')
                        ) {
                            <settings-toggle
                                class="max-w-1/2 m-2 min-w-[40%] flex-1"
                                [name]="'COMMON.TLS' | translate"
                                formControlName="tls"
                            ></settings-toggle>
                        }
                        @if (
                            form().controls.udp &&
                            !(role === 'service' || role === 'websocket')
                        ) {
                            <settings-toggle
                                class="max-w-1/2 m-2 min-w-[40%] flex-1"
                                [name]="'COMMON.UDP' | translate"
                                formControlName="udp"
                            ></settings-toggle>
                        }
                        @if (form().controls.makebreak && role !== 'logic') {
                            <settings-toggle
                                class="max-w-1/2 m-2 min-w-[40%] flex-1"
                                [name]="'MODULES.MAKEBREAK' | translate"
                                formControlName="makebreak"
                            ></settings-toggle>
                        }
                        @if (
                            form().controls.ignore_connected && role !== 'logic'
                        ) {
                            <settings-toggle
                                class="max-w-1/2 m-2 min-w-[40%] flex-1"
                                [name]="'MODULES.IGNORE_CONNECTED' | translate"
                                formControlName="ignore_connected"
                            ></settings-toggle>
                        }
                    </div>
                    @if (form().controls.notes) {
                        <div class="field">
                            <label for="notes">{{
                                'COMMON.NOTES' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="notes"
                                    [placeholder]="'COMMON.NOTES' | translate"
                                    formControlName="notes"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.custom_name) {
                        <div class="field">
                            <label for="custom-name">
                                {{ 'MODULES.CUSTOM_NAME' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="custom-name"
                                    [placeholder]="
                                        'MODULES.CUSTOM_NAME' | translate
                                    "
                                    formControlName="custom_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.edge && !form().controls.id.value) {
                        <div class="field">
                            <label for="driver">
                                {{ 'COMMON.EDGE' | translate }}
                            </label>
                            <item-search-field
                                [placeholder]="'COMMON.EDGE_SEARCH' | translate"
                                [query_fn]="edge_query_fn"
                                formControlName="edge"
                            ></item-search-field>
                        </div>
                    }
                }
            </form>
        }
    `, imports: [
      ItemSearchFieldComponent,
      TranslatePipe,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      SettingsToggleComponent
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleFormComponent, { className: "ModuleFormComponent", filePath: "src/app/ui/forms/module-form.component.ts", lineNumber: 289 });
})();

// src/app/ui/forms/repository-form.component.ts
var _c05 = () => ({ standalone: true });
function RepositoryFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 4);
    \u0275\u0275element(7, "input", 5);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "REPOS.NAME_REQUIRED"));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4)(5, "mat-select", 7);
    \u0275\u0275repeaterCreate(6, RepositoryFormComponent_Conditional_0_Conditional_3_For_7_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "REPOS.TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.repo_types);
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 4);
    \u0275\u0275element(7, "input", 10);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.folder_name.invalid && ctx_r0.form().controls.folder_name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "REPOS.FOLDER_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "REPOS.FOLDER_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "REPOS.FOLDER_NAME_REQUIRED"));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 4);
    \u0275\u0275element(7, "input", 12);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.uri.invalid && ctx_r0.form().controls.uri.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "REPOS.URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "REPOS.URI"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "REPOS.URI_REQUIRED"));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4);
    \u0275\u0275element(5, "input", 14);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "REPOS.USERNAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "REPOS.USERNAME"));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4);
    \u0275\u0275element(5, "input", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon", 17);
    \u0275\u0275listener("click", function RepositoryFormComponent_Conditional_0_Conditional_8_Template_icon_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.show_password = !ctx_r0.show_password);
    });
    \u0275\u0275text(8, " visibility ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "REPOS.PASSWORD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.show_password ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.PASSWORD"));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_9_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r4 = ctx.$implicit;
    \u0275\u0275property("value", branch_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", branch_r4, " ");
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-select", 18);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275repeaterCreate(9, RepositoryFormComponent_Conditional_0_Conditional_9_For_10_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.branch.invalid && ctx_r0.form().controls.branch.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "REPOS.BRANCH"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", "Select Branch")("disabled", !((tmp_5_0 = \u0275\u0275pipeBind1(8, 8, ctx_r0.branch_list)) == null ? null : tmp_5_0.length));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 10, ctx_r0.branch_list));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "REPOS.BRANCH_REQUIRED"));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_10_For_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const commit_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(commit_r7.author);
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_10_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 8)(1, "div", 26);
    \u0275\u0275listener("click", function RepositoryFormComponent_Conditional_0_Conditional_10_For_15_Template_div_click_1_listener() {
      const commit_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.base_commit = commit_r7);
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, RepositoryFormComponent_Conditional_0_Conditional_10_For_15_Conditional_8_Template, 2, 1, "code", 30);
    \u0275\u0275elementStart(9, "code", 30);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "slice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const commit_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", commit_r7.hash);
    \u0275\u0275advance();
    \u0275\u0275classProp("w-full!", ctx_r0.form().value.commit_hash === commit_r7.hash);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", commit_r7.subject, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 7, commit_r7.date, "medium"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(commit_r7.author ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(11, 10, commit_r7.hash, 0, 8));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4)(5, "mat-select", 21);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementStart(7, "mat-select-trigger")(8, "div", 22)(9, "div", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 24);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(14, RepositoryFormComponent_Conditional_0_Conditional_10_For_15_Template, 12, 14, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 1)(18, "settings-toggle", 25);
    \u0275\u0275listener("ngModelChange", function RepositoryFormComponent_Conditional_0_Conditional_10_Template_settings_toggle_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setFollow($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "REPOS.COMMIT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !((tmp_3_0 = \u0275\u0275pipeBind1(6, 8, ctx_r0.commit_list)) == null ? null : tmp_3_0.length));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.base_commit == null ? null : ctx_r0.base_commit.subject) || "Latest commit", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 10, ctx_r0.form().value.commit_hash || "HEAD", 0, 8), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(16, 14, ctx_r0.commit_list));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.follow_latest)("ngModelOptions", \u0275\u0275pureFunction0(16, _c05));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4);
    \u0275\u0275element(5, "textarea", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.FIELD_DESCRIPTION"));
  }
}
function RepositoryFormComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4);
    \u0275\u0275element(5, "input", 34);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "REPOS.ROOT_PATH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "REPOS.ROOT_PATH"));
  }
}
function RepositoryFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, RepositoryFormComponent_Conditional_0_Conditional_1_Template, 12, 11, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275conditionalCreate(3, RepositoryFormComponent_Conditional_0_Conditional_3_Template, 8, 3, "div", 1);
    \u0275\u0275conditionalCreate(4, RepositoryFormComponent_Conditional_0_Conditional_4_Template, 12, 11, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RepositoryFormComponent_Conditional_0_Conditional_5_Template, 12, 11, "div", 1);
    \u0275\u0275elementStart(6, "div", 2);
    \u0275\u0275conditionalCreate(7, RepositoryFormComponent_Conditional_0_Conditional_7_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(8, RepositoryFormComponent_Conditional_0_Conditional_8_Template, 9, 7, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, RepositoryFormComponent_Conditional_0_Conditional_9_Template, 15, 14, "div", 1);
    \u0275\u0275conditionalCreate(10, RepositoryFormComponent_Conditional_0_Conditional_10_Template, 19, 17);
    \u0275\u0275conditionalCreate(11, RepositoryFormComponent_Conditional_0_Conditional_11_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(12, RepositoryFormComponent_Conditional_0_Conditional_12_Template, 7, 6, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.is_editing() && ctx_r0.form().controls.repo_type && ctx_r0.form().controls.folder_name ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.folder_name ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.uri && !ctx_r0.hide_uri ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.username ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.password ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.branch ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_interface ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.description ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.root_path ? 12 : -1);
  }
}
var RepositoryFormComponent = class _RepositoryFormComponent extends AsyncHandler {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** List of commits available for repository */
  commit_list = of([]);
  /** List of branches available for repository */
  branch_list = of([]);
  /** Whether repository's commits are being loaded */
  loading_commits;
  /** Currently selected commit for the repository */
  base_commit;
  /** Whether to follow the latest branch commits(Auto-update) */
  follow_latest;
  /** List of available types of repositories */
  repo_types = [];
  show_password = false;
  date_pipe = new DateFromPipe();
  is_editing = signal(false, ...ngDevMode ? [{ debugName: "is_editing" }] : []);
  get hide_uri() {
    return !this.is_interface && this.form().value.id;
  }
  get is_interface() {
    return this.form()?.value?.repo_type === Rr.Interface;
  }
  ngOnInit() {
    this.repo_types = [
      { id: Rr.Driver, name: i18n("REPOS.TYPE_DRIVER") },
      {
        id: Rr.Interface,
        name: i18n("REPOS.TYPE_INTERFACE")
      }
    ];
    this.follow_latest = this.form()?.value.commit_hash === "HEAD";
    this.is_editing.set(!!this.form()?.value.id);
  }
  ngOnChanges(changes) {
    const form = this.form();
    if (changes.form && form) {
      form.get("branch").disable();
      this.branch_list = merge(timer(300), form.get("uri").valueChanges, form.get("username").valueChanges, form.get("password").valueChanges).pipe(debounceTime(300), switchMap(() => {
        const { id, uri, username, password } = this.form().value;
        return (id ? ac(id) : isValidUrl(uri) && uri.startsWith("http") ? oc({
          repository_url: uri,
          username,
          password
        }) : of([])).pipe(catchError((_) => of([])));
      }), tap((_) => _.length ? this.form().get("branch").enable() : this.form().get("branch").disable()), shareReplay(1));
      const default_branch = this.branch_list.pipe(debounceTime(300), switchMap(() => {
        const { id, uri, username, password } = this.form().value;
        return (id ? lc(id) : isValidUrl(uri) && uri.startsWith("http") ? ic({
          repository_url: uri,
          username,
          password
        }) : of("")).pipe(catchError(() => of("")));
      }), shareReplay(1));
      this.subscription("default_branch", combineLatest([this.branch_list, default_branch]).subscribe(([list, branch]) => {
        const formValue = this.form();
        return !formValue.value.branch || !list.includes(formValue.value.branch) ? formValue.patchValue({ branch }) : "";
      }));
      this.commit_list = merge(timer(300), form.get("uri").valueChanges, form.get("branch").valueChanges, form.get("username").valueChanges, form.get("password").valueChanges).pipe(debounceTime(300), switchMap(() => {
        const { id, uri, branch, username, password } = this.form().value;
        return (id ? cc(id, { branch }) : isValidUrl(uri) && uri.startsWith("http") && branch ? sc({
          repository_url: uri,
          username,
          password,
          branch
        }) : of([])).pipe(catchError((_) => of([])));
      }), map((l) => [
        { hash: "HEAD", subject: "Latest commit on the branch" },
        ...l
      ]), tap((l) => {
        const commit = l.find((c) => c.hash === this.form().value.commit_hash) || l[0];
        this.base_commit = commit;
      }), shareReplay(1));
    }
  }
  setFollow(value) {
    this.follow_latest = value;
    const form = this.form();
    if (value) {
      this.form().controls.commit_hash.setValue("HEAD");
    } else if (!value && form.controls.commit_hash.value === "HEAD") {
      form.controls.commit_hash.setValue(this.commit_list[1].id);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RepositoryFormComponent_BaseFactory;
    return function RepositoryFormComponent_Factory(__ngFactoryType__) {
      return (\u0275RepositoryFormComponent_BaseFactory || (\u0275RepositoryFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RepositoryFormComponent)))(__ngFactoryType__ || _RepositoryFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryFormComponent, selectors: [["repository-form"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["repository", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "field"], [1, "fieldset"], ["for", "repository-name"], ["appearance", "outline"], ["matInput", "", "name", "repository-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "type"], ["name", "type", "formControlName", "repo_type"], [3, "value"], ["for", "folder-name"], ["matInput", "", "name", "folder-name", "formControlName", "folder_name", "required", "", 3, "placeholder"], ["for", "uri"], ["matInput", "", "name", "uri", "formControlName", "uri", "required", "", 3, "placeholder"], ["for", "repo-u"], ["matInput", "", "name", "repo-u", "autocomplete", "off", "formControlName", "username", 3, "placeholder"], ["for", "repo-p"], ["matInput", "", "name", "repo-pwd", "autocomplete", "new-password", "formControlName", "password", 3, "type", "placeholder"], ["matSuffix", "", 3, "click"], ["name", "type", "formControlName", "branch", 3, "placeholder", "disabled"], [1, "field", "commit"], ["for", "commit"], ["formControlName", "commit_hash", "placeholder", "Select commit", 3, "disabled"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "truncate"], [1, "mr-4!", "rounded-sm", "bg-base-200", "px-1.5", "font-mono", "text-[0.625rem]"], ["name", "Follow latest commit", 1, "mb-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "w-[calc(100%-2.20rem)]", "flex-1", "items-center", "space-x-2", 3, "click"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "leading-tight"], [1, "truncate"], [1, "truncate", "font-mono", "text-[0.625rem]", "text-base-content", "opacity-30"], [1, "rounded-sm", "bg-base-200", "p-1", "text-xs"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "root-path"], ["matInput", "", "name", "root-path", "formControlName", "root_path", 3, "placeholder"]], template: function RepositoryFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, RepositoryFormComponent_Conditional_0_Template, 13, 11, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    NgModel,
    MatSelectModule,
    MatSelect,
    MatSelectTrigger,
    MatOption,
    CommonModule,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
    AsyncPipe,
    SlicePipe,
    DatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryFormComponent, [{
    type: Component,
    args: [{ selector: "repository-form", template: `
        @if (form()) {
            <form repository class="flex flex-col" [formGroup]="form()">
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="repository-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="repository-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            <mat-error>{{
                                'REPOS.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (
                        !is_editing() &&
                        form().controls.repo_type &&
                        form().controls.folder_name
                    ) {
                        <div class="field">
                            <label for="type">
                                {{ 'REPOS.TYPE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="type"
                                    formControlName="repo_type"
                                >
                                    @for (type of repo_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.folder_name) {
                        <div class="field">
                            <label
                                for="folder-name"
                                [class.error]="
                                    form().controls.folder_name.invalid &&
                                    form().controls.folder_name.touched
                                "
                            >
                                {{ 'REPOS.FOLDER_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="folder-name"
                                    [placeholder]="
                                        'REPOS.FOLDER_NAME' | translate
                                    "
                                    formControlName="folder_name"
                                    required
                                />
                                <mat-error>{{
                                    'REPOS.FOLDER_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.uri && !hide_uri) {
                    <div class="field">
                        <label
                            for="uri"
                            [class.error]="
                                form().controls.uri.invalid &&
                                form().controls.uri.touched
                            "
                        >
                            {{ 'REPOS.URI' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="uri"
                                [placeholder]="'REPOS.URI' | translate"
                                formControlName="uri"
                                required
                            />
                            <mat-error>{{
                                'REPOS.URI_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.username) {
                        <div class="field">
                            <label for="repo-u"
                                >{{ 'REPOS.USERNAME' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="repo-u"
                                    autocomplete="off"
                                    [placeholder]="'REPOS.USERNAME' | translate"
                                    formControlName="username"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.password) {
                        <div class="field">
                            <label for="repo-p">
                                {{ 'REPOS.PASSWORD' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="repo-pwd"
                                    autocomplete="new-password"
                                    [type]="show_password ? 'text' : 'password'"
                                    [placeholder]="
                                        'COMMON.PASSWORD' | translate
                                    "
                                    formControlName="password"
                                />
                                <icon
                                    matSuffix
                                    (click)="show_password = !show_password"
                                >
                                    visibility
                                </icon>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.branch) {
                    <div class="field">
                        <label
                            for="repository-name"
                            [class.error]="
                                form().controls.branch.invalid &&
                                form().controls.branch.touched
                            "
                        >
                            {{ 'REPOS.BRANCH' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="type"
                                formControlName="branch"
                                [placeholder]="'Select Branch'"
                                [disabled]="!(branch_list | async)?.length"
                            >
                                @for (
                                    branch of branch_list | async;
                                    track branch
                                ) {
                                    <mat-option [value]="branch">
                                        {{ branch }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'REPOS.BRANCH_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (is_interface) {
                    <div class="field commit">
                        <label for="commit">
                            {{ 'REPOS.COMMIT' | translate }}</label
                        >
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="commit_hash"
                                placeholder="Select commit"
                                [disabled]="!(commit_list | async)?.length"
                            >
                                <mat-select-trigger>
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1 truncate">
                                            {{
                                                base_commit?.subject ||
                                                    'Latest commit'
                                            }}
                                        </div>
                                        <div
                                            class="mr-4! rounded-sm bg-base-200 px-1.5 font-mono text-[0.625rem]"
                                        >
                                            {{
                                                form().value.commit_hash ||
                                                    'HEAD' | slice: 0 : 8
                                            }}
                                        </div>
                                    </div>
                                </mat-select-trigger>
                                @for (
                                    commit of commit_list | async;
                                    track commit
                                ) {
                                    <mat-option [value]="commit.hash">
                                        <div
                                            class="flex w-[calc(100%-2.20rem)] flex-1 items-center space-x-2"
                                            [class.w-full!]="
                                                form().value.commit_hash ===
                                                commit.hash
                                            "
                                            (click)="base_commit = commit"
                                        >
                                            <div
                                                class="flex w-1/2 flex-1 flex-col truncate leading-tight"
                                            >
                                                <div class="truncate">
                                                    {{ commit.subject }}
                                                </div>
                                                <div
                                                    class="truncate font-mono text-[0.625rem] text-base-content opacity-30"
                                                >
                                                    {{
                                                        commit.date
                                                            | date: 'medium'
                                                    }}
                                                </div>
                                            </div>
                                            @if (commit.author) {
                                                <code
                                                    class="rounded-sm bg-base-200 p-1 text-xs"
                                                    >{{ commit.author }}</code
                                                >
                                            }
                                            <code
                                                class="rounded-sm bg-base-200 p-1 text-xs"
                                                >{{
                                                    commit.hash | slice: 0 : 8
                                                }}</code
                                            >
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <settings-toggle
                            name="Follow latest commit"
                            class="mb-4"
                            [ngModel]="follow_latest"
                            [ngModelOptions]="{ standalone: true }"
                            (ngModelChange)="setFollow($event)"
                        />
                    </div>
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.root_path) {
                    <div class="field">
                        <label for="root-path">
                            {{ 'REPOS.ROOT_PATH' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="root-path"
                                [placeholder]="'REPOS.ROOT_PATH' | translate"
                                formControlName="root_path"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `, imports: [
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      TranslatePipe,
      FormsModule,
      MatSelectModule,
      CommonModule,
      IconComponent,
      SettingsToggleComponent
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryFormComponent, { className: "RepositoryFormComponent", filePath: "src/app/ui/forms/repository-form.component.ts", lineNumber: 363 });
})();

// src/app/common/timezones.ts
var TIMEZONES = [
  {
    value: "Dateline Standard Time",
    abbr: "DST",
    offset: -12,
    isdst: false,
    text: "(UTC-12:00) International Date Line West",
    utc: ["Etc/GMT+12"]
  },
  {
    value: "UTC-11",
    abbr: "U",
    offset: -11,
    isdst: false,
    text: "(UTC-11:00) Coordinated Universal Time-11",
    utc: [
      "Etc/GMT+11",
      "Pacific/Midway",
      "Pacific/Niue",
      "Pacific/Pago_Pago"
    ]
  },
  {
    value: "Hawaiian Standard Time",
    abbr: "HST",
    offset: -10,
    isdst: false,
    text: "(UTC-10:00) Hawaii",
    utc: [
      "Etc/GMT+10",
      "Pacific/Honolulu",
      "Pacific/Johnston",
      "Pacific/Rarotonga",
      "Pacific/Tahiti"
    ]
  },
  {
    value: "Alaskan Standard Time",
    abbr: "AKDT",
    offset: -8,
    isdst: true,
    text: "(UTC-09:00) Alaska",
    utc: [
      "America/Anchorage",
      "America/Juneau",
      "America/Nome",
      "America/Sitka",
      "America/Yakutat"
    ]
  },
  {
    value: "Pacific Standard Time (Mexico)",
    abbr: "PDT",
    offset: -7,
    isdst: true,
    text: "(UTC-08:00) Baja California",
    utc: ["America/Santa_Isabel"]
  },
  {
    value: "Pacific Daylight Time",
    abbr: "PDT",
    offset: -7,
    isdst: true,
    text: "(UTC-07:00) Pacific Time (US & Canada)",
    utc: [
      "America/Dawson",
      "America/Los_Angeles",
      "America/Tijuana",
      "America/Vancouver",
      "America/Whitehorse"
    ]
  },
  {
    value: "Pacific Standard Time",
    abbr: "PST",
    offset: -8,
    isdst: false,
    text: "(UTC-08:00) Pacific Time (US & Canada)",
    utc: [
      "America/Dawson",
      "America/Los_Angeles",
      "America/Tijuana",
      "America/Vancouver",
      "America/Whitehorse",
      "PST8PDT"
    ]
  },
  {
    value: "US Mountain Standard Time",
    abbr: "UMST",
    offset: -7,
    isdst: false,
    text: "(UTC-07:00) Arizona",
    utc: [
      "America/Creston",
      "America/Dawson_Creek",
      "America/Hermosillo",
      "America/Phoenix",
      "Etc/GMT+7"
    ]
  },
  {
    value: "Mountain Standard Time (Mexico)",
    abbr: "MDT",
    offset: -6,
    isdst: true,
    text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
    utc: ["America/Chihuahua", "America/Mazatlan"]
  },
  {
    value: "Mountain Standard Time",
    abbr: "MDT",
    offset: -6,
    isdst: true,
    text: "(UTC-07:00) Mountain Time (US & Canada)",
    utc: [
      "America/Boise",
      "America/Cambridge_Bay",
      "America/Denver",
      "America/Edmonton",
      "America/Inuvik",
      "America/Ojinaga",
      "America/Yellowknife",
      "MST7MDT"
    ]
  },
  {
    value: "Central America Standard Time",
    abbr: "CAST",
    offset: -6,
    isdst: false,
    text: "(UTC-06:00) Central America",
    utc: [
      "America/Belize",
      "America/Costa_Rica",
      "America/El_Salvador",
      "America/Guatemala",
      "America/Managua",
      "America/Tegucigalpa",
      "Etc/GMT+6",
      "Pacific/Galapagos"
    ]
  },
  {
    value: "Central Standard Time",
    abbr: "CDT",
    offset: -5,
    isdst: true,
    text: "(UTC-06:00) Central Time (US & Canada)",
    utc: [
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Matamoros",
      "America/Menominee",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Resolute",
      "America/Winnipeg",
      "CST6CDT"
    ]
  },
  {
    value: "Central Standard Time (Mexico)",
    abbr: "CDT",
    offset: -5,
    isdst: true,
    text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    utc: [
      "America/Bahia_Banderas",
      "America/Cancun",
      "America/Merida",
      "America/Mexico_City",
      "America/Monterrey"
    ]
  },
  {
    value: "Canada Central Standard Time",
    abbr: "CCST",
    offset: -6,
    isdst: false,
    text: "(UTC-06:00) Saskatchewan",
    utc: ["America/Regina", "America/Swift_Current"]
  },
  {
    value: "SA Pacific Standard Time",
    abbr: "SPST",
    offset: -5,
    isdst: false,
    text: "(UTC-05:00) Bogota, Lima, Quito",
    utc: [
      "America/Bogota",
      "America/Cayman",
      "America/Coral_Harbour",
      "America/Eirunepe",
      "America/Guayaquil",
      "America/Jamaica",
      "America/Lima",
      "America/Panama",
      "America/Rio_Branco",
      "Etc/GMT+5"
    ]
  },
  {
    value: "Eastern Standard Time",
    abbr: "EDT",
    offset: -4,
    isdst: true,
    text: "(UTC-05:00) Eastern Time (US & Canada)",
    utc: [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto",
      "EST5EDT"
    ]
  },
  {
    value: "US Eastern Standard Time",
    abbr: "UEDT",
    offset: -4,
    isdst: true,
    text: "(UTC-05:00) Indiana (East)",
    utc: [
      "America/Indiana/Marengo",
      "America/Indiana/Vevay",
      "America/Indianapolis"
    ]
  },
  {
    value: "Venezuela Standard Time",
    abbr: "VST",
    offset: -4.5,
    isdst: false,
    text: "(UTC-04:30) Caracas",
    utc: ["America/Caracas"]
  },
  {
    value: "Paraguay Standard Time",
    abbr: "PYT",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Asuncion",
    utc: ["America/Asuncion"]
  },
  {
    value: "Atlantic Standard Time",
    abbr: "ADT",
    offset: -3,
    isdst: true,
    text: "(UTC-04:00) Atlantic Time (Canada)",
    utc: [
      "America/Glace_Bay",
      "America/Goose_Bay",
      "America/Halifax",
      "America/Moncton",
      "America/Thule",
      "Atlantic/Bermuda"
    ]
  },
  {
    value: "Central Brazilian Standard Time",
    abbr: "CBST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Cuiaba",
    utc: ["America/Campo_Grande", "America/Cuiaba"]
  },
  {
    value: "SA Western Standard Time",
    abbr: "SWST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
    utc: [
      "America/Anguilla",
      "America/Antigua",
      "America/Aruba",
      "America/Barbados",
      "America/Blanc-Sablon",
      "America/Boa_Vista",
      "America/Curacao",
      "America/Dominica",
      "America/Grand_Turk",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Guyana",
      "America/Kralendijk",
      "America/La_Paz",
      "America/Lower_Princes",
      "America/Manaus",
      "America/Marigot",
      "America/Martinique",
      "America/Montserrat",
      "America/Port_of_Spain",
      "America/Porto_Velho",
      "America/Puerto_Rico",
      "America/Santo_Domingo",
      "America/St_Barthelemy",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Tortola",
      "Etc/GMT+4"
    ]
  },
  {
    value: "Pacific SA Standard Time",
    abbr: "PSST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Santiago",
    utc: ["America/Santiago", "Antarctica/Palmer"]
  },
  {
    value: "Newfoundland Standard Time",
    abbr: "NDT",
    offset: -2.5,
    isdst: true,
    text: "(UTC-03:30) Newfoundland",
    utc: ["America/St_Johns"]
  },
  {
    value: "E. South America Standard Time",
    abbr: "ESAST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Brasilia",
    utc: ["America/Sao_Paulo"]
  },
  {
    value: "Argentina Standard Time",
    abbr: "AST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Buenos Aires",
    utc: [
      "America/Argentina/La_Rioja",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Buenos_Aires",
      "America/Catamarca",
      "America/Cordoba",
      "America/Jujuy",
      "America/Mendoza"
    ]
  },
  {
    value: "SA Eastern Standard Time",
    abbr: "SEST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Cayenne, Fortaleza",
    utc: [
      "America/Araguaina",
      "America/Belem",
      "America/Cayenne",
      "America/Fortaleza",
      "America/Maceio",
      "America/Paramaribo",
      "America/Recife",
      "America/Santarem",
      "Antarctica/Rothera",
      "Atlantic/Stanley",
      "Etc/GMT+3"
    ]
  },
  {
    value: "Greenland Standard Time",
    abbr: "GDT",
    offset: -3,
    isdst: true,
    text: "(UTC-03:00) Greenland",
    utc: ["America/Godthab"]
  },
  {
    value: "Montevideo Standard Time",
    abbr: "MST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Montevideo",
    utc: ["America/Montevideo"]
  },
  {
    value: "Bahia Standard Time",
    abbr: "BST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Salvador",
    utc: ["America/Bahia"]
  },
  {
    value: "UTC-02",
    abbr: "U",
    offset: -2,
    isdst: false,
    text: "(UTC-02:00) Coordinated Universal Time-02",
    utc: ["America/Noronha", "Atlantic/South_Georgia", "Etc/GMT+2"]
  },
  {
    value: "Mid-Atlantic Standard Time",
    abbr: "MDT",
    offset: -1,
    isdst: true,
    text: "(UTC-02:00) Mid-Atlantic - Old",
    utc: []
  },
  {
    value: "Azores Standard Time",
    abbr: "ADT",
    offset: 0,
    isdst: true,
    text: "(UTC-01:00) Azores",
    utc: ["America/Scoresbysund", "Atlantic/Azores"]
  },
  {
    value: "Cape Verde Standard Time",
    abbr: "CVST",
    offset: -1,
    isdst: false,
    text: "(UTC-01:00) Cape Verde Is.",
    utc: ["Atlantic/Cape_Verde", "Etc/GMT+1"]
  },
  {
    value: "Morocco Standard Time",
    abbr: "MDT",
    offset: 1,
    isdst: true,
    text: "(UTC) Casablanca",
    utc: ["Africa/Casablanca", "Africa/El_Aaiun"]
  },
  {
    value: "UTC",
    abbr: "UTC",
    offset: 0,
    isdst: false,
    text: "(UTC) Coordinated Universal Time",
    utc: ["America/Danmarkshavn", "Etc/GMT"]
  },
  {
    value: "GMT Standard Time",
    abbr: "GMT",
    offset: 0,
    isdst: false,
    text: "(UTC) Edinburgh, London",
    utc: [
      "Europe/Isle_of_Man",
      "Europe/Guernsey",
      "Europe/Jersey",
      "Europe/London"
    ]
  },
  {
    value: "British Summer Time",
    abbr: "BST",
    offset: 1,
    isdst: true,
    text: "(UTC+01:00) Edinburgh, London",
    utc: [
      "Europe/Isle_of_Man",
      "Europe/Guernsey",
      "Europe/Jersey",
      "Europe/London"
    ]
  },
  {
    value: "GMT Standard Time",
    abbr: "GDT",
    offset: 1,
    isdst: true,
    text: "(UTC) Dublin, Lisbon",
    utc: [
      "Atlantic/Canary",
      "Atlantic/Faeroe",
      "Atlantic/Madeira",
      "Europe/Dublin",
      "Europe/Lisbon"
    ]
  },
  {
    value: "Greenwich Standard Time",
    abbr: "GST",
    offset: 0,
    isdst: false,
    text: "(UTC) Monrovia, Reykjavik",
    utc: [
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Bamako",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Freetown",
      "Africa/Lome",
      "Africa/Monrovia",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Sao_Tome",
      "Atlantic/Reykjavik",
      "Atlantic/St_Helena"
    ]
  },
  {
    value: "W. Europe Standard Time",
    abbr: "WEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    utc: [
      "Arctic/Longyearbyen",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Berlin",
      "Europe/Busingen",
      "Europe/Gibraltar",
      "Europe/Luxembourg",
      "Europe/Malta",
      "Europe/Monaco",
      "Europe/Oslo",
      "Europe/Rome",
      "Europe/San_Marino",
      "Europe/Stockholm",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Zurich"
    ]
  },
  {
    value: "Central Europe Standard Time",
    abbr: "CEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    utc: [
      "Europe/Belgrade",
      "Europe/Bratislava",
      "Europe/Budapest",
      "Europe/Ljubljana",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Tirane"
    ]
  },
  {
    value: "Romance Standard Time",
    abbr: "RDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    utc: [
      "Africa/Ceuta",
      "Europe/Brussels",
      "Europe/Copenhagen",
      "Europe/Madrid",
      "Europe/Paris"
    ]
  },
  {
    value: "Central European Standard Time",
    abbr: "CEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    utc: [
      "Europe/Sarajevo",
      "Europe/Skopje",
      "Europe/Warsaw",
      "Europe/Zagreb"
    ]
  },
  {
    value: "W. Central Africa Standard Time",
    abbr: "WCAST",
    offset: 1,
    isdst: false,
    text: "(UTC+01:00) West Central Africa",
    utc: [
      "Africa/Algiers",
      "Africa/Bangui",
      "Africa/Brazzaville",
      "Africa/Douala",
      "Africa/Kinshasa",
      "Africa/Lagos",
      "Africa/Libreville",
      "Africa/Luanda",
      "Africa/Malabo",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Porto-Novo",
      "Africa/Tunis",
      "Etc/GMT-1"
    ]
  },
  {
    value: "Namibia Standard Time",
    abbr: "NST",
    offset: 1,
    isdst: false,
    text: "(UTC+01:00) Windhoek",
    utc: ["Africa/Windhoek"]
  },
  {
    value: "GTB Standard Time",
    abbr: "GDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Athens, Bucharest",
    utc: [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau"
    ]
  },
  {
    value: "Middle East Standard Time",
    abbr: "MEDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Beirut",
    utc: ["Asia/Beirut"]
  },
  {
    value: "Egypt Standard Time",
    abbr: "EST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Cairo",
    utc: ["Africa/Cairo"]
  },
  {
    value: "Syria Standard Time",
    abbr: "SDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Damascus",
    utc: ["Asia/Damascus"]
  },
  {
    value: "E. Europe Standard Time",
    abbr: "EEDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) E. Europe",
    utc: [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau",
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Nicosia",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ]
  },
  {
    value: "South Africa Standard Time",
    abbr: "SAST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Harare, Pretoria",
    utc: [
      "Africa/Blantyre",
      "Africa/Bujumbura",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Johannesburg",
      "Africa/Kigali",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Maputo",
      "Africa/Maseru",
      "Africa/Mbabane",
      "Etc/GMT-2"
    ]
  },
  {
    value: "FLE Standard Time",
    abbr: "FDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    utc: [
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ]
  },
  {
    value: "Turkey Standard Time",
    abbr: "TDT",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Istanbul",
    utc: ["Europe/Istanbul"]
  },
  {
    value: "Israel Standard Time",
    abbr: "JDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Jerusalem",
    utc: ["Asia/Jerusalem"]
  },
  {
    value: "Libya Standard Time",
    abbr: "LST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Tripoli",
    utc: ["Africa/Tripoli"]
  },
  {
    value: "Jordan Standard Time",
    abbr: "JST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Amman",
    utc: ["Asia/Amman"]
  },
  {
    value: "Arabic Standard Time",
    abbr: "AST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Baghdad",
    utc: ["Asia/Baghdad"]
  },
  {
    value: "Kaliningrad Standard Time",
    abbr: "KST",
    offset: 3,
    isdst: false,
    text: "(UTC+02:00) Kaliningrad",
    utc: ["Europe/Kaliningrad"]
  },
  {
    value: "Arab Standard Time",
    abbr: "AST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Kuwait, Riyadh",
    utc: [
      "Asia/Aden",
      "Asia/Bahrain",
      "Asia/Kuwait",
      "Asia/Qatar",
      "Asia/Riyadh"
    ]
  },
  {
    value: "E. Africa Standard Time",
    abbr: "EAST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Nairobi",
    utc: [
      "Africa/Addis_Ababa",
      "Africa/Asmera",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Juba",
      "Africa/Kampala",
      "Africa/Khartoum",
      "Africa/Mogadishu",
      "Africa/Nairobi",
      "Antarctica/Syowa",
      "Etc/GMT-3",
      "Indian/Antananarivo",
      "Indian/Comoro",
      "Indian/Mayotte"
    ]
  },
  {
    value: "Moscow Standard Time",
    abbr: "MSK",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk",
    utc: [
      "Europe/Kirov",
      "Europe/Moscow",
      "Europe/Simferopol",
      "Europe/Volgograd",
      "Europe/Minsk"
    ]
  },
  {
    value: "Samara Time",
    abbr: "SAMT",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Samara, Ulyanovsk, Saratov",
    utc: ["Europe/Astrakhan", "Europe/Samara", "Europe/Ulyanovsk"]
  },
  {
    value: "Iran Standard Time",
    abbr: "IDT",
    offset: 4.5,
    isdst: true,
    text: "(UTC+03:30) Tehran",
    utc: ["Asia/Tehran"]
  },
  {
    value: "Arabian Standard Time",
    abbr: "AST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Abu Dhabi, Muscat",
    utc: ["Asia/Dubai", "Asia/Muscat", "Etc/GMT-4"]
  },
  {
    value: "Azerbaijan Standard Time",
    abbr: "ADT",
    offset: 5,
    isdst: true,
    text: "(UTC+04:00) Baku",
    utc: ["Asia/Baku"]
  },
  {
    value: "Mauritius Standard Time",
    abbr: "MST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Port Louis",
    utc: ["Indian/Mahe", "Indian/Mauritius", "Indian/Reunion"]
  },
  {
    value: "Georgian Standard Time",
    abbr: "GET",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Tbilisi",
    utc: ["Asia/Tbilisi"]
  },
  {
    value: "Caucasus Standard Time",
    abbr: "CST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Yerevan",
    utc: ["Asia/Yerevan"]
  },
  {
    value: "Afghanistan Standard Time",
    abbr: "AST",
    offset: 4.5,
    isdst: false,
    text: "(UTC+04:30) Kabul",
    utc: ["Asia/Kabul"]
  },
  {
    value: "West Asia Standard Time",
    abbr: "WAST",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Ashgabat, Tashkent",
    utc: [
      "Antarctica/Mawson",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Dushanbe",
      "Asia/Oral",
      "Asia/Samarkand",
      "Asia/Tashkent",
      "Etc/GMT-5",
      "Indian/Kerguelen",
      "Indian/Maldives"
    ]
  },
  {
    value: "Yekaterinburg Time",
    abbr: "YEKT",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Yekaterinburg",
    utc: ["Asia/Yekaterinburg"]
  },
  {
    value: "Pakistan Standard Time",
    abbr: "PKT",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Islamabad, Karachi",
    utc: ["Asia/Karachi"]
  },
  {
    value: "India Standard Time",
    abbr: "IST",
    offset: 5.5,
    isdst: false,
    text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    utc: ["Asia/Kolkata"]
  },
  {
    value: "Sri Lanka Standard Time",
    abbr: "SLST",
    offset: 5.5,
    isdst: false,
    text: "(UTC+05:30) Sri Jayawardenepura",
    utc: ["Asia/Colombo"]
  },
  {
    value: "Nepal Standard Time",
    abbr: "NST",
    offset: 5.75,
    isdst: false,
    text: "(UTC+05:45) Kathmandu",
    utc: ["Asia/Kathmandu"]
  },
  {
    value: "Central Asia Standard Time",
    abbr: "CAST",
    offset: 6,
    isdst: false,
    text: "(UTC+06:00) Nur-Sultan (Astana)",
    utc: [
      "Antarctica/Vostok",
      "Asia/Almaty",
      "Asia/Bishkek",
      "Asia/Qyzylorda",
      "Asia/Urumqi",
      "Etc/GMT-6",
      "Indian/Chagos"
    ]
  },
  {
    value: "Bangladesh Standard Time",
    abbr: "BST",
    offset: 6,
    isdst: false,
    text: "(UTC+06:00) Dhaka",
    utc: ["Asia/Dhaka", "Asia/Thimphu"]
  },
  {
    value: "Myanmar Standard Time",
    abbr: "MST",
    offset: 6.5,
    isdst: false,
    text: "(UTC+06:30) Yangon (Rangoon)",
    utc: ["Asia/Rangoon", "Indian/Cocos"]
  },
  {
    value: "SE Asia Standard Time",
    abbr: "SAST",
    offset: 7,
    isdst: false,
    text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    utc: [
      "Antarctica/Davis",
      "Asia/Bangkok",
      "Asia/Hovd",
      "Asia/Jakarta",
      "Asia/Phnom_Penh",
      "Asia/Pontianak",
      "Asia/Saigon",
      "Asia/Vientiane",
      "Etc/GMT-7",
      "Indian/Christmas"
    ]
  },
  {
    value: "N. Central Asia Standard Time",
    abbr: "NCAST",
    offset: 7,
    isdst: false,
    text: "(UTC+07:00) Novosibirsk",
    utc: ["Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk"]
  },
  {
    value: "China Standard Time",
    abbr: "CST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    utc: ["Asia/Hong_Kong", "Asia/Macau", "Asia/Shanghai"]
  },
  {
    value: "North Asia Standard Time",
    abbr: "NAST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Krasnoyarsk",
    utc: ["Asia/Krasnoyarsk"]
  },
  {
    value: "Singapore Standard Time",
    abbr: "MPST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Kuala Lumpur, Singapore",
    utc: [
      "Asia/Brunei",
      "Asia/Kuala_Lumpur",
      "Asia/Kuching",
      "Asia/Makassar",
      "Asia/Manila",
      "Asia/Singapore",
      "Etc/GMT-8"
    ]
  },
  {
    value: "W. Australia Standard Time",
    abbr: "WAST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Perth",
    utc: ["Antarctica/Casey", "Australia/Perth"]
  },
  {
    value: "Taipei Standard Time",
    abbr: "TST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Taipei",
    utc: ["Asia/Taipei"]
  },
  {
    value: "Ulaanbaatar Standard Time",
    abbr: "UST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Ulaanbaatar",
    utc: ["Asia/Choibalsan", "Asia/Ulaanbaatar"]
  },
  {
    value: "North Asia East Standard Time",
    abbr: "NAEST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Irkutsk",
    utc: ["Asia/Irkutsk"]
  },
  {
    value: "Japan Standard Time",
    abbr: "JST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
    utc: [
      "Asia/Dili",
      "Asia/Jayapura",
      "Asia/Tokyo",
      "Etc/GMT-9",
      "Pacific/Palau"
    ]
  },
  {
    value: "Korea Standard Time",
    abbr: "KST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Seoul",
    utc: ["Asia/Pyongyang", "Asia/Seoul"]
  },
  {
    value: "Cen. Australia Standard Time",
    abbr: "CAST",
    offset: 9.5,
    isdst: false,
    text: "(UTC+09:30) Adelaide",
    utc: ["Australia/Adelaide", "Australia/Broken_Hill"]
  },
  {
    value: "AUS Central Standard Time",
    abbr: "ACST",
    offset: 9.5,
    isdst: false,
    text: "(UTC+09:30) Darwin",
    utc: ["Australia/Darwin"]
  },
  {
    value: "E. Australia Standard Time",
    abbr: "EAST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Brisbane",
    utc: ["Australia/Brisbane", "Australia/Lindeman"]
  },
  {
    value: "AUS Eastern Standard Time",
    abbr: "AEST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Canberra, Melbourne, Sydney",
    utc: ["Australia/Melbourne", "Australia/Sydney"]
  },
  {
    value: "West Pacific Standard Time",
    abbr: "WPST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Guam, Port Moresby",
    utc: [
      "Antarctica/DumontDUrville",
      "Etc/GMT-10",
      "Pacific/Guam",
      "Pacific/Port_Moresby",
      "Pacific/Saipan",
      "Pacific/Truk"
    ]
  },
  {
    value: "Tasmania Standard Time",
    abbr: "TST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Hobart",
    utc: ["Australia/Currie", "Australia/Hobart"]
  },
  {
    value: "Yakutsk Standard Time",
    abbr: "YST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Yakutsk",
    utc: ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"]
  },
  {
    value: "Central Pacific Standard Time",
    abbr: "CPST",
    offset: 11,
    isdst: false,
    text: "(UTC+11:00) Solomon Is., New Caledonia",
    utc: [
      "Antarctica/Macquarie",
      "Etc/GMT-11",
      "Pacific/Efate",
      "Pacific/Guadalcanal",
      "Pacific/Kosrae",
      "Pacific/Noumea",
      "Pacific/Ponape"
    ]
  },
  {
    value: "Vladivostok Standard Time",
    abbr: "VST",
    offset: 11,
    isdst: false,
    text: "(UTC+11:00) Vladivostok",
    utc: ["Asia/Sakhalin", "Asia/Ust-Nera", "Asia/Vladivostok"]
  },
  {
    value: "New Zealand Standard Time",
    abbr: "NZST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Auckland, Wellington",
    utc: ["Antarctica/McMurdo", "Pacific/Auckland"]
  },
  {
    value: "UTC+12",
    abbr: "U",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Coordinated Universal Time+12",
    utc: [
      "Etc/GMT-12",
      "Pacific/Funafuti",
      "Pacific/Kwajalein",
      "Pacific/Majuro",
      "Pacific/Nauru",
      "Pacific/Tarawa",
      "Pacific/Wake",
      "Pacific/Wallis"
    ]
  },
  {
    value: "Fiji Standard Time",
    abbr: "FST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Fiji",
    utc: ["Pacific/Fiji"]
  },
  {
    value: "Magadan Standard Time",
    abbr: "MST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Magadan",
    utc: [
      "Asia/Anadyr",
      "Asia/Kamchatka",
      "Asia/Magadan",
      "Asia/Srednekolymsk"
    ]
  },
  {
    value: "Kamchatka Standard Time",
    abbr: "KDT",
    offset: 13,
    isdst: true,
    text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
    utc: ["Asia/Kamchatka"]
  },
  {
    value: "Tonga Standard Time",
    abbr: "TST",
    offset: 13,
    isdst: false,
    text: "(UTC+13:00) Nuku'alofa",
    utc: [
      "Etc/GMT-13",
      "Pacific/Enderbury",
      "Pacific/Fakaofo",
      "Pacific/Tongatapu"
    ]
  },
  {
    value: "Samoa Standard Time",
    abbr: "SST",
    offset: 13,
    isdst: false,
    text: "(UTC+13:00) Samoa",
    utc: ["Pacific/Apia"]
  }
];
var TIMEZONES_IANA = unique(flatten(TIMEZONES.map((_) => _.utc))).sort();

// src/app/ui/counter.component.ts
function CounterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.render_fn() ? ctx_r0.render_fn()(ctx_r0.value) : ctx_r0.value) || "0", " ");
  }
}
var CounterComponent = class _CounterComponent {
  /** Size of a single step */
  step = input(1, ...ngDevMode ? [{ debugName: "step" }] : []);
  /** Maximum amount for the counter */
  max = input(999, ...ngDevMode ? [{ debugName: "max" }] : []);
  /** Minimum amount for the counter */
  min = input(0, ...ngDevMode ? [{ debugName: "min" }] : []);
  /** Custom function for rendering the counter value */
  render_fn = input(void 0, ...ngDevMode ? [{ debugName: "render_fn" }] : []);
  /** Current value of the counter */
  value;
  /** Whether shift key is being held by the user */
  shift_key;
  /** Whether control key is being held by the user */
  ctrl_key;
  focused = false;
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  /**
   * Add the `step` to the current value
   */
  add() {
    if (!this.value) {
      this.value = this.min() || 0;
    }
    const step = this.ctrl_key ? 100 * this.step() : this.shift_key ? 10 * this.step() : this.step() || 1;
    this.value += step;
    if (this.value > this.max()) {
      this.value = this.max() || 10;
    }
    this.setValue(this.value);
  }
  /** Remove the `step` from the current value */
  remove() {
    if (!this.value) {
      this.value = this.min() || 0;
    }
    const step = this.ctrl_key ? 100 * this.step() : this.shift_key ? 10 * this.step() : this.step() || 1;
    this.value -= step;
    if (this.value < this.min()) {
      this.value = this.min() || 0;
    }
    this.setValue(this.value);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (new_value < this.min())
      new_value = this.min();
    if (new_value > this.max())
      new_value = this.max();
    if (new_value / this.step() % 1 !== 0) {
      new_value = Math.round(new_value * (1 / this.step())) / (1 / this.step());
    }
    this.value = new_value;
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value = value;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  static \u0275fac = function CounterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CounterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CounterComponent, selectors: [["a-counter"]], inputs: { step: [1, "step"], max: [1, "max"], min: [1, "min"], render_fn: [1, "render_fn"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      /* istanbul ignore next */
      useExisting: forwardRef(() => _CounterComponent),
      multi: true
    }
  ])], decls: 10, vars: 4, consts: [["counter", "", 1, "flex", "items-center", "text-base", 3, "keydown.shift", "keydown.control", "keydown.meta", "keyup.shift", "keyup.control", "keyup.meta"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "z-10", "h-12", "w-12", "rounded-l", "rounded-r-none", "border", "border-secondary", "text-secondary", 3, "click", "disabled"], ["value", "", 1, "relative", "z-0", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "rounded-none", "border-y", "border-base-300", "p-1", "focus-within:z-20"], ["type", "text", "limitInput", "", 1, "absolute", "inset-0", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "focus", "blur", "ngModel"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "z-10", "h-12", "w-12", "rounded-l-none", "rounded-r", "border", "border-secondary", "text-secondary", 3, "click", "disabled"]], template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("keydown.shift", function CounterComponent_Template_div_keydown_shift_0_listener() {
        return ctx.shift_key = true;
      }, \u0275\u0275resolveWindow)("keydown.control", function CounterComponent_Template_div_keydown_control_0_listener() {
        return ctx.ctrl_key = true;
      }, \u0275\u0275resolveWindow)("keydown.meta", function CounterComponent_Template_div_keydown_meta_0_listener() {
        return ctx.ctrl_key = true;
      }, \u0275\u0275resolveWindow)("keyup.shift", function CounterComponent_Template_div_keyup_shift_0_listener() {
        return ctx.shift_key = false;
      }, \u0275\u0275resolveWindow)("keyup.control", function CounterComponent_Template_div_keyup_control_0_listener() {
        return ctx.ctrl_key = false;
      }, \u0275\u0275resolveWindow)("keyup.meta", function CounterComponent_Template_div_keyup_meta_0_listener() {
        return ctx.ctrl_key = false;
      }, \u0275\u0275resolveWindow);
      \u0275\u0275elementStart(1, "button", 1);
      \u0275\u0275listener("click", function CounterComponent_Template_button_click_1_listener() {
        return ctx.remove();
      });
      \u0275\u0275elementStart(2, "icon");
      \u0275\u0275text(3, "remove");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275conditionalCreate(5, CounterComponent_Conditional_5_Template, 2, 1, "span");
      \u0275\u0275elementStart(6, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function CounterComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275listener("focus", function CounterComponent_Template_input_focus_6_listener() {
        return ctx.focused = true;
      })("blur", function CounterComponent_Template_input_blur_6_listener() {
        ctx.setValue(+ctx.value);
        return ctx.focused = false;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function CounterComponent_Template_button_click_7_listener() {
        return ctx.add();
      });
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.value || ctx.value === ctx.min());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.focused ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.value === ctx.max());
    }
  }, dependencies: [IconComponent, MatRippleModule, MatRipple, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterComponent, [{
    type: Component,
    args: [{ selector: "a-counter", template: `
        <div
            counter
            class="flex items-center text-base"
            (window:keydown.shift)="shift_key = true"
            (window:keydown.control)="ctrl_key = true"
            (window:keydown.meta)="ctrl_key = true"
            (window:keyup.shift)="shift_key = false"
            (window:keyup.control)="ctrl_key = false"
            (window:keyup.meta)="ctrl_key = false"
        >
            <button
                decrease
                icon
                matRipple
                type="button"
                class="z-10 h-12 w-12 rounded-l rounded-r-none border border-secondary text-secondary"
                [disabled]="!value || value === min()"
                (click)="remove()"
            >
                <icon>remove</icon>
            </button>
            <div
                value
                class="relative z-0 flex h-12 min-w-16 flex-1 items-center justify-center rounded-none border-y border-base-300 p-1 focus-within:z-20"
            >
                @if (!focused) {
                    <span>
                        {{ (render_fn() ? render_fn()(value) : value) || '0' }}
                    </span>
                }
                <input
                    type="text"
                    class="absolute inset-0 p-2 opacity-0 focus:opacity-100"
                    [(ngModel)]="value"
                    (focus)="focused = true"
                    (blur)="setValue(+value); focused = false"
                    limitInput
                />
            </div>
            <button
                increase
                icon
                matRipple
                type="button"
                class="z-10 h-12 w-12 rounded-l-none rounded-r border border-secondary text-secondary"
                [disabled]="value === max()"
                (click)="add()"
            >
                <icon>add</icon>
            </button>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CounterComponent),
        multi: true
      }
    ], imports: [IconComponent, MatRippleModule, FormsModule] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], render_fn: [{ type: Input, args: [{ isSignal: true, alias: "render_fn", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CounterComponent, { className: "CounterComponent", filePath: "src/app/ui/counter.component.ts", lineNumber: 76 });
})();

// src/app/ui/custom-fields/image-list-field.component.ts
var _c06 = ["image_list"];
var _forTrack02 = ($index, $item) => $item.id;
function ImageListFieldComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275element(3, "div", 15);
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_10_Template_button_click_5_listener() {
      const url_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyLink(url_r3));
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_10_Template_button_click_8_listener() {
      const url_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewImage(url_r3));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 17);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_10_Template_button_click_11_listener() {
      const url_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeImage(url_r3));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const url_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translate(-" + ctx_r3.offset + "00%)");
    \u0275\u0275advance();
    \u0275\u0275property("source", url_r3);
  }
}
function ImageListFieldComponent_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 19);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r6.progress)("diameter", 64);
  }
}
function ImageListFieldComponent_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 20);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
}
function ImageListFieldComponent_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 22);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function ImageListFieldComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_12_Template_div_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.retryUpload(item_r6));
    });
    \u0275\u0275conditionalCreate(1, ImageListFieldComponent_For_12_Conditional_1_Template, 1, 2, "mat-progress-spinner", 19);
    \u0275\u0275conditionalCreate(2, ImageListFieldComponent_For_12_Conditional_2_Template, 2, 0, "icon", 20);
    \u0275\u0275conditionalCreate(3, ImageListFieldComponent_For_12_Conditional_3_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translate(-" + ctx_r3.offset + "00%)");
    \u0275\u0275property("matTooltip", item_r6.error);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r6.error ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.error ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.error ? 3 : -1);
  }
}
function ImageListFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ImageListFieldComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.decrement());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function ImageListFieldComponent_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.increment());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.offset() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.offset() >= ctx_r3.length() - ctx_r3.view_space());
  }
}
function ImageListFieldComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 25);
    \u0275\u0275listener("removed", function ImageListFieldComponent_For_19_Template_mat_chip_row_removed_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeImage(item_r9));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 27)(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r9);
  }
}
var ImageListFieldComponent = class _ImageListFieldComponent extends AsyncHandler {
  _clipboard = inject(Clipboard);
  _uploads = inject(UploadsService);
  /** List of images */
  list = signal([], ...ngDevMode ? [{ debugName: "list" }] : []);
  /** List of images */
  upload_ids = new BehaviorSubject([]);
  _upload_list = new BehaviorSubject([]);
  upload_list = this._upload_list.asObservable();
  offset = signal(0, ...ngDevMode ? [{ debugName: "offset" }] : []);
  view_space = signal(0, ...ngDevMode ? [{ debugName: "view_space" }] : []);
  separators = [COMMA, ENTER];
  length = computed(() => this.list().length + this._upload_list.getValue().length + 1, ...ngDevMode ? [{ debugName: "length" }] : []);
  uploads = combineLatest([
    this.upload_list,
    this.upload_ids
  ]).pipe(map(([list, ids]) => list.filter((i) => ids.includes(i.id))));
  _list_el = viewChild("image_list", ...ngDevMode ? [{ debugName: "_list_el" }] : []);
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  ngAfterViewInit() {
    const box = this._list_el().nativeElement.getBoundingClientRect();
    this.view_space.set(Math.floor(box.width / 152));
    this.subscription("upload_changes", this.upload_list.subscribe((list) => {
      const id_list = this.upload_ids.getValue();
      for (const id of id_list) {
        const item = list.find((_) => _.id === id);
        if (item && item.progress >= 100) {
          this.addImageUrl(item.link);
          this.upload_ids.next(this.upload_ids.getValue().filter((_) => _ !== id));
        }
      }
    }));
  }
  increment() {
    this.offset.update((o) => o + 1);
  }
  decrement() {
    this.offset.update((o) => o - 1);
  }
  copyLink(url) {
    this._clipboard.copy(url);
    notifyInfo("Copied image URL to clipboard");
  }
  viewImage(url) {
  }
  removeImage(url) {
    this.setValue(this.list().filter((_) => _ !== url));
  }
  addImage(event) {
    if (!event.value)
      return;
    this.setValue(unique([...this.list(), event.value]));
    event.chipInput.inputElement.value = "";
  }
  addImageUrl(url) {
    this.setValue(unique([...this.list(), url]));
  }
  retryUpload(item) {
    if (item.error) {
      item.error = null;
      item.upload.resume();
    }
  }
  async uploadImages(event) {
    const element = event.target;
    if (element?.files) {
      const files = element.files;
      if (files.length) {
        this.interval("update_status", () => this._updateUploadHistory());
        for (let i = 0; i < files.length; i++) {
          const id = await this._uploads.uploadFileWithPermissions(files[i]);
          this.upload_ids.next([...this.upload_ids.getValue(), id]);
        }
      }
    }
  }
  setValue(value) {
    this.list.set(value);
    if (this._onChange)
      this._onChange(value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.list.set(value);
  }
  registerOnChange = (fn) => this._onChange = fn;
  registerOnTouched = (fn) => this._onTouch = fn;
  async _updateUploadHistory() {
    const list = this.upload_ids.getValue();
    if (list.length === 0)
      return;
    const global_list = await nextValueFrom(this._uploads.upload_list);
    const new_list = global_list.filter((_) => list.find((i) => i === _.id));
    const done_list = new_list.filter((file) => file.progress >= 100);
    this._upload_list.next(new_list);
    done_list.forEach((i) => delete i.upload);
    if (done_list.length >= list.length)
      this.clearInterval("update_status");
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ImageListFieldComponent_BaseFactory;
    return function ImageListFieldComponent_Factory(__ngFactoryType__) {
      return (\u0275ImageListFieldComponent_BaseFactory || (\u0275ImageListFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ImageListFieldComponent)))(__ngFactoryType__ || _ImageListFieldComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageListFieldComponent, selectors: [["image-list-field"]], viewQuery: function ImageListFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._list_el, _c06, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ImageListFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature], decls: 22, vars: 14, consts: [["image_list", ""], ["chipList", ""], ["images", "", 1, "relative", "mb-2", "flex", "w-full", "items-center", "space-x-2", "overflow-hidden", "py-2", 3, "resize"], ["image", "", 1, "hover:bg-base-content/10", ":bg-base-100/10", "relative", "flex", "h-32", "w-36", "shrink-0", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-sm", "border-2", "border-dashed", "border-base-200"], [1, "text-4xl", "opacity-60"], [1, "w-4/5", "text-center", "opacity-60"], ["type", "file", 1, "absolute", "inset-0", "h-32", "w-32", "cursor-pointer", "opacity-0", 3, "change"], ["image", "", 1, "relative", "h-32", "w-36", "shrink-0", "overflow-hidden", "rounded-sm", "bg-base-200", "bg-cover", "bg-center", 3, "transform"], ["image", "", 1, "border-base-content/10", "/5", "flex", "h-32", "w-36", "shrink-0", "items-center", "justify-center", "rounded-sm", "border", "bg-base-200", "bg-cover", "bg-center", 3, "transform", "matTooltip"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Image List"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["image", "", 1, "relative", "h-32", "w-36", "shrink-0", "overflow-hidden", "rounded-sm", "bg-base-200", "bg-cover", "bg-center"], ["auth", "", 1, "pointer-events-none", "absolute", "left-1/2", "top-1/2", "z-10", "-translate-x-1/2", "-translate-y-1/2", "object-contain", 3, "source"], ["overlay", "", 1, "absolute", "inset-0", "z-20", "text-base-100"], ["bg", "", 1, "absolute", "inset-0", "bg-black", "opacity-0"], ["actions", "", 1, "absolute", "left-0", "right-0", "top-0", "flex", "items-center", "justify-center", "space-x-2", "opacity-0"], ["icon", "", 3, "click"], ["image", "", 1, "border-base-content/10", "/5", "flex", "h-32", "w-36", "shrink-0", "items-center", "justify-center", "rounded-sm", "border", "bg-base-200", "bg-cover", "bg-center", 3, "click", "matTooltip"], ["mode", "determinate", 3, "value", "diameter"], [1, "text-6xl", "text-error"], ["overlay", "", 1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-base-100", "hover:bg-base-content", "hover:bg-opacity-50"], [1, "text-3xl", "opacity-0"], ["icon", "", "matRipple", "", 1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "transform", "bg-base-100", 3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "absolute", "right-0", "top-1/2", "-translate-y-1/2", "transform", "bg-base-100", 3, "click", "disabled"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function ImageListFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2, 0);
      \u0275\u0275listener("resize", function ImageListFieldComponent_Template_div_resize_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.ngAfterViewInit());
      }, \u0275\u0275resolveWindow);
      \u0275\u0275elementStart(2, "div", 3)(3, "icon", 4);
      \u0275\u0275text(4, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 6);
      \u0275\u0275listener("change", function ImageListFieldComponent_Template_input_change_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.uploadImages($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(9, ImageListFieldComponent_For_10_Template, 14, 3, "div", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275repeaterCreate(11, ImageListFieldComponent_For_12_Template, 4, 6, "div", 8, _forTrack02);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275conditionalCreate(14, ImageListFieldComponent_Conditional_14_Template, 6, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-form-field", 9)(16, "mat-chip-grid", 10, 1);
      \u0275\u0275repeaterCreate(18, ImageListFieldComponent_For_19_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 11);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275listener("matChipInputTokenEnd", function ImageListFieldComponent_Template_input_matChipInputTokenEnd_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addImage($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const chipList_r10 = \u0275\u0275reference(17);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("transform", "translate(-" + ctx.offset + "00%)");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "COMMON.IMAGE_UPLOADS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.list());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(13, 10, ctx.uploads));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.length() > ctx.view_space() ? 14 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.list());
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 12, "COMMON.IMAGE_ADD_URL"))("matChipInputFor", chipList_r10)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true);
    }
  }, dependencies: [
    IconComponent,
    MatFormFieldModule,
    MatFormField,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatRippleModule,
    MatRipple,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    CommonModule,
    AuthenticatedImageDirective,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n[overlay][_ngcontent-%COMP%] {\n  transition: background 200ms;\n}\n[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], \n[image][_ngcontent-%COMP%]:hover    > icon[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%] {\n  opacity: 0.4 !important;\n}\n[actions][_ngcontent-%COMP%], \n[image][_ngcontent-%COMP%]    > icon[_ngcontent-%COMP%] {\n  transition: opacity 200ms;\n}\n[image][_ngcontent-%COMP%] {\n  transition: transform 200ms;\n}\n/*# sourceMappingURL=image-list-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageListFieldComponent, [{
    type: Component,
    args: [{ selector: "image-list-field", template: `
        <div
            images
            #image_list
            class="relative mb-2 flex w-full items-center space-x-2 overflow-hidden py-2"
            (window:resize)="ngAfterViewInit()"
        >
            <div
                image
                class="hover:bg-base-content/10 :bg-base-100/10 relative flex h-32 w-36 shrink-0 cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed border-base-200"
                [style.transform]="'translate(-' + offset + '00%)'"
            >
                <icon class="text-4xl opacity-60">add</icon>
                <p class="w-4/5 text-center opacity-60">
                    {{ 'COMMON.IMAGE_UPLOADS' | translate }}
                </p>
                <input
                    type="file"
                    class="absolute inset-0 h-32 w-32 cursor-pointer opacity-0"
                    (change)="uploadImages($event)"
                />
            </div>
            @for (url of list(); track url; let i = $index) {
                <div
                    image
                    class="relative h-32 w-36 shrink-0 overflow-hidden rounded-sm bg-base-200 bg-cover bg-center"
                    [style.transform]="'translate(-' + offset + '00%)'"
                >
                    <img
                        auth
                        [source]="url"
                        class="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 object-contain"
                    />
                    <div overlay class="absolute inset-0 z-20 text-base-100">
                        <div
                            bg
                            class="absolute inset-0 bg-black opacity-0"
                        ></div>
                        <div
                            actions
                            class="absolute left-0 right-0 top-0 flex items-center justify-center space-x-2 opacity-0"
                        >
                            <button icon (click)="copyLink(url)">
                                <icon>link</icon>
                            </button>
                            <button icon (click)="viewImage(url)">
                                <icon>visibility</icon>
                            </button>
                            <button icon (click)="removeImage(url)">
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                </div>
            }
            @for (item of uploads | async; track item.id; let i = $index) {
                <div
                    image
                    class="border-base-content/10 /5 flex h-32 w-36 shrink-0 items-center justify-center rounded-sm border bg-base-200 bg-cover bg-center"
                    [style.transform]="'translate(-' + offset + '00%)'"
                    [matTooltip]="item.error"
                    (click)="retryUpload(item)"
                >
                    @if (!item.error) {
                        <mat-progress-spinner
                            [value]="item.progress"
                            [diameter]="64"
                            mode="determinate"
                        ></mat-progress-spinner>
                    }
                    @if (item.error) {
                        <icon class="text-6xl text-error">warning</icon>
                    }
                    @if (item.error) {
                        <div
                            overlay
                            class="absolute inset-0 flex items-center justify-center text-base-100 hover:bg-base-content hover:bg-opacity-50"
                        >
                            <icon class="text-3xl opacity-0">refresh</icon>
                        </div>
                    }
                </div>
            }
            @if (length() > view_space()) {
                <button
                    icon
                    matRipple
                    [disabled]="offset() === 0"
                    class="absolute left-0 top-1/2 -translate-y-1/2 transform bg-base-100"
                    (click)="decrement()"
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="offset() >= length() - view_space()"
                    class="absolute right-0 top-1/2 -translate-y-1/2 transform bg-base-100"
                    (click)="increment()"
                >
                    <icon>chevron_right</icon>
                </button>
            }
        </div>
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Image List">
                @for (item of list(); track item) {
                    <mat-chip-row (removed)="removeImage(item)">
                        <div class="max-w-md truncate">{{ item }}</div>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                [placeholder]="'COMMON.IMAGE_ADD_URL' | translate"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators"
                [matChipInputAddOnBlur]="true"
                (matChipInputTokenEnd)="addImage($event)"
            />
        </mat-form-field>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ImageListFieldComponent),
        multi: true
      }
    ], imports: [
      TranslatePipe,
      IconComponent,
      MatFormFieldModule,
      MatChipsModule,
      MatRippleModule,
      MatProgressSpinnerModule,
      CommonModule,
      AuthenticatedImageDirective,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;95dcaaaa826894df5bf437b6ea5774f7f209a30340873d0fad154aed06b72211;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/image-list-field.component.ts */\n:host {\n  width: 100%;\n}\n[overlay] {\n  transition: background 200ms;\n}\n[image]:hover [actions],\n[image]:hover > icon {\n  opacity: 1 !important;\n}\n[image]:hover [bg] {\n  opacity: 0.4 !important;\n}\n[actions],\n[image] > icon {\n  transition: opacity 200ms;\n}\n[image] {\n  transition: transform 200ms;\n}\n/*# sourceMappingURL=image-list-field.component.css.map */\n"] }]
  }], null, { _list_el: [{ type: ViewChild, args: ["image_list", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageListFieldComponent, { className: "ImageListFieldComponent", filePath: "src/app/ui/custom-fields/image-list-field.component.ts", lineNumber: 228 });
})();

// src/app/ui/forms/system-form.component.ts
var _c07 = (a0) => ({ item: a0 });
function SystemFormComponent_Conditional_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.ZONE_REQUIRED"), " ");
  }
}
function SystemFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "item-search-field", 18);
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_0_Conditional_1_Conditional_7_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.zone.invalid && ctx_r0.form().controls.zone.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ZONES.SINGULAR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("query_fn", ctx_r0.query_fn);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.zone.invalid && ctx_r0.form().controls.zone.touched ? 7 : -1);
  }
}
function SystemFormComponent_Conditional_0_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SYSTEMS.NAME_REQUIRED"));
  }
}
function SystemFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 11);
    \u0275\u0275element(7, "input", 21);
    \u0275\u0275conditionalCreate(8, SystemFormComponent_Conditional_0_Conditional_3_Conditional_8_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.form().controls.name.invalid ? 8 : -1);
  }
}
function SystemFormComponent_Conditional_0_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SYSTEMS.EMAIL_REQUIRED"));
  }
}
function SystemFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_0_Conditional_4_Conditional_7_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.email.invalid && ctx_r0.form().controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_EMAIL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.FIELD_EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.email.invalid ? 7 : -1);
  }
}
function SystemFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SYSTEMS.DISPLAY_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "SYSTEMS.DISPLAY_NAME"));
  }
}
function SystemFormComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 27);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "SYSTEMS.CODE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "SYSTEMS.CODE"));
  }
}
function SystemFormComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 29);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.support_url.invalid && ctx_r0.form().controls.support_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "SYSTEMS.SUPPORT_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "SYSTEMS.SUPPORT_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.installed_ui_devices.invalid && ctx_r0.form().controls.installed_ui_devices.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "SYSTEMS.PANEL_COUNT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 999);
  }
}
function SystemFormComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.capacity.invalid && ctx_r0.form().controls.capacity.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "SYSTEMS.CAPACITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 999);
  }
}
function SystemFormComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "textarea", 35);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.FIELD_DESCRIPTION"));
  }
}
function SystemFormComponent_Conditional_0_Conditional_20_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 39);
    \u0275\u0275listener("removed", function SystemFormComponent_Conditional_0_Conditional_20_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeFeature(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 41);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "SYSTEMS.REMOVE_ITEM", \u0275\u0275pureFunction1(5, _c07, item_r4)));
  }
}
function SystemFormComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 36)(5, "mat-chip-grid", 37, 1);
    \u0275\u0275repeaterCreate(7, SystemFormComponent_Conditional_0_Conditional_20_For_8_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 38);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function SystemFormComponent_Conditional_0_Conditional_20_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addFeature($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.features.invalid && ctx_r0.form().controls.features.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "SYSTEMS.FEATURES"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.feature_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "SYSTEMS.FEATURES"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function SystemFormComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "SYSTEMS.MAP_ID"));
  }
}
function SystemFormComponent_Conditional_0_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r6 = ctx.$implicit;
    \u0275\u0275property("value", tz_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r6, " ");
  }
}
function SystemFormComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
function SystemFormComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 44);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.IMAGES"));
  }
}
function SystemFormComponent_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 47);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.timetable_url.invalid && ctx_r0.form().controls.timetable_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "SYSTEMS.TIMETABLE_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "SYSTEMS.TIMETABLE_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 49);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.camera_url.invalid && ctx_r0.form().controls.camera_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "SYSTEMS.CAMERA_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "SYSTEMS.CAMERA_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 51);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.camera_snapshot_url.invalid && ctx_r0.form().controls.camera_snapshot_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "SYSTEMS.CAMERA_SNAPSHOT_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "SYSTEMS.CAMERA_SNAPSHOT_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 53);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.room_booking_url.invalid && ctx_r0.form().controls.room_booking_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "SYSTEMS.ROOM_BOOKING_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "SYSTEMS.ROOM_BOOKING_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275conditionalCreate(1, SystemFormComponent_Conditional_0_Conditional_1_Template, 8, 7, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, SystemFormComponent_Conditional_0_Conditional_3_Template, 9, 6, "div", 3);
    \u0275\u0275conditionalCreate(4, SystemFormComponent_Conditional_0_Conditional_4_Template, 8, 9, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275conditionalCreate(6, SystemFormComponent_Conditional_0_Conditional_6_Template, 7, 6, "div", 3);
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_0_Conditional_7_Template, 7, 6, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SystemFormComponent_Conditional_0_Conditional_8_Template, 10, 11, "div", 3);
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275conditionalCreate(10, SystemFormComponent_Conditional_0_Conditional_10_Template, 5, 7, "div", 3);
    \u0275\u0275conditionalCreate(11, SystemFormComponent_Conditional_0_Conditional_11_Template, 5, 7, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275element(13, "settings-toggle", 7);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275element(15, "settings-toggle", 8);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275element(17, "settings-toggle", 9);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, SystemFormComponent_Conditional_0_Conditional_19_Template, 7, 6, "div", 3);
    \u0275\u0275conditionalCreate(20, SystemFormComponent_Conditional_0_Conditional_20_Template, 11, 11, "div", 3);
    \u0275\u0275conditionalCreate(21, SystemFormComponent_Conditional_0_Conditional_21_Template, 6, 3, "div", 3);
    \u0275\u0275elementStart(22, "div", 3)(23, "label", 10);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 11)(27, "div", 12)(28, "icon", 13);
    \u0275\u0275text(29, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "input", 14);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(34, SystemFormComponent_Conditional_0_For_35_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(36, SystemFormComponent_Conditional_0_Conditional_36_Template, 3, 4, "mat-option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(37, SystemFormComponent_Conditional_0_Conditional_37_Template, 5, 3, "div", 3);
    \u0275\u0275conditionalCreate(38, SystemFormComponent_Conditional_0_Conditional_38_Template, 10, 11, "div", 3);
    \u0275\u0275conditionalCreate(39, SystemFormComponent_Conditional_0_Conditional_39_Template, 10, 11, "div", 3);
    \u0275\u0275conditionalCreate(40, SystemFormComponent_Conditional_0_Conditional_40_Template, 10, 11, "div", 3);
    \u0275\u0275conditionalCreate(41, SystemFormComponent_Conditional_0_Conditional_41_Template, 10, 11, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r7 = \u0275\u0275reference(33);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.zone ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.email ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.display_name ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.display_name ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.support_url ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.installed_ui_devices ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.capacity ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(14, 24, "SYSTEMS.BOOKABLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(16, 26, "SYSTEMS.SIGNAGE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(18, 28, "SYSTEMS.PUBLIC"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.description ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.features ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.map_id ? 21 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 30, "COMMON.TIMEZONE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(31, 32, "COMMON.TIMEZONE"))("matAutocomplete", auto_r7);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filtered_timezones);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.timezones.length ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.images ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.timetable_url ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.camera_url ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.camera_snapshot_url ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.room_booking_url ? 41 : -1);
  }
}
var SystemFormComponent = class _SystemFormComponent extends AsyncHandler {
  timezones = [];
  filtered_timezones = [];
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** Function for querying zones */
  query_fn = (_) => ta({ q: _ }).pipe(map((resp) => resp.data));
  /** List of separator characters for features */
  separators = [ENTER, COMMA, SPACE];
  get feature_list() {
    return this.form().controls.features.value;
  }
  ngOnChanges(changes) {
    if (changes.form) {
      this.updateTimezoneList();
      this.subscription("tz-change", this.form().valueChanges.subscribe(({ timezone }) => this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()))));
    }
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addFeature(event) {
    const form = this.form();
    if (!form || !form.controls.features)
      return;
    const input2 = event.input;
    const value = event.value;
    const feature_list = this.feature_list;
    if ((value || "").trim()) {
      feature_list.push(value);
      form.controls.features.setValue(feature_list);
    }
    if (input2) {
      input2.value = "";
    }
  }
  /**
   * Remove feature from the list
   * @param existing_feature Feature to remove
   */
  removeFeature(existing_feature) {
    const form = this.form();
    if (!form || !form.controls.features)
      return;
    const feature_list = this.feature_list;
    const index = feature_list.indexOf(existing_feature);
    if (index >= 0) {
      feature_list.splice(index, 1);
      form.controls.features.setValue(feature_list);
    }
  }
  updateTimezoneList() {
    const timezone = this.form()?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SystemFormComponent_BaseFactory;
    return function SystemFormComponent_Factory(__ngFactoryType__) {
      return (\u0275SystemFormComponent_BaseFactory || (\u0275SystemFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SystemFormComponent)))(__ngFactoryType__ || _SystemFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemFormComponent, selectors: [["system-form"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["auto", "matAutocomplete"], ["chipList", ""], ["system", "", 1, "flex", "w-full", "flex-col", 3, "formGroup"], [1, "field"], [1, "fieldset"], [1, "fieldset", "mb-4"], [1, "mb-4", "flex", "items-center", "space-x-4"], ["formControlName", "bookable", 1, "flex-1", 3, "name"], ["formControlName", "signage", 1, "flex-1", 3, "name"], ["formControlName", "public", 1, "flex-1", 3, "name"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], ["for", "zone"], ["name", "zone", "formControlName", "zone", 3, "query_fn"], [1, "error"], ["for", "system-name"], ["matInput", "", "name", "system-name", "placeholder", "System Name", "formControlName", "name", "required", ""], ["for", "system-email"], ["matInput", "", "name", "system-email", "formControlName", "email", 3, "placeholder"], ["for", "display-name"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], ["for", "code-name"], ["matInput", "", "name", "code-name", "formControlName", "code", 3, "placeholder"], ["for", "support-url"], ["matInput", "", "name", "support-url", "formControlName", "support_url", 3, "placeholder"], ["for", "ui-devices"], ["formControlName", "installed_ui_devices", 3, "min", "max"], ["for", "capacity"], ["formControlName", "capacity", 3, "min", "max"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Image List"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""], ["for", "map_id"], ["matInput", "", "name", "map_id", "placeholder", "Map SVG ID selector e.g. area-01.10-status", "formControlName", "map_id"], ["for", "images"], ["name", "images", "formControlName", "images"], ["for", "timetable-url"], ["matInput", "", "name", "timetable-url", "formControlName", "timetable_url", 3, "placeholder"], ["for", "camera-url"], ["matInput", "", "name", "camera-url", "formControlName", "camera_url", 3, "placeholder"], ["for", "camera-snap-url"], ["matInput", "", "name", "camera-snap-url", "formControlName", "camera_snapshot_url", 3, "placeholder"], ["for", "room-booking-url"], ["matInput", "", "name", "room-booking-url", "formControlName", "room_booking_url", 3, "placeholder"]], template: function SystemFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SystemFormComponent_Conditional_0_Template, 42, 34, "form", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    ImageListFieldComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatPrefix,
    MatInputModule,
    MatInput,
    IconComponent,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    SettingsToggleComponent,
    CounterComponent,
    ItemSearchFieldComponent,
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    TranslatePipe
  ], styles: ["\n\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=system-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemFormComponent, [{
    type: Component,
    args: [{ selector: "system-form", template: `
        @if (form()) {
            <form system class="flex w-full flex-col" [formGroup]="form()">
                @if (form().controls.zone) {
                    <div class="field">
                        <label
                            for="zone"
                            [class.error]="
                                form().controls.zone.invalid &&
                                form().controls.zone.touched
                            "
                        >
                            {{ 'ZONES.SINGULAR' | translate }}<span>*</span>
                        </label>
                        <item-search-field
                            name="zone"
                            [query_fn]="query_fn"
                            formControlName="zone"
                        ></item-search-field>
                        @if (
                            form().controls.zone.invalid &&
                            form().controls.zone.touched
                        ) {
                            <div class="error">
                                {{ 'SYSTEMS.ZONE_REQUIRED' | translate }}
                            </div>
                        }
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="system-name"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="system-name"
                                    placeholder="System Name"
                                    formControlName="name"
                                    required
                                />
                                @if (form().controls.name.invalid) {
                                    <mat-error>{{
                                        'SYSTEMS.NAME_REQUIRED' | translate
                                    }}</mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.email) {
                        <div class="field">
                            <label
                                for="system-email"
                                [class.error]="
                                    form().controls.email.invalid &&
                                    form().controls.email.touched
                                "
                            >
                                {{ 'COMMON.FIELD_EMAIL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="system-email"
                                    [placeholder]="
                                        'COMMON.FIELD_EMAIL' | translate
                                    "
                                    formControlName="email"
                                />
                                @if (form().controls.email.invalid) {
                                    <mat-error>{{
                                        'SYSTEMS.EMAIL_REQUIRED' | translate
                                    }}</mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.display_name) {
                        <div class="field">
                            <label for="display-name">
                                {{ 'SYSTEMS.DISPLAY_NAME' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="display-name"
                                    [placeholder]="
                                        'SYSTEMS.DISPLAY_NAME' | translate
                                    "
                                    formControlName="display_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.display_name) {
                        <div class="field">
                            <label for="code-name"
                                >{{ 'SYSTEMS.CODE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="code-name"
                                    [placeholder]="'SYSTEMS.CODE' | translate"
                                    formControlName="code"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.support_url) {
                    <div class="field">
                        <label
                            for="support-url"
                            [class.error]="
                                form().controls.support_url.invalid &&
                                form().controls.support_url.touched
                            "
                        >
                            {{ 'SYSTEMS.SUPPORT_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="support-url"
                                [placeholder]="
                                    'SYSTEMS.SUPPORT_URL' | translate
                                "
                                formControlName="support_url"
                            />
                            <mat-error>
                                {{ 'SYSTEMS.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset mb-4">
                    @if (form().controls.installed_ui_devices) {
                        <div class="field">
                            <label
                                for="ui-devices"
                                [class.error]="
                                    form().controls.installed_ui_devices
                                        .invalid &&
                                    form().controls.installed_ui_devices.touched
                                "
                            >
                                {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                            </label>
                            <a-counter
                                formControlName="installed_ui_devices"
                                [min]="0"
                                [max]="999"
                            ></a-counter>
                        </div>
                    }
                    @if (form().controls.capacity) {
                        <div class="field">
                            <label
                                for="capacity"
                                [class.error]="
                                    form().controls.capacity.invalid &&
                                    form().controls.capacity.touched
                                "
                            >
                                {{ 'SYSTEMS.CAPACITY' | translate }}
                            </label>
                            <a-counter
                                formControlName="capacity"
                                [min]="0"
                                [max]="999"
                            ></a-counter>
                        </div>
                    }
                </div>
                <div class="mb-4 flex items-center space-x-4">
                    <settings-toggle
                        [name]="'SYSTEMS.BOOKABLE' | translate"
                        class="flex-1"
                        formControlName="bookable"
                    ></settings-toggle>
                    <settings-toggle
                        [name]="'SYSTEMS.SIGNAGE' | translate"
                        class="flex-1"
                        formControlName="signage"
                    ></settings-toggle>
                    <settings-toggle
                        [name]="'SYSTEMS.PUBLIC' | translate"
                        class="flex-1"
                        formControlName="public"
                    ></settings-toggle>
                </div>
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.features) {
                    <div class="field">
                        <label
                            [class.error]="
                                form().controls.features.invalid &&
                                form().controls.features.touched
                            "
                        >
                            {{ 'SYSTEMS.FEATURES' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipList aria-label="Image List">
                                @for (item of feature_list; track item) {
                                    <mat-chip-row
                                        (removed)="removeFeature(item)"
                                    >
                                        <div class="max-w-md truncate">
                                            {{ item }}
                                        </div>
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'SYSTEMS.REMOVE_ITEM'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <icon>cancel</icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                [placeholder]="'SYSTEMS.FEATURES' | translate"
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addFeature($event)"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.map_id) {
                    <div class="field">
                        <label for="map_id">{{
                            'SYSTEMS.MAP_ID' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="map_id"
                                placeholder="Map SVG ID selector e.g. area-01.10-status"
                                formControlName="map_id"
                            />
                        </mat-form-field>
                    </div>
                }
                <div class="field">
                    <label for="timezone">{{
                        'COMMON.TIMEZONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <div class="prefix" matPrefix>
                            <icon class="relative -left-0.5 text-2xl">
                                search
                            </icon>
                        </div>
                        <input
                            matInput
                            formControlName="timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones; track tz) {
                            <mat-option [value]="tz">
                                {{ tz }}
                            </mat-option>
                        }
                        @if (!timezones.length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
                @if (form().controls.images) {
                    <div class="field">
                        <label for="images">{{
                            'COMMON.IMAGES' | translate
                        }}</label>
                        <image-list-field
                            name="images"
                            formControlName="images"
                        ></image-list-field>
                    </div>
                }
                @if (form().controls.timetable_url) {
                    <div class="field">
                        <label
                            for="timetable-url"
                            [class.error]="
                                form().controls.timetable_url.invalid &&
                                form().controls.timetable_url.touched
                            "
                        >
                            {{ 'SYSTEMS.TIMETABLE_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="timetable-url"
                                [placeholder]="
                                    'SYSTEMS.TIMETABLE_URL' | translate
                                "
                                formControlName="timetable_url"
                            />
                            <mat-error>
                                {{ 'SYSTEMS.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.camera_url) {
                    <div class="field">
                        <label
                            for="camera-url"
                            [class.error]="
                                form().controls.camera_url.invalid &&
                                form().controls.camera_url.touched
                            "
                        >
                            {{ 'SYSTEMS.CAMERA_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="camera-url"
                                [placeholder]="'SYSTEMS.CAMERA_URL' | translate"
                                formControlName="camera_url"
                            />
                            <mat-error>
                                {{ 'SYSTEMS.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.camera_snapshot_url) {
                    <div class="field">
                        <label
                            for="camera-snap-url"
                            [class.error]="
                                form().controls.camera_snapshot_url.invalid &&
                                form().controls.camera_snapshot_url.touched
                            "
                        >
                            {{ 'SYSTEMS.CAMERA_SNAPSHOT_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="camera-snap-url"
                                [placeholder]="
                                    'SYSTEMS.CAMERA_SNAPSHOT_URL' | translate
                                "
                                formControlName="camera_snapshot_url"
                            />
                            <mat-error>
                                {{ 'SYSTEMS.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.room_booking_url) {
                    <div class="field">
                        <label
                            for="room-booking-url"
                            [class.error]="
                                form().controls.room_booking_url.invalid &&
                                form().controls.room_booking_url.touched
                            "
                        >
                            {{ 'SYSTEMS.ROOM_BOOKING_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="room-booking-url"
                                [placeholder]="
                                    'SYSTEMS.ROOM_BOOKING_URL' | translate
                                "
                                formControlName="room_booking_url"
                            />
                            <mat-error>
                                {{ 'SYSTEMS.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `, imports: [
      ImageListFieldComponent,
      ReactiveFormsModule,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      MatChipsModule,
      SettingsToggleComponent,
      CounterComponent,
      ItemSearchFieldComponent,
      MatAutocompleteModule
    ], styles: ["/* angular:styles/component:css;04b7a7094a437298576db2a062c3593f3d6712155227875ebf15729043ce208e;/home/runner/work/backoffice/backoffice/src/app/ui/forms/system-form.component.ts */\nmat-checkbox {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=system-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemFormComponent, { className: "SystemFormComponent", filePath: "src/app/ui/forms/system-form.component.ts", lineNumber: 472 });
})();

// src/app/ui/forms/system-trigger-form.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function SystemTriggerFormComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SYSTEMS.TRIGGER_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.form().controls.name.value, " ");
  }
}
function SystemTriggerFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "SYSTEMS.TRIGGER_ACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", ctx_r0.form().value.triggered)("text-success-content", ctx_r0.form().value.triggered)("bg-error", !ctx_r0.form().value.triggered)("text-error-content", !ctx_r0.form().value.triggered);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, ctx_r0.form().value.triggered ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
  }
}
function SystemTriggerFormComponent_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 20);
    \u0275\u0275listener("removed", function SystemTriggerFormComponent_Conditional_4_For_8_Template_mat_chip_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removePlaylist(item_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 21);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
  }
}
function SystemTriggerFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 16)(5, "mat-chip-grid", 17, 0);
    \u0275\u0275repeaterCreate(7, SystemTriggerFormComponent_Conditional_4_For_8_Template, 4, 2, "mat-chip", 18, _forTrack03);
    \u0275\u0275elementStart(9, "input", 19);
    \u0275\u0275listener("matChipInputTokenEnd", function SystemTriggerFormComponent_Conditional_4_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addPlaylist($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "SYSTEMS.PLAYLISTS"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.form().value.playlists);
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
var SystemTriggerFormComponent = class _SystemTriggerFormComponent {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  separators = [ENTER, COMMA, SPACE];
  addPlaylist = (e) => addChipItem(this.form().controls.playlists, e);
  removePlaylist = (i) => removeChipItem(this.form().controls.playlists, i);
  static \u0275fac = function SystemTriggerFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemTriggerFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemTriggerFormComponent, selectors: [["system-trigger-form"]], inputs: { form: [1, "form"] }, decls: 12, vars: 13, consts: [["chipList", ""], ["system-trigger", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "mb-4", "flex", "space-x-4"], [1, "relative", "flex", "flex-1", "items-center", "rounded-sm", "border", "border-base-300", "p-4"], [1, "relative", "flex-1", "rounded-sm", "border", "border-base-300", "p-4"], [1, "flex", "flex-col"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["formControlName", "enabled", 1, "m-2", "min-w-[40%]", "max-w-[calc(50%-1rem)]", "flex-1", 3, "name"], ["formControlName", "exec_enabled", 1, "m-2", "min-w-[40%]", "max-w-[calc(50%-1rem)]", "flex-1", 3, "name"], ["formControlName", "important", 1, "m-2", "min-w-[40%]", "max-w-[calc(50%-1rem)]", "flex-1", 3, "name"], [1, "truncation", "absolute", "left-4", "top-0", "-translate-y-1/2", "rounded-sm", "bg-base-100", "p-2", "text-xs"], [1, "text-xl"], [1, "absolute", "left-4", "top-0", "-translate-y-1/2", "rounded-sm", "bg-base-100", "p-2", "text-xs"], [1, "flex"], [1, "rounded-full", "px-4", "py-2", "text-sm"], ["for", "playlists"], ["appearance", "outline"], ["aria-label", "Playlists"], [3, "removable"], ["matInput", "", "placeholder", "Playlist IDs", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "removable"], ["matChipRemove", ""]], template: function SystemTriggerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 1)(1, "div", 2);
      \u0275\u0275conditionalCreate(2, SystemTriggerFormComponent_Conditional_2_Template, 6, 4, "div", 3);
      \u0275\u0275conditionalCreate(3, SystemTriggerFormComponent_Conditional_3_Template, 8, 14, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, SystemTriggerFormComponent_Conditional_4_Template, 10, 6, "div", 5);
      \u0275\u0275elementStart(5, "div", 6);
      \u0275\u0275element(6, "settings-toggle", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275element(8, "settings-toggle", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275element(10, "settings-toggle", 9);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form().controls.name ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form().controls.name ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form().controls.playlists ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("name", \u0275\u0275pipeBind1(7, 7, "SYSTEMS.TRIGGER_ENABLED"));
      \u0275\u0275advance(2);
      \u0275\u0275property("name", \u0275\u0275pipeBind1(9, 9, "SYSTEMS.TRIGGER_EXECUTE_ENABLED"));
      \u0275\u0275advance(2);
      \u0275\u0275property("name", \u0275\u0275pipeBind1(11, 11, "SYSTEMS.TRIGGER_IMPORTANT"));
    }
  }, dependencies: [
    SettingsToggleComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatChipsModule,
    MatChip,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatInputModule,
    MatInput,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemTriggerFormComponent, [{
    type: Component,
    args: [{ selector: "system-trigger-form", template: `
        <form system-trigger class="flex flex-col" [formGroup]="form()">
            <div class="mb-4 flex space-x-4">
                @if (form().controls.name) {
                    <div
                        class="relative flex flex-1 items-center rounded-sm border border-base-300 p-4"
                    >
                        <div
                            class="truncation absolute left-4 top-0 -translate-y-1/2 rounded-sm bg-base-100 p-2 text-xs"
                        >
                            {{ 'SYSTEMS.TRIGGER_NAME' | translate }}
                        </div>
                        <div class="text-xl">
                            {{ form().controls.name.value }}
                        </div>
                    </div>
                }
                @if (form().controls.name) {
                    <div
                        class="relative flex-1 rounded-sm border border-base-300 p-4"
                    >
                        <div
                            class="absolute left-4 top-0 -translate-y-1/2 rounded-sm bg-base-100 p-2 text-xs"
                        >
                            {{ 'SYSTEMS.TRIGGER_ACTIVE' | translate }}
                        </div>
                        <div class="flex">
                            <div
                                class="rounded-full px-4 py-2 text-sm"
                                [class.bg-success]="form().value.triggered"
                                [class.text-success-content]="
                                    form().value.triggered
                                "
                                [class.bg-error]="!form().value.triggered"
                                [class.text-error-content]="
                                    !form().value.triggered
                                "
                            >
                                {{
                                    (form().value.triggered
                                        ? 'COMMON.TRUE'
                                        : 'COMMON.FALSE'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </div>
                }
            </div>
            @if (form().controls.playlists) {
                <div class="flex flex-col">
                    <label for="playlists">{{
                        'SYSTEMS.PLAYLISTS' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-chip-grid #chipList aria-label="Playlists">
                            @for (
                                item of form().value.playlists;
                                track item.id
                            ) {
                                <mat-chip
                                    [removable]="true"
                                    (removed)="removePlaylist(item)"
                                >
                                    {{ item }}
                                    <icon matChipRemove>close</icon>
                                </mat-chip>
                            }
                            <input
                                matInput
                                placeholder="Playlist IDs"
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addPlaylist($event)"
                            />
                        </mat-chip-grid>
                    </mat-form-field>
                </div>
            }
            <div class="-mx-2 flex flex-wrap items-center">
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_ENABLED' | translate"
                    formControlName="enabled"
                ></settings-toggle>
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_EXECUTE_ENABLED' | translate"
                    formControlName="exec_enabled"
                ></settings-toggle>
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_IMPORTANT' | translate"
                    formControlName="important"
                ></settings-toggle>
            </div>
        </form>
    `, imports: [
      SettingsToggleComponent,
      TranslatePipe,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatChipsModule,
      MatInputModule
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemTriggerFormComponent, { className: "SystemTriggerFormComponent", filePath: "src/app/ui/forms/system-trigger-form.component.ts", lineNumber: 122 });
})();

// src/app/ui/forms/trigger-form.component.ts
function TriggerFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10, "Trigger name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 6, "COMMON.FIELD_NAME"));
  }
}
function TriggerFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "textarea", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.FIELD_DESCRIPTION"));
  }
}
function TriggerFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "settings-toggle", 9);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "TRIGGERS.ENABLE_WEBHOOK"));
  }
}
function TriggerFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "TRIGGERS.DEBOUNCE_PERIOD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("step", 100)("max", 24 * 60 * 60)("render_fn", ctx_r0.render_debounce);
  }
}
function TriggerFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 13)(5, "mat-select", 14)(6, "mat-option", 15);
    \u0275\u0275text(7, "GET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 16);
    \u0275\u0275text(9, "POST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 17);
    \u0275\u0275text(11, "PUT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 18);
    \u0275\u0275text(13, "PATCH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-option", 19);
    \u0275\u0275text(15, "DELETE");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "TRIGGERS.SUPPORTED_METHODS"), " ");
  }
}
function TriggerFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, TriggerFormComponent_Conditional_0_Conditional_1_Template, 11, 8, "div", 1);
    \u0275\u0275conditionalCreate(2, TriggerFormComponent_Conditional_0_Conditional_2_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(3, TriggerFormComponent_Conditional_0_Conditional_3_Template, 3, 3, "div", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275conditionalCreate(5, TriggerFormComponent_Conditional_0_Conditional_5_Template, 5, 9, "div", 1);
    \u0275\u0275conditionalCreate(6, TriggerFormComponent_Conditional_0_Conditional_6_Template, 16, 3, "div", 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.description ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.enable_webhook ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.enable_webhook.value && ctx_r0.form().controls.debounce_period ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.enable_webhook.value && ctx_r0.form().controls.supported_methods ? 6 : -1);
  }
}
var TriggerFormComponent = class _TriggerFormComponent {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  render_debounce = (v) => `${v} ms`;
  static \u0275fac = function TriggerFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TriggerFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerFormComponent, selectors: [["trigger-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["trigger", "", 1, "flex", "w-xl", "max-w-[calc(100vw-4rem)]", "flex-col", 3, "formGroup"], [1, "field"], [1, "field", "mb-4", "w-[calc(50%-0.75rem)]"], [1, "flex", "items-center", "space-x-4"], ["for", "trigger-name"], ["appearance", "outline"], ["matInput", "", "name", "trigger-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["formControlName", "enable_webhook", 3, "name"], ["for", "debounce-period"], ["formControlName", "debounce_period", 3, "min", "step", "max", "render_fn"], ["for", "methods"], ["appearance", "outline", 1, "no-subscript"], ["name", "methods", "multiple", "", "formControlName", "supported_methods"], ["value", "GET"], ["value", "POST"], ["value", "PUT"], ["value", "PATCH"], ["value", "DELETE"]], template: function TriggerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TriggerFormComponent_Conditional_0_Template, 7, 6, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSelectModule,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    CounterComponent,
    SettingsToggleComponent,
    MatInputModule,
    MatInput,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerFormComponent, [{
    type: Component,
    args: [{ selector: "trigger-form", template: `
        @if (form()) {
            <form
                trigger
                class="flex w-xl max-w-[calc(100vw-4rem)] flex-col"
                [formGroup]="form()"
            >
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="trigger-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="trigger-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            <mat-error>Trigger name is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">{{
                            'COMMON.FIELD_DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.enable_webhook) {
                    <div class="field mb-4 w-[calc(50%-0.75rem)]">
                        <settings-toggle
                            [name]="'TRIGGERS.ENABLE_WEBHOOK' | translate"
                            formControlName="enable_webhook"
                        ></settings-toggle>
                    </div>
                }
                <div class="flex items-center space-x-4">
                    @if (
                        form().controls.enable_webhook.value &&
                        form().controls.debounce_period
                    ) {
                        <div class="field">
                            <label
                                for="debounce-period"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
                                "
                            >
                                {{ 'TRIGGERS.DEBOUNCE_PERIOD' | translate }}
                            </label>
                            <a-counter
                                formControlName="debounce_period"
                                [min]="0"
                                [step]="100"
                                [max]="24 * 60 * 60"
                                [render_fn]="render_debounce"
                            ></a-counter>
                        </div>
                    }
                    @if (
                        form().controls.enable_webhook.value &&
                        form().controls.supported_methods
                    ) {
                        <div class="field">
                            <label for="methods">
                                {{ 'TRIGGERS.SUPPORTED_METHODS' | translate }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    name="methods"
                                    multiple
                                    formControlName="supported_methods"
                                >
                                    <mat-option value="GET">GET</mat-option>
                                    <mat-option value="POST">POST</mat-option>
                                    <mat-option value="PUT">PUT</mat-option>
                                    <mat-option value="PATCH">PATCH</mat-option>
                                    <mat-option value="DELETE"
                                        >DELETE</mat-option
                                    >
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                </div>
            </form>
        }
    `, imports: [
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      CounterComponent,
      SettingsToggleComponent,
      MatInputModule,
      TranslatePipe
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerFormComponent, { className: "TriggerFormComponent", filePath: "src/app/ui/forms/trigger-form.component.ts", lineNumber: 134 });
})();

// src/app/ui/forms/user-form.component.ts
var _c08 = (a0) => ({ item: a0 });
function UserFormComponent_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r1.name, " ");
  }
}
function UserFormComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15);
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form().controls.first_name.invalid && ctx_r1.form().controls.first_name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "USERS.FIRST_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "USERS.FIRST_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "USERS.FIRST_NAME_REQUIRED"));
  }
}
function UserFormComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15);
    \u0275\u0275element(7, "input", 17);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "USERS.LAST_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 5, "USERS.LAST_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "USERS.LAST_NAME_REQUIRED"));
  }
}
function UserFormComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15);
    \u0275\u0275element(7, "input", 19);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form().controls.email.invalid && ctx_r1.form().controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_EMAIL"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "COMMON.FIELD_EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "USERS.EMAIL_REQUIRED"));
  }
}
function UserFormComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "USERS.STAFF_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "USERS.STAFF_ID"));
  }
}
function UserFormComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "USERS.STAFF_CARD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "USERS.STAFF_CARD"));
  }
}
function UserFormComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 11);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 1, "USERS.ROLE_SUPPORT"));
  }
}
function UserFormComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 12);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 1, "USERS.ROLE_ADMIN"));
  }
}
function UserFormComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon", 26);
    \u0275\u0275listener("click", function UserFormComponent_Conditional_0_Conditional_24_Template_icon_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.show_password = !ctx_r1.show_password);
    });
    \u0275\u0275text(8, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form().controls.password.invalid && ctx_r1.form().controls.password.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.PASSWORD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.show_password ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 8, "COMMON.PASSWORD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "USERS.PASSWORD_REQUIRED"));
  }
}
function UserFormComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon", 26);
    \u0275\u0275listener("click", function UserFormComponent_Conditional_0_Conditional_25_Template_icon_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.show_confirm = !ctx_r1.show_confirm);
    });
    \u0275\u0275text(8, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form().controls.confirm_password.invalid && ctx_r1.form().controls.confirm_password.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "USERS.PASSWORD_CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.show_confirm ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 8, "USERS.PASSWORD_CONFIRM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "USERS.PASSWORDS_MATCH"));
  }
}
function UserFormComponent_Conditional_0_Conditional_26_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 33);
    \u0275\u0275listener("removed", function UserFormComponent_Conditional_0_Conditional_26_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeGroup(item_r7));
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.ITEM_REMOVE", \u0275\u0275pureFunction1(5, _c08, item_r7)));
  }
}
function UserFormComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 30)(5, "mat-chip-grid", 31, 0);
    \u0275\u0275repeaterCreate(7, UserFormComponent_Conditional_0_Conditional_26_For_8_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 32);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function UserFormComponent_Conditional_0_Conditional_26_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addGroup($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r8 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form().controls.groups.invalid && ctx_r1.form().controls.groups.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "USERS.FIELD_GROUPS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.group_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "USERS.FIELD_GROUPS"))("matChipInputFor", chipList_r8)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function UserFormComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 37);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form().controls.image.invalid && ctx_r1.form().controls.image.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "USERS.IMAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "USERS.IMAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "USERS.IMAGE_INVALID"));
  }
}
function UserFormComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 13);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("name", \u0275\u0275pipeBind1(1, 1, "USERS.LOCATABLE"));
  }
}
function UserFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275element(1, "input", 2)(2, "input", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "label", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 6)(8, "mat-select", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275repeaterCreate(10, UserFormComponent_Conditional_0_For_11_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275conditionalCreate(14, UserFormComponent_Conditional_0_Conditional_14_Template, 12, 11, "div", 4);
    \u0275\u0275conditionalCreate(15, UserFormComponent_Conditional_0_Conditional_15_Template, 12, 9, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, UserFormComponent_Conditional_0_Conditional_16_Template, 12, 11, "div", 4);
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275conditionalCreate(18, UserFormComponent_Conditional_0_Conditional_18_Template, 7, 6, "div", 4);
    \u0275\u0275conditionalCreate(19, UserFormComponent_Conditional_0_Conditional_19_Template, 7, 6, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10);
    \u0275\u0275conditionalCreate(21, UserFormComponent_Conditional_0_Conditional_21_Template, 2, 3, "settings-toggle", 11);
    \u0275\u0275conditionalCreate(22, UserFormComponent_Conditional_0_Conditional_22_Template, 2, 3, "settings-toggle", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 9);
    \u0275\u0275conditionalCreate(24, UserFormComponent_Conditional_0_Conditional_24_Template, 12, 12, "div", 4);
    \u0275\u0275conditionalCreate(25, UserFormComponent_Conditional_0_Conditional_25_Template, 12, 12, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, UserFormComponent_Conditional_0_Conditional_26_Template, 11, 11, "div", 4);
    \u0275\u0275conditionalCreate(27, UserFormComponent_Conditional_0_Conditional_27_Template, 10, 11, "div", 4);
    \u0275\u0275conditionalCreate(28, UserFormComponent_Conditional_0_Conditional_28_Template, 2, 3, "settings-toggle", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 15, "DOMAINS.SINGULAR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 17, "ADMIN.SELECT_DOMAIN"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 19, ctx_r1.domain_list));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.form().controls.first_name ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.last_name ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.email ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form().controls.staff_id ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.card_number ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form().controls.support ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.sys_admin ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form().controls.staff_id && !ctx_r1.hide_password ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.confirm_password && !ctx_r1.hide_password ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.groups ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.image ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.locatable ? 28 : -1);
  }
}
var UserFormComponent = class _UserFormComponent {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** Whether password should be visible in plaintext */
  show_password;
  /** Whether password confirm should be visible in plaintext */
  show_confirm;
  /** Loading state */
  loading = "";
  /** List of available domains */
  domain_list = ru().pipe(map(({ data }) => data), shareReplay(1));
  /** List of separator characters for groups */
  separators = [ENTER, COMMA];
  get hide_password() {
    return this.form().value.email.toLowerCase().startsWith("lynner") && !localStorage.getItem("PlaceOS.show_password");
  }
  addGroup = (e) => addChipItem(this.form().controls.groups, e);
  removeGroup = (i) => removeChipItem(this.form().controls.groups, i);
  async ngOnInit() {
    this.loading = i18n("DOMAINS.LOADING");
    const form = this.form();
    if (!form.controls.authority_id.value) {
      form.controls.authority_id.setValue(this.domain_list[0]?.id);
    }
    this.loading = "";
  }
  get group_list() {
    return this.form().controls.groups.value;
  }
  static \u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["user-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["chipList", ""], ["user", "", 1, "flex", "flex-col", 3, "formGroup"], ["id", "email", "type", "text", "name", "fakeusernameremembered", 2, "display", "none"], ["id", "password", "type", "password", "name", "fakepasswordremembered", 2, "display", "none"], [1, "field"], ["for", "domain"], ["appearance", "outline", 1, "h-12"], ["name", "type", "formControlName", "authority_id", 3, "placeholder"], [3, "value"], [1, "fieldset"], [1, "mb-4", "flex", "items-center", "space-x-4"], ["formControlName", "support", 1, "max-w-1/2", "flex-1", 3, "name"], ["formControlName", "sys_admin", 1, "max-w-1/2", "flex-1", 3, "name"], ["formControlName", "locatable", 1, "mb-4", 3, "name"], ["for", "system-name"], ["appearance", "outline"], ["matInput", "", "name", "first-name", "formControlName", "first_name", "required", "", 3, "placeholder"], ["matInput", "", "name", "last-name", "formControlName", "last_name", "required", "", 3, "placeholder"], ["for", "useremail"], ["matInput", "", "name", "useremail", "formControlName", "email", "autocomplete", "nope", 3, "placeholder"], ["for", "staff-id"], ["matInput", "", "name", "staff-id", "formControlName", "staff_id", 3, "placeholder"], ["for", "card-number"], ["matInput", "", "name", "card-number", "formControlName", "card_number", 3, "placeholder"], ["for", "new-password"], ["matInput", "", "name", "new-password", "autocomplete", "new-password", "formControlName", "password", 3, "type", "placeholder"], ["matSuffix", "", 3, "click"], ["for", "confirm-password", "minlength", "1"], ["matInput", "", "name", "confirm-password", "formControlName", "confirm_password", "minlength", "1", 3, "type", "placeholder"], ["for", "groups"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Image List"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""], ["for", "image"], ["matInput", "", "name", "image", "formControlName", "image", 3, "placeholder"]], template: function UserFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserFormComponent_Conditional_0_Template, 29, 21, "form", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    CommonModule,
    SettingsToggleComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    IconComponent,
    MatSelectModule,
    MatSelect,
    MatOption,
    AsyncPipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{ selector: "user-form", template: `
        @if (form()) {
            <form user class="flex flex-col" [formGroup]="form()">
                <!--  fake fields are a workaround for chrome/opera autofill getting the wrong fields -->
                <input
                    id="email"
                    style="display: none"
                    type="text"
                    name="fakeusernameremembered"
                />
                <input
                    id="password"
                    style="display: none"
                    type="password"
                    name="fakepasswordremembered"
                />
                <div class="field">
                    <label for="domain">{{
                        'DOMAINS.SINGULAR' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="h-12">
                        <mat-select
                            name="type"
                            formControlName="authority_id"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (domain of domain_list | async; track domain) {
                                <mat-option [value]="domain.id">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="fieldset">
                    @if (form().controls.first_name) {
                        <div class="field">
                            <label
                                for="system-name"
                                [class.error]="
                                    form().controls.first_name.invalid &&
                                    form().controls.first_name.touched
                                "
                            >
                                {{ 'USERS.FIRST_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="first-name"
                                    [placeholder]="
                                        'USERS.FIRST_NAME' | translate
                                    "
                                    formControlName="first_name"
                                    required
                                />
                                <mat-error>{{
                                    'USERS.FIRST_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.last_name) {
                        <div class="field">
                            <label for="system-name"
                                >{{ 'USERS.LAST_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="last-name"
                                    [placeholder]="
                                        'USERS.LAST_NAME' | translate
                                    "
                                    formControlName="last_name"
                                    required
                                />
                                <mat-error>{{
                                    'USERS.LAST_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.email) {
                    <div class="field">
                        <label
                            for="useremail"
                            [class.error]="
                                form().controls.email.invalid &&
                                form().controls.email.touched
                            "
                        >
                            {{ 'COMMON.FIELD_EMAIL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="useremail"
                                [placeholder]="'COMMON.FIELD_EMAIL' | translate"
                                formControlName="email"
                                autocomplete="nope"
                            />
                            <mat-error>{{
                                'USERS.EMAIL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.staff_id) {
                        <div class="field">
                            <label for="staff-id"
                                >{{ 'USERS.STAFF_ID' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="staff-id"
                                    [placeholder]="'USERS.STAFF_ID' | translate"
                                    formControlName="staff_id"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.card_number) {
                        <div class="field">
                            <label for="card-number"
                                >{{ 'USERS.STAFF_CARD' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="card-number"
                                    [placeholder]="
                                        'USERS.STAFF_CARD' | translate
                                    "
                                    formControlName="card_number"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="mb-4 flex items-center space-x-4">
                    @if (form().controls.support) {
                        <settings-toggle
                            class="max-w-1/2 flex-1"
                            [name]="'USERS.ROLE_SUPPORT' | translate"
                            formControlName="support"
                        ></settings-toggle>
                    }
                    @if (form().controls.sys_admin) {
                        <settings-toggle
                            class="max-w-1/2 flex-1"
                            [name]="'USERS.ROLE_ADMIN' | translate"
                            formControlName="sys_admin"
                        ></settings-toggle>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.staff_id && !hide_password) {
                        <div class="field">
                            <label
                                for="new-password"
                                [class.error]="
                                    form().controls.password.invalid &&
                                    form().controls.password.touched
                                "
                            >
                                {{ 'COMMON.PASSWORD' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="new-password"
                                    autocomplete="new-password"
                                    [type]="show_password ? 'text' : 'password'"
                                    [placeholder]="
                                        'COMMON.PASSWORD' | translate
                                    "
                                    formControlName="password"
                                />
                                <icon
                                    matSuffix
                                    (click)="show_password = !show_password"
                                >
                                    visibility
                                </icon>
                                <mat-error>{{
                                    'USERS.PASSWORD_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.confirm_password && !hide_password) {
                        <div class="field">
                            <label
                                for="confirm-password"
                                [class.error]="
                                    form().controls.confirm_password.invalid &&
                                    form().controls.confirm_password.touched
                                "
                                minlength="1"
                            >
                                {{ 'USERS.PASSWORD_CONFIRM' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [type]="show_confirm ? 'text' : 'password'"
                                    name="confirm-password"
                                    [placeholder]="
                                        'USERS.PASSWORD_CONFIRM' | translate
                                    "
                                    formControlName="confirm_password"
                                    minlength="1"
                                />
                                <icon
                                    matSuffix
                                    (click)="show_confirm = !show_confirm"
                                >
                                    visibility
                                </icon>
                                <mat-error>{{
                                    'USERS.PASSWORDS_MATCH' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.groups) {
                    <div class="field">
                        <label
                            for="groups"
                            [class.error]="
                                form().controls.groups.invalid &&
                                form().controls.groups.touched
                            "
                        >
                            {{ 'USERS.FIELD_GROUPS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipList aria-label="Image List">
                                @for (item of group_list; track item) {
                                    <mat-chip-row (removed)="removeGroup(item)">
                                        <div class="max-w-md truncate">
                                            {{ item }}
                                        </div>
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.ITEM_REMOVE'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <icon>cancel</icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                [placeholder]="'USERS.FIELD_GROUPS' | translate"
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addGroup($event)"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.image) {
                    <div class="field">
                        <label
                            for="image"
                            [class.error]="
                                form().controls.image.invalid &&
                                form().controls.image.touched
                            "
                        >
                            {{ 'USERS.IMAGE' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="image"
                                [placeholder]="'USERS.IMAGE' | translate"
                                formControlName="image"
                            />
                            <mat-error>{{
                                'USERS.IMAGE_INVALID' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.locatable) {
                    <settings-toggle
                        formControlName="locatable"
                        [name]="'USERS.LOCATABLE' | translate"
                        class="mb-4"
                    ></settings-toggle>
                }
            </form>
        }
    `, imports: [
      CommonModule,
      SettingsToggleComponent,
      ReactiveFormsModule,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      MatChipsModule,
      IconComponent,
      MatSelectModule
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "src/app/ui/forms/user-form.component.ts", lineNumber: 339 });
})();

// src/app/ui/forms/zone-form.component.ts
var _c09 = (a0) => ({ item: a0 });
function ZoneFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "item-search-field", 14);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "ZONES.PARENT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "ZONES.SEARCH"))("query_fn", ctx_r0.query_fn)("exclude", ctx_r0.exclude);
  }
}
function ZoneFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "ZONES.NAME_REQUIRED"));
  }
}
function ZoneFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.display_name.invalid && ctx_r0.form().controls.display_name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "ZONES.DISPLAY_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 6, "ZONES.DISPLAY_NAME"));
  }
}
function ZoneFormComponent_Conditional_0_Conditional_5_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 22);
    \u0275\u0275listener("removed", function ZoneFormComponent_Conditional_0_Conditional_5_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeTag(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.ITEM_REMOVE", \u0275\u0275pureFunction1(5, _c09, item_r4)));
  }
}
function ZoneFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 19)(5, "mat-chip-grid", 20, 1);
    \u0275\u0275repeaterCreate(7, ZoneFormComponent_Conditional_0_Conditional_5_For_8_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 21);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function ZoneFormComponent_Conditional_0_Conditional_5_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.tags.invalid && ctx_r0.form().controls.tags.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "ZONES.TAGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.tag_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "ZONES.TAGS"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function ZoneFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "textarea", 26);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.FIELD_DESCRIPTION"));
  }
}
function ZoneFormComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "ZONES.LOCATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "ZONES.LOCATION_PLACEHOLDER"));
  }
}
function ZoneFormComponent_Conditional_0_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r6 = ctx.$implicit;
    \u0275\u0275property("value", tz_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r6);
  }
}
function ZoneFormComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
function ZoneFormComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 30);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "ZONES.CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "ZONES.CODE_PLACEHOLDER"));
  }
}
function ZoneFormComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "ZONES.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "ZONES.TYPE_PLACEHOLDER"));
  }
}
function ZoneFormComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "ZONES.COUNT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 999);
  }
}
function ZoneFormComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "ZONES.CAPACITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 999);
  }
}
function ZoneFormComponent_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 38);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "ZONES.MAP_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "ZONES.MAP_URL"));
  }
}
function ZoneFormComponent_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.IMAGES"));
  }
}
function ZoneFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275conditionalCreate(1, ZoneFormComponent_Conditional_0_Conditional_1_Template, 6, 8, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, ZoneFormComponent_Conditional_0_Conditional_3_Template, 12, 11, "div", 3);
    \u0275\u0275conditionalCreate(4, ZoneFormComponent_Conditional_0_Conditional_4_Template, 7, 8, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ZoneFormComponent_Conditional_0_Conditional_5_Template, 11, 11, "div", 3);
    \u0275\u0275conditionalCreate(6, ZoneFormComponent_Conditional_0_Conditional_6_Template, 7, 6, "div", 3);
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275conditionalCreate(8, ZoneFormComponent_Conditional_0_Conditional_8_Template, 7, 6, "div", 3);
    \u0275\u0275elementStart(9, "div", 3)(10, "label", 5);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 6)(14, "div", 7)(15, "icon", 8);
    \u0275\u0275text(16, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 9);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(21, ZoneFormComponent_Conditional_0_For_22_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(23, ZoneFormComponent_Conditional_0_Conditional_23_Template, 3, 4, "mat-option", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 4);
    \u0275\u0275conditionalCreate(25, ZoneFormComponent_Conditional_0_Conditional_25_Template, 7, 6, "div", 3);
    \u0275\u0275conditionalCreate(26, ZoneFormComponent_Conditional_0_Conditional_26_Template, 7, 6, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 12);
    \u0275\u0275conditionalCreate(28, ZoneFormComponent_Conditional_0_Conditional_28_Template, 5, 5, "div", 3);
    \u0275\u0275conditionalCreate(29, ZoneFormComponent_Conditional_0_Conditional_29_Template, 5, 5, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, ZoneFormComponent_Conditional_0_Conditional_30_Template, 7, 6, "div", 3);
    \u0275\u0275conditionalCreate(31, ZoneFormComponent_Conditional_0_Conditional_31_Template, 5, 3, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r7 = \u0275\u0275reference(20);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.parent_zone ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.display_name ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.tags ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.description ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.location ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 17, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 19, "COMMON.TIMEZONE"))("matAutocomplete", auto_r7);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filtered_timezones);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.timezones.length ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.code ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.location ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.count ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.capacity ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.map_id ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.images ? 31 : -1);
  }
}
var ZoneFormComponent = class _ZoneFormComponent extends AsyncHandler {
  timezones = [];
  filtered_timezones = [];
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  /** Query function for zones */
  query_fn = (_) => ta({ q: _ }).pipe(map((resp) => resp.data));
  /** Function to exclude zones */
  exclude = (zone) => zone.id === this.form().controls.id.value;
  addTag = (e) => addChipItem(this.form().controls.tags, e);
  removeTag = (i) => removeChipItem(this.form().controls.tags, i);
  get tag_list() {
    return this.form().controls.tags.value;
  }
  ngOnChanges(changes) {
    if (changes.form) {
      this.updateTimezoneList();
      this.subscription("tz-change", this.form().valueChanges.subscribe(({ timezone }) => this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()))));
      this.updateZone();
    }
  }
  updateTimezoneList() {
    const timezone = this.form()?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  /** Update parent zone details if set */
  async updateZone() {
    const form = this.form();
    const parent_id = form.controls.parent_id ? form.controls.parent_id.value : "";
    if (parent_id) {
      const zone = await ra(parent_id).toPromise();
      this.form().controls.parent_zone.setValue(zone);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ZoneFormComponent_BaseFactory;
    return function ZoneFormComponent_Factory(__ngFactoryType__) {
      return (\u0275ZoneFormComponent_BaseFactory || (\u0275ZoneFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ZoneFormComponent)))(__ngFactoryType__ || _ZoneFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneFormComponent, selectors: [["zone-form"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["auto", "matAutocomplete"], ["chipList", ""], ["zone", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "field"], [1, "fieldset"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], [1, "fieldset", "mb-4"], ["for", "parent-zone"], ["formControlName", "parent_zone", 3, "placeholder", "query_fn", "exclude"], ["for", "zone-name"], ["matInput", "", "name", "zone-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "zone-display"], ["matInput", "", "name", "zone-display", "formControlName", "display_name", 3, "placeholder"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Tag List"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "location"], ["matInput", "", "name", "location", "formControlName", "location", 3, "placeholder"], ["for", "code"], ["matInput", "", "name", "code", "formControlName", "code", 3, "placeholder"], ["for", "type"], ["matInput", "", "name", "type", "formControlName", "type", 3, "placeholder"], ["for", "count"], ["formControlName", "count", 3, "min", "max"], ["for", "capacity"], ["formControlName", "capacity", 3, "min", "max"], ["for", "map"], ["matInput", "", "name", "map", "formControlName", "map_id", 3, "placeholder"], ["for", "images"], ["name", "images", "formControlName", "images"]], template: function ZoneFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ZoneFormComponent_Conditional_0_Template, 32, 21, "form", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    ImageListFieldComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    IconComponent,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatPrefix,
    MatInputModule,
    MatInput,
    CounterComponent,
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    ItemSearchFieldComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneFormComponent, [{
    type: Component,
    args: [{ selector: "zone-form", template: `
        @if (form()) {
            <form zone class="flex flex-col" [formGroup]="form()">
                @if (form().controls.parent_zone) {
                    <div class="field">
                        <label for="parent-zone">
                            {{ 'ZONES.PARENT' | translate }}
                        </label>
                        <item-search-field
                            [placeholder]="'ZONES.SEARCH' | translate"
                            [query_fn]="query_fn"
                            [exclude]="exclude"
                            formControlName="parent_zone"
                        ></item-search-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="zone-name"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="zone-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    formControlName="name"
                                    required
                                />
                                <mat-error>{{
                                    'ZONES.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.display_name) {
                        <div class="field">
                            <label
                                for="zone-display"
                                [class.error]="
                                    form().controls.display_name.invalid &&
                                    form().controls.display_name.touched
                                "
                            >
                                {{ 'ZONES.DISPLAY_NAME' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="zone-display"
                                    [placeholder]="
                                        'ZONES.DISPLAY_NAME' | translate
                                    "
                                    formControlName="display_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.tags) {
                    <div class="field">
                        <label
                            [class.error]="
                                form().controls.tags.invalid &&
                                form().controls.tags.touched
                            "
                        >
                            {{ 'ZONES.TAGS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipList aria-label="Tag List">
                                @for (item of tag_list; track item) {
                                    <mat-chip-row (removed)="removeTag(item)">
                                        <div class="max-w-md truncate">
                                            {{ item }}
                                        </div>
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.ITEM_REMOVE'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <icon>cancel</icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                [placeholder]="'ZONES.TAGS' | translate"
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addTag($event)"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.location) {
                        <div class="field">
                            <label for="location">{{
                                'ZONES.LOCATION' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="location"
                                    [placeholder]="
                                        'ZONES.LOCATION_PLACEHOLDER' | translate
                                    "
                                    formControlName="location"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <div class="field">
                        <label for="timezone">
                            {{ 'COMMON.TIMEZONE' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <div class="prefix" matPrefix>
                                <icon class="relative -left-0.5 text-2xl">
                                    search
                                </icon>
                            </div>
                            <input
                                matInput
                                formControlName="timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [matAutocomplete]="auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (tz of filtered_timezones; track tz) {
                                <mat-option [value]="tz">{{ tz }}</mat-option>
                            }
                            @if (!timezones.length) {
                                <mat-option [disabled]="true">
                                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                </div>
                <div class="fieldset">
                    @if (form().controls.code) {
                        <div class="field">
                            <label for="code">{{
                                'ZONES.CODE' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="code"
                                    [placeholder]="
                                        'ZONES.CODE_PLACEHOLDER' | translate
                                    "
                                    formControlName="code"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.location) {
                        <div class="field">
                            <label for="type">{{
                                'ZONES.TYPE' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="type"
                                    [placeholder]="
                                        'ZONES.TYPE_PLACEHOLDER' | translate
                                    "
                                    formControlName="type"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset mb-4">
                    @if (form().controls.count) {
                        <div class="field">
                            <label for="count">{{
                                'ZONES.COUNT' | translate
                            }}</label>
                            <a-counter
                                formControlName="count"
                                [min]="0"
                                [max]="999"
                            ></a-counter>
                        </div>
                    }
                    @if (form().controls.capacity) {
                        <div class="field">
                            <label for="capacity">
                                {{ 'ZONES.CAPACITY' | translate }}
                            </label>
                            <a-counter
                                formControlName="capacity"
                                [min]="0"
                                [max]="999"
                            ></a-counter>
                        </div>
                    }
                </div>
                @if (form().controls.map_id) {
                    <div class="field">
                        <label for="map">{{
                            'ZONES.MAP_URL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="map"
                                [placeholder]="'ZONES.MAP_URL' | translate"
                                formControlName="map_id"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.images) {
                    <div class="field">
                        <label for="images">{{
                            'COMMON.IMAGES' | translate
                        }}</label>
                        <image-list-field
                            name="images"
                            formControlName="images"
                        ></image-list-field>
                    </div>
                }
            </form>
        }
    `, imports: [
      ImageListFieldComponent,
      ReactiveFormsModule,
      TranslatePipe,
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      CounterComponent,
      MatAutocompleteModule,
      MatChipsModule,
      ItemSearchFieldComponent
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneFormComponent, { className: "ZoneFormComponent", filePath: "src/app/ui/forms/zone-form.component.ts", lineNumber: 299 });
})();

// src/app/users/users.utilities.ts
function validateMatch(name) {
  return (control) => {
    const group = control.parent;
    if (group) {
      const value = group.controls[name] ? group.controls[name].value : "";
      return value !== control.value ? { match: true } : null;
    }
    return null;
  };
}
function generateUserFormFields(user) {
  const fields = {
    authority_id: new FormControl(user?.authority_id || "", [
      Validators.required
    ]),
    first_name: new FormControl(user?.first_name || user?.name || "", [
      Validators.required
    ]),
    last_name: new FormControl(user?.last_name || "", [
      Validators.required
    ]),
    email: new FormControl(user?.email || "", [
      Validators.email,
      Validators.required
    ]),
    staff_id: new FormControl(user?.staff_id || ""),
    support: new FormControl(user?.support || false),
    sys_admin: new FormControl(user?.sys_admin || false),
    locatable: new FormControl(user?.locatable || false),
    groups: new FormControl(user?.groups || []),
    password: new FormControl("", !user?.id ? [Validators.required] : void 0),
    confirm_password: new FormControl("", [validateMatch("password")]),
    card_number: new FormControl(user?.card_number || ""),
    image: new FormControl(user?.image || "", [validateURL])
  };
  if (user?.id) {
    fields.authority_id.disable();
  }
  fields.password.valueChanges.subscribe(() => {
    fields.confirm_password.updateValueAndValidity();
  });
  return new FormGroup(fields);
}

// src/app/zones/zones.utilites.ts
function generateZoneFormFields(zone) {
  const fields = {
    id: new FormControl(zone?.id),
    name: new FormControl(zone?.name || "", [Validators.required]),
    tags: new FormControl(zone?.tags || []),
    description: new FormControl(zone?.description || ""),
    parent_zone: new FormControl(null),
    parent_id: new FormControl(zone?.parent_id),
    location: new FormControl(zone?.location),
    display_name: new FormControl(zone?.display_name),
    code: new FormControl(zone?.code),
    type: new FormControl(zone?.type),
    count: new FormControl(zone?.count),
    capacity: new FormControl(zone?.capacity),
    map_id: new FormControl(zone?.map_id),
    timezone: new FormControl(zone?.timezone),
    images: new FormControl(zone?.images)
  };
  fields.parent_zone.valueChanges.subscribe((parent_zone) => fields.parent_id.setValue(parent_zone?.id));
  return new FormGroup(fields);
}

// src/app/overlays/item-modal.component.ts
function ItemCreateUpdateModalComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "repository-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "trigger-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "system-trigger-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "application-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "domain-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "driver-form", 3);
    \u0275\u0275listener("waiting", function ItemCreateUpdateModalComponent_Case_9_Template_driver_form_waiting_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.can_submit = !$event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zone-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "module-form", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form)("readonly", ctx_r0.readonly);
  }
}
function ItemCreateUpdateModalComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "broker-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function ItemCreateUpdateModalComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "system-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
var ItemCreateUpdateModalComponent = class _ItemCreateUpdateModalComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
  /** Emitter for user action on the modal */
  event = new EventEmitter();
  /** Whether the item is being editing */
  edit;
  /** Item to edit */
  item;
  /** Saved version of the item */
  result;
  /** List of the form fields needed for the item */
  form;
  /** Loading status for the item request is being processed */
  loading;
  /** Whether user is able to submit */
  can_submit = true;
  get name() {
    return this._data.name;
  }
  get readonly() {
    return !!this._data.readonly;
  }
  get item_type() {
    if (this.item instanceof Tr) {
      return "system";
    } else if (this.item instanceof Mr) {
      return "module";
    } else if (this.item instanceof vn) {
      return "zone";
    } else if (this.item instanceof Ir) {
      return "driver";
    } else if (this.item instanceof Jo) {
      return "user";
    } else if (this.item instanceof Co) {
      return "domain";
    } else if (this.item instanceof Mo) {
      return "application";
    } else if (this.item instanceof Re && this._data.external_save) {
      return "system-trigger";
    } else if (this.item instanceof Re) {
      return "trigger";
    } else if (this.item instanceof Wo) {
      return "repository";
    } else if (this.item instanceof Uo) {
      return "broker";
    }
  }
  /**
   * Generate the form fields for the item being handled
   */
  generateFormData() {
    if (this.item instanceof Tr) {
      return generateSystemsFormFields(this.item);
    } else if (this.item instanceof Mr) {
      return generateModuleFormFields(this.item);
    } else if (this.item instanceof vn) {
      return generateZoneFormFields(this.item);
    } else if (this.item instanceof Ir) {
      return generateDriverFormFields(this.item);
    } else if (this.item instanceof Jo) {
      return generateUserFormFields(this.item);
    } else if (this.item instanceof Co) {
      return generateDomainFormFields(this.item);
    } else if (this.item instanceof Mo) {
      return generateApplicationFormFields(this.item);
    } else if (this.item instanceof Re && this._data.external_save) {
      return generateTriggerSettingsFormFields(this.item);
    } else if (this.item instanceof Re) {
      return generateTriggerFormFields(this.item);
    } else if (this.item instanceof Wo) {
      return generateRepositoryFormFields(this.item);
    } else if (this.item instanceof Uo) {
      return generateBrokerFormFields(this.item);
    }
    return new UntypedFormGroup({});
  }
  ngOnInit() {
    this.item = this._data.item;
    this.edit = !!this._data.item.id;
    this.form = this.generateFormData();
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  /**
   * Save changes and create item if it does not exist
   */
  submit() {
    this.form.markAllAsTouched();
    if (!this.item || !this.form.valid) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    this.loading = i18n(`${this.name}.SAVING`);
    this._dialog_ref.disableClose = true;
    const item = this.item.id ? Ki(__spreadValues(__spreadValues({}, this.item.toJSON()), this.form.value), this.item_type === "user" ? [void 0, null, ""] : [void 0, null]) : __spreadValues(__spreadValues({}, this.item.toJSON()), this.form.value);
    if (this._data.external_save) {
      this.event.emit({ reason: "action", metadata: item });
      return;
    }
    this._data.save(item).subscribe((item2) => {
      this.result = item2;
      this._dialog_ref.disableClose = false;
      this.event.emit({ reason: "done", metadata: { item: item2 } });
      notifySuccess(i18n(`${this.name}.SAVE_SUCCESS`));
      if (!this.form.value.id && this.form.controls.settings) {
        this.newSettings(item2, this.form.controls.settings.value).then(() => this._dialog_ref.close());
      } else {
        this._dialog_ref.close();
      }
    }, async (err) => {
      this.loading = null;
      this._dialog_ref.disableClose = false;
      notifyError(i18n(`${this.name}.SAVE_ERROR`, {
        error: JSON.stringify(await err.text() || err.message || err)
      }));
    });
  }
  /**
   * Save initial settings for resources
   */
  async newSettings(item, settings_string) {
    const new_settings = new Se({
      parent_id: item.id,
      settings_string,
      encryption_level: Te.Support
    });
    const settings = await Sc(new_settings).toPromise().catch((err) => {
      this.loading = null;
      notifyError(`Error saving settings for ${item.name || item.id}. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
    item.settings[Te.None] = settings;
  }
  /**
   * Close the modal
   */
  close() {
    this._dialog_ref.close();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ItemCreateUpdateModalComponent_BaseFactory;
    return function ItemCreateUpdateModalComponent_Factory(__ngFactoryType__) {
      return (\u0275ItemCreateUpdateModalComponent_BaseFactory || (\u0275ItemCreateUpdateModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ItemCreateUpdateModalComponent)))(__ngFactoryType__ || _ItemCreateUpdateModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemCreateUpdateModalComponent, selectors: [["item-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 7, consts: [[3, "save", "heading", "loading"], [3, "form"], [3, "form", "readonly"], [3, "waiting", "form"]], template: function ItemCreateUpdateModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "uppercase");
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275listener("save", function ItemCreateUpdateModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(3, ItemCreateUpdateModalComponent_Case_3_Template, 1, 1, "repository-form", 1)(4, ItemCreateUpdateModalComponent_Case_4_Template, 1, 1, "trigger-form", 1)(5, ItemCreateUpdateModalComponent_Case_5_Template, 1, 1, "system-trigger-form", 1)(6, ItemCreateUpdateModalComponent_Case_6_Template, 1, 1, "application-form", 1)(7, ItemCreateUpdateModalComponent_Case_7_Template, 1, 1, "domain-form", 1)(8, ItemCreateUpdateModalComponent_Case_8_Template, 1, 1, "user-form", 1)(9, ItemCreateUpdateModalComponent_Case_9_Template, 1, 1, "driver-form", 1)(10, ItemCreateUpdateModalComponent_Case_10_Template, 1, 1, "zone-form", 1)(11, ItemCreateUpdateModalComponent_Case_11_Template, 1, 2, "module-form", 2)(12, ItemCreateUpdateModalComponent_Case_12_Template, 1, 1, "broker-form", 1)(13, ItemCreateUpdateModalComponent_Case_13_Template, 1, 1, "system-form", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(2, 5, \u0275\u0275pipeBind1(1, 3, ctx.name + ((ctx.name.includes("ADMIN") || ctx.name.startsWith("DOMAINS.") ? "_" : ".") + (ctx.item && ctx.edit ? "EDIT" : "NEW")))))("loading", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_2_0 = ctx.item_type) === "repository" ? 3 : tmp_2_0 === "trigger" ? 4 : tmp_2_0 === "system-trigger" ? 5 : tmp_2_0 === "application" ? 6 : tmp_2_0 === "domain" ? 7 : tmp_2_0 === "user" ? 8 : tmp_2_0 === "driver" ? 9 : tmp_2_0 === "zone" ? 10 : tmp_2_0 === "module" ? 11 : tmp_2_0 === "broker" ? 12 : 13);
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    CommonModule,
    RepositoryFormComponent,
    TriggerFormComponent,
    SystemTriggerFormComponent,
    ApplicationFormComponent,
    DomainFormComponent,
    UserFormComponent,
    DriverFormComponent,
    ZoneFormComponent,
    ModuleFormComponent,
    BrokerFormComponent,
    SystemFormComponent,
    UpperCasePipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemCreateUpdateModalComponent, [{
    type: Component,
    args: [{ selector: "item-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                name +
                    ((name.includes('ADMIN') || name.startsWith('DOMAINS.')
                        ? '_'
                        : '.') +
                        (item && edit ? 'EDIT' : 'NEW'))
                    | uppercase
                    | translate
            "
            [loading]="loading"
            (save)="submit()"
        >
            @switch (item_type) {
                @case ('repository') {
                    <repository-form [form]="form" />
                }
                @case ('trigger') {
                    <trigger-form [form]="form" />
                }
                @case ('system-trigger') {
                    <system-trigger-form [form]="form" />
                }
                @case ('application') {
                    <application-form [form]="form" />
                }
                @case ('domain') {
                    <domain-form [form]="form" />
                }
                @case ('user') {
                    <user-form [form]="form" />
                }
                @case ('driver') {
                    <driver-form
                        [form]="form"
                        (waiting)="can_submit = !$event"
                    />
                }
                @case ('zone') {
                    <zone-form [form]="form" />
                }
                @case ('module') {
                    <module-form [form]="form" [readonly]="readonly" />
                }
                @case ('broker') {
                    <broker-form [form]="form" />
                }
                @default {
                    <system-form [form]="form" />
                }
            }
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      CommonModule,
      TranslatePipe,
      RepositoryFormComponent,
      TriggerFormComponent,
      SystemTriggerFormComponent,
      ApplicationFormComponent,
      DomainFormComponent,
      UserFormComponent,
      DriverFormComponent,
      ZoneFormComponent,
      ModuleFormComponent,
      BrokerFormComponent,
      SystemFormComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemCreateUpdateModalComponent, { className: "ItemCreateUpdateModalComponent", filePath: "src/app/overlays/item-modal.component.ts", lineNumber: 145 });
})();

export {
  addMinutes,
  isAfter,
  validateJSONString,
  load,
  dump,
  validateYAML,
  generateTriggerConditionForm,
  generateTriggerActionForm,
  SanitizePipe,
  ItemSearchFieldComponent,
  TIMEZONES_IANA,
  ItemCreateUpdateModalComponent
};
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT *)
*/
//# sourceMappingURL=chunk-J4WOSFCE.js.map
