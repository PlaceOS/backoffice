
import { Component, Input, OnChanges } from '@angular/core';
import { EngineModule } from '@acaprojects/ts-composer';

import { BaseComponent } from '../../../shared/globals/base.component';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'device-systems',
    templateUrl: './device-systems.template.html',
    styleUrls: ['./device-systems.styles.scss']
})
export class DeviceSystemsComponent extends BaseComponent implements OnChanges {
    @Input() public item: EngineModule;

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
