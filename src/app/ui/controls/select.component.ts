import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import {
    CdkConnectedOverlay,
    FlexibleConnectedPositionStrategyOrigin,
} from '@angular/cdk/overlay';
import {
    afterRenderEffect,
    booleanAttribute,
    Component,
    computed,
    contentChild,
    contentChildren,
    Directive,
    ElementRef,
    forwardRef,
    inject,
    Injector,
    input,
    model,
    output,
    signal,
    Signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OPTION_HOST, OptionComponent, OptionHost } from './option.component';
import { PANEL_POSITIONS, VIEWPORT_MARGIN } from './overlay';

/** Custom content for the closed select. Put it inside `app-select`. */
@Directive({ selector: 'app-select-trigger' })
export class SelectTriggerDirective {}

/** Emitted when the user changes the value of a select */
export interface SelectChange<T = unknown> {
    value: T;
}

let next_id = 0;

/**
 * Drop-down list of `app-option`s.
 * Works with `ngModel`, `[formField]` and `[(value)]`.
 * Add `multiple` to select more than one value. The value is then an array.
 * Put a search input in an element with the `select-search` attribute. It
 * shows above the options and stays in view as they scroll. Put the text to
 * show when there are no options in an element with `select-empty`.
 */
@Component({
    selector: 'app-select',
    template: `
        <span class="select-value">
            @if (empty()) {
                <span class="select-placeholder">{{ placeholder() }}</span>
            } @else if (custom_trigger()) {
                <ng-content select="app-select-trigger" />
            } @else {
                {{ display() }}
            }
        </span>
        <span class="select-arrow" aria-hidden="true"></span>
        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="origin()"
            [cdkConnectedOverlayOpen]="opened()"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayViewportMargin]="viewport_margin"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayMinWidth]="width()"
            [cdkConnectedOverlayDisposeOnNavigation]="true"
            cdkConnectedOverlayUsePopover="inline"
            (overlayOutsideClick)="onOutsideClick($event)"
            (detach)="close()"
        >
            <div class="select-panel">
                <ng-content select="[select-search]" />
                <div
                    role="listbox"
                    [id]="panel_id"
                    [attr.aria-multiselectable]="multiple()"
                >
                    <ng-content />
                </div>
                <!-- Always there while open, so screen readers announce it -->
                <div class="select-empty" role="status">
                    @if (!options().length) {
                        <ng-content select="[select-empty]" />
                    }
                </div>
            </div>
        </ng-template>
    `,
    imports: [CdkConnectedOverlay],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true,
        },
        {
            provide: OPTION_HOST,
            useExisting: forwardRef(() => SelectComponent),
        },
    ],
    host: {
        role: 'combobox',
        'aria-haspopup': 'listbox',
        '[attr.tabindex]': 'is_disabled() ? -1 : 0',
        '[attr.aria-disabled]': 'is_disabled()',
        '[attr.aria-expanded]': 'opened()',
        '[attr.aria-controls]': 'opened() ? panel_id : null',
        '[attr.aria-activedescendant]': 'active_id()',
        '[class.disabled]': 'is_disabled()',
        '(click)': 'toggle()',
        '(keydown)': 'onKeydown($event)',
        '(blur)': 'onBlur()',
    },
})
export class SelectComponent<T = unknown>
    implements ControlValueAccessor, OptionHost
{
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _injector = inject(Injector);
    private _key_manager: ActiveDescendantKeyManager<OptionComponent>;
    private _onChange: (value: T) => void = () => undefined;
    private _onTouched: () => void = () => undefined;

    public readonly panel_id = `app-select-panel-${next_id++}`;
    public readonly positions = PANEL_POSITIONS;
    public readonly viewport_margin = VIEWPORT_MARGIN;

    /** Selected value. An array of option values when `multiple` is set */
    public readonly value = model<T>();
    public readonly placeholder = input('');
    public readonly multiple = input(false, { transform: booleanAttribute });
    public readonly disabled = input(false, { transform: booleanAttribute });
    /** Emitted when the user changes the value */
    public readonly selectionChange = output<SelectChange<T>>();
    /** Emitted when the panel opens or closes */
    public readonly openedChange = output<boolean>();

    public readonly options = contentChildren(OptionComponent, {
        descendants: true,
    });
    public readonly custom_trigger = contentChild(SelectTriggerDirective);
    public readonly opened = signal(false);
    public readonly width = signal(0);
    public readonly origin = signal<FlexibleConnectedPositionStrategyOrigin>(
        this._element,
    );
    public readonly active_id = signal<string | null>(null);
    private readonly _form_disabled = signal(false);
    public readonly is_disabled = computed(
        () => this.disabled() || this._form_disabled(),
    );

    public readonly selected = computed(() =>
        this.options().filter((option) => this.isSelected(option)),
    );
    public readonly empty = computed(() => {
        const value: unknown = this.value();
        return Array.isArray(value)
            ? !value.length
            : value === undefined || value === null || value === '';
    });
    public readonly display = computed(() =>
        this.selected()
            .map((option) => option.getLabel())
            .join(', '),
    );

    constructor() {
        // A combobox does not take its name from its text, so use the
        // placeholder when the page gives the select no label
        afterRenderEffect(() => {
            const host = this._element.nativeElement;
            const text = this.placeholder();
            const own = host.hasAttribute('data-placeholder-label');
            const labelled =
                host.hasAttribute('aria-label') ||
                host.hasAttribute('aria-labelledby');
            if (!text || (labelled && !own)) return;
            host.setAttribute('aria-label', text);
            host.setAttribute('data-placeholder-label', '');
        });
    }

    public isSelected(option: OptionComponent): boolean {
        const value: unknown = this.value();
        return this.multiple() && Array.isArray(value)
            ? value.includes(option.value())
            : option.value() === value;
    }

    public pick(option: OptionComponent) {
        const option_value = option.value();
        if (this.multiple()) {
            const value: unknown = this.value();
            const list: unknown[] = Array.isArray(value) ? value : [];
            const next = list.includes(option_value)
                ? list.filter((item) => item !== option_value)
                : [...list, option_value];
            this._setValue(next as T);
            this._key_manager?.setActiveItem(option);
            return;
        }
        this._setValue(option_value as T);
        this.close();
    }

    public open() {
        if (this.opened() || this.is_disabled()) return;
        const host = this._element.nativeElement;
        const box = host.closest<HTMLElement>('.field-box') ?? host;
        this.origin.set(box);
        this.width.set(box.getBoundingClientRect().width);
        this._key_manager = new ActiveDescendantKeyManager(
            this.options as Signal<OptionComponent[]>,
            this._injector,
        )
            .withWrap()
            .withTypeAhead();
        this._key_manager.change.subscribe(() =>
            this.active_id.set(this._key_manager.activeItem?.id ?? null),
        );
        this.opened.set(true);
        this.openedChange.emit(true);
        // Options are in the DOM once the overlay renders
        requestAnimationFrame(() => {
            // The panel can close before this frame
            const first = this.selected()[0];
            if (first) this._key_manager?.setActiveItem(first);
            else this._key_manager?.setFirstItemActive();
        });
    }

    public close() {
        if (!this.opened()) return;
        // Focus in the panel, e.g. on its search input, goes back to the
        // select. A click elsewhere has already moved focus out of it.
        const doc = this._element.nativeElement.ownerDocument;
        const panel = doc.getElementById(this.panel_id)?.parentElement;
        const refocus = !!panel?.contains(doc.activeElement);
        this.opened.set(false);
        this.active_id.set(null);
        // Clear the active option's highlight before the manager goes
        this._key_manager?.setActiveItem(-1);
        this._key_manager?.destroy();
        this._key_manager = undefined;
        // The user has been to the select, so its errors may show
        this._onTouched();
        this.openedChange.emit(false);
        if (refocus) this.focus();
    }

    public toggle() {
        if (this.opened()) this.close();
        else this.open();
    }

    public focus() {
        this._element.nativeElement.focus();
    }

    /** Close on a click outside the panel. A click on the select toggles it */
    public onOutsideClick(event: MouseEvent) {
        const target = event.target as Node;
        if (!this._element.nativeElement.contains(target)) this.close();
    }

    public onBlur() {
        if (!this.opened()) this._onTouched();
    }

    public onKeydown(keyboard_event: Event) {
        const event = keyboard_event as KeyboardEvent;
        if (this.is_disabled()) return;
        const key = event.key;
        if (!this.opened()) {
            if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(key)) {
                event.preventDefault();
                this.open();
            }
            return;
        }
        if (key === 'Escape' || key === 'Tab') {
            if (key === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
            }
            this.close();
        } else if (key === 'Enter' || (key === ' ' && !this._typing())) {
            event.preventDefault();
            this._key_manager?.activeItem?.pickOption();
        } else {
            this._key_manager?.onKeydown(event);
        }
    }

    public writeValue(value: T) {
        this.value.set(value);
    }

    public registerOnChange(fn: (value: T) => void) {
        this._onChange = fn;
    }

    public registerOnTouched(fn: () => void) {
        this._onTouched = fn;
    }

    public setDisabledState(disabled: boolean) {
        this._form_disabled.set(disabled);
    }

    private _setValue(value: T) {
        this.value.set(value);
        this._onChange(value);
        this.selectionChange.emit({ value });
    }

    /** Whether a typeahead search is in progress, so space is part of it */
    private _typing() {
        return !!this._key_manager?.isTyping();
    }
}
