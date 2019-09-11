
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

@Component({
    selector: 'app-triggers',
    templateUrl: './triggers.template.html',
    styleUrls: ['./triggers.styles.scss']
})
export class TriggersComponent extends BaseRootComponent {

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'trigger';
        this.model.service = 'Triggers';
        this.model.route = 'triggers';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, trigger_id: this.model.item.id };
        const q = `total_${toQueryString(query)}`;
            // Get trigger count
        this.service.SystemTriggers.query(query)
            .then(() => this.model.systems = this.service.SystemTriggers.get(q));
    }
}
