
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.template.html',
    styleUrls: ['./sidebar.styles.scss']
})
export class SidebarComponent implements OnChanges {
    @Input() public heading = '';
    @Input() public list: any[] = [];
    @Input() public loading = false;
    @Input() public close = false;
    @Input() public search = '';
    @Output() public searchChange = new EventEmitter();
    @Output() public event = new EventEmitter();

    public model: any = {};

    public ngOnChanges(changes: any) {
        if (changes.heading) {
            this.model.lowercase_header = (this.heading || '').toLowerCase();
        }
    }

    public select(item) {
        this.event.emit({ type: 'select', item });
    }
}
