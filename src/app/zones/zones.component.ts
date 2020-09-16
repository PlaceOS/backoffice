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
    }
}
