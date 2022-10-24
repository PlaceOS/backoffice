import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
    PlaceDriverRole,
    PlaceModule,
    PlaceRepository,
} from '@placeos/ts-client';
import { isBefore } from 'date-fns';
import { map, take } from 'rxjs/operators';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'item-sidebar',
    template: `
        <div
            class="flex flex-col w-[24rem] max-w-[25vw] space-y-2 bg-white dark:bg-neutral-700 shadow rounded overflow-hidden h-full"
            (click)="$event.stopPropagation()"
        >
            <div
                class="flex items-center border-b border-gray-200 dark:border-neutral-600"
            >
                <app-icon class="text-2xl ml-2 dark:text-white"
                    >search</app-icon
                >
                <input
                    #search_input
                    class="border-none flex-1 py-3 px-2 text-lg bg-transparent dark:text-white"
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
            <p class="text-sm dark:text-white opacity-60 w-full px-2">
                {{ total | async }} item(s)
            </p>
            <div class="flex flex-col flex-1 h-1/2">
                <cdk-virtual-scroll-viewport
                    itemSize="48"
                    (scroll)="(is_scrolled)"
                    (scrolledIndexChange)="atBottom()"
                    *ngIf="(items | async)?.length; else empty_state"
                    class="relative flex-1 h-1/2 dark:text-white w-full"
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
                        class="flex flex-col px-2 py-2 max-w-full m-2 w-[calc(100%-1rem)] rounded"
                        (click)="show = false"
                    >
                        <p class="truncate w-full">
                            {{ item.name }}
                        </p>
                        <div><code class="!text-xs opacity-60" *ngIf="item.extra">
                            {{ item.extra }}
                        </code></div>
                    </a>
                    <div
                        class="p-2 text-center opacity-30 text-sm bg-gray-300 dark:bg-neutral-800"
                    >
                        End of the list
                    </div>
                </cdk-virtual-scroll-viewport>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="p-8 flex flex-col items-center justify-center opacity-30 dark:text-white"
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
            :host {
                height: 100%;
            }
            a:nth-child(2n) {
                background-color: rgba(0, 0, 0, 0.1);
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
export class ItemSidebarComponent extends BaseClass {
    @Input() public title = 'Systems';
    @Input() public route = 'systems';

    public last_total = 0;
    public last_check = 0;
    public search = '';
    /** List of items for the active route */
    public readonly items = this._service.list.pipe(map((l) => this._processItems(l)));
    /** Whether list of items for the active route are loading */
    public readonly loading = this._service.loading_list;
    /** Total number of items in the last request */
    public total = this._service.count;

    /** Virtual scrolling viewport */
    @ViewChild(CdkVirtualScrollViewport)
    private viewport: CdkVirtualScrollViewport;

    @ViewChild('search_input') private _input: ElementRef<HTMLInputElement>;

    public get subroute() {
        return this._router.url.split('/')[3] || '';
    }

    constructor(private _router: Router, private _service: ActiveItemService) {
        super();
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

    private _processItems(list: any[]) {
        for (let item of list) {
            if (item instanceof PlaceModule) {
                const name = item.system?.display_name || item.system?.name;
                const detail =
                    item.role === PlaceDriverRole.Service
                        ? item.uri
                        : item.role === PlaceDriverRole.Logic
                        ? name ? `${name} | ${item.control_system_id} ` : item.control_system_id
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
        return list;
    }
}
