import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    EngineResource,
    EngineSystem,
    EngineZone,
    EngineDriver,
    EngineModule
} from '@placeos/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from '../../services/app.service';
import { EngineServiceLike } from '../utilities/types.utilities';
import { first } from 'rxjs/operators';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-base-root-component',
    template: '',
    styles: []
})
export class BaseRootComponent<T = EngineResource<any>> extends BaseDirective implements OnInit {
    /** Name of the API service assoicated with the  */
    public readonly service_name: string;
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
    /** Modal Reference */
    public modal_ref: MatDialogRef<any>;
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
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(params => {
                if (params.has('id') && params.get('id') !== '-') {
                    this.loading_item = true;
                    const id = decodeURIComponent(params.get('id'));
                    if (this._service.get('BACKOFFICE.active_item_id') !== id) {
                        this.id = id;
                        this.loadItem();
                    } else {
                        this.setActiveItem(this._service.get('BACKOFFICE.active_item'));
                    }
                } else if (params.has('id') && params.get('id') === '-') {
                    this.id = '-';
                    this.setActiveItem(null);
                }
                this.timeout('sidebar', () => (this.show_sidebar = !this.id));
            })
        );
        this._service.initialised.pipe(first(_ => _)).subscribe(() => {
            this._service.title = this.service_name;
            this.init();
        });

        this.subscription(
            'new_item',
            this._service.Hotkeys.listen(['KeyN'], () => this.newItem())
        );
        this.subscription(
            'edit_item',
            this._service.Hotkeys.listen(['KeyE'], () => this.editItem())
        );
        this.subscription(
            'delete_item',
            this._service.Hotkeys.listen(['KeyD'], () => this.deleteItem())
        );
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
                    this.newItem();
                } else {
                    this.toggleSidebar();
                }
            },
            20
        );
    }

    /**
     * Update the state of showing the sidebar
     * @param state New show state
     */
    public toggleSidebar() {
        this.timeout('sidebar', () => (this.show_sidebar = !this.show_sidebar));
    }

    /**
     * Handle actions on the active item
     * @param event User action
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
            this.newItem();
        } else if (event.type === 'edit') {
            this.editItem();
        } else if (event.type === 'delete' && this.item) {
            this.deleteItem();
        }
    }

    /**
     * Open create modal for a new item
     */
    protected newItem() {}

    /**
     * Open edit modal for active item
     */
    protected editItem() {}

    protected deleteItem() {}

    protected loadValues() {}

    /**
     * Load the data for the active item
     */
    protected loadItem() {
        this.timeout('loading', () => (this.loading_item = true), 10);
        this.service.show(this.id, { complete: true }).then(
            item => this.setActiveItem(item),
            () => {
                this._service.notifyError(
                    `Failed to load data for ${this.service._name} "${this.id}"`
                );
                this.loading_item = false;
                this._service.navigate([this.service._api_route]);
            }
        );
    }

    protected setActiveItem(new_item: T) {
        this.item = new_item;
        this._service.set('BACKOFFICE.active_item_id', this.id);
        this._service.set('BACKOFFICE.active_item', this.item);
        if (this.item) {
            this.subscription(
                'item_changes',
                (this.item as any).changeEvents.subscribe(event => {
                    if (event.type === 'item_saved') {
                        this.setActiveItem(event.metadata as any);
                    }
                })
            );
            this.loadValues();
            this.loadSettings();
        }
        this.timeout('item', () => (this.loading_item = false));
    }

    protected loadSettings(): void {
        if (
            this.item instanceof EngineSystem ||
            this.item instanceof EngineZone ||
            this.item instanceof EngineDriver ||
            this.item instanceof EngineModule
        ) {
            this._service.set('loading_settings', true);
            this._service.EngineSettings.query({ parent_id: this.item.id }).then(
                list => {
                    this._service.set('loading_settings', false);
                    for (const settings of list) {
                        (this.item as any).settings[settings.encryption_level] = settings;
                    }
                },
                err => {
                    this._service.set('loading_settings', false);
                    this._service.notifyError(
                        `Error loading settings. Error: ${err.message || err}`
                    );
                }
            );
        }
    }
}
