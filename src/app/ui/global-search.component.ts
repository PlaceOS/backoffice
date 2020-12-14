import {
    Component,
    OnChanges,
    Input,
    ViewChild,
    ElementRef,
    SimpleChanges,
    EventEmitter,
    Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import {
    PlaceSystem,
    PlaceModule,
    PlaceZone,
    queryModules,
    queryZones,
    querySystems,
} from '@placeos/ts-client';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

import { BaseClass } from 'src/app/common/base.class';
import { unique } from 'src/app/common/general';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { HashMap } from 'src/app/common/types';
import { BackofficeUsersService } from 'src/app/users/users.service';

@Component({
    selector: 'global-search',
    template: `
        <div
            class="fixed bottom-0 left-0 right-0 bg-white bg-opacity-25"
            [class.dark-mode]="dark_mode"
            #item_list
            [@listAnimation]="results ? results.length : 0"
            (scroll)="atBottom()"
        >
            <ng-container *ngIf="!loading; else load_state">
                <div
                    class="flex items-center bg-white rounded m-2 p-2 space-x-2 border border-gray-400"
                    #list_item
                    *ngFor="let item of results || []"
                    [title]="item.name"
                >
                    <a class="flex-1" [routerLink]="['/' + item.type, item.id]">
                        {{ item.name }}
                    </a>
                    <a class="flex items-center" [routerLink]="['/' + item.type, item.id]">
                        <div class="underline text-sm">{{ item.id }}</div>
                        <div
                            [class]="
                                'text-sm p-1 shadow rounded capitalize w-20 text-center ml-4 ' +
                                item.type
                            "
                        >
                            {{ item.type }}
                        </div>
                    </a>
                    <button mat-icon-button (click)="edit(item)">
                        <app-icon className="backoffice-edit"></app-icon>
                    </button>
                    <a mat-icon-button [routerLink]="['/' + item.type, item.id]">
                        <app-icon class="text-2xl" className="backoffice-eye"></app-icon>
                    </a>
                </div>
            </ng-container>
        </div>
        <ng-template #load_state>
            <div class="p-8 flex flex-col items-center">
                <mat-spinner diameter="32"></mat-spinner>
                <p>Searching...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="p-8 flex flex-col items-center">
                <mat-spinner diameter="32"></mat-spinner>
                <p>No matches found</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host > div {
                top: 3.5rem;
                z-index: 999;
            }

            .systems {
                background-color: #9c27b0;
                color: #fff;
            }

            .devices {
                background-color: #3f51b5;
                color: #fff;
            }

            .triggers {
                background-color: #00bcd4;
                color: #fff;
            }

            .users {
                background-color: #43a047;
                color: #fff;
            }

            .zones {
                background-color: #f4511e;
                color: #fff;
            }

            .modules {
                background-color: #00796b;
                color: #fff;
            }
        `,
    ],
    animations: [
        trigger('listAnimation', [
            transition('* => *', [
                // each time the binding value changes
                query(':enter', [
                    style({ transform: 'translateY(100%)', opacity: 0 }),
                    stagger(50, [
                        animate('.2s', style({ transform: 'translateY(0%)', opacity: 1 })),
                    ]),
                ]),
            ]),
        ]),
    ],
})
export class GlobalSearchComponent extends BaseClass implements OnChanges {
    /** Search query string */
    @Input() public search: string;
    /** Search query string */
    @Output() public searchChange = new EventEmitter<string>();
    /** Minimum number of characters needed to start a server query */
    @Input('minLength') public min_length = 2;
    /** Mapping of item types to routes */
    public route_map: any = {
        system: 'Systems',
        device: 'Modules',
        user: 'Users',
        trigger: 'Triggers',
        zone: 'Zones',
    };
    /** Whether search data is being loaded */
    public loading: boolean;
    /** Current display value of the search input field  */
    public search_str: string;
    /** Observable for the list of items from an API search */
    public search_results$: Observable<HashMap<any>[]>;
    /** List of item */
    public results: HashMap<any>[];
    /** Current page offset to get the next list of items */
    public offset = 0;

    /** Subject holding the value of the search */
    private search$ = new Subject<string>();

    @ViewChild('item_list', { static: true }) private list_el: ElementRef;

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._users.dark_mode;
    }

    constructor(
        private _users: BackofficeUsersService,
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
            switchMap((query_string) => {
                this.loading = true;
                this.offset = 20;
                return !this.min_length || query_string.length >= this.min_length
                    ? this.queryEndpoints(query_string)
                    : Promise.resolve([]);
            }),
            catchError(() => of([])),
            map((list: HashMap<any>[][]) => {
                this.loading = false;
                return [].concat.apply([], list);
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => {
                this.results = list;
                this.results.forEach((item: HashMap) => (item.type = this.itemType(item as any)));
            })
        );
        this.subscription(
            'navigate_end',
            this._router.events.subscribe((event) => {
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
        this.queryEndpoints(this.search, this.offset).then((results_list: any[][]) => {
            for (const list of results_list) {
                this.results = unique(this.results.concat(list), 'id');
            }
            this.results.forEach((item: HashMap) => (item.type = this.itemType(item as any)));
            this.offset += 20;
            this.loading = false;
            this.timeout('load_more', () => this.atBottom(), 2000);
        });
    }

    /**
     * Get the type of item
     * @param item Item the get the type of
     */
    public itemType(item: HashMap<any>): 'systems' | 'modules' | 'zones' {
        if (item instanceof PlaceSystem) return 'systems';
        if (item instanceof PlaceModule) return 'modules';
        if (item instanceof PlaceZone) return 'zones';
        return 'zones';
    }

    /**
     * Open the modal to edit item
     * @param item Item to edit
     */
    public edit(item: HashMap<any>) {
        if (item) {
            this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item,
                    service: (item as any)._service,
                },
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
     * @param query_str Filter string
     * @param offset Returned page offset
     */
    private queryEndpoints(query_str: string, offset: number = 0) {
        return Promise.all([
            querySystems({ q: query_str || '', offset, cache: 60 * 1000 })
                .pipe(map((resp) => resp.data))
                .toPromise(),
            queryZones({ q: query_str || '', offset, cache: 60 * 1000 })
                .pipe(map((resp) => resp.data))
                .toPromise(),
            queryModules({ q: query_str || '', offset, cache: 60 * 1000 })
                .pipe(map((resp) => resp.data))
                .toPromise(),
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
