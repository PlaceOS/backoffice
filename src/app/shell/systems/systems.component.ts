
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineSystem } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss']
})
export class SystemsComponent extends BaseRootComponent<EngineSystem> {
    /** Number of triggers for the active system */
    public trigger_count: number;
    /** Number of devices for the active system */
    public device_count: number;
    /** Number of zones for the active system */
    public zone_count: number;

    constructor(protected _service: ApplicationService, protected _route: ActivatedRoute, protected _router: Router) {
        super(_service, _route, _router);
        this.service = this._service.Systems;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, sys_id: this.item.id };
            // Get trigger count
        this._service.SystemTriggers.query(query)
            .then(() => this.trigger_count = this._service.SystemTriggers.last_total);
            // Get device count
        this.device_count = (this.item.modules || []).length;
            // Get zone count
        this.zone_count = (this.item.zones || []).length;
    }
}
