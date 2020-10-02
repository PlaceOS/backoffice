import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    PlaceZone,
    listZoneTriggers,
    querySystems,
    queryZones,
    showMetadata,
} from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';
import { extensionsForItem } from '../common/api';

@Component({
    selector: 'app-zones',
    templateUrl: './zones.template.html',
    styleUrls: ['./zones.styles.scss'],
})
export class ZonesComponent extends BaseClass {
    /** Number of systems associated with the active zone */
    public system_count: number;
    /** Number of triggers associated with the active zone */
    public trigger_count: number;
    /** Number of zones associated with the active zone */
    public child_count: number;
    /** Number of metadata properties associated with the active zone */
    public metadata_count: number;

    public readonly name = 'zones';

    public readonly show_options = this._service.show_options;

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
            {
                id: 'systems',
                name: 'Systems',
                count: this.system_count,
                icon: { class: 'backoffice-documents' }
            },
            { id: 'triggers', name: 'Triggers', count: this.trigger_count, icon: { class: 'backoffice-stopwatch' } },
            { id: 'metadata', name: 'Metadata', count: this.metadata_count, icon: { class: 'backoffice-gist' } },
            { id: 'children', name: 'Children', count: this.child_count, icon: { class: 'backoffice-flow-tree' } }
        ].concat(this.extensions);
    }

    constructor(
        protected _service: ActiveItemService,
        protected _route: ActivatedRoute,
        protected _router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item as any);
        }));
        this.updateTabList();
    }

    protected async loadValues(item: PlaceZone) {
        if (!item) return;
        // Get system count
        const query: any = { offset: 0, limit: 1, zone_id: item.id };
        this.system_count = (await querySystems(query).toPromise()).total;
        // Get trigger count
        const tquery: any = { offset: 0, limit: 1 };
        this.trigger_count = (await listZoneTriggers(item.id, tquery).toPromise()).total;
        // Get child zone count
        const cquery: any = { offset: 0, limit: 1, parent: item.id };
        this.child_count = (await queryZones(cquery).toPromise()).total;
        // Get metadata
        const map = await showMetadata(item.id).toPromise();
        this.metadata_count = map.length;
        this.updateTabList();
    }
}
