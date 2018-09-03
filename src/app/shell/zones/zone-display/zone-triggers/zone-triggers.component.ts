
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../../shared/components/base.component';
import { IEngineZone } from '../../../../services/data/zones.service';

@Component({
    selector: 'zone-triggers',
    templateUrl: './zone-triggers.template.html',
    styleUrls: ['./zone-triggers.styles.scss']
})
export class ZoneTriggersComponent extends BaseComponent {
    @Input() public item: IEngineZone;
    
}
