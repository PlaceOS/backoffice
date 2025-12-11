import {
  getUnixTime
} from "./chunk-MXECN6VN.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-3EHCOJYI.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-X7VIMHSB.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipsModule,
  addChipItem,
  removeChipItem
} from "./chunk-EPSJ7BWT.js";
import {
  DateFromPipe
} from "./chunk-EJIIP22G.js";
import {
  Clipboard
} from "./chunk-C7BMCHRG.js";
import {
  openConfirmModal
} from "./chunk-XZLJQL74.js";
import {
  SimpleTableComponent
} from "./chunk-UAQR3B5P.js";
import {
  FullscreenModalShellComponent
} from "./chunk-JCVHEY5H.js";
import "./chunk-VPDNCESF.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DXEXLE3X.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-LGSLM77D.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-6ATATSUD.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HUPL3SA6.js";
import "./chunk-ZN4X52CQ.js";
import "./chunk-W3GXKXZC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog
} from "./chunk-H3NFP65B.js";
import "./chunk-ALEPO5ZJ.js";
import {
  AsyncHandler
} from "./chunk-VGLA4YGG.js";
import "./chunk-EGRPP66T.js";
import {
  IconComponent
} from "./chunk-XRZ4NHWV.js";
import "./chunk-OD44YKN7.js";
import {
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-SU4H5GJ6.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-RXOUTXM3.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-XGWC243Z.js";
import "./chunk-5Y26MRIB.js";
import {
  COMMA,
  ENTER,
  MatRipple,
  SPACE
} from "./chunk-26CSHF2R.js";
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
  Input,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  Output,
  ReactiveFormsModule,
  SlicePipe,
  Validators,
  ViewChild,
  computed,
  getInvalidFields,
  inject,
  input,
  nextValueFrom,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
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
} from "./chunk-AJKLM77M.js";
import {
  BehaviorSubject,
  I,
  N,
  O,
  P,
  Ut,
  combineLatest,
  debounceTime,
  first,
  lastValueFrom,
  map,
  of,
  shareReplay,
  switchMap,
  tap,
  xa,
  xu
} from "./chunk-ESVM3M45.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

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

// src/app/ui/custom-fields/action-field.component.ts
var _c0 = ["*"];
var ActionFieldComponent = class _ActionFieldComponent {
  /** Name of the field */
  name = input(void 0, ...ngDevMode ? [{ debugName: "name" }] : []);
  /** Whether form field is disabled */
  disabled = input(void 0, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  /** Emitter for user interaction events */
  performedAction = output();
  /** Whether to show tooltip */
  show_tooltip = false;
  /**
   * Emit that the user has performed an action on the field
   */
  performAction() {
    this.show_tooltip = !this.show_tooltip;
    this.performedAction.emit();
  }
  static \u0275fac = function ActionFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionFieldComponent, selectors: [["an-action-field"]], inputs: { name: [1, "name"], disabled: [1, "disabled"] }, outputs: { performedAction: "performedAction" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [["form-field", "", 1, "hover:border-base-content", "flex", "items-center", "rounded-sm", "border", "border-gray-200", "px-4", "py-2.5", 3, "click", "keydown.enter"], ["placeholder", "", 1, "w-0", "flex-1", "truncate"], [1, "-mr-2", "text-2xl"]], template: function ActionFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ActionFieldComponent_Template_button_click_0_listener() {
        return ctx.performAction();
      })("keydown.enter", function ActionFieldComponent_Template_button_keydown_enter_0_listener() {
        return ctx.performAction();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "icon", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("disabled", ctx.disabled());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" arrow_drop_", ctx.show_tooltip ? "up" : "down", " ");
    }
  }, dependencies: [IconComponent], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0 0 0 1px currentColor;\n}\n/*# sourceMappingURL=action-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionFieldComponent, [{
    type: Component,
    args: [{ selector: "an-action-field", template: `
        <button
            class="hover:border-base-content flex items-center rounded-sm border border-gray-200 px-4 py-2.5"
            [attr.disabled]="disabled()"
            form-field
            (click)="performAction()"
            (keydown.enter)="performAction()"
        >
            <div placeholder class="w-0 flex-1 truncate">
                <ng-content></ng-content>
            </div>
            <icon class="-mr-2 text-2xl">
                arrow_drop_{{ show_tooltip ? 'up' : 'down' }}
            </icon>
        </button>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;a89c969431fddd1af866f287b7ffe66378db8974de1b99cceaa796653c5f916f;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/action-field.component.ts */\n:host > div:hover {\n  box-shadow: inset 0 0 0 1px currentColor;\n}\n/*# sourceMappingURL=action-field.component.css.map */\n"] }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], performedAction: [{ type: Output, args: ["performedAction"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionFieldComponent, { className: "ActionFieldComponent", filePath: "src/app/ui/custom-fields/action-field.component.ts", lineNumber: 31 });
})();

// src/app/admin/api-keys/api-key-modal.component.ts
var _c02 = ["input"];
var _c1 = () => ({ standalone: true });
function APIKeyModalComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 28);
    \u0275\u0275listener("removed", function APIKeyModalComponent_For_32_Template_mat_chip_removed_0_listener() {
      const scope_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeScope(scope_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 29);
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
    \u0275\u0275elementStart(0, "mat-option", 30);
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
function APIKeyModalComponent_For_59_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 35);
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
function APIKeyModalComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function APIKeyModalComponent_For_59_Template_button_click_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.form.patchValue({ user: item_r9, user_id: item_r9.id });
      return \u0275\u0275resetView(ctx_r3.setSearch());
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "div", 33)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, APIKeyModalComponent_For_59_Conditional_7_Template, 3, 3, "code", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-secondary", (ctx_r3.form.value.user == null ? null : ctx_r3.form.value.user.id) === item_r9.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r9.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.sys_admin || item_r9.support ? 7 : -1);
  }
}
function APIKeyModalComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275text(1, " No results ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
var APIKeyModalComponent = class _APIKeyModalComponent extends AsyncHandler {
  _service = inject(APIKeyService);
  _domain = inject(MAT_DIALOG_DATA);
  event = new EventEmitter();
  scopes = this._service.available_scopes;
  form = new FormGroup({
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
  permissions = signal("", ...ngDevMode ? [{ debugName: "permissions" }] : []);
  user_list = signal([], ...ngDevMode ? [{ debugName: "user_list" }] : []);
  users = computed(() => {
    if (this.permissions() === "admin")
      return this.user_list().filter((_) => _.sys_admin);
    if (this.permissions() === "support")
      return this.user_list().filter((_) => _.support || _.sys_admin);
    return this.user_list().sort((a, b) => a.name?.localeCompare(b.name));
  }, ...ngDevMode ? [{ debugName: "users" }] : []);
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  _input_el = viewChild("input", ...ngDevMode ? [{ debugName: "_input_el" }] : []);
  focusInput = () => setTimeout(() => this._input_el()?.nativeElement?.focus(), 100);
  setSearch = () => this.loadUsers();
  addScope = (e) => addChipItem(this.form.controls.scopes, e);
  removeScope = (i) => removeChipItem(this.form.controls.scopes, i);
  ngOnInit() {
    this.domain.set(this._domain);
    this.subscription("changes", this.form.controls.permissions.valueChanges.subscribe((v) => this.permissions.set(v)));
    this.timeout("reset_perms", () => this.form.patchValue({ permissions: null }), 100);
    this.loadUsers();
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
    const data = __spreadValues({}, this.form.value);
    delete data.user;
    this.event.emit({ reason: "done", metadata: this.form.value });
  }
  loadUsers() {
    this.timeout("load_users", async () => {
      const users = await lastValueFrom(this.domain() ? xa({
        authority_id: this.domain().id,
        q: this.search_term()
      }).pipe(map((_) => _.data)) : of([]));
      this.user_list.set(users);
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275APIKeyModalComponent_BaseFactory;
    return function APIKeyModalComponent_Factory(__ngFactoryType__) {
      return (\u0275APIKeyModalComponent_BaseFactory || (\u0275APIKeyModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_APIKeyModalComponent)))(__ngFactoryType__ || _APIKeyModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _APIKeyModalComponent, selectors: [["api-key-modal"]], viewQuery: function APIKeyModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input_el, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 80, vars: 66, consts: [["chipList", ""], ["chip_input", ""], ["auto", "matAutocomplete"], ["menu", "matMenu"], ["input", ""], [3, "save", "heading", "loading"], [1, "w-full", 3, "formGroup"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["name", "name", "formControlName", "name", "matInput", "", 3, "placeholder"], ["name", "description", "formControlName", "description", "matInput", "", 3, "placeholder"], ["for", "scope"], ["aria-label", "Scopes"], [3, "removable"], ["matInput", "", "placeholder", "Scopes...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matAutocomplete"], ["for", "user"], ["yPosition", "below", 1, "mb-8", 3, "click", "matMenuTriggerFor"], ["appearance", "outline", 1, "no-subscript", "w-full", "px-2", 3, "click"], ["matInput", "", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["mat-menu-item", "", 1, "min-w-[24rem]", 3, "text-secondary"], ["mat-menu-item", "", 1, "min-w-[20rem]", "text-center", 3, "disabled"], ["for", "permissions"], ["name", "permissions", "formControlName", "permissions", "placeholder", "None"], [3, "value"], ["value", "user"], ["value", "support"], ["value", "admin"], [3, "removed", "removable"], ["matChipRemove", ""], [3, "click"], ["mat-menu-item", "", 1, "min-w-[24rem]", 3, "click"], [1, "flex", "w-full", "items-center", "space-x-4"], [1, "flex-1", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "px-2"]], template: function APIKeyModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 5);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function APIKeyModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.save());
      });
      \u0275\u0275elementStart(2, "form", 6)(3, "div", 7)(4, "label", 8);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-form-field", 9);
      \u0275\u0275element(10, "input", 10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementStart(12, "mat-error");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 8);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-form-field", 9);
      \u0275\u0275element(20, "textarea", 11);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 7)(23, "label", 12);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "mat-form-field", 9)(29, "mat-chip-grid", 13, 0);
      \u0275\u0275repeaterCreate(31, APIKeyModalComponent_For_32_Template, 4, 2, "mat-chip", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(33, "input", 15, 1);
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
      \u0275\u0275elementStart(43, "div", 7)(44, "label", 16);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "an-action-field", 17);
      \u0275\u0275listener("click", function APIKeyModalComponent_Template_an_action_field_click_49_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.focusInput());
      });
      \u0275\u0275elementStart(50, "div");
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "mat-menu", null, 3)(54, "mat-form-field", 18);
      \u0275\u0275listener("click", function APIKeyModalComponent_Template_mat_form_field_click_54_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275elementStart(55, "input", 19, 4);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function APIKeyModalComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search_term, $event) || (ctx.search_term = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function APIKeyModalComponent_Template_input_ngModelChange_55_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setSearch());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(58, APIKeyModalComponent_For_59_Template, 8, 5, "button", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275pipe(60, "slice");
      \u0275\u0275conditionalCreate(61, APIKeyModalComponent_Conditional_61_Template, 2, 1, "button", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 7)(63, "label", 22);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "mat-form-field", 9)(67, "mat-select", 23)(68, "mat-option", 24);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 25);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 26);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "mat-option", 27);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_29_0;
      const chipList_r10 = \u0275\u0275reference(30);
      const auto_r11 = \u0275\u0275reference(39);
      const menu_r12 = \u0275\u0275reference(53);
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 29, "ADMIN.APP_KEYS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 31, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 33, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 35, "ADMIN.APP_KEYS_NAME_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 37, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 39, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 41, "ADMIN.APP_KEYS_FIELD_SCOPES"));
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.scope_list);
      \u0275\u0275advance(2);
      \u0275\u0275property("matChipInputFor", chipList_r10)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true)("matAutocomplete", auto_r11);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 43, "ADMIN.APP_KEYS_SCOPES_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(42, 45, ctx.scopes));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 47, "USERS.SINGULAR"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matMenuTriggerFor", menu_r12);
      \u0275\u0275advance();
      \u0275\u0275classProp("opacity-30", !(ctx.form.value.user == null ? null : ctx.form.value.user.id));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (ctx.form.value.user == null ? null : ctx.form.value.user.name) || "Select user", " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.search_term);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(65, _c1))("placeholder", \u0275\u0275pipeBind1(57, 49, "USERS.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(\u0275\u0275pipeBind3(60, 51, ctx.users(), 0, 10));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!((tmp_29_0 = ctx.users()) == null ? null : tmp_29_0.length) ? 61 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 55, "ADMIN.PERMISSIONS"));
      \u0275\u0275advance(4);
      \u0275\u0275property("value", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 57, "ADMIN.PERMISSIONS_NONE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 59, "ADMIN.PERMISSIONS_USER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 61, "ADMIN.PERMISSIONS_SUPPORT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 63, "ADMIN.PERMISSIONS_ADMIN"));
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
    MatSelectModule,
    MatSelect,
    MatOption,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
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
    ActionFieldComponent,
    AsyncPipe,
    SlicePipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(APIKeyModalComponent, [{
    type: Component,
    args: [{ selector: "api-key-modal", template: `
        <fullscreen-modal-shell
            [heading]="'ADMIN.APP_KEYS_NEW' | translate"
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
                    <an-action-field
                        [matMenuTriggerFor]="menu"
                        yPosition="below"
                        class="mb-8"
                        (click)="focusInput()"
                    >
                        <div [class.opacity-30]="!form.value.user?.id">
                            {{ form.value.user?.name || 'Select user' }}
                        </div>
                    </an-action-field>
                    <mat-menu #menu="matMenu">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full px-2"
                            (click)="
                                $event.preventDefault();
                                $event.stopPropagation()
                            "
                        >
                            <input
                                matInput
                                #input
                                [(ngModel)]="search_term"
                                (ngModelChange)="setSearch()"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'USERS.SEARCH' | translate"
                            />
                        </mat-form-field>
                        @for (item of users() | slice: 0 : 10; track item) {
                            <button
                                mat-menu-item
                                class="min-w-[24rem]"
                                (click)="
                                    form.patchValue({
                                        user: item,
                                        user_id: item.id,
                                    });
                                    setSearch()
                                "
                                [class.text-secondary]="
                                    form.value.user?.id === item.id
                                "
                            >
                                <div class="flex w-full items-center space-x-4">
                                    <div class="flex-1 leading-tight">
                                        <div>{{ item.name }}</div>
                                        <div class="text-xs opacity-30">
                                            {{ item.email }}
                                        </div>
                                    </div>
                                    @if (item.sys_admin || item.support) {
                                        <code class="px-2">{{
                                            (item.sys_admin
                                                ? 'COMMON.USER_ADMIN'
                                                : 'COMMON.USER_SUPPORT'
                                            ) | translate
                                        }}</code>
                                    }
                                </div>
                            </button>
                        }
                        @if (!users()?.length) {
                            <button
                                mat-menu-item
                                [disabled]="true"
                                class="min-w-[20rem] text-center"
                            >
                                No results
                            </button>
                        }
                    </mat-menu>
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
      MatMenuModule,
      MatAutocompleteModule,
      MatInputModule,
      MatChipsModule,
      ActionFieldComponent
    ] }]
  }], null, { event: [{
    type: Output
  }], _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(APIKeyModalComponent, { className: "APIKeyModalComponent", filePath: "src/app/admin/api-keys/api-key-modal.component.ts", lineNumber: 249 });
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
  available_domains = xu({ limit: 500 }).pipe(map((_) => _.data), shareReplay(1));
  available_scopes = N("/api/engine/v2/scopes").pipe(map((_) => _), shareReplay(1));
  available_keys = combineLatest([
    this._domain,
    this._change
  ]).pipe(switchMap(([domain]) => {
    this._loading.next(true);
    return domain ? O({
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
    return domain ? xa({ authority_id: domain.id, q }).pipe(map((_) => _.data)) : of([]);
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
      data: this._domain.getValue()
    });
    const details = await Promise.race([
      lastValueFrom(ref.componentInstance.event.pipe(first((_) => _.reason === "done"))),
      lastValueFrom(ref.afterClosed())
    ]);
    if (details?.reason !== "done")
      return;
    ref.componentInstance.loading.set("Creating new API key...");
    const domain = this._domain.getValue();
    const key = await lastValueFrom(P({
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
    await lastValueFrom(I({
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
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c12 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "scopes", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "6rem" });
var _c4 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "8rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _forTrack0 = ($index, $item) => $item.id;
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
      return \u0275\u0275resetView(ctx_r3.deleteKey(row_r11));
    });
    \u0275\u0275elementStart(3, "icon", 31);
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "ADMIN.APP_KEYS_REMOVE"));
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
  deleteKey = (k) => this._service.removeKey(k);
  async ngOnInit() {
    const domain = Ut();
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
      \u0275\u0275repeaterCreate(10, AdminAPIKeysComponent_For_11_Template, 2, 2, "mat-option", 11, _forTrack0);
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
      \u0275\u0275template(30, AdminAPIKeysComponent_ng_template_30_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(32, AdminAPIKeysComponent_ng_template_32_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(34, AdminAPIKeysComponent_ng_template_34_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(36, AdminAPIKeysComponent_ng_template_36_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(38, AdminAPIKeysComponent_ng_template_38_Template, 5, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
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
      \u0275\u0275property("data", ctx.key_list)("columns", \u0275\u0275pureFunction6(56, _c6, \u0275\u0275pureFunction1(40, _c03, \u0275\u0275pipeBind1(23, 28, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(42, _c12, \u0275\u0275pipeBind1(24, 30, "COMMON.FIELD_DESCRIPTION"), description_template_r13), \u0275\u0275pureFunction2(45, _c2, \u0275\u0275pipeBind1(25, 32, "ADMIN.APP_KEYS_FIELD_SCOPES"), scopes_template_r12), \u0275\u0275pureFunction2(48, _c3, \u0275\u0275pipeBind1(26, 34, "ADMIN.APP_KEYS_FIELD_PERMISSIONS"), access_template_r14), \u0275\u0275pureFunction2(51, _c4, \u0275\u0275pipeBind1(27, 36, "COMMON.CREATED_AT"), data_from_template_r15), \u0275\u0275pureFunction1(54, _c5, actions_template_r16)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(28, 38, "ADMIN.APP_KEYS_LIST_EMPTY"));
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
                            size: '3.5rem',
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAPIKeysComponent, { className: "AdminAPIKeysComponent", filePath: "src/app/admin/api-keys/api-keys.component.ts", lineNumber: 199 });
})();
export {
  AdminAPIKeysComponent
};
//# sourceMappingURL=chunk-NLWMLVSQ.js.map
