
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'app-domains',
    templateUrl: './domains.template.html',
    styleUrls: ['./domains.styles.scss']
})
export class DomainsComponent extends BaseComponent implements OnInit {
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
                this.service.Domains.show(this.model.id).then((item) => {
                    let query: any = { offset: 0, limit: 1, owner: item.id };
                    const q = `total_${Utils.generateQueryString(query)}`;
                        // Get application count
                    this.service.Applications.query(query)
                        .then(() => this.model.applications = this.service.Applications.get(q));
                    query = { offset: 0, limit: 1, authority_id: item.id };
                        // Get auth source count
                    this.service.AuthSources.query(query)
                        .then(() => this.model.auth_sources = this.service.AuthSources.get(`total_${Utils.generateQueryString(query)}`));
                        // Get users count
                    this.service.Users.query(query)
                        .then(() => this.model.users = this.service.Users.get(`total_${Utils.generateQueryString(query)}`));
                    this.timeout('item', () => {
                        this.model.item = item;
                        this.model.loading_item = false;
                    });
                }, () => {
                    this.service.error(`Failed to load data for domain "${this.model.id}"`);
                    this.model.loading_item = false;
                    this.service.navigate('domains');
                });
            }
            if (params.has('tab')) {
                this.model.tab = params.get('tab');
            }
            this.showSidebar(!this.model.id);
        });
        this.subs.obs.list = this.service.Domains.listen('list', () => {
            this.model.list = this.service.Domains.list();
            this.model.total = this.service.Domains.get('total');
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
                this.service.Domains.query({ offset: this.model.list.length || 0 });
            }
        } else if (event && event.type === 'select') {
            this.timeout('navigate', () => {
                const route = ['domains', event.item.id];
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
            this.service.navigate(['domains', this.model.item.id, event.value ]);
        }
    }
}
