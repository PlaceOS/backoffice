import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-3M5EOJ7W.js";
import {
  ModuleStateService
} from "./chunk-LNVDXERU.js";
import "./chunk-N3KDSCFB.js";
import "./chunk-JCPI5EI2.js";
import "./chunk-SEAIZ4VF.js";
import "./chunk-CVTKGGYU.js";
import "./chunk-J533RESC.js";
import "./chunk-RLXVU5XS.js";
import "./chunk-WQDH4FC7.js";
import {
  DateFromPipe
} from "./chunk-5HVRL3YW.js";
import "./chunk-DUBO3IVW.js";
import "./chunk-X6YR5W3O.js";
import "./chunk-FVY2HZHZ.js";
import {
  SimpleTableComponent
} from "./chunk-YOTQ4BLS.js";
import "./chunk-42ELPS7F.js";
import "./chunk-DSY7HAXR.js";
import "./chunk-ZMDQYXR3.js";
import "./chunk-DML52F3R.js";
import "./chunk-NFL4XBXL.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-W3IBXMGQ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-WBQWWT72.js";
import "./chunk-HNDZUABS.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-WBMBQ5VJ.js";
import "./chunk-PLD3S2JC.js";
import "./chunk-UX55AMWK.js";
import "./chunk-TMGH7LVN.js";
import "./chunk-2HBTAIG5.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-OSF25IC4.js";
import "./chunk-BGNISMYA.js";
import "./chunk-KFG47F7M.js";
import "./chunk-6TUHRQL6.js";
import {
  IconComponent
} from "./chunk-MB6FY2QK.js";
import "./chunk-BUKXKXBA.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-7MGBMVY7.js";
import "./chunk-WUACCZF3.js";
import {
  TranslatePipe
} from "./chunk-MLPBELPV.js";
import "./chunk-WOZB2ZJ7.js";
import "./chunk-F4U4NVRY.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
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
  ɵɵtextInterpolate1
} from "./chunk-E55B7SJP.js";
import {
  BehaviorSubject,
  combineLatest,
  map
} from "./chunk-WQVS62YG.js";
import "./chunk-KWSTWQNB.js";

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
  filter$ = new BehaviorSubject("");
  /** Whether systems are being loaded */
  loading = this._service.loading;
  system_list = combineLatest([
    this.filter$,
    this._service.system_list
  ]).pipe(map((details) => {
    const [filter, systems] = details;
    const search = filter.toLowerCase();
    return filter ? systems.filter((sys) => sys.name.toLowerCase().includes(search)) : systems;
  }));
  static \u0275fac = function ModuleSystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleSystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleSystemsComponent, selectors: [["module-systems"]], decls: 20, vars: 32, consts: [["name_template", ""], ["added_template", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"]], template: function ModuleSystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "mat-form-field", 4)(3, "div", 5)(4, "icon", 6);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("ngModelChange", function ModuleSystemsComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filter$.next($event));
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
      \u0275\u0275property("ngModel", "")("placeholder", \u0275\u0275pipeBind1(7, 8, "SYSTEMS.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(10, 10, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.system_list)("columns", \u0275\u0275pureFunction3(28, _c3, \u0275\u0275pureFunction2(20, _c0, \u0275\u0275pipeBind1(12, 12, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(23, _c1, \u0275\u0275pipeBind1(13, 14, "MODULES.SYSTEMS_FIELD_MODULE_COUNT")), \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pipeBind1(14, 16, "COMMON.CREATED_AT"), added_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(15, 18, "MODULES.SYSTEMS_EMPTY"));
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
                        [ngModel]="''"
                        (ngModelChange)="filter$.next($event)"
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
                    [data]="system_list"
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleSystemsComponent, { className: "ModuleSystemsComponent", filePath: "src/app/modules/module-systems.component.ts", lineNumber: 114 });
})();
export {
  ModuleSystemsComponent
};
//# sourceMappingURL=chunk-F462IAEJ.js.map
