import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { BaseService } from '../../services/data/base.service';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'select-item-modal',
    templateUrl: './select-item-modal.component.html',
    styleUrls: ['./select-item-modal.component.scss']
})
export class SelectItemModalComponent extends OverlayContentComponent<AppService> {

    public model: { service?: BaseService<any>, [name: string]: any } = {};

    public init() {
        if (this.model.service) {
            this.model.fields = this.model.service.getFormFields(this.model.item, this.model.edit);
            this.model.name = this.model.service.name;
        } else {
            this.fn.close();
        }
    }

    public submit() {
        this.model.loading = true;
        this.event('Submit');
    }
}
