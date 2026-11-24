import {
  AsyncHandler
} from "./chunk-UONBBRS5.js";
import {
  online,
  realtime
} from "./chunk-TXVXL5KT.js";
import {
  Directive,
  ElementRef,
  Input,
  Output,
  Renderer2,
  effect,
  inject,
  input,
  linkedSignal,
  output,
  setClassMetadata,
  untracked,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/binding.directive.ts
var BindingDirective = class _BindingDirective extends AsyncHandler {
  _element = inject(ElementRef);
  _renderer = inject(Renderer2);
  /** ID of the system to bind */
  sys = input(
    "",
    ...ngDevMode ? [{ debugName: "sys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Class name of the module to bind */
  mod = input(
    "",
    ...ngDevMode ? [{ debugName: "mod" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Index of the system to bind */
  index = input(
    1,
    ...ngDevMode ? [{ debugName: "index" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Status variable to bind to */
  bind = input(
    "",
    ...ngDevMode ? [{ debugName: "bind" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Method to execute */
  exec = input(
    "",
    ...ngDevMode ? [{ debugName: "exec" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Method to execute */
  delay = input(
    100,
    ...ngDevMode ? [{ debugName: "delay" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Event to listen for on the parent */
  onEvent = input(
    "",
    ...ngDevMode ? [{ debugName: "onEvent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** JSON arguments of the module method to execute */
  params = input(
    null,
    ...ngDevMode ? [{ debugName: "params" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ignore = input(
    false,
    ...ngDevMode ? [{ debugName: "ignore" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Current value of the binding */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  modelInput = input(null, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "modelInput" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "model" }));
  model = linkedSignal(
    this.modelInput,
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emitter for changes to the value of the binding */
  modelChange = output();
  _binding = false;
  _old_model = null;
  constructor() {
    super();
    effect(() => {
      if (online())
        untracked(() => this.bindVariable());
    });
  }
  /**
   * Realtime target of the module function or status variable. A module
   * with an index suffix, such as `_TRIGGER__1`, gives that index, as in 6.x
   */
  _target(name) {
    const slug = /^(.+)_(\d+)$/.exec(this.mod());
    return slug ? {
      sys: this.sys(),
      mod: slug[1],
      index: Math.max(1, +slug[2]),
      name
    } : { sys: this.sys(), mod: this.mod(), index: this.index(), name };
  }
  ngOnChanges(changes) {
    if (changes.sys || changes.mod || changes.bind) {
      this.bindVariable();
    }
    const model = this.model();
    if (changes.modelInput && this._old_model !== model && model != null) {
      this._old_model = model;
      this.execute();
    }
    const on_event = this.onEvent();
    if (changes.onEvent && on_event) {
      this.subscription("onEvent", this._renderer.listen(this._element.nativeElement, on_event, () => this.execute()));
    }
  }
  /** Bind to set status variable */
  bindVariable() {
    if (online() && this.bind() && this.sys() && this.mod() && !this._binding) {
      this.timeout("bind", () => {
        this._binding = true;
        const release = realtime().bind(this._target(this.bind()), (state) => {
          if (state.kind !== "value" || state.value == null)
            return;
          setTimeout(() => {
            this._binding = false;
            this.clearTimeout("bound");
            if (this.ignore())
              return;
            this.model.set(state.value);
            this._old_model = this.model();
            this.modelChange.emit(this.model());
          }, 10);
        });
        this.subscription("binding", release);
        this.timeout("bound", () => this._binding = false, 200);
      }, 20);
    }
  }
  /** Excute the set method on the module */
  execute() {
    if (online() && this.exec() && this.sys() && this.mod() && !this._timers["execute"]) {
      this.timeout("execute", () => {
        let params = this.params();
        if (this.bind())
          params = this.params() || [this.model()];
        realtime().exec(this._target(this.exec()), params || []).then((result) => {
          if (result.ok === false || this.bind())
            return;
          this.model.set(result.value);
          this._old_model = this.model();
          this.modelChange.emit(this.model());
        });
      }, this.delay());
    }
  }
  static \u0275fac = function BindingDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BindingDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BindingDirective, selectors: [["i", "bind", ""], ["", "binding", ""], ["co-bind"]], inputs: { sys: [1, "sys"], mod: [1, "mod"], index: [1, "index"], bind: [1, "bind"], exec: [1, "exec"], delay: [1, "delay"], onEvent: [1, "onEvent"], params: [1, "params"], ignore: [1, "ignore"], modelInput: [1, "model", "modelInput"] }, outputs: { modelChange: "modelChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDirective, [{
    type: Directive,
    args: [{
      selector: "i[bind], [binding], co-bind"
    }]
  }], () => [], { sys: [{ type: Input, args: [{ isSignal: true, alias: "sys", required: false }] }], mod: [{ type: Input, args: [{ isSignal: true, alias: "mod", required: false }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: false }] }], bind: [{ type: Input, args: [{ isSignal: true, alias: "bind", required: false }] }], exec: [{ type: Input, args: [{ isSignal: true, alias: "exec", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], onEvent: [{ type: Input, args: [{ isSignal: true, alias: "onEvent", required: false }] }], params: [{ type: Input, args: [{ isSignal: true, alias: "params", required: false }] }], ignore: [{ type: Input, args: [{ isSignal: true, alias: "ignore", required: false }] }], modelInput: [{ type: Input, args: [{ isSignal: true, alias: "model", required: false }] }], modelChange: [{ type: Output, args: ["modelChange"] }] });
})();

export {
  BindingDirective
};
//# debugId=270b724d-137b-5bbd-95df-f9e9e9fee61a
//# sourceMappingURL=chunk-RNOAEBTH.js.map
