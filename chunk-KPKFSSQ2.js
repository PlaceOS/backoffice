import {
  GroupStateService
} from "./chunk-TO5N2APL.js";
import "./chunk-C73Y7H3U.js";
import {
  MarkdownPipe
} from "./chunk-2CHPP5HX.js";
import "./chunk-EIKRERJO.js";
import "./chunk-J533RESC.js";
import "./chunk-Y4CFRGFT.js";
import "./chunk-7GTPBWD4.js";
import "./chunk-KZO2OZUY.js";
import "./chunk-5DYDWWDW.js";
import "./chunk-PFP5GBI7.js";
import {
  DateFromPipe
} from "./chunk-WGBPIGQD.js";
import "./chunk-TG7MI555.js";
import "./chunk-UHEQKETH.js";
import {
  toSignal
} from "./chunk-KMTGRH5S.js";
import "./chunk-MKUNKECS.js";
import "./chunk-MUO7ALH5.js";
import "./chunk-MRAJXLIZ.js";
import "./chunk-DTCPP7I4.js";
import "./chunk-SYFVYOP6.js";
import "./chunk-FDVXWCJC.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-SH4SZQVY.js";
import "./chunk-TYZFLJYX.js";
import "./chunk-4ZFVXULA.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-DKBIML2S.js";
import "./chunk-6HFZ2LJV.js";
import "./chunk-AVP547Y3.js";
import "./chunk-T6JVNKEV.js";
import "./chunk-UXQLDBGZ.js";
import "./chunk-AWIIJWND.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-NKHB33NT.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-OMTFMYK4.js";
import "./chunk-Z3EKRGVK.js";
import "./chunk-5P6RE4SY.js";
import "./chunk-IZKGHFEC.js";
import "./chunk-OKKLVLNZ.js";
import {
  TranslatePipe
} from "./chunk-YQWUAWSB.js";
import "./chunk-ZHEO2T5Y.js";
import "./chunk-WL7ZLVLT.js";
import "./chunk-3WFHRON7.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-46M7K5TF.js";
import {
  Kc,
  fc,
  lastValueFrom
} from "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/groups/group-about.component.ts
var _c0 = () => [];
var _c1 = (a0) => ["/domains", a0, "about"];
var _c2 = (a0) => ["/groups", a0, "about"];
function GroupAboutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "GROUPS.AUTHORITY_ID"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.authority_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r0.authority()) == null ? null : tmp_3_0.name) || ((tmp_3_0 = ctx_r0.item()) == null ? null : tmp_3_0.authority_id), " ");
  }
}
function GroupAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "GROUPS.PARENT_ID"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c2, (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.parent_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r0.parent()) == null ? null : tmp_3_0.name) || ((tmp_3_0 = ctx_r0.item()) == null ? null : tmp_3_0.parent_id), " ");
  }
}
function GroupAboutComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subsystem_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subsystem_r2, " ");
  }
}
function GroupAboutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "GROUPS.SUBSYSTEMS_EMPTY"));
  }
}
function GroupAboutComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 12);
    \u0275\u0275pipe(5, "markdown");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 6, \u0275\u0275pipeBind1(5, 4, (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.description)), \u0275\u0275sanitizeHtml);
  }
}
var GroupAboutComponent = class _GroupAboutComponent {
  _service = inject(GroupStateService);
  item = toSignal(this._service.item, {
    initialValue: null
  });
  parent = signal(null, ...ngDevMode ? [{ debugName: "parent" }] : []);
  authority = signal(null, ...ngDevMode ? [{ debugName: "authority" }] : []);
  created_at = computed(() => Date.parse(this.item()?.created_at || "") / 1e3, ...ngDevMode ? [{ debugName: "created_at" }] : []);
  updated_at = computed(() => Date.parse(this.item()?.updated_at || "") / 1e3, ...ngDevMode ? [{ debugName: "updated_at" }] : []);
  constructor() {
    effect(() => {
      const authority_id = this.item()?.authority_id;
      this.authority.set(null);
      if (authority_id)
        void this.loadAuthority(authority_id);
    });
    effect(() => {
      const parent_id = this.item()?.parent_id;
      this.parent.set(null);
      if (parent_id)
        void this.loadParent(parent_id);
    });
  }
  async loadAuthority(authority_id) {
    const authority = await lastValueFrom(fc(authority_id)).catch(() => null);
    if (this.item()?.authority_id === authority_id) {
      this.authority.set(authority);
    }
  }
  async loadParent(parent_id) {
    const parent = await lastValueFrom(Kc(parent_id)).catch(() => null);
    if (this.item()?.parent_id === parent_id)
      this.parent.set(parent);
  }
  static \u0275fac = function GroupAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupAboutComponent, selectors: [["group-about"]], decls: 32, vars: 28, consts: [[1, "mb-4", "flex", "flex-col", "gap-4", "p-4", "md:flex-row"], [1, "w-full"], [1, "border-base-200", "grid", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "-mx-1", "flex", "flex-1", "flex-wrap"], [1, "mono", "bg-base-200", "m-1", "h-6", "rounded-sm", "px-2", "py-1", "text-[0.625rem]"], [1, "opacity-30"], [1, "flex", "items-center"], [3, "matTooltip"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "text-sm", "underline", 3, "routerLink"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"]], template: function GroupAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, GroupAboutComponent_Conditional_3_Template, 5, 7);
      \u0275\u0275conditionalCreate(4, GroupAboutComponent_Conditional_4_Template, 5, 7);
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275repeaterCreate(9, GroupAboutComponent_For_10_Template, 2, 1, "div", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(11, GroupAboutComponent_Conditional_11_Template, 3, 3, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 3);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 3);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7)(21, "span", 8);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 3);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 7)(28, "span", 8);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "dateFrom");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(31, GroupAboutComponent_Conditional_31_Template, 7, 8, "div", 9);
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_12_0;
      let tmp_14_0;
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "8rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_1_0 = ctx.item()) == null ? null : tmp_1_0.authority_id) ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.item()) == null ? null : tmp_2_0.parent_id) ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "GROUPS.SUBSYSTEMS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(((tmp_4_0 = ctx.item()) == null ? null : tmp_4_0.subsystems) || \u0275\u0275pureFunction0(27, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.subsystems == null ? null : tmp_5_0.subsystems.length) ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "GROUPS.CHILDREN_COUNT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(((tmp_7_0 = ctx.item()) == null ? null : tmp_7_0.children_count) || 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", (tmp_9_0 = ctx.item()) == null ? null : tmp_9_0.created_at);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 21, ctx.created_at() * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 23, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", (tmp_12_0 = ctx.item()) == null ? null : tmp_12_0.updated_at);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 25, ctx.updated_at() * 1e3), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_14_0 = ctx.item()) == null ? null : tmp_14_0.description) ? 31 : -1);
    }
  }, dependencies: [
    CommonModule,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterLink,
    AsyncPipe,
    TranslatePipe,
    DateFromPipe,
    MarkdownPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupAboutComponent, [{
    type: Component,
    args: [{ selector: "group-about", template: `
        <section class="mb-4 flex flex-col gap-4 p-4 md:flex-row">
            <div class="w-full">
                <div
                    class="border-base-200 grid gap-2 rounded-sm border p-4"
                    [style.gridTemplateColumns]="'8rem auto'"
                >
                    @if (item()?.authority_id) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'GROUPS.AUTHORITY_ID' | translate }}
                        </div>
                        <a
                            class="text-sm underline"
                            [routerLink]="[
                                '/domains',
                                item()?.authority_id,
                                'about',
                            ]"
                        >
                            {{ authority()?.name || item()?.authority_id }}
                        </a>
                    }
                    @if (item()?.parent_id) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'GROUPS.PARENT_ID' | translate }}
                        </div>
                        <a
                            class="text-sm underline"
                            [routerLink]="[
                                '/groups',
                                item()?.parent_id,
                                'about',
                            ]"
                        >
                            {{ parent()?.name || item()?.parent_id }}
                        </a>
                    }
                    <div class="flex items-center text-sm font-medium">
                        {{ 'GROUPS.SUBSYSTEMS' | translate }}
                    </div>
                    <div class="-mx-1 flex flex-1 flex-wrap">
                        @for (
                            subsystem of item()?.subsystems || [];
                            track subsystem
                        ) {
                            <div
                                class="mono bg-base-200 m-1 h-6 rounded-sm px-2 py-1 text-[0.625rem]"
                            >
                                {{ subsystem }}
                            </div>
                        }
                        @if (!item()?.subsystems?.length) {
                            <span class="opacity-30">{{
                                'GROUPS.SUBSYSTEMS_EMPTY' | translate
                            }}</span>
                        }
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'GROUPS.CHILDREN_COUNT' | translate }}
                    </div>
                    <div>{{ item()?.children_count || 0 }}</div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.CREATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span [matTooltip]="item()?.created_at">
                            {{ created_at() * 1000 | dateFrom }}
                        </span>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span [matTooltip]="item()?.updated_at">
                            {{ updated_at() * 1000 | dateFrom }}
                        </span>
                    </div>
                </div>
            </div>
        </section>
        @if (item()?.description) {
            <div class="border-base-200 w-full rounded-sm border">
                <h3
                    class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                >
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="item()?.description | markdown | async"
                ></div>
            </div>
        }
    `, imports: [
      CommonModule,
      MatTooltipModule,
      TranslatePipe,
      DateFromPipe,
      MarkdownPipe,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/groups/group-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-about.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupAboutComponent, { className: "GroupAboutComponent", filePath: "src/app/groups/group-about.component.ts", lineNumber: 131 });
})();
export {
  GroupAboutComponent
};
//# sourceMappingURL=chunk-KPKFSSQ2.js.map
