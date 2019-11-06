
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineTrigger } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

@Component({
    selector: 'app-triggers',
    templateUrl: './triggers.template.html',
    styleUrls: ['./triggers.styles.scss']
})
export class TriggersComponent extends BaseRootComponent<EngineTrigger> {
    /** Number of system triggers */
    public systems: number;

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        (this as any).type = 'trigger';
        (this as any).service_name = 'Triggers';
        (this as any).cmp_route = 'triggers';
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, trigger_id: this.item.id };
        const q = `total_${toQueryString(query)}`;
            // Get trigger count
        this.service.SystemTriggers.query(query)
            .then(() => this.systems = this.service.SystemTriggers.last_total);
    }
}
