
import { OnDestroy, Directive } from '@angular/core';
import { BaseClass } from './base.class';

@Directive({
    selector: 'a-very-basic-component-base-that-should-not-be-used'
})
export class BaseDirective extends BaseClass implements OnDestroy {

    public ngOnDestroy(): void {
        // Clear local timers
        for (const key in this._timers) {
            if (this._timers.hasOwnProperty(key)) {
                this.clearTimeout(key);
            }
        }
        // Clear local intervals
        for (const key in this._intervals) {
            if (this._intervals.hasOwnProperty(key)) {
                this.clearInterval(key);
            }
        }
        // Clear local subscriptions
        for (const key in this._subscriptions) {
            if (this._subscriptions.hasOwnProperty(key)) {
                this.unsub(key);
            }
        }
    }
}

