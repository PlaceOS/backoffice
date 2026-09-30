import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogState } from '@angular/material/dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HotkeysService } from '../../app/common/hotkeys.service';

describe('HotkeysService', () => {
    let service: HotkeysService;
    let open_dialogs: { getState: () => MatDialogState }[];

    const keyEvent = (
        type: 'keydown' | 'keyup',
        code: string,
        init: KeyboardEventInit = {},
    ) => {
        const event = new KeyboardEvent(type, {
            code,
            cancelable: true,
            ...init,
        });
        window.dispatchEvent(event);
        return event;
    };

    const openDialog = () => {
        const ref = { getState: () => MatDialogState.OPEN };
        open_dialogs.push(ref);
        return ref;
    };

    beforeEach(() => {
        open_dialogs = [];
        TestBed.configureTestingModule({
            providers: [
                HotkeysService,
                {
                    provide: MatDialog,
                    useValue: {
                        get openDialogs() {
                            return open_dialogs;
                        },
                    },
                },
            ],
        });
        service = TestBed.inject(HotkeysService);
    });

    describe('listen', () => {
        it('should accept string combination', () => {
            const callback = vi.fn();
            const subscription = service.listen('Alt+KeyK', callback);
            expect(subscription).toBeTruthy();
            subscription?.unsubscribe();
        });

        it('should accept array combination', () => {
            const callback = vi.fn();
            const subscription = service.listen(['alt', 'keyk'], callback);
            expect(subscription).toBeTruthy();
            subscription?.unsubscribe();
        });

        it('should return null for invalid combination (only meta keys)', () => {
            const callback = vi.fn();
            const subscription = service.listen(['control', 'shift'], callback);
            expect(subscription).toBeNull();
        });

        it('should return null for empty combination', () => {
            const callback = vi.fn();
            const subscription = service.listen([], callback);
            expect(subscription).toBeNull();
        });

        it('should allow combination with single non-meta key', () => {
            const callback = vi.fn();
            const subscription = service.listen(['keyk'], callback);
            expect(subscription).toBeTruthy();
            subscription?.unsubscribe();
        });

        it('should allow combination with meta + non-meta key', () => {
            const callback = vi.fn();
            const subscription = service.listen(['control', 'keyk'], callback);
            expect(subscription).toBeTruthy();
            subscription?.unsubscribe();
        });

        it('should return unsubscribable subscription', () => {
            const callback = vi.fn();
            const subscription = service.listen('Alt+KeyK', callback);
            expect(() => subscription?.unsubscribe()).not.toThrow();
        });
    });

    describe('key mapping', () => {
        it('should map AltLeft to alt', () => {
            const callback = vi.fn();
            // Both should work as they map to the same key
            const sub1 = service.listen(['altleft', 'keyk'], callback);
            const sub2 = service.listen(['alt', 'keyk'], callback);
            expect(sub1).toBeTruthy();
            expect(sub2).toBeTruthy();
            sub1?.unsubscribe();
            sub2?.unsubscribe();
        });

        it('should handle case insensitivity', () => {
            const callback = vi.fn();
            const sub1 = service.listen('ALT+KEYK', callback);
            const sub2 = service.listen('alt+keyk', callback);
            expect(sub1).toBeTruthy();
            expect(sub2).toBeTruthy();
            sub1?.unsubscribe();
            sub2?.unsubscribe();
        });
    });

    describe('valid combinations', () => {
        const valid_combos = [
            ['keya'],
            ['shift', 'keya'],
            ['control', 'keya'],
            ['alt', 'keya'],
            ['control', 'shift', 'keya'],
            ['control', 'alt', 'keya'],
            ['escape'],
            ['f1'],
            ['enter'],
        ];

        valid_combos.forEach((combo) => {
            it(`should accept valid combination: ${combo.join('+')}`, () => {
                const callback = vi.fn();
                const subscription = service.listen(combo, callback);
                expect(subscription).toBeTruthy();
                subscription?.unsubscribe();
            });
        });
    });

    describe('invalid combinations', () => {
        const invalid_combos = [
            ['control'],
            ['shift'],
            ['alt'],
            ['meta'],
            ['control', 'shift'],
            ['alt', 'meta'],
            ['control', 'shift', 'alt'],
        ];

        invalid_combos.forEach((combo) => {
            it(`should reject invalid combination (meta only): ${combo.join('+')}`, () => {
                const callback = vi.fn();
                const subscription = service.listen(combo, callback);
                expect(subscription).toBeNull();
            });
        });
    });

    describe('modifier keys', () => {
        it('ignores a single key combination while Control or Meta is held', () => {
            const callback = vi.fn();
            const subscription = service.listen(['KeyE'], callback);
            for (const init of [{ ctrlKey: true }, { metaKey: true }]) {
                const event = keyEvent('keydown', 'KeyE', init);
                keyEvent('keyup', 'KeyE', init);
                expect(event.defaultPrevented).toBe(false);
            }
            expect(callback).not.toHaveBeenCalled();
            keyEvent('keydown', 'KeyE');
            keyEvent('keyup', 'KeyE');
            expect(callback).toHaveBeenCalledTimes(1);
            subscription?.unsubscribe();
        });

        it('fires a combination that includes the held modifier', () => {
            const callback = vi.fn();
            const subscription = service.listen(['Control', 'KeyK'], callback);
            keyEvent('keydown', 'ControlLeft', { ctrlKey: true });
            keyEvent('keydown', 'KeyK', { ctrlKey: true });
            keyEvent('keyup', 'KeyK', { ctrlKey: true });
            keyEvent('keyup', 'ControlLeft');
            expect(callback).toHaveBeenCalledTimes(1);
            subscription?.unsubscribe();
        });

        it.each([
            ['AltLeft', 'ShiftLeft'],
            ['ShiftLeft', 'AltLeft'],
        ])(
            'fires Alt+Shift+A when %s is pressed before %s',
            (first, second) => {
                const callback = vi.fn();
                const subscription = service.listen('Alt+Shift+KeyA', callback);
                const init = { altKey: true, shiftKey: true };
                keyEvent('keydown', first, init);
                keyEvent('keydown', second, init);
                keyEvent('keydown', 'KeyA', init);
                keyEvent('keyup', 'KeyA', init);
                keyEvent('keyup', second);
                keyEvent('keyup', first);
                expect(callback).toHaveBeenCalledTimes(1);
                subscription?.unsubscribe();
            },
        );

        it('does not fire a combination when one of its modifiers is missing', () => {
            const callback = vi.fn();
            const subscription = service.listen('Alt+Shift+KeyA', callback);
            keyEvent('keydown', 'AltLeft', { altKey: true });
            keyEvent('keydown', 'KeyA', { altKey: true });
            keyEvent('keyup', 'KeyA', { altKey: true });
            keyEvent('keyup', 'AltLeft');
            expect(callback).not.toHaveBeenCalled();
            subscription?.unsubscribe();
        });
    });

    describe('dialogs', () => {
        const press = (code: string) => {
            keyEvent('keydown', code);
            keyEvent('keyup', code);
        };

        it('ignores page hotkeys while a dialog is open', () => {
            const callback = vi.fn();
            const subscription = service.listen(['KeyE'], callback);
            const dialog = openDialog();
            press('KeyE');
            expect(callback).not.toHaveBeenCalled();
            open_dialogs.splice(open_dialogs.indexOf(dialog), 1);
            press('KeyE');
            expect(callback).toHaveBeenCalledTimes(1);
            subscription?.unsubscribe();
        });

        it('fires hotkeys registered by the top dialog only', () => {
            openDialog();
            const first = vi.fn();
            const first_sub = service.listen(['KeyS'], first);
            press('KeyS');
            expect(first).toHaveBeenCalledTimes(1);
            const nested = openDialog();
            const second = vi.fn();
            const second_sub = service.listen(['KeyS'], second);
            press('KeyS');
            expect(first).toHaveBeenCalledTimes(1);
            expect(second).toHaveBeenCalledTimes(1);
            second_sub?.unsubscribe();
            open_dialogs.splice(open_dialogs.indexOf(nested), 1);
            press('KeyS');
            expect(first).toHaveBeenCalledTimes(2);
            first_sub?.unsubscribe();
        });

        it('treats a listener registered during a dialog close as page level', () => {
            const dialog = {
                state: MatDialogState.CLOSING,
                getState() {
                    return this.state;
                },
            };
            open_dialogs.push(dialog);
            const callback = vi.fn();
            const subscription = service.listen(['KeyK'], callback);
            open_dialogs.splice(0, 1);
            press('KeyK');
            expect(callback).toHaveBeenCalledTimes(1);
            subscription?.unsubscribe();
        });
    });

    describe('multiple subscriptions', () => {
        it('should allow multiple subscriptions to different combinations', () => {
            const callback1 = vi.fn();
            const callback2 = vi.fn();

            const sub1 = service.listen('Alt+KeyA', callback1);
            const sub2 = service.listen('Alt+KeyB', callback2);

            expect(sub1).toBeTruthy();
            expect(sub2).toBeTruthy();

            sub1?.unsubscribe();
            sub2?.unsubscribe();
        });

        it('should allow multiple subscriptions to same combination', () => {
            const callback1 = vi.fn();
            const callback2 = vi.fn();

            const sub1 = service.listen('Alt+KeyK', callback1);
            const sub2 = service.listen('Alt+KeyK', callback2);

            expect(sub1).toBeTruthy();
            expect(sub2).toBeTruthy();

            sub1?.unsubscribe();
            sub2?.unsubscribe();
        });
    });
});
