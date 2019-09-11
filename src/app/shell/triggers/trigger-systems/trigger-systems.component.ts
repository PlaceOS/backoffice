
import { Component, Input, OnChanges } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { ApplicationService } from '../../../services/app.service';
import { IEngineTrigger } from '../../../services/data/triggers.service';

@Component({
    selector: 'trigger-systems',
    templateUrl: './trigger-systems.template.html',
    styleUrls: ['./trigger-systems.styles.scss']
})
export class TriggerSystemsComponent extends BaseComponent implements OnChanges {
    @Input() public item: IEngineTrigger;

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
        this.service.SystemTriggers.query({ trigger_id: this.item.id, offset }).then((list) => {
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
