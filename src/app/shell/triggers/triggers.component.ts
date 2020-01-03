
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public system_count: number;

    constructor(protected _service: ApplicationService, protected _route: ActivatedRoute, protected _router: Router) {
        super(_service, _route, _router);
        this.service = this._service.Triggers;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, trigger_id: this.item.id };
        const q = `total_${toQueryString(query)}`;
            // Get trigger count
        this._service.SystemTriggers.query(query)
            .then(() => this.system_count = this._service.SystemTriggers.last_total);
    }
}
