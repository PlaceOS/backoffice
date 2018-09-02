
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BaseComponent } from '../base.component';

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
}
