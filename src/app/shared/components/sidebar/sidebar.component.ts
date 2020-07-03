import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnInit,
    ViewChild,
    ElementRef,
    ViewChildren,
    QueryList,
    SimpleChanges
} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Router, NavigationEnd } from '@angular/router';
import { EngineModule, EngineDriverRole } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from '../../globals/base.directive';
import { EngineServiceLike, HashMap, Identity } from '../../utilities/types.utilities';
import { unique } from '../../utilities/general.utilities';

import * as dayjs from 'dayjs';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.template.html',
    styleUrls: ['./sidebar.styles.scss']
})
export class SidebarComponent extends BaseDirective implements OnChanges, OnInit {
    /** Module name to display at the top of the sidebar */
    @Input() public heading = '';
    /** List of items to render on the list */
    @Input() public list: any[] = [];
    /** Name of the active module */
    @Input() public module: EngineServiceLike;
    /** Whether the list is being loaded */
    @Input() public loading: boolean;
    /** Additional query params to add to item load requests */
    @Input('queryParams') public query_params: HashMap = {};
    /** Whether sidebar is closed */
    @Input() public close = false;
    /** Search string */
    @Input() public search = '';
    /** Emitter for changes to the search string */
    @Output() public searchChange = new EventEmitter();
    /** Emitter for user actions on the component */
    @Output() public event = new EventEmitter();
    /** Async list of items to render on the sidebar list */
    public items: BehaviorSubject<Identity[]> = new BehaviorSubject([]);
    /** Whether the application has initialised */
    public intialised: boolean;
    /** Last time the list was updated */
    public last_check: number;
    /** Last total number of items when the list was fetched */
    public last_total: number;
    /** Active subroute for active item */
    public subroute: string;

    /** List of elements for each associated item */
    @ViewChildren('list_item') private item_list: QueryList<ElementRef>;
    /** Virtual scrolling viewport */
    @ViewChild(CdkVirtualScrollViewport)
    private viewport: CdkVirtualScrollViewport;

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._service.Users.dark_mode;
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
        if (this.module) {
            return this._service.setting(`app.${this.module._api_route}.can_create`);
        }
        return false;
    }

    public get total(): number {
        return this.search ? this.module.last_total : this.module.total;
    }

    public get grand_total(): number {
        return this.module.total;
    }

    /** Heading value lower cased */
    public get lowercase_heading() {
        return (this.heading || '').toLowerCase();
    }

    /** Path of the active module */
    public get route() {
        const route = this.module._api_route;
        return `/${route}`;
    }

    /** Maxiumum allowed items for the active module */
    public get licenses(): number {
        if (this.module) {
            return this._service.setting(`app.${this.module._api_route}.licenses`);
        }
        return 0;
    }

    /** Map of item names to their IDs */
    public get item_name(): HashMap<string> {
        const map = {};
        const list = this.items.getValue() || [];
        for (let item of list) {
            if (item instanceof EngineModule) {
                const detail =
                    item.role === EngineDriverRole.Service
                        ? item.uri
                        : item.role === EngineDriverRole.Logic
                            ? item.control_system_id
                            : item.ip;
                map[item.id] = `${item.custom_name || item.name || '<Unnamed>'} <span class="small">${detail}<span>`;
            } else {
                map[item.id] = item.custom_name || item.name || '<Unnamed>';
            }
        }
        return map;
    }

    constructor(private _service: ApplicationService, private _router: Router) {
        super();
    }

    public ngOnInit() {
        this._service.initialised.pipe(first(_ => _)).subscribe(() => {
            if (!this._service.get('BACKOFFICE.active_item')) {
                this._service.set('BACKOFFICE.active_item', null);
            }
            if (!this._service.get('BACKOFFICE.removed')) {
                this._service.set('BACKOFFICE.removed', '');
            }
            this.subscription(
                'active_item',
                this._service.listen('BACKOFFICE.active_item').subscribe(item => this.replaceActiveItem(item))
            );
            this.subscription(
                'remove_item',
                this._service.listen('BACKOFFICE.removed').subscribe(id => this.removeItem(id))
            );
            this.subscription(
                'up',
                this._service.Hotkeys.listen(['Alt', 'ArrowUp'], () => this.changeSelected(-1))
            );
            this.subscription(
                'down',
                this._service.Hotkeys.listen(['Alt', 'ArrowDown'], () => this.changeSelected(1))
            );
            this.items.next(this.list || []);
            const url = this._router.url.split('/');
            this.subroute = url[3];
            this.subscription('router.events', this._router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    const url = event.url.split('/');
                    this.subroute = url[3];
                }
            }))
            this.atBottom();
        });
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (this._service.is_initialised && (changes.list || changes.close)) {
            this.last_check = dayjs().valueOf();
            this.items.next(this.list || []);
            this.atBottom();
        }
        if (changes.module && changes.module.previousValue !== changes.module.currentValue) {
            this.searching();
        }
        if (changes.query_params && this.query_params) {
            this.searching();
        }
    }

    /** Whether to update the list of items */
    public get is_stale() {
        const now = dayjs();
        const last_check = dayjs(this.last_check);
        return (
            this.last_total !== this.items.getValue().length ||
            last_check.add(1, 'm').isBefore(now, 's')
        );
    }

    /**
     * Check if user has scrolled to the bottom of the sidebar and emit an event to get next page of items
     */
    public atBottom() {
        if (this.loading || !this.is_stale) {
            return;
        }
        if (!this.viewport) {
            return this.timeout('atBottom', () => this.atBottom());
        }
        const end = this.viewport.getRenderedRange().end;
        const total = this.viewport.getDataLength();
        if (end === total) {
            this.last_total = total;
            this.last_check = dayjs().valueOf();
            if (this.last_total !== this.module.last_total) {
                this.searching(this.list.length);
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

    /** Emit events to the parent element */
    public post(type: string) {
        this.event.emit({ type });
    }

    /**
     * Update the list displayed on the sidebar
     * @param offset Page offset for the list
     */
    public searching(offset: number = 0) {
        this.loading = true;
        if (this.module) {
            this.module.query({ q: this.search, offset, ...(this.query_params || {}) }).then(
                list => {
                    this.list = offset ? this.list.concat(list) : list;
                    this.list = unique(this.list, 'id');
                    this.list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
                    this.items.next(this.list);
                    this.loading = false;
                },
                err => {
                    this._service.notifyError(`Error updating ${this.module._name} list. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    this.loading = false;
                }
            );
        } else {
            this.loading = false;
        }
    }

    /**
     * Update the selected item
     * @param offset Offset with which to select the new item
     */
    public changeSelected(offset: number) {
        const list = this.item_list.toArray();
        const item_list = this.items.getValue();
        if (list && list.length > 0) {
            let index = item_list.findIndex(item => this._router.url.indexOf(`${item.id}`) >= 0);
            index += offset;
            if (index >= 0 && index < list.length) {
                list[index].nativeElement.scrollIntoView(false);
                this._service.navigate([this.module._api_route, item_list[index].id]);
            }
        }
    }

    /**
     * Replaces the active item with the latest local version
     * @param active_item New active item
     */
    private replaceActiveItem(active_item: Identity) {
        if (!active_item) {
            return;
        }
        console.log('Replace:', active_item);
        const list = this.items.getValue() || [];
        const index = list.findIndex(item => item.id === active_item.id);
        if (index >= 0) {
            list.splice(index, 1, active_item);
        } else if (list.length > 0 && list[0].constructor === active_item.constructor) {
            list.push(active_item);
        } else {
            list.push(active_item);
        }

        list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        this.items.next([...list]);
        console.log('Replaced');
    }

    /**
     * Remove item from the list
     * @param id
     */
    private removeItem(id: string): void {
        if (!id) {
            return;
        }
        const list = this.items.getValue() || [];
        const index = list.findIndex(item => item.id === id);
        if (index >= 0) {
            list.splice(index, 1);

            this.items.next([...list]);
        }
    }
}
