import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from '../../services/app.service';
import { toQueryString } from '../utilities/api.utilities';
import { EngineResource, EngineResourceService } from '@acaprojects/ts-composer';

@Component({
    selector: 'app-base-root-component',
    template: '',
    styles: []
})
export class BaseRootComponent<T extends { id: string } = EngineResource<any>> extends BaseDirective implements OnInit {
    /** Type of item to be rendered through the component */
    readonly type: string;
    /** Route the component is rendered on */
    readonly cmp_route: string;
    /** Name of the API service assoicated with the  */
    readonly service_name: string;
    /** ID of the item to render */
    public id: string;
    /** Item to render on the UI */
    public item: T;
    /** List of items to render in the sidebar */
    public list: T[];
    /** Unfiltered list of items */
    public pure_list: T[];
    /** List of filtered items */
    public filtered_list: T[];
    /** Number of filtered items */
    public filtered_count: number;
    /** ID of the active tab in the item space */
    public tab: string;
    /** Whether the item list data is being loaded */
    public loading: boolean;
    /** Whether the active item data is being loaded */
    public loading_item: boolean;
    /** Search string for filtering the items list */
    public search_str: string;
    /** Total number of items in the list */
    public total: number;
    /** Total number of allowed items for this module */
    public licenses: number;
    /** Whether the sidebar should be shown on a mobile device */
    public show_sidebar: boolean;

    /** Service for the active module */
    public get module(): EngineResourceService<any> {
        return this.service[this.service_name];
    }

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super();
        this.type = 'system';
        this.cmp_route = 'systems';
        this.service_name = 'Systems';
    }

    public ngOnInit() {
        if (!this.service.is_ready) {
            return this.timeout('init', () => this.ngOnInit());
        }
        this.loading_item = true;
        this.service.title = this.service_name;
        this.list = [];
        this.subscription('route.params', this.route.paramMap.subscribe((params) => {
            if (params.has('id') && params.get('id')) {
                const id = decodeURIComponent(params.get('id'));
                if (this.service.get('BACKOFFICE.active_item_id') !== id) {
                    this.id = id;
                    this.loadItem();
                } else {
                    this.item = this.service.get('BACKOFFICE.active_item');
                    this.loadValues();
                }
            }
            if (params.has('tab')) {
                this.tab = params.get('tab');
            }
            this.timeout('sidebar', () => this.showSidebar(!this.id));
        }));
        if (this.service[this.service_name].listing) {
            this.subscription('list', this.service[this.service_name].listing.subscribe(() => {
                this.pure_list = [ ...this.service[this.service_name].list() ];
                if (!this.search_str) {
                    this.list = [ ...this.service[this.service_name].list() ];
                }
                this.timeout('loading', () => {
                    this.loading = false;
                    this.loading_item = false;
                }, 100);
            }));
        }
        this.init();
    }

    public init() { }

    /**
     * Handler events from the sidebar
     * @param event Sidebar event
     */
    public sidebarEvent(event: any) {
        this.timeout('sidebar', () => {
            if (event && event.type === 'more') {
                if (this.search_str) {
                    this.loadQuery();
                } else if (!this.total || this.list.length < this.total) {
                    this.loading = true;
                    console.log('Query:', this.service_name)
                    this.service[this.service_name].query({ offset: this.pure_list.length || 0 })
                        .then(() => this.loading = false, () => this.loading = false);
                } else {
                    this.loading = false;
                }
            } else if (event && event.type === 'select') {
                this.timeout('navigate', () => {
                    const route = [this.cmp_route, encodeURIComponent(event.item.id)];
                    if (this.tab) { route.push(this.tab); }
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
        if (this.search_str) {
            if (this.filtered_count === this.filtered_list.length) { return; }
            this.loading = true;
            const query = { offset: this.filtered_list.length || 0, q: this.search_str };
            const q = `total_${toQueryString(query)}`;
            this.service[this.service_name].query(query).then((list) => {
                if (this.filtered_list) { this.filtered_list = []; }
                for (const i of list) {
                    let found = false;
                    for (const l of this.filtered_list) {
                        if (l.id === i.id) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) { this.filtered_list.push(i); }
                }
                this.filtered_count =  this.service[this.service_name].get(q);
                this.list = [ ...this.filtered_list ];
                this.loading = false;
            });
        } else {
            this.list = [ ...this.pure_list ];
        }
    }

    /**
     * Update the filtered list of items
     * @param str New filter string
     */
    public search(str: string) {
        this.filtered_list = [];
        this.filtered_count = -1;
        this.search_str = str;
        this.loadQuery();
    }

    /**
     * Update the state of showing the sidebar
     * @param state New show state
     */
    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.show_sidebar = state);
    }

    /**
     * Handle actions on the active item
     * @param event
     */
    public itemEvent(event: any) {
        console.log('Event:', event);
        if (!event) { return; }
        if (event.type === 'tab' && this.item && event.value) {
            this.service.navigate([this.cmp_route, encodeURIComponent(this.item.id), event.value ]);
        } else if (event.type === 'new') {
            this.new();
        } else if (event.type === 'edit') {
            this.edit();
        } else if (event.type === 'delete') {
            this.delete();
        }
    }


    /**
     * Create new
     */
    protected new() {
        this.service[this.service_name].openNewModal().then((item) => {
            this.item = item;
            this.sidebarEvent({ type: 'select', item });
        });
    }


    /**
     * Open edit modal for active item
     */
    protected edit() {
        if (this.item) {
            this.service[this.service_name].openEditModal(this.item).then((item) => {
                this.sidebarEvent({ type: 'select', item });
            });
        }
    }

    /**
     * Delete the active item
     */
    protected delete() {
        if (!this.item) { return; }
        this.service[this.service_name].askDelete(this.item).then(
            (i) => {
                if (i) {
                    this.service.notifySuccess(`Successfully deleted ${this.type} "${this.item.id}"`);
                    this.service.navigate([this.cmp_route]);
                }
            },
            (err) => {
                if (err !== 'User cancelled') {
                    this.service.notifyError(`Failed to delete ${this.type} "${this.item.id}"`);
                }
            });
    }

    protected loadValues() {
    }

    /**
     * Load the data for the active item
     */
    protected loadItem() {
        this.timeout('loading', () => this.loading_item = true, 10);
        this.service[this.service_name].show(this.id).then((item) => {
            this.timeout('set_item', () => {
                this.item = item;
                this.service.set('BACKOFFICE.active_item_id', this.id);
                this.service.set('BACKOFFICE.active_item', this.item);
                this.loadValues();
                this.timeout('item', () => this.loading_item = false);
            }, 50);
        }, () => {
            this.service.notifyError(`Failed to load data for ${this.type} "${this.id}"`);
            this.loading_item = false;
            this.service.navigate([this.cmp_route]);
        });
    }
}
