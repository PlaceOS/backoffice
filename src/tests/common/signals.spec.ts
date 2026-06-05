import { signal } from '@angular/core';
import { describe, expect, it } from 'vitest';
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
    });
});
