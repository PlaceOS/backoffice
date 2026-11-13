import {
  AutocompleteTriggerDirective
} from "./chunk-7UHZOKRJ.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-5APMNGCP.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/controls/chip-list.component.ts
var _c0 = ["text_input"];
var _c1 = ["edit_input"];
var _c2 = (a0) => ({ name: a0 });
function ChipListComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 5, 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("keydown.enter", function ChipListComponent_For_1_Conditional_1_Template_input_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const edit_input_r3 = \u0275\u0275reference(1);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r4.finishEdit(item_r4, edit_input_r3.value));
    })("keydown.escape", function ChipListComponent_For_1_Conditional_1_Template_input_keydown_escape_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r4.editing.set(null));
    })("blur", function ChipListComponent_For_1_Conditional_1_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r2);
      const edit_input_r3 = \u0275\u0275reference(1);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.finishEdit(item_r4, edit_input_r3.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 2, "COMMON.EDIT_TYPE", \u0275\u0275pureFunction1(5, _c2, item_r4)));
  }
}
function ChipListComponent_For_1_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ChipListComponent_For_1_Conditional_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.startEdit(item_r4));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 1, "COMMON.EDIT_TYPE", \u0275\u0275pureFunction1(4, _c2, item_r4)));
  }
}
function ChipListComponent_For_1_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ChipListComponent_For_1_Conditional_2_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(item_r4));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.REMOVE") + " " + item_r4);
  }
}
function ChipListComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, ChipListComponent_For_1_Conditional_2_Conditional_2_Template, 4, 6, "button", 7);
    \u0275\u0275conditionalCreate(3, ChipListComponent_For_1_Conditional_2_Conditional_3_Template, 4, 3, "button", 7);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.editable() && !ctx_r4.is_disabled() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r4.is_disabled() ? 3 : -1);
  }
}
function ChipListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275conditionalCreate(1, ChipListComponent_For_1_Conditional_1_Template, 3, 7, "input", 4)(2, ChipListComponent_For_1_Conditional_2_Template, 4, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.editing() === item_r4 ? 1 : 2);
  }
}
var ChipListComponent = class _ChipListComponent {
  _onChange = () => void 0;
  _onTouched = () => void 0;
  /** List of items */
  value = model(
    [],
    ...ngDevMode ? [{ debugName: "value" }] : (
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
  /** `id` of the text input, for a `label[for]` */
  inputId = input(
    null,
    ...ngDevMode ? [{ debugName: "inputId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Keys that add the text in the input as an item */
  separators = input(
    ["Enter", ","],
    ...ngDevMode ? [{ debugName: "separators" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the user can change the text of an item */
  editable = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "editable" } : (
    /* istanbul ignore next */
    {}
  )), { transform: booleanAttribute }));
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
    /* istanbul ignore next */
    {}
  )), { transform: booleanAttribute }));
  /** Suggestions for the text input. A picked suggestion is added */
  autocomplete = input(
    ...ngDevMode ? [void 0, { debugName: "autocomplete" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emitted when the text in the input changes, e.g. to filter suggestions */
  textChange = output();
  editing = signal(
    null,
    ...ngDevMode ? [{ debugName: "editing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  list = computed(
    () => this.value() || [],
    ...ngDevMode ? [{ debugName: "list" }] : (
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
  _text_input = viewChild.required(
    "text_input",
    ...ngDevMode ? [{ debugName: "_text_input" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _edit_input = viewChild(
    "edit_input",
    ...ngDevMode ? [{ debugName: "_edit_input" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect((on_cleanup) => {
      const panel = this.autocomplete();
      if (!panel)
        return;
      const sub = panel.optionSelected.subscribe(({ value }) => {
        this.add(`${value ?? ""}`);
        this._text_input().nativeElement.value = "";
        this.textChange.emit("");
      });
      on_cleanup(() => sub.unsubscribe());
    });
    effect(() => this._edit_input()?.nativeElement.focus());
  }
  onKeydown(event, element) {
    if (this.separators().includes(event.key)) {
      if (!element.value.trim())
        return;
      event.preventDefault();
      this.addText(element);
    } else if (event.key === "Backspace" && !element.value) {
      const items = this.list();
      if (items.length)
        this.remove(items[items.length - 1]);
    }
  }
  /** Add the text of the input as an item and clear the input */
  addText(element) {
    this._onTouched();
    if (this.add(element.value)) {
      element.value = "";
      this.textChange.emit("");
    }
  }
  /** Add an item. Returns whether the text was not empty */
  add(text) {
    const item = text.trim();
    if (!item)
      return false;
    if (!this.list().includes(item))
      this._set([...this.list(), item]);
    return true;
  }
  remove(item) {
    this._set(this.list().filter((existing) => existing !== item));
  }
  startEdit(item) {
    this.editing.set(item);
  }
  /**
   * Replace an item with its edited text, keeping its position.
   * Empty text removes the item. Text of another item merges into it.
   */
  finishEdit(item, text) {
    if (this.editing() !== item)
      return;
    this.editing.set(null);
    const value = text.trim();
    const items = this.list();
    if (!value || value !== item && items.includes(value)) {
      this.remove(item);
    } else if (value !== item) {
      this._set(items.map((existing) => existing === item ? value : existing));
    }
  }
  writeValue(value) {
    this.value.set(value || []);
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
  _set(value) {
    this.value.set(value);
    this._onChange(value);
  }
  static \u0275fac = function ChipListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChipListComponent, selectors: [["app-chip-list"]], viewQuery: function ChipListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._text_input, _c0, 5)(ctx._edit_input, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, hostAttrs: ["role", "list", 1, "chip-list"], inputs: { value: [1, "value"], placeholder: [1, "placeholder"], inputId: [1, "inputId"], separators: [1, "separators"], editable: [1, "editable"], disabled: [1, "disabled"], autocomplete: [1, "autocomplete"] }, outputs: { value: "valueChange", textChange: "textChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ChipListComponent),
      multi: true
    }
  ])], decls: 4, vars: 4, consts: [["text_input", ""], ["edit_input", ""], ["role", "listitem", 1, "chip"], [1, "chip-input", 3, "keydown", "blur", "input", "id", "placeholder", "disabled", "appAutocomplete"], [1, "chip-edit", 3, "value"], [1, "chip-edit", 3, "keydown.enter", "keydown.escape", "blur", "value"], [1, "chip-text"], ["type", "button", 1, "chip-action"], ["type", "button", 1, "chip-action", 3, "click"]], template: function ChipListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275repeaterCreate(0, ChipListComponent_For_1_Template, 3, 1, "span", 2, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(2, "input", 3, 0);
      \u0275\u0275listener("keydown", function ChipListComponent_Template_input_keydown_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        const text_input_r8 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(ctx.onKeydown($event, text_input_r8));
      })("blur", function ChipListComponent_Template_input_blur_2_listener() {
        \u0275\u0275restoreView(_r1);
        const text_input_r8 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(ctx.addText(text_input_r8));
      })("input", function ChipListComponent_Template_input_input_2_listener() {
        \u0275\u0275restoreView(_r1);
        const text_input_r8 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(ctx.textChange.emit(text_input_r8.value));
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.list());
      \u0275\u0275advance(2);
      \u0275\u0275property("id", ctx.inputId())("placeholder", ctx.placeholder())("disabled", ctx.is_disabled())("appAutocomplete", ctx.autocomplete());
    }
  }, dependencies: [IconComponent, AutocompleteTriggerDirective, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipListComponent, [{
    type: Component,
    args: [{
      selector: "app-chip-list",
      template: `
        @for (item of list(); track item) {
            <span class="chip" role="listitem">
                @if (editing() === item) {
                    <input
                        #edit_input
                        class="chip-edit"
                        [value]="item"
                        [attr.aria-label]="
                            'COMMON.EDIT_TYPE' | translate: { name: item }
                        "
                        (keydown.enter)="
                            $event.preventDefault();
                            finishEdit(item, edit_input.value)
                        "
                        (keydown.escape)="
                            $event.stopPropagation(); editing.set(null)
                        "
                        (blur)="finishEdit(item, edit_input.value)"
                    />
                } @else {
                    <span class="chip-text">{{ item }}</span>
                    @if (editable() && !is_disabled()) {
                        <button
                            type="button"
                            class="chip-action"
                            [attr.aria-label]="
                                'COMMON.EDIT_TYPE' | translate: { name: item }
                            "
                            (click)="startEdit(item)"
                        >
                            <icon>edit</icon>
                        </button>
                    }
                    @if (!is_disabled()) {
                        <button
                            type="button"
                            class="chip-action"
                            [attr.aria-label]="
                                ('COMMON.REMOVE' | translate) + ' ' + item
                            "
                            (click)="remove(item)"
                        >
                            <icon>cancel</icon>
                        </button>
                    }
                }
            </span>
        }
        <input
            #text_input
            class="chip-input"
            [id]="inputId()"
            [placeholder]="placeholder()"
            [disabled]="is_disabled()"
            [appAutocomplete]="autocomplete()"
            (keydown)="onKeydown($event, text_input)"
            (blur)="addText(text_input)"
            (input)="textChange.emit(text_input.value)"
        />
    `,
      imports: [IconComponent, TranslatePipe, AutocompleteTriggerDirective],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => ChipListComponent),
          multi: true
        }
      ],
      host: { class: "chip-list", role: "list" }
    }]
  }], () => [], { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: Output, args: ["valueChange"] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], inputId: [{ type: Input, args: [{ isSignal: true, alias: "inputId", required: false }] }], separators: [{ type: Input, args: [{ isSignal: true, alias: "separators", required: false }] }], editable: [{ type: Input, args: [{ isSignal: true, alias: "editable", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], autocomplete: [{ type: Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], textChange: [{ type: Output, args: ["textChange"] }], _text_input: [{ type: ViewChild, args: ["text_input", { isSignal: true }] }], _edit_input: [{ type: ViewChild, args: ["edit_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChipListComponent, { className: "ChipListComponent", filePath: "src/app/ui/controls/chip-list.component.ts", lineNumber: 101 });
})();

export {
  ChipListComponent
};
//# debugId=bd4c8fc4-f1a4-53c4-9b51-eb894259e638
//# sourceMappingURL=chunk-REL7BG6R.js.map
