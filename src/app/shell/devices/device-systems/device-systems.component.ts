
import { Component, Input, OnChanges } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';
import { IEngineModule } from '../../../services/data/modules.service';

@Component({
    selector: 'device-systems',
    templateUrl: './device-systems.template.html',
    styleUrls: ['./device-systems.styles.scss']
})
export class DeviceSystemsComponent extends BaseComponent implements OnChanges {
    @Input() public item: IEngineModule;

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
        this.service.Systems.query({ module_id: this.item.id, offset }).then((list) => {
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
            this.service.navigate(['systems', item.id, 'devices']);
        }
    }
}
