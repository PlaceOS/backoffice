
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineTrigger } from '../../../services/data/triggers.service';

@Component({
    selector: 'trigger-about',
    templateUrl: './trigger-about.template.html',
    styleUrls: ['./trigger-about.styles.scss']
})
export class TriggerAboutComponent extends BaseComponent {
    @Input() public item: IEngineTrigger;

}
