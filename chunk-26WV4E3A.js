import {
  SettingsFieldComponent
} from "./chunk-YKTQN25X.js";
import "./chunk-EOOX537V.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  notifyError
} from "./chunk-ZYXD5WKE.js";
import "./chunk-G2A4D7CX.js";
import "./chunk-32E64OOS.js";
import "./chunk-ZLRMIFQU.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import {
  SelectComponent
} from "./chunk-I2BE2RKH.js";
import {
  OptionComponent
} from "./chunk-BE6PEWTW.js";
import {
  FormFieldComponent
} from "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PUVLCN6F.js";
import {
  TranslatePipe
} from "./chunk-TUKKKEUM.js";
import "./chunk-RWWXPWHW.js";
import {
  $,
  P,
  q
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
import "./chunk-XWSZBFF5.js";
import {
  Component,
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
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/schemas.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminSchemasComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 6);
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
function AdminSchemasComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 14)(2, "label", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-form-field", 16)(6, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function AdminSchemasComponent_Conditional_20_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.schema_copy().name, $event) || (ctx_r2.schema_copy().name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 18);
    \u0275\u0275listener("click", function AdminSchemasComponent_Conditional_20_Template_button_click_7_listener() {
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
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "COMMON.SAVE"), " ");
  }
}
function AdminSchemasComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-form-field", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function AdminSchemasComponent_Conditional_22_Template_settings_form_field_ngModelChange_0_listener($event) {
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
    \u0275\u0275control();
  }
}
function AdminSchemasComponent_Conditional_23_Template(rf, ctx) {
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
  active_schema = signal(
    null,
    ...ngDevMode ? [{ debugName: "active_schema" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema_copy = signal(
    null,
    ...ngDevMode ? [{ debugName: "schema_copy" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "schema_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
    try {
      JSON.parse(schema.schema || "{}");
    } catch (err) {
      return notifyError(`Schema is not valid JSON. ${describeError(err)}`);
    }
    let schema_list = this.schema_list();
    const details = {
      query_params: {},
      fn: (_) => _,
      form_data: schema,
      path: "schema"
    };
    let new_schema;
    try {
      new_schema = await (schema.id ? P(__spreadProps(__spreadValues({}, details), {
        id: schema.id,
        method: "patch"
      })) : q(__spreadValues({}, details)));
    } catch (err) {
      return notifyError(`Failed to save schema. Error: ${describeError(err)}`);
    }
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
  async loadSchemas() {
    const schema_list = await $({
      query_params: {},
      fn: (_) => __spreadValues({
        name: _.name || "",
        schema: _.schema || "{}"
      }, _),
      path: "schema"
    }).then((_) => _.data).catch((err) => {
      notifyError(`Failed to load schemas. Error: ${describeError(err)}`);
      return [];
    });
    schema_list.sort((a, b) => a.name?.localeCompare(b.name));
    this.schema_list.set(schema_list);
  }
  static \u0275fac = function AdminSchemasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSchemasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSchemasComponent, selectors: [["admin-schemas"]], decls: 24, vars: 18, consts: [[1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], [1, "no-subscript", "w-56"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "click"], [1, "font-sans", "italic"], ["icon", "", "default", "", "ripple", "", 1, "text-xl", 3, "click", "appTooltip"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "relative", "h-1/2", "flex-1"], ["lang", "json", 3, "ngModel", "readonly"], [1, "bg-base-200", "absolute", "inset-x-2", "top-2", "bottom-5", "flex", "items-center", "justify-center", "rounded-xl"], [1, "flex", "w-1/2", "flex-1", "flex-col"], ["for", "schema-name"], [1, "no-subscript", "w-full"], ["id", "schema-name", 3, "ngModelChange", "ngModel"], ["btn", "", "ripple", "", 1, "mt-6", "h-12", "w-40", 3, "click"], ["lang", "json", 3, "ngModelChange", "ngModel", "readonly"], [1, "p-8", "opacity-30"]], template: function AdminSchemasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "app-form-field", 4)(7, "app-select", 5);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function AdminSchemasComponent_Template_app_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.active_schema, $event) || (ctx.active_schema = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminSchemasComponent_Template_app_select_ngModelChange_7_listener() {
        return ctx.copySchema();
      });
      \u0275\u0275repeaterCreate(9, AdminSchemasComponent_For_10_Template, 2, 2, "app-option", 6, _forTrack0);
      \u0275\u0275elementStart(11, "app-option", 7);
      \u0275\u0275listener("click", function AdminSchemasComponent_Template_app_option_click_11_listener($event) {
        ctx.newSchema();
        return $event.preventDefault();
      });
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("click", function AdminSchemasComponent_Template_button_click_15_listener() {
        return ctx.newSchema();
      });
      \u0275\u0275elementStart(18, "icon");
      \u0275\u0275text(19, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(20, AdminSchemasComponent_Conditional_20_Template, 10, 7, "div", 10);
      \u0275\u0275elementStart(21, "div", 11);
      \u0275\u0275conditionalCreate(22, AdminSchemasComponent_Conditional_22_Template, 1, 2, "settings-form-field", 12)(23, AdminSchemasComponent_Conditional_23_Template, 4, 3, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "ADMIN.SCHEMA_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.active_schema);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 10, "ADMIN.SCHEMA_SELECT"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.schema_list());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "ADMIN.SCHEMA_NEW"));
      \u0275\u0275advance(2);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(16, 14, "ADMIN.SCHEMA_ADD"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 16, "ADMIN.SCHEMA_ADD"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.schema_copy() ? 20 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.schema_copy() ? 22 : 23);
    }
  }, dependencies: [
    TooltipDirective,
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    IconComponent,
    SettingsFieldComponent,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=schemas.component.css.map */"] });
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
                    <app-form-field class="no-subscript w-56">
                        <app-select
                            name="type"
                            [(ngModel)]="active_schema"
                            (ngModelChange)="copySchema()"
                            [placeholder]="'ADMIN.SCHEMA_SELECT' | translate"
                        >
                            @for (schema of schema_list(); track schema.id) {
                                <app-option [value]="schema">
                                    {{ schema.name }}
                                </app-option>
                            }
                            <app-option
                                (click)="newSchema(); $event.preventDefault()"
                            >
                                <span class="font-sans italic">{{
                                    'ADMIN.SCHEMA_NEW' | translate
                                }}</span>
                            </app-option>
                        </app-select>
                    </app-form-field>
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        (click)="newSchema()"
                        [appTooltip]="'ADMIN.SCHEMA_ADD' | translate"
                        [attr.aria-label]="'ADMIN.SCHEMA_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            @if (schema_copy()) {
                <div class="mb-4 flex items-center space-x-2">
                    <div class="flex w-1/2 flex-1 flex-col">
                        <label for="schema-name"
                            >{{ 'ADMIN.SCHEMA_NAME' | translate }}:
                        </label>
                        <app-form-field class="no-subscript w-full">
                            <input
                                id="schema-name"
                                [(ngModel)]="schema_copy().name"
                            />
                        </app-form-field>
                    </div>
                    <button
                        btn
                        ripple
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
                    />
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
      TooltipDirective,
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      IconComponent,
      TranslatePipe,
      SettingsFieldComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;7b87b3c83ff1605e;/home/runner/work/backoffice/backoffice/src/app/admin/schemas.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=schemas.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSchemasComponent, { className: "AdminSchemasComponent", filePath: "src/app/admin/schemas.component.ts", lineNumber: 130 });
})();
export {
  AdminSchemasComponent
};
//# debugId=7b0977dd-184e-56f5-bb79-2d0cfa181f1c
//# sourceMappingURL=chunk-26WV4E3A.js.map
