import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HotkeysService } from '../../app/common/hotkeys.service';

describe('HotkeysService', () => {
    let service: HotkeysService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HotkeysService],
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
