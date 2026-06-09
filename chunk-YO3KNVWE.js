import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GEMSQ6RP.js";
import {
  ModuleStateService
} from "./chunk-OFFJILHP.js";
import "./chunk-AZQ4D3UC.js";
import "./chunk-LOYQU37K.js";
import "./chunk-WVYDO5NC.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-XDPTKZ2J.js";
import "./chunk-UJLZHD3F.js";
import "./chunk-5EBMUX3Z.js";
import "./chunk-C7NP5PYP.js";
import {
  DateFromPipe
} from "./chunk-Q4KWDWQX.js";
import "./chunk-KQ433EDT.js";
import "./chunk-JZPASCCB.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-64N44YTD.js";
import "./chunk-KFDTJANW.js";
import {
  SimpleTableComponent
} from "./chunk-FCU3WVEC.js";
import "./chunk-RNDWB2WI.js";
import "./chunk-WRAPQBH6.js";
import "./chunk-QBKMLLEQ.js";
import "./chunk-XAS7GUY2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-TTOMUWPB.js";
import "./chunk-J5O27MHS.js";
import "./chunk-CEZ5W4YU.js";
import "./chunk-HLMLKCGG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-6FMO72CJ.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import "./chunk-FUB4H56B.js";
import "./chunk-LNYPPIOF.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-KHVEC2ZJ.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-BHWNEOU7.js";
import "./chunk-HS5WHROJ.js";
import "./chunk-LIKH2QKU.js";
import "./chunk-JJ5DNIGX.js";
import "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import {
  TranslatePipe
} from "./chunk-JMC7E3RS.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import "./chunk-2UI5N333.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5TQT6AWS.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  model,
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
} from "./chunk-N6UZRJAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/modules/module-systems.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "installed_ui_devices", name: a0, size: "10rem" });
var _c2 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "10rem" });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/systems", a0];
function ModuleSystemsComponent_ng_template_15_Template(rf, ctx) {
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
function ModuleSystemsComponent_ng_template_17_Template(rf, ctx) {
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
  /** Signal holding the value of the search */
  filter = model(
    "",
    ...ngDevMode ? [{ debugName: "filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether systems are being loaded */
  loading = this._service.loading;
  systems = this._service.system_list;
  system_list = computed(
    () => {
      const filter = this.filter().toLowerCase();
      const systems = this.systems();
      return filter ? systems.filter((sys) => sys.name.toLowerCase().includes(filter)) : systems;
    },
    ...ngDevMode ? [{ debugName: "system_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function ModuleSystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleSystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleSystemsComponent, selectors: [["module-systems"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 19, vars: 30, consts: [["name_template", ""], ["added_template", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"]], template: function ModuleSystemsComponent_Template(rf, ctx) {
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
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "section");
      \u0275\u0275element(9, "mat-progress-bar", 8)(10, "simple-table", 9);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275template(15, ModuleSystemsComponent_ng_template_15_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(17, ModuleSystemsComponent_ng_template_17_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(16);
      const added_template_r5 = \u0275\u0275reference(18);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "SYSTEMS.SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.system_list())("columns", \u0275\u0275pureFunction3(26, _c3, \u0275\u0275pureFunction2(18, _c0, \u0275\u0275pipeBind1(11, 10, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(21, _c1, \u0275\u0275pipeBind1(12, 12, "MODULES.SYSTEMS_FIELD_MODULE_COUNT")), \u0275\u0275pureFunction2(23, _c2, \u0275\u0275pipeBind1(13, 14, "COMMON.CREATED_AT"), added_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(14, 16, "MODULES.SYSTEMS_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    RouterModule,
    RouterLink,
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
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=module-systems.component.css.map */"] });
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
                    [class.opacity-0]="loading() !== true"
                />
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
                />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleSystemsComponent, { className: "ModuleSystemsComponent", filePath: "src/app/modules/module-systems.component.ts", lineNumber: 109 });
})();
export {
  ModuleSystemsComponent
};
//# sourceMappingURL=chunk-YO3KNVWE.js.map
