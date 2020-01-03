import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from '../../services/app.service';
import { EngineResource } from '@acaprojects/ts-composer';
import { EngineServiceLike } from '../utilities/types.utilities';

@Component({
    selector: 'app-base-root-component',
    template: '',
    styles: []
})
export class BaseRootComponent<T extends { id: string } = EngineResource<any>> extends BaseDirective
    implements OnInit {
    /** Name of the API service assoicated with the  */
    readonly service_name: string;
    /** ID of the item to render */
    public id: string;
    /** Item to render on the UI */
    public item: T;
    /** ID of the active tab in the item space */
    public tab: string;
    /** Whether the active item data is being loaded */
    public loading_item: boolean;
    /** Total number of items in the list */
    public total: number;
    /** Whether the sidebar should be shown on a mobile device */
    public show_sidebar: boolean;
    /** Service to get data from */
    public service: EngineServiceLike;

    /** Service for the active module */
    public get module(): EngineServiceLike {
        return this.service;
    }

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router
    ) {
        super();
        this.service_name = 'Systems';
        this.service = this._service.Systems;
    }

    public ngOnInit() {
        if (!this._service.is_ready) {
            return this.timeout('init', () => this.ngOnInit());
        }
        this._service.title = this.service_name;
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(params => {
                if (params.has('id') && params.get('id')) {
                    this.loading_item = true;
                    const id = decodeURIComponent(params.get('id'));
                    if (this._service.get('BACKOFFICE.active_item_id') !== id) {
                        this.id = id;
                        this.loadItem();
                    } else {
                        this.item = this._service.get('BACKOFFICE.active_item');
                        this.loadValues();
                    }
                }
                this.timeout('sidebar', () => this.showSidebar(!this.id));
            })
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(params => {
                if (params.has('tab')) {
                    this.tab = params.get('tab');
                }
            })
        );
        this.init();
    }

    public init() {}

    /**
     * Handler events from the sidebar
     * @param event Sidebar event
     */
    public sidebarEvent(event: any) {
        this.timeout(
            'sidebar',
            () => {
                if (event && event.type === 'new') {
                    this.new();
                } else {
                    this.showSidebar(false);
                }
            },
            20
        );
    }

    /**
     * Update the state of showing the sidebar
     * @param state New show state
     */
    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => (this.show_sidebar = state));
    }

    /**
     * Handle actions on the active item
     * @param event
     */
    public itemEvent(event: any) {
        if (!event) {
            return;
        }
        if (event.type === 'tab' && this.item && event.value) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { tab: event.value },
                queryParamsHandling: 'merge'
            });
        } else if (event.type === 'new') {
            this.new();
        } else if (event.type === 'edit') {
            this.edit();
        } else if (event.type === 'delete' && this.item) {
            // this.delete();
        }
    }

    /**
     * Create new
     */
    protected new() {
        this.service.openNewModal().then(item => {
            this.item = item;
            this.sidebarEvent({ type: 'select', item });
        });
    }

    /**
     * Open edit modal for active item
     */
    protected edit() {
        if (this.item) {
            this.service.openEditModal(this.item).then(item => {
                this.sidebarEvent({ type: 'select', item });
            });
        }
    }

    protected loadValues() {}

    /**
     * Load the data for the active item
     */
    protected loadItem() {
        this.timeout('loading', () => (this.loading_item = true), 10);
        this.service.show(this.id).then(
            item => {
                this.timeout(
                    'set_item',
                    () => {
                        this.item = item;
                        this._service.set('BACKOFFICE.active_item_id', this.id);
                        this._service.set('BACKOFFICE.active_item', this.item);
                        this.loadValues();
                        this.timeout('item', () => (this.loading_item = false));
                    },
                    50
                );
            },
            () => {
                this._service.notifyError(
                    `Failed to load data for ${this.service._name} "${this.id}"`
                );
                this.loading_item = false;
                this._service.navigate([this.service._api_route]);
            }
        );
    }
}
