import {
    Component,
    OnInit,
    forwardRef,
    Input,
    SimpleChanges,
    OnChanges,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';
import {
    switchMap,
    debounceTime,
    distinctUntilChanged,
    map,
    catchError,
} from 'rxjs/operators';

import { PlaceModule, PlaceDriverRole } from '@placeos/ts-client';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { HashMap, Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'item-search-field',
    template: `
        <div class="item-search-field" form-field [class.disabled]="disabled">
            <mat-form-field appearance="outline">
                <input
                    matInput
                    name="item-search"
                    #input
                    [(ngModel)]="search_str"
                    (ngModelChange)="search$.next($event)"
                    [disabled]="disabled"
                    [placeholder]="
                        'Search' + (name ? ' for ' + name : '') + '...'
                    "
                    i18n-placeholder
                    [matAutocomplete]="auto"
                    (focus)="search_str = ''; search$.next(' ')"
                    (blur)="resetSearchString()"
                />
                <div class="prefix" matPrefix>
                    <app-icon class="text-2xl relative top-0.5 -left-0.5"
                        >search</app-icon
                    >
                </div>
                <div class="suffix" matSuffix *ngIf="loading">
                    <mat-spinner diameter="16"></mat-spinner>
                </div>
            </mat-form-field>
            <mat-autocomplete #auto="matAutocomplete">
                <mat-option
                    *ngFor="let option of item_list"
                    [value]="option.name || option.id"
                    (click)="search$.next(option); setValue(option)"
                    class="leading-tight"
                >
                    <div class="flex items-center justify-between h-5">
                        <div
                            name
                            [innerHTML]="item_name[option.id] | sanitize"
                        ></div>
                        <code *ngIf="option.notes" class="!text-xs truncate">{{
                            option.notes
                        }}</code>
                    </div>
                    <div class="text-xs opacity-60">
                        {{ option.id }}
                        {{ option.extra ? ' - ' + option.extra : '' }}
                    </div>
                </mat-option>
            </mat-autocomplete>
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
})
export class ItemSearchFieldComponent<T extends Identity = any>
    extends BaseClass
    implements OnInit, OnChanges, ControlValueAccessor
{
    /** Name of the items being query'd */
    @Input() public name: string;
    /** Limit available options to these */
    @Input() public options: T[];
    /** Whether the form field should be disabled */
    @Input() public disabled: boolean;
    @Input() public clear_on_select: boolean = false;
    /** Function for filtering out options */
    @Input() public exclude: (_: T) => boolean;
    /** Minimum number of characters needed to start a server query */
    @Input('minLength') public min_length = 0;
    /** Whether item list is loading */
    @Input() public loading: boolean;
    /** Service used for searching items */
    @Input() public query_fn: (_: string) => Observable<T[]> = () => of([]);
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

    @ViewChild('input') private _input_el: ElementRef<HTMLInputElement>;

    public get items() {
        return this.options?.length ? this.options : this.item_list;
    }

    /** Map of item names to their IDs */
    public item_name: HashMap<string> = {};

    public ngOnInit(): void {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((query) => {
                this.loading = true;
                return this.options && this.options.length > 0
                    ? of(this.options)
                    : !this.min_length || query.length >= this.min_length
                    ? this.query_fn(query)
                    : of([]);
            }),
            catchError((_) => of([])),
            map((list: T[]) => {
                this.loading = false;
                const search = (this.search_str || '').toLowerCase();
                return list.filter((item: any) => {
                    const match =
                        item.name?.toLowerCase().indexOf(search) >= 0 ||
                        (item.email || '').toLowerCase().indexOf(search) >= 0;
                    return match && (this.exclude ? !this.exclude(item) : true);
                });
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => {
                this.item_list = list;
                this._updateNameMap();
            })
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
                if (this.clear_on_select) {
                    this.active_item = null;
                    this.search_str = '';
                } else if (this.active_item) {
                    this.search_str = this.active_item.name || this.search_str;
                }
                if (this._input_el?.nativeElement)
                    this._input_el.nativeElement.value = this.search_str || '';
            },
            50
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
        for (let item of list) {
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
