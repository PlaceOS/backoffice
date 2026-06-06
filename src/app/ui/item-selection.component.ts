import {
    AfterViewInit,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    model,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import {
    PlaceDriverRole,
    PlaceModule,
    PlaceRepository,
} from '@placeos/ts-client';
import { isBefore } from 'date-fns';
import { AsyncHandler } from '../common/async-handler.class';
import { HotkeysService } from '../common/hotkeys.service';
import { ActiveItemService } from '../common/item.service';
import { toSignal } from '../common/signals';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';
import { VirtualScrollComponent } from './virtual-scroll.component';

@Component({
    selector: 'item-selection',
    template: `
        <div
            class="border-base-300 flex w-full items-center justify-center border-b p-2"
        >
            <ng-content />
            <button
                (click)="open()"
                class="border-base-300 flex max-w-[calc(100vw-1rem)] flex-1 items-center rounded-lg border sm:max-w-lg sm:flex-auto"
            >
                <icon class="ml-2 text-2xl">search</icon>
                <p class="w-1/2 flex-1 p-2 text-left text-lg opacity-30">
                    {{ 'COMMON.VIEW_TYPE' | translate: { name: title() } }}
                </p>
                <span class="keycap mr-2 text-xs">K</span>
            </button>
        </div>
        @if (show_view()) {
            <button
                class="bg-base-100/80 absolute inset-0"
                (click)="close()"
            >
                <button
                    class="bg-base-100 border-base-300 absolute top-2 left-1/2 flex w-lg max-w-[calc(100vw-1rem)] -translate-x-1/2 flex-col space-y-2 overflow-hidden rounded-sm border shadow-sm"
                    (click)="$event.stopPropagation()"
                >
                    <div
                        class="border-base-300 relative flex items-center border-b"
                    >
                        <icon
                            class="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 text-2xl"
                        >
                            search
                        </icon>
                        <input
                            #search_input
                            class="flex-1 border-none bg-transparent py-4 pr-4 pl-10"
                            [(ngModel)]="search"
                            (ngModelChange)="updateSearch($event)"
                            [placeholder]="
                                'COMMON.SEARCH_FOR'
                                    | translate: { name: title() }
                            "
                        />
                        @if (loading()) {
                            <mat-spinner diameter="24"
                                class="absolute top-1/2 right-2 mr-2 -translate-y-1/2"
                             />
                        }
                    </div>
                    <p class="w-full px-4 text-sm opacity-60 text-left">
                        {{
                            'COMMON.TOTAL_ITEMS'
                                | translate: { count: total() }:total()
                        }}
                    </p>
                    <div class="border-base-300 flex h-1/2 flex-1 flex-col">
                        @if (items().length) {
                            <virtual-scroll
                                [item_size]="72"
                                [items]="items()"
                                [item_template]="item_display"
                                (scrolled)="atBottom($event)"
                                class="h-[768px] max-h-[75vh]"
                            >
                                <div
                                    class="bg-base-200 p-2 text-center text-sm opacity-30"
                                >
                                    {{ 'COMMON.END_OF_LIST' | translate }}
                                </div>
                            </virtual-scroll>
                            <ng-template
                                #item_display
                                let-item="item"
                                let-idx="index"
                            >
                                <a
                                    [routerLink]="
                                        subroute()
                                            ? [
                                                  '/',
                                                  route(),
                                                  item.id,
                                                  subroute(),
                                              ]
                                            : ['/', route(), item.id]
                                    "
                                    routerLinkActive="active"
                                    [class.bg-base-content/5]="idx % 2 === 1"
                                    class="m-2 block max-w-[calc(100vw-2rem)] rounded-sm p-2 text-left"
                                    (click)="close()"
                                >
                                    <p class="flex-1 truncate">
                                        {{ item.name }}
                                    </p>
                                    @if (item.extra) {
                                        <div
                                            class="inline-block w-full overflow-hidden"
                                        >
                                            <span
                                                extra
                                                class="mono bg-base-content/10 /5 mt-1 max-w-full truncate rounded-sm px-2 py-1 text-xs opacity-60"
                                            >
                                                {{ item.extra }}
                                            </span>
                                        </div>
                                    }
                                </a>
                            </ng-template>
                        } @else {
                            <div
                                class="flex flex-col items-center justify-center p-8 opacity-30"
                            >
                                <p>
                                    {{
                                        (search
                                            ? 'COMMON.SEARCH_EMPTY'
                                            : 'COMMON.LIST_EMPTY'
                                        ) | translate: { name: title() }
                                    }}
                                </p>
                            </div>
                        }
                    </div>
                </button>
            </button>
        }
    `,
    styles: [
        `
            a:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }
            a.active {
                background-color: var(--secondary) !important;
                color: #fff;
            }
        `,
    ],
    imports: [
        TranslatePipe,
        IconComponent,
        VirtualScrollComponent,
        RouterModule,
        MatProgressSpinnerModule,
        FormsModule,
    ],
})
export class ItemSelectionComponent
    extends AsyncHandler
    implements OnInit, OnChanges, AfterViewInit
{
    private _router = inject(Router);
    private _hotkeys = inject(HotkeysService);
    private _service = inject(ActiveItemService);
    private readonly _route_change = toSignal(this._router.events, {
        initialValue: null,
    });

    public readonly show = model(true);
    public readonly title = input(undefined);
    public readonly route = input('systems');
    public readonly subroute = signal('');

    public last_total = 0;
    public last_check = 0;
    public search = '';
    /** List of items for the active route */
    public readonly items = computed(() =>
        this._processItems(
            this._service.list() as ({
                id?: string;
                name?: string;
                display_name?: string;
                custom_name?: string;
            } & Record<string, unknown>)[],
        ),
    );
    /** Whether list of items for the active route are loading */
    public readonly loading = this._service.loading_list;
    /** Total number of items in the last request */
    public total = this._service.count;

    private readonly _manual_open = signal(false);
    private readonly _input =
        viewChild<ElementRef<HTMLInputElement>>('search_input');

    public readonly show_view = computed(() => {
        return this.show() || !this._service.active_item;
    });

    constructor() {
        super();
        effect(() => {
            this._route_change();
            this.subroute.set(this._router.url.split('/')[3] || '');
        });
        effect(() => {
            const loading = this._service.loading();
            const active_item = this._service.active_item$();
            if (!loading && !this._manual_open()) {
                this.show.set(!active_item);
            }
        });
    }

    public ngOnInit() {
        this.subscription(
            'hotkey',
            this._hotkeys.listen(['KeyK'], () => this.open()),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.show && this.show()) {
            this.focusInput();
        }
    }

    public ngAfterViewInit() {
        this.focusInput();
        this.atBottom([0, 0]);
    }

    public open() {
        this._manual_open.set(true);
        this.show.set(true);
        this.timeout('focus', () => this.focusInput());
    }

    public close() {
        this._manual_open.set(false);
        this.show.set(false);
    }

    public focusInput() {
        this._input()?.nativeElement.focus();
    }

    public updateSearch(str: string) {
        this._service.setSearch(str);
    }

    /** Whether to update the list of items */
    public get is_stale() {
        const now = Date.now();
        const last_check = this.last_check;
        return (
            this.last_total !== this._service.list_items().length ||
            isBefore(now, last_check + 60 * 1000)
        );
    }

    /**
     * Check if user has scrolled to the bottom of the sidebar and emit an event to get next page of items
     */
    public async atBottom([_start, end]: [number, number]) {
        this.timeout(
            'load_more',
            async () => {
                const loading = this.loading();
                const items = this.items();
                if (loading || !this.is_stale) return;
                if (end >= items.length) {
                    this.last_total = items.length;
                    this.last_check = Date.now();
                    if (this.last_total !== this._service.total) {
                        this._service.moreItems();
                    }
                }
            },
            150,
        );
    }

    private _processItems(
        list: ({
            id?: string;
            name?: string;
            display_name?: string;
            custom_name?: string;
        } & Record<string, unknown>)[],
    ) {
        for (const item of list) {
            if (item instanceof PlaceModule) {
                const detail =
                    item.role === PlaceDriverRole.Service
                        ? item.uri
                        : item.role === PlaceDriverRole.Logic
                          ? item.control_system_id
                          : item.ip;
                (item as Record<string, unknown>).display_name =
                    item.custom_name || item.name || '<Unnamed>';
                (item as Record<string, unknown>).extra = detail;
            } else if (item instanceof PlaceRepository) {
                (item as Record<string, unknown>).display_name =
                    item.name || '<Unnamed>';
                (item as Record<string, unknown>).extra = item.repo_type;
            } else {
                (item as Record<string, unknown>).display_name =
                    item.display_name ||
                    item.custom_name ||
                    item.name ||
                    '<Unnamed>';
                (item as Record<string, unknown>).extra = item.id;
            }
        }
        return list;
    }
}
