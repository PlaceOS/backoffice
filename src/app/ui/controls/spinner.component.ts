import {
    Component,
    computed,
    inject,
    input,
    numberAttribute,
} from '@angular/core';

import { LocaleService } from '../../common/locale.service';

/** Circumference of the circle in the 100 by 100 view box */
const CIRCUMFERENCE = 2 * Math.PI * 45;

/**
 * Circular progress indicator.
 * Without a `value` it spins. With a `value` (0 to 100) it shows the amount.
 */
@Component({
    selector: 'app-spinner',
    template: `
        <svg viewBox="0 0 100 100" [class.spin]="value() === undefined">
            <circle
                cx="50"
                cy="50"
                r="45"
                [style.stroke-dasharray]="circumference"
                [style.stroke-dashoffset]="offset()"
            />
        </svg>
    `,
    host: {
        class: 'spinner',
        role: 'progressbar',
        '[attr.aria-label]': 'label() || default_label',
        '[style.width.px]': 'diameter()',
        '[style.height.px]': 'diameter()',
        '[attr.aria-valuemin]': 'value() === undefined ? null : 0',
        '[attr.aria-valuemax]': 'value() === undefined ? null : 100',
        '[attr.aria-valuenow]': 'value() ?? null',
    },
})
export class SpinnerComponent {
    /** Accessible name. It defaults to "Loading" */
    public readonly label = input<string | null | undefined>(undefined);
    public readonly default_label = inject(LocaleService).get('COMMON.LOADING');
    /** Size of the spinner in pixels */
    public readonly diameter = input(48, { transform: numberAttribute });
    /** Progress from 0 to 100. Leave it unset for an indeterminate spinner */
    public readonly value = input<number | undefined>(undefined);

    public readonly circumference = CIRCUMFERENCE;
    public readonly offset = computed(() => {
        const value = this.value();
        if (value === undefined) return null;
        const clamped = Math.min(100, Math.max(0, value));
        return CIRCUMFERENCE * (1 - clamped / 100);
    });
}
