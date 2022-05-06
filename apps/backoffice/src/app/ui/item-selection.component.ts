import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
    Component,
    ElementRef,
    Input,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { isBefore } from 'date-fns';
import { take } from 'rxjs/operators';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';
import { SettingsService } from '../common/settings.service';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'item-selection',
    template: `
        <div
            class="w-full p-2 flex items-center justify-center border-b border-gray-200 dark:border-neutral-500"
        >
            <button
                (click)="show = true; this.focusInput()"
                class="border border-gray-200 dark:border-neutral-500 rounded-lg flex items-center w-[512px] max-w-[calc(100vw-1rem)]"
            >
                <app-icon class="text-2xl ml-2 dark:text-white">search</app-icon>
                <p class="p-2 text-lg opacity-30 dark:text-white">View {{ title }}</p>
            </button>
        </div>
        <ng-container *ngIf="show_view">
            <div
                class="absolute inset-0 bg-white/80 dark:bg-black/30"
                (click)="show = false"
            ></div>
            <div
                class=" absolute left-1/2 top-2 -translate-x-1/2 flex flex-col w-[512px] max-w-[calc(100vw-1rem)] space-y-2 bg-white dark:bg-neutral-700 shadow rounded overflow-hidden"
                (click)="$event.stopPropagation()"
            >
                <div class="flex items-center border-b border-gray-200 dark:border-neutral-600">
                    <app-icon class="text-2xl ml-2 dark:text-white">search</app-icon>
                    <input
                        #search_input
                        class="border-none flex-1 py-3 px-2 text-lg bg-transparent"
                        [(ngModel)]="search"
                        (ngModelChange)="updateSearch($event)"
                        [placeholder]="'Search for ' + title"
                    />
                    <mat-spinner
                        *ngIf="loading | async"
                        diameter="32"
                        class="mr-2"
                    ></mat-spinner>
                </div>
                <div class="flex flex-col flex-1 h-1/2">
                    <cdk-virtual-scroll-viewport
                        itemSize="48"
                        (scroll)="(is_scrolled)"
                        (scrolledIndexChange)="atBottom()"
                        *ngIf="(items | async)?.length; else empty_state"
                        class="max-h-[65vh] h-[768px] dark:text-white"
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
                                __change_detection_hack__: item.id + subroute
                            }"
                            class="flex items-center px-4 py-2 m-2 rounded"
                            (click)="show = false;"
                        >
                            <p class="truncate">
                                {{ item.display_name || item.name }}
                            </p>
                            <p class="text-xs text-opacity-30">
                                {{ item.extra }}
                            </p>
                        </a>
                    </cdk-virtual-scroll-viewport>
                </div>
            </div>
        </ng-container>
        <ng-template #empty_state>
            <div
                class="p-8 flex flex-col items-center justify-center opacity-30"
            >
                <p>
                    {{
                        search
                            ? 'No matching ' + title + ' found'
                            : 'No ' + title + ' available'
                    }}
                </p>
            </div>
        </ng-template>
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
                background-color: var(--primary);
                color: #fff;
            }
        `,
    ],
})
export class ItemSelectionComponent extends BaseClass {
    @Input() public show = true;
    @Input() public title = 'Systems';
    @Input() public route = 'systems';

    public last_total = 0;
    public last_check = 0;
    public search = '';
    /** List of items for the active route */
    public readonly items = this._service.list;
    /** Whether list of items for the active route are loading */
    public readonly loading = this._service.loading_list;

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
        private _service: ActiveItemService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription('loading', this._service.loading.subscribe(() => this.show = !this._service.active_item));
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
        const loading = await this.loading.pipe(take(1)).toPromise();
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
}
