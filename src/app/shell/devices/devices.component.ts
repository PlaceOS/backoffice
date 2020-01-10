import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EngineModule } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.template.html',
    styleUrls: ['./devices.styles.scss']
})
export class DevicesComponent extends BaseRootComponent<EngineModule> {
    /** Number of systems for the active device */
    public system_count: number;

    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _dialog: MatDialog
    ) {
        super(_service, _route, _router);
        this.service = this._service.Modules;
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, module_id: this.item.id };
        // Get system count
        this._service.Systems.query(query).then(() => {
            this.system_count = this._service.Systems.last_total;
        });
    }

    /**
     * Open the modal to create a new system
     */
    protected new() {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new EngineModule(this._service.Modules, {}),
                service: this._service.Modules
            }
        });
    }
}
