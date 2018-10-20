
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-triggers',
    templateUrl: './triggers.template.html',
    styleUrls: ['./triggers.styles.scss']
})
export class TriggersComponent extends BaseRootComponent {

    constructor(protected service: AppService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'trigger';
        this.model.service = 'Triggers';
        this.model.route = 'triggers';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, trigger_id: this.model.item.id };
        const q = `total_${Utils.generateQueryString(query)}`;
            // Get trigger count
        this.service.SystemTriggers.query(query)
            .then(() => this.model.systems = this.service.SystemTriggers.get(q));
    }
}
