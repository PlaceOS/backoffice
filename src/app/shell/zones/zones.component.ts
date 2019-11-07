
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineZone } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-zones',
    templateUrl: './zones.template.html',
    styleUrls: ['./zones.styles.scss']
})
export class ZonesComponent extends BaseRootComponent<EngineZone> {
    /** Number of systems associated with the active zone */
    public system_count: number;
    /** Number of triggers associated with the active zone */
    public trigger_count: number;

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        (this as any).type = 'zone';
        (this as any).service_name = 'Zones';
        (this as any).cmp_route = 'zones';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, zone_id: this.item.id };
        // Get system count
        this.service.Systems.query(query)
            .then(() => this.system_count = this.service.Systems.last_total);
        const tquery: any = { offset: 0, limit: 1, zone_id: this.item.id };
        // Get trigger count
        this.service.SystemTriggers.query(tquery)
            .then(() => this.trigger_count = this.service.SystemTriggers.last_total);
    }
}
