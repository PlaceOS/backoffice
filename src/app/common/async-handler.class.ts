import { OnDestroy, Service, signal } from '@angular/core';
import { SubscriptionLike } from './signals';

@Service()
export class AsyncHandler implements OnDestroy {
    /** Store for named timers */
    protected _timers: { [name: string]: ReturnType<typeof setTimeout> } = {};
    /** Store for named intervals */
    protected _intervals: { [name: string]: ReturnType<typeof setInterval> } =
        {};
    /** Store for named subscription unsub callbacks */
    protected _subscriptions: {
        [name: string]: SubscriptionLike | (() => void) | null;
    } = {};
    /** Signal which stores the initialised state of the object */
    protected readonly _initialised = signal(false);
    /** Signal of the initialised state of the object */
    public readonly initialised = this._initialised.asReadonly();

    /** Whether the object has been initialised */
    public get is_initialised(): boolean {
        return this._initialised();
    }

    public ngOnDestroy(): void {
        this.destroy();
    }

    protected destroy() {
        for (const key in this._timers) {
            if (key in this._timers) this.clearTimeout(key);
        }
        for (const key in this._intervals) {
            if (key in this._intervals) this.clearInterval(key);
        }
        for (const key in this._subscriptions) {
            if (key in this._subscriptions) this.unsub(key);
        }
    }

    /**
     * Creates a named timer
     * @param name Name of the timer
     * @param fn Callback function for the timer
     * @param delay Callback delay
     */
    protected timeout(name: string, fn: () => void, delay = 300) {
        if (name && fn && fn instanceof Function) {
            this.clearTimeout(name);
            this._timers[name] = setTimeout(() => {
                fn();
                this._timers[name] = null;
            }, delay);
        } else {
            throw new Error(
                name
                    ? 'Cannot create named timeout without a name'
                    : 'Cannot create a timeout without a callback',
            );
        }
    }

    /**
     * Clears the named timer
     * @param name Timer name
     */
    protected clearTimeout(name: string) {
        if (this._timers[name]) {
            clearTimeout(this._timers[name]);
            this._timers[name] = null;
        }
    }

    /**
     * Creates a named interval
     * @param name Name of the interval
     * @param fn Callback function for the interval
     * @param delay Callback delay
     */
    protected interval(name: string, fn: () => void, delay = 300) {
        if (name && fn && fn instanceof Function) {
            this.clearInterval(name);
            this._intervals[name] = setInterval(() => fn(), delay);
        } else {
            throw new Error(
                name
                    ? 'Cannot create named interval without a name'
                    : 'Cannot create a interval without a callback',
            );
        }
    }

    /**
     * Clears the named interval
     * @param name Timer name
     */
    protected clearInterval(name: string) {
        if (this._intervals[name]) {
            clearInterval(this._intervals[name]);
            this._intervals[name] = null;
        }
    }

    /**
     * Store named subscription
     * @param name Name of the subscription
     * @param unsub Unsubscribe callback or Subscription object
     */
    protected subscription(
        name: string,
        unsub: SubscriptionLike | (() => void) | null,
    ) {
        if (!unsub) return;
        this.unsub(name);
        this._subscriptions[name] = unsub;
    }

    /**
     * Call unsubscribe callback with the given name
     * @param name
     */
    protected unsub(name: string) {
        if (!(name in this._subscriptions) || !this._subscriptions[name]) {
            return;
        }
        if (typeof this._subscriptions[name] === 'function') {
            (this._subscriptions[name] as () => void)();
        } else {
            (this._subscriptions[name] as SubscriptionLike).unsubscribe();
        }
        this._subscriptions[name] = null;
    }
}
