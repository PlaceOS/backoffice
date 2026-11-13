import { Highlightable } from '@angular/cdk/a11y';
import {
    booleanAttribute,
    Component,
    computed,
    ElementRef,
    inject,
    InjectionToken,
    Input,
    input,
    signal,
} from '@angular/core';

/** Parent of a list of options, i.e. a select or an autocomplete */
export interface OptionHost {
    /** Whether more than one option can be selected */
    readonly multiple: () => boolean;
    /** Whether the option has the selected value */
    isSelected(option: OptionComponent): boolean;
    /** Called when the user picks the option */
    pick(option: OptionComponent): void;
}

export const OPTION_HOST = new InjectionToken<OptionHost>('OPTION_HOST');

let next_id = 0;

/**
 * Option of an `app-select` or `app-autocomplete`.
 * The text content of the option is its display label.
 */
@Component({
    selector: 'app-option',
    template: `
        @if (multiple()) {
            <span class="option-check" aria-hidden="true"></span>
        }
        <span class="option-text"><ng-content /></span>
    `,
    host: {
        role: 'option',
        '[id]': 'id',
        '[attr.aria-selected]': 'selected()',
        '[attr.aria-disabled]': 'disabled',
        '[class.active]': 'active()',
        // Keep the focus on the select or input that owns the option
        '(mousedown)': '$event.preventDefault()',
        '(click)': 'pickOption()',
    },
})
export class OptionComponent<T = unknown> implements Highlightable {
    private readonly _host = inject(OPTION_HOST);
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);

    public readonly id = `app-option-${next_id++}`;
    /** Value that the option sets */
    public readonly value = input<T>();
    private readonly _disabled = signal(false);

    /**
     * Whether the user can pick the option. A plain property, as the
     * key manager reads it to skip the option.
     */
    @Input({ transform: booleanAttribute })
    public set disabled(value: boolean) {
        this._disabled.set(value);
    }
    public get disabled() {
        return this._disabled();
    }
    /** Whether the keyboard focus is on the option */
    public readonly active = signal(false);

    public readonly multiple = computed(() => this._host.multiple());
    public readonly selected = computed(() => {
        this.value();
        return this._host.isSelected(this);
    });

    /** Display text of the option */
    public getLabel(): string {
        return this._element.nativeElement.textContent?.trim() ?? '';
    }

    public pickOption() {
        if (!this.disabled) this._host.pick(this);
    }

    public setActiveStyles() {
        this.active.set(true);
        this._element.nativeElement.scrollIntoView?.({ block: 'nearest' });
    }

    public setInactiveStyles() {
        this.active.set(false);
    }
}
