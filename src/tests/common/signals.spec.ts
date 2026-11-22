import { signal } from '@angular/core';
import { describe, expect, it, vi } from 'vitest';
import { waitForSignalValue } from '../../app/common/signals';

describe('signals.ts utilities', () => {
    describe('waitForSignalValue', () => {
        it('should return the current value when it matches', async () => {
            const value = signal(42);
            expect(await waitForSignalValue(value)).toBe(42);
        });

        it('should return the first matching value', async () => {
            const value = signal(0);
            const promise = waitForSignalValue(value, (_) => !!_, 1);
            value.set(1);
            expect(await promise).toBe(1);
        });

        it('should skip non-matching values', async () => {
            const value = signal('');
            const promise = waitForSignalValue(value, (_) => !!_, 1);
            value.set('hello');
            expect(await promise).toBe('hello');
        });

        it('rejects when no matching value arrives in time', async () => {
            vi.useFakeTimers();
            try {
                const value = signal(false);
                const promise = waitForSignalValue(value, Boolean, 50, 1000);
                const result = expect(promise).rejects.toThrow('Timed out');
                await vi.advanceTimersByTimeAsync(1000);
                await result;
                expect(vi.getTimerCount()).toBe(0);
            } finally {
                vi.useRealTimers();
            }
        });
    });
});
