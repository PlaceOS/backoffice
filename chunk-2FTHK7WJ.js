import {
  TriggerStateService
} from "./chunk-3K2EQ3ZL.js";
import "./chunk-XOGFQX7U.js";
import "./chunk-NGHPQJGP.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-AICS3NXJ.js";
import "./chunk-372LIGLY.js";
import "./chunk-7AZATXEA.js";
import "./chunk-3DZPGF7T.js";
import "./chunk-74ZONB4W.js";
import "./chunk-BBQ4I3EP.js";
import "./chunk-ASQIQVXN.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-YKN47ASX.js";
import "./chunk-RYVBUGYR.js";
import "./chunk-OPJ4GK76.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-ATLVPPFH.js";
import {
  DateFromPipe
} from "./chunk-V2KTABQV.js";
import "./chunk-CNKSMWEA.js";
import "./chunk-BRIEIAFA.js";
import "./chunk-JVWLK6IW.js";
import "./chunk-4YCYXKWG.js";
import "./chunk-5PVSDZF5.js";
import "./chunk-PQ3GYMIP.js";
import {
  SimpleTableComponent
} from "./chunk-4UFCPSAD.js";
import "./chunk-L7NLRXHN.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-COKN6TJC.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-EBZ2J7XZ.js";
import "./chunk-HZ4CW3MH.js";
import "./chunk-HT5GXKXQ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-23LALMM3.js";
import "./chunk-YM2QXH2N.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-QMLF3LMQ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-YKNMYZHI.js";
import "./chunk-7WER3E3M.js";
import "./chunk-VMI4ROST.js";
import "./chunk-KD54PHOX.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-DBSO33GH.js";
import {
  toSignal
} from "./chunk-KP7S2BKY.js";
import "./chunk-XJIIZKFA.js";
import {
  AsyncHandler
} from "./chunk-GQLTM7WR.js";
import {
  MatRippleModule
} from "./chunk-YAA5LSBH.js";
import "./chunk-LVMCBOCB.js";
import "./chunk-2JVXWOZG.js";
import {
  TranslatePipe
} from "./chunk-MLQ2ZCKY.js";
import "./chunk-Y2VDX4KN.js";
import {
  IconComponent
} from "./chunk-Z4IGVH3U.js";
import "./chunk-FFJ3WN6R.js";
import {
  MatRipple
} from "./chunk-5GIP5KW2.js";
import "./chunk-J2PUVZQM.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
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
} from "./chunk-2GWPJS4J.js";
import "./chunk-KWSTWQNB.js";

// src/app/triggers/trigger-instances.component.ts
var _c0 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/zones", a0];
var _c5 = (a0) => ["/systems", a0];
function TriggerInstancesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275classProp("bg-base-content", !row_r1.bookable)("bg-success", row_r1.bookable);
  }
}
function TriggerInstancesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275property("routerLink", row_r2.zone_id ? \u0275\u0275pureFunction1(3, _c4, row_r2.zone_id) : \u0275\u0275pureFunction1(5, _c5, row_r2.control_system_id))("matTooltip", row_r2.zone_id || row_r2.control_system_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.name || row_r2.zone_id || row_r2.control_system_id, " ");
  }
}
function TriggerInstancesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
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
function TriggerInstancesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function TriggerInstancesComponent_ng_template_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteTrigger(ctx_r4.item));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "TRIGGERS.DELETE_INSTANCE"));
  }
}
var TriggerInstancesComponent = class _TriggerInstancesComponent extends AsyncHandler {
  _service = inject(TriggerStateService);
  /** List of systems associated with the trigger */
  instances = this._service.instances;
  loading = toSignal(this._service.loading, {
    initialValue: false
  });
  /** Map of systems ids to connected status */
  connected = {};
  deleteTrigger = (s) => this._service.removeTriggerFromParent(s);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TriggerInstancesComponent_BaseFactory;
    return function TriggerInstancesComponent_Factory(__ngFactoryType__) {
      return (\u0275TriggerInstancesComponent_BaseFactory || (\u0275TriggerInstancesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TriggerInstancesComponent)))(__ngFactoryType__ || _TriggerInstancesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerInstancesComponent, selectors: [["trigger-systems"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 24, consts: [["state_template", ""], ["name_template", ""], ["added_template", ""], ["actions_template", ""], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "mx-auto", "h-2", "w-2", "rounded-full"], [1, "p-4", "underline", 3, "routerLink", "matTooltip"], [1, "p-4"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function TriggerInstancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "mat-progress-bar", 4)(1, "simple-table", 5);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275template(5, TriggerInstancesComponent_ng_template_5_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, TriggerInstancesComponent_ng_template_7_Template, 2, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, TriggerInstancesComponent_ng_template_9_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(11, TriggerInstancesComponent_ng_template_11_Template, 5, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const state_template_r6 = \u0275\u0275reference(6);
      const name_template_r7 = \u0275\u0275reference(8);
      const actions_template_r8 = \u0275\u0275reference(12);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.instances)("columns", \u0275\u0275pureFunction3(20, _c3, \u0275\u0275pureFunction2(12, _c0, \u0275\u0275pipeBind1(2, 6, "TRIGGERS.FIELD_STATE"), state_template_r6), \u0275\u0275pureFunction2(15, _c1, \u0275\u0275pipeBind1(3, 8, "TRIGGERS.FIELD_INSTANCE_NAME"), name_template_r7), \u0275\u0275pureFunction1(18, _c2, actions_template_r8)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(4, 10, "TRIGGERS.INSTANCES_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    RouterModule,
    RouterLink,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-instances.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerInstancesComponent, [{
    type: Component,
    args: [{ selector: "trigger-systems", template: `
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!loading()"
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
                    name: ' ',
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
                [class.bg-base-content]="!row.bookable"
                [class.bg-success]="row.bookable"
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
                [matTooltip]="row.zone_id || row.control_system_id"
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
                    matRipple
                    [matTooltip]="'TRIGGERS.DELETE_INSTANCE' | translate"
                    (click)="deleteTrigger(item)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      SimpleTableComponent,
      MatProgressBarModule,
      RouterModule,
      MatTooltipModule,
      DateFromPipe
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/triggers/trigger-instances.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=trigger-instances.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerInstancesComponent, { className: "TriggerInstancesComponent", filePath: "src/app/triggers/trigger-instances.component.ts", lineNumber: 112 });
})();
export {
  TriggerInstancesComponent
};
//# sourceMappingURL=chunk-2FTHK7WJ.js.map
