import {
  AdminDataService
} from "./chunk-AKUGSN4Q.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-FSFNWGQP.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-W2EPZJRF.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HAWZID7H.js";
import {
  MatOption
} from "./chunk-QRPWL2EI.js";
import {
  TranslatePipe
} from "./chunk-4ZLGHXUI.js";
import {
  Component,
  Input,
  Output,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HGOGRFKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/admin-domain-select.component.ts
var _c0 = () => ({});
var _forTrack0 = ($index, $item) => $item.id;
function AdminDomainSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ADMIN.ALL_DOMAINS"), " ");
  }
}
function AdminDomainSelectComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(domain_r1.name);
  }
}
var AdminDomainSelectComponent = class _AdminDomainSelectComponent {
  _data = inject(AdminDataService);
  /** Admin page that owns the selection */
  key = input.required(
    ...ngDevMode ? [{ debugName: "key" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Add an "All domains" option */
  all = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "all" } : (
    /* istanbul ignore next */
    {}
  )), { transform: booleanAttribute }));
  field_class = input(
    "no-subscript w-56",
    ...ngDevMode ? [{ debugName: "field_class" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emits after the user picks a domain */
  changed = output();
  domain_list = this._data.domain_list;
  domain = computed(
    () => this._data.selectedDomain(this.key())(),
    ...ngDevMode ? [{ debugName: "domain" }] : (
      /* istanbul ignore next */
      []
    )
  );
  select(domain) {
    this._data.setDomain(this.key(), domain);
    this.changed.emit(domain);
  }
  static \u0275fac = function AdminDomainSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDomainSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDomainSelectComponent, selectors: [["admin-domain-select"]], inputs: { key: [1, "key"], all: [1, "all"], field_class: [1, "field_class"] }, outputs: { changed: "changed" }, decls: 6, vars: 7, consts: [["appearance", "outline"], ["name", "domain", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"]], template: function AdminDomainSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-select", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function AdminDomainSelectComponent_Template_mat_select_ngModelChange_1_listener($event) {
        return ctx.select($event);
      });
      \u0275\u0275conditionalCreate(3, AdminDomainSelectComponent_Conditional_3_Template, 3, 5, "mat-option", 2);
      \u0275\u0275repeaterCreate(4, AdminDomainSelectComponent_For_5_Template, 2, 2, "mat-option", 2, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.field_class());
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.domain())("placeholder", \u0275\u0275pipeBind1(2, 5, ctx.all() ? "ADMIN.ALL_DOMAINS" : "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.all() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.domain_list());
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDomainSelectComponent, [{
    type: Component,
    args: [{
      selector: "admin-domain-select",
      template: `
        <mat-form-field appearance="outline" [class]="field_class()">
            <mat-select
                name="domain"
                [ngModel]="domain()"
                (ngModelChange)="select($event)"
                [placeholder]="
                    (all() ? 'ADMIN.ALL_DOMAINS' : 'ADMIN.SELECT_DOMAIN')
                        | translate
                "
            >
                @if (all()) {
                    <mat-option [value]="{}">
                        {{ 'ADMIN.ALL_DOMAINS' | translate }}
                    </mat-option>
                }
                @for (domain of domain_list(); track domain.id) {
                    <mat-option [value]="domain">{{ domain.name }}</mat-option>
                }
            </mat-select>
        </mat-form-field>
    `,
      imports: [FormsModule, MatFormFieldModule, MatSelectModule, TranslatePipe]
    }]
  }], null, { key: [{ type: Input, args: [{ isSignal: true, alias: "key", required: true }] }], all: [{ type: Input, args: [{ isSignal: true, alias: "all", required: false }] }], field_class: [{ type: Input, args: [{ isSignal: true, alias: "field_class", required: false }] }], changed: [{ type: Output, args: ["changed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDomainSelectComponent, { className: "AdminDomainSelectComponent", filePath: "src/app/admin/admin-domain-select.component.ts", lineNumber: 43 });
})();

export {
  AdminDomainSelectComponent
};
//# debugId=c8df130b-449d-5596-b786-bc4a50084655
//# sourceMappingURL=chunk-T2RCNIFP.js.map
