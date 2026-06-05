import {
  ZonesStateService
} from "./chunk-TJJF263Q.js";
import "./chunk-LH4YJLTF.js";
import "./chunk-UB2WBUC4.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-BR6TDPO7.js";
import "./chunk-FXCPWLWU.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-Q3UICFYO.js";
import "./chunk-BG6DM7UA.js";
import "./chunk-XN7TDCZJ.js";
import "./chunk-TY5J7Y43.js";
import "./chunk-DINJ4675.js";
import "./chunk-KQ433EDT.js";
import "./chunk-YXSE7SMW.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-E6MC4KZ6.js";
import "./chunk-XDJFKACP.js";
import {
  SimpleTableComponent
} from "./chunk-RZD44Q3D.js";
import "./chunk-WMLGKGFL.js";
import "./chunk-AAY5HCL4.js";
import "./chunk-FVTJ3S3I.js";
import "./chunk-XAS7GUY2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-L5HLIWN4.js";
import "./chunk-SFCXA6TE.js";
import "./chunk-V757WW5H.js";
import "./chunk-OC5WJUHE.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5YWFPL3L.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-TDC2CY3F.js";
import "./chunk-HBODAAE2.js";
import "./chunk-JO5O5QDI.js";
import "./chunk-PINYTQM5.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-HZCZ56FU.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-Z74W2BVW.js";
import "./chunk-HS5WHROJ.js";
import "./chunk-TGGC4M5W.js";
import "./chunk-QRBYATLU.js";
import "./chunk-GO4IQIUT.js";
import "./chunk-WDJT2D2X.js";
import {
  TranslatePipe
} from "./chunk-EXWZU6UK.js";
import {
  IconComponent
} from "./chunk-NIIXPABD.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import "./chunk-ZTDTALUV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3RIK6YIR.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
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

// src/app/zones/zone-children.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = (a0) => ["/zones", a0];
function ZoneChildrenComponent_ng_template_13_Template(rf, ctx) {
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
function ZoneChildrenComponent_ng_template_15_Conditional_2_Template(rf, ctx) {
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
function ZoneChildrenComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ZoneChildrenComponent_ng_template_15_Conditional_2_Template, 3, 3, "span", 14);
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
  filter = model(
    "",
    ...ngDevMode ? [{ debugName: "filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._state.loading;
  _children = this._state.children;
  /** List of triggers associated with the zone */
  children = computed(
    () => {
      const filter = this.filter().toLowerCase();
      const zones = this._children();
      return !filter ? zones : zones.filter((sys) => sys.name.toLowerCase().includes(filter));
    },
    ...ngDevMode ? [{ debugName: "children" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get item() {
    return this._state.active_item;
  }
  static \u0275fac = function ZoneChildrenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneChildrenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneChildrenComponent, selectors: [["zone-children"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 17, vars: 25, consts: [["name_template", ""], ["description_template", ""], [1, "p-4"], [1, "flex", "items-center"], ["appearance", "outline", 1, "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", "name", "search-filter", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "w-full", "overflow-hidden", "px-4", "py-2", "text-xs", "select-text"], [1, "opacity-30"]], template: function ZoneChildrenComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "mat-form-field", 4)(3, "div", 5)(4, "icon", 6);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ZoneChildrenComponent_Template_input_ngModelChange_6_listener($event) {
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
      \u0275\u0275template(13, ZoneChildrenComponent_ng_template_13_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, ZoneChildrenComponent_ng_template_15_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(14);
      const description_template_r5 = \u0275\u0275reference(16);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "ZONES.SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.children())("columns", \u0275\u0275pureFunction2(22, _c2, \u0275\u0275pureFunction2(16, _c0, \u0275\u0275pipeBind1(10, 10, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction2(19, _c1, \u0275\u0275pipeBind1(11, 12, "COMMON.FIELD_DESCRIPTION"), description_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(12, 14, "ZONES.CHILDREN_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
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
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-children.component.css.map */"] });
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
                        [(ngModel)]="filter"
                        name="search-filter"
                        [placeholder]="'ZONES.SEARCH' | translate"
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
                [data]="children()"
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
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      MatProgressBarModule,
      FormsModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/zones/zone-children.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-children.component.css.map */\n"] }]
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneChildrenComponent, { className: "ZoneChildrenComponent", filePath: "src/app/zones/zone-children.component.ts", lineNumber: 102 });
})();
export {
  ZoneChildrenComponent
};
//# sourceMappingURL=chunk-Q7TQIOUJ.js.map
