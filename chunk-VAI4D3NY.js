import {
  ZonesStateService
} from "./chunk-EDKJBDS7.js";
import "./chunk-HSWXDZWE.js";
import "./chunk-DKLBPKQ4.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-MKANYIBS.js";
import "./chunk-KV3CZZ5A.js";
import "./chunk-S43ZXTP5.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-GILXWXRU.js";
import "./chunk-4SAVGYEQ.js";
import "./chunk-OEMHCWD4.js";
import "./chunk-4X4PTSQA.js";
import {
  DateFromPipe
} from "./chunk-VRNJC5BQ.js";
import "./chunk-GDZ4KU6N.js";
import "./chunk-IYBVLYEV.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-SCU2ZHTT.js";
import "./chunk-UVXXRHB2.js";
import {
  SimpleTableComponent
} from "./chunk-WD33FJZ2.js";
import "./chunk-V64DN2T3.js";
import "./chunk-LL5BPSQ6.js";
import "./chunk-WAZQJR33.js";
import "./chunk-XAS7GUY2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6AAMXG3P.js";
import "./chunk-RG3TS5UW.js";
import "./chunk-NOZWPHCR.js";
import "./chunk-P45XEGRE.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-VH6NLWUW.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-RAEUAH5O.js";
import "./chunk-NFDUIW5Q.js";
import "./chunk-XQUTEU4C.js";
import "./chunk-NEJBMBL3.js";
import "./chunk-HLJBC2QQ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-AQMMFGML.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-BTCSHLQ6.js";
import "./chunk-Y4WYMPD6.js";
import "./chunk-5QDDRDNC.js";
import "./chunk-OU4ZSGGA.js";
import "./chunk-RHXWHY3G.js";
import "./chunk-IYFQDTHB.js";
import {
  TranslatePipe
} from "./chunk-ZCVCPEH7.js";
import {
  IconComponent
} from "./chunk-2OXMVWQR.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-MXRJFREE.js";
import "./chunk-M7TMFMYW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VARF64W7.js";
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
} from "./chunk-QSXZQV2A.js";
import "./chunk-KWSTWQNB.js";

// src/app/zones/zone-systems.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "installed_ui_devices", name: a0, size: "10rem" });
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
  filter = model(
    "",
    ...ngDevMode ? [{ debugName: "filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._state.loading;
  _systems = this._state.systems;
  systems = computed(
    () => {
      const filter = this.filter().toLowerCase();
      const systems = this._systems();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSystemsComponent, selectors: [["zone-systems"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 18, vars: 30, consts: [["name_template", ""], ["added_template", ""], [1, "p-4"], [1, "flex"], ["appearance", "outline", 1, "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", "name", "search-filter", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"]], template: function ZoneSystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "mat-form-field", 4)(3, "div", 5)(4, "icon", 6);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ZoneSystemsComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "mat-progress-bar", 8)(9, "simple-table", 9);
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
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "SYSTEMS.SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.systems())("columns", \u0275\u0275pureFunction3(26, _c3, \u0275\u0275pureFunction2(18, _c0, \u0275\u0275pipeBind1(10, 10, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(21, _c1, \u0275\u0275pipeBind1(11, 12, "ZONES.SYSTEMS_FIELD_MODULE_COUNT")), \u0275\u0275pureFunction2(23, _c2, \u0275\u0275pipeBind1(12, 14, "COMMON.CREATED_AT"), added_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(13, 16, "ZONES.SYSTEMS_EMPTY"));
    }
  }, dependencies: [
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
    DateFromPipe,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-systems.component.css.map */"] });
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
                        [(ngModel)]="filter"
                        name="search-filter"
                        [placeholder]="'SYSTEMS.SEARCH' | translate"
                    />
                </mat-form-field>
            </div>
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!loading()"
            />
            <simple-table
                class="block min-w-lg text-sm"
                [data]="systems()"
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
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSystemsComponent, { className: "ZoneSystemsComponent", filePath: "src/app/zones/zone-systems.component.ts", lineNumber: 102 });
})();
export {
  ZoneSystemsComponent
};
//# sourceMappingURL=chunk-VAI4D3NY.js.map
