
import { Component } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';

@Component({
    selector: 'view-module-state-modal',
    templateUrl: './view-module-state.template.html',
    styleUrls: ['./view-module-state.styles.scss']
})
export class ViewModuleStateModalComponent extends OverlayContentComponent {

    public init() {
        this.updateState();
    }

    public updateState() {
        if (this.model.system && this.model.module) {
            this.service.Systems.state(this.model.system.id, this.model.module.dependency.module_name, this.model.module.role + 1)
                .then((state) => this.model.state = state, (err) => this.service.error(err.message || err));
        }
    }

}
