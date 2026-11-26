import {
  UserAvatarComponent
} from "./chunk-HLWAUBYA.js";
import {
  DateFromPipe
} from "./chunk-KT7PB7AL.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-OEOOGVS4.js";
import {
  SimpleTableComponent
} from "./chunk-A7H3VPGN.js";
import {
  AdminDomainSelectComponent
} from "./chunk-YYC573KB.js";
import {
  getUnixTime
} from "./chunk-GV5KQIK5.js";
import {
  addDays
} from "./chunk-XI4ZLZAC.js";
import {
  format
} from "./chunk-NRO2XDNU.js";
import {
  toDate
} from "./chunk-TPDHL3PI.js";
import {
  AdminDataService
} from "./chunk-5D2EQCRN.js";
import {
  ChipListComponent
} from "./chunk-Y4WKCRF4.js";
import {
  AutocompleteComponent,
  AutocompleteTriggerDirective
} from "./chunk-R5EDKAWG.js";
import {
  getInvalidSignalFields
} from "./chunk-V4RQEEEC.js";
import {
  FullscreenModalShellComponent
} from "./chunk-CZ3A2OHY.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-NVIFDAFS.js";
import {
  confirmAndRun
} from "./chunk-6PURSEHW.js";
import {
  Clipboard
} from "./chunk-ARF53UMV.js";
import "./chunk-24SP3OZG.js";
import {
  describeError
} from "./chunk-HS2B2TZM.js";
import {
  ProgressBarComponent
} from "./chunk-4BOXZ4WO.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-V2X4XHND.js";
import {
  currentUser
} from "./chunk-IDLJ3PCR.js";
import {
  AsyncHandler
} from "./chunk-44FYJ5G4.js";
import {
  newItem,
  toBody
} from "./chunk-V3DC4H2S.js";
import {
  waitForDialog
} from "./chunk-OTF7M54K.js";
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
  FormField,
  form,
  minLength,
  required,
  submit
} from "./chunk-SSVO7UC4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-5APMNGCP.js";
import "./chunk-ODMV6TQA.js";
import {
  DIALOG_DATA,
  Dialog
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import {
  ApiKey,
  UserAdminMetadataResponse,
  api_keys_exports,
  root_exports,
  users_exports
} from "./chunk-PRQVSGD2.js";
import {
  orThrow,
  orThrowPage
} from "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import {
  IconComponent
} from "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-TX7UOGZW.js";
import "./chunk-GB3VUBDQ.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  EventEmitter,
  Output,
  Service,
  ViewChild,
  computed,
  effect,
  inject,
  linkedSignal,
  resource,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction7,
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
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// src/app/admin/api-keys/api-key-details.class.ts
var PERMISSION_NUMBERS = {
  user: 0,
  support: 1,
  admin: 2,
  admin_support: 3
};
function permissionNumber(permission) {
  return PERMISSION_NUMBERS[permission] ?? null;
}

// src/app/admin/api-keys/api-key-modal.component.ts
var _c0 = () => ["Enter", ",", " "];
var _c1 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.seconds;
function APIKeyModalComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r1, " ");
  }
}
function APIKeyModalComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("user", ctx_r1.formModel().user);
  }
}
function APIKeyModalComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "icon", 28);
    \u0275\u0275text(2, " search ");
    \u0275\u0275elementEnd()();
  }
}
function APIKeyModalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275element(1, "span", 29);
    \u0275\u0275elementEnd();
  }
}
function APIKeyModalComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function APIKeyModalComponent_Conditional_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearUser());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLEAR_VALUE"));
  }
}
function APIKeyModalComponent_For_57_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r4.sys_admin ? "COMMON.USER_ADMIN" : "COMMON.USER_SUPPORT"));
  }
}
function APIKeyModalComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 10)(1, "div", 31);
    \u0275\u0275element(2, "a-user-avatar", 32);
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, APIKeyModalComponent_For_57_Conditional_8_Template, 3, 3, "code", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", item_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4.name || item_r4.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.sys_admin || item_r4.support ? 8 : -1);
  }
}
function APIKeyModalComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 19);
    \u0275\u0275text(1, " No results ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function APIKeyModalComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function APIKeyModalComponent_Conditional_83_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExpiry(""));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLEAR_VALUE"));
  }
}
function APIKeyModalComponent_Conditional_84_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r7 = ctx.$implicit;
    \u0275\u0275property("value", preset_r7.seconds);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, preset_r7.label));
  }
}
function APIKeyModalComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "app-select", 39);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function APIKeyModalComponent_Conditional_84_Template_app_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTTL($event));
    });
    \u0275\u0275elementStart(7, "app-option", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, APIKeyModalComponent_Conditional_84_For_11_Template, 3, 4, "app-option", 10, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "ADMIN.APP_KEYS_FIELD_TTL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "ADMIN.APP_KEYS_FIELD_TTL_HINT"))("ngModel", ctx_r1.formModel().ttl)("ngModelOptions", \u0275\u0275pureFunction0(12, _c1));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "ADMIN.APP_KEYS_TTL_NONE"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ttl_presets);
  }
}
var APIKeyModalComponent = class _APIKeyModalComponent extends AsyncHandler {
  _service = inject(APIKeyService);
  _data = inject(DIALOG_DATA);
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
      permissions: null,
      expires_at: null,
      ttl: null
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
  scope_search = signal(
    "",
    ...ngDevMode ? [{ debugName: "scope_search" }] : (
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
  /** `expires_at` epoch (seconds) formatted for the datetime-local input */
  expires_at_input = computed(
    () => {
      const ts = this.formModel().expires_at;
      return ts ? format(fromUnixTime(ts), "yyyy-MM-dd'T'HH:mm") : "";
    },
    ...ngDevMode ? [{ debugName: "expires_at_input" }] : (
      /* istanbul ignore next */
      []
    )
  );
  setExpiry = (value) => {
    const ts = value ? getUnixTime(new Date(value)) : null;
    this.formModel.update((model) => __spreadProps(__spreadValues({}, model), { expires_at: ts }));
  };
  setTTL = (value) => {
    const ttl = value === "" || value == null ? null : Number(value);
    this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
      ttl: ttl == null || isNaN(ttl) ? null : ttl
    }));
  };
  filtered_scopes = computed(
    () => {
      const search = this.scope_search().trim().toLowerCase();
      const selected = this.formModel().scopes;
      return this.scopes().filter((scope) => !selected.includes(scope) && (!search || scope.toLowerCase().includes(search)));
    },
    ...ngDevMode ? [{ debugName: "filtered_scopes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  users = computed(
    () => {
      const search = this.search_term().trim().toLowerCase();
      const list = [...this.user_list()].sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      if (!search || search === this._userLabel(this.formModel().user).toLowerCase()) {
        return list;
      }
      return list.filter((user) => `${user.name || ""} ${user.email || ""}`.toLowerCase().includes(search));
    },
    ...ngDevMode ? [{ debugName: "users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Selectable TTL presets, value in seconds from creation */
  ttl_presets = [
    { label: "ADMIN.APP_KEYS_TTL_HOUR", seconds: 3600 },
    { label: "ADMIN.APP_KEYS_TTL_6_HOURS", seconds: 21600 },
    { label: "ADMIN.APP_KEYS_TTL_DAY", seconds: 86400 },
    { label: "ADMIN.APP_KEYS_TTL_WEEK", seconds: 604800 },
    { label: "ADMIN.APP_KEYS_TTL_MONTH", seconds: 2592e3 },
    { label: "ADMIN.APP_KEYS_TTL_90_DAYS", seconds: 7776e3 },
    { label: "ADMIN.APP_KEYS_TTL_YEAR", seconds: 31536e3 }
  ];
  setSearch = (term = "") => {
    this.search_term.set(term);
    this.loadUsers();
  };
  ngOnInit() {
    this.domain.set(this._data.domain);
    if (this.editing) {
      const key = this._data.key;
      this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
        id: key.id,
        name: key.name,
        description: key.description,
        scopes: key.scopes || [],
        user: key.user ? newItem(UserAdminMetadataResponse, key.user) : void 0,
        user_id: key.user_id,
        permissions: key.permissions || null,
        expires_at: key.expires_at ?? null
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
  /** Select the user that the user picked in the autocomplete */
  pickUser(value) {
    const user = this.users().find((item) => item === value);
    if (user)
      this.selectUser(user);
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
  async save() {
    await submit(this.form, async () => {
      const metadata = __spreadValues({}, this.formModel());
      if (this.editing || metadata.ttl == null)
        delete metadata.ttl;
      if (metadata.expires_at == null)
        delete metadata.expires_at;
      this.event.emit({ reason: "done", metadata });
    });
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
  }
  /** Show the assigned user in the input, and load it if the key has only its id */
  async loadSelectedUser() {
    const { user: selected_user, user_id } = this.formModel();
    if (selected_user) {
      this.search_term.set(this._userLabel(selected_user));
      return;
    }
    if (!user_id)
      return;
    const user = await users_exports.show({ id: user_id }).then(orThrow).then((data) => newItem(UserAdminMetadataResponse, data)).catch(() => null);
    if (!user)
      return;
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { user }));
    this.search_term.set(this._userLabel(user));
  }
  loadUsers() {
    this.timeout("load_users", async () => {
      this.user_list_loading.set(true);
      try {
        const users = this.domain() ? (await users_exports.query({
          authority_id: this.domain().id,
          q: this.search_term()
        }).then(orThrowPage)).data.map((data) => newItem(UserAdminMetadataResponse, data)) : [];
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275APIKeyModalComponent_BaseFactory;
    return function APIKeyModalComponent_Factory(__ngFactoryType__) {
      return (\u0275APIKeyModalComponent_BaseFactory || (\u0275APIKeyModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_APIKeyModalComponent)))(__ngFactoryType__ || _APIKeyModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _APIKeyModalComponent, selectors: [["api-key-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 85, vars: 73, consts: [["auto", "appAutocomplete"], ["userAuto", "appAutocomplete"], [3, "save", "heading", "loading"], [1, "w-full"], [1, "flex", "flex-col"], ["for", "name"], [3, "placeholder", "formField"], ["error", ""], ["for", "scope"], ["inputId", "scope", "aria-label", "Scopes", "placeholder", "Scopes...", 3, "textChange", "separators", "autocomplete", "formField"], [3, "value"], ["for", "user"], ["prefix", "", 1, "relative", "-left-1", 3, "user"], ["prefix", "", 1, "prefix"], ["id", "user", "autocomplete", "off", 3, "ngModelChange", "focus", "blur", "ngModel", "ngModelOptions", "appAutocomplete", "placeholder"], ["suffix", "", 1, "flex", "items-center", "gap-2"], ["suffix", "", 1, "px-2"], ["icon", "", "type", "button"], [3, "optionSelected"], [3, "disabled"], ["for", "permissions", "id", "permissions-label"], ["id", "permissions", "aria-labelledby", "permissions-label", "data-testid", "api-key-permissions", "placeholder", "None", 3, "formField"], ["value", "user"], ["value", "support"], ["value", "admin"], ["for", "expires_at"], ["id", "expires_at", "type", "datetime-local", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["icon", "", "suffix", "", "type", "button"], [1, "relative", "-left-0.5", "text-2xl"], [1, "border-base-300", "border-t-info", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2"], ["icon", "", "type", "button", 3, "click"], [1, "flex", "min-w-0", "items-center", "space-x-3", "py-2"], [1, "shrink-0", 3, "user"], [1, "min-w-0", "flex-1", "leading-tight"], [1, "truncate", "font-medium"], [1, "text-base-content/60", "truncate", "text-xs"], [1, "border-base-300", "border", "px-2"], ["icon", "", "suffix", "", "type", "button", 3, "click"], ["for", "ttl", "id", "ttl-label"], ["id", "ttl", "aria-labelledby", "ttl-label", "data-testid", "api-key-ttl", 3, "ngModelChange", "placeholder", "ngModel", "ngModelOptions"]], template: function APIKeyModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function APIKeyModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(2, "form", 3)(3, "div", 4)(4, "label", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "app-form-field")(10, "input", 6);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 4)(16, "label", 5);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-form-field")(20, "textarea", 6);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 4)(23, "label", 8);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "app-form-field")(29, "app-chip-list", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275listener("textChange", function APIKeyModalComponent_Template_app_chip_list_textChange_29_listener($event) {
        return ctx.scope_search.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 7);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "app-autocomplete", null, 0);
      \u0275\u0275repeaterCreate(35, APIKeyModalComponent_For_36_Template, 2, 2, "app-option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 4)(38, "label", 11);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "app-form-field");
      \u0275\u0275conditionalCreate(44, APIKeyModalComponent_Conditional_44_Template, 1, 1, "a-user-avatar", 12)(45, APIKeyModalComponent_Conditional_45_Template, 3, 0, "div", 13);
      \u0275\u0275elementStart(46, "input", 14);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function APIKeyModalComponent_Template_input_ngModelChange_46_listener($event) {
        return ctx.setSearch($event);
      })("focus", function APIKeyModalComponent_Template_input_focus_46_listener() {
        return ctx.setSearch(ctx.search_term());
      })("blur", function APIKeyModalComponent_Template_input_blur_46_listener() {
        return ctx.resetUserSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 15);
      \u0275\u0275conditionalCreate(49, APIKeyModalComponent_Conditional_49_Template, 2, 0, "span", 16);
      \u0275\u0275conditionalCreate(50, APIKeyModalComponent_Conditional_50_Template, 4, 3, "button", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 7);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "app-autocomplete", 18, 1);
      \u0275\u0275listener("optionSelected", function APIKeyModalComponent_Template_app_autocomplete_optionSelected_54_listener($event) {
        return ctx.pickUser($event.value);
      });
      \u0275\u0275repeaterCreate(56, APIKeyModalComponent_For_57_Template, 9, 5, "app-option", 10, _forTrack0);
      \u0275\u0275conditionalCreate(58, APIKeyModalComponent_Conditional_58_Template, 2, 1, "app-option", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 4)(60, "label", 20);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "app-form-field")(64, "app-select", 21);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(65, "app-option", 10);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "app-option", 22);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "app-option", 23);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "app-option", 24);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "div", 4)(78, "label", 25);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "app-form-field")(82, "input", 26);
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function APIKeyModalComponent_Template_input_ngModelChange_82_listener($event) {
        return ctx.setExpiry($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(83, APIKeyModalComponent_Conditional_83_Template, 4, 3, "button", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(84, APIKeyModalComponent_Conditional_84_Template, 12, 13, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const auto_r8 = \u0275\u0275reference(34);
      const userAuto_r9 = \u0275\u0275reference(55);
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 36, ctx.editing ? "ADMIN.APP_KEYS_EDIT" : "ADMIN.APP_KEYS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 38, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 40, "COMMON.FIELD_NAME"))("formField", ctx.form.name);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 42, "ADMIN.APP_KEYS_NAME_REQUIRED"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 44, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 46, "COMMON.FIELD_DESCRIPTION"))("formField", ctx.form.description);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 48, "ADMIN.APP_KEYS_FIELD_SCOPES"));
      \u0275\u0275advance(5);
      \u0275\u0275property("separators", \u0275\u0275pureFunction0(70, _c0))("autocomplete", auto_r8)("formField", ctx.form.scopes);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 50, "ADMIN.APP_KEYS_SCOPES_REQUIRED"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.filtered_scopes());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 52, "USERS.SINGULAR"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.formModel().user?.id ? 44 : 45);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.search_term())("ngModelOptions", \u0275\u0275pureFunction0(71, _c1))("appAutocomplete", userAuto_r9)("placeholder", \u0275\u0275pipeBind1(47, 54, "USERS.SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.user_list_loading() ? 49 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formModel().user?.id ? 50 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 56, "COMMON.FIELD_REQUIRED"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.users());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.users()?.length ? 58 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 58, "ADMIN.PERMISSIONS"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.permissions);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("value", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 60, "ADMIN.PERMISSIONS_NONE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 62, "ADMIN.PERMISSIONS_USER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 64, "ADMIN.PERMISSIONS_SUPPORT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 66, "ADMIN.PERMISSIONS_ADMIN"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 68, "ADMIN.APP_KEYS_FIELD_EXPIRES_AT"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.expires_at_input())("ngModelOptions", \u0275\u0275pureFunction0(72, _c1));
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formModel().expires_at ? 83 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.editing ? 84 : -1);
    }
  }, dependencies: [
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    FormField,
    FullscreenModalShellComponent,
    AutocompleteComponent,
    AutocompleteTriggerDirective,
    ChipListComponent,
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
                    <app-form-field>
                        <input
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            [formField]="form.name"
                        />
                        <div error>
                            {{ 'ADMIN.APP_KEYS_NAME_REQUIRED' | translate }}
                        </div>
                    </app-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="name">{{
                        'COMMON.FIELD_DESCRIPTION' | translate
                    }}</label>
                    <app-form-field>
                        <textarea
                            [placeholder]="
                                'COMMON.FIELD_DESCRIPTION' | translate
                            "
                            [formField]="form.description"
                        ></textarea>
                    </app-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="scope"
                        >{{ 'ADMIN.APP_KEYS_FIELD_SCOPES' | translate
                        }}<span>*</span></label
                    >
                    <app-form-field>
                        <app-chip-list
                            inputId="scope"
                            aria-label="Scopes"
                            placeholder="Scopes..."
                            [separators]="['Enter', ',', ' ']"
                            [autocomplete]="auto"
                            [formField]="form.scopes"
                            (textChange)="scope_search.set($event)"
                        />
                        <div error>
                            {{ 'ADMIN.APP_KEYS_SCOPES_REQUIRED' | translate }}
                        </div>
                    </app-form-field>
                    <app-autocomplete #auto="appAutocomplete">
                        @for (option of filtered_scopes(); track option) {
                            <app-option [value]="option">
                                {{ option }}
                            </app-option>
                        }
                    </app-autocomplete>
                </div>
                <div class="flex flex-col">
                    <label for="user">
                        {{ 'USERS.SINGULAR' | translate }}<span>*</span>
                    </label>
                    <app-form-field>
                        @if (formModel().user?.id) {
                            <a-user-avatar
                                prefix
                                class="relative -left-1"
                                [user]="formModel().user"
                            />
                        } @else {
                            <div class="prefix" prefix>
                                <icon class="relative -left-0.5 text-2xl">
                                    search
                                </icon>
                            </div>
                        }
                        <input
                            id="user"
                            autocomplete="off"
                            [ngModel]="search_term()"
                            (ngModelChange)="setSearch($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [appAutocomplete]="userAuto"
                            [placeholder]="'USERS.SEARCH' | translate"
                            (focus)="setSearch(search_term())"
                            (blur)="resetUserSearch()"
                        />
                        <div suffix class="flex items-center gap-2">
                            @if (user_list_loading()) {
                                <span suffix class="px-2">
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
                                    [attr.aria-label]="
                                        'COMMON.CLEAR_VALUE' | translate
                                    "
                                >
                                    <icon>close</icon>
                                </button>
                            }
                        </div>
                        <div error>
                            {{ 'COMMON.FIELD_REQUIRED' | translate }}
                        </div>
                    </app-form-field>
                    <app-autocomplete
                        #userAuto="appAutocomplete"
                        (optionSelected)="pickUser($event.value)"
                    >
                        @for (item of users(); track item.id) {
                            <app-option [value]="item">
                                <div
                                    class="flex min-w-0 items-center space-x-3 py-2"
                                >
                                    <a-user-avatar
                                        class="shrink-0"
                                        [user]="item"
                                    />
                                    <div class="min-w-0 flex-1 leading-tight">
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
                            </app-option>
                        }
                        @if (!users()?.length) {
                            <app-option [disabled]="true">
                                No results
                            </app-option>
                        }
                    </app-autocomplete>
                </div>
                <div class="flex flex-col">
                    <label for="permissions" id="permissions-label">{{
                        'ADMIN.PERMISSIONS' | translate
                    }}</label>
                    <app-form-field>
                        <app-select
                            id="permissions"
                            aria-labelledby="permissions-label"
                            data-testid="api-key-permissions"
                            placeholder="None"
                            [formField]="form.permissions"
                        >
                            <app-option [value]="null">{{
                                'ADMIN.PERMISSIONS_NONE' | translate
                            }}</app-option>
                            <app-option value="user">{{
                                'ADMIN.PERMISSIONS_USER' | translate
                            }}</app-option>
                            <app-option value="support">{{
                                'ADMIN.PERMISSIONS_SUPPORT' | translate
                            }}</app-option>
                            <app-option value="admin">{{
                                'ADMIN.PERMISSIONS_ADMIN' | translate
                            }}</app-option>
                        </app-select>
                    </app-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="expires_at">{{
                        'ADMIN.APP_KEYS_FIELD_EXPIRES_AT' | translate
                    }}</label>
                    <app-form-field>
                        <input
                            id="expires_at"
                            type="datetime-local"
                            [ngModel]="expires_at_input()"
                            (ngModelChange)="setExpiry($event)"
                            [ngModelOptions]="{ standalone: true }"
                        />
                        @if (formModel().expires_at) {
                            <button
                                icon
                                suffix
                                type="button"
                                (click)="setExpiry('')"
                                [attr.aria-label]="
                                    'COMMON.CLEAR_VALUE' | translate
                                "
                            >
                                <icon>close</icon>
                            </button>
                        }
                    </app-form-field>
                </div>
                @if (!editing) {
                    <div class="flex flex-col">
                        <label for="ttl" id="ttl-label">{{
                            'ADMIN.APP_KEYS_FIELD_TTL' | translate
                        }}</label>
                        <app-form-field>
                            <app-select
                                id="ttl"
                                aria-labelledby="ttl-label"
                                data-testid="api-key-ttl"
                                [placeholder]="
                                    'ADMIN.APP_KEYS_FIELD_TTL_HINT' | translate
                                "
                                [ngModel]="formModel().ttl"
                                (ngModelChange)="setTTL($event)"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                <app-option [value]="null">{{
                                    'ADMIN.APP_KEYS_TTL_NONE' | translate
                                }}</app-option>
                                @for (
                                    preset of ttl_presets;
                                    track preset.seconds
                                ) {
                                    <app-option [value]="preset.seconds">{{
                                        preset.label | translate
                                    }}</app-option>
                                }
                            </app-select>
                        </app-form-field>
                    </div>
                }
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      TranslatePipe,
      FormsModule,
      FormField,
      FullscreenModalShellComponent,
      AutocompleteComponent,
      AutocompleteTriggerDirective,
      ChipListComponent,
      IconComponent,
      UserAvatarComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(APIKeyModalComponent, { className: "APIKeyModalComponent", filePath: "src/app/admin/api-keys/api-key-modal.component.ts", lineNumber: 319 });
})();

// src/app/admin/api-keys/api-keys.service.ts
function keyBody(data) {
  const body = toBody(ApiKey, data);
  return "permissions" in data ? __spreadProps(__spreadValues({}, body), { permissions: permissionNumber(data.permissions) }) : body;
}
function apiKeyExpiry({ expires_at, ttl }, now = Date.now()) {
  return expires_at ?? (ttl ? getUnixTime(now) + ttl : void 0);
}
var MAX_SAVE_ATTEMPTS = 20;
var APIKeyService = class _APIKeyService {
  _dialog = inject(Dialog);
  _admin_data = inject(AdminDataService);
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
  _available_scopes = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available_scopes" } : (
    /* istanbul ignore next */
    {}
  )), { loader: ({ abortSignal }) => root_exports.scopes({}, { signal: abortSignal }).then(orThrow) }));
  available_scopes = computed(
    () => this._available_scopes.hasValue() ? this._available_scopes.value() : [],
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
    loader: async ({ params, abortSignal }) => {
      const { domain } = params;
      this._loading.set(true);
      try {
        if (!domain)
          return [];
        const response = await api_keys_exports.query({ authority_id: domain.id }, { signal: abortSignal }).then(orThrowPage);
        return [...response.data];
      } finally {
        if (!abortSignal.aborted)
          this._loading.set(false);
      }
    }
  }));
  available_keys = computed(
    () => this._available_keys.hasValue() ? this._available_keys.value() : [],
    ...ngDevMode ? [{ debugName: "available_keys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Text of the error of the last key list load, or empty when it loaded.
   * A retry keeps the error until it ends, so the Retry button stays
   */
  load_error = linkedSignal({
    source: () => this._available_keys.status(),
    computation: (status, previous) => {
      if (status === "error") {
        return describeError(this._available_keys.error());
      }
      return status === "reloading" ? previous?.value ?? "" : "";
    }
  }).asReadonly();
  /** Loads the key list again, such as after a failed load */
  reloadKeys() {
    this._available_keys.reload();
  }
  async selectDefaultDomain() {
    return this._admin_data.selectDefaultDomain("api-keys");
  }
  async newKey() {
    const ref = this._dialog.open(APIKeyModalComponent, {
      data: { domain: this._domain() }
    });
    for (let attempt = 0; attempt < MAX_SAVE_ATTEMPTS; attempt++) {
      const details = await waitForDialog(ref, "done");
      if (details?.reason !== "done")
        return;
      ref.componentInstance.loading.set("Creating new API key...");
      const domain = this._domain();
      const api_key = details.metadata;
      const key = await api_keys_exports.create({
        body: keyBody(__spreadProps(__spreadValues({}, api_key), {
          expires_at: apiKeyExpiry(api_key),
          authority_id: domain.id
        }))
      }).then(orThrow).catch((_) => {
        ref.componentInstance.loading.set("");
        notifyError(describeError(_));
        return null;
      });
      if (!key)
        continue;
      this._last_key.set(key);
      this._change.set(Date.now());
      notifySuccess("Successfully created new API key.");
      break;
    }
    ref.close();
  }
  async quickCreateKey() {
    const domain = this._domain();
    if (!domain)
      return;
    this._loading.set(true);
    try {
      const user = await this._currentUser();
      if (!user?.id) {
        notifyError("Unable to load current user details.");
        return;
      }
      const scopes = await this._scopes();
      if (!scopes.length) {
        notifyError("Unable to load API key scopes.");
        return;
      }
      const key = await api_keys_exports.create({
        body: keyBody({
          name: `${this._userLabel(user)} API Key`,
          description: `Created for ${this._userLabel(user)}`,
          scopes: ["public"],
          user_id: user.id,
          permissions: "user",
          authority_id: domain.id,
          expires_at: getUnixTime(addDays(Date.now(), 1))
          // expire 1 day from creation
        })
      }).then(orThrow).catch((_) => {
        notifyError(describeError(_));
        return null;
      });
      if (!key)
        return;
      this._last_key.set(key);
      this._change.set(Date.now());
      notifySuccess("Successfully created new API key.");
    } finally {
      this._loading.set(false);
    }
  }
  async editKey(key) {
    const ref = this._dialog.open(APIKeyModalComponent, {
      data: { domain: this._domain(), key }
    });
    for (let attempt = 0; attempt < MAX_SAVE_ATTEMPTS; attempt++) {
      const details = await waitForDialog(ref, "done");
      if (details?.reason !== "done")
        return;
      ref.componentInstance.loading.set("Updating API key...");
      const domain = this._domain();
      try {
        await api_keys_exports.update({
          id: key.id,
          body: keyBody(__spreadProps(__spreadValues({}, details.metadata), {
            authority_id: domain.id
          }))
        }).then(orThrow);
      } catch (_) {
        ref.componentInstance.loading.set("");
        notifyError(describeError(_));
        continue;
      }
      this._change.set(Date.now());
      notifySuccess("Successfully updated API key.");
      break;
    }
    ref.close();
  }
  async removeKey(key) {
    const removed = await confirmAndRun(this._dialog, {
      title: "Remove API Key",
      content: `Are you sure you wish to remove this API key?
                    Removing this key may result in applications using this key to stop working.`,
      icon: { content: "delete" }
    }, {
      loading: "Removing API key...",
      action: () => api_keys_exports.destroy({ id: key.id }).then(orThrow),
      error: (reason) => reason,
      success: "Successfully removed API key."
    });
    if (removed)
      this._change.set(Date.now());
  }
  async _currentUser() {
    const cached_user = currentUser();
    if (cached_user?.id)
      return cached_user;
    return users_exports.current({}).then(orThrow).catch(() => null);
  }
  async _scopes() {
    const scopes = this.available_scopes();
    if (scopes.length)
      return scopes;
    return root_exports.scopes().then(orThrow).catch(() => []);
  }
  _userLabel(user) {
    return user?.name || user?.email || "Current User";
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
var _c02 = ["heading"];
var _c12 = ["retry"];
var _c2 = (a0) => ({ error: a0 });
var _c3 = (a0) => ({ key: "name", name: a0 });
var _c4 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "scopes", name: a0, content: a1 });
var _c6 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "6rem" });
var _c7 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "8rem" });
var _c8 = (a0, a1) => ({ key: "expires_at", name: a0, content: a1, size: "9rem" });
var _c9 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "6rem", sortable: false });
var _c10 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function AdminAPIKeysComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 20)(2, "div", 21)(3, "h3", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function AdminAPIKeysComponent_Conditional_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyKey());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "ADMIN.APP_KEYS_LAST_DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.last_key()?.name || "Unnamed API Key", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.last_key()?.x_api_key, " ");
  }
}
function AdminAPIKeysComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 25);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 26, 7);
    \u0275\u0275listener("click", function AdminAPIKeysComponent_Conditional_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reload());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, "ADMIN.APP_KEYS_LOAD_ERROR", \u0275\u0275pureFunction1(9, _c2, ctx_r1.load_error())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-disabled", ctx_r1.loading() || null)("aria-busy", ctx_r1.loading() || null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "COMMON.RETRY"), " ");
  }
}
function AdminAPIKeysComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const scopes_template_r4 = \u0275\u0275reference(23);
    const description_template_r5 = \u0275\u0275reference(25);
    const access_template_r6 = \u0275\u0275reference(27);
    const data_from_template_r7 = \u0275\u0275reference(29);
    const expires_template_r8 = \u0275\u0275reference(31);
    const actions_template_r9 = \u0275\u0275reference(33);
    \u0275\u0275property("data", ctx_r1.key_list)("columns", \u0275\u0275pureFunction7(40, _c10, \u0275\u0275pureFunction1(20, _c3, \u0275\u0275pipeBind1(1, 4, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(22, _c4, \u0275\u0275pipeBind1(2, 6, "COMMON.FIELD_DESCRIPTION"), description_template_r5), \u0275\u0275pureFunction2(25, _c5, \u0275\u0275pipeBind1(3, 8, "ADMIN.APP_KEYS_FIELD_SCOPES"), scopes_template_r4), \u0275\u0275pureFunction2(28, _c6, \u0275\u0275pipeBind1(4, 10, "ADMIN.APP_KEYS_FIELD_PERMISSIONS"), access_template_r6), \u0275\u0275pureFunction2(31, _c7, \u0275\u0275pipeBind1(5, 12, "COMMON.CREATED_AT"), data_from_template_r7), \u0275\u0275pureFunction2(34, _c8, \u0275\u0275pipeBind1(6, 14, "ADMIN.APP_KEYS_FIELD_EXPIRES_AT"), expires_template_r8), \u0275\u0275pureFunction2(37, _c9, \u0275\u0275pipeBind1(7, 16, "COMMON.ACTIONS"), actions_template_r9)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(8, 18, "ADMIN.APP_KEYS_LIST_EMPTY"));
  }
}
function AdminAPIKeysComponent_ng_template_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", scope_r10, " ");
  }
}
function AdminAPIKeysComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, AdminAPIKeysComponent_ng_template_22_For_2_Template, 2, 1, "code", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r11);
  }
}
function AdminAPIKeysComponent_ng_template_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"));
  }
}
function AdminAPIKeysComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminAPIKeysComponent_ng_template_24_Conditional_2_Template, 3, 3, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r12, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r12 ? 2 : -1);
  }
}
function AdminAPIKeysComponent_ng_template_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_KEYS_PERMISSIONS_EMPTY"));
  }
}
function AdminAPIKeysComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminAPIKeysComponent_ng_template_26_Conditional_2_Template, 3, 3, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r13, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r13 ? 2 : -1);
  }
}
function AdminAPIKeysComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r14 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +data_r14 * 1e3), " ");
  }
}
function AdminAPIKeysComponent_ng_template_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r15 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-error", ctx_r1.isExpired(data_r15));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isExpired(data_r15) ? "Expired" : \u0275\u0275pipeBind1(2, 3, +data_r15 * 1e3), " ");
  }
}
function AdminAPIKeysComponent_ng_template_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_KEYS_TTL_NONE"));
  }
}
function AdminAPIKeysComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275conditionalCreate(1, AdminAPIKeysComponent_ng_template_30_Conditional_1_Template, 3, 5, "span", 33)(2, AdminAPIKeysComponent_ng_template_30_Conditional_2_Template, 3, 3, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r15 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r15 ? 1 : 2);
  }
}
function AdminAPIKeysComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "button", 35);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminAPIKeysComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editKey(row_r17));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminAPIKeysComponent_ng_template_32_Template_button_click_5_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteKey(row_r17));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 2, "COMMON.EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.APP_KEYS_REMOVE"));
  }
}
var AdminAPIKeysComponent = class _AdminAPIKeysComponent {
  _service = inject(APIKeyService);
  _clipboard = inject(Clipboard);
  domain = this._service.active_domain;
  key_list = this._service.available_keys;
  last_key = this._service.last_key;
  loading = this._service.loading;
  load_error = this._service.load_error;
  newKey = () => this._service.newKey();
  quickCreateKey = () => this._service.quickCreateKey();
  editKey = (k) => this._service.editKey(k);
  deleteKey = (k) => this._service.removeKey(k);
  _heading = viewChild.required(
    "heading",
    ...ngDevMode ? [{ debugName: "_heading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _retry = viewChild(
    "retry",
    ...ngDevMode ? [{ debugName: "_retry" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Load the list again. Retry stays while it loads, so it keeps focus */
  reload() {
    if (!this.loading())
      this._service.reloadKeys();
  }
  constructor() {
    effect(() => {
      const retry = this._retry()?.nativeElement;
      if (this.loading() || this.load_error() || !retry)
        return;
      if (document.activeElement === retry) {
        this._heading().nativeElement.focus();
      }
    });
  }
  async ngOnInit() {
    await this._service.selectDefaultDomain();
  }
  /** Whether the given `expires_at` epoch (seconds) is in the past */
  isExpired(expires_at) {
    return !!expires_at && +expires_at * 1e3 < Date.now();
  }
  async copyKey() {
    const key = this.last_key();
    if (!key?.x_api_key)
      return;
    this._clipboard.copy(key.x_api_key);
    notifySuccess(i18n("ADMIN.APP_KEYS_COPIED"));
  }
  static \u0275fac = function AdminAPIKeysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAPIKeysComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAPIKeysComponent, selectors: [["admin-api-keys"]], viewQuery: function AdminAPIKeysComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._heading, _c02, 5)(ctx._retry, _c12, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, decls: 34, vars: 15, consts: [["heading", ""], ["scopes_template", ""], ["description_template", ""], ["access_template", ""], ["data_from_template", ""], ["expires_template", ""], ["actions_template", ""], ["retry", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], ["tabindex", "-1", 1, "text-2xl", "outline-none"], [1, "flex", "items-center", "space-x-2"], ["key", "api-keys", "field_class", "h-12"], ["icon", "", "default", "", "ripple", "", 1, "text-xl", 3, "click", "disabled", "appTooltip"], [1, "mx-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "items-start", "space-x-2"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], ["role", "alert", 1, "flex", "flex-col", "items-center", "space-y-4", "p-8", "text-center"], [1, "block", "min-w-7xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "h-12", "w-full"], [1, "border-base-300", "flex", "w-full", "flex-col", "rounded-sm", "border", "shadow-sm"], [1, "border-base-300", "bg-base-200", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "border-b"], [1, "px-4", "py-2", "text-lg", "font-medium"], [1, "mono", "bg-base-100", "rounded-sm", "px-2", "py-1", "text-xs", "opacity-60"], ["ripple", "", 1, "mono", "rounded", "px-4", "py-3", "wrap-break-word", "opacity-60", "select-all", 3, "click"], [1, "text-error", "text-4xl"], ["btn", "", "ripple", "", 3, "click"], [1, "flex", "flex-wrap", "px-4", "py-2"], [1, "m-1", "text-xs"], [1, "p-4", "text-xs"], [1, "opacity-30"], [1, "p-4", "font-mono", "text-xs", "uppercase"], [1, "p-4"], [3, "text-error"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "ripple", "", 3, "click", "appTooltip"], ["icon", "", "default", "", "error", "", "ripple", "", 3, "click", "appTooltip"]], template: function AdminAPIKeysComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2", 10, 0);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 11);
      \u0275\u0275element(7, "admin-domain-select", 12);
      \u0275\u0275elementStart(8, "button", 13);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("click", function AdminAPIKeysComponent_Template_button_click_8_listener() {
        return ctx.newKey();
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 13);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("click", function AdminAPIKeysComponent_Template_button_click_12_listener() {
        return ctx.quickCreateKey();
      });
      \u0275\u0275elementStart(14, "icon");
      \u0275\u0275text(15, "more_time");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(16, AdminAPIKeysComponent_Conditional_16_Template, 10, 5, "div", 14);
      \u0275\u0275elementStart(17, "div", 15);
      \u0275\u0275element(18, "app-progress-bar", 16);
      \u0275\u0275conditionalCreate(19, AdminAPIKeysComponent_Conditional_19_Template, 10, 11, "div", 17)(20, AdminAPIKeysComponent_Conditional_20_Template, 9, 48, "simple-table", 18);
      \u0275\u0275element(21, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, AdminAPIKeysComponent_ng_template_22_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(24, AdminAPIKeysComponent_ng_template_24_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(26, AdminAPIKeysComponent_ng_template_26_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, AdminAPIKeysComponent_ng_template_28_Template, 3, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(30, AdminAPIKeysComponent_ng_template_30_Template, 3, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(32, AdminAPIKeysComponent_ng_template_32_Template, 9, 6, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "ADMIN.APP_KEYS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.domain() === null)("appTooltip", \u0275\u0275pipeBind1(9, 11, "ADMIN.APP_KEYS_ADD"));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.domain() === null || ctx.loading() === true)("appTooltip", \u0275\u0275pipeBind1(13, 13, "ADMIN.APP_KEYS_QUICK_CREATE"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.last_key() ? 16 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("invisible", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.load_error() ? 19 : 20);
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    AdminDomainSelectComponent,
    IconComponent,
    SimpleTableComponent,
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
                <h2 #heading tabindex="-1" class="text-2xl outline-none">
                    {{ 'ADMIN.APP_KEYS_HEADER' | translate }}
                </h2>
                <div class="flex items-center space-x-2">
                    <admin-domain-select key="api-keys" field_class="h-12" />
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        [disabled]="domain() === null"
                        (click)="newKey()"
                        [appTooltip]="'ADMIN.APP_KEYS_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        [disabled]="domain() === null || loading() === true"
                        (click)="quickCreateKey()"
                        [appTooltip]="'ADMIN.APP_KEYS_QUICK_CREATE' | translate"
                    >
                        <icon>more_time</icon>
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
                                {{ last_key()?.name || 'Unnamed API Key' }}
                            </div>
                        </div>
                        <button
                            ripple
                            class="mono rounded px-4 py-3 wrap-break-word opacity-60 select-all"
                            (click)="copyKey()"
                        >
                            {{ last_key()?.x_api_key }}
                        </button>
                    </div>
                </div>
            }
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="loading() !== true"
                />
                @if (load_error()) {
                    <div
                        role="alert"
                        class="flex flex-col items-center space-y-4 p-8 text-center"
                    >
                        <icon class="text-error text-4xl">error</icon>
                        <p>
                            {{
                                'ADMIN.APP_KEYS_LOAD_ERROR'
                                    | translate: { error: load_error() }
                            }}
                        </p>
                        <button
                            #retry
                            btn
                            ripple
                            [attr.aria-disabled]="loading() || null"
                            [attr.aria-busy]="loading() || null"
                            (click)="reload()"
                        >
                            {{ 'COMMON.RETRY' | translate }}
                        </button>
                    </div>
                } @else {
                    <simple-table
                        class="block min-w-7xl text-sm"
                        [data]="key_list"
                        [columns]="[
                            {
                                key: 'name',
                                name: 'COMMON.FIELD_NAME' | translate,
                            },
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
                                    'ADMIN.APP_KEYS_FIELD_PERMISSIONS'
                                    | translate,
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
                                key: 'expires_at',
                                name:
                                    'ADMIN.APP_KEYS_FIELD_EXPIRES_AT'
                                    | translate,
                                content: expires_template,
                                size: '9rem',
                            },
                            {
                                key: 'actions',
                                name: 'COMMON.ACTIONS' | translate,
                                hide_name: true,
                                content: actions_template,
                                size: '6rem',
                                sortable: false,
                            },
                        ]"
                        [sortable]="true"
                        [empty_message]="
                            'ADMIN.APP_KEYS_LIST_EMPTY' | translate
                        "
                    />
                }
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
        <ng-template #expires_template let-data="data">
            <div class="p-4">
                @if (data) {
                    <span [class.text-error]="isExpired(data)">
                        {{
                            isExpired(data)
                                ? 'Expired'
                                : (+data * 1000 | dateFrom)
                        }}
                    </span>
                } @else {
                    <span class="opacity-30">{{
                        'ADMIN.APP_KEYS_TTL_NONE' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    ripple
                    [appTooltip]="'COMMON.EDIT' | translate"
                    (click)="editKey(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    ripple
                    [appTooltip]="'ADMIN.APP_KEYS_REMOVE' | translate"
                    (click)="deleteKey(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      AdminDomainSelectComponent,
      TranslatePipe,
      IconComponent,
      DateFromPipe,
      SimpleTableComponent
    ] }]
  }], () => [], { _heading: [{ type: ViewChild, args: ["heading", { isSignal: true }] }], _retry: [{ type: ViewChild, args: ["retry", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAPIKeysComponent, { className: "AdminAPIKeysComponent", filePath: "src/app/admin/api-keys/api-keys.component.ts", lineNumber: 259 });
})();
export {
  AdminAPIKeysComponent
};
//# debugId=50cf578d-6b8a-5213-b72b-47787c8c0850
//# sourceMappingURL=chunk-G76MQ6B4.js.map
