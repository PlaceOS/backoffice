import {
  SettingsFieldComponent
} from "./chunk-IUJNKS2I.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DXEXLE3X.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-LGSLM77D.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-6ATATSUD.js";
import "./chunk-E3WQDUKH.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-ALEPO5ZJ.js";
import "./chunk-VGLA4YGG.js";
import "./chunk-EGRPP66T.js";
import "./chunk-OD44YKN7.js";
import {
  MatOption
} from "./chunk-RXOUTXM3.js";
import {
  TranslatePipe
} from "./chunk-XGWC243Z.js";
import "./chunk-26CSHF2R.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-AJKLM77M.js";
import {
  O,
  P,
  T,
  lastValueFrom,
  map
} from "./chunk-ESVM3M45.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/admin/schemas.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminSchemasComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schema_r1 = ctx.$implicit;
    \u0275\u0275property("value", schema_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", schema_r1.name, " ");
  }
}
function AdminSchemasComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 14)(2, "label", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 16)(6, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSchemasComponent_Conditional_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.schema_copy().name, $event) || (ctx_r2.schema_copy().name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 18);
    \u0275\u0275listener("click", function AdminSchemasComponent_Conditional_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveSchema());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 3, "ADMIN.SCHEMA_NAME"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.schema_copy().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "COMMON.SAVE"), " ");
  }
}
function AdminSchemasComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-form-field", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSchemasComponent_Conditional_20_Template_settings_form_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.schema_copy().schema, $event) || (ctx_r2.schema_copy().schema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.schema_copy().schema);
    \u0275\u0275property("readonly", false);
  }
}
function AdminSchemasComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "ADMIN.SCHEMA_SELECT_MSG"), " ");
  }
}
var AdminSchemasComponent = class _AdminSchemasComponent {
  active_schema = signal(null, ...ngDevMode ? [{ debugName: "active_schema" }] : []);
  schema_copy = signal(null, ...ngDevMode ? [{ debugName: "schema_copy" }] : []);
  schema_list = signal([], ...ngDevMode ? [{ debugName: "schema_list" }] : []);
  copySchema() {
    if (!this.active_schema())
      return;
    this.schema_copy.set(JSON.parse(JSON.stringify(this.active_schema())));
  }
  async newSchema() {
    this.active_schema.set({
      name: "New Schema",
      schema: "{}"
    });
    this.copySchema();
  }
  async saveSchema() {
    const schema = this.schema_copy();
    let schema_list = this.schema_list();
    const details = {
      query_params: {},
      fn: (_) => _,
      form_data: schema,
      path: "schema"
    };
    const new_schema = await lastValueFrom(schema.id ? T(__spreadProps(__spreadValues({}, details), {
      id: schema.id,
      method: "patch"
    })) : P(__spreadValues({}, details)));
    schema_list = [
      ...schema_list.filter((_) => schema.id !== _.id),
      new_schema
    ];
    schema_list.sort((a, b) => a.name?.localeCompare(b.name));
    this.schema_list.set(schema_list);
    this.active_schema.set(null);
    this.schema_copy.set(null);
  }
  ngOnInit() {
    this.loadSchemas();
  }
  getSchema(id) {
    const schema_list = this.schema_list();
    const schema = schema_list.find((_) => _.id === id);
    if (!schema)
      return null;
    return JSON.parse(schema.schema || "{}");
  }
  async loadSchemas() {
    const schema_list = await lastValueFrom(O({
      query_params: {},
      fn: (_) => __spreadValues({
        name: _.name || "",
        schema: _.schema || "{}"
      }, _),
      path: "schema"
    }).pipe(map((_) => _.data)));
    schema_list.sort((a, b) => a.name?.localeCompare(b.name));
    this.schema_list.set(schema_list);
  }
  static \u0275fac = function AdminSchemasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSchemasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSchemasComponent, selectors: [["admin-schemas"]], decls: 22, vars: 15, consts: [[1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "click"], [1, "font-sans", "italic"], ["btn", "", "matRipple", "", 1, "h-12", "w-40", 3, "click"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "relative", "h-1/2", "flex-1"], ["lang", "json", 3, "ngModel", "readonly"], [1, "bg-base-200", "absolute", "inset-x-2", "top-2", "bottom-5", "flex", "items-center", "justify-center", "rounded-xl"], [1, "flex", "w-1/2", "flex-1", "flex-col"], ["for", "type"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 1, "mt-6", "h-12", "w-40", 3, "click"], ["lang", "json", 3, "ngModelChange", "ngModel", "readonly"], [1, "p-8", "opacity-30"]], template: function AdminSchemasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "mat-form-field", 4)(7, "mat-select", 5);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AdminSchemasComponent_Template_mat_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.active_schema, $event) || (ctx.active_schema = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminSchemasComponent_Template_mat_select_ngModelChange_7_listener() {
        return ctx.copySchema();
      });
      \u0275\u0275repeaterCreate(9, AdminSchemasComponent_For_10_Template, 2, 2, "mat-option", 6, _forTrack0);
      \u0275\u0275elementStart(11, "mat-option", 7);
      \u0275\u0275listener("click", function AdminSchemasComponent_Template_mat_option_click_11_listener($event) {
        ctx.newSchema();
        return $event.preventDefault();
      });
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function AdminSchemasComponent_Template_button_click_15_listener() {
        return ctx.newSchema();
      });
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(18, AdminSchemasComponent_Conditional_18_Template, 10, 7, "div", 10);
      \u0275\u0275elementStart(19, "div", 11);
      \u0275\u0275conditionalCreate(20, AdminSchemasComponent_Conditional_20_Template, 1, 2, "settings-form-field", 12)(21, AdminSchemasComponent_Conditional_21_Template, 4, 3, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "ADMIN.SCHEMA_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.active_schema);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 9, "ADMIN.SCHEMA_SELECT"));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.schema_list());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "ADMIN.SCHEMA_NEW"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "ADMIN.SCHEMA_ADD"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.schema_copy() ? 18 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.schema_copy() ? 20 : 21);
    }
  }, dependencies: [
    SettingsFieldComponent,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    CommonModule,
    MatSelectModule,
    MatSelect,
    MatOption,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=schemas.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSchemasComponent, [{
    type: Component,
    args: [{ selector: "admin-schemas", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">
                    {{ 'ADMIN.SCHEMA_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [(ngModel)]="active_schema"
                            (ngModelChange)="copySchema()"
                            [placeholder]="'ADMIN.SCHEMA_SELECT' | translate"
                        >
                            @for (schema of schema_list(); track schema.id) {
                                <mat-option [value]="schema">
                                    {{ schema.name }}
                                </mat-option>
                            }
                            <mat-option
                                (click)="newSchema(); $event.preventDefault()"
                            >
                                <span class="font-sans italic">{{
                                    'ADMIN.SCHEMA_NEW' | translate
                                }}</span>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="h-12 w-40"
                        (click)="newSchema()"
                    >
                        {{ 'ADMIN.SCHEMA_ADD' | translate }}
                    </button>
                </div>
            </div>
            @if (schema_copy()) {
                <div class="mb-4 flex items-center space-x-2">
                    <div class="flex w-1/2 flex-1 flex-col">
                        <label for="type"
                            >{{ 'ADMIN.SCHEMA_NAME' | translate }}:
                        </label>
                        <mat-form-field
                            class="no-subscript w-full"
                            appearance="outline"
                        >
                            <input matInput [(ngModel)]="schema_copy().name" />
                        </mat-form-field>
                    </div>
                    <button
                        btn
                        matRipple
                        class="mt-6 h-12 w-40"
                        (click)="saveSchema()"
                    >
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </div>
            }
            <div class="relative h-1/2 flex-1">
                @if (schema_copy()) {
                    <settings-form-field
                        [(ngModel)]="schema_copy().schema"
                        lang="json"
                        [readonly]="false"
                    ></settings-form-field>
                } @else {
                    <div
                        class="bg-base-200 absolute inset-x-2 top-2 bottom-5 flex items-center justify-center rounded-xl"
                    >
                        <p class="p-8 opacity-30">
                            {{ 'ADMIN.SCHEMA_SELECT_MSG' | translate }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      TranslatePipe,
      SettingsFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      CommonModule,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;8275698c9b49b3d97a7487629c5c77d1b0bf689d57daaeff75055de8152b5a21;/home/runner/work/backoffice/backoffice/src/app/admin/schemas.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=schemas.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSchemasComponent, { className: "AdminSchemasComponent", filePath: "src/app/admin/schemas.component.ts", lineNumber: 128 });
})();
export {
  AdminSchemasComponent
};
//# sourceMappingURL=chunk-CG7KHWFF.js.map
