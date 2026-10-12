import {
  TriggerStateService
} from "./chunk-R4RGY52D.js";
import "./chunk-PK6MWCXS.js";
import "./chunk-QRJNMQXT.js";
import "./chunk-74ZONB4W.js";
import "./chunk-JQPIEPHX.js";
import "./chunk-B2VTHZST.js";
import "./chunk-3WQMMHNA.js";
import "./chunk-BT4P2UYZ.js";
import "./chunk-FTR6ETPD.js";
import "./chunk-RQMBRM3E.js";
import "./chunk-E3FX3XNV.js";
import {
  SimpleTableComponent
} from "./chunk-7KUBYGZM.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import {
  DateFromPipe
} from "./chunk-OUXITOWX.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-75HSUIQO.js";
import "./chunk-QCF7OBQH.js";
import "./chunk-T6OIXSG3.js";
import "./chunk-ZQMAPC3A.js";
import "./chunk-B7F6FUDL.js";
import "./chunk-7SC7FWU6.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-TUUQDO4F.js";
import "./chunk-D7LNWC5R.js";
import "./chunk-SPITTCPX.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-LQK4CTL2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-T7AMAKFI.js";
import "./chunk-7ICEG2QL.js";
import "./chunk-SDICNVUG.js";
import "./chunk-5G4S7L2B.js";
import "./chunk-35WA4BE5.js";
import "./chunk-KBNVNIYI.js";
import "./chunk-YDXVJGO5.js";
import "./chunk-NWZSQ647.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-5ECR7FL5.js";
import "./chunk-5ZBBWEMN.js";
import "./chunk-D7A7S3DF.js";
import "./chunk-3ONUAWGE.js";
import {
  toSignal
} from "./chunk-GPHMWQA5.js";
import {
  AsyncHandler
} from "./chunk-E2Z2L4DB.js";
import "./chunk-UXBWGFXU.js";
import {
  TranslatePipe
} from "./chunk-K5ZKBMLV.js";
import "./chunk-NTBPKOUQ.js";
import "./chunk-2OZGU35U.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-P3FA5CPP.js";
import {
  IconComponent
} from "./chunk-4DJN4BL5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-4H5SLVMO.js";
import {
  MatRippleModule
} from "./chunk-BSFQAEYP.js";
import {
  MatRipple
} from "./chunk-KGK5S2XS.js";
import "./chunk-6LJH4E32.js";
import "./chunk-E4EJUBGE.js";
import "./chunk-BOUIQ3F6.js";
import "./chunk-2VXJJPLQ.js";
import "./chunk-7ONBXR6Y.js";
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
} from "./chunk-YCZTZCQV.js";
import "./chunk-RQBZITXC.js";

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
    \u0275\u0275classProp("bg-base-content", !row_r1.enabled)("bg-success", row_r1.enabled);
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
      const state_template_r7 = \u0275\u0275reference(6);
      const name_template_r8 = \u0275\u0275reference(8);
      const actions_template_r9 = \u0275\u0275reference(12);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.instances)("columns", \u0275\u0275pureFunction3(20, _c3, \u0275\u0275pureFunction2(12, _c0, \u0275\u0275pipeBind1(2, 6, "TRIGGERS.FIELD_STATE"), state_template_r7), \u0275\u0275pureFunction2(15, _c1, \u0275\u0275pipeBind1(3, 8, "TRIGGERS.FIELD_INSTANCE_NAME"), name_template_r8), \u0275\u0275pureFunction1(18, _c2, actions_template_r9)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(4, 10, "TRIGGERS.INSTANCES_EMPTY"));
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
                    (click)="deleteTrigger(row)"
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
//# debugId=0d7cb4db-51ac-5568-b59f-c941e1339f85
//# sourceMappingURL=chunk-UYOQLADA.js.map
