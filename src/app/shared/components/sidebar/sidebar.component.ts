
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BehaviorSubject } from 'rxjs';

import { ApplicationService } from '../../../services/app.service';
import { BaseComponent } from '../../globals/base.component';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.template.html',
    styleUrls: ['./sidebar.styles.scss']
})
export class SidebarComponent extends BaseComponent implements OnChanges, OnInit {
    /** Module name to display at the top of the sidebar */
    @Input() public heading = '';
    /** List of items to render on the list */
    @Input() public list: any[] = [];
    /** Whether the list is being loaded */
    @Input() public loading;
    /** Maximum allowed items in the module */
    @Input() public licenses = 0;
    /** Total number of items in module */
    @Input() public total = 0;
    /** Whether new action is allowed for module */
    @Input() public new = true;
    /**  */
    @Input() public close = false;
    /** ID of the active item */
    @Input() public active = '';
    /** Search string */
    @Input() public search = '';
    /** Emitter for changes to the search string */
    @Output() public searchChange = new EventEmitter();
    /** Emitter for user actions on the component */
    @Output() public event = new EventEmitter();

    public model: any = {};
    public items: BehaviorSubject<any[]>;

    /** List of elements for each associated item */
    @ViewChildren('list_item') private item_list: QueryList<ElementRef>;
    /** Virtual scrolling viewport */
    @ViewChild(CdkVirtualScrollViewport, { static: true }) private viewport: CdkVirtualScrollViewport;

    constructor(private service: ApplicationService) {
        super();
        this.items = new BehaviorSubject([]);
    }

    public ngOnInit() {

    }

    public ngOnChanges(changes: any) {
        if (changes.heading) {
            this.model.lowercase_header = (this.heading || '').toLowerCase();
        }
        if (changes.list || changes.close) {
            this.items.next(this.list);
            this.atBottom();
        }
        this.subscription('up', this.service.Hotkeys.listen(['ArrowUp'], () => this.changeSelected(-1)));
        this.subscription('down', this.service.Hotkeys.listen(['ArrowDown'], () => this.changeSelected(1)));
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
        if (!this.viewport) { return this.timeout('atBottom', () => this.atBottom()); }
        const end = this.viewport.getRenderedRange().end;
        const total = this.viewport.getDataLength();

        if (end === total) {
            this.event.emit({ type: 'more' });
        }
    }

    public trackByIdx(i) {
        return i;
    }

    public updateList() {

    }

    public searching() {
        this.timeout('searching', () => {
            this.searchChange.emit(this.search);
        });
    }

    public changeSelected(offset: number) {
        const list = this.item_list.toArray();
        if (list && list.length > 0) {
            let index = -1;
            for (const item of this.list) {
                if (item.id === this.active) {
                    index = this.list.indexOf(item);
                    break;
                }
            }
            index += offset;
            if (index >= list.length) { index = list.length - 1; }
            if (index < 0) { index = 0; }
            this.select(this.list[index]);
            list[index].nativeElement.scrollIntoView(false);
            this.atBottom();
        }
    }
}
