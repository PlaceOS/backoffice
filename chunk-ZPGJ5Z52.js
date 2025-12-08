import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-DQSPRRFK.js";
import {
  ItemCreateUpdateModalComponent
} from "./chunk-UCBZDRWT.js";
import "./chunk-3LWTF2PE.js";
import "./chunk-IMFNC5LD.js";
import "./chunk-W3G23CBG.js";
import "./chunk-VKAFJ4MK.js";
import "./chunk-4K2ZV7BP.js";
import {
  openConfirmModal
} from "./chunk-QU4UI3CX.js";
import {
  SimpleTableComponent
} from "./chunk-54EBFT32.js";
import "./chunk-TY7WPPBB.js";
import "./chunk-XUNDLFMD.js";
import "./chunk-WNITRNVL.js";
import "./chunk-455FOZWA.js";
import "./chunk-RFIJAS3V.js";
import "./chunk-NGLYGBSE.js";
import "./chunk-C5EPULW7.js";
import "./chunk-JVJWK7OL.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-U4CQSA3Q.js";
import "./chunk-OCEHEAUM.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import {
  MatDialog
} from "./chunk-IWX2OQVL.js";
import "./chunk-QVTLGZEG.js";
import {
  AsyncHandler
} from "./chunk-5X4EUYHA.js";
import "./chunk-3TSVSCMW.js";
import {
  IconComponent
} from "./chunk-GX3YM4OA.js";
import "./chunk-HWY7SC7O.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZMPXDLFL.js";
import "./chunk-JNHGG7IP.js";
import {
  MatRippleModule
} from "./chunk-GIPOOO6B.js";
import {
  TranslatePipe
} from "./chunk-KSJPNMKV.js";
import "./chunk-Z76VKXD6.js";
import {
  MatRipple
} from "./chunk-ZGUCA4AJ.js";
import {
  CommonModule,
  Component,
  Gs,
  JsonPipe,
  Ks,
  Uo,
  Ys,
  Zs,
  inject,
  lastValueFrom,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3J5ZMTAK.js";
import "./chunk-VYXW4D3Z.js";

// src/app/admin/brokers.component.ts
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "auth_type", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "description", name: a0 });
var _c3 = (a0, a1) => ({ key: "host", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "port", name: a0, content: a1, size: "6rem" });
var _c5 = (a0, a1) => ({ key: "tls", name: a0, content: a1, size: "4rem" });
var _c6 = (a0, a1) => ({ key: "filters", name: a0, content: a1 });
var _c7 = (a0) => ({ key: "actions", name: " ", size: "6rem", content: a0, sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function AdminBrokersComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2);
  }
}
function AdminBrokersComponent_ng_template_26_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_AUTH_TYPE_CERT"));
  }
}
function AdminBrokersComponent_ng_template_26_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_AUTH_TYPE_PASS"));
  }
}
function AdminBrokersComponent_ng_template_26_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_AUTH_TYPE_NONE"));
  }
}
function AdminBrokersComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_26_Case_1_Template, 3, 3, "span")(2, AdminBrokersComponent_ng_template_26_Case_2_Template, 3, 3, "span")(3, AdminBrokersComponent_ng_template_26_Case_3_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = data_r3) === 0 ? 1 : tmp_7_0 === 2 ? 2 : 3);
  }
}
function AdminBrokersComponent_ng_template_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 19);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd()();
  }
}
function AdminBrokersComponent_ng_template_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon", 20);
    \u0275\u0275text(2, " lock_open ");
    \u0275\u0275elementEnd()();
  }
}
function AdminBrokersComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminBrokersComponent_ng_template_28_Conditional_0_Template, 3, 0, "div", 17);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_28_Conditional_1_Template, 3, 0, "div", 18);
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275conditional(data_r4 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r4 ? 1 : -1);
  }
}
function AdminBrokersComponent_ng_template_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, data_r5));
  }
}
function AdminBrokersComponent_ng_template_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_FILTERS_EMPTY"), " ");
  }
}
function AdminBrokersComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_30_Conditional_1_Template, 3, 3, "code");
    \u0275\u0275conditionalCreate(2, AdminBrokersComponent_ng_template_30_Conditional_2_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r5 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r5 ? 2 : -1);
  }
}
function AdminBrokersComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminBrokersComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.editBroker(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminBrokersComponent_ng_template_32_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.deleteBroker(row_r7));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "ADMIN.BROKERS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.BROKERS_REMOVE"));
  }
}
var AdminBrokersComponent = class _AdminBrokersComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  brokers = signal([], ...ngDevMode ? [{ debugName: "brokers" }] : []);
  ngOnInit() {
    this.loadBrokers();
  }
  newBroker() {
    const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
      data: {
        item: new Uo(),
        name: "ADMIN.BROKERS",
        save: (item) => Zs(item)
      }
    });
    this.subscription("modal_events", ref.componentInstance.event.subscribe((event) => {
      if (event.reason !== "done")
        return;
      this.loadBrokers();
    }));
  }
  editBroker(item) {
    const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
      data: {
        item,
        name: "ADMIN.BROKERS",
        save: (item2) => Ks(item2.id, item2)
      }
    });
    this.subscription("modal_events", ref.componentInstance.event.subscribe((event) => {
      if (event.reason !== "done")
        return;
      this.loadBrokers();
    }));
  }
  async deleteBroker(item) {
    if (item) {
      const details = await openConfirmModal({
        title: `Delete MQTT Broker`,
        content: `<p>Are you sure you want delete this boker?</p><p>The broker will be deleted <strong>immediately.</strong></p>`,
        icon: { type: "icon", content: "delete" }
      }, this._dialog);
      if (!details)
        return;
      details.loading("Deleting broker...");
      const err = await Gs(item.id).toPromise().catch((_) => _);
      details.close();
      if (err)
        return notifyError(`Error deleting broker. Error: ${JSON.stringify(err.response || err.message || err)}`);
      notifySuccess(`Successfully deleted broker "${item.name}".`);
      this.loadBrokers();
    }
  }
  async loadBrokers() {
    this.loading.set(true);
    const brokers = await lastValueFrom(Ys().pipe(map((r) => r.data)));
    this.brokers.set(brokers);
    this.loading.set(false);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AdminBrokersComponent_BaseFactory;
    return function AdminBrokersComponent_Factory(__ngFactoryType__) {
      return (\u0275AdminBrokersComponent_BaseFactory || (\u0275AdminBrokersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AdminBrokersComponent)))(__ngFactoryType__ || _AdminBrokersComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBrokersComponent, selectors: [["app-brokers"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 34, vars: 58, consts: [["mono_template", ""], ["auth_type_template", ""], ["tls_template", ""], ["filters_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center"], [1, "text"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "p-4", "font-mono", "text-sm"], [1, "p-4"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "bg-success"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "bg-error"], [1, "text-xl", "text-success-content"], [1, "text-xl", "text-error-content"], [1, "text-xs", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function AdminBrokersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
      \u0275\u0275listener("click", function AdminBrokersComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newBroker());
      });
      \u0275\u0275elementStart(7, "div", 10)(8, "icon", 7);
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 11);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(13, "div", 12);
      \u0275\u0275element(14, "mat-progress-bar", 13)(15, "simple-table", 14);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, AdminBrokersComponent_ng_template_24_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(26, AdminBrokersComponent_ng_template_26_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(28, AdminBrokersComponent_ng_template_28_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(30, AdminBrokersComponent_ng_template_30_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(32, AdminBrokersComponent_ng_template_32_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const mono_template_r9 = \u0275\u0275reference(25);
      const auth_type_template_r10 = \u0275\u0275reference(27);
      const tls_template_r11 = \u0275\u0275reference(29);
      const filters_template_r12 = \u0275\u0275reference(31);
      const actions_template_r13 = \u0275\u0275reference(33);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "ADMIN.BROKERS_HEADER"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "ADMIN.BROKERS_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.brokers())("columns", \u0275\u0275pureFunction8(49, _c8, \u0275\u0275pureFunction1(28, _c0, \u0275\u0275pipeBind1(16, 12, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(17, 14, "ADMIN.BROKERS_FIELD_AUTH_TYPE"), auth_type_template_r10), \u0275\u0275pureFunction1(33, _c2, \u0275\u0275pipeBind1(18, 16, "COMMON.FIELD_DESCRIPTION")), \u0275\u0275pureFunction2(35, _c3, \u0275\u0275pipeBind1(19, 18, "ADMIN.BROKERS_FIELD_HOST"), mono_template_r9), \u0275\u0275pureFunction2(38, _c4, \u0275\u0275pipeBind1(20, 20, "ADMIN.BROKERS_FIELD_PORT"), mono_template_r9), \u0275\u0275pureFunction2(41, _c5, \u0275\u0275pipeBind1(21, 22, "ADMIN.BROKERS_FIELD_TLS"), tls_template_r11), \u0275\u0275pureFunction2(44, _c6, \u0275\u0275pipeBind1(22, 24, "ADMIN.BROKERS_FIELD_FILTERS"), filters_template_r12), \u0275\u0275pureFunction1(47, _c7, actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(23, 26, "ADMIN.BROKER_LIST_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    CommonModule,
    TranslatePipe,
    JsonPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n}\n/*# sourceMappingURL=brokers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminBrokersComponent, [{
    type: Component,
    args: [{ selector: "app-brokers", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.BROKERS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button btn matRipple (click)="newBroker()">
                        <div class="flex items-center">
                            <icon class="text-2xl">add</icon>
                            <div class="text">
                                {{ 'ADMIN.BROKERS_ADD' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="brokers()"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'auth_type',
                            name: 'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate,
                            content: auth_type_template,
                        },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                        },
                        {
                            key: 'host',
                            name: 'ADMIN.BROKERS_FIELD_HOST' | translate,
                            content: mono_template,
                        },
                        {
                            key: 'port',
                            name: 'ADMIN.BROKERS_FIELD_PORT' | translate,
                            content: mono_template,
                            size: '6rem',
                        },
                        {
                            key: 'tls',
                            name: 'ADMIN.BROKERS_FIELD_TLS' | translate,
                            content: tls_template,
                            size: '4rem',
                        },
                        {
                            key: 'filters',
                            name: 'ADMIN.BROKERS_FIELD_FILTERS' | translate,
                            content: filters_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.BROKER_LIST_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #mono_template let-data="data">
            <div class="p-4 font-mono text-sm">{{ data }}</div>
        </ng-template>

        <ng-template #auth_type_template let-data="data">
            <div class="p-4">
                @switch (data) {
                    @case (0) {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_CERT' | translate
                        }}</span>
                    }
                    @case (2) {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_PASS' | translate
                        }}</span>
                    }
                    @default {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_NONE' | translate
                        }}</span>
                    }
                }
            </div>
        </ng-template>
        <ng-template #tls_template let-data="data">
            @if (data) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm bg-success"
                >
                    <icon class="text-xl text-success-content">lock</icon>
                </div>
            }
            @if (!data) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm bg-error"
                >
                    <icon class="text-xl text-error-content"> lock_open </icon>
                </div>
            }
        </ng-template>
        <ng-template #filters_template let-data="data">
            <div class="p-4">
                @if (data) {
                    <code>{{ data | json }}</code>
                }
                @if (!data) {
                    <span class="text-xs opacity-30">
                        {{ 'ADMIN.BROKERS_FILTERS_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_EDIT' | translate"
                    (click)="editBroker(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_REMOVE' | translate"
                    class="text-error"
                    (click)="deleteBroker(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      SimpleTableComponent,
      MatProgressBarModule,
      CommonModule
    ], styles: ["/* angular:styles/component:css;572731b77438e4c922c62954d78fd970f67110b5e9d4f700617f449621eb8577;/home/runner/work/backoffice/backoffice/src/app/admin/brokers.component.ts */\n:host {\n}\n/*# sourceMappingURL=brokers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBrokersComponent, { className: "AdminBrokersComponent", filePath: "src/app/admin/brokers.component.ts", lineNumber: 191 });
})();
export {
  AdminBrokersComponent
};
//# sourceMappingURL=chunk-ZPGJ5Z52.js.map
