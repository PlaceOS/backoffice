import {
  TriggerStateService
} from "./chunk-HIUBOXG7.js";
import "./chunk-5VV4F5SR.js";
import "./chunk-OF3WDS66.js";
import "./chunk-6Y22HZSB.js";
import {
  DateFromPipe
} from "./chunk-D5FJQT6B.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-NYNBDMIE.js";
import "./chunk-SDERNRDS.js";
import "./chunk-EOOX537V.js";
import "./chunk-JBSN2JT6.js";
import "./chunk-NTUP2G5H.js";
import {
  SimpleTableComponent
} from "./chunk-MBA33NAB.js";
import "./chunk-JNEMVL3M.js";
import "./chunk-5VEIPREF.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-URQNJTMD.js";
import "./chunk-3CXGWY3Q.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-RPCO7W3D.js";
import {
  ProgressBarComponent
} from "./chunk-XFWRCLJY.js";
import "./chunk-BPSZRBL2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-SHWF4MFV.js";
import "./chunk-32E64OOS.js";
import "./chunk-GR5HLJ6A.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
import "./chunk-I2BE2RKH.js";
import "./chunk-BE6PEWTW.js";
import "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import "./chunk-RQOHFMTH.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import {
  TooltipDirective
} from "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
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
} from "./chunk-OGAUD6Z3.js";
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
//# sourceMappingURL=chunk-G5X4UFT7.js.map
