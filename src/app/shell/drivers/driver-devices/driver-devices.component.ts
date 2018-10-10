
import { Component, Input, OnChanges } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineDriver } from '../../../services/data/drivers.service';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'driver-devices',
    templateUrl: './driver-devices.template.html',
    styleUrls: ['./driver-devices.styles.scss']
})
export class DriverDevicesComponent extends BaseComponent implements OnChanges {
    @Input() public item: IEngineDriver;

    public model: any = {};

    constructor(private service: AppService) {
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
            console.log('List:', list);
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
