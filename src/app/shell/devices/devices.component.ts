
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.template.html',
    styleUrls: ['./devices.styles.scss']
})
export class DevicesComponent extends BaseRootComponent {

    constructor(protected service: AppService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'device';
        this.model.service = 'Modules';
        this.model.route = 'devices';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, module_id: this.model.item.id };
        const q = `total_${Utils.generateQueryString(query)}`;
            // Get system count
        this.service.Systems.query(query)
            .then(() => this.model.systems = this.service.Systems.get(q));
    }
}
