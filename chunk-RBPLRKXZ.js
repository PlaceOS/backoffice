import {
  MatInput,
  MatInputModule
} from "./chunk-PRL2UEXY.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-LZJ3O446.js";
import {
  AsyncHandler
} from "./chunk-KMWOHLBD.js";
import {
  IconComponent
} from "./chunk-VGPPQ2QX.js";
import {
  MatRippleModule
} from "./chunk-763UXDJC.js";
import {
  TranslatePipe
} from "./chunk-VBR6PWOK.js";
import {
  MatRipple
} from "./chunk-ODP5LKCS.js";
import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  forwardRef,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CMCD56FG.js";

// src/app/ui/custom-fields/object-list-field.component.ts
function ObjectListFieldComponent_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    \u0275\u0275attribute("name", field_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2, " ");
  }
}
function ObjectListFieldComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, ObjectListFieldComponent_Conditional_0_Conditional_1_For_2_Template, 2, 2, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275element(3, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fields());
  }
}
function ObjectListFieldComponent_Conditional_0_For_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-form-field", 12)(2, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ObjectListFieldComponent_Conditional_0_For_3_For_2_Template_input_ngModelChange_2_listener($event) {
      const field_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const item_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(item_r7[field_r6], $event) || (item_r7[field_r6] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ObjectListFieldComponent_Conditional_0_For_3_For_2_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setValue(ctx_r2.active_list));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("name", field_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", field_r6)("placeholder", field_r6);
    \u0275\u0275twoWayProperty("ngModel", item_r7[field_r6]);
  }
}
function ObjectListFieldComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, ObjectListFieldComponent_Conditional_0_For_3_For_2_Template, 3, 4, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function ObjectListFieldComponent_Conditional_0_For_3_Template_button_click_3_listener() {
      const item_r7 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeRow(item_r7));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fields());
  }
}
function ObjectListFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ObjectListFieldComponent_Conditional_0_Conditional_1_Template, 4, 0, "div", 1);
    \u0275\u0275repeaterCreate(2, ObjectListFieldComponent_Conditional_0_For_3_Template, 6, 0, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
    \u0275\u0275listener("click", function ObjectListFieldComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addRow());
    });
    \u0275\u0275elementStart(6, "div", 5)(7, "icon", 6);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.active_list && ctx_r2.active_list.length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.active_list);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 2, "COMMON.NEW_ITEM"), " ");
  }
}
var ObjectListFieldComponent = class _ObjectListFieldComponent extends AsyncHandler {
  /** List of fields that can be populated for each object */
  fields = input(void 0, ...ngDevMode ? [{ debugName: "fields" }] : []);
  /** List of objects */
  active_list = [];
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  /** Add a new item the the active list */
  addRow() {
    if (!this.active_list) {
      this.active_list = [];
    }
    this.active_list.push({});
    this.setValue(this.active_list);
  }
  /**
   * Remove item from the active list
   * @param item Item to remove
   */
  removeRow(item) {
    const index = this.active_list.indexOf(item);
    if (index >= 0) {
      this.active_list.splice(index, 1);
    }
    this.setValue(this.active_list);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_list = value;
  }
  /**
   * Registers a callback function that is called when the
   * control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Registers a callback function is called by the forms
   * API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ObjectListFieldComponent_BaseFactory;
    return function ObjectListFieldComponent_Factory(__ngFactoryType__) {
      return (\u0275ObjectListFieldComponent_BaseFactory || (\u0275ObjectListFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ObjectListFieldComponent)))(__ngFactoryType__ || _ObjectListFieldComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectListFieldComponent, selectors: [["object-list-field"]], inputs: { fields: [1, "fields"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ObjectListFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "object-list"], [1, "header", "row", "h-6", "text-sm"], [1, "row"], [1, "row", "h-10", "text-center"], ["btn", "", "type", "button", 1, "w-full", 3, "click"], [1, "contents"], [1, "text-2xl"], [1, "text"], [1, "field", "capitalize"], [1, "w-10"], [1, "field"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "name", "placeholder", "ngModel"]], template: function ObjectListFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ObjectListFieldComponent_Conditional_0_Template, 12, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.fields() && ctx.fields().length ? 0 : -1);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatInput,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%], \nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 3.5em;\n}\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25em;\n}\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n}\n.field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1px;\n}\nbutton[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=object-list-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObjectListFieldComponent, [{
    type: Component,
    args: [{ selector: "object-list-field", template: `
        @if (fields() && fields().length) {
            <div class="object-list">
                @if (active_list && active_list.length) {
                    <div class="header row h-6 text-sm">
                        @for (field of fields(); track field) {
                            <div class="field capitalize" [attr.name]="field">
                                {{ field }}
                            </div>
                        }
                        <div class="w-10"></div>
                    </div>
                }
                @for (item of active_list; track item) {
                    <div class="row">
                        @for (field of fields(); track field) {
                            <div class="field" [attr.name]="field">
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [name]="field"
                                        [placeholder]="field"
                                        [(ngModel)]="item[field]"
                                        (ngModelChange)="setValue(active_list)"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        <button
                            icon
                            matRipple
                            class="border-error text-error h-12 w-12 rounded-sm border"
                            (click)="removeRow(item)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                }
                <div class="row h-10 text-center">
                    <button btn type="button" class="w-full" (click)="addRow()">
                        <div class="contents">
                            <icon class="text-2xl">add</icon>
                            <div class="text">
                                {{ 'COMMON.NEW_ITEM' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ObjectListFieldComponent),
        multi: true
      }
    ], imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule
    ], styles: ["/* angular:styles/component:css;9cc846b1d3396d19d698e2501a8588454ccaa6c3b66998133007dfe2e1ef00a8;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/object-list-field.component.ts */\n:host,\nmat-form-field {\n  width: 100%;\n}\n.row {\n  display: flex;\n  width: 100%;\n  height: 3.5em;\n}\n.row > * {\n  margin: 0 0.25em;\n}\n.row > *:first-child {\n  margin-left: 0;\n}\n.row > *:last-child {\n  margin-right: 0;\n}\n.header > * {\n  padding: 0 0.5em;\n}\n.field {\n  flex: 1;\n  min-width: 1px;\n}\nbutton .contents {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=object-list-field.component.css.map */\n"] }]
  }], null, { fields: [{ type: Input, args: [{ isSignal: true, alias: "fields", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectListFieldComponent, { className: "ObjectListFieldComponent", filePath: "src/app/ui/custom-fields/object-list-field.component.ts", lineNumber: 125 });
})();

export {
  ObjectListFieldComponent
};
//# sourceMappingURL=chunk-RBPLRKXZ.js.map
