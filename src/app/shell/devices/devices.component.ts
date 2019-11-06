
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineModule } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.template.html',
    styleUrls: ['./devices.styles.scss']
})
export class DevicesComponent extends BaseRootComponent<EngineModule> {
    /** Number of systems for the active device */
    public systems: number;

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        (this as any).type = 'device';
        (this as any).service_name = 'Modules';
        (this as any).cmp_route = 'devices';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, module_id: this.item.id };
            // Get system count
        this.service.Systems.query(query)
            .then(() => this.systems = this.service.Systems.last_total);
    }
}
