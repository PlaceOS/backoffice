import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
    Component,
    ElementRef,
    Input,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
    PlaceDriverRole,
    PlaceModule,
    PlaceRepository,
} from '@placeos/ts-client';
import { isBefore } from 'date-fns';
import { AsyncHandler } from '../common/async-handler.class';
import { nextValueFrom } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { ActiveItemService } from '../common/item.service';
import { SettingsService } from '../common/settings.service';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'item-selection',
    template: `
        <div
            class="flex w-full items-center justify-center border-b border-base-200 p-2"
        >
            <ng-content></ng-content>
            <button
                (click)="open()"
                class="flex max-w-[calc(100vw-1rem)] flex-1 items-center rounded-lg border border-base-200 sm:max-w-[512px] sm:flex-auto"
            >
                <app-icon class="ml-2 text-2xl">search</app-icon>
                <p class="w-1/2 flex-1 p-2 text-left text-lg opacity-30">
                    {{ 'COMMON.VIEW_TYPE' | translate: { name: title } }}
                </p>
                <span class="keycap mr-2 text-xs">K</span>
            </button>
        </div>
        @if (show_view) {
            <div
                class="bg-base-100/80 /30 absolute inset-0"
                (click)="show = false"
                (window:keydown.esc)="show = false"
            ></div>
            <div
                class="absolute left-1/2 top-2 flex w-[512px] max-w-[calc(100vw-1rem)] -translate-x-1/2 flex-col space-y-2 overflow-hidden rounded bg-base-100 shadow"
                (click)="$event.stopPropagation()"
            >
                <div
                    class="relative flex items-center border-b border-base-200"
                >
                    <app-icon
                        class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-2xl"
                    >
                        search
                    </app-icon>
                    <input
                        #search_input
                        class="bg-transparent flex-1 border-none py-4 pl-10 pr-4"
                        [(ngModel)]="search"
                        (ngModelChange)="updateSearch($event)"
                        [placeholder]="
                            'COMMON.SEARCH_FOR' | translate: { name: title }
                        "
                    />
                    @if (loading | async) {
                        <mat-spinner
                            diameter="24"
                            class="absolute right-2 top-1/2 mr-2 -translate-y-1/2"
                        ></mat-spinner>
                    }
                </div>
                <p class="w-full px-4 text-sm opacity-60">
                    {{
                        'COMMON.TOTAL_ITEMS'
                            | translate: { count: (total | async) }
                    }}
                </p>
                <div class="flex h-1/2 flex-1 flex-col">
                    @if ((items | async)?.length) {
                        <cdk-virtual-scroll-viewport
                            itemSize="48"
                            (scroll)="(is_scrolled)"
                            (scrolledIndexChange)="atBottom()"
                            class="h-[768px] max-h-[75vh]"
                        >
                            <a
                                *cdkVirtualFor="
                                    let item of items | async;
                                    trackBy: trackByFn
                                "
                                [routerLink]="
                                    subroute
                                        ? ['/', route, item.id, subroute]
                                        : ['/', route, item.id]
                                "
                                routerLinkActive="active"
                                [routerLinkActiveOptions]="{
                                    exact: false,
                                    __change_detection_hack__:
                                        item.id + subroute,
                                }"
                                class="m-2 block max-w-[calc(100vw-2rem)] rounded p-2"
                                (click)="show = false"
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
                                            class="mono bg-base-content/10 /5 mt-1 max-w-full truncate rounded px-2 py-1 text-xs opacity-60"
                                        >
                                            {{ item.extra }}
                                        </span>
                                    </div>
                                }
                            </a>
                            <div
                                class="bg-base-200 p-2 text-center text-sm opacity-30"
                            >
                                {{ 'COMMON.END_OF_LIST' | translate }}
                            </div>
                        </cdk-virtual-scroll-viewport>
                    } @else {
                        <div
                            class="flex flex-col items-center justify-center p-8 opacity-30"
                        >
                            <p>
                                {{
                                    (search
                                        ? 'COMMON.SEARCH_EMPTY'
                                        : 'COMMON.LIST_EMPTY'
                                    ) | translate: { name: title }
                                }}
                            </p>
                        </div>
                    }
                </div>
            </div>
        }
    `,
    styles: [
        `
            a:nth-child(2n) {
                background-color: rgba(0, 0, 0, 0.04);
            }
            a:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }
            a.active {
                background-color: var(--secondary);
                color: #fff;
            }
        `,
    ],
    standalone: false,
})
export class ItemSelectionComponent extends AsyncHandler {
    @Input() public show = true;
    @Input() public title;
    @Input() public route = 'systems';

    public last_total = 0;
    public last_check = 0;
    public search = '';
    /** List of items for the active route */
    public readonly items = this._service.list;
    /** Whether list of items for the active route are loading */
    public readonly loading = this._service.loading_list;
    /** Total number of items in the last request */
    public total = this._service.count;

    /** Virtual scrolling viewport */
    @ViewChild(CdkVirtualScrollViewport)
    private viewport: CdkVirtualScrollViewport;

    @ViewChild('search_input') private _input: ElementRef<HTMLInputElement>;

    public get show_view() {
        return this.show || !this._service.active_item;
    }

    public get subroute() {
        return this._router.url.split('/')[3] || '';
    }

    constructor(
        private _users: BackofficeUsersService,
        private _router: Router,
        private _settings: SettingsService,
        private _hotkeys: HotkeysService,
        private _service: ActiveItemService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'loading',
            this._service.loading.subscribe(
                () => (this.show = !this._service.active_item),
            ),
        );
        this.subscription(
            'list',
            this._service.list.subscribe((l) => this._processItems(l)),
        );
        this.subscription(
            'hotkey',
            this._hotkeys.listen(['KeyK'], () => this.open()),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.show && this.show) {
            this.focusInput();
        }
    }

    public ngAfterViewInit() {
        this.focusInput();
        this.atBottom();
    }

    public open() {
        this.show = true;
        this.timeout('focus', () => this.focusInput());
    }

    public focusInput() {
        this._input?.nativeElement.focus();
    }

    public updateSearch(str: string) {
        this._service.setSearch(str);
    }

    public trackByFn(item: Record<string, any>, index: number) {
        return item.id || index;
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
    public async atBottom() {
        const loading = await nextValueFrom(this.loading);
        if (loading || !this.is_stale) return;
        if (!this.viewport) {
            return this.timeout('atBottom', () => this.atBottom());
        }
        const end = this.viewport.getRenderedRange().end;
        const total = this.viewport.getDataLength();
        if (end >= total - 1) {
            this.last_total = total;
            this.last_check = Date.now();
            if (this.last_total !== this._service.total) {
                this._service.moreItems();
            }
        }
    }

    private _processItems(list: any[]) {
        for (let item of list) {
            if (item instanceof PlaceModule) {
                const detail =
                    item.role === PlaceDriverRole.Service
                        ? item.uri
                        : item.role === PlaceDriverRole.Logic
                          ? item.control_system_id
                          : item.ip;
                (item as any).display_name =
                    item.custom_name || item.name || '<Unnamed>';
                (item as any).extra = detail;
            } else if (item instanceof PlaceRepository) {
                (item as any).display_name = item.name || '<Unnamed>';
                (item as any).extra = item.repo_type;
            } else {
                (item as any).display_name =
                    item.display_name ||
                    item.custom_name ||
                    item.name ||
                    '<Unnamed>';
                (item as any).extra = item.id;
            }
        }
    }
}
