
import { Component, Input } from '@angular/core';
import { EngineZone } from '@acaprojects/ts-composer';

import { BaseComponent } from '../../../shared/globals/base.component';

@Component({
    selector: 'zone-about',
    templateUrl: './zone-about.template.html',
    styleUrls: ['./zone-about.styles.scss']
})
export class ZoneAboutComponent extends BaseComponent {
    @Input() public item: EngineZone;

}
