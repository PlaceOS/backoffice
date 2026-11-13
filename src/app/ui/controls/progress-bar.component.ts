import { Component, computed, inject, input } from '@angular/core';

import { LocaleService } from '../../common/locale.service';

/**
 * Linear progress indicator.
 * In `determinate` mode it shows `value` (0 to 100). In other modes it loops.
 */
@Component({
    selector: 'app-progress-bar',
    template: `
        @if (determinate()) {
            <div class="progress-fill" [style.width.%]="clamped()"></div>
        } @else {
            <div class="progress-loop"></div>
        }
    `,
    host: {
        class: 'progress-bar',
        role: 'progressbar',
        '[attr.aria-label]': 'label() || default_label',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        '[attr.aria-valuenow]': 'determinate() ? clamped() : null',
    },
})
export class ProgressBarComponent {
    /** Accessible name. It defaults to "Loading" */
    public readonly label = input<string | null | undefined>(undefined);
    public readonly default_label = inject(LocaleService).get('COMMON.LOADING');
    public readonly mode = input<'determinate' | 'indeterminate' | 'query'>(
        'determinate',
    );
    /** Progress from 0 to 100, used in `determinate` mode */
    public readonly value = input(0);

    public readonly determinate = computed(() => this.mode() === 'determinate');
    public readonly clamped = computed(() =>
        Math.min(100, Math.max(0, this.value() || 0)),
    );
}
