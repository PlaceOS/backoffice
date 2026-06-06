import { Service, WritableSignal, signal } from '@angular/core';

import { unique } from '../common/general';
import { SubscriptionLike } from '../common/signals';
import { HashMap } from '../common/types';

/** List of keys that cannot be in a combination by themselves or with each other */
const INVALID_STANDALONE_KEYS: string[] = [
    'control',
    'shift',
    'alt',
    'meta',
    'os',
];

@Service()
export class HotkeysService {
    /** Map of signals which store press states of keys */
    private keydown_states: HashMap<WritableSignal<number>> = {};
    /** Map of listeners for key state signals */
    private keydown_listeners: HashMap<((value: number) => void)[]> = {};
    /** List of keys at the end of a combination */
    private combo_end: string[] = [];
    /** List of registered hotkey combinations */
    private registered_combos: string[][] = [];
    /** Counter for the number of keydown events. Used for checking order of key presses */
    private counter = 0;
    /** Last key code to be pressed */
    private last_down: string;

    constructor() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (
                document.getSelection().type === 'Range' ||
                this.isEditableElementFocused()
            ) {
                return;
            }
            const code = this.mapKey((event.code || '').toLowerCase());
            if (this.last_down !== code) {
                this.setKeyState(code, ++this.counter);
                if (this.combo_end.indexOf(code) >= 0) {
                    event.preventDefault();
                }
                this.last_down = code;
            }
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            const code = this.mapKey((event.code || '').toLowerCase());
            if (this.keydown_states[code]) {
                this.setKeyState(code, null);
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
    public listen(
        combo: string | string[],
        next: () => void,
    ): SubscriptionLike | null {
        combo = combo instanceof Array ? combo : combo.split('+');
        const combination: string[] = combo.map((i) =>
            this.mapKey(i.toLowerCase()),
        );
        if (combination.length > 0 && this.validCombination(combination)) {
            this.registered_combos.push(combination);
            const last_key = combination[combination.length - 1];
            this.setKeyState(last_key, null);
            this.updateCombinationEndList();
            const listener = (count: number) => {
                if (count) {
                    const presses: number[] = [];
                    if (combination.length > 0) {
                        // Check that keys are pressed
                        for (const key of combination) {
                            const state = this.keydown_states[key];
                            presses.push(state ? state() || -1 : -1);
                        }
                        // Check that keys are pressed in the correct order
                        for (let i = 0; i < combination.length - 1; i++) {
                            if (presses[i] > presses[i + 1]) {
                                return;
                            }
                        }
                    }
                    const total = presses.reduce(
                        (a, v) => a + (v > 0 ? 1 : -1),
                        0,
                    );
                    if (total >= combination.length) {
                        next();
                    }
                }
            };
            this.keydown_listeners[last_key].push(listener);
            return {
                unsubscribe: () => {
                    this.keydown_listeners[last_key] = this.keydown_listeners[
                        last_key
                    ].filter((item) => item !== listener);
                },
            };
        }
        return null;
    }

    /**
     * Check if an editable element is currently focused
     * This includes input, textarea, contenteditable elements, and code editors
     */
    private isEditableElementFocused(): boolean {
        const active = document.activeElement;
        if (!active) return false;

        const tag_name = active.tagName.toLowerCase();

        // Check for standard form inputs
        if (tag_name === 'input' || tag_name === 'textarea') {
            return true;
        }

        // Check for contenteditable elements
        if (active.getAttribute('contenteditable') === 'true') {
            return true;
        }

        // Check if inside a Monaco editor (used for settings forms)
        if (active.closest('.monaco-editor')) {
            return true;
        }

        return false;
    }

    /**
     * Map key codes with multiple versions to simple form
     * @param code Code to transform
     */
    private mapKey(code: string): string {
        if (
            code.indexOf('alt') >= 0 ||
            code.indexOf('shift') >= 0 ||
            code.indexOf('control') >= 0
        ) {
            return code.replace('left', '').replace('right', '');
        }
        return code;
    }

    /**
     * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
     */
    private updateCombinationEndList(): void {
        const key_list = [];
        for (const combo of this.registered_combos) {
            key_list.push(combo[combo.length - 1]);
        }
        this.combo_end = unique(key_list) as string[];
    }

    /**
     * Checks if the given hotkey combination is allowed and valid
     * @param combo Array of key codes
     */
    private validCombination(combo: string[]): boolean {
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
    private setKeyState(code: string, value: number = null) {
        if (!this.keydown_states[code]) {
            this.keydown_states[code] = signal(null);
            this.keydown_listeners[code] = [];
        }
        this.keydown_states[code].set(value);
        for (const listener of this.keydown_listeners[code]) {
            listener(value);
        }
    }
}
