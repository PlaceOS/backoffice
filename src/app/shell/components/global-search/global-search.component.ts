import {
    Component,
    OnChanges,
    Input,
    ViewChild,
    ViewChildren,
    ElementRef,
    QueryList,
    SimpleChanges,
    EventEmitter,
    Output
} from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';
import { Subject, Observable, of } from 'rxjs';
import {
    EngineResource,
    EngineSystem,
    EngineModule,
    EngineZone,
    HashMap
} from '@acaengine/ts-client';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';
import { unique } from 'src/app/shared/utilities/general.utilities';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'global-search',
    templateUrl: './global-search.template.html',
    styleUrls: ['./global-search.styles.scss'],
    animations: [
        trigger('listAnimation', [
            transition('* => *', [
                // each time the binding value changes
                query(':enter', [
                    style({ transform: 'translateY(100%)', opacity: 0 }),
                    stagger(50, [
                        animate('.2s', style({ transform: 'translateY(0%)', opacity: 1 }))
                    ])
                ])
            ])
        ])
    ]
})
export class GlobalSearchComponent extends BaseDirective implements OnChanges {
    /** Search query string */
    @Input() public search: string;
    /** Search query string */
    @Output() public searchChange = new EventEmitter<string>();
    /** Minimum number of characters needed to start a server query */
    @Input('minLength') public min_length: number = 2;
    /** Mapping of item types to routes */
    public route_map: any = {
        system: 'Systems',
        device: 'Modules',
        user: 'Users',
        trigger: 'Triggers',
        zone: 'Zones'
    };
    /** Whether search data is being loaded */
    public loading: boolean;
    /** Current display value of the search input field  */
    public search_str: string;
    /** Observable for the list of items from an API search */
    public search_results$: Observable<EngineResource<any>[]>;
    /** List of item */
    public results: EngineResource<any>[];
    /** Current page offset to get the next list of items */
    public offset: number = 0;

    /** Subject holding the value of the search */
    private search$ = new Subject<string>();

    @ViewChild('item_list', { static: true }) private list_el: ElementRef;
    @ViewChildren('list_item') private item_list: QueryList<ElementRef>;

    constructor(
        private _service: ApplicationService,
        private _dialog: MatDialog,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(query => {
                this.loading = true;
                this.offset = 20;
                return !this.min_length || query.length >= this.min_length
                    ? this.queryEndpoints(query)
                    : Promise.resolve([]);
            }),
            catchError(err => of([])),
            map((list: EngineResource<any>[][]) => {
                this.loading = false;
                return [].concat.apply([], list);
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe(list => {
                this.results = list;
                this.results.forEach((item: HashMap) => (item.type = this.itemType(item as any)));
            })
        );
        this.subscription(
            'navigate_end',
            this._router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.afterNavigate();
                }
            })
        );
    }

    public ngOnChanges(change: SimpleChanges): void {
        if (change.search) {
            this.timeout('search', () => this.search$.next(this.search), 100);
        }
    }

    /**
     * Load the next page of items for each endpoint
     */
    public loadMoreItems() {
        this.loading = true;
        this.queryEndpoints(this.search, this.offset).then(
            (results_list: EngineResource<any>[][]) => {
                for (const list of results_list) {
                    this.results = unique(this.results.concat(list), 'id');
                }
                this.results.forEach((item: HashMap) => (item.type = this.itemType(item as any)));
                this.offset += 20;
                this.loading = false;
                this.timeout('load_more', () => this.atBottom(), 2000);
            }
        );
    }

    /**
     * Get the type of item
     * @param item Item the get the type of
     */
    public itemType(item: EngineResource<any>): 'systems' | 'modules' | 'zones' {
        if (item instanceof EngineSystem) return 'systems';
        if (item instanceof EngineModule) return 'modules';
        if (item instanceof EngineZone) return 'zones';
        return 'zones';
    }

    /**
     * Open the modal to edit item
     * @param item Item to edit
     */
    public edit(item: EngineResource<any>) {
        if (item) {
            const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item,
                    service: (item as any)._service
                }
            });
        }
    }

    /**
     * Handle navigation events while open
     */
    public afterNavigate() {
        this.search = '';
        this.searchChange.emit(this.search);
    }

    /**
     * Query the multiple API endpoints
     * @param query Filter string
     * @param offset Returned page offset
     */
    private queryEndpoints(query: string, offset: number = 0) {
        return Promise.all([
            this._service.Systems.query({ q: query || '', offset, cache: 60 * 1000 }),
            this._service.Zones.query({ q: query || '', offset, cache: 60 * 1000 }),
            this._service.Modules.query({ q: query || '', offset, cache: 60 * 1000 })
        ]);
    }

    /**
     * Check whether the user has scrolled to the bottom of the viewport
     */
    public atBottom() {
        if (!this.list_el) {
            return this.timeout('bottom', () => this.atBottom());
        }
        const el = this.list_el.nativeElement;
        if (el && el.scrollHeight - el.scrollTop === el.clientHeight) {
            this.loadMoreItems();
        }
    }
}
