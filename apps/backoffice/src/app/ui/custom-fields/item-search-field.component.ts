import {
    Component,
    ElementRef,
    forwardRef,
    input,
    model,
    OnChanges,
    OnInit,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    map,
    switchMap,
} from 'rxjs/operators';

import { PlaceDriverRole, PlaceModule } from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HashMap, Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'item-search-field',
    template: `
        <div
            class="item-search-field flex max-h-full flex-col"
            form-field
            [class.disabled]="disabled()"
        >
            <mat-form-field appearance="outline">
                <input
                    matInput
                    name="item-search"
                    #input
                    [(ngModel)]="search_str"
                    (ngModelChange)="search$.next($event)"
                    [disabled]="disabled()"
                    [placeholder]="
                        placeholder()
                            ? placeholder()
                            : 'Search' +
                              (name() ? ' for ' + name() : '') +
                              '...'
                    "
                    [matAutocomplete]="auto"
                    [matAutocompleteDisabled]="display_list()"
                    (focus)="search_str = ''; search$.next(' ')"
                    (blur)="resetSearchString()"
                />
                <div class="prefix" matPrefix>
                    <app-icon class="relative -left-0.5 text-2xl"
                        >search</app-icon
                    >
                </div>
                @if (loading()) {
                    <div class="suffix" matSuffix>
                        <mat-spinner diameter="16"></mat-spinner>
                    </div>
                }
            </mat-form-field>
            @if (display_list()) {
                @if (item_list?.length) {
                    <div class="h-[50vh] flex-1 space-y-2 overflow-auto">
                        @for (option of item_list; track option) {
                            <button
                                matRipple
                                (click)="search$.next(option); setValue(option)"
                                class="w-full rounded px-4 py-2 text-left hover:bg-base-200"
                            >
                                <div class="leading-tight">
                                    <ng-container
                                        *ngTemplateOutlet="
                                            item_option;
                                            context: { option: option }
                                        "
                                    ></ng-container>
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
                                search_str?.length
                                    ? 'No matching ' +
                                      (name() || 'item') +
                                      ' for search string'
                                    : 'No ' +
                                      (name() || 'items') +
                                      ' available to search'
                            }}
                        </p>
                    </div>
                }
            }
            <mat-autocomplete #auto="matAutocomplete">
                @for (option of item_list; track option.id) {
                    <mat-option
                        [value]="option.name || option.id"
                        (click)="search$.next(option); setValue(option)"
                        class="leading-tight"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                item_option;
                                context: { option: option }
                            "
                        ></ng-container>
                    </mat-option>
                }
            </mat-autocomplete>
            <ng-template #item_option let-option="option">
                <div class="flex h-5 items-center justify-between">
                    <div
                        name
                        [innerHTML]="item_name[option.id] | sanitize"
                    ></div>
                    @if (option.notes) {
                        <code class="truncate !text-xs">{{
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
    standalone: false,
})
export class ItemSearchFieldComponent<T extends Identity = any>
    extends AsyncHandler
    implements OnInit, OnChanges, ControlValueAccessor
{
    /** Name of the items being query'd */
    public readonly name = input<string>(undefined);
    /** Placeholder to display on the form input */
    public readonly placeholder = input<string>(undefined);
    /** Limit available options to these */
    public readonly options = input<T[]>(undefined);
    /** Whether the form field should be disabled */
    public readonly disabled = input<boolean>(false);
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
    public readonly min_length = input(0, { alias: 'minLength' });
    /** Whether item list is loading */
    public readonly loading = model<boolean>(false);
    /** Service used for searching items */
    public readonly query_fn = input<(_: string) => Observable<T[]>>(() =>
        of([]),
    );
    /** Currently selected item */
    public active_item: T;
    /** Item list to display */
    public item_list: T[];
    /** Current display value of the search input field  */
    public search_str: string;
    /** List of items from an API search */
    public search_results$: Observable<T[]>;
    /** Subject holding the value of the search */
    public readonly search$ = new Subject<string>();
    /** Form control on change handler */
    private _onChange: (_: T) => void;
    /** Form control on touch handler */
    private _onTouch: (_: T) => void;

    private readonly _input_el =
        viewChild<ElementRef<HTMLInputElement>>('input');

    public get items() {
        const options = this.options();
        return options?.length ? options : this.item_list;
    }

    /** Map of item names to their IDs */
    public item_name: HashMap<string> = {};

    public ngOnInit(): void {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((query) => {
                this.loading.set(true);
                const options = this.options();
                const min_length = this.min_length();
                return options && options.length > 0
                    ? of(options)
                    : !min_length || query.length >= min_length
                      ? this.query_fn()(query)
                      : of([]);
            }),
            catchError((_) => of([])),
            map((list: T[]) => {
                this.loading.set(false);
                return list.filter((item: any) =>
                    this.exclude()
                        ? !this.exclude()(
                              item,
                              (this.search_str || '').toLowerCase(),
                          )
                        : true,
                );
            }),
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => {
                this.item_list = list;
                this._updateNameMap();
            }),
        );
        this.timeout('init', () => {
            this.search$.next('');
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.service) this.search$.next('');
        if (changes.options) this._updateNameMap();
    }

    /**
     * Reset the search string back to the name of the active item
     */
    public resetSearchString() {
        this.timeout(
            'value',
            () => {
                if (this.clear_on_select()) {
                    this.active_item = null;
                    this.search_str = '';
                } else if (this.active_item) {
                    this.search_str = this.active_item.name || this.search_str;
                }
                if (this._input_el()?.nativeElement)
                    this._input_el().nativeElement.value =
                        this.search_str || '';
            },
            50,
        );
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: T): void {
        this.active_item = new_value;
        if (this._onChange) {
            this._onChange(new_value);
        }
        this.resetSearchString();
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: T) {
        this.active_item = value;
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
                    (item as any).custom_name || item.name || '<Unnamed>';
            }
        }
        this.item_name = map;
    }
}
