import {
  GroupStateService
} from "./chunk-SJAWYTXV.js";
import "./chunk-Z6JLRAVM.js";
import {
  MarkdownPipe
} from "./chunk-CTVXHBIB.js";
import "./chunk-KIRZ4KU5.js";
import "./chunk-R3PV7UT4.js";
import "./chunk-Z4RGDELG.js";
import "./chunk-7PBGQ5GJ.js";
import "./chunk-T5MLCJBV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-UFM5XQJE.js";
import "./chunk-FQQU2C6T.js";
import "./chunk-NRO2XDNU.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-TWCYY2HH.js";
import {
  groupPermissionLabels
} from "./chunk-YCZJQIA3.js";
import {
  toSignal
} from "./chunk-G5DVCCF5.js";
import {
  DateFromPipe
} from "./chunk-DKGRO6E2.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YZFSOCDR.js";
import "./chunk-DG5F5M2I.js";
import "./chunk-FDG4YB46.js";
import "./chunk-VZ4JF2ZJ.js";
import "./chunk-4MSIA662.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-RFD5AOWN.js";
import "./chunk-WSH7C5JM.js";
import "./chunk-M2O6T64P.js";
import "./chunk-G3IJGLD4.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-SDGTGI2H.js";
import "./chunk-66VCHSRY.js";
import "./chunk-S3MO7QJA.js";
import "./chunk-HS6BVHDB.js";
import "./chunk-XMG57YWH.js";
import "./chunk-W6NODITO.js";
import "./chunk-PNGPFML7.js";
import "./chunk-4G55JYYO.js";
import {
  TranslatePipe
} from "./chunk-ETRW4JH6.js";
import "./chunk-MKMIAR67.js";
import {
  AsyncPipe
} from "./chunk-IWUSEH7D.js";
import {
  Component,
  Qo,
  Ru,
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
} from "./chunk-M2N6S2L7.js";
import "./chunk-RQBZITXC.js";

// src/app/groups/group-about.component.ts
var _c0 = () => [];
var _c1 = (a0) => ["/domains", a0, "about"];
var _c2 = (a0) => ["/groups", a0, "about"];
var _forTrack0 = ($index, $item) => $item.id;
function GroupAboutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "GROUPS.AUTHORITY_ID"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, ctx_r0.item()?.authority_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.authority()?.name || ctx_r0.item()?.authority_id, " ");
  }
}
function GroupAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "GROUPS.PARENT_ID"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c2, ctx_r0.item()?.parent_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.parent()?.name || ctx_r0.item()?.parent_id, " ");
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
function GroupAboutComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, label_r3), " ");
  }
}
function GroupAboutComponent_ForEmpty_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.NONE"));
  }
}
function GroupAboutComponent_For_24_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, label_r4), " ");
  }
}
function GroupAboutComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, GroupAboutComponent_For_24_For_6_Template, 3, 3, "span", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_group_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ad_group_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ad_group_r5.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.permissionLabels(ad_group_r5.permissions));
  }
}
function GroupAboutComponent_ForEmpty_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "GROUPS.AD_GROUPS_EMPTY"));
  }
}
function GroupAboutComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 19);
    \u0275\u0275pipe(5, "markdown");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 6, \u0275\u0275pipeBind1(5, 4, ctx_r0.item()?.description)), \u0275\u0275sanitizeHtml);
  }
}
var GroupAboutComponent = class _GroupAboutComponent {
  _service = inject(GroupStateService);
  item = toSignal(this._service.item, {
    initialValue: null
  });
  parent = signal(
    null,
    ...ngDevMode ? [{ debugName: "parent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  authority = signal(
    null,
    ...ngDevMode ? [{ debugName: "authority" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissionLabels = groupPermissionLabels;
  ad_groups = computed(
    () => Object.entries(this.item()?.ad_group_mappings || {}).map(([id, [name, permissions]]) => ({ id, name, permissions })),
    ...ngDevMode ? [{ debugName: "ad_groups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  created_at = computed(
    () => Date.parse(this.item()?.created_at || "") / 1e3,
    ...ngDevMode ? [{ debugName: "created_at" }] : (
      /* istanbul ignore next */
      []
    )
  );
  updated_at = computed(
    () => Date.parse(this.item()?.updated_at || "") / 1e3,
    ...ngDevMode ? [{ debugName: "updated_at" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
    const authority = await Qo(authority_id).catch(() => null);
    if (this.item()?.authority_id === authority_id) {
      this.authority.set(authority);
    }
  }
  async loadParent(parent_id) {
    const parent = await Ru(parent_id).catch(() => null);
    if (this.item()?.parent_id === parent_id)
      this.parent.set(parent);
  }
  static \u0275fac = function GroupAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupAboutComponent, selectors: [["group-about"]], decls: 46, vars: 36, consts: [[1, "mb-4", "flex", "flex-col", "gap-4", "p-4", "md:flex-row"], [1, "w-full"], [1, "border-base-200", "grid", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "-mx-1", "flex", "flex-1", "flex-wrap"], [1, "mono", "bg-base-200", "m-1", "h-6", "rounded-sm", "px-2", "py-1", "text-[0.625rem]", "select-text"], [1, "opacity-30"], [1, "bg-base-200", "m-1", "rounded", "px-2", "py-1", "text-xs"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "flex-wrap", "items-center", "gap-1"], [1, "select-text"], [1, "flex", "items-center"], [1, "select-text", 3, "matTooltip"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "text-sm", "underline", "select-text", 3, "routerLink"], [1, "text-sm", "select-text"], [1, "mono", "text-xs", "opacity-30", "select-text"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"]], template: function GroupAboutComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(15, "div", 4);
      \u0275\u0275repeaterCreate(16, GroupAboutComponent_For_17_Template, 3, 3, "span", 7, \u0275\u0275repeaterTrackByIdentity, false, GroupAboutComponent_ForEmpty_18_Template, 3, 3, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 3);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8);
      \u0275\u0275repeaterCreate(23, GroupAboutComponent_For_24_Template, 7, 2, "div", 9, _forTrack0, false, GroupAboutComponent_ForEmpty_25_Template, 3, 3, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 3);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 10);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 3);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 11)(35, "span", 12);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 3);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 11)(42, "span", 12);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "dateFrom");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(45, GroupAboutComponent_Conditional_45_Template, 7, 8, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "10rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.authority_id ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.parent_id ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 19, "GROUPS.SUBSYSTEMS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.item()?.subsystems || \u0275\u0275pureFunction0(35, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.item()?.subsystems?.length ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 21, "GROUPS.DEFAULT_PERMISSIONS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.permissionLabels(ctx.item()?.default_permissions || 0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 23, "GROUPS.AD_GROUPS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.ad_groups());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 25, "GROUPS.CHILDREN_COUNT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item()?.children_count || 0, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 27, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item()?.created_at);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 29, ctx.created_at() * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 31, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item()?.updated_at);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 33, ctx.updated_at() * 1e3), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item()?.description ? 45 : -1);
    }
  }, dependencies: [
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterLink,
    TranslatePipe,
    DateFromPipe,
    MarkdownPipe,
    AsyncPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupAboutComponent, [{
    type: Component,
    args: [{ selector: "group-about", template: `
        <section class="mb-4 flex flex-col gap-4 p-4 md:flex-row">
            <div class="w-full">
                <div
                    class="border-base-200 grid gap-2 rounded-sm border p-4"
                    [style.gridTemplateColumns]="'10rem auto'"
                >
                    @if (item()?.authority_id) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'GROUPS.AUTHORITY_ID' | translate }}
                        </div>
                        <a
                            class="text-sm underline select-text"
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
                            class="text-sm underline select-text"
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
                                class="mono bg-base-200 m-1 h-6 rounded-sm px-2 py-1 text-[0.625rem] select-text"
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
                        {{ 'GROUPS.DEFAULT_PERMISSIONS' | translate }}
                    </div>
                    <div class="-mx-1 flex flex-1 flex-wrap">
                        @for (
                            label of permissionLabels(
                                item()?.default_permissions || 0
                            );
                            track label
                        ) {
                            <span
                                class="bg-base-200 m-1 rounded px-2 py-1 text-xs"
                            >
                                {{ label | translate }}
                            </span>
                        } @empty {
                            <span class="opacity-30">{{
                                'COMMON.NONE' | translate
                            }}</span>
                        }
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'GROUPS.AD_GROUPS' | translate }}
                    </div>
                    <div class="flex flex-col gap-1">
                        @for (ad_group of ad_groups(); track ad_group.id) {
                            <div class="flex flex-wrap items-center gap-1">
                                <span class="text-sm select-text">
                                    {{ ad_group.name }}
                                </span>
                                <span
                                    class="mono text-xs opacity-30 select-text"
                                >
                                    {{ ad_group.id }}
                                </span>
                                @for (
                                    label of permissionLabels(
                                        ad_group.permissions
                                    );
                                    track label
                                ) {
                                    <span
                                        class="bg-base-200 rounded px-2 py-1 text-xs"
                                    >
                                        {{ label | translate }}
                                    </span>
                                }
                            </div>
                        } @empty {
                            <span class="opacity-30">{{
                                'GROUPS.AD_GROUPS_EMPTY' | translate
                            }}</span>
                        }
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'GROUPS.CHILDREN_COUNT' | translate }}
                    </div>
                    <div class="select-text">
                        {{ item()?.children_count || 0 }}
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.CREATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            class="select-text"
                            [matTooltip]="item()?.created_at"
                        >
                            {{ created_at() * 1000 | dateFrom }}
                        </span>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            class="select-text"
                            [matTooltip]="item()?.updated_at"
                        >
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
                    class="markdown selectable w-full overflow-auto p-4 text-sm"
                    [innerHTML]="item()?.description | markdown | async"
                ></div>
            </div>
        }
    `, imports: [
      MatTooltipModule,
      TranslatePipe,
      DateFromPipe,
      MarkdownPipe,
      RouterModule,
      AsyncPipe
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/groups/group-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-about.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupAboutComponent, { className: "GroupAboutComponent", filePath: "src/app/groups/group-about.component.ts", lineNumber: 193 });
})();
export {
  GroupAboutComponent
};
//# sourceMappingURL=chunk-CVPDYWSJ.js.map
