import {
  TriggerStateService
} from "./chunk-QBQOMML6.js";
import "./chunk-CPCRYORI.js";
import "./chunk-OUVTZI6I.js";
import {
  d
} from "./chunk-OMHAHFWO.js";
import "./chunk-V7BDXGWX.js";
import "./chunk-ZH6E2DEP.js";
import "./chunk-P2D75ZZP.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-JC6INI43.js";
import {
  ItemSearchFieldComponent,
  SanitizePipe
} from "./chunk-XAVHJMRG.js";
import "./chunk-J533RESC.js";
import "./chunk-4D4IMX2A.js";
import "./chunk-FHQGBBTQ.js";
import "./chunk-BE3VYPN7.js";
import {
  DateFromPipe
} from "./chunk-4MGJQKZI.js";
import "./chunk-DUXI5L56.js";
import "./chunk-GKVBOXTY.js";
import "./chunk-I5KKTSV2.js";
import {
  SimpleTableComponent
} from "./chunk-PHBPFGXL.js";
import "./chunk-ULWUBCPK.js";
import "./chunk-ZXZJTKYJ.js";
import {
  toSignal
} from "./chunk-G56OPZT7.js";
import "./chunk-QQD3AYXM.js";
import "./chunk-IRWJYDCK.js";
import "./chunk-GDQKXU3F.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-X3TFB4ML.js";
import "./chunk-7IGSOKAD.js";
import "./chunk-UIGRSY2Y.js";
import "./chunk-VMMCY5BT.js";
import "./chunk-AXEYOGNP.js";
import "./chunk-SZEJWTEC.js";
import "./chunk-LYW23EPM.js";
import "./chunk-74RX4HV2.js";
import "./chunk-KLDR7TXH.js";
import "./chunk-BASVZ2NG.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-Z6BALLUE.js";
import {
  IconComponent
} from "./chunk-XEKU7LYC.js";
import "./chunk-3QZ2524U.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import {
  AsyncHandler
} from "./chunk-3HK3DQFR.js";
import "./chunk-2SRDPC72.js";
import "./chunk-V6M7Z2DS.js";
import "./chunk-GSGVHISS.js";
import {
  MatRippleModule
} from "./chunk-KWELGHAI.js";
import {
  TranslatePipe
} from "./chunk-ZO77MJC7.js";
import {
  MatRipple
} from "./chunk-RCJZKIXW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  JsonPipe,
  NgControlStatus,
  NgModel,
  Pipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
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
  ɵɵtwoWayProperty
} from "./chunk-7Y7JYXTF.js";
import {
  Cl,
  map
} from "./chunk-VWBDUF7E.js";
import "./chunk-VYXW4D3Z.js";

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

// src/app/triggers/trigger-about.component.ts
var _c0 = (a0, a1) => ({ key: "operator", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "actions", name: " ", size: "6rem", sortable: false, content: a0 });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = (a0, a1) => ({ key: "time", name: a0, content: a1 });
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
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 4, ctx_r1.description()), \u0275\u0275sanitizeHtml);
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
    \u0275\u0275property("disabled", !ctx_r1.template_system());
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
    \u0275\u0275property("disabled", !ctx_r1.template_system());
  }
}
var TriggerAboutComponent = class _TriggerAboutComponent extends AsyncHandler {
  _service = inject(TriggerStateService);
  /** System to use for conditions with systen variables and functions */
  template_system = signal(void 0, ...ngDevMode ? [{ debugName: "template_system" }] : []);
  _item = toSignal(this._service.item, {
    initialValue: {}
  });
  get item() {
    return this._item();
  }
  /** List of variable comparison trigger conditions */
  comparisons = computed(() => this.item.conditions?.comparisons || [], ...ngDevMode ? [{ debugName: "comparisons" }] : []);
  /** List of time dependent trigger conditions */
  time_dependents = computed(() => this.item.conditions?.time_dependents || [], ...ngDevMode ? [{ debugName: "time_dependents" }] : []);
  /** List of function call trigger actions */
  functions = computed(() => this.item.actions?.functions || [], ...ngDevMode ? [{ debugName: "functions" }] : []);
  /** List of email trigger actions */
  mailers = computed(() => this.item.actions?.mailers || [], ...ngDevMode ? [{ debugName: "mailers" }] : []);
  /** Query function for systems */
  query_fn = (q) => Cl({ q }).pipe(map((resp) => resp.data));
  editCondition = (c) => this._service.editCondition(c, this.template_system());
  removeCondition = (c) => this._service.removeCondition(c);
  editAction = (a) => this._service.editAction(a, this.template_system());
  removeAction = (a) => this._service.removeAction(a);
  /** HTML string for rendering the description */
  description = computed(() => d(this.item.description || "", { async: false }), ...ngDevMode ? [{ debugName: "description" }] : []);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerAboutComponent, selectors: [["trigger-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 75, vars: 118, consts: [["time_dep_template", ""], ["comparison_template", ""], ["actions_template", ""], ["function_call_template", ""], ["email_call_template", ""], ["fn_actions_template", ""], [1, "mb-4", "flex", "space-x-2"], [1, "border-base-200", "grid", "w-1/3", "flex-1", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "my-4"], [1, "flex", "flex-col"], ["for", "driver", 1, "max-w-[50%]", 3, "matTooltip"], [1, "w-full", 3, "ngModelChange", "placeholder", "query_fn", "ngModel"], [1, "my-4", "flex", "items-center"], [1, "flex-1", "text-lg", "font-medium"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click", "disabled"], [1, "text-2xl"], [1, "mr-4", "ml-2"], [1, "mb-4", "block", "w-full", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "block", "w-full", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "my-4", "flex", "items-center", "space-x-2"], [1, "mb-4", "block", "w-full", "min-w-lg", "text-sm", 3, "ondrop", "data", "columns", "can_reorder", "empty_message"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "mono", "flex", "items-center", "space-x-2", "p-4", "text-sm"], [1, "mono", "flex", "items-center", "space-x-4", "p-4", "text-xs"], [1, "bg-success", "text-success-content"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "text-error"], [1, "mono", "flex", "space-x-2", "p-4", "text-xs"], [1, "flex", "items-center", "space-x-2", "p-4"], [3, "matTooltip"]], template: function TriggerAboutComponent_Template(rf, ctx) {
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
      \u0275\u0275property("disabled", !ctx.template_system());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 64, "TRIGGERS.CONDITION_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.comparisons())("columns", \u0275\u0275pureFunction2(91, _c2, \u0275\u0275pureFunction2(86, _c0, \u0275\u0275pipeBind1(41, 66, "TRIGGERS.FIELD_VAR_COMPARE"), comparison_template_r12), \u0275\u0275pureFunction1(89, _c1, actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(42, 68, "TRIGGERS.CONDITION_COMPARE_EMPTY"));
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.time_dependents())("columns", \u0275\u0275pureFunction2(99, _c2, \u0275\u0275pureFunction2(94, _c3, \u0275\u0275pipeBind1(44, 70, "TRIGGERS.FIELD_TIME_DEPS"), time_dep_template_r11), \u0275\u0275pureFunction1(97, _c1, actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(45, 72, "TRIGGERS.CONDITION_TIME_EMPTY"));
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 74, "TRIGGERS.ACTIONS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.template_system());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 76, "TRIGGERS.ACTION_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.functions())("columns", \u0275\u0275pureFunction2(107, _c2, \u0275\u0275pureFunction2(102, _c3, \u0275\u0275pipeBind1(64, 78, "TRIGGERS.FIELD_ACTION_FN_CALL"), function_call_template_r14), \u0275\u0275pureFunction1(105, _c1, fn_actions_template_r16)))("can_reorder", true)("empty_message", \u0275\u0275pipeBind1(65, 80, "TRIGGERS.ACTION_FN_EMPTY"));
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.mailers())("columns", \u0275\u0275pureFunction2(115, _c2, \u0275\u0275pureFunction2(110, _c3, \u0275\u0275pipeBind1(67, 82, "TRIGGERS.FIELD_ACTION_EMAIL"), email_call_template_r15), \u0275\u0275pureFunction1(113, _c1, fn_actions_template_r16)))("can_reorder", true)("empty_message", \u0275\u0275pipeBind1(68, 84, "TRIGGERS.ACTION_EMAIL_EMPTY"));
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
                class="border-base-200 grid w-1/3 flex-1 gap-2 rounded-sm border p-4"
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
            <hr class="text-base-300 my-4" />
            <div class="border-base-200 w-full rounded-sm border">
                <h3
                    class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                >
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description() | sanitize"
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
                [disabled]="!template_system()"
                (click)="editCondition()"
            >
                <icon class="text-2xl">add</icon>
                <div class="mr-4 ml-2">
                    {{ 'TRIGGERS.CONDITION_ADD' | translate }}
                </div>
            </button>
        </header>
        <section>
            <simple-table
                class="mb-4 block w-full min-w-lg text-sm"
                [data]="comparisons()"
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
                class="block w-full min-w-lg text-sm"
                [data]="time_dependents()"
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
                        [disabled]="!template_system()"
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
                [disabled]="!template_system()"
                (click)="editAction()"
            >
                <icon class="text-2xl">add</icon>
                <div class="mr-4 ml-2">
                    {{ 'TRIGGERS.ACTION_ADD' | translate }}
                </div>
            </button>
        </header>
        <section>
            <simple-table
                class="mb-4 block w-full min-w-lg text-sm"
                [data]="functions()"
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
                class="mb-4 block w-full min-w-lg text-sm"
                [data]="mailers()"
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
                        [disabled]="!template_system()"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerAboutComponent, { className: "TriggerAboutComponent", filePath: "src/app/triggers/trigger-about.component.ts", lineNumber: 302 });
})();
export {
  TriggerAboutComponent
};
//# sourceMappingURL=chunk-EHG6VG3H.js.map
