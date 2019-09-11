import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { BaseService } from '../../services/data/base.service';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'system-log-modal',
    templateUrl: './system-log-modal.component.html',
    styleUrls: ['./system-log-modal.component.scss']
})
export class SystemLogModalComponent extends OverlayContentComponent<AppService> {

    public model: { service?: BaseService<any>, [name: string]: any } = {};

    public init() {
        if (this.model.id) {
            this.model.loading = true;
            this.service.SystemLogs.query({ limit: 500, id: this.model.sys_id }).then((list) => {
                this.model.logs = list.sort((a, b) => b.created - a.created);
            }, () => {
                this.service.error('Error loading logs for system');
            });
        } else {
            this.fn.close();
        }
    }
}
