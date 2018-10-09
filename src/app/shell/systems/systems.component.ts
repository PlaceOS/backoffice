
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss']
})
export class SystemsComponent extends BaseComponent implements OnInit {
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
                this.service.Systems.show(this.model.id).then((item) => {
                    const query: any = { offset: 0, limit: 1, sys_id: item.id };
                    const q = `total_${Utils.generateQueryString(query)}`;
                        // Get trigger count
                    this.service.SystemTriggers.query(query)
                        .then(() => this.model.triggers = this.service.SystemTriggers.get(q));
                        // Get device count
                    this.model.devices = (item.modules || []).length;
                        // Get zone count
                    this.model.zones = (item.zones || []).length;
                    this.timeout('item', () => {
                        this.model.item = item;
                        this.model.loading_item = false;
                    });
                }, () => {
                    this.service.error(`Failed to load data for system "${this.model.id}"`);
                    this.model.loading_item = false;
                    this.service.navigate('systems');
                });
            }
            if (params.has('tab')) {
                this.model.tab = params.get('tab');
            }
            this.showSidebar(!this.model.id);
        });
        this.subs.obs.list = this.service.Systems.listen('list', () => {
            this.model.list = this.service.Systems.list();
            this.model.total = this.service.Systems.get('total');
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
                this.service.Systems.query({ offset: this.model.list.length || 0 });
            }
        } else if (event && event.type === 'select') {
            const route = ['systems', event.item.id];
            if (this.model.tab) {
                route.push(this.model.tab);
            }
            this.service.navigate(route);
            this.showSidebar(false);
        } else {
            this.showSidebar(false);
        }
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }
}
