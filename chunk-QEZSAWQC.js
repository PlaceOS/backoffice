import {
  SanitizePipe
} from "./chunk-M6YSSFSQ.js";
import {
  CdkPortal,
  Overlay,
  PortalModule,
  TemplatePortalDirective
} from "./chunk-H3F3PJXF.js";
import {
  AsyncHandler
} from "./chunk-SD6ATYW5.js";
import {
  CommonModule,
  Component,
  ElementRef,
  HostListener,
  Injector,
  Input,
  NgComponentOutlet,
  NgTemplateOutlet,
  TemplateRef,
  ViewChild,
  computed,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵviewQuerySignal
} from "./chunk-IGWUWPZB.js";

// src/app/ui/custom-tooltip.component.ts
var _c0 = ["customTooltip", ""];
var _c1 = ["*"];
function CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.component())("ngComponentOutletInjector", ctx_r0.injector);
  }
}
function CustomTooltipComponent_ng_template_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.html()), \u0275\u0275sanitizeHtml);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template())("ngTemplateOutletContext", ctx_r0.data());
  }
}
function CustomTooltipComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, CustomTooltipComponent_ng_template_1_Case_1_Template, 1, 2, "ng-container")(2, CustomTooltipComponent_ng_template_1_Case_2_Template, 2, 3, "div", 2)(3, CustomTooltipComponent_ng_template_1_Case_3_Template, 1, 2, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.type) === "component" ? 1 : tmp_1_0 === "html" ? 2 : 3);
  }
}
var CustomTooltipData = class {
  data;
  close;
  constructor(d) {
    this.data = d.data;
    this.close = d.close || (() => null);
  }
};
var CustomTooltipComponent = class _CustomTooltipComponent extends AsyncHandler {
  _element = inject(ElementRef);
  _overlay = inject(Overlay);
  _injector = inject(Injector);
  /** Horizontal position of the rendered overlay */
  xPosition = input("end", ...ngDevMode ? [{ debugName: "xPosition" }] : []);
  /** Vertical position of the rendered overlay */
  yPosition = input("top", ...ngDevMode ? [{ debugName: "yPosition" }] : []);
  /** Content to render in the tooltip */
  content = input(void 0, ...ngDevMode ? [{ debugName: "content" }] : []);
  /** Data associated with the tooltip content */
  data = input(void 0, ...ngDevMode ? [{ debugName: "data" }] : []);
  /** Whether tooltip has a backdrop */
  backdrop = input(true, ...ngDevMode ? [{ debugName: "backdrop" }] : []);
  /** Whether tooltip has a backdrop */
  hover = input(false, ...ngDevMode ? [{ debugName: "hover" }] : []);
  /** Delay time in milliseconds to close after hover */
  delay = input(0, ...ngDevMode ? [{ debugName: "delay" }] : []);
  /** Type of content to render */
  type = "template";
  template = computed(() => this.content(), ...ngDevMode ? [{ debugName: "template" }] : []);
  component = computed(() => this.content(), ...ngDevMode ? [{ debugName: "component" }] : []);
  html = computed(() => this.content(), ...ngDevMode ? [{ debugName: "html" }] : []);
  injector;
  _overlay_ref = null;
  _portal = viewChild(CdkPortal, ...ngDevMode ? [{ debugName: "_portal" }] : []);
  onClick = () => this.open();
  onTouch = () => this.open();
  onEnter = () => this.hover() ? this.open() : "";
  onLeave = () => this.hover() ? this.close() : "";
  ngOnChanges(changes) {
    this._updateInjector();
    if (this._overlay_ref && (changes.xPosition || changes.yPosition || changes.content)) {
      this.open();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  open() {
    if (!this.content())
      return;
    this.timeout("open", () => {
      const hover = this.hover();
      const delay = this.delay();
      if (hover && delay) {
        this.timeout("onclose", () => this.close(), delay);
      }
      this._updateType();
      if (this._overlay_ref)
        this.close();
      const _portal = this._portal();
      if (!_portal)
        return;
      const default_x = "end";
      const default_y = "top";
      const y_position = this.yPosition();
      this._overlay_ref = this._overlay.create({
        hasBackdrop: !!this.backdrop() && !hover,
        positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withPositions([
          {
            originX: this.xPosition() || default_x,
            originY: (y_position === "top" ? "bottom" : y_position == "bottom" ? "top" : y_position) || default_y,
            overlayX: this.xPosition() || default_x,
            overlayY: this.yPosition() || default_y
          }
        ])
      });
      this._overlay_ref.attach(_portal);
      if (this.backdrop()) {
        this.subscription("backdrop", this._overlay_ref.backdropClick().subscribe(() => this.close()));
      }
    }, 50);
  }
  close() {
    this.clearTimeout("open");
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
  _updateType() {
    const content = this.content();
    this.type = typeof content === "string" ? "html" : content instanceof TemplateRef ? "template" : "component";
  }
  _updateInjector() {
    this.injector = Injector.create({
      providers: [
        {
          provide: CustomTooltipData,
          useValue: { data: this.data(), close: () => this.close() }
        }
      ],
      parent: this._injector
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CustomTooltipComponent_BaseFactory;
    return function CustomTooltipComponent_Factory(__ngFactoryType__) {
      return (\u0275CustomTooltipComponent_BaseFactory || (\u0275CustomTooltipComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CustomTooltipComponent)))(__ngFactoryType__ || _CustomTooltipComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomTooltipComponent, selectors: [["", "customTooltip", ""]], viewQuery: function CustomTooltipComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._portal, CdkPortal, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostBindings: function CustomTooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CustomTooltipComponent_click_HostBindingHandler() {
        return ctx.onClick();
      })("touchend", function CustomTooltipComponent_touchend_HostBindingHandler() {
        return ctx.onTouch();
      })("mouseenter", function CustomTooltipComponent_mouseenter_HostBindingHandler() {
        return ctx.onEnter();
      })("mouseleave", function CustomTooltipComponent_mouseleave_HostBindingHandler() {
        return ctx.onLeave();
      });
    }
  }, inputs: { xPosition: [1, "xPosition"], yPosition: [1, "yPosition"], content: [1, "content"], data: [1, "data"], backdrop: [1, "backdrop"], hover: [1, "hover"], delay: [1, "delay"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["cdk-portal", ""], ["custom-tooltip", "", 1, "relative", "print:hidden"], [3, "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CustomTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
      \u0275\u0275template(1, CustomTooltipComponent_ng_template_1_Template, 4, 1, "ng-template", 0);
    }
  }, dependencies: [CommonModule, NgComponentOutlet, NgTemplateOutlet, PortalModule, TemplatePortalDirective, SanitizePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipComponent, [{
    type: Component,
    args: [{
      selector: "[customTooltip]",
      template: `
        <ng-content />

        <ng-template cdk-portal>
            <div custom-tooltip class="relative print:hidden">
                @switch (type) {
                    @case ('component') {
                        <ng-container
                            *ngComponentOutlet="component(); injector: injector"
                        ></ng-container>
                    }
                    @case ('html') {
                        <div [innerHTML]="html() | sanitize"></div>
                    }
                    @default {
                        <ng-container
                            *ngTemplateOutlet="template(); context: data()"
                        ></ng-container>
                    }
                }
            </div>
        </ng-template>
    `,
      imports: [CommonModule, PortalModule, SanitizePipe]
    }]
  }], null, { xPosition: [{ type: Input, args: [{ isSignal: true, alias: "xPosition", required: false }] }], yPosition: [{ type: Input, args: [{ isSignal: true, alias: "yPosition", required: false }] }], content: [{ type: Input, args: [{ isSignal: true, alias: "content", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], backdrop: [{ type: Input, args: [{ isSignal: true, alias: "backdrop", required: false }] }], hover: [{ type: Input, args: [{ isSignal: true, alias: "hover", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], _portal: [{ type: ViewChild, args: [forwardRef(() => CdkPortal), { isSignal: true }] }], onClick: [{
    type: HostListener,
    args: ["click"]
  }], onTouch: [{
    type: HostListener,
    args: ["touchend"]
  }], onEnter: [{
    type: HostListener,
    args: ["mouseenter"]
  }], onLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomTooltipComponent, { className: "CustomTooltipComponent", filePath: "src/app/ui/custom-tooltip.component.ts", lineNumber: 58 });
})();

export {
  CustomTooltipData,
  CustomTooltipComponent
};
//# sourceMappingURL=chunk-QEZSAWQC.js.map
