import {
  EmailStateService
} from "./chunk-UOBNOW7D.js";
import "./chunk-YHJ76Z44.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GEMSQ6RP.js";
import {
  SimpleTableComponent
} from "./chunk-FCU3WVEC.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-TTOMUWPB.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-CEZ5W4YU.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import "./chunk-BHWNEOU7.js";
import {
  MatOption
} from "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import "./chunk-YUNY6RXQ.js";
import "./chunk-6SWYUOAV.js";
import "./chunk-2UI5N333.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5TQT6AWS.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-N6UZRJAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/admin/mailing-lists/email-templates.component.ts
var _c0 = () => ["/admin", "mailing-list", "edit"];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function EmailTemplatesComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r1.name, " ");
  }
}
var EmailTemplatesComponent = class _EmailTemplatesComponent {
  _service = inject(EmailStateService);
  loading = this._service.loading;
  domain = this._service.domain;
  domain_list = this._service.domain_list;
  templates = this._service.templates;
  setDomain = (d) => this._service.setDomain(d);
  async ngOnInit() {
    await this._service.selectDefaultDomain();
  }
  static \u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailTemplatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["email-templates"]], decls: 14, vars: 8, consts: [[1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["name", "type", "placeholder", "Select Domain...", 3, "ngModelChange", "ngModel"], [3, "value"], ["btn", "", "matRipple", "", 1, "w-40", 3, "routerLink"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "left-0", "w-full"], [1, "mb-4", "block", "min-w-4xl", "text-sm", 3, "data", "columns"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Email Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-select", 5);
      \u0275\u0275listener("ngModelChange", function EmailTemplatesComponent_Template_mat_select_ngModelChange_6_listener($event) {
        return ctx.setDomain($event);
      });
      \u0275\u0275repeaterCreate(7, EmailTemplatesComponent_For_8_Template, 2, 2, "mat-option", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 7);
      \u0275\u0275text(10, " Add Template ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275element(12, "mat-progress-bar", 9)(13, "simple-table", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.domain());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.domain_list());
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.templates)("columns", \u0275\u0275pureFunction0(7, _c1));
    }
  }, dependencies: [
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    RouterModule,
    RouterLink,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplatesComponent, [{
    type: Component,
    args: [{ selector: "email-templates", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">Email Template</div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [ngModel]="domain()"
                            (ngModelChange)="setDomain($event)"
                            placeholder="Select Domain..."
                        >
                            @for (domain of domain_list(); track domain.id) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <a
                        btn
                        matRipple
                        class="w-40"
                        [routerLink]="['/admin', 'mailing-list', 'edit']"
                    >
                        Add Template
                    </a>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="loading() !== true"
                />
                <simple-table
                    class="mb-4 block min-w-4xl text-sm"
                    [data]="templates"
                    [columns]="[]"
                />
            </div>
        </div>
    `, imports: [
      SimpleTableComponent,
      MatProgressBarModule,
      RouterModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "src/app/admin/mailing-lists/email-templates.component.ts", lineNumber: 68 });
})();
export {
  EmailTemplatesComponent
};
//# sourceMappingURL=chunk-IUB7CZEU.js.map
