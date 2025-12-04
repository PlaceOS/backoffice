import {
  ZonesStateService
} from "./chunk-E6LUWDMK.js";
import "./chunk-BZIM45SZ.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GRP3BQR3.js";
import "./chunk-CWKPQSN4.js";
import "./chunk-ULGR32LE.js";
import "./chunk-ESTK43HE.js";
import "./chunk-NOAK6QM2.js";
import "./chunk-4SAGXWED.js";
import "./chunk-F5DIHUIQ.js";
import "./chunk-HFVB5MOB.js";
import "./chunk-KQFHJWJ7.js";
import "./chunk-Q4FBWG53.js";
import {
  SimpleTableComponent
} from "./chunk-2KDSC3QQ.js";
import "./chunk-32RLFOCM.js";
import "./chunk-LYW23EPM.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-TN2YCJSA.js";
import "./chunk-M5EEY4M7.js";
import "./chunk-3KGMPJGM.js";
import "./chunk-K64JFNOT.js";
import "./chunk-XWGHYPL7.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-CTV2QXII.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-UHI4WW5B.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-2275BRFB.js";
import "./chunk-IAQS7CDE.js";
import "./chunk-VSSUEFHJ.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-SLAQJABM.js";
import "./chunk-LPBQ3YJT.js";
import "./chunk-FOHJAMRV.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-4CBXDUSX.js";
import {
  TranslatePipe
} from "./chunk-5DKHD7PA.js";
import {
  DateFromPipe
} from "./chunk-GU4B5AQQ.js";
import "./chunk-LUC25G4J.js";
import "./chunk-O5V2SR2Q.js";
import {
  IconComponent
} from "./chunk-LZD4U4FI.js";
import "./chunk-TDKJZEL2.js";
import "./chunk-FLUVNX4R.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-C2J4JAY6.js";
import "./chunk-GBLYF56R.js";
import "./chunk-SL7UBQ7L.js";
import "./chunk-E7QDOMTV.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  combineLatest,
  inject,
  map,
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
} from "./chunk-Q7FFLWMX.js";
import "./chunk-KWSTWQNB.js";

// src/app/zones/zone-systems.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "installed_ui_devices", name: a0, size: "10rem" });
var _c2 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "10rem" });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/systems", a0];
function ZoneSystemsComponent_ng_template_15_Template(rf, ctx) {
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
function ZoneSystemsComponent_ng_template_17_Template(rf, ctx) {
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
var ZoneSystemsComponent = class _ZoneSystemsComponent {
  _state = inject(ZonesStateService);
  filter$ = new BehaviorSubject("");
  loading = this._state.loading;
  systems = combineLatest([
    this.filter$,
    this._state.systems
  ]).pipe(map((details) => {
    const [filter, systems] = details;
    const search = filter.toLowerCase();
    return !filter ? systems : systems.filter((sys) => sys.name.toLowerCase().includes(search));
  }));
  static \u0275fac = function ZoneSystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneSystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSystemsComponent, selectors: [["zone-systems"]], decls: 19, vars: 32, consts: [["name_template", ""], ["added_template", ""], [1, "p-4"], [1, "flex"], ["appearance", "outline", 1, "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", "name", "search-filter", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"]], template: function ZoneSystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "mat-form-field", 4)(3, "div", 5)(4, "icon", 6);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("ngModelChange", function ZoneSystemsComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filter$.next($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(8, "mat-progress-bar", 8);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275element(10, "simple-table", 9);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275template(15, ZoneSystemsComponent_ng_template_15_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(17, ZoneSystemsComponent_ng_template_17_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(16);
      const added_template_r5 = \u0275\u0275reference(18);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", "")("placeholder", \u0275\u0275pipeBind1(7, 8, "SYSTEMS.SEARCH"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(9, 10, ctx.loading));
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.systems)("columns", \u0275\u0275pureFunction3(28, _c3, \u0275\u0275pureFunction2(20, _c0, \u0275\u0275pipeBind1(11, 12, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(23, _c1, \u0275\u0275pipeBind1(12, 14, "ZONES.SYSTEMS_FIELD_MODULE_COUNT")), \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pipeBind1(13, 16, "COMMON.CREATED_AT"), added_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(14, 18, "ZONES.SYSTEMS_EMPTY"));
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    SimpleTableComponent,
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
    AsyncPipe,
    DateFromPipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-systems.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneSystemsComponent, [{
    type: Component,
    args: [{ selector: "zone-systems", template: `
        <div class="p-4">
            <div class="flex">
                <mat-form-field class="flex-1" appearance="outline">
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        matInput
                        [ngModel]="''"
                        (ngModelChange)="filter$.next($event)"
                        name="search-filter"
                        [placeholder]="'SYSTEMS.SEARCH' | translate"
                    />
                </mat-form-field>
            </div>
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!(loading | async)"
            />
            <simple-table
                class="block min-w-lg text-sm"
                [data]="systems"
                [columns]="[
                    {
                        key: 'name',
                        name: 'COMMON.FIELD_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'installed_ui_devices',
                        name: 'ZONES.SYSTEMS_FIELD_MODULE_COUNT' | translate,
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
                [empty_message]="'ZONES.SYSTEMS_EMPTY' | translate"
            />
            <ng-template #name_template let-row="row">
                <div class="flex flex-col items-start px-4 py-2 leading-snug">
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
        </div>
    `, imports: [
      CommonModule,
      DateFromPipe,
      RouterModule,
      SimpleTableComponent,
      TranslatePipe,
      MatProgressBarModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/zones/zone-systems.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-systems.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSystemsComponent, { className: "ZoneSystemsComponent", filePath: "src/app/zones/zone-systems.component.ts", lineNumber: 107 });
})();
export {
  ZoneSystemsComponent
};
//# sourceMappingURL=chunk-77QV7ZMJ.js.map
