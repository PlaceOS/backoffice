import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { BaseService } from '../../services/data/base.service';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.scss']
})
export class ItemCreateUpdateModalComponent extends OverlayContentComponent<AppService> {

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
        if (!this.model.item || !this.model.item.id) {
            (this.model.service as BaseService<any>).add(this.model.form).then((item) => {
                this.model.result = item;
                this.model.loading = false;
                this.event('Success');
            }, (err) => {
                this.model.loading = false;
                this.service.error(`Error adding new ${this.model.name}: ${err}`);
            });
        } else {
            (this.model.service as BaseService<any>).update(this.model.item.id, this.model.form).then((item) => {
                this.model.result = item;
                this.model.loading = false;
                this.event('Success');
            }, (err) => {
                this.model.loading = false;
                this.service.error(`Error adding new ${this.model.name}: ${err}`);
            });
        }
    }
}
