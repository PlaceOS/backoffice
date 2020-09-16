import { Component, OnInit } from '@angular/core';
import { PlaceSystem, listSystemTriggers, showMetadata } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss'],
})
export class SystemsComponent extends BaseClass implements OnInit {
    /** Number of triggers for the active system */
    public trigger_count: number;
    /** Number of devices for the active system */
    public device_count: number;
    /** Number of zones for the active system */
    public zone_count: number;
    /** Number of metadata fields for the active system */
    public metadata_count: number = 0;

    public readonly name = 'systems';

    public readonly show_options = this._service.show_options;

    constructor(protected _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item as any);
        }));
    }

    protected async loadValues(item: PlaceSystem) {
        if (!item) return
        const query: any = { offset: 0, limit: 1, sys_id: item.id };
        // Get trigger count
        this.trigger_count = (await listSystemTriggers(item.id).toPromise()).total;
        // Get device count
        this.device_count = (item.modules || []).length;
        // Get zone count
        this.zone_count = (item.zones || []).length;
        // Get metadata
        const map = await showMetadata(item.id).toPromise();
        this.metadata_count = map.length;
    }
}
