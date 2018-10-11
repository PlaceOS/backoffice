
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'app-zones',
    templateUrl: './zones.template.html',
    styleUrls: ['./zones.styles.scss']
})
export class ZonesComponent extends BaseComponent implements OnInit {
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
                this.service.Zones.show(this.model.id).then((item) => {
                    const query: any = { offset: 0, limit: 1, zone_id: item.id };
                    const q = `total_${Utils.generateQueryString(query)}`;
                        // Get system count
                    this.service.Systems.query(query)
                        .then(() => this.model.systems = this.service.Systems.get(q));
                    const tquery: any = { offset: 0, limit: 1, zone_id: item.id };
                    const tq = `total_${Utils.generateQueryString(tquery)}`;
                        // Get trigger count
                    this.service.SystemTriggers.query(tquery)
                        .then(() => this.model.triggers = this.service.SystemTriggers.get(tq));
                    this.timeout('item', () => this.model.item = item);
                }, () => {
                    this.service.error(`Failed to load data for zone "${this.model.id}"`);
                    this.service.navigate('zones');
                });
            }
            if (params.has('tab')) {
                this.model.tab = params.get('tab');
            }
            this.showSidebar(!this.model.id);
        });
        this.subs.obs.list = this.service.Zones.listen('list', () => {
            this.model.list = this.service.Zones.list();
            this.model.total = this.service.Zones.get('total');
            this.timeout('loading', () => this.model.loading = false, 10);
        });
    }

    public sidebarEvent(event: any) {
        if (event && event.type === 'more') {
            if (!this.model.total || this.model.list.length < this.model.total) {
                this.timeout('loading', () => this.model.loading = true, 10);
                this.service.Zones.query({ offset: this.model.list.length || 0 });
            }
        } else if (event && event.type === 'select') {
            this.timeout('navigate', () => {
                const route = ['zones', event.item.id];
                if (this.model.tab) { route.push(this.model.tab); }
                this.service.navigate(route);
                this.showSidebar(false);
            });
        } else {
            this.showSidebar(false);
        }
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }

    public itemEvent(event: any) {
        if (!event) { return; }
        if (event.type === 'tab' && this.model.item && event.value) {
            if (this.subs.timers.navigate) { return; }
            this.service.navigate(['zones', this.model.item.id, event.value ]);
        }
    }
}
