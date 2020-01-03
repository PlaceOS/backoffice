
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineDriver } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.template.html',
    styleUrls: ['./drivers.styles.scss']
})
export class DriversComponent extends BaseRootComponent<EngineDriver> {
    /** Number of devices for the active driver */
    public devices: number;

    constructor(protected _service: ApplicationService, protected _route: ActivatedRoute, protected _router: Router) {
        super(_service, _route, _router);
        this.service = this._service.Drivers;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, dependency_id: this.item.id };
            // Get system count
        this._service.Modules.query(query)
            .then(() => this.devices = this._service.Modules.last_total);
    }
}
