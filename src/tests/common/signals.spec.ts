import { signal } from '@angular/core';
import { createSignal } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import {
    waitForClientSignalValue,
    waitForSignalValue,
} from '../../app/common/signals';

vi.mock('@placeos/ts-client', async () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

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

describe('client signal waits', () => {
    it('uses notifications and removes the subscription on the first match', async () => {
        const value = createSignal(false);
        const unsubscribe = vi.fn();
        const subscribe = value.subscribe.bind(value);
        vi.spyOn(value, 'subscribe').mockImplementation((listener, options) => {
            const dispose = subscribe(listener, options);
            return () => {
                unsubscribe();
                dispose();
            };
        });
        const pending = waitForClientSignalValue(value, Boolean);
        value.set(true);
        expect(await pending).toBe(true);
        expect(unsubscribe).toHaveBeenCalledTimes(1);
        expect(await waitForClientSignalValue(value, Boolean)).toBe(true);
        expect(unsubscribe).toHaveBeenCalledTimes(2);
    });
});
