import {
  OPTION_HOST,
  OptionComponent
} from "./chunk-CH2YF4Y7.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-5APMNGCP.js";
import {
  PANEL_POSITIONS,
  VIEWPORT_MARGIN
} from "./chunk-POM3EJZY.js";
import {
  ActiveDescendantKeyManager
} from "./chunk-UVK6APTK.js";
import {
  CdkConnectedOverlay
} from "./chunk-QNK6X2WC.js";
import {
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Injector,
  Input,
  Output,
  afterRenderEffect,
  booleanAttribute,
  computed,
  contentChild,
  contentChildren,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/controls/select.component.ts
var _c0 = [[["app-select-trigger"]], [["", "select-search", ""]], "*", [["", "select-empty", ""]]];
var _c1 = ["app-select-trigger", "[select-search]", "*", "[select-empty]"];
function SelectComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.placeholder());
  }
}
function SelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function SelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.display(), " ");
  }
}
function SelectComponent_ng_template_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 3);
  }
}
function SelectComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275projection(3, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275conditionalCreate(5, SelectComponent_ng_template_5_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r0.panel_id);
    \u0275\u0275attribute("aria-multiselectable", ctx_r0.multiple());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.options().length ? 5 : -1);
  }
}
var SelectTriggerDirective = class _SelectTriggerDirective {
  static \u0275fac = function SelectTriggerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectTriggerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SelectTriggerDirective, selectors: [["app-select-trigger"]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectTriggerDirective, [{
    type: Directive,
    args: [{ selector: "app-select-trigger" }]
  }], null, null);
})();
var next_id = 0;
var SelectComponent = class _SelectComponent {
  _element = inject(ElementRef);
  _injector = inject(Injector);
  _key_manager;
  _onChange = () => void 0;
  _onTouched = () => void 0;
  panel_id = `app-select-panel-${next_id++}`;
  positions = PANEL_POSITIONS;
  viewport_margin = VIEWPORT_MARGIN;
  /** Selected value. An array of option values when `multiple` is set */
  value = model(
    ...ngDevMode ? [void 0, { debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  placeholder = input(
    "",
    ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    )
  );
  multiple = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "multiple" } : (
    /* istanbul ignore next */
    {}
  )), { transform: booleanAttribute }));
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
    /* istanbul ignore next */
    {}
  )), { transform: booleanAttribute }));
  /** Emitted when the user changes the value */
  selectionChange = output();
  /** Emitted when the panel opens or closes */
  openedChange = output();
  options = contentChildren(OptionComponent, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "options" } : (
    /* istanbul ignore next */
    {}
  )), { descendants: true }));
  custom_trigger = contentChild(
    SelectTriggerDirective,
    ...ngDevMode ? [{ debugName: "custom_trigger" }] : (
      /* istanbul ignore next */
      []
    )
  );
  opened = signal(
    false,
    ...ngDevMode ? [{ debugName: "opened" }] : (
      /* istanbul ignore next */
      []
    )
  );
  width = signal(
    0,
    ...ngDevMode ? [{ debugName: "width" }] : (
      /* istanbul ignore next */
      []
    )
  );
  origin = signal(
    this._element,
    ...ngDevMode ? [{ debugName: "origin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  active_id = signal(
    null,
    ...ngDevMode ? [{ debugName: "active_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _form_disabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "_form_disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  is_disabled = computed(
    () => this.disabled() || this._form_disabled(),
    ...ngDevMode ? [{ debugName: "is_disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selected = computed(
    () => this.options().filter((option) => this.isSelected(option)),
    ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empty = computed(
    () => {
      const value = this.value();
      return Array.isArray(value) ? !value.length : value === void 0 || value === null || value === "";
    },
    ...ngDevMode ? [{ debugName: "empty" }] : (
      /* istanbul ignore next */
      []
    )
  );
  display = computed(
    () => this.selected().map((option) => option.getLabel()).join(", "),
    ...ngDevMode ? [{ debugName: "display" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    afterRenderEffect(() => {
      const host = this._element.nativeElement;
      const text = this.placeholder();
      const own = host.hasAttribute("data-placeholder-label");
      const labelled = host.hasAttribute("aria-label") || host.hasAttribute("aria-labelledby");
      if (!text || labelled && !own)
        return;
      host.setAttribute("aria-label", text);
      host.setAttribute("data-placeholder-label", "");
    });
  }
  isSelected(option) {
    const value = this.value();
    return this.multiple() && Array.isArray(value) ? value.includes(option.value()) : option.value() === value;
  }
  pick(option) {
    const option_value = option.value();
    if (this.multiple()) {
      const value = this.value();
      const list = Array.isArray(value) ? value : [];
      const next = list.includes(option_value) ? list.filter((item) => item !== option_value) : [...list, option_value];
      this._setValue(next);
      this._key_manager?.setActiveItem(option);
      return;
    }
    this._setValue(option_value);
    this.close();
  }
  open() {
    if (this.opened() || this.is_disabled())
      return;
    const host = this._element.nativeElement;
    const box = host.closest(".field-box") ?? host;
    this.origin.set(box);
    this.width.set(box.getBoundingClientRect().width);
    this._key_manager = new ActiveDescendantKeyManager(this.options, this._injector).withWrap().withTypeAhead();
    this._key_manager.change.subscribe(() => this.active_id.set(this._key_manager.activeItem?.id ?? null));
    this.opened.set(true);
    this.openedChange.emit(true);
    requestAnimationFrame(() => {
      const first = this.selected()[0];
      if (first)
        this._key_manager?.setActiveItem(first);
      else
        this._key_manager?.setFirstItemActive();
    });
  }
  close() {
    if (!this.opened())
      return;
    const doc = this._element.nativeElement.ownerDocument;
    const panel = doc.getElementById(this.panel_id)?.parentElement;
    const refocus = !!panel?.contains(doc.activeElement);
    this.opened.set(false);
    this.active_id.set(null);
    this._key_manager?.setActiveItem(-1);
    this._key_manager?.destroy();
    this._key_manager = void 0;
    this._onTouched();
    this.openedChange.emit(false);
    if (refocus)
      this.focus();
  }
  toggle() {
    if (this.opened())
      this.close();
    else
      this.open();
  }
  focus() {
    this._element.nativeElement.focus();
  }
  /** Close on a click outside the panel. A click on the select toggles it */
  onOutsideClick(event) {
    const target = event.target;
    if (!this._element.nativeElement.contains(target))
      this.close();
  }
  onBlur() {
    if (!this.opened())
      this._onTouched();
  }
  onKeydown(keyboard_event) {
    const event = keyboard_event;
    if (this.is_disabled())
      return;
    const key = event.key;
    if (!this.opened()) {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(key)) {
        event.preventDefault();
        this.open();
      }
      return;
    }
    if (key === "Escape" || key === "Tab") {
      if (key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
      }
      this.close();
    } else if (key === "Enter" || key === " " && !this._typing()) {
      event.preventDefault();
      this._key_manager?.activeItem?.pickOption();
    } else {
      this._key_manager?.onKeydown(event);
    }
  }
  writeValue(value) {
    this.value.set(value);
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(disabled) {
    this._form_disabled.set(disabled);
  }
  _setValue(value) {
    this.value.set(value);
    this._onChange(value);
    this.selectionChange.emit({ value });
  }
  /** Whether a typeahead search is in progress, so space is part of it */
  _typing() {
    return !!this._key_manager?.isTyping();
  }
  static \u0275fac = function SelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.options, OptionComponent, 5)(dirIndex, ctx.custom_trigger, SelectTriggerDirective, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, hostAttrs: ["role", "combobox", "aria-haspopup", "listbox"], hostVars: 7, hostBindings: function SelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SelectComponent_click_HostBindingHandler() {
        return ctx.toggle();
      })("keydown", function SelectComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      })("blur", function SelectComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("tabindex", ctx.is_disabled() ? -1 : 0)("aria-disabled", ctx.is_disabled())("aria-expanded", ctx.opened())("aria-controls", ctx.opened() ? ctx.panel_id : null)("aria-activedescendant", ctx.active_id());
      \u0275\u0275classProp("disabled", ctx.is_disabled());
    }
  }, inputs: { value: [1, "value"], placeholder: [1, "placeholder"], multiple: [1, "multiple"], disabled: [1, "disabled"] }, outputs: { value: "valueChange", selectionChange: "selectionChange", openedChange: "openedChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SelectComponent),
      multi: true
    },
    {
      provide: OPTION_HOST,
      useExisting: forwardRef(() => _SelectComponent)
    }
  ])], ngContentSelectors: _c1, decls: 6, vars: 8, consts: [[1, "select-value"], [1, "select-placeholder"], ["aria-hidden", "true", 1, "select-arrow"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayUsePopover", "inline", 3, "overlayOutsideClick", "detach", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayPush", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayDisposeOnNavigation"], [1, "select-panel"], ["role", "listbox", 3, "id"], ["role", "status", 1, "select-empty"]], template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275conditionalCreate(1, SelectComponent_Conditional_1_Template, 2, 1, "span", 1)(2, SelectComponent_Conditional_2_Template, 1, 0)(3, SelectComponent_Conditional_3_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "span", 2);
      \u0275\u0275template(5, SelectComponent_ng_template_5_Template, 6, 3, "ng-template", 3);
      \u0275\u0275listener("overlayOutsideClick", function SelectComponent_Template_ng_template_overlayOutsideClick_5_listener($event) {
        return ctx.onOutsideClick($event);
      })("detach", function SelectComponent_Template_ng_template_detach_5_listener() {
        return ctx.close();
      });
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.empty() ? 1 : ctx.custom_trigger() ? 2 : 3);
      \u0275\u0275advance(4);
      \u0275\u0275property("cdkConnectedOverlayOrigin", ctx.origin())("cdkConnectedOverlayOpen", ctx.opened())("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayViewportMargin", ctx.viewport_margin)("cdkConnectedOverlayPush", true)("cdkConnectedOverlayMinWidth", ctx.width())("cdkConnectedOverlayDisposeOnNavigation", true);
    }
  }, dependencies: [CdkConnectedOverlay], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectComponent, [{
    type: Component,
    args: [{
      selector: "app-select",
      template: `
        <span class="select-value">
            @if (empty()) {
                <span class="select-placeholder">{{ placeholder() }}</span>
            } @else if (custom_trigger()) {
                <ng-content select="app-select-trigger" />
            } @else {
                {{ display() }}
            }
        </span>
        <span class="select-arrow" aria-hidden="true"></span>
        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="origin()"
            [cdkConnectedOverlayOpen]="opened()"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayViewportMargin]="viewport_margin"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayMinWidth]="width()"
            [cdkConnectedOverlayDisposeOnNavigation]="true"
            cdkConnectedOverlayUsePopover="inline"
            (overlayOutsideClick)="onOutsideClick($event)"
            (detach)="close()"
        >
            <div class="select-panel">
                <ng-content select="[select-search]" />
                <div
                    role="listbox"
                    [id]="panel_id"
                    [attr.aria-multiselectable]="multiple()"
                >
                    <ng-content />
                </div>
                <!-- Always there while open, so screen readers announce it -->
                <div class="select-empty" role="status">
                    @if (!options().length) {
                        <ng-content select="[select-empty]" />
                    }
                </div>
            </div>
        </ng-template>
    `,
      imports: [CdkConnectedOverlay],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => SelectComponent),
          multi: true
        },
        {
          provide: OPTION_HOST,
          useExisting: forwardRef(() => SelectComponent)
        }
      ],
      host: {
        role: "combobox",
        "aria-haspopup": "listbox",
        "[attr.tabindex]": "is_disabled() ? -1 : 0",
        "[attr.aria-disabled]": "is_disabled()",
        "[attr.aria-expanded]": "opened()",
        "[attr.aria-controls]": "opened() ? panel_id : null",
        "[attr.aria-activedescendant]": "active_id()",
        "[class.disabled]": "is_disabled()",
        "(click)": "toggle()",
        "(keydown)": "onKeydown($event)",
        "(blur)": "onBlur()"
      }
    }]
  }], () => [], { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: Output, args: ["valueChange"] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], multiple: [{ type: Input, args: [{ isSignal: true, alias: "multiple", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], selectionChange: [{ type: Output, args: ["selectionChange"] }], openedChange: [{ type: Output, args: ["openedChange"] }], options: [{ type: ContentChildren, args: [forwardRef(() => OptionComponent), __spreadProps(__spreadValues({}, {
    descendants: true
  }), { isSignal: true })] }], custom_trigger: [{ type: ContentChild, args: [forwardRef(() => SelectTriggerDirective), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "src/app/ui/controls/select.component.ts", lineNumber: 117 });
})();

export {
  SelectTriggerDirective,
  SelectComponent
};
//# debugId=e8e74b2e-6031-5896-bf13-a6f909b6631f
//# sourceMappingURL=chunk-XLCDDNWX.js.map
