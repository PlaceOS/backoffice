
import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { OverlayItem } from '@acaprojects/ngx-overlays';
import { ApplicationService } from 'src/app/services/app.service';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'view-module-state-modal',
    templateUrl: './view-module-state.template.html',
    styleUrls: ['./view-module-state.styles.scss']
})
export class ViewModuleStateModalComponent extends BaseDirective implements OnInit {

    public model: any = {};

    constructor(private _item: OverlayItem, private _service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this.updateState();
    }

    public updateState() {
        if (this.model.system && this.model.module) {
            this._service.Systems.state(this.model.system.id, this.model.module.dependency.module_name, this.model.module.role + 1)
                .then((state) => this.model.state = state, (err) => this._service.notifyError(err.message || err));
        }
    }

}

OVERLAY_REGISTER.push({ id: 'view-module-state', config: { content: ViewModuleStateModalComponent, config: 'modal' } });
