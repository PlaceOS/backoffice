
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineSystem } from '../../../services/data/systems.service';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'system-zones',
    templateUrl: './system-zones.template.html',
    styleUrls: ['./system-zones.styles.scss']
})
export class SystemZonesComponent extends BaseComponent {
    @Input() public item: IEngineSystem;

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
        this.service.Zones.query({ sys_id: this.item.id, offset: 0 }).then((list) => {
            this.model.zones = list;
        }, () => null);
    }

    public goto(item, link?: string) {
        if (link) {
            if (link.indexOf('http://') < 0 && link.indexOf('https://') < 0) {
                link = `http${item.tls}://${link}${item.port ? ':' + item.port : ''}`;
            }
            window.open(item, '_blank');
        } else {
            this.service.navigate(['zones', item.id]);
        }
    }
}
