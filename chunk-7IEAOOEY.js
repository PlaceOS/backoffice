import {
  TriggerStateService
} from "./chunk-SEKDLLAV.js";
import "./chunk-WYDRK6YX.js";
import "./chunk-OTQ2ODNX.js";
import "./chunk-5XQHBUEP.js";
import {
  DateFromPipe
} from "./chunk-PWWITZ5J.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-MBET5OBH.js";
import "./chunk-SDERNRDS.js";
import "./chunk-EOOX537V.js";
import "./chunk-GKLY2P6H.js";
import "./chunk-NTUP2G5H.js";
import {
  SimpleTableComponent
} from "./chunk-JX3DYPLV.js";
import "./chunk-QJT4A7RT.js";
import "./chunk-L7KA5OCT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-REL7BG6R.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-REIDPTXZ.js";
import {
  ProgressBarComponent
} from "./chunk-DHD7TIH6.js";
import "./chunk-XSBVNB3I.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-3P3QAPUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-52RBTZMB.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-A7VS2VYD.js";
import "./chunk-XLCDDNWX.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
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
import {
  TooltipDirective
} from "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
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
} from "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/triggers/trigger-instances.component.ts
var _c0 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "3.5rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/zones", a0];
var _c5 = (a0) => ["/systems", a0];
function TriggerInstancesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275classProp("bg-base-content", !row_r1.enabled)("bg-success", row_r1.enabled);
  }
}
function TriggerInstancesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275property("routerLink", row_r2.zone_id ? \u0275\u0275pureFunction1(3, _c4, row_r2.zone_id) : \u0275\u0275pureFunction1(5, _c5, row_r2.control_system_id))("appTooltip", row_r2.zone_id || row_r2.control_system_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.name || row_r2.zone_id || row_r2.control_system_id, " ");
  }
}
function TriggerInstancesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
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
function TriggerInstancesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TriggerInstancesComponent_ng_template_13_Template_button_click_1_listener() {
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
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 1, "TRIGGERS.DELETE_INSTANCE"));
  }
}
var TriggerInstancesComponent = class _TriggerInstancesComponent {
  _service = inject(TriggerStateService);
  /** List of systems associated with the trigger */
  instances = this._service.instances;
  loading = this._service.loading;
  /** Map of systems ids to connected status */
  connected = {};
  deleteTrigger = (s) => this._service.removeTriggerFromParent(s);
  static \u0275fac = function TriggerInstancesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TriggerInstancesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerInstancesComponent, selectors: [["trigger-systems"]], decls: 15, vars: 27, consts: [["state_template", ""], ["name_template", ""], ["added_template", ""], ["actions_template", ""], [1, "h-full", "w-full", "overflow-auto", "p-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "mx-auto", "h-2", "w-2", "rounded-full"], [1, "p-4", "underline", 3, "routerLink", "appTooltip"], [1, "p-4"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "error", "", "ripple", "", 3, "click", "appTooltip"]], template: function TriggerInstancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4);
      \u0275\u0275element(1, "app-progress-bar", 5)(2, "simple-table", 6);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275template(7, TriggerInstancesComponent_ng_template_7_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, TriggerInstancesComponent_ng_template_9_Template, 2, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, TriggerInstancesComponent_ng_template_11_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, TriggerInstancesComponent_ng_template_13_Template, 5, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const state_template_r7 = \u0275\u0275reference(8);
      const name_template_r8 = \u0275\u0275reference(10);
      const actions_template_r9 = \u0275\u0275reference(14);
      \u0275\u0275advance();
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.instances)("columns", \u0275\u0275pureFunction3(23, _c3, \u0275\u0275pureFunction2(14, _c0, \u0275\u0275pipeBind1(3, 6, "TRIGGERS.FIELD_STATE"), state_template_r7), \u0275\u0275pureFunction2(17, _c1, \u0275\u0275pipeBind1(4, 8, "TRIGGERS.FIELD_INSTANCE_NAME"), name_template_r8), \u0275\u0275pureFunction2(20, _c2, \u0275\u0275pipeBind1(5, 10, "COMMON.ACTIONS"), actions_template_r9)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(6, 12, "TRIGGERS.INSTANCES_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    IconComponent,
    SimpleTableComponent,
    RouterModule,
    RouterLink,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-instances.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerInstancesComponent, [{
    type: Component,
    args: [{ selector: "trigger-systems", template: `
        <div class="h-full w-full overflow-auto p-4">
            <app-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.invisible]="!loading()"
            />
            <simple-table
                class="block min-w-lg text-sm"
                [data]="instances"
                [columns]="[
                    {
                        key: 'state',
                        name: 'TRIGGERS.FIELD_STATE' | translate,
                        content: state_template,
                        size: '4rem',
                        sortable: false,
                    },
                    {
                        key: 'name',
                        name: 'TRIGGERS.FIELD_INSTANCE_NAME' | translate,
                        content: name_template,
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
                [sortable]="true"
                [empty_message]="'TRIGGERS.INSTANCES_EMPTY' | translate"
            />
            <ng-template #state_template let-row="row">
                <div
                    class="mx-auto h-2 w-2 rounded-full"
                    [class.bg-base-content]="!row.enabled"
                    [class.bg-success]="row.enabled"
                ></div>
            </ng-template>
            <ng-template #name_template let-row="row">
                <a
                    class="p-4 underline"
                    [routerLink]="
                        row.zone_id
                            ? ['/zones', row.zone_id]
                            : ['/systems', row.control_system_id]
                    "
                    [appTooltip]="row.zone_id || row.control_system_id"
                >
                    {{ row.name || row.zone_id || row.control_system_id }}
                </a>
            </ng-template>
            <ng-template #added_template let-row="row">
                <div class="p-4">
                    {{ +row.created_at * 1000 | dateFrom }}
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="mx-auto flex items-center space-x-2 p-2">
                    <button
                        icon
                        default
                        error
                        ripple
                        [appTooltip]="'TRIGGERS.DELETE_INSTANCE' | translate"
                        (click)="deleteTrigger(row)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent,
      RouterModule,
      DateFromPipe
    ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/triggers/trigger-instances.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-instances.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerInstancesComponent, { className: "TriggerInstancesComponent", filePath: "src/app/triggers/trigger-instances.component.ts", lineNumber: 110 });
})();
export {
  TriggerInstancesComponent
};
//# debugId=6d271131-7b7c-56bd-ba17-761ad8860dd3
//# sourceMappingURL=chunk-7IEAOOEY.js.map
