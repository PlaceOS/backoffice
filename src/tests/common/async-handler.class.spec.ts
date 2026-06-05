import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AsyncHandler } from '../../app/common/async-handler.class';
import type { SubscriptionLike } from '../../app/common/signals';

const mockSubscription = (): SubscriptionLike => ({
    unsubscribe: vi.fn(),
});

// Create a test subclass to access protected methods
class TestableAsyncHandler extends AsyncHandler {
    public testTimeout(name: string, fn: () => void, delay?: number) {
        this.timeout(name, fn, delay);
    }

    public testClearTimeout(name: string) {
        this.clearTimeout(name);
    }

    public testInterval(name: string, fn: () => void, delay?: number) {
        this.interval(name, fn, delay);
    }

    public testClearInterval(name: string) {
        this.clearInterval(name);
    }

    public testSubscription(
        name: string,
        unsub: SubscriptionLike | (() => void),
    ) {
        this.subscription(name, unsub);
    }

    public testUnsub(name: string) {
        this.unsub(name);
    }

    public testDestroy() {
        this.destroy();
    }

    public getTimers() {
        return this._timers;
    }

    public getIntervals() {
        return this._intervals;
    }

    public getSubscriptions() {
        return this._subscriptions;
    }

    public setInitialised(value: boolean) {
        this._initialised.set(value);
    }
}

describe('AsyncHandler', () => {
    let handler: TestableAsyncHandler;

    beforeEach(() => {
        handler = new TestableAsyncHandler();
        vi.useFakeTimers();
    });

    afterEach(() => {
        handler.ngOnDestroy();
        vi.useRealTimers();
    });

    describe('initialised state', () => {
        it('should start as not initialised', () => {
            expect(handler.is_initialised).toBe(false);
        });

        it('should provide signal for initialised state', () => {
            expect(typeof handler.initialised).toBe('function');
            expect(typeof handler.initialised()).toBe('boolean');
        });

        it('should update is_initialised when state changes', () => {
            expect(handler.is_initialised).toBe(false);
            handler.setInitialised(true);
            expect(handler.is_initialised).toBe(true);
        });
    });

    describe('timeout', () => {
        it('should create a named timeout', () => {
            const callback = vi.fn();
            handler.testTimeout('test', callback, 1000);

            expect(handler.getTimers()['test']).toBeTruthy();
            expect(callback).not.toHaveBeenCalled();

            vi.advanceTimersByTime(1000);
            expect(callback).toHaveBeenCalledTimes(1);
        });

        it('should use default delay of 300ms', () => {
            const callback = vi.fn();
            handler.testTimeout('test', callback);

            vi.advanceTimersByTime(299);
            expect(callback).not.toHaveBeenCalled();

            vi.advanceTimersByTime(1);
            expect(callback).toHaveBeenCalledTimes(1);
        });

        it('should clear previous timeout with same name', () => {
            const callback1 = vi.fn();
            const callback2 = vi.fn();

            handler.testTimeout('test', callback1, 1000);
            handler.testTimeout('test', callback2, 1000);

            vi.advanceTimersByTime(1000);

            expect(callback1).not.toHaveBeenCalled();
            expect(callback2).toHaveBeenCalledTimes(1);
        });

        it('should throw error without name', () => {
            expect(() => handler.testTimeout('', vi.fn())).toThrow();
        });

        it('should throw error without callback', () => {
            expect(() => handler.testTimeout('test', null as any)).toThrow();
        });

        it('should set timer to null after execution', () => {
            handler.testTimeout('test', vi.fn(), 100);
            vi.advanceTimersByTime(100);
            expect(handler.getTimers()['test']).toBeNull();
        });
    });

    describe('clearTimeout', () => {
        it('should clear existing timeout', () => {
            const callback = vi.fn();
            handler.testTimeout('test', callback, 1000);
            handler.testClearTimeout('test');

            vi.advanceTimersByTime(1000);
            expect(callback).not.toHaveBeenCalled();
            expect(handler.getTimers()['test']).toBeNull();
        });

        it('should handle clearing non-existent timeout', () => {
            expect(() => handler.testClearTimeout('nonexistent')).not.toThrow();
        });
    });

    describe('interval', () => {
        it('should create a named interval', () => {
            const callback = vi.fn();
            handler.testInterval('test', callback, 1000);

            expect(handler.getIntervals()['test']).toBeTruthy();

            vi.advanceTimersByTime(3000);
            expect(callback).toHaveBeenCalledTimes(3);
        });

        it('should use default delay of 300ms', () => {
            const callback = vi.fn();
            handler.testInterval('test', callback);

            vi.advanceTimersByTime(900);
            expect(callback).toHaveBeenCalledTimes(3);
        });

        it('should clear previous interval with same name', () => {
            const callback1 = vi.fn();
            const callback2 = vi.fn();

            handler.testInterval('test', callback1, 1000);
            handler.testInterval('test', callback2, 1000);

            vi.advanceTimersByTime(3000);

            expect(callback1).not.toHaveBeenCalled();
            expect(callback2).toHaveBeenCalledTimes(3);
        });

        it('should throw error without name', () => {
            expect(() => handler.testInterval('', vi.fn())).toThrow();
        });

        it('should throw error without callback', () => {
            expect(() => handler.testInterval('test', null as any)).toThrow();
        });
    });

    describe('clearInterval', () => {
        it('should clear existing interval', () => {
            const callback = vi.fn();
            handler.testInterval('test', callback, 1000);
            handler.testClearInterval('test');

            vi.advanceTimersByTime(3000);
            expect(callback).not.toHaveBeenCalled();
            expect(handler.getIntervals()['test']).toBeNull();
        });

        it('should handle clearing non-existent interval', () => {
            expect(() =>
                handler.testClearInterval('nonexistent'),
            ).not.toThrow();
        });
    });

    describe('subscription', () => {
        it('should store Subscription object', () => {
            const subscription = mockSubscription();
            handler.testSubscription('test', subscription);

            expect(handler.getSubscriptions()['test']).toBe(subscription);
        });

        it('should store callback function', () => {
            const callback = vi.fn();
            handler.testSubscription('test', callback);

            expect(handler.getSubscriptions()['test']).toBe(callback);
        });

        it('should replace existing subscription with same name', () => {
            const sub1 = mockSubscription();
            const sub2 = mockSubscription();

            handler.testSubscription('test', sub1);
            handler.testSubscription('test', sub2);

            expect(sub1.unsubscribe).toHaveBeenCalled();
            expect(handler.getSubscriptions()['test']).toBe(sub2);
        });
    });

    describe('unsub', () => {
        it('should call unsubscribe on Subscription', () => {
            const subscription = mockSubscription();

            handler.testSubscription('test', subscription);
            handler.testUnsub('test');

            expect(subscription.unsubscribe).toHaveBeenCalled();
            expect(handler.getSubscriptions()['test']).toBeNull();
        });

        it('should call callback function', () => {
            const callback = vi.fn();
            handler.testSubscription('test', callback);
            handler.testUnsub('test');

            expect(callback).toHaveBeenCalled();
            expect(handler.getSubscriptions()['test']).toBeNull();
        });

        it('should handle non-existent subscription', () => {
            expect(() => handler.testUnsub('nonexistent')).not.toThrow();
        });

        it('should handle null subscription', () => {
            handler.testSubscription('test', mockSubscription());
            handler.testUnsub('test');
            // Should not throw when calling unsub again
            expect(() => handler.testUnsub('test')).not.toThrow();
        });
    });

    describe('destroy', () => {
        it('should clear all timers', () => {
            const callback = vi.fn();
            handler.testTimeout('timer1', callback, 1000);
            handler.testTimeout('timer2', callback, 1000);

            handler.testDestroy();
            vi.advanceTimersByTime(1000);

            expect(callback).not.toHaveBeenCalled();
        });

        it('should clear all intervals', () => {
            const callback = vi.fn();
            handler.testInterval('interval1', callback, 1000);
            handler.testInterval('interval2', callback, 1000);

            handler.testDestroy();
            vi.advanceTimersByTime(3000);

            expect(callback).not.toHaveBeenCalled();
        });

        it('should unsubscribe all subscriptions', () => {
            const sub1 = mockSubscription();
            const sub2 = mockSubscription();

            handler.testSubscription('sub1', sub1);
            handler.testSubscription('sub2', sub2);
            handler.testDestroy();

            expect(sub1.unsubscribe).toHaveBeenCalled();
            expect(sub2.unsubscribe).toHaveBeenCalled();
        });
    });

    describe('ngOnDestroy', () => {
        it('should call destroy', () => {
            const destroy_spy = vi.spyOn(handler, 'testDestroy');
            handler.testTimeout('test', vi.fn());

            handler.ngOnDestroy();

            // destroy is called internally, check timers are cleared
            expect(handler.getTimers()['test']).toBeNull();
        });
    });
});
