import {
  OPTION_HOST,
  OptionComponent
} from "./chunk-BE6PEWTW.js";
import {
  PANEL_POSITIONS,
  VIEWPORT_MARGIN
} from "./chunk-POM3EJZY.js";
import {
  ActiveDescendantKeyManager
} from "./chunk-B36VAJ7U.js";
import {
  Overlay,
  TemplatePortal
} from "./chunk-3REUN4UT.js";
import {
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Injector,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  contentChildren,
  forwardRef,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryAdvance,
  ɵɵviewQuerySignal
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/controls/autocomplete.component.ts
var _c0 = ["*"];
function AutocompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("id", ctx_r0.panel_id);
  }
}
var next_id = 0;
var AutocompleteComponent = class _AutocompleteComponent {
  panel_id = `app-autocomplete-${next_id++}`;
  template = viewChild.required(
    TemplateRef,
    ...ngDevMode ? [{ debugName: "template" }] : (
      /* istanbul ignore next */
      []
    )
  );
  options = contentChildren(OptionComponent, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "options" } : (
    /* istanbul ignore next */
    {}
  )), { descendants: true }));
  /** Emitted when the user picks an option */
  optionSelected = output();
  /** Set by the trigger to receive picked options */
  onPick = () => void 0;
  multiple = () => false;
  isSelected() {
    return false;
  }
  pick(option) {
    this.onPick(option);
    this.optionSelected.emit({ value: option.value() });
  }
  static \u0275fac = function AutocompleteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutocompleteComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutocompleteComponent, selectors: [["app-autocomplete"]], contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.options, OptionComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, viewQuery: function AutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.template, TemplateRef, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, outputs: { optionSelected: "optionSelected" }, exportAs: ["appAutocomplete"], features: [\u0275\u0275ProvidersFeature([
    {
      provide: OPTION_HOST,
      useExisting: forwardRef(() => _AutocompleteComponent)
    }
  ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [["role", "listbox", 1, "select-panel", 3, "id"]], template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domTemplate(0, AutocompleteComponent_ng_template_0_Template, 2, 1, "ng-template");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteComponent, [{
    type: Component,
    args: [{
      selector: "app-autocomplete",
      exportAs: "appAutocomplete",
      template: `
        <ng-template>
            <div class="select-panel" role="listbox" [id]="panel_id">
                <ng-content />
            </div>
        </ng-template>
    `,
      providers: [
        {
          provide: OPTION_HOST,
          useExisting: forwardRef(() => AutocompleteComponent)
        }
      ]
    }]
  }], null, { template: [{ type: ViewChild, args: [forwardRef(() => TemplateRef), { isSignal: true }] }], options: [{ type: ContentChildren, args: [forwardRef(() => OptionComponent), __spreadProps(__spreadValues({}, {
    descendants: true
  }), { isSignal: true })] }], optionSelected: [{ type: Output, args: ["optionSelected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutocompleteComponent, { className: "AutocompleteComponent", filePath: "src/app/ui/controls/autocomplete.component.ts", lineNumber: 49 });
})();
var AutocompleteTriggerDirective = class _AutocompleteTriggerDirective {
  _element = inject(ElementRef);
  _overlay = inject(Overlay);
  _injector = inject(Injector);
  _view_container = inject(ViewContainerRef);
  _overlay_ref;
  _key_manager;
  /** Set while the input event of a picked value is dispatched */
  _writing = false;
  /** Suggestions to show. Nothing shows while it is unset */
  panel = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "panel" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appAutocomplete" }));
  opened = signal(
    false,
    ...ngDevMode ? [{ debugName: "opened" }] : (
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
  open() {
    const panel = this.panel();
    if (!panel || this.opened() || this._element.nativeElement.readOnly) {
      return;
    }
    const host = this._element.nativeElement;
    const box = host.closest(".field-box") ?? host;
    this._overlay_ref ??= this._overlay.create({
      positionStrategy: this._overlay.position().flexibleConnectedTo(box).withPositions(PANEL_POSITIONS).withViewportMargin(VIEWPORT_MARGIN).withFlexibleDimensions(false).withPush(true).withPopoverLocation("inline"),
      scrollStrategy: this._overlay.scrollStrategies.reposition()
    });
    this._overlay_ref.updateSize({
      width: box.getBoundingClientRect().width
    });
    this._overlay_ref.attach(new TemplatePortal(panel.template(), this._view_container));
    panel.onPick = (option) => this._pick(option);
    this._key_manager = new ActiveDescendantKeyManager(panel.options, this._injector).withWrap();
    this._key_manager.change.subscribe(() => this.active_id.set(this._key_manager.activeItem?.id ?? null));
    this.opened.set(true);
  }
  close() {
    if (!this.opened())
      return;
    this._overlay_ref?.detach();
    this._key_manager?.setActiveItem(-1);
    this._key_manager?.destroy();
    this._key_manager = void 0;
    this.active_id.set(null);
    this.opened.set(false);
  }
  onInput() {
    if (this._writing)
      return;
    this.open();
    this._key_manager?.setActiveItem(-1);
  }
  onKeydown(keyboard_event) {
    const event = keyboard_event;
    if (event.key === "Escape" && this.opened()) {
      event.preventDefault();
      event.stopPropagation();
      this.close();
    } else if (event.key === "Enter" && this._key_manager?.activeItem) {
      event.preventDefault();
      this._key_manager.activeItem.pickOption();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      this.open();
      this._key_manager?.onKeydown(event);
    }
  }
  ngOnDestroy() {
    this._key_manager?.destroy();
    this._overlay_ref?.dispose();
  }
  _pick(option) {
    const value = option.value();
    if (typeof value === "string" || typeof value === "number") {
      const element = this._element.nativeElement;
      element.value = `${value}`;
      this._writing = true;
      element.dispatchEvent(new Event("input", { bubbles: true }));
      this._writing = false;
    }
    this.close();
  }
  static \u0275fac = function AutocompleteTriggerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutocompleteTriggerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AutocompleteTriggerDirective, selectors: [["input", "appAutocomplete", ""], ["textarea", "appAutocomplete", ""]], hostVars: 6, hostBindings: function AutocompleteTriggerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", function AutocompleteTriggerDirective_focus_HostBindingHandler() {
        return ctx.open();
      })("click", function AutocompleteTriggerDirective_click_HostBindingHandler() {
        return ctx.open();
      })("input", function AutocompleteTriggerDirective_input_HostBindingHandler() {
        return ctx.onInput();
      })("blur", function AutocompleteTriggerDirective_blur_HostBindingHandler() {
        return ctx.close();
      })("keydown", function AutocompleteTriggerDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx.panel() ? "combobox" : null)("autocomplete", ctx.panel() ? "off" : null)("aria-autocomplete", ctx.panel() ? "list" : null)("aria-expanded", ctx.panel() ? ctx.opened() : null)("aria-controls", ctx.opened() ? ctx.panel()?.panel_id : null)("aria-activedescendant", ctx.active_id());
    }
  }, inputs: { panel: [1, "appAutocomplete", "panel"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "input[appAutocomplete], textarea[appAutocomplete]",
      host: {
        "[attr.role]": 'panel() ? "combobox" : null',
        "[attr.autocomplete]": 'panel() ? "off" : null',
        "[attr.aria-autocomplete]": 'panel() ? "list" : null',
        "[attr.aria-expanded]": "panel() ? opened() : null",
        "[attr.aria-controls]": "opened() ? panel()?.panel_id : null",
        "[attr.aria-activedescendant]": "active_id()",
        "(focus)": "open()",
        "(click)": "open()",
        "(input)": "onInput()",
        "(blur)": "close()",
        "(keydown)": "onKeydown($event)"
      }
    }]
  }], null, { panel: [{ type: Input, args: [{ isSignal: true, alias: "appAutocomplete", required: false }] }] });
})();

export {
  AutocompleteComponent,
  AutocompleteTriggerDirective
};
//# debugId=b5bd6a87-5644-5259-90c7-8e3995453375
//# sourceMappingURL=chunk-3CXGWY3Q.js.map
