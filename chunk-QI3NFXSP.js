import {
  ZonesStateService
} from "./chunk-WQLSZKYP.js";
import "./chunk-I2NJPWVG.js";
import "./chunk-JMCJG546.js";
import "./chunk-356GP3CJ.js";
import {
  DateFromPipe
} from "./chunk-DK7MGKEA.js";
import "./chunk-S2SB26WJ.js";
import {
  SimpleTableComponent
} from "./chunk-U7W4W7JS.js";
import "./chunk-7VVYQCGT.js";
import "./chunk-ASMGLVAU.js";
import "./chunk-6MIMHZ5M.js";
import "./chunk-HAPTQZQS.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-O73WYJ27.js";
import "./chunk-XK2HVTNA.js";
import "./chunk-6SNHHJXA.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-JFP7JBTM.js";
import "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-G5H4NNFS.js";
import "./chunk-Y35KTWST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-2HWH2YE2.js";
import "./chunk-HB6BWUYB.js";
import "./chunk-G3URG5GH.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-JVQGOL5R.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PZ6AYSMX.js";
import {
  LoadingLabelDirective
} from "./chunk-3YG3QG75.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-T674EZ22.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-W43UPD5R.js";
import "./chunk-GHI5JNAC.js";
import "./chunk-IGJQLGMT.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import {
  MatRippleModule
} from "./chunk-YFWFSNMM.js";
import {
  MatRipple
} from "./chunk-PH6YSF2Z.js";
import {
  TranslatePipe
} from "./chunk-33ALCS4C.js";
import "./chunk-DIAVKJYC.js";
import "./chunk-OTGYPXXQ.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
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
} from "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zone-triggers.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "added", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "3.5rem", sortable: false });
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
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneTriggersComponent_ng_template_22_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.deleteTrigger(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "TRIGGERS.REMOVE"));
  }
}
var ZoneTriggersComponent = class _ZoneTriggersComponent {
  _state = inject(ZonesStateService);
  filter = model(
    "",
    ...ngDevMode ? [{ debugName: "filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._state.loading;
  _triggers = this._state.triggers;
  /** List of triggers associated with the zone */
  triggers = computed(
    () => {
      const filter = this.filter().toLowerCase();
      const triggers = this._triggers();
      return !filter ? triggers : triggers.filter((sys) => sys.name.toLowerCase().includes(filter));
    },
    ...ngDevMode ? [{ debugName: "triggers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectTrigger = () => this._state.selectTrigger();
  deleteTrigger = (t) => this._state.removeTrigger(t);
  static \u0275fac = function ZoneTriggersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneTriggersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneTriggersComponent, selectors: [["zone-triggers"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 24, vars: 33, consts: [["name_template", ""], ["added_template", ""], ["actions_template", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function ZoneTriggersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "mat-form-field", 5)(3, "div", 6)(4, "icon", 7);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 8);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ZoneTriggersComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 9);
      \u0275\u0275listener("click", function ZoneTriggersComponent_Template_button_click_8_listener() {
        return ctx.selectTrigger();
      });
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section");
      \u0275\u0275element(12, "mat-progress-bar", 10)(13, "simple-table", 11);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275template(18, ZoneTriggersComponent_ng_template_18_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(20, ZoneTriggersComponent_ng_template_20_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(22, ZoneTriggersComponent_ng_template_22_Template, 5, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const name_template_r7 = \u0275\u0275reference(19);
      const added_template_r8 = \u0275\u0275reference(21);
      const actions_template_r9 = \u0275\u0275reference(23);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "TRIGGERS.SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "TRIGGERS.ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.triggers())("columns", \u0275\u0275pureFunction3(29, _c3, \u0275\u0275pureFunction2(20, _c0, \u0275\u0275pipeBind1(14, 12, "COMMON.FIELD_NAME"), name_template_r7), \u0275\u0275pureFunction2(23, _c1, \u0275\u0275pipeBind1(15, 14, "TRIGGERS.FIELD_ADDED"), added_template_r8), \u0275\u0275pureFunction2(26, _c2, \u0275\u0275pipeBind1(16, 16, "COMMON.ACTIONS"), actions_template_r9)))("empty_message", \u0275\u0275pipeBind1(17, 18, "ZONES.TRIGGERS_EMPTY"));
    }
  }, dependencies: [
    LoadingLabelDirective,
    IconComponent,
    MatRippleModule,
    MatRipple,
    RouterModule,
    RouterLink,
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
  ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-triggers.component.css.map */"] });
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
                    [class.invisible]="!loading()"
                />
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
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            size: '3.5rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="'ZONES.TRIGGERS_EMPTY' | translate"
                />
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
                            default
                            error
                            matRipple
                            [matTooltip]="'TRIGGERS.REMOVE' | translate"
                            (click)="deleteTrigger(row)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      LoadingLabelDirective,
      IconComponent,
      MatRippleModule,
      DateFromPipe,
      RouterModule,
      TranslatePipe,
      MatProgressBarModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      SimpleTableComponent,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;43a52b5076d94d60;/home/runner/work/backoffice/backoffice/src/app/zones/zone-triggers.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-triggers.component.css.map */\n"] }]
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneTriggersComponent, { className: "ZoneTriggersComponent", filePath: "src/app/zones/zone-triggers.component.ts", lineNumber: 130 });
})();
export {
  ZoneTriggersComponent
};
//# debugId=f94fa9c5-e11c-50fc-b055-a130214aa77b
//# sourceMappingURL=chunk-QI3NFXSP.js.map
