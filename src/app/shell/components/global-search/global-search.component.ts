import { Component, OnChanges, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'global-search',
    templateUrl: './global-search.template.html',
    styleUrls: ['./global-search.styles.scss']
})
export class GlobalSearchComponent extends BaseComponent implements OnChanges {
    @Input() public search: string;

    public model: any = {};
    public route_map: any = {
        system: 'systems',
        device: 'devices',
        user: 'users',
        trigger: 'triggers',
        zone: 'zones'
    };

    constructor(private service: AppService) {
        super();
    }

    public ngOnChanges(change: any) {
        if (change.search) {
            this.updateResults();
        }
    }

    public updateResults() {
        this.model.searching = true;
        this.timeout('search', () => {
            this.service.Search.query({ q: this.search, offset: 0 }).then((list) => {
                this.model.list = list || [];
                this.model.searching = false;
            });
        });
    }

    public goto(item) {
        if (item.id) {
            this.service.navigate([this.route_map[item.type] || 'systems', item.id]);
        }
        this.service.set('APP.global_filter', '');
    }

    public more() {
        this.model.searching = true;
        this.timeout('search', () => {
            this.service.Search.query({ q: this.search, offset: this.model.list.length }).then((list) => {
                this.model.searching = false;
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
            }, () => this.model.searching = false);
        });
    }
}
