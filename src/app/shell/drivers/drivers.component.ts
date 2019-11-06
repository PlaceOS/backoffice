
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineDriver } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.template.html',
    styleUrls: ['./drivers.styles.scss']
})
export class DriversComponent extends BaseRootComponent<EngineDriver> {
    /** Number of devices for the active driver */
    public devices: number;

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        (this as any).type = 'driver';
        (this as any).service_name = 'Drivers';
        (this as any).cmp_route = 'drivers';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, dependency_id: this.item.id };
            // Get system count
        this.service.Modules.query(query)
            .then(() => this.devices = this.service.Modules.last_total);
    }
}
