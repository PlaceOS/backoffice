
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

@Component({
    selector: 'app-zones',
    templateUrl: './zones.template.html',
    styleUrls: ['./zones.styles.scss']
})
export class ZonesComponent extends BaseRootComponent {
    public model: any = {};

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'zone';
        this.model.service = 'Zones';
        this.model.route = 'zones';
    }

    protected loadValues() {

        const query: any = { offset: 0, limit: 1, zone_id: this.model.item.id };
        const q = `total_${toQueryString(query)}`;
        // Get system count
        this.service.Systems.query(query)
            .then(() => this.model.systems = this.service.Systems.last_total);
        const tquery: any = { offset: 0, limit: 1, zone_id: this.model.item.id };
        const tq = `total_${toQueryString(tquery)}`;
        // Get trigger count
        this.service.SystemTriggers.query(tquery)
            .then(() => this.model.triggers = this.service.SystemTriggers.get(tq));
    }
}
