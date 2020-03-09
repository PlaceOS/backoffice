import { Component, OnInit, forwardRef, Input, SimpleChanges, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, map, catchError } from 'rxjs/operators';

import { EngineResource } from '@placeos/ts-client';

import { filterList, matchToHighlight } from 'src/app/shared/utilities/general.utilities';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { EngineServiceLike } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'item-search-field',
    templateUrl: './item-search-field.component.html',
    styleUrls: ['./item-search-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ItemSearchFieldComponent),
            multi: true
        }
    ]
})
export class ItemSearchFieldComponent<T extends EngineResource<any> = any> extends BaseDirective
    implements OnInit, OnChanges, ControlValueAccessor {
    /** Limit available options to these */
    @Input() public options: T[];
    /** Minimum number of characters needed to start a server query */
    @Input('minLength') public min_length: number = 0;
    /** Service used for searching items */
    @Input() public service: EngineServiceLike;
    /** Currently selected item */
    public active_item: T;
    /** Item list to display */
    public item_list: T[];
    /** Whether item list is loading */
    public loading: boolean;
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

    public ngOnInit(): void {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged((x, y) => !x || x !== y),
            switchMap(query => {
                this.loading = true;
                return this.options && this.options.length > 0
                    ? Promise.resolve(this.options)
                    : !this.min_length || query.length >= this.min_length
                        ? (this.service.query({ q: query || '', cache: 60 * 1000 }) as Promise<T[]>)
                        : Promise.resolve([]);
            }),
            catchError(err => of([])),
            map((list: T[]) => {
                this.loading = false;
                const search = (this.search_str || '').toLowerCase();
                return list.filter(
                    (item: any) =>
                        item.name.toLowerCase().indexOf(search) >= 0 ||
                        (item.email || '').toLowerCase().indexOf(search) >= 0
                );
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe(list => (this.item_list = list))
        );
        this.timeout('init', () => {
            this.search$.next('');
        })
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.service) {
            this.search$.next('');
        }
    }

    /**
     * Reset the search string back to the name of the active item
     */
    public resetSearchString() {
        if (this.active_item) {
            this.search_str = this.active_item.name;
        }
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
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: T) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: T) => void): void {
        this._onTouch = fn;
    }
}
