
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineZone } from '../../../services/data/zones.service';

@Component({
    selector: 'zone-systems',
    templateUrl: './zone-systems.template.html',
    styleUrls: ['./zone-systems.styles.scss']
})
export class ZoneSystemsComponent extends BaseComponent {
    @Input() public item: IEngineZone;
    
}
