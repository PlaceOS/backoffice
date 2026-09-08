import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { BindingDirective } from '../../../app/ui/binding.directive';

const mocks = vi.hoisted(() => {
    const listeners = new Set<(value: boolean) => void>();
    const online = {
        value: false,
        subscribe: (
            listener: (value: boolean) => void,
            options: { emitCurrent: boolean },
        ) => {
            listeners.add(listener);
            if (options.emitCurrent) listener(online.value);
            return () => listeners.delete(listener);
        },
    };
    return { listeners, online, getModule: vi.fn() };
});
vi.mock('@placeos/ts-client', () => ({
    authority: () => true,
    onlineState: () => mocks.online,
    getModule: mocks.getModule,
}));
@Component({
    template: '<i bind="connected" sys="sys-1" mod="Device"></i>',
    imports: [BindingDirective],
})
class Host {}

describe('offline binding cleanup', () => {
    afterEach(() => {
        vi.useRealTimers();
        mocks.listeners.clear();
        mocks.online.value = false;
    });
    it('has no polling timers and cannot bind after destruction', () => {
        vi.useFakeTimers();
        const fixture = TestBed.createComponent(Host);
        fixture.detectChanges();
        expect(mocks.listeners.size).toBe(1);
        expect(vi.getTimerCount()).toBe(0);
        fixture.destroy();
        expect(mocks.listeners.size).toBe(0);
        mocks.online.value = true;
        for (const listener of mocks.listeners) listener(true);
        vi.advanceTimersByTime(1000);
        expect(mocks.getModule).not.toHaveBeenCalled();
    });
});
