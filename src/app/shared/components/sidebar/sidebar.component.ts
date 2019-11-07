
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BehaviorSubject } from 'rxjs';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from '../../globals/base.directive';
import { EngineServiceLike } from '../../utilities/types.utilities';


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
    /** Maximum number of items in the current list */
    @Input() public total: number;
    /** Name of the active module */
    @Input() public module: EngineServiceLike;
    /** Whether the list is being loaded */
    @Input() public loading: boolean;
    /**  */
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

    /** List of elements for each associated item */
    @ViewChildren('list_item') private item_list: QueryList<ElementRef>;
    /** Virtual scrolling viewport */
    @ViewChild(CdkVirtualScrollViewport, { static: false }) private viewport: CdkVirtualScrollViewport;

    /** Whether new items for the active module can be created */
    public get new(): boolean {
        return false;
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
            return this._service.setting(`app.${this.module.name}.licenses`);
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
    }

    public ngOnChanges(changes: any) {
        if (this._service.is_ready && (changes.list || changes.close)) {
            this.items.next(this.list);
            this.atBottom();
        }
        this.subscription('up', this._service.Hotkeys.listen(['ArrowUp'], () => this.changeSelected(-1)));
        this.subscription('down', this._service.Hotkeys.listen(['ArrowDown'], () => this.changeSelected(1)));
    }

    /**
     * Emit a change to the active item
     * @param item New active item
     */
    public select(item) {
        this.event.emit({ type: 'select', item });
    }

    /**
     * Check if user has scrolled to the bottom of the sidebar and emit an event to get next page of items
     */
    public atBottom() {
        if (this.loading) {
            return;
        }
        if (!this.viewport) {
            return this.timeout('atBottom', () => this.atBottom());
        }
        const end = this.viewport.getRenderedRange().end;
        const total = this.viewport.getDataLength();
        if (end === total) {
            this.event.emit({ type: 'more' });
        }
    }

    public trackByIdx(i) {
        return i;
    }

    public searching() {
        this.timeout('searching', () => this.searchChange.emit(this.search));
    }

    public changeSelected(offset: number) {
        const list = this.item_list.toArray();
        if (list && list.length > 0) {
            let index = -1;
            index += offset;
            if (index >= list.length) { index = list.length - 1; }
            if (index < 0) { index = 0; }
            this.select(this.list[index]);
            list[index].nativeElement.scrollIntoView(false);
            this.atBottom();
        }
    }
}
