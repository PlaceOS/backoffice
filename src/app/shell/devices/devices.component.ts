
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public system_count: number;

    constructor(protected _service: ApplicationService, protected _route: ActivatedRoute, protected _router: Router) {
        super(_service, _route, _router);
        this.service = this._service.Modules;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, module_id: this.item.id };
            // Get system count
        this._service.Systems.query(query)
            .then(() => {
                this.system_count = this._service.Systems.last_total;
                console.log('Last total:', this.system_count);
            });
    }
}
