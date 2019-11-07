
import { Component, Input, OnChanges } from '@angular/core';
import { EngineTrigger } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'trigger-systems',
    templateUrl: './trigger-systems.template.html',
    styleUrls: ['./trigger-systems.styles.scss']
})
export class TriggerSystemsComponent extends BaseDirective implements OnChanges {
    @Input() public item: EngineTrigger;

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
        this.service.SystemTriggers.query({ trigger_id: this.item.id, offset } as any).then((list) => {
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
            this.service.navigate(['trigger', encodeURIComponent(item.trigger_id), 'triggers']);
        }
    }
}
