
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
    public model: any = {};

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        (this as any).type = 'zone';
        (this as any).service_name = 'Zones';
        (this as any).cmp_route = 'zones';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, zone_id: this.model.item.id };
        // Get system count
        this.service.Systems.query(query)
            .then(() => this.model.systems = this.service.Systems.last_total);
        const tquery: any = { offset: 0, limit: 1, zone_id: this.model.item.id };
        // Get trigger count
        this.service.SystemTriggers.query(tquery)
            .then(() => this.model.triggers = this.service.SystemTriggers.last_total);
    }
}
