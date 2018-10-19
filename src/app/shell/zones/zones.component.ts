
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
        this.model.service = 'Zones';
    }

    public ngOnInit() {
        this.model.list = [];
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            this.model.id = '';
            if (params.has('id')) {
                this.model.id = params.get('id');
                this.service[this.model.service].show(this.model.id).then((item) => {
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
        this.subs.obs.list = this.service[this.model.service].listen('list', () => {
            this.model.pure_list = this.service[this.model.service].list();
            this.model.total = this.service[this.model.service].get('total');
            if (!this.model.search) {
                this.model.list = this.service[this.model.service].list();
            }
            this.timeout('loading', () => {
                this.model.loading = false;
                this.model.loading_item = false;
            }, 100);
        });
    }

    public sidebarEvent(event: any) {
        console.log('Event:', event);
        this.timeout('sidebar', () => {
            if (event && event.type === 'more') {
                if (this.model.search) {
                    this.loadQuery();
                } else if (!this.model.total || this.model.list.length < this.model.total) {
                    this.model.loading = true;
                    this.service[this.model.service].query({ offset: this.model.pure_list.length || 0 })
                        .then(() => this.model.loading = false, () => this.model.loading = false);
                } else {
                    this.model.loading = false;
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
        }, 20);
    }

    public loadQuery() {
        if (this.model.search) {
            if (this.model.filtered_count === this.model.filtered_list.length) { return; }
            this.model.loading = true;
            const query = { offset: this.model.filtered_list.length || 0, q: this.model.search };
            const q = `total_${Utils.generateQueryString(query)}`;
            this.service[this.model.service].query(query).then((list) => {
                if (this.model.filtered_list) { this.model.filtered_list = []; }
                for (const i of list) {
                    let found = false;
                    for (const l of this.model.filtered_list) {
                        if (l.id === i.id) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) { this.model.filtered_list.push(i); }
                }
                this.model.filtered_count = this.service[this.model.service].get(q);
                this.model.list = this.model.filtered_list;
                this.model.loading = false;
            });
        } else {
            this.model.list = this.model.pure_list;
        }
    }

    public search(str: string) {
        this.model.filtered_list = [];
        this.model.filtered_count = -1;
        this.model.search = str;
        this.loadQuery();
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }

    public itemEvent(event: any) {
        if (!event) { return; }
        if (event.type === 'tab' && this.model.item && event.value) {
            if (this.subs.timers.navigate) { return; }
            this.service.navigate(['zones', this.model.item.id, event.value]);
        }
    }
}
