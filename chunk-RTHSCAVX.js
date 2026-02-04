import {
  ZonesStateService
} from "./chunk-HNZV6M6S.js";
import "./chunk-LD5EL63W.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-D3L7JMLP.js";
import "./chunk-GHSRJZVM.js";
import "./chunk-E5O3W4UK.js";
import "./chunk-J533RESC.js";
import "./chunk-I5AL5V7J.js";
import "./chunk-GFQZBYS2.js";
import "./chunk-OVISDOSS.js";
import "./chunk-5CIGDIXS.js";
import "./chunk-3RDWH2PM.js";
import "./chunk-SMGQCLO4.js";
import {
  SimpleTableComponent
} from "./chunk-D26PSXGA.js";
import "./chunk-HVEA2SCZ.js";
import "./chunk-AYXNAT23.js";
import "./chunk-FW5T3MMG.js";
import "./chunk-25QEM4SL.js";
import "./chunk-WWOKREKZ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-MQK2WLOX.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6S56CTCM.js";
import "./chunk-DEYB5LIM.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-AEQCFEN3.js";
import "./chunk-F2SIRQ7I.js";
import "./chunk-VG6RDBFT.js";
import "./chunk-EI6ZA2SP.js";
import "./chunk-NAUH6ZBU.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-MNFEZLRO.js";
import "./chunk-XSCAXKGH.js";
import "./chunk-3LEBC5GS.js";
import "./chunk-3DOKPZ3J.js";
import {
  IconComponent
} from "./chunk-WIN2774F.js";
import "./chunk-MMIWWJ2B.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-H5MOLNWN.js";
import "./chunk-PJJZ73WC.js";
import {
  TranslatePipe
} from "./chunk-WSRCHTK7.js";
import "./chunk-DT6XLHSE.js";
import "./chunk-KZU5VDTQ.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-TUZQ7R7Y.js";
import {
  BehaviorSubject,
  combineLatest,
  map
} from "./chunk-74QWELJT.js";
import "./chunk-VYXW4D3Z.js";

// src/app/zones/zone-children.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = (a0) => ["/zones", a0];
function ZoneChildrenComponent_ng_template_14_Template(rf, ctx) {
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c3, row_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function ZoneChildrenComponent_ng_template_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ZONES.DESCRIPTION_EMPTY"), " ");
  }
}
function ZoneChildrenComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ZoneChildrenComponent_ng_template_16_Conditional_2_Template, 3, 3, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 2 : -1);
  }
}
var ZoneChildrenComponent = class _ZoneChildrenComponent {
  _state = inject(ZonesStateService);
  filter$ = new BehaviorSubject("");
  /** List of triggers associated with the zone */
  children = combineLatest([
    this.filter$,
    this._state.children
  ]).pipe(map((details) => {
    const [filter, zones] = details;
    const search = filter.toLowerCase();
    return !filter ? zones : zones.filter((sys) => sys.name.toLowerCase().includes(search));
  }));
  loading = this._state.loading;
  get item() {
    return this._state.active_item;
  }
  static \u0275fac = function ZoneChildrenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneChildrenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneChildrenComponent, selectors: [["zone-children"]], decls: 18, vars: 27, consts: [["name_template", ""], ["description_template", ""], [1, "p-4"], [1, "flex", "items-center"], ["appearance", "outline", 1, "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", "name", "search-filter", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "w-full", "overflow-hidden", "px-4", "py-2", "text-xs", "select-text"], [1, "opacity-30"]], template: function ZoneChildrenComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "mat-form-field", 4)(3, "div", 5)(4, "icon", 6);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("ngModelChange", function ZoneChildrenComponent_Template_input_ngModelChange_6_listener($event) {
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
      \u0275\u0275template(14, ZoneChildrenComponent_ng_template_14_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ZoneChildrenComponent_ng_template_16_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(15);
      const description_template_r5 = \u0275\u0275reference(17);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", "")("placeholder", \u0275\u0275pipeBind1(7, 8, "ZONES.SEARCH"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(9, 10, ctx.loading) === false);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.children)("columns", \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pureFunction2(18, _c0, \u0275\u0275pipeBind1(11, 12, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction2(21, _c1, \u0275\u0275pipeBind1(12, 14, "COMMON.FIELD_DESCRIPTION"), description_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(13, 16, "ZONES.CHILDREN_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    CommonModule,
    IconComponent,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    MatProgressBarModule,
    MatProgressBar,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    RouterModule,
    RouterLink,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-children.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneChildrenComponent, [{
    type: Component,
    args: [{ selector: "zone-children", template: `
        <div class="p-4">
            <div class="flex items-center">
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
                        [placeholder]="'ZONES.SEARCH' | translate"
                    />
                </mat-form-field>
            </div>
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="(loading | async) === false"
            />
            <simple-table
                class="block min-w-lg text-sm"
                [data]="children"
                [columns]="[
                    {
                        key: 'name',
                        name: 'COMMON.FIELD_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'description',
                        name: 'COMMON.FIELD_DESCRIPTION' | translate,
                        content: description_template,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'ZONES.CHILDREN_EMPTY' | translate"
            />
            <ng-template #name_template let-row="row">
                <div class="flex flex-col items-start px-4 py-2 leading-snug">
                    <a
                        class="truncate underline"
                        [routerLink]="['/zones', row.id]"
                    >
                        {{ row.name }}
                    </a>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.id }}
                    </div>
                </div>
            </ng-template>
            <ng-template #description_template let-data="data">
                <div
                    class="w-full overflow-hidden px-4 py-2 text-xs select-text"
                >
                    {{ data }}
                    @if (!data) {
                        <span class="opacity-30">
                            {{ 'ZONES.DESCRIPTION_EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
        </div>
    `, imports: [
      TranslatePipe,
      SimpleTableComponent,
      CommonModule,
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      MatProgressBarModule,
      FormsModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/zones/zone-children.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-children.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneChildrenComponent, { className: "ZoneChildrenComponent", filePath: "src/app/zones/zone-children.component.ts", lineNumber: 107 });
})();
export {
  ZoneChildrenComponent
};
//# sourceMappingURL=chunk-RTHSCAVX.js.map
