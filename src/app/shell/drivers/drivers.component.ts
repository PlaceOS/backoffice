
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.template.html',
    styleUrls: ['./drivers.styles.scss']
})
export class DriversComponent extends BaseComponent implements OnInit {
    public model: any = {};

    constructor(private service: AppService, private route: ActivatedRoute) {
        super();
    }

    public ngOnInit() {
        this.model.list = [];
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            this.model.id = '';
            if (params.has('id')) {
                this.model.id = params.get('id');
                this.service.Drivers.show(this.model.id).then((item) => {
                    const query: any = { offset: 0, limit: 1, dependency_id: item.id };
                    const q = `total_${Utils.generateQueryString(query)}`;
                        // Get system count
                    this.service.Modules.query(query)
                        .then(() => this.model.devices = this.service.Modules.get(q));
                    this.timeout('item', () => this.model.item = item);
                }, () => {
                    this.service.error(`Failed to load data for driver "${this.model.id}"`);
                    this.service.navigate('drivers');
                });
            }
            if (params.has('tab')) {
                this.model.tab = params.get('tab');
            }
            this.showSidebar(!this.model.id);
        });
        this.subs.obs.list = this.service.Drivers.listen('list', () => {
            this.model.list = this.service.Drivers.list();
            this.model.total = this.service.Drivers.get('total');
            this.timeout('loading', () => this.model.loading = false, 10);
        });
    }

    public sidebarEvent(event: any) {
        if (event && event.type === 'more') {
            if (!this.model.total || this.model.list.length < this.model.total) {
                this.timeout('loading', () => this.model.loading = true, 10);
                this.service.Drivers.query({ offset: this.model.list.length || 0 });
            }
        } else if (event && event.type === 'select') {
            this.service.navigate(`drivers/${event.item.id}`);
            this.showSidebar(false);
        } else {
            this.showSidebar(false);
        }
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }
}
