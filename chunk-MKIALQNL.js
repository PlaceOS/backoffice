import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-CEGKVDIA.js";
import {
  PlaceDebugService
} from "./chunk-SXPFG754.js";
import {
  CustomTooltipComponent,
  CustomTooltipData
} from "./chunk-2KZMGU2H.js";
import {
  AuthenticatedImageDirective
} from "./chunk-WQDH4FC7.js";
import {
  HotkeysService
} from "./chunk-X6YR5W3O.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-WBQWWT72.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PLD3S2JC.js";
import {
  BackofficeUsersService
} from "./chunk-RAWYI6EY.js";
import {
  SettingsService,
  VERSION
} from "./chunk-IZGR5Z7V.js";
import {
  format
} from "./chunk-ZQ2RL7UU.js";
import {
  AsyncHandler
} from "./chunk-KFG47F7M.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-MB6FY2QK.js";
import {
  MatRippleModule
} from "./chunk-WUACCZF3.js";
import {
  LocaleService,
  TranslatePipe,
  i18n
} from "./chunk-MLPBELPV.js";
import {
  _MatInternalFormField
} from "./chunk-WOZB2ZJ7.js";
import {
  FocusMonitor,
  MatCommonModule,
  MatRipple,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled
} from "./chunk-F4U4NVRY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  FormsModule,
  HostAttributeToken,
  InjectionToken,
  Input,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  Output,
  SlicePipe,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  issueDescription,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-E55B7SJP.js";
import {
  Go,
  Ut
} from "./chunk-WQVS62YG.js";

// src/app/ui/debug-info.component.ts
var _c0 = (a0) => ({ modules: a0 });
var _c1 = (a0) => ({ count: a0 });
function DebugInfoComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 4);
    \u0275\u0275text(3, "bug_report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon", 6);
    \u0275\u0275text(7, "sdk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "icon", 6);
    \u0275\u0275text(13, "business_messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 5, "COMMON.DEBUG_ENABLED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind3(5, 7, "COMMON.DEBUG_LISTENING_MSG", \u0275\u0275pureFunction1(15, _c0, ctx_r0.debug_module_count()), ctx_r0.debug_module_count()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.debug_module_count());
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind3(11, 11, "COMMON.DEBUG_MSG_COUNT_MSG", \u0275\u0275pureFunction1(17, _c1, ctx_r0.debug_message_count()), ctx_r0.debug_message_count()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.debug_message_count());
  }
}
function DebugInfoComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.DEBUG_ENABLED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 5, "COMMON.DEBUG_LISTENING_MSG", \u0275\u0275pureFunction1(13, _c0, ctx_r0.debug_module_count()), ctx_r0.debug_module_count()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 9, "COMMON.DEBUG_MSG_COUNT_MSG", \u0275\u0275pureFunction1(15, _c1, ctx_r0.debug_message_count()), ctx_r0.debug_message_count()), " ");
  }
}
function DebugInfoComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9)(1, "icon");
    \u0275\u0275text(2, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 0)(5, "button", 10);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDebugPosition());
    });
    \u0275\u0275elementStart(6, "icon", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9, "Toggle Position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 10);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearDebugMessages());
    });
    \u0275\u0275elementStart(11, "icon", 4);
    \u0275\u0275text(12, "clear_all");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14, "Clear Messages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 10);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearBindings());
    });
    \u0275\u0275elementStart(16, "icon", 4);
    \u0275\u0275text(17, "hearing_disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19, "Unbind Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 10);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDebug());
    });
    \u0275\u0275elementStart(21, "icon", 4);
    \u0275\u0275text(22, "open_in_browser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24, "Open Console");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r3 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.debug_position() === "side" ? "border_bottom" : "border_right");
  }
}
function DebugInfoComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDebugPosition());
    });
    \u0275\u0275elementStart(2, "icon", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearDebugMessages());
    });
    \u0275\u0275elementStart(5, "icon", 13);
    \u0275\u0275text(6, "clear_all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearBindings());
    });
    \u0275\u0275elementStart(8, "icon", 14);
    \u0275\u0275text(9, "hearing_disabled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDebug());
    });
    \u0275\u0275elementStart(11, "icon", 15);
    \u0275\u0275text(12, "open_in_browser");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.debug_position() === "side" ? "border_bottom" : "border_right");
  }
}
function DebugInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, DebugInfoComponent_Conditional_0_Conditional_1_Template, 16, 19)(2, DebugInfoComponent_Conditional_0_Conditional_2_Template, 9, 17);
    \u0275\u0275conditionalCreate(3, DebugInfoComponent_Conditional_0_Conditional_3_Template, 25, 2)(4, DebugInfoComponent_Conditional_0_Conditional_4_Template, 13, 1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.compact() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.compact() ? 3 : 4);
  }
}
var DebugInfoComponent = class _DebugInfoComponent {
  _debug = inject(PlaceDebugService);
  compact = input(false, ...ngDevMode ? [{ debugName: "compact" }] : []);
  debug_position = this._debug.position;
  debug_enabled = this._debug.enabled;
  debug_module_count = this._debug.module_count;
  debug_message_count = this._debug.event_count;
  toggleDebugPosition() {
    this._debug.position.update((p) => p === "side" ? "below" : "side");
  }
  openDebug() {
    this._debug.is_shown.set(true);
  }
  /** Clear all the debug logs */
  clearDebugMessages() {
    this._debug.clearEvents();
  }
  clearBindings() {
    this._debug.unbindAll();
  }
  static \u0275fac = function DebugInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DebugInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebugInfoComponent, selectors: [["debug-info"]], inputs: { compact: [1, "compact"] }, decls: 1, vars: 1, consts: [["menu", "matMenu"], [1, "border-base-300", "m-2", "flex", "flex-col", "space-y-2", "rounded-xl", "border", "p-2"], ["actions", "", 1, "flex", "items-center", "justify-center", "space-x-2"], ["matTooltipPosition", "right", 1, "bg-info", "text-info-content", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "text-2xl"], ["matTooltipPosition", "right", 1, "relative", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "text-5xl", "opacity-10"], [1, "mono", "bg-info", "text-info-content", "rounded-xl", "p-1", "text-center", "text-xs"], [1, "p-1", "text-center", "text-xs"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-100", "rounded-lg", "border", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["icon", "", "matRipple", "", 1, "bg-base-200", 3, "click"], ["matTooltip", "Toggle Position"], ["matTooltip", "Clear Messages"], ["matTooltip", "Unbind Modules"], ["matTooltip", "Open Console"]], template: function DebugInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DebugInfoComponent_Conditional_0_Template, 5, 2, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.debug_enabled() ? 0 : -1);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugInfoComponent, [{
    type: Component,
    args: [{ selector: "debug-info", template: `
        @if (debug_enabled()) {
            <div
                class="border-base-300 m-2 flex flex-col space-y-2 rounded-xl border p-2"
            >
                @if (compact()) {
                    <div
                        class="bg-info text-info-content flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="'COMMON.DEBUG_ENABLED' | translate"
                        matTooltipPosition="right"
                    >
                        <icon class="text-2xl">bug_report</icon>
                    </div>
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="
                            'COMMON.DEBUG_LISTENING_MSG'
                                | translate
                                    : { modules: debug_module_count() }
                                    : debug_module_count()
                        "
                        matTooltipPosition="right"
                    >
                        <icon
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl opacity-10"
                            >sdk</icon
                        >
                        <div>{{ debug_module_count() }}</div>
                    </div>
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="
                            'COMMON.DEBUG_MSG_COUNT_MSG'
                                | translate
                                    : { count: debug_message_count() }
                                    : debug_message_count()
                        "
                        matTooltipPosition="right"
                    >
                        <icon
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl opacity-10"
                            >business_messages</icon
                        >
                        <div>{{ debug_message_count() }}</div>
                    </div>
                } @else {
                    <div
                        class="mono bg-info text-info-content rounded-xl p-1 text-center text-xs"
                    >
                        {{ 'COMMON.DEBUG_ENABLED' | translate }}
                    </div>
                    <p class="p-1 text-center text-xs">
                        {{
                            'COMMON.DEBUG_LISTENING_MSG'
                                | translate
                                    : { modules: debug_module_count() }
                                    : debug_module_count()
                        }}<br />
                        {{
                            'COMMON.DEBUG_MSG_COUNT_MSG'
                                | translate
                                    : { count: debug_message_count() }
                                    : debug_message_count()
                        }}
                    </p>
                }
                @if (compact()) {
                    <button
                        icon
                        matRipple
                        class="border-base-300 bg-base-100 rounded-lg border"
                        [matMenuTriggerFor]="menu"
                    >
                        <icon>more_horiz</icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item (click)="toggleDebugPosition()">
                            <icon class="text-2xl">{{
                                debug_position() === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</icon>
                            <div>Toggle Position</div>
                        </button>
                        <button mat-menu-item (click)="clearDebugMessages()">
                            <icon class="text-2xl">clear_all</icon>
                            <div>Clear Messages</div>
                        </button>
                        <button mat-menu-item (click)="clearBindings()">
                            <icon class="text-2xl">hearing_disabled</icon>
                            <div>Unbind Modules</div>
                        </button>
                        <button mat-menu-item (click)="openDebug()">
                            <icon class="text-2xl">open_in_browser</icon>
                            <div>Open Console</div>
                        </button>
                    </mat-menu>
                } @else {
                    <div
                        actions
                        class="flex items-center justify-center space-x-2"
                    >
                        <button
                            icon
                            matRipple
                            (click)="toggleDebugPosition()"
                            class="bg-base-200"
                        >
                            <icon matTooltip="Toggle Position">{{
                                debug_position() === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            (click)="clearDebugMessages()"
                            class="bg-base-200"
                        >
                            <icon matTooltip="Clear Messages">clear_all</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            (click)="clearBindings()"
                            class="bg-base-200"
                        >
                            <icon matTooltip="Unbind Modules"
                                >hearing_disabled</icon
                            >
                        </button>
                        <button
                            icon
                            matRipple
                            (click)="openDebug()"
                            class="bg-base-200"
                        >
                            <icon matTooltip="Open Console"
                                >open_in_browser</icon
                            >
                        </button>
                    </div>
                }
            </div>
        }
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      MatMenuModule
    ] }]
  }], null, { compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugInfoComponent, { className: "DebugInfoComponent", filePath: "src/app/ui/debug-info.component.ts", lineNumber: 167 });
})();

// src/app/ui/user-avatar.component.ts
function UserAvatarComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials(), " ");
  }
}
function UserAvatarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.photo_url())("alt", "User avatar");
  }
}
function UserAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserAvatarComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1)(2, UserAvatarComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("user-id", ctx_r0.user().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.photo_url() ? 1 : 2);
  }
}
var UserAvatarComponent = class _UserAvatarComponent {
  user = input(void 0, ...ngDevMode ? [{ debugName: "user" }] : []);
  photo_url = computed(() => {
    const user = this.user();
    return user?.photo || user?.image || "";
  }, ...ngDevMode ? [{ debugName: "photo_url" }] : []);
  initials = computed(() => {
    const user = this.user();
    if (!user)
      return "NA";
    const name = user.name || "";
    const parts = name.replace(/[()[\]\-+=\\/]+/gi, "").split(" ");
    return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : name.slice(0, 2);
  }, ...ngDevMode ? [{ debugName: "initials" }] : []);
  static \u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserAvatarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: [1, "user"] }, decls: 1, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "overflow-hidden", "rounded-full"], ["initials", "", 1, "text-base-content", "text-opacity-80", "uppercase"], ["auth", "", 1, "h-full", "w-full", "object-cover", 3, "source", "alt"]], template: function UserAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserAvatarComponent_Conditional_0_Template, 3, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.user() ? 0 : -1);
    }
  }, dependencies: [AuthenticatedImageDirective], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 2.5em;\n  width: 2.5em;\n  background-color: var(--base-200);\n  overflow: hidden;\n  border: 2px solid var(--base-100);\n}\n.initials[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=user-avatar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{ selector: "a-user-avatar", template: `
        @if (user()) {
            <div
                class="flex items-center justify-center overflow-hidden rounded-full"
                [attr.user-id]="user().id"
            >
                @if (!photo_url()) {
                    <div
                        initials
                        class="text-base-content text-opacity-80 uppercase"
                    >
                        {{ initials() }}
                    </div>
                } @else {
                    <img
                        auth
                        class="h-full w-full object-cover"
                        [source]="photo_url()"
                        [alt]="'User avatar'"
                    />
                }
            </div>
        }
    `, imports: [AuthenticatedImageDirective], styles: ["/* angular:styles/component:css;7e5108eb93cc1b6b75798556330d7fd5cf3da60c87e8ff23e271dab094184f05;/home/runner/work/backoffice/backoffice/src/app/ui/user-avatar.component.ts */\n:host > div {\n  height: 2.5em;\n  width: 2.5em;\n  background-color: var(--base-200);\n  overflow: hidden;\n  border: 2px solid var(--base-100);\n}\n.initials {\n  font-size: 1em;\n}\n/*# sourceMappingURL=user-avatar.component.css.map */\n"] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "src/app/ui/user-avatar.component.ts", lineNumber: 48 });
})();

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c02 = ["switch"];
var _c12 = ["*"];
function MatSlideToggle_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 15);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  /** Unique ID for the label element. */
  _labelId;
  /** Returns the unique id for the visual hidden button. */
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  /** Reference to the MDC switch element. */
  _switchElement;
  /** Focuses the slide-toggle. */
  focus() {
    this._switchElement.nativeElement.focus();
  }
  /** Whether noop animations are enabled. */
  _noopAnimations = _animationsDisabled();
  /** Whether the slide toggle is currently focused. */
  _focused;
  /** Name value will be applied to the input element if present. */
  name = null;
  /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
  id;
  /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
  labelPosition = "after";
  /** Used to set the aria-label attribute on the underlying input element. */
  ariaLabel = null;
  /** Used to set the aria-labelledby attribute on the underlying input element. */
  ariaLabelledby = null;
  /** Used to set the aria-describedby attribute on the underlying input element. */
  ariaDescribedby;
  /** Whether the slide-toggle is required. */
  required;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the slide toggle. This API is supported in M2 themes only,
   * it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slide-toggle/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the slide toggle is disabled. */
  disabled = false;
  /** Whether the slide toggle has a ripple. */
  disableRipple = false;
  /** Tabindex of slide toggle. */
  tabIndex = 0;
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  /** Whether to hide the icon inside of the slide toggle. */
  hideIcon;
  /** Whether the slide toggle should remain interactive when it is disabled. */
  disabledInteractive;
  /** An event will be dispatched each time the slide-toggle changes its value. */
  change = new EventEmitter();
  /**
   * An event will be dispatched each time the slide-toggle input is toggled.
   * This event is always emitted when the user toggles the slide toggle, but this does not mean
   * the slide toggle's value has changed.
   */
  toggleChange = new EventEmitter();
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of Validator. */
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  /** Implemented as a part of Validator. */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  /** Method being called whenever the underlying button is clicked. */
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSlideToggle),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c12,
    decls: 14,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mat-mdc-slide-toggle-touch-target"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleClick());
        });
        \u0275\u0275element(3, "div", 3)(4, "span", 4);
        \u0275\u0275elementStart(5, "span", 5)(6, "span", 6)(7, "span", 7);
        \u0275\u0275element(8, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, MatSlideToggle_Conditional_11_Template, 5, 0, "span", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "label", 12);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275projection(13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(9);
        \u0275\u0275property("matRippleTrigger", switch_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-slide-toggle-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-slide-toggle-touch-target-size, 48px);width:100%;transform:translate(-50%, -50%);display:var(--mat-slide-toggle-touch-target-display, block)}[dir=rtl] .mat-mdc-slide-toggle-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSlideToggle),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <div class="mat-mdc-slide-toggle-touch-target"></div>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-slide-toggle-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-slide-toggle-touch-target-size, 48px);width:100%;transform:translate(-50%, -50%);display:var(--mat-slide-toggle-touch-target-display, block)}[dir=rtl] .mat-mdc-slide-toggle-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle, MatCommonModule],
    exports: [MatSlideToggle, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle, MatCommonModule],
      exports: [MatSlideToggle, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/ui/user-menu-tooltip.component.ts
var _c03 = () => ["/users", "current", "about"];
function UserMenuTooltipComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "icon");
    \u0275\u0275text(2, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const lang_menu_r3 = \u0275\u0275reference(25);
    \u0275\u0275property("matMenuTriggerFor", lang_menu_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "COMMON.LANGUAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_lang.name, " ");
  }
}
function UserMenuTooltipComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function UserMenuTooltipComponent_For_27_Template_button_click_0_listener() {
      const language_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage(language_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const language_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(language_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(language_r5.flag);
  }
}
var UserMenuTooltipComponent = class _UserMenuTooltipComponent {
  _settings = inject(SettingsService);
  _locale = inject(LocaleService);
  /** Whether dark mode is enabled */
  get dark_mode() {
    return this._settings.get("theme") === "dark";
  }
  set dark_mode(state) {
    this._settings.setTheme(state ? "dark" : "light");
  }
  lang = "en";
  languages = [];
  get active_lang() {
    return this.languages.find((_) => _.id === this.lang) || {
      id: "en",
      name: "English"
    };
  }
  get github_link() {
    const title = `Issue on page`;
    const description = issueDescription(VERSION.hash, format(VERSION.time, "dd MMM yyyy, h:mm a"));
    return `https://github.com/PlaceOS/backoffice/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(description)}&labels=bug`;
  }
  ngOnInit() {
    this.lang = this._locale.locale;
    this.languages = [
      { id: "en", name: i18n("COMMON.LANG_ENGLISH"), flag: "\u{1F1EC}\u{1F1E7}" },
      { id: "jp", name: i18n("COMMON.LANG_JAPANESE"), flag: "\u{1F1EF}\u{1F1F5}" },
      { id: "fr", name: i18n("COMMON.LANG_FRENCH"), flag: "\u{1F1EB}\u{1F1F7}" },
      { id: "es", name: i18n("COMMON.LANG_SPANISH"), flag: "\u{1F1EA}\u{1F1F8}" },
      { id: "ar", name: i18n("COMMON.LANG_ARABIC"), flag: "" }
    ];
  }
  setLanguage(lang) {
    this._locale.setLocale(lang);
    localStorage.setItem("BACKOFFICE.locale", lang);
    this.languages = [
      { id: "en", name: i18n("COMMON.LANG_ENGLISH"), flag: "\u{1F1EC}\u{1F1E7}" },
      { id: "jp", name: i18n("COMMON.LANG_JAPANESE"), flag: "\u{1F1EF}\u{1F1F5}" },
      { id: "fr", name: i18n("COMMON.LANG_FRENCH"), flag: "\u{1F1EB}\u{1F1F7}" },
      { id: "es", name: i18n("COMMON.LANG_SPANISH"), flag: "\u{1F1EA}\u{1F1F8}" },
      { id: "ar", name: i18n("COMMON.LANG_ARABIC"), flag: "" }
    ];
    setTimeout(() => location.reload(), 100);
  }
  logout() {
    Go();
  }
  showUploadHistory() {
    this._settings.post("show_upload_manager", true);
  }
  static \u0275fac = function UserMenuTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMenuTooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMenuTooltipComponent, selectors: [["user-menu-tooltip"]], decls: 33, vars: 24, consts: [["lang_menu", "matMenu"], [1, "divide-base-200", "border-base-300", "bg-base-100", "m-2", "divide-y", "rounded-sm", "border", "shadow-sm"], ["matRipple", "", "type", "button", "profile", "", 1, "space-x-2", 3, "routerLink"], ["dark-mode", "", 1, "flex", "w-[16rem]", "items-center", "p-4"], [1, "w-1/2", "flex-1"], [3, "ngModelChange", "ngModel"], ["matRipple", "", "type", "button", "logout", "", 1, "space-x-2", 3, "click"], ["matRipple", "", "type", "button", "uploads", "", 1, "space-x-2", 3, "click"], ["matRipple", "", "type", "button", 3, "matMenuTriggerFor"], ["xPosition", "after", "yPosition", "above"], ["mat-menu-item", "", 1, "w-60"], ["matRipple", "", "type", "button", "target", "_blank", "ref", "noopener noreferer", "report", "", 1, "space-x-2", 3, "href"], [3, "className"], [1, "flex-1", "text-left"], [1, "bg-base-200", "max-w-24", "truncate", "rounded-sm", "px-2", "py-1", "text-sm"], ["mat-menu-item", "", 1, "w-60", 3, "click"], [1, "flex", "w-full", "items-center", "justify-between", "space-x-4"]], template: function UserMenuTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "a", 2)(2, "icon");
      \u0275\u0275text(3, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "icon");
      \u0275\u0275text(8, "dark_mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 4);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-slide-toggle", 5);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenuTooltipComponent_Template_mat_slide_toggle_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dark_mode, $event) || (ctx.dark_mode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 6);
      \u0275\u0275listener("click", function UserMenuTooltipComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275elementStart(14, "icon");
      \u0275\u0275text(15, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 7);
      \u0275\u0275listener("click", function UserMenuTooltipComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showUploadHistory());
      });
      \u0275\u0275elementStart(19, "icon");
      \u0275\u0275text(20, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, UserMenuTooltipComponent_Conditional_23_Template, 8, 5, "button", 8);
      \u0275\u0275elementStart(24, "mat-menu", 9, 0);
      \u0275\u0275repeaterCreate(26, UserMenuTooltipComponent_For_27_Template, 6, 2, "button", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 11);
      \u0275\u0275pipe(29, "safe");
      \u0275\u0275element(30, "icon", 12);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c03));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "COMMON.PROFILE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "COMMON.DARK_MODE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.dark_mode);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "COMMON.LOGOUT"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 16, "COMMON.UPLOAD_HISTORY"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.languages.length > 1 ? 23 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.languages);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", \u0275\u0275pipeBind2(29, 18, ctx.github_link, "url"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("className", "backoffice-github");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 21, "COMMON.REPORT_ISSUE"), " ");
    }
  }, dependencies: [
    IconComponent,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatRippleModule,
    MatRipple,
    MatSlideToggleModule,
    MatSlideToggle,
    RouterModule,
    RouterLink,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    SafePipe
  ], styles: ["\n\n[type=button][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 16rem;\n}\n[type=button][_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\nicon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=user-menu-tooltip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMenuTooltipComponent, [{
    type: Component,
    args: [{ selector: "user-menu-tooltip", template: `
        <div
            class="divide-base-200 border-base-300 bg-base-100 m-2 divide-y rounded-sm border shadow-sm"
        >
            <a
                matRipple
                type="button"
                profile
                [routerLink]="['/users', 'current', 'about']"
                class="space-x-2"
            >
                <icon>person</icon>
                {{ 'COMMON.PROFILE' | translate }}
            </a>
            <div dark-mode class="flex w-[16rem] items-center p-4">
                <icon>dark_mode</icon>
                <p class="w-1/2 flex-1">
                    {{ 'COMMON.DARK_MODE' | translate }}
                </p>
                <mat-slide-toggle [(ngModel)]="dark_mode"></mat-slide-toggle>
            </div>
            <button
                matRipple
                type="button"
                logout
                class="space-x-2"
                (click)="logout()"
            >
                <icon>logout</icon>
                {{ 'COMMON.LOGOUT' | translate }}
            </button>
            <button
                matRipple
                type="button"
                class="space-x-2"
                uploads
                (click)="showUploadHistory()"
            >
                <icon>schedule</icon>
                {{ 'COMMON.UPLOAD_HISTORY' | translate }}
            </button>
            @if (languages.length > 1) {
                <button matRipple type="button" [matMenuTriggerFor]="lang_menu">
                    <icon>language</icon>
                    <div class="flex-1 text-left">
                        {{ 'COMMON.LANGUAGE' | translate }}
                    </div>
                    <div
                        class="bg-base-200 max-w-24 truncate rounded-sm px-2 py-1 text-sm"
                    >
                        {{ active_lang.name }}
                    </div>
                </button>
            }
            <mat-menu #lang_menu="matMenu" xPosition="after" yPosition="above">
                @for (language of languages; track language) {
                    <button
                        mat-menu-item
                        class="w-60"
                        (click)="setLanguage(language.id)"
                    >
                        <div
                            class="flex w-full items-center justify-between space-x-4"
                        >
                            <div>{{ language.name }}</div>
                            <div>{{ language.flag }}</div>
                        </div>
                    </button>
                }
            </mat-menu>
            <a
                matRipple
                type="button"
                target="_blank"
                ref="noopener noreferer"
                report
                [href]="github_link | safe: 'url'"
                class="space-x-2"
            >
                <icon [className]="'backoffice-github'"></icon>
                {{ 'COMMON.REPORT_ISSUE' | translate }}
            </a>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatMenuModule,
      MatRippleModule,
      MatSlideToggleModule,
      RouterModule,
      SafePipe,
      FormsModule
    ], styles: ["/* angular:styles/component:css;5a74082793953c2898affc99f062b8b22218fe62ef747e5fc5b0ce01a6246d9b;/home/runner/work/backoffice/backoffice/src/app/ui/user-menu-tooltip.component.ts */\n[type=button] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 16rem;\n}\n[type=button]:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\nicon {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=user-menu-tooltip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMenuTooltipComponent, { className: "UserMenuTooltipComponent", filePath: "src/app/ui/user-menu-tooltip.component.ts", lineNumber: 132 });
})();

// src/app/ui/sidebar-menu.component.ts
var _c04 = () => ["/"];
var _c13 = (a0) => [a0];
function SidebarMenuComponent_For_10_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 16)(3, "icon", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", link_r1.external(), \u0275\u0275sanitizeUrl)("matTooltip", ctx_r1.compact() ? \u0275\u0275pipeBind1(1, 12, link_r1.name) : "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sm:justify-center", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:text-2xl", ctx_r1.compact())("sm:mx-auto", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, link_r1.name), " ");
  }
}
function SidebarMenuComponent_For_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 16)(3, "icon", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c13, link_r1.route))("matTooltip", ctx_r1.compact() ? \u0275\u0275pipeBind1(1, 12, link_r1.name) : "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sm:justify-center", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:text-2xl", ctx_r1.compact())("sm:mx-auto", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, link_r1.name), " ");
  }
}
function SidebarMenuComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarMenuComponent_For_10_Conditional_0_Conditional_0_Template, 8, 16, "a", 14)(1, SidebarMenuComponent_For_10_Conditional_0_Conditional_1_Template, 8, 18, "a", 15);
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(link_r1.external ? 0 : 1);
  }
}
function SidebarMenuComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarMenuComponent_For_10_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275conditional(!link_r1.show_on || link_r1.show_on() ? 0 : -1);
  }
}
var SidebarMenuComponent = class _SidebarMenuComponent extends AsyncHandler {
  _tooltip = inject(CustomTooltipData, { optional: true });
  _settings = inject(SettingsService);
  _users = inject(BackofficeUsersService);
  _hotkey = inject(HotkeysService);
  _router = inject(Router);
  open = model(true, ...ngDevMode ? [{ debugName: "open" }] : []);
  compact = signal(false, ...ngDevMode ? [{ debugName: "compact" }] : []);
  user_controls = UserMenuTooltipComponent;
  links = [
    { name: "COMMON.SYSTEMS", route: "/systems", icon: "meeting_room" },
    { name: "COMMON.MODULES", route: "/modules", icon: "tablet" },
    { name: "COMMON.ZONES", route: "/zones", icon: "meeting_room" },
    { name: "COMMON.DRIVERS", route: "/drivers", icon: "construction" },
    { name: "COMMON.REPOS", route: "/repositories", icon: "inventory_2" },
    { name: "COMMON.TRIGGERS", route: "/triggers", icon: "timer" },
    {
      name: "COMMON.ALERTS",
      icon: "notifications_active",
      show_on: () => !!this.alerts_url,
      external: () => this.alerts_url
    },
    {
      name: "COMMON.METRICS",
      icon: "monitoring",
      show_on: () => !!this.metrics_url,
      external: () => this.metrics_url
    },
    {
      name: "COMMON.USERS",
      route: "/users",
      icon: "group",
      show_on: () => this.is_support || this.is_admin
    },
    {
      name: "COMMON.DOMAINS",
      route: "/domains",
      icon: "domain",
      show_on: () => this.is_admin
    },
    {
      name: "COMMON.MANAGE",
      route: "/admin",
      icon: "settings",
      show_on: () => this.is_admin
    }
  ];
  /** Application logo */
  get logo() {
    return this._settings.get("app.logo_light");
  }
  /** List of available menu items for the application */
  get user() {
    return this._users.current();
  }
  get is_admin() {
    return this._users.current().sys_admin;
  }
  get is_support() {
    return this._users.current().support;
  }
  get alerts_url() {
    return Ut()?.config?.backoffice?.alerts_url;
  }
  get metrics_url() {
    return Ut()?.config?.backoffice?.metrics_url;
  }
  close = () => this._tooltip?.close();
  toggleCompactMode() {
    this.compact.update((s) => !s);
    localStorage.setItem("BACKOFFICE.SIDEBAR_COMPACT", `${this.compact()}`);
  }
  ngOnInit() {
    this.subscription("up", this._hotkey.listen(["Control", "Shift", "ArrowUp"], () => this.changeSelected(-1)));
    this.subscription("down", this._hotkey.listen(["Control", "Shift", "ArrowDown"], () => this.changeSelected(1)));
    this.compact.set(localStorage.getItem("BACKOFFICE.SIDEBAR_COMPACT") === "true");
  }
  changeSelected(_offset = 1) {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SidebarMenuComponent_BaseFactory;
    return function SidebarMenuComponent_Factory(__ngFactoryType__) {
      return (\u0275SidebarMenuComponent_BaseFactory || (\u0275SidebarMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SidebarMenuComponent)))(__ngFactoryType__ || _SidebarMenuComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarMenuComponent, selectors: [["sidebar-menu"]], inputs: { open: [1, "open"] }, outputs: { open: "openChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 29, consts: [["sidebar-menu", "", 1, "bg-base-200", "pointer-events-none", "absolute", "inset-0", "z-40", "hidden", "h-full", "flex-col", "justify-between", "sm:pointer-events-auto", "sm:relative", "sm:inset-auto", "sm:z-10", "sm:flex", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col", "items-center", "space-y-2"], [1, "font-heading", "mt-4", "ml-16", "text-4xl", "sm:mb-2", "sm:ml-0", 3, "routerLink"], [1, "font-heading", "text-primary"], ["src", "assets/icon/mstile-310x310.png", "alt", "PlaceOS logo", 1, "hidden", "h-12", "w-12"], [1, "w-full", "flex-1", "space-y-2", "overflow-auto", "pb-2"], ["icon", "", "matRipple", "", 1, "absolute", "top-1", "left-1", "sm:hidden", 3, "click"], [3, "compact"], ["matRipple", "", "customTooltip", "", "user", "", "yPosition", "bottom", "xPosition", "start", 1, "border-base-300", "flex", "min-h-16", "items-center", "space-x-2", "border-t", "p-2", "text-left", 3, "content"], ["matTooltipPosition", "right", 3, "user", "matTooltip"], [1, "flex", "w-1/2", "flex-1", "flex-col", "leading-tight"], [1, "w-full", "truncate"], [1, "w-full", "truncate", "text-xs", "opacity-30"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "absolute", "right-0", "bottom-12", "z-999", "hidden", "h-6", "w-6", "min-w-6", "translate-x-1/2", "rounded-full", "border", "shadow-sm", "sm:flex", 3, "click"], ["btn", "", "link", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", "matTooltipPosition", "right", 1, "clear", "hover:bg-base-100", "mx-auto", "w-[calc(100%-1rem)]", "text-left", 3, "href", "matTooltip"], ["btn", "", "link", "", "matRipple", "", "routerLinkActive", "bg-secondary! text-secondary-content", "matTooltipPosition", "right", 1, "clear", "hover:bg-base-100", "mx-auto", "w-[calc(100%-1rem)]", "text-left", 3, "routerLink", "matTooltip"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "text-xl"]], template: function SidebarMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "a", 2)(3, "div");
      \u0275\u0275text(4, " Place");
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "OS");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275repeaterCreate(9, SidebarMenuComponent_For_10_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_button_click_11_listener() {
        return ctx.open.set(false);
      });
      \u0275\u0275elementStart(12, "icon");
      \u0275\u0275text(13, "close");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(14, "debug-info", 7);
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275element(16, "a-user-avatar", 9);
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 11);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "button", 13);
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_button_click_23_listener() {
        return ctx.toggleCompactMode();
      });
      \u0275\u0275elementStart(24, "icon");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("compact", ctx.compact())("sm:w-52", !ctx.compact())("!flex", ctx.open())("pointer-events-auto!", ctx.open());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.compact() ? "auto" : "calc(100%-2rem)");
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c04));
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:hidden", ctx.compact());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("sm:block", ctx.compact());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.links);
      \u0275\u0275advance(5);
      \u0275\u0275property("compact", ctx.compact());
      \u0275\u0275advance();
      \u0275\u0275property("content", ctx.user_controls);
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:pl-2", ctx.compact());
      \u0275\u0275property("user", ctx.user)("matTooltip", ctx.compact() ? ctx.user == null ? null : ctx.user.name : "");
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:hidden", ctx.compact());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 26, (ctx.user == null ? null : ctx.user.sys_admin) ? "COMMON.USER_ADMIN" : (ctx.user == null ? null : ctx.user.support) ? "COMMON.USER_SUPPORT" : "COMMON.USER_BASIC"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.compact() ? "chevron_right" : "chevron_left", " ");
    }
  }, dependencies: [
    IconComponent,
    UserAvatarComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    CustomTooltipComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    DebugInfoComponent,
    TranslatePipe
  ], styles: ["\n\n[sidebar-menu][_ngcontent-%COMP%] {\n  transition: width 200ms;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\n@media screen and (min-width: 512px) {\n  .compact[_ngcontent-%COMP%] {\n    width: 4.5rem;\n  }\n}\n/*# sourceMappingURL=sidebar-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarMenuComponent, [{
    type: Component,
    args: [{ selector: "sidebar-menu", template: `
        <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
        <div
            sidebar-menu
            class="bg-base-200 pointer-events-none absolute inset-0 z-40 hidden h-full flex-col justify-between sm:pointer-events-auto sm:relative sm:inset-auto sm:z-10 sm:flex"
            [class.compact]="compact()"
            [class.sm:w-52]="!compact()"
            [class.!flex]="open()"
            [class.pointer-events-auto!]="open()"
            (click)="close()"
        >
            <div class="flex h-1/2 flex-1 flex-col items-center space-y-2">
                <a
                    [routerLink]="['/']"
                    class="font-heading mt-4 ml-16 text-4xl sm:mb-2 sm:ml-0"
                    [style.width]="compact() ? 'auto' : 'calc(100%-2rem)'"
                >
                    <div [class.sm:hidden]="compact()">
                        Place<span class="font-heading text-primary">OS</span>
                    </div>
                    <img
                        src="assets/icon/mstile-310x310.png"
                        class="hidden h-12 w-12"
                        [class.sm:block]="compact()"
                        alt="PlaceOS logo"
                    />
                </a>
                <div class="w-full flex-1 space-y-2 overflow-auto pb-2">
                    @for (link of links; track $index) {
                        @if (!link.show_on || link.show_on()) {
                            @if (link.external) {
                                <a
                                    btn
                                    link
                                    matRipple
                                    class="clear hover:bg-base-100 mx-auto w-[calc(100%-1rem)] text-left"
                                    [href]="link.external()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    [matTooltip]="
                                        compact() ? (link.name | translate) : ''
                                    "
                                    matTooltipPosition="right"
                                >
                                    <div
                                        class="flex w-full items-center space-x-2"
                                        [class.sm:justify-center]="compact()"
                                    >
                                        <icon
                                            class="text-xl"
                                            [class.sm:text-2xl]="compact()"
                                            [class.sm:mx-auto]="compact()"
                                            >{{ link.icon }}</icon
                                        >
                                        <p [class.sm:hidden]="compact()">
                                            {{ link.name | translate }}
                                        </p>
                                    </div>
                                </a>
                            } @else {
                                <a
                                    btn
                                    link
                                    matRipple
                                    class="clear hover:bg-base-100 mx-auto w-[calc(100%-1rem)] text-left"
                                    [routerLink]="[link.route]"
                                    routerLinkActive="bg-secondary! text-secondary-content"
                                    [matTooltip]="
                                        compact() ? (link.name | translate) : ''
                                    "
                                    matTooltipPosition="right"
                                >
                                    <div
                                        class="flex w-full items-center space-x-2"
                                        [class.sm:justify-center]="compact()"
                                    >
                                        <icon
                                            class="text-xl"
                                            [class.sm:text-2xl]="compact()"
                                            [class.sm:mx-auto]="compact()"
                                            >{{ link.icon }}</icon
                                        >
                                        <p [class.sm:hidden]="compact()">
                                            {{ link.name | translate }}
                                        </p>
                                    </div>
                                </a>
                            }
                        }
                    }
                    <button
                        class="absolute top-1 left-1 sm:hidden"
                        icon
                        matRipple
                        (click)="open.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            </div>
            <debug-info [compact]="compact()" />
            <button
                matRipple
                class="border-base-300 flex min-h-16 items-center space-x-2 border-t p-2 text-left"
                customTooltip
                user
                [content]="user_controls"
                yPosition="bottom"
                xPosition="start"
            >
                <a-user-avatar
                    [user]="user"
                    [class.sm:pl-2]="compact()"
                    [matTooltip]="compact() ? user?.name : ''"
                    matTooltipPosition="right"
                ></a-user-avatar>
                <div
                    class="flex w-1/2 flex-1 flex-col leading-tight"
                    [class.sm:hidden]="compact()"
                >
                    <div class="w-full truncate">{{ user?.name }}</div>
                    <div class="w-full truncate text-xs opacity-30">
                        {{
                            (user?.sys_admin
                                ? 'COMMON.USER_ADMIN'
                                : user?.support
                                  ? 'COMMON.USER_SUPPORT'
                                  : 'COMMON.USER_BASIC'
                            ) | translate
                        }}
                    </div>
                </div>
            </button>
            <button
                icon
                matRipple
                class="border-base-200 bg-base-100 hover:bg-base-200 absolute right-0 bottom-12 z-999 hidden h-6 w-6 min-w-6 translate-x-1/2 rounded-full border shadow-sm sm:flex"
                (click)="toggleCompactMode()"
            >
                <icon>
                    {{ compact() ? 'chevron_right' : 'chevron_left' }}
                </icon>
            </button>
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      UserAvatarComponent,
      MatRippleModule,
      MatTooltipModule,
      CustomTooltipComponent,
      RouterModule,
      DebugInfoComponent
    ], styles: ["/* angular:styles/component:css;3d279d646b35e672e2b8e6ef5d55f533fac4601c8f33a2be8bb9af4e2f3a813d;/home/runner/work/backoffice/backoffice/src/app/ui/sidebar-menu.component.ts */\n[sidebar-menu] {\n  transition: width 200ms;\n}\n.active {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\n@media screen and (min-width: 512px) {\n  .compact {\n    width: 4.5rem;\n  }\n}\n/*# sourceMappingURL=sidebar-menu.component.css.map */\n"] }]
  }], null, { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarMenuComponent, { className: "SidebarMenuComponent", filePath: "src/app/ui/sidebar-menu.component.ts", lineNumber: 198 });
})();

// src/app/ui/virtual-scroll.component.ts
var _c05 = ["scroll_container"];
var _c14 = ["*"];
var _c2 = (a0, a1) => ({ item: a0, index: a1 });
function _forTrack0($index, $item) {
  return $index + this.offset_start();
}
function VirtualScrollComponent_For_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VirtualScrollComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, VirtualScrollComponent_For_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_5_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", (ctx_r3.offset_start() + \u0275$index_5_r3) * ctx_r3.item_size() + "px");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.item_template())("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c2, item_r2, ctx_r3.offset_start() + \u0275$index_5_r3));
  }
}
var VirtualScrollComponent = class _VirtualScrollComponent {
  items = input([], ...ngDevMode ? [{ debugName: "items" }] : []);
  item_size = input(0, ...ngDevMode ? [{ debugName: "item_size" }] : []);
  item_template = input(null, ...ngDevMode ? [{ debugName: "item_template" }] : []);
  buffer = input(2, ...ngDevMode ? [{ debugName: "buffer" }] : []);
  scrolled = output();
  range = signal(0, ...ngDevMode ? [{ debugName: "range" }] : []);
  offset = signal(0, ...ngDevMode ? [{ debugName: "offset" }] : []);
  extra_height = signal(0, ...ngDevMode ? [{ debugName: "extra_height" }] : []);
  offset_start = computed(() => Math.max(this.offset() - this.buffer(), 0), ...ngDevMode ? [{ debugName: "offset_start" }] : []);
  offset_end = computed(() => this.offset_start() + (this.range() + 2 * (this.buffer() || 2)), ...ngDevMode ? [{ debugName: "offset_end" }] : []);
  scroll_area = computed(() => this.items().length * this.item_size() + this.extra_height(), ...ngDevMode ? [{ debugName: "scroll_area" }] : []);
  _el = inject(ElementRef);
  _scroll_container_el = viewChild("scroll_container", ...ngDevMode ? [{ debugName: "_scroll_container_el" }] : []);
  _resize_observer;
  ngAfterViewInit() {
    this.updateContainer();
    this._resize_observer = new ResizeObserver(() => this.updateContainer());
    this._resize_observer.observe(this._el.nativeElement);
  }
  ngOnDestroy() {
    this._resize_observer?.disconnect();
  }
  updateOffsets() {
    const el = this._scroll_container_el()?.nativeElement;
    if (!el)
      return;
    const scroll_top = el.scrollTop;
    this.offset.set(Math.floor(scroll_top / this.item_size()));
    this.scrolled.emit([this.offset(), this.offset() + this.range()]);
  }
  updateContainer() {
    const el = this._el?.nativeElement;
    if (!el)
      return;
    const box = el.getBoundingClientRect();
    this.range.set(Math.ceil(box.height / this.item_size()));
  }
  scrollToIndex(index) {
    const el = this._scroll_container_el()?.nativeElement;
    if (!el)
      return;
    el.scrollTop = index * this.item_size();
    this.updateOffsets();
  }
  static \u0275fac = function VirtualScrollComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VirtualScrollComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VirtualScrollComponent, selectors: [["virtual-scroll"]], viewQuery: function VirtualScrollComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._scroll_container_el, _c05, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { items: [1, "items"], item_size: [1, "item_size"], item_template: [1, "item_template"], buffer: [1, "buffer"] }, outputs: { scrolled: "scrolled" }, ngContentSelectors: _c14, decls: 7, vars: 6, consts: [["scroll_container", ""], [1, "relative", "h-full", "w-full", "overflow-auto", 3, "scroll"], ["scroll-fill", "", 1, "w-full"], [1, "absolute", "w-full", 3, "top"], [1, "absolute", "w-full"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function VirtualScrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275listener("scroll", function VirtualScrollComponent_Template_div_scroll_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateOffsets());
      });
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275repeaterCreate(3, VirtualScrollComponent_For_4_Template, 2, 7, "div", 3, _forTrack0, true);
      \u0275\u0275pipe(5, "slice");
      \u0275\u0275projection(6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.scroll_area() + "px");
      \u0275\u0275advance();
      \u0275\u0275repeater(\u0275\u0275pipeBind3(5, 2, ctx.items(), ctx.offset_start(), ctx.offset_end()));
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, SlicePipe], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=virtual-scroll.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualScrollComponent, [{
    type: Component,
    args: [{ selector: "virtual-scroll", template: `
        <div
            #scroll_container
            class="relative h-full w-full overflow-auto"
            (scroll)="updateOffsets()"
        >
            <div
                scroll-fill
                class="w-full"
                [style.height]="scroll_area() + 'px'"
            ></div>
            @for (
                item of items() | slice: offset_start() : offset_end();
                track $index + offset_start();
                let i = $index
            ) {
                <div
                    class="absolute w-full"
                    [style.top]="(offset_start() + i) * item_size() + 'px'"
                >
                    <ng-container
                        *ngTemplateOutlet="
                            item_template();
                            context: { item, index: offset_start() + i }
                        "
                    />
                </div>
            }
            <ng-content />
        </div>
    `, imports: [CommonModule], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/ui/virtual-scroll.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=virtual-scroll.component.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], item_size: [{ type: Input, args: [{ isSignal: true, alias: "item_size", required: false }] }], item_template: [{ type: Input, args: [{ isSignal: true, alias: "item_template", required: false }] }], buffer: [{ type: Input, args: [{ isSignal: true, alias: "buffer", required: false }] }], scrolled: [{ type: Output, args: ["scrolled"] }], _scroll_container_el: [{ type: ViewChild, args: ["scroll_container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VirtualScrollComponent, { className: "VirtualScrollComponent", filePath: "src/app/ui/virtual-scroll.component.ts", lineNumber: 59 });
})();

export {
  VirtualScrollComponent,
  SidebarMenuComponent
};
//# sourceMappingURL=chunk-MKIALQNL.js.map
