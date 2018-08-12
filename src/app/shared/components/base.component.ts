
import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-base-cmp',
    template: '',
    styles: ['']
})
export class BaseComponent implements OnDestroy {

    protected subs: any = {
        timers: {},     // Store for timers
        intervals: {},  // Store for intervals
        obs: {}         // Store for observables
    };

    public ngOnDestroy() {
            // Cleanup timers
        for (const k in this.subs.timers) {
            if (this.subs.timers.hasOwnProperty(k)) {
                this.clearTimer(this.subs.timers[k]);
            }
        }
            // Cleanup intervals
        for (const k in this.subs.intervals) {
            if (this.subs.intervals.hasOwnProperty(k)) {
                this.clearInterval(this.subs.intervals[k]);
            }
        }
            // Cleanup observables
        for (const k in this.subs.obs) {
            if (this.subs.obs.hasOwnProperty(k) && this.subs.obs[k]) {
                if (this.subs.obs[k] instanceof Function) {
                    this.subs.obs[k] = null;
                } else {
                    this.subs.obs[k].unsubscribe();
                }
                this.subs.obs[k] = null;
            }
        }
    }

    public timeout(name: string, fn: () => void, delay: number = 300) {
        this.clearTimer(name);
        if (!(fn instanceof Function)) { return; }
        this.subs.timers[name] = setTimeout(() => fn(), delay);
    }

    public clearTimer(name: string) {
        if (this.subs.timers[name]) {
            clearTimeout(this.subs.timers[name]);
            this.subs.timers[name] = null;
        }
    }

    public interval(name: string, fn: () => void, delay: number = 300) {
        this.clearInterval(name);
        if (!(fn instanceof Function)) { return; }
        this.subs.intervals[name] = setInterval(() => fn(), delay);
    }

    public clearInterval(name: string) {
        if (this.subs.intervals[name]) {
            clearInterval(this.subs.intervals[name]);
            this.subs.intervals[name] = null;
        }
    }
}
