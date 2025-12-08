import {
  ExecuteMethodFieldComponent
} from "./chunk-LKXJOD45.js";
import {
  isBefore
} from "./chunk-YK43QAQQ.js";
import {
  calculateModuleIndex
} from "./chunk-AUL5XHKR.js";
import {
  CustomTooltipComponent
} from "./chunk-IZYIDCZB.js";
import {
  ActiveItemService
} from "./chunk-5OZMWC5V.js";
import {
  TIMEZONES_IANA,
  addMinutes,
  generateTriggerActionForm,
  generateTriggerConditionForm,
  isAfter
} from "./chunk-UCBZDRWT.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-3LWTF2PE.js";
import {
  getRoundingMethod
} from "./chunk-W3G23CBG.js";
import {
  openConfirmModal
} from "./chunk-QU4UI3CX.js";
import {
  moveItemInArray
} from "./chunk-54EBFT32.js";
import {
  FullscreenModalShellComponent
} from "./chunk-TY7WPPBB.js";
import {
  SettingsToggleComponent
} from "./chunk-RFIJAS3V.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NGLYGBSE.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-C5EPULW7.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-JVJWK7OL.js";
import {
  SettingsService,
  isSameDay
} from "./chunk-QQTCTN2T.js";
import {
  format,
  getDefaultOptions,
  normalizeDates,
  startOfWeek
} from "./chunk-D6PVNXBZ.js";
import {
  addDays
} from "./chunk-LYW23EPM.js";
import {
  startOfDay
} from "./chunk-4CBXDUSX.js";
import {
  constructFrom,
  toDate
} from "./chunk-W3GXKXZC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-IWX2OQVL.js";
import {
  AsyncHandler
} from "./chunk-5X4EUYHA.js";
import {
  IconComponent
} from "./chunk-GX3YM4OA.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZMPXDLFL.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-GIPOOO6B.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-KSJPNMKV.js";
import {
  COMMA,
  ENTER,
  SPACE
} from "./chunk-ZGUCA4AJ.js";
import {
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
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgTemplateOutlet,
  Output,
  Qo,
  Re,
  ReactiveFormsModule,
  SlicePipe,
  Uc,
  Uu,
  Validators,
  ViewChild,
  Vo,
  Yc,
  combineLatest,
  first,
  forwardRef,
  inject,
  input,
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
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
  ɵɵviewQuerySignal
} from "./chunk-3J5ZMTAK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

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

// node_modules/date-fns/startOfMinute.js
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
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
  ])], decls: 8, vars: 3, consts: [[1, "mb-1", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "border-base-300", "focus-within:border-base-content", "focus-within:outline-4", "focus-within:outline-base-content", 3, "formGroup"], ["placeholder", "*", "name", "minute", "formControlName", "minute", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-hidden", 3, "keydown"], ["placeholder", "*", "name", "hour", "formControlName", "hour", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-hidden"], ["placeholder", "*", "name", "day", "formControlName", "day", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-hidden"], ["placeholder", "*", "name", "month", "formControlName", "month", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-hidden"], ["placeholder", "*", "name", "day_of_week", "formControlName", "day_of_week", 1, "w-px", "flex-1", "border-none", "bg-none", "p-2", "text-base", "outline-hidden"], [1, "text-xs", "text-error"]], template: function CronInputFieldComponent_Template(rf, ctx) {
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
            class="mb-1 flex w-full items-center space-x-2 rounded-sm border border-base-300 focus-within:border-base-content focus-within:outline-4 focus-within:outline-base-content"
            [formGroup]="form"
        >
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                name="minute"
                formControlName="minute"
                (keydown)="preventInvalidCharacters($event)"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                name="hour"
                formControlName="hour"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                name="day"
                formControlName="day"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                name="month"
                formControlName="month"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
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
    \u0275\u0275classProp("hover:bg-base-100", day_r3.id !== ctx_r3.active_date)("text-base-300!", !day_r3.is_month)("text-secondary-content", day_r3.id === ctx_r3.active_date)("text-base-content", day_r3.id !== ctx_r3.active_date)("bg-secondary", day_r3.id === ctx_r3.active_date)("font-normal", day_r3.id !== ctx_r3.active_date);
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
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 19, vars: 10, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], [1, "pl-1.5", "pr-2", "font-medium"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "name", "schedule-next-month", 3, "click", "disabled"], ["icon", "", "matRipple", "", "name", "schedule-previous-month", 3, "click", "disabled"], [1, "mb-2", "flex", "items-center", "border-b", "border-base-200", "pb-2", "text-sm"], [1, "flex-1", "text-center", "opacity-60"], [1, "flex", "flex-wrap", "items-center", "justify-between"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "hover:bg-base-100", "text-base-300!", "text-secondary-content", "text-base-content", "bg-secondary", "font-normal", "disabled"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "click", "disabled"], ["matRipple", "", 1, "absolute", "-inset-[2px]", "overflow-hidden", "rounded-full", "border", "border-secondary"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-full"]], template: function DateCalendarComponent_Template(rf, ctx) {
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
                        [class.text-base-300!]="!day.is_month"
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
  ]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c03, decls: 13, vars: 7, consts: [["calendar_picker", ""], ["customTooltip", "", "yPosition", "top", "matRipple", "", 1, "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "border-neutral", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], [1, "error", "h-5", "p-1", "text-xs", "text-error"], [1, "relative", "w-[18rem]", "rounded-sm", "bg-base-100", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
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
            class="flex h-12 w-full items-center justify-between rounded-sm border border-neutral"
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
            <div class="relative w-[18rem] rounded-sm bg-base-100 px-2 py-4">
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

export {
  TriggerStateService
};
//# sourceMappingURL=chunk-WIJY3J7J.js.map
