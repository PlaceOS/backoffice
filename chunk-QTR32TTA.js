import {
  Injectable,
  setClassMetadata,
  unique,
  ɵɵdefineInjectable
} from "./chunk-RH6UOTOJ.js";
import {
  BehaviorSubject
} from "./chunk-Y5GQFF5E.js";

// src/app/common/hotkeys.service.ts
var INVALID_STANDALONE_KEYS = [
  "control",
  "shift",
  "alt",
  "meta",
  "os"
];
var HotkeysService = class _HotkeysService {
  /** Map of subjects which store press states of keys */
  keydown_states = {};
  /** Map of obserers for key state subjects */
  keydown_observers = {};
  /** List of keys at the end of a combination */
  combo_end = [];
  /** List of registered hotkey combinations */
  registered_combos = [];
  /** Counter for the number of keydown events. Used for checking order of key presses */
  counter = 0;
  /** Last key code to be pressed */
  last_down;
  constructor() {
    window.addEventListener("keydown", (event) => {
      if (document.getSelection().type === "Range" || this.isEditableElementFocused()) {
        return;
      }
      const code = this.mapKey((event.code || "").toLowerCase());
      if (this.last_down !== code) {
        this.setKeyState(code, ++this.counter);
        if (this.combo_end.indexOf(code) >= 0) {
          event.preventDefault();
        }
        this.last_down = code;
      }
    });
    window.addEventListener("keyup", (event) => {
      const code = this.mapKey((event.code || "").toLowerCase());
      if (this.keydown_states[code]) {
        this.keydown_states[code].next(null);
      }
      if (this.last_down === code) {
        this.last_down = null;
      }
    });
  }
  /**
   * Listen to the given key combination
   * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
   * @param next Callback for combination presses
   */
  listen(combo, next) {
    combo = combo instanceof Array ? combo : combo.split("+");
    const combination = combo.map((i) => this.mapKey(i.toLowerCase()));
    if (combination.length > 0 && this.validCombination(combination)) {
      this.registered_combos.push(combination);
      const last_key = combination[combination.length - 1];
      this.setKeyState(last_key, null);
      this.updateCombinationEndList();
      return this.keydown_observers[last_key].subscribe((count) => {
        if (count) {
          const presses = [];
          if (combination.length > 0) {
            for (const key of combination) {
              const state = this.keydown_states[key];
              presses.push(state ? state.getValue() || -1 : -1);
            }
            for (let i = 0; i < combination.length - 1; i++) {
              if (presses[i] > presses[i + 1]) {
                return;
              }
            }
          }
          const total = presses.reduce((a, v) => a + (v > 0 ? 1 : -1), 0);
          if (total >= combination.length) {
            next();
          }
        }
      });
    }
    return null;
  }
  /**
   * Check if an editable element is currently focused
   * This includes input, textarea, contenteditable elements, and code editors
   */
  isEditableElementFocused() {
    const active = document.activeElement;
    if (!active)
      return false;
    const tag_name = active.tagName.toLowerCase();
    if (tag_name === "input" || tag_name === "textarea") {
      return true;
    }
    if (active.getAttribute("contenteditable") === "true") {
      return true;
    }
    if (active.closest(".monaco-editor")) {
      return true;
    }
    return false;
  }
  /**
   * Map key codes with multiple versions to simple form
   * @param code Code to transform
   */
  mapKey(code) {
    if (code.indexOf("alt") >= 0 || code.indexOf("shift") >= 0 || code.indexOf("control") >= 0) {
      return code.replace("left", "").replace("right", "");
    }
    return code;
  }
  /**
   * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
   */
  updateCombinationEndList() {
    const key_list = [];
    for (const combo of this.registered_combos) {
      key_list.push(combo[combo.length - 1]);
    }
    this.combo_end = unique(key_list);
  }
  /**
   * Checks if the given hotkey combination is allowed and valid
   * @param combo Array of key codes
   */
  validCombination(combo) {
    let non_meta = 0;
    for (const key of combo) {
      if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
        non_meta++;
      }
    }
    return non_meta > 0;
  }
  /**
   * Update the state of a keycode
   * @param code Code of the key
   * @param value New state value for key
   */
  setKeyState(code, value = null) {
    if (!this.keydown_states[code]) {
      this.keydown_states[code] = new BehaviorSubject(null);
      this.keydown_observers[code] = this.keydown_states[code].asObservable();
    }
    this.keydown_states[code].next(value);
  }
  static \u0275fac = function HotkeysService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HotkeysService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HotkeysService, factory: _HotkeysService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotkeysService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  HotkeysService
};
//# sourceMappingURL=chunk-QTR32TTA.js.map
