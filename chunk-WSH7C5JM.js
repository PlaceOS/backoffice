import {
  MatDialog,
  MatDialogState
} from "./chunk-XMG57YWH.js";
import {
  unique
} from "./chunk-IWUSEH7D.js";
import {
  Service,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-M2N6S2L7.js";

// src/app/common/hotkeys.service.ts
var INVALID_STANDALONE_KEYS = [
  "control",
  "shift",
  "alt",
  "meta",
  "os"
];
var MODIFIER_KEYS = ["control", "shift", "alt", "meta"];
var HotkeysService = class _HotkeysService {
  _dialog = inject(MatDialog);
  /** Map of signals which store press states of keys */
  keydown_states = {};
  /** Map of listeners for key state signals */
  keydown_listeners = {};
  /** List of keys at the end of a combination */
  combo_end = [];
  /** List of registered hotkey combinations */
  registered_combos = [];
  /** Counter for the number of keydown events */
  counter = 0;
  /** Last key code to be pressed */
  last_down;
  /** Modifiers (including shift) held during the last keydown event */
  held_modifiers = [];
  constructor() {
    window.addEventListener("keydown", (event) => {
      if (document.getSelection().type === "Range" || this.isEditableElementFocused()) {
        return;
      }
      const code = this.mapKey((event.code || "").toLowerCase());
      this.held_modifiers = this.heldModifiers(event);
      if (!INVALID_STANDALONE_KEYS.includes(code) && !this.registered_combos.some((combo) => combo[combo.length - 1] === code && this.allowsModifiers(combo))) {
        return;
      }
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
        this.setKeyState(code, null);
      }
      if (this.last_down === code) {
        this.last_down = null;
      }
    });
  }
  /**
   * Listen to the given key combination.
   * Modifiers may be pressed in any order, but the last key must be pressed last.
   * The listener belongs to the dialog that is on top when it is registered
   * (or to the page when no dialog is open) and only fires while that layer is on top.
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
      const owner = this.topDialog();
      const listener = (count) => {
        if (count && this.allowsModifiers(combination) && this.isActiveLayer(owner) && combination.every((key) => this.isPressed(key))) {
          next();
        }
      };
      this.keydown_listeners[last_key].push(listener);
      return {
        unsubscribe: () => {
          this.keydown_listeners[last_key] = this.keydown_listeners[last_key].filter((item) => item !== listener);
        }
      };
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
    if (active.isContentEditable) {
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
    if (code.indexOf("alt") >= 0 || code.indexOf("shift") >= 0 || code.indexOf("control") >= 0 || code.indexOf("meta") >= 0) {
      return code.replace("left", "").replace("right", "");
    }
    return code;
  }
  /** List the modifiers held during a key event */
  heldModifiers(event) {
    const held = [];
    if (event.ctrlKey)
      held.push("control");
    if (event.shiftKey)
      held.push("shift");
    if (event.altKey)
      held.push("alt");
    if (event.metaKey)
      held.push("meta");
    return held;
  }
  /**
   * Whether the combination includes every modifier currently held.
   * Shift is ignored so that it does not block single key hotkeys.
   */
  allowsModifiers(combo) {
    return this.held_modifiers.every((key) => key === "shift" || combo.includes(key));
  }
  /** Whether the key is held. Modifiers use the event flags, so order does not matter */
  isPressed(key) {
    if (MODIFIER_KEYS.includes(key)) {
      return this.held_modifiers.includes(key);
    }
    return (this.keydown_states[key]?.() || 0) > 0;
  }
  /** Top-most dialog that is open and not closing, or null if there is none */
  topDialog() {
    const open = this._dialog.openDialogs.filter((ref) => ref.getState() === MatDialogState.OPEN);
    return open[open.length - 1] || null;
  }
  /**
   * Whether a listener registered while `owner` was on top may fire now.
   * A listener from a dialog that has since closed is treated as page level.
   */
  isActiveLayer(owner) {
    const layer = owner && this._dialog.openDialogs.includes(owner) ? owner : null;
    return this.topDialog() === layer;
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
      this.keydown_states[code] = signal(null);
      this.keydown_listeners[code] = [];
    }
    this.keydown_states[code].set(value);
    for (const listener of this.keydown_listeners[code]) {
      listener(value);
    }
  }
  static \u0275fac = function HotkeysService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HotkeysService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _HotkeysService, factory: _HotkeysService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotkeysService, [{
    type: Service
  }], () => [], null);
})();

export {
  HotkeysService
};
//# sourceMappingURL=chunk-WSH7C5JM.js.map
