import {
  AdminDataService
} from "./chunk-YHJ76Z44.js";
import {
  getUnixTime
} from "./chunk-GV5KQIK5.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GEMSQ6RP.js";
import {
  UserAvatarComponent
} from "./chunk-PKMGAJGB.js";
import "./chunk-XDPTKZ2J.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-5EBMUX3Z.js";
import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipsModule
} from "./chunk-C7NP5PYP.js";
import {
  DateFromPipe
} from "./chunk-4QQQZFHX.js";
import {
  Clipboard
} from "./chunk-KQ433EDT.js";
import {
  FormField,
  form,
  minLength,
  required,
  submit
} from "./chunk-64N44YTD.js";
import {
  openConfirmModal
} from "./chunk-PS3DIJTQ.js";
import {
  SimpleTableComponent
} from "./chunk-FCU3WVEC.js";
import {
  FullscreenModalShellComponent
} from "./chunk-ISQZEH5C.js";
import "./chunk-WRAPQBH6.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-CEZ5W4YU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-6FMO72CJ.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import "./chunk-TPDHL3PI.js";
import {
  MAT_DIALOG_DATA,
  MatDialog
} from "./chunk-KHVEC2ZJ.js";
import {
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-BHWNEOU7.js";
import {
  waitForEvent
} from "./chunk-HS5WHROJ.js";
import "./chunk-LIKH2QKU.js";
import {
  AsyncHandler
} from "./chunk-JJ5DNIGX.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-NJCHD76T.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import {
  COMMA,
  ENTER,
  MatRipple,
  SPACE
} from "./chunk-2UI5N333.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-5TQT6AWS.js";
import {
  Aa,
  Component,
  EventEmitter,
  Output,
  R,
  Service,
  U,
  _,
  computed,
  d,
  inject,
  q,
  qa,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineService,
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
} from "./chunk-N6UZRJAT.js";
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
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 29);
    \u0275\u0275listener("removed", function APIKeyModalComponent_For_32_Template_mat_chip_removed_0_listener() {
      const scope_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeScope(scope_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 30);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scope_r2 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", scope_r2, " ");
  }
}
function APIKeyModalComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 31);
    \u0275\u0275listener("click", function APIKeyModalComponent_For_41_Template_mat_option_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      const chip_input_r6 = \u0275\u0275reference(34);
      return \u0275\u0275resetView(ctx_r2.addScope({ input: chip_input_r6, value: option_r5 }));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5, " ");
  }
}
function APIKeyModalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("user", ctx_r2.formModel().user);
  }
}
function APIKeyModalComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon", 32);
    \u0275\u0275text(2, " search ");
    \u0275\u0275elementEnd()();
  }
}
function APIKeyModalComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275element(1, "span", 33);
    \u0275\u0275elementEnd();
  }
}
function APIKeyModalComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function APIKeyModalComponent_Conditional_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearUser());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function APIKeyModalComponent_For_62_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r8.sys_admin ? "COMMON.USER_ADMIN" : "COMMON.USER_SUPPORT"));
  }
}
function APIKeyModalComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22)(1, "div", 35);
    \u0275\u0275element(2, "a-user-avatar", 36);
    \u0275\u0275elementStart(3, "div", 37)(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, APIKeyModalComponent_For_62_Conditional_8_Template, 3, 3, "code", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("value", item_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", item_r8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r8.name || item_r8.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.sys_admin || item_r8.support ? 8 : -1);
  }
}
function APIKeyModalComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
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
  formModel = signal(
    {
      id: "",
      name: "",
      user_id: "",
      description: "",
      scopes: [],
      permissions: null
    },
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, (p) => {
    required(p.name);
    required(p.user_id);
    required(p.scopes);
    minLength(p.scopes, 1);
  });
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  search_term = signal(
    "",
    ...ngDevMode ? [{ debugName: "search_term" }] : (
      /* istanbul ignore next */
      []
    )
  );
  domain = signal(
    null,
    ...ngDevMode ? [{ debugName: "domain" }] : (
      /* istanbul ignore next */
      []
    )
  );
  user_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "user_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  user_list_loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "user_list_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissions = computed(
    () => this.formModel().permissions,
    ...ngDevMode ? [{ debugName: "permissions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  users = computed(
    () => {
      return [...this.user_list()].sort((a, b) => a.name?.localeCompare(b.name));
    },
    ...ngDevMode ? [{ debugName: "users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  setSearch = (term = "") => {
    this.search_term.set(term);
    this.loadUsers();
  };
  addScope = (e) => {
    const value = `${e.value || ""}`.trim();
    if (!value)
      return;
    this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
      scopes: model.scopes.includes(value) ? model.scopes : [...model.scopes, value]
    }));
    e.input.value = "";
  };
  removeScope = (i) => this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
    scopes: model.scopes.filter((scope) => scope !== i)
  }));
  ngOnInit() {
    this.domain.set(this._data.domain);
    if (this.editing) {
      const key = this._data.key;
      this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
        id: key.id,
        name: key.name,
        description: key.description,
        scopes: key.scopes || [],
        user: key.user || void 0,
        user_id: key.user_id,
        permissions: key.permissions || null
      }));
    } else {
      this.timeout("reset_perms", () => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
        permissions: null
      })), 100);
    }
    this.loadSelectedUser();
    this.loadUsers();
  }
  selectUser(user) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      user,
      user_id: user.id
    }));
    this.search_term.set(this._userLabel(user));
  }
  clearUser() {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      user: void 0,
      user_id: ""
    }));
    this.search_term.set("");
    this.loadUsers();
  }
  resetUserSearch() {
    setTimeout(() => {
      const user = this.formModel().user;
      this.search_term.set(user ? this._userLabel(user) : "");
    }, 150);
  }
  get scope_list() {
    return this.formModel().scopes;
  }
  async save() {
    await submit(this.form, async () => {
      this.event.emit({ reason: "done", metadata: this.formModel() });
    });
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: this._invalidFields().join(", ")
      }));
    }
  }
  async loadSelectedUser() {
    const { user: selected_user, user_id } = this.formModel();
    if (!user_id || selected_user)
      return;
    const user = await qa(user_id).catch(() => null);
    if (!user)
      return;
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { user }));
    this.search_term.set(this._userLabel(user));
  }
  loadUsers() {
    this.timeout("load_users", async () => {
      this.user_list_loading.set(true);
      try {
        const users = this.domain() ? (await Aa({
          authority_id: this.domain().id,
          q: this.search_term()
        })).data : [];
        this.user_list.set(users);
        if (this.editing && !this.formModel().user && this._data.key.user_id) {
          const user = users.find((u) => u.id === this._data.key.user_id);
          if (user) {
            this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { user }));
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
  _invalidFields() {
    const fields = [];
    if (this.form.name().invalid())
      fields.push("name");
    if (this.form.user_id().invalid())
      fields.push("user_id");
    if (this.form.scopes().invalid())
      fields.push("scopes");
    return fields;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275APIKeyModalComponent_BaseFactory;
    return function APIKeyModalComponent_Factory(__ngFactoryType__) {
      return (\u0275APIKeyModalComponent_BaseFactory || (\u0275APIKeyModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_APIKeyModalComponent)))(__ngFactoryType__ || _APIKeyModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _APIKeyModalComponent, selectors: [["api-key-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 82, vars: 65, consts: [["chipList", ""], ["chip_input", ""], ["auto", "matAutocomplete"], ["userAuto", "matAutocomplete"], [3, "save", "heading", "loading"], [1, "w-full"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "scope"], ["aria-label", "Scopes"], [3, "removable"], ["matInput", "", "placeholder", "Scopes...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matAutocomplete"], ["for", "user"], ["matPrefix", "", 1, "relative", "-left-1", 3, "user"], ["matPrefix", "", 1, "prefix"], ["id", "user", "matInput", "", "autocomplete", "off", 3, "ngModelChange", "focus", "blur", "ngModel", "ngModelOptions", "matAutocomplete", "placeholder"], ["matSuffix", "", 1, "flex", "items-center", "gap-2"], ["matSuffix", "", 1, "px-2"], ["icon", "", "type", "button"], [3, "optionSelected"], [3, "value"], [3, "disabled"], ["for", "permissions"], ["id", "permissions", "data-testid", "api-key-permissions", "placeholder", "None", 3, "formField"], ["value", "user"], ["value", "support"], ["value", "admin"], [3, "removed", "removable"], ["matChipRemove", ""], [3, "click"], [1, "relative", "-left-0.5", "text-2xl"], [1, "border-base-300", "border-t-info", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2"], ["icon", "", "type", "button", 3, "click"], [1, "flex", "min-w-0", "items-center", "space-x-3", "py-2"], [1, "shrink-0", 3, "user"], [1, "min-w-0", "flex-1", "leading-tight"], [1, "truncate", "font-medium"], [1, "text-base-content/60", "truncate", "text-xs"], [1, "border-base-300", "border", "px-2"]], template: function APIKeyModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 4);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function APIKeyModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
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
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(12, "mat-error");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 6)(16, "label", 7);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-form-field", 8);
      \u0275\u0275element(20, "textarea", 9);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 6)(23, "label", 10);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "mat-form-field", 8)(29, "mat-chip-grid", 11, 0);
      \u0275\u0275repeaterCreate(31, APIKeyModalComponent_For_32_Template, 4, 2, "mat-chip", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(33, "input", 13, 1);
      \u0275\u0275listener("matChipInputTokenEnd", function APIKeyModalComponent_Template_input_matChipInputTokenEnd_33_listener($event) {
        return ctx.addScope($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "mat-error");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-autocomplete", null, 2);
      \u0275\u0275repeaterCreate(40, APIKeyModalComponent_For_41_Template, 2, 1, "mat-option", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 6)(43, "label", 14);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "mat-form-field", 8);
      \u0275\u0275conditionalCreate(49, APIKeyModalComponent_Conditional_49_Template, 1, 1, "a-user-avatar", 15)(50, APIKeyModalComponent_Conditional_50_Template, 3, 0, "div", 16);
      \u0275\u0275elementStart(51, "input", 17);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275listener("ngModelChange", function APIKeyModalComponent_Template_input_ngModelChange_51_listener($event) {
        return ctx.setSearch($event);
      })("focus", function APIKeyModalComponent_Template_input_focus_51_listener() {
        return ctx.setSearch(ctx.search_term());
      })("blur", function APIKeyModalComponent_Template_input_blur_51_listener() {
        return ctx.resetUserSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(53, "div", 18);
      \u0275\u0275conditionalCreate(54, APIKeyModalComponent_Conditional_54_Template, 2, 0, "span", 19);
      \u0275\u0275conditionalCreate(55, APIKeyModalComponent_Conditional_55_Template, 3, 0, "button", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-error");
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-autocomplete", 21, 3);
      \u0275\u0275listener("optionSelected", function APIKeyModalComponent_Template_mat_autocomplete_optionSelected_59_listener($event) {
        return ctx.selectUser($event.option.value);
      });
      \u0275\u0275repeaterCreate(61, APIKeyModalComponent_For_62_Template, 9, 5, "mat-option", 22, _forTrack0);
      \u0275\u0275conditionalCreate(63, APIKeyModalComponent_Conditional_63_Template, 2, 1, "mat-option", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 6)(65, "label", 24);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-form-field", 8)(69, "mat-select", 25)(70, "mat-option", 22);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-option", 26);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-option", 27);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "mat-option", 28);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const chipList_r9 = \u0275\u0275reference(30);
      const auto_r10 = \u0275\u0275reference(39);
      const userAuto_r11 = \u0275\u0275reference(60);
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 32, ctx.editing ? "ADMIN.APP_KEYS_EDIT" : "ADMIN.APP_KEYS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 34, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 36, "COMMON.FIELD_NAME"))("formField", ctx.form.name);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 38, "ADMIN.APP_KEYS_NAME_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 40, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 42, "COMMON.FIELD_DESCRIPTION"))("formField", ctx.form.description);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 44, "ADMIN.APP_KEYS_FIELD_SCOPES"));
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.scope_list);
      \u0275\u0275advance(2);
      \u0275\u0275property("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true)("matAutocomplete", auto_r10);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 46, "ADMIN.APP_KEYS_SCOPES_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.scopes());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 48, "USERS.SINGULAR"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.formModel().user?.id ? 49 : 50);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.search_term())("ngModelOptions", \u0275\u0275pureFunction0(64, _c0))("matAutocomplete", userAuto_r11)("placeholder", \u0275\u0275pipeBind1(52, 50, "USERS.SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.user_list_loading() ? 54 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formModel().user?.id ? 55 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 52, "COMMON.FIELD_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.users());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.users()?.length ? 63 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 54, "ADMIN.PERMISSIONS"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.permissions);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("value", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 56, "ADMIN.PERMISSIONS_NONE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 58, "ADMIN.PERMISSIONS_USER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 60, "ADMIN.PERMISSIONS_SUPPORT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 62, "ADMIN.PERMISSIONS_ADMIN"));
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    FormField,
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
            <form class="w-full">
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'COMMON.FIELD_NAME' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            [formField]="form.name"
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
                            [placeholder]="
                                'COMMON.FIELD_DESCRIPTION' | translate
                            "
                            [formField]="form.description"
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
                            @for (option of scopes(); track option) {
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
                        @if (formModel().user?.id) {
                            <a-user-avatar
                                matPrefix
                                class="relative -left-1"
                                [user]="formModel().user"
                            />
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
                            @if (formModel().user?.id) {
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
                                        />
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
                            id="permissions"
                            data-testid="api-key-permissions"
                            placeholder="None"
                            [formField]="form.permissions"
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
      TranslatePipe,
      FormsModule,
      FormField,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(APIKeyModalComponent, { className: "APIKeyModalComponent", filePath: "src/app/admin/api-keys/api-key-modal.component.ts", lineNumber: 278 });
})();

// src/app/admin/api-keys/api-keys.service.ts
var APIKeyService = class _APIKeyService {
  _dialog = inject(MatDialog);
  _admin_data = inject(AdminDataService);
  _search = signal(
    "",
    ...ngDevMode ? [{ debugName: "_search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _domain = this._admin_data.selectedDomain("api-keys");
  _last_key = signal(
    null,
    ...ngDevMode ? [{ debugName: "_last_key" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  last_key = this._last_key.asReadonly();
  active_domain = this._domain.asReadonly();
  loading = this._loading.asReadonly();
  available_domains = this._admin_data.domain_list;
  _available_scopes = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available_scopes" } : (
    /* istanbul ignore next */
    {}
  )), { loader: async () => await d("/api/engine/v2/scopes") }));
  available_scopes = computed(
    () => this._available_scopes.value() || [],
    ...ngDevMode ? [{ debugName: "available_scopes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _available_keys = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available_keys" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      domain: this._domain(),
      change: this._change()
    }),
    loader: async ({ params }) => {
      const { domain } = params;
      this._loading.set(true);
      try {
        if (!domain)
          return [];
        const response = await _({
          query_params: { authority_id: domain.id },
          fn: (d2) => new PlaceAPIKeyDetails(d2),
          path: "api_keys"
        });
        return response.data;
      } finally {
        this._loading.set(false);
      }
    }
  }));
  available_keys = computed(
    () => this._available_keys.value() || [],
    ...ngDevMode ? [{ debugName: "available_keys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _users = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_users" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      domain: this._domain(),
      q: this._search(),
      change: this._change()
    }),
    loader: async ({ params }) => {
      const { domain, q: q2 } = params;
      if (!domain)
        return [];
      return (await Aa({ authority_id: domain.id, q: q2 })).data;
    }
  }));
  users = computed(
    () => this._users.value() || [],
    ...ngDevMode ? [{ debugName: "users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  setDomain(domain) {
    this._admin_data.setDomain("api-keys", domain);
  }
  async selectDefaultDomain() {
    return this._admin_data.selectDefaultDomain("api-keys");
  }
  setSearch(s) {
    this._search.set(s);
  }
  async newKey() {
    const ref = this._dialog.open(APIKeyModalComponent, {
      data: { domain: this._domain() }
    });
    const details = await Promise.race([
      waitForEvent(ref.componentInstance.event, (_2) => _2.reason === "done"),
      waitForEvent(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    ref.componentInstance.loading.set("Creating new API key...");
    const domain = this._domain();
    const key = await R({
      query_params: {},
      fn: (d2) => new PlaceAPIKeyDetails(d2),
      path: "api_keys",
      form_data: __spreadProps(__spreadValues({}, details.metadata), {
        authority_id: domain.id
      })
    }).catch((_2) => {
      ref.close();
      notifyError(_2);
      throw _2;
    });
    this._last_key.set(key);
    this._change.set(Date.now());
    notifySuccess("Successfully created new API key.");
    ref.close();
  }
  async editKey(key) {
    const ref = this._dialog.open(APIKeyModalComponent, {
      data: { domain: this._domain(), key }
    });
    const details = await Promise.race([
      waitForEvent(ref.componentInstance.event, (_2) => _2.reason === "done"),
      waitForEvent(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    ref.componentInstance.loading.set("Updating API key...");
    const domain = this._domain();
    await U({
      id: key.id,
      query_params: {},
      fn: (d2) => new PlaceAPIKeyDetails(d2),
      path: "api_keys",
      method: "patch",
      form_data: __spreadProps(__spreadValues({}, details.metadata), {
        authority_id: domain.id
      })
    }).catch((_2) => {
      ref.close();
      notifyError(_2);
      throw _2;
    });
    this._change.set(Date.now());
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
    await q({
      id: key.id,
      query_params: {},
      path: "api_keys"
    });
    details.close();
    notifySuccess("Successfully removed API key.");
    this._change.set(Date.now());
  }
  static \u0275fac = function APIKeyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _APIKeyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _APIKeyService, factory: _APIKeyService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(APIKeyService, [{
    type: Service
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
function AdminAPIKeysComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r1.name, " ");
  }
}
function AdminAPIKeysComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 18)(2, "div", 19)(3, "h3", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 22);
    \u0275\u0275listener("click", function AdminAPIKeysComponent_Conditional_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyKey());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "ADMIN.APP_KEYS_LAST_DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.last_key()?.name || "Unanamed API Key", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.last_key()?.x_api_key, " ");
  }
}
function AdminAPIKeysComponent_ng_template_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", scope_r4, " ");
  }
}
function AdminAPIKeysComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, AdminAPIKeysComponent_ng_template_25_For_2_Template, 2, 1, "code", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r5);
  }
}
function AdminAPIKeysComponent_ng_template_27_Conditional_2_Template(rf, ctx) {
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
function AdminAPIKeysComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminAPIKeysComponent_ng_template_27_Conditional_2_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r6 ? 2 : -1);
  }
}
function AdminAPIKeysComponent_ng_template_29_Conditional_2_Template(rf, ctx) {
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
function AdminAPIKeysComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminAPIKeysComponent_ng_template_29_Conditional_2_Template, 3, 3, "span", 26);
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
function AdminAPIKeysComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r8 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +data_r8 * 1e3), " ");
  }
}
function AdminAPIKeysComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 30);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminAPIKeysComponent_ng_template_33_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editKey(row_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminAPIKeysComponent_ng_template_33_Template_button_click_5_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteKey(row_r10));
    });
    \u0275\u0275elementStart(7, "icon");
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
  setDomain = (d2) => this._service.setDomain(d2);
  newKey = () => this._service.newKey();
  editKey = (k) => this._service.editKey(k);
  deleteKey = (k) => this._service.removeKey(k);
  async ngOnInit() {
    await this._service.selectDefaultDomain();
  }
  async copyKey() {
    const key = this.last_key();
    if (!key?.x_api_key)
      return;
    this._clipboard.copy(key.x_api_key);
    notifyInfo(i18n("ADMIN.APP_KEYS_COPIED"));
  }
  static \u0275fac = function AdminAPIKeysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAPIKeysComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAPIKeysComponent, selectors: [["admin-api-keys"]], decls: 35, vars: 53, consts: [["scopes_template", ""], ["description_template", ""], ["access_template", ""], ["data_from_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-12"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "mx-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "items-start", "space-x-2"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "h-12", "w-full"], [1, "border-base-300", "flex", "w-full", "flex-col", "rounded-sm", "border", "shadow-sm"], [1, "border-base-300", "bg-base-200", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "border-b"], [1, "px-4", "py-2", "text-lg", "font-medium"], [1, "mono", "bg-base-100", "rounded-sm", "px-2", "py-1", "text-xs", "opacity-60"], ["matRipple", "", 1, "mono", "rounded", "px-4", "py-3", "wrap-break-word", "opacity-60", "select-all", 3, "click"], [1, "flex", "flex-wrap", "px-4", "py-2"], [1, "m-1", "text-xs"], [1, "p-4", "text-xs"], [1, "opacity-30"], [1, "p-4", "font-mono", "text-xs", "uppercase"], [1, "p-4"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function AdminAPIKeysComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "mat-form-field", 9)(7, "mat-select", 10);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("ngModelChange", function AdminAPIKeysComponent_Template_mat_select_ngModelChange_7_listener($event) {
        return ctx.setDomain($event);
      });
      \u0275\u0275repeaterCreate(9, AdminAPIKeysComponent_For_10_Template, 2, 2, "mat-option", 11, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 12);
      \u0275\u0275listener("click", function AdminAPIKeysComponent_Template_button_click_11_listener() {
        return ctx.newKey();
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(14, AdminAPIKeysComponent_Conditional_14_Template, 10, 5, "div", 13);
      \u0275\u0275elementStart(15, "div", 14);
      \u0275\u0275element(16, "mat-progress-bar", 15)(17, "simple-table", 16);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275element(24, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, AdminAPIKeysComponent_ng_template_25_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(27, AdminAPIKeysComponent_ng_template_27_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(29, AdminAPIKeysComponent_ng_template_29_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(31, AdminAPIKeysComponent_ng_template_31_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(33, AdminAPIKeysComponent_ng_template_33_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const scopes_template_r11 = \u0275\u0275reference(26);
      const description_template_r12 = \u0275\u0275reference(28);
      const access_template_r13 = \u0275\u0275reference(30);
      const data_from_template_r14 = \u0275\u0275reference(32);
      const actions_template_r15 = \u0275\u0275reference(34);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "ADMIN.APP_KEYS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.domain())("placeholder", \u0275\u0275pipeBind1(8, 14, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.domain_list());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.domain() === null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "ADMIN.APP_KEYS_ADD"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.last_key() ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.key_list)("columns", \u0275\u0275pureFunction6(46, _c6, \u0275\u0275pureFunction1(30, _c02, \u0275\u0275pipeBind1(18, 18, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(32, _c1, \u0275\u0275pipeBind1(19, 20, "COMMON.FIELD_DESCRIPTION"), description_template_r12), \u0275\u0275pureFunction2(35, _c2, \u0275\u0275pipeBind1(20, 22, "ADMIN.APP_KEYS_FIELD_SCOPES"), scopes_template_r11), \u0275\u0275pureFunction2(38, _c3, \u0275\u0275pipeBind1(21, 24, "ADMIN.APP_KEYS_FIELD_PERMISSIONS"), access_template_r13), \u0275\u0275pureFunction2(41, _c4, \u0275\u0275pipeBind1(22, 26, "COMMON.CREATED_AT"), data_from_template_r14), \u0275\u0275pureFunction1(44, _c5, actions_template_r15)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(23, 28, "ADMIN.APP_KEYS_LIST_EMPTY"));
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
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    DateFromPipe
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
                            [ngModel]="domain()"
                            (ngModelChange)="setDomain($event)"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (domain of domain_list(); track domain.id) {
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
                        [disabled]="domain() === null"
                        (click)="newKey()"
                    >
                        {{ 'ADMIN.APP_KEYS_ADD' | translate }}
                    </button>
                </div>
            </div>
            @if (last_key()) {
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
                                {{ last_key()?.name || 'Unanamed API Key' }}
                            </div>
                        </div>
                        <button
                            matRipple
                            class="mono rounded px-4 py-3 wrap-break-word opacity-60 select-all"
                            (click)="copyKey()"
                        >
                            {{ last_key()?.x_api_key }}
                        </button>
                    </div>
                </div>
            }
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="loading() !== true"
                />
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
                />
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
                    default
                    matRipple
                    [matTooltip]="'COMMON.EDIT' | translate"
                    (click)="editKey(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.APP_KEYS_REMOVE' | translate"
                    (click)="deleteKey(row)"
                >
                    <icon>delete</icon>
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
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAPIKeysComponent, { className: "AdminAPIKeysComponent", filePath: "src/app/admin/api-keys/api-keys.component.ts", lineNumber: 201 });
})();
export {
  AdminAPIKeysComponent
};
//# sourceMappingURL=chunk-AR4YQKS3.js.map
