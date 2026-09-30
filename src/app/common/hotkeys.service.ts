import { Service, WritableSignal, inject, signal } from '@angular/core';
import {
    MatDialog,
    MatDialogRef,
    MatDialogState,
} from '@angular/material/dialog';

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

/** Modifier keys whose held state is read from the key event flags */
const MODIFIER_KEYS: string[] = ['control', 'shift', 'alt', 'meta'];

@Service()
export class HotkeysService {
    private _dialog = inject(MatDialog);
    /** Map of signals which store press states of keys */
    private keydown_states: HashMap<WritableSignal<number>> = {};
    /** Map of listeners for key state signals */
    private keydown_listeners: HashMap<((value: number) => void)[]> = {};
    /** List of keys at the end of a combination */
    private combo_end: string[] = [];
    /** List of registered hotkey combinations */
    private registered_combos: string[][] = [];
    /** Counter for the number of keydown events */
    private counter = 0;
    /** Last key code to be pressed */
    private last_down: string;
    /** Modifiers (including shift) held during the last keydown event */
    private held_modifiers: string[] = [];

    constructor() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (
                document.getSelection().type === 'Range' ||
                this.isEditableElementFocused()
            ) {
                return;
            }
            const code = this.mapKey((event.code || '').toLowerCase());
            this.held_modifiers = this.heldModifiers(event);
            // Leave e.g. Ctrl+C to the browser if no combination uses Control
            if (
                !INVALID_STANDALONE_KEYS.includes(code) &&
                !this.registered_combos.some(
                    (combo) =>
                        combo[combo.length - 1] === code &&
                        this.allowsModifiers(combo),
                )
            ) {
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
     * Listen to the given key combination.
     * Modifiers may be pressed in any order, but the last key must be pressed last.
     * The listener belongs to the dialog that is on top when it is registered
     * (or to the page when no dialog is open) and only fires while that layer is on top.
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
            const owner = this.topDialog();
            const listener = (count: number) => {
                if (
                    count &&
                    this.allowsModifiers(combination) &&
                    this.isActiveLayer(owner) &&
                    combination.every((key) => this.isPressed(key))
                ) {
                    next();
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
        if ((active as HTMLElement).isContentEditable) {
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
            code.indexOf('control') >= 0 ||
            code.indexOf('meta') >= 0
        ) {
            return code.replace('left', '').replace('right', '');
        }
        return code;
    }

    /** List the modifiers held during a key event */
    private heldModifiers(event: KeyboardEvent): string[] {
        const held: string[] = [];
        if (event.ctrlKey) held.push('control');
        if (event.shiftKey) held.push('shift');
        if (event.altKey) held.push('alt');
        if (event.metaKey) held.push('meta');
        return held;
    }

    /**
     * Whether the combination includes every modifier currently held.
     * Shift is ignored so that it does not block single key hotkeys.
     */
    private allowsModifiers(combo: string[]): boolean {
        return this.held_modifiers.every(
            (key) => key === 'shift' || combo.includes(key),
        );
    }

    /** Whether the key is held. Modifiers use the event flags, so order does not matter */
    private isPressed(key: string): boolean {
        if (MODIFIER_KEYS.includes(key)) {
            return this.held_modifiers.includes(key);
        }
        return (this.keydown_states[key]?.() || 0) > 0;
    }

    /** Top-most dialog that is open and not closing, or null if there is none */
    private topDialog(): MatDialogRef<unknown> | null {
        const open = this._dialog.openDialogs.filter(
            (ref) => ref.getState() === MatDialogState.OPEN,
        );
        return open[open.length - 1] || null;
    }

    /**
     * Whether a listener registered while `owner` was on top may fire now.
     * A listener from a dialog that has since closed is treated as page level.
     */
    private isActiveLayer(owner: MatDialogRef<unknown> | null): boolean {
        const layer =
            owner && this._dialog.openDialogs.includes(owner) ? owner : null;
        return this.topDialog() === layer;
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
