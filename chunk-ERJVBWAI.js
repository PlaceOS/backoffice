import {
  PANEL_GAP,
  PANEL_SHADOW,
  TOOLTIP_ARROW,
  VIEWPORT_MARGIN
} from "./chunk-POM3EJZY.js";
import {
  AriaDescriber
} from "./chunk-UVK6APTK.js";
import {
  ComponentPortal,
  FocusMonitor,
  Overlay,
  ViewportRuler
} from "./chunk-QNK6X2WC.js";
import {
  Component,
  Directive,
  ElementRef,
  Input,
  effect,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/controls/tooltip.directive.ts
var ARROW_INSET = 12;
var PLACES = {
  above: {
    originX: "center",
    originY: "top",
    overlayX: "center",
    overlayY: "bottom"
  },
  below: {
    originX: "center",
    originY: "bottom",
    overlayX: "center",
    overlayY: "top"
  },
  left: {
    originX: "start",
    originY: "center",
    overlayX: "end",
    overlayY: "center"
  },
  right: {
    originX: "end",
    originY: "center",
    overlayX: "start",
    overlayY: "center"
  },
  before: {
    originX: "start",
    originY: "center",
    overlayX: "end",
    overlayY: "center"
  },
  after: {
    originX: "end",
    originY: "center",
    overlayX: "start",
    overlayY: "center"
  }
};
function positionOf(position, raise) {
  const place = PLACES[position];
  const offset = TOOLTIP_ARROW + PANEL_GAP;
  switch (sideOf(place)) {
    case "above":
      return __spreadProps(__spreadValues({}, place), {
        offsetY: -(offset + PANEL_SHADOW + raise)
      });
    case "below":
      return __spreadProps(__spreadValues({}, place), { offsetY: offset });
    case "left":
      return __spreadProps(__spreadValues({}, place), { offsetX: -offset });
    default:
      return __spreadProps(__spreadValues({}, place), { offsetX: offset });
  }
}
var FALLBACK = {
  above: "below",
  below: "above",
  left: "right",
  right: "left",
  before: "after",
  after: "before"
};
function translateY(transform) {
  const values = /matrix\(([^)]+)\)/.exec(transform)?.[1].split(",");
  return values ? parseFloat(values[5]) || 0 : 0;
}
function sideOf(position) {
  if (position.overlayY === "bottom" && position.originY === "top") {
    return "above";
  }
  if (position.overlayY === "top" && position.originY === "bottom") {
    return "below";
  }
  return position.overlayX === "end" ? "left" : "right";
}
var TooltipPanelComponent = class _TooltipPanelComponent {
  text = "";
  /** Side of the trigger the tooltip is on, which places its arrow */
  side = "below";
  static \u0275fac = function TooltipPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TooltipPanelComponent, selectors: [["app-tooltip-panel"]], hostAttrs: ["aria-hidden", "true", 1, "tooltip-panel"], hostVars: 1, hostBindings: function TooltipPanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-side", ctx.side);
    }
  }, decls: 1, vars: 1, template: function TooltipPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275text(0);
    }
    if (rf & 2) {
      \u0275\u0275textInterpolate(ctx.text);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipPanelComponent, [{
    type: Component,
    args: [{
      selector: "app-tooltip-panel",
      template: `{{ text }}`,
      host: {
        class: "tooltip-panel",
        "aria-hidden": "true",
        "[attr.data-side]": "side"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TooltipPanelComponent, { className: "TooltipPanelComponent", filePath: "src/app/ui/controls/tooltip.directive.ts", lineNumber: 143 });
})();
var TooltipDirective = class _TooltipDirective {
  _element = inject(ElementRef);
  _overlay = inject(Overlay);
  _describer = inject(AriaDescriber);
  _focus = inject(FocusMonitor);
  _viewport = inject(ViewportRuler);
  _resize;
  _overlay_ref;
  _panel;
  _strategy;
  /** Box of the trigger at rest, when the tooltip was shown */
  _origin;
  _side = "below";
  _described = "";
  /** Text of the tooltip. Nothing shows when it is empty */
  text = input("", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "text" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appTooltip" }));
  position = input("below", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "position" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appTooltipPosition" }));
  constructor() {
    effect(() => {
      const text = this.text() || "";
      const element = this._element.nativeElement;
      if (this._described) {
        this._describer.removeDescription(element, this._described);
      }
      if (text)
        this._describer.describe(element, text);
      this._described = text;
      if (this._panel && text)
        this._setText(text);
      else if (this._panel)
        this.hide();
    });
    this._focus.monitor(this._element).subscribe((origin) => {
      if (origin === "keyboard")
        this.show();
      else if (!origin)
        this.hide();
    });
  }
  show() {
    const text = this.text();
    if (!text || this._panel)
      return;
    const position = this.position();
    if (!this._overlay_ref) {
      const strategy = this._strategy = this._overlay.position().flexibleConnectedTo(this._element).withViewportMargin(VIEWPORT_MARGIN).withFlexibleDimensions(false).withPush(true);
      strategy.positionChanges.subscribe(({ connectionPair }) => {
        this._side = sideOf(connectionPair);
        if (!this._panel)
          return;
        this._setText(this._panel.instance.text);
        this._placeArrow();
      });
      this._overlay_ref = this._overlay.create({
        positionStrategy: strategy,
        scrollStrategy: this._overlay.scrollStrategies.close(),
        panelClass: "tooltip-pane"
      });
      this._overlay_ref.detachments().subscribe(() => {
        this._panel = void 0;
        this._resize?.unsubscribe();
      });
    }
    const element = this._element.nativeElement;
    const style = getComputedStyle(element);
    const box = element.getBoundingClientRect();
    this._origin = {
      x: box.left,
      y: box.top - translateY(style.transform),
      width: box.width,
      height: box.height
    };
    const raise = element.matches(":hover") ? parseFloat(style.getPropertyValue("--hover-raise")) || 0 : 0;
    this._strategy.setOrigin(this._origin).withPositions([
      positionOf(position, raise),
      positionOf(FALLBACK[position], raise)
    ]);
    this._side = sideOf(PLACES[position]);
    this._panel = this._overlay_ref.attach(new ComponentPortal(TooltipPanelComponent));
    this._setText(text);
    this._overlay_ref.updatePosition();
    this._placeArrow();
    this._resize = this._viewport.change().subscribe(() => this.hide());
  }
  hide() {
    this._overlay_ref?.detach();
    this._panel = void 0;
  }
  ngOnDestroy() {
    this._resize?.unsubscribe();
    this._focus.stopMonitoring(this._element);
    if (this._described) {
      this._describer.removeDescription(this._element.nativeElement, this._described);
    }
    this._overlay_ref?.dispose();
  }
  /**
   * Point the arrow at the centre of the trigger. The tooltip is pushed
   * inside the viewport near its edges, so its own centre may be off the
   * trigger. The arrow stays clear of the rounded corners.
   */
  _placeArrow() {
    const panel = this._panel?.location.nativeElement;
    const trigger = this._origin;
    if (!panel || !trigger)
      return;
    const box = panel.getBoundingClientRect();
    const vertical = this._side === "above" || this._side === "below";
    const centre = vertical ? trigger.x + trigger.width / 2 - box.left : trigger.y + trigger.height / 2 - box.top;
    const size = vertical ? box.width : box.height;
    const at = Math.min(Math.max(centre, ARROW_INSET), size - ARROW_INSET);
    panel.style.setProperty("--arrow-at", `${at}px`);
  }
  _setText(text) {
    this._panel.instance.text = text;
    this._panel.instance.side = this._side;
    this._panel.changeDetectorRef.detectChanges();
  }
  static \u0275fac = function TooltipDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TooltipDirective, selectors: [["", "appTooltip", ""]], hostAttrs: [1, "tooltip-trigger"], hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
        return ctx.show();
      })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
        return ctx.hide();
      })("pointerdown", function TooltipDirective_pointerdown_HostBindingHandler() {
        return ctx.hide();
      })("keydown.escape", function TooltipDirective_keydown_escape_HostBindingHandler() {
        return ctx.hide();
      });
    }
  }, inputs: { text: [1, "appTooltip", "text"], position: [1, "appTooltipPosition", "position"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[appTooltip]",
      host: {
        class: "tooltip-trigger",
        "(mouseenter)": "show()",
        "(mouseleave)": "hide()",
        "(pointerdown)": "hide()",
        "(keydown.escape)": "hide()"
      }
    }]
  }], () => [], { text: [{ type: Input, args: [{ isSignal: true, alias: "appTooltip", required: false }] }], position: [{ type: Input, args: [{ isSignal: true, alias: "appTooltipPosition", required: false }] }] });
})();

export {
  TooltipPanelComponent,
  TooltipDirective
};
//# debugId=8866db97-c92c-5bdc-ac16-a07a7b034a22
//# sourceMappingURL=chunk-ERJVBWAI.js.map
