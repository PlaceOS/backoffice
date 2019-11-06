
import { Component, Input, OnChanges } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { ApplicationService } from '../../../services/app.service';
import { EngineDriver } from '@acaprojects/ts-composer';

@Component({
    selector: 'driver-devices',
    templateUrl: './driver-devices.template.html',
    styleUrls: ['./driver-devices.styles.scss']
})
export class DriverDevicesComponent extends BaseComponent implements OnChanges {
    @Input() public item: EngineDriver;

    public model: any = {};

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        this.service.Modules.query({ dependency_id: this.item.id, offset }).then((list) => {
            this.model.list = list;
        }, () => null);
    }

    public goto(item, link?: string) {
        if (link) {
            if (link.indexOf('http://') < 0 && link.indexOf('https://') < 0) {
                link = `http${item.tls}://${link}${item.port ? ':' + item.port : ''}`;
            }
            window.open(item, '_blank');
        } else {
            this.service.navigate([item.id.indexOf('sys') >= 0 ? 'systems' : 'devices', item.id]);
        }
    }
}
