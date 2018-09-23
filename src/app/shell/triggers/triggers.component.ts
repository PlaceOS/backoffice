
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-triggers',
    templateUrl: './triggers.template.html',
    styleUrls: ['./triggers.styles.scss']
})
export class TriggersComponent extends BaseComponent {
    public model: any = {};

    constructor(private service: AppService, private route: ActivatedRoute) {
        super();
    }

    public ngOnInit() {
        this.model.loading_item = true;
        this.model.list = [];
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            this.model.id = '';
            if (params.has('id')) {
                this.model.id = params.get('id');
                this.timeout('loading', () => this.model.loading_item = true, 10);
                this.service.Triggers.show(this.model.id).then((item) => {
                    this.timeout('item', () => {
                        this.model.item = item;
                        this.model.loading_item = false;
                    });
                }, () => {
                    this.service.error(`Failed to load data for trigger "${this.model.id}"`);
                    this.model.loading_item = false;
                    this.service.navigate('triggers');
                });
            }
            this.showSidebar(!this.model.id);
        });
        this.subs.obs.list = this.service.Triggers.listen('list', () => {
            this.model.list = this.service.Triggers.list();
            this.model.total = this.service.Triggers.get('total');
            this.timeout('loading', () => {
                this.model.loading = false;
                this.model.loading_item = false;
            }, 100);
        });
    }

    public sidebarEvent(event: any) {
        if (event && event.type === 'more') {
            if (!this.model.total || this.model.list.length < this.model.total) {
                this.timeout('loading', () => this.model.loading = true, 10);
                this.service.Triggers.query({ offset: this.model.list.length || 0 });
            }
        } else if (event && event.type === 'select') {
            this.service.navigate(`triggers/${event.item.id}`);
            this.showSidebar(false);
        } else {
            this.showSidebar(false);
        }
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }
}
