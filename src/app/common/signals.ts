import { DestroyRef, Injector, Signal, inject, signal } from '@angular/core';
import type { Signal as ClientSignal } from '@placeos/ts-client';

export interface SubscriptionLike {
    unsubscribe(): void;
}

export interface Subscribable<T> {
    subscribe(next: (value: T) => void): SubscriptionLike | (() => void);
}

function disposeSubscription(subscription: SubscriptionLike | (() => void)) {
    if (typeof subscription === 'function') {
        subscription();
    } else {
        subscription.unsubscribe();
    }
}

export function signalFromSubscribable<T>(
    source: Subscribable<T>,
    initialValue: T,
    injector = inject(Injector),
): Signal<T> {
    const destroyRef = injector.get(DestroyRef);
    const state = signal(initialValue);
    const subscription = source.subscribe((value) => state.set(value));
    destroyRef.onDestroy(() => disposeSubscription(subscription));
    return state.asReadonly();
}

export function signalFromClient<T>(
    source: ClientSignal<T>,
    initialValue: T = source.value,
): Signal<T> {
    const destroyRef = inject(DestroyRef);
    const state = signal(initialValue);
    const unsubscribe = source.subscribe((value) => state.set(value), {
        emitCurrent: true,
    });
    destroyRef.onDestroy(unsubscribe);
    return state.asReadonly();
}

export function toSignal<T>(
    source: Signal<T> | Subscribable<T>,
    options: { initialValue?: T; injector?: Injector } = {},
): Signal<T> {
    if (typeof source === 'function') return source as Signal<T>;
    return signalFromSubscribable(
        source,
        options.initialValue,
        options.injector,
    );
}

export function waitForEvent<T>(
    source: Subscribable<T>,
    predicate: (value: T) => boolean = () => true,
): Promise<T> {
    return new Promise<T>((resolve) => {
        let subscription: SubscriptionLike | (() => void) | null = null;
        let should_dispose = false;
        subscription = source.subscribe((value) => {
            if (!predicate(value)) return;
            if (subscription) {
                disposeSubscription(subscription);
            } else {
                should_dispose = true;
            }
            resolve(value);
        });
        if (should_dispose && subscription) disposeSubscription(subscription);
    });
}

export function waitForSignalValue<T>(
    source: Signal<T>,
    predicate: (value: T) => boolean = () => true,
    delay = 50,
): Promise<T> {
    return new Promise<T>((resolve) => {
        const check = () => {
            const value = source();
            if (predicate(value)) {
                resolve(value);
            } else {
                setTimeout(check, delay);
            }
        };
        check();
    });
}

export function waitForClientSignalValue<T>(
    source: ClientSignal<T>,
    predicate: (value: T) => boolean = () => true,
    delay = 50,
): Promise<T> {
    return new Promise<T>((resolve) => {
        const check = () => {
            const value = source.value;
            if (predicate(value)) {
                resolve(value);
            } else {
                setTimeout(check, delay);
            }
        };
        check();
    });
}
