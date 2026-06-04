import {
  getUnixTime
} from "./chunk-MXECN6VN.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TPD5UFBJ.js";
import {
  UserAvatarComponent
} from "./chunk-I3YRWUVK.js";
import {
  addChipItem,
  removeChipItem
} from "./chunk-Y4CFRGFT.js";
import "./chunk-7GTPBWD4.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-5DYDWWDW.js";
import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipsModule
} from "./chunk-PFP5GBI7.js";
import {
  DateFromPipe
} from "./chunk-WGBPIGQD.js";
import {
  Clipboard
} from "./chunk-TG7MI555.js";
import {
  toSignal
} from "./chunk-KMTGRH5S.js";
import {
  openConfirmModal
} from "./chunk-MKUNKECS.js";
import {
  SimpleTableComponent
} from "./chunk-MUO7ALH5.js";
import {
  FullscreenModalShellComponent
} from "./chunk-MRAJXLIZ.js";
import "./chunk-DTCPP7I4.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-4ZFVXULA.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-DKBIML2S.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-6HFZ2LJV.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-AVP547Y3.js";
import "./chunk-T6JVNKEV.js";
import "./chunk-W3GXKXZC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog
} from "./chunk-NKHB33NT.js";
import {
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-OMTFMYK4.js";
import "./chunk-Z3EKRGVK.js";
import {
  AsyncHandler
} from "./chunk-5P6RE4SY.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-IZKGHFEC.js";
import "./chunk-OKKLVLNZ.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-YQWUAWSB.js";
import {
  IconComponent
} from "./chunk-ZHEO2T5Y.js";
import "./chunk-WL7ZLVLT.js";
import {
  COMMA,
  ENTER,
  MatRipple,
  SPACE
} from "./chunk-3WFHRON7.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Injectable,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  Output,
  ReactiveFormsModule,
  Validators,
  computed,
  getInvalidFields,
  inject,
  nextValueFrom,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
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
  ɵɵtextInterpolate1
} from "./chunk-46M7K5TF.js";
import {
  BehaviorSubject,
  Dt,
  O,
  R,
  U,
  combineLatest,
  debounceTime,
  fh,
  first,
  hc,
  k,
  lastValueFrom,
  map,
  of,
  ph,
  shareReplay,
  startWith,
  switchMap,
  tap,
  v
} from "./chunk-55CIHLAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/api-keys/api-key-details.class.ts
var PlaceAPIKeyDetails = class {
  id;
  name;
  user_id;
  authority_id;
  description;
  scopes;
  permissions;
  created_at;
  updated_at;
  secret;
  x_api_key;
  constructor(_data) {
    this.id = _data.id || "";
    this.name = _data.name || "";
    this.user_id = _data.user_id || "";
    this.authority_id = _data.authority_id || "";
    this.description = _data.description || "";
    this.permissions = _data.permissions || "user";
    this.created_at = _data.created_at || getUnixTime(/* @__PURE__ */ new Date());
    this.updated_at = _data.updated_at || getUnixTime(/* @__PURE__ */ new Date());
    this.secret = _data.secret;
    this.x_api_key = _data.x_api_key || "";
    this.scopes = _data.scopes || [];
  }
};

// src/app/admin/api-keys/api-key-modal.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function APIKeyModalComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 30);
    \u0275\u0275listener("removed", function APIKeyModalComponent_For_32_Template_mat_chip_removed_0_listener() {
      const scope_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeScope(scope_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 31);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scope_r3 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", scope_r3, " ");
  }
}
function APIKeyModalComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275listener("click", function APIKeyModalComponent_For_41_Template_mat_option_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      const chip_input_r7 = \u0275\u0275reference(34);
      return \u0275\u0275resetView(ctx_r3.addScope({ input: chip_input_r7, value: option_r6 }));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r6, " ");
  }
}
function APIKeyModalComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 16);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("user", ctx_r3.form.value.user);
  }
}
function APIKeyModalComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 33);
    \u0275\u0275text(2, " search ");
    \u0275\u0275elementEnd()();
  }
}
function APIKeyModalComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275element(1, "span", 34);
    \u0275\u0275elementEnd();
  }
}
function APIKeyModalComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function APIKeyModalComponent_Conditional_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearUser());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function APIKeyModalComponent_For_63_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r9.sys_admin ? "COMMON.USER_ADMIN" : "COMMON.USER_SUPPORT"));
  }
}
function APIKeyModalComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23)(1, "div", 36);
    \u0275\u0275element(2, "a-user-avatar", 37);
    \u0275\u0275elementStart(3, "div", 38)(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, APIKeyModalComponent_For_63_Conditional_8_Template, 3, 3, "code", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("value", item_r9);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", item_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r9.name || item_r9.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r9.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.sys_admin || item_r9.support ? 8 : -1);
  }
}
function APIKeyModalComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1, " No results ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
var APIKeyModalComponent = class _APIKeyModalComponent extends AsyncHandler {
  _service = inject(APIKeyService);
  _data = inject(MAT_DIALOG_DATA);
  event = new EventEmitter();
  scopes = this._service.available_scopes;
  editing = !!this._data.key?.id;
  form = new FormGroup({
    id: new FormControl(""),
    name: new FormControl("", [Validators.required]),
    user: new FormControl(null),
    user_id: new FormControl("", [Validators.required]),
    description: new FormControl(""),
    scopes: new FormControl([], [Validators.required, Validators.minLength(1)]),
    permissions: new FormControl("")
  });
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  search_term = signal("", ...ngDevMode ? [{ debugName: "search_term" }] : []);
  domain = signal(null, ...ngDevMode ? [{ debugName: "domain" }] : []);
  user_list = signal([], ...ngDevMode ? [{ debugName: "user_list" }] : []);
  user_list_loading = signal(false, ...ngDevMode ? [{ debugName: "user_list_loading" }] : []);
  permissions = toSignal(this.form.controls.permissions.valueChanges.pipe(startWith(this.form.controls.permissions.value)), { initialValue: this.form.controls.permissions.value });
  users = computed(() => {
    return this.user_list().sort((a, b) => a.name?.localeCompare(b.name));
  }, ...ngDevMode ? [{ debugName: "users" }] : []);
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  setSearch = (term = "") => {
    this.search_term.set(term);
    this.loadUsers();
  };
  addScope = (e) => addChipItem(this.form.controls.scopes, e);
  removeScope = (i) => removeChipItem(this.form.controls.scopes, i);
  ngOnInit() {
    this.domain.set(this._data.domain);
    if (this.editing) {
      const key = this._data.key;
      this.form.patchValue({
        id: key.id,
        name: key.name,
        description: key.description,
        scopes: key.scopes || [],
        user: key.user || null,
        user_id: key.user_id,
        permissions: key.permissions
      });
    } else {
      this.timeout("reset_perms", () => this.form.patchValue({ permissions: null }), 100);
    }
    this.loadSelectedUser();
    this.loadUsers();
  }
  selectUser(user) {
    this.form.patchValue({ user, user_id: user.id });
    this.search_term.set(this._userLabel(user));
  }
  clearUser() {
    this.form.patchValue({ user: null, user_id: "" });
    this.search_term.set("");
    this.loadUsers();
  }
  resetUserSearch() {
    setTimeout(() => {
      const user = this.form.value.user;
      this.search_term.set(user ? this._userLabel(user) : "");
    }, 150);
  }
  get scope_list() {
    return this.form.controls.scopes.value;
  }
  save() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    this.event.emit({ reason: "done", metadata: this.form.value });
  }
  async loadSelectedUser() {
    const user_id = this.form.value.user_id;
    if (!user_id || this.form.value.user)
      return;
    const user = await lastValueFrom(ph(user_id)).catch(() => null);
    if (!user)
      return;
    this.form.patchValue({ user });
    this.search_term.set(this._userLabel(user));
  }
  loadUsers() {
    this.timeout("load_users", async () => {
      this.user_list_loading.set(true);
      try {
        const users = await lastValueFrom(this.domain() ? fh({
          authority_id: this.domain().id,
          q: this.search_term()
        }).pipe(map((_) => _.data)) : of([]));
        this.user_list.set(users);
        if (this.editing && !this.form.value.user && this._data.key.user_id) {
          const user = users.find((u) => u.id === this._data.key.user_id);
          if (user) {
            this.form.patchValue({ user });
            this.search_term.set(this._userLabel(user));
          }
        }
      } finally {
        this.user_list_loading.set(false);
      }
    });
  }
  _userLabel(user) {
    return user?.name || user?.email || "";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275APIKeyModalComponent_BaseFactory;
    return function APIKeyModalComponent_Factory(__ngFactoryType__) {
      return (\u0275APIKeyModalComponent_BaseFactory || (\u0275APIKeyModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_APIKeyModalComponent)))(__ngFactoryType__ || _APIKeyModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _APIKeyModalComponent, selectors: [["api-key-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 83, vars: 65, consts: [["chipList", ""], ["chip_input", ""], ["auto", "matAutocomplete"], ["userAuto", "matAutocomplete"], [3, "save", "heading", "loading"], [1, "w-full", 3, "formGroup"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["name", "name", "formControlName", "name", "matInput", "", 3, "placeholder"], ["name", "description", "formControlName", "description", "matInput", "", 3, "placeholder"], ["for", "scope"], ["aria-label", "Scopes"], [3, "removable"], ["matInput", "", "placeholder", "Scopes...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matAutocomplete"], ["for", "user"], ["matPrefix", "", 1, "relative", "-left-1", 3, "user"], ["matPrefix", "", 1, "prefix"], ["id", "user", "matInput", "", "autocomplete", "off", 3, "ngModelChange", "focus", "blur", "ngModel", "ngModelOptions", "matAutocomplete", "placeholder"], ["matSuffix", "", 1, "flex", "items-center", "gap-2"], ["matSuffix", "", 1, "px-2"], ["icon", "", "type", "button"], [3, "optionSelected"], [3, "value"], [3, "disabled"], ["for", "permissions"], ["name", "permissions", "formControlName", "permissions", "placeholder", "None"], ["value", "user"], ["value", "support"], ["value", "admin"], [3, "removed", "removable"], ["matChipRemove", ""], [3, "click"], [1, "relative", "-left-0.5", "text-2xl"], [1, "border-base-300", "border-t-info", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2"], ["icon", "", "type", "button", 3, "click"], [1, "flex", "min-w-0", "items-center", "space-x-3", "py-2"], [1, "shrink-0", 3, "user"], [1, "min-w-0", "flex-1", "leading-tight"], [1, "truncate", "font-medium"], [1, "text-base-content/60", "truncate", "text-xs"], [1, "border-base-300", "border", "px-2"]], template: function APIKeyModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 4);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function APIKeyModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.save());
      });
      \u0275\u0275elementStart(2, "form", 5)(3, "div", 6)(4, "label", 7);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-form-field", 8);
      \u0275\u0275element(10, "input", 9);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementStart(12, "mat-error");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 6)(16, "label", 7);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-form-field", 8);
      \u0275\u0275element(20, "textarea", 10);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 6)(23, "label", 11);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "mat-form-field", 8)(29, "mat-chip-grid", 12, 0);
      \u0275\u0275repeaterCreate(31, APIKeyModalComponent_For_32_Template, 4, 2, "mat-chip", 13, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(33, "input", 14, 1);
      \u0275\u0275listener("matChipInputTokenEnd", function APIKeyModalComponent_Template_input_matChipInputTokenEnd_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addScope($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "mat-error");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-autocomplete", null, 2);
      \u0275\u0275repeaterCreate(40, APIKeyModalComponent_For_41_Template, 2, 1, "mat-option", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275pipe(42, "async");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 6)(44, "label", 15);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "mat-form-field", 8);
      \u0275\u0275conditionalCreate(50, APIKeyModalComponent_Conditional_50_Template, 1, 1, "a-user-avatar", 16)(51, APIKeyModalComponent_Conditional_51_Template, 3, 0, "div", 17);
      \u0275\u0275elementStart(52, "input", 18);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275listener("ngModelChange", function APIKeyModalComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setSearch($event));
      })("focus", function APIKeyModalComponent_Template_input_focus_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setSearch(ctx.search_term()));
      })("blur", function APIKeyModalComponent_Template_input_blur_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetUserSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 19);
      \u0275\u0275conditionalCreate(55, APIKeyModalComponent_Conditional_55_Template, 2, 0, "span", 20);
      \u0275\u0275conditionalCreate(56, APIKeyModalComponent_Conditional_56_Template, 3, 0, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-error");
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-autocomplete", 22, 3);
      \u0275\u0275listener("optionSelected", function APIKeyModalComponent_Template_mat_autocomplete_optionSelected_60_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectUser($event.option.value));
      });
      \u0275\u0275repeaterCreate(62, APIKeyModalComponent_For_63_Template, 9, 5, "mat-option", 23, _forTrack0);
      \u0275\u0275conditionalCreate(64, APIKeyModalComponent_Conditional_64_Template, 2, 1, "mat-option", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 6)(66, "label", 25);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-form-field", 8)(70, "mat-select", 26)(71, "mat-option", 23);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 27);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "mat-option", 28);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "mat-option", 29);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_30_0;
      const chipList_r10 = \u0275\u0275reference(30);
      const auto_r11 = \u0275\u0275reference(39);
      const userAuto_r12 = \u0275\u0275reference(61);
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 30, ctx.editing ? "ADMIN.APP_KEYS_EDIT" : "ADMIN.APP_KEYS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 32, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 34, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 36, "ADMIN.APP_KEYS_NAME_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 38, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 40, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 42, "ADMIN.APP_KEYS_FIELD_SCOPES"));
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.scope_list);
      \u0275\u0275advance(2);
      \u0275\u0275property("matChipInputFor", chipList_r10)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true)("matAutocomplete", auto_r11);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 44, "ADMIN.APP_KEYS_SCOPES_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(42, 46, ctx.scopes));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 48, "USERS.SINGULAR"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional((ctx.form.value.user == null ? null : ctx.form.value.user.id) ? 50 : 51);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.search_term())("ngModelOptions", \u0275\u0275pureFunction0(64, _c0))("matAutocomplete", userAuto_r12)("placeholder", \u0275\u0275pipeBind1(53, 50, "USERS.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.user_list_loading() ? 55 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.form.value.user == null ? null : ctx.form.value.user.id) ? 56 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 52, "COMMON.FIELD_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.users());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!((tmp_30_0 = ctx.users()) == null ? null : tmp_30_0.length) ? 64 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 54, "ADMIN.PERMISSIONS"));
      \u0275\u0275advance(4);
      \u0275\u0275property("value", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 56, "ADMIN.PERMISSIONS_NONE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 58, "ADMIN.PERMISSIONS_USER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 60, "ADMIN.PERMISSIONS_SUPPORT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 62, "ADMIN.PERMISSIONS_ADMIN"));
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    FullscreenModalShellComponent,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatPrefix,
    MatSuffix,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatInputModule,
    MatInput,
    MatChipsModule,
    MatChip,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    IconComponent,
    UserAvatarComponent,
    AsyncPipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(APIKeyModalComponent, [{
    type: Component,
    args: [{ selector: "api-key-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (editing ? 'ADMIN.APP_KEYS_EDIT' : 'ADMIN.APP_KEYS_NEW')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            <form class="w-full" [formGroup]="form">
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'COMMON.FIELD_NAME' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            name="name"
                            formControlName="name"
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            matInput
                        />
                        <mat-error>{{
                            'ADMIN.APP_KEYS_NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="name">{{
                        'COMMON.FIELD_DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            name="description"
                            formControlName="description"
                            [placeholder]="
                                'COMMON.FIELD_DESCRIPTION' | translate
                            "
                            matInput
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="scope"
                        >{{ 'ADMIN.APP_KEYS_FIELD_SCOPES' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <mat-chip-grid #chipList aria-label="Scopes">
                            @for (scope of scope_list; track scope) {
                                <mat-chip
                                    [removable]="true"
                                    (removed)="removeScope(scope)"
                                >
                                    {{ scope }}
                                    <icon matChipRemove>close</icon>
                                </mat-chip>
                            }
                            <input
                                #chip_input
                                matInput
                                placeholder="Scopes..."
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addScope($event)"
                                [matAutocomplete]="auto"
                            />
                        </mat-chip-grid>
                        <mat-error>{{
                            'ADMIN.APP_KEYS_SCOPES_REQUIRED' | translate
                        }}</mat-error>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (option of scopes | async; track option) {
                                <mat-option
                                    (click)="
                                        addScope({
                                            input: chip_input,
                                            value: option,
                                        })
                                    "
                                >
                                    {{ option }}
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="user">
                        {{ 'USERS.SINGULAR' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        @if (form.value.user?.id) {
                            <a-user-avatar
                                matPrefix
                                class="relative -left-1"
                                [user]="form.value.user"
                            ></a-user-avatar>
                        } @else {
                            <div class="prefix" matPrefix>
                                <icon class="relative -left-0.5 text-2xl">
                                    search
                                </icon>
                            </div>
                        }
                        <input
                            id="user"
                            matInput
                            autocomplete="off"
                            [ngModel]="search_term()"
                            (ngModelChange)="setSearch($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [matAutocomplete]="userAuto"
                            [placeholder]="'USERS.SEARCH' | translate"
                            (focus)="setSearch(search_term())"
                            (blur)="resetUserSearch()"
                        />
                        <div matSuffix class="flex items-center gap-2">
                            @if (user_list_loading()) {
                                <span matSuffix class="px-2">
                                    <span
                                        class="border-base-300 border-t-info inline-block h-4 w-4 animate-spin rounded-full border-2"
                                    ></span>
                                </span>
                            }
                            @if (form.value.user?.id) {
                                <button
                                    icon
                                    type="button"
                                    (click)="clearUser()"
                                >
                                    <icon>close</icon>
                                </button>
                            }
                        </div>
                        <mat-error>{{
                            'COMMON.FIELD_REQUIRED' | translate
                        }}</mat-error>
                        <mat-autocomplete
                            #userAuto="matAutocomplete"
                            (optionSelected)="selectUser($event.option.value)"
                        >
                            @for (item of users(); track item.id) {
                                <mat-option [value]="item">
                                    <div
                                        class="flex min-w-0 items-center space-x-3 py-2"
                                    >
                                        <a-user-avatar
                                            class="shrink-0"
                                            [user]="item"
                                        ></a-user-avatar>
                                        <div
                                            class="min-w-0 flex-1 leading-tight"
                                        >
                                            <div class="truncate font-medium">
                                                {{ item.name || item.email }}
                                            </div>
                                            <div
                                                class="text-base-content/60 truncate text-xs"
                                            >
                                                {{ item.email }}
                                            </div>
                                        </div>
                                        @if (item.sys_admin || item.support) {
                                            <code
                                                class="border-base-300 border px-2"
                                                >{{
                                                    (item.sys_admin
                                                        ? 'COMMON.USER_ADMIN'
                                                        : 'COMMON.USER_SUPPORT'
                                                    ) | translate
                                                }}</code
                                            >
                                        }
                                    </div>
                                </mat-option>
                            }
                            @if (!users()?.length) {
                                <mat-option [disabled]="true">
                                    No results
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="permissions">{{
                        'ADMIN.PERMISSIONS' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="permissions"
                            formControlName="permissions"
                            placeholder="None"
                        >
                            <mat-option [value]="null">{{
                                'ADMIN.PERMISSIONS_NONE' | translate
                            }}</mat-option>
                            <mat-option value="user">{{
                                'ADMIN.PERMISSIONS_USER' | translate
                            }}</mat-option>
                            <mat-option value="support">{{
                                'ADMIN.PERMISSIONS_SUPPORT' | translate
                            }}</mat-option>
                            <mat-option value="admin">{{
                                'ADMIN.PERMISSIONS_ADMIN' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      CommonModule,
      TranslatePipe,
      FormsModule,
      ReactiveFormsModule,
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatAutocompleteModule,
      MatInputModule,
      MatChipsModule,
      IconComponent,
      UserAvatarComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(APIKeyModalComponent, { className: "APIKeyModalComponent", filePath: "src/app/admin/api-keys/api-key-modal.component.ts", lineNumber: 284 });
})();

// src/app/admin/api-keys/api-keys.service.ts
var APIKeyService = class _APIKeyService {
  _dialog = inject(MatDialog);
  _search = new BehaviorSubject("");
  _domain = new BehaviorSubject(null);
  _last_key = new BehaviorSubject(null);
  _change = new BehaviorSubject(0);
  _loading = new BehaviorSubject(false);
  last_key = this._last_key.asObservable();
  active_domain = this._domain.asObservable();
  loading = this._loading.asObservable();
  available_domains = hc({ limit: 500 }).pipe(map((_) => _.data), shareReplay(1));
  available_scopes = v("/api/engine/v2/scopes").pipe(map((_) => _), shareReplay(1));
  available_keys = combineLatest([
    this._domain,
    this._change
  ]).pipe(switchMap(([domain]) => {
    this._loading.next(true);
    return domain ? k({
      query_params: { authority_id: domain.id },
      fn: (d) => new PlaceAPIKeyDetails(d),
      path: "api_keys"
    }).pipe(map((_) => _.data)) : of([]);
  }), tap(() => this._loading.next(false)), shareReplay(1));
  users = combineLatest([
    this._domain,
    this._search,
    this._change
  ]).pipe(debounceTime(300), switchMap(([domain, q]) => {
    console.log("Users:", domain, q);
    return domain ? fh({ authority_id: domain.id, q }).pipe(map((_) => _.data)) : of([]);
  }), shareReplay(1));
  setDomain(domain) {
    console.log("Setting domain:", domain);
    this._domain.next(domain);
  }
  setSearch(s) {
    this._search.next(s);
  }
  async newKey() {
    const ref = this._dialog.open(APIKeyModalComponent, {
      data: { domain: this._domain.getValue() }
    });
    const details = await Promise.race([
      lastValueFrom(ref.componentInstance.event.pipe(first((_) => _.reason === "done"))),
      lastValueFrom(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    ref.componentInstance.loading.set("Creating new API key...");
    const domain = this._domain.getValue();
    const key = await lastValueFrom(U({
      query_params: {},
      fn: (d) => new PlaceAPIKeyDetails(d),
      path: "api_keys",
      form_data: __spreadProps(__spreadValues({}, details.metadata), {
        authority_id: domain.id
      })
    })).catch((_) => {
      ref.close();
      notifyError(_);
      throw _;
    });
    this._last_key.next(key);
    this._change.next(Date.now());
    notifySuccess("Successfully created new API key.");
    ref.close();
  }
  async editKey(key) {
    const ref = this._dialog.open(APIKeyModalComponent, {
      data: { domain: this._domain.getValue(), key }
    });
    const details = await Promise.race([
      lastValueFrom(ref.componentInstance.event.pipe(first((_) => _.reason === "done"))),
      lastValueFrom(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    ref.componentInstance.loading.set("Updating API key...");
    const domain = this._domain.getValue();
    await lastValueFrom(R({
      id: key.id,
      query_params: {},
      fn: (d) => new PlaceAPIKeyDetails(d),
      path: "api_keys",
      method: "patch",
      form_data: __spreadProps(__spreadValues({}, details.metadata), {
        authority_id: domain.id
      })
    })).catch((_) => {
      ref.close();
      notifyError(_);
      throw _;
    });
    this._change.next(Date.now());
    notifySuccess("Successfully updated API key.");
    ref.close();
  }
  async removeKey(key) {
    const details = await openConfirmModal({
      title: "Remove API Key",
      content: `Are you sure you wish to remove this API key?
                    Removing this key may result in applications using this key to stop working.`,
      icon: { content: "delete" }
    }, this._dialog);
    if (details?.reason !== "done")
      return;
    details.loading("Removing API key...");
    await lastValueFrom(O({
      id: key.id,
      query_params: {},
      path: "api_keys"
    }));
    details.close();
    notifySuccess("Successfully removed API key.");
    this._change.next(Date.now());
  }
  static \u0275fac = function APIKeyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _APIKeyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _APIKeyService, factory: _APIKeyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(APIKeyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/admin/api-keys/api-keys.component.ts
var _c02 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "scopes", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "6rem" });
var _c4 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "8rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _forTrack02 = ($index, $item) => $item.id;
function AdminAPIKeysComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r2 = ctx.$implicit;
    \u0275\u0275property("value", domain_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r2.name, " ");
  }
}
function AdminAPIKeysComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 18)(2, "div", 19)(3, "h3", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function AdminAPIKeysComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyKey());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "ADMIN.APP_KEYS_LAST_DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(8, 5, ctx_r3.last_key)) == null ? null : tmp_7_0.name) || "Unanamed API Key", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_8_0 = \u0275\u0275pipeBind1(11, 7, ctx_r3.last_key)) == null ? null : tmp_8_0.x_api_key, " ");
  }
}
function AdminAPIKeysComponent_ng_template_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", scope_r5, " ");
  }
}
function AdminAPIKeysComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, AdminAPIKeysComponent_ng_template_30_For_2_Template, 2, 1, "code", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r6);
  }
}
function AdminAPIKeysComponent_ng_template_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"));
  }
}
function AdminAPIKeysComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminAPIKeysComponent_ng_template_32_Conditional_2_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r7 ? 2 : -1);
  }
}
function AdminAPIKeysComponent_ng_template_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_KEYS_PERMISSIONS_EMPTY"));
  }
}
function AdminAPIKeysComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminAPIKeysComponent_ng_template_34_Conditional_2_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r8 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r8, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r8 ? 2 : -1);
  }
}
function AdminAPIKeysComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +data_r9 * 1e3), " ");
  }
}
function AdminAPIKeysComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 30);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminAPIKeysComponent_ng_template_38_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editKey(row_r11));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminAPIKeysComponent_ng_template_38_Template_button_click_5_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteKey(row_r11));
    });
    \u0275\u0275elementStart(7, "icon", 31);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "COMMON.EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.APP_KEYS_REMOVE"));
  }
}
var AdminAPIKeysComponent = class _AdminAPIKeysComponent {
  _service = inject(APIKeyService);
  _clipboard = inject(Clipboard);
  domain = this._service.active_domain;
  domain_list = this._service.available_domains;
  key_list = this._service.available_keys;
  last_key = this._service.last_key;
  loading = this._service.loading;
  setDomain = (d) => this._service.setDomain(d);
  newKey = () => this._service.newKey();
  editKey = (k2) => this._service.editKey(k2);
  deleteKey = (k2) => this._service.removeKey(k2);
  async ngOnInit() {
    const domain = Dt();
    const domain_list = await nextValueFrom(this.domain_list);
    if (!domain_list?.length)
      return;
    const match = domain_list.find((d) => d.id === domain.id);
    if (match)
      this.setDomain(match);
  }
  async copyKey() {
    const key = await nextValueFrom(this.last_key);
    if (!key?.x_api_key)
      return;
    this._clipboard.copy(key.x_api_key);
    notifyInfo(i18n("ADMIN.APP_KEYS_COPIED"));
  }
  static \u0275fac = function AdminAPIKeysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAPIKeysComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAPIKeysComponent, selectors: [["admin-api-keys"]], decls: 40, vars: 63, consts: [["scopes_template", ""], ["description_template", ""], ["access_template", ""], ["data_from_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-12"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "mx-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "items-start", "space-x-2"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "h-12", "w-full"], [1, "border-base-300", "flex", "w-full", "flex-col", "rounded-sm", "border", "shadow-sm"], [1, "border-base-300", "bg-base-200", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "border-b"], [1, "px-4", "py-2", "text-lg", "font-medium"], [1, "mono", "bg-base-100", "rounded-sm", "px-2", "py-1", "text-xs", "opacity-60"], ["matRipple", "", 1, "mono", "rounded", "px-4", "py-3", "wrap-break-word", "opacity-60", "select-all", 3, "click"], [1, "flex", "flex-wrap", "px-4", "py-2"], [1, "m-1", "text-xs"], [1, "p-4", "text-xs"], [1, "opacity-30"], [1, "p-4", "font-mono", "text-xs", "uppercase"], [1, "p-4"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function AdminAPIKeysComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "mat-form-field", 9)(7, "mat-select", 10);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("ngModelChange", function AdminAPIKeysComponent_Template_mat_select_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setDomain($event));
      });
      \u0275\u0275repeaterCreate(10, AdminAPIKeysComponent_For_11_Template, 2, 2, "mat-option", 11, _forTrack02);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 12);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275listener("click", function AdminAPIKeysComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newKey());
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(17, AdminAPIKeysComponent_Conditional_17_Template, 12, 9, "div", 13);
      \u0275\u0275pipe(18, "async");
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275element(20, "mat-progress-bar", 15);
      \u0275\u0275pipe(21, "async");
      \u0275\u0275element(22, "simple-table", 16);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275element(29, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(30, AdminAPIKeysComponent_ng_template_30_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(32, AdminAPIKeysComponent_ng_template_32_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(34, AdminAPIKeysComponent_ng_template_34_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(36, AdminAPIKeysComponent_ng_template_36_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(38, AdminAPIKeysComponent_ng_template_38_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const scopes_template_r12 = \u0275\u0275reference(31);
      const description_template_r13 = \u0275\u0275reference(33);
      const access_template_r14 = \u0275\u0275reference(35);
      const data_from_template_r15 = \u0275\u0275reference(37);
      const actions_template_r16 = \u0275\u0275reference(39);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "ADMIN.APP_KEYS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(8, 14, ctx.domain))("placeholder", \u0275\u0275pipeBind1(9, 16, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 18, ctx.domain_list));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", \u0275\u0275pipeBind1(14, 20, ctx.domain) === null);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 22, "ADMIN.APP_KEYS_ADD"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(18, 24, ctx.last_key) ? 17 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(21, 26, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.key_list)("columns", \u0275\u0275pureFunction6(56, _c6, \u0275\u0275pureFunction1(40, _c02, \u0275\u0275pipeBind1(23, 28, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(42, _c1, \u0275\u0275pipeBind1(24, 30, "COMMON.FIELD_DESCRIPTION"), description_template_r13), \u0275\u0275pureFunction2(45, _c2, \u0275\u0275pipeBind1(25, 32, "ADMIN.APP_KEYS_FIELD_SCOPES"), scopes_template_r12), \u0275\u0275pureFunction2(48, _c3, \u0275\u0275pipeBind1(26, 34, "ADMIN.APP_KEYS_FIELD_PERMISSIONS"), access_template_r14), \u0275\u0275pureFunction2(51, _c4, \u0275\u0275pipeBind1(27, 36, "COMMON.CREATED_AT"), data_from_template_r15), \u0275\u0275pureFunction1(54, _c5, actions_template_r16)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(28, 38, "ADMIN.APP_KEYS_LIST_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    CommonModule,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    DateFromPipe,
    AsyncPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAPIKeysComponent, [{
    type: Component,
    args: [{ selector: "admin-api-keys", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.APP_KEYS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field appearance="outline" class="h-12">
                        <mat-select
                            name="type"
                            [ngModel]="domain | async"
                            (ngModelChange)="setDomain($event)"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (
                                domain of domain_list | async;
                                track domain.id
                            ) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="(domain | async) === null"
                        (click)="newKey()"
                    >
                        {{ 'ADMIN.APP_KEYS_ADD' | translate }}
                    </button>
                </div>
            </div>
            @if (last_key | async) {
                <div
                    class="mx-4 mb-4 flex w-[calc(100%-2rem)] items-start space-x-2"
                >
                    <div
                        class="border-base-300 flex w-full flex-col rounded-sm border shadow-sm"
                    >
                        <div
                            class="border-base-300 bg-base-200 flex w-full items-center space-x-2 rounded-sm border-b"
                        >
                            <h3 class="px-4 py-2 text-lg font-medium">
                                {{ 'ADMIN.APP_KEYS_LAST_DETAILS' | translate }}
                            </h3>
                            <div
                                class="mono bg-base-100 rounded-sm px-2 py-1 text-xs opacity-60"
                            >
                                {{
                                    (last_key | async)?.name ||
                                        'Unanamed API Key'
                                }}
                            </div>
                        </div>
                        <button
                            matRipple
                            class="mono rounded px-4 py-3 wrap-break-word opacity-60 select-all"
                            (click)="copyKey()"
                        >
                            {{ (last_key | async)?.x_api_key }}
                        </button>
                    </div>
                </div>
            }
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="(loading | async) !== true"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="key_list"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                            content: description_template,
                        },
                        {
                            key: 'scopes',
                            name: 'ADMIN.APP_KEYS_FIELD_SCOPES' | translate,
                            content: scopes_template,
                        },
                        {
                            key: 'permissions',
                            name:
                                'ADMIN.APP_KEYS_FIELD_PERMISSIONS' | translate,
                            content: access_template,
                            size: '6rem',
                        },
                        {
                            key: 'created_at',
                            name: 'COMMON.CREATED_AT' | translate,
                            content: data_from_template,
                            size: '8rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.APP_KEYS_LIST_EMPTY' | translate"
                ></simple-table>
                <div class="h-12 w-full"></div>
            </div>
        </div>
        <ng-template #scopes_template let-data="data">
            <div class="flex flex-wrap px-4 py-2">
                @for (scope of data; track scope) {
                    <code class="m-1 text-xs">
                        {{ scope }}
                    </code>
                }
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">{{
                        'COMMON.DESCRIPTION_EMPTY' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #access_template let-data="data">
            <div class="p-4 font-mono text-xs uppercase">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">{{
                        'ADMIN.APP_KEYS_PERMISSIONS_EMPTY' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #data_from_template let-data="data">
            <div class="p-4">
                {{ +data * 1000 | dateFrom }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'COMMON.EDIT' | translate"
                    (click)="editKey(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.APP_KEYS_REMOVE' | translate"
                    (click)="deleteKey(row)"
                >
                    <icon class="text-error">delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      DateFromPipe,
      SimpleTableComponent,
      MatProgressBarModule,
      CommonModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAPIKeysComponent, { className: "AdminAPIKeysComponent", filePath: "src/app/admin/api-keys/api-keys.component.ts", lineNumber: 207 });
})();
export {
  AdminAPIKeysComponent
};
//# sourceMappingURL=chunk-SW3HSRPM.js.map
