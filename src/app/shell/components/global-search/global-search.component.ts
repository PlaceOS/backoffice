import { Component, OnChanges, Input, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

@Component({
    selector: 'global-search',
    templateUrl: './global-search.template.html',
    styleUrls: ['./global-search.styles.scss'],
    animations: [
        trigger('listAnimation', [
            transition('* => *', [ // each time the binding value changes
                query(':enter', [
                    style({ transform: 'translateY(100%)', opacity: 0 }),
                    stagger(50, [
                        animate('.2s', style({ transform: 'translateY(0%)', opacity: 1 }))
                    ])
                ])
            ])
        ])
    ]
})
export class GlobalSearchComponent extends BaseDirective implements OnChanges {
    @Input() public search: string;

    public model: any = {};
    public route_map: any = {
        system: 'Systems',
        device: 'Modules',
        user: 'Users',
        trigger: 'Triggers',
        zone: 'Zones'
    };

    @ViewChild('item_list', { static: true }) private list_el: ElementRef;
    @ViewChildren('list_item') private item_list: QueryList<ElementRef>;

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnChanges(change: any) {
        if (change.search) {
            this.updateResults();
        }
    }

    public updateResults() {
        this.model.searching = true;
        this.model.list = [];
        this.model.total = 0;
        this.timeout('search', () => {
            const qry = { q: this.search, offset: 0 };
            const q = `total_${toQueryString(qry)}`;
            this.service.Search.query(qry).then((list) => {
                this.model.list = list || [];
                this.model.searching = false;
                this.model.total = this.service.Search.get(q) || this.model.list.length;
                this.timeout('bottom', () => this.atBottom(), 2000);
            });
        });
    }

    public edit(item) {
        if (item.id) {
            this.service[this.route_map[item.type] || 'Systems'].edit(item.id).then(() => {
                this.goto(item);
            });
        }
    }

    public goto(item) {
        if (item.id) {
            this.service.navigate([(this.route_map[item.type] || 'systems').toLowerCase(), encodeURIComponent(item.id)]);
        }
        this.service.set('APP.global_filter', '');
    }

    public more() {
        if (this.model.searching || (this.model.list && this.model.list.length >= this.model.total)) {
            this.model.getting_more = false;
            return;
        }
        this.model.getting_more = true;
        this.timeout('search', () => {
            this.service.Search.query({ q: this.search, offset: this.model.list.length }).then((list) => {
                this.model.getting_more = false;
                for (const i of (list || [])) {
                    let found = false;
                    for (const item of this.model.list) {
                        if (item.id === i.id) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        this.model.list.push(i);
                    }
                }
            }, () => this.model.getting_more = false);
        });
    }

    public atBottom() {
        if (!this.list_el) {
            return this.timeout('bottom', () => this.atBottom());
        }
        const el = this.list_el.nativeElement;
        if (el && el.scrollHeight - el.scrollTop === el.clientHeight) {
            this.more();
        }
    }
}
