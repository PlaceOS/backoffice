import {
  ZonesStateService
} from "./chunk-XFDGXQDY.js";
import "./chunk-3MVPJ5KO.js";
import "./chunk-F6G2Y5FY.js";
import "./chunk-X2O3T64J.js";
import "./chunk-GEOS7XT5.js";
import {
  DateFromPipe
} from "./chunk-PWWITZ5J.js";
import "./chunk-S2SB26WJ.js";
import {
  SimpleTableComponent
} from "./chunk-JX3DYPLV.js";
import "./chunk-QJT4A7RT.js";
import "./chunk-YMSUF7BT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-3SEQSBXV.js";
import "./chunk-NSPWPCTJ.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-2LLCGR7C.js";
import {
  ProgressBarComponent
} from "./chunk-DHD7TIH6.js";
import "./chunk-XSBVNB3I.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-LJNKRCR4.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-CKZDCKLD.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-A7VS2VYD.js";
import "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import "./chunk-JJ65W2TY.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
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
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/zones/zone-systems.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "module_count", name: a0, size: "10rem" });
var _c2 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "10rem" });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/systems", a0];
function ZoneSystemsComponent_ng_template_14_Template(rf, ctx) {
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
function ZoneSystemsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
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
  filter = model(
    "",
    ...ngDevMode ? [{ debugName: "filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._state.loading;
  _systems = this._state.systems;
  /** Rows with a module count. Built only when the systems change. */
  _rows = computed(
    () => this._systems().map((sys) => __spreadProps(__spreadValues({}, sys), {
      module_count: sys.modules?.length || 0
    })),
    ...ngDevMode ? [{ debugName: "_rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  systems = computed(
    () => {
      const filter = this.filter().toLowerCase();
      const systems = this._rows();
      return !filter ? systems : systems.filter((sys) => sys.name.toLowerCase().includes(filter));
    },
    ...ngDevMode ? [{ debugName: "systems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function ZoneSystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneSystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSystemsComponent, selectors: [["zone-systems"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 18, vars: 31, consts: [["name_template", ""], ["added_template", ""], [1, "flex", "h-full", "min-h-0", "w-full", "flex-col", "p-4"], [1, "flex"], [1, "flex-1"], ["prefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["name", "search-filter", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-h-0", "w-full", "min-w-lg", "flex-1", "text-sm", 3, "virtual_row_height", "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4"]], template: function ZoneSystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "app-form-field", 4)(3, "div", 5)(4, "icon", 6);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ZoneSystemsComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(8, "app-progress-bar", 8)(9, "simple-table", 9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275template(14, ZoneSystemsComponent_ng_template_14_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ZoneSystemsComponent_ng_template_16_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(15);
      const added_template_r5 = \u0275\u0275reference(17);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 9, "SYSTEMS.SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("virtual_row_height", 64)("data", ctx.systems())("columns", \u0275\u0275pureFunction3(27, _c3, \u0275\u0275pureFunction2(19, _c0, \u0275\u0275pipeBind1(10, 11, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(22, _c1, \u0275\u0275pipeBind1(11, 13, "ZONES.SYSTEMS_FIELD_MODULE_COUNT")), \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pipeBind1(12, 15, "COMMON.CREATED_AT"), added_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(13, 17, "ZONES.SYSTEMS_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    FormFieldComponent,
    RouterModule,
    RouterLink,
    SimpleTableComponent,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    DateFromPipe,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-systems.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneSystemsComponent, [{
    type: Component,
    args: [{ selector: "zone-systems", template: `
        <div class="flex h-full min-h-0 w-full flex-col p-4">
            <div class="flex">
                <app-form-field class="flex-1">
                    <div class="prefix" prefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [(ngModel)]="filter"
                        name="search-filter"
                        [placeholder]="'SYSTEMS.SEARCH' | translate"
                    />
                </app-form-field>
            </div>
            <app-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.invisible]="!loading()"
            />
            <simple-table
                class="block min-h-0 w-full min-w-lg flex-1 text-sm"
                [virtual_row_height]="64"
                [data]="systems()"
                [columns]="[
                    {
                        key: 'name',
                        name: 'COMMON.FIELD_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'module_count',
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
      ProgressBarComponent,
      FormFieldComponent,
      DateFromPipe,
      RouterModule,
      SimpleTableComponent,
      TranslatePipe,
      FormsModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;43a52b5076d94d60;/home/runner/work/backoffice/backoffice/src/app/zones/zone-systems.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-systems.component.css.map */\n"] }]
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSystemsComponent, { className: "ZoneSystemsComponent", filePath: "src/app/zones/zone-systems.component.ts", lineNumber: 100 });
})();
export {
  ZoneSystemsComponent
};
//# debugId=6813415c-e00b-503f-97ea-f0095d0d20ae
//# sourceMappingURL=chunk-NXHZU3NW.js.map
