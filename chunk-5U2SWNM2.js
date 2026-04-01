import {
  ZonesStateService
} from "./chunk-ZAAOV2AE.js";
import "./chunk-D7QWUYMC.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-JOCJQSA5.js";
import "./chunk-HEK3ZJHO.js";
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
import "./chunk-2NBDLQNY.js";
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
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XA66LDVX.js";
import "./chunk-RBWTFXTK.js";
import "./chunk-ULBWJZXU.js";
import "./chunk-TQ4AGRWP.js";
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
import {
  MatRippleModule
} from "./chunk-BXUDL7Q7.js";
import {
  TranslatePipe
} from "./chunk-S7TGCPIQ.js";
import "./chunk-K6WIXX3Q.js";
import {
  MatRipple
} from "./chunk-ECV3GDTS.js";
import {
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SMUOHSRV.js";
import "./chunk-U265RLGW.js";
import "./chunk-VYXW4D3Z.js";

// src/app/zones/zone-triggers.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "added", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/triggers", a0];
function ZoneTriggersComponent_ng_template_17_Template(rf, ctx) {
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
function ZoneTriggersComponent_ng_template_19_Template(rf, ctx) {
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
function ZoneTriggersComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275listener("click", function ZoneTriggersComponent_ng_template_21_Template_button_click_1_listener() {
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
  filter = model("", ...ngDevMode ? [{ debugName: "filter" }] : []);
  loading = toSignal(this._state.loading, {
    initialValue: false
  });
  _triggers = toSignal(this._state.triggers, {
    initialValue: []
  });
  /** List of triggers associated with the zone */
  triggers = computed(() => {
    const filter = this.filter().toLowerCase();
    const triggers = this._triggers();
    return !filter ? triggers : triggers.filter((sys) => sys.name.toLowerCase().includes(filter));
  }, ...ngDevMode ? [{ debugName: "triggers" }] : []);
  selectTrigger = () => this._state.selectTrigger();
  deleteTrigger = (t) => this._state.removeTrigger(t);
  get item() {
    return this._state.active_item;
  }
  static \u0275fac = function ZoneTriggersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneTriggersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneTriggersComponent, selectors: [["zone-triggers"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 23, vars: 30, consts: [["name_template", ""], ["added_template", ""], ["actions_template", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function ZoneTriggersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "mat-form-field", 5)(3, "div", 6)(4, "icon", 7);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 8);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ZoneTriggersComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
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
      \u0275\u0275element(12, "mat-progress-bar", 10)(13, "simple-table", 11);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275template(17, ZoneTriggersComponent_ng_template_17_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, ZoneTriggersComponent_ng_template_19_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, ZoneTriggersComponent_ng_template_21_Template, 4, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const name_template_r7 = \u0275\u0275reference(18);
      const added_template_r8 = \u0275\u0275reference(20);
      const actions_template_r9 = \u0275\u0275reference(22);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "TRIGGERS.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "TRIGGERS.ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.triggers())("columns", \u0275\u0275pureFunction3(26, _c3, \u0275\u0275pureFunction2(18, _c0, \u0275\u0275pipeBind1(14, 12, "COMMON.FIELD_NAME"), name_template_r7), \u0275\u0275pureFunction2(21, _c1, \u0275\u0275pipeBind1(15, 14, "TRIGGERS.FIELD_ADDED"), added_template_r8), \u0275\u0275pureFunction1(24, _c2, actions_template_r9)))("empty_message", \u0275\u0275pipeBind1(16, 16, "ZONES.TRIGGERS_EMPTY"));
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
    TranslatePipe
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
                        [(ngModel)]="filter"
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
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-lg text-sm"
                    [data]="triggers()"
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
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneTriggersComponent, { className: "ZoneTriggersComponent", filePath: "src/app/zones/zone-triggers.component.ts", lineNumber: 129 });
})();
export {
  ZoneTriggersComponent
};
//# sourceMappingURL=chunk-5U2SWNM2.js.map
