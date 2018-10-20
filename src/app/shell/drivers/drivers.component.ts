
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.template.html',
    styleUrls: ['./drivers.styles.scss']
})
export class DriversComponent extends BaseRootComponent {

    constructor(protected service: AppService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.service = 'Drivers';
        this.model.route = 'drivers';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, dependency_id: this.model.item.id };
        const q = `total_${Utils.generateQueryString(query)}`;
            // Get system count
        this.service.Modules.query(query)
            .then(() => this.model.devices = this.service.Modules.get(q));
    }
}
