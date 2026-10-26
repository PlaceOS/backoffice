import {
  forEachWithLimit
} from "./chunk-BGZB6AVB.js";
import {
  AdminDataService
} from "./chunk-FLRRQ7UC.js";
import {
  SimpleTableComponent
} from "./chunk-CQ5BGNXD.js";
import {
  openConfirmModal
} from "./chunk-PHIAGKW7.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-SYH7ZBC5.js";
import {
  collectPages
} from "./chunk-XTDO4IU7.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-LLRNJ6M2.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-R3LFGYBE.js";
import "./chunk-XQFILG7P.js";
import "./chunk-VDHJ5GEA.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3KN73EXG.js";
import {
  LoadingLabelDirective
} from "./chunk-I3T2QIIC.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-VW74LF3A.js";
import {
  notifyError,
  notifySuccess,
  notifyWarn
} from "./chunk-OLETOVUH.js";
import "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import {
  MatDialog
} from "./chunk-ZQLZS64A.js";
import {
  MatOption
} from "./chunk-27URU2VR.js";
import "./chunk-TIDB3WEY.js";
import {
  TranslatePipe
} from "./chunk-54SNORV3.js";
import {
  i18n
} from "./chunk-ANULHLOS.js";
import {
  escapeHtml
} from "./chunk-AOPYKUKV.js";
import {
  $,
  Aa,
  Pa
} from "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-NZZPTKBS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-GHTXYZBC.js";
import {
  MatRippleModule
} from "./chunk-PQUI6ASX.js";
import {
  MatRipple
} from "./chunk-OEQM55HS.js";
import "./chunk-5JSUWHJB.js";
import "./chunk-QAR3ZGTS.js";
import "./chunk-33GRF44L.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TCVU4336.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/resource-imports.component.ts
var _c0 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "email", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "imported", name: a0, content: a1, size: "5.5rem" });
var _c3 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, sortable: false, size: "6.25rem" });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0) => ["/systems", a0, "about"];
var _forTrack0 = ($index, $item) => $item.id;
function ResourceImportsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r2 = ctx.$implicit;
    \u0275\u0275property("value", domain_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r2.name, " ");
  }
}
function ResourceImportsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3);
  }
}
function ResourceImportsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r4)("bg-success", data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4 ? "done" : "close");
  }
}
function ResourceImportsComponent_ng_template_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.nickname, " ");
  }
}
function ResourceImportsComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ResourceImportsComponent_ng_template_28_Conditional_4_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r5.display_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.nickname !== row_r5.display_name ? 4 : -1);
  }
}
function ResourceImportsComponent_ng_template_30_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().row;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "ADMIN.RESOURCE_IMPORTS_VIEW"))("routerLink", \u0275\u0275pureFunction1(4, _c5, row_r7.system_id));
  }
}
function ResourceImportsComponent_ng_template_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 24)(1, "icon");
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd()();
  }
}
function ResourceImportsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ResourceImportsComponent_ng_template_30_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.importResource(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "publish");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ResourceImportsComponent_ng_template_30_Conditional_5_Template, 4, 6, "a", 23)(6, ResourceImportsComponent_ng_template_30_Conditional_6_Template, 3, 0, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", row_r7.imported)("matTooltip", \u0275\u0275pipeBind1(2, 3, "ADMIN.RESOURCE_IMPORTS_IMPORT"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(row_r7.system_id ? 5 : 6);
  }
}
var IMPORT_LIMIT = 5;
var EMAIL_CHUNK_SIZE = 100;
var ResourceImportsComponent = class _ResourceImportsComponent {
  _dialog = inject(MatDialog);
  _admin_data = inject(AdminDataService);
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  domain = this._admin_data.selectedDomain("resource-imports");
  domain_list = this._admin_data.domain_list;
  resource_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "resource_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    const domain = await this._admin_data.selectDefaultDomain("resource-imports");
    if (!domain)
      return;
    this.loadResourceList();
  }
  async importMissingResources() {
    const domain = this.domain();
    if (!domain)
      return;
    const list = this.resource_list();
    const missing = list.filter((_) => !_.imported);
    if (!missing.length) {
      return notifyWarn(i18n("ADMIN.RESOURCE_IMPORTS_ALL_WARNING"));
    }
    const resp = await openConfirmModal({
      title: i18n("ADMIN.RESOURCE_IMPORTS_ALL_TITLE"),
      content: `
                <p class="mb-4">${i18n("ADMIN.RESOURCE_IMPORTS_ALL_MSG", {
        count: missing.length
      })}</p>
                <ul class="list-disc ml-4 text-left px-8 text-sm">${missing.map((_) => `<li>${escapeHtml(_.display_name)}</li>`).join("")}</ul>
                `,
      icon: { type: "icon", content: "publish" },
      confirm_text: "Import"
    }, this._dialog);
    if (resp?.reason !== "done")
      return;
    resp.loading(i18n("ADMIN.RESOURCE_IMPORTS_ALL_LOADING"));
    let failed = 0;
    await forEachWithLimit(missing, IMPORT_LIMIT, async (resource) => {
      if (!await this.importResource(resource, false))
        failed += 1;
    });
    resp.close();
    if (failed) {
      notifyError(i18n("ADMIN.RESOURCE_IMPORTS_ALL_ERROR", { count: failed }));
    }
    if (missing.length > failed) {
      notifySuccess(i18n("ADMIN.RESOURCE_IMPORTS_ALL_SUCCESS", {
        count: missing.length - failed
      }));
    }
  }
  /**
   * Create a system for the resource.
   * Returns whether the import succeeded.
   */
  async importResource(resource, notify = true) {
    const domain = this.domain();
    if (!domain)
      return false;
    const system = await Pa({
      name: `[${domain.name}] ${resource.display_name}`,
      email: resource.email,
      display_name: resource.display_name,
      capacity: resource.capacity
    }).catch(async (error) => {
      if (notify) {
        notifyError(i18n("ADMIN.RESOURCE_IMPORTS_ERROR", {
          name: resource.display_name,
          error: await readError(error)
        }));
      }
      return null;
    });
    if (!system)
      return false;
    this.resource_list.update((list) => list.map((item) => item.email === resource.email ? __spreadProps(__spreadValues({}, item), { system_id: system.id, imported: true }) : item));
    if (notify) {
      notifySuccess(i18n("ADMIN.RESOURCE_IMPORTS_SUCCESS", {
        name: resource.display_name
      }));
    }
    return true;
  }
  async loadResourceList() {
    this.resource_list.set([]);
    if (!this.domain())
      return;
    this.loading.set(true);
    const result = await $({
      path: "place",
      endpoint: "/api/staff/v1",
      query_params: {
        limit: 1e3,
        authority_id: this.domain().id
      }
    }).catch((__) => ({ data: [] }));
    const list = result.data.map((_) => ({
      id: _.id || "",
      booking_type: _.bookingType,
      capacity: _.capacity,
      display_name: _.displayName || "",
      email: _.emailAddress || "",
      is_accessible: _.isWheelChairAccessible ?? false,
      nickname: _.nickname || "",
      phone: _.phone || "",
      tags: _.tags || [],
      imported: false,
      system_id: ""
    }));
    const emails = list.map((_) => _.email).filter((_) => _);
    const system_ids = /* @__PURE__ */ new Map();
    try {
      for (let i = 0; i < emails.length; i += EMAIL_CHUNK_SIZE) {
        const systems = await collectPages(Aa({
          in: emails.slice(i, i + EMAIL_CHUNK_SIZE).join(",")
        }));
        for (const system of systems) {
          const email = system.email?.toLowerCase();
          if (email && !system_ids.has(email))
            system_ids.set(email, system.id);
        }
      }
    } catch (err) {
      notifyError(`Failed to check imported resources. Error: ${await readError(err)}`);
    }
    for (const resource of list) {
      const system_id = system_ids.get(resource.email.toLowerCase());
      if (system_id) {
        resource.imported = true;
        resource.system_id = system_id;
      }
    }
    this.resource_list.set(list);
    this.loading.set(false);
  }
  static \u0275fac = function ResourceImportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResourceImportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourceImportsComponent, selectors: [["resource-imports"]], decls: 32, vars: 47, consts: [["email_template", ""], ["bool_template", ""], ["name_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["icon", "", "default", "", "matRipple", "", 1, "text-xl", 3, "click", "disabled", "matTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "sticky", "left-0", "w-full"], [1, "mb-4", "block", "min-w-3xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "mono", "p-4", "text-xs"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], [1, "flex", "items-center", "justify-between", "space-x-2", "px-4", "py-2"], [1, "flex", "flex-1", "flex-col"], [1, "w-full", "truncate"], [1, "text-xs", "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip", "routerLink"], ["icon", "", "default", "", "disabled", ""]], template: function ResourceImportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "mat-form-field", 8)(7, "mat-select", 9);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ResourceImportsComponent_Template_mat_select_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.domain, $event) || (ctx.domain = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ResourceImportsComponent_Template_mat_select_ngModelChange_7_listener() {
        return ctx.loadResourceList();
      });
      \u0275\u0275repeaterCreate(9, ResourceImportsComponent_For_10_Template, 2, 2, "mat-option", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("click", function ResourceImportsComponent_Template_button_click_11_listener() {
        return ctx.importMissingResources();
      });
      \u0275\u0275elementStart(14, "icon");
      \u0275\u0275text(15, "download");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275element(17, "mat-progress-bar", 13)(18, "simple-table", 14);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275template(24, ResourceImportsComponent_ng_template_24_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(26, ResourceImportsComponent_ng_template_26_Template, 3, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(28, ResourceImportsComponent_ng_template_28_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(30, ResourceImportsComponent_ng_template_30_Template, 7, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const email_template_r9 = \u0275\u0275reference(25);
      const bool_template_r10 = \u0275\u0275reference(27);
      const name_template_r11 = \u0275\u0275reference(29);
      const actions_template_r12 = \u0275\u0275reference(31);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "ADMIN.RESOURCE_IMPORTS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.domain);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 14, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.domain_list());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.domain() || !ctx.resource_list()?.length)("matTooltip", \u0275\u0275pipeBind1(12, 16, "ADMIN.RESOURCE_IMPORTS_ALL"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 18, "ADMIN.RESOURCE_IMPORTS_ALL"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.resource_list())("columns", \u0275\u0275pureFunction4(42, _c4, \u0275\u0275pureFunction2(30, _c0, \u0275\u0275pipeBind1(19, 20, "COMMON.FIELD_NAME"), name_template_r11), \u0275\u0275pureFunction2(33, _c1, \u0275\u0275pipeBind1(20, 22, "COMMON.FIELD_EMAIL"), email_template_r9), \u0275\u0275pureFunction2(36, _c2, \u0275\u0275pipeBind1(21, 24, "ADMIN.RESOURCE_IMPORTS_IMPORTED"), bool_template_r10), \u0275\u0275pureFunction2(39, _c3, \u0275\u0275pipeBind1(22, 26, "COMMON.ACTIONS"), actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(23, 28, "ADMIN.RESOURCE_IMPORTS_EMPTY"));
    }
  }, dependencies: [
    LoadingLabelDirective,
    IconComponent,
    RouterModule,
    RouterLink,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourceImportsComponent, [{
    type: Component,
    args: [{ selector: "resource-imports", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.RESOURCE_IMPORTS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [(ngModel)]="domain"
                            (ngModelChange)="loadResourceList()"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (domain of domain_list(); track domain.id) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button
                        icon
                        default
                        matRipple
                        class="text-xl"
                        [disabled]="!domain() || !resource_list()?.length"
                        (click)="importMissingResources()"
                        [matTooltip]="'ADMIN.RESOURCE_IMPORTS_ALL' | translate"
                        [attr.aria-label]="
                            'ADMIN.RESOURCE_IMPORTS_ALL' | translate
                        "
                    >
                        <icon>download</icon>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="mb-4 block min-w-3xl text-sm"
                    [data]="resource_list()"
                    [columns]="[
                        {
                            key: 'display_name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'email',
                            name: 'COMMON.FIELD_EMAIL' | translate,
                            content: email_template,
                        },
                        {
                            key: 'imported',
                            name: 'ADMIN.RESOURCE_IMPORTS_IMPORTED' | translate,
                            content: bool_template,
                            size: '5.5rem',
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            sortable: false,
                            size: '6.25rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.RESOURCE_IMPORTS_EMPTY' | translate"
                />
                <ng-template #email_template let-data="data">
                    <div class="mono p-4 text-xs">{{ data }}</div>
                </ng-template>
                <ng-template #bool_template let-data="data">
                    <div
                        [class.bg-error]="!data"
                        [class.bg-success]="data"
                        class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                    >
                        <icon>{{ data ? 'done' : 'close' }}</icon>
                    </div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex items-center justify-between space-x-2 px-4 py-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <div class="w-full truncate">
                                {{ row.display_name }}
                            </div>
                            @if (row.nickname !== row.display_name) {
                                <div class="text-xs opacity-30">
                                    {{ row.nickname }}
                                </div>
                            }
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            matRipple
                            (click)="importResource(row)"
                            [disabled]="row.imported"
                            [matTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_IMPORT' | translate
                            "
                        >
                            <icon>publish</icon>
                        </button>
                        @if (row.system_id) {
                            <a
                                icon
                                default
                                matRipple
                                [matTooltip]="
                                    'ADMIN.RESOURCE_IMPORTS_VIEW' | translate
                                "
                                [routerLink]="[
                                    '/systems',
                                    row.system_id,
                                    'about',
                                ]"
                            >
                                <icon>visibility</icon>
                            </a>
                        } @else {
                            <button icon default disabled>
                                <icon>visibility</icon>
                            </button>
                        }
                    </div>
                </ng-template>
            </div>
        </div>
    `, imports: [
      LoadingLabelDirective,
      IconComponent,
      RouterModule,
      MatRippleModule,
      TranslatePipe,
      MatTooltipModule,
      SimpleTableComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      MatProgressBarModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourceImportsComponent, { className: "ResourceImportsComponent", filePath: "src/app/admin/resource-imports.component.ts", lineNumber: 210 });
})();
export {
  ResourceImportsComponent
};
//# debugId=cf9dc838-bf4e-5c83-bb72-8cb7b19dcaae
//# sourceMappingURL=chunk-5CEBQ6D5.js.map
