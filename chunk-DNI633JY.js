import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GTRRNUZ6.js";
import {
  DateFromPipe
} from "./chunk-LGPP2H5A.js";
import {
  Clipboard
} from "./chunk-IQ3ZWEXJ.js";
import {
  openConfirmModal
} from "./chunk-F4VRVWBC.js";
import {
  SimpleTableComponent
} from "./chunk-QYONRSWJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-BVCQILOZ.js";
import "./chunk-PZ66W5KC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-PUYRIMA6.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-2N4WVO5O.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-BFILZFNY.js";
import "./chunk-GWVX43QP.js";
import "./chunk-W3GXKXZC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-WF6YZHUO.js";
import "./chunk-BKRK4NUB.js";
import "./chunk-RAVBIGYQ.js";
import "./chunk-2WXWFTBN.js";
import {
  IconComponent
} from "./chunk-POU26KIO.js";
import "./chunk-X6AVAIR4.js";
import {
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-ZMPXDLFL.js";
import "./chunk-ZDWHOOB3.js";
import {
  MatRippleModule
} from "./chunk-VDOGH5QV.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-GUX2IT3J.js";
import "./chunk-2VKYFPZX.js";
import {
  MatRipple
} from "./chunk-47BQ5GYC.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  Output,
  ReactiveFormsModule,
  Validators,
  computed,
  copyToClipboard,
  inject,
  output,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpureFunction1,
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
} from "./chunk-HTG7JMGL.js";
import {
  Su,
  bu,
  ku,
  lastValueFrom,
  vu,
  yu
} from "./chunk-72HWXKQ6.js";
import {
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/admin/edge-modal.component.ts
var EdgeModalComponent = class _EdgeModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  _dialog_ref = inject(MatDialogRef);
  event = output();
  edge = this._data.edge;
  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl("")
  });
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  ngOnInit() {
    this.form.patchValue(this.edge);
  }
  async save() {
    this.form.markAllAsTouched();
    if (!this.form.valid)
      return;
    this._dialog_ref.disableClose = true;
    this.loading.set("Saving edge node...");
    const edge = __spreadValues(__spreadValues({}, this.edge), this.form.value);
    const method = edge.id ? bu(edge.id, edge) : vu(edge);
    const new_edge = await lastValueFrom(method).catch((_) => null);
    this.loading.set("");
    this._dialog_ref.disableClose = false;
    if (!new_edge)
      return notifyError(i18n("ADMIN.EDGE_ERROR"));
    edge.id ? notifySuccess(i18n("ADMIN.EDGE_NEW_SUCCESS")) : notifySuccess(i18n("ADMIN.EDGE_EDIT_SUCCESS"));
    this._dialog_ref.close(new_edge);
  }
  static \u0275fac = function EdgeModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EdgeModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EdgeModalComponent, selectors: [["edge-modal"]], outputs: { event: "event" }, decls: 22, vars: 20, consts: [[3, "save", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-1", "flex-col"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", 3, "placeholder"], ["matInput", "", "formControlName", "description", 3, "placeholder"]], template: function EdgeModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function EdgeModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "label");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-form-field", 3);
      \u0275\u0275element(10, "input", 4);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementStart(12, "mat-error");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 2)(16, "label");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-form-field", 3);
      \u0275\u0275element(20, "textarea", 5);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 8, ctx.edge ? "ADMIN.EDGE_EDIT" : "ADMIN.EDGE_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 10, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 12, "ADMIN.EDGE_NAME_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "ADMIN.EDGE_NAME_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 18, "ADMIN.EDGE_DESCRIPTION_PLACEHOLDER"));
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    TranslatePipe
  ], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=edge-modal.component.css.map */"] });
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
            <form [formGroup]="form">
                <div class="flex flex-1 flex-col">
                    <label>
                        {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="name"
                            [placeholder]="
                                'ADMIN.EDGE_NAME_PLACEHOLDER' | translate
                            "
                        />
                        <mat-error>{{
                            'ADMIN.EDGE_NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-1 flex-col">
                    <label>{{ 'COMMON.FIELD_DESCRIPTION' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            formControlName="description"
                            [placeholder]="
                                'ADMIN.EDGE_DESCRIPTION_PLACEHOLDER' | translate
                            "
                        ></textarea>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;8a8075fae583a18e45f09e4bb44347a7183adb7a510ba559b95edba15222aaa8;/home/runner/work/backoffice/backoffice/src/app/admin/edge-modal.component.ts */\nmain {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=edge-modal.component.css.map */\n"] }]
  }], null, { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EdgeModalComponent, { className: "EdgeModalComponent", filePath: "src/app/admin/edge-modal.component.ts", lineNumber: 83 });
})();

// src/app/admin/edge.component.ts
var _c0 = ["admin-edge", ""];
var _c1 = (a0) => ({ key: "online", name: " ", content: a0 });
var _c2 = (a0, a1) => ({ key: "id", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "description", name: a0, size: "36rem", content: a1 });
var _c4 = (a0, a1) => ({ key: "last_seen", name: a0, content: a1 });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function PlaceEdgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275listener("click", function PlaceEdgeComponent_Conditional_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const item_r3 = \u0275\u0275readContextLet(0);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyKey(item_r3.x_api_key));
    });
    \u0275\u0275elementStart(2, "div", 15)(3, "code", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17)(6, "icon");
    \u0275\u0275text(7, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275storeLet(\u0275\u0275nextContext().last_change());
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", "Copy API Key for " + item_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.x_api_key);
  }
}
function PlaceEdgeComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.id);
  }
}
function PlaceEdgeComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "dateFrom");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, data_r7));
  }
}
function PlaceEdgeComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r8 = ctx.data;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 5, data_r8 ? "COMMON.ONLINE" : "COMMON.OFFLINE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", data_r8)("bg-error", !data_r8);
  }
}
function PlaceEdgeComponent_ng_template_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"), " ");
  }
}
function PlaceEdgeComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, PlaceEdgeComponent_ng_template_23_Conditional_2_Template, 3, 3, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r9, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r9 ? 2 : -1);
  }
}
function PlaceEdgeComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaceEdgeComponent_ng_template_25_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.edit(row_r11));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function PlaceEdgeComponent_ng_template_25_Template_button_click_5_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(row_r11));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "ADMIN.EDGE_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.EDGE_REMOVE"));
  }
}
var PlaceEdgeComponent = class _PlaceEdgeComponent {
  _dialog = inject(MatDialog);
  _clipboard = inject(Clipboard);
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  hide_edge = signal("", ...ngDevMode ? [{ debugName: "hide_edge" }] : []);
  edge_list = signal([], ...ngDevMode ? [{ debugName: "edge_list" }] : []);
  edges = computed(() => {
    return this.edge_list().filter(({ id }) => id !== this.hide_edge());
  }, ...ngDevMode ? [{ debugName: "edges" }] : []);
  last_change = signal(null, ...ngDevMode ? [{ debugName: "last_change" }] : []);
  ngOnInit() {
    const edge_data = sessionStorage.getItem("BACKOFFICE.last_edge");
    try {
      this.last_change.set(JSON.parse(edge_data) || null);
    } catch {
    }
    this.loadEdges();
  }
  async token(edge) {
    const details = await lastValueFrom(ku(edge.id));
    copyToClipboard(details.token);
    notifyInfo(`Token copied to clickboard.`);
  }
  async edit(edge) {
    const ref = this._dialog.open(EdgeModalComponent, { data: { edge } });
    ref.afterClosed().subscribe((_) => {
      sessionStorage.setItem("BACKOFFICE.last_edge", JSON.stringify(_));
      this.last_change.set(_);
      this.loadEdges();
    });
  }
  async remove(i) {
    const details = await openConfirmModal({
      title: "Remove edge?",
      content: `Remove <strong>${i.name}</strong>?<br>You or your users may lose access to some data.`,
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details)
      return;
    details.loading("Removing edge...");
    const err = await lastValueFrom(Su(i.id)).catch((_) => _);
    details.close();
    if (err)
      return notifyError(`Error removing edge. Error: ${err.statusText || err.message || err}`);
    sessionStorage.removeItem("BACKOFFICE.last_edge");
    this.last_change.set(null);
    notifySuccess("Successfully removed Edge.");
    this.hide_edge.set(i.id);
  }
  copyKey(key) {
    if (key && this._clipboard.copy(key)) {
      notifySuccess("Edge API Key copied to clipboard.");
    }
  }
  async loadEdges() {
    this.loading.set("Loading edge node list...");
    const { data } = await lastValueFrom(yu());
    this.edge_list.set((data || []).sort((a, b) => a.id?.localeCompare(b.id)));
    this.loading.set("");
  }
  static \u0275fac = function PlaceEdgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceEdgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceEdgeComponent, selectors: [["", "admin-edge", ""]], attrs: _c0, decls: 27, vars: 40, consts: [["name_template", ""], ["time_template", ""], ["bool_template", ""], ["description_template", ""], ["actions_template", ""], ["matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-4", "right-4", "flex", "max-w-[calc(100%-11rem)]", "cursor-pointer", "items-center", "overflow-hidden", "rounded-sm", "border", "shadow-sm", 3, "matTooltip"], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", 1, "w-40", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-4", "right-4", "flex", "max-w-[calc(100%-11rem)]", "cursor-pointer", "items-center", "overflow-hidden", "rounded-sm", "border", "shadow-sm", 3, "click", "matTooltip"], [1, "border-base-200", "flex", "h-full", "w-1/2", "flex-1", "items-center", "border-r", "p-2"], [1, "flex-1", "truncate"], ["btn", "", "icon", "", 1, "rounded-none"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-col", "p-4"], ["matTooltipPosition", "right", 1, "flex", "h-full", "w-full", "items-center", "justify-center", 3, "matTooltip"], [1, "h-3", "w-3", "rounded-full"], [1, "w-full", "overflow-hidden", "px-4", "py-2", "text-xs", "select-text"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function PlaceEdgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275conditionalCreate(0, PlaceEdgeComponent_Conditional_0_Template, 8, 3, "div", 5);
      \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "div", 8);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 9)(7, "button", 10);
      \u0275\u0275listener("click", function PlaceEdgeComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.edit());
      });
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 11);
      \u0275\u0275element(11, "mat-progress-bar", 12)(12, "simple-table", 13);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, PlaceEdgeComponent_ng_template_17_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, PlaceEdgeComponent_ng_template_19_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, PlaceEdgeComponent_ng_template_21_Template, 3, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(23, PlaceEdgeComponent_ng_template_23_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(25, PlaceEdgeComponent_ng_template_25_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_5_0;
      const name_template_r12 = \u0275\u0275reference(18);
      const time_template_r13 = \u0275\u0275reference(20);
      const bool_template_r14 = \u0275\u0275reference(22);
      const description_template_r15 = \u0275\u0275reference(24);
      const actions_template_r16 = \u0275\u0275reference(26);
      \u0275\u0275conditional(((tmp_5_0 = ctx.last_change()) == null ? null : tmp_5_0.x_api_key) ? 0 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "ADMIN.EDGE_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, "ADMIN.EDGE_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.edges())("columns", \u0275\u0275pureFunction5(34, _c6, \u0275\u0275pureFunction1(21, _c1, bool_template_r14), \u0275\u0275pureFunction2(23, _c2, \u0275\u0275pipeBind1(13, 13, "COMMON.FIELD_NAME"), name_template_r12), \u0275\u0275pureFunction2(26, _c3, \u0275\u0275pipeBind1(14, 15, "COMMON.FIELD_DESCRIPTION"), description_template_r15), \u0275\u0275pureFunction2(29, _c4, \u0275\u0275pipeBind1(15, 17, "COMMON.LAST_SEEN"), time_template_r13), \u0275\u0275pureFunction1(32, _c5, actions_template_r16)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(16, 19, "ADMIN.EDGE_LIST_EMPTY"));
    }
  }, dependencies: [
    CommonModule,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=edge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceEdgeComponent, [{
    type: Component,
    args: [{ selector: "[admin-edge]", template: `
        @if (last_change()?.x_api_key) {
            @let item = last_change();
            <div
                (click)="copyKey(item.x_api_key)"
                matRipple
                [matTooltip]="'Copy API Key for ' + item.name"
                class="border-base-200 bg-base-100 absolute top-4 right-4 flex max-w-[calc(100%-11rem)] cursor-pointer items-center overflow-hidden rounded-sm border shadow-sm"
            >
                <div
                    class="border-base-200 flex h-full w-1/2 flex-1 items-center border-r p-2"
                >
                    <code class="flex-1 truncate">{{ item.x_api_key }}</code>
                </div>
                <button btn icon class="rounded-none">
                    <icon>content_copy</icon>
                </button>
            </div>
        }
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.EDGE_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button btn class="w-40" (click)="edit()">
                        {{ 'ADMIN.EDGE_ADD' | translate }}
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="edges()"
                    [columns]="[
                        {
                            key: 'online',
                            name: ' ',
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
                            name: ' ',
                            content: actions_template,
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.EDGE_LIST_EMPTY' | translate"
                ></simple-table>
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
                [matTooltip]="
                    (data ? 'COMMON.ONLINE' : 'COMMON.OFFLINE') | translate
                "
                matTooltipPosition="right"
            >
                <div
                    class="h-3 w-3 rounded-full"
                    [class.bg-success]="data"
                    [class.bg-error]="!data"
                ></div>
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
                    matRipple
                    [matTooltip]="'ADMIN.EDGE_EDIT' | translate"
                    (click)="edit(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'ADMIN.EDGE_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      DateFromPipe,
      SimpleTableComponent,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;6b916a9ce9f87da660309829bc1d821535f5316b965f45f91afca36edea1098c;/home/runner/work/backoffice/backoffice/src/app/admin/edge.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=edge.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceEdgeComponent, { className: "PlaceEdgeComponent", filePath: "src/app/admin/edge.component.ts", lineNumber: 182 });
})();
export {
  PlaceEdgeComponent
};
//# sourceMappingURL=chunk-DNI633JY.js.map
