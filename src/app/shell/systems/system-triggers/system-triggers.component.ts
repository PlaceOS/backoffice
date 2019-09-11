
import { Component, Input, OnChanges } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { ApplicationService } from '../../../services/app.service';
import { IEngineSystem } from '../../../services/data/systems.service';

@Component({
    selector: 'system-triggers',
    templateUrl: './system-triggers.template.html',
    styleUrls: ['./system-triggers.styles.scss']
})
export class SystemTriggersComponent extends BaseComponent implements OnChanges {
    @Input() public item: IEngineSystem;

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
        this.service.SystemTriggers.query({ sys_id: this.item.id, offset }).then((list) => {
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
            this.service.navigate(['triggers', encodeURIComponent(item.trigger_id), 'systems']);
        }
    }

    public addTrigger() {
        this.service.Systems.addTrigger(this.item)
            .then(() => this.load(), _ => null);
    }
}
