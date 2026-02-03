import {
  ZonesStateService
} from "./chunk-OTUYJ475.js";
import "./chunk-Y2XKZIC7.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-D3L7JMLP.js";
import "./chunk-WJDEALFU.js";
import "./chunk-4O3ZDLGN.js";
import "./chunk-J533RESC.js";
import "./chunk-I5AL5V7J.js";
import "./chunk-GFQZBYS2.js";
import {
  DateFromPipe
} from "./chunk-EIELCWDO.js";
import "./chunk-5CIGDIXS.js";
import "./chunk-3RDWH2PM.js";
import "./chunk-FYNKCCEL.js";
import {
  SimpleTableComponent
} from "./chunk-DIJLNDSF.js";
import "./chunk-3JM6BH5A.js";
import "./chunk-AYXNAT23.js";
import "./chunk-LACIND4J.js";
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
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-F2SIRQ7I.js";
import "./chunk-VG6RDBFT.js";
import "./chunk-PZBJCPOC.js";
import "./chunk-PNOVMSGO.js";
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
import {
  MatRippleModule
} from "./chunk-PJJZ73WC.js";
import {
  TranslatePipe
} from "./chunk-CZ2LCIXT.js";
import "./chunk-DT6XLHSE.js";
import {
  MatRipple
} from "./chunk-KZU5VDTQ.js";
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
  ɵɵnextContext,
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
} from "./chunk-TUZQ7R7Y.js";
import {
  BehaviorSubject,
  combineLatest,
  map
} from "./chunk-74QWELJT.js";
import "./chunk-VYXW4D3Z.js";

// src/app/zones/zone-triggers.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "added", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/triggers", a0];
function ZoneTriggersComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
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
function ZoneTriggersComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
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
function ZoneTriggersComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275listener("click", function ZoneTriggersComponent_ng_template_22_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.deleteTrigger(row_r5));
    });
    \u0275\u0275elementStart(2, "icon", 17);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", "TRIGGERS.REMOVE");
  }
}
var ZoneTriggersComponent = class _ZoneTriggersComponent {
  _state = inject(ZonesStateService);
  filter$ = new BehaviorSubject("");
  /** List of triggers associated with the zone */
  triggers = combineLatest([
    this.filter$,
    this._state.triggers
  ]).pipe(map((details) => {
    const [filter, systems] = details;
    const search = filter.toLowerCase();
    return !filter ? systems : systems.filter((sys) => sys.name.toLowerCase().includes(search));
  }));
  loading = this._state.loading;
  selectTrigger = () => this._state.selectTrigger();
  deleteTrigger = (t) => this._state.removeTrigger(t);
  get item() {
    return this._state.active_item;
  }
  static \u0275fac = function ZoneTriggersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneTriggersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneTriggersComponent, selectors: [["zone-triggers"]], decls: 24, vars: 32, consts: [["name_template", ""], ["added_template", ""], ["actions_template", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function ZoneTriggersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "mat-form-field", 5)(3, "div", 6)(4, "icon", 7);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 8);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("ngModelChange", function ZoneTriggersComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filter$.next($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 9);
      \u0275\u0275listener("click", function ZoneTriggersComponent_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectTrigger());
      });
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section");
      \u0275\u0275element(12, "mat-progress-bar", 10);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275element(14, "simple-table", 11);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275template(18, ZoneTriggersComponent_ng_template_18_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(20, ZoneTriggersComponent_ng_template_20_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(22, ZoneTriggersComponent_ng_template_22_Template, 4, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const name_template_r7 = \u0275\u0275reference(19);
      const added_template_r8 = \u0275\u0275reference(21);
      const actions_template_r9 = \u0275\u0275reference(23);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", "")("placeholder", \u0275\u0275pipeBind1(7, 8, "TRIGGERS.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "TRIGGERS.ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(13, 12, ctx.loading) === false);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.triggers)("columns", \u0275\u0275pureFunction3(28, _c3, \u0275\u0275pureFunction2(20, _c0, \u0275\u0275pipeBind1(15, 14, "COMMON.FIELD_NAME"), name_template_r7), \u0275\u0275pureFunction2(23, _c1, \u0275\u0275pipeBind1(16, 16, "TRIGGERS.FIELD_ADDED"), added_template_r8), \u0275\u0275pureFunction1(26, _c2, actions_template_r9)))("empty_message", \u0275\u0275pipeBind1(17, 18, "ZONES.TRIGGERS_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    RouterModule,
    RouterLink,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    SimpleTableComponent,
    MatTooltipModule,
    MatTooltip,
    DateFromPipe,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-triggers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneTriggersComponent, [{
    type: Component,
    args: [{ selector: "zone-triggers", template: `
        <div class="p-4">
            <section class="mb-4 flex items-center space-x-2">
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
                        [placeholder]="'TRIGGERS.SEARCH' | translate"
                        class="rounded-none"
                    />
                </mat-form-field>
                <button btn matRipple class="w-32" (click)="selectTrigger()">
                    {{ 'TRIGGERS.ADD' | translate }}
                </button>
            </section>
            <section>
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="(loading | async) === false"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-lg text-sm"
                    [data]="triggers"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'added',
                            name: 'TRIGGERS.FIELD_ADDED' | translate,
                            content: added_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '3.5rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="'ZONES.TRIGGERS_EMPTY' | translate"
                ></simple-table>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/triggers', row.id]"
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
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2">
                        <button
                            icon
                            matRipple
                            [matTooltip]="'TRIGGERS.REMOVE'"
                            (click)="deleteTrigger(row)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      IconComponent,
      MatRippleModule,
      DateFromPipe,
      RouterModule,
      TranslatePipe,
      CommonModule,
      MatProgressBarModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      SimpleTableComponent,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/zones/zone-triggers.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-triggers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneTriggersComponent, { className: "ZoneTriggersComponent", filePath: "src/app/zones/zone-triggers.component.ts", lineNumber: 131 });
})();
export {
  ZoneTriggersComponent
};
//# sourceMappingURL=chunk-VHJ3WUBU.js.map
