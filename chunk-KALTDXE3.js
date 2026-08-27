import {
  SystemStateService
} from "./chunk-HYAQACGE.js";
import "./chunk-JJ7BPITD.js";
import {
  BindingDirective
} from "./chunk-CT7RNPX5.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-AGRAJY4Y.js";
import "./chunk-LJRGQFU3.js";
import "./chunk-6YNTQML3.js";
import "./chunk-SYTSH5CY.js";
import "./chunk-UM7YW4HE.js";
import "./chunk-QMZCODBK.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-RKY23HSE.js";
import "./chunk-7NDCHFOB.js";
import "./chunk-XVFVAW3Y.js";
import "./chunk-PCFI5QOQ.js";
import {
  DateFromPipe
} from "./chunk-WWY5WMTY.js";
import "./chunk-JAMMTH5K.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-LNIYAS5O.js";
import "./chunk-7JIOXWGJ.js";
import "./chunk-7GTI4RRT.js";
import {
  SimpleTableComponent
} from "./chunk-BVAQ3KBJ.js";
import "./chunk-V3LOQHMH.js";
import "./chunk-I55NGSFI.js";
import "./chunk-MVHEPUBI.js";
import "./chunk-XAS7GUY2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-SEO2LXOK.js";
import "./chunk-AHMBEMXE.js";
import "./chunk-6QZVPNC3.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-2SRIA4UK.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-X6EP7JXK.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-RYWQOUT3.js";
import "./chunk-N7YQCQZM.js";
import "./chunk-YCQXXJ4J.js";
import "./chunk-7FUU5K5T.js";
import "./chunk-JKE4D5KH.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-TH36Z5QV.js";
import {
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import "./chunk-J6BBXARK.js";
import {
  toSignal
} from "./chunk-EVUO4PXU.js";
import "./chunk-RMYYKPNF.js";
import "./chunk-ALQ3QZS6.js";
import {
  MatRippleModule
} from "./chunk-TPBAO5IV.js";
import "./chunk-HQA27L6T.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ERVNLYZR.js";
import {
  IconComponent
} from "./chunk-4HEIKSFD.js";
import {
  copyToClipboard,
  unique
} from "./chunk-Y2VDX4KN.js";
import "./chunk-YTRY35Y7.js";
import {
  MatRipple
} from "./chunk-43FRBZB3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3LH3QF7A.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  model,
  setClassMetadata,
  signal,
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
  ɵɵpureFunction6,
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
} from "./chunk-LPT3PWXX.js";
import "./chunk-KWSTWQNB.js";

// src/app/systems/system-triggers.component.ts
var _c0 = (a0) => ({ key: "status", name: " ", size: "3rem", content: a0 });
var _c1 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "count", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "errors", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "added", name: a0, content: a1 });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "8.75rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c7 = (a0) => ["/triggers", a0];
function SystemTriggersComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 16);
    \u0275\u0275twoWayListener("modelChange", function SystemTriggersComponent_ng_template_19_Template_i_modelChange_0_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.trigger_state[row_r3.id], $event) || (ctx_r3.trigger_state[row_r3.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("modelChange", function SystemTriggersComponent_ng_template_19_Template_i_modelChange_0_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateComparisons(row_r3.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(1, "div", 17);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("sys", ctx_r3.item.id)("bind", row_r3.id);
    \u0275\u0275twoWayProperty("model", ctx_r3.trigger_state[row_r3.id]);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-content", !ctx_r3.trigger_state[row_r3.id]?.triggered)("bg-success", ctx_r3.trigger_state[row_r3.id]?.triggered);
  }
}
function SystemTriggersComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c7, row_r5.trigger_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.trigger_id, " ");
  }
}
function SystemTriggersComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.trigger_state[row_r6.id]?.trigger_count, " ");
  }
}
function SystemTriggersComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.trigger_state[row_r7.id]?.action_errors + ctx_r3.trigger_state[row_r7.id]?.comparison_errors || "0", " ");
  }
}
function SystemTriggersComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +row_r8.created_at * 1e3), " ");
  }
}
function SystemTriggersComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SystemTriggersComponent_ng_template_29_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyWebhookURL(row_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function SystemTriggersComponent_ng_template_29_Template_button_click_5_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editTrigger(row_r10));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function SystemTriggersComponent_ng_template_29_Template_button_click_9_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteTrigger(row_r10));
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "SYSTEMS.COPY_WEBHOOK"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "SYSTEMS.TRIGGER_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "SYSTEMS.TRIGGER_REMOVE"));
  }
}
var SystemTriggersComponent = class _SystemTriggersComponent {
  _service = inject(SystemStateService);
  filter = model(
    "",
    ...ngDevMode ? [{ debugName: "filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._service.loading;
  service_triggers = toSignal(this._service.triggers, {
    initialValue: []
  });
  trigger_state = {};
  comparisons = {};
  temp_trigger = signal(
    null,
    ...ngDevMode ? [{ debugName: "temp_trigger" }] : (
      /* istanbul ignore next */
      []
    )
  );
  triggers = computed(
    () => {
      const filter = this.filter().toLowerCase();
      const temp = this.temp_trigger();
      const triggers = this.service_triggers();
      const list = unique(temp ? [...triggers, temp] : triggers, "id");
      return filter ? list.filter((t) => t.name.toLowerCase().includes(filter)) : list;
    },
    ...ngDevMode ? [{ debugName: "triggers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  copyWebhookURL = (t) => {
    copyToClipboard(`${location.origin}/api/engine/v2/webhook/${t.id}/notify?secret=${t.webhook_secret}`);
    notifyInfo(i18n("SYSTEMS.COPIED_WEBHOOK"));
  };
  editTrigger = async (t) => this.temp_trigger.set(await this._service.editTrigger(t));
  deleteTrigger = (t) => this._service.removeTrigger(t);
  selectTrigger = async () => this.temp_trigger.set(await this._service.selectTrigger() || null);
  get item() {
    return this._service.active_item;
  }
  updateComparisons(id) {
    this.comparisons[id] = "";
    if (this.trigger_state[id]) {
      for (const key in this.trigger_state[id].conditions) {
        if (Object.prototype.hasOwnProperty.call(this.trigger_state[id].conditions, key)) {
          if (this.comparisons[id]) {
            this.comparisons[id] += "\n";
          }
          this.comparisons[id] += `${key}: ${this.trigger_state[id].conditions[key]}`;
        }
      }
    }
  }
  static \u0275fac = function SystemTriggersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemTriggersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemTriggersComponent, selectors: [["system-triggers"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 31, vars: 45, consts: [["status_template", ""], ["name_template", ""], ["count_template", ""], ["errors_template", ""], ["added_template", ""], ["actions_template", ""], [1, "flex", "h-full", "flex-col"], [1, "flex", "items-center", "space-x-2", "p-4"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "h-1/2", "max-w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-2xl", "text-sm", 3, "data", "columns", "empty_message"], ["hidden", "", "binding", "", "mod", "_TRIGGER__1", 3, "modelChange", "sys", "bind", "model"], [1, "mx-auto", "h-2", "w-2", "rounded-full"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function SystemTriggersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "section", 7)(2, "mat-form-field", 8)(3, "div", 9)(4, "icon", 10);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 11);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function SystemTriggersComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 12);
      \u0275\u0275listener("click", function SystemTriggersComponent_Template_button_click_8_listener() {
        return ctx.selectTrigger();
      });
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 13);
      \u0275\u0275element(12, "mat-progress-bar", 14)(13, "simple-table", 15);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275template(19, SystemTriggersComponent_ng_template_19_Template, 2, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(21, SystemTriggersComponent_ng_template_21_Template, 5, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(23, SystemTriggersComponent_ng_template_23_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(25, SystemTriggersComponent_ng_template_25_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(27, SystemTriggersComponent_ng_template_27_Template, 3, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(29, SystemTriggersComponent_ng_template_29_Template, 13, 9, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const status_template_r11 = \u0275\u0275reference(20);
      const name_template_r12 = \u0275\u0275reference(22);
      const count_template_r13 = \u0275\u0275reference(24);
      const errors_template_r14 = \u0275\u0275reference(26);
      const added_template_r15 = \u0275\u0275reference(28);
      const actions_template_r16 = \u0275\u0275reference(30);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "SYSTEMS.TRIGGER_SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "SYSTEMS.TRIGGER_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading().triggers);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.triggers())("columns", \u0275\u0275pureFunction6(38, _c6, \u0275\u0275pureFunction1(22, _c0, status_template_r11), \u0275\u0275pureFunction2(24, _c1, \u0275\u0275pipeBind1(14, 12, "SYSTEMS.TRIGGER_FIELD_NAME"), name_template_r12), \u0275\u0275pureFunction2(27, _c2, \u0275\u0275pipeBind1(15, 14, "SYSTEMS.TRIGGER_FIELD_COUNT"), count_template_r13), \u0275\u0275pureFunction2(30, _c3, \u0275\u0275pipeBind1(16, 16, "SYSTEMS.TRIGGER_FIELD_ERRORS"), errors_template_r14), \u0275\u0275pureFunction2(33, _c4, \u0275\u0275pipeBind1(17, 18, "SYSTEMS.TRIGGER_FIELD_ADDED"), added_template_r15), \u0275\u0275pureFunction1(36, _c5, actions_template_r16)))("empty_message", \u0275\u0275pipeBind1(18, 20, "SYSTEMS.TRIGGERS_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    RouterModule,
    RouterLink,
    BindingDirective,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[flex][_ngcontent-%COMP%] {\n  min-width: 8rem;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 36rem;\n}\n/*# sourceMappingURL=system-triggers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemTriggersComponent, [{
    type: Component,
    args: [{ selector: "system-triggers", template: `
        <div class="flex h-full flex-col">
            <section class="flex items-center space-x-2 p-4">
                <mat-form-field appearance="outline" class="h-12 flex-1">
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [(ngModel)]="filter"
                        matInput
                        [placeholder]="'SYSTEMS.TRIGGER_SEARCH' | translate"
                        class="rounded-none"
                    />
                </mat-form-field>
                <button btn matRipple class="w-32" (click)="selectTrigger()">
                    {{ 'SYSTEMS.TRIGGER_ADD' | translate }}
                </button>
            </section>
            <section class="h-1/2 max-w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading().triggers"
                />
                <simple-table
                    class="block min-w-2xl text-sm"
                    [data]="triggers()"
                    [columns]="[
                        {
                            key: 'status',
                            name: ' ',
                            size: '3rem',
                            content: status_template,
                        },
                        {
                            key: 'name',
                            name: 'SYSTEMS.TRIGGER_FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'count',
                            name: 'SYSTEMS.TRIGGER_FIELD_COUNT' | translate,
                            content: count_template,
                        },
                        {
                            key: 'errors',
                            name: 'SYSTEMS.TRIGGER_FIELD_ERRORS' | translate,
                            content: errors_template,
                        },
                        {
                            key: 'added',
                            name: 'SYSTEMS.TRIGGER_FIELD_ADDED' | translate,
                            content: added_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '8.75rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="'SYSTEMS.TRIGGERS_EMPTY' | translate"
                />
                <ng-template #status_template let-row="row">
                    <i
                        hidden
                        binding
                        [sys]="item.id"
                        mod="_TRIGGER__1"
                        [bind]="row.id"
                        [(model)]="trigger_state[row.id]"
                        (modelChange)="updateComparisons(row.id)"
                    ></i>
                    <div
                        class="mx-auto h-2 w-2 rounded-full"
                        [class.bg-base-content]="
                            !trigger_state[row.id]?.triggered
                        "
                        [class.bg-success]="trigger_state[row.id]?.triggered"
                    ></div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/triggers', row.trigger_id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.trigger_id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #count_template let-row="row">
                    <div class="p-4">
                        {{ trigger_state[row.id]?.trigger_count }}
                    </div>
                </ng-template>
                <ng-template #errors_template let-row="row">
                    <div class="p-4">
                        {{
                            trigger_state[row.id]?.action_errors +
                                trigger_state[row.id]?.comparison_errors || '0'
                        }}
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
                            matRipple
                            [matTooltip]="'SYSTEMS.COPY_WEBHOOK' | translate"
                            (click)="copyWebhookURL(row)"
                        >
                            <icon>link</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="'SYSTEMS.TRIGGER_EDIT' | translate"
                            (click)="editTrigger(row)"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            default
                            error
                            matRipple
                            [matTooltip]="'SYSTEMS.TRIGGER_REMOVE' | translate"
                            (click)="deleteTrigger(row)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      DateFromPipe,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      SimpleTableComponent,
      MatProgressBarModule,
      RouterModule,
      BindingDirective
    ], styles: ["/* angular:styles/component:css;70377810c25da5afc0c8c972ea69fdf28978f5b7dc52e047fb5c74248e79949c;/home/runner/work/backoffice/backoffice/src/app/systems/system-triggers.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[flex] {\n  min-width: 8rem;\n}\n[role=table] > div {\n  width: 100%;\n  min-width: 36rem;\n}\n/*# sourceMappingURL=system-triggers.component.css.map */\n"] }]
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemTriggersComponent, { className: "SystemTriggersComponent", filePath: "src/app/systems/system-triggers.component.ts", lineNumber: 217 });
})();
export {
  SystemTriggersComponent
};
//# sourceMappingURL=chunk-KALTDXE3.js.map
