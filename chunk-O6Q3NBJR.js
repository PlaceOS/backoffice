import {
  startOfMinute
} from "./chunk-H7IPQCTA.js";
import {
  ExecuteMethodFieldComponent
} from "./chunk-B7Q6KCSA.js";
import "./chunk-D6EVRHUZ.js";
import {
  DebugOutputComponent
} from "./chunk-KUHIXTWR.js";
import "./chunk-VAIKCWTQ.js";
import "./chunk-W7JULZ3J.js";
import {
  d
} from "./chunk-O72O3CR4.js";
import {
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent,
  isBefore
} from "./chunk-ZQQKA6UB.js";
import {
  ActiveItemService,
  CustomTooltipComponent,
  ExtensionOutletComponent,
  FullscreenModalShellComponent,
  ItemSearchFieldComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  PlaceDebugService,
  SanitizePipe,
  SidebarMenuComponent,
  SimpleTableComponent,
  TIMEZONES_IANA,
  addMinutes,
  calculateModuleIndex,
  extensionsForItem,
  generateTriggerActionForm,
  generateTriggerConditionForm,
  isAfter,
  moveItemInArray,
  openConfirmModal
} from "./chunk-JDP5FFMI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TYVAN3UY.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  MatTooltip,
  MatTooltipModule,
  SettingsToggleComponent,
  addDays,
  notifyError,
  notifySuccess
} from "./chunk-EWUI732O.js";
import {
  DateFromPipe,
  getRoundingMethod
} from "./chunk-53JJL3R3.js";
import {
  COMMA,
  ENTER,
  IconComponent,
  MatOption,
  MatRipple,
  MatRippleModule,
  SPACE
} from "./chunk-L3UICUJN.js";
import {
  SettingsService,
  TranslatePipe,
  format,
  getDefaultOptions,
  isSameDay,
  normalizeDates,
  startOfDay,
  startOfWeek
} from "./chunk-V3NTFP3B.js";
import {
  $c,
  AsyncHandler,
  Bc,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Injectable,
  Injector,
  Input,
  JsonPipe,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  Output,
  Pipe,
  Qo,
  Re,
  ReactiveFormsModule,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SlicePipe,
  Uc,
  Uu,
  Validators,
  ViewChild,
  Vo,
  Yc,
  __spreadProps,
  __spreadValues,
  combineLatest,
  constructFrom,
  first,
  forwardRef,
  i18n,
  inject,
  input,
  lastValueFrom,
  map,
  model,
  numberToPosition,
  of,
  padLength,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  tap,
  toDate,
  viewChild,
  zc,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵresetView,
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
} from "./chunk-ZKZAJWA3.js";

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/getDaysInMonth.js
function getDaysInMonth(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

// node_modules/date-fns/setDay.js
function setDay(date, day, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const date_ = toDate(date, options?.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return addDays(date_, diff, options);
}

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// node_modules/date-fns/roundToNearestMinutes.js
function roundToNearestMinutes(date, options) {
  const nearestTo = options?.nearestTo ?? 1;
  if (nearestTo < 1 || nearestTo > 30) return constructFrom(date, NaN);
  const date_ = toDate(date, options?.in);
  const fractionalSeconds = date_.getSeconds() / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1e3 / 60;
  const minutes = date_.getMinutes() + fractionalSeconds + fractionalMilliseconds;
  const method = options?.roundingMethod ?? "round";
  const roundingMethod = getRoundingMethod(method);
  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  date_.setMinutes(roundedMinutes, 0, 0);
  return date_;
}

// node_modules/date-fns/setMonth.js
function setMonth(date, month, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom(options?.in || date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

// node_modules/date-fns/set.js
function set(date, values, options) {
  let _date = toDate(date, options?.in);
  if (isNaN(+_date)) return constructFrom(options?.in || date, NaN);
  if (values.year != null) _date.setFullYear(values.year);
  if (values.month != null) _date = setMonth(_date, values.month);
  if (values.date != null) _date.setDate(values.date);
  if (values.hours != null) _date.setHours(values.hours);
  if (values.minutes != null) _date.setMinutes(values.minutes);
  if (values.seconds != null) _date.setSeconds(values.seconds);
  if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
  return _date;
}

// src/app/ui/pipes/format-list.pipe.ts
var FormatListPipe = class _FormatListPipe {
  transform(value) {
    return value.join("\n");
  }
  static \u0275fac = function FormatListPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormatListPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "formatList", type: _FormatListPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormatListPipe, [{
    type: Pipe,
    args: [{
      name: "formatList"
    }]
  }], null, null);
})();

// src/app/ui/forms/trigger-action-modal.component.ts
var _c0 = ["chipList"];
var _c1 = () => ({ standalone: true });
var _c2 = (a0) => ({ item: a0 });
function TriggerActionModalComponent_Conditional_2_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r1.name, " ");
  }
}
function TriggerActionModalComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5)(5, "mat-select", 6);
    \u0275\u0275repeaterCreate(6, TriggerActionModalComponent_Conditional_2_Conditional_1_For_7_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "TRIGGERS.ACTION_FIELD_TYPE"), ": ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.action_types);
  }
}
function TriggerActionModalComponent_Conditional_2_Case_2_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 12);
    \u0275\u0275listener("removed", function TriggerActionModalComponent_Conditional_2_Case_2_Conditional_0_For_11_Template_mat_chip_row_removed_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeEmail(item_r5));
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(5, _c2, item_r5)));
  }
}
function TriggerActionModalComponent_Conditional_2_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 9)(7, "mat-chip-grid", 10, 0);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275repeaterCreate(10, TriggerActionModalComponent_Conditional_2_Case_2_Conditional_0_For_11_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 11);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TriggerActionModalComponent_Conditional_2_Case_2_Conditional_0_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.new_email, $event) || (ctx_r1.new_email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("matChipInputTokenEnd", function TriggerActionModalComponent_Conditional_2_Case_2_Conditional_0_Template_input_matChipInputTokenEnd_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.addEmail($event.value);
      return \u0275\u0275resetView(ctx_r1.new_email = "");
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r6 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.emails.touched && ctx_r1.form.controls.emails.errors);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "TRIGGERS.ACTION_EMAIL_ADDRESS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(9, 12, "TRIGGERS.ACTION_EMAIL_ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.email_list);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.new_email);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c1))("placeholder", \u0275\u0275pipeBind1(13, 14, "TRIGGERS.ACTION_EMAIL_ADDRESS_LIST"))("matChipInputFor", chipList_r6)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function TriggerActionModalComponent_Conditional_2_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "textarea", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "TRIGGERS.ACTION_EMAIL_BODY"));
  }
}
function TriggerActionModalComponent_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TriggerActionModalComponent_Conditional_2_Case_2_Conditional_0_Template, 14, 17, "div", 3);
    \u0275\u0275conditionalCreate(1, TriggerActionModalComponent_Conditional_2_Case_2_Conditional_1_Template, 6, 3, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.form.controls.emails ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.content ? 1 : -1);
  }
}
function TriggerActionModalComponent_Conditional_2_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "execute-method-field", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "TRIGGERS.ACTION_EXECUTE_SELECT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("system", ctx_r1.system)("can_execute", false);
  }
}
function TriggerActionModalComponent_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TriggerActionModalComponent_Conditional_2_Case_3_Conditional_0_Template, 5, 5, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.form.controls.method_call ? 0 : -1);
  }
}
function TriggerActionModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275conditionalCreate(1, TriggerActionModalComponent_Conditional_2_Conditional_1_Template, 8, 3, "div", 3);
    \u0275\u0275conditionalCreate(2, TriggerActionModalComponent_Conditional_2_Case_2_Template, 2, 2)(3, TriggerActionModalComponent_Conditional_2_Case_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.action_type ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.form.controls.action_type.value) === "emails" ? 2 : 3);
  }
}
var TriggerActionModalComponent = class _TriggerActionModalComponent extends AsyncHandler {
  _dialog = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  /** Emitter for events on the modal */
  event = new EventEmitter();
  /** Whether actions are loading */
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Form fields for trigger action */
  form = generateTriggerActionForm(this._data.action);
  /** Store for changes to actions */
  actions;
  /** List of seperators for storing emails */
  separators = [ENTER, COMMA, SPACE];
  /** Variable to hold new email addresses */
  new_email = "";
  chip_list = viewChild("chipList", ...ngDevMode ? [{ debugName: "chip_list" }] : []);
  /** List of available trigger action types */
  action_types = [];
  /** Whether the triggers is new or not */
  get is_new() {
    return !!this._data.action;
  }
  /** Template system to use for status variable bindings */
  get system() {
    return this._data.system;
  }
  /** Template system to use for status variable bindings */
  get trigger() {
    return this._data.trigger;
  }
  get email_list() {
    return (this.form && this.form.controls.emails ? this.form.controls.emails.value : null) || [];
  }
  ngOnInit() {
    this.action_types = [
      { id: "function", name: i18n("TRIGGERS.ACTION_EXECUTE") },
      { id: "emails", name: i18n("TRIGGERS.ACTION_EMAIL") }
    ];
  }
  /**
   * Add the given emails to the list
   * @param email New email
   */
  addEmail(email) {
    if (!email) {
      return;
    }
    const email_list = this.email_list;
    if (email_list.indexOf(email) < 0) {
      email_list.push(email);
    }
    this.form.controls.emails.setValue(email_list);
    this.chip_list().errorState = !this.form.controls.emails.valid;
  }
  /**
   * Remove given email from the list
   * @param email Exisiting email
   */
  removeEmail(email) {
    const email_list = this.email_list;
    const index = email_list.indexOf(email);
    if (index >= 0) {
      email_list.splice(index, 1);
    }
    this.form.controls.emails.setValue(email_list);
    this.chip_list().errorState = !this.form.controls.emails.valid;
  }
  save() {
    this.form.markAllAsTouched();
    if (this.form.controls.action_type.value === "emails" && !this.form.valid || this.form.controls.action_type.value === "function" && !this.form.value.method_call) {
      return;
    }
    this.loading.set("Save trigger action...");
    if (this.form.value.action_type === "emails") {
      this.updateMailers();
    } else {
      this.updateFunctions();
    }
    Bc(this.trigger.id, __spreadProps(__spreadValues({}, this.trigger), {
      actions: this.actions
    })).toPromise().then((item) => {
      this.event.emit({
        reason: "done",
        metadata: { trigger: item }
      });
      notifySuccess(`Successfully ${this.is_new ? "added" : "updated"} condition to trigger`);
      this._dialog.close();
    }, (err) => {
      this.loading.set("");
      notifyError(`Error ${this.is_new ? "adding" : "updating"} condition to trigger. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
  }
  updateMailers() {
    const mailers = this.trigger.actions.mailers;
    const new_mailer = {
      emails: this.form.value.emails,
      content: this.form.value.content
    };
    if (this._data.action) {
      const old_mailer = JSON.stringify(this._data.action || {});
      const index = mailers.findIndex((a_mailer) => JSON.stringify(a_mailer) === old_mailer);
      mailers.splice(index, 1, new_mailer);
    } else {
      mailers.push(new_mailer);
    }
    this.actions = __spreadProps(__spreadValues({}, this.trigger.actions), { mailers });
  }
  updateFunctions() {
    const functions = this.trigger.actions.functions;
    if (this._data.action) {
      const old_function = JSON.stringify(this._data.action);
      const index = functions.findIndex((fn) => JSON.stringify(fn) === old_function);
      functions.splice(index, 1, this.form.value.method_call);
    } else {
      functions.push(this.form.value.method_call);
    }
    this.actions = __spreadProps(__spreadValues({}, this.trigger.actions), { functions });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TriggerActionModalComponent_BaseFactory;
    return function TriggerActionModalComponent_Factory(__ngFactoryType__) {
      return (\u0275TriggerActionModalComponent_BaseFactory || (\u0275TriggerActionModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TriggerActionModalComponent)))(__ngFactoryType__ || _TriggerActionModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerActionModalComponent, selectors: [["trigger-action-modal"]], viewQuery: function TriggerActionModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.chip_list, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 5, consts: [["chipList", ""], [3, "save", "heading", "loading"], ["trigger-action", "", 1, "flex", "w-full", "max-w-[calc(100vw-2rem)]", "flex-col", 3, "formGroup"], [1, "field"], ["for", "type"], ["appearance", "outline"], ["name", "type", "formControlName", "action_type"], [3, "value"], ["for", "description"], ["appearance", "outline", 1, "w-full"], [3, "aria-label"], [3, "ngModelChange", "matChipInputTokenEnd", "ngModel", "ngModelOptions", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""], ["for", "content"], ["matInput", "", "name", "content", "placeholder", "Email body contents...", "formControlName", "content"], ["formControlName", "method_call", 3, "system", "can_execute"]], template: function TriggerActionModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function TriggerActionModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(2, TriggerActionModalComponent_Conditional_2_Template, 4, 3, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 3, ctx.is_new ? "TRIGGERS.ACTION_NEW" : "TRIGGERS.ACTION_EDIT"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form ? 2 : -1);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    MatFormFieldModule,
    MatFormField,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatInputModule,
    MatInput,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    FullscreenModalShellComponent,
    ExecuteMethodFieldComponent,
    IconComponent,
    MatSelectModule,
    MatSelect,
    MatOption,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerActionModalComponent, [{
    type: Component,
    args: [{ selector: "trigger-action-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (is_new ? 'TRIGGERS.ACTION_NEW' : 'TRIGGERS.ACTION_EDIT')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            @if (form) {
                <form
                    trigger-action
                    class="flex w-full max-w-[calc(100vw-2rem)] flex-col"
                    [formGroup]="form"
                >
                    @if (form.controls.action_type) {
                        <div class="field">
                            <label for="type">
                                {{ 'TRIGGERS.ACTION_FIELD_TYPE' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="type"
                                    formControlName="action_type"
                                >
                                    @for (type of action_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @switch (form.controls.action_type.value) {
                        @case ('emails') {
                            @if (form.controls.emails) {
                                <div class="field">
                                    <label
                                        for="description"
                                        [class.error]="
                                            form.controls.emails.touched &&
                                            form.controls.emails.errors
                                        "
                                    >
                                        {{
                                            'TRIGGERS.ACTION_EMAIL_ADDRESS'
                                                | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-chip-grid
                                            #chipList
                                            [aria-label]="
                                                'TRIGGERS.ACTION_EMAIL_ADDRESS'
                                                    | translate
                                            "
                                        >
                                            @for (
                                                item of email_list;
                                                track item
                                            ) {
                                                <mat-chip-row
                                                    (removed)="
                                                        removeEmail(item)
                                                    "
                                                >
                                                    <div
                                                        class="max-w-md truncate"
                                                    >
                                                        {{ item }}
                                                    </div>
                                                    <button
                                                        matChipRemove
                                                        [attr.aria-label]="
                                                            'COMMON.REMOVE_ITEM'
                                                                | translate
                                                                    : {
                                                                          item: item,
                                                                      }
                                                        "
                                                    >
                                                        <icon>cancel</icon>
                                                    </button>
                                                </mat-chip-row>
                                            }
                                        </mat-chip-grid>
                                        <input
                                            [(ngModel)]="new_email"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [placeholder]="
                                                'TRIGGERS.ACTION_EMAIL_ADDRESS_LIST'
                                                    | translate
                                            "
                                            [matChipInputFor]="chipList"
                                            [matChipInputSeparatorKeyCodes]="
                                                separators
                                            "
                                            [matChipInputAddOnBlur]="true"
                                            (matChipInputTokenEnd)="
                                                addEmail($event.value);
                                                new_email = ''
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                            }
                            @if (form.controls.content) {
                                <div class="field">
                                    <label for="content">{{
                                        'TRIGGERS.ACTION_EMAIL_BODY' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <textarea
                                            matInput
                                            name="content"
                                            placeholder="Email body contents..."
                                            formControlName="content"
                                        ></textarea>
                                    </mat-form-field>
                                </div>
                            }
                        }
                        @default {
                            @if (form.controls.method_call) {
                                <div class="field">
                                    <label for="content">
                                        {{
                                            'TRIGGERS.ACTION_EXECUTE_SELECT'
                                                | translate
                                        }}
                                    </label>
                                    <execute-method-field
                                        formControlName="method_call"
                                        [system]="system"
                                        [can_execute]="false"
                                    ></execute-method-field>
                                </div>
                            }
                        }
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      FormsModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      MatInputModule,
      MatChipsModule,
      FullscreenModalShellComponent,
      ExecuteMethodFieldComponent,
      TranslatePipe,
      IconComponent,
      MatSelectModule
    ] }]
  }], null, { event: [{
    type: Output
  }], chip_list: [{ type: ViewChild, args: ["chipList", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerActionModalComponent, { className: "TriggerActionModalComponent", filePath: "src/app/ui/forms/trigger-action-modal.component.ts", lineNumber: 210 });
})();

// src/app/ui/forms/trigger-condition-form/comparison-form.component.ts
var _c02 = () => ({ side: "left" });
var _c12 = () => ({ standalone: true });
var _c22 = () => ({ side: "right" });
function TriggerConditionComparisonFormComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "TRIGGERS.COMPARE_VARIABLE_ERROR"), " ");
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const operation_r1 = ctx.$implicit;
    \u0275\u0275property("value", operation_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", operation_r1.name, " ");
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275repeaterCreate(7, TriggerConditionComparisonFormComponent_Conditional_0_Conditional_3_For_8_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "TRIGGERS.COMPARE_OP"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "TRIGGERS.COMPARE_OP_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.compare_types);
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r4.name, " ");
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_4_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.rhs_type, $event) || (ctx_r1.rhs_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_4_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form().controls.right.setValue(null));
    });
    \u0275\u0275repeaterCreate(6, TriggerConditionComparisonFormComponent_Conditional_0_Conditional_4_For_7_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "TRIGGERS.COMPARE_TO"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rhs_type);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c12));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.right_var_type);
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275elementStart(6, "mat-error");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "TRIGGERS.COMPARE_TO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "TRIGGERS.COMPARE_JSON_REQUIRED"));
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TriggerConditionComparisonFormComponent_Conditional_0_Conditional_6_ng_container_0_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const status_variable_form_r5 = \u0275\u0275reference(2);
    \u0275\u0275property("ngTemplateOutlet", status_variable_form_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(2, _c22));
  }
}
function TriggerConditionComparisonFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, TriggerConditionComparisonFormComponent_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275conditionalCreate(2, TriggerConditionComparisonFormComponent_Conditional_0_Conditional_2_Template, 3, 3, "div", 3);
    \u0275\u0275conditionalCreate(3, TriggerConditionComparisonFormComponent_Conditional_0_Conditional_3_Template, 9, 6, "div", 4);
    \u0275\u0275conditionalCreate(4, TriggerConditionComparisonFormComponent_Conditional_0_Conditional_4_Template, 8, 6, "div", 4);
    \u0275\u0275conditionalCreate(5, TriggerConditionComparisonFormComponent_Conditional_0_Conditional_5_Template, 9, 6, "div", 4)(6, TriggerConditionComparisonFormComponent_Conditional_0_Conditional_6_Template, 1, 3, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const status_variable_form_r5 = \u0275\u0275reference(2);
    \u0275\u0275property("formGroup", ctx_r1.form());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", status_variable_form_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(7, _c02));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.left.touched && ctx_r1.form().controls.left.errors ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.operator ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.operator ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rhs_type === "constant" && ctx_r1.form().controls.right ? 5 : 6);
  }
}
function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r8 = ctx.$implicit;
    \u0275\u0275property("value", mod_r8.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r8.name, " ");
  }
}
function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_1_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const side_r7 = \u0275\u0275nextContext().side;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1[side_r7 + "_side"].mod, $event) || (ctx_r1[side_r7 + "_side"].mod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_1_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const side_r7 = \u0275\u0275nextContext().side;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadSystemStatusVariables($event, side_r7));
    });
    \u0275\u0275repeaterCreate(7, TriggerConditionComparisonFormComponent_ng_template_1_Conditional_1_For_8_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const side_r7 = \u0275\u0275nextContext().side;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "MODULES.SINGULAR"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1[side_r7 + "_side"].mod);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c12))("placeholder", \u0275\u0275pipeBind1(6, 6, "TRIGGERS.COMPARE_MODULE_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.module_list);
  }
}
function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r10 = ctx.$implicit;
    \u0275\u0275property("value", mod_r10.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r10.name, " ");
  }
}
function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_2_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const side_r7 = \u0275\u0275nextContext().side;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1[side_r7 + "_side"].status, $event) || (ctx_r1[side_r7 + "_side"].status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_2_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r9);
      const side_r7 = \u0275\u0275nextContext().side;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateFormForSide(side_r7));
    });
    \u0275\u0275repeaterCreate(7, TriggerConditionComparisonFormComponent_ng_template_1_Conditional_2_For_8_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const side_r7 = \u0275\u0275nextContext().side;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", side_r7 + "-status-var");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "TRIGGERS.COMPARE_VARIABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", side_r7 + "-status-var");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1[side_r7 + "_side"].status);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c12))("placeholder", \u0275\u0275pipeBind1(6, 8, "TRIGGERS.COMPARE_VARIABLE_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1[side_r7 + "_status_variables"]);
  }
}
function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "input", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function TriggerConditionComparisonFormComponent_ng_template_1_Conditional_3_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const side_r7 = \u0275\u0275nextContext().side;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1[side_r7 + "_side"].keys = $event.split(",");
      return \u0275\u0275resetView(ctx_r1.updateFormForSide(side_r7));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const side_r7 = \u0275\u0275nextContext().side;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", side_r7 + "-subkeys");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "TRIGGERS.COMPARE_SUBKEYS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1[side_r7 + "_keys"])("name", side_r7 + "-subkeys")("placeholder", \u0275\u0275pipeBind1(6, 7, "TRIGGERS.COMPARE_SUBKEYS_PLACEHOLDER"));
  }
}
function TriggerConditionComparisonFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, TriggerConditionComparisonFormComponent_ng_template_1_Conditional_1_Template, 9, 9, "div", 4);
    \u0275\u0275conditionalCreate(2, TriggerConditionComparisonFormComponent_ng_template_1_Conditional_2_Template, 9, 11, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, TriggerConditionComparisonFormComponent_ng_template_1_Conditional_3_Template, 7, 9, "div", 4);
  }
  if (rf & 2) {
    const side_r7 = ctx.side;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1[side_r7 + "_side"] ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1[side_r7 + "_status_variables"] == null ? null : ctx_r1[side_r7 + "_status_variables"].length) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1[side_r7 + "_status_variables"] && ctx_r1[side_r7 + "_status_variables"].length ? 3 : -1);
  }
}
var TriggerConditionComparisonFormComponent = class _TriggerConditionComparisonFormComponent {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** Systems used for templating the status variables */
  system = input(void 0, ...ngDevMode ? [{ debugName: "system" }] : []);
  /** List of modules associated with the template system */
  modules = [];
  /** List of status variables associated with the selected module */
  module_list = [];
  /** List of status variables associated with the selected module */
  left_status_variables = [];
  /** List of status variables associated with the selected module */
  right_status_variables = [];
  /** Type of value to compare the left hand side to */
  rhs_type = "constant";
  /** Type of value to compare the left hand side to */
  rhs_value;
  /** Status variable details for the left side of the comparison */
  left_side = { mod: "", status: "", keys: [] };
  /** Status variable details for the right side of the comparison */
  right_side = {
    mod: "",
    status: "",
    keys: []
  };
  /** Types of trigger conditions */
  right_var_type = [];
  /** Allowed comparison operators */
  compare_types = [];
  get left_keys() {
    return this.left_side?.keys?.join(",") || "";
  }
  get right_keys() {
    return this.right_side?.keys?.join(",") || "";
  }
  ngOnInit() {
    this.right_var_type = [
      { id: "constant", name: i18n("TRIGGERS.COMPARE_CONSTANT") },
      { id: "status_var", name: i18n("TRIGGERS.COMPARE_VARIABLE") }
    ];
    this.compare_types = [
      {
        id: Vo.EQ,
        name: i18n("TRIGGERS.COMPARE_OP_EQUAL")
      },
      {
        id: Vo.NEQ,
        name: i18n("TRIGGERS.COMPARE_OP_NOT_EQUAL")
      },
      {
        id: Vo.GT,
        name: i18n("TRIGGERS.COMPARE_OP_GREATER")
      },
      {
        id: Vo.GTE,
        name: i18n("TRIGGERS.COMPARE_OP_GREATER_EQUAL")
      },
      {
        id: Vo.LT,
        name: i18n("TRIGGERS.COMPARE_OP_LESS")
      },
      {
        id: Vo.LTE,
        name: i18n("TRIGGERS.COMPARE_OP_LESS_EQUAL")
      },
      {
        id: Vo.AND,
        name: i18n("TRIGGERS.COMPARE_OP_AND")
      },
      {
        id: Vo.OR,
        name: i18n("TRIGGERS.COMPARE_OP_OR")
      },
      {
        id: Vo.XOR,
        name: i18n("TRIGGERS.COMPARE_OP_XOR")
      }
    ];
  }
  ngOnChanges(changes) {
    if (changes.system && this.system()) {
      this.loadSystemModules();
    }
  }
  updateFormForSide(side) {
    const form = this.form();
    if (form.controls[side]) {
      if (!this[side + "_side"].keys) {
        this[side + "_side"].keys = [];
      }
      form.controls[side].setValue(this[side + "_side"]);
    }
  }
  /**
   * Load the list of status variables for the given modules
   * @param module Module to list status variables
   */
  loadSystemStatusVariables(mod_name, side) {
    const name = (mod_name || "").split("_");
    if (!name[0]?.length)
      return;
    Uc(this.system().id, name.length > 1 ? name.slice(0, name.length - 1).join("_") : name[0], +name[name.length - 1] || 1).subscribe((var_map) => {
      if (Object.keys(var_map || {}).length <= 0) {
        var_map = { connected: true };
      }
      this[`${side}_status_variables`] = Object.keys(var_map).map((key) => ({
        id: key,
        name: key
      }));
      this.addExistingStatusVariables();
    }, () => notifyError(i18n("TRIGGERS.COMPARE_VARIABLE_LOAD_ERROR", {
      system: this.system().id,
      module: mod_name
    })));
  }
  /**
   * Load the list of modules for the active system
   */
  loadSystemModules() {
    const system = this.system();
    if (!system) {
      return;
    }
    Uu({ control_system_id: system.id }).pipe(map((resp) => resp.data)).subscribe((module_list) => {
      this.modules = module_list;
      const mod_list = this.system().modules;
      this.modules.sort((a, b) => mod_list.indexOf(a.id) - mod_list.indexOf(b.id));
      this.module_list = this.modules.map((mod) => {
        const name = mod.custom_name || mod.name || "Blank";
        const index = calculateModuleIndex(this.modules, mod);
        return {
          id: mod.id,
          name: `${name}_${index}`,
          keys: []
        };
      });
      this.addExistingModules();
    });
  }
  /**
   * Add pre-exisiting module detail to the available list
   */
  addExistingModules() {
    const form = this.form();
    if (form.controls.left && form.controls.left.value) {
      const module = form.controls.left.value.mod;
      if (!this.module_list.find((mod) => mod.name === module)) {
        this.module_list.unshift({
          id: "old_left_value",
          name: module,
          keys: []
        });
      }
      this.loadSystemStatusVariables(module, "left");
      this.left_side = form.controls.left.value;
    }
    if (form.controls.right && form.controls.right.value && form.controls.right.value.mod) {
      this.rhs_type = "status_var";
      const module = form.controls.right.value.mod;
      if (!this.module_list.find((mod) => mod.name === module)) {
        this.module_list.unshift({
          id: "old_right_value",
          name: module,
          keys: []
        });
      }
      this.loadSystemStatusVariables(module, "right");
      this.right_side = form.controls.right_side.value;
    }
  }
  /**
   * Add pre-exisiting status variables to the available list
   */
  addExistingStatusVariables() {
    if (this.left_side.status) {
      if (!this.left_status_variables.find((status) => status.name === this.left_side.status)) {
        this.left_status_variables.unshift({
          id: this.left_side.status,
          name: this.left_side.status,
          keys: []
        });
      }
    }
    if (this.right_side.status) {
      if (!this.right_status_variables.find((status) => status.name === this.right_side.status)) {
        this.right_status_variables.unshift({
          id: this.right_side.status,
          name: this.right_side.status,
          keys: []
        });
      }
    }
  }
  static \u0275fac = function TriggerConditionComparisonFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TriggerConditionComparisonFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerConditionComparisonFormComponent, selectors: [["trigger-condition-comparison-form"]], inputs: { form: [1, "form"], system: [1, "system"] }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 1, consts: [["status_variable_form", ""], [1, "trigger-condition", "form", "comparison", 3, "formGroup"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "error"], [1, "field"], ["for", "operator", "hidden", ""], ["appearance", "outline"], ["name", "operator", "formControlName", "operator", 3, "placeholder"], [3, "value"], ["for", "compared-to", "hidden", ""], ["name", "compared-to", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "constant", "hidden", ""], ["matInput", "", "name", "constant", "formControlName", "right", "placeholder", "true/false, 'string', 123.456"], [1, "fieldset"], ["for", "type"], ["name", "type", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "for"], [3, "ngModelChange", "name", "ngModel", "ngModelOptions", "placeholder"], ["matInput", "", 3, "ngModelChange", "ngModel", "name", "placeholder"]], template: function TriggerConditionComparisonFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TriggerConditionComparisonFormComponent_Conditional_0_Template, 7, 8, "div", 1);
      \u0275\u0275template(1, TriggerConditionComparisonFormComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, FormGroupDirective, FormControlName, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerConditionComparisonFormComponent, [{
    type: Component,
    args: [{ selector: "trigger-condition-comparison-form", template: `@if (form()) {
            <div class="trigger-condition form comparison" [formGroup]="form()">
                <ng-container
                    *ngTemplateOutlet="
                        status_variable_form;
                        context: { side: 'left' }
                    "
                ></ng-container>
                @if (
                    form().controls.left.touched && form().controls.left.errors
                ) {
                    <div class="error">
                        {{ 'TRIGGERS.COMPARE_VARIABLE_ERROR' | translate }}
                    </div>
                }
                @if (form().controls.operator) {
                    <div class="field">
                        <label for="operator" hidden>{{
                            'TRIGGERS.COMPARE_OP' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="operator"
                                formControlName="operator"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_OP_SELECT' | translate
                                "
                            >
                                @for (
                                    operation of compare_types;
                                    track operation
                                ) {
                                    <mat-option [value]="operation.id">
                                        {{ operation.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.operator) {
                    <div class="field">
                        <label for="compared-to" hidden>{{
                            'TRIGGERS.COMPARE_TO' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="compared-to"
                                [(ngModel)]="rhs_type"
                                (ngModelChange)="
                                    form().controls.right.setValue(null)
                                "
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (type of right_var_type; track type) {
                                    <mat-option [value]="type.id">
                                        {{ type.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (rhs_type === 'constant' && form().controls.right) {
                    <div class="field">
                        <label for="constant" hidden>{{
                            'TRIGGERS.COMPARE_TO' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="constant"
                                formControlName="right"
                                placeholder="true/false, 'string', 123.456"
                            />
                            <mat-error>{{
                                'TRIGGERS.COMPARE_JSON_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                } @else {
                    <ng-container
                        *ngTemplateOutlet="
                            status_variable_form;
                            context: { side: 'right' }
                        "
                    ></ng-container>
                }
            </div>
        }
        <ng-template #status_variable_form let-side="side">
            <div class="fieldset">
                @if (this[side + '_side']) {
                    <div class="field">
                        <label for="type">{{
                            'MODULES.SINGULAR' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="type"
                                [(ngModel)]="this[side + '_side'].mod"
                                (ngModelChange)="
                                    loadSystemStatusVariables($event, side)
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_MODULE_SELECT' | translate
                                "
                            >
                                @for (mod of module_list; track mod) {
                                    <mat-option [value]="mod.name">
                                        {{ mod.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (this[side + '_status_variables']?.length) {
                    <div class="field">
                        <label [for]="side + '-status-var'">{{
                            'TRIGGERS.COMPARE_VARIABLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [name]="side + '-status-var'"
                                [(ngModel)]="this[side + '_side'].status"
                                (ngModelChange)="updateFormForSide(side)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_VARIABLE_SELECT'
                                        | translate
                                "
                            >
                                @for (
                                    mod of this[side + '_status_variables'];
                                    track mod
                                ) {
                                    <mat-option [value]="mod.name">
                                        {{ mod.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </div>
            @if (
                this[side + '_status_variables'] &&
                this[side + '_status_variables'].length
            ) {
                <div class="field">
                    <label [for]="side + '-subkeys'">{{
                        'TRIGGERS.COMPARE_SUBKEYS' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="this[side + '_keys']"
                            (ngModelChange)="
                                this[side + '_side'].keys = $event.split(',');
                                updateFormForSide(side)
                            "
                            [name]="side + '-subkeys'"
                            [placeholder]="
                                'TRIGGERS.COMPARE_SUBKEYS_PLACEHOLDER'
                                    | translate
                            "
                        />
                    </mat-form-field>
                </div>
            }
        </ng-template>`, imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      FormsModule,
      MatSelectModule,
      MatInputModule,
      ReactiveFormsModule
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], system: [{ type: Input, args: [{ isSignal: true, alias: "system", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerConditionComparisonFormComponent, { className: "TriggerConditionComparisonFormComponent", filePath: "src/app/ui/forms/trigger-condition-form/comparison-form.component.ts", lineNumber: 220 });
})();

// src/app/ui/custom-fields/cron-input-field.component.ts
var VALID_INPUT = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "/",
  "-",
  ",",
  "Backspace",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Delete"
];
function listPattern(fieldPattern) {
  return `(?:${fieldPattern})(?:,(?:${fieldPattern}))*`;
}
var CronInputFieldComponent = class _CronInputFieldComponent {
  cron_string;
  form = new FormGroup({
    minute: new FormControl("*", [
      Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|[0-5]?\\d(?:-[0-5]?\\d)?(?:/\\d{1,2})?)"))
    ]),
    hour: new FormControl("*", [
      Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[01]?\\d|2[0-3])(?:-(?:[01]?\\d|2[0-3]))?(?:/\\d{1,2})?)"))
    ]),
    day: new FormControl("*", [
      Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[1-9]|[12]\\d|3[01])(?:-(?:[1-9]|[12]d|3[01]))?(?:/\\d{1,2})?)"))
    ]),
    month: new FormControl("*", [
      Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[1-9]|1[0-2])(?:-(?:[1-9]|1[0-2]))?(?:/\\d{1,2})?)"))
    ]),
    day_of_week: new FormControl("*", [
      Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|[0-6](?:-[0-6])?(?:/\\d{1,2})?)"))
    ])
  });
  registerOnChange = (fn) => this._onChange = fn;
  registerOnTouched = (fn) => this._onTouch = fn;
  _onChange;
  _onTouch;
  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      if (!this.form.valid)
        return;
      this.setValue(`${value.minute || "*"} ${value.hour || "*"} ${value.day || "*"} ${value.month || "*"} ${value.day_of_week || "*"}`);
    });
  }
  setValue(value) {
    this.cron_string = value;
    if (this._onChange)
      this._onChange(value);
  }
  writeValue(value) {
    if (!value)
      return;
    this.cron_string = value;
    const parts = value.split(" ");
    this.form.setValue({
      minute: parts[0] || "*",
      hour: parts[1] || "*",
      day: parts[2] || "*",
      month: parts[3] || "*",
      day_of_week: parts[4] || "*"
    });
  }
  preventInvalidCharacters(event) {
    console.log("Key:", event.key);
    if (!VALID_INPUT.includes(event.key))
      event.preventDefault();
  }
  static \u0275fac = function CronInputFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CronInputFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CronInputFieldComponent, selectors: [["cron-input-field"]], features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _CronInputFieldComponent),
      multi: true
    }
  ])], decls: 8, vars: 3, consts: [[1, "mb-1", "flex", "w-full", "items-center", "space-x-2", "rounded", "border", "border-base-300", "focus-within:border-base-content", "focus-within:outline-4", "focus-within:outline-base-content", 3, "formGroup"], ["placeholder", "*", "name", "minute", "formControlName", "minute", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-none", 3, "keydown"], ["placeholder", "*", "name", "hour", "formControlName", "hour", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-none"], ["placeholder", "*", "name", "day", "formControlName", "day", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-none"], ["placeholder", "*", "name", "month", "formControlName", "month", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-none"], ["placeholder", "*", "name", "day_of_week", "formControlName", "day_of_week", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-none"], [1, "text-xs", "text-error"]], template: function CronInputFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
      \u0275\u0275listener("keydown", function CronInputFieldComponent_Template_input_keydown_1_listener($event) {
        return ctx.preventInvalidCharacters($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "input", 2)(3, "input", 3)(4, "input", 4)(5, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275text(7, " CRON expression is invalid ");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("opacity-0", ctx.form.valid);
    }
  }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CronInputFieldComponent, [{
    type: Component,
    args: [{ selector: "cron-input-field", template: `
        <div
            class="mb-1 flex w-full items-center space-x-2 rounded border border-base-300 focus-within:border-base-content focus-within:outline-4 focus-within:outline-base-content"
            [formGroup]="form"
        >
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-none"
                placeholder="*"
                name="minute"
                formControlName="minute"
                (keydown)="preventInvalidCharacters($event)"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-none"
                placeholder="*"
                name="hour"
                formControlName="hour"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-none"
                placeholder="*"
                name="day"
                formControlName="day"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-none"
                placeholder="*"
                name="month"
                formControlName="month"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-none"
                placeholder="*"
                name="day_of_week"
                formControlName="day_of_week"
            />
        </div>
        <div class="text-xs text-error" [class.opacity-0]="form.valid">
            CRON expression is invalid
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CronInputFieldComponent),
        multi: true
      }
    ], imports: [ReactiveFormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CronInputFieldComponent, { className: "CronInputFieldComponent", filePath: "src/app/ui/custom-fields/cron-input-field.component.ts", lineNumber: 91 });
})();

// node_modules/date-fns-tz/dist/esm/_lib/tzTokenizeDate/index.js
var testDateFormatted = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));

// node_modules/date-fns-tz/dist/esm/format/formatters/index.js
var MILLISECONDS_IN_MINUTE = 60 * 1e3;

// src/app/common/timezone-helpers.ts
var LOCAL_TIMEZONE = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "Australia/Sydney";
var TIMZONE_OFFSET_STRINGS = {};
function getTimezoneOffsetString(tz) {
  if (TIMZONE_OFFSET_STRINGS[tz])
    return TIMZONE_OFFSET_STRINGS[tz];
  const offset = getTimezoneOffsetInMinutes(tz);
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  const output = `${offset > 0 ? "+" : "-"}${padLength(hours, 2)}${padLength(minutes, 2)}`;
  TIMZONE_OFFSET_STRINGS[tz] = output;
  return output;
}
function getTimezoneOffsetInMinutes(timeZone, date = /* @__PURE__ */ new Date()) {
  const options = {
    timeZone,
    hour12: false,
    timeZoneName: "short"
  };
  const formatter = new Intl.DateTimeFormat([], options);
  const parts = formatter.formatToParts(date);
  const tzOffsetPart = parts.find((part) => part.type === "timeZoneName");
  const tzOffsetString = tzOffsetPart ? tzOffsetPart.value : "GMT";
  const offsetMatch = tzOffsetString.match(/GMT([+-])(\d{1,2})(\d{2})?/);
  if (!offsetMatch) {
    return 0;
  }
  const sign = offsetMatch[1] === "+" ? 1 : -1;
  const hours = parseInt(offsetMatch[2], 10);
  const minutes = offsetMatch[3] ? parseInt(offsetMatch[3], 10) : 0;
  return sign * (hours * 60 + minutes);
}

// src/app/ui/custom-fields/date-calendar.component.ts
function DateCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, day_r1 == null ? null : day_r1.id, "EE"), " ");
  }
}
function DateCalendarComponent_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateCalendarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DateCalendarComponent_For_18_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, DateCalendarComponent_For_18_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275element(4, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:bg-base-100", day_r3.id !== ctx_r3.active_date)("!text-base-300", !day_r3.is_month)("text-secondary-content", day_r3.id === ctx_r3.active_date)("text-base-content", day_r3.id !== ctx_r3.active_date)("bg-secondary", day_r3.id === ctx_r3.active_date)("font-normal", day_r3.id !== ctx_r3.active_date);
    \u0275\u0275property("disabled", day_r3.id < ctx_r3.from() || day_r3.id > ctx_r3.to());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 15, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.today === day_r3.id ? 3 : -1);
  }
}
var DateCalendarComponent = class _DateCalendarComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  from = input(0, ...ngDevMode ? [{ debugName: "from" }] : []);
  to = input(Date.now() * 10, ...ngDevMode ? [{ debugName: "to" }] : []);
  offset_weekday = input(0, ...ngDevMode ? [{ debugName: "offset_weekday" }] : []);
  today = startOfDay(Date.now()).valueOf();
  date = Date.now();
  active_date = startOfDay(Date.now()).valueOf();
  offset = 0;
  date_list = [];
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  ngOnInit() {
    this.generateDates();
  }
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this.generateDates();
    }
  }
  setValue(new_value) {
    if (new_value < this.from() || new_value >= this.to())
      return;
    const date = new Date(new_value);
    this.date = set(this.date, {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }).valueOf();
    this.active_date = startOfDay(this.date).valueOf();
    if (this._onChange)
      this._onChange(new_value);
  }
  writeValue(value) {
    this.date = value;
    this.active_date = startOfDay(value).valueOf();
    this.offset = 0;
    this.generateDates();
  }
  changeMonth(change) {
    this.offset += change;
    this.generateDates();
  }
  registerOnChange = (fn) => this._onChange = fn;
  registerOnTouched = (fn) => this._onTouch = fn;
  generateDates() {
    const offset = this._settings.get("app.week_start") || this.offset_weekday();
    const date = addMonths(this.date, this.offset);
    let start = startOfWeek(startOfMonth(date), {
      weekStartsOn: offset
    });
    const now = startOfDay(Date.now());
    const list = [];
    while (list.length < 42) {
      list.push({
        id: start.valueOf(),
        is_past: isBefore(start, now),
        is_month: isSameMonth(start, date)
      });
      start = addDays(start, 1);
    }
    this.date_list = list;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DateCalendarComponent_BaseFactory;
    return function DateCalendarComponent_Factory(__ngFactoryType__) {
      return (\u0275DateCalendarComponent_BaseFactory || (\u0275DateCalendarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DateCalendarComponent)))(__ngFactoryType__ || _DateCalendarComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateCalendarComponent, selectors: [["date-calendar"]], inputs: { from: [1, "from"], to: [1, "to"], offset_weekday: [1, "offset_weekday"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _DateCalendarComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 19, vars: 10, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], [1, "pl-1.5", "pr-2", "font-medium"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "name", "schedule-next-month", 3, "click", "disabled"], ["icon", "", "matRipple", "", "name", "schedule-previous-month", 3, "click", "disabled"], [1, "mb-2", "flex", "items-center", "border-b", "border-base-200", "pb-2", "text-sm"], [1, "flex-1", "text-center", "opacity-60"], [1, "flex", "flex-wrap", "items-center", "justify-between"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "hover:bg-base-100", "!text-base-300", "text-secondary-content", "text-base-content", "bg-secondary", "font-normal", "disabled"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "click", "disabled"], ["matRipple", "", 1, "absolute", "-inset-[2px]", "overflow-hidden", "rounded-full", "border", "border-secondary"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-full"]], template: function DateCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
      \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_6_listener() {
        return ctx.changeMonth(-1);
      });
      \u0275\u0275elementStart(7, "icon");
      \u0275\u0275text(8, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_9_listener() {
        return ctx.changeMonth(1);
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275repeaterCreate(13, DateCalendarComponent_For_14_Template, 3, 4, "div", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275pipe(15, "slice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8);
      \u0275\u0275repeaterCreate(17, DateCalendarComponent_For_18_Template, 5, 18, "button", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, (ctx.date_list[6] == null ? null : ctx.date_list[6].id) || ctx.date, "LLLL YYYY"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", (ctx.date_list[0] == null ? null : ctx.date_list[0].id) < ctx.from());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", (ctx.date_list[34] == null ? null : ctx.date_list[34].id) > ctx.to());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(\u0275\u0275pipeBind3(15, 6, ctx.date_list, 0, 7));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.date_list);
    }
  }, dependencies: [IconComponent, CommonModule, SlicePipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateCalendarComponent, [{
    type: Component,
    args: [{ selector: "date-calendar", template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <div class="pl-1.5 pr-2 font-medium">
                    {{ date_list[6]?.id || date | date: 'LLLL YYYY' }}
                </div>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        name="schedule-next-month"
                        [disabled]="date_list[0]?.id < from()"
                        (click)="changeMonth(-1)"
                    >
                        <icon>chevron_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        name="schedule-previous-month"
                        [disabled]="date_list[34]?.id > to()"
                        (click)="changeMonth(1)"
                    >
                        <icon>chevron_right</icon>
                    </button>
                </div>
            </div>
            <div
                class="mb-2 flex items-center border-b border-base-200 pb-2 text-sm"
            >
                @for (day of date_list | slice: 0 : 7; track day) {
                    <div class="flex-1 text-center opacity-60">
                        {{ day?.id | date: 'EE' }}
                    </div>
                }
            </div>
            <div class="flex flex-wrap items-center justify-between">
                @for (day of date_list; track day) {
                    <button
                        icon
                        name="schedule-set-date"
                        class="relative my-0.5 h-9 w-9 min-w-[14%] overflow-visible"
                        [class.hover:bg-base-100]="day.id !== active_date"
                        [class.!text-base-300]="!day.is_month"
                        [class.text-secondary-content]="day.id === active_date"
                        [class.text-base-content]="day.id !== active_date"
                        [class.bg-secondary]="day.id === active_date"
                        [class.font-normal]="day.id !== active_date"
                        (click)="setValue(day.id)"
                        [disabled]="day.id < from() || day.id > to()"
                    >
                        {{ day.id | date: 'd' }}
                        @if (today === day.id) {
                            <div
                                class="absolute -inset-[2px] overflow-hidden rounded-full border border-secondary"
                                matRipple
                            ></div>
                        }
                        <div
                            class="absolute inset-0 overflow-hidden rounded-full"
                            matRipple
                        ></div>
                    </button>
                }
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateCalendarComponent),
        multi: true
      }
    ], imports: [IconComponent, CommonModule] }]
  }], null, { from: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], offset_weekday: [{ type: Input, args: [{ isSignal: true, alias: "offset_weekday", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateCalendarComponent, { className: "DateCalendarComponent", filePath: "src/app/ui/custom-fields/date-calendar.component.ts", lineNumber: 110 });
})();

// src/app/ui/custom-fields/date-field.component.ts
var _c03 = ["*"];
function DateFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.date, ctx_r0.date_format), " ");
  }
}
function DateFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FORM.DATE_EMPTY"));
  }
}
function DateFieldComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.start_of_day);
  }
}
function DateFieldComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.end_of_day);
  }
}
function DateFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, DateFieldComponent_Conditional_5_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(2, DateFieldComponent_Conditional_5_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_5_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 1 ? 3 : -1);
  }
}
function DateFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "date-calendar", 9);
    \u0275\u0275listener("ngModelChange", function DateFieldComponent_ng_template_11_Template_date_calendar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.date || ctx_r0.now)("from", ctx_r0.from)("to", ctx_r0.until)("offset_weekday", ctx_r0.week_start());
  }
}
var TimezoneDiffRange;
(function(TimezoneDiffRange2) {
  TimezoneDiffRange2[TimezoneDiffRange2["Both"] = 0] = "Both";
  TimezoneDiffRange2[TimezoneDiffRange2["Start"] = 1] = "Start";
  TimezoneDiffRange2[TimezoneDiffRange2["End"] = 2] = "End";
})(TimezoneDiffRange || (TimezoneDiffRange = {}));
var DateFieldComponent = class _DateFieldComponent extends AsyncHandler {
  _injector = inject(Injector);
  /** Earliest date available the user is allowed to pick */
  from_date = input(startOfDay(Date.now()).valueOf(), ...ngDevMode ? [{ debugName: "from_date", alias: "from" }] : [{ alias: "from" }]);
  /** Latest date available the user is allowed to pick */
  to_date = input(void 0, ...ngDevMode ? [{ debugName: "to_date", alias: "to" }] : [{ alias: "to" }]);
  /** Index of the day to start the week on when displaying the calendar */
  week_start = input(0, ...ngDevMode ? [{ debugName: "week_start" }] : []);
  use_24hr = input(false, ...ngDevMode ? [{ debugName: "use_24hr" }] : []);
  /** Whether form control is disabled */
  disabled = model(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  short = input(false, ...ngDevMode ? [{ debugName: "short" }] : []);
  timezone = input("", ...ngDevMode ? [{ debugName: "timezone" }] : []);
  range = input(TimezoneDiffRange.Both, ...ngDevMode ? [{ debugName: "range" }] : []);
  /** Currently selected date */
  date;
  now = Date.now();
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  _control;
  get date_format() {
    return this.short() ? "MMM d, yyyy" : "MMMM d, yyyy";
  }
  get time_format() {
    return this.use_24hr() ? "HH : mm" : "h : mm a";
  }
  _date_pipe = new DatePipe("en");
  get start_of_day() {
    const start = startOfDay(this.date).valueOf();
    const format3 = `MMM d, ${this.time_format}${this.range() === 1 ? " (z)" : ""}`;
    return this._date_pipe.transform(start, format3, this.tz);
  }
  get end_of_day() {
    const end = endOfDay(this.date).valueOf();
    const format3 = `MMM d, ${this.time_format}${this.range() === 1 ? " (z)" : ""}`;
    return this._date_pipe.transform(end, format3, this.tz);
  }
  get has_error() {
    return this._control?.invalid && this._control?.touched;
  }
  _local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
  get tz() {
    const tz = this.timezone();
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  _tooltip = viewChild(CustomTooltipComponent, ...ngDevMode ? [{ debugName: "_tooltip" }] : []);
  /** First allowed date on the calendar */
  get from() {
    return (new Date(this.from_date()) || startOfDay(/* @__PURE__ */ new Date())).valueOf();
  }
  /** Current date value */
  get until() {
    return (new Date(this.to_date()) || addYears(endOfDay(/* @__PURE__ */ new Date()), 1)).valueOf();
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this.date = Date.now();
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const old_date = new Date(this.date);
    let new_date = set(new_value, {
      hours: old_date.getHours(),
      minutes: old_date.getMinutes()
    }).valueOf();
    if (new_date < this.from.valueOf()) {
      new_date = this.from.valueOf();
    }
    this.date = new_date;
    if (this._onChange) {
      this._onChange(new_date);
    }
    this._tooltip()?.close();
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date = value;
    this._tooltip()?.close();
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
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DateFieldComponent_BaseFactory;
    return function DateFieldComponent_Factory(__ngFactoryType__) {
      return (\u0275DateFieldComponent_BaseFactory || (\u0275DateFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DateFieldComponent)))(__ngFactoryType__ || _DateFieldComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateFieldComponent, selectors: [["a-date-field"]], viewQuery: function DateFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], week_start: [1, "week_start"], use_24hr: [1, "use_24hr"], disabled: [1, "disabled"], short: [1, "short"], timezone: [1, "timezone"], range: [1, "range"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _DateFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c03, decls: 13, vars: 7, consts: [["calendar_picker", ""], ["customTooltip", "", "yPosition", "top", "matRipple", "", 1, "flex", "h-12", "w-full", "items-center", "justify-between", "rounded", "border", "border-neutral", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], [1, "error", "h-5", "p-1", "text-xs", "text-error"], [1, "relative", "w-[18rem]", "rounded", "bg-base-100", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_3_Template, 2, 4)(4, DateFieldComponent_Conditional_4_Template, 3, 3, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, DateFieldComponent_Conditional_5_Template, 4, 3, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "icon");
      \u0275\u0275text(8, "today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275conditionalCreate(10, DateFieldComponent_Conditional_10_Template, 2, 0, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, DateFieldComponent_ng_template_11_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const calendar_picker_r3 = \u0275\u0275reference(12);
      \u0275\u0275classProp("opacity-30", ctx.disabled());
      \u0275\u0275property("content", calendar_picker_r3)("disabled", ctx.disabled());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.date ? 3 : 4);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.timezone() && ctx.tz ? 5 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.has_error ? 10 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    DateCalendarComponent,
    IconComponent,
    CustomTooltipComponent,
    DatePipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFieldComponent, [{
    type: Component,
    args: [{ selector: "a-date-field", template: `
        <button
            class="flex h-12 w-full items-center justify-between rounded border border-neutral"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            matRipple
        >
            <div
                class="flex w-1/2 flex-1 flex-col truncate px-4 py-2 text-left leading-tight"
            >
                <div class="text-base font-normal">
                    @if (date) {
                        {{ date | date: date_format }}
                    } @else {
                        <span class="opacity-30">{{
                            'FORM.DATE_EMPTY' | translate
                        }}</span>
                    }
                </div>
                @if (timezone() && tz) {
                    <div class="truncate text-xs opacity-30">
                        @if (range() !== 2) {
                            <span>{{ start_of_day }}</span>
                        }
                        @if (range() === 0) {
                            <span> - </span>
                        }
                        @if (range() !== 1) {
                            <span>{{ end_of_day }}</span>
                        }
                    </div>
                }
            </div>
            <div class="flex h-10 w-10 items-center justify-center text-2xl">
                <icon>today</icon>
            </div>
        </button>
        <div class="error h-5 p-1 text-xs text-error">
            @if (has_error) {
                <span><ng-content></ng-content></span>
            }
        </div>
        <ng-template #calendar_picker>
            <div class="relative w-[18rem] rounded bg-base-100 px-2 py-4">
                <date-calendar
                    [ngModel]="date || now"
                    [from]="from"
                    [to]="until"
                    [offset_weekday]="week_start()"
                    (ngModelChange)="setValue($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      DateCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe
    ] }]
  }], null, { from_date: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to_date: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], week_start: [{ type: Input, args: [{ isSignal: true, alias: "week_start", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], short: [{ type: Input, args: [{ isSignal: true, alias: "short", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], range: [{ type: Input, args: [{ isSignal: true, alias: "range", required: false }] }], _tooltip: [{ type: ViewChild, args: [forwardRef(() => CustomTooltipComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateFieldComponent, { className: "DateFieldComponent", filePath: "src/app/ui/custom-fields/date-field.component.ts", lineNumber: 108 });
})();

// src/app/ui/custom-fields/time-field.component.ts
var _c04 = ["select"];
var _c13 = ["*"];
function TimeFieldComponent_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
  }
}
function TimeFieldComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-select", 6, 0);
    \u0275\u0275listener("valueChange", function TimeFieldComponent_Conditional_7_Template_mat_select_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setValue($event));
    });
    \u0275\u0275repeaterCreate(3, TimeFieldComponent_Conditional_7_For_4_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.time)("disabled", ctx_r1.disabled());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.time_options);
  }
}
var TimeFieldComponent = class _TimeFieldComponent extends AsyncHandler {
  /** Time step between each allowed time option */
  step = input(15, ...ngDevMode ? [{ debugName: "step" }] : []);
  /** Whether form field is disabled */
  disabled = model(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  /** Whether past times are allowed */
  no_past_times = input(true, ...ngDevMode ? [{ debugName: "no_past_times" }] : []);
  /** String representing the currently set time */
  date = (/* @__PURE__ */ new Date()).valueOf();
  /** String representing the currently set time */
  time = format(/* @__PURE__ */ new Date(), "HH:mm");
  /** Available time blocks for the selected date */
  _time_options;
  /** Whether select field should be shown */
  show_select;
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  /** Select field for selecting the time */
  select_field = viewChild("select", ...ngDevMode ? [{ debugName: "select_field" }] : []);
  ngOnInit() {
    this.show_select = true;
    this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times(), this.step());
    this.timeout("hide", () => this.show_select = false);
  }
  ngOnChanges(changes) {
    if (changes.no_past_times || changes.step) {
      this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times(), this.step());
    }
  }
  /** Available time blocks for the selected date */
  get time_options() {
    const time = (this.time || "00:00").split(":");
    const date = set(this.date, { hours: +time[0], minutes: +time[1] });
    if (date.getMinutes() % 15 !== 0 && !this._time_options.find((time2) => time2.id === format(date, "HH:mm"))) {
      this._time_options.push({
        name: `${format(date, "h:mm a")}`,
        id: format(date, "HH:mm")
      });
      this._time_options.sort((a, b) => `${a.id}`.localeCompare(`${b.id}`));
    }
    return this._time_options;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.time = new_value;
    if (this._onChange) {
      const time = (this.time || "00:00").split(":");
      const date = startOfMinute(set(this.date, { hours: +time[0], minutes: +time[1] }));
      this._onChange(date.valueOf());
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date = value || this.date;
    let date = startOfMinute(this.date);
    date = roundToNearestMinutes(date, { nearestTo: 5 });
    this.time = format(date, "HH:mm");
    this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times(), this.step());
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  /**
   * Show select field for time options
   */
  showSelect() {
    this.show_select = true;
    this.timeout("on_shown", () => {
      const select_field = this.select_field();
      if (select_field) {
        select_field.focus();
        select_field.open();
        this.subscription("listen_close", select_field.openedChange.subscribe((state) => {
          if (!state) {
            this.show_select = false;
          }
        }));
      }
    });
  }
  /**
   * Generate a list of time options for the given date
   * @param datestamp Date to generate options for
   * @param show_past Whether past times should be options
   */
  generateAvailableTimes(datestamp, show_past, step = 15) {
    const now = /* @__PURE__ */ new Date();
    let date = new Date(datestamp);
    const blocks = [];
    if (show_past || !isSameDay(date, now) && isAfter(date, now)) {
      date = startOfDay(date);
    } else if (isAfter(date, now)) {
      date = now;
    }
    date = roundToNearestMinutes(date, { nearestTo: step });
    const end = endOfDay(date);
    while (isAfter(end, date)) {
      blocks.push({
        name: `${format(date, "h:mm a")}`,
        id: format(date, "HH:mm")
      });
      date = addMinutes(date, step);
    }
    return blocks;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimeFieldComponent_BaseFactory;
    return function TimeFieldComponent_Factory(__ngFactoryType__) {
      return (\u0275TimeFieldComponent_BaseFactory || (\u0275TimeFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TimeFieldComponent)))(__ngFactoryType__ || _TimeFieldComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeFieldComponent, selectors: [["a-time-field"]], viewQuery: function TimeFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.select_field, _c04, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { step: [1, "step"], disabled: [1, "disabled"], no_past_times: [1, "no_past_times"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TimeFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c13, decls: 8, vars: 5, consts: [["select", ""], ["appearance", "outline", 3, "keydown.enter"], ["matInput", "", "type", "time", 3, "ngModelChange", "disabled", "ngModel"], ["btn", "", "icon", "", "matSuffix", "", 1, "relative", "-right-1", "top-1", 3, "click"], [1, "text-2xl", "text-base-content", "text-opacity-50"], ["appearance", "outline"], [3, "valueChange", "value", "disabled"], [3, "value"]], template: function TimeFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "mat-form-field", 1);
      \u0275\u0275listener("keydown.enter", function TimeFieldComponent_Template_mat_form_field_keydown_enter_0_listener() {
        return ctx.showSelect();
      });
      \u0275\u0275elementStart(1, "input", 2);
      \u0275\u0275listener("ngModelChange", function TimeFieldComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.setValue($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "button", 3);
      \u0275\u0275listener("click", function TimeFieldComponent_Template_button_click_2_listener() {
        return ctx.showSelect();
      });
      \u0275\u0275elementStart(3, "icon", 4);
      \u0275\u0275text(4, " arrow_drop_down ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-error");
      \u0275\u0275projection(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, TimeFieldComponent_Conditional_7_Template, 5, 2, "mat-form-field", 5);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.show_select ? "none" : "");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled())("ngModel", ctx.time);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.show_select ? 7 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSuffix,
    MatSelectModule,
    MatSelect,
    MatOption,
    IconComponent,
    MatRippleModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatInputModule,
    MatInput
  ], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeFieldComponent, [{
    type: Component,
    args: [{ selector: "a-time-field", template: `
        <mat-form-field
            appearance="outline"
            [style.display]="show_select ? 'none' : ''"
            (keydown.enter)="showSelect()"
        >
            <input
                matInput
                type="time"
                [disabled]="disabled()"
                [ngModel]="time"
                (ngModelChange)="setValue($event)"
            />
            <button
                btn
                icon
                matSuffix
                class="relative -right-1 top-1"
                (click)="showSelect()"
            >
                <icon class="text-2xl text-base-content text-opacity-50">
                    arrow_drop_down
                </icon>
            </button>
            <mat-error><ng-content /></mat-error>
        </mat-form-field>
        @if (show_select) {
            <mat-form-field appearance="outline">
                <mat-select
                    #select
                    [value]="time"
                    [disabled]="disabled()"
                    (valueChange)="setValue($event)"
                >
                    @for (option of time_options; track option) {
                        <mat-option [value]="option.id">
                            {{ option.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimeFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatSelectModule,
      IconComponent,
      MatRippleModule,
      FormsModule,
      MatInputModule
    ], styles: ["/* angular:styles/component:css;5a9d4ad78fbd733d6bae3e98235b5cff9293f47e8579cab48bc92b1fef278e28;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/time-field.component.ts */\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], no_past_times: [{ type: Input, args: [{ isSignal: true, alias: "no_past_times", required: false }] }], select_field: [{ type: ViewChild, args: ["select", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeFieldComponent, { className: "TimeFieldComponent", filePath: "src/app/ui/custom-fields/time-field.component.ts", lineNumber: 103 });
})();

// src/app/ui/forms/trigger-condition-form/time-form.component.ts
var _c05 = () => ({ standalone: true });
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_4_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r3 = ctx.$implicit;
    \u0275\u0275property("value", tz_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r3);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"));
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "icon", 8);
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 9);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(11, TriggerConditionTimeFormComponent_Conditional_0_Conditional_4_For_12_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(13, TriggerConditionTimeFormComponent_Conditional_0_Conditional_4_Conditional_13_Template, 3, 4, "mat-option", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const auto_r4 = \u0275\u0275reference(10);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "COMMON.TIMEZONE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 6, "COMMON.TIMEZONE"))("matAutocomplete", auto_r4);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.timezones);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.timezones.length ? 13 : -1);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-date-field", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "TRIGGERS.TIME_FIELD_DATE"), " ");
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-time-field", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "TRIGGERS.TIME_FIELD_TIME"), " ");
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, TriggerConditionTimeFormComponent_Conditional_0_Conditional_5_Conditional_1_Template, 5, 3, "div", 4);
    \u0275\u0275conditionalCreate(2, TriggerConditionTimeFormComponent_Conditional_0_Conditional_5_Conditional_2_Template, 5, 3, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.time ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().controls.time ? 2 : -1);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r6 = ctx.$implicit;
    \u0275\u0275property("value", period_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", period_r6.name, " ");
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r8 = ctx.$implicit;
    const \u0275$index_85_r9 = ctx.$index;
    \u0275\u0275property("value", \u0275$index_85_r9 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", month_r8, " ");
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_1_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.cron_month, $event) || (ctx_r1.cron_month = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_1_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCronString());
    });
    \u0275\u0275repeaterCreate(6, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_1_For_7_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "TRIGGERS.TIME_MONTH_OF_YEAR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cron_month);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c05));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.months_of_year);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r11 = ctx.$implicit;
    \u0275\u0275property("value", period_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", period_r11.name, " ");
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_2_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.cron_date, $event) || (ctx_r1.cron_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_2_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCronString());
    });
    \u0275\u0275repeaterCreate(6, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_2_For_7_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "TRIGGERS.TIME_DAY_OF_MONTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cron_date);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c05));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.days_of_month);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r13 = ctx.$implicit;
    const \u0275$index_115_r14 = ctx.$index;
    \u0275\u0275property("value", \u0275$index_115_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", weekday_r13, " ");
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_3_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.cron_day, $event) || (ctx_r1.cron_day = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_3_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCronString());
    });
    \u0275\u0275repeaterCreate(6, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_3_For_7_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "TRIGGERS.TIME_DAY_OF_WEEK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cron_day);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c05));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.days_of_week);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_5_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3, "00");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", +hour_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pad(hour_r16), ":");
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_5_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.cron_hour, $event) || (ctx_r1.cron_hour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_5_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCronString());
    });
    \u0275\u0275elementStart(6, "mat-select-trigger");
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 26);
    \u0275\u0275text(9, "00");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(10, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_5_For_11_Template, 4, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "TRIGGERS.TIME_HOUR_OF_DAY"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cron_hour);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c05));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pad(ctx_r1.cron_hour), ":");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.hours_in_day);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_6_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const minute_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", +minute_r18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pad(ctx_r1.cron_hour));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(":", ctx_r1.pad(minute_r18), " ");
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_6_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.cron_minute, $event) || (ctx_r1.cron_minute = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_6_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCronString());
    });
    \u0275\u0275elementStart(6, "mat-select-trigger")(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_6_For_11_Template, 4, 3, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "TRIGGERS.TIME_MINUTE_OF_HOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cron_minute);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c05));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pad(ctx_r1.cron_hour));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(":", ctx_r1.pad(ctx_r1.cron_minute), " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.minutes_in_hour);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_1_Template, 8, 6, "div", 16);
    \u0275\u0275conditionalCreate(2, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_2_Template, 8, 6, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_3_Template, 8, 6, "div", 4);
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275conditionalCreate(5, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_5_Template, 12, 7, "div", 16);
    \u0275\u0275conditionalCreate(6, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Conditional_6_Template, 12, 8, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cron_period === "year" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cron_period === "month" || ctx_r1.cron_period === "year" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cron_period === "week" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.cron_period !== "minute" && ctx_r1.cron_period !== "hour" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cron_period !== "minute" ? 6 : -1);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cron-input-field", 29);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_9_Template_cron_input_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.cron_string, $event) || (ctx_r1.cron_string = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_9_Template_cron_input_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveCRON($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cron_string);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c05));
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cron_period, $event) || (ctx_r1.cron_period = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Template_mat_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateCronString());
    });
    \u0275\u0275repeaterCreate(6, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_For_7_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_8_Template, 7, 5)(9, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Conditional_9_Template, 1, 3, "cron-input-field", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "TRIGGERS.TIME_REPEAT"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cron_period);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c05));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.repeat_period);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.cron_period !== "custom" ? 8 : 9);
  }
}
function TriggerConditionTimeFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "settings-toggle", 3);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Template_settings_toggle_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.is_cron, $event) || (ctx_r1.is_cron = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TriggerConditionTimeFormComponent_Conditional_0_Template_settings_toggle_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCRON($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, TriggerConditionTimeFormComponent_Conditional_0_Conditional_4_Template, 14, 8, "div", 4);
    \u0275\u0275conditionalCreate(5, TriggerConditionTimeFormComponent_Conditional_0_Conditional_5_Template, 3, 2, "div", 5)(6, TriggerConditionTimeFormComponent_Conditional_0_Conditional_6_Template, 10, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form());
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(3, 6, "TRIGGERS.TIME_SCHEDULE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.is_cron);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c05));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.is_cron ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.is_cron ? 5 : 6);
  }
}
var TriggerConditionTimeFormComponent = class _TriggerConditionTimeFormComponent extends AsyncHandler {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** List of available periods for scheduled repetition */
  repeat_period = [];
  /** Whether condition is a cron(recurring) job */
  is_cron;
  /** The period which the user selects the recurrence */
  cron_period = "minute";
  minutes_in_hour = new Array(12).fill(0).map((_, idx) => idx * 5);
  hours_in_day = new Array(24).fill(0).map((_, idx) => idx);
  days_of_week = [];
  days_of_month = Array(31).fill(0).map((_, index) => ({
    id: index + 1,
    name: `${numberToPosition(index + 1)}`
  }));
  months_of_year = [];
  cron_string = "";
  /** Minute of the hour to recurr on */
  cron_minute = 0;
  /** Hour of the day to recurr on */
  cron_hour = 0;
  /** Hour of the day to recurr on */
  cron_hour_period = "AM";
  /** Hour of the day to recurr on */
  cron_day = 0;
  /** Hour of the day to recurr on */
  cron_date = 1;
  /** Hour of the day to recurr on */
  cron_month = 1;
  timezones = [];
  pad(str, digits = 2) {
    return `${str}`.padStart(digits, "0");
  }
  ngOnInit() {
    this.repeat_period = [
      { id: "minute", name: i18n("COMMON.MINUTE") },
      { id: "hour", name: i18n("COMMON.HOUR") },
      { id: "day", name: i18n("COMMON.DAY") },
      { id: "week", name: i18n("COMMON.WEEK") },
      { id: "month", name: i18n("COMMON.MONTH") },
      { id: "year", name: i18n("COMMON.YEAR") },
      { id: "custom", name: i18n("COMMON.CRON_CUSTOM") }
    ];
    this.days_of_week = new Array(7).fill(0).map((_, index) => i18n(`COMMON.${format(setDay(Date.now(), index), "EEEE").toUpperCase()}`));
    this.months_of_year = Array(12).fill(0).map((_, index) => i18n(`COMMON.${format(setMonth(Date.now(), index), "MMMM").toUpperCase()}`));
  }
  ngOnChanges(changes) {
    const form = this.form();
    if (changes.form && form) {
      this.is_cron = form.controls.time_type.value === "cron";
      if (this.is_cron) {
        this.loadCronTab(form.controls.cron.value);
      }
      this.subscription("timezone", form.get("timezone").valueChanges.subscribe((tz) => this.updateTimezoneList(tz)));
      this.updateTimezoneList(form.get("timezone").value);
    }
  }
  updateTimezoneList(tz) {
    const tz_lower = (tz || "").toLowerCase();
    this.timezones = TIMEZONES_IANA.filter((_) => _.toLowerCase().includes(tz_lower));
  }
  toggleCRON(is_cron) {
    this.form().controls.cron.setValue(null);
    this.form().controls.time_type.setValue(is_cron ? Qo.CRON : Qo.AT);
    this.updateCronString();
  }
  saveCRON(cron_str) {
    this.timeout("save_cron", () => this.form().controls.cron.setValue(cron_str), 1e3);
  }
  /**
   * Update the output CRON string for the selected periods
   */
  updateCronString() {
    const form = this.form();
    if (form && form.controls.cron) {
      const hour = this.cron_hour;
      const minute = this.cron_minute % 60;
      const day_of_week = this.days_of_week.indexOf(this.cron_day);
      const day_of_month = this.cron_date;
      const month = this.months_of_year.indexOf(this.cron_month);
      let cron_str = "* * * * *";
      switch (this.cron_period) {
        case "minute":
          cron_str = minute ? `*/${minute} * * * *` : "* * * * *";
          break;
        case "hour":
          cron_str = hour ? `${minute} */${hour} * * *` : `${minute} * * * *`;
          break;
        case "day":
          cron_str = `${minute} ${hour} * * *`;
          break;
        case "week":
          cron_str = `${minute} ${hour} * * ${day_of_week}`;
          break;
        case "month":
          cron_str = `${minute} ${hour} ${day_of_month} * *`;
          break;
        case "year":
          cron_str = `${minute} ${hour} ${day_of_month} ${month} *`;
          break;
      }
      form.controls.cron.setValue(cron_str);
    }
  }
  loadCronTab(cron_tab) {
    this.cron_string = cron_tab;
    if (this.cron_string.includes("-") || this.cron_string.includes("/") || this.cron_string.includes(",")) {
      this.cron_period = "custom";
      return;
    }
    const [minute, hour, day, month, weekday] = cron_tab.split(" ");
    this.cron_minute = +minute || 0;
    this.cron_hour = +hour || 0;
    this.cron_day = +weekday || 0;
    this.cron_date = +hour || 1;
    this.cron_month = +month - 1;
    this.cron_period = "minute";
    if (month !== "*") {
      this.cron_period = "month";
    } else if (weekday !== "*") {
      this.cron_period = "week";
    } else if (day !== "*") {
      this.cron_period = "day";
    } else if (hour !== "*") {
      this.cron_period = "hour";
    }
    this.cron_hour_period = this.cron_hour > 12 ? "PM" : "AM";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TriggerConditionTimeFormComponent_BaseFactory;
    return function TriggerConditionTimeFormComponent_Factory(__ngFactoryType__) {
      return (\u0275TriggerConditionTimeFormComponent_BaseFactory || (\u0275TriggerConditionTimeFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TriggerConditionTimeFormComponent)))(__ngFactoryType__ || _TriggerConditionTimeFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerConditionTimeFormComponent, selectors: [["trigger-condition-time-form"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["auto", "matAutocomplete"], [1, "trigger-condition", "form", "time", 3, "formGroup"], [1, "field", "mb-4"], [3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "field"], [1, "flex", "space-x-4"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], ["for", "type"], ["name", "date", "formControlName", "time"], ["name", "type", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "ngModel", "ngModelOptions"], [1, "field", "w-2/5", "flex-1"], [1, "flex", "items-center", "space-x-4"], ["for", "month"], ["name", "month", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "day"], ["name", "day", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "weekday"], ["name", "weekday", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "hour"], ["name", "hour", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "opacity-30"], ["for", "minute"], ["name", "minute", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function TriggerConditionTimeFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TriggerConditionTimeFormComponent_Conditional_0_Template, 7, 9, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    CronInputFieldComponent,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatSelectModule,
    MatSelect,
    MatSelectTrigger,
    MatOption,
    DateFieldComponent,
    TimeFieldComponent,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    SettingsToggleComponent,
    MatInputModule,
    MatInput,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    IconComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerConditionTimeFormComponent, [{
    type: Component,
    args: [{ selector: "trigger-condition-time-form", template: `
        @if (form()) {
            <div class="trigger-condition form time" [formGroup]="form()">
                <div class="field mb-4">
                    <settings-toggle
                        [name]="'TRIGGERS.TIME_SCHEDULE' | translate"
                        [(ngModel)]="is_cron"
                        (ngModelChange)="toggleCRON($event)"
                        [ngModelOptions]="{ standalone: true }"
                    ></settings-toggle>
                </div>
                @if (is_cron) {
                    <div class="field">
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <icon matPrefix class="text-2xl">search</icon>
                            <input
                                matInput
                                formControlName="timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [matAutocomplete]="auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (tz of timezones; track tz) {
                                <mat-option [value]="tz">{{ tz }}</mat-option>
                            }
                            @if (!timezones.length) {
                                <mat-option [disabled]="true">{{
                                    'COMMON.TIMEZONE_EMPTY' | translate
                                }}</mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                }
                @if (!is_cron) {
                    <div class="flex space-x-4">
                        @if (form().controls.time) {
                            <div class="field">
                                <label for="type"
                                    >{{
                                        'TRIGGERS.TIME_FIELD_DATE' | translate
                                    }}
                                </label>
                                <a-date-field
                                    name="date"
                                    formControlName="time"
                                ></a-date-field>
                            </div>
                        }
                        @if (form().controls.time) {
                            <div class="field">
                                <label for="type"
                                    >{{
                                        'TRIGGERS.TIME_FIELD_TIME' | translate
                                    }}
                                </label>
                                <a-time-field
                                    name="date"
                                    formControlName="time"
                                ></a-time-field>
                            </div>
                        }
                    </div>
                } @else {
                    <div class="field">
                        <label for="type"
                            >{{ 'TRIGGERS.TIME_REPEAT' | translate }}:
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="type"
                                [(ngModel)]="cron_period"
                                (ngModelChange)="updateCronString()"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (period of repeat_period; track period) {
                                    <mat-option [value]="period.id">
                                        {{ period.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    @if (cron_period !== 'custom') {
                        <div class="flex space-x-4">
                            @if (cron_period === 'year') {
                                <div class="field w-2/5 flex-1">
                                    <label for="month"
                                        >{{
                                            'TRIGGERS.TIME_MONTH_OF_YEAR'
                                                | translate
                                        }}
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            name="month"
                                            [(ngModel)]="cron_month"
                                            (ngModelChange)="updateCronString()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            @for (
                                                month of months_of_year;
                                                track month;
                                                let i = $index
                                            ) {
                                                <mat-option [value]="i + 1">
                                                    {{ month }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            @if (
                                cron_period === 'month' ||
                                cron_period === 'year'
                            ) {
                                <div class="field w-2/5 flex-1">
                                    <label for="day"
                                        >{{
                                            'TRIGGERS.TIME_DAY_OF_MONTH'
                                                | translate
                                        }}
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            name="day"
                                            [(ngModel)]="cron_date"
                                            (ngModelChange)="updateCronString()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            @for (
                                                period of days_of_month;
                                                track period
                                            ) {
                                                <mat-option [value]="period.id">
                                                    {{ period.name }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                        </div>
                        @if (cron_period === 'week') {
                            <div class="field">
                                <label for="weekday">
                                    {{
                                        'TRIGGERS.TIME_DAY_OF_WEEK' | translate
                                    }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select
                                        name="weekday"
                                        [(ngModel)]="cron_day"
                                        (ngModelChange)="updateCronString()"
                                        [ngModelOptions]="{ standalone: true }"
                                    >
                                        @for (
                                            weekday of days_of_week;
                                            track weekday;
                                            let i = $index
                                        ) {
                                            <mat-option [value]="i">
                                                {{ weekday }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        <div class="flex items-center space-x-4">
                            @if (
                                cron_period !== 'minute' &&
                                cron_period !== 'hour'
                            ) {
                                <div class="field w-2/5 flex-1">
                                    <label for="hour">{{
                                        'TRIGGERS.TIME_HOUR_OF_DAY' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            name="hour"
                                            [(ngModel)]="cron_hour"
                                            (ngModelChange)="updateCronString()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            <mat-select-trigger>
                                                {{ pad(cron_hour) }}:<span
                                                    class="opacity-30"
                                                    >00</span
                                                >
                                            </mat-select-trigger>
                                            @for (
                                                hour of hours_in_day;
                                                track hour
                                            ) {
                                                <mat-option [value]="+hour">
                                                    {{ pad(hour) }}:<span
                                                        class="opacity-30"
                                                        >00</span
                                                    >
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            @if (cron_period !== 'minute') {
                                <div class="field w-2/5 flex-1">
                                    <label for="minute">{{
                                        'TRIGGERS.TIME_MINUTE_OF_HOUR'
                                            | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            name="minute"
                                            [(ngModel)]="cron_minute"
                                            (ngModelChange)="updateCronString()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            <mat-select-trigger>
                                                <span class="opacity-30">{{
                                                    pad(cron_hour)
                                                }}</span
                                                >:{{ pad(cron_minute) }}
                                            </mat-select-trigger>
                                            @for (
                                                minute of minutes_in_hour;
                                                track minute
                                            ) {
                                                <mat-option [value]="+minute">
                                                    <span class="opacity-30">{{
                                                        pad(cron_hour)
                                                    }}</span
                                                    >:{{ pad(minute) }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                        </div>
                    } @else {
                        <cron-input-field
                            [(ngModel)]="cron_string"
                            (ngModelChange)="saveCRON($event)"
                            [ngModelOptions]="{
                                standalone: true,
                            }"
                        ></cron-input-field>
                    }
                }
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      CronInputFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      DateFieldComponent,
      TimeFieldComponent,
      MatAutocompleteModule,
      SettingsToggleComponent,
      MatInputModule,
      ReactiveFormsModule,
      TranslatePipe,
      IconComponent
    ] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerConditionTimeFormComponent, { className: "TriggerConditionTimeFormComponent", filePath: "src/app/ui/forms/trigger-condition-form/time-form.component.ts", lineNumber: 318 });
})();

// src/app/ui/forms/trigger-condition-modal.component.ts
function TriggerConditionModalComponent_Conditional_2_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, type_r1.id === "compare" ? "TRIGGERS.CONDITION_COMPARE" : "TRIGGERS.CONDITION_TIME"), " ");
  }
}
function TriggerConditionModalComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 7);
    \u0275\u0275repeaterCreate(6, TriggerConditionModalComponent_Conditional_2_Conditional_1_For_7_Template, 3, 4, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "TRIGGERS.CONDITION_FIELD_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.condition_types);
  }
}
function TriggerConditionModalComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "trigger-condition-comparison-form", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.form)("system", ctx_r1.system);
  }
}
function TriggerConditionModalComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "trigger-condition-time-form", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.form);
  }
}
function TriggerConditionModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275conditionalCreate(1, TriggerConditionModalComponent_Conditional_2_Conditional_1_Template, 8, 3, "div", 2);
    \u0275\u0275conditionalCreate(2, TriggerConditionModalComponent_Conditional_2_Conditional_2_Template, 1, 2, "trigger-condition-comparison-form", 3)(3, TriggerConditionModalComponent_Conditional_2_Conditional_3_Template, 1, 1, "trigger-condition-time-form", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.condition_type ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.condition_type.value === "compare" ? 2 : 3);
  }
}
var TriggerConditionModalComponent = class _TriggerConditionModalComponent extends AsyncHandler {
  _dialog = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  /** Emitter for events on the modal */
  event = new EventEmitter();
  /** Whether actions are loading */
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Form fields for trigger condition */
  form = generateTriggerConditionForm(this._data.condition);
  /** Store for updated conditions */
  conditions;
  /** Types of trigger conditions */
  condition_types = [
    { id: "compare", name: "Compare values" },
    { id: "time", name: "Particular time" }
  ];
  /** Whether the triggers is new or not */
  get is_new() {
    return !this._data.condition;
  }
  /** Template system to use for status variable bindings */
  get system() {
    return this._data.system;
  }
  /** Template system to use for status variable bindings */
  get trigger() {
    return this._data.trigger;
  }
  async save() {
    this.form.markAllAsTouched();
    if (!this.form.valid)
      return;
    this.loading.set("Saving trigger condition...");
    this.form.controls.condition_type.value === "compare" ? this.updateComparisons() : this.updateTimeDependents();
    const item = await Bc(this.trigger.id, __spreadProps(__spreadValues({}, this.trigger), {
      conditions: this.conditions
    })).toPromise().catch((err) => notifyError(i18n("TRIGGERS.CONDITION_SAVE_ERROR", {
      error: JSON.stringify(err.response || err.message || err)
    })));
    if (item) {
      this.event.emit({
        reason: "done",
        metadata: { trigger: item }
      });
      notifySuccess(i18n("TRIGGERS.CONDITION_SAVE_SUCCESS"));
      this._dialog.close();
    }
    this.loading.set("");
  }
  /**
   * Update the comparison list by replace an exisiting item or add a new item
   */
  updateComparisons() {
    const old_values = [...this.trigger.conditions.comparisons];
    const new_value = {
      left: typeof this.form.controls.left.value === "string" ? JSON.parse(this.form.controls.left.value) : this.form.controls.left.value,
      operator: this.form.controls.operator.value,
      right: typeof this.form.controls.right.value === "string" ? JSON.parse(this.form.controls.right.value) : this.form.controls.right.value
    };
    if (this._data.condition) {
      const old_value = JSON.stringify(this._data.condition);
      const index = old_values.findIndex((cmp) => JSON.stringify(cmp) === old_value);
      if (index >= 0) {
        old_values.splice(index, 1, new_value);
      }
    } else {
      old_values.push(new_value);
    }
    const updated_conditions = __spreadProps(__spreadValues({}, this.trigger.conditions), {
      comparisons: old_values
    });
    this.conditions = updated_conditions;
  }
  /**
   * Update the time dependent list by replace an exisiting item or add a new item
   */
  updateTimeDependents() {
    const old_values = [...this.trigger.conditions.time_dependents || []];
    const new_value = {
      type: this.form.controls.time_type.value,
      time: +(this.form.controls.time.value / 1e3).toFixed(0),
      cron: this.form.get("cron").value,
      timezone: this.form.get("timezone")?.value
    };
    if (new_value.type === Qo.CRON) {
      delete new_value.time;
    } else {
      delete new_value.cron;
      delete new_value.timezone;
    }
    new_value.cron ? delete new_value.time : delete new_value.cron;
    if (this._data.condition) {
      const old_value = JSON.stringify(this._data.condition);
      const index = old_values.findIndex((time) => JSON.stringify(time) === old_value);
      if (index >= 0) {
        old_values.splice(index, 1, new_value);
      }
    } else {
      old_values.push(new_value);
    }
    const updated_conditions = __spreadProps(__spreadValues({}, this.trigger.conditions), {
      time_dependents: old_values
    });
    this.conditions = updated_conditions;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TriggerConditionModalComponent_BaseFactory;
    return function TriggerConditionModalComponent_Factory(__ngFactoryType__) {
      return (\u0275TriggerConditionModalComponent_BaseFactory || (\u0275TriggerConditionModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TriggerConditionModalComponent)))(__ngFactoryType__ || _TriggerConditionModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerConditionModalComponent, selectors: [["trigger-condition-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 5, consts: [[3, "save", "heading", "loading"], ["trigger-condition", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "field"], [3, "form", "system"], [3, "form"], ["for", "type"], ["appearance", "outline"], ["name", "type", "formControlName", "condition_type"], [3, "value"]], template: function TriggerConditionModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function TriggerConditionModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(2, TriggerConditionModalComponent_Conditional_2_Template, 4, 3, "form", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 3, ctx.is_new ? "TRIGGERS.CONDITION_NEW" : "TRIGGERS.CONDITION_EDIT"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form ? 2 : -1);
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    TriggerConditionComparisonFormComponent,
    TriggerConditionTimeFormComponent,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerConditionModalComponent, [{
    type: Component,
    args: [{ selector: "trigger-condition-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (is_new ? 'TRIGGERS.CONDITION_NEW' : 'TRIGGERS.CONDITION_EDIT')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            @if (form) {
                <form
                    trigger-condition
                    class="flex flex-col"
                    [formGroup]="form"
                >
                    @if (form.controls.condition_type) {
                        <div class="field">
                            <label for="type">
                                {{
                                    'TRIGGERS.CONDITION_FIELD_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="type"
                                    formControlName="condition_type"
                                >
                                    @for (type of condition_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{
                                                (type.id === 'compare'
                                                    ? 'TRIGGERS.CONDITION_COMPARE'
                                                    : 'TRIGGERS.CONDITION_TIME'
                                                ) | translate
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.condition_type.value === 'compare') {
                        <trigger-condition-comparison-form
                            [form]="form"
                            [system]="system"
                        ></trigger-condition-comparison-form>
                    } @else {
                        <trigger-condition-time-form
                            [form]="form"
                        ></trigger-condition-time-form>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      TriggerConditionComparisonFormComponent,
      TriggerConditionTimeFormComponent,
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      TranslatePipe
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerConditionModalComponent, { className: "TriggerConditionModalComponent", filePath: "src/app/ui/forms/trigger-condition-modal.component.ts", lineNumber: 101 });
})();

// src/app/triggers/trigger-state.service.ts
var TriggerStateService = class _TriggerStateService {
  _service = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _change = new BehaviorSubject(0);
  _loading = new BehaviorSubject(false);
  item = this._service.item;
  loading = this._loading.asObservable();
  instances = combineLatest([
    this.item,
    this._change
  ]).pipe(switchMap(([item]) => {
    this._loading.next(true);
    if (!(item instanceof Re))
      return of([]);
    return Yc(item.id);
  }), tap(() => this._loading.next(false)), shareReplay(1));
  get active_item() {
    return this._service.active_item;
  }
  /**
   * Add new condition to trigger
   */
  async editCondition(condition = null, template) {
    if (!template)
      return;
    const ref = this._dialog.open(TriggerConditionModalComponent, {
      width: "auto",
      height: "auto",
      data: {
        trigger: this.active_item,
        condition: condition ? JSON.parse(JSON.stringify(condition)) : void 0,
        system: template
      }
    });
    const result = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (!result?.reason)
      return;
    this._service.replaceItem(result.metadata.trigger);
  }
  /**
   * Edit existing action on active trigger
   * @param action Action to edit
   */
  async editAction(action = null, template) {
    if (!template)
      return;
    const ref = this._dialog.open(TriggerActionModalComponent, {
      data: {
        trigger: this.active_item,
        action,
        system: template
      }
    });
    const result = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (!result?.reason)
      return;
    this._service.replaceItem(result.metadata.trigger);
  }
  /**
   * Re-order action for active trigger
   * @param type Type of action to reorder
   * @param event Drop event details
   */
  async reorderAction(type, fst, snd) {
    const details = await openConfirmModal({
      title: i18n("TRIGGERS.REORDER_CONFIRM_TITLE", { type }),
      content: i18n("TRIGGERS.REORDER_CONFIRM_MSG"),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details)
      return;
    const list = [
      ...type === "function" ? this.active_item.actions.functions : this.active_item.actions.mailers
    ];
    moveItemInArray(list, fst, snd);
    const actions = {
      functions: type === "function" ? list : this.active_item.actions.functions,
      mailers: type === "function" ? this.active_item.actions.mailers : list
    };
    details.loading(i18n("TRIGGERS.REORDER_CONFIRM_LOADING"));
    const resp = await Bc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item.toJSON()), {
      actions
    })).toPromise().catch((_) => _);
    if (!(resp instanceof Re))
      return notifyError(i18n("TRIGGERS.REORDER_CONFIRM_ERROR", {
        error: JSON.stringify(resp.response || resp.message || resp)
      }));
    this._service.replaceItem(resp);
    notifySuccess(i18n("TRIGGERS.REORDER_CONFIRM_SUCCESS"));
  }
  async removeCondition(condition) {
    const details = await openConfirmModal({
      title: i18n("TRIGGERS.REMOVE_CONDITION_TITLE"),
      content: i18n("TRIGGERS.REMOVE_CONDITION_MSG"),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details?.reason)
      return;
    details.loading(i18n("TRIGGERS.REMOVE_CONDITION_LOADING"));
    const item = this.active_item;
    const conditions = {
      comparisons: [...item.conditions.comparisons],
      time_dependents: [...item.conditions.time_dependents]
    };
    const list = condition.type ? conditions.time_dependents : conditions.comparisons;
    const index = list.findIndex((i) => JSON.stringify(i) === JSON.stringify(condition));
    list.splice(index, 1);
    const resp = await Bc(item.id, __spreadProps(__spreadValues({}, item.toJSON()), {
      conditions
    })).toPromise().catch((err) => err);
    details.close();
    if (!(resp instanceof Re)) {
      return notifyError(i18n("TRIGGERS.REMOVE_CONDITION_ERROR", {
        error: JSON.stringify(resp.response || resp.message || resp)
      }));
    }
    this._service.replaceItem(resp);
    notifySuccess(i18n("TRIGGERS.REMOVE_CONDITION_SUCCESS"));
  }
  async removeAction(action) {
    const details = await openConfirmModal({
      title: i18n("TRIGGERS.REMOVE_ACTION_TITLE"),
      content: i18n("TRIGGERS.REMOVE_ACTION_MSG"),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details?.reason)
      return;
    details.loading(i18n("TRIGGERS.REMOVE_ACTION_LOADING"));
    const item = this.active_item;
    const actions = {
      functions: [...item.actions.functions],
      mailers: [...item.actions.mailers]
    };
    const index = (action.emails ? item.actions.mailers : item.actions.functions).findIndex((i) => JSON.stringify(i) === JSON.stringify(action));
    (action.emails ? actions.mailers : actions.functions).splice(index, 1);
    const resp = await Bc(item.id, __spreadProps(__spreadValues({}, item.toJSON()), { actions })).toPromise().catch((err) => err);
    details.close();
    if (!(resp instanceof Re)) {
      return notifyError(i18n("TRIGGERS.REMOVE_ACTION_ERROR", {
        error: JSON.stringify(resp.response || resp.message || resp)
      }));
    }
    this._service.replaceItem(resp);
    notifySuccess(i18n("TRIGGERS.REMOVE_ACTION_SUCCESS"));
  }
  async removeTriggerFromParent(instance) {
    const type = (instance.zone_id ? i18n("ZONES.SINGULAR") : i18n("SYSTEMS.SINGULAR")).toLowerCase();
    const details = await openConfirmModal({
      title: i18n("TRIGGERS.REMOVE_INSTANCE_TITLE", { type }),
      content: i18n("TRIGGERS.REMOVE_INSTANCE_MSG", {
        type,
        name: instance.name
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details?.reason)
      return;
    details.loading(i18n("TRIGGERS.REMOVE_INSTANCE_LOADING", { type }));
    const method = type === "zone" ? zc : zc;
    let err = await method(instance.control_system_id, instance?.id || this.active_item.id).toPromise().catch((_) => ({ error: _ }));
    details.close();
    if (err?.error) {
      err = err.error;
      return notifyError(i18n("TRIGGERS.REMOVE_INSTANCE_ERROR", {
        type,
        error: err.responseText || err.message || err
      }));
    }
    this._change.next(Date.now());
    notifySuccess(i18n("TRIGGERS.REMOVE_INSTANCE_SUCCESS", { type }));
  }
  static \u0275fac = function TriggerStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TriggerStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TriggerStateService, factory: _TriggerStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/triggers/trigger-about.component.ts
var _c06 = () => [];
var _c14 = (a0, a1) => ({ key: "operator", name: a0, content: a1 });
var _c23 = (a0) => ({ key: "actions", name: " ", size: "6rem", sortable: false, content: a0 });
var _c3 = (a0, a1) => [a0, a1];
var _c4 = (a0, a1) => ({ key: "time", name: a0, content: a1 });
function TriggerAboutComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 24);
    \u0275\u0275elementStart(1, "div", 25)(2, "h3", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 27);
    \u0275\u0275pipe(6, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 4, ctx_r1.description), \u0275\u0275sanitizeHtml);
  }
}
function TriggerAboutComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", row_r3.type === "at" ? "At time" : "CRON", " ", row_r3.type === "at" ? row_r3.time : row_r3.cron, " ");
  }
}
function TriggerAboutComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "pre");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "pre");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, row_r4.left));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r4.operator, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, row_r4.right));
  }
}
function TriggerAboutComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275listener("click", function TriggerAboutComponent_ng_template_50_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCondition(row_r6));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function TriggerAboutComponent_ng_template_50_Template_button_click_4_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeCondition(row_r6));
    });
    \u0275\u0275elementStart(5, "icon", 34);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.template_system);
  }
}
function TriggerAboutComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "pre");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r7.mod);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", row_r7.method, "(", \u0275\u0275pipeBind1(6, 3, row_r7.args), ")");
  }
}
function TriggerAboutComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 37);
    \u0275\u0275pipe(2, "formatList");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, row_r8.emails));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r8.emails.length, " Address(es)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA0 | Body Length: ", row_r8.content.length, " ");
  }
}
function TriggerAboutComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275listener("click", function TriggerAboutComponent_ng_template_73_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAction(row_r10));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function TriggerAboutComponent_ng_template_73_Template_button_click_4_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAction(row_r10));
    });
    \u0275\u0275elementStart(5, "icon", 34);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.template_system);
  }
}
var TriggerAboutComponent = class _TriggerAboutComponent extends AsyncHandler {
  _service = inject(TriggerStateService);
  /** System to use for conditions with systen variables and functions */
  template_system;
  /** List of variable comparison trigger conditions */
  comparisons = [];
  /** List of time dependent trigger conditions */
  time_dependents = [];
  /** List of function call trigger actions */
  functions = [];
  /** List of email trigger actions */
  mailers = [];
  /** Query function for systems */
  query_fn = (_) => $c({ q: _ }).pipe(map((resp) => resp.data));
  editCondition = (c) => this._service.editCondition(c, this.template_system);
  removeCondition = (c) => this._service.removeCondition(c);
  editAction = (a) => this._service.editAction(a, this.template_system);
  removeAction = (a) => this._service.removeAction(a);
  get item() {
    return this._service.active_item || {};
  }
  /** HTML string for rendering the description */
  get description() {
    return d(this.item.description || "", { async: false });
  }
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe((item) => {
      if (item) {
        this.comparisons = item.conditions?.comparisons || [];
        this.time_dependents = item.conditions?.time_dependents || [];
        this.functions = item.actions?.functions || [];
        this.mailers = item.actions?.mailers || [];
      }
    }));
  }
  /**
   * Open confirmation modal for re-ordering action for active trigger
   * @param type Type of action to reorder
   * @param event Drop event details
   */
  confirmReorder(type, [previous, current]) {
    if (previous === current)
      return;
    this._service.reorderAction(type, previous, current);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TriggerAboutComponent_BaseFactory;
    return function TriggerAboutComponent_Factory(__ngFactoryType__) {
      return (\u0275TriggerAboutComponent_BaseFactory || (\u0275TriggerAboutComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TriggerAboutComponent)))(__ngFactoryType__ || _TriggerAboutComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerAboutComponent, selectors: [["trigger-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 75, vars: 122, consts: [["time_dep_template", ""], ["comparison_template", ""], ["actions_template", ""], ["function_call_template", ""], ["email_call_template", ""], ["fn_actions_template", ""], [1, "mb-4", "flex", "space-x-2"], [1, "grid", "w-1/3", "flex-1", "gap-2", "rounded", "border", "border-base-200", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "my-4"], [1, "flex", "flex-col"], ["for", "driver", 1, "max-w-[50%]", 3, "matTooltip"], [1, "w-full", 3, "ngModelChange", "placeholder", "query_fn", "ngModel"], [1, "my-4", "flex", "items-center"], [1, "flex-1", "text-lg", "font-medium"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click", "disabled"], [1, "text-2xl"], [1, "ml-2", "mr-4"], [1, "mb-4", "block", "w-full", "min-w-[32rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "block", "w-full", "min-w-[32rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "my-4", "flex", "items-center", "space-x-2"], [1, "mb-4", "block", "w-full", "min-w-[32rem]", "text-sm", 3, "ondrop", "data", "columns", "can_reorder", "empty_message"], [1, "my-4", "text-base-300"], [1, "w-full", "rounded", "border", "border-base-200"], [1, "w-full", "rounded", "bg-base-200", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "mono", "flex", "items-center", "space-x-2", "p-4", "text-sm"], [1, "mono", "flex", "items-center", "space-x-4", "p-4", "text-xs"], [1, "bg-success", "text-success-content"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "text-error"], [1, "mono", "flex", "space-x-2", "p-4", "text-xs"], [1, "flex", "items-center", "space-x-2", "p-4"], [3, "matTooltip"]], template: function TriggerAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 6)(1, "div", 7)(2, "div", 8);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 9)(6, "span", 10);
      \u0275\u0275pipe(7, "date");
      \u0275\u0275pipe(8, "date");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "span", 10);
      \u0275\u0275pipe(16, "date");
      \u0275\u0275pipe(17, "date");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "dateFrom");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(20, TriggerAboutComponent_Conditional_20_Template, 7, 6);
      \u0275\u0275element(21, "hr", 11);
      \u0275\u0275elementStart(22, "div", 12)(23, "label", 13);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "item-search-field", 14);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function TriggerAboutComponent_Template_item_search_field_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.template_system, $event) || (ctx.template_system = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "header", 15)(30, "div", 16);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 17);
      \u0275\u0275listener("click", function TriggerAboutComponent_Template_button_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editCondition());
      });
      \u0275\u0275elementStart(34, "icon", 18);
      \u0275\u0275text(35, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 19);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "section");
      \u0275\u0275element(40, "simple-table", 20);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275element(43, "simple-table", 21);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275template(46, TriggerAboutComponent_ng_template_46_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(48, TriggerAboutComponent_ng_template_48_Template, 9, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(50, TriggerAboutComponent_ng_template_50_Template, 7, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "header", 22)(53, "div", 16);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 17);
      \u0275\u0275listener("click", function TriggerAboutComponent_Template_button_click_56_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editAction());
      });
      \u0275\u0275elementStart(57, "icon", 18);
      \u0275\u0275text(58, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 19);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "section")(63, "simple-table", 23);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275listener("ondrop", function TriggerAboutComponent_Template_simple_table_ondrop_63_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.confirmReorder("function", $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "simple-table", 23);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275listener("ondrop", function TriggerAboutComponent_Template_simple_table_ondrop_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.confirmReorder("function", $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, TriggerAboutComponent_ng_template_69_Template, 7, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(71, TriggerAboutComponent_ng_template_71_Template, 5, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(73, TriggerAboutComponent_ng_template_73_Template, 7, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const time_dep_template_r11 = \u0275\u0275reference(47);
      const comparison_template_r12 = \u0275\u0275reference(49);
      const actions_template_r13 = \u0275\u0275reference(51);
      const function_call_template_r14 = \u0275\u0275reference(70);
      const email_call_template_r15 = \u0275\u0275reference(72);
      const fn_actions_template_r16 = \u0275\u0275reference(74);
      \u0275\u0275advance();
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 36, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(7, 38, ctx.item.created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(8, 41, ctx.item.created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 44, ctx.item.created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 46, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(16, 48, ctx.item.updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(17, 51, ctx.item.updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 54, ctx.item.updated_at * 1e3), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional((ctx.item == null ? null : ctx.item.description) ? 20 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(24, 56, "TRIGGERS.REFERENCE_SYSTEM_MSG"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 58, "TRIGGERS.REFERENCE_SYSTEM"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 60, "SYSTEMS.SEARCH"))("query_fn", ctx.query_fn);
      \u0275\u0275twoWayProperty("ngModel", ctx.template_system);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 62, "TRIGGERS.CONDITIONS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.template_system);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 64, "TRIGGERS.CONDITION_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.comparisons || \u0275\u0275pureFunction0(86, _c06))("columns", \u0275\u0275pureFunction2(92, _c3, \u0275\u0275pureFunction2(87, _c14, \u0275\u0275pipeBind1(41, 66, "TRIGGERS.FIELD_VAR_COMPARE"), comparison_template_r12), \u0275\u0275pureFunction1(90, _c23, actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(42, 68, "TRIGGERS.CONDITION_COMPARE_EMPTY"));
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.time_dependents || \u0275\u0275pureFunction0(95, _c06))("columns", \u0275\u0275pureFunction2(101, _c3, \u0275\u0275pureFunction2(96, _c4, \u0275\u0275pipeBind1(44, 70, "TRIGGERS.FIELD_TIME_DEPS"), time_dep_template_r11), \u0275\u0275pureFunction1(99, _c23, actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(45, 72, "TRIGGERS.CONDITION_TIME_EMPTY"));
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 74, "TRIGGERS.ACTIONS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.template_system);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 76, "TRIGGERS.ACTION_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.functions || \u0275\u0275pureFunction0(104, _c06))("columns", \u0275\u0275pureFunction2(110, _c3, \u0275\u0275pureFunction2(105, _c4, \u0275\u0275pipeBind1(64, 78, "TRIGGERS.FIELD_ACTION_FN_CALL"), function_call_template_r14), \u0275\u0275pureFunction1(108, _c23, fn_actions_template_r16)))("can_reorder", true)("empty_message", \u0275\u0275pipeBind1(65, 80, "TRIGGERS.ACTION_FN_EMPTY"));
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.mailers || \u0275\u0275pureFunction0(113, _c06))("columns", \u0275\u0275pureFunction2(119, _c3, \u0275\u0275pureFunction2(114, _c4, \u0275\u0275pipeBind1(67, 82, "TRIGGERS.FIELD_ACTION_EMAIL"), email_call_template_r15), \u0275\u0275pureFunction1(117, _c23, fn_actions_template_r16)))("can_reorder", true)("empty_message", \u0275\u0275pipeBind1(68, 84, "TRIGGERS.ACTION_EMAIL_EMPTY"));
    }
  }, dependencies: [
    CommonModule,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    ItemSearchFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    JsonPipe,
    DatePipe,
    TranslatePipe,
    FormatListPipe,
    DateFromPipe,
    SanitizePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerAboutComponent, [{
    type: Component,
    args: [{ selector: "trigger-about", template: `
        <section class="mb-4 flex space-x-2">
            <div
                class="grid w-1/3 flex-1 gap-2 rounded border border-base-200 p-4"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.CREATED_AT' | translate }}
                </div>
                <div class="flex items-center">
                    <span
                        [matTooltip]="
                            (item.created_at * 1000 | date: 'mediumDate') +
                            ', ' +
                            (item.created_at * 1000 | date: 'shortTime')
                        "
                        matTooltipPosition="right"
                    >
                        {{ item.created_at * 1000 | dateFrom }}
                    </span>
                </div>
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.UPDATED_AT' | translate }}
                </div>
                <div class="flex items-center">
                    <span
                        [matTooltip]="
                            (item.updated_at * 1000 | date: 'mediumDate') +
                            ', ' +
                            (item.updated_at * 1000 | date: 'shortTime')
                        "
                        matTooltipPosition="right"
                    >
                        {{ item.updated_at * 1000 | dateFrom }}
                    </span>
                </div>
            </div>
        </section>
        @if (item?.description) {
            <hr class="my-4 text-base-300" />
            <div class="w-full rounded border border-base-200">
                <h3 class="w-full rounded bg-base-200 p-4 text-lg font-medium">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description | sanitize"
                ></div>
            </div>
        }
        <hr class="my-4" />
        <div class="flex flex-col">
            <label
                for="driver"
                class="max-w-[50%]"
                [matTooltip]="'TRIGGERS.REFERENCE_SYSTEM_MSG' | translate"
            >
                {{ 'TRIGGERS.REFERENCE_SYSTEM' | translate }}
            </label>
            <item-search-field
                [placeholder]="'SYSTEMS.SEARCH' | translate"
                class="w-full"
                [query_fn]="query_fn"
                [(ngModel)]="template_system"
            ></item-search-field>
        </div>
        <header class="my-4 flex items-center">
            <div class="flex-1 text-lg font-medium">
                {{ 'TRIGGERS.CONDITIONS' | translate }}
            </div>
            <button
                btn
                matRipple
                class="w-48"
                [disabled]="!template_system"
                (click)="editCondition()"
            >
                <icon class="text-2xl">add</icon>
                <div class="ml-2 mr-4">
                    {{ 'TRIGGERS.CONDITION_ADD' | translate }}
                </div>
            </button>
        </header>
        <section>
            <simple-table
                class="mb-4 block w-full min-w-[32rem] text-sm"
                [data]="comparisons || []"
                [columns]="[
                    {
                        key: 'operator',
                        name: 'TRIGGERS.FIELD_VAR_COMPARE' | translate,
                        content: comparison_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: actions_template,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'TRIGGERS.CONDITION_COMPARE_EMPTY' | translate"
            ></simple-table>
            <simple-table
                class="block w-full min-w-[32rem] text-sm"
                [data]="time_dependents || []"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_TIME_DEPS' | translate,
                        content: time_dep_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: actions_template,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'TRIGGERS.CONDITION_TIME_EMPTY' | translate"
            ></simple-table>
            <ng-template #time_dep_template let-row="row">
                <div class="mono flex items-center space-x-2 p-4 text-sm">
                    {{ row.type === 'at' ? 'At time' : 'CRON' }}
                    {{ row.type === 'at' ? row.time : row.cron }}
                </div>
            </ng-template>
            <ng-template #comparison_template let-row="row">
                <div class="mono flex items-center space-x-4 p-4 text-xs">
                    <pre>{{ row.left | json }}</pre>
                    <code class="bg-success text-success-content">
                        {{ row.operator }}
                    </code>
                    <pre>{{ row.right | json }}</pre>
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="mx-auto flex items-center space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        [disabled]="!template_system"
                        (click)="editCondition(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button icon matRipple (click)="removeCondition(row)">
                        <icon class="text-error">delete</icon>
                    </button>
                </div>
            </ng-template>
        </section>
        <header class="my-4 flex items-center space-x-2">
            <div class="flex-1 text-lg font-medium">
                {{ 'TRIGGERS.ACTIONS' | translate }}
            </div>
            <button
                btn
                matRipple
                class="w-48"
                [disabled]="!template_system"
                (click)="editAction()"
            >
                <icon class="text-2xl">add</icon>
                <div class="ml-2 mr-4">
                    {{ 'TRIGGERS.ACTION_ADD' | translate }}
                </div>
            </button>
        </header>
        <section>
            <simple-table
                class="mb-4 block w-full min-w-[32rem] text-sm"
                [data]="functions || []"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_ACTION_FN_CALL' | translate,
                        content: function_call_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: fn_actions_template,
                    },
                ]"
                [can_reorder]="true"
                (ondrop)="confirmReorder('function', $event)"
                [empty_message]="'TRIGGERS.ACTION_FN_EMPTY' | translate"
            ></simple-table>
            <simple-table
                class="mb-4 block w-full min-w-[32rem] text-sm"
                [data]="mailers || []"
                [columns]="[
                    {
                        key: 'time',
                        name: 'TRIGGERS.FIELD_ACTION_EMAIL' | translate,
                        content: email_call_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6rem',
                        sortable: false,
                        content: fn_actions_template,
                    },
                ]"
                [can_reorder]="true"
                (ondrop)="confirmReorder('function', $event)"
                [empty_message]="'TRIGGERS.ACTION_EMAIL_EMPTY' | translate"
            ></simple-table>
            <ng-template #function_call_template let-row="row">
                <div class="mono flex space-x-2 p-4 text-xs">
                    <div>
                        <code>{{ row.mod }}</code>
                    </div>
                    <pre>{{ row.method }}({{ row.args | json }})</pre>
                </div>
            </ng-template>
            <ng-template #email_call_template let-row="row">
                <div class="flex items-center space-x-2 p-4">
                    <span [matTooltip]="row.emails | formatList"
                        >{{ row.emails.length }} Address(es)</span
                    >&nbsp; | Body Length: {{ row.content.length }}
                </div>
            </ng-template>
            <ng-template #fn_actions_template let-row="row">
                <div class="mx-auto flex items-center space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        [disabled]="!template_system"
                        (click)="editAction(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button icon matRipple (click)="removeAction(row)">
                        <icon class="text-error">delete</icon>
                    </button>
                </div>
            </ng-template>
        </section>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      FormatListPipe,
      SimpleTableComponent,
      ItemSearchFieldComponent,
      FormsModule,
      DateFromPipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/triggers/trigger-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerAboutComponent, { className: "TriggerAboutComponent", filePath: "src/app/triggers/trigger-about.component.ts", lineNumber: 299 });
})();

// src/app/triggers/trigger-instances.component.ts
var _c07 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4rem", sortable: false });
var _c15 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c24 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c32 = (a0, a1, a2) => [a0, a1, a2];
var _c42 = (a0) => ["/zones", a0];
var _c5 = (a0) => ["/systems", a0];
function TriggerInstancesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275classProp("bg-base-content", !row_r1.bookable)("bg-success", row_r1.bookable);
  }
}
function TriggerInstancesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275property("routerLink", row_r2.zone_id ? \u0275\u0275pureFunction1(3, _c42, row_r2.zone_id) : \u0275\u0275pureFunction1(5, _c5, row_r2.control_system_id))("matTooltip", row_r2.zone_id || row_r2.control_system_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.name || row_r2.zone_id || row_r2.control_system_id, " ");
  }
}
function TriggerInstancesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +row_r3.created_at * 1e3), " ");
  }
}
function TriggerInstancesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TriggerInstancesComponent_ng_template_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteTrigger(ctx_r4.item));
    });
    \u0275\u0275elementStart(3, "icon", 11);
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "TRIGGERS.DELETE_INSTANCE"));
  }
}
var TriggerInstancesComponent = class _TriggerInstancesComponent extends AsyncHandler {
  _service = inject(TriggerStateService);
  /** List of systems associated with the trigger */
  instances = this._service.instances;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Map of systems ids to connected status */
  connected = {};
  deleteTrigger = (s) => this._service.removeTriggerFromParent(s);
  ngOnInit() {
    this.subscription("loading", this._service.loading.subscribe((l) => this.loading.set(l)));
  }
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TriggerInstancesComponent_BaseFactory;
    return function TriggerInstancesComponent_Factory(__ngFactoryType__) {
      return (\u0275TriggerInstancesComponent_BaseFactory || (\u0275TriggerInstancesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TriggerInstancesComponent)))(__ngFactoryType__ || _TriggerInstancesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerInstancesComponent, selectors: [["trigger-systems"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 24, consts: [["state_template", ""], ["name_template", ""], ["added_template", ""], ["actions_template", ""], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[32rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "mx-auto", "h-2", "w-2", "rounded-full"], [1, "p-4", "underline", 3, "routerLink", "matTooltip"], [1, "p-4"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function TriggerInstancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "mat-progress-bar", 4)(1, "simple-table", 5);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275template(5, TriggerInstancesComponent_ng_template_5_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, TriggerInstancesComponent_ng_template_7_Template, 2, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, TriggerInstancesComponent_ng_template_9_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(11, TriggerInstancesComponent_ng_template_11_Template, 5, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const state_template_r6 = \u0275\u0275reference(6);
      const name_template_r7 = \u0275\u0275reference(8);
      const actions_template_r8 = \u0275\u0275reference(12);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.instances)("columns", \u0275\u0275pureFunction3(20, _c32, \u0275\u0275pureFunction2(12, _c07, \u0275\u0275pipeBind1(2, 6, "TRIGGERS.FIELD_STATE"), state_template_r6), \u0275\u0275pureFunction2(15, _c15, \u0275\u0275pipeBind1(3, 8, "TRIGGERS.FIELD_INSTANCE_NAME"), name_template_r7), \u0275\u0275pureFunction1(18, _c24, actions_template_r8)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(4, 10, "TRIGGERS.INSTANCES_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    RouterModule,
    RouterLink,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-instances.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerInstancesComponent, [{
    type: Component,
    args: [{ selector: "trigger-systems", template: `
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!loading()"
        />
        <simple-table
            class="block min-w-[32rem] text-sm"
            [data]="instances"
            [columns]="[
                {
                    key: 'state',
                    name: 'TRIGGERS.FIELD_STATE' | translate,
                    content: state_template,
                    size: '4rem',
                    sortable: false,
                },
                {
                    key: 'name',
                    name: 'TRIGGERS.FIELD_INSTANCE_NAME' | translate,
                    content: name_template,
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '3.5rem',
                    sortable: false,
                },
            ]"
            [sortable]="true"
            [empty_message]="'TRIGGERS.INSTANCES_EMPTY' | translate"
        />
        <ng-template #state_template let-row="row">
            <div
                class="mx-auto h-2 w-2 rounded-full"
                [class.bg-base-content]="!row.bookable"
                [class.bg-success]="row.bookable"
            ></div>
        </ng-template>
        <ng-template #name_template let-row="row">
            <a
                class="p-4 underline"
                [routerLink]="
                    row.zone_id
                        ? ['/zones', row.zone_id]
                        : ['/systems', row.control_system_id]
                "
                [matTooltip]="row.zone_id || row.control_system_id"
            >
                {{ row.name || row.zone_id || row.control_system_id }}
            </a>
        </ng-template>
        <ng-template #added_template let-row="row">
            <div class="p-4">
                {{ +row.created_at * 1000 | dateFrom }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'TRIGGERS.DELETE_INSTANCE' | translate"
                    (click)="deleteTrigger(item)"
                >
                    <icon class="text-error">delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      SimpleTableComponent,
      MatProgressBarModule,
      RouterModule,
      MatTooltipModule,
      DateFromPipe
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/triggers/trigger-instances.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-instances.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerInstancesComponent, { className: "TriggerInstancesComponent", filePath: "src/app/triggers/trigger-instances.component.ts", lineNumber: 109 });
})();

// src/app/triggers/triggers.component.ts
function TriggersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 15);
    \u0275\u0275elementStart(3, "div", 16, 0);
    \u0275\u0275listener("scroll", function TriggersComponent_Conditional_13_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r1);
      const el_r2 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.set(el_r2.scrollTop));
    });
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "TRIGGERS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list)("scrolled", ctx_r2.scroll() > 0);
  }
}
function TriggersComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 12);
  }
}
function TriggersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 13);
  }
}
var TriggersComponent = class _TriggersComponent extends AsyncHandler {
  _service = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  name = "triggers";
  open_menu = false;
  instance_count = 0;
  tab_list = [];
  debug_position = this._debug.position;
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  newItem = () => this._service.create();
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  updateTabList() {
    this.tab_list = [
      {
        id: "about",
        name: i18n("TRIGGERS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "instances",
        name: i18n("TRIGGERS.TAB_INSTANCES"),
        count: this.instance_count,
        icon: { content: "meeting_room" }
      }
    ].concat(this.extensions);
  }
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe((item) => {
      this.item.set(item);
      this.loadValues(item);
    }));
    this.updateTabList();
  }
  async loadValues(item) {
    if (!item)
      return;
    this.instance_count = (await lastValueFrom(Yc(item.id))).length;
    this.updateTabList();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TriggersComponent_BaseFactory;
    return function TriggersComponent_Factory(__ngFactoryType__) {
      return (\u0275TriggersComponent_BaseFactory || (\u0275TriggersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TriggersComponent)))(__ngFactoryType__ || _TriggersComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggersComponent, selectors: [["new-triggers-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 15, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-[30rem]"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", 3, "scroll"]], template: function TriggersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function TriggersComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "item-sidebar", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "div", 6)(7, "item-selection", 7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function TriggersComponent_Template_button_click_9_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275conditionalCreate(13, TriggersComponent_Conditional_13_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275listener("click", function TriggersComponent_Template_button_click_14_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(16, "icon", 11);
      \u0275\u0275text(17, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(18, TriggersComponent_Conditional_18_Template, 1, 0, "app-debug-output", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, TriggersComponent_Conditional_19_Template, 1, 0, "app-debug-output", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 9, "TRIGGERS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 11, "TRIGGERS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 13, "TRIGGERS.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 19 : -1);
    }
  }, dependencies: [
    DebugOutputComponent,
    IconComponent,
    RouterModule,
    RouterOutlet,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    ItemTablistComponent,
    ItemDetailsComponent,
    ItemSelectionComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggersComponent, [{
    type: Component,
    args: [{ selector: "new-triggers-view", template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'TRIGGERS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'TRIGGERS.PLURAL' | translate"
                        >
                            <button
                                btn
                                icon
                                class="mr-2 sm:hidden"
                                (click)="open_menu = true"
                            >
                                <icon>menu</icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            @if (item()?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item()"
                                    [type]="'TRIGGERS.SINGULAR' | translate"
                                ></item-details>
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list"
                                    [scrolled]="scroll() > 0"
                                    class="z-10"
                                ></item-tablist>
                                <div
                                    #el
                                    class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                                    (scroll)="scroll.set(el.scrollTop)"
                                >
                                    <router-outlet></router-outlet>
                                </div>
                            }
                        </div>
                        <button
                            class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                            [matTooltip]="'TRIGGERS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                    </div>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-[30rem]"
                ></app-debug-output>
            }
        </div>
    `, imports: [
      DebugOutputComponent,
      IconComponent,
      TranslatePipe,
      RouterModule,
      MatRippleModule,
      MatTooltipModule,
      ItemTablistComponent,
      ItemDetailsComponent,
      ItemSelectionComponent,
      ItemSidebarComponent,
      SidebarMenuComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggersComponent, { className: "TriggersComponent", filePath: "src/app/triggers/triggers.component.ts", lineNumber: 110 });
})();

// src/app/triggers/triggers.module.ts
var ROUTES = [
  {
    path: ":id",
    component: TriggersComponent,
    children: [
      { path: "about", component: TriggerAboutComponent },
      { path: "instances", component: TriggerInstancesComponent },
      { path: "extend/:id", component: ExtensionOutletComponent },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
var AppTriggersModule = class _AppTriggersModule {
  static \u0275fac = function AppTriggersModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTriggersModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppTriggersModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(ROUTES)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppTriggersModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppTriggersModule,
  ROUTES
};
//# sourceMappingURL=chunk-O6Q3NBJR.js.map
