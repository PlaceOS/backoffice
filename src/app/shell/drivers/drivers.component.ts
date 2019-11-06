
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.template.html',
    styleUrls: ['./drivers.styles.scss']
})
export class DriversComponent extends BaseRootComponent {

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'driver';
        this.model.service = 'Drivers';
        this.model.route = 'drivers';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, dependency_id: this.model.item.id };
            // Get system count
        this.service.Modules.query(query)
            .then(() => this.model.devices = this.service.Modules.last_total);
    }
}
