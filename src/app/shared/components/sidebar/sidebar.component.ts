
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { BaseComponent } from '../base.component';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.template.html',
    styleUrls: ['./sidebar.styles.scss']
})
export class SidebarComponent extends BaseComponent implements OnChanges, OnInit {
    @Input() public heading = '';
    @Input() public list: any[] = [];
    @Input() public loading = false;
    @Input() public close = false;
    @Input() public active = '';
    @Input() public search = '';
    @Output() public searchChange = new EventEmitter();
    @Output() public event = new EventEmitter();

    public model: any = {};

    @ViewChild('item_list') private list_el: ElementRef;
    @ViewChildren('list_item') private item_list: QueryList<ElementRef>;

    constructor(private service: AppService) {
        super();
    }

    public ngOnInit() {
        this.atBottom();
    }

    public ngOnChanges(changes: any) {
        if (changes.heading) {
            this.model.lowercase_header = (this.heading || '').toLowerCase();
        }
        if (changes.list || changes.close) {
            this.atBottom();
        }
        this.subs.obs.up = this.service.Hotkey.listen(['ArrowUp'], () => this.changeSelected(-1));
        this.subs.obs.down = this.service.Hotkey.listen(['ArrowDown'], () => this.changeSelected(1));
    }

    public select(item) {
        this.event.emit({ type: 'select', item });
    }

    public atBottom() {
        if (!this.list_el) {
            return this.timeout('bottom', () => this.atBottom());
        }
        const el = this.list_el.nativeElement;
        if (el && el.scrollHeight - el.scrollTop === el.clientHeight) {
            this.event.emit({ type: 'more' });
        }
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
