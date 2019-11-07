
import { Component, Input, OnChanges } from '@angular/core';
import { EngineZone } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';

@Component({
    selector: 'zone-triggers',
    templateUrl: './zone-triggers.template.html',
    styleUrls: ['./zone-triggers.styles.scss']
})
export class ZoneTriggersComponent extends BaseDirective implements OnChanges {
    @Input() public item: EngineZone;

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
        this.service.SystemTriggers.query({ zone_id: this.item.id, offset } as any).then((list) => {
            this.model.triggers = list;
        }, () => null);
    }

    public goto(item, link?: string) {
        if (link) {
            if (link.indexOf('http://') < 0 && link.indexOf('https://') < 0) {
                link = `http${item.tls}://${link}${item.port ? ':' + item.port : ''}`;
            }
            window.open(item, '_blank');
        } else {
            this.service.navigate(['trigger', encodeURIComponent(item.trigger_id)]);
        }
    }
}
