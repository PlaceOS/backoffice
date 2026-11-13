import {
  DateFromPipe
} from "./chunk-D5FJQT6B.js";
import "./chunk-S2SB26WJ.js";
import {
  SimpleTableComponent
} from "./chunk-MBA33NAB.js";
import "./chunk-TPDHL3PI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import {
  confirmAndRun
} from "./chunk-TOPLF626.js";
import {
  Clipboard
} from "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  ProgressBarComponent
} from "./chunk-XFWRCLJY.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZYXD5WKE.js";
import "./chunk-ZXDSRNPN.js";
import {
  FormFieldComponent
} from "./chunk-JGF7XJRI.js";
import {
  FormField,
  form,
  required,
  submit
} from "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import {
  DIALOG_DATA,
  Dialog,
  DialogRef
} from "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import {
  i18n
} from "./chunk-RQOHFMTH.js";
import {
  _u,
  du,
  fu,
  lu
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml
} from "./chunk-DGKMQHVX.js";
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
import "./chunk-XWSZBFF5.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
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
  ɵɵpureFunction5,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/edge-modal.component.ts
var EdgeModalComponent = class _EdgeModalComponent {
  _data = inject(DIALOG_DATA);
  _dialog_ref = inject(DialogRef);
  edge = this._data.edge;
  formModel = signal(
    {
      name: "",
      description: ""
    },
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, (path) => {
    required(path.name);
  });
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.formModel.set({
      name: this.edge?.name || "",
      description: this.edge?.description || ""
    });
  }
  async save() {
    await submit(this.form, async () => void 0);
    if (this.form().invalid())
      return;
    this.loading.set("Saving edge node...");
    const edge = __spreadValues(__spreadValues({}, this.edge), this.formModel());
    const method = edge.id ? du(edge.id, edge) : fu(edge);
    const new_edge = await method.catch(() => null);
    this.loading.set("");
    if (!new_edge)
      return notifyError(i18n("ADMIN.EDGE_ERROR"));
    if (edge.id) {
      notifySuccess(i18n("ADMIN.EDGE_NEW_SUCCESS"));
    } else {
      notifySuccess(i18n("ADMIN.EDGE_EDIT_SUCCESS"));
    }
    this._dialog_ref.close(new_edge);
  }
  static \u0275fac = function EdgeModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EdgeModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EdgeModalComponent, selectors: [["edge-modal"]], decls: 22, vars: 21, consts: [[3, "save", "heading", "loading"], [1, "flex", "flex-1", "flex-col"], ["for", "edge-name"], ["id", "edge-name", 3, "formField", "placeholder"], ["error", ""], ["for", "edge-description"], ["id", "edge-description", 3, "formField", "placeholder"]], template: function EdgeModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function EdgeModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(2, "form")(3, "div", 1)(4, "label", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "app-form-field")(10, "input", 3);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 4);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 1)(16, "label", 5);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-form-field")(20, "textarea", 6);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 9, ctx.edge ? "ADMIN.EDGE_EDIT" : "ADMIN.EDGE_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formField", ctx.form.name)("placeholder", \u0275\u0275pipeBind1(11, 13, "ADMIN.EDGE_NAME_PLACEHOLDER"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 15, "ADMIN.EDGE_NAME_REQUIRED"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.description)("placeholder", \u0275\u0275pipeBind1(21, 19, "ADMIN.EDGE_DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275control();
    }
  }, dependencies: [
    FormFieldComponent,
    FullscreenModalShellComponent,
    FormField,
    TranslatePipe
  ], styles: ["\nmain[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=edge-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EdgeModalComponent, [{
    type: Component,
    args: [{ selector: "edge-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (edge ? 'ADMIN.EDGE_EDIT' : 'ADMIN.EDGE_NEW') | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            <form>
                <div class="flex flex-1 flex-col">
                    <label for="edge-name">
                        {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                    </label>
                    <app-form-field>
                        <input
                            id="edge-name"
                            [formField]="form.name"
                            [placeholder]="
                                'ADMIN.EDGE_NAME_PLACEHOLDER' | translate
                            "
                        />
                        <div error>
                            {{ 'ADMIN.EDGE_NAME_REQUIRED' | translate }}
                        </div>
                    </app-form-field>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="edge-description">{{
                        'COMMON.FIELD_DESCRIPTION' | translate
                    }}</label>
                    <app-form-field>
                        <textarea
                            id="edge-description"
                            [formField]="form.description"
                            [placeholder]="
                                'ADMIN.EDGE_DESCRIPTION_PLACEHOLDER' | translate
                            "
                        ></textarea>
                    </app-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FormFieldComponent,
      FullscreenModalShellComponent,
      TranslatePipe,
      FormField
    ], styles: ["/* angular:styles/component:css;d8e4af2b3221ecf5;/home/runner/work/backoffice/backoffice/src/app/admin/edge-modal.component.ts */\nmain {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=edge-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EdgeModalComponent, { className: "EdgeModalComponent", filePath: "src/app/admin/edge-modal.component.ts", lineNumber: 76 });
})();

// src/app/admin/edge.component.ts
var _c0 = (a0, a1) => ({ key: "online", name: a0, hide_name: true, content: a1 });
var _c1 = (a0, a1) => ({ key: "id", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "description", name: a0, size: "36rem", content: a1 });
var _c3 = (a0, a1) => ({ key: "last_seen", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "6rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function PlaceEdgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 14);
    \u0275\u0275listener("click", function PlaceEdgeComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275readContextLet(0);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyKey(item_r2.x_api_key));
    });
    \u0275\u0275elementStart(2, "div", 15)(3, "code", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 17)(6, "icon");
    \u0275\u0275text(7, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275storeLet(\u0275\u0275nextContext().last_change());
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", "Copy API Key for " + item_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.x_api_key);
  }
}
function PlaceEdgeComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.id);
  }
}
function PlaceEdgeComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "dateFrom");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, data_r6));
  }
}
function PlaceEdgeComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "div", 22);
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(1, 6, data_r7 ? "COMMON.ONLINE" : "COMMON.OFFLINE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", data_r7)("bg-error", !data_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, data_r7 ? "COMMON.ONLINE" : "COMMON.OFFLINE"), " ");
  }
}
function PlaceEdgeComponent_ng_template_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"), " ");
  }
}
function PlaceEdgeComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, PlaceEdgeComponent_ng_template_27_Conditional_2_Template, 3, 3, "span", 25);
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
function PlaceEdgeComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaceEdgeComponent_ng_template_29_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function PlaceEdgeComponent_ng_template_29_Template_button_click_5_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(row_r10));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 2, "ADMIN.EDGE_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.EDGE_REMOVE"));
  }
}
var PlaceEdgeComponent = class _PlaceEdgeComponent {
  _dialog = inject(Dialog);
  _clipboard = inject(Clipboard);
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  edge_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "edge_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  last_change = signal(
    null,
    ...ngDevMode ? [{ debugName: "last_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const edge_data = sessionStorage.getItem("BACKOFFICE.last_edge");
    try {
      this.last_change.set(JSON.parse(edge_data) || null);
    } catch {
    }
    this.loadEdges();
  }
  async edit(edge) {
    const ref = this._dialog.open(EdgeModalComponent, {
      data: { edge }
    });
    ref.closed.subscribe((_) => {
      if (!_)
        return;
      if (_.x_api_key) {
        sessionStorage.setItem("BACKOFFICE.last_edge", JSON.stringify(_));
        this.last_change.set(_);
      }
      this.loadEdges();
    });
  }
  async remove(i) {
    const removed = await confirmAndRun(this._dialog, {
      title: "Remove edge?",
      content: `Remove <strong>${escapeHtml(i.name)}</strong>?<br>You or your users may lose access to some data.`,
      icon: { type: "icon", content: "delete" }
    }, {
      loading: "Removing edge...",
      action: () => _u(i.id),
      error: (reason) => `Error removing edge. Error: ${reason}`,
      success: "Successfully removed Edge."
    });
    if (!removed)
      return;
    sessionStorage.removeItem("BACKOFFICE.last_edge");
    this.last_change.set(null);
    this.edge_list.update((list) => list.filter(({ id }) => id !== i.id));
  }
  copyKey(key) {
    if (key && this._clipboard.copy(key)) {
      notifySuccess("Edge API Key copied to clipboard.");
    }
  }
  async loadEdges() {
    this.loading.set("Loading edge node list...");
    try {
      const { data } = await lu();
      this.edge_list.set((data || []).sort((a, b) => a.id?.localeCompare(b.id)));
    } catch (err) {
      notifyError(`Failed to load edge nodes. Error: ${describeError(err)}`);
    } finally {
      this.loading.set("");
    }
  }
  static \u0275fac = function PlaceEdgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceEdgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceEdgeComponent, selectors: [["", "admin-edge", ""]], decls: 31, vars: 49, consts: [["name_template", ""], ["time_template", ""], ["bool_template", ""], ["description_template", ""], ["actions_template", ""], ["ripple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-4", "right-4", "flex", "max-w-[calc(100%-11rem)]", "cursor-pointer", "items-center", "overflow-hidden", "rounded-sm", "border", "shadow-sm", 3, "appTooltip"], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "default", "", "ripple", "", 1, "text-xl", 3, "click", "appTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], ["ripple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-4", "right-4", "flex", "max-w-[calc(100%-11rem)]", "cursor-pointer", "items-center", "overflow-hidden", "rounded-sm", "border", "shadow-sm", 3, "click", "appTooltip"], [1, "border-base-200", "flex", "h-full", "w-1/2", "flex-1", "items-center", "border-r", "p-2"], [1, "flex-1", "truncate"], [1, "rounded-none"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-col", "p-4"], ["appTooltipPosition", "right", 1, "flex", "h-full", "w-full", "items-center", "justify-center", 3, "appTooltip"], [1, "h-3", "w-3", "rounded-full"], [1, "sr-only"], [1, "w-full", "overflow-hidden", "px-4", "py-2", "text-xs", "select-text"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "ripple", "", 3, "click", "appTooltip"], ["icon", "", "default", "", "error", "", "ripple", "", 3, "click", "appTooltip"]], template: function PlaceEdgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, PlaceEdgeComponent_Conditional_0_Template, 8, 3, "button", 5);
      \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "div", 8);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 9)(7, "button", 10);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("click", function PlaceEdgeComponent_Template_button_click_7_listener() {
        return ctx.edit();
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275element(13, "app-progress-bar", 12)(14, "simple-table", 13);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, PlaceEdgeComponent_ng_template_21_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, PlaceEdgeComponent_ng_template_23_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(25, PlaceEdgeComponent_ng_template_25_Template, 6, 10, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(27, PlaceEdgeComponent_ng_template_27_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(29, PlaceEdgeComponent_ng_template_29_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r11 = \u0275\u0275reference(22);
      const time_template_r12 = \u0275\u0275reference(24);
      const bool_template_r13 = \u0275\u0275reference(26);
      const description_template_r14 = \u0275\u0275reference(28);
      const actions_template_r15 = \u0275\u0275reference(30);
      \u0275\u0275conditional(ctx.last_change()?.x_api_key ? 0 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "ADMIN.EDGE_HEADER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(8, 12, "ADMIN.EDGE_ADD"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 14, "ADMIN.EDGE_ADD"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.edge_list())("columns", \u0275\u0275pureFunction5(43, _c5, \u0275\u0275pureFunction2(28, _c0, \u0275\u0275pipeBind1(15, 16, "COMMON.ONLINE"), bool_template_r13), \u0275\u0275pureFunction2(31, _c1, \u0275\u0275pipeBind1(16, 18, "COMMON.FIELD_NAME"), name_template_r11), \u0275\u0275pureFunction2(34, _c2, \u0275\u0275pipeBind1(17, 20, "COMMON.FIELD_DESCRIPTION"), description_template_r14), \u0275\u0275pureFunction2(37, _c3, \u0275\u0275pipeBind1(18, 22, "COMMON.LAST_SEEN"), time_template_r12), \u0275\u0275pureFunction2(40, _c4, \u0275\u0275pipeBind1(19, 24, "COMMON.ACTIONS"), actions_template_r15)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(20, 26, "ADMIN.EDGE_LIST_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=edge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceEdgeComponent, [{
    type: Component,
    args: [{ selector: "[admin-edge]", template: `
        @if (last_change()?.x_api_key) {
            @let item = last_change();
            <button
                ripple
                [appTooltip]="'Copy API Key for ' + item.name"
                (click)="copyKey(item.x_api_key)"
                class="border-base-200 bg-base-100 absolute top-4 right-4 flex max-w-[calc(100%-11rem)] cursor-pointer items-center overflow-hidden rounded-sm border shadow-sm"
            >
                <div
                    class="border-base-200 flex h-full w-1/2 flex-1 items-center border-r p-2"
                >
                    <code class="flex-1 truncate">{{ item.x_api_key }}</code>
                </div>
                <div class="rounded-none">
                    <icon>content_copy</icon>
                </div>
            </button>
        }
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.EDGE_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        (click)="edit()"
                        [appTooltip]="'ADMIN.EDGE_ADD' | translate"
                        [attr.aria-label]="'ADMIN.EDGE_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="edge_list()"
                    [columns]="[
                        {
                            key: 'online',
                            name: 'COMMON.ONLINE' | translate,
                            hide_name: true,
                            content: bool_template,
                        },
                        {
                            key: 'id',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                            size: '36rem',
                            content: description_template,
                        },
                        {
                            key: 'last_seen',
                            name: 'COMMON.LAST_SEEN' | translate,
                            content: time_template,
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
                    [empty_message]="'ADMIN.EDGE_LIST_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.name }}</div>
                <div class="text-xs opacity-30">{{ row.id }}</div>
            </div>
        </ng-template>
        <ng-template #time_template let-data="data">
            <div class="flex flex-col p-4">
                <div>{{ data | dateFrom }}</div>
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div
                class="flex h-full w-full items-center justify-center"
                [appTooltip]="
                    (data ? 'COMMON.ONLINE' : 'COMMON.OFFLINE') | translate
                "
                appTooltipPosition="right"
            >
                <div
                    class="h-3 w-3 rounded-full"
                    [class.bg-success]="data"
                    [class.bg-error]="!data"
                ></div>
                <!-- The tooltip is not reachable, so name the state for screen readers -->
                <span class="sr-only">
                    {{
                        (data ? 'COMMON.ONLINE' : 'COMMON.OFFLINE') | translate
                    }}
                </span>
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="w-full overflow-hidden px-4 py-2 text-xs select-text">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    ripple
                    [appTooltip]="'ADMIN.EDGE_EDIT' | translate"
                    (click)="edit(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    ripple
                    [appTooltip]="'ADMIN.EDGE_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      IconComponent,
      TranslatePipe,
      DateFromPipe,
      SimpleTableComponent
    ], styles: ["/* angular:styles/component:css;ec8f84e53cdd709f;/home/runner/work/backoffice/backoffice/src/app/admin/edge.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=edge.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceEdgeComponent, { className: "PlaceEdgeComponent", filePath: "src/app/admin/edge.component.ts", lineNumber: 188 });
})();
export {
  PlaceEdgeComponent
};
//# debugId=1197b6a0-106d-5b85-801e-03cc43ac2cab
//# sourceMappingURL=chunk-J4EO2AXO.js.map
