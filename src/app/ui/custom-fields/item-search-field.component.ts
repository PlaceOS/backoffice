import {
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    input,
    model,
    OnChanges,
    OnInit,
    resource,
    signal,
    SimpleChanges,
    viewChild,
    WritableSignal,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { PlaceDriverRole, PlaceModule } from '@placeos/ts-client';

import { NgTemplateOutlet } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler } from '../../common/async-handler.class';
import { HashMap } from '../../common/types';
import { IconComponent } from '../icon.component';
import { SanitizePipe } from '../pipes/sanitise.pipe';

interface SearchItem {
    id: string;
    name: string;
    driver?: { id: string; name: string };
    email?: string;
    notes?: string;
    description?: string;
}

@Component({
    selector: 'item-search-field',
    template: `
        <div
            class="item-search-field flex max-h-full flex-col"
            form-field
            [class.disabled]="is_disabled()"
        >
            <mat-form-field appearance="outline">
                <input
                    matInput
                    name="item-search"
                    #input
                    [(ngModel)]="search_str"
                    [disabled]="is_disabled()"
                    [placeholder]="
                        placeholder()
                            ? placeholder()
                            : 'Search' +
                              (label() ? ' for ' + label() : '') +
                              '...'
                    "
                    [matAutocomplete]="auto"
                    [matAutocompleteDisabled]="display_list()"
                    (focus)="search_str.set('')"
                    (blur)="markTouched(); resetSearchString()"
                />
                <div class="prefix" matPrefix>
                    <icon class="relative -left-0.5 text-2xl">search</icon>
                </div>
                @if (loading()) {
                    <div class="suffix" matSuffix>
                        <mat-spinner diameter="16" />
                    </div>
                }
            </mat-form-field>
            @if (display_list()) {
                @if (item_list()?.length) {
                    <div class="h-[50vh] flex-1 space-y-2 overflow-auto">
                        @for (option of item_list(); track option?.id) {
                            <button
                                matRipple
                                (click)="
                                    search_str.set(
                                        option.name || '' + option.id
                                    );
                                    setValue(option)
                                "
                                class="hover:bg-base-200 w-full rounded-sm px-4 py-2 text-left"
                            >
                                <div class="leading-tight">
                                    <ng-container
                                        *ngTemplateOutlet="
                                            item_option;
                                            context: { option: option }
                                        "
                                    />
                                </div>
                            </button>
                        }
                    </div>
                } @else {
                    <div
                        class="flex min-h-48 flex-col items-center justify-center p-8 opacity-30"
                    >
                        <p class="text-sm">
                            {{
                                search_str()?.length
                                    ? 'No matching ' +
                                      (label() || 'item') +
                                      ' for search string'
                                    : 'No ' +
                                      (label() || 'items') +
                                      ' available to search'
                            }}
                        </p>
                    </div>
                }
            }
            <mat-autocomplete #auto="matAutocomplete">
                @for (option of item_list(); track option.id) {
                    <mat-option
                        [value]="option.name || option.id"
                        (click)="
                            search_str.set(option.name || '' + option.id);
                            setValue(option)
                        "
                        class="leading-tight"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                item_option;
                                context: { option: option }
                            "
                        />
                    </mat-option>
                }
            </mat-autocomplete>
            <ng-template #item_option let-option="option">
                <div class="flex h-5 items-center justify-between">
                    <div
                        name
                        [innerHTML]="item_name()[option.id] | sanitize"
                    ></div>
                    @if (option.notes) {
                        <code class="truncate text-xs!">{{
                            option.notes
                        }}</code>
                    }
                </div>
                <div class="text-xs opacity-60">
                    {{ option.id }}
                    {{ option.extra ? ' - ' + option.extra : '' }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host,
            mat-form-field {
                width: 100%;
            }

            .disabled {
                color: rgba(0, 0, 0, 0.35);
            }

            .name {
                display: flex;
                align-items: center;
                height: 1.1em;
                line-height: 1em;
            }

            .email {
                font-size: 0.6em;
                opacity: 0.65;
                line-height: 1.2em;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ItemSearchFieldComponent),
            multi: true,
        },
    ],
    imports: [
        MatAutocompleteModule,
        SanitizePipe,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        IconComponent,
        NgTemplateOutlet,
    ],
})
export class ItemSearchFieldComponent<T extends SearchItem>
    extends AsyncHandler
    implements OnInit, OnChanges, ControlValueAccessor
{
    private _changed = signal(0);
    private _debounced_search = signal('');
    /** Name of the items being query'd */
    public readonly label = input<string>(undefined);
    /** Placeholder to display on the form input */
    public readonly placeholder = input<string>(undefined);
    /** Limit available options to these */
    public readonly options = input<T[]>(undefined);
    /** Whether the form field should be disabled */
    public readonly disabled = input<boolean>(false);
    public readonly cva_disabled = signal(false);
    public readonly is_disabled = computed(
        () => this.disabled() || this.cva_disabled(),
    );
    public readonly display_list = input<boolean>(false);
    public readonly clear_on_select = input<boolean>(false);
    /** Function for filtering out options */
    public readonly exclude = input<(_: T, search: string) => boolean>(
        (v, search) =>
            (v.name || '').toLowerCase().indexOf(search) < 0 &&
            (v.driver?.name || '').toLowerCase().indexOf(search) < 0 &&
            (v.email || '').toLowerCase().indexOf(search) < 0 &&
            (v.notes || '').toLowerCase().indexOf(search) < 0 &&
            (v.description || '').toLowerCase().indexOf(search) < 0,
    );
    /** Minimum number of characters needed to start a server query */
    public readonly minLength = input(0);
    /** Whether item list is loading */
    public readonly loading = model<boolean>(false);
    /** Service used for searching items */
    public readonly query_fn = input<(_: string) => Promise<T[]>>(() =>
        Promise.resolve([]),
    );
    /** Currently selected item */
    public active_item = signal(null);
    /** Current display value of the search input field  */
    public search_str = signal('');
    private readonly _items = resource({
        params: () => ({
            changed: this._changed(),
            query: this._debounced_search(),
            options: this.options(),
            min_length: this.minLength(),
        }),
        loader: async ({ params }) => {
            const { query, options, min_length } = params;
            const trimmed_query = query.trim();
            this.loading.set(true);
            try {
                const list =
                    options && options.length > 0
                        ? options
                        : !min_length || trimmed_query.length >= min_length
                          ? await this.query_fn()(trimmed_query).catch(
                                () => [] as T[],
                            )
                          : [];
                const search = trimmed_query.toLowerCase();
                return list.filter((item: T) =>
                    this.exclude() ? !this.exclude()(item, search) : true,
                );
            } finally {
                this.loading.set(false);
            }
        },
    });
    /** Item list to display */
    public readonly item_list = computed(() => this._items.value() || []);
    /** Form control on change handler */
    private _onChange: (_: T) => void;
    /** Form control on touch handler */
    private _onTouch: (_: T) => void;

    private readonly _input_el =
        viewChild<ElementRef<HTMLInputElement>>('input');

    public get items() {
        const options = this.options();
        return options?.length ? options : this.item_list();
    }

    /** Map of item names to their IDs */
    public readonly item_name: WritableSignal<HashMap<string>> = signal({});

    constructor() {
        super();
        effect(() => {
            const query = this.search_str();
            this.timeout(
                'search',
                () => this._debounced_search.set(query),
                400,
            );
        });
        effect(() => {
            this.item_list();
            this._updateNameMap();
        });
    }

    public ngOnInit(): void {
        this.timeout('init', () => this.resetSearchString());
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.service) this.search_str.set('');
        if (changes.options) this._changed.set(Date.now());
    }

    /**
     * Reset the search string back to the name of the active item
     */
    public resetSearchString() {
        this.timeout(
            'value',
            () => {
                if (this.clear_on_select()) {
                    this.active_item.set(null);
                    this.search_str.set('');
                } else if (this.active_item()) {
                    this.search_str.set(
                        (this.active_item().name || this.search_str()).trim(),
                    );
                }
                if (this._input_el()?.nativeElement)
                    this._input_el().nativeElement.value =
                        this.search_str() || '';
            },
            50,
        );
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: T): void {
        if (this.is_disabled()) return;
        this.active_item.set(new_value);
        if (this._onChange) {
            this._onChange(new_value);
        }
        this.markTouched();
        this.resetSearchString();
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: T) {
        this.active_item.set(value);
        this.resetSearchString();
    }

    /**
     * Registers a callback function that is called when the
     * control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: T) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API
     * on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: T) => void): void {
        this._onTouch = fn;
    }

    public setDisabledState(disabled: boolean) {
        this.cva_disabled.set(disabled);
    }

    public markTouched() {
        this._onTouch?.(this.active_item());
    }

    private _updateNameMap() {
        const map = {};
        const list = this.items || [];
        for (const item of list) {
            if (item instanceof PlaceModule) {
                const detail =
                    item.role === PlaceDriverRole.Service
                        ? item.uri
                        : item.role === PlaceDriverRole.Logic
                          ? item.control_system_id
                          : item.ip;
                map[item.id] = `${
                    item.name || '<Unnamed>'
                } <span class="small">${detail}<span>`;
            } else {
                map[item.id] =
                    (item as unknown as { custom_name?: string }).custom_name ||
                    item.name ||
                    '<Unnamed>';
            }
        }
        this.item_name.set(map);
    }
}
