import { Component } from '@angular/core';
import { PlaceSystem, listSystemTriggers, showMetadata } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss'],
})
export class SystemsComponent {
    /** Number of triggers for the active system */
    public trigger_count: number;
    /** Number of devices for the active system */
    public device_count: number;
    /** Number of zones for the active system */
    public zone_count: number;
    /** Number of metadata fields for the active system */
    public metadata_count: number = 0;

    public readonly name = 'systems';

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(protected _service: ActiveItemService) {}

    protected async loadValues() {
        const query: any = { offset: 0, limit: 1, sys_id: this.item.id };
        // Get trigger count
        this.trigger_count = (await listSystemTriggers(this.item.id).toPromise()).total;
        // Get device count
        this.device_count = (this.item.modules || []).length;
        // Get zone count
        this.zone_count = (this.item.zones || []).length;
        // Get metadata
        const map = await showMetadata(this.item.id).toPromise();
        this.metadata_count = map.length;
    }
}
