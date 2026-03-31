import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-JOCJQSA5.js";
import {
  ModuleStateService
} from "./chunk-OD2IT7VJ.js";
import "./chunk-GMNMHB2U.js";
import "./chunk-EP75YJWY.js";
import "./chunk-SWSUJC45.js";
import "./chunk-J533RESC.js";
import "./chunk-746AOIKH.js";
import "./chunk-GDO2G3FK.js";
import "./chunk-H3YHW52A.js";
import {
  DateFromPipe
} from "./chunk-Q3URFPAM.js";
import "./chunk-L6DCBZLR.js";
import "./chunk-YC3GB3RC.js";
import {
  toSignal
} from "./chunk-C4UNQ5W7.js";
import "./chunk-ZNMJTVKP.js";
import {
  SimpleTableComponent
} from "./chunk-XGNXBQYI.js";
import "./chunk-E2L3SP5U.js";
import "./chunk-IV4O2CJ5.js";
import "./chunk-3JUEKOAR.js";
import "./chunk-OVM667NW.js";
import "./chunk-YJMQ5OMK.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-W3ZPEK3R.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-K33FZYPE.js";
import "./chunk-UQKRVE72.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-HRGU4UAV.js";
import "./chunk-XA66LDVX.js";
import "./chunk-RBWTFXTK.js";
import "./chunk-NC44YNHL.js";
import "./chunk-J6YFC65N.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-WIRQ5XQH.js";
import "./chunk-6ACE75MC.js";
import "./chunk-4LE2PDCO.js";
import "./chunk-VTQCDJGL.js";
import {
  IconComponent
} from "./chunk-3SG4KASH.js";
import "./chunk-E6OTVR3E.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-IOTEGI4H.js";
import "./chunk-BXUDL7Q7.js";
import {
  TranslatePipe
} from "./chunk-S7TGCPIQ.js";
import "./chunk-K6WIXX3Q.js";
import "./chunk-ECV3GDTS.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  Input,
  NgControlStatus,
  NgModel,
  Output,
  computed,
  inject,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SMUOHSRV.js";
import "./chunk-U265RLGW.js";
import "./chunk-VYXW4D3Z.js";

// src/app/modules/module-systems.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "installed_ui_devices", name: a0, size: "10rem" });
var _c2 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "10rem" });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/systems", a0];
function ModuleSystemsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "a", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c4, row_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function ModuleSystemsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +row_r3.created_at * 1e3), " ");
  }
}
var ModuleSystemsComponent = class _ModuleSystemsComponent {
  _service = inject(ModuleStateService);
  /** Subject holding the value of the search */
  filter = model("", ...ngDevMode ? [{ debugName: "filter" }] : []);
  /** Whether systems are being loaded */
  loading = this._service.loading;
  systems = toSignal(this._service.system_list, {
    initialValue: []
  });
  system_list = computed(() => {
    const filter = this.filter().toLowerCase();
    const systems = this.systems();
    return filter ? systems.filter((sys) => sys.name.toLowerCase().includes(filter)) : systems;
  }, ...ngDevMode ? [{ debugName: "system_list" }] : []);
  static \u0275fac = function ModuleSystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleSystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleSystemsComponent, selectors: [["module-systems"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 20, vars: 32, consts: [["name_template", ""], ["added_template", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"]], template: function ModuleSystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "mat-form-field", 4)(3, "div", 5)(4, "icon", 6);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ModuleSystemsComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section");
      \u0275\u0275element(9, "mat-progress-bar", 8);
      \u0275\u0275pipe(10, "async");
      \u0275\u0275element(11, "simple-table", 9);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275template(16, ModuleSystemsComponent_ng_template_16_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(18, ModuleSystemsComponent_ng_template_18_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(17);
      const added_template_r5 = \u0275\u0275reference(19);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "SYSTEMS.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(10, 10, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.system_list())("columns", \u0275\u0275pureFunction3(28, _c3, \u0275\u0275pureFunction2(20, _c0, \u0275\u0275pipeBind1(12, 12, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(23, _c1, \u0275\u0275pipeBind1(13, 14, "MODULES.SYSTEMS_FIELD_MODULE_COUNT")), \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pipeBind1(14, 16, "COMMON.CREATED_AT"), added_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(15, 18, "MODULES.SYSTEMS_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    RouterModule,
    RouterLink,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    DateFromPipe,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=module-systems.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleSystemsComponent, [{
    type: Component,
    args: [{ selector: "module-systems", template: `
        <div class="p-4">
            <section class="mb-4 flex items-center">
                <mat-form-field appearance="outline" class="h-12 flex-1">
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [(ngModel)]="filter"
                        matInput
                        [placeholder]="'SYSTEMS.SEARCH' | translate"
                        class="rounded-none"
                    />
                </mat-form-field>
            </section>
            <section>
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="(loading | async) !== true"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-lg text-sm"
                    [data]="system_list()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'installed_ui_devices',
                            name:
                                'MODULES.SYSTEMS_FIELD_MODULE_COUNT'
                                | translate,
                            size: '10rem',
                        },
                        {
                            key: 'created_at',
                            name: 'COMMON.CREATED_AT' | translate,
                            content: added_template,
                            size: '10rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'MODULES.SYSTEMS_EMPTY' | translate"
                ></simple-table>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/systems', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #added_template let-row="row">
                    <div class="p-4">
                        {{ +row.created_at * 1000 | dateFrom }}
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      DateFromPipe,
      SimpleTableComponent,
      RouterModule,
      TranslatePipe,
      CommonModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      IconComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/modules/module-systems.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=module-systems.component.css.map */\n"] }]
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleSystemsComponent, { className: "ModuleSystemsComponent", filePath: "src/app/modules/module-systems.component.ts", lineNumber: 112 });
})();
export {
  ModuleSystemsComponent
};
//# sourceMappingURL=chunk-M64USDJC.js.map
