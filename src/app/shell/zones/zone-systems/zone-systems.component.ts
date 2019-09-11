
import { Component, Input, OnChanges } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { IEngineZone } from '../../../services/data/zones.service';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'zone-systems',
    templateUrl: './zone-systems.template.html',
    styleUrls: ['./zone-systems.styles.scss']
})
export class ZoneSystemsComponent extends BaseComponent implements OnChanges {
    @Input() public item: IEngineZone;

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
        this.service.Systems.query({ zone_id: this.item.id, offset }).then((list) => {
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
            this.service.navigate(['systems', encodeURIComponent(item.id), 'zones']);
        }
    }
}
