
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public triggers: number;
    /** Number of devices for the active system */
    public devices: number;
    /** Number of zones for the active system */
    public zones: number;

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        (this as any).type = 'system';
        (this as any).service_name = 'Systems';
        (this as any).cmp_route = 'systems';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, sys_id: this.item.id };
            // Get trigger count
        this.service.SystemTriggers.query(query)
            .then(() => this.triggers = this.service.SystemTriggers.last_total);
            // Get device count
        this.devices = (this.item.modules || []).length;
            // Get zone count
        this.zones = (this.item.zones || []).length;
    }
}
