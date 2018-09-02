
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../../shared/components/base.component';
import { IEngineZone } from '../../../../services/data/zone.service';

@Component({
    selector: 'zone-about',
    templateUrl: './zone-about.template.html',
    styleUrls: ['./zone-about.styles.scss']
})
export class ZoneAboutComponent extends BaseComponent {
    @Input() public item: IEngineZone;

}
