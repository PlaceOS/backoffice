import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    ViewChild,
    ElementRef,
    ViewChildren,
    QueryList,
} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Router, NavigationEnd } from '@angular/router';
import {
    PlaceModule,
    PlaceDriverRole,
    PlaceRepository,
} from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';
import { BackofficeUsersService } from 'apps/backoffice/src/app/users/users.service';
import { AsyncHandler } from 'apps/backoffice/src/app/common/base.class';
import { HotkeysService } from 'apps/backoffice/src/app/common/hotkeys.service';
import { SettingsService } from 'apps/backoffice/src/app/common/settings.service';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

import { take } from 'rxjs/operators';
import { isBefore } from 'date-fns';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.template.html',
    styleUrls: ['./sidebar.styles.scss'],
})
export class SidebarComponent extends AsyncHandler implements OnInit {
    /** Module name to display at the top of the sidebar */
    @Input() public heading = '';
    /** Name of the active module */
    @Input() public name: string;
    /** Additional query params to add to item load requests */
    @Input('queryParams') public query_params: HashMap = {};
    /** Whether sidebar is closed */
    @Input() public close = false;
    /** Search string */
    @Input() public search = '';
    /** Emitter for changes to the search string */
    @Output() public searchChange = new EventEmitter();
    /** Whether the application has initialised */
    public intialised: boolean;
    /** Last time the list was updated */
    public last_check: number;
    /** Last total number of items when the list was fetched */
    public last_total: number;
    /** Total number of items in the last request */
    public total = this._service.count;
    /** Total number of items */
    public grand_total: number;
    /** Active subroute for active item */
    public subroute: string;
    /** List of items for the active route */
    public readonly items = this._service.list;
    /** Whether list of items for the active route are loading */
    public readonly loading = this._service.loading_list;

    public readonly show_list = this._service.show_options;

    /** List of elements for each associated item */
    @ViewChildren('list_item') private item_list: QueryList<ElementRef>;
    /** Virtual scrolling viewport */
    @ViewChild(CdkVirtualScrollViewport)
    private viewport: CdkVirtualScrollViewport;

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._users.dark_mode;
    }

    /** Whether list is has been scrolled from the top */
    public get is_scrolled(): boolean {
        if (this.viewport) {
            const element = this.viewport.elementRef.nativeElement;
            if (element) {
                return element.scrollTop > 0;
            }
        }
        return false;
    }

    /** Whether new items for the active module can be created */
    public get new(): boolean {
        return this._settings.get(`app.${this.name}.can_create`);
    }

    public get is_admin() {
        return this._users.current().sys_admin;
    }

    /** Heading value lower cased */
    public get lowercase_heading() {
        return (this.heading || '').toLowerCase();
    }

    /** Path of the active module */
    public get route() {
        const route = this.name;
        return `/${route}`;
    }

    /** Maxiumum allowed items for the active module */
    public get licenses(): number {
        return this._settings.get(`app.${this.name}.licenses`) || 0;
    }

    /** Map of item names to their IDs */
    public get item_name(): HashMap<string> {
        const map = {};
        const list = this._service.list_items();
        for (let item of list) {
            if (item instanceof PlaceModule) {
                const detail =
                    item.role === PlaceDriverRole.Service
                        ? item.uri
                        : item.role === PlaceDriverRole.Logic
                        ? item.control_system_id
                        : item.ip;
                map[item.id] = `<div class="flex-1 w-1/2">${
                    item.custom_name || item.name || '<Unnamed>'
                }</div><div class="text-xs truncate w-32 opacity-30 text-right">${detail}<div>`;
            } else if (item instanceof PlaceRepository) {
                map[item.id] = `<div class="flex-1 w-1/2">${
                    item.name || '<Unnamed>'
                }</div> <div class="text-xs truncate w-32 opacity-30 text-right">${
                    item.repo_type
                }<div>`;
            } else {
                map[item.id] = `<div class="flex-1">${
                    item.custom_name || item.name || '<Unnamed>'
                }</div>`;
            }
        }
        return map;
    }

    constructor(
        private _el: ElementRef<HTMLElement>,
        private _users: BackofficeUsersService,
        private _router: Router,
        private _hotkey: HotkeysService,
        private _settings: SettingsService,
        private _service: ActiveItemService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'up',
            this._hotkey.listen(['Alt', 'ArrowUp'], () =>
                this.changeSelected(-1)
            )
        );
        this.subscription(
            'down',
            this._hotkey.listen(['Alt', 'ArrowDown'], () =>
                this.changeSelected(1)
            )
        );
        const url = this._router.url.split('/');
        this.subroute = url[3];
        this.subscription(
            'router.events',
            this._router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    const url = event.url.split('/');
                    this.subroute = url[3];
                }
            })
        );
        this.atBottom();
    }

    public newItem() {
        this._service.create();
    }

    public toggle() {
        this._el.nativeElement.classList.toggle('show');
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
    public async atBottom() {
        const loading = await this.loading.pipe(take(1)).toPromise();
        if (loading || !this.is_stale) {
            return;
        }
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

    /**
     * List item tracking function to reduce shadow dom re-rendering on changes
     * @param item Item to check
     * @param index Index of the item
     */
    public trackByFn(item: HashMap, index: number) {
        return item.id || index;
    }

    /**
     * Update the selected item
     * @param offset Offset with which to select the new item
     */
    public changeSelected(offset: number) {
        const list = this.item_list.toArray();
        const item_list = this._service.list_items();
        if (list && list.length > 0) {
            let index = item_list.findIndex(
                (item) => this._router.url.indexOf(`${item.id}`) >= 0
            );
            index += offset;
            if (index >= 0 && index < list.length) {
                list[index].nativeElement.scrollIntoView(false);
                const route = [this.name, `${item_list[index].id}`];
                if (this.subroute) {
                    route.push(this.subroute);
                }
                this._router.navigate(route);
            }
        }
    }
}
