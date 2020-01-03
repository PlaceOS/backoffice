
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

    constructor(protected _service: ApplicationService, protected _route: ActivatedRoute, protected _router: Router) {
        super(_service, _route, _router);
        this.service = this._service.Zones;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, zone_id: this.item.id };
        // Get system count
        this._service.Systems.query(query)
            .then(() => this.system_count = this._service.Systems.last_total);
        const tquery: any = { offset: 0, limit: 1, zone_id: this.item.id };
        // Get trigger count
        this._service.SystemTriggers.query(tquery)
            .then(() => this.trigger_count = this._service.SystemTriggers.last_total);
    }
}
