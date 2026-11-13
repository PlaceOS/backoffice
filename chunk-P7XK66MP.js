import {
  TriggerStateService
} from "./chunk-D3STBID4.js";
import "./chunk-YIISC54R.js";
import {
  MarkdownPipe
} from "./chunk-R4BPIWI6.js";
import {
  ItemTimestampsComponent
} from "./chunk-EP347SO5.js";
import "./chunk-OF3WDS66.js";
import "./chunk-BTPWD5SN.js";
import "./chunk-D5FJQT6B.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-5LOO24JV.js";
import "./chunk-SDERNRDS.js";
import "./chunk-EOOX537V.js";
import "./chunk-JBSN2JT6.js";
import "./chunk-NTUP2G5H.js";
import {
  SimpleTableComponent
} from "./chunk-MBA33NAB.js";
import "./chunk-JNEMVL3M.js";
import "./chunk-3RQH6HLG.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-URQNJTMD.js";
import {
  ItemSearchFieldComponent
} from "./chunk-WZDBMORL.js";
import "./chunk-3CXGWY3Q.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-QW2S4DDS.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-IEEA6WQX.js";
import "./chunk-32E64OOS.js";
import "./chunk-QR6TO34C.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
import "./chunk-I2BE2RKH.js";
import "./chunk-BE6PEWTW.js";
import "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import "./chunk-RQOHFMTH.js";
import {
  Sa
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import {
  TooltipDirective
} from "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import {
  AsyncPipe,
  JsonPipe
} from "./chunk-XWSZBFF5.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
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
} from "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/triggers/trigger-about.component.ts
var _c0 = (a0, a1) => ({ key: "operator", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, size: "6rem", sortable: false, content: a1 });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = (a0, a1) => ({ key: "time", name: a0, content: a1 });
function TriggerAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 21);
    \u0275\u0275elementStart(1, "div", 22)(2, "h3", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 24);
    \u0275\u0275pipe(6, "markdown");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(7, 6, \u0275\u0275pipeBind1(6, 4, ctx_r1.item.description)), \u0275\u0275sanitizeHtml);
  }
}
function TriggerAboutComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", row_r3.type === "at" ? "At time" : "CRON", " ", row_r3.type === "at" ? row_r3.time : row_r3.cron, " ");
  }
}
function TriggerAboutComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "pre", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "pre", 27);
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
function TriggerAboutComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 30);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TriggerAboutComponent_ng_template_34_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCondition(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function TriggerAboutComponent_ng_template_34_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeCondition(row_r6));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.template_system());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "COMMON.EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 5, "COMMON.DELETE"));
  }
}
function TriggerAboutComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div")(2, "code", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "pre", 27);
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
function TriggerAboutComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", row_r8.emails.join("\n"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r8.emails.length, " Address(es)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA0 | Body Length: ", row_r8.content.length, " ");
  }
}
function TriggerAboutComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 30);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TriggerAboutComponent_ng_template_57_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAction(row_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function TriggerAboutComponent_ng_template_57_Template_button_click_5_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAction(row_r10));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.template_system());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "COMMON.EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 5, "COMMON.DELETE"));
  }
}
var TriggerAboutComponent = class _TriggerAboutComponent {
  _service = inject(TriggerStateService);
  /** System to use for conditions with systen variables and functions */
  template_system = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "template_system" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _item = this._service.item;
  get item() {
    return this._item();
  }
  /** List of variable comparison trigger conditions */
  comparisons = computed(
    () => this.item.conditions?.comparisons || [],
    ...ngDevMode ? [{ debugName: "comparisons" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of time dependent trigger conditions */
  time_dependents = computed(
    () => this.item.conditions?.time_dependents || [],
    ...ngDevMode ? [{ debugName: "time_dependents" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of function call trigger actions */
  functions = computed(
    () => this.item.actions?.functions || [],
    ...ngDevMode ? [{ debugName: "functions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of email trigger actions */
  mailers = computed(
    () => this.item.actions?.mailers || [],
    ...ngDevMode ? [{ debugName: "mailers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Query function for systems */
  query_fn = (q) => Sa({ q }).then((resp) => resp.data);
  editCondition = (c) => this._service.editCondition(c, this.template_system());
  removeCondition = (c) => this._service.removeCondition(c);
  editAction = (a) => this._service.editAction(a, this.template_system());
  removeAction = (a) => this._service.removeAction(a);
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
  static \u0275fac = function TriggerAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TriggerAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerAboutComponent, selectors: [["trigger-about"]], decls: 59, vars: 106, consts: [["time_dep_template", ""], ["comparison_template", ""], ["actions_template", ""], ["function_call_template", ""], ["email_call_template", ""], ["fn_actions_template", ""], [1, "h-full", "w-full", "overflow-auto", "p-4"], [1, "mb-4", "flex", "space-x-2"], [1, "border-base-200", "grid", "w-1/3", "flex-1", "gap-2", "rounded-sm", "border", "p-4"], [3, "created_at", "updated_at"], [1, "my-4"], [1, "flex", "flex-col"], ["for", "reference-system", "id", "reference-system-label", 1, "max-w-[50%]", 3, "appTooltip"], ["id", "reference-system", "role", "group", "aria-labelledby", "reference-system-label", 1, "w-full", 3, "ngModelChange", "placeholder", "query_fn", "ngModel"], [1, "my-4", "flex", "items-center"], [1, "flex-1", "text-lg", "font-medium"], ["icon", "", "default", "", "ripple", "", "appTooltipPosition", "left", 3, "click", "disabled", "appTooltip"], [1, "mb-4", "block", "w-full", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "block", "w-full", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "my-4", "flex", "items-center", "space-x-2"], [1, "mb-4", "block", "w-full", "min-w-lg", "text-sm", 3, "ondrop", "data", "columns", "can_reorder", "empty_message"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "mono", "flex", "items-center", "space-x-2", "p-4", "text-sm", "select-text"], [1, "mono", "flex", "items-center", "space-x-4", "p-4", "text-xs"], [1, "select-text"], [1, "bg-success", "text-success-content", "select-text"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "ripple", "", 3, "click", "disabled"], ["icon", "", "default", "", "error", "", "ripple", "", 3, "click"], [1, "mono", "flex", "space-x-2", "p-4", "text-xs"], [1, "flex", "items-center", "space-x-2", "p-4", "select-text"], [3, "appTooltip"]], template: function TriggerAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "section", 7)(2, "div", 8);
      \u0275\u0275element(3, "item-timestamps", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(4, TriggerAboutComponent_Conditional_4_Template, 8, 8);
      \u0275\u0275element(5, "hr", 10);
      \u0275\u0275elementStart(6, "div", 11)(7, "label", 12);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "item-search-field", 13);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function TriggerAboutComponent_Template_item_search_field_ngModelChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.template_system, $event) || (ctx.template_system = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "header", 14)(14, "div", 15);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 16);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275listener("click", function TriggerAboutComponent_Template_button_click_17_listener() {
        return ctx.editCondition();
      });
      \u0275\u0275elementStart(19, "icon");
      \u0275\u0275text(20, "add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "section");
      \u0275\u0275element(22, "simple-table", 17);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275element(26, "simple-table", 18);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275template(30, TriggerAboutComponent_ng_template_30_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(32, TriggerAboutComponent_ng_template_32_Template, 9, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(34, TriggerAboutComponent_ng_template_34_Template, 9, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "header", 19)(37, "div", 15);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 16);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275listener("click", function TriggerAboutComponent_Template_button_click_40_listener() {
        return ctx.editAction();
      });
      \u0275\u0275elementStart(42, "icon");
      \u0275\u0275text(43, "add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "section")(45, "simple-table", 20);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275listener("ondrop", function TriggerAboutComponent_Template_simple_table_ondrop_45_listener($event) {
        return ctx.confirmReorder("function", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "simple-table", 20);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275listener("ondrop", function TriggerAboutComponent_Template_simple_table_ondrop_49_listener($event) {
        return ctx.confirmReorder("mailer", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, TriggerAboutComponent_ng_template_53_Template, 7, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(55, TriggerAboutComponent_ng_template_55_Template, 4, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(57, TriggerAboutComponent_ng_template_57_Template, 9, 7, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const time_dep_template_r11 = \u0275\u0275reference(31);
      const comparison_template_r12 = \u0275\u0275reference(33);
      const actions_template_r13 = \u0275\u0275reference(35);
      const function_call_template_r14 = \u0275\u0275reference(54);
      const email_call_template_r15 = \u0275\u0275reference(56);
      const fn_actions_template_r16 = \u0275\u0275reference(58);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance();
      \u0275\u0275property("created_at", ctx.item.created_at)("updated_at", ctx.item.updated_at);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item?.description ? 4 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(8, 32, "TRIGGERS.REFERENCE_SYSTEM_MSG"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 34, "TRIGGERS.REFERENCE_SYSTEM"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 36, "SYSTEMS.SEARCH"))("query_fn", ctx.query_fn);
      \u0275\u0275twoWayProperty("ngModel", ctx.template_system);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 38, "TRIGGERS.CONDITIONS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.template_system())("appTooltip", \u0275\u0275pipeBind1(18, 40, "TRIGGERS.CONDITION_ADD"));
      \u0275\u0275advance(5);
      \u0275\u0275property("data", ctx.comparisons())("columns", \u0275\u0275pureFunction2(76, _c2, \u0275\u0275pureFunction2(70, _c0, \u0275\u0275pipeBind1(23, 42, "TRIGGERS.FIELD_VAR_COMPARE"), comparison_template_r12), \u0275\u0275pureFunction2(73, _c1, \u0275\u0275pipeBind1(24, 44, "COMMON.ACTIONS"), actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(25, 46, "TRIGGERS.CONDITION_COMPARE_EMPTY"));
      \u0275\u0275advance(4);
      \u0275\u0275property("data", ctx.time_dependents())("columns", \u0275\u0275pureFunction2(85, _c2, \u0275\u0275pureFunction2(79, _c3, \u0275\u0275pipeBind1(27, 48, "TRIGGERS.FIELD_TIME_DEPS"), time_dep_template_r11), \u0275\u0275pureFunction2(82, _c1, \u0275\u0275pipeBind1(28, 50, "COMMON.ACTIONS"), actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(29, 52, "TRIGGERS.CONDITION_TIME_EMPTY"));
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 54, "TRIGGERS.ACTIONS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.template_system())("appTooltip", \u0275\u0275pipeBind1(41, 56, "TRIGGERS.ACTION_ADD"));
      \u0275\u0275advance(5);
      \u0275\u0275property("data", ctx.functions())("columns", \u0275\u0275pureFunction2(94, _c2, \u0275\u0275pureFunction2(88, _c3, \u0275\u0275pipeBind1(46, 58, "TRIGGERS.FIELD_ACTION_FN_CALL"), function_call_template_r14), \u0275\u0275pureFunction2(91, _c1, \u0275\u0275pipeBind1(47, 60, "COMMON.ACTIONS"), fn_actions_template_r16)))("can_reorder", true)("empty_message", \u0275\u0275pipeBind1(48, 62, "TRIGGERS.ACTION_FN_EMPTY"));
      \u0275\u0275advance(4);
      \u0275\u0275property("data", ctx.mailers())("columns", \u0275\u0275pureFunction2(103, _c2, \u0275\u0275pureFunction2(97, _c3, \u0275\u0275pipeBind1(50, 64, "TRIGGERS.FIELD_ACTION_EMAIL"), email_call_template_r15), \u0275\u0275pureFunction2(100, _c1, \u0275\u0275pipeBind1(51, 66, "COMMON.ACTIONS"), fn_actions_template_r16)))("can_reorder", true)("empty_message", \u0275\u0275pipeBind1(52, 68, "TRIGGERS.ACTION_EMAIL_EMPTY"));
    }
  }, dependencies: [
    TooltipDirective,
    ItemTimestampsComponent,
    IconComponent,
    SimpleTableComponent,
    ItemSearchFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    MarkdownPipe,
    AsyncPipe,
    JsonPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerAboutComponent, [{
    type: Component,
    args: [{ selector: "trigger-about", template: `
        <div class="h-full w-full overflow-auto p-4">
            <section class="mb-4 flex space-x-2">
                <div
                    class="border-base-200 grid w-1/3 flex-1 gap-2 rounded-sm border p-4"
                    [style.gridTemplateColumns]="'5.5rem auto'"
                >
                    <item-timestamps
                        [created_at]="item.created_at"
                        [updated_at]="item.updated_at"
                    />
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
                        class="markdown selectable w-full overflow-auto p-4 text-sm"
                        [innerHTML]="item.description | markdown | async"
                    ></div>
                </div>
            }
            <hr class="my-4" />
            <div class="flex flex-col">
                <label
                    for="reference-system"
                    id="reference-system-label"
                    class="max-w-[50%]"
                    [appTooltip]="'TRIGGERS.REFERENCE_SYSTEM_MSG' | translate"
                >
                    {{ 'TRIGGERS.REFERENCE_SYSTEM' | translate }}
                </label>
                <item-search-field
                    id="reference-system"
                    role="group"
                    aria-labelledby="reference-system-label"
                    [placeholder]="'SYSTEMS.SEARCH' | translate"
                    class="w-full"
                    [query_fn]="query_fn"
                    [(ngModel)]="template_system"
                />
            </div>
            <header class="my-4 flex items-center">
                <div class="flex-1 text-lg font-medium">
                    {{ 'TRIGGERS.CONDITIONS' | translate }}
                </div>
                <button
                    icon
                    default
                    ripple
                    [disabled]="!template_system()"
                    (click)="editCondition()"
                    [appTooltip]="'TRIGGERS.CONDITION_ADD' | translate"
                    appTooltipPosition="left"
                >
                    <icon>add</icon>
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
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            size: '6rem',
                            sortable: false,
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'TRIGGERS.CONDITION_COMPARE_EMPTY' | translate
                    "
                />
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
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            size: '6rem',
                            sortable: false,
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'TRIGGERS.CONDITION_TIME_EMPTY' | translate
                    "
                />
                <ng-template #time_dep_template let-row="row">
                    <div
                        class="mono flex items-center space-x-2 p-4 text-sm select-text"
                    >
                        {{ row.type === 'at' ? 'At time' : 'CRON' }}
                        {{ row.type === 'at' ? row.time : row.cron }}
                    </div>
                </ng-template>
                <ng-template #comparison_template let-row="row">
                    <div class="mono flex items-center space-x-4 p-4 text-xs">
                        <pre class="select-text">{{ row.left | json }}</pre>
                        <code
                            class="bg-success text-success-content select-text"
                        >
                            {{ row.operator }}
                        </code>
                        <pre class="select-text">{{ row.right | json }}</pre>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            ripple
                            [disabled]="!template_system()"
                            (click)="editCondition(row)"
                            [attr.aria-label]="'COMMON.EDIT' | translate"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            default
                            error
                            ripple
                            (click)="removeCondition(row)"
                            [attr.aria-label]="'COMMON.DELETE' | translate"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
            <header class="my-4 flex items-center space-x-2">
                <div class="flex-1 text-lg font-medium">
                    {{ 'TRIGGERS.ACTIONS' | translate }}
                </div>
                <button
                    icon
                    default
                    ripple
                    [disabled]="!template_system()"
                    (click)="editAction()"
                    [appTooltip]="'TRIGGERS.ACTION_ADD' | translate"
                    appTooltipPosition="left"
                >
                    <icon>add</icon>
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
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            size: '6rem',
                            sortable: false,
                            content: fn_actions_template,
                        },
                    ]"
                    [can_reorder]="true"
                    (ondrop)="confirmReorder('function', $event)"
                    [empty_message]="'TRIGGERS.ACTION_FN_EMPTY' | translate"
                />
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
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            size: '6rem',
                            sortable: false,
                            content: fn_actions_template,
                        },
                    ]"
                    [can_reorder]="true"
                    (ondrop)="confirmReorder('mailer', $event)"
                    [empty_message]="'TRIGGERS.ACTION_EMAIL_EMPTY' | translate"
                />
                <ng-template #function_call_template let-row="row">
                    <div class="mono flex space-x-2 p-4 text-xs">
                        <div>
                            <code class="select-text">{{ row.mod }}</code>
                        </div>
                        <pre class="select-text"
                            >{{ row.method }}({{ row.args | json }})</pre
                        >
                    </div>
                </ng-template>
                <ng-template #email_call_template let-row="row">
                    <div class="flex items-center space-x-2 p-4 select-text">
                        <span
                            [appTooltip]="
                                row.emails.join(
                                    '
'
                                )
                            "
                            >{{ row.emails.length }} Address(es)</span
                        >&nbsp; | Body Length: {{ row.content.length }}
                    </div>
                </ng-template>
                <ng-template #fn_actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            ripple
                            [disabled]="!template_system()"
                            (click)="editAction(row)"
                            [attr.aria-label]="'COMMON.EDIT' | translate"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            default
                            error
                            ripple
                            (click)="removeAction(row)"
                            [attr.aria-label]="'COMMON.DELETE' | translate"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      TooltipDirective,
      ItemTimestampsComponent,
      TranslatePipe,
      IconComponent,
      SimpleTableComponent,
      ItemSearchFieldComponent,
      FormsModule,
      MarkdownPipe,
      AsyncPipe,
      JsonPipe
    ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/triggers/trigger-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerAboutComponent, { className: "TriggerAboutComponent", filePath: "src/app/triggers/trigger-about.component.ts", lineNumber: 311 });
})();
export {
  TriggerAboutComponent
};
//# debugId=2460a80e-e704-582e-9b3c-cba56f742a16
//# sourceMappingURL=chunk-P7XK66MP.js.map
