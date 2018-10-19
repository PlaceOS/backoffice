
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';
import { SystemModalComponent } from '../../overlays/system-modal/system-modal.component';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss']
})
export class SystemsComponent extends BaseComponent implements OnInit {
    public model: any = {};

    constructor(private service: AppService, private route: ActivatedRoute) {
        super();
        this.model.service = 'Systems';
        this.model.route = 'systems';
        this.service.Overlay.setupModal('system-view', { cmp: SystemModalComponent });
    }

    public ngOnInit() {
        this.model.loading_item = true;
        this.model.list = [];
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            this.model.id = '';
            if (params.has('id')) {
                this.model.id = params.get('id');
                this.timeout('loading', () => {
                    if (this.service.get('BACKOFFICE.active_item') !== this.model.id) { this.model.loading_item = true; };
                }, 10);
                this.service[this.model.service].show(this.model.id).then((item) => {
                    this.service.set('BACKOFFICE.active_item', this.model.id);
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
                    const route = [this.model.route, event.item.id];
                    if (this.model.tab) { route.push(this.model.tab); }
                    this.service.navigate(route);
                    this.showSidebar(false);
                });
            } else if (event && event.type === 'new') {
                this.service.Overlay.openModal('system-view', { data: {} }, (e) => {
                    e.close();
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
                this.model.filtered_count =  this.service[this.model.service].get(q);
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
            this.service.navigate(['systems', this.model.item.id, event.value ]);
        }
    }
}
