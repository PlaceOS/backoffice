import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { BindingDirective } from '../../../app/ui/binding.directive';

const mocks = await vi.hoisted(async () => {
    const { signal } = await import('@angular/core');
    const release = vi.fn();
    return {
        online: signal(false),
        release,
        realtime: {
            bind: vi.fn(
                (_target: unknown, _listener: (state: unknown) => void) =>
                    release,
            ),
            exec: vi.fn(),
        },
    };
});
vi.mock('../../../app/common/placeos', () => ({
    online: mocks.online,
    realtime: () => mocks.realtime,
}));

@Component({
    template: '<i bind="connected" sys="sys-1" mod="Device" [index]="2"></i>',
    imports: [BindingDirective],
})
class Host {}

@Component({
    template:
        '<i bind="triggered" sys="sys-1" mod="_TRIGGER__1" (modelChange)="value = $event"></i>',
    imports: [BindingDirective],
})
class TriggerHost {
    public value: unknown = null;
}

describe('binding', () => {
    afterEach(() => {
        vi.useRealTimers();
        vi.clearAllMocks();
        mocks.online.set(false);
    });

    it('has no polling timers and cannot bind after destruction', () => {
        vi.useFakeTimers();
        const fixture = TestBed.createComponent(Host);
        fixture.detectChanges();
        expect(vi.getTimerCount()).toBe(0);
        fixture.destroy();
        mocks.online.set(true);
        TestBed.tick();
        vi.advanceTimersByTime(1000);
        expect(mocks.realtime.bind).not.toHaveBeenCalled();
    });

    it('binds the status variable when online and releases it on destroy', () => {
        vi.useFakeTimers();
        const fixture = TestBed.createComponent(Host);
        fixture.detectChanges();
        mocks.online.set(true);
        TestBed.tick();
        vi.advanceTimersByTime(20);
        expect(mocks.realtime.bind).toHaveBeenCalledExactlyOnceWith(
            { sys: 'sys-1', mod: 'Device', index: 2, name: 'connected' },
            expect.any(Function),
        );
        fixture.destroy();
        expect(mocks.release).toHaveBeenCalledOnce();
    });

    it('splits an index suffix from the module and gives new values to the model', () => {
        vi.useFakeTimers();
        const fixture = TestBed.createComponent(TriggerHost);
        fixture.detectChanges();
        mocks.online.set(true);
        TestBed.tick();
        vi.advanceTimersByTime(20);
        expect(mocks.realtime.bind).toHaveBeenCalledExactlyOnceWith(
            { sys: 'sys-1', mod: '_TRIGGER_', index: 1, name: 'triggered' },
            expect.any(Function),
        );
        const listener = mocks.realtime.bind.mock.calls[0][1];
        listener({ kind: 'value', value: true });
        vi.advanceTimersByTime(10);
        expect(fixture.componentInstance.value).toBe(true);
    });
});
