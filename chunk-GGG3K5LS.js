import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-JOCJQSA5.js";
import {
  openConfirmModal
} from "./chunk-ZNMJTVKP.js";
import {
  SimpleTableComponent
} from "./chunk-XGNXBQYI.js";
import "./chunk-IV4O2CJ5.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-K33FZYPE.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-UQKRVE72.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-HRGU4UAV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XA66LDVX.js";
import "./chunk-RBWTFXTK.js";
import {
  MatDialog
} from "./chunk-WIRQ5XQH.js";
import "./chunk-6ACE75MC.js";
import "./chunk-4LE2PDCO.js";
import "./chunk-VTQCDJGL.js";
import {
  IconComponent
} from "./chunk-3SG4KASH.js";
import "./chunk-E6OTVR3E.js";
import {
  notifySuccess,
  notifyWarn
} from "./chunk-IQ5P3T5K.js";
import "./chunk-IOTEGI4H.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-BXUDL7Q7.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-S7TGCPIQ.js";
import "./chunk-K6WIXX3Q.js";
import {
  MatRipple
} from "./chunk-ECV3GDTS.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction4,
  ɵɵreference,
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
} from "./chunk-SMUOHSRV.js";
import {
  A,
  Rt,
  Tu,
  catchError,
  lastValueFrom,
  map,
  oa,
  of,
  ra
} from "./chunk-U265RLGW.js";
import "./chunk-VYXW4D3Z.js";

// src/app/admin/resource-imports.component.ts
var _c0 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "email", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "imported", name: a0, content: a1, size: "5.5rem" });
var _c3 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.25rem" });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0) => ["/systems", a0, "about"];
function ResourceImportsComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
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
function ResourceImportsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3);
  }
}
function ResourceImportsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4);
  }
}
function ResourceImportsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r5)("bg-success", data_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5 ? "done" : "close");
  }
}
function ResourceImportsComponent_ng_template_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.nickname, " ");
  }
}
function ResourceImportsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ResourceImportsComponent_ng_template_26_div_4_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r6.display_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.nickname !== row_r6.display_name);
  }
}
function ResourceImportsComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ResourceImportsComponent_ng_template_28_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.importResource(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "publish");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", row_r8.imported)("matTooltip", \u0275\u0275pipeBind1(2, 5, "ADMIN.RESOURCE_IMPORTS_IMPORT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 7, "ADMIN.RESOURCE_IMPORTS_VIEW"))("routerLink", \u0275\u0275pureFunction1(9, _c5, row_r8.system_id));
    \u0275\u0275attribute("disabled", row_r8.system_id === "");
  }
}
var ResourceImportsComponent = class _ResourceImportsComponent {
  _dialog = inject(MatDialog);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  domain = signal(null, ...ngDevMode ? [{ debugName: "domain" }] : []);
  domain_list = signal([], ...ngDevMode ? [{ debugName: "domain_list" }] : []);
  resource_list = signal([], ...ngDevMode ? [{ debugName: "resource_list" }] : []);
  async ngOnInit() {
    const domain = Rt();
    const domain_list = await lastValueFrom(Tu({ limit: 100 }).pipe(map((_) => _.data)));
    if (!domain_list?.length)
      return;
    this.domain_list.set(domain_list);
    const match = domain_list.find((d) => d.id === domain.id);
    if (match)
      this.domain.set(match);
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
                <ul class="list-disc ml-4 text-left px-8 text-sm">${missing.map((_) => `<li>${_.display_name}</li>`).join("")}</ul>
                `,
      icon: { type: "icon", content: "publish" },
      confirm_text: "Import"
    }, this._dialog);
    if (resp?.reason !== "done")
      return;
    resp.loading(i18n("ADMIN.RESOURCE_IMPORTS_ALL_LOADING"));
    await Promise.all(missing.map((_) => this.importResource(_, false)));
    resp.close();
    notifySuccess(i18n("ADMIN.RESOURCE_IMPORTS_ALL_SUCCESS", {
      count: missing.length
    }));
  }
  async importResource(resource, notify = true) {
    const domain = this.domain();
    if (!domain)
      return;
    const system = await lastValueFrom(oa({
      name: `[${domain.name}] ${resource.display_name}`,
      email: resource.email,
      display_name: resource.display_name,
      capacity: resource.capacity
    }));
    if (!system)
      return;
    resource.system_id = system.id;
    resource.imported = true;
    if (!notify)
      return;
    notifySuccess(i18n("ADMIN.RESOURCE_IMPORTS_SUCCESS", {
      name: resource.display_name
    }));
  }
  async loadResourceList() {
    this.resource_list.set([]);
    if (!this.domain())
      return;
    this.loading.set(true);
    const result = await lastValueFrom(A({
      path: "place",
      endpoint: "/api/staff/v1",
      query_params: {
        limit: 1e3,
        authority_id: this.domain().id
      }
    }).pipe(catchError((__) => of({ data: [] }))));
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
    const { data } = await lastValueFrom(ra({
      in: list.map((_) => _.email).join(",")
    }));
    for (const resource of list) {
      const system = data.find((_) => _.email.toLowerCase() === resource.email.toLowerCase());
      if (system) {
        resource.imported = true;
        resource.system_id = system.id;
      }
    }
    this.resource_list.set(list);
    this.loading.set(false);
  }
  static \u0275fac = function ResourceImportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResourceImportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourceImportsComponent, selectors: [["resource-imports"]], decls: 30, vars: 42, consts: [["email_template", ""], ["bool_template", ""], ["name_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click", "disabled"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "sticky", "left-0", "w-full"], [1, "mb-4", "block", "min-w-3xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [3, "value"], [1, "mono", "p-4", "text-xs"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], [1, "flex", "items-center", "justify-between", "space-x-2", "px-4", "py-2"], [1, "flex", "flex-1", "flex-col"], [1, "w-full", "truncate"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["icon", "", "matRipple", "", 3, "matTooltip", "routerLink"]], template: function ResourceImportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "mat-form-field", 8)(7, "mat-select", 9);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ResourceImportsComponent_Template_mat_select_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.domain, $event) || (ctx.domain = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ResourceImportsComponent_Template_mat_select_ngModelChange_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadResourceList());
      });
      \u0275\u0275template(9, ResourceImportsComponent_mat_option_9_Template, 2, 2, "mat-option", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 11);
      \u0275\u0275listener("click", function ResourceImportsComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.importMissingResources());
      });
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 12);
      \u0275\u0275element(14, "mat-progress-bar", 13)(15, "simple-table", 14);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275template(20, ResourceImportsComponent_ng_template_20_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(22, ResourceImportsComponent_ng_template_22_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(24, ResourceImportsComponent_ng_template_24_Template, 3, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(26, ResourceImportsComponent_ng_template_26_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(28, ResourceImportsComponent_ng_template_28_Template, 9, 11, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_9_0;
      const email_template_r10 = \u0275\u0275reference(21);
      const bool_template_r11 = \u0275\u0275reference(25);
      const name_template_r12 = \u0275\u0275reference(27);
      const actions_template_r13 = \u0275\u0275reference(29);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "ADMIN.RESOURCE_IMPORTS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.domain);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 14, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.domain_list());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.domain() || !((tmp_9_0 = ctx.resource_list()) == null ? null : tmp_9_0.length));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 16, "ADMIN.RESOURCE_IMPORTS_ALL"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.resource_list())("columns", \u0275\u0275pureFunction4(37, _c4, \u0275\u0275pureFunction2(26, _c0, \u0275\u0275pipeBind1(16, 18, "COMMON.FIELD_NAME"), name_template_r12), \u0275\u0275pureFunction2(29, _c1, \u0275\u0275pipeBind1(17, 20, "COMMON.FIELD_EMAIL"), email_template_r10), \u0275\u0275pureFunction2(32, _c2, \u0275\u0275pipeBind1(18, 22, "ADMIN.RESOURCE_IMPORTS_IMPORTED"), bool_template_r11), \u0275\u0275pureFunction1(35, _c3, actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(19, 24, "ADMIN.RESOURCE_IMPORTS_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    RouterModule,
    RouterLink,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    CommonModule,
    NgForOf,
    NgIf,
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
                            <mat-option
                                *ngFor="let domain of domain_list()"
                                [value]="domain"
                            >
                                {{ domain.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-40"
                        [disabled]="!domain() || !resource_list()?.length"
                        (click)="importMissingResources()"
                    >
                        {{ 'ADMIN.RESOURCE_IMPORTS_ALL' | translate }}
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
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
                            name: ' ',
                            content: actions_template,
                            sortable: false,
                            size: '6.25rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.RESOURCE_IMPORTS_EMPTY' | translate"
                ></simple-table>
                <ng-template #email_template let-data="data">
                    <div class="mono p-4 text-xs">{{ data }}</div>
                </ng-template>
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
                            <div
                                class="text-xs opacity-30"
                                *ngIf="row.nickname !== row.display_name"
                            >
                                {{ row.nickname }}
                            </div>
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2">
                        <button
                            icon
                            matRipple
                            (click)="importResource(row)"
                            [disabled]="row.imported"
                            [matTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_IMPORT' | translate
                            "
                        >
                            <icon>publish</icon>
                        </button>
                        <a
                            icon
                            matRipple
                            [matTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_VIEW' | translate
                            "
                            [attr.disabled]="row.system_id === ''"
                            [routerLink]="['/systems', row.system_id, 'about']"
                        >
                            <icon>visibility</icon>
                        </a>
                    </div>
                </ng-template>
            </div>
        </div>
    `, imports: [
      IconComponent,
      RouterModule,
      MatRippleModule,
      TranslatePipe,
      MatTooltipModule,
      SimpleTableComponent,
      CommonModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      MatProgressBarModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourceImportsComponent, { className: "ResourceImportsComponent", filePath: "src/app/admin/resource-imports.component.ts", lineNumber: 193 });
})();
export {
  ResourceImportsComponent
};
//# sourceMappingURL=chunk-GGG3K5LS.js.map
