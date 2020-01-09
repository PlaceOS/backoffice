
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BehaviorSubject } from 'rxjs';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from '../../globals/base.directive';
import { EngineServiceLike, HashMap } from '../../utilities/types.utilities';

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
    /** Whether sidebar is closed */
    @Input() public close = false;
    /** Search string */
    @Input() public search = '';
    /** Emitter for changes to the search string */
    @Output() public searchChange = new EventEmitter();
    /** Emitter for user actions on the component */
    @Output() public event = new EventEmitter();
    /** Async list of items to render on the sidebar list */
    public items: BehaviorSubject<any[]>;
    /** Whether the application has initialised */
    public intialised: boolean;
    /** Last time the list was updated */
    public last_check: number;
    /** Last total number of items when the list was fetched */
    public last_total: number;

    /** List of elements for each associated item */
    @ViewChildren('list_item') private item_list: QueryList<ElementRef>;
    /** Virtual scrolling viewport */
    @ViewChild(CdkVirtualScrollViewport, { static: false }) private viewport: CdkVirtualScrollViewport;

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
        let route = this.module._api_route;
        if (route === 'modules') {
            route = 'devices'
        }
        return `/${route}`;
    }

    /** Maxiumum allowed items for the active module */
    public get licenses(): number {
        if (this.module) {
            return this._service.setting(`app.${this.module._api_route}.licenses`);
        }
        return 0;
    }

    constructor(private _service: ApplicationService) {
        super();
        this.items = new BehaviorSubject([]);
    }

    public ngOnInit() {
        if (!this._service.is_ready) {
            return this.timeout('init', () => this.ngOnInit());
        }
        this.timeout('startup', () => {
            this.items.next(this.list || []);
            this.atBottom();
        })
        this.subscription('up', this._service.Hotkeys.listen(['ArrowUp'], () => this.changeSelected(-1)));
        this.subscription('down', this._service.Hotkeys.listen(['ArrowDown'], () => this.changeSelected(1)));
    }

    public ngOnChanges(changes: any) {
        if (this._service.is_ready && (changes.list || changes.close)) {
            this.last_check = dayjs().valueOf();
            this.items.next(this.list || []);
            this.atBottom();
        }
        if (changes.module) {
            this.searching();
        }
    }

    /** Whether to update the list of items */
    public get is_stale() {
        const now = dayjs();
        const last_check = dayjs(this.last_check);
        return this.last_total !== this.items.getValue().length || last_check.add(1, 'm').isBefore(now, 's');
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
     *
     * @param item
     * @param index
     */
    public trackByFn(item: HashMap, index: number) {
        return item.id || index;
    }

    /** Emit events to the parent element */
    public post(type: string) {
        console.log('Type:', type)
        this.event.emit({ type });
    }

    /**
     * Update the list displayed on the sidebar
     * @param offset
     */
    public searching(offset: number = 0) {
        this.loading = true;
        if (this.module) {
            this.module.query({ q: this.search, offset }).then(list => {
                this.list = offset ? this.list.concat(list) : list;
                this.items.next(this.list);
                this.loading = false;
            }, (err) => {
                this._service.notifyError(`Error updating ${this.module._name} list. ${err}`);
                this.loading = false;
            });
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
        if (list && list.length > 0) {
            let index = list.findIndex(i => i.nativeElement.classList.contains('active'));
            index += offset;
            if (index > 0 && index < list.length) {
                list[index].nativeElement.scrollIntoView(false);
                this._service.navigate([this.module._api_route, this.items.getValue()[index].id]);
            }
        }
    }
}
