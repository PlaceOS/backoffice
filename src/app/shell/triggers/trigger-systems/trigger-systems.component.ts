
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';
import { IEngineTrigger } from '../../../services/data/triggers.service';

@Component({
    selector: 'trigger-systems',
    templateUrl: './trigger-systems.template.html',
    styleUrls: ['./trigger-systems.styles.scss']
})
export class TriggerSystemsComponent extends BaseComponent {
    @Input() public item: IEngineTrigger;

    public model: any = {};

    constructor(private service: AppService) {
        super();
    }
    
    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.service.Logs.query({ offset: 0, user_id: this.item.id }).then((list) => {
                this.model.logs = list || [];
            }, () => null)
        }
    }
}
