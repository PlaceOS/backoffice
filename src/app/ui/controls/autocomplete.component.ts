import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
    Component,
    contentChildren,
    Directive,
    ElementRef,
    forwardRef,
    inject,
    Injector,
    input,
    OnDestroy,
    output,
    signal,
    Signal,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import { OPTION_HOST, OptionComponent, OptionHost } from './option.component';
import { PANEL_POSITIONS, VIEWPORT_MARGIN } from './overlay';
import { SelectChange } from './select.component';

let next_id = 0;

/**
 * List of suggestions for an input. Link it to the input with
 * `[appAutocomplete]`. The panel shows while the input has focus and the
 * list has options.
 */
@Component({
    selector: 'app-autocomplete',
    exportAs: 'appAutocomplete',
    template: `
        <ng-template>
            <div class="select-panel" role="listbox" [id]="panel_id">
                <ng-content />
            </div>
        </ng-template>
    `,
    providers: [
        {
            provide: OPTION_HOST,
            useExisting: forwardRef(() => AutocompleteComponent),
        },
    ],
})
export class AutocompleteComponent<T = unknown> implements OptionHost {
    public readonly panel_id = `app-autocomplete-${next_id++}`;
    public readonly template = viewChild.required(TemplateRef);
    public readonly options = contentChildren(OptionComponent<T>, {
        descendants: true,
    });
    /** Emitted when the user picks an option */
    public readonly optionSelected = output<SelectChange<T>>();
    /** Set by the trigger to receive picked options */
    public onPick: (option: OptionComponent<T>) => void = () => undefined;

    public readonly multiple = () => false;

    public isSelected() {
        return false;
    }

    public pick(option: OptionComponent<T>) {
        this.onPick(option);
        this.optionSelected.emit({ value: option.value() });
    }
}

/**
 * Show the suggestions of an `app-autocomplete` for the input.
 * A picked text or number value is written into the input,
 * so `ngModel` and `[formField]` get it.
 */
@Directive({
    selector: 'input[appAutocomplete], textarea[appAutocomplete]',
    host: {
        '[attr.role]': 'panel() ? "combobox" : null',
        '[attr.autocomplete]': 'panel() ? "off" : null',
        '[attr.aria-autocomplete]': 'panel() ? "list" : null',
        '[attr.aria-expanded]': 'panel() ? opened() : null',
        '[attr.aria-controls]': 'opened() ? panel()?.panel_id : null',
        '[attr.aria-activedescendant]': 'active_id()',
        '(focus)': 'open()',
        '(click)': 'open()',
        '(input)': 'onInput()',
        '(blur)': 'close()',
        '(keydown)': 'onKeydown($event)',
    },
})
export class AutocompleteTriggerDirective<T = unknown> implements OnDestroy {
    private readonly _element =
        inject<ElementRef<HTMLInputElement>>(ElementRef);
    private readonly _overlay = inject(Overlay);
    private readonly _injector = inject(Injector);
    private readonly _view_container = inject(ViewContainerRef);
    private _overlay_ref: OverlayRef;
    private _key_manager: ActiveDescendantKeyManager<OptionComponent<T>>;
    /** Set while the input event of a picked value is dispatched */
    private _writing = false;

    /** Suggestions to show. Nothing shows while it is unset */
    public readonly panel = input<AutocompleteComponent<T> | undefined>(
        undefined,
        { alias: 'appAutocomplete' },
    );
    public readonly opened = signal(false);
    public readonly active_id = signal<string | null>(null);

    public open() {
        const panel = this.panel();
        if (!panel || this.opened() || this._element.nativeElement.readOnly) {
            return;
        }
        const host = this._element.nativeElement;
        const box = host.closest<HTMLElement>('.field-box') ?? host;
        this._overlay_ref ??= this._overlay.create({
            positionStrategy: this._overlay
                .position()
                .flexibleConnectedTo(box)
                .withPositions(PANEL_POSITIONS)
                .withViewportMargin(VIEWPORT_MARGIN)
                .withFlexibleDimensions(false)
                .withPush(true)
                // A popover next to the input, so the panel stays in the
                // DOM of a dialog that the input is in
                .withPopoverLocation('inline'),
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
        });
        this._overlay_ref.updateSize({
            width: box.getBoundingClientRect().width,
        });
        this._overlay_ref.attach(
            new TemplatePortal(panel.template(), this._view_container),
        );
        panel.onPick = (option) => this._pick(option);
        this._key_manager = new ActiveDescendantKeyManager(
            panel.options as Signal<OptionComponent<T>[]>,
            this._injector,
        ).withWrap();
        this._key_manager.change.subscribe(() =>
            this.active_id.set(this._key_manager.activeItem?.id ?? null),
        );
        this.opened.set(true);
    }

    public close() {
        if (!this.opened()) return;
        this._overlay_ref?.detach();
        // Clear the active option's highlight before the manager goes
        this._key_manager?.setActiveItem(-1);
        this._key_manager?.destroy();
        this._key_manager = undefined;
        this.active_id.set(null);
        this.opened.set(false);
    }

    public onInput() {
        if (this._writing) return;
        this.open();
        this._key_manager?.setActiveItem(-1);
    }

    public onKeydown(keyboard_event: Event) {
        const event = keyboard_event as KeyboardEvent;
        if (event.key === 'Escape' && this.opened()) {
            event.preventDefault();
            event.stopPropagation();
            this.close();
        } else if (event.key === 'Enter' && this._key_manager?.activeItem) {
            event.preventDefault();
            this._key_manager.activeItem.pickOption();
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            this.open();
            this._key_manager?.onKeydown(event);
        }
    }

    public ngOnDestroy() {
        this._key_manager?.destroy();
        this._overlay_ref?.dispose();
    }

    private _pick(option: OptionComponent<T>) {
        const value = option.value();
        if (typeof value === 'string' || typeof value === 'number') {
            const element = this._element.nativeElement;
            element.value = `${value}`;
            this._writing = true;
            element.dispatchEvent(new Event('input', { bubbles: true }));
            this._writing = false;
        }
        this.close();
    }
}
