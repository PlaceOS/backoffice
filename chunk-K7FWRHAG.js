import {
  SettingsService
} from "./chunk-YQJVG7MY.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-4CBXDUSX.js";
import {
  TranslatePipe
} from "./chunk-5DKHD7PA.js";
import "./chunk-W3GXKXZC.js";
import {
  AsyncHandler
} from "./chunk-C2J4JAY6.js";
import {
  SafePipe
} from "./chunk-GBLYF56R.js";
import "./chunk-SL7UBQ7L.js";
import {
  i18n
} from "./chunk-E7QDOMTV.js";
import {
  CommonModule,
  Component,
  DatePipe,
  inject,
  kt,
  setClassMetadata,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Q7FFLWMX.js";
import "./chunk-KWSTWQNB.js";

// src/app/metrics/clock.component.ts
var ClockComponent = class _ClockComponent extends AsyncHandler {
  /** Angle to display the hour hand of the clock at */
  hour_angle;
  /** Angle to display the minute hand of the clock at */
  minute_angle;
  /** Angle to display the seconds hand of the clock at */
  second_angle;
  ngOnInit() {
    this.updateTime();
    this.interval("time", () => this.updateTime(), 1e3);
  }
  updateTime() {
    const time = /* @__PURE__ */ new Date();
    this.hour_angle = (time.getHours() % 12 + time.getMinutes() / 60) / 12 * 360;
    this.minute_angle = (time.getMinutes() + time.getSeconds() / 60) / 60 * 360;
    this.second_angle = time.getSeconds() / 60 * 360;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ClockComponent_BaseFactory;
    return function ClockComponent_Factory(__ngFactoryType__) {
      return (\u0275ClockComponent_BaseFactory || (\u0275ClockComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ClockComponent)))(__ngFactoryType__ || _ClockComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClockComponent, selectors: [["clock"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 6, consts: [[1, "relative", "h-12", "w-12", "rounded-full", "border-2", "border-base-content"], [1, "hand", "absolute", "bottom-1/2", "left-1/2", "h-3", "w-1", "rounded-sm", "bg-base-content"], [1, "hand", "minute", "absolute", "bottom-1/2", "left-1/2", "h-4", "bg-base-content"], [1, "hand", "absolute", "bottom-1/2", "left-1/2", "h-5", "w-px", "bg-base-content"], [1, "absolute", "left-1/2", "top-1/2", "h-2", "w-2", "-translate-x-1/2", "-translate-y-1/2", "transform", "rounded-full", "bg-base-content"]], template: function ClockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("transform", "translateX(-50%) rotate(" + ctx.hour_angle + "deg)");
      \u0275\u0275advance();
      \u0275\u0275styleProp("transform", "translateX(-50%) rotate(" + ctx.minute_angle + "deg)");
      \u0275\u0275advance();
      \u0275\u0275styleProp("transform", "translateX(-50%) rotate(" + ctx.second_angle + "deg)");
    }
  }, styles: ["\n\n.hand[_ngcontent-%COMP%] {\n  transform-origin: 50% 100%;\n}\n.minute[_ngcontent-%COMP%] {\n  width: 2px;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=clock.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClockComponent, [{
    type: Component,
    args: [{ selector: "clock", template: `
        <div
            class="relative h-12 w-12 rounded-full border-2 border-base-content"
        >
            <div
                class="hand absolute bottom-1/2 left-1/2 h-3 w-1 rounded-sm bg-base-content"
                [style.transform]="
                    'translateX(-50%) rotate(' + hour_angle + 'deg)'
                "
            ></div>
            <div
                class="hand minute absolute bottom-1/2 left-1/2 h-4 bg-base-content"
                [style.transform]="
                    'translateX(-50%) rotate(' + minute_angle + 'deg)'
                "
            ></div>
            <div
                class="hand absolute bottom-1/2 left-1/2 h-5 w-px bg-base-content"
                [style.transform]="
                    'translateX(-50%) rotate(' + second_angle + 'deg)'
                "
            ></div>
            <div
                class="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-base-content"
            ></div>
        </div>
    `, styles: ["/* angular:styles/component:css;ad89ac6d32c78caabe18fd68c2a3e134ffc604c58e28366bffed4961ac099e7b;/home/runner/work/backoffice/backoffice/src/app/metrics/clock.component.ts */\n.hand {\n  transform-origin: 50% 100%;\n}\n.minute {\n  width: 2px;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=clock.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClockComponent, { className: "ClockComponent", filePath: "src/app/metrics/clock.component.ts", lineNumber: 46 });
})();

// src/app/metrics/metrics.component.ts
var MetricsComponent = class _MetricsComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  /** Whether to only render the metrics view */
  fullscreen;
  time;
  /** URL for the metrics interface */
  get metrics_url() {
    const api_authority = kt();
    return api_authority ? api_authority.metrics || api_authority.config.metrics : "";
  }
  async ngOnInit() {
    this.updateTime();
    this.interval("time", () => this.updateTime(), 1e3);
    await timer(1e3).toPromise();
    this._settings.title = i18n("COMMON.METRICS");
  }
  updateTime() {
    this.time = /* @__PURE__ */ new Date();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MetricsComponent_BaseFactory;
    return function MetricsComponent_Factory(__ngFactoryType__) {
      return (\u0275MetricsComponent_BaseFactory || (\u0275MetricsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MetricsComponent)))(__ngFactoryType__ || _MetricsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetricsComponent, selectors: [["app-metrics"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 17, consts: [[1, "flex", "h-full", "w-full", "flex-col", "bg-base-100"], [1, "flex", "w-full", "items-center", "border-b", "border-neutral", "bg-base-200", "px-4", "py-2", "text-base-content"], [1, "flex-1", "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], [1, "display"], [1, "time"], [1, "day"], [1, "relative", "h-[60vh]", "w-full", "flex-1"], [1, "absolute", "inset-0", "h-full", "w-full", 3, "src"]], template: function MetricsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275element(6, "clock");
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "date");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275element(15, "iframe", 8);
      \u0275\u0275pipe(16, "safe");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("fullscreen", ctx.fullscreen);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "COMMON.METRICS"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, ctx.time, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 11, ctx.time, "mediumDate"));
      \u0275\u0275advance(3);
      \u0275\u0275property("src", \u0275\u0275pipeBind2(16, 14, ctx.metrics_url, "resource"), \u0275\u0275sanitizeResourceUrl);
    }
  }, dependencies: [CommonModule, ClockComponent, SafePipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.fullscreen[_ngcontent-%COMP%] {\n  position: fixed !important;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n}\n/*# sourceMappingURL=metrics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetricsComponent, [{
    type: Component,
    args: [{ selector: "app-metrics", template: `
        <div
            class="flex h-full w-full flex-col bg-base-100"
            [class.fullscreen]="fullscreen"
        >
            <div
                class="flex w-full items-center border-b border-neutral bg-base-200 px-4 py-2 text-base-content"
            >
                <div class="flex-1 text-2xl font-medium">
                    {{ 'COMMON.METRICS' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <clock></clock>
                    <div class="display">
                        <div class="time">{{ time | date: 'shortTime' }}</div>
                        <div class="day">{{ time | date: 'mediumDate' }}</div>
                    </div>
                </div>
            </div>
            <div class="relative h-[60vh] w-full flex-1">
                <iframe
                    class="absolute inset-0 h-full w-full"
                    [src]="metrics_url | safe: 'resource'"
                ></iframe>
            </div>
        </div>
    `, imports: [SafePipe, CommonModule, TranslatePipe, ClockComponent], styles: ["/* angular:styles/component:css;ed85d7ba01f400a44b64c9f8437fa2af58b8d6567abc5869d392bb1e3ca7155f;/home/runner/work/backoffice/backoffice/src/app/metrics/metrics.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n.fullscreen {\n  position: fixed !important;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n}\n/*# sourceMappingURL=metrics.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetricsComponent, { className: "MetricsComponent", filePath: "src/app/metrics/metrics.component.ts", lineNumber: 60 });
})();
export {
  MetricsComponent
};
//# sourceMappingURL=chunk-K7FWRHAG.js.map
