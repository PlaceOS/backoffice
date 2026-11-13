import {
    booleanAttribute,
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    input,
    model,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconComponent } from '../icon.component';
import { TranslatePipe } from '../translate.pipe';
import {
    AutocompleteComponent,
    AutocompleteTriggerDirective,
} from './autocomplete.component';

/**
 * Editable list of text items, shown as chips with a text input after them.
 * The user adds an item with a separator key or when the input loses focus.
 * Works with `ngModel`, `[formField]` and `[(value)]`.
 * Put it inside an `app-form-field` for the outlined box.
 */
@Component({
    selector: 'app-chip-list',
    template: `
        @for (item of list(); track item) {
            <span class="chip" role="listitem">
                @if (editing() === item) {
                    <input
                        #edit_input
                        class="chip-edit"
                        [value]="item"
                        [attr.aria-label]="
                            'COMMON.EDIT_TYPE' | translate: { name: item }
                        "
                        (keydown.enter)="
                            $event.preventDefault();
                            finishEdit(item, edit_input.value)
                        "
                        (keydown.escape)="
                            $event.stopPropagation(); editing.set(null)
                        "
                        (blur)="finishEdit(item, edit_input.value)"
                    />
                } @else {
                    <span class="chip-text">{{ item }}</span>
                    @if (editable() && !is_disabled()) {
                        <button
                            type="button"
                            class="chip-action"
                            [attr.aria-label]="
                                'COMMON.EDIT_TYPE' | translate: { name: item }
                            "
                            (click)="startEdit(item)"
                        >
                            <icon>edit</icon>
                        </button>
                    }
                    @if (!is_disabled()) {
                        <button
                            type="button"
                            class="chip-action"
                            [attr.aria-label]="
                                ('COMMON.REMOVE' | translate) + ' ' + item
                            "
                            (click)="remove(item)"
                        >
                            <icon>cancel</icon>
                        </button>
                    }
                }
            </span>
        }
        <input
            #text_input
            class="chip-input"
            [id]="inputId()"
            [placeholder]="placeholder()"
            [disabled]="is_disabled()"
            [appAutocomplete]="autocomplete()"
            (keydown)="onKeydown($event, text_input)"
            (blur)="addText(text_input)"
            (input)="textChange.emit(text_input.value)"
        />
    `,
    imports: [IconComponent, TranslatePipe, AutocompleteTriggerDirective],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ChipListComponent),
            multi: true,
        },
    ],
    host: { class: 'chip-list', role: 'list' },
})
export class ChipListComponent implements ControlValueAccessor {
    private _onChange: (value: string[]) => void = () => undefined;
    private _onTouched: () => void = () => undefined;

    /** List of items */
    public readonly value = model<string[]>([]);
    public readonly placeholder = input('');
    /** `id` of the text input, for a `label[for]` */
    public readonly inputId = input<string | null>(null);
    /** Keys that add the text in the input as an item */
    public readonly separators = input<string[]>(['Enter', ',']);
    /** Whether the user can change the text of an item */
    public readonly editable = input(false, { transform: booleanAttribute });
    public readonly disabled = input(false, { transform: booleanAttribute });
    /** Suggestions for the text input. A picked suggestion is added */
    public readonly autocomplete = input<AutocompleteComponent>();
    /** Emitted when the text in the input changes, e.g. to filter suggestions */
    public readonly textChange = output<string>();

    public readonly editing = signal<string | null>(null);
    public readonly list = computed(() => this.value() || []);
    private readonly _form_disabled = signal(false);
    public readonly is_disabled = computed(
        () => this.disabled() || this._form_disabled(),
    );
    private readonly _text_input =
        viewChild.required<ElementRef<HTMLInputElement>>('text_input');
    private readonly _edit_input =
        viewChild<ElementRef<HTMLInputElement>>('edit_input');

    constructor() {
        effect((on_cleanup) => {
            const panel = this.autocomplete();
            if (!panel) return;
            const sub = panel.optionSelected.subscribe(({ value }) => {
                this.add(`${value ?? ''}`);
                this._text_input().nativeElement.value = '';
                this.textChange.emit('');
            });
            on_cleanup(() => sub.unsubscribe());
        });
        // Focus the inline input when the user starts to edit an item
        effect(() => this._edit_input()?.nativeElement.focus());
    }

    public onKeydown(event: KeyboardEvent, element: HTMLInputElement) {
        if (this.separators().includes(event.key)) {
            if (!element.value.trim()) return;
            event.preventDefault();
            this.addText(element);
        } else if (event.key === 'Backspace' && !element.value) {
            const items = this.list();
            if (items.length) this.remove(items[items.length - 1]);
        }
    }

    /** Add the text of the input as an item and clear the input */
    public addText(element: HTMLInputElement) {
        this._onTouched();
        if (this.add(element.value)) {
            element.value = '';
            this.textChange.emit('');
        }
    }

    /** Add an item. Returns whether the text was not empty */
    public add(text: string): boolean {
        const item = text.trim();
        if (!item) return false;
        if (!this.list().includes(item)) this._set([...this.list(), item]);
        return true;
    }

    public remove(item: string) {
        this._set(this.list().filter((existing) => existing !== item));
    }

    public startEdit(item: string) {
        this.editing.set(item);
    }

    /**
     * Replace an item with its edited text, keeping its position.
     * Empty text removes the item. Text of another item merges into it.
     */
    public finishEdit(item: string, text: string) {
        if (this.editing() !== item) return;
        this.editing.set(null);
        const value = text.trim();
        const items = this.list();
        if (!value || (value !== item && items.includes(value))) {
            this.remove(item);
        } else if (value !== item) {
            this._set(
                items.map((existing) => (existing === item ? value : existing)),
            );
        }
    }

    public writeValue(value: string[]) {
        this.value.set(value || []);
    }

    public registerOnChange(fn: (value: string[]) => void) {
        this._onChange = fn;
    }

    public registerOnTouched(fn: () => void) {
        this._onTouched = fn;
    }

    public setDisabledState(disabled: boolean) {
        this._form_disabled.set(disabled);
    }

    private _set(value: string[]) {
        this.value.set(value);
        this._onChange(value);
    }
}
