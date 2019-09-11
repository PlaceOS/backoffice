
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss']
})
export class SystemsComponent extends BaseRootComponent {

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'system';
        this.model.service = 'Systems';
        this.model.route = 'systems';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, sys_id: this.model.item.id };
        const q = `total_${toQueryString(query)}`;
            // Get trigger count
        this.service.SystemTriggers.query(query)
            .then(() => this.model.triggers = this.service.SystemTriggers.get(q));
            // Get device count
        this.model.devices = (this.model.item.modules || []).length;
            // Get zone count
        this.model.zones = (this.model.item.zones || []).length;
    }
}
