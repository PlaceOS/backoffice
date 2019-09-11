import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from 'src/app/shared/globals/base.component';
import { ApplicationService } from '../../services/app.service';
import { toQueryString } from '../utilities/api.utilities';

@Component({
    selector: 'app-base-root-component',
    template: '',
    styles: []
})
export class BaseRootComponent extends BaseComponent implements OnInit {
    public model: any = {};

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super();
        this.model.type = 'system';
        this.model.route = 'systems';
        this.model.service = 'Systems';
    }

    public ngOnInit() {
        this.model.loading_item = true;
        this.model.list = [];
        this.subscription('route.params', this.route.paramMap.subscribe((params) => {
            if (params.has('id') && params.get('id')) {
                const id = decodeURIComponent(params.get('id'));
                if (this.service.get('BACKOFFICE.active_item_id') !== id) {
                    this.model.id = id;
                    this.loadItem();
                } else {
                    this.model.item = this.service.get('BACKOFFICE.active_item');
                    this.loadValues();
                }
            }
            if (params.has('tab')) {
                this.model.tab = params.get('tab');
            }
            this.timeout('sidebar', () => this.showSidebar(!this.model.id));
        }));
        this.subscription('list', this.service[this.model.service].listen('list', () => {
            this.model.pure_list = [ ...this.service[this.model.service].list() ];
            if (!this.model.search) {
                this.model.list = [ ...this.service[this.model.service].list() ];
            }
            this.timeout('loading', () => {
                this.model.loading = false;
                this.model.loading_item = false;
            }, 100);
        }));
        this.subscription('total', this.service[this.model.service].listen('total', (total) => {
            console.log('Total:', total);
            this.model.total = total;
        }));
        this.init();
    }

    public init() {
        if (!this.service.is_ready) {
            return this.timeout('init', () => this.init());
        }
        this.model.licenses = this.service.setting(`licenses.${this.model.route}`) || 0;
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
                    const route = [this.model.route, encodeURIComponent(event.item.id)];
                    if (this.model.tab) { route.push(this.model.tab); }
                    this.service.navigate(route);
                    this.showSidebar(false);
                });
            } else if (event && event.type === 'new') {
                this.new();
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
            const q = `total_${toQueryString(query)}`;
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
                this.model.list = [ ...this.model.filtered_list ];
                this.model.loading = false;
            });
        } else {
            this.model.list = [ ...this.model.pure_list ];
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
            if (this._timers.navigate) { return; }
            this.service.navigate([this.model.route, encodeURIComponent(this.model.item.id), event.value ]);
        } else if (event.type === 'edit') {
            this.edit();
        } else if (event.type === 'delete') {
            this.delete();
        }
    }

    protected new() {
        this.service[this.model.service].create().then((id) => {
            this.sidebarEvent({ type: 'select', item: { id } });
        });
    }

    protected edit() {
        if (this.model.item) {
            this.service[this.model.service].edit(this.model.id || this.model.item.id).then(() => {
                this.sidebarEvent({ type: 'select', item: { id: this.model.id } });
            }, () => null);
        }
    }

    protected delete() {
        if (!this.model.item) { return; }
        this.service[this.model.service].remove(this.model.item.id).then(
            (i) => {
                if (i) {
                    this.service.notifySuccess(`Successfully deleted ${this.model.type} "${this.model.item.id}"`);
                    this.service.navigate([this.model.route]);
                }
            },
            () => this.service.notifyError(`Failed to delete ${this.model.type} "${this.model.item.id}"`)
        );
    }

    protected loadValues() {
    }

    protected loadItem() {
        this.timeout('loading', () => this.model.loading_item = true, 10);
        console.warn('ID:', this.model.id);
        this.service[this.model.service].show(this.model.id).then((item) => {
            this.timeout('set_item', () => {
                this.model.item = item;
                this.service.set('BACKOFFICE.active_item_id', this.model.id);
                this.service.set('BACKOFFICE.active_item', this.model.item);
                this.loadValues();
                this.timeout('item', () => this.model.loading_item = false);
            }, 50);
        }, () => {
            this.service.notifyError(`Failed to load data for ${this.model.type} "${this.model.id}"`);
            this.model.loading_item = false;
            this.service.navigate([this.model.route]);
        });
    }
}
