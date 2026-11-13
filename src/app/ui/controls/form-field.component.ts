import {
    afterEveryRender,
    Component,
    computed,
    contentChild,
    ElementRef,
    inject,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';

let next_id = 0;

/**
 * Outlined box for an input, textarea, `app-select` or `app-chip-list`.
 *
 * Content slots:
 * - `[prefix]` and `[suffix]` go before and after the control
 * - `[error]` shows below the box when the control is touched and invalid
 * - `[hint]` shows below the box otherwise
 *
 * The error state comes from a `[formField]` control, or from the
 * `ng-touched` and `ng-invalid` classes that `ngModel` adds.
 * The control is described by the error or hint that shows.
 * Add the `no-subscript` class to remove the space for errors and hints.
 * The styles are in `styles.css` so that utility classes can change them.
 */
@Component({
    selector: 'app-form-field',
    template: `
        <div class="field-box">
            <ng-content select="[prefix]" />
            <ng-content />
            <ng-content select="[suffix]" />
        </div>
        <div class="field-subscript" [id]="subscript_id">
            <ng-content select="[error], [hint]" />
        </div>
    `,
    host: {
        '[class.field-invalid]': 'invalid()',
        '(click)': 'focusControl($event)',
    },
})
export class FormFieldComponent {
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);

    public readonly subscript_id = `app-form-field-subscript-${next_id++}`;

    constructor() {
        // Bindings on the control can replace the attribute, so check after
        // each render
        afterEveryRender(() => this._describeControl());
    }
    private readonly _field = contentChild(FormField, { descendants: true });

    /** Whether the signal form control is touched and invalid */
    public readonly invalid = computed(() => {
        const state = this._field()?.state();
        return !!state && state.touched() && state.invalid();
    });

    /**
     * Add the error and hint area to the control's `aria-describedby`. Screen
     * readers skip the error or hint that is hidden, so only the one that
     * shows is read. Other ids on the control are kept.
     */
    private _describeControl() {
        const control = this._element.nativeElement.querySelector(
            '.field-box :is(input, textarea, app-select)',
        );
        if (!control) return;
        const ids = (control.getAttribute('aria-describedby') || '')
            .split(/\s+/)
            .filter(Boolean);
        if (ids.includes(this.subscript_id)) return;
        control.setAttribute(
            'aria-describedby',
            [...ids, this.subscript_id].join(' '),
        );
    }

    /** Focus the control on a click on the box outside of it */
    public focusControl(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target.classList.contains('field-box')) return;
        this._element.nativeElement
            .querySelector<HTMLElement>('input, textarea, app-select')
            ?.focus();
    }
}
